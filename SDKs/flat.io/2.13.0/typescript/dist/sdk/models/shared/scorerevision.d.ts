import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreRevisionStatistics } from "./scorerevisionstatistics";
/**
 * A score revision metadata
**/
export declare class ScoreRevision extends SpeakeasyBase {
    autosave?: boolean;
    collaborators?: string[];
    creationDate?: Date;
    description?: string;
    event?: string;
    id?: string;
    statistics?: ScoreRevisionStatistics;
    user?: string;
}
