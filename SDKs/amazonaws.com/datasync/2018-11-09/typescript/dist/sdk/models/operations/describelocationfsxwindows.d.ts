import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationFsxWindowsXAmzTargetEnum {
    FmrsServiceDescribeLocationFsxWindows = "FmrsService.DescribeLocationFsxWindows"
}
export declare class DescribeLocationFsxWindowsRequest extends SpeakeasyBase {
    describeLocationFsxWindowsRequest: shared.DescribeLocationFsxWindowsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationFsxWindowsXAmzTargetEnum;
}
export declare class DescribeLocationFsxWindowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationFsxWindowsResponse?: shared.DescribeLocationFsxWindowsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
