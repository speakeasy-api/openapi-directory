import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceCollectionFilter } from "./resourcecollectionfilter";
/**
 * Success
 */
export declare class GetResourceCollectionResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceCollection?: ResourceCollectionFilter;
}
