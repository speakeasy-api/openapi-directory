import { SpeakeasyBase } from "../../../internal/utils";
import { NumberFilter } from "./numberfilter";
import { StringFilter } from "./stringfilter";
/**
 * Contains information on the details of a package filter.
 */
export declare class PackageFilter extends SpeakeasyBase {
    architecture?: StringFilter;
    epoch?: NumberFilter;
    name?: StringFilter;
    release?: StringFilter;
    /**
     * An object that describes the details of a string filter.
     */
    sourceLambdaLayerArn?: StringFilter;
    sourceLayerHash?: StringFilter;
    version?: StringFilter;
}
