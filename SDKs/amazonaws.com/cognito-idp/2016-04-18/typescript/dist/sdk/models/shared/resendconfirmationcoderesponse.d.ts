import { SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";
/**
 * The response from the server when Amazon Cognito makes the request to resend a confirmation code.
 */
export declare class ResendConfirmationCodeResponse extends SpeakeasyBase {
    codeDeliveryDetails?: CodeDeliveryDetailsType;
}
