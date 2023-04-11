import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExportTasksXAmzTargetEnum {
    AWSPoseidonServiceV20151101DescribeExportTasks = "AWSPoseidonService_V2015_11_01.DescribeExportTasks"
}
export declare class DescribeExportTasksRequest extends SpeakeasyBase {
    describeExportTasksRequest: shared.DescribeExportTasksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportTasksXAmzTargetEnum;
}
export declare class DescribeExportTasksResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * Success
     */
    describeExportTasksResponse?: shared.DescribeExportTasksResponse;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
