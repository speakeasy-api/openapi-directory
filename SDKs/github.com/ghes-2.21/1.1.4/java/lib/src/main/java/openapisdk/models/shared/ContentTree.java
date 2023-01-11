package openapisdk.models.shared;



/**
 * ContentTree
 * Content Tree
**/
public class ContentTree {
    public ContentTreeLinks links;
    public ContentTree withLinks(ContentTreeLinks links) {
        this.links = links;
        return this;
    }
    public String downloadUrl;
    public ContentTree withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    public ContentTreeEntries[] entries;
    public ContentTree withEntries(ContentTreeEntries[] entries) {
        this.entries = entries;
        return this;
    }
    public String gitUrl;
    public ContentTree withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    public String htmlUrl;
    public ContentTree withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    public String name;
    public ContentTree withName(String name) {
        this.name = name;
        return this;
    }
    public String path;
    public ContentTree withPath(String path) {
        this.path = path;
        return this;
    }
    public String sha;
    public ContentTree withSha(String sha) {
        this.sha = sha;
        return this;
    }
    public Long size;
    public ContentTree withSize(Long size) {
        this.size = size;
        return this;
    }
    public String type;
    public ContentTree withType(String type) {
        this.type = type;
        return this;
    }
    public String url;
    public ContentTree withUrl(String url) {
        this.url = url;
        return this;
    }
}