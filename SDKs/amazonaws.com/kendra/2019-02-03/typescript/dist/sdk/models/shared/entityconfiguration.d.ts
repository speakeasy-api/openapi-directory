import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
/**
 * Provides the configuration information for users or groups in your IAM Identity Center identity source to grant access your Amazon Kendra experience.
 */
export declare class EntityConfiguration extends SpeakeasyBase {
    entityId: string;
    entityType: EntityTypeEnum;
}
