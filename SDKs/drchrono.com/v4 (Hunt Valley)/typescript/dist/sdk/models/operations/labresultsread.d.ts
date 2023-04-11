import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabResultsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabResultsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    order?: number;
}
export declare class LabResultsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    labResult?: shared.LabResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
