import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotFilter } from "./snapshotfilter";
export declare class DescribeSnapshotsRequest extends SpeakeasyBase {
    filters?: SnapshotFilter[];
    /**
     * The maximum number of resources to return in the response. This value must be an integer greater than zero.
     */
    maxResults?: number;
    /**
     * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
     */
    nextToken?: string;
    snapshotIds?: string[];
}
