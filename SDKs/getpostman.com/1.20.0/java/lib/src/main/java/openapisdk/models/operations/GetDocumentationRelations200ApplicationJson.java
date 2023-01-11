package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentationRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation")
    public GetDocumentationRelations200ApplicationJsonDocumentation[] documentation;
    public GetDocumentationRelations200ApplicationJson withDocumentation(GetDocumentationRelations200ApplicationJsonDocumentation[] documentation) {
        this.documentation = documentation;
        return this;
    }
}