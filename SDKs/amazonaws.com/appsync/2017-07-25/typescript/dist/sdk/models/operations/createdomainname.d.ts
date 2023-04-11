import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDomainNameRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.
     */
    certificateArn: string;
    /**
     * A description of the <code>DomainName</code>.
     */
    description?: string;
    /**
     * The domain name.
     */
    domainName: string;
}
export declare class CreateDomainNameRequest extends SpeakeasyBase {
    requestBody: CreateDomainNameRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDomainNameResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createDomainNameResponse?: shared.CreateDomainNameResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
