import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddIpRoutesXAmzTargetEnum {
    DirectoryService20150416AddIpRoutes = "DirectoryService_20150416.AddIpRoutes"
}
export declare class AddIpRoutesRequest extends SpeakeasyBase {
    addIpRoutesRequest: shared.AddIpRoutesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddIpRoutesXAmzTargetEnum;
}
export declare class AddIpRoutesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addIpRoutesResult?: Record<string, any>;
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
     * EntityAlreadyExistsException
     */
    entityAlreadyExistsException?: any;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * IpRouteLimitExceededException
     */
    ipRouteLimitExceededException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
