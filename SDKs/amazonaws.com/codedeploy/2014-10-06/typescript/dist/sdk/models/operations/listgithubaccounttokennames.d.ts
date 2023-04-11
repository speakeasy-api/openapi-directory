import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGitHubAccountTokenNamesXAmzTargetEnum {
    CodeDeploy20141006ListGitHubAccountTokenNames = "CodeDeploy_20141006.ListGitHubAccountTokenNames"
}
export declare class ListGitHubAccountTokenNamesRequest extends SpeakeasyBase {
    listGitHubAccountTokenNamesInput: shared.ListGitHubAccountTokenNamesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGitHubAccountTokenNamesXAmzTargetEnum;
}
export declare class ListGitHubAccountTokenNamesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listGitHubAccountTokenNamesOutput?: shared.ListGitHubAccountTokenNamesOutput;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceValidationException
     */
    resourceValidationException?: any;
}
