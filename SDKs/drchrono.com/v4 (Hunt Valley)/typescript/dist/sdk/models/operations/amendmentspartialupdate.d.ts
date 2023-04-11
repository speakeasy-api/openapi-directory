import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AmendmentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AmendmentsPartialUpdateRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class AmendmentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
