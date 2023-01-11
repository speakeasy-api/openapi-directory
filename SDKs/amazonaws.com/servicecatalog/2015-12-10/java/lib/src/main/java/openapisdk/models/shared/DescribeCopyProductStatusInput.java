package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCopyProductStatusInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DescribeCopyProductStatusInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("CopyProductToken")
    public String copyProductToken;
    public DescribeCopyProductStatusInput withCopyProductToken(String copyProductToken) {
        this.copyProductToken = copyProductToken;
        return this;
    }
}