import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssumeDecoratedRoleWithSAMLRequestBody extends SpeakeasyBase {
    /**
     * The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.
     */
    durationSeconds?: number;
    /**
     * The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.
     */
    principalArn: string;
    /**
     * The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role.
     */
    roleArn: string;
    /**
     * A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.
     */
    samlAssertion: string;
}
export declare class AssumeDecoratedRoleWithSAMLRequest extends SpeakeasyBase {
    requestBody: AssumeDecoratedRoleWithSAMLRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssumeDecoratedRoleWithSAMLResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    assumeDecoratedRoleWithSAMLResponse?: shared.AssumeDecoratedRoleWithSAMLResponse;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
