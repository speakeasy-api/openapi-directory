package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Student {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public Student withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public Credentials credentials;
    public Student withCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public String district;
    public Student withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dob")
    public String dob;
    public Student withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ell_status")
    public StudentEllStatusEnum ellStatus;
    public Student withEllStatus(StudentEllStatusEnum ellStatus) {
        this.ellStatus = ellStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Student withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public StudentGenderEnum gender;
    public Student withGender(StudentGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grade")
    public StudentGradeEnum grade;
    public Student withGrade(StudentGradeEnum grade) {
        this.grade = grade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graduation_year")
    public String graduationYear;
    public Student withGraduationYear(String graduationYear) {
        this.graduationYear = graduationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hispanic_ethnicity")
    public StudentHispanicEthnicityEnum hispanicEthnicity;
    public Student withHispanicEthnicity(StudentHispanicEthnicityEnum hispanicEthnicity) {
        this.hispanicEthnicity = hispanicEthnicity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Student withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified")
    public String lastModified;
    public Student withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public Student withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public Student withName(Name name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("race")
    public StudentRaceEnum race;
    public Student withRace(StudentRaceEnum race) {
        this.race = race;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public Student withSchool(String school) {
        this.school = school;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schools")
    public String[] schools;
    public Student withSchools(String[] schools) {
        this.schools = schools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sis_id")
    public String sisId;
    public Student withSisId(String sisId) {
        this.sisId = sisId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_id")
    public String stateId;
    public Student withStateId(String stateId) {
        this.stateId = stateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("student_number")
    public String studentNumber;
    public Student withStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
        return this;
    }
}