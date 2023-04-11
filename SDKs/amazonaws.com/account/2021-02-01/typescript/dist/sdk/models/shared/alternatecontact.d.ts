import { SpeakeasyBase } from "../../../internal/utils";
import { AlternateContactTypeEnum } from "./alternatecontacttypeenum";
/**
 * A structure that contains the details of an alternate contact associated with an Amazon Web Services account
 */
export declare class AlternateContact extends SpeakeasyBase {
    alternateContactType?: AlternateContactTypeEnum;
    emailAddress?: string;
    name?: string;
    phoneNumber?: string;
    title?: string;
}
