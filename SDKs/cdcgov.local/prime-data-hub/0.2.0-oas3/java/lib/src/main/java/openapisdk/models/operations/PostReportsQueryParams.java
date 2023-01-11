package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=client")
    public String client;
    public PostReportsQueryParams withClient(String client) {
        this.client = client;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=default")
    public String[] default_;
    public PostReportsQueryParams withDefault(String[] default_) {
        this.default_ = default_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public PostReportsOptionEnum option;
    public PostReportsQueryParams withOption(PostReportsOptionEnum option) {
        this.option = option;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeTo")
    public String[] routeTo;
    public PostReportsQueryParams withRouteTo(String[] routeTo) {
        this.routeTo = routeTo;
        return this;
    }
}