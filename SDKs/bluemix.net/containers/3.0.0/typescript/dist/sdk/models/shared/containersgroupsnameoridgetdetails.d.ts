import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainersGroupsNameOrIdGetDetailsNumberInstances extends SpeakeasyBase {
    /**
     * The current number of container instances that are running in your container group.
     */
    currentSize?: number;
    /**
     * The number of container instances that you require.
     */
    desired?: number;
    /**
     * The maximum number of container instance that you want to run in your container group.
     */
    max?: number;
    /**
     * The minimum number of container instances that you want to run in your container group.
     */
    min?: number;
}
export declare class ContainersGroupsNameOrIdGetDetailsRouteStatus extends SpeakeasyBase {
    /**
     * Can be either true or false. If set to true, then the route is in the process of being mapped to the container group and set up in the GoRouter. Is set to false, then the set up of the route is completed.
     */
    inProgress?: boolean;
    /**
     * Info message for the user.
     */
    message?: string;
    /**
     * Can be either true or false. If set to true, then the route is successfully registrered with the GoRouter. If set to false, then the route registration has not yet finished yet or could not be completed without errors.
     */
    successful?: boolean;
}
/**
 * OK. A detailed list of information about a container group is retrieved.
 */
export declare class ContainersGroupsNameOrIdGetDetails extends SpeakeasyBase {
    /**
     * If set to `true` the container instances in the group are spread across separate physical compute nodes, which reduces the likelihood of containers crashing due to hardware failures. If set to `false`, the container instances in the group share the same physical compute node.
     */
    antiAffinity?: string;
    /**
     * Can be either true or false. If set to true, the Autorecovery mode is enabled for your container group. In case a container instance crashes or stops, this instance is removed and a new one is automatically recreated. If set to false, the Autorecovery mode is disabled. In case a container instances crashes or stops, it is not automatically recreated by IBM Containers.
     */
    autorecovery?: string;
    /**
     * Current IBM Containers availability zone on Openstack.
     */
    availabilityZone?: string;
    /**
     * The Docker command that was specified to be run when the container instances are started.
     */
    cmd?: string[];
    /**
     * Timestamp when the container group was created.
     */
    creationTime?: string;
    /**
     * The list of environmental variables that were defined for the container group. Each environment variable consists of a unique key and a value.
     */
    env?: string[];
    /**
     * Unique identifier representing a specific container group.
     */
    id?: string;
    /**
     * The unique ID of the container image your container group instances are based on.
     */
    image?: string;
    /**
     * The full path to the container image in your private Bluemix repository.
     */
    imageName?: string;
    /**
     * The size of each container instance that runs in the container group in MegaByte.
     */
    memory?: number;
    /**
     * The name of the container group.
     */
    name?: string;
    numberInstances?: ContainersGroupsNameOrIdGetDetailsNumberInstances;
    /**
     * The public port that has been exposed. If you specified a route, your container group is accessible from the Internet.
     */
    port?: number;
    routeStatus?: ContainersGroupsNameOrIdGetDetailsRouteStatus;
    /**
     * The public route that is mapped to the container group. When you expose a public port, you can use the route to access your container group from the Internet.
     */
    routes?: string[];
    /**
     * The current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE)
     */
    status?: string;
    /**
     * Timestamp when the container group was updated. If the container group was not updated before, `null` is returned.
     */
    updatedTime?: string;
    /**
     * List of volumes to be associated with the container, in the format of volume name:path:mode where mode can be ro or rw.
     */
    volumes?: string[];
}
