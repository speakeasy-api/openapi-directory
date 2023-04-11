import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTrailsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrails = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails"
}
export declare class ListTrailsRequest extends SpeakeasyBase {
    listTrailsRequest: shared.ListTrailsRequest;
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
    xAmzTarget: ListTrailsXAmzTargetEnum;
}
export declare class ListTrailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTrailsResponse?: shared.ListTrailsResponse;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
