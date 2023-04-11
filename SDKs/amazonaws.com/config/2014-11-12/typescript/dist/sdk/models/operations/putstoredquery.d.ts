import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutStoredQueryXAmzTargetEnum {
    StarlingDoveServicePutStoredQuery = "StarlingDoveService.PutStoredQuery"
}
export declare class PutStoredQueryRequest extends SpeakeasyBase {
    putStoredQueryRequest: shared.PutStoredQueryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutStoredQueryXAmzTargetEnum;
}
export declare class PutStoredQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    putStoredQueryResponse?: shared.PutStoredQueryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceConcurrentModificationException
     */
    resourceConcurrentModificationException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
