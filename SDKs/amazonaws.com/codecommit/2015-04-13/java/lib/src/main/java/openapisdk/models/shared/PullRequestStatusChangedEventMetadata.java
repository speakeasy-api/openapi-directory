package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullRequestStatusChangedEventMetadata
 * Information about a change to the status of a pull request.
**/
public class PullRequestStatusChangedEventMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestStatus")
    public PullRequestStatusEnumEnum pullRequestStatus;
    public PullRequestStatusChangedEventMetadata withPullRequestStatus(PullRequestStatusEnumEnum pullRequestStatus) {
        this.pullRequestStatus = pullRequestStatus;
        return this;
    }
}