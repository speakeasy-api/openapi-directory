package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchingResource
 * Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes.
**/
public class MatchingResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingBucket")
    public MatchingBucket matchingBucket;
    public MatchingResource withMatchingBucket(MatchingBucket matchingBucket) {
        this.matchingBucket = matchingBucket;
        return this;
    }
}