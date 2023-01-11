import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OfficesAddExamRoomPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OfficesAddExamRoomQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class OfficesAddExamRoomSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class OfficesAddExamRoomRequest extends SpeakeasyBase {
    pathParams: OfficesAddExamRoomPathParams;
    queryParams: OfficesAddExamRoomQueryParams;
    security: OfficesAddExamRoomSecurity;
}
export declare class OfficesAddExamRoomResponse extends SpeakeasyBase {
    contentType: string;
    office?: shared.Office;
    statusCode: number;
}
