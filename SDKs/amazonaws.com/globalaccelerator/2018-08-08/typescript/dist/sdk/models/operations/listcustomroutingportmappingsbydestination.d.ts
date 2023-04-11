import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination"
}
export declare class ListCustomRoutingPortMappingsByDestinationRequest extends SpeakeasyBase {
    listCustomRoutingPortMappingsByDestinationRequest: shared.ListCustomRoutingPortMappingsByDestinationRequest;
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
    xAmzTarget: ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum;
}
export declare class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EndpointNotFoundException
     */
    endpointNotFoundException?: any;
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
    listCustomRoutingPortMappingsByDestinationResponse?: shared.ListCustomRoutingPortMappingsByDestinationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
