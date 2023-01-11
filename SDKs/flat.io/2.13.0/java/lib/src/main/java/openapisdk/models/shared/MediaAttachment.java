package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MediaAttachment
 * Media attachment. The API will automatically resolve the details, oEmbed,
 * and media available if possible and return them in this object
 * 
**/
public class MediaAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorName")
    public String authorName;
    public MediaAttachment withAuthorName(String authorName) {
        this.authorName = authorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorUrl")
    public String authorUrl;
    public MediaAttachment withAuthorUrl(String authorUrl) {
        this.authorUrl = authorUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MediaAttachment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDriveFileId")
    public String googleDriveFileId;
    public MediaAttachment withGoogleDriveFileId(String googleDriveFileId) {
        this.googleDriveFileId = googleDriveFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public String html;
    public MediaAttachment withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlHeight")
    public String htmlHeight;
    public MediaAttachment withHtmlHeight(String htmlHeight) {
        this.htmlHeight = htmlHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlWidth")
    public String htmlWidth;
    public MediaAttachment withHtmlWidth(String htmlWidth) {
        this.htmlWidth = htmlWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUrl")
    public String iconUrl;
    public MediaAttachment withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockScoreTemplate")
    public Boolean lockScoreTemplate;
    public MediaAttachment withLockScoreTemplate(Boolean lockScoreTemplate) {
        this.lockScoreTemplate = lockScoreTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public MediaAttachment withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public MediaAttachment withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public String score;
    public MediaAttachment withScore(String score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharingMode")
    public MediaScoreSharingModeEnum sharingMode;
    public MediaAttachment withSharingMode(MediaScoreSharingModeEnum sharingMode) {
        this.sharingMode = sharingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailHeight")
    public Long thumbnailHeight;
    public MediaAttachment withThumbnailHeight(Long thumbnailHeight) {
        this.thumbnailHeight = thumbnailHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUrl")
    public String thumbnailUrl;
    public MediaAttachment withThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailWidth")
    public Long thumbnailWidth;
    public MediaAttachment withThumbnailWidth(Long thumbnailWidth) {
        this.thumbnailWidth = thumbnailWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MediaAttachment withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public String track;
    public MediaAttachment withTrack(String track) {
        this.track = track;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MediaAttachmentTypeEnum type;
    public MediaAttachment withType(MediaAttachmentTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MediaAttachment withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worksheet")
    public String worksheet;
    public MediaAttachment withWorksheet(String worksheet) {
        this.worksheet = worksheet;
        return this;
    }
}