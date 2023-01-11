package openapisdk.models.shared;



/**
 * SupportedCharacterSetsList
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
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