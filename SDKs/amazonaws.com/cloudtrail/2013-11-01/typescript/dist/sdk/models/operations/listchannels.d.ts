import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListChannelsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListChannels = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels"
}
export declare class ListChannelsRequest extends SpeakeasyBase {
    listChannelsRequest: shared.ListChannelsRequest;
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
    xAmzTarget: ListChannelsXAmzTargetEnum;
}
export declare class ListChannelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listChannelsResponse?: shared.ListChannelsResponse;
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
