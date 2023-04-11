import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://codeguru-reviewer.{region}.amazonaws.com", "https://codeguru-reviewer.{region}.amazonaws.com", "http://codeguru-reviewer.{region}.amazonaws.com.cn", "https://codeguru-reviewer.{region}.amazonaws.com.cn"];
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
 * <p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends fixes in your Java and Python code.</p> <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the <i> <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i> </p> <p>To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/codeguru-reviewer/} - Amazon Web Services documentation
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
     * <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
     */
    associateRepository(req: operations.AssociateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.AssociateRepositoryResponse>;
    /**
     * Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
     */
    createCodeReview(req: operations.CreateCodeReviewRequest, config?: AxiosRequestConfig): Promise<operations.CreateCodeReviewResponse>;
    /**
     * Returns the metadata associated with the code review along with its status.
     */
    describeCodeReview(req: operations.DescribeCodeReviewRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCodeReviewResponse>;
    /**
     * Describes the customer feedback for a CodeGuru Reviewer recommendation.
     */
    describeRecommendationFeedback(req: operations.DescribeRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecommendationFeedbackResponse>;
    /**
     * Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.
     */
    describeRepositoryAssociation(req: operations.DescribeRepositoryAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRepositoryAssociationResponse>;
    /**
     * Removes the association between Amazon CodeGuru Reviewer and a repository.
     */
    disassociateRepository(req: operations.DisassociateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateRepositoryResponse>;
    /**
     * Lists all the code reviews that the customer has created in the past 90 days.
     */
    listCodeReviews(req: operations.ListCodeReviewsRequest, config?: AxiosRequestConfig): Promise<operations.ListCodeReviewsResponse>;
    /**
     * Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
     */
    listRecommendationFeedback(req: operations.ListRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationFeedbackResponse>;
    /**
     * Returns the list of all recommendations for a completed code review.
     */
    listRecommendations(req: operations.ListRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationsResponse>;
    /**
     * Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.
     */
    listRepositoryAssociations(req: operations.ListRepositoryAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoryAssociationsResponse>;
    /**
     * Returns the list of tags associated with an associated repository resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
     */
    putRecommendationFeedback(req: operations.PutRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PutRecommendationFeedbackResponse>;
    /**
     * Adds one or more tags to an associated repository.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag from an associated repository.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
