import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentAttributeValue } from "./documentattributevalue";
import { FacetResult } from "./facetresult";
/**
 * Provides the count of documents that match a particular attribute when doing a faceted search.
 */
export declare class DocumentAttributeValueCountPair extends SpeakeasyBase {
    count?: number;
    documentAttributeValue?: DocumentAttributeValue;
    facetResults?: FacetResult[];
}
