package openapisdk.models.shared;



/**
 * CharacterSet
 * Specifies a character set.
**/
public class CharacterSet {
    public String characterSetDescription;
    public CharacterSet withCharacterSetDescription(String characterSetDescription) {
        this.characterSetDescription = characterSetDescription;
        return this;
    }
    public String characterSetName;
    public CharacterSet withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
}