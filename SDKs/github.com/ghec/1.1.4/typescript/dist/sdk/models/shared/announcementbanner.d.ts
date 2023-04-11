import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Announcement at either the repository, organization, or enterprise level
 */
export declare class AnnouncementBanner extends SpeakeasyBase {
    /**
     * The announcement text in GitHub Flavored Markdown. For more information about GitHub Flavored Markdown, see "[Basic writing and formatting syntax](https://docs.github.com/enterprise-cloud@latest//github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)."
     */
    announcement: string;
    /**
     * The time at which the announcement expires. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. To set an announcement that never expires, omit this parameter, set it to `null`, or set it to an empty string.
     */
    expiresAt: Date;
    /**
     * Whether an announcement can be dismissed by the user.
     */
    userDismissible: boolean;
}
