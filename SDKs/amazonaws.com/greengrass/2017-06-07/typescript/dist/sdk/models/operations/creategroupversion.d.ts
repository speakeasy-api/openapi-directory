import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupVersionRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the connector definition version for this group.
     */
    connectorDefinitionVersionArn?: string;
    /**
     * The ARN of the core definition version for this group.
     */
    coreDefinitionVersionArn?: string;
    /**
     * The ARN of the device definition version for this group.
     */
    deviceDefinitionVersionArn?: string;
    /**
     * The ARN of the function definition version for this group.
     */
    functionDefinitionVersionArn?: string;
    /**
     * The ARN of the logger definition version for this group.
     */
    loggerDefinitionVersionArn?: string;
    /**
     * The ARN of the resource definition version for this group.
     */
    resourceDefinitionVersionArn?: string;
    /**
     * The ARN of the subscription definition version for this group.
     */
    subscriptionDefinitionVersionArn?: string;
}
export declare class CreateGroupVersionRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    requestBody: CreateGroupVersionRequestBody;
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
export declare class CreateGroupVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createGroupVersionResponse?: shared.CreateGroupVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
