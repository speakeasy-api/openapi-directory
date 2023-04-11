import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventTopicsXAmzTargetEnum {
    DirectoryService20150416DescribeEventTopics = "DirectoryService_20150416.DescribeEventTopics"
}
export declare class DescribeEventTopicsRequest extends SpeakeasyBase {
    describeEventTopicsRequest: shared.DescribeEventTopicsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventTopicsXAmzTargetEnum;
}
export declare class DescribeEventTopicsResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeEventTopicsResult?: shared.DescribeEventTopicsResult;
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
