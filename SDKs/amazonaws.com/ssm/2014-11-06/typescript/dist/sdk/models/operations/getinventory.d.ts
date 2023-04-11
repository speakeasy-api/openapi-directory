import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInventoryXAmzTargetEnum {
    AmazonSSMGetInventory = "AmazonSSM.GetInventory"
}
export declare class GetInventoryRequest extends SpeakeasyBase {
    getInventoryRequest: shared.GetInventoryRequest;
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
    xAmzTarget: GetInventoryXAmzTargetEnum;
}
export declare class GetInventoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInventoryResult?: shared.GetInventoryResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAggregatorException
     */
    invalidAggregatorException?: any;
    /**
     * InvalidFilter
     */
    invalidFilter?: any;
    /**
     * InvalidInventoryGroupException
     */
    invalidInventoryGroupException?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * InvalidResultAttributeException
     */
    invalidResultAttributeException?: any;
    /**
     * InvalidTypeNameException
     */
    invalidTypeNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
