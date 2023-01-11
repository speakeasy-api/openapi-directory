package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeExclusionsRequest {
    @JsonProperty("exclusionArns")
    public String[] exclusionArns;
    public DescribeExclusionsRequest withExclusionArns(String[] exclusionArns) {
        this.exclusionArns = exclusionArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public LocaleEnum locale;
    public DescribeExclusionsRequest withLocale(LocaleEnum locale) {
        this.locale = locale;
        return this;
    }
}