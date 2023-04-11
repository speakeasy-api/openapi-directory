import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterEventTopicXAmzTargetEnum {
    DirectoryService20150416DeregisterEventTopic = "DirectoryService_20150416.DeregisterEventTopic"
}
export declare class DeregisterEventTopicRequest extends SpeakeasyBase {
    deregisterEventTopicRequest: shared.DeregisterEventTopicRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterEventTopicXAmzTargetEnum;
}
export declare class DeregisterEventTopicResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterEventTopicResult?: Record<string, any>;
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
