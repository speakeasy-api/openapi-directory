import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDatasetEntriesRequest extends SpeakeasyBase {
    containsLabels?: string[];
    datasetArn: string;
    hasErrors?: boolean;
    labeled?: boolean;
    maxResults?: number;
    nextToken?: string;
    sourceRefContains?: string;
}
