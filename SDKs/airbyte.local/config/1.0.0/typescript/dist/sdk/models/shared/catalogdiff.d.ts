import { SpeakeasyBase } from "../../../internal/utils";
import { StreamTransform } from "./streamtransform";
/**
 * Describes the difference between two Airbyte catalogs.
 */
export declare class CatalogDiff extends SpeakeasyBase {
    /**
     * list of stream transformations. order does not matter.
     */
    transforms: StreamTransform[];
}
