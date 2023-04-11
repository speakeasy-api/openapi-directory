import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInventorySchemaXAmzTargetEnum {
    AmazonSSMGetInventorySchema = "AmazonSSM.GetInventorySchema"
}
export declare class GetInventorySchemaRequest extends SpeakeasyBase {
    getInventorySchemaRequest: shared.GetInventorySchemaRequest;
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
    xAmzTarget: GetInventorySchemaXAmzTargetEnum;
}
export declare class GetInventorySchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInventorySchemaResult?: shared.GetInventorySchemaResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * InvalidTypeNameException
     */
    invalidTypeNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
