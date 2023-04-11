import { SpeakeasyBase } from "../../../internal/utils";
import { LmsNameEnum } from "./lmsnameenum";
/**
 * A couple of LTI 1.x OAuth credentials
 */
export declare class LtiCredentials extends SpeakeasyBase {
    /**
     * OAuth 1 Consumer Key
     */
    consumerKey?: string;
    /**
     * OAuth 1 Consumer Secret
     */
    consumerSecret?: string;
    /**
     * The creation date of thse credentials
     */
    creationDate?: Date;
    /**
     * Unique identifier of the user who created these credentials
     */
    creator?: string;
    /**
     * The unique identifier of this couple of credentials
     */
    id?: string;
    /**
     * The last time these credentials were used
     */
    lastUsage?: Date;
    /**
     * LMS name
     */
    lms?: LmsNameEnum;
    /**
     * Name of the couple of credentials
     */
    name?: string;
    /**
     * The unique identifier of the Organization associated to these credentials
     */
    organization?: string;
}
