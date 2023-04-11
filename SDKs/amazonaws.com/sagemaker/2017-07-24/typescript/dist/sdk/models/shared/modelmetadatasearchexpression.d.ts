import { SpeakeasyBase } from "../../../internal/utils";
import { ModelMetadataFilter } from "./modelmetadatafilter";
/**
 * One or more filters that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results
 */
export declare class ModelMetadataSearchExpression extends SpeakeasyBase {
    filters?: ModelMetadataFilter[];
}
