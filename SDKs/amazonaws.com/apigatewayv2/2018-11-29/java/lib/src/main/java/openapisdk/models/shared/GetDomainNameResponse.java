package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDomainNameResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiMappingSelectionExpression")
    public java.util.Map<String, Object> apiMappingSelectionExpression;
    public GetDomainNameResponse withApiMappingSelectionExpression(java.util.Map<String, Object> apiMappingSelectionExpression) {
        this.apiMappingSelectionExpression = apiMappingSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public java.util.Map<String, Object> domainName;
    public GetDomainNameResponse withDomainName(java.util.Map<String, Object> domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainNameConfigurations")
    public java.util.Map<String, Object> domainNameConfigurations;
    public GetDomainNameResponse withDomainNameConfigurations(java.util.Map<String, Object> domainNameConfigurations) {
        this.domainNameConfigurations = domainNameConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MutualTlsAuthentication")
    public GetDomainNameResponseMutualTlsAuthentication mutualTlsAuthentication;
    public GetDomainNameResponse withMutualTlsAuthentication(GetDomainNameResponseMutualTlsAuthentication mutualTlsAuthentication) {
        this.mutualTlsAuthentication = mutualTlsAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public GetDomainNameResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}