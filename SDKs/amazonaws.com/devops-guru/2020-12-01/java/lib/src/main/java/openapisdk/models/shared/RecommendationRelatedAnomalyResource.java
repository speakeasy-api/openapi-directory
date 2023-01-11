package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationRelatedAnomalyResource
 *  Information about a resource in which DevOps Guru detected anomalous behavior. 
**/
public class RecommendationRelatedAnomalyResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RecommendationRelatedAnomalyResource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public RecommendationRelatedAnomalyResource withType(String type) {
        this.type = type;
        return this;
    }
}