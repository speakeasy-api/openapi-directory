import { SpeakeasyBase } from "../../../internal/utils";
import { EntityDisplayData } from "./entitydisplaydata";
import { EntityTypeEnum } from "./entitytypeenum";
/**
 * Summary information for users or groups in your IAM Identity Center identity source with granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
 */
export declare class ExperienceEntitiesSummary extends SpeakeasyBase {
    displayData?: EntityDisplayData;
    entityId?: string;
    entityType?: EntityTypeEnum;
}
