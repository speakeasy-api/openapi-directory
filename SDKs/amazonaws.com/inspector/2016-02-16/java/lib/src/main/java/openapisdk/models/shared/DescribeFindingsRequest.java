package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFindingsRequest {
    @JsonProperty("findingArns")
    public String[] findingArns;
    public DescribeFindingsRequest withFindingArns(String[] findingArns) {
        this.findingArns = findingArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public LocaleEnum locale;
    public DescribeFindingsRequest withLocale(LocaleEnum locale) {
        this.locale = locale;
        return this;
    }
}