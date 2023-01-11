package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClassificationInclusionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classification_id")
    public String classificationId;
    public GetClassificationInclusionsQueryParams withClassificationId(String classificationId) {
        this.classificationId = classificationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classification_type")
    public GetClassificationInclusionsClassificationTypeEnum classificationType;
    public GetClassificationInclusionsQueryParams withClassificationType(GetClassificationInclusionsClassificationTypeEnum classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classified_id")
    public String classifiedId;
    public GetClassificationInclusionsQueryParams withClassifiedId(String classifiedId) {
        this.classifiedId = classifiedId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classified_type")
    public GetClassificationInclusionsClassifiedTypeEnum classifiedType;
    public GetClassificationInclusionsQueryParams withClassifiedType(GetClassificationInclusionsClassifiedTypeEnum classifiedType) {
        this.classifiedType = classifiedType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetClassificationInclusionsQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetClassificationInclusionsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetClassificationInclusionsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetClassificationInclusionsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetClassificationInclusionsSortEnum[] sort;
    public GetClassificationInclusionsQueryParams withSort(GetClassificationInclusionsSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
}