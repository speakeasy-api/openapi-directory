import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFlowTemplateRevisionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetFlowTemplateRevisions = "IotThingsGraphFrontEndService.GetFlowTemplateRevisions"
}
export declare class GetFlowTemplateRevisionsRequest extends SpeakeasyBase {
    getFlowTemplateRevisionsRequest: shared.GetFlowTemplateRevisionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFlowTemplateRevisionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetFlowTemplateRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getFlowTemplateRevisionsResponse?: shared.GetFlowTemplateRevisionsResponse;
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
