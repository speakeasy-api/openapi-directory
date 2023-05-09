# dates

## Overview

Reporting deadlines, election dates FEC meetings, events etc.

### Available Operations

* [getCalendarDates](#getcalendardates) - 
Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.

* [getCalendarDatesExport](#getcalendardatesexport) - 
Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.


* [getElectionDates](#getelectiondates) - 
FEC election dates since 1995.

* [getReportingDates](#getreportingdates) - 
FEC election dates since 1995.


## getCalendarDates


Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalendarDatesRequest;
import org.openapis.openapi.models.operations.GetCalendarDatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil", "totam", "accusamus") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalendarDatesRequest req = new GetCalendarDatesRequest("aliquam") {{
                calendarCategoryId = new Integer[]{{
                    add(577543),
                    add(414567),
                }};
                description = new String[]{{
                    add("dolores"),
                    add("deserunt"),
                    add("molestiae"),
                    add("accusantium"),
                }};
                eventId = 783648;
                maxEndDate = LocalDate.parse("2022-06-11");
                maxStartDate = LocalDate.parse("2022-09-06");
                minEndDate = LocalDate.parse("2022-09-18");
                minStartDate = LocalDate.parse("2021-09-13");
                page = 277596;
                perPage = 539224;
                sort = "explicabo";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                summary = new String[]{{
                    add("nisi"),
                    add("fugit"),
                }};
            }};            

            GetCalendarDatesResponse res = sdk.dates.getCalendarDates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalendarDatesExport


Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.



### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalendarDatesExportRendererEnum;
import org.openapis.openapi.models.operations.GetCalendarDatesExportRequest;
import org.openapis.openapi.models.operations.GetCalendarDatesExportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "consequuntur", "ratione") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalendarDatesExportRequest req = new GetCalendarDatesExportRequest("explicabo") {{
                calendarCategoryId = new Integer[]{{
                    add(578922),
                    add(543806),
                    add(92260),
                    add(456911),
                }};
                description = new String[]{{
                    add("accusamus"),
                    add("veritatis"),
                    add("esse"),
                    add("quod"),
                }};
                eventId = 724168;
                maxEndDate = LocalDate.parse("2021-10-21");
                maxStartDate = LocalDate.parse("2022-02-05");
                minEndDate = LocalDate.parse("2022-04-24");
                minStartDate = LocalDate.parse("2022-04-20");
                page = 580197;
                perPage = 327720;
                renderer = GetCalendarDatesExportRendererEnum.CSV;
                sort = "eligendi";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                summary = new String[]{{
                    add("culpa"),
                }};
            }};            

            GetCalendarDatesExportResponse res = sdk.dates.getCalendarDatesExport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getElectionDates


FEC election dates since 1995.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectionDatesOfficeSoughtEnum;
import org.openapis.openapi.models.operations.GetElectionDatesRequest;
import org.openapis.openapi.models.operations.GetElectionDatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore", "adipisci", "cumque") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectionDatesRequest req = new GetElectionDatesRequest("consequuntur") {{
                electionDistrict = new String[]{{
                    add("minus"),
                }};
                electionParty = new String[]{{
                    add("sapiente"),
                    add("consectetur"),
                }};
                electionState = new String[]{{
                    add("blanditiis"),
                    add("provident"),
                }};
                electionTypeId = new String[]{{
                    add("nulla"),
                    add("quas"),
                    add("esse"),
                    add("quasi"),
                }};
                electionYear = new String[]{{
                    add("error"),
                    add("sint"),
                    add("pariatur"),
                    add("possimus"),
                }};
                maxCreateDate = LocalDate.parse("2022-02-03");
                maxElectionDate = LocalDate.parse("2020-07-22");
                maxPrimaryGeneralDate = LocalDate.parse("2022-11-03");
                maxUpdateDate = LocalDate.parse("2022-05-16");
                minCreateDate = LocalDate.parse("2022-03-16");
                minElectionDate = LocalDate.parse("2022-10-24");
                minPrimaryGeneralDate = LocalDate.parse("2021-09-23");
                minUpdateDate = LocalDate.parse("2022-09-28");
                officeSought = new org.openapis.openapi.models.operations.GetElectionDatesOfficeSoughtEnum[]{{
                    add(GetElectionDatesOfficeSoughtEnum.P),
                    add(GetElectionDatesOfficeSoughtEnum.P),
                    add(GetElectionDatesOfficeSoughtEnum.H),
                }};
                page = 306986;
                perPage = 958983;
                sort = "dicta";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetElectionDatesResponse res = sdk.dates.getElectionDates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportingDates


FEC election dates since 1995.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportingDatesRequest;
import org.openapis.openapi.models.operations.GetReportingDatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam", "reprehenderit", "ullam") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportingDatesRequest req = new GetReportingDatesRequest("nisi") {{
                maxCreateDate = LocalDate.parse("2022-06-20");
                maxDueDate = LocalDate.parse("2022-02-26");
                maxUpdateDate = LocalDate.parse("2022-06-19");
                minCreateDate = LocalDate.parse("2020-12-17");
                minDueDate = LocalDate.parse("2022-05-23");
                minUpdateDate = LocalDate.parse("2022-09-15");
                page = 869489;
                perPage = 92027;
                reportType = new String[]{{
                    add("ipsa"),
                    add("minima"),
                }};
                reportYear = new Integer[]{{
                    add(232744),
                }};
                sort = "adipisci";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetReportingDatesResponse res = sdk.dates.getReportingDates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
