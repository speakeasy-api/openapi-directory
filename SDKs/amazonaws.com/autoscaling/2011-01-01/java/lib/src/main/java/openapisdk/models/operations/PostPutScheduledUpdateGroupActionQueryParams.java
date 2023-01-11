package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutScheduledUpdateGroupActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutScheduledUpdateGroupActionActionEnum action;
    public PostPutScheduledUpdateGroupActionQueryParams withAction(PostPutScheduledUpdateGroupActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutScheduledUpdateGroupActionVersionEnum version;
    public PostPutScheduledUpdateGroupActionQueryParams withVersion(PostPutScheduledUpdateGroupActionVersionEnum version) {
        this.version = version;
        return this;
    }
}