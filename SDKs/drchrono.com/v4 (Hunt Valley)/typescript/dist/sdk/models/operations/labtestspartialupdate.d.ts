import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LabTestsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabTestsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    order?: number;
}
export declare class LabTestsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
