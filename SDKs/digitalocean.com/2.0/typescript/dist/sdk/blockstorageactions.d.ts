import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BlockStorageActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVolumeAction - Retrieve an Existing Volume Action
     *
     * To retrieve the status of a volume action, send a GET request to `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.
     *
     *
    **/
    getVolumeAction(req: operations.GetVolumeActionRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumeActionResponse>;
    /**
     * listAllVolumeActions - List All Actions for a Volume
     *
     * To retrieve all actions that have been executed on a volume, send a GET request to `/v2/volumes/$VOLUME_ID/actions`.
     *
     *
    **/
    listAllVolumeActions(req: operations.ListAllVolumeActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllVolumeActionsResponse>;
    /**
     * postVolumeActionById - Initiate A Block Storage Action By Volume Id
     *
     * To initiate an action on a block storage volume by Id, send a POST request to
     * `~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate
     * attributes for the respective action.
     *
     * ## Attach a Block Storage Volume to a Droplet
     *
     * | Attribute  | Details                                                             |
     * | ---------- | ------------------------------------------------------------------- |
     * | type       | This must be `attach`                                               |
     * | droplet_id | Set to the Droplet's ID                                             |
     * | region     | Set to the slug representing the region where the volume is located |
     *
     * Each volume may only be attached to a single Droplet. However, up to five
     * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
     * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
     * Droplets created on or after April 26, 2018 when attached. On older Droplets,
     * [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
     * is required.
     *
     * ## Remove a Block Storage Volume from a Droplet
     *
     * | Attribute  | Details                                                             |
     * | ---------- | ------------------------------------------------------------------- |
     * | type       | This must be `detach`                                               |
     * | droplet_id | Set to the Droplet's ID                                             |
     * | region     | Set to the slug representing the region where the volume is located |
     *
     * ## Resize a Volume
     *
     * | Attribute      | Details                                                             |
     * | -------------- | ------------------------------------------------------------------- |
     * | type           | This must be `resize`                                               |
     * | size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |
     * | region         | Set to the slug representing the region where the volume is located |
     *
     * Volumes may only be resized upwards. The maximum size for a volume is 16TiB.
     *
    **/
    postVolumeActionById(req: operations.PostVolumeActionByIdRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumeActionByIdResponse>;
    /**
     * postVolumeActionByName - Initiate A Block Storage Action By Volume Name
     *
     * To initiate an action on a block storage volume by Id, send a POST request to
     * `~/v2/volumes/actions`. The body should contain the appropriate
     * attributes for the respective action.
     *
     * ## Attach a Block Storage Volume to a Droplet
     *
     * | Attribute   | Details                                                             |
     * | ----------- | ------------------------------------------------------------------- |
     * | type        | This must be `attach`                                               |
     * | volume_name | The name of the block storage volume                                |
     * | droplet_id  | Set to the Droplet's ID                                             |
     * | region      | Set to the slug representing the region where the volume is located |
     *
     * Each volume may only be attached to a single Droplet. However, up to five
     * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
     * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
     * Droplets created on or after April 26, 2018 when attached. On older Droplets,
     * [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
     * is required.
     *
     * ## Remove a Block Storage Volume from a Droplet
     *
     * | Attribute   | Details                                                             |
     * | ----------- | ------------------------------------------------------------------- |
     * | type        | This must be `detach`                                               |
     * | volume_name | The name of the block storage volume                                |
     * | droplet_id  | Set to the Droplet's ID                                             |
     * | region      | Set to the slug representing the region where the volume is located |
     *
    **/
    postVolumeActionByName(req: operations.PostVolumeActionByNameRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumeActionByNameResponse>;
}
