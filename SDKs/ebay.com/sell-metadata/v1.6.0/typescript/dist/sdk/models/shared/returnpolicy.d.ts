import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyDetails } from "./returnpolicydetails";
export declare class ReturnPolicy extends SpeakeasyBase {
    /**
     * The category ID to which the return policies apply.
     */
    categoryId?: string;
    /**
     * A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes.
     */
    categoryTreeId?: string;
    /**
     * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
     */
    domestic?: ReturnPolicyDetails;
    /**
     * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
     */
    international?: ReturnPolicyDetails;
    /**
     * If set to <code>true</code>, this flag indicates that you must specify a return policy for items listed in the associated category.  <br><br>Note that not accepting returns (setting <b>returnsAcceptedEnabled</b> to <code>false</code>) is a valid return policy.
     */
    required?: boolean;
}
