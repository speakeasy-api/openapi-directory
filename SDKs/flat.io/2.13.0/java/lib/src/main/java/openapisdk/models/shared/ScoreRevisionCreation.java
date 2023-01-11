package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreRevisionCreation
 * A new created revision
**/
public class ScoreRevisionCreation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autosave")
    public Boolean autosave;
    public ScoreRevisionCreation withAutosave(Boolean autosave) {
        this.autosave = autosave;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public ScoreRevisionCreation withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataEncoding")
    public ScoreRevisionCreationDataEncodingEnum dataEncoding;
    public ScoreRevisionCreation withDataEncoding(ScoreRevisionCreationDataEncodingEnum dataEncoding) {
        this.dataEncoding = dataEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ScoreRevisionCreation withDescription(String description) {
        this.description = description;
        return this;
    }
}