import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { ScriptDetails } from "./scriptdetails";
export declare class CreateAppBlockRequest extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name: string;
    setupScriptDetails: ScriptDetails;
    sourceS3Location: S3Location;
    tags?: Record<string, string>;
}
