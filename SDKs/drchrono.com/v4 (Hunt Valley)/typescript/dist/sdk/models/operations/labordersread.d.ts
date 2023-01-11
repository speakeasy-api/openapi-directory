import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabOrdersReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabOrdersReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabOrdersReadRequest extends SpeakeasyBase {
    pathParams: LabOrdersReadPathParams;
    queryParams: LabOrdersReadQueryParams;
    security: LabOrdersReadSecurity;
}
export declare class LabOrdersReadResponse extends SpeakeasyBase {
    contentType: string;
    labOrder?: shared.LabOrder;
    statusCode: number;
}
