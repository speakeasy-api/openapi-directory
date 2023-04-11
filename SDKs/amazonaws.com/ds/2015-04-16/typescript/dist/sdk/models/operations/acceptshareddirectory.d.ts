import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416AcceptSharedDirectory = "DirectoryService_20150416.AcceptSharedDirectory"
}
export declare class AcceptSharedDirectoryRequest extends SpeakeasyBase {
    acceptSharedDirectoryRequest: shared.AcceptSharedDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptSharedDirectoryXAmzTargetEnum;
}
export declare class AcceptSharedDirectoryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptSharedDirectoryResult?: shared.AcceptSharedDirectoryResult;
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
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
