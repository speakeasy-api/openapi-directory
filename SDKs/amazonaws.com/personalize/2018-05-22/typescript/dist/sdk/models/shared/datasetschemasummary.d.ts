import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
/**
 * Provides a summary of the properties of a dataset schema. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> API.
 */
export declare class DatasetSchemaSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    domain?: DomainEnum;
    lastUpdatedDateTime?: Date;
    name?: string;
    schemaArn?: string;
}
