package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListDeploymentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=environment")
    public String environment;
    public ReposListDeploymentsQueryParams withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListDeploymentsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListDeploymentsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public ReposListDeploymentsQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sha")
    public String sha;
    public ReposListDeploymentsQueryParams withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=task")
    public String task;
    public ReposListDeploymentsQueryParams withTask(String task) {
        this.task = task;
        return this;
    }
}