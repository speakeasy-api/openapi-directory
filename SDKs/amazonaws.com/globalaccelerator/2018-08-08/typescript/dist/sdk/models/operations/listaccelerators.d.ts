import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAcceleratorsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListAccelerators = "GlobalAccelerator_V20180706.ListAccelerators"
}
export declare class ListAcceleratorsRequest extends SpeakeasyBase {
    listAcceleratorsRequest: shared.ListAcceleratorsRequest;
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
    xAmzTarget: ListAcceleratorsXAmzTargetEnum;
}
export declare class ListAcceleratorsResponse extends SpeakeasyBase {
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
    listAcceleratorsResponse?: shared.ListAcceleratorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
