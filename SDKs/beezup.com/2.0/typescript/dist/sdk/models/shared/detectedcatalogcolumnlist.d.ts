import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedCatalogColumn } from "./detectedcatalogcolumn";
import { DetectedCatalogColumnListLinks } from "./detectedcatalogcolumnlistlinks";
/**
 * The list of detected catalog column
 */
export declare class DetectedCatalogColumnList extends SpeakeasyBase {
    /**
     * Contains all deteted catalog columns
     */
    detectedCatalogColumns?: DetectedCatalogColumn[];
    links: DetectedCatalogColumnListLinks;
}
