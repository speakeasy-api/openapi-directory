import { SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";
/**
 * The response from Amazon Cognito to a request to reset a password.
 */
export declare class ForgotPasswordResponse extends SpeakeasyBase {
    codeDeliveryDetails?: CodeDeliveryDetailsType;
}
