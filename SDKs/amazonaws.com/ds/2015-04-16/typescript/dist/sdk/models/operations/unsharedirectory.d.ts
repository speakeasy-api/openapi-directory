import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UnshareDirectoryXAmzTargetEnum {
    DirectoryService20150416UnshareDirectory = "DirectoryService_20150416.UnshareDirectory"
}
export declare class UnshareDirectoryRequest extends SpeakeasyBase {
    unshareDirectoryRequest: shared.UnshareDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnshareDirectoryXAmzTargetEnum;
}
export declare class UnshareDirectoryResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryNotSharedException
     */
    directoryNotSharedException?: any;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidTargetException
     */
    invalidTargetException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    unshareDirectoryResult?: shared.UnshareDirectoryResult;
}
