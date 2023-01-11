package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerConfig")
    public CreateDomainConfigurationRequestBodyAuthorizerConfig authorizerConfig;
    public CreateDomainConfigurationRequestBody withAuthorizerConfig(CreateDomainConfigurationRequestBodyAuthorizerConfig authorizerConfig) {
        this.authorizerConfig = authorizerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public CreateDomainConfigurationRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificateArns")
    public String[] serverCertificateArns;
    public CreateDomainConfigurationRequestBody withServerCertificateArns(String[] serverCertificateArns) {
        this.serverCertificateArns = serverCertificateArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceType")
    public CreateDomainConfigurationRequestBodyServiceTypeEnum serviceType;
    public CreateDomainConfigurationRequestBody withServiceType(CreateDomainConfigurationRequestBodyServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateDomainConfigurationRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationCertificateArn")
    public String validationCertificateArn;
    public CreateDomainConfigurationRequestBody withValidationCertificateArn(String validationCertificateArn) {
        this.validationCertificateArn = validationCertificateArn;
        return this;
    }
}