import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FeeSchedulesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FeeSchedulesReadQueryParams extends SpeakeasyBase {
    code?: string;
    codeType?: string;
    doctor?: number;
    payerId?: string;
    since?: string;
}
export declare class FeeSchedulesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class FeeSchedulesReadRequest extends SpeakeasyBase {
    pathParams: FeeSchedulesReadPathParams;
    queryParams: FeeSchedulesReadQueryParams;
    security: FeeSchedulesReadSecurity;
}
export declare class FeeSchedulesReadResponse extends SpeakeasyBase {
    contentType: string;
    doctorFeeSchedule?: shared.DoctorFeeSchedule;
    statusCode: number;
}
