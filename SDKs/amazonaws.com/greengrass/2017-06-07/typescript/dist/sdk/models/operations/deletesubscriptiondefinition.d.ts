import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSubscriptionDefinitionRequest extends SpeakeasyBase {
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
export declare class DeleteSubscriptionDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSubscriptionDefinitionResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
