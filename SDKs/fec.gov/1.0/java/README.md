# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditCaseRequest;
import org.openapis.openapi.models.operations.GetAuditCaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident", "distinctio") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuditCaseRequest req = new GetAuditCaseRequest("quibusdam") {{
                auditCaseId = new String[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                auditId = new Integer[]{{
                    add(623564),
                    add(645894),
                }};
                candidateId = new String[]{{
                    add("iure"),
                    add("magnam"),
                }};
                committeeDesignation = "debitis";
                committeeId = new String[]{{
                    add("delectus"),
                }};
                committeeType = new String[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
                cycle = new Integer[]{{
                    add(812169),
                    add(528895),
                    add(479977),
                    add(568045),
                }};
                maxElectionCycle = 392785;
                minElectionCycle = 925597;
                page = 836079;
                perPage = 71036;
                primaryCategoryId = "quis";
                q = new String[]{{
                    add("deserunt"),
                }};
                qq = new String[]{{
                    add("ipsam"),
                }};
                sort = new String[]{{
                    add("sapiente"),
                    add("quo"),
                    add("odit"),
                    add("at"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                subCategoryId = "at";
            }};            

            GetAuditCaseResponse res = sdk.audit.getAuditCase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [audit](docs/audit/README.md)

* [getAuditCase](docs/audit/README.md#getauditcase) - 
This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.

* [getAuditCategory](docs/audit/README.md#getauditcategory) - 
This lists the options for the categories and subcategories available in the /audit-search/ endpoint.

* [getAuditPrimaryCategory](docs/audit/README.md#getauditprimarycategory) - 
This lists the options for the primary categories available in the /audit-search/ endpoint.

* [getNamesAuditCandidates](docs/audit/README.md#getnamesauditcandidates) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

* [getNamesAuditCommittees](docs/audit/README.md#getnamesauditcommittees) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### [candidate](docs/candidate/README.md)

* [getCandidateCandidateId](docs/candidate/README.md#getcandidatecandidateid) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [getCandidateCandidateIdHistory](docs/candidate/README.md#getcandidatecandidateidhistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCandidateCandidateIdHistoryCycle](docs/candidate/README.md#getcandidatecandidateidhistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCandidateCandidateIdTotals](docs/candidate/README.md#getcandidatecandidateidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [getCandidates](docs/candidate/README.md#getcandidates) - 
Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

* [getCandidatesSearch](docs/candidate/README.md#getcandidatessearch) - 
Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](https://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](https://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.

* [getCandidatesTotals](docs/candidate/README.md#getcandidatestotals) - 
Aggregated candidate receipts and disbursements grouped by cycle.

* [getCandidatesTotalsAggregates](docs/candidate/README.md#getcandidatestotalsaggregates) -  Candidate total receipts and disbursements aggregated by `aggregate_by`.

* [getCandidatesTotalsByOffice](docs/candidate/README.md#getcandidatestotalsbyoffice) -  Aggregated candidate receipts and disbursements grouped by office by cycle.

* [getCandidatesTotalsByOfficeByParty](docs/candidate/README.md#getcandidatestotalsbyofficebyparty) -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.

* [getCommitteeCommitteeIdCandidates](docs/candidate/README.md#getcommitteecommitteeidcandidates) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [getCommitteeCommitteeIdCandidatesHistory](docs/candidate/README.md#getcommitteecommitteeidcandidateshistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCommitteeCommitteeIdCandidatesHistoryCycle](docs/candidate/README.md#getcommitteecommitteeidcandidateshistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### [committee](docs/committee/README.md)

* [getCandidateCandidateIdCommittees](docs/committee/README.md#getcandidatecandidateidcommittees) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [getCandidateCandidateIdCommitteesHistory](docs/committee/README.md#getcandidatecandidateidcommitteeshistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCandidateCandidateIdCommitteesHistoryCycle](docs/committee/README.md#getcandidatecandidateidcommitteeshistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommitteeCommitteeId](docs/committee/README.md#getcommitteecommitteeid) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [getCommitteeCommitteeIdHistory](docs/committee/README.md#getcommitteecommitteeidhistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommitteeCommitteeIdHistoryCycle](docs/committee/README.md#getcommitteecommitteeidhistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommittees](docs/committee/README.md#getcommittees) - 
Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.



### [communicationCost](docs/communicationcost/README.md)

* [getCommunicationCosts](docs/communicationcost/README.md#getcommunicationcosts) - 
52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.

* [getCommunicationCostsAggregates](docs/communicationcost/README.md#getcommunicationcostsaggregates) - Communication cost aggregated by candidate ID and committee ID.
* [getCommunicationCostsByCandidate](docs/communicationcost/README.md#getcommunicationcostsbycandidate) - Communication cost aggregated by candidate ID and committee ID.
* [getCommunicationCostsTotalsByCandidate](docs/communicationcost/README.md#getcommunicationcoststotalsbycandidate) - 
Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.


### [dates](docs/dates/README.md)

* [getCalendarDates](docs/dates/README.md#getcalendardates) - 
Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.

* [getCalendarDatesExport](docs/dates/README.md#getcalendardatesexport) - 
Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.


* [getElectionDates](docs/dates/README.md#getelectiondates) - 
FEC election dates since 1995.

* [getReportingDates](docs/dates/README.md#getreportingdates) - 
FEC election dates since 1995.


### [debts](docs/debts/README.md)

* [getSchedulesScheduleD](docs/debts/README.md#getschedulesscheduled) - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.



* [getSchedulesScheduleDSubId](docs/debts/README.md#getschedulesscheduledsubid) - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.




### [disbursements](docs/disbursements/README.md)

* [getSchedulesScheduleB](docs/disbursements/README.md#getschedulesscheduleb) - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

* [getSchedulesScheduleBByPurpose](docs/disbursements/README.md#getschedulesschedulebbypurpose) - 
Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.

* [getSchedulesScheduleBByRecipient](docs/disbursements/README.md#getschedulesschedulebbyrecipient) - 
Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.

* [getSchedulesScheduleBByRecipientId](docs/disbursements/README.md#getschedulesschedulebbyrecipientid) - 
Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.

* [getSchedulesScheduleBEfile](docs/disbursements/README.md#getschedulesschedulebefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleBSubId](docs/disbursements/README.md#getschedulesschedulebsubid) - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


### [efiling](docs/efiling/README.md)

* [getEfileFilings](docs/efiling/README.md#getefilefilings) - Basic information about electronic files coming into the FEC, posted as they are received.
* [getEfileReportsHouseSenate](docs/efiling/README.md#getefilereportshousesenate) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getEfileReportsPacParty](docs/efiling/README.md#getefilereportspacparty) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getEfileReportsPresidential](docs/efiling/README.md#getefilereportspresidential) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### [electioneering](docs/electioneering/README.md)

* [getElectioneering](docs/electioneering/README.md#getelectioneering) - 
An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

* [getElectioneeringAggregates](docs/electioneering/README.md#getelectioneeringaggregates) - Electioneering communications costs aggregates
* [getElectioneeringByCandidate](docs/electioneering/README.md#getelectioneeringbycandidate) - Electioneering costs aggregated by candidate
* [getElectioneeringTotalsByCandidate](docs/electioneering/README.md#getelectioneeringtotalsbycandidate) - 
Total electioneering communications spent on candidates by cycle
or candidate election year


### [filerResources](docs/filerresources/README.md)

* [getRadAnalyst](docs/filerresources/README.md#getradanalyst) - 
Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).

* [getStateElectionOffice](docs/filerresources/README.md#getstateelectionoffice) - 
State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.


### [filings](docs/filings/README.md)

* [getCandidateCandidateIdFilings](docs/filings/README.md#getcandidatecandidateidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getCommitteeCommitteeIdFilings](docs/filings/README.md#getcommitteecommitteeidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getFilings](docs/filings/README.md#getfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getOperationsLog](docs/filings/README.md#getoperationslog) - 
The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.


### [financial](docs/financial/README.md)

* [getCommitteeCommitteeIdReports](docs/financial/README.md#getcommitteecommitteeidreports) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getCommitteeCommitteeIdTotals](docs/financial/README.md#getcommitteecommitteeidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [getElections](docs/financial/README.md#getelections) - 
Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.

* [getElectionsSearch](docs/financial/README.md#getelectionssearch) - 
List elections by cycle, office, state, and district.

* [getElectionsSummary](docs/financial/README.md#getelectionssummary) - 
List elections by cycle, office, state, and district.

* [getReportsEntityType](docs/financial/README.md#getreportsentitytype) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getTotalsByEntity](docs/financial/README.md#gettotalsbyentity) - 
Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.

* [getTotalsInauguralCommitteesByContributor](docs/financial/README.md#gettotalsinauguralcommitteesbycontributor) - 
This endpoint provides information about an inaugural committee's Form 13 report of donations accepted.
The data is aggregated by the contributor and the two-year period. We refer to two-year periods as a `cycle`.


* [getTotalsEntityType](docs/financial/README.md#gettotalsentitytype) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



### [independentExpenditures](docs/independentexpenditures/README.md)

* [getSchedulesScheduleE](docs/independentexpenditures/README.md#getschedulesschedulee) - 
Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

* [getSchedulesScheduleEByCandidate](docs/independentexpenditures/README.md#getschedulesscheduleebycandidate) - 
Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.

* [getSchedulesScheduleEEfile](docs/independentexpenditures/README.md#getschedulesscheduleeefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleETotalsByCandidate](docs/independentexpenditures/README.md#getschedulesscheduleetotalsbycandidate) - 
Total independent expenditure on supported or opposed candidates by cycle or candidate election year.


### [legal](docs/legal/README.md)

* [getLegalSearch](docs/legal/README.md#getlegalsearch) - 
Search legal documents by document type, or across all document types using keywords, parameter values and ranges.


### [loans](docs/loans/README.md)

* [getSchedulesScheduleC](docs/loans/README.md#getschedulesschedulec) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.

* [getSchedulesScheduleCSubId](docs/loans/README.md#getschedulesschedulecsubid) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


### [partyCoordinatedExpenditures](docs/partycoordinatedexpenditures/README.md)

* [getSchedulesScheduleF](docs/partycoordinatedexpenditures/README.md#getschedulesschedulef) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

* [getSchedulesScheduleFSubId](docs/partycoordinatedexpenditures/README.md#getschedulesschedulefsubid) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


### [presidential](docs/presidential/README.md)

* [getPresidentialContributionsByCandidate](docs/presidential/README.md#getpresidentialcontributionsbycandidate) - 
Net receipts per candidate.

Filter with `contributor_state='US'` for national totals

* [getPresidentialContributionsBySize](docs/presidential/README.md#getpresidentialcontributionsbysize) - 
Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size

* [getPresidentialContributionsByState](docs/presidential/README.md#getpresidentialcontributionsbystate) - 
Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year

* [getPresidentialCoverageEndDate](docs/presidential/README.md#getpresidentialcoverageenddate) - 
Coverage end date per candidate.

Filter by candidate_id and/or election_year

* [getPresidentialFinancialSummary](docs/presidential/README.md#getpresidentialfinancialsummary) - 
Financial summary per candidate.

Filter by candidate_id and/or election_year


### [receipts](docs/receipts/README.md)

* [getSchedulesScheduleA](docs/receipts/README.md#getschedulesschedulea) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.


* [getSchedulesScheduleAByEmployer](docs/receipts/README.md#getschedulesscheduleabyemployer) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByOccupation](docs/receipts/README.md#getschedulesscheduleabyoccupation) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleABySize](docs/receipts/README.md#getschedulesscheduleabysize) - 
This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.

* [getSchedulesScheduleABySizeByCandidate](docs/receipts/README.md#getschedulesscheduleabysizebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByState](docs/receipts/README.md#getschedulesscheduleabystate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByStateByCandidate](docs/receipts/README.md#getschedulesscheduleabystatebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByStateByCandidateTotals](docs/receipts/README.md#getschedulesscheduleabystatebycandidatetotals) - 
Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


* [getSchedulesScheduleAByStateTotals](docs/receipts/README.md#getschedulesscheduleabystatetotals) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByZip](docs/receipts/README.md#getschedulesscheduleabyzip) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAEfile](docs/receipts/README.md#getschedulesscheduleaefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleASubId](docs/receipts/README.md#getschedulesscheduleasubid) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



### [search](docs/search/README.md)

* [getNamesCandidates](docs/search/README.md#getnamescandidates) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

* [getNamesCommittees](docs/search/README.md#getnamescommittees) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
