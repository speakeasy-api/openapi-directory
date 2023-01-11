package openapisdk.models.shared;



/**
 * SupportedCharacterSetsList
 * Specifies a character set.
**/
public class SupportedCharacterSetsList {
    public String characterSetDescription;
    public SupportedCharacterSetsList withCharacterSetDescription(String characterSetDescription) {
        this.characterSetDescription = characterSetDescription;
        return this;
    }
    public String characterSetName;
    public SupportedCharacterSetsList withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
}