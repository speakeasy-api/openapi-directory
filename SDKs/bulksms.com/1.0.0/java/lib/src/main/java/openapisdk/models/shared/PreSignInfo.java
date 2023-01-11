package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreSignInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fetchUrl")
    public String fetchUrl;
    public PreSignInfo withFetchUrl(String fetchUrl) {
        this.fetchUrl = fetchUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public PreSignInfoFields[] fields;
    public PreSignInfo withFields(PreSignInfoFields[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("putUrl")
    public String putUrl;
    public PreSignInfo withPutUrl(String putUrl) {
        this.putUrl = putUrl;
        return this;
    }
}