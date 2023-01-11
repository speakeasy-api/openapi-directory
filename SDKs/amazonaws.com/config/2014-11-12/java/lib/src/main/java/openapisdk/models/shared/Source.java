package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * Provides the Config rule owner (Amazon Web Services or customer), the rule identifier, and the events that trigger the evaluation of your Amazon Web Services resources.
**/
public class Source {
    @JsonProperty("Owner")
    public OwnerEnum owner;
    public Source withOwner(OwnerEnum owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDetails")
    public SourceDetail[] sourceDetails;
    public Source withSourceDetails(SourceDetail[] sourceDetails) {
        this.sourceDetails = sourceDetails;
        return this;
    }
    @JsonProperty("SourceIdentifier")
    public String sourceIdentifier;
    public Source withSourceIdentifier(String sourceIdentifier) {
        this.sourceIdentifier = sourceIdentifier;
        return this;
    }
}