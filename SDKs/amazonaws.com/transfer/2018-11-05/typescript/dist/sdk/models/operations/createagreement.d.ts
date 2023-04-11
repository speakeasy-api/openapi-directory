import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAgreementXAmzTargetEnum {
    TransferServiceCreateAgreement = "TransferService.CreateAgreement"
}
export declare class CreateAgreementRequest extends SpeakeasyBase {
    createAgreementRequest: shared.CreateAgreementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAgreementXAmzTargetEnum;
}
export declare class CreateAgreementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAgreementResponse?: shared.CreateAgreementResponse;
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
