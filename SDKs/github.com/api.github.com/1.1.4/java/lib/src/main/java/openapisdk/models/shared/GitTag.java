package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GitTag
 * Metadata for a Git tag
**/
public class GitTag {
    @JsonProperty("message")
    public String message;
    public GitTag withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public GitTag withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("object")
    public GitTagObject object;
    public GitTag withObject(GitTagObject object) {
        this.object = object;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public GitTag withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public GitTag withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonProperty("tagger")
    public GitTagTagger tagger;
    public GitTag withTagger(GitTagTagger tagger) {
        this.tagger = tagger;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitTag withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public Verification verification;
    public GitTag withVerification(Verification verification) {
        this.verification = verification;
        return this;
    }
}