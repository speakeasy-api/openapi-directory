import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
import { Weight } from "./weight";
/**
 * This complex type specifies the dimensions and weight of a package.
 */
export declare class PackageSpecification extends SpeakeasyBase {
    /**
     * This complex type defines the dimensions of a package to be shipped.
     */
    dimensions?: Dimensions;
    /**
     * This complex type contains information about the weight of an object such as a shipping package.
     */
    weight?: Weight;
}
