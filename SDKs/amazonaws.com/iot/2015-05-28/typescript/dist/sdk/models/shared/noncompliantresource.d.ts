import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Information about the resource that was noncompliant with the audit check.
 */
export declare class NonCompliantResource extends SpeakeasyBase {
    additionalInfo?: Record<string, string>;
    resourceIdentifier?: ResourceIdentifier;
    resourceType?: ResourceTypeEnum;
}
