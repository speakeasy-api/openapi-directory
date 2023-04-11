import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDirectoryXAmzTargetEnum {
    DirectoryService20150416CreateDirectory = "DirectoryService_20150416.CreateDirectory"
}
export declare class CreateDirectoryRequest extends SpeakeasyBase {
    createDirectoryRequest: shared.CreateDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectoryXAmzTargetEnum;
}
export declare class CreateDirectoryResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createDirectoryResult?: shared.CreateDirectoryResult;
    /**
     * DirectoryLimitExceededException
     */
    directoryLimitExceededException?: any;
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
