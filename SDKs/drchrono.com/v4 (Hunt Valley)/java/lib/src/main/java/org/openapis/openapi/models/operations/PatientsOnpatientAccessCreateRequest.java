/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PatientsOnpatientAccessCreateRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=chart_id")
    public String chartId;

    public PatientsOnpatientAccessCreateRequest withChartId(String chartId) {
        this.chartId = chartId;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_of_birth")
    public String dateOfBirth;

    public PatientsOnpatientAccessCreateRequest withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;

    public PatientsOnpatientAccessCreateRequest withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;

    public PatientsOnpatientAccessCreateRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ethnicity")
    public String ethnicity;

    public PatientsOnpatientAccessCreateRequest withEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_name")
    public String firstName;

    public PatientsOnpatientAccessCreateRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gender")
    public String gender;

    public PatientsOnpatientAccessCreateRequest withGender(String gender) {
        this.gender = gender;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public PatientsOnpatientAccessCreateRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_name")
    public String lastName;

    public PatientsOnpatientAccessCreateRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preferred_language")
    public String preferredLanguage;

    public PatientsOnpatientAccessCreateRequest withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=race")
    public String race;

    public PatientsOnpatientAccessCreateRequest withRace(String race) {
        this.race = race;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;

    public PatientsOnpatientAccessCreateRequest withSince(String since) {
        this.since = since;
        return this;
    }
    
    public PatientsOnpatientAccessCreateRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}
