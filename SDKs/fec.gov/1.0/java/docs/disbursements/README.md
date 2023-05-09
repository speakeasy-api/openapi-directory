# disbursements

## Overview

Schedule B filings describe itemized disbursements. This data explains how committees and other filers spend their money. These figures are reported as part of forms F3, F3X and F3P.

### Available Operations

* [getSchedulesScheduleB](#getschedulesscheduleb) - 
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

* [getSchedulesScheduleBByPurpose](#getschedulesschedulebbypurpose) - 
Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.

* [getSchedulesScheduleBByRecipient](#getschedulesschedulebbyrecipient) - 
Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.

* [getSchedulesScheduleBByRecipientId](#getschedulesschedulebbyrecipientid) - 
Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.

* [getSchedulesScheduleBEfile](#getschedulesschedulebefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleBSubId](#getschedulesschedulebsubid) - 
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


## getSchedulesScheduleB


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


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBResponse;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSpenderCommitteeDesignationEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSpenderCommitteeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "adipisci", "fuga") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleBRequest req = new GetSchedulesScheduleBRequest("id") {{
                committeeId = new String[]{{
                    add("velit"),
                    add("culpa"),
                }};
                disbursementDescription = new String[]{{
                    add("recusandae"),
                    add("totam"),
                    add("fugiat"),
                }};
                disbursementPurposeCategory = new String[]{{
                    add("ducimus"),
                    add("quos"),
                }};
                imageNumber = new String[]{{
                    add("labore"),
                    add("possimus"),
                }};
                lastDisbursementAmount = 7065.75;
                lastDisbursementDate = LocalDate.parse("2022-03-04");
                lastIndex = 447144;
                lineNumber = "corporis";
                maxAmount = "reiciendis";
                maxDate = LocalDate.parse("2021-11-29");
                maxImageNumber = "recusandae";
                minAmount = "aliquid";
                minDate = LocalDate.parse("2022-04-06");
                minImageNumber = "consectetur";
                perPage = 449083;
                recipientCity = new String[]{{
                    add("earum"),
                    add("facere"),
                }};
                recipientCommitteeId = new String[]{{
                    add("doloribus"),
                    add("suscipit"),
                }};
                recipientName = new String[]{{
                    add("quidem"),
                    add("saepe"),
                    add("necessitatibus"),
                    add("dolore"),
                }};
                recipientState = new String[]{{
                    add("asperiores"),
                }};
                sort = "adipisci";
                sortHideNull = false;
                sortNullOnly = false;
                spenderCommitteeDesignation = new org.openapis.openapi.models.operations.GetSchedulesScheduleBSpenderCommitteeDesignationEnum[]{{
                    add(GetSchedulesScheduleBSpenderCommitteeDesignationEnum.A),
                }};
                spenderCommitteeOrgType = new org.openapis.openapi.models.operations.GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum[]{{
                    add(GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum.M),
                }};
                spenderCommitteeType = new org.openapis.openapi.models.operations.GetSchedulesScheduleBSpenderCommitteeTypeEnum[]{{
                    add(GetSchedulesScheduleBSpenderCommitteeTypeEnum.Y),
                    add(GetSchedulesScheduleBSpenderCommitteeTypeEnum.E),
                    add(GetSchedulesScheduleBSpenderCommitteeTypeEnum.N),
                    add(GetSchedulesScheduleBSpenderCommitteeTypeEnum.U),
                }};
                twoYearTransactionPeriod = new Integer[]{{
                    add(58356),
                    add(916727),
                }};
            }};            

            GetSchedulesScheduleBResponse res = sdk.disbursements.getSchedulesScheduleB(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleBByPurpose


Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBByPurposeRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBByPurposeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "vitae", "accusamus") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleBByPurposeRequest req = new GetSchedulesScheduleBByPurposeRequest("similique") {{
                committeeId = new String[]{{
                    add("aspernatur"),
                    add("voluptas"),
                }};
                cycle = new Integer[]{{
                    add(374296),
                    add(324405),
                }};
                page = 748789;
                perPage = 680116;
                purpose = new String[]{{
                    add("minus"),
                }};
                sort = "dolores";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleBByPurposeResponse res = sdk.disbursements.getSchedulesScheduleBByPurpose(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleBByRecipient


Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBByRecipientRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBByRecipientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis", "in", "dolore") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleBByRecipientRequest req = new GetSchedulesScheduleBByRecipientRequest("aliquam") {{
                committeeId = new String[]{{
                    add("temporibus"),
                    add("ullam"),
                    add("adipisci"),
                    add("cum"),
                }};
                cycle = new Integer[]{{
                    add(555361),
                    add(942584),
                    add(201517),
                }};
                page = 633998;
                perPage = 548519;
                recipientName = new String[]{{
                    add("totam"),
                    add("hic"),
                    add("exercitationem"),
                    add("nobis"),
                }};
                sort = "sit";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleBByRecipientResponse res = sdk.disbursements.getSchedulesScheduleBByRecipient(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleBByRecipientId


Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBByRecipientIdRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBByRecipientIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum", "sed", "reiciendis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleBByRecipientIdRequest req = new GetSchedulesScheduleBByRecipientIdRequest("explicabo") {{
                committeeId = new String[]{{
                    add("facilis"),
                    add("voluptate"),
                    add("expedita"),
                    add("ab"),
                }};
                cycle = new Integer[]{{
                    add(292794),
                    add(671907),
                    add(152354),
                }};
                page = 447516;
                perPage = 417486;
                recipientId = new String[]{{
                    add("explicabo"),
                    add("voluptas"),
                    add("unde"),
                }};
                sort = "architecto";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleBByRecipientIdResponse res = sdk.disbursements.getSchedulesScheduleBByRecipientId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleBEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBEfileRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBEfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "sapiente", "debitis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleBEfileRequest req = new GetSchedulesScheduleBEfileRequest("illo") {{
                committeeId = new String[]{{
                    add("perferendis"),
                    add("corrupti"),
                    add("maiores"),
                    add("incidunt"),
                }};
                disbursementDescription = new String[]{{
                    add("provident"),
                }};
                imageNumber = new String[]{{
                    add("necessitatibus"),
                    add("ipsum"),
                }};
                maxAmount = "ea";
                maxDate = LocalDate.parse("2021-11-23");
                minAmount = "voluptatibus";
                minDate = LocalDate.parse("2022-09-23");
                page = 455444;
                perPage = 970076;
                recipientCity = new String[]{{
                    add("sit"),
                    add("non"),
                }};
                recipientState = new String[]{{
                    add("praesentium"),
                    add("facilis"),
                    add("quaerat"),
                    add("incidunt"),
                }};
                sort = "ipsam";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleBEfileResponse res = sdk.disbursements.getSchedulesScheduleBEfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleBSubId


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


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdResponse;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "rem", "sit") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleBSubIdRequest req = new GetSchedulesScheduleBSubIdRequest("nobis", "error") {{
                committeeId = new String[]{{
                    add("minima"),
                    add("recusandae"),
                }};
                disbursementDescription = new String[]{{
                    add("nulla"),
                    add("magni"),
                    add("aperiam"),
                    add("saepe"),
                }};
                disbursementPurposeCategory = new String[]{{
                    add("veniam"),
                    add("in"),
                }};
                imageNumber = new String[]{{
                    add("beatae"),
                    add("laudantium"),
                    add("exercitationem"),
                    add("praesentium"),
                }};
                lastDisbursementAmount = 7400.98;
                lastDisbursementDate = LocalDate.parse("2022-04-27");
                lastIndex = 530089;
                lineNumber = "error";
                maxAmount = "hic";
                maxDate = LocalDate.parse("2021-03-20");
                maxImageNumber = "neque";
                minAmount = "dolorum";
                minDate = LocalDate.parse("2022-05-12");
                minImageNumber = "dolorum";
                perPage = 548361;
                recipientCity = new String[]{{
                    add("tempora"),
                    add("atque"),
                    add("fugit"),
                    add("ut"),
                }};
                recipientCommitteeId = new String[]{{
                    add("voluptatem"),
                    add("culpa"),
                    add("expedita"),
                    add("magnam"),
                }};
                recipientName = new String[]{{
                    add("esse"),
                }};
                recipientState = new String[]{{
                    add("sit"),
                    add("voluptatum"),
                }};
                sort = "quas";
                sortHideNull = false;
                sortNullOnly = false;
                spenderCommitteeDesignation = new org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum[]{{
                    add(GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum.J),
                    add(GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum.UNKNOWN),
                    add(GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum.P),
                    add(GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum.J),
                }};
                spenderCommitteeOrgType = new org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum[]{{
                    add(GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum.UNKNOWN),
                }};
                spenderCommitteeType = new org.openapis.openapi.models.operations.GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum[]{{
                    add(GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum.I),
                    add(GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum.Y),
                }};
                twoYearTransactionPeriod = new Integer[]{{
                    add(8511),
                    add(279068),
                    add(968865),
                }};
            }};            

            GetSchedulesScheduleBSubIdResponse res = sdk.disbursements.getSchedulesScheduleBSubId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
