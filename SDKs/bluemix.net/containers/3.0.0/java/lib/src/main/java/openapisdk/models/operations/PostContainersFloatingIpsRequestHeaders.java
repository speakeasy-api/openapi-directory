package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersFloatingIpsRequestHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Auth-Project-Id")
    public String xAuthProjectId;
    public PostContainersFloatingIpsRequestHeaders withXAuthProjectId(String xAuthProjectId) {
        this.xAuthProjectId = xAuthProjectId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Auth-Token")
    public String xAuthToken;
    public PostContainersFloatingIpsRequestHeaders withXAuthToken(String xAuthToken) {
        this.xAuthToken = xAuthToken;
        return this;
    }
}