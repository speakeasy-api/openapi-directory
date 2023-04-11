import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MedicationsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MedicationsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class MedicationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
