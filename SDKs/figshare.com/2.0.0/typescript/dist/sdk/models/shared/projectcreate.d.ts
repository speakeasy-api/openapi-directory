import { SpeakeasyBase } from "../../../internal/utils";
import { FundingCreate } from "./fundingcreate";
export declare class ProjectCreate extends SpeakeasyBase {
    description?: string;
    funding?: string;
    fundingList?: FundingCreate[];
    groupId?: number;
    title: string;
}
