import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that identifies the noncompliant resource.
 */
export declare class CreateAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateArn?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    issuerCertificateIdentifier?: shared.IssuerCertificateIdentifier;
    policyVersionIdentifier?: shared.PolicyVersionIdentifier;
    roleAliasArn?: string;
}
export declare class CreateAuditSuppressionRequestBody extends SpeakeasyBase {
    /**
     * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
     */
    checkName: string;
    /**
     *  Each audit supression must have a unique client request token. If you try to create a new audit suppression with the same token as one that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
     */
    clientRequestToken: string;
    /**
     *  The description of the audit suppression.
     */
    description?: string;
    /**
     *  The epoch timestamp in seconds at which this suppression expires.
     */
    expirationDate?: Date;
    /**
     * Information that identifies the noncompliant resource.
     */
    resourceIdentifier: CreateAuditSuppressionRequestBodyResourceIdentifier;
    /**
     *  Indicates whether a suppression should exist indefinitely or not.
     */
    suppressIndefinitely?: boolean;
}
export declare class CreateAuditSuppressionRequest extends SpeakeasyBase {
    requestBody: CreateAuditSuppressionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAuditSuppressionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAuditSuppressionResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
