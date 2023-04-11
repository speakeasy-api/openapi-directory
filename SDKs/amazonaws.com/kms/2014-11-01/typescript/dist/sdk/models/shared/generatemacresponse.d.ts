import { SpeakeasyBase } from "../../../internal/utils";
import { MacAlgorithmSpecEnum } from "./macalgorithmspecenum";
/**
 * Success
 */
export declare class GenerateMacResponse extends SpeakeasyBase {
    keyId?: string;
    mac?: string;
    macAlgorithm?: MacAlgorithmSpecEnum;
}
