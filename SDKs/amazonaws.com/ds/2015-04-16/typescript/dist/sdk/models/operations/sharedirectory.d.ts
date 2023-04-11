import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ShareDirectoryXAmzTargetEnum {
    DirectoryService20150416ShareDirectory = "DirectoryService_20150416.ShareDirectory"
}
export declare class ShareDirectoryRequest extends SpeakeasyBase {
    shareDirectoryRequest: shared.ShareDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ShareDirectoryXAmzTargetEnum;
}
export declare class ShareDirectoryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryAlreadySharedException
     */
    directoryAlreadySharedException?: any;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidTargetException
     */
    invalidTargetException?: any;
    /**
     * OrganizationsException
     */
    organizationsException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    shareDirectoryResult?: shared.ShareDirectoryResult;
    /**
     * ShareLimitExceededException
     */
    shareLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
