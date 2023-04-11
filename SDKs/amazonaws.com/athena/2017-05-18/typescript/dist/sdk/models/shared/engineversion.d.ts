import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Athena engine version for running queries, or the PySpark engine version for running sessions.
 */
export declare class EngineVersion extends SpeakeasyBase {
    effectiveEngineVersion?: string;
    selectedEngineVersion?: string;
}
