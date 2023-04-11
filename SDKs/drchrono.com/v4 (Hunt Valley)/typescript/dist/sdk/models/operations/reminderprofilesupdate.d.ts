import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReminderProfilesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ReminderProfilesUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ReminderProfilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
