import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that identifies the noncompliant resource.
 */
export declare class UpdateAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
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
export declare class UpdateAuditSuppressionRequestBody extends SpeakeasyBase {
    /**
     * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
     */
    checkName: string;
    /**
     *  The description of the audit suppression.
     */
    description?: string;
    /**
     *  The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
     */
    expirationDate?: Date;
    /**
     * Information that identifies the noncompliant resource.
     */
    resourceIdentifier: UpdateAuditSuppressionRequestBodyResourceIdentifier;
    /**
     *  Indicates whether a suppression should exist indefinitely or not.
     */
    suppressIndefinitely?: boolean;
}
export declare class UpdateAuditSuppressionRequest extends SpeakeasyBase {
    requestBody: UpdateAuditSuppressionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAuditSuppressionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateAuditSuppressionResponse?: Record<string, any>;
}
