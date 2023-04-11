import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisconnectCustomKeyStoreXAmzTargetEnum {
    TrentServiceDisconnectCustomKeyStore = "TrentService.DisconnectCustomKeyStore"
}
export declare class DisconnectCustomKeyStoreRequest extends SpeakeasyBase {
    disconnectCustomKeyStoreRequest: shared.DisconnectCustomKeyStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisconnectCustomKeyStoreXAmzTargetEnum;
}
export declare class DisconnectCustomKeyStoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomKeyStoreInvalidStateException
     */
    customKeyStoreInvalidStateException?: any;
    /**
     * CustomKeyStoreNotFoundException
     */
    customKeyStoreNotFoundException?: any;
    /**
     * Success
     */
    disconnectCustomKeyStoreResponse?: Record<string, any>;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
