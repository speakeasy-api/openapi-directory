package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllApiVersions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public GetAllApiVersions200ApplicationJsonVersions[] versions;
    public GetAllApiVersions200ApplicationJson withVersions(GetAllApiVersions200ApplicationJsonVersions[] versions) {
        this.versions = versions;
        return this;
    }
}