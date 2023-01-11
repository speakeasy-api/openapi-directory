package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=:operation")
    public String operation;
    public PostNodeQueryParams withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleteAuthorizable")
    public String deleteAuthorizable;
    public PostNodeQueryParams withDeleteAuthorizable(String deleteAuthorizable) {
        this.deleteAuthorizable = deleteAuthorizable;
        return this;
    }
}