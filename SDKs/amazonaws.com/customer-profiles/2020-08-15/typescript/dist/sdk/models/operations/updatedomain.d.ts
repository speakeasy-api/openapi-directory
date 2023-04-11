import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The flag that enables the matching process of duplicate profiles.
 */
export declare class UpdateDomainRequestBodyMatching extends SpeakeasyBase {
    autoMerging?: shared.AutoMerging;
    enabled?: boolean;
    exportingConfig?: shared.ExportingConfig;
    jobSchedule?: shared.JobSchedule;
}
export declare class UpdateDomainRequestBody extends SpeakeasyBase {
    /**
     * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
     */
    deadLetterQueueUrl?: string;
    /**
     * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.
     */
    defaultEncryptionKey?: string;
    /**
     * The default number of days until the data within the domain expires.
     */
    defaultExpirationDays?: number;
    /**
     * The flag that enables the matching process of duplicate profiles.
     */
    matching?: UpdateDomainRequestBodyMatching;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Record<string, string>;
}
export declare class UpdateDomainRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: UpdateDomainRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDomainResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDomainResponse?: shared.UpdateDomainResponse;
}
