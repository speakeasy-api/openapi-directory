import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Analyse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * interference - Find the best server for overlapping coverage
     *
     * Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.
    **/
    interference(req: operations.InterferenceRequest, config?: AxiosRequestConfig): Promise<operations.InterferenceResponse>;
    /**
     * mesh - Merge sites into a super layer.
     *
     * A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.
    **/
    mesh(req: operations.MeshRequest, config?: AxiosRequestConfig): Promise<operations.MeshResponse>;
    /**
     * network - Find the best server for somewhere
     *
     * Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.
    **/
    network(req: operations.NetworkRequest, config?: AxiosRequestConfig): Promise<operations.NetworkResponse>;
}
