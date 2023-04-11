import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OfficesAddExamRoomSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class OfficesAddExamRoomRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class OfficesAddExamRoomResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    office?: shared.Office;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
