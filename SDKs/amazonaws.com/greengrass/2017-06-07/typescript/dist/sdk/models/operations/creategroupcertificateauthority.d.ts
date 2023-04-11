import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupCertificateAuthorityRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class CreateGroupCertificateAuthorityResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createGroupCertificateAuthorityResponse?: shared.CreateGroupCertificateAuthorityResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
