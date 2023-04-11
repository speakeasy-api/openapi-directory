import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListListenersXAmzTargetEnum {
    GlobalAcceleratorV20180706ListListeners = "GlobalAccelerator_V20180706.ListListeners"
}
export declare class ListListenersRequest extends SpeakeasyBase {
    listListenersRequest: shared.ListListenersRequest;
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
    xAmzTarget: ListListenersXAmzTargetEnum;
}
export declare class ListListenersResponse extends SpeakeasyBase {
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
    listListenersResponse?: shared.ListListenersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
