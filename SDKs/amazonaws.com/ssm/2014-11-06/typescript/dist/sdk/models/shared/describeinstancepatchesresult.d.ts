import { SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceData } from "./patchcompliancedata";
/**
 * Success
 */
export declare class DescribeInstancePatchesResult extends SpeakeasyBase {
    nextToken?: string;
    patches?: PatchComplianceData[];
}
