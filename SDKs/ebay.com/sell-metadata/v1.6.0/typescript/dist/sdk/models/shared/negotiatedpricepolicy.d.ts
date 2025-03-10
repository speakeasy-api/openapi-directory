import { SpeakeasyBase } from "../../../internal/utils";
export declare class NegotiatedPricePolicy extends SpeakeasyBase {
    /**
     * This flag denotes whether or not the category supports the setting of a price at which best offers are automatically accepted. If set to <code>true</code>, the category does support the setting of an automatic price for best-offers.
     */
    bestOfferAutoAcceptEnabled?: boolean;
    /**
     * This flag denotes whether or not the category supports the setting of an auto-decline price for best offers. If set to <code>true</code>, the category does support the setting of an automatic-decline price for best-offers.
     */
    bestOfferAutoDeclineEnabled?: boolean;
    /**
     * This flag denotes whether or not the category supports the setting for an automatic counter-offer on best offers. If set to <code>true</code>, the category does support the setting of an automatic counter-offer price for best-offers.
     */
    bestOfferCounterEnabled?: boolean;
    /**
     * The category ID to which the negotiated-price policies apply.
     */
    categoryId?: string;
    /**
     * A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.
     */
    categoryTreeId?: string;
}
