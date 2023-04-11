import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLoaXAmzTargetEnum {
    OvertureServiceDescribeLoa = "OvertureService.DescribeLoa"
}
export declare class DescribeLoaRequest extends SpeakeasyBase {
    describeLoaRequest: shared.DescribeLoaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLoaXAmzTargetEnum;
}
export declare class DescribeLoaResponse extends SpeakeasyBase {
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
    loa?: shared.Loa;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
