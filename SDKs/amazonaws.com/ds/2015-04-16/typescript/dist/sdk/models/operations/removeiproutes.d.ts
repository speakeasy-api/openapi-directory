import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveIpRoutesXAmzTargetEnum {
    DirectoryService20150416RemoveIpRoutes = "DirectoryService_20150416.RemoveIpRoutes"
}
export declare class RemoveIpRoutesRequest extends SpeakeasyBase {
    removeIpRoutesRequest: shared.RemoveIpRoutesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveIpRoutesXAmzTargetEnum;
}
export declare class RemoveIpRoutesResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    removeIpRoutesResult?: Record<string, any>;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
