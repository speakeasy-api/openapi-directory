import { SpeakeasyBase } from "../../../internal/utils";
import { SortKeyTypeEnum } from "./sortkeytypeenum";
export declare class GetOrganizationsAccessReportRequest extends SpeakeasyBase {
    jobId: string;
    marker?: string;
    maxItems?: number;
    sortKey?: SortKeyTypeEnum;
}
