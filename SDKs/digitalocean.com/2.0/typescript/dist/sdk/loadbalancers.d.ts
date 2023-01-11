import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LoadBalancers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addLoadBalancerDroplets - Add Droplets to a Load Balancer
     *
     * To assign a Droplet to a load balancer instance, send a POST request to
     * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
     * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
     * Individual Droplets can not be added to a load balancer configured with a
     * Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"
     * response from the API.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    addLoadBalancerDroplets(req: operations.AddLoadBalancerDropletsRequest, config?: AxiosRequestConfig): Promise<operations.AddLoadBalancerDropletsResponse>;
    /**
     * addLoadBalancerForwardingRules - Add Forwarding Rules to a Load Balancer
     *
     * To add an additional forwarding rule to a load balancer instance, send a POST
     * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body
     * of the request, there should be a `forwarding_rules` attribute containing an
     * array of rules to be added.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    addLoadBalancerForwardingRules(req: operations.AddLoadBalancerForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.AddLoadBalancerForwardingRulesResponse>;
    /**
     * createLoadBalancer - Create a New Load Balancer
     *
     * To create a new load balancer instance, send a POST request to
     * `/v2/load_balancers`.
     *
     * You can specify the Droplets that will sit behind the load balancer using one
     * of two methods:
     *
     * * Set `droplet_ids` to a list of specific Droplet IDs.
     * * Set `tag` to the name of a tag. All Droplets with this tag applied will be
     *   assigned to the load balancer. Additional Droplets will be automatically
     *   assigned as they are tagged.
     *
     * These methods are mutually exclusive.
     *
    **/
    createLoadBalancer(req: operations.CreateLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.CreateLoadBalancerResponse>;
    /**
     * deleteLoadBalancer - Delete a Load Balancer
     *
     * To delete a load balancer instance, disassociating any Droplets assigned to it
     * and removing it from your account, send a DELETE request to
     * `/v2/load_balancers/$LOAD_BALANCER_ID`.
     *
     * A successful request will receive a 204 status code with no body in response.
     * This indicates that the request was processed successfully.
     *
    **/
    deleteLoadBalancer(req: operations.DeleteLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLoadBalancerResponse>;
    /**
     * getLoadBalancer - Retrieve an Existing Load Balancer
     *
     * To show information about a load balancer instance, send a GET request to
     * `/v2/load_balancers/$LOAD_BALANCER_ID`.
     *
    **/
    getLoadBalancer(req: operations.GetLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerResponse>;
    /**
     * listAllLoadBalancers - List All Load Balancers
     *
     * To list all of the load balancer instances on your account, send a GET request
     * to `/v2/load_balancers`.
     *
    **/
    listAllLoadBalancers(req: operations.ListAllLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.ListAllLoadBalancersResponse>;
    /**
     * removeLoadBalancerDroplets - Remove Droplets from a Load Balancer
     *
     * To remove a Droplet from a load balancer instance, send a DELETE request to
     * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
     * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    removeLoadBalancerDroplets(req: operations.RemoveLoadBalancerDropletsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLoadBalancerDropletsResponse>;
    /**
     * removeLoadBalancerForwardingRules - Remove Forwarding Rules from a Load Balancer
     *
     * To remove forwarding rules from a load balancer instance, send a DELETE
     * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the
     * body of the request, there should be a `forwarding_rules` attribute containing
     * an array of rules to be removed.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    removeLoadBalancerForwardingRules(req: operations.RemoveLoadBalancerForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLoadBalancerForwardingRulesResponse>;
    /**
     * updateLoadBalancer - Update a Load Balancer
     *
     * To update a load balancer's settings, send a PUT request to
     * `/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full
     * representation of the load balancer including existing attributes. It may
     * contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually
     * exclusive. **Note that any attribute that is not provided will be reset to its
     * default value.**
     *
    **/
    updateLoadBalancer(req: operations.UpdateLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLoadBalancerResponse>;
}
