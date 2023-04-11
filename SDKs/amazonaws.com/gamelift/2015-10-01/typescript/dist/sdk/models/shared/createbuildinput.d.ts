import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { S3Location } from "./s3location";
import { Tag } from "./tag";
export declare class CreateBuildInput extends SpeakeasyBase {
    name?: string;
    operatingSystem?: OperatingSystemEnum;
    serverSDKVersion?: string;
    storageLocation?: S3Location;
    tags?: Tag[];
    version?: string;
}
