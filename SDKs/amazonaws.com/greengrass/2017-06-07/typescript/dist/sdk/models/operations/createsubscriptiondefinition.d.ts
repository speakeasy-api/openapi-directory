import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a subscription definition version.
 */
export declare class CreateSubscriptionDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    subscriptions?: shared.Subscription[];
}
export declare class CreateSubscriptionDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Information about a subscription definition version.
     */
    initialVersion?: CreateSubscriptionDefinitionRequestBodyInitialVersion;
    /**
     * The name of the subscription definition.
     */
    name?: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateSubscriptionDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateSubscriptionDefinitionRequestBody;
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
export declare class CreateSubscriptionDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createSubscriptionDefinitionResponse?: shared.CreateSubscriptionDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
