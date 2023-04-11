import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeFleets = "PhotonAdminProxyService.DescribeFleets"
}
export declare class DescribeFleetsRequest extends SpeakeasyBase {
    describeFleetsRequest: shared.DescribeFleetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetsXAmzTargetEnum;
}
export declare class DescribeFleetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetsResult?: shared.DescribeFleetsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
