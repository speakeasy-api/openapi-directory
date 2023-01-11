package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso2")
    public String iso2;
    public OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 withIso2(String iso2) {
        this.iso2 = iso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 withName(String name) {
        this.name = name;
        return this;
    }
}