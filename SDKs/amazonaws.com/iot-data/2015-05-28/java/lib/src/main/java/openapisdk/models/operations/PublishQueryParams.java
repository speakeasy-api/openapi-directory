package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=qos")
    public Long qos;
    public PublishQueryParams withQos(Long qos) {
        this.qos = qos;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=retain")
    public Boolean retain;
    public PublishQueryParams withRetain(Boolean retain) {
        this.retain = retain;
        return this;
    }
}