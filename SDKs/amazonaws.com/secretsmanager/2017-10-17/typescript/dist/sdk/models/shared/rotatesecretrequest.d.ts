import { SpeakeasyBase } from "../../../internal/utils";
import { RotationRulesType } from "./rotationrulestype";
export declare class RotateSecretRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    rotateImmediately?: boolean;
    rotationLambdaARN?: string;
    rotationRules?: RotationRulesType;
    secretId: string;
}
