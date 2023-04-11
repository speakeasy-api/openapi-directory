import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTablesXAmzTargetEnum {
    DynamoDB20120810ListTables = "DynamoDB_20120810.ListTables"
}
export declare class ListTablesRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    exclusiveStartTableName?: string;
    /**
     * Pagination limit
     */
    limit?: string;
    listTablesInput: shared.ListTablesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTablesXAmzTargetEnum;
}
export declare class ListTablesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listTablesOutput?: shared.ListTablesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
