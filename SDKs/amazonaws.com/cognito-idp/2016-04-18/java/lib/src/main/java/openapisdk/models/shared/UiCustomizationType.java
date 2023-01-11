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
 * UiCustomizationType
 * A container for the UI customization information for a user pool's built-in app UI.
**/
public class UiCustomizationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CSS")
    public String css;
    public UiCustomizationType withCss(String css) {
        this.css = css;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CSSVersion")
    public String cssVersion;
    public UiCustomizationType withCssVersion(String cssVersion) {
        this.cssVersion = cssVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public UiCustomizationType withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public UiCustomizationType withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageUrl")
    public String imageUrl;
    public UiCustomizationType withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public UiCustomizationType withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public UiCustomizationType withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}