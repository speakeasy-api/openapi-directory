import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class Analysis extends SpeakeasyBase {
    config?: string;
    dateCreated?: Date;
    dateFinished?: Date;
    dateLastModified?: Date;
    dateLaunched?: Date;
    features?: string;
    id?: number;
    name?: string;
    slug?: string;
    status?: string;
    url?: string;
    urlsDone?: string;
    urlsInQueue?: string;
    user: User;
}
