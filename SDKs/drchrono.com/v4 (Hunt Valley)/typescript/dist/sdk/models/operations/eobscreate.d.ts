import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EobsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class EobsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class EobsCreateRequest extends SpeakeasyBase {
    queryParams: EobsCreateQueryParams;
    security: EobsCreateSecurity;
}
export declare class EobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    eobObject?: shared.EobObject;
    statusCode: number;
}
