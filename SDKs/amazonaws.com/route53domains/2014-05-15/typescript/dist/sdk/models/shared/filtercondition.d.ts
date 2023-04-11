import { SpeakeasyBase } from "../../../internal/utils";
import { ListDomainsAttributeNameEnum } from "./listdomainsattributenameenum";
import { OperatorEnum } from "./operatorenum";
/**
 * Information for the filtering of a list of domains returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>.
 */
export declare class FilterCondition extends SpeakeasyBase {
    name: ListDomainsAttributeNameEnum;
    operator: OperatorEnum;
    values: string[];
}
