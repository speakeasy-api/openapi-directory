import { SpeakeasyBase } from "../../../internal/utils";
import { PersonaEnum } from "./personaenum";
/**
 * Provides the configuration information for users or groups in your IAM Identity Center identity source for access to your Amazon Kendra experience. Specific permissions are defined for each user or group once they are granted access to your Amazon Kendra experience.
 */
export declare class EntityPersonaConfiguration extends SpeakeasyBase {
    entityId: string;
    persona: PersonaEnum;
}
