import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentAttribute } from "./documentattribute";
/**
 * <p>Provides filtering the query results based on document attributes or metadata fields.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualsTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> <p>If you use more than 10 attribute filters in a given list for <code>AndAllFilters</code> or <code>OrAllFilters</code>, you receive a <code>ValidationException</code> with the message "<code>AttributeFilter</code> cannot have a length of more than 10".</p>
 */
export declare class AttributeFilter extends SpeakeasyBase {
    andAllFilters?: AttributeFilter[];
    containsAll?: DocumentAttribute;
    containsAny?: DocumentAttribute;
    equalsTo?: DocumentAttribute;
    greaterThan?: DocumentAttribute;
    greaterThanOrEquals?: DocumentAttribute;
    lessThan?: DocumentAttribute;
    lessThanOrEquals?: DocumentAttribute;
    notFilter?: AttributeFilter;
    orAllFilters?: AttributeFilter[];
}
