import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileTypeEnum } from "./profiletypeenum";
export declare class ListProfilesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    profileType?: ProfileTypeEnum;
}
