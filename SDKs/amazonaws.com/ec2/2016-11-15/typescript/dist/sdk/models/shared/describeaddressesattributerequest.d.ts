import { SpeakeasyBase } from "../../../internal/utils";
import { AddressAttributeNameEnum } from "./addressattributenameenum";
export declare class DescribeAddressesAttributeRequest extends SpeakeasyBase {
    allocationIds?: string[];
    attribute?: AddressAttributeNameEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
}
