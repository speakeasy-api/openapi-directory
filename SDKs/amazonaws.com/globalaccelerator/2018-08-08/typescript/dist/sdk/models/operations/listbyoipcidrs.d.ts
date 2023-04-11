import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListByoipCidrsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListByoipCidrs = "GlobalAccelerator_V20180706.ListByoipCidrs"
}
export declare class ListByoipCidrsRequest extends SpeakeasyBase {
    listByoipCidrsRequest: shared.ListByoipCidrsRequest;
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
    xAmzTarget: ListByoipCidrsXAmzTargetEnum;
}
export declare class ListByoipCidrsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    listByoipCidrsResponse?: shared.ListByoipCidrsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
