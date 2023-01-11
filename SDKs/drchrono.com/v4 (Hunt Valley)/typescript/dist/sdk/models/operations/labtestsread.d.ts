import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabTestsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabTestsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabTestsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabTestsReadRequest extends SpeakeasyBase {
    pathParams: LabTestsReadPathParams;
    queryParams: LabTestsReadQueryParams;
    security: LabTestsReadSecurity;
}
export declare class LabTestsReadResponse extends SpeakeasyBase {
    contentType: string;
    labTest?: shared.LabTest;
    statusCode: number;
}
