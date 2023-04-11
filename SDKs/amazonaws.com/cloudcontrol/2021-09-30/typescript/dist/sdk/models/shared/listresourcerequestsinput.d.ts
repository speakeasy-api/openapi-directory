import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRequestStatusFilter } from "./resourcerequeststatusfilter";
export declare class ListResourceRequestsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceRequestStatusFilter?: ResourceRequestStatusFilter;
}
