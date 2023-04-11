import { SpeakeasyBase } from "../../../internal/utils";
import { ResultFormatEnum } from "./resultformatenum";
/**
 * Contains the configuration to write the query results to S3.
 */
export declare class ProtectedQueryS3OutputConfiguration extends SpeakeasyBase {
    bucket: string;
    keyPrefix?: string;
    resultFormat: ResultFormatEnum;
}
