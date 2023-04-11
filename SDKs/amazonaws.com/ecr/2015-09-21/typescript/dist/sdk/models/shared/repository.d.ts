import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";
/**
 * An object representing a repository.
 */
export declare class Repository extends SpeakeasyBase {
    createdAt?: Date;
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     * The image scanning configuration for a repository.
     */
    imageScanningConfiguration?: ImageScanningConfiguration;
    imageTagMutability?: ImageTagMutabilityEnum;
    registryId?: string;
    repositoryArn?: string;
    repositoryName?: string;
    repositoryUri?: string;
}
