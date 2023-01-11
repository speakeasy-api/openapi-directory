package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeSocialLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EmployeeSocialLinks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public EmployeeSocialLinks withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public EmployeeSocialLinks withUrl(String url) {
        this.url = url;
        return this;
    }
}