import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRegistriesXAmzTargetEnum {
    SpencerFrontendServiceDescribeRegistries = "SpencerFrontendService.DescribeRegistries"
}
export declare class DescribeRegistriesRequest extends SpeakeasyBase {
    describeRegistriesRequest: shared.DescribeRegistriesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRegistriesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeRegistriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRegistriesResponse?: shared.DescribeRegistriesResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
}
