import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSubscriberRequestBody extends SpeakeasyBase {
    /**
     * The external ID of the Security Lake account.
     */
    externalId?: string;
    /**
     * The supported Amazon Web Services from which logs and events are collected. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.
     */
    sourceTypes: shared.SourceType[];
    /**
     * The description of the Security Lake account subscriber.
     */
    subscriberDescription?: string;
    /**
     * The name of the Security Lake account subscriber.
     */
    subscriberName?: string;
}
export declare class UpdateSubscriberRequest extends SpeakeasyBase {
    requestBody: UpdateSubscriberRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A value created by Security Lake that uniquely identifies your subscription.
     */
    id: string;
}
export declare class UpdateSubscriberResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    /**
     * ConflictSubscriptionException
     */
    conflictSubscriptionException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSubscriberResponse?: shared.UpdateSubscriberResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
