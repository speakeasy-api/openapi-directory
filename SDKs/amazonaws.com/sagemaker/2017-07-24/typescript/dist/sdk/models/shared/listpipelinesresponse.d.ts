import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineSummary } from "./pipelinesummary";
/**
 * Success
 */
export declare class ListPipelinesResponse extends SpeakeasyBase {
    nextToken?: string;
    pipelineSummaries?: PipelineSummary[];
}
