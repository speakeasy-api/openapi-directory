import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Meta {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * metaGet - Get GitHub meta information
     *
     * Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/)."
     *
     * **Note:** The IP addresses shown in the documentation's response are only example values. You must always query the API directly to get the latest list of IP addresses.
     *
     * https://docs.github.com/rest/reference/meta/#get-github-meta-information - API method documentation
    **/
    metaGet(config?: AxiosRequestConfig): Promise<operations.MetaGetResponse>;
    /**
     * metaGetOctocat - Get Octocat
     *
     * Get the octocat as ASCII art
    **/
    metaGetOctocat(req: operations.MetaGetOctocatRequest, config?: AxiosRequestConfig): Promise<operations.MetaGetOctocatResponse>;
    /**
     * metaGetZen - Get the Zen of GitHub
     *
     * Get a random sentence from the Zen of GitHub
    **/
    metaGetZen(config?: AxiosRequestConfig): Promise<operations.MetaGetZenResponse>;
    /**
     * metaRoot - GitHub API Root
     *
     * Get Hypermedia links to resources accessible in GitHub's REST API
    **/
    metaRoot(config?: AxiosRequestConfig): Promise<operations.MetaRootResponse>;
}
