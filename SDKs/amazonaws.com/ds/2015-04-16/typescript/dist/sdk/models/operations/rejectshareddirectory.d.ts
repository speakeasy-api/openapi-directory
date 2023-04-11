import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RejectSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416RejectSharedDirectory = "DirectoryService_20150416.RejectSharedDirectory"
}
export declare class RejectSharedDirectoryRequest extends SpeakeasyBase {
    rejectSharedDirectoryRequest: shared.RejectSharedDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectSharedDirectoryXAmzTargetEnum;
}
export declare class RejectSharedDirectoryResponse extends SpeakeasyBase {
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
     * Success
     */
    rejectSharedDirectoryResult?: shared.RejectSharedDirectoryResult;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
