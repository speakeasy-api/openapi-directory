import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateConditionalForwarderXAmzTargetEnum {
    DirectoryService20150416UpdateConditionalForwarder = "DirectoryService_20150416.UpdateConditionalForwarder"
}
export declare class UpdateConditionalForwarderRequest extends SpeakeasyBase {
    updateConditionalForwarderRequest: shared.UpdateConditionalForwarderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConditionalForwarderXAmzTargetEnum;
}
export declare class UpdateConditionalForwarderResponse extends SpeakeasyBase {
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
    updateConditionalForwarderResult?: Record<string, any>;
}
