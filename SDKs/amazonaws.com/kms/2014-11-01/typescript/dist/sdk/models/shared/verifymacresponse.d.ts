import { SpeakeasyBase } from "../../../internal/utils";
import { MacAlgorithmSpecEnum } from "./macalgorithmspecenum";
/**
 * Success
 */
export declare class VerifyMacResponse extends SpeakeasyBase {
    keyId?: string;
    macAlgorithm?: MacAlgorithmSpecEnum;
    macValid?: boolean;
}
