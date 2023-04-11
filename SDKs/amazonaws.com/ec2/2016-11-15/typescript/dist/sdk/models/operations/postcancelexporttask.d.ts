import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}
export declare enum POSTCancelExportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCancelExportTaskRequest extends SpeakeasyBase {
    action: POSTCancelExportTaskActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelExportTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
