import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataRepositoryConfiguration } from "./s3datarepositoryconfiguration";
import { Tag } from "./tag";
export declare class CreateDataRepositoryAssociationRequest extends SpeakeasyBase {
    batchImportMetaDataOnCreate?: boolean;
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    dataRepositoryPath: string;
    /**
     * The globally unique ID of the file system, assigned by Amazon FSx.
     */
    fileSystemId: string;
    fileSystemPath?: string;
    importedFileChunkSize?: number;
    s3?: S3DataRepositoryConfiguration;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
}
