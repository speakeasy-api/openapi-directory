import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTransitionInfoLinks } from "./automatictransitioninfolinks";
export declare class AutomaticTransitionInfo extends SpeakeasyBase {
    /**
     * The marketplace account identifier in BeezUP. This account identifier is based on your api settings.
     */
    accountId: number;
    /**
     * BeezUP order status. Unified for all marketplaces.
     */
    beezUPOrderStatus: string;
    businessOperationType: string;
    enabled: boolean;
    links?: AutomaticTransitionInfoLinks;
    /**
     * In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.
     */
    marketplaceBusinessCode: string;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
    orderStatusTransitionId: number;
}
