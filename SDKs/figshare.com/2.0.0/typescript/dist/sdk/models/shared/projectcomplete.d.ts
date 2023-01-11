import { SpeakeasyBase } from "../../../internal/utils";
import { Collaborator } from "./collaborator";
import { FundingInformation } from "./fundinginformation";
export declare class ProjectComplete extends SpeakeasyBase {
    collaborators?: Collaborator[];
    description?: string;
    figshareUrl?: string;
    funding?: string;
    fundingList?: FundingInformation[];
    id?: number;
    publishedDate?: string;
    title?: string;
    url?: string;
}
