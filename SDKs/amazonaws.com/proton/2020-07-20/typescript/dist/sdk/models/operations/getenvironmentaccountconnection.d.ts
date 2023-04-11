import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720GetEnvironmentAccountConnection = "AwsProton20200720.GetEnvironmentAccountConnection"
}
export declare class GetEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    getEnvironmentAccountConnectionInput: shared.GetEnvironmentAccountConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class GetEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEnvironmentAccountConnectionOutput?: shared.GetEnvironmentAccountConnectionOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
