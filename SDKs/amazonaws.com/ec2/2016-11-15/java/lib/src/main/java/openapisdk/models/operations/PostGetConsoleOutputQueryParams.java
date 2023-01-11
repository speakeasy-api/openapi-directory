package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetConsoleOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetConsoleOutputActionEnum action;
    public PostGetConsoleOutputQueryParams withAction(PostGetConsoleOutputActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetConsoleOutputVersionEnum version;
    public PostGetConsoleOutputQueryParams withVersion(PostGetConsoleOutputVersionEnum version) {
        this.version = version;
        return this;
    }
}