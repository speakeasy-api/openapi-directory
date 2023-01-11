package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentPublicUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_url")
    public String publicUrl;
    public DocumentPublicUrl withPublicUrl(String publicUrl) {
        this.publicUrl = publicUrl;
        return this;
    }
}