package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Object contains all account properties.
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AccountAttributes attributes;
    public Account withAttributes(AccountAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Account withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public AccountMasterUser relationships;
    public Account withRelationships(AccountMasterUser relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AccountTypeEnum type;
    public Account withType(AccountTypeEnum type) {
        this.type = type;
        return this;
    }
}