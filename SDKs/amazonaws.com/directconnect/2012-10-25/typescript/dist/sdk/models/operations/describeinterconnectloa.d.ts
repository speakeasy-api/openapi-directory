import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInterconnectLoaXAmzTargetEnum {
    OvertureServiceDescribeInterconnectLoa = "OvertureService.DescribeInterconnectLoa"
}
export declare class DescribeInterconnectLoaRequest extends SpeakeasyBase {
    describeInterconnectLoaRequest: shared.DescribeInterconnectLoaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInterconnectLoaXAmzTargetEnum;
}
export declare class DescribeInterconnectLoaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInterconnectLoaResponse?: shared.DescribeInterconnectLoaResponse;
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
