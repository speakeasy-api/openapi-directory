package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsSummaryReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_of_birth")
    public String dateOfBirth;
    public PatientsSummaryReadQueryParams withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientsSummaryReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_name")
    public String firstName;
    public PatientsSummaryReadQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gender")
    public String gender;
    public PatientsSummaryReadQueryParams withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_name")
    public String lastName;
    public PatientsSummaryReadQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientsSummaryReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}