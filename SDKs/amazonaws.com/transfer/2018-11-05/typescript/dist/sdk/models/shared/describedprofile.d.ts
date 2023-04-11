import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileTypeEnum } from "./profiletypeenum";
import { Tag } from "./tag";
/**
 * The details for a local or partner AS2 profile.
 */
export declare class DescribedProfile extends SpeakeasyBase {
    arn: string;
    as2Id?: string;
    certificateIds?: string[];
    profileId?: string;
    profileType?: ProfileTypeEnum;
    tags?: Tag[];
}
