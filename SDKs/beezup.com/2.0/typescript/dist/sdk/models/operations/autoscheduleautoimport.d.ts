import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AutoScheduleAutoImportRequest extends SpeakeasyBase {
    scheduleAutoImportRequest: shared.ScheduleAutoImportRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class AutoScheduleAutoImportResponse extends SpeakeasyBase {
    /**
     *
     * @remarks
     * When the max catalog Auto Import count has been reached.
     * When the min catalog Auto Import scheduling interval delay has been reached.
     * When the max catalog Auto Import count has been reached.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
