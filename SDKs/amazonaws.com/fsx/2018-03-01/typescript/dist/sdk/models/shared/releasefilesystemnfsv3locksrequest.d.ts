import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReleaseFileSystemNfsV3LocksRequest extends SpeakeasyBase {
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    /**
     * The globally unique ID of the file system, assigned by Amazon FSx.
     */
    fileSystemId: string;
}
