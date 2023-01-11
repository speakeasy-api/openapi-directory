package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetImagesListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetImagesListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=private")
    public Boolean private_;
    public GetImagesListQueryParams withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag_name")
    public String tagName;
    public GetImagesListQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetImagesListTypeEnum type;
    public GetImagesListQueryParams withType(GetImagesListTypeEnum type) {
        this.type = type;
        return this;
    }
}