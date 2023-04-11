import { SpeakeasyBase } from "../../../internal/utils";
import { HostConfig } from "./hostconfig";
/**
 * Summary of input parameter to create a container in IBM Containers.
 */
export declare class CreateContainer extends SpeakeasyBase {
    /**
     * The name of the Cloud Foundry app that you want to bind to your container. The Cloud Foundry app must be created in the same space where you want to create your container.
     */
    bluemixApp?: string;
    /**
     * The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
     *
     * @remarks
     *
     */
    cmd?: string[];
    /**
     * Pins the container processes to a specific CPU core on the compute host. For example: 0 means that processes are executed on the first core only.
     */
    cpuset?: string;
    /**
     * A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value.
     */
    env?: string[];
    /**
     * All public ports that need to be exposed for the container, so the container can be accessed from the Internet.
     */
    exposedPorts?: string[];
    hostConfig?: HostConfig;
    /**
     * Full path to the image in your private Bluemix registry in the format `registry.ng.bluemix.net/namespace/image`.
     */
    image: string;
    /**
     * The container memory that is set for the container in Megabyte. Choose one of the following sizes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB).
     */
    memory?: number;
    /**
     * Number of virtual CPUs that are allocated to the container.
     */
    numberCpus?: number;
    /**
     * Mount a volume to a container by specifying the details in the following format: `VOLUME_NAME:/DIRECTORY_PATH[:ro]`. Example: testvolume:/volumedata/temp:rw. By default, all volumes will be set up with read-write access inside the container (rw). If you wish to set up your volume with read-only access, enter `ro`.  Note: To mount a volume to a container, you must create the volume in your space first by using the `cf ic volume-create` command, or calling the `POST /volumes/create endpoint`.
     */
    volumes?: string;
}
