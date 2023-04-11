import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationAttributeEnum } from "./applicationattributeenum";
import { S3Location } from "./s3location";
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    appBlockArn?: string;
    attributesToDelete?: ApplicationAttributeEnum[];
    description?: string;
    displayName?: string;
    iconS3Location?: S3Location;
    launchParameters?: string;
    launchPath?: string;
    name: string;
    workingDirectory?: string;
}
