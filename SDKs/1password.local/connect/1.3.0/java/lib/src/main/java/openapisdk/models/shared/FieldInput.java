package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FieldInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generate")
    public Boolean generate;
    public FieldInput withGenerate(Boolean generate) {
        this.generate = generate;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public FieldInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public FieldInput withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public FieldPurposeEnum purpose;
    public FieldInput withPurpose(FieldPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipe")
    public GeneratorRecipe recipe;
    public FieldInput withRecipe(GeneratorRecipe recipe) {
        this.recipe = recipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public FieldSection section;
    public FieldInput withSection(FieldSection section) {
        this.section = section;
        return this;
    }
    @JsonProperty("type")
    public FieldTypeEnum type;
    public FieldInput withType(FieldTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public FieldInput withValue(String value) {
        this.value = value;
        return this;
    }
}