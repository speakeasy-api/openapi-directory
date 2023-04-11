import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRepositorySyncDefinitionsXAmzTargetEnum {
    AwsProton20200720ListRepositorySyncDefinitions = "AwsProton20200720.ListRepositorySyncDefinitions"
}
export declare class ListRepositorySyncDefinitionsRequest extends SpeakeasyBase {
    listRepositorySyncDefinitionsInput: shared.ListRepositorySyncDefinitionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRepositorySyncDefinitionsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListRepositorySyncDefinitionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listRepositorySyncDefinitionsOutput?: shared.ListRepositorySyncDefinitionsOutput;
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
