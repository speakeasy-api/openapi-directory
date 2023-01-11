package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssociateRepositoryRequestBodyRepository
 *  Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. 
**/
public class AssociateRepositoryRequestBodyRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bitbucket")
    public openapisdk.models.shared.ThirdPartySourceRepository bitbucket;
    public AssociateRepositoryRequestBodyRepository withBitbucket(openapisdk.models.shared.ThirdPartySourceRepository bitbucket) {
        this.bitbucket = bitbucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeCommit")
    public openapisdk.models.shared.CodeCommitRepository codeCommit;
    public AssociateRepositoryRequestBodyRepository withCodeCommit(openapisdk.models.shared.CodeCommitRepository codeCommit) {
        this.codeCommit = codeCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubEnterpriseServer")
    public openapisdk.models.shared.ThirdPartySourceRepository gitHubEnterpriseServer;
    public AssociateRepositoryRequestBodyRepository withGitHubEnterpriseServer(openapisdk.models.shared.ThirdPartySourceRepository gitHubEnterpriseServer) {
        this.gitHubEnterpriseServer = gitHubEnterpriseServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Bucket")
    public openapisdk.models.shared.S3Repository s3Bucket;
    public AssociateRepositoryRequestBodyRepository withS3Bucket(openapisdk.models.shared.S3Repository s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
}