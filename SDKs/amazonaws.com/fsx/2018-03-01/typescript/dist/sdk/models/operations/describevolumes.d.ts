import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVolumesXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeVolumes = "AWSSimbaAPIService_v20180301.DescribeVolumes"
}
export declare class DescribeVolumesRequest extends SpeakeasyBase {
    describeVolumesRequest: shared.DescribeVolumesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVolumesXAmzTargetEnum;
}
export declare class DescribeVolumesResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeVolumesResponse?: shared.DescribeVolumesResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * VolumeNotFound
     */
    volumeNotFound?: any;
}
