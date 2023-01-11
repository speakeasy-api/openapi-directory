package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsSummaryCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_of_birth")
    public String dateOfBirth;
    public PatientsSummaryCreateQueryParams withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientsSummaryCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_name")
    public String firstName;
    public PatientsSummaryCreateQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gender")
    public String gender;
    public PatientsSummaryCreateQueryParams withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_name")
    public String lastName;
    public PatientsSummaryCreateQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientsSummaryCreateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}