import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrescriptionMessagesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PrescriptionMessagesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    parentMessage?: number;
    patient?: number;
    since?: string;
}
export declare class PrescriptionMessagesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PrescriptionMessagesReadRequest extends SpeakeasyBase {
    pathParams: PrescriptionMessagesReadPathParams;
    queryParams: PrescriptionMessagesReadQueryParams;
    security: PrescriptionMessagesReadSecurity;
}
export declare class PrescriptionMessagesReadResponse extends SpeakeasyBase {
    contentType: string;
    prescriptionMessage?: shared.PrescriptionMessage;
    statusCode: number;
}
