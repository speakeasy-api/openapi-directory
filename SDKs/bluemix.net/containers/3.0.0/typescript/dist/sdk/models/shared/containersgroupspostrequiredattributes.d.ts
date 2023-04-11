import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainersGroupsPostRequiredAttributesNumberInstances extends SpeakeasyBase {
    /**
     * (Optional) The number of container instances that you require.
     */
    desired?: number;
    /**
     * (Optional) The maximum number of container instances that you want to run in your container group.
     */
    max?: number;
    /**
     * (Optional) The minimum number of container instances that need to run in your container group.
     */
    min?: number;
}
export declare class ContainersGroupsPostRequiredAttributesRoute extends SpeakeasyBase {
    /**
     * The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration.
     */
    domain?: string;
    /**
     * The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net.
     */
    host?: string;
}
/**
 * Attributes that are required to create a container group in your space.
 */
export declare class ContainersGroupsPostRequiredAttributes extends SpeakeasyBase {
    /**
     * (Optional) Enable the Auto-recovery mode for your container group. If set to true, IBM Containers checks the health of each instance with an HTTP request to the port that is assigned. If the health check does not receive a TCP response from a container instance in two subsequent 90-second intervals, the instance is removed and replaced with a new instance. If set to false and container instances crash, they are not recovered by IBM Containers.
     */
    autorecovery?: string;
    /**
     * (Optional) The name of the Cloud Foundry app that you created in your organization space.
     */
    bluemixApp?: string;
    /**
     * (Optional) Docker command that is passed to the container group to be run when the container instances are started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash.
     */
    cmd?: string[];
    /**
     * (Optional) List of environmental variables. Every environment variable that is listed here needs to be a key=value pair. Every key that you use needs to be unique for this container group. Multiple environment variables are separated with comma (,).
     */
    env?: string[];
    /**
     * (Required) The full path to your private Bluemix repository. If you want to use an image in your private Bluemix repository, specify the image in the following format: registry.ng.bluemix.net/NAMESPACE/IMAGE. If you want to use an IBM Containers provided image, do not include your organization's namespace. Specify the image in the following format: registry.ng.bluemix.net/IMAGE
     */
    image: string;
    /**
     * (Optional) The size of each container instance in the container group. The size of each container instance in the group. Choose one of the following sizes and enter the size in MegaBytes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB). If you do not specify a size, all container instances in this group are created with 256 MB.
     */
    memory?: number;
    /**
     * (Required) Name of the container group that you want to create. The name needs to be unique in your organization space and must start with a letter. Then, you can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
     */
    name: string;
    numberInstances?: ContainersGroupsPostRequiredAttributesNumberInstances;
    /**
     * (Optional) Expose a port for HTTP traffic to make your container group available from the Internet. Every container instance that is started for this group, listens on this port. Container groups cannot expose multiple ports. Note: You need to expose a port, when "Autorecovery" is set to true.
     */
    port?: number;
    route?: ContainersGroupsPostRequiredAttributesRoute;
    /**
     * (Optional) List of volumes to be mounted to the container instances of your container group. You need to create the volume first by using the cf ic volume-create command before you can mount a volume to a container group. When you specify a volume, use the following format: NAME:PATH:MODE. For NAME, use either the name or ID of the volume. For the PATH, enter the absolute path to the volume directory in the container. For MODE, enter either ro (read-only) or rw (read-write).
     */
    volumes?: string[];
}
