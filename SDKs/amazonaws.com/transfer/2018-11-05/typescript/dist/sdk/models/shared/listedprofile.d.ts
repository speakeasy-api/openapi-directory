import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileTypeEnum } from "./profiletypeenum";
/**
 * Returns the properties of the profile that was specified.
 */
export declare class ListedProfile extends SpeakeasyBase {
    arn?: string;
    as2Id?: string;
    profileId?: string;
    profileType?: ProfileTypeEnum;
}
