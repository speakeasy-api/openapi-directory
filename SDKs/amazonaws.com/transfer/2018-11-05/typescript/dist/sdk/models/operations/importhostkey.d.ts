import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportHostKeyXAmzTargetEnum {
    TransferServiceImportHostKey = "TransferService.ImportHostKey"
}
export declare class ImportHostKeyRequest extends SpeakeasyBase {
    importHostKeyRequest: shared.ImportHostKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportHostKeyXAmzTargetEnum;
}
export declare class ImportHostKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importHostKeyResponse?: shared.ImportHostKeyResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceExistsException
     */
    resourceExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
