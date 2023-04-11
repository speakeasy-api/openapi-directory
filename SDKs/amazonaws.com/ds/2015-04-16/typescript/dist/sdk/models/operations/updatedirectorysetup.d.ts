import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDirectorySetupXAmzTargetEnum {
    DirectoryService20150416UpdateDirectorySetup = "DirectoryService_20150416.UpdateDirectorySetup"
}
export declare class UpdateDirectorySetupRequest extends SpeakeasyBase {
    updateDirectorySetupRequest: shared.UpdateDirectorySetupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDirectorySetupXAmzTargetEnum;
}
export declare class UpdateDirectorySetupResponse extends SpeakeasyBase {
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
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * DirectoryInDesiredStateException
     */
    directoryInDesiredStateException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * SnapshotLimitExceededException
     */
    snapshotLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * Success
     */
    updateDirectorySetupResult?: Record<string, any>;
}
