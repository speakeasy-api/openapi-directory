import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationHdfsXAmzTargetEnum {
    FmrsServiceDescribeLocationHdfs = "FmrsService.DescribeLocationHdfs"
}
export declare class DescribeLocationHdfsRequest extends SpeakeasyBase {
    describeLocationHdfsRequest: shared.DescribeLocationHdfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationHdfsXAmzTargetEnum;
}
export declare class DescribeLocationHdfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationHdfsResponse?: shared.DescribeLocationHdfsResponse;
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
