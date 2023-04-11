import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportSshPublicKeyXAmzTargetEnum {
    TransferServiceImportSshPublicKey = "TransferService.ImportSshPublicKey"
}
export declare class ImportSshPublicKeyRequest extends SpeakeasyBase {
    importSshPublicKeyRequest: shared.ImportSshPublicKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportSshPublicKeyXAmzTargetEnum;
}
export declare class ImportSshPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importSshPublicKeyResponse?: shared.ImportSshPublicKeyResponse;
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
