package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Field {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entropy")
    public Double entropy;
    public Field withEntropy(Double entropy) {
        this.entropy = entropy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generate")
    public Boolean generate;
    public Field withGenerate(Boolean generate) {
        this.generate = generate;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Field withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Field withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public FieldPurposeEnum purpose;
    public Field withPurpose(FieldPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipe")
    public GeneratorRecipe recipe;
    public Field withRecipe(GeneratorRecipe recipe) {
        this.recipe = recipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public FieldSection section;
    public Field withSection(FieldSection section) {
        this.section = section;
        return this;
    }
    @JsonProperty("type")
    public FieldTypeEnum type;
    public Field withType(FieldTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Field withValue(String value) {
        this.value = value;
        return this;
    }
}