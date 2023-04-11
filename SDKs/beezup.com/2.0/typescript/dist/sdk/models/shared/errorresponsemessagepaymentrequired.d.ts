import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ErrorResponseMessagePaymentRequiredLinks } from "./errorresponsemessagepaymentrequiredlinks";
/**
 * The maximum amount of store has been reached. Please upgrade your contract.
 */
export declare class ErrorResponseMessagePaymentRequired extends SpeakeasyBase {
    errors: BeezUPCommonUserErrorMessage[];
    links: ErrorResponseMessagePaymentRequiredLinks;
}
