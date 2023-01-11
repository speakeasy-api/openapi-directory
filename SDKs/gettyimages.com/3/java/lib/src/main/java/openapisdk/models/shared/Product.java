package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agreement_name")
    public String agreementName;
    public Product withAgreementName(String agreementName) {
        this.agreementName = agreementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_website")
    public String applicationWebsite;
    public Product withApplicationWebsite(String applicationWebsite) {
        this.applicationWebsite = applicationWebsite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credits_remaining")
    public Integer creditsRemaining;
    public Product withCreditsRemaining(Integer creditsRemaining) {
        this.creditsRemaining = creditsRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_limit")
    public Integer downloadLimit;
    public Product withDownloadLimit(Integer downloadLimit) {
        this.downloadLimit = downloadLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_limit_duration")
    public String downloadLimitDuration;
    public Product withDownloadLimitDuration(String downloadLimitDuration) {
        this.downloadLimitDuration = downloadLimitDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("download_limit_reset_utc_date")
    public OffsetDateTime downloadLimitResetUtcDate;
    public Product withDownloadLimitResetUtcDate(OffsetDateTime downloadLimitResetUtcDate) {
        this.downloadLimitResetUtcDate = downloadLimitResetUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_requirements")
    public DownloadRequirements downloadRequirements;
    public Product withDownloadRequirements(DownloadRequirements downloadRequirements) {
        this.downloadRequirements = downloadRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloads_remaining")
    public Integer downloadsRemaining;
    public Product withDownloadsRemaining(Integer downloadsRemaining) {
        this.downloadsRemaining = downloadsRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiration_utc_date")
    public OffsetDateTime expirationUtcDate;
    public Product withExpirationUtcDate(OffsetDateTime expirationUtcDate) {
        this.expirationUtcDate = expirationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Product withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagepack_resolution")
    public String imagepackResolution;
    public Product withImagepackResolution(String imagepackResolution) {
        this.imagepackResolution = imagepackResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Product withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overage")
    public OverageDetails overage;
    public Product withOverage(OverageDetails overage) {
        this.overage = overage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProductStatusEnum status;
    public Product withStatus(ProductStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_credits")
    public Integer teamCredits;
    public Product withTeamCredits(Integer teamCredits) {
        this.teamCredits = teamCredits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ProductTypeResponseEnum type;
    public Product withType(ProductTypeResponseEnum type) {
        this.type = type;
        return this;
    }
}