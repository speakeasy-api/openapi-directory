import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSubscriberRequestBody extends SpeakeasyBase {
    /**
     * The Amazon S3 or Lake Formation access type.
     */
    accessTypes?: shared.AccessTypeEnum[];
    /**
     * The Amazon Web Services account ID used to access your data.
     */
    accountId: string;
    /**
     * The external ID of the subscriber. This lets the user that is assuming the role assert the circumstances in which they are operating. It also provides a way for the account owner to permit the role to be assumed only under specific circumstances.
     */
    externalId: string;
    /**
     * The supported Amazon Web Services from which logs and events are collected. Security Lake supports log and event collection for natively supported Amazon Web Services.
     */
    sourceTypes: shared.SourceType[];
    /**
     * The description for your subscriber account in Security Lake.
     */
    subscriberDescription?: string;
    /**
     * The name of your Security Lake subscriber account.
     */
    subscriberName: string;
}
export declare class CreateSubscriberRequest extends SpeakeasyBase {
    requestBody: CreateSubscriberRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSubscriberResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * BucketNotFoundException
     */
    bucketNotFoundException?: any;
    /**
     * ConflictSubscriptionException
     */
    conflictSubscriptionException?: any;
    contentType: string;
    /**
     * Success
     */
    createSubscriberResponse?: shared.CreateSubscriberResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
