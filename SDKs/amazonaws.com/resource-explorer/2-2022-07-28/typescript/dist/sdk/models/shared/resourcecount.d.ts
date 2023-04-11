import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Information about the number of results that match the query. At this time, Amazon Web Services Resource Explorer doesn't count more than 1,000 matches for any query. This structure provides information about whether the query exceeded this limit.</p> <p>This field is included in every page when you paginate the results.</p>
 */
export declare class ResourceCount extends SpeakeasyBase {
    complete?: boolean;
    totalResources?: number;
}
