import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a group version.
 */
export declare class CreateGroupRequestBodyInitialVersion extends SpeakeasyBase {
    connectorDefinitionVersionArn?: string;
    coreDefinitionVersionArn?: string;
    deviceDefinitionVersionArn?: string;
    functionDefinitionVersionArn?: string;
    loggerDefinitionVersionArn?: string;
    resourceDefinitionVersionArn?: string;
    subscriptionDefinitionVersionArn?: string;
}
export declare class CreateGroupRequestBody extends SpeakeasyBase {
    /**
     * Information about a group version.
     */
    initialVersion?: CreateGroupRequestBodyInitialVersion;
    /**
     * The name of the group.
     */
    name: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    requestBody: CreateGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createGroupResponse?: shared.CreateGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
