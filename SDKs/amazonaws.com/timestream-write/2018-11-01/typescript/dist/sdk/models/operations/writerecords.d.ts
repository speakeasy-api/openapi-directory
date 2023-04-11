import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum WriteRecordsXAmzTargetEnum {
    Timestream20181101WriteRecords = "Timestream_20181101.WriteRecords"
}
export declare class WriteRecordsRequest extends SpeakeasyBase {
    writeRecordsRequest: shared.WriteRecordsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: WriteRecordsXAmzTargetEnum;
}
export declare class WriteRecordsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEndpointException
     */
    invalidEndpointException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RejectedRecordsException
     */
    rejectedRecordsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
    /**
     * Success
     */
    writeRecordsResponse?: shared.WriteRecordsResponse;
}
