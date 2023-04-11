import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileTypeEnum } from "./profiletypeenum";
import { Tag } from "./tag";
export declare class CreateProfileRequest extends SpeakeasyBase {
    as2Id: string;
    certificateIds?: string[];
    profileType: ProfileTypeEnum;
    tags?: Tag[];
}
