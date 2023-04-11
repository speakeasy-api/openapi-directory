import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Moves results to a Azure Blob Store. Typcially used for HHS Protect interfaces.
 */
export declare class BlobStoreTransport extends SpeakeasyBase {
    /**
     * This name of the Azure container
     */
    containerName: string;
    /**
     * This looks for an env var with this name. env var value is the connection string
     */
    storageName: string;
    /**
     * The discriminator
     */
    type: string;
}
