import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSubscriptionDefinitionRequestBody extends SpeakeasyBase {
    /**
     * The name of the definition.
     */
    name?: string;
}
export declare class UpdateSubscriptionDefinitionRequest extends SpeakeasyBase {
    requestBody: UpdateSubscriptionDefinitionRequestBody;
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
}
export declare class UpdateSubscriptionDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSubscriptionDefinitionResponse?: Record<string, any>;
}
