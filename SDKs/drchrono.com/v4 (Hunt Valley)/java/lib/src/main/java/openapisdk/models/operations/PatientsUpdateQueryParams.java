package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=chart_id")
    public String chartId;
    public PatientsUpdateQueryParams withChartId(String chartId) {
        this.chartId = chartId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_of_birth")
    public String dateOfBirth;
    public PatientsUpdateQueryParams withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientsUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public PatientsUpdateQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ethnicity")
    public String ethnicity;
    public PatientsUpdateQueryParams withEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_name")
    public String firstName;
    public PatientsUpdateQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gender")
    public String gender;
    public PatientsUpdateQueryParams withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_name")
    public String lastName;
    public PatientsUpdateQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preferred_language")
    public String preferredLanguage;
    public PatientsUpdateQueryParams withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=race")
    public String race;
    public PatientsUpdateQueryParams withRace(String race) {
        this.race = race;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientsUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}