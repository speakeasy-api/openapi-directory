import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
 */
export declare class EcsEnvironmentVariable extends SpeakeasyBase {
    name?: string;
    value?: string;
}
