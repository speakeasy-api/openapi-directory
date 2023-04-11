import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
/**
 * Success
 */
export declare class DescribeTypeRegistrationOutput extends SpeakeasyBase {
    description?: string;
    progressStatus?: RegistrationStatusEnum;
    typeArn?: string;
    typeVersionArn?: string;
}
