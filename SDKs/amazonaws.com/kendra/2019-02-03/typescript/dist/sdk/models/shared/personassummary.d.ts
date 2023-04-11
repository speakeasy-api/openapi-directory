import { SpeakeasyBase } from "../../../internal/utils";
import { PersonaEnum } from "./personaenum";
/**
 * Summary information for users or groups in your IAM Identity Center identity source. This applies to users and groups with specific permissions that define their level of access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
 */
export declare class PersonasSummary extends SpeakeasyBase {
    createdAt?: Date;
    entityId?: string;
    persona?: PersonaEnum;
    updatedAt?: Date;
}
