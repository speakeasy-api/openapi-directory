import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AmendmentsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AmendmentsUpdateQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    patient?: number;
}
export declare class AmendmentsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AmendmentsUpdateRequest extends SpeakeasyBase {
    pathParams: AmendmentsUpdatePathParams;
    queryParams: AmendmentsUpdateQueryParams;
    security: AmendmentsUpdateSecurity;
}
export declare class AmendmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
