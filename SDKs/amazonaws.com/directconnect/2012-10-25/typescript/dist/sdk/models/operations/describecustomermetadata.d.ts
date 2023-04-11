import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCustomerMetadataXAmzTargetEnum {
    OvertureServiceDescribeCustomerMetadata = "OvertureService.DescribeCustomerMetadata"
}
export declare class DescribeCustomerMetadataRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomerMetadataXAmzTargetEnum;
}
export declare class DescribeCustomerMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCustomerMetadataResponse?: shared.DescribeCustomerMetadataResponse;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
