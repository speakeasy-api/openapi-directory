import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAttacksXAmzTargetEnum {
    AWSShield20160616ListAttacks = "AWSShield_20160616.ListAttacks"
}
export declare class ListAttacksRequest extends SpeakeasyBase {
    listAttacksRequest: shared.ListAttacksRequest;
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
    xAmzTarget: ListAttacksXAmzTargetEnum;
}
export declare class ListAttacksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listAttacksResponse?: shared.ListAttacksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
