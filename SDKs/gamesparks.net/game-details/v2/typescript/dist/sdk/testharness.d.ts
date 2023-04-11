import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Test Harness Restv 2 Controller
 */
export declare class TestHarness {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createTestHarnessScenario
     */
    createTestHarnessScenarioUsingPOST(req: operations.CreateTestHarnessScenarioUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateTestHarnessScenarioUsingPOSTResponse>;
    /**
     * deleteTestHarnessScenario
     */
    deleteTestHarnessScenarioUsingDELETE(req: operations.DELETETestHarnessScenarioUsingDELETERequest, config?: AxiosRequestConfig): Promise<operations.DELETETestHarnessScenarioUsingDELETEResponse>;
    /**
     * getTestHarnessScenario
     */
    getTestHarnessScenarioUsingGET(req: operations.GETTestHarnessScenarioUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETTestHarnessScenarioUsingGETResponse>;
    /**
     * getTestHarnessScenarios
     */
    getTestHarnessScenariosUsingGET(req: operations.GETTestHarnessScenariosUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETTestHarnessScenariosUsingGETResponse>;
    /**
     * updateTestHarnessScenario
     */
    updateTestHarnessScenarioUsingPUT(req: operations.UpdateTestHarnessScenarioUsingPUTRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTestHarnessScenarioUsingPUTResponse>;
}
