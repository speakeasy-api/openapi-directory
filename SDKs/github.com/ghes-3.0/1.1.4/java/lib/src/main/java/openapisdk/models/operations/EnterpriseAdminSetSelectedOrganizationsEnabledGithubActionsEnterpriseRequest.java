package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest {
    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams pathParams;
    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest withPathParams(EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody request;
    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest withRequest(EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody request) {
        this.request = request;
        return this;
    }
}