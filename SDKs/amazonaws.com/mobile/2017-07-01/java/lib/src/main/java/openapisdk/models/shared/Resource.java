package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 *  Information about an instance of an AWS resource associated with a project. 
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Resource withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public Resource withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public String feature;
    public Resource withFeature(String feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Resource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Resource withType(String type) {
        this.type = type;
        return this;
    }
}