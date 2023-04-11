import { SpeakeasyBase } from "../../../internal/utils";
import { VectorEnrichmentJobErrorTypeEnum } from "./vectorenrichmentjoberrortypeenum";
/**
 * VectorEnrichmentJob error details in response from GetVectorEnrichmentJob.
 */
export declare class VectorEnrichmentJobErrorDetails extends SpeakeasyBase {
    errorMessage?: string;
    errorType?: VectorEnrichmentJobErrorTypeEnum;
}
