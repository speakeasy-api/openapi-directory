import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRecordBatchXAmzTargetEnum {
    Firehose20150804PutRecordBatch = "Firehose_20150804.PutRecordBatch"
}
export declare class PutRecordBatchRequest extends SpeakeasyBase {
    putRecordBatchInput: shared.PutRecordBatchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordBatchXAmzTargetEnum;
}
export declare class PutRecordBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidKMSResourceException
     */
    invalidKMSResourceException?: any;
    /**
     * Success
     */
    putRecordBatchOutput?: shared.PutRecordBatchOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
