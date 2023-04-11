import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Stores information for generating Amplify DataStore queries. Use a <code>Predicate</code> to retrieve a subset of the data in a collection.
 */
export declare class Predicate extends SpeakeasyBase {
    and?: Predicate[];
    field?: string;
    operand?: string;
    operator?: string;
    or?: Predicate[];
}
