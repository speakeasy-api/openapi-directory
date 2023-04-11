import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabTestsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabTestsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    order?: number;
}
export declare class LabTestsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    labTest?: shared.LabTest;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
