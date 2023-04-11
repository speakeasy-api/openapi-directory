import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetProperties } from "./datasetproperties";
/**
 * Success
 */
export declare class ListDatasetsResponse extends SpeakeasyBase {
    datasetPropertiesList?: DatasetProperties[];
    nextToken?: string;
}
