package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreCreation
 * A new created score
**/
public class ScoreCreation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public ScoreCreation withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public ScoreCreation withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataEncoding")
    public ScoreCreationDataEncodingEnum dataEncoding;
    public ScoreCreation withDataEncoding(ScoreCreationDataEncodingEnum dataEncoding) {
        this.dataEncoding = dataEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public ScoreCreation withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDriveFolder")
    public String googleDriveFolder;
    public ScoreCreation withGoogleDriveFolder(String googleDriveFolder) {
        this.googleDriveFolder = googleDriveFolder;
        return this;
    }
    @JsonProperty("privacy")
    public ScorePrivacyEnum privacy;
    public ScoreCreation withPrivacy(ScorePrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ScoreSource source;
    public ScoreCreation withSource(ScoreSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ScoreCreation withTitle(String title) {
        this.title = title;
        return this;
    }
}