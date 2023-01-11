import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class AnalysisDetail extends SpeakeasyBase {
    config?: string;
    dateFinished?: Date;
    dateLastModified?: Date;
    dateLaunched?: Date;
    failures?: string;
    features?: string;
    id?: number;
    name?: string;
    redButtonDomain?: string;
    slug?: string;
    url?: string;
    urlsDone?: string;
    urlsInQueue?: string;
    user: User;
}
