import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}
export declare enum GETCancelExportTaskVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETCancelExportTaskRequest extends SpeakeasyBase {
    action: GETCancelExportTaskActionEnum;
    /**
     * The identifier of the snapshot or cluster export task to cancel.
     */
    exportTaskIdentifier: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
