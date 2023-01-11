package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreModification
 * Edit the score metadata
**/
public class ScoreModification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arranger")
    public String arranger;
    public ScoreModification withArranger(String arranger) {
        this.arranger = arranger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composer")
    public String composer;
    public ScoreModification withComposer(String composer) {
        this.composer = composer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationType")
    public ScoreCreationTypeEnum creationType;
    public ScoreModification withCreationType(ScoreCreationTypeEnum creationType) {
        this.creationType = creationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ScoreModification withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public ScoreLicenseEnum license;
    public ScoreModification withLicense(ScoreLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseText")
    public String licenseText;
    public ScoreModification withLicenseText(String licenseText) {
        this.licenseText = licenseText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lyricist")
    public String lyricist;
    public ScoreModification withLyricist(String lyricist) {
        this.lyricist = lyricist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public ScorePrivacyEnum privacy;
    public ScoreModification withPrivacy(ScorePrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharingKey")
    public String sharingKey;
    public ScoreModification withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtitle")
    public String subtitle;
    public ScoreModification withSubtitle(String subtitle) {
        this.subtitle = subtitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ScoreModification withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ScoreModification withTitle(String title) {
        this.title = title;
        return this;
    }
}