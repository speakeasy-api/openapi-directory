import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomotivePartsCompatibilityPoliciesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetAutomotivePartsCompatibilityPoliciesRequest extends SpeakeasyBase {
    /**
     * This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree you want returned.  <br><br>When you specify a <b>categoryId</b> value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node.  <br><br>The parameter takes a list of <b>categoryId</b> values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 <code>categoryId</code> values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned.  <br><br><b>Example:</b> <code>filter=categoryIds:{100|101|102}</code>  <br><br>Note that you must URL-encode the parameter list, which results in the following filter for the above example: <br><br> &nbsp;&nbsp;<code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code>
     */
    filter?: string;
    /**
     * This path parameter specifies the eBay marketplace for which policy information is retrieved.  <br><br><b>Note:</b> Only the following eBay marketplaces support automotive parts compatibility: <ul> <li>EBAY_US</li> <li>EBAY_AU</li> <li>EBAY_CA</li> <li>EBAY_DE</li> <li>EBAY_ES</li> <li>EBAY_FR</li> <li>EBAY_GB</li> <li>EBAY_IT</li><ul>
     */
    marketplaceId: string;
}
export declare class GetAutomotivePartsCompatibilityPoliciesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    automotivePartsCompatibilityPolicyResponse?: shared.AutomotivePartsCompatibilityPolicyResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
