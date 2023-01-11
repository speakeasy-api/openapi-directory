package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBuildQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nocache")
    public Boolean nocache;
    public PostBuildQueryParams withNocache(Boolean nocache) {
        this.nocache = nocache;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pull")
    public Boolean pull;
    public PostBuildQueryParams withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public Boolean q;
    public PostBuildQueryParams withQ(Boolean q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t")
    public String t;
    public PostBuildQueryParams withT(String t) {
        this.t = t;
        return this;
    }
}