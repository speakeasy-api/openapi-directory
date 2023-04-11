import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LabTestsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabTestsDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    order?: number;
}
export declare class LabTestsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
