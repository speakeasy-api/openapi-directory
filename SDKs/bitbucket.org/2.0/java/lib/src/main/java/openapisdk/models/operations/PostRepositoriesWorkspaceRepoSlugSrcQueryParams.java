package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugSrcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public PostRepositoriesWorkspaceRepoSlugSrcQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=branch")
    public String branch;
    public PostRepositoriesWorkspaceRepoSlugSrcQueryParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=files")
    public String files;
    public PostRepositoriesWorkspaceRepoSlugSrcQueryParams withFiles(String files) {
        this.files = files;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message")
    public String message;
    public PostRepositoriesWorkspaceRepoSlugSrcQueryParams withMessage(String message) {
        this.message = message;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parents")
    public String parents;
    public PostRepositoriesWorkspaceRepoSlugSrcQueryParams withParents(String parents) {
        this.parents = parents;
        return this;
    }
}