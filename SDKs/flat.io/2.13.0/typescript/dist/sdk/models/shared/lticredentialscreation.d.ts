import { SpeakeasyBase } from "../../../internal/utils";
import { LmsNameEnum } from "./lmsnameenum";
/**
 * Creation of a couple of LTI 1.x OAuth credentials
 */
export declare class LtiCredentialsCreation extends SpeakeasyBase {
    /**
     * LMS name
     */
    lms: LmsNameEnum;
    /**
     * Name of the couple of credentials
     */
    name: string;
}
