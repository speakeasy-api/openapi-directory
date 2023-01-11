package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainNameRequestBody {
    @JsonProperty("domainName")
    public String domainName;
    public CreateDomainNameRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainNameConfigurations")
    public openapisdk.models.shared.DomainNameConfiguration[] domainNameConfigurations;
    public CreateDomainNameRequestBody withDomainNameConfigurations(openapisdk.models.shared.DomainNameConfiguration[] domainNameConfigurations) {
        this.domainNameConfigurations = domainNameConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutualTlsAuthentication")
    public CreateDomainNameRequestBodyMutualTlsAuthentication mutualTlsAuthentication;
    public CreateDomainNameRequestBody withMutualTlsAuthentication(CreateDomainNameRequestBodyMutualTlsAuthentication mutualTlsAuthentication) {
        this.mutualTlsAuthentication = mutualTlsAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateDomainNameRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}