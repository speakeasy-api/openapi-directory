import { SpeakeasyBase } from "../../../internal/utils";
import { Storage } from "./storage";
/**
 * Contains the parameters for BundleInstance.
 */
export declare class BundleInstanceRequest extends SpeakeasyBase {
    dryRun?: boolean;
    instanceId: string;
    storage: Storage;
}
