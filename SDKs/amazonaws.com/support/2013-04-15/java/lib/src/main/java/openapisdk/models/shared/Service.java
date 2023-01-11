package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Service
 * Information about an AWS service returned by the <a>DescribeServices</a> operation.
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public Service withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public Service withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
}