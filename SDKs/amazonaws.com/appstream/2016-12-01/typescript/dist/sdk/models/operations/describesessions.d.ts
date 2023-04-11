import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSessionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeSessions = "PhotonAdminProxyService.DescribeSessions"
}
export declare class DescribeSessionsRequest extends SpeakeasyBase {
    describeSessionsRequest: shared.DescribeSessionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSessionsXAmzTargetEnum;
}
export declare class DescribeSessionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSessionsResult?: shared.DescribeSessionsResult;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
