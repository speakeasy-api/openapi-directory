package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ScoreDetails
 * A summary of the score details
**/
public class ScoreDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arranger")
    public String arranger;
    public ScoreDetails withArranger(String arranger) {
        this.arranger = arranger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborators")
    public ResourceCollaborator[] collaborators;
    public ScoreDetails withCollaborators(ResourceCollaborator[] collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public String[] collections;
    public ScoreDetails withCollections(String[] collections) {
        this.collections = collections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public ScoreCommentsCounts comments;
    public ScoreDetails withComments(ScoreCommentsCounts comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composer")
    public String composer;
    public ScoreDetails withComposer(String composer) {
        this.composer = composer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ScoreDetails withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationType")
    public ScoreCreationTypeEnum creationType;
    public ScoreDetails withCreationType(ScoreCreationTypeEnum creationType) {
        this.creationType = creationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ScoreDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationTime")
    public Double durationTime;
    public ScoreDetails withDurationTime(Double durationTime) {
        this.durationTime = durationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDriveFileId")
    public String googleDriveFileId;
    public ScoreDetails withGoogleDriveFileId(String googleDriveFileId) {
        this.googleDriveFileId = googleDriveFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlUrl")
    public String htmlUrl;
    public ScoreDetails withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ScoreDetails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruments")
    public String[] instruments;
    public ScoreDetails withInstruments(String[] instruments) {
        this.instruments = instruments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public ScoreLicenseEnum license;
    public ScoreDetails withLicense(ScoreLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseText")
    public String licenseText;
    public ScoreDetails withLicenseText(String licenseText) {
        this.licenseText = licenseText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likes")
    public ScoreLikesCounts likes;
    public ScoreDetails withLikes(ScoreLikesCounts likes) {
        this.likes = likes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lyricist")
    public String lyricist;
    public ScoreDetails withLyricist(String lyricist) {
        this.lyricist = lyricist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainTempoQpm")
    public Double mainTempoQpm;
    public ScoreDetails withMainTempoQpm(Double mainTempoQpm) {
        this.mainTempoQpm = mainTempoQpm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modificationDate")
    public OffsetDateTime modificationDate;
    public ScoreDetails withModificationDate(OffsetDateTime modificationDate) {
        this.modificationDate = modificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberMeasures")
    public Long numberMeasures;
    public ScoreDetails withNumberMeasures(Long numberMeasures) {
        this.numberMeasures = numberMeasures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public ScoreDetails withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentScore")
    public String parentScore;
    public ScoreDetails withParentScore(String parentScore) {
        this.parentScore = parentScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plays")
    public ScorePlaysCounts plays;
    public ScoreDetails withPlays(ScorePlaysCounts plays) {
        this.plays = plays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public ScorePrivacyEnum privacy;
    public ScoreDetails withPrivacy(ScorePrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publicationDate")
    public OffsetDateTime publicationDate;
    public ScoreDetails withPublicationDate(OffsetDateTime publicationDate) {
        this.publicationDate = publicationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rights")
    public ResourceRights rights;
    public ScoreDetails withRights(ResourceRights rights) {
        this.rights = rights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samples")
    public String[] samples;
    public ScoreDetails withSamples(String[] samples) {
        this.samples = samples;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharingKey")
    public String sharingKey;
    public ScoreDetails withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtitle")
    public String subtitle;
    public ScoreDetails withSubtitle(String subtitle) {
        this.subtitle = subtitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ScoreDetails withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ScoreDetails withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserPublicSummary user;
    public ScoreDetails withUser(UserPublicSummary user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("views")
    public ScoreViewsCounts views;
    public ScoreDetails withViews(ScoreViewsCounts views) {
        this.views = views;
        return this;
    }
}