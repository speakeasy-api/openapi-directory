import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OfficesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class OfficesPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class OfficesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
