package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateQueueActionEnum action;
    public GetCreateQueueQueryParams withAction(GetCreateQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public java.util.Map<String, String> attribute;
    public GetCreateQueueQueryParams withAttribute(java.util.Map<String, String> attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=QueueName")
    public String queueName;
    public GetCreateQueueQueryParams withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Tag")
    public java.util.Map<String, String> tag;
    public GetCreateQueueQueryParams withTag(java.util.Map<String, String> tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateQueueVersionEnum version;
    public GetCreateQueueQueryParams withVersion(GetCreateQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}