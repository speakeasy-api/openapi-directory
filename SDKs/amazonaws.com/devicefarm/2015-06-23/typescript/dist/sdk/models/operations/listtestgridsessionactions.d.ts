import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTestGridSessionActionsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessionActions = "DeviceFarm_20150623.ListTestGridSessionActions"
}
export declare class ListTestGridSessionActionsRequest extends SpeakeasyBase {
    listTestGridSessionActionsRequest: shared.ListTestGridSessionActionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridSessionActionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResult?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTestGridSessionActionsResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * Success
     */
    listTestGridSessionActionsResult?: shared.ListTestGridSessionActionsResult;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
