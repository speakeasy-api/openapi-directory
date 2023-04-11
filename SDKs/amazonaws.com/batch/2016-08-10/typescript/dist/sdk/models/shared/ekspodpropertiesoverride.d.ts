import { SpeakeasyBase } from "../../../internal/utils";
import { EksContainerOverride } from "./ekscontaineroverride";
import { EksMetadata } from "./eksmetadata";
/**
 * An object that contains overrides for the Kubernetes pod properties of a job.
 */
export declare class EksPodPropertiesOverride extends SpeakeasyBase {
    containers?: EksContainerOverride[];
    metadata?: EksMetadata;
}
