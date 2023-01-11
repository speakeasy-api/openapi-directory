package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServiceActionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public CreateServiceActionInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("Definition")
    public java.util.Map<String, String> definition;
    public CreateServiceActionInput withDefinition(java.util.Map<String, String> definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("DefinitionType")
    public ServiceActionDefinitionTypeEnum definitionType;
    public CreateServiceActionInput withDefinitionType(ServiceActionDefinitionTypeEnum definitionType) {
        this.definitionType = definitionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateServiceActionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateServiceActionInput withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateServiceActionInput withName(String name) {
        this.name = name;
        return this;
    }
}