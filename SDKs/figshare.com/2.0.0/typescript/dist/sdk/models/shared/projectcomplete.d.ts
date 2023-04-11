import { SpeakeasyBase } from "../../../internal/utils";
import { Collaborator } from "./collaborator";
import { FundingInformation } from "./fundinginformation";
/**
 * OK. Project representation
 */
export declare class ProjectComplete extends SpeakeasyBase {
    /**
     * List of project collaborators
     */
    collaborators: Collaborator[];
    /**
     * Project description
     */
    description: string;
    /**
     * Project public url
     */
    figshareUrl: string;
    /**
     * Project funding
     */
    funding: string;
    /**
     * Full Project funding information
     */
    fundingList: FundingInformation[];
    /**
     * Project id
     */
    id: number;
    /**
     * Date when project was published
     */
    publishedDate: string;
    /**
     * Project title
     */
    title: string;
    /**
     * Api endpoint
     */
    url: string;
}
