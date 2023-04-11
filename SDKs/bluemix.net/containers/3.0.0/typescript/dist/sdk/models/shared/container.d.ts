import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { NetworkSetting } from "./networksetting";
import { Port } from "./port";
export declare class Container extends SpeakeasyBase {
    /**
     * The command and arguments that were passed to the container during container creation. This command is executed when the container is started.
     */
    command?: string;
    /**
     * The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED.
     */
    containerState?: string;
    /**
     * The time when the container was created.
     */
    created?: number;
    /**
     * A list of all the environment variables of the container.
     */
    env?: string[];
    group?: Group;
    /**
     * Unique identifier representing a container.
     */
    id?: string;
    /**
     * Full path to the container image in your private Bluemix registry.
     */
    image?: string;
    /**
     * Unique identifier representing a container image.
     */
    imageId?: string;
    /**
     * List of custom metadata that was added to the container. Labels serve a wide range of uses, such as adding notes to a container. Every label is a key/ value pair.
     */
    labels?: Record<string, any>;
    /**
     * The amount of container memory in Megabyte that was assigned to your container. The memory is counted towards the quota that is allocated for the space.
     */
    memory?: number;
    /**
     * The name of the container.
     */
    name?: string;
    /**
     * The name of the container.
     */
    names?: string[];
    networkSettings?: NetworkSetting;
    ports?: Port;
    /**
     * Total size of all the files in the container, in bytes.
     */
    sizeRootFs?: number;
    /**
     * The size of the files which have been created or changed, if you compare the container to its base image. Just after creation, this should be zero. Ass you modify (or create) files, this size will increase.
     */
    sizeRw?: number;
    /**
     * Time when the container was started.
     */
    started?: number;
    /**
     * The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED
     */
    status?: string;
    /**
     * Number of virtual CPUs that are assigned to the container.
     */
    vcpu?: number;
}
