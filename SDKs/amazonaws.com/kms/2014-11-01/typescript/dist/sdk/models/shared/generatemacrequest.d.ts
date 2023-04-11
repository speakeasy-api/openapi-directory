import { SpeakeasyBase } from "../../../internal/utils";
import { MacAlgorithmSpecEnum } from "./macalgorithmspecenum";
export declare class GenerateMacRequest extends SpeakeasyBase {
    grantTokens?: string[];
    keyId: string;
    macAlgorithm: MacAlgorithmSpecEnum;
    message: string;
}
