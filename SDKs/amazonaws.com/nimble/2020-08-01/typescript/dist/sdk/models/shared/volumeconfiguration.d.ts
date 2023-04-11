import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>
 */
export declare class VolumeConfiguration extends SpeakeasyBase {
    iops?: number;
    size?: number;
    throughput?: number;
}
