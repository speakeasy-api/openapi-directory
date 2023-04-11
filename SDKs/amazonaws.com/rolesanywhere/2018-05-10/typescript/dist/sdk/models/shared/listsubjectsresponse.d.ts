import { SpeakeasyBase } from "../../../internal/utils";
import { SubjectSummary } from "./subjectsummary";
/**
 * Success
 */
export declare class ListSubjectsResponse extends SpeakeasyBase {
    nextToken?: string;
    subjects?: SubjectSummary[];
}
