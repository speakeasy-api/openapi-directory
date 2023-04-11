import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteStoredQueryXAmzTargetEnum {
    StarlingDoveServiceDeleteStoredQuery = "StarlingDoveService.DeleteStoredQuery"
}
export declare class DeleteStoredQueryRequest extends SpeakeasyBase {
    deleteStoredQueryRequest: shared.DeleteStoredQueryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStoredQueryXAmzTargetEnum;
}
export declare class DeleteStoredQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteStoredQueryResponse?: Record<string, any>;
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
