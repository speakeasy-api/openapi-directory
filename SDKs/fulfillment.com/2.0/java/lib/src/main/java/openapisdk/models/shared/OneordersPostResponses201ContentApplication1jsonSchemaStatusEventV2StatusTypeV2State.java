package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State withName(String name) {
        this.name = name;
        return this;
    }
}