import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSubscriptionDefinitionVersionRequestBody extends SpeakeasyBase {
    /**
     * A list of subscriptions.
     */
    subscriptions?: shared.Subscription[];
}
export declare class CreateSubscriptionDefinitionVersionRequest extends SpeakeasyBase {
    requestBody: CreateSubscriptionDefinitionVersionRequestBody;
    /**
     * The ID of the subscription definition.
     */
    subscriptionDefinitionId: string;
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
export declare class CreateSubscriptionDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createSubscriptionDefinitionVersionResponse?: shared.CreateSubscriptionDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
