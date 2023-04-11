import { SpeakeasyBase } from "../../../internal/utils";
import { OptedOutFilter } from "./optedoutfilter";
export declare class DescribeOptedOutNumbersRequest extends SpeakeasyBase {
    filters?: OptedOutFilter[];
    maxResults?: number;
    nextToken?: string;
    optOutListName: string;
    optedOutNumbers?: string[];
}
