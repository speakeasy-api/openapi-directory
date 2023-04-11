import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { ExplainabilityConfig } from "./explainabilityconfig";
import { Schema } from "./schema";
/**
 * Success
 */
export declare class DescribeExplainabilityResponse extends SpeakeasyBase {
    creationTime?: Date;
    /**
     * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
     */
    dataSource?: DataSource;
    enableVisualization?: boolean;
    endDateTime?: string;
    estimatedTimeRemainingInMinutes?: number;
    explainabilityArn?: string;
    explainabilityConfig?: ExplainabilityConfig;
    explainabilityName?: string;
    lastModificationTime?: Date;
    message?: string;
    resourceArn?: string;
    /**
     * Defines the fields of a dataset.
     */
    schema?: Schema;
    startDateTime?: string;
    status?: string;
}
