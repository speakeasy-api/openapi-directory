package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassAttachmentCreation
 * Attachment creation for an assignment or stream post.
 * This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.
 * 
**/
public class ClassAttachmentCreation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDriveFileId")
    public String googleDriveFileId;
    public ClassAttachmentCreation withGoogleDriveFileId(String googleDriveFileId) {
        this.googleDriveFileId = googleDriveFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockScoreTemplate")
    public Boolean lockScoreTemplate;
    public ClassAttachmentCreation withLockScoreTemplate(Boolean lockScoreTemplate) {
        this.lockScoreTemplate = lockScoreTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public String score;
    public ClassAttachmentCreation withScore(String score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharingMode")
    public MediaScoreSharingModeEnum sharingMode;
    public ClassAttachmentCreation withSharingMode(MediaScoreSharingModeEnum sharingMode) {
        this.sharingMode = sharingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ClassAttachmentCreationTypeEnum type;
    public ClassAttachmentCreation withType(ClassAttachmentCreationTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ClassAttachmentCreation withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worksheet")
    public String worksheet;
    public ClassAttachmentCreation withWorksheet(String worksheet) {
        this.worksheet = worksheet;
        return this;
    }
}