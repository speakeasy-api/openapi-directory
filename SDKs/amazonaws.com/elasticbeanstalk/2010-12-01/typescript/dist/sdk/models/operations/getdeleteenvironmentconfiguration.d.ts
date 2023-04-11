import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteEnvironmentConfigurationActionEnum {
    DeleteEnvironmentConfiguration = "DeleteEnvironmentConfiguration"
}
export declare enum GETDeleteEnvironmentConfigurationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteEnvironmentConfigurationRequest extends SpeakeasyBase {
    action: GETDeleteEnvironmentConfigurationActionEnum;
    /**
     * The name of the application the environment is associated with.
     */
    applicationName: string;
    /**
     * The name of the environment to delete the draft configuration from.
     */
    environmentName: string;
    version: GETDeleteEnvironmentConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteEnvironmentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
