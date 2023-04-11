import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAccessXAmzTargetEnum {
    TransferServiceDeleteAccess = "TransferService.DeleteAccess"
}
export declare class DeleteAccessRequest extends SpeakeasyBase {
    deleteAccessRequest: shared.DeleteAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccessXAmzTargetEnum;
}
export declare class DeleteAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
}
