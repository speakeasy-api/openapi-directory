import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of change card details request.
 */
export declare class ItvChangeCardDetailsRequest extends SpeakeasyBase {
    /**
     * The credit card token.
     */
    cardToken: string;
    /**
     * The ITV profile token.
     */
    profileToken: string;
}
