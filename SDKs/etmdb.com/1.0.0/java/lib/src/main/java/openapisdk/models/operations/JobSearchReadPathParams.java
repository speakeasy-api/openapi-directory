package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job_title")
    public String jobTitle;
    public JobSearchReadPathParams withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
}