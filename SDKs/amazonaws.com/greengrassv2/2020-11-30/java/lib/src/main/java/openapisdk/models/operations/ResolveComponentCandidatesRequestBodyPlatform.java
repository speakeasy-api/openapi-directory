package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolveComponentCandidatesRequestBodyPlatform
 * Contains information about a platform that a component supports.
**/
public class ResolveComponentCandidatesRequestBodyPlatform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public ResolveComponentCandidatesRequestBodyPlatform withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResolveComponentCandidatesRequestBodyPlatform withName(String name) {
        this.name = name;
        return this;
    }
}