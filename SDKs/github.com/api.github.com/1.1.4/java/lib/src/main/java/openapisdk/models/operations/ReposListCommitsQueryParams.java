package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListCommitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public ReposListCommitsQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_sha")
    public String lastSha;
    public ReposListCommitsQueryParams withLastSha(String lastSha) {
        this.lastSha = lastSha;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListCommitsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public ReposListCommitsQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListCommitsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sha")
    public String sha;
    public ReposListCommitsQueryParams withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public ReposListCommitsQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=top")
    public String top;
    public ReposListCommitsQueryParams withTop(String top) {
        this.top = top;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public ReposListCommitsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
}