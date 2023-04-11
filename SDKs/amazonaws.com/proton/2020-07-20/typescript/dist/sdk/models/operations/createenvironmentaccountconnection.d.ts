import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720CreateEnvironmentAccountConnection = "AwsProton20200720.CreateEnvironmentAccountConnection"
}
export declare class CreateEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    createEnvironmentAccountConnectionInput: shared.CreateEnvironmentAccountConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class CreateEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createEnvironmentAccountConnectionOutput?: shared.CreateEnvironmentAccountConnectionOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
