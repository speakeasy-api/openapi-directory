import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateConfigurationSetReputationMetricsEnabledActionEnum {
    UpdateConfigurationSetReputationMetricsEnabled = "UpdateConfigurationSetReputationMetricsEnabled"
}
export declare enum GETUpdateConfigurationSetReputationMetricsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETUpdateConfigurationSetReputationMetricsEnabledRequest extends SpeakeasyBase {
    action: GETUpdateConfigurationSetReputationMetricsEnabledActionEnum;
    /**
     * The name of the configuration set that you want to update.
     */
    configurationSetName: string;
    /**
     * Describes whether or not Amazon SES will publish reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.
     */
    enabled: boolean;
    version: GETUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateConfigurationSetReputationMetricsEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
