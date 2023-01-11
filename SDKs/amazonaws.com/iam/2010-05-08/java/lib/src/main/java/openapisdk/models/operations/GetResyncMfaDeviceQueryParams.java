package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResyncMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResyncMfaDeviceActionEnum action;
    public GetResyncMfaDeviceQueryParams withAction(GetResyncMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationCode1")
    public String authenticationCode1;
    public GetResyncMfaDeviceQueryParams withAuthenticationCode1(String authenticationCode1) {
        this.authenticationCode1 = authenticationCode1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationCode2")
    public String authenticationCode2;
    public GetResyncMfaDeviceQueryParams withAuthenticationCode2(String authenticationCode2) {
        this.authenticationCode2 = authenticationCode2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SerialNumber")
    public String serialNumber;
    public GetResyncMfaDeviceQueryParams withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetResyncMfaDeviceQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResyncMfaDeviceVersionEnum version;
    public GetResyncMfaDeviceQueryParams withVersion(GetResyncMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}