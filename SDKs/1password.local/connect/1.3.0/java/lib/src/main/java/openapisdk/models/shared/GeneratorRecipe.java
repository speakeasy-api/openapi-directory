package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratorRecipe
 * The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value
**/
public class GeneratorRecipe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("characterSets")
    public GeneratorRecipeCharacterSetsEnum[] characterSets;
    public GeneratorRecipe withCharacterSets(GeneratorRecipeCharacterSetsEnum[] characterSets) {
        this.characterSets = characterSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GeneratorRecipe withLength(Long length) {
        this.length = length;
        return this;
    }
}