import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSchemaExtensionXAmzTargetEnum {
    DirectoryService20150416StartSchemaExtension = "DirectoryService_20150416.StartSchemaExtension"
}
export declare class StartSchemaExtensionRequest extends SpeakeasyBase {
    startSchemaExtensionRequest: shared.StartSchemaExtensionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSchemaExtensionXAmzTargetEnum;
}
export declare class StartSchemaExtensionResponse extends SpeakeasyBase {
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
     * ServiceException
     */
    serviceException?: any;
    /**
     * SnapshotLimitExceededException
     */
    snapshotLimitExceededException?: any;
    /**
     * Success
     */
    startSchemaExtensionResult?: shared.StartSchemaExtensionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
