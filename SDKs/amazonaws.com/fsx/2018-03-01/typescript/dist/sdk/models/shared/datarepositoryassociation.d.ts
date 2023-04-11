import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryFailureDetails } from "./datarepositoryfailuredetails";
import { DataRepositoryLifecycleEnum } from "./datarepositorylifecycleenum";
import { NFSDataRepositoryConfiguration } from "./nfsdatarepositoryconfiguration";
import { S3DataRepositoryConfiguration } from "./s3datarepositoryconfiguration";
import { Tag } from "./tag";
/**
 * <p>The configuration of a data repository association that links an Amazon FSx for Lustre file system to an Amazon S3 bucket or an Amazon File Cache resource to an Amazon S3 bucket or an NFS file system. The data repository association configuration object is returned in the response of the following operations:</p> <ul> <li> <p> <code>CreateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>UpdateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>DescribeDataRepositoryAssociations</code> </p> </li> </ul> <p>Data repository associations are supported only for an Amazon FSx for Lustre file system with the <code>Persistent_2</code> deployment type and for an Amazon File Cache resource.</p>
 */
export declare class DataRepositoryAssociation extends SpeakeasyBase {
    associationId?: string;
    batchImportMetaDataOnCreate?: boolean;
    /**
     * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
     */
    creationTime?: Date;
    dataRepositoryPath?: string;
    dataRepositorySubdirectories?: string[];
    /**
     * Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>.
     */
    failureDetails?: DataRepositoryFailureDetails;
    fileCacheId?: string;
    fileCachePath?: string;
    /**
     * The globally unique ID of the file system, assigned by Amazon FSx.
     */
    fileSystemId?: string;
    fileSystemPath?: string;
    importedFileChunkSize?: number;
    lifecycle?: DataRepositoryLifecycleEnum;
    nfs?: NFSDataRepositoryConfiguration;
    /**
     * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
     */
    resourceARN?: string;
    s3?: S3DataRepositoryConfiguration;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
}
