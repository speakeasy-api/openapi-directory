package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetShippingLabelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=APIVersion")
    public String apiVersion;
    public GetGetShippingLabelQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public GetGetShippingLabelQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetShippingLabelActionEnum action;
    public GetGetShippingLabelQueryParams withAction(GetGetShippingLabelActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public GetGetShippingLabelOperationEnum operation;
    public GetGetShippingLabelQueryParams withOperation(GetGetShippingLabelOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public GetGetShippingLabelQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public GetGetShippingLabelQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public GetGetShippingLabelQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public GetGetShippingLabelQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetShippingLabelVersionEnum version;
    public GetGetShippingLabelQueryParams withVersion(GetGetShippingLabelVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetGetShippingLabelQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company")
    public String company;
    public GetGetShippingLabelQueryParams withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetGetShippingLabelQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jobIds")
    public String[] jobIds;
    public GetGetShippingLabelQueryParams withJobIds(String[] jobIds) {
        this.jobIds = jobIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetGetShippingLabelQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phoneNumber")
    public String phoneNumber;
    public GetGetShippingLabelQueryParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=postalCode")
    public String postalCode;
    public GetGetShippingLabelQueryParams withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stateOrProvince")
    public String stateOrProvince;
    public GetGetShippingLabelQueryParams withStateOrProvince(String stateOrProvince) {
        this.stateOrProvince = stateOrProvince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=street1")
    public String street1;
    public GetGetShippingLabelQueryParams withStreet1(String street1) {
        this.street1 = street1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=street2")
    public String street2;
    public GetGetShippingLabelQueryParams withStreet2(String street2) {
        this.street2 = street2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=street3")
    public String street3;
    public GetGetShippingLabelQueryParams withStreet3(String street3) {
        this.street3 = street3;
        return this;
    }
}