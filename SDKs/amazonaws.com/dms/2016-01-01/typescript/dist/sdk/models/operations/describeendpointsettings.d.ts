import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointSettingsXAmzTargetEnum {
    AmazonDMSv20160101DescribeEndpointSettings = "AmazonDMSv20160101.DescribeEndpointSettings"
}
export declare class DescribeEndpointSettingsRequest extends SpeakeasyBase {
    describeEndpointSettingsMessage: shared.DescribeEndpointSettingsMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointSettingsXAmzTargetEnum;
}
export declare class DescribeEndpointSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointSettingsResponse?: shared.DescribeEndpointSettingsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
