package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Recommendation
 *  Recommendation information to help you remediate detected anomalous behavior that generated an insight. 
**/
public class Recommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Recommendation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public String link;
    public Recommendation withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Recommendation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public Recommendation withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedAnomalies")
    public RecommendationRelatedAnomaly[] relatedAnomalies;
    public Recommendation withRelatedAnomalies(RecommendationRelatedAnomaly[] relatedAnomalies) {
        this.relatedAnomalies = relatedAnomalies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedEvents")
    public RecommendationRelatedEvent[] relatedEvents;
    public Recommendation withRelatedEvents(RecommendationRelatedEvent[] relatedEvents) {
        this.relatedEvents = relatedEvents;
        return this;
    }
}