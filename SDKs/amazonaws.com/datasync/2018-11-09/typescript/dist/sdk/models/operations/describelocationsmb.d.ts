import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationSmbXAmzTargetEnum {
    FmrsServiceDescribeLocationSmb = "FmrsService.DescribeLocationSmb"
}
export declare class DescribeLocationSmbRequest extends SpeakeasyBase {
    describeLocationSmbRequest: shared.DescribeLocationSmbRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationSmbXAmzTargetEnum;
}
export declare class DescribeLocationSmbResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationSmbResponse?: shared.DescribeLocationSmbResponse;
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
