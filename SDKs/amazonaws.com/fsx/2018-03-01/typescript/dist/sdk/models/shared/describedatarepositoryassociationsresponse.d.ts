import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryAssociation } from "./datarepositoryassociation";
/**
 * Success
 */
export declare class DescribeDataRepositoryAssociationsResponse extends SpeakeasyBase {
    associations?: DataRepositoryAssociation[];
    /**
     * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
     */
    nextToken?: string;
}
