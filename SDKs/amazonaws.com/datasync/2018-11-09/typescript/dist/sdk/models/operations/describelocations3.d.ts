import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationS3XAmzTargetEnum {
    FmrsServiceDescribeLocationS3 = "FmrsService.DescribeLocationS3"
}
export declare class DescribeLocationS3Request extends SpeakeasyBase {
    describeLocationS3Request: shared.DescribeLocationS3Request;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationS3XAmzTargetEnum;
}
export declare class DescribeLocationS3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationS3Response?: shared.DescribeLocationS3Response;
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
