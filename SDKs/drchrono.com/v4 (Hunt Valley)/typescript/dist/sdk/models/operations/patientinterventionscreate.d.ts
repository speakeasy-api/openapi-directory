import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientInterventionsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientInterventionsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientInterventionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientIntervention?: shared.PatientIntervention;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
