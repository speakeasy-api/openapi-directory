package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDomainNameResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiMappingSelectionExpression")
    public java.util.Map<String, Object> apiMappingSelectionExpression;
    public UpdateDomainNameResponse withApiMappingSelectionExpression(java.util.Map<String, Object> apiMappingSelectionExpression) {
        this.apiMappingSelectionExpression = apiMappingSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public java.util.Map<String, Object> domainName;
    public UpdateDomainNameResponse withDomainName(java.util.Map<String, Object> domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainNameConfigurations")
    public java.util.Map<String, Object> domainNameConfigurations;
    public UpdateDomainNameResponse withDomainNameConfigurations(java.util.Map<String, Object> domainNameConfigurations) {
        this.domainNameConfigurations = domainNameConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MutualTlsAuthentication")
    public UpdateDomainNameResponseMutualTlsAuthentication mutualTlsAuthentication;
    public UpdateDomainNameResponse withMutualTlsAuthentication(UpdateDomainNameResponseMutualTlsAuthentication mutualTlsAuthentication) {
        this.mutualTlsAuthentication = mutualTlsAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public UpdateDomainNameResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}