import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutDedicatedIpWarmupAttributesRequestBody extends SpeakeasyBase {
    /**
     * The warm-up percentage that you want to associate with the dedicated IP address.
     */
    warmupPercentage: number;
}
export declare class PutDedicatedIpWarmupAttributesRequest extends SpeakeasyBase {
    /**
     * The dedicated IP address that you want to update the warm-up attributes for.
     */
    ip: string;
    requestBody: PutDedicatedIpWarmupAttributesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutDedicatedIpWarmupAttributesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putDedicatedIpWarmupAttributesResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
