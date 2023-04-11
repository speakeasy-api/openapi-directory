import { SpeakeasyBase } from "../../../internal/utils";
import { FilteredLogEvent } from "./filteredlogevent";
import { SearchedLogStream } from "./searchedlogstream";
/**
 * Success
 */
export declare class FilterLogEventsResponse extends SpeakeasyBase {
    events?: FilteredLogEvent[];
    nextToken?: string;
    searchedLogStreams?: SearchedLogStream[];
}
