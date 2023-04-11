import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AmendmentsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AmendmentsUpdateRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class AmendmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
