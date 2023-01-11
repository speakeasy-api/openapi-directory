import { SpeakeasyBase } from "../../../internal/utils";
import { FundingCreate } from "./fundingcreate";
export declare class ProjectUpdate extends SpeakeasyBase {
    description?: string;
    funding?: string;
    fundingList?: FundingCreate[];
    title?: string;
}
