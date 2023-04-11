import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class ListResourcesForWebACLRequest extends SpeakeasyBase {
    resourceType?: ResourceTypeEnum;
    webACLId: string;
}
