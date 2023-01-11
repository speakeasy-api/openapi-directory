import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabTestsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabTestsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabTestsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabTestsUpdateRequest extends SpeakeasyBase {
    pathParams: LabTestsUpdatePathParams;
    queryParams: LabTestsUpdateQueryParams;
    security: LabTestsUpdateSecurity;
}
export declare class LabTestsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
