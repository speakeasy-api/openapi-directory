import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
import { TargetLocation } from "./targetlocation";
/**
 * <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note>
 */
export declare class Runbook extends SpeakeasyBase {
    documentName: string;
    documentVersion?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    parameters?: Record<string, string[]>;
    targetLocations?: TargetLocation[];
    targetMaps?: Record<string, string[]>[];
    targetParameterName?: string;
    targets?: Target[];
}
