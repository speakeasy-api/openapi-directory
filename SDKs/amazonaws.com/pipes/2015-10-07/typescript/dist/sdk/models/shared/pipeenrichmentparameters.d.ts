import { SpeakeasyBase } from "../../../internal/utils";
import { PipeEnrichmentHttpParameters } from "./pipeenrichmenthttpparameters";
/**
 * The parameters required to set up enrichment on your pipe.
 */
export declare class PipeEnrichmentParameters extends SpeakeasyBase {
    httpParameters?: PipeEnrichmentHttpParameters;
    inputTemplate?: string;
}
