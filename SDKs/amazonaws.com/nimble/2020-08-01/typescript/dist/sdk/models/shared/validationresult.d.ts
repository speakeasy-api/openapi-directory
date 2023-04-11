import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileValidationStateEnum } from "./launchprofilevalidationstateenum";
import { LaunchProfileValidationStatusCodeEnum } from "./launchprofilevalidationstatuscodeenum";
import { LaunchProfileValidationTypeEnum } from "./launchprofilevalidationtypeenum";
/**
 * The launch profile validation result.
 */
export declare class ValidationResult extends SpeakeasyBase {
    state: LaunchProfileValidationStateEnum;
    statusCode: LaunchProfileValidationStatusCodeEnum;
    statusMessage: string;
    type: LaunchProfileValidationTypeEnum;
}
