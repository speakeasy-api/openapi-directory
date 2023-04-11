import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetLabelDescription } from "./datasetlabeldescription";
/**
 * Success
 */
export declare class ListDatasetLabelsResponse extends SpeakeasyBase {
    datasetLabelDescriptions?: DatasetLabelDescription[];
    nextToken?: string;
}
