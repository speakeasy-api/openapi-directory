import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720DeleteEnvironmentAccountConnection = "AwsProton20200720.DeleteEnvironmentAccountConnection"
}
export declare class DeleteEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    deleteEnvironmentAccountConnectionInput: shared.DeleteEnvironmentAccountConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class DeleteEnvironmentAccountConnectionResponse extends SpeakeasyBase {
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
    deleteEnvironmentAccountConnectionOutput?: shared.DeleteEnvironmentAccountConnectionOutput;
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
