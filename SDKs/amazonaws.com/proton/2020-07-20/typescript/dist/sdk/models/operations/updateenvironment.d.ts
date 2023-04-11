import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEnvironmentXAmzTargetEnum {
    AwsProton20200720UpdateEnvironment = "AwsProton20200720.UpdateEnvironment"
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    updateEnvironmentInput: shared.UpdateEnvironmentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentXAmzTargetEnum;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
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
    updateEnvironmentOutput?: shared.UpdateEnvironmentOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
