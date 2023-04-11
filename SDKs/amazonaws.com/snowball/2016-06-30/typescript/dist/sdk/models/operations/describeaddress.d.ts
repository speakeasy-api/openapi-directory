import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAddressXAmzTargetEnum {
    AWSIESnowballJobManagementServiceDescribeAddress = "AWSIESnowballJobManagementService.DescribeAddress"
}
export declare class DescribeAddressRequest extends SpeakeasyBase {
    describeAddressRequest: shared.DescribeAddressRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAddressXAmzTargetEnum;
}
export declare class DescribeAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAddressResult?: shared.DescribeAddressResult;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
