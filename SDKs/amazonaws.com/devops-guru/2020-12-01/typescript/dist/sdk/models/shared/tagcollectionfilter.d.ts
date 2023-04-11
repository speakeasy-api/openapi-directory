import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of Amazon Web Services tags used to filter insights. This is used to return insights generated from only resources that contain the tags in the tag collection.
 */
export declare class TagCollectionFilter extends SpeakeasyBase {
    appBoundaryKey: string;
    tagValues: string[];
}
