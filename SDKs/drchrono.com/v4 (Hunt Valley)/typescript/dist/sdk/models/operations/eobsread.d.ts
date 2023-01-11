import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EobsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EobsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class EobsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class EobsReadRequest extends SpeakeasyBase {
    pathParams: EobsReadPathParams;
    queryParams: EobsReadQueryParams;
    security: EobsReadSecurity;
}
export declare class EobsReadResponse extends SpeakeasyBase {
    contentType: string;
    eobObject?: shared.EobObject;
    statusCode: number;
}
