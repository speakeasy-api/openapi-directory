import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCustomRoutingPortMappingsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappings = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings"
}
export declare class ListCustomRoutingPortMappingsRequest extends SpeakeasyBase {
    listCustomRoutingPortMappingsRequest: shared.ListCustomRoutingPortMappingsRequest;
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
    xAmzTarget: ListCustomRoutingPortMappingsXAmzTargetEnum;
}
export declare class ListCustomRoutingPortMappingsResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
    /**
     * EndpointGroupNotFoundException
     */
    endpointGroupNotFoundException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listCustomRoutingPortMappingsResponse?: shared.ListCustomRoutingPortMappingsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
