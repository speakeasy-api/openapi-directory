import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RejectEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720RejectEnvironmentAccountConnection = "AwsProton20200720.RejectEnvironmentAccountConnection"
}
export declare class RejectEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    rejectEnvironmentAccountConnectionInput: shared.RejectEnvironmentAccountConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class RejectEnvironmentAccountConnectionResponse extends SpeakeasyBase {
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
     * Success
     */
    rejectEnvironmentAccountConnectionOutput?: shared.RejectEnvironmentAccountConnectionOutput;
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
