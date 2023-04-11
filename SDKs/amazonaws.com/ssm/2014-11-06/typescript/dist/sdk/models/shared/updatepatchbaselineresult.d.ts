import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchActionEnum } from "./patchactionenum";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchSource } from "./patchsource";
/**
 * Success
 */
export declare class UpdatePatchBaselineResult extends SpeakeasyBase {
    approvalRules?: PatchRuleGroup;
    approvedPatches?: string[];
    approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;
    approvedPatchesEnableNonSecurity?: boolean;
    baselineId?: string;
    createdDate?: Date;
    description?: string;
    globalFilters?: PatchFilterGroup;
    modifiedDate?: Date;
    name?: string;
    operatingSystem?: OperatingSystemEnum;
    rejectedPatches?: string[];
    rejectedPatchesAction?: PatchActionEnum;
    sources?: PatchSource[];
}
