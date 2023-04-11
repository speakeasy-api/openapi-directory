import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LabResultsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabResultsDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    order?: number;
}
export declare class LabResultsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
