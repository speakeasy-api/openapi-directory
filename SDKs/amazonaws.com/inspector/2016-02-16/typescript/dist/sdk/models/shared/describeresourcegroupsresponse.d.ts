import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
import { ResourceGroup } from "./resourcegroup";
export declare class DescribeResourceGroupsResponse extends SpeakeasyBase {
    failedItems: Record<string, FailedItemDetails>;
    resourceGroups: ResourceGroup[];
}
