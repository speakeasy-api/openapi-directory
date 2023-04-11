import { SpeakeasyBase } from "../../../internal/utils";
import { S3ReferenceDataSource } from "./s3referencedatasource";
import { SourceSchema } from "./sourceschema";
/**
 * Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
 */
export declare class ReferenceDataSource extends SpeakeasyBase {
    referenceSchema: SourceSchema;
    s3ReferenceDataSource?: S3ReferenceDataSource;
    tableName: string;
}
