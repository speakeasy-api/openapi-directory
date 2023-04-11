import { SpeakeasyBase } from "../../../internal/utils";
import { ListDomainsAttributeNameEnum } from "./listdomainsattributenameenum";
import { SortOrderEnum } from "./sortorderenum";
/**
 * Information for sorting a list of domains.
 */
export declare class SortCondition extends SpeakeasyBase {
    name: ListDomainsAttributeNameEnum;
    sortOrder: SortOrderEnum;
}
