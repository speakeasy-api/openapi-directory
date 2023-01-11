package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestApiKeyRequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public RequestApiKeyRequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public RequestApiKeyRequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=email")
    public String email;
    public RequestApiKeyRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=password")
    public Integer password;
    public RequestApiKeyRequestBody withPassword(Integer password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("form:name=userFirstName")
    public String userFirstName;
    public RequestApiKeyRequestBody withUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
        return this;
    }
    @SpeakeasyMetadata("form:name=userLastName")
    public String userLastName;
    public RequestApiKeyRequestBody withUserLastName(String userLastName) {
        this.userLastName = userLastName;
        return this;
    }
}