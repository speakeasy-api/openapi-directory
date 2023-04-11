import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCustomRoutingAcceleratorsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingAccelerators = "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators"
}
export declare class ListCustomRoutingAcceleratorsRequest extends SpeakeasyBase {
    listCustomRoutingAcceleratorsRequest: shared.ListCustomRoutingAcceleratorsRequest;
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
    xAmzTarget: ListCustomRoutingAcceleratorsXAmzTargetEnum;
}
export declare class ListCustomRoutingAcceleratorsResponse extends SpeakeasyBase {
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
    listCustomRoutingAcceleratorsResponse?: shared.ListCustomRoutingAcceleratorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
