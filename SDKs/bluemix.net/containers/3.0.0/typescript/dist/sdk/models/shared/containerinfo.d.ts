import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerConfig } from "./containerconfig";
import { ContainerState } from "./containerstate";
import { Group } from "./group";
import { HostConfig } from "./hostconfig";
import { NetworkSetting } from "./networksetting";
import { Volume } from "./volume";
/**
 * OK. A list with detailed information about the container is returned.
 */
export declare class ContainerInfo extends SpeakeasyBase {
    /**
     * The name of the Cloud Foundry app that was bound to the container during creation.
     */
    bluemixApp?: string;
    /**
     * The name of the Bluemix service instance that was bound to the container during creation.
     */
    bluemixServices?: string;
    config?: ContainerConfig;
    /**
     * The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
     */
    containerState?: string;
    /**
     * The date and time the container was created.
     */
    created?: Date;
    group?: Group;
    hostConfig?: HostConfig;
    /**
     * The ID representing the physical compute host.
     */
    hostId?: string;
    /**
     * The name of the container.
     */
    humanId?: string;
    /**
     * Unique identifier representing a container.
     */
    id?: string;
    /**
     * Unique identifier representing a container image.
     */
    image?: string;
    /**
     * A list of volumes that are mounted to the container.
     */
    mounts?: string[];
    /**
     * The name of the container.
     */
    name?: string;
    networkSettings?: NetworkSetting;
    /**
     * The environment variable indicating the binary location.
     */
    path?: string;
    /**
     * Path to the resolve.conf file inside the container. The resolve.conf file is used to resolve the DNS servers.
     */
    resolveConfPath?: string;
    state?: ContainerState;
    volumes?: Volume;
    /**
     * LIst of volumes that is mounted to the container.
     */
    volumesRW?: string[];
}
