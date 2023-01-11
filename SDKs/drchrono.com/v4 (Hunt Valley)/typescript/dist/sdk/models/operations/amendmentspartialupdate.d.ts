import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AmendmentsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AmendmentsPartialUpdateQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    patient?: number;
}
export declare class AmendmentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AmendmentsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: AmendmentsPartialUpdatePathParams;
    queryParams: AmendmentsPartialUpdateQueryParams;
    security: AmendmentsPartialUpdateSecurity;
}
export declare class AmendmentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
