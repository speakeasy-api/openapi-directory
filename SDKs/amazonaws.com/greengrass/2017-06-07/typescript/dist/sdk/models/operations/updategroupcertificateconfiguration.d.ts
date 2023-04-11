import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGroupCertificateConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The amount of time remaining before the certificate expires, in milliseconds.
     */
    certificateExpiryInMilliseconds?: string;
}
export declare class UpdateGroupCertificateConfigurationRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    requestBody: UpdateGroupCertificateConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGroupCertificateConfigurationResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateGroupCertificateConfigurationResponse?: shared.UpdateGroupCertificateConfigurationResponse;
}
