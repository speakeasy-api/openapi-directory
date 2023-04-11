import { SpeakeasyBase } from "../../../internal/utils";
import { AthenaResultCompressionTypeEnum } from "./athenaresultcompressiontypeenum";
import { AthenaResultFormatEnum } from "./athenaresultformatenum";
/**
 * Configuration for Athena Dataset Definition input.
 */
export declare class AthenaDatasetDefinition extends SpeakeasyBase {
    /**
     * The name of the data catalog used in Athena query execution.
     */
    catalog: string;
    /**
     * The name of the database used in the Athena query execution.
     */
    database: string;
    kmsKeyId?: string;
    /**
     * The compression used for Athena query results.
     */
    outputCompression?: AthenaResultCompressionTypeEnum;
    /**
     * The data storage format for Athena query results.
     */
    outputFormat: AthenaResultFormatEnum;
    outputS3Uri: string;
    /**
     * The SQL query statements, to be executed.
     */
    queryString: string;
    /**
     * The name of the workgroup in which the Athena query is being started.
     */
    workGroup?: string;
}
