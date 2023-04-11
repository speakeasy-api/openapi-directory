import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateJobActionEnum {
    CreateJob = "CreateJob"
}
/**
 * Specifies whether the job to initiate is an import or export job.
 */
export declare enum GETCreateJobJobTypeEnum {
    Import = "Import",
    Export = "Export"
}
export declare enum GETCreateJobOperationEnum {
    CreateJob = "CreateJob"
}
export declare enum GETCreateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GETCreateJobRequest extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GETCreateJobActionEnum;
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    jobType: GETCreateJobJobTypeEnum;
    manifest: string;
    manifestAddendum?: string;
    operation: GETCreateJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    validateOnly: boolean;
    version: GETCreateJobVersionEnum;
}
export declare class GETCreateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
