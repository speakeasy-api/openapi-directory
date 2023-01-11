import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProblemsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ProblemsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class ProblemsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ProblemsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ProblemsPartialUpdatePathParams;
    queryParams: ProblemsPartialUpdateQueryParams;
    security: ProblemsPartialUpdateSecurity;
}
export declare class ProblemsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
