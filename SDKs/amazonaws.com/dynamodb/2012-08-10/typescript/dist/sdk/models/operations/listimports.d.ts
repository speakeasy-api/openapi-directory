import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListImportsXAmzTargetEnum {
    DynamoDB20120810ListImports = "DynamoDB_20120810.ListImports"
}
export declare class ListImportsRequest extends SpeakeasyBase {
    listImportsInput: shared.ListImportsInput;
    /**
     * Pagination token
     */
    nextToken?: string;
    /**
     * Pagination limit
     */
    pageSize?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListImportsXAmzTargetEnum;
}
export declare class ListImportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listImportsOutput?: shared.ListImportsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
