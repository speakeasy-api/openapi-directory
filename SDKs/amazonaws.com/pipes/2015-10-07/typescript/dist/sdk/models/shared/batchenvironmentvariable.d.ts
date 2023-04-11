import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.</p> <note> <p>Environment variables cannot start with "<code>Batch</code>". This naming convention is reserved for variables that Batch sets.</p> </note>
 */
export declare class BatchEnvironmentVariable extends SpeakeasyBase {
    name?: string;
    value?: string;
}
