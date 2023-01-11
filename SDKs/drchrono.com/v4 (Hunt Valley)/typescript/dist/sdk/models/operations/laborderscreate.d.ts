import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabOrdersCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabOrdersCreateRequest extends SpeakeasyBase {
    queryParams: LabOrdersCreateQueryParams;
    security: LabOrdersCreateSecurity;
}
export declare class LabOrdersCreateResponse extends SpeakeasyBase {
    contentType: string;
    labOrder?: shared.LabOrder;
    statusCode: number;
}
