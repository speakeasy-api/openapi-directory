package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublishSchemaRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinorVersion")
    public String minorVersion;
    public PublishSchemaRequestBody withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public PublishSchemaRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Version")
    public String version;
    public PublishSchemaRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}