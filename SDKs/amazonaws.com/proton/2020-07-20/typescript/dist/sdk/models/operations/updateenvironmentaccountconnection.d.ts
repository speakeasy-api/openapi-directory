import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentAccountConnection = "AwsProton20200720.UpdateEnvironmentAccountConnection"
}
export declare class UpdateEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    updateEnvironmentAccountConnectionInput: shared.UpdateEnvironmentAccountConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class UpdateEnvironmentAccountConnectionResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateEnvironmentAccountConnectionOutput?: shared.UpdateEnvironmentAccountConnectionOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
