import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeLaunchConfigurationsActionEnum {
    DescribeLaunchConfigurations = "DescribeLaunchConfigurations"
}
export declare enum GETDescribeLaunchConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribeLaunchConfigurationsRequest extends SpeakeasyBase {
    action: GETDescribeLaunchConfigurationsActionEnum;
    /**
     * <p>The launch configuration names. If you omit this property, all launch configurations are described.</p> <p>Array Members: Maximum number of 50 items.</p>
     */
    launchConfigurationNames?: string[];
    /**
     * The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
     */
    maxRecords?: number;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: string;
    version: GETDescribeLaunchConfigurationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeLaunchConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
