import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceScoresFilters } from "./conformancepackcompliancescoresfilters";
import { SortByEnum } from "./sortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListConformancePackComplianceScoresRequest extends SpeakeasyBase {
    filters?: ConformancePackComplianceScoresFilters;
    limit?: number;
    nextToken?: string;
    sortBy?: SortByEnum;
    sortOrder?: SortOrderEnum;
}
