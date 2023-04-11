import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLabelGroupsXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceListLabelGroups = "AWSLookoutEquipmentFrontendService.ListLabelGroups"
}
export declare class ListLabelGroupsRequest extends SpeakeasyBase {
    listLabelGroupsRequest: shared.ListLabelGroupsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLabelGroupsXAmzTargetEnum;
}
export declare class ListLabelGroupsResponse extends SpeakeasyBase {
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
    listLabelGroupsResponse?: shared.ListLabelGroupsResponse;
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
