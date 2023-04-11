import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetStoredQueryXAmzTargetEnum {
    StarlingDoveServiceGetStoredQuery = "StarlingDoveService.GetStoredQuery"
}
export declare class GetStoredQueryRequest extends SpeakeasyBase {
    getStoredQueryRequest: shared.GetStoredQueryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetStoredQueryXAmzTargetEnum;
}
export declare class GetStoredQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getStoredQueryResponse?: shared.GetStoredQueryResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
