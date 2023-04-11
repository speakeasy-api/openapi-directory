import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDirectoryXAmzTargetEnum {
    DirectoryService20150416DeleteDirectory = "DirectoryService_20150416.DeleteDirectory"
}
export declare class DeleteDirectoryRequest extends SpeakeasyBase {
    deleteDirectoryRequest: shared.DeleteDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectoryXAmzTargetEnum;
}
export declare class DeleteDirectoryResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteDirectoryResult?: shared.DeleteDirectoryResult;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
}
