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
 * Release
 * A release.
**/
public class Release {
    @JsonProperty("assets")
    public ReleaseAsset[] assets;
    public Release withAssets(ReleaseAsset[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assets_url")
    public String assetsUrl;
    public Release withAssetsUrl(String assetsUrl) {
        this.assetsUrl = assetsUrl;
        return this;
    }
    @JsonProperty("author")
    public SimpleUser author;
    public Release withAuthor(SimpleUser author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public Release withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_html")
    public String bodyHtml;
    public Release withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_text")
    public String bodyText;
    public Release withBodyText(String bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Release withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("draft")
    public Boolean draft;
    public Release withDraft(Boolean draft) {
        this.draft = draft;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public Release withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Release withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Release withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Release withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("prerelease")
    public Boolean prerelease;
    public Release withPrerelease(Boolean prerelease) {
        this.prerelease = prerelease;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("published_at")
    public OffsetDateTime publishedAt;
    public Release withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonProperty("tag_name")
    public String tagName;
    public Release withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
    @JsonProperty("tarball_url")
    public String tarballUrl;
    public Release withTarballUrl(String tarballUrl) {
        this.tarballUrl = tarballUrl;
        return this;
    }
    @JsonProperty("target_commitish")
    public String targetCommitish;
    public Release withTargetCommitish(String targetCommitish) {
        this.targetCommitish = targetCommitish;
        return this;
    }
    @JsonProperty("upload_url")
    public String uploadUrl;
    public Release withUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Release withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("zipball_url")
    public String zipballUrl;
    public Release withZipballUrl(String zipballUrl) {
        this.zipballUrl = zipballUrl;
        return this;
    }
}