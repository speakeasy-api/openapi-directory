package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BlockerDeclaration
 * Reserved for future use.
**/
public class BlockerDeclaration {
    @JsonProperty("name")
    public String name;
    public BlockerDeclaration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public BlockerTypeEnum type;
    public BlockerDeclaration withType(BlockerTypeEnum type) {
        this.type = type;
        return this;
    }
}