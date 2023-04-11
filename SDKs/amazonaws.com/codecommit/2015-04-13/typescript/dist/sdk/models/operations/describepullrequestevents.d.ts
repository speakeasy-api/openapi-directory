import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePullRequestEventsXAmzTargetEnum {
    CodeCommit20150413DescribePullRequestEvents = "CodeCommit_20150413.DescribePullRequestEvents"
}
export declare class DescribePullRequestEventsRequest extends SpeakeasyBase {
    describePullRequestEventsInput: shared.DescribePullRequestEventsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePullRequestEventsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribePullRequestEventsResponse extends SpeakeasyBase {
    /**
     * ActorDoesNotExistException
     */
    actorDoesNotExistException?: any;
    contentType: string;
    /**
     * Success
     */
    describePullRequestEventsOutput?: shared.DescribePullRequestEventsOutput;
    /**
     * EncryptionIntegrityChecksFailedException
     */
    encryptionIntegrityChecksFailedException?: any;
    /**
     * EncryptionKeyAccessDeniedException
     */
    encryptionKeyAccessDeniedException?: any;
    /**
     * EncryptionKeyDisabledException
     */
    encryptionKeyDisabledException?: any;
    /**
     * EncryptionKeyNotFoundException
     */
    encryptionKeyNotFoundException?: any;
    /**
     * EncryptionKeyUnavailableException
     */
    encryptionKeyUnavailableException?: any;
    /**
     * InvalidActorArnException
     */
    invalidActorArnException?: any;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * InvalidPullRequestEventTypeException
     */
    invalidPullRequestEventTypeException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * PullRequestDoesNotExistException
     */
    pullRequestDoesNotExistException?: any;
    /**
     * PullRequestIdRequiredException
     */
    pullRequestIdRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
