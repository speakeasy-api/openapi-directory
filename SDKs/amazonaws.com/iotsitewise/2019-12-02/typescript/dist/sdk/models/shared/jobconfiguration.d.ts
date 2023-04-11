import { SpeakeasyBase } from "../../../internal/utils";
import { FileFormat } from "./fileformat";
/**
 * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
 */
export declare class JobConfiguration extends SpeakeasyBase {
    fileFormat: FileFormat;
}
