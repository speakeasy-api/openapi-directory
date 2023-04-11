import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRoleAliasRequestBody extends SpeakeasyBase {
    /**
     * <p>How long (in seconds) the credentials will be valid. The default value is 3,600 seconds.</p> <p>This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.</p>
     */
    credentialDurationSeconds?: number;
    /**
     * The role ARN.
     */
    roleArn: string;
    /**
     * <p>Metadata which can be used to manage the role alias.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
     */
    tags?: shared.Tag[];
}
export declare class CreateRoleAliasRequest extends SpeakeasyBase {
    requestBody: CreateRoleAliasRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The role alias that points to a role ARN. This allows you to change the role without having to update the device.
     */
    roleAlias: string;
}
export declare class CreateRoleAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRoleAliasResponse?: shared.CreateRoleAliasResponse;
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
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
