import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccountAttributesXAmzTargetEnum {
    OpsWorksCMV20161101DescribeAccountAttributes = "OpsWorksCM_V2016_11_01.DescribeAccountAttributes"
}
export declare class DescribeAccountAttributesRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountAttributesXAmzTargetEnum;
}
export declare class DescribeAccountAttributesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAccountAttributesResponse?: shared.DescribeAccountAttributesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
