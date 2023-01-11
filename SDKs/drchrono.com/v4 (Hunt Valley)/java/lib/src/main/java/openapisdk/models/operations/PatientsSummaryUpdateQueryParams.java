package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsSummaryUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_of_birth")
    public String dateOfBirth;
    public PatientsSummaryUpdateQueryParams withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientsSummaryUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_name")
    public String firstName;
    public PatientsSummaryUpdateQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gender")
    public String gender;
    public PatientsSummaryUpdateQueryParams withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_name")
    public String lastName;
    public PatientsSummaryUpdateQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientsSummaryUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}