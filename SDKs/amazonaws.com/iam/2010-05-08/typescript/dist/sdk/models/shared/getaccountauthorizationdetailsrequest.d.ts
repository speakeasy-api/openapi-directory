import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class GetAccountAuthorizationDetailsRequest extends SpeakeasyBase {
    filter?: EntityTypeEnum[];
    marker?: string;
    maxItems?: number;
}
