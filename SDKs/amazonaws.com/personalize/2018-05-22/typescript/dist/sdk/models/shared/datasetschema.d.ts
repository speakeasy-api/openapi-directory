import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
/**
 * Describes the schema for a dataset. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
 */
export declare class DatasetSchema extends SpeakeasyBase {
    creationDateTime?: Date;
    domain?: DomainEnum;
    lastUpdatedDateTime?: Date;
    name?: string;
    schema?: string;
    schemaArn?: string;
}
