package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobManifestResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManifestURI")
    public String manifestURI;
    public GetJobManifestResult withManifestUri(String manifestURI) {
        this.manifestURI = manifestURI;
        return this;
    }
}