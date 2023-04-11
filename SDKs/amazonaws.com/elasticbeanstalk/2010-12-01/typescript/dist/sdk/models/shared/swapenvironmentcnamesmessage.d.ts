import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Swaps the CNAMEs of two environments.
 */
export declare class SwapEnvironmentCNAMEsMessage extends SpeakeasyBase {
    destinationEnvironmentId?: string;
    destinationEnvironmentName?: string;
    sourceEnvironmentId?: string;
    sourceEnvironmentName?: string;
}
