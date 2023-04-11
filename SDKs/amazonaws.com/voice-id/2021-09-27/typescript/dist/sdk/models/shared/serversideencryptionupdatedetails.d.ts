import { SpeakeasyBase } from "../../../internal/utils";
import { ServerSideEncryptionUpdateStatusEnum } from "./serversideencryptionupdatestatusenum";
/**
 * Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain’s data can only be accessed using the new KMS key.
 */
export declare class ServerSideEncryptionUpdateDetails extends SpeakeasyBase {
    message?: string;
    oldKmsKeyId?: string;
    updateStatus?: ServerSideEncryptionUpdateStatusEnum;
}
