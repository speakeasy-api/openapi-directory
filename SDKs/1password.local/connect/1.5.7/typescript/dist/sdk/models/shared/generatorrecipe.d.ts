import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GeneratorRecipeCharacterSetsEnum {
    Letters = "LETTERS",
    Digits = "DIGITS",
    Symbols = "SYMBOLS"
}
/**
 * The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value
 */
export declare class GeneratorRecipe extends SpeakeasyBase {
    characterSets?: GeneratorRecipeCharacterSetsEnum[];
    /**
     * List of all characters that should be excluded from generated passwords.
     */
    excludeCharacters?: string;
    /**
     * Length of the generated value
     */
    length?: number;
}
