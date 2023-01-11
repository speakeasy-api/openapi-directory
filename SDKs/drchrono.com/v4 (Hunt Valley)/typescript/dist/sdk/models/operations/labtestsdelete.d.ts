import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabTestsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabTestsDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabTestsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabTestsDeleteRequest extends SpeakeasyBase {
    pathParams: LabTestsDeletePathParams;
    queryParams: LabTestsDeleteQueryParams;
    security: LabTestsDeleteSecurity;
}
export declare class LabTestsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
