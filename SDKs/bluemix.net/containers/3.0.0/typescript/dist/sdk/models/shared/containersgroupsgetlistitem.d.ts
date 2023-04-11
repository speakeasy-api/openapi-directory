import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainersGroupsGetListItem extends SpeakeasyBase {
    /**
     * Time when the container group is created.
     */
    creationTime?: string;
    /**
     * Unique identifier of the container group.
     */
    id?: string;
    /**
     * Name of the container group.
     */
    name?: string;
    /**
     * The port number that is exposed to the public during container group creation.
     */
    port?: number;
    /**
     * The public route that is mapped to the container group. You can use this route to access your container group from the Internet.
     */
    routes?: string[];
    /**
     * Current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE)
     */
    status?: string;
    /**
     * Time when the container group is changed and updated.
     */
    updatedTime?: string;
}
