package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContactResult {
    @JsonProperty("Alias")
    public String alias;
    public GetContactResult withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonProperty("ContactArn")
    public String contactArn;
    public GetContactResult withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public GetContactResult withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("Plan")
    public Plan plan;
    public GetContactResult withPlan(Plan plan) {
        this.plan = plan;
        return this;
    }
    @JsonProperty("Type")
    public ContactTypeEnum type;
    public GetContactResult withType(ContactTypeEnum type) {
        this.type = type;
        return this;
    }
}