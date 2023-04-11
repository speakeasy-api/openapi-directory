import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Successful operation
 */
export declare class AnalysisDetail extends SpeakeasyBase {
    config?: string;
    dateFinished?: Date;
    /**
     * Date of last modified analysis
     */
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
