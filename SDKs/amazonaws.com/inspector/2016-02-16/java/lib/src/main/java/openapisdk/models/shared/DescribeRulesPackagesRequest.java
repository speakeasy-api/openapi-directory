package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRulesPackagesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public LocaleEnum locale;
    public DescribeRulesPackagesRequest withLocale(LocaleEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonProperty("rulesPackageArns")
    public String[] rulesPackageArns;
    public DescribeRulesPackagesRequest withRulesPackageArns(String[] rulesPackageArns) {
        this.rulesPackageArns = rulesPackageArns;
        return this;
    }
}