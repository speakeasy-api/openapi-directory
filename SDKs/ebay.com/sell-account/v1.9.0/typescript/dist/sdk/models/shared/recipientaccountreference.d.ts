import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <span class="tablenote"><b>Note</b>: This type is no longer applicable. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span>
 */
export declare class RecipientAccountReference extends SpeakeasyBase {
    /**
     * <span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span>
     */
    referenceId?: string;
    /**
     * <span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RecipientAccountReferenceTypeEnum'>eBay API documentation</a>
     */
    referenceType?: string;
}
