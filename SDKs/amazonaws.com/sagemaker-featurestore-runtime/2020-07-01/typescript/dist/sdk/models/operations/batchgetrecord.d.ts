import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetRecordRequestBody extends SpeakeasyBase {
    /**
     * A list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value, and Feature name that have been requested to be retrieved in batch.
     */
    identifiers: shared.BatchGetRecordIdentifier[];
}
export declare class BatchGetRecordRequest extends SpeakeasyBase {
    requestBody: BatchGetRecordRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetRecordResponse extends SpeakeasyBase {
    /**
     * AccessForbidden
     */
    accessForbidden?: any;
    /**
     * Success
     */
    batchGetRecordResponse?: shared.BatchGetRecordResponse;
    contentType: string;
    /**
     * InternalFailure
     */
    internalFailure?: any;
    /**
     * ServiceUnavailable
     */
    serviceUnavailable?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationError
     */
    validationError?: any;
}
