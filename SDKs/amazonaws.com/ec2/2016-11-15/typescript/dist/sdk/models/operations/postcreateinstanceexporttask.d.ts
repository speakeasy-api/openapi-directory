import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateInstanceExportTaskActionEnum {
    CreateInstanceExportTask = "CreateInstanceExportTask"
}
export declare enum POSTCreateInstanceExportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateInstanceExportTaskRequest extends SpeakeasyBase {
    action: POSTCreateInstanceExportTaskActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateInstanceExportTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateInstanceExportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
