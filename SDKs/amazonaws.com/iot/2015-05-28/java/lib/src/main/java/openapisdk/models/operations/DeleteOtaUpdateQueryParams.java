package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOtaUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleteStream")
    public Boolean deleteStream;
    public DeleteOtaUpdateQueryParams withDeleteStream(Boolean deleteStream) {
        this.deleteStream = deleteStream;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forceDeleteAWSJob")
    public Boolean forceDeleteAWSJob;
    public DeleteOtaUpdateQueryParams withForceDeleteAwsJob(Boolean forceDeleteAWSJob) {
        this.forceDeleteAWSJob = forceDeleteAWSJob;
        return this;
    }
}