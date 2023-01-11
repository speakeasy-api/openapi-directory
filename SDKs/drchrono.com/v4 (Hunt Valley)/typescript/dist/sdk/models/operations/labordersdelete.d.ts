import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabOrdersDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabOrdersDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabOrdersDeleteRequest extends SpeakeasyBase {
    pathParams: LabOrdersDeletePathParams;
    queryParams: LabOrdersDeleteQueryParams;
    security: LabOrdersDeleteSecurity;
}
export declare class LabOrdersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
