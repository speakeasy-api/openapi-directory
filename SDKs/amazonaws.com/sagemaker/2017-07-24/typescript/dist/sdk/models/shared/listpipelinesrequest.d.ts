import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { SortPipelinesByEnum } from "./sortpipelinesbyenum";
export declare class ListPipelinesRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    pipelineNamePrefix?: string;
    sortBy?: SortPipelinesByEnum;
    sortOrder?: SortOrderEnum;
}
