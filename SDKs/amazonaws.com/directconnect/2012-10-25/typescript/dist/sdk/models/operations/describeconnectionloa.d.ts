import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectionLoaXAmzTargetEnum {
    OvertureServiceDescribeConnectionLoa = "OvertureService.DescribeConnectionLoa"
}
export declare class DescribeConnectionLoaRequest extends SpeakeasyBase {
    describeConnectionLoaRequest: shared.DescribeConnectionLoaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionLoaXAmzTargetEnum;
}
export declare class DescribeConnectionLoaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConnectionLoaResponse?: shared.DescribeConnectionLoaResponse;
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
