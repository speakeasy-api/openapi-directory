import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInterconnectsXAmzTargetEnum {
    OvertureServiceDescribeInterconnects = "OvertureService.DescribeInterconnects"
}
export declare class DescribeInterconnectsRequest extends SpeakeasyBase {
    describeInterconnectsRequest: shared.DescribeInterconnectsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInterconnectsXAmzTargetEnum;
}
export declare class DescribeInterconnectsResponse extends SpeakeasyBase {
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
    interconnects?: shared.Interconnects;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
