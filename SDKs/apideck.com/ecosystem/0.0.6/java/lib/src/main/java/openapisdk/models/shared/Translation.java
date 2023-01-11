package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Translation {
    @JsonProperty("key")
    public String key;
    public Translation withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("locale")
    public String locale;
    public Translation withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Translation withValue(String value) {
        this.value = value;
        return this;
    }
}