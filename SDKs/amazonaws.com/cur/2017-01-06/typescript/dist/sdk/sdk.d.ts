import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://cur.{region}.amazonaws.com", "https://cur.{region}.amazonaws.com", "http://cur.{region}.amazonaws.com.cn", "https://cur.{region}.amazonaws.com.cn"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * deleteReportDefinition - Deletes the specified report.
    **/
    deleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    /**
     * describeReportDefinitions - Lists the AWS Cost and Usage reports available to this account.
    **/
    describeReportDefinitions(req: operations.DescribeReportDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReportDefinitionsResponse>;
    /**
     * modifyReportDefinition - Allows you to programatically update your report preferences.
    **/
    modifyReportDefinition(req: operations.ModifyReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.ModifyReportDefinitionResponse>;
    /**
     * putReportDefinition - Creates a new report using the description that you provide.
    **/
    putReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
}
