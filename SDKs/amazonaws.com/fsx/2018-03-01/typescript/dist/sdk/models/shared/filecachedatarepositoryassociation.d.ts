import { SpeakeasyBase } from "../../../internal/utils";
import { FileCacheNFSConfiguration } from "./filecachenfsconfiguration";
/**
 * <p>The configuration for a data repository association (DRA) to be created during the Amazon File Cache resource creation. The DRA links the cache to either an Amazon S3 bucket or prefix, or a Network File System (NFS) data repository that supports the NFSv3 protocol.</p> <p>The DRA does not support automatic import or automatic export.</p>
 */
export declare class FileCacheDataRepositoryAssociation extends SpeakeasyBase {
    dataRepositoryPath: string;
    dataRepositorySubdirectories?: string[];
    fileCachePath: string;
    nfs?: FileCacheNFSConfiguration;
}
