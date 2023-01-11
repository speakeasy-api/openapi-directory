import { SpeakeasyBase } from "../../../internal/utils";
import { LmsNameEnum } from "./lmsnameenum";
/**
 * A couple of LTI 1.x OAuth credentials
**/
export declare class LtiCredentials extends SpeakeasyBase {
    consumerKey?: string;
    consumerSecret?: string;
    creationDate?: Date;
    creator?: string;
    id?: string;
    lastUsage?: Date;
    lms?: LmsNameEnum;
    name?: string;
    organization?: string;
}
