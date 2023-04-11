import { SpeakeasyBase } from "../../../internal/utils";
import { MacAlgorithmSpecEnum } from "./macalgorithmspecenum";
export declare class VerifyMacRequest extends SpeakeasyBase {
    grantTokens?: string[];
    keyId: string;
    mac: string;
    macAlgorithm: MacAlgorithmSpecEnum;
    message: string;
}
