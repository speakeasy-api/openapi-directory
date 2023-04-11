import { SpeakeasyBase } from "../../../internal/utils";
import { IncludedProperty } from "./includedproperty";
import { SearchFilter } from "./searchfilter";
/**
 * A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION".
 */
export declare class View extends SpeakeasyBase {
    filters?: SearchFilter;
    includedProperties?: IncludedProperty[];
    lastUpdatedAt?: Date;
    owner?: string;
    scope?: string;
    viewArn?: string;
}
