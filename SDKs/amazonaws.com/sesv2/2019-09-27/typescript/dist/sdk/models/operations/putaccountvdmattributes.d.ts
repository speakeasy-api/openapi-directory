import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The VDM attributes that apply to your Amazon SES account.
 */
export declare class PutAccountVdmAttributesRequestBodyVdmAttributes extends SpeakeasyBase {
    dashboardAttributes?: shared.DashboardAttributes;
    guardianAttributes?: shared.GuardianAttributes;
    vdmEnabled?: shared.FeatureStatusEnum;
}
export declare class PutAccountVdmAttributesRequestBody extends SpeakeasyBase {
    /**
     * The VDM attributes that apply to your Amazon SES account.
     */
    vdmAttributes: PutAccountVdmAttributesRequestBodyVdmAttributes;
}
export declare class PutAccountVdmAttributesRequest extends SpeakeasyBase {
    requestBody: PutAccountVdmAttributesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutAccountVdmAttributesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    putAccountVdmAttributesResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
