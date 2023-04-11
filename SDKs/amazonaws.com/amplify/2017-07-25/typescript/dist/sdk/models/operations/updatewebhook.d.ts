import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWebhookRequestBody extends SpeakeasyBase {
    /**
     *  The name for a branch that is part of an Amplify app.
     */
    branchName?: string;
    /**
     *  The description for a webhook.
     */
    description?: string;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    requestBody: UpdateWebhookRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique ID for a webhook.
     */
    webhookId: string;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * DependentServiceFailureException
     */
    dependentServiceFailureException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateWebhookResult?: shared.UpdateWebhookResult;
}
