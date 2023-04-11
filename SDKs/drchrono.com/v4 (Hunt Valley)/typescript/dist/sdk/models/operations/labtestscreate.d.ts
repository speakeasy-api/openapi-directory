import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabTestsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabTestsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabTestsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    labTest?: shared.LabTest;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
