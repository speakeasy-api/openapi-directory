import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DropletActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDropletAction - Retrieve a Droplet Action
     *
     * To retrieve a Droplet action, send a GET request to
     * `/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.
     *
     * The response will be a JSON object with a key called `action`. The value will
     * be a Droplet action object.
     *
    **/
    getDropletAction(req: operations.GetDropletActionRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletActionResponse>;
    /**
     * listDropletActions - List Actions for a Droplet
     *
     * To retrieve a list of all actions that have been executed for a Droplet, send
     * a GET request to `/v2/droplets/$DROPLET_ID/actions`.
     *
     * The results will be returned as a JSON object with an `actions` key. This will
     * be set to an array filled with `action` objects containing the standard
     * `action` attributes.
     *
    **/
    listDropletActions(req: operations.ListDropletActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDropletActionsResponse>;
    /**
     * postDropletAction - Initiate a Droplet Action
     *
     * To initiate an action on a Droplet send a POST request to
     * `/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,
     * set the `type` attribute to on of the supported action types:
     *
     * | Action                                   | Details |
     * | ---------------------------------------- | ----------- |
     * | <nobr>`enable_backups`</nobr>            | Enables backups for a Droplet |
     * | <nobr>`disable_backups`</nobr>           | Disables backups for a Droplet |
     * | <nobr>`reboot`</nobr>                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. |
     * | <nobr>`power_cycle`</nobr>               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. |
     * | <nobr>`shutdown`</nobr>                  | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. |
     * | <nobr>`power_off`</nobr>                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. |
     * | <nobr>`power_on`</nobr>                  | Powers on a Droplet. |
     * | <nobr>`restore`</nobr>                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. |
     * | <nobr>`password_reset`</nobr>            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. |
     * | <nobr>`resize`</nobr>                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. |
     * | <nobr>`rebuild`</nobr>                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. |
     * | <nobr>`rename`</nobr>                    | Renames a Droplet. |
     * | <nobr>`change_kernel`</nobr>             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. |
     * | <nobr>`enable_ipv6`</nobr>               | Enables IPv6 for a Droplet. |
     * | <nobr>`snapshot`</nobr>                  | Takes a snapshot of a Droplet. |
     *
    **/
    postDropletAction(req: operations.PostDropletActionRequest, config?: AxiosRequestConfig): Promise<operations.PostDropletActionResponse>;
    /**
     * postDropletActionByTag - Acting on Tagged Droplets
     *
     * Some actions can be performed in bulk on tagged Droplets. The actions can be
     * initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with
     * the action arguments.
     *
     * Only a sub-set of action types are supported:
     *
     * - `power_cycle`
     * - `power_on`
     * - `power_off`
     * - `shutdown`
     * - `enable_ipv6`
     * - `enable_backups`
     * - `disable_backups`
     * - `snapshot`
     *
    **/
    postDropletActionByTag(req: operations.PostDropletActionByTagRequest, config?: AxiosRequestConfig): Promise<operations.PostDropletActionByTagResponse>;
}
