package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Language
 * Language
**/
public class Language {
    @JsonProperty("code")
    public String code;
    public Language withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Language withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("nativeName")
    public String nativeName;
    public Language withNativeName(String nativeName) {
        this.nativeName = nativeName;
        return this;
    }
}