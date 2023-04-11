import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * Describes the details of the script.
 */
export declare class ScriptDetails extends SpeakeasyBase {
    executableParameters?: string;
    executablePath: string;
    scriptS3Location: S3Location;
    timeoutInSeconds: number;
}
