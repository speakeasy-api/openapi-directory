import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabTestsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabTestsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabTestsCreateRequest extends SpeakeasyBase {
    queryParams: LabTestsCreateQueryParams;
    security: LabTestsCreateSecurity;
}
export declare class LabTestsCreateResponse extends SpeakeasyBase {
    contentType: string;
    labTest?: shared.LabTest;
    statusCode: number;
}
