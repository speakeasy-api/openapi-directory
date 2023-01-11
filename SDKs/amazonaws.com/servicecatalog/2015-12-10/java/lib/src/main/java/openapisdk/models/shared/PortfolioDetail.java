package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PortfolioDetail
 * Information about a portfolio.
**/
public class PortfolioDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public PortfolioDetail withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public PortfolioDetail withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PortfolioDetail withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public PortfolioDetail withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public PortfolioDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderName")
    public String providerName;
    public PortfolioDetail withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
}