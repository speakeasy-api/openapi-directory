import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainerState extends SpeakeasyBase {
    /**
     * The exit code indicating the root cause of why the container exited. Review the Docker API documentation to find a list of exit codes and their meaning.
     */
    exitCode?: string;
    /**
     * Time when the container stopped.
     */
    finishedAt?: string;
    /**
     * Not supported by IBM Containers, empty string
     */
    ghost?: string;
    /**
     * The process ID on the compute host that runs the container process.
     */
    pid?: number;
    /**
     * If set to true, the container is in a RUNNING state. If set to false, the container has stopped or crashed.
     */
    running?: boolean;
    /**
     * Time when the container started.
     */
    startedAt?: string;
    /**
     * The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
     */
    status?: string;
}
