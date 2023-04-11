import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLagsXAmzTargetEnum {
    OvertureServiceDescribeLags = "OvertureService.DescribeLags"
}
export declare class DescribeLagsRequest extends SpeakeasyBase {
    describeLagsRequest: shared.DescribeLagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLagsXAmzTargetEnum;
}
export declare class DescribeLagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    /**
     * Success
     */
    lags?: shared.Lags;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
