import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildConfigurationsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Configuration format
 */
export declare enum BuildConfigurationsGetFormatEnum {
    Yaml = "yaml",
    Json = "json"
}
export declare class BuildConfigurationsGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The branch name
     */
    branch: string;
    /**
     * Configuration format
     */
    format?: BuildConfigurationsGetFormatEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Bad Request
 */
export declare class BuildConfigurationsGetDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * The build configuration in Azure pipeline YAML format
 */
export declare class BuildConfigurationsGet200ApplicationJSON extends SpeakeasyBase {
    /**
     * Azure Pipelines YAML file
     */
    yaml?: string;
}
export declare class BuildConfigurationsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildConfigurationsGet200ApplicationJSONObject?: BuildConfigurationsGet200ApplicationJSON;
    /**
     * Bad Request
     */
    buildConfigurationsGetDefaultApplicationJSONObject?: BuildConfigurationsGetDefaultApplicationJSON;
}
