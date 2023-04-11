import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The instance details to specify which volumes should be snapshotted.
 */
export declare class InstanceSpecification extends SpeakeasyBase {
    excludeBootVolume?: boolean;
    excludeDataVolumeIds?: string[];
    instanceId: string;
}
