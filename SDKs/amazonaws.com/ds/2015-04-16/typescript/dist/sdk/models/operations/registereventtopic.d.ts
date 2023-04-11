import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterEventTopicXAmzTargetEnum {
    DirectoryService20150416RegisterEventTopic = "DirectoryService_20150416.RegisterEventTopic"
}
export declare class RegisterEventTopicRequest extends SpeakeasyBase {
    registerEventTopicRequest: shared.RegisterEventTopicRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterEventTopicXAmzTargetEnum;
}
export declare class RegisterEventTopicResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
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
    registerEventTopicResult?: Record<string, any>;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
