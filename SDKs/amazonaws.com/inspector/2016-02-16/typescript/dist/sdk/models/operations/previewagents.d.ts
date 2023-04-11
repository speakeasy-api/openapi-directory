import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PreviewAgentsXAmzTargetEnum {
    InspectorServicePreviewAgents = "InspectorService.PreviewAgents"
}
export declare class PreviewAgentsRequest extends SpeakeasyBase {
    previewAgentsRequest: shared.PreviewAgentsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PreviewAgentsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class PreviewAgentsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidCrossAccountRoleException
     */
    invalidCrossAccountRoleException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    /**
     * Success
     */
    previewAgentsResponse?: shared.PreviewAgentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
