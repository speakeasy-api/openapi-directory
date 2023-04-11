import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInboundDmarcSettingsXAmzTargetEnum {
    WorkMailServiceDescribeInboundDmarcSettings = "WorkMailService.DescribeInboundDmarcSettings"
}
export declare class DescribeInboundDmarcSettingsRequest extends SpeakeasyBase {
    describeInboundDmarcSettingsRequest: shared.DescribeInboundDmarcSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInboundDmarcSettingsXAmzTargetEnum;
}
export declare class DescribeInboundDmarcSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInboundDmarcSettingsResponse?: shared.DescribeInboundDmarcSettingsResponse;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
