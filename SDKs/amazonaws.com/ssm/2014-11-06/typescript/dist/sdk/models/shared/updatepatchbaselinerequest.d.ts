import { SpeakeasyBase } from "../../../internal/utils";
import { PatchActionEnum } from "./patchactionenum";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchSource } from "./patchsource";
export declare class UpdatePatchBaselineRequest extends SpeakeasyBase {
    approvalRules?: PatchRuleGroup;
    approvedPatches?: string[];
    approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;
    approvedPatchesEnableNonSecurity?: boolean;
    baselineId: string;
    description?: string;
    globalFilters?: PatchFilterGroup;
    name?: string;
    rejectedPatches?: string[];
    rejectedPatchesAction?: PatchActionEnum;
    replace?: boolean;
    sources?: PatchSource[];
}
