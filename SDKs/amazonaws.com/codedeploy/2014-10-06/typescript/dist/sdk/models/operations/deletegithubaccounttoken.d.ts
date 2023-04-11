import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteGitHubAccountTokenXAmzTargetEnum {
    CodeDeploy20141006DeleteGitHubAccountToken = "CodeDeploy_20141006.DeleteGitHubAccountToken"
}
export declare class DeleteGitHubAccountTokenRequest extends SpeakeasyBase {
    deleteGitHubAccountTokenInput: shared.DeleteGitHubAccountTokenInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGitHubAccountTokenXAmzTargetEnum;
}
export declare class DeleteGitHubAccountTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteGitHubAccountTokenOutput?: shared.DeleteGitHubAccountTokenOutput;
    /**
     * GitHubAccountTokenDoesNotExistException
     */
    gitHubAccountTokenDoesNotExistException?: any;
    /**
     * GitHubAccountTokenNameRequiredException
     */
    gitHubAccountTokenNameRequiredException?: any;
    /**
     * InvalidGitHubAccountTokenNameException
     */
    invalidGitHubAccountTokenNameException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceValidationException
     */
    resourceValidationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
