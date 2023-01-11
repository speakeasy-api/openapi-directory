package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAttributesRequest {
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public DeleteAttributesRequest withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public DeleteAttributesRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
}