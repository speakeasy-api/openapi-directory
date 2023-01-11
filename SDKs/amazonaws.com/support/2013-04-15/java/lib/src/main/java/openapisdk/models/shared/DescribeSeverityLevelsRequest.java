package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSeverityLevelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public DescribeSeverityLevelsRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
}