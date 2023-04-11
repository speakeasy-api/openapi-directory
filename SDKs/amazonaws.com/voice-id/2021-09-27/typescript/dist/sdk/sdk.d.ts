import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://voiceid.{region}.amazonaws.com", "https://voiceid.{region}.amazonaws.com", "http://voiceid.{region}.amazonaws.com.cn", "https://voiceid.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Amazon Connect Voice ID provides real-time caller authentication and fraud risk detection, which make voice interactions in contact centers more secure and efficient.
 *
 * @see {@link https://docs.aws.amazon.com/voiceid/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Associates the fraudsters with the watchlist specified in the same domain.
     */
    associateFraudster(req: operations.AssociateFraudsterRequest, config?: AxiosRequestConfig): Promise<operations.AssociateFraudsterResponse>;
    /**
     * Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
     */
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     * Creates a watchlist that fraudsters can be a part of.
     */
    createWatchlist(req: operations.CreateWatchlistRequest, config?: AxiosRequestConfig): Promise<operations.CreateWatchlistResponse>;
    /**
     * Deletes the specified domain from Voice ID.
     */
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
     */
    deleteFraudster(req: operations.DeleteFraudsterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFraudsterResponse>;
    /**
     * Deletes the specified speaker from Voice ID.
     */
    deleteSpeaker(req: operations.DeleteSpeakerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpeakerResponse>;
    /**
     * Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted.
     */
    deleteWatchlist(req: operations.DeleteWatchlistRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWatchlistResponse>;
    /**
     * Describes the specified domain.
     */
    describeDomain(req: operations.DescribeDomainRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDomainResponse>;
    /**
     * Describes the specified fraudster.
     */
    describeFraudster(req: operations.DescribeFraudsterRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFraudsterResponse>;
    /**
     * Describes the specified fraudster registration job.
     */
    describeFraudsterRegistrationJob(req: operations.DescribeFraudsterRegistrationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFraudsterRegistrationJobResponse>;
    /**
     * Describes the specified speaker.
     */
    describeSpeaker(req: operations.DescribeSpeakerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSpeakerResponse>;
    /**
     * Describes the specified speaker enrollment job.
     */
    describeSpeakerEnrollmentJob(req: operations.DescribeSpeakerEnrollmentJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSpeakerEnrollmentJobResponse>;
    /**
     * Describes the specified watchlist.
     */
    describeWatchlist(req: operations.DescribeWatchlistRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWatchlistResponse>;
    /**
     * Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown.
     */
    disassociateFraudster(req: operations.DisassociateFraudsterRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFraudsterResponse>;
    /**
     * Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
     */
    evaluateSession(req: operations.EvaluateSessionRequest, config?: AxiosRequestConfig): Promise<operations.EvaluateSessionResponse>;
    /**
     * Lists all the domains in the Amazon Web Services account.
     */
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain.
     */
    listFraudsterRegistrationJobs(req: operations.ListFraudsterRegistrationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListFraudsterRegistrationJobsResponse>;
    /**
     * Lists all fraudsters in a specified watchlist or domain.
     */
    listFraudsters(req: operations.ListFraudstersRequest, config?: AxiosRequestConfig): Promise<operations.ListFraudstersResponse>;
    /**
     * Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
     */
    listSpeakerEnrollmentJobs(req: operations.ListSpeakerEnrollmentJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListSpeakerEnrollmentJobsResponse>;
    /**
     * Lists all speakers in a specified domain.
     */
    listSpeakers(req: operations.ListSpeakersRequest, config?: AxiosRequestConfig): Promise<operations.ListSpeakersResponse>;
    /**
     * Lists all tags associated with a specified Voice ID resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists all watchlists in a specified domain.
     */
    listWatchlists(req: operations.ListWatchlistsRequest, config?: AxiosRequestConfig): Promise<operations.ListWatchlistsResponse>;
    /**
     * Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
     */
    optOutSpeaker(req: operations.OptOutSpeakerRequest, config?: AxiosRequestConfig): Promise<operations.OptOutSpeakerResponse>;
    /**
     * Starts a new batch fraudster registration job using provided details.
     */
    startFraudsterRegistrationJob(req: operations.StartFraudsterRegistrationJobRequest, config?: AxiosRequestConfig): Promise<operations.StartFraudsterRegistrationJobResponse>;
    /**
     * Starts a new batch speaker enrollment job using specified details.
     */
    startSpeakerEnrollmentJob(req: operations.StartSpeakerEnrollmentJobRequest, config?: AxiosRequestConfig): Promise<operations.StartSpeakerEnrollmentJobResponse>;
    /**
     * Tags a Voice ID resource with the provided list of tags.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes specified tags from a specified Amazon Connect Voice ID resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
     */
    updateDomain(req: operations.UpdateDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainResponse>;
    /**
     * Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.
     */
    updateWatchlist(req: operations.UpdateWatchlistRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWatchlistResponse>;
}
