import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchActionEnum } from "./patchactionenum";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchSource } from "./patchsource";
/**
 * Defines the basic information about a patch baseline override.
 */
export declare class BaselineOverride extends SpeakeasyBase {
    /**
     * A set of rules defining the approval rules for a patch baseline.
     */
    approvalRules?: PatchRuleGroup;
    approvedPatches?: string[];
    approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;
    approvedPatchesEnableNonSecurity?: boolean;
    /**
     * A set of patch filters, typically used for approval rules.
     */
    globalFilters?: PatchFilterGroup;
    operatingSystem?: OperatingSystemEnum;
    rejectedPatches?: string[];
    rejectedPatchesAction?: PatchActionEnum;
    sources?: PatchSource[];
}
