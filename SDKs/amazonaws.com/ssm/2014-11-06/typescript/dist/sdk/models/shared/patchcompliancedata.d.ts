import { SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceDataStateEnum } from "./patchcompliancedatastateenum";
/**
 * Information about the state of a patch on a particular managed node as it relates to the patch baseline used to patch the node.
 */
export declare class PatchComplianceData extends SpeakeasyBase {
    cveIds?: string;
    classification: string;
    installedTime: Date;
    kbId: string;
    severity: string;
    state: PatchComplianceDataStateEnum;
    title: string;
}
