/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ListDomainsAttributeNameEnum } from "./listdomainsattributenameenum";
import { OperatorEnum } from "./operatorenum";
import { Expose } from "class-transformer";

/**
 * Information for the filtering of a list of domains returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>.
 */
export class FilterCondition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name: ListDomainsAttributeNameEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Operator" })
  operator: OperatorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Values" })
  values: string[];
}
