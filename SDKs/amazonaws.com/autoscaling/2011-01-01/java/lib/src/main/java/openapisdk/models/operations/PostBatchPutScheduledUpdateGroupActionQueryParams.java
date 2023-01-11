package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchPutScheduledUpdateGroupActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBatchPutScheduledUpdateGroupActionActionEnum action;
    public PostBatchPutScheduledUpdateGroupActionQueryParams withAction(PostBatchPutScheduledUpdateGroupActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBatchPutScheduledUpdateGroupActionVersionEnum version;
    public PostBatchPutScheduledUpdateGroupActionQueryParams withVersion(PostBatchPutScheduledUpdateGroupActionVersionEnum version) {
        this.version = version;
        return this;
    }
}