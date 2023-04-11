import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyAnnouncementSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyAnnouncementRequest extends SpeakeasyBase {
    /**
     * announcement hex ID
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyAnnouncementDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyAnnouncement200ApplicationJSON extends SpeakeasyBase {
    countryCode?: string;
    id?: string;
    registrationNumber?: string;
    structured?: string;
    text?: string;
    time?: Date;
    type?: string;
}
export declare class CompanyAnnouncementResponse extends SpeakeasyBase {
    /**
     * List of announcements
     */
    companyAnnouncement200ApplicationJSONObjects?: CompanyAnnouncement200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyAnnouncementDefaultApplicationJSONObject?: CompanyAnnouncementDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
