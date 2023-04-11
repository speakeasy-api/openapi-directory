import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that identifies the noncompliant resource.
 */
export declare class ListAuditFindingsRequestBodyResourceIdentifier extends SpeakeasyBase {
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
export declare class ListAuditFindingsRequestBody extends SpeakeasyBase {
    /**
     * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
     */
    checkName?: string;
    /**
     * A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both.
     */
    endTime?: Date;
    /**
     *  Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings.
     */
    listSuppressedFindings?: boolean;
    /**
     * The maximum number of results to return at one time. The default is 25.
     */
    maxResults?: number;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
    /**
     * Information that identifies the noncompliant resource.
     */
    resourceIdentifier?: ListAuditFindingsRequestBodyResourceIdentifier;
    /**
     * A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.
     */
    startTime?: Date;
    /**
     * A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.
     */
    taskId?: string;
}
export declare class ListAuditFindingsRequest extends SpeakeasyBase {
    requestBody: ListAuditFindingsRequestBody;
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
export declare class ListAuditFindingsResponse extends SpeakeasyBase {
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
    listAuditFindingsResponse?: shared.ListAuditFindingsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
