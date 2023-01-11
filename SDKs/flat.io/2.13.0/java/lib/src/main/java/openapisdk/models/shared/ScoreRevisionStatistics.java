package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreRevisionStatistics
 * The statistics related to the score revision (additions and deletions)
 * 
**/
public class ScoreRevisionStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additions")
    public Double additions;
    public ScoreRevisionStatistics withAdditions(Double additions) {
        this.additions = additions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletions")
    public Double deletions;
    public ScoreRevisionStatistics withDeletions(Double deletions) {
        this.deletions = deletions;
        return this;
    }
}