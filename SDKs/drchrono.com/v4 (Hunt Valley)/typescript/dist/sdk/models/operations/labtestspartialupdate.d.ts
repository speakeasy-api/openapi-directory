import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabTestsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabTestsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabTestsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabTestsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: LabTestsPartialUpdatePathParams;
    queryParams: LabTestsPartialUpdateQueryParams;
    security: LabTestsPartialUpdateSecurity;
}
export declare class LabTestsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
