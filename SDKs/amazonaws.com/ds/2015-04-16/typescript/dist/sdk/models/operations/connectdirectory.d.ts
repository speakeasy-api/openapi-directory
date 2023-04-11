import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConnectDirectoryXAmzTargetEnum {
    DirectoryService20150416ConnectDirectory = "DirectoryService_20150416.ConnectDirectory"
}
export declare class ConnectDirectoryRequest extends SpeakeasyBase {
    connectDirectoryRequest: shared.ConnectDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConnectDirectoryXAmzTargetEnum;
}
export declare class ConnectDirectoryResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    /**
     * Success
     */
    connectDirectoryResult?: shared.ConnectDirectoryResult;
    contentType: string;
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
