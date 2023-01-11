package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateInformationAboutPagesSiteRequest {
    public ReposUpdateInformationAboutPagesSitePathParams pathParams;
    public ReposUpdateInformationAboutPagesSiteRequest withPathParams(ReposUpdateInformationAboutPagesSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateInformationAboutPagesSiteRequestBody request;
    public ReposUpdateInformationAboutPagesSiteRequest withRequest(ReposUpdateInformationAboutPagesSiteRequestBody request) {
        this.request = request;
        return this;
    }
}