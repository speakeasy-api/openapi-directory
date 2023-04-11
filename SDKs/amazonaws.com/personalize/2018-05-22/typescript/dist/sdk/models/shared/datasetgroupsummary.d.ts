import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
/**
 * Provides a summary of the properties of a dataset group. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> API.
 */
export declare class DatasetGroupSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    domain?: DomainEnum;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
