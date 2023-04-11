import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardExportJobSortByEnum } from "./modelcardexportjobsortbyenum";
import { ModelCardExportJobSortOrderEnum } from "./modelcardexportjobsortorderenum";
import { ModelCardExportJobStatusEnum } from "./modelcardexportjobstatusenum";
export declare class ListModelCardExportJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    modelCardExportJobNameContains?: string;
    modelCardName: string;
    modelCardVersion?: number;
    nextToken?: string;
    sortBy?: ModelCardExportJobSortByEnum;
    sortOrder?: ModelCardExportJobSortOrderEnum;
    statusEquals?: ModelCardExportJobStatusEnum;
}
