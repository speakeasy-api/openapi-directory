import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that identifies the noncompliant resource.
 */
export declare class ListAuditSuppressionsRequestBodyResourceIdentifier extends SpeakeasyBase {
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
export declare class ListAuditSuppressionsRequestBody extends SpeakeasyBase {
    /**
     *  Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>.
     */
    ascendingOrder?: boolean;
    /**
     * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
     */
    checkName?: string;
    /**
     *  The maximum number of results to return at one time. The default is 25.
     */
    maxResults?: number;
    /**
     *  The token for the next set of results.
     */
    nextToken?: string;
    /**
     * Information that identifies the noncompliant resource.
     */
    resourceIdentifier?: ListAuditSuppressionsRequestBodyResourceIdentifier;
}
export declare class ListAuditSuppressionsRequest extends SpeakeasyBase {
    requestBody: ListAuditSuppressionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListAuditSuppressionsResponse extends SpeakeasyBase {
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
     * Success
     */
    listAuditSuppressionsResponse?: shared.ListAuditSuppressionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
