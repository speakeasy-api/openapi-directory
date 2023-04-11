import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLogSubscriptionsXAmzTargetEnum {
    DirectoryService20150416ListLogSubscriptions = "DirectoryService_20150416.ListLogSubscriptions"
}
export declare class ListLogSubscriptionsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listLogSubscriptionsRequest: shared.ListLogSubscriptionsRequest;
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
    xAmzTarget: ListLogSubscriptionsXAmzTargetEnum;
}
export declare class ListLogSubscriptionsResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listLogSubscriptionsResult?: shared.ListLogSubscriptionsResult;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
