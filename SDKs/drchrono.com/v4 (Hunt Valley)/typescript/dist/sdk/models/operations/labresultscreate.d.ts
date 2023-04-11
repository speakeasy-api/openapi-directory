import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabResultsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabResultsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabResultsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    labResult?: shared.LabResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
