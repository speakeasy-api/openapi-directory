import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FeeSchedulesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class FeeSchedulesReadRequest extends SpeakeasyBase {
    code?: string;
    codeType?: string;
    doctor?: number;
    id: string;
    payerId?: string;
    since?: string;
}
export declare class FeeSchedulesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    doctorFeeSchedule?: shared.DoctorFeeSchedule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
