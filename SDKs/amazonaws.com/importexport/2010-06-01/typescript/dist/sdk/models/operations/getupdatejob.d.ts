import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateJobActionEnum {
    UpdateJob = "UpdateJob"
}
/**
 * Specifies whether the job to initiate is an import or export job.
 */
export declare enum GETUpdateJobJobTypeEnum {
    Import = "Import",
    Export = "Export"
}
export declare enum GETUpdateJobOperationEnum {
    UpdateJob = "UpdateJob"
}
export declare enum GETUpdateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GETUpdateJobRequest extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GETUpdateJobActionEnum;
    jobId: string;
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    jobType: GETUpdateJobJobTypeEnum;
    manifest: string;
    operation: GETUpdateJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    validateOnly: boolean;
    version: GETUpdateJobVersionEnum;
}
export declare class GETUpdateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
