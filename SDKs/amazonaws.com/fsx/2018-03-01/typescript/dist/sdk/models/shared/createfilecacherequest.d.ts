import { SpeakeasyBase } from "../../../internal/utils";
import { CreateFileCacheLustreConfiguration } from "./createfilecachelustreconfiguration";
import { FileCacheDataRepositoryAssociation } from "./filecachedatarepositoryassociation";
import { FileCacheTypeEnum } from "./filecachetypeenum";
import { Tag } from "./tag";
export declare class CreateFileCacheRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    copyTagsToDataRepositoryAssociations?: boolean;
    dataRepositoryAssociations?: FileCacheDataRepositoryAssociation[];
    fileCacheType: FileCacheTypeEnum;
    fileCacheTypeVersion: string;
    kmsKeyId?: string;
    lustreConfiguration?: CreateFileCacheLustreConfiguration;
    securityGroupIds?: string[];
    storageCapacity: number;
    /**
     * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.
     */
    subnetIds: string[];
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
}
