import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006DeleteSourceCredentials = "CodeBuild_20161006.DeleteSourceCredentials"
}
export declare class DeleteSourceCredentialsRequest extends SpeakeasyBase {
    deleteSourceCredentialsInput: shared.DeleteSourceCredentialsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSourceCredentialsXAmzTargetEnum;
}
export declare class DeleteSourceCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSourceCredentialsOutput?: shared.DeleteSourceCredentialsOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
