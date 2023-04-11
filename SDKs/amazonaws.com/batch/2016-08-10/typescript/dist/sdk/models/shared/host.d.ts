import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
 */
export declare class Host extends SpeakeasyBase {
    sourcePath?: string;
}
