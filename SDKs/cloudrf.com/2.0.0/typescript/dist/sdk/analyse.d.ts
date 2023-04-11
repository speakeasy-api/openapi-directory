import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Analyse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find the best server for overlapping coverage
     *
     * @remarks
     * Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.
     */
    interference(req: operations.InterferenceRequest, security: operations.InterferenceSecurity, config?: AxiosRequestConfig): Promise<operations.InterferenceResponse>;
    /**
     * Merge sites into a super layer.
     *
     * @remarks
     * A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.
     */
    mesh(req: operations.MeshRequest, security: operations.MeshSecurity, config?: AxiosRequestConfig): Promise<operations.MeshResponse>;
    /**
     * Find the best server for somewhere
     *
     * @remarks
     * Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.
     */
    network(req: operations.NetworkRequest, security: operations.NetworkSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkResponse>;
}
