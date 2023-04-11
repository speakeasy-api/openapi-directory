import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceEnum } from "./resourceenum";
import { ResourceIdTypeEnum } from "./resourceidtypeenum";
/**
 * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
 */
export declare class ResourceIdPreference extends SpeakeasyBase {
    resourceIdType?: ResourceIdTypeEnum;
    resources?: ResourceEnum[];
}
