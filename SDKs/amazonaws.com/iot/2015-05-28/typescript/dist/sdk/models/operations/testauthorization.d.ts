import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestAuthorizationRequestBody extends SpeakeasyBase {
    /**
     * A list of authorization info objects. Simulating authorization will create a response for each <code>authInfo</code> object in the list.
     */
    authInfos: shared.AuthInfo[];
    /**
     * The Cognito identity pool ID.
     */
    cognitoIdentityPoolId?: string;
    /**
     * When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized.
     */
    policyNamesToAdd?: string[];
    /**
     * When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized.
     */
    policyNamesToSkip?: string[];
    /**
     * The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).
     */
    principal?: string;
}
export declare class TestAuthorizationRequest extends SpeakeasyBase {
    requestBody: TestAuthorizationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The MQTT client ID.
     */
    clientId?: string;
}
export declare class TestAuthorizationResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    testAuthorizationResponse?: shared.TestAuthorizationResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
