import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerConfig } from "./containerconfig";
export declare class ImageDetailConfig extends SpeakeasyBase {
    argsEscaped?: boolean;
    /**
     * Attaches the container to stderr.
     */
    attachStderr?: boolean;
    /**
     * Attaches the container to stdin.
     */
    attachStdin?: boolean;
    /**
     * Attaches the container to stdout.
     */
    attachStdout?: boolean;
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
    domainmame?: string;
    /**
     * The entrypoint specifies a command that will always be executed when the container starts.
     */
    entrypoint?: string;
    /**
     * A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value.
     */
    env?: string[];
    /**
     * A list of all udp and tcp ports that have been publicly exposed during the container creation.
     */
    exposedPorts?: string[];
    /**
     * The host name of the container provided by Openstack.
     */
    hostname?: string;
    /**
     * The unique ID of the image.
     */
    image?: string;
    /**
     * List of custom metadata that was added to the image. Labels serve a wide range of uses, such as adding notes or license requirements to an image. Every label is a key/ value pair.
     */
    labels?: string[];
    /**
     * ???
     */
    onBuild?: string[];
    /**
     * When set to true, it opens stdin.
     */
    openStdin?: boolean;
    /**
     * When set to true it closes stdin after the attached client disconnects.
     */
    stdinOnce?: boolean;
    /**
     * When set to true, attach standard streams to a tty, including stdin if it is not closed.
     */
    tty?: boolean;
    /**
     * The user to be used inside the container.
     */
    user?: string;
    /**
     * Docker specific. Not supported by IBM Containers. The path to the volume that is created when deploying a container from the image. To use a volume in IBM Containers, you must first create a volume and then mount it to your container during creation.
     */
    volumes?: string;
    /**
     * The working directory inside the container where specified commands are executed.
     */
    workingDir?: string;
}
/**
 * OK. A list of details about the container image is returned.
 */
export declare class ImageDetail extends SpeakeasyBase {
    /**
     * The hardware architecture for which the image was built for. The architecture can either be Intel (amd64) or Power (ppc64le).
     */
    architecture?: string;
    config?: ImageDetailConfig;
    /**
     * ???
     */
    container?: string;
    containerConfig?: ContainerConfig;
    /**
     * The time when the image was created.
     */
    created?: string;
    /**
     * ???
     */
    dockerVersion?: string;
    /**
     * Unique ID of the image that you inspected.
     */
    id?: string;
    /**
     * ???
     */
    os?: string;
    /**
     * The ID of the parent image that was used to build this image.
     */
    parent?: string;
    /**
     * The real size of the image.
     */
    size?: number;
    /**
     * The version of the image
     */
    tag?: string;
    /**
     * ???
     */
    throwaway?: string;
    /**
     * The virtual size of the image.
     */
    virtualSize?: number;
}
