import { SpeakeasyBase } from "../../../internal/utils";
import { VectorEnrichmentJobExportErrorTypeEnum } from "./vectorenrichmentjobexporterrortypeenum";
/**
 * VectorEnrichmentJob export error details in response from GetVectorEnrichmentJob.
 */
export declare class VectorEnrichmentJobExportErrorDetails extends SpeakeasyBase {
    message?: string;
    type?: VectorEnrichmentJobExportErrorTypeEnum;
}
