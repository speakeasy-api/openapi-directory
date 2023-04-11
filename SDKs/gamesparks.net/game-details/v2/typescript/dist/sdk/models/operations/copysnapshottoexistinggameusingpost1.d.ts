import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CopySnapshotToExistingGameUsingPost1Request extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * includeBinaries
     */
    includeBinaries?: boolean;
    /**
     * includeCollaborators
     */
    includeCollaborators?: boolean;
    /**
     * includeGameConfig
     */
    includeGameConfig?: boolean;
    /**
     * includeMetadata
     */
    includeMetadata?: boolean;
    /**
     * snapshotId
     */
    snapshotId: string;
    /**
     * targetApiKey
     */
    targetApiKey: string;
}
export declare class CopySnapshotToExistingGameUsingPost1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * OK
     */
    snapshotCreationSuccessModel?: shared.SnapshotCreationSuccessModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
