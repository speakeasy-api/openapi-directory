import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}
export declare enum GETCancelExportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCancelExportTaskRequest extends SpeakeasyBase {
    action: GETCancelExportTaskActionEnum;
    /**
     * The ID of the export task. This is the ID returned by <code>CreateInstanceExportTask</code>.
     */
    exportTaskId: string;
    version: GETCancelExportTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCancelExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
