package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSessionsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=otp")
    public String otp;
    public PostSessionsRequestBody withOtp(String otp) {
        this.otp = otp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=partial_session_id")
    public String partialSessionId;
    public PostSessionsRequestBody withPartialSessionId(String partialSessionId) {
        this.partialSessionId = partialSessionId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public PostSessionsRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public PostSessionsRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}