import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CdnEndpoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createCdnEndpoint - Create a New CDN Endpoint
     *
     * To create a new CDN endpoint, send a POST request to `/v2/cdn/endpoints`. The
     * origin attribute must be set to the fully qualified domain name (FQDN) of a
     * DigitalOcean Space. Optionally, the TTL may be configured by setting the `ttl`
     * attribute.
     *
     * A custom subdomain may be configured by specifying the `custom_domain` and
     * `certificate_id` attributes.
     *
    **/
    createCdnEndpoint(req: operations.CreateCdnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateCdnEndpointResponse>;
    /**
     * deleteCdnEndpoint - Delete a CDN Endpoint
     *
     * To delete a specific CDN endpoint, send a DELETE request to
     * `/v2/cdn/endpoints/$ENDPOINT_ID`.
     *
     * A status of 204 will be given. This indicates that the request was processed
     * successfully, but that no response body is needed.
     *
    **/
    deleteCdnEndpoint(req: operations.DeleteCdnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCdnEndpointResponse>;
    /**
     * getCdnEndpoint - Retrieve an Existing CDN Endpoint
     *
     * To show information about an existing CDN endpoint, send a GET request to `/v2/cdn/endpoints/$ENDPOINT_ID`.
    **/
    getCdnEndpoint(req: operations.GetCdnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetCdnEndpointResponse>;
    /**
     * listCdnEndpoints - List All CDN Endpoints
     *
     * To list all of the CDN endpoints available on your account, send a GET request to `/v2/cdn/endpoints`.
    **/
    listCdnEndpoints(req: operations.ListCdnEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListCdnEndpointsResponse>;
    /**
     * purgeCdnCache - Purge the Cache for an Existing CDN Endpoint
     *
     * To purge cached content from a CDN endpoint, send a DELETE request to
     * `/v2/cdn/endpoints/$ENDPOINT_ID/cache`. The body of the request should include
     * a `files` attribute containing a list of cached file paths to be purged. A
     * path may be for a single file or may contain a wildcard (`*`) to recursively
     * purge all files under a directory. When only a wildcard is provided, all
     * cached files will be purged.
     *
    **/
    purgeCdnCache(req: operations.PurgeCdnCacheRequest, config?: AxiosRequestConfig): Promise<operations.PurgeCdnCacheResponse>;
    /**
     * updateCdnEndpoint - Update a CDN Endpoint
     *
     * To update the TTL, certificate ID, or the FQDN of the custom subdomain for
     * an existing CDN endpoint, send a PUT request to
     * `/v2/cdn/endpoints/$ENDPOINT_ID`.
     *
    **/
    updateCdnEndpoint(req: operations.UpdateCdnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCdnEndpointResponse>;
}
