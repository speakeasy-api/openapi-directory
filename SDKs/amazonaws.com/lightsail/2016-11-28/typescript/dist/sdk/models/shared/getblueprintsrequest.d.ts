import { SpeakeasyBase } from "../../../internal/utils";
import { AppCategoryEnum } from "./appcategoryenum";
export declare class GetBlueprintsRequest extends SpeakeasyBase {
    appCategory?: AppCategoryEnum;
    includeInactive?: boolean;
    pageToken?: string;
}
