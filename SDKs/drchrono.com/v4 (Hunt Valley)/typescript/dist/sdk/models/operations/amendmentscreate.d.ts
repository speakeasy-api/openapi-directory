import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AmendmentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AmendmentsCreateRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    patient?: number;
}
export declare class AmendmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientAmendment?: shared.PatientAmendment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
