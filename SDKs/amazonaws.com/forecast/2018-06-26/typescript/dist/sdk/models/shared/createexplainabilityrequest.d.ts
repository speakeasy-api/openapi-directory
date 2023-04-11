import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { ExplainabilityConfig } from "./explainabilityconfig";
import { Schema } from "./schema";
import { Tag } from "./tag";
export declare class CreateExplainabilityRequest extends SpeakeasyBase {
    /**
     * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
     */
    dataSource?: DataSource;
    enableVisualization?: boolean;
    endDateTime?: string;
    explainabilityConfig: ExplainabilityConfig;
    explainabilityName: string;
    resourceArn: string;
    /**
     * Defines the fields of a dataset.
     */
    schema?: Schema;
    startDateTime?: string;
    tags?: Tag[];
}
