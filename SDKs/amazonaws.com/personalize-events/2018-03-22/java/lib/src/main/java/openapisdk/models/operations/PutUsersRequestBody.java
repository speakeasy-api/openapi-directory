package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutUsersRequestBody {
    @JsonProperty("datasetArn")
    public String datasetArn;
    public PutUsersRequestBody withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonProperty("users")
    public openapisdk.models.shared.User[] users;
    public PutUsersRequestBody withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}