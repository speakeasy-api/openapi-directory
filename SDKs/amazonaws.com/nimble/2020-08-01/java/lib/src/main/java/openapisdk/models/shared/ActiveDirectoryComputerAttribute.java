package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActiveDirectoryComputerAttribute
 * An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.
**/
public class ActiveDirectoryComputerAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ActiveDirectoryComputerAttribute withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ActiveDirectoryComputerAttribute withValue(String value) {
        this.value = value;
        return this;
    }
}