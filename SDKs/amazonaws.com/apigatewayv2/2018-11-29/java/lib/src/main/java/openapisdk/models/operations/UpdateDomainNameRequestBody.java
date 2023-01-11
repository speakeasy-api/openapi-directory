package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDomainNameRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainNameConfigurations")
    public openapisdk.models.shared.DomainNameConfiguration[] domainNameConfigurations;
    public UpdateDomainNameRequestBody withDomainNameConfigurations(openapisdk.models.shared.DomainNameConfiguration[] domainNameConfigurations) {
        this.domainNameConfigurations = domainNameConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutualTlsAuthentication")
    public UpdateDomainNameRequestBodyMutualTlsAuthentication mutualTlsAuthentication;
    public UpdateDomainNameRequestBody withMutualTlsAuthentication(UpdateDomainNameRequestBodyMutualTlsAuthentication mutualTlsAuthentication) {
        this.mutualTlsAuthentication = mutualTlsAuthentication;
        return this;
    }
}