import { SpeakeasyBase } from "../../../internal/utils";
import { StorageClassEnum } from "./storageclassenum";
/**
 * Success
 */
export declare class PutObjectResponse extends SpeakeasyBase {
    contentSha256?: string;
    eTag?: string;
    storageClass?: StorageClassEnum;
}
