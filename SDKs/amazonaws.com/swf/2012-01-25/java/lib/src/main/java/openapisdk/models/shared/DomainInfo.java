package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainInfo
 * Contains general information about a domain.
**/
public class DomainInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public DomainInfo withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DomainInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DomainInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("status")
    public RegistrationStatusEnum status;
    public DomainInfo withStatus(RegistrationStatusEnum status) {
        this.status = status;
        return this;
    }
}