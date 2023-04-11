import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCustomKeyStoreXAmzTargetEnum {
    TrentServiceDeleteCustomKeyStore = "TrentService.DeleteCustomKeyStore"
}
export declare class DeleteCustomKeyStoreRequest extends SpeakeasyBase {
    deleteCustomKeyStoreRequest: shared.DeleteCustomKeyStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomKeyStoreXAmzTargetEnum;
}
export declare class DeleteCustomKeyStoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomKeyStoreHasCMKsException
     */
    customKeyStoreHasCMKsException?: any;
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
    deleteCustomKeyStoreResponse?: Record<string, any>;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
