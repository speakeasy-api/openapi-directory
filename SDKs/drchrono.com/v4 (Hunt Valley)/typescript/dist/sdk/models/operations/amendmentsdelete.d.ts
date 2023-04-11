import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AmendmentsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AmendmentsDeleteRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class AmendmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
