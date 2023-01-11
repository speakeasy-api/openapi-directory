import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { DetectedCatalogColumnLinks } from "./detectedcatalogcolumnlinks";
/**
 * The catalog column detected during the first parsing step
**/
export declare class DetectedCatalogColumn extends SpeakeasyBase {
    catalogColumnName: string;
    configuration: ColumnConfiguration;
    duplicateProductValueConfiguration?: DuplicateProductValueConfiguration;
    id: string;
    ignored?: boolean;
    links: DetectedCatalogColumnLinks;
    userColumName: string;
}
