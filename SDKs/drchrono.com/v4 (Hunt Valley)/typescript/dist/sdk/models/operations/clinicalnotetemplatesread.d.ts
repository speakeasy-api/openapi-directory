import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteTemplatesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClinicalNoteTemplatesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ClinicalNoteTemplatesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClinicalNoteTemplatesReadRequest extends SpeakeasyBase {
    pathParams: ClinicalNoteTemplatesReadPathParams;
    queryParams: ClinicalNoteTemplatesReadQueryParams;
    security: ClinicalNoteTemplatesReadSecurity;
}
export declare class ClinicalNoteTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    soapNoteCustomReport?: shared.SoapNoteCustomReport;
    statusCode: number;
}
