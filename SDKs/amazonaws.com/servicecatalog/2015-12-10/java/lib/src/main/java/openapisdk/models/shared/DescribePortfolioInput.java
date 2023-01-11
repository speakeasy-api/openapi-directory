package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePortfolioInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DescribePortfolioInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public DescribePortfolioInput withId(String id) {
        this.id = id;
        return this;
    }
}