import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteServiceXAmzTargetEnum {
    AppRunnerDeleteService = "AppRunner.DeleteService"
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    deleteServiceRequest: shared.DeleteServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceXAmzTargetEnum;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteServiceResponse?: shared.DeleteServiceResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
