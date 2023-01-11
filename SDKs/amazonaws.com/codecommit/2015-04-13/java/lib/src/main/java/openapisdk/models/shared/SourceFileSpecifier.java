package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceFileSpecifier
 * Information about a source file that is part of changes made in a commit.
**/
public class SourceFileSpecifier {
    @JsonProperty("filePath")
    public String filePath;
    public SourceFileSpecifier withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMove")
    public Boolean isMove;
    public SourceFileSpecifier withIsMove(Boolean isMove) {
        this.isMove = isMove;
        return this;
    }
}