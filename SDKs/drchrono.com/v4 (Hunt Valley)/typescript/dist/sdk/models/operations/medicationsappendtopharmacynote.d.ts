import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MedicationsAppendToPharmacyNoteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MedicationsAppendToPharmacyNoteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class MedicationsAppendToPharmacyNoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
