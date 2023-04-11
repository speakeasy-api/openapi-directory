import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOrganizationalUnitsForParentXAmzTargetEnum {
    AWSOrganizationsV20161128ListOrganizationalUnitsForParent = "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent"
}
export declare class ListOrganizationalUnitsForParentRequest extends SpeakeasyBase {
    listOrganizationalUnitsForParentRequest: shared.ListOrganizationalUnitsForParentRequest;
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
    xAmzTarget: ListOrganizationalUnitsForParentXAmzTargetEnum;
}
export declare class ListOrganizationalUnitsForParentResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listOrganizationalUnitsForParentResponse?: shared.ListOrganizationalUnitsForParentResponse;
    /**
     * ParentNotFoundException
     */
    parentNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
