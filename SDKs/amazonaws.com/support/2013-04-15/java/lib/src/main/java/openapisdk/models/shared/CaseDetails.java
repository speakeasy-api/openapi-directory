package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CaseDetails
 * <p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId</b> - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode</b> - The category of problem for the support case. Corresponds to the <code>CategoryCode</code> values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId</b> - The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language</b> - The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>nextToken</b> - A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode</b> - The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode</b> - The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status</b> - The status of the case in the AWS Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject</b> - The subject line of the case.</p> </li> <li> <p> <b>submittedBy</b> - The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated</b> - The time the case was created, in ISO-8601 format.</p> </li> </ul>
**/
public class CaseDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseId")
    public String caseId;
    public CaseDetails withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryCode")
    public String categoryCode;
    public CaseDetails withCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailAddresses")
    public String[] ccEmailAddresses;
    public CaseDetails withCcEmailAddresses(String[] ccEmailAddresses) {
        this.ccEmailAddresses = ccEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayId")
    public String displayId;
    public CaseDetails withDisplayId(String displayId) {
        this.displayId = displayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public CaseDetails withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recentCommunications")
    public RecentCaseCommunications recentCommunications;
    public CaseDetails withRecentCommunications(RecentCaseCommunications recentCommunications) {
        this.recentCommunications = recentCommunications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCode")
    public String serviceCode;
    public CaseDetails withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severityCode")
    public String severityCode;
    public CaseDetails withSeverityCode(String severityCode) {
        this.severityCode = severityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CaseDetails withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public CaseDetails withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submittedBy")
    public String submittedBy;
    public CaseDetails withSubmittedBy(String submittedBy) {
        this.submittedBy = submittedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeCreated")
    public String timeCreated;
    public CaseDetails withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
}