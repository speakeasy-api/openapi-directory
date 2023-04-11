import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * OK - the request has succeeded.
 */
export declare class GetOnboardingUrlResponse extends SpeakeasyBase {
    /**
     * Information about any invalid fields.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 30 seconds and can only be used once.
     */
    redirectUrl?: string;
    /**
     * The result code.
     */
    resultCode?: string;
}
