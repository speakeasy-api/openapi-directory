package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableMfaDeviceActionEnum action;
    public GetEnableMfaDeviceQueryParams withAction(GetEnableMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationCode1")
    public String authenticationCode1;
    public GetEnableMfaDeviceQueryParams withAuthenticationCode1(String authenticationCode1) {
        this.authenticationCode1 = authenticationCode1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationCode2")
    public String authenticationCode2;
    public GetEnableMfaDeviceQueryParams withAuthenticationCode2(String authenticationCode2) {
        this.authenticationCode2 = authenticationCode2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SerialNumber")
    public String serialNumber;
    public GetEnableMfaDeviceQueryParams withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetEnableMfaDeviceQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableMfaDeviceVersionEnum version;
    public GetEnableMfaDeviceQueryParams withVersion(GetEnableMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}