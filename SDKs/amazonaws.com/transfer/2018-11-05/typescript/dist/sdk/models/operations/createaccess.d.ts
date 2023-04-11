import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAccessXAmzTargetEnum {
    TransferServiceCreateAccess = "TransferService.CreateAccess"
}
export declare class CreateAccessRequest extends SpeakeasyBase {
    createAccessRequest: shared.CreateAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAccessXAmzTargetEnum;
}
export declare class CreateAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAccessResponse?: shared.CreateAccessResponse;
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
}
