import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RepositoryConfigurationsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class RepositoryConfigurationsDeleteRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Bad Request
 */
export declare class RepositoryConfigurationsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * Success
 */
export declare class RepositoryConfigurationsDelete200ApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class RepositoryConfigurationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    repositoryConfigurationsDelete200ApplicationJSONObject?: RepositoryConfigurationsDelete200ApplicationJSON;
    /**
     * Bad Request
     */
    repositoryConfigurationsDeleteDefaultApplicationJSONObject?: RepositoryConfigurationsDeleteDefaultApplicationJSON;
}
