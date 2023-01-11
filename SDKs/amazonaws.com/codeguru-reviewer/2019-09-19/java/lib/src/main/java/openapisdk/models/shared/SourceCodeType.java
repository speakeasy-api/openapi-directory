package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceCodeType
 *  Specifies the source code that is analyzed in a code review. 
**/
public class SourceCodeType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchDiff")
    public BranchDiffSourceCodeType branchDiff;
    public SourceCodeType withBranchDiff(BranchDiffSourceCodeType branchDiff) {
        this.branchDiff = branchDiff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommitDiff")
    public CommitDiffSourceCodeType commitDiff;
    public SourceCodeType withCommitDiff(CommitDiffSourceCodeType commitDiff) {
        this.commitDiff = commitDiff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryHead")
    public RepositoryHeadSourceCodeType repositoryHead;
    public SourceCodeType withRepositoryHead(RepositoryHeadSourceCodeType repositoryHead) {
        this.repositoryHead = repositoryHead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestMetadata")
    public RequestMetadata requestMetadata;
    public SourceCodeType withRequestMetadata(RequestMetadata requestMetadata) {
        this.requestMetadata = requestMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketRepository")
    public S3BucketRepository s3BucketRepository;
    public SourceCodeType withS3BucketRepository(S3BucketRepository s3BucketRepository) {
        this.s3BucketRepository = s3BucketRepository;
        return this;
    }
}