import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConditionalForwardersXAmzTargetEnum {
    DirectoryService20150416DescribeConditionalForwarders = "DirectoryService_20150416.DescribeConditionalForwarders"
}
export declare class DescribeConditionalForwardersRequest extends SpeakeasyBase {
    describeConditionalForwardersRequest: shared.DescribeConditionalForwardersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConditionalForwardersXAmzTargetEnum;
}
export declare class DescribeConditionalForwardersResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeConditionalForwardersResult?: shared.DescribeConditionalForwardersResult;
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
}
