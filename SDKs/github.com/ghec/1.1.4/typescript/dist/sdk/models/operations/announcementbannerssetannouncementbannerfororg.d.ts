import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnnouncementBannersSetAnnouncementBannerForOrgRequest extends SpeakeasyBase {
    announcement: shared.Announcement;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class AnnouncementBannersSetAnnouncementBannerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    announcementBanner?: shared.AnnouncementBanner;
}
