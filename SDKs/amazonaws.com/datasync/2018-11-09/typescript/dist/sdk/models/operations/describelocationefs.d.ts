import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationEfsXAmzTargetEnum {
    FmrsServiceDescribeLocationEfs = "FmrsService.DescribeLocationEfs"
}
export declare class DescribeLocationEfsRequest extends SpeakeasyBase {
    describeLocationEfsRequest: shared.DescribeLocationEfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationEfsXAmzTargetEnum;
}
export declare class DescribeLocationEfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationEfsResponse?: shared.DescribeLocationEfsResponse;
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
