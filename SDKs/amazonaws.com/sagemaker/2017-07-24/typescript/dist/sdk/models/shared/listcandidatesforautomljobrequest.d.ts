import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLSortOrderEnum } from "./automlsortorderenum";
import { CandidateSortByEnum } from "./candidatesortbyenum";
import { CandidateStatusEnum } from "./candidatestatusenum";
export declare class ListCandidatesForAutoMLJobRequest extends SpeakeasyBase {
    autoMLJobName: string;
    candidateNameEquals?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: CandidateSortByEnum;
    sortOrder?: AutoMLSortOrderEnum;
    statusEquals?: CandidateStatusEnum;
}
