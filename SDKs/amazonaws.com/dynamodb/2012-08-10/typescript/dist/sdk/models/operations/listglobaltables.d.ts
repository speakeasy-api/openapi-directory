import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGlobalTablesXAmzTargetEnum {
    DynamoDB20120810ListGlobalTables = "DynamoDB_20120810.ListGlobalTables"
}
export declare class ListGlobalTablesRequest extends SpeakeasyBase {
    listGlobalTablesInput: shared.ListGlobalTablesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGlobalTablesXAmzTargetEnum;
}
export declare class ListGlobalTablesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listGlobalTablesOutput?: shared.ListGlobalTablesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
