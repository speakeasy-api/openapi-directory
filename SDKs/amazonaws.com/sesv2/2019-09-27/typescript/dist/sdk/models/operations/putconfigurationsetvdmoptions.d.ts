import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that defines the VDM settings that apply to emails that you send using the configuration set.
 */
export declare class PutConfigurationSetVdmOptionsRequestBodyVdmOptions extends SpeakeasyBase {
    dashboardOptions?: shared.DashboardOptions;
    guardianOptions?: shared.GuardianOptions;
}
export declare class PutConfigurationSetVdmOptionsRequestBody extends SpeakeasyBase {
    /**
     * An object that defines the VDM settings that apply to emails that you send using the configuration set.
     */
    vdmOptions?: PutConfigurationSetVdmOptionsRequestBodyVdmOptions;
}
export declare class PutConfigurationSetVdmOptionsRequest extends SpeakeasyBase {
    /**
     * The name of the configuration set.
     */
    configurationSetName: string;
    requestBody: PutConfigurationSetVdmOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetVdmOptionsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putConfigurationSetVdmOptionsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
