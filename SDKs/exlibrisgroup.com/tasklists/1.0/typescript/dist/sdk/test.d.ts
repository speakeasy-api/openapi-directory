import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Test {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * GET Task-lists Test API
     *
     * @remarks
     * This API is used to test if the API key was configured correctly.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>GET - OK - institutionCode: 01ABC_INST</test>
     */
    getAlmawsV1TaskListsTest(config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsTestResponse>;
    /**
     * POST Task-lists Test API
     *
     * @remarks
     * This API is used to test if the API key was configured correctly, including read/write permissions.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>POST - OK</test>
     */
    postAlmawsV1TaskListsTest(config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsTestResponse>;
}
