import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListDatasetImportJobsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
}
