import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSystemTemplateRevisionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetSystemTemplateRevisions = "IotThingsGraphFrontEndService.GetSystemTemplateRevisions"
}
export declare class GetSystemTemplateRevisionsRequest extends SpeakeasyBase {
    getSystemTemplateRevisionsRequest: shared.GetSystemTemplateRevisionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSystemTemplateRevisionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetSystemTemplateRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSystemTemplateRevisionsResponse?: shared.GetSystemTemplateRevisionsResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
}
