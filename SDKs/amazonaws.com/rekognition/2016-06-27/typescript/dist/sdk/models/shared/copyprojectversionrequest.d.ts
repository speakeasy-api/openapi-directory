import { SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
export declare class CopyProjectVersionRequest extends SpeakeasyBase {
    destinationProjectArn: string;
    kmsKeyId?: string;
    outputConfig: OutputConfig;
    sourceProjectArn: string;
    sourceProjectVersionArn: string;
    tags?: Record<string, string>;
    versionName: string;
}
