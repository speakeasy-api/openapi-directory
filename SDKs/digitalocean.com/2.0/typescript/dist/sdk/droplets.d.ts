import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Droplets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDroplet - Create a New Droplet
     *
     * To create a new Droplet, send a POST request to `/v2/droplets` setting the
     * required attributes.
     *
     * A Droplet will be created using the provided information. The response body
     * will contain a JSON object with a key called `droplet`. The value will be an
     * object containing the standard attributes for your new Droplet. The response
     * code, 202 Accepted, does not indicate the success or failure of the operation,
     * just that the request has been accepted for processing. The `actions` returned
     * as part of the response's `links` object can be used to check the status
     * of the Droplet create event.
     *
     * ### Create Multiple Droplets
     *
     * Creating multiple Droplets is very similar to creating a single Droplet.
     * Instead of sending `name` as a string, send `names` as an array of strings. A
     * Droplet will be created for each name you send using the associated
     * information. Up to ten Droplets may be created this way at a time.
     *
     * Rather than returning a single Droplet, the response body will contain a JSON
     * array with a key called `droplets`. This will be set to an array of JSON
     * objects, each of which will contain the standard Droplet attributes. The
     * response code, 202 Accepted, does not indicate the success or failure of any
     * operation, just that the request has been accepted for processing. The array
     * of `actions` returned as part of the response's `links` object can be used to
     * check the status of each individual Droplet create event.
     *
    **/
    createDroplet(req: operations.CreateDropletRequest, config?: AxiosRequestConfig): Promise<operations.CreateDropletResponse>;
    /**
     * destroyDroplet - Delete an Existing Droplet
     *
     * To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.
     *
     * A successful request will receive a 204 status code with no body in response.
     * This indicates that the request was processed successfully.
     *
    **/
    destroyDroplet(req: operations.DestroyDropletRequest, config?: AxiosRequestConfig): Promise<operations.DestroyDropletResponse>;
    /**
     * destroyDropletsByTag - Deleting Droplets by Tag
     *
     * To delete **all** Droplets assigned to a specific tag, include the `tag_name`
     * query parameter set to the name of the tag in your DELETE request. For
     * example,  `/v2/droplets?tag_name=$TAG_NAME`.
     *
     * A successful request will receive a 204 status code with no body in response.
     * This indicates that the request was processed successfully.
     *
    **/
    destroyDropletsByTag(req: operations.DestroyDropletsByTagRequest, config?: AxiosRequestConfig): Promise<operations.DestroyDropletsByTagResponse>;
    /**
     * destroyWithAssociatedResourcesDangerous - Destroy a Droplet and All of its Associated Resources (Dangerous)
     *
     * To destroy a Droplet along with all of its associated resources, send a DELETE
     * request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`
     * endpoint. The headers of this request must include an `X-Dangerous` key set to
     * `true`. To preview which resources will be destroyed, first query the
     * Droplet's associated resources. This operation _can not_ be reverse and should
     * be used with caution.
     *
     * A successful response will include a 202 response code and no content. Use the
     * status endpoint to check on the success or failure of the destruction of the
     * individual resources.
     *
    **/
    destroyWithAssociatedResourcesDangerous(req: operations.DestroyWithAssociatedResourcesDangerousRequest, config?: AxiosRequestConfig): Promise<operations.DestroyWithAssociatedResourcesDangerousResponse>;
    /**
     * destroyWithAssociatedResourcesSelective - Selectively Destroy a Droplet and its Associated Resources
     *
     * To destroy a Droplet along with a sub-set of its associated resources, send a
     * DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`
     * endpoint. The JSON body of the request should include `snapshots`, `volumes`,
     * or `volume_snapshots` keys each set to an array of IDs for the associated
     * resources to be destroyed. The IDs can be found by querying the Droplet's
     * associated resources. Any associated resource not included in the request
     * will remain and continue to accrue changes on your account.
     *
     * A successful response will include a 202 response code and no content. Use
     * the status endpoint to check on the success or failure of the destruction of
     * the individual resources.
     *
    **/
    destroyWithAssociatedResourcesSelective(req: operations.DestroyWithAssociatedResourcesSelectiveRequest, config?: AxiosRequestConfig): Promise<operations.DestroyWithAssociatedResourcesSelectiveResponse>;
    /**
     * getDestroyWithAssociatedResourcesStatus - Check Status of a Droplet Destroy with Associated Resources Request
     *
     * To check on the status of a request to destroy a Droplet with its associated
     * resources, send a GET request to the
     * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.
     *
    **/
    getDestroyWithAssociatedResourcesStatus(req: operations.GetDestroyWithAssociatedResourcesStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDestroyWithAssociatedResourcesStatusResponse>;
    /**
     * getDroplet - Retrieve an Existing Droplet
     *
     * To show information about an individual Droplet, send a GET request to
     * `/v2/droplets/$DROPLET_ID`.
     *
    **/
    getDroplet(req: operations.GetDropletRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletResponse>;
    /**
     * listAllDropletNeighborsIds - List All Droplet Neighbors
     *
     * To retrieve a list of all Droplets that are co-located on the same physical
     * hardware, send a GET request to `/v2/reports/droplet_neighbors_ids`.
     *
     * The results will be returned as a JSON object with a key of `neighbor_ids`.
     * This will be set to an array of arrays. Each array will contain a set of
     * Droplet IDs for Droplets that share a physical server. An empty array
     * indicates that all Droplets associated with your account are located on
     * separate physical hardware.
     *
    **/
    listAllDropletNeighborsIds(config?: AxiosRequestConfig): Promise<operations.ListAllDropletNeighborsIdsResponse>;
    /**
     * listAllDroplets - List All Droplets
     *
     * To list all Droplets in your account, send a GET request to `/v2/droplets`.
     *
     * The response body will be a JSON object with a key of `droplets`. This will be
     * set to an array containing objects each representing a Droplet. These will
     * contain the standard Droplet attributes.
     *
     * ### Filtering Results by Tag
     *
     * It's possible to request filtered results by including certain query parameters.
     * To only list Droplets assigned to a specific tag, include the `tag_name` query
     * parameter set to the name of the tag in your GET request. For example,
     * `/v2/droplets?tag_name=$TAG_NAME`.
     *
    **/
    listAllDroplets(req: operations.ListAllDropletsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllDropletsResponse>;
    /**
     * listDropletAssociatedResources - List Associated Resources for a Droplet
     *
     * To list the associated billable resources that can be destroyed along with a
     * Droplet, send a GET request to the
     * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.
     *
     * The response will be a JSON object containing `snapshots`, `volumes`, and
     * `volume_snapshots` keys. Each will be set to an array of objects containing
     * information about the associated resources.
     *
    **/
    listDropletAssociatedResources(req: operations.ListDropletAssociatedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDropletAssociatedResourcesResponse>;
    /**
     * listDropletBackups - List Backups for a Droplet
     *
     * To retrieve any backups associated with a Droplet, send a GET request to
     * `/v2/droplets/$DROPLET_ID/backups`.
     *
     * You will get back a JSON object that has a `backups` key. This will be set to
     * an array of backup objects, each of which contain the standard
     * Droplet backup attributes.
     *
    **/
    listDropletBackups(req: operations.ListDropletBackupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDropletBackupsResponse>;
    /**
     * listDropletFirewalls - List all Firewalls Applied to a Droplet
     *
     * To retrieve a list of all firewalls available to a Droplet, send a GET request
     * to `/v2/droplets/$DROPLET_ID/firewalls`
     *
     * The response will be a JSON object that has a key called `firewalls`. This will
     * be set to an array of `firewall` objects, each of which contain the standard
     * `firewall` attributes.
     *
    **/
    listDropletFirewalls(req: operations.ListDropletFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListDropletFirewallsResponse>;
    /**
     * listDropletKernels - List All Available Kernels for a Droplet
     *
     * To retrieve a list of all kernels available to a Droplet, send a GET request
     * to `/v2/droplets/$DROPLET_ID/kernels`
     *
     * The response will be a JSON object that has a key called `kernels`. This will
     * be set to an array of `kernel` objects, each of which contain the standard
     * `kernel` attributes.
     *
    **/
    listDropletKernels(req: operations.ListDropletKernelsRequest, config?: AxiosRequestConfig): Promise<operations.ListDropletKernelsResponse>;
    /**
     * listDropletNeighbors - List Neighbors for a Droplet
     *
     * To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on
     * the same physical hardware) for a specific Droplet, send a GET request to
     * `/v2/droplets/$DROPLET_ID/neighbors`.
     *
     * The results will be returned as a JSON object with a key of `droplets`. This
     * will be set to an array containing objects representing any other Droplets
     * that share the same physical hardware. An empty array indicates that the
     * Droplet is not co-located any other Droplets associated with your account.
     *
    **/
    listDropletNeighbors(req: operations.ListDropletNeighborsRequest, config?: AxiosRequestConfig): Promise<operations.ListDropletNeighborsResponse>;
    /**
     * listDropletSnapshots - List Snapshots for a Droplet
     *
     * To retrieve the snapshots that have been created from a Droplet, send a GET
     * request to `/v2/droplets/$DROPLET_ID/snapshots`.
     *
     * You will get back a JSON object that has a `snapshots` key. This will be set
     * to an array of snapshot objects, each of which contain the standard Droplet
     * snapshot attributes.
     *
    **/
    listDropletSnapshots(req: operations.ListDropletSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.ListDropletSnapshotsResponse>;
    /**
     * retryDestroyWithAssociatedResource - Retry a Droplet Destroy with Associated Resources Request
     *
     * If the status of a request to destroy a Droplet with its associated resources
     * reported any errors, it can be retried by sending a POST request to the
     * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.
     *
     * Only one destroy can be active at a time per Droplet. If a retry is issued
     * while another destroy is in progress for the Droplet a 409 status code will
     * be returned. A successful response will include a 202 response code and no
     * content.
     *
    **/
    retryDestroyWithAssociatedResource(req: operations.RetryDestroyWithAssociatedResourceRequest, config?: AxiosRequestConfig): Promise<operations.RetryDestroyWithAssociatedResourceResponse>;
}
