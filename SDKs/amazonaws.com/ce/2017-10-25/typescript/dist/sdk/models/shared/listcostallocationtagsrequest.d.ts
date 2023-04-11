import { SpeakeasyBase } from "../../../internal/utils";
import { CostAllocationTagStatusEnum } from "./costallocationtagstatusenum";
import { CostAllocationTagTypeEnum } from "./costallocationtagtypeenum";
export declare class ListCostAllocationTagsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    status?: CostAllocationTagStatusEnum;
    tagKeys?: string[];
    type?: CostAllocationTagTypeEnum;
}
