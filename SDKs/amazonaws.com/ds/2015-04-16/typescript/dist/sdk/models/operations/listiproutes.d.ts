import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListIpRoutesXAmzTargetEnum {
    DirectoryService20150416ListIpRoutes = "DirectoryService_20150416.ListIpRoutes"
}
export declare class ListIpRoutesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listIpRoutesRequest: shared.ListIpRoutesRequest;
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
    xAmzTarget: ListIpRoutesXAmzTargetEnum;
}
export declare class ListIpRoutesResponse extends SpeakeasyBase {
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
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listIpRoutesResult?: shared.ListIpRoutesResult;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
