import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Experiment Rest Controller
 */
export declare class Experiments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createExperiment
     */
    createExperimentUsingPOST(req: operations.CreateExperimentUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateExperimentUsingPOSTResponse>;
    /**
     * deleteExperiment
     */
    deleteExperimentUsingDELETE(req: operations.DELETEExperimentUsingDELETERequest, config?: AxiosRequestConfig): Promise<operations.DELETEExperimentUsingDELETEResponse>;
    /**
     * doActionExperiment
     */
    doActionExperimentUsingPOST(req: operations.DoActionExperimentUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.DoActionExperimentUsingPOSTResponse>;
    /**
     * getExperiment
     */
    getExperimentUsingGET(req: operations.GETExperimentUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETExperimentUsingGETResponse>;
    /**
     * getExperiments
     */
    getExperimentsUsingGET(req: operations.GETExperimentsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETExperimentsUsingGETResponse>;
    /**
     * updateExperiment
     */
    updateExperimentUsingPUT(req: operations.UpdateExperimentUsingPUTRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExperimentUsingPUTResponse>;
}
