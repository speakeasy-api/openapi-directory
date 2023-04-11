import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DiscoverPollEndpointXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DiscoverPollEndpoint = "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint"
}
export declare class DiscoverPollEndpointRequest extends SpeakeasyBase {
    discoverPollEndpointRequest: shared.DiscoverPollEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DiscoverPollEndpointXAmzTargetEnum;
}
export declare class DiscoverPollEndpointResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    discoverPollEndpointResponse?: shared.DiscoverPollEndpointResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
