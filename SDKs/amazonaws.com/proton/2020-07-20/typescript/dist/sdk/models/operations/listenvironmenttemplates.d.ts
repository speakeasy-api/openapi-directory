import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEnvironmentTemplatesXAmzTargetEnum {
    AwsProton20200720ListEnvironmentTemplates = "AwsProton20200720.ListEnvironmentTemplates"
}
export declare class ListEnvironmentTemplatesRequest extends SpeakeasyBase {
    listEnvironmentTemplatesInput: shared.ListEnvironmentTemplatesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentTemplatesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListEnvironmentTemplatesResponse extends SpeakeasyBase {
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
    listEnvironmentTemplatesOutput?: shared.ListEnvironmentTemplatesOutput;
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
