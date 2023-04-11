import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ScanXAmzTargetEnum {
    DynamoDB20120810Scan = "DynamoDB_20120810.Scan"
}
export declare class ScanRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    exclusiveStartKey?: string;
    /**
     * Pagination limit
     */
    limit?: string;
    scanInput: shared.ScanInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScanXAmzTargetEnum;
}
export declare class ScanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * RequestLimitExceeded
     */
    requestLimitExceeded?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    scanOutput?: shared.ScanOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
