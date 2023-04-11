import { SpeakeasyBase } from "../../../internal/utils";
import { MemorySizeConfiguration } from "./memorysizeconfiguration";
/**
 *  The CPU and memory recommendations for a container within the tasks of your Amazon ECS service.
 */
export declare class ContainerRecommendation extends SpeakeasyBase {
    containerName?: string;
    cpu?: number;
    memorySizeConfiguration?: MemorySizeConfiguration;
}
