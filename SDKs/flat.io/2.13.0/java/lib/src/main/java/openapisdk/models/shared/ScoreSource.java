package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScoreSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDrive")
    public String googleDrive;
    public ScoreSource withGoogleDrive(String googleDrive) {
        this.googleDrive = googleDrive;
        return this;
    }
}