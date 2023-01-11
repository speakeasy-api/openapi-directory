package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RadAnalyst {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyst_id")
    public Double analystId;
    public RadAnalyst withAnalystId(Double analystId) {
        this.analystId = analystId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyst_short_id")
    public Double analystShortId;
    public RadAnalyst withAnalystShortId(Double analystShortId) {
        this.analystShortId = analystShortId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment_update_date")
    public LocalDate assignmentUpdateDate;
    public RadAnalyst withAssignmentUpdateDate(LocalDate assignmentUpdateDate) {
        this.assignmentUpdateDate = assignmentUpdateDate;
        return this;
    }
    @JsonProperty("committee_id")
    public String committeeId;
    public RadAnalyst withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public RadAnalyst withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public RadAnalyst withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public RadAnalyst withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public RadAnalyst withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rad_branch")
    public String radBranch;
    public RadAnalyst withRadBranch(String radBranch) {
        this.radBranch = radBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephone_ext")
    public Double telephoneExt;
    public RadAnalyst withTelephoneExt(Double telephoneExt) {
        this.telephoneExt = telephoneExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public RadAnalyst withTitle(String title) {
        this.title = title;
        return this;
    }
}