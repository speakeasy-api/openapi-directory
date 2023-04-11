import { SpeakeasyBase } from "../../../internal/utils";
export declare class HostConfig extends SpeakeasyBase {
    /**
     * A list of volumes to be bound to the container. Each volume must be listed in the following format: VOLNAME:/CONTAINER_PATH:rw [ro].
     */
    binds?: string[];
    /**
     * A list of hostnames/IP mappings to be added to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
     *
     * @remarks
     *
     */
    extraHosts?: string[];
    /**
     * A list of containers that need to be linked.
     */
    links?: string[];
    /**
     * The container ports that you want to expose to the public. Ports need to be specified in the form of &lt;port&gt;/&lt;protocol&gt;: [{ "HostIp": "&lt;IP&gt;", "HostPort": "&lt;port&gt;" }]
     *
     * @remarks
     *
     */
    portBindings?: string[];
}
