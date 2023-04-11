import { SpeakeasyBase } from "../../../internal/utils";
import { Predicate } from "./predicate";
import { SortProperty } from "./sortproperty";
/**
 * Describes the configuration for binding a component's properties to data.
 */
export declare class ComponentDataConfiguration extends SpeakeasyBase {
    identifiers?: string[];
    model: string;
    predicate?: Predicate;
    sort?: SortProperty[];
}
