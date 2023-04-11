import { SpeakeasyBase } from "../../../internal/utils";
import { AlertDetails } from "./alertdetails";
/**
 * A type that contains the alert message fields for the ad.
 */
export declare class Alert extends SpeakeasyBase {
    /**
     * The type of alert message. For example, an invalid bid percentage. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AlertTypeEnum'>eBay API documentation</a>
     */
    alertType?: string;
    /**
     * A description of the alert including dimensions and aspects.
     */
    details?: AlertDetails[];
}
