import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720AcceptEnvironmentAccountConnection = "AwsProton20200720.AcceptEnvironmentAccountConnection"
}
export declare class AcceptEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    acceptEnvironmentAccountConnectionInput: shared.AcceptEnvironmentAccountConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class AcceptEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptEnvironmentAccountConnectionOutput?: shared.AcceptEnvironmentAccountConnectionOutput;
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
