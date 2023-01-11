import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Firewalls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addFirewallDroplets - Add Droplets to a Firewall
     *
     * To assign a Droplet to a firewall, send a POST request to
     * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there
     * should be a `droplet_ids` attribute containing a list of Droplet IDs.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    addFirewallDroplets(req: operations.AddFirewallDropletsRequest, config?: AxiosRequestConfig): Promise<operations.AddFirewallDropletsResponse>;
    /**
     * addFirewallRules - Add Rules to a Firewall
     *
     * To add additional access rules to a firewall, send a POST request to
     * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
     * inbound_rules and/or outbound_rules attribute containing an array of rules to
     * be added.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    addFirewallRules(req: operations.AddFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.AddFirewallRulesResponse>;
    /**
     * addFirewallTags - Add Tags to a Firewall
     *
     * To assign a tag representing a group of Droplets to a firewall, send a POST
     * request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,
     * there should be a `tags` attribute containing a list of tag names.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    addFirewallTags(req: operations.AddFirewallTagsRequest, config?: AxiosRequestConfig): Promise<operations.AddFirewallTagsResponse>;
    /**
     * createFirewall - Create a New Firewall
     *
     * To create a new firewall, send a POST request to `/v2/firewalls`. The request
     * must contain at least one inbound or outbound access rule.
     *
    **/
    createFirewall(req: operations.CreateFirewallRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallResponse>;
    /**
     * deleteFirewall - Delete a Firewall
     *
     * To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    deleteFirewall(req: operations.DeleteFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallResponse>;
    /**
     * deleteFirewallDroplets - Remove Droplets from a Firewall
     *
     * To remove a Droplet from a firewall, send a DELETE request to
     * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should
     * be a `droplet_ids` attribute containing a list of Droplet IDs.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    deleteFirewallDroplets(req: operations.DeleteFirewallDropletsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallDropletsResponse>;
    /**
     * deleteFirewallRules - Remove Rules from a Firewall
     *
     * To remove access rules from a firewall, send a DELETE request to
     * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
     * `inbound_rules` and/or `outbound_rules` attribute containing an array of rules
     * to be removed.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    deleteFirewallRules(req: operations.DeleteFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallRulesResponse>;
    /**
     * deleteFirewallTags - Remove Tags from a Firewall
     *
     * To remove a tag representing a group of Droplets from a firewall, send a
     * DELETE request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the
     * request, there should be a `tags` attribute containing a list of tag names.
     *
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     *
    **/
    deleteFirewallTags(req: operations.DeleteFirewallTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallTagsResponse>;
    /**
     * getFirewall - Retrieve an Existing Firewall
     *
     * To show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.
    **/
    getFirewall(req: operations.GetFirewallRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallResponse>;
    /**
     * listFirewalls - List All Firewalls
     *
     * To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.
    **/
    listFirewalls(req: operations.ListFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallsResponse>;
    /**
     * updateFirewall - Update a Firewall
     *
     * To update the configuration of an existing firewall, send a PUT request to
     * `/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation
     * of the firewall including existing attributes. **Note that any attributes that
     * are not provided will be reset to their default values.**
     *
    **/
    updateFirewall(req: operations.UpdateFirewallRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallResponse>;
}
