import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetFilter } from "./datasetfilter";
export declare class ListDatasetsRequest extends SpeakeasyBase {
    filter?: DatasetFilter;
    flywheelArn?: string;
    maxResults?: number;
    nextToken?: string;
}
