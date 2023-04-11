import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a dataset. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> API.
 */
export declare class DatasetSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetArn?: string;
    datasetType?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
