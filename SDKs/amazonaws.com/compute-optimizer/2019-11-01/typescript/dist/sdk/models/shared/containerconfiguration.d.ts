import { SpeakeasyBase } from "../../../internal/utils";
import { MemorySizeConfiguration } from "./memorysizeconfiguration";
/**
 *  Describes the container configurations within the tasks of your Amazon ECS service.
 */
export declare class ContainerConfiguration extends SpeakeasyBase {
    containerName?: string;
    cpu?: number;
    memorySizeConfiguration?: MemorySizeConfiguration;
}
