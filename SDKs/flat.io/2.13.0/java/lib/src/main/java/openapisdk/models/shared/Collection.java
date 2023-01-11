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
 * Collection
 * Collection of scores
**/
public class Collection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app")
    public String app;
    public Collection withApp(String app) {
        this.app = app;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public CollectionCapabilities capabilities;
    public Collection withCapabilities(CollectionCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborators")
    public ResourceCollaborator[] collaborators;
    public Collection withCollaborators(ResourceCollaborator[] collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public String[] collections;
    public Collection withCollections(String[] collections) {
        this.collections = collections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public Collection withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlUrl")
    public String htmlUrl;
    public Collection withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Collection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public CollectionPrivacyEnum privacy;
    public Collection withPrivacy(CollectionPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rights")
    public ResourceRights rights;
    public Collection withRights(ResourceRights rights) {
        this.rights = rights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharingKey")
    public String sharingKey;
    public Collection withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Collection withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CollectionTypeEnum type;
    public Collection withType(CollectionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserPublicSummary user;
    public Collection withUser(UserPublicSummary user) {
        this.user = user;
        return this;
    }
}