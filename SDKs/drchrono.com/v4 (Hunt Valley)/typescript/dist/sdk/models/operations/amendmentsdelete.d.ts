import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AmendmentsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AmendmentsDeleteQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    patient?: number;
}
export declare class AmendmentsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AmendmentsDeleteRequest extends SpeakeasyBase {
    pathParams: AmendmentsDeletePathParams;
    queryParams: AmendmentsDeleteQueryParams;
    security: AmendmentsDeleteSecurity;
}
export declare class AmendmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
