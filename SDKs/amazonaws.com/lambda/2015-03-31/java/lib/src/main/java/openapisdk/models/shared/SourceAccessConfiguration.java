package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceAccessConfiguration
 * To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
**/
public class SourceAccessConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public SourceAccessTypeEnum type;
    public SourceAccessConfiguration withType(SourceAccessTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("URI")
    public String uri;
    public SourceAccessConfiguration withUri(String uri) {
        this.uri = uri;
        return this;
    }
}