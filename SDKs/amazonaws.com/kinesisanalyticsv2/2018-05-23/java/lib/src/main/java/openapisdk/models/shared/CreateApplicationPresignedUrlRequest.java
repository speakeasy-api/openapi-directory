package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplicationPresignedUrlRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public CreateApplicationPresignedUrlRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionExpirationDurationInSeconds")
    public Long sessionExpirationDurationInSeconds;
    public CreateApplicationPresignedUrlRequest withSessionExpirationDurationInSeconds(Long sessionExpirationDurationInSeconds) {
        this.sessionExpirationDurationInSeconds = sessionExpirationDurationInSeconds;
        return this;
    }
    @JsonProperty("UrlType")
    public UrlTypeEnum urlType;
    public CreateApplicationPresignedUrlRequest withUrlType(UrlTypeEnum urlType) {
        this.urlType = urlType;
        return this;
    }
}