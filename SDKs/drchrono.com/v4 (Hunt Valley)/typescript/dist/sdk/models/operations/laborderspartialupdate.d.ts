import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabOrdersPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabOrdersPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabOrdersPartialUpdateRequest extends SpeakeasyBase {
    pathParams: LabOrdersPartialUpdatePathParams;
    queryParams: LabOrdersPartialUpdateQueryParams;
    security: LabOrdersPartialUpdateSecurity;
}
export declare class LabOrdersPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
