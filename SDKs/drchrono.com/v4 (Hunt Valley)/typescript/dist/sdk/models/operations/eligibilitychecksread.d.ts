import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EligibilityChecksReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class EligibilityChecksReadRequest extends SpeakeasyBase {
    appointment?: number;
    appointmentDate?: string;
    appointmentDateRange?: string;
    doctor?: number;
    id: string;
    patient?: number;
    queryDate?: string;
    queryDateRange?: string;
}
export declare class EligibilityChecksReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    coverage?: shared.Coverage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
