import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyIdAnnouncementsSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyIdAnnouncementsRequest extends SpeakeasyBase {
    /**
     * If this parameter is set to false, you will only receive ids, and no additional data about announcements and no hits to the metric will be counted. (and potentially minimizing your costs)
     */
    data?: boolean;
    /**
     * company hex ID
     */
    id: string;
    /**
     * limit of announcements in response (default 10)
     */
    limit?: number;
    /**
     * to paginate through results (default 0)
     */
    offset?: number;
}
/**
 * Detailed information about the error
 */
export declare class CompanyIdAnnouncementsDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyIdAnnouncements200ApplicationJSON extends SpeakeasyBase {
    countryCode?: string;
    id?: string;
    registrationNumber?: string;
    structured?: string;
    text?: string;
    time?: Date;
    type?: string;
}
export declare class CompanyIdAnnouncementsResponse extends SpeakeasyBase {
    /**
     * List of announcements
     */
    companyIdAnnouncements200ApplicationJSONObjects?: CompanyIdAnnouncements200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyIdAnnouncementsDefaultApplicationJSONObject?: CompanyIdAnnouncementsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
