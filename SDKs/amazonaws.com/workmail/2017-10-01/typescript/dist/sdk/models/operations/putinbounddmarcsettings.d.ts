import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutInboundDmarcSettingsXAmzTargetEnum {
    WorkMailServicePutInboundDmarcSettings = "WorkMailService.PutInboundDmarcSettings"
}
export declare class PutInboundDmarcSettingsRequest extends SpeakeasyBase {
    putInboundDmarcSettingsRequest: shared.PutInboundDmarcSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInboundDmarcSettingsXAmzTargetEnum;
}
export declare class PutInboundDmarcSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * Success
     */
    putInboundDmarcSettingsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
