package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDomainConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerConfig")
    public AuthorizerConfig authorizerConfig;
    public DescribeDomainConfigurationResponse withAuthorizerConfig(AuthorizerConfig authorizerConfig) {
        this.authorizerConfig = authorizerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationArn")
    public String domainConfigurationArn;
    public DescribeDomainConfigurationResponse withDomainConfigurationArn(String domainConfigurationArn) {
        this.domainConfigurationArn = domainConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationName")
    public String domainConfigurationName;
    public DescribeDomainConfigurationResponse withDomainConfigurationName(String domainConfigurationName) {
        this.domainConfigurationName = domainConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationStatus")
    public DomainConfigurationStatusEnum domainConfigurationStatus;
    public DescribeDomainConfigurationResponse withDomainConfigurationStatus(DomainConfigurationStatusEnum domainConfigurationStatus) {
        this.domainConfigurationStatus = domainConfigurationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public DescribeDomainConfigurationResponse withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainType")
    public DomainTypeEnum domainType;
    public DescribeDomainConfigurationResponse withDomainType(DomainTypeEnum domainType) {
        this.domainType = domainType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStatusChangeDate")
    public OffsetDateTime lastStatusChangeDate;
    public DescribeDomainConfigurationResponse withLastStatusChangeDate(OffsetDateTime lastStatusChangeDate) {
        this.lastStatusChangeDate = lastStatusChangeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificates")
    public ServerCertificateSummary[] serverCertificates;
    public DescribeDomainConfigurationResponse withServerCertificates(ServerCertificateSummary[] serverCertificates) {
        this.serverCertificates = serverCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceType")
    public ServiceTypeEnum serviceType;
    public DescribeDomainConfigurationResponse withServiceType(ServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
}