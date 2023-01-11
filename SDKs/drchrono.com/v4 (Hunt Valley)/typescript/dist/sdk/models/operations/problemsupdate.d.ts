import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProblemsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ProblemsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class ProblemsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ProblemsUpdateRequest extends SpeakeasyBase {
    pathParams: ProblemsUpdatePathParams;
    queryParams: ProblemsUpdateQueryParams;
    security: ProblemsUpdateSecurity;
}
export declare class ProblemsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
