package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProductInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DescribeProductInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public DescribeProductInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeProductInput withName(String name) {
        this.name = name;
        return this;
    }
}