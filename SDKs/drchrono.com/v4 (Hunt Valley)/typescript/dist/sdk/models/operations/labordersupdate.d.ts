import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabOrdersUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabOrdersUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabOrdersUpdateRequest extends SpeakeasyBase {
    pathParams: LabOrdersUpdatePathParams;
    queryParams: LabOrdersUpdateQueryParams;
    security: LabOrdersUpdateSecurity;
}
export declare class LabOrdersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
