package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizationCodeIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Code_challenge")
    public String codeChallenge;
    public GetAuthorizationCodeIdQueryParams withCodeChallenge(String codeChallenge) {
        this.codeChallenge = codeChallenge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Code_challenge_method")
    public String codeChallengeMethod;
    public GetAuthorizationCodeIdQueryParams withCodeChallengeMethod(String codeChallengeMethod) {
        this.codeChallengeMethod = codeChallengeMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Verified_mobile")
    public Long verifiedMobile;
    public GetAuthorizationCodeIdQueryParams withVerifiedMobile(Long verifiedMobile) {
        this.verifiedMobile = verifiedMobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=client_id")
    public String clientId;
    public GetAuthorizationCodeIdQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dl_flow")
    public String dlFlow;
    public GetAuthorizationCodeIdQueryParams withDlFlow(String dlFlow) {
        this.dlFlow = dlFlow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirect_uri")
    public String redirectUri;
    public GetAuthorizationCodeIdQueryParams withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_type")
    public String responseType;
    public GetAuthorizationCodeIdQueryParams withResponseType(String responseType) {
        this.responseType = responseType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetAuthorizationCodeIdQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}