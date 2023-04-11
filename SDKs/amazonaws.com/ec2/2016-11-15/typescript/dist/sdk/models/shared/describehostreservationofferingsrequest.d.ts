import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeHostReservationOfferingsRequest extends SpeakeasyBase {
    filter?: FilterList[];
    maxDuration?: number;
    maxResults?: number;
    minDuration?: number;
    nextToken?: string;
    offeringId?: string;
}
