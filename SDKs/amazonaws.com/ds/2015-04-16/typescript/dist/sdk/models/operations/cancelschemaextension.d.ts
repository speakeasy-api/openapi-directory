import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelSchemaExtensionXAmzTargetEnum {
    DirectoryService20150416CancelSchemaExtension = "DirectoryService_20150416.CancelSchemaExtension"
}
export declare class CancelSchemaExtensionRequest extends SpeakeasyBase {
    cancelSchemaExtensionRequest: shared.CancelSchemaExtensionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelSchemaExtensionXAmzTargetEnum;
}
export declare class CancelSchemaExtensionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelSchemaExtensionResult?: Record<string, any>;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
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
