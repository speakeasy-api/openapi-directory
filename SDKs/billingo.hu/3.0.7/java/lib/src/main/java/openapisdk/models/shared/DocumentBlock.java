package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentBlock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field1")
    public String customField1;
    public DocumentBlock withCustomField1(String customField1) {
        this.customField1 = customField1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field2")
    public String customField2;
    public DocumentBlock withCustomField2(String customField2) {
        this.customField2 = customField2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DocumentBlock withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DocumentBlock withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public DocumentBlock withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}