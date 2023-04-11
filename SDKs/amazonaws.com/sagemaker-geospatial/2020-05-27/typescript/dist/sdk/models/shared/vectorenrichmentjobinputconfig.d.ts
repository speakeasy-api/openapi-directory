import { SpeakeasyBase } from "../../../internal/utils";
import { VectorEnrichmentJobDataSourceConfigInput } from "./vectorenrichmentjobdatasourceconfiginput";
import { VectorEnrichmentJobDocumentTypeEnum } from "./vectorenrichmentjobdocumenttypeenum";
/**
 * The input structure for the InputConfig in a VectorEnrichmentJob.
 */
export declare class VectorEnrichmentJobInputConfig extends SpeakeasyBase {
    dataSourceConfig: VectorEnrichmentJobDataSourceConfigInput;
    documentType: VectorEnrichmentJobDocumentTypeEnum;
}
