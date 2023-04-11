import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCustomRoutingListenersXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingListeners = "GlobalAccelerator_V20180706.ListCustomRoutingListeners"
}
export declare class ListCustomRoutingListenersRequest extends SpeakeasyBase {
    listCustomRoutingListenersRequest: shared.ListCustomRoutingListenersRequest;
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
    xAmzTarget: ListCustomRoutingListenersXAmzTargetEnum;
}
export declare class ListCustomRoutingListenersResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
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
    listCustomRoutingListenersResponse?: shared.ListCustomRoutingListenersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
