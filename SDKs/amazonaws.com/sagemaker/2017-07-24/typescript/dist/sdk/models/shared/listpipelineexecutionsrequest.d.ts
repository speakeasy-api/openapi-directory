import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { SortPipelineExecutionsByEnum } from "./sortpipelineexecutionsbyenum";
export declare class ListPipelineExecutionsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    pipelineName: string;
    sortBy?: SortPipelineExecutionsByEnum;
    sortOrder?: SortOrderEnum;
}
