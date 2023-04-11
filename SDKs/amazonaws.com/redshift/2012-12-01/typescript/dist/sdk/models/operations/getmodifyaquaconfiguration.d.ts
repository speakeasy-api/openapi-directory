import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyAquaConfigurationActionEnum {
    ModifyAquaConfiguration = "ModifyAquaConfiguration"
}
/**
 * This parameter is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
 */
export declare enum GETModifyAquaConfigurationAquaConfigurationStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Auto = "auto"
}
export declare enum GETModifyAquaConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyAquaConfigurationRequest extends SpeakeasyBase {
    action: GETModifyAquaConfigurationActionEnum;
    /**
     * This parameter is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
     */
    aquaConfigurationStatus?: GETModifyAquaConfigurationAquaConfigurationStatusEnum;
    /**
     * The identifier of the cluster to be modified.
     */
    clusterIdentifier: string;
    version: GETModifyAquaConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyAquaConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
