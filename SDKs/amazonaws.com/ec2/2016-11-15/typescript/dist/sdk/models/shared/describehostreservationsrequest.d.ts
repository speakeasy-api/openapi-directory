import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeHostReservationsRequest extends SpeakeasyBase {
    filter?: FilterList[];
    hostReservationIdSet?: string[];
    maxResults?: number;
    nextToken?: string;
}
