import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTelemetryRecordsRequestBody extends SpeakeasyBase {
    /**
     * <p/>
     */
    ec2InstanceId?: string;
    /**
     * <p/>
     */
    hostname?: string;
    /**
     * <p/>
     */
    resourceARN?: string;
    /**
     * <p/>
     */
    telemetryRecords: shared.TelemetryRecord[];
}
export declare class PutTelemetryRecordsRequest extends SpeakeasyBase {
    requestBody: PutTelemetryRecordsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutTelemetryRecordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    putTelemetryRecordsResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
