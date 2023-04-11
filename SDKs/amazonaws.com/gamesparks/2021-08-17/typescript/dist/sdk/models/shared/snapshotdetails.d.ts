import { SpeakeasyBase } from "../../../internal/utils";
import { Section } from "./section";
/**
 * Properties that provide details of a snapshot.
 */
export declare class SnapshotDetails extends SpeakeasyBase {
    created?: Date;
    description?: string;
    id?: string;
    lastUpdated?: Date;
    sections?: Record<string, Section>;
}
