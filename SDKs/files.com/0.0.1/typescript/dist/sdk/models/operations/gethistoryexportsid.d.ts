import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHistoryExportsIdRequest extends SpeakeasyBase {
    /**
     * History Export ID.
     */
    id: number;
}
export declare class GetHistoryExportsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The HistoryExports object.
     */
    historyExportEntity?: shared.HistoryExportEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
