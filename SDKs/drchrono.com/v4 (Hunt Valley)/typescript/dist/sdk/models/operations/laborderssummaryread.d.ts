import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersSummaryReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabOrdersSummaryReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class LabOrdersSummaryReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabOrdersSummaryReadRequest extends SpeakeasyBase {
    pathParams: LabOrdersSummaryReadPathParams;
    queryParams: LabOrdersSummaryReadQueryParams;
    security: LabOrdersSummaryReadSecurity;
}
export declare class LabOrdersSummaryReadResponse extends SpeakeasyBase {
    contentType: string;
    labOrder?: shared.LabOrder;
    statusCode: number;
}
