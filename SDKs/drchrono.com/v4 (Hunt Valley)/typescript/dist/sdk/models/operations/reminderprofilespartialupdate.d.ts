import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReminderProfilesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ReminderProfilesPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ReminderProfilesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
