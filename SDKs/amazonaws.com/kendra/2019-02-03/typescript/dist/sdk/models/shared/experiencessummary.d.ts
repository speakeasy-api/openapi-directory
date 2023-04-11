import { SpeakeasyBase } from "../../../internal/utils";
import { ExperienceEndpoint } from "./experienceendpoint";
import { ExperienceStatusEnum } from "./experiencestatusenum";
/**
 * Summary information for your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
 */
export declare class ExperiencesSummary extends SpeakeasyBase {
    createdAt?: Date;
    endpoints?: ExperienceEndpoint[];
    id?: string;
    name?: string;
    status?: ExperienceStatusEnum;
}
