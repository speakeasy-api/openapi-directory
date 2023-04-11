import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainerConfig extends SpeakeasyBase {
    argsEscaped?: boolean;
    /**
     * Attaches the container to stderr.
     */
    attachStderr?: string;
    /**
     * Attaches the container to sdtin.
     */
    attachStdin?: string;
    /**
     * Attaches the container to stdout.
     */
    attachStdout?: string;
    /**
     * The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
     *
     * @remarks
     *
     */
    cmd?: string[];
    /**
     * The domain name to be used for the container.
     */
    domainname?: string;
    /**
     * A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value.
     */
    env?: string[];
    /**
     * List of public ports that were exposed during container creation.
     */
    exposedPorts?: string[];
    /**
     * The host name to be used for the container.
     */
    hostname?: string;
    /**
     * Full path to the image that the container is based on in your private Bluemix registry.
     */
    image?: string;
    /**
     * The hardware architecture the image is based on. It can either be 'amd64' indicating an Intel-based architecture, or 'ppc64le' representing a Power-based architecture.
     */
    imageArchitecture?: string;
    /**
     * List of custom metadata that was added to the container. Labels serve a wide range of uses, such as adding notes to a container. Every label is a key/ value pair.
     */
    labels?: string[];
    /**
     * The amount of container memory that is assigned to the container in Megabyte.
     */
    memory?: number;
    /**
     * The total container memory limit (memory + swap)
     */
    memorySwap?: string;
    /**
     * When set to true, it opens stdin.
     */
    openStdin?: string;
    /**
     * Not supported by IBM Containers, empty string.
     */
    portSpecs?: string;
    /**
     * When set to true it closes stdin after the attached client disconnects.
     */
    stdinOnce?: string;
    /**
     * When set to true, attach standard streams to a tty, including stdin if it is not closed.
     */
    tty?: string;
    /**
     * User to be used inside the container.
     */
    user?: string;
    /**
     * Number of virtual CPUs that are assigned to the container.
     */
    vcpu?: number;
    /**
     * List of volumes to inherit from another container. This feature is not supported in IBM Containers.
     */
    volumesFrom?: string;
    /**
     * The working directory inside the container where specified commands are executed.
     */
    workingDir?: string;
}
