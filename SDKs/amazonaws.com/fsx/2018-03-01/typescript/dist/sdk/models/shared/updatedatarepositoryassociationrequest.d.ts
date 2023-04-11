import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataRepositoryConfiguration } from "./s3datarepositoryconfiguration";
export declare class UpdateDataRepositoryAssociationRequest extends SpeakeasyBase {
    associationId: string;
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    importedFileChunkSize?: number;
    s3?: S3DataRepositoryConfiguration;
}
