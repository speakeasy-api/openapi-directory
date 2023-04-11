import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubscriptionDefinitionRequest extends SpeakeasyBase {
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
export declare class GetSubscriptionDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getSubscriptionDefinitionResponse?: shared.GetSubscriptionDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
