import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that identifies the noncompliant resource.
 */
export declare class DeleteAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
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
export declare class DeleteAuditSuppressionRequestBody extends SpeakeasyBase {
    /**
     * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
     */
    checkName: string;
    /**
     * Information that identifies the noncompliant resource.
     */
    resourceIdentifier: DeleteAuditSuppressionRequestBodyResourceIdentifier;
}
export declare class DeleteAuditSuppressionRequest extends SpeakeasyBase {
    requestBody: DeleteAuditSuppressionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAuditSuppressionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAuditSuppressionResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
