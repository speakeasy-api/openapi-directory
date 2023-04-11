import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class DescribeDataRepositoryAssociationsRequest extends SpeakeasyBase {
    associationIds?: string[];
    /**
     * A list of <code>Filter</code> elements.
     */
    filters?: Filter[];
    maxResults?: number;
    /**
     * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
     */
    nextToken?: string;
}
