import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Information about a related resource.
 */
export declare class RelatedResource extends SpeakeasyBase {
    additionalInfo?: Record<string, string>;
    resourceIdentifier?: ResourceIdentifier;
    resourceType?: ResourceTypeEnum;
}
