import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssociateWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
    /**
     * The root certificate of the CA.
     */
    certificate: string;
    /**
     * The certificate name to display.
     */
    displayName?: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class AssociateWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
    requestBody: AssociateWebsiteCertificateAuthorityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateWebsiteCertificateAuthorityResponse?: shared.AssociateWebsiteCertificateAuthorityResponse;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
