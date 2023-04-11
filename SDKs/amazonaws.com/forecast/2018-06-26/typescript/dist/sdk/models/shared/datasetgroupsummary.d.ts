import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the dataset group properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.
 */
export declare class DatasetGroupSummary extends SpeakeasyBase {
    creationTime?: Date;
    datasetGroupArn?: string;
    datasetGroupName?: string;
    lastModificationTime?: Date;
}
