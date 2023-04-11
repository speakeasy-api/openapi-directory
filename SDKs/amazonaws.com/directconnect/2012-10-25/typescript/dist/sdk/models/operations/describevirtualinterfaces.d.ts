import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVirtualInterfacesXAmzTargetEnum {
    OvertureServiceDescribeVirtualInterfaces = "OvertureService.DescribeVirtualInterfaces"
}
export declare class DescribeVirtualInterfacesRequest extends SpeakeasyBase {
    describeVirtualInterfacesRequest: shared.DescribeVirtualInterfacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVirtualInterfacesXAmzTargetEnum;
}
export declare class DescribeVirtualInterfacesResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    virtualInterfaces?: shared.VirtualInterfaces;
}
