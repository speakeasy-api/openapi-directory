import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRepositorySyncStatusXAmzTargetEnum {
    AwsProton20200720GetRepositorySyncStatus = "AwsProton20200720.GetRepositorySyncStatus"
}
export declare class GetRepositorySyncStatusRequest extends SpeakeasyBase {
    getRepositorySyncStatusInput: shared.GetRepositorySyncStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRepositorySyncStatusXAmzTargetEnum;
}
export declare class GetRepositorySyncStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getRepositorySyncStatusOutput?: shared.GetRepositorySyncStatusOutput;
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
