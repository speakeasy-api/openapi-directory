import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRecordXAmzTargetEnum {
    Firehose20150804PutRecord = "Firehose_20150804.PutRecord"
}
export declare class PutRecordRequest extends SpeakeasyBase {
    putRecordInput: shared.PutRecordInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordXAmzTargetEnum;
}
export declare class PutRecordResponse extends SpeakeasyBase {
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
    putRecordOutput?: shared.PutRecordOutput;
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
