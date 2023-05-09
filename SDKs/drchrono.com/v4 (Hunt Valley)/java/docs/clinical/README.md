# clinical

## Overview

Create and manage clinical resources

### Available Operations

* [allergiesCreate](#allergiescreate) - Create patient allergy
* [allergiesList](#allergieslist) - Retrieve or search patient allergies
* [allergiesPartialUpdate](#allergiespartialupdate) - Update an existing patient allergy
* [allergiesRead](#allergiesread) - Retrieve an existing patient allergy
* [allergiesUpdate](#allergiesupdate) - Update an existing patient allergy
* [amendmentsCreate](#amendmentscreate) - Create patient amendments to a patient's clinical records
* [amendmentsDelete](#amendmentsdelete) - Delete an existing patient amendment, you can only interact with amendments created by your API application
* [amendmentsList](#amendmentslist) - Retrieve or search patient amendments. You can only interact with amendments created by your API application
* [amendmentsPartialUpdate](#amendmentspartialupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [amendmentsRead](#amendmentsread) - Retrieve an existing patient amendment, you can only interact with amendments created by your API application
* [amendmentsUpdate](#amendmentsupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [appointmentProfilesCreate](#appointmentprofilescreate) - Create appointment profiles for a doctor's calendar
* [appointmentProfilesDelete](#appointmentprofilesdelete) - Delete an existing appointment profile
* [appointmentProfilesList](#appointmentprofileslist) - Retrieve or search appointment profiles for a doctor's calendar
* [appointmentProfilesPartialUpdate](#appointmentprofilespartialupdate) - Update an existing appointment profile
* [appointmentProfilesRead](#appointmentprofilesread) - Retrieve an existing appointment profile
* [appointmentProfilesUpdate](#appointmentprofilesupdate) - Update an existing appointment profile
* [appointmentTemplatesCreate](#appointmenttemplatescreate) - Create appointment templates for a doctor's calendar
* [appointmentTemplatesDelete](#appointmenttemplatesdelete) - Delete an existing appointment template
* [appointmentTemplatesList](#appointmenttemplateslist) - Retrieve or search appointment templates for a doctor's calendar
* [appointmentTemplatesPartialUpdate](#appointmenttemplatespartialupdate) - Update an existing appointment template
* [appointmentTemplatesRead](#appointmenttemplatesread) - Retrieve an existing appointment template
* [appointmentTemplatesUpdate](#appointmenttemplatesupdate) - Update an existing appointment template
* [appointmentsCreate](#appointmentscreate) - Create a new appointment or break on doctor's calendar
* [appointmentsDelete](#appointmentsdelete) - Delete an existing appointment or break
* [appointmentsList](#appointmentslist) - Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            
* [appointmentsPartialUpdate](#appointmentspartialupdate) - Update an existing appointment or break
* [appointmentsRead](#appointmentsread) - Retrieve an existing appointment or break
* [appointmentsUpdate](#appointmentsupdate) - Update an existing appointment or break
* [carePlansList](#careplanslist) - Retrieve or search care plans
* [carePlansRead](#careplansread) - Retrieve an existing care plan
* [careTeamMembersList](#careteammemberslist)
* [careTeamMembersRead](#careteammembersread)
* [claimBillingNotesCreate](#claimbillingnotescreate) - Create a new billing note
* [claimBillingNotesList](#claimbillingnoteslist) - Retrieve or search billing notes
* [claimBillingNotesRead](#claimbillingnotesread) - Retrieve an existing billing note
* [clinicalNoteFieldTypesList](#clinicalnotefieldtypeslist) - Retrieve or search clinical note field types
* [clinicalNoteFieldTypesRead](#clinicalnotefieldtypesread) - Retrieve an existing clinial note field type
* [clinicalNoteFieldValuesCreate](#clinicalnotefieldvaluescreate) - Create clinical note field value
* [clinicalNoteFieldValuesList](#clinicalnotefieldvalueslist) - Retrieve or search clinical note field values
* [clinicalNoteFieldValuesPartialUpdate](#clinicalnotefieldvaluespartialupdate) - Update an existing clinical note field value
* [clinicalNoteFieldValuesRead](#clinicalnotefieldvaluesread) - Retrieve an existing clinical note field value
* [clinicalNoteFieldValuesUpdate](#clinicalnotefieldvaluesupdate) - Update an existing clinical note field value
* [clinicalNoteTemplatesList](#clinicalnotetemplateslist) - Retrieve or search clinical note templates
* [clinicalNoteTemplatesRead](#clinicalnotetemplatesread) - Retrieve an existing clinical note tempalte
* [clinicalNotesList](#clinicalnoteslist)
* [clinicalNotesRead](#clinicalnotesread)
* [consentFormsApplyToAppointment](#consentformsapplytoappointment) - Assign (apply) a consent form to appointment
* [consentFormsCreate](#consentformscreate) - Create a patient consent form
* [consentFormsList](#consentformslist) - Retrieve or search patient consent forms
* [consentFormsPartialUpdate](#consentformspartialupdate) - Update an existing patient consent form
* [consentFormsRead](#consentformsread) - Retrieve an existing patient consent form
* [consentFormsUnapplyFromAppointment](#consentformsunapplyfromappointment) - Unassign (unapply) a consent form from appointment
* [consentFormsUpdate](#consentformsupdate) - Update an existing patient consent form
* [customAppointmentFieldsCreate](#customappointmentfieldscreate) - Create custom appointment fields
* [customAppointmentFieldsList](#customappointmentfieldslist) - Retrieve or search custom appointment fields
* [customAppointmentFieldsPartialUpdate](#customappointmentfieldspartialupdate) - Update an existing custom appointment field
* [customAppointmentFieldsRead](#customappointmentfieldsread) - Retrieve an existing custom appointment field
* [customAppointmentFieldsUpdate](#customappointmentfieldsupdate) - Update an existing custom appointment field
* [customDemographicsCreate](#customdemographicscreate) - Create custom demographics fields
* [customDemographicsList](#customdemographicslist) - Retrieve or search custom demographics fields
* [customDemographicsPartialUpdate](#customdemographicspartialupdate) - Update an existing custom demographics field
* [customDemographicsRead](#customdemographicsread) - Retrieve an existing custom demographics field
* [customDemographicsUpdate](#customdemographicsupdate) - Update an existing custom demographics field
* [customVitalsList](#customvitalslist) - Retrieve or search custom vital types
* [customVitalsRead](#customvitalsread) - Retrieve an existing custom vital type
* [documentsCreate](#documentscreate) - Create documents
* [documentsDelete](#documentsdelete) - Delete an existing appointment template
* [documentsList](#documentslist) - Retrieve or search documents
* [documentsPartialUpdate](#documentspartialupdate) - Update an existing appointment template
* [documentsRead](#documentsread) - Retrieve an existing appointment template
* [documentsUpdate](#documentsupdate) - Update an existing appointment template
* [eobsCreate](#eobscreate) - Create EOB object
* [eobsList](#eobslist) - Retrieve or search EOB objects
* [eobsRead](#eobsread) - Retrieve an existing EOB object
* [feeSchedulesList](#feescheduleslist)
* [feeSchedulesRead](#feeschedulesread)
* [implantableDevicesList](#implantabledeviceslist) - Retrieve or search implantable devices
* [implantableDevicesRead](#implantabledevicesread) - Retrieve an existing implantable device
* [insurancesList](#insuranceslist)
* [insurancesRead](#insurancesread)
* [labDocumentsCreate](#labdocumentscreate) - Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labDocumentsDelete](#labdocumentsdelete) - Delete an existing lab order document
* [labDocumentsList](#labdocumentslist) - Retrieve or search lab order documents
* [labDocumentsPartialUpdate](#labdocumentspartialupdate) - Update an existing lab order document
* [labDocumentsRead](#labdocumentsread) - Retrieve an existing lab order document
* [labDocumentsUpdate](#labdocumentsupdate) - Update an existing lab order document
* [labOrdersCreate](#laborderscreate) - Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labOrdersDelete](#labordersdelete) - Delete an existing lab order
* [labOrdersList](#laborderslist) - Retrieve or search lab orders
* [labOrdersPartialUpdate](#laborderspartialupdate) - Update an existing lab order
* [labOrdersRead](#labordersread) - Retrieve an existing lab order
* [labOrdersSummaryList](#laborderssummarylist)
* [labOrdersSummaryRead](#laborderssummaryread)
* [labOrdersUpdate](#labordersupdate) - Update an existing lab order
* [labResultsCreate](#labresultscreate) - Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labResultsDelete](#labresultsdelete) - Delete an existing lab result
* [labResultsList](#labresultslist) - Retrieve or search lab results
* [labResultsPartialUpdate](#labresultspartialupdate) - Update an existing lab result
* [labResultsRead](#labresultsread) - Retrieve an existing lab result
* [labResultsUpdate](#labresultsupdate) - Update an existing lab result
* [labTestsCreate](#labtestscreate) - Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labTestsDelete](#labtestsdelete) - Delete an existing lab test
* [labTestsList](#labtestslist) - Retrieve or search lab tests
* [labTestsPartialUpdate](#labtestspartialupdate) - Update an existing lab test
* [labTestsRead](#labtestsread) - Retrieve an existing lab test
* [labTestsUpdate](#labtestsupdate) - Update an existing lab test
* [medicationsAppendToPharmacyNote](#medicationsappendtopharmacynote) - Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
* [medicationsCreate](#medicationscreate) - Create patient medications
* [medicationsList](#medicationslist) - Retrieve or search patient medications
* [medicationsPartialUpdate](#medicationspartialupdate) - Update an existing patient medications
* [medicationsRead](#medicationsread) - Retrieve an existing patient medications
* [medicationsUpdate](#medicationsupdate) - Update an existing patient medications
* [patientCommunicationsCreate](#patientcommunicationscreate) - Create patient communication for CQM
* [patientCommunicationsList](#patientcommunicationslist) - Retrieve or search patient communications for CQM
* [patientCommunicationsPartialUpdate](#patientcommunicationspartialupdate) - Update an existing patient communication for CQM
* [patientCommunicationsRead](#patientcommunicationsread) - Retrieve an existing patient communication for CQM
* [patientCommunicationsUpdate](#patientcommunicationsupdate) - Update an existing patient communication for CQM
* [patientFlagTypesCreate](#patientflagtypescreate) - Create patient flag types
* [patientFlagTypesList](#patientflagtypeslist) - Retrieve or search patient flag types
* [patientFlagTypesPartialUpdate](#patientflagtypespartialupdate) - Update an existing patient flag type
* [patientFlagTypesRead](#patientflagtypesread) - Retrieve an existing patient flag type
* [patientFlagTypesUpdate](#patientflagtypesupdate) - Update an existing patient flag type
* [patientInterventionsCreate](#patientinterventionscreate) - Create patient intervention for CQM
* [patientInterventionsList](#patientinterventionslist) - Retrieve or search patient interventions for CQM
* [patientInterventionsPartialUpdate](#patientinterventionspartialupdate) - Update an existing patient intervention for CQM
* [patientInterventionsRead](#patientinterventionsread) - Retrieve an existing patient intervention for CQM
* [patientInterventionsUpdate](#patientinterventionsupdate) - Update an existing patient intervention for CQM
* [patientLabResultsCreate](#patientlabresultscreate)
* [patientLabResultsDelete](#patientlabresultsdelete)
* [patientLabResultsList](#patientlabresultslist)
* [patientLabResultsPartialUpdate](#patientlabresultspartialupdate)
* [patientLabResultsRead](#patientlabresultsread)
* [patientLabResultsUpdate](#patientlabresultsupdate)
* [patientMessagesCreate](#patientmessagescreate)
* [patientMessagesList](#patientmessageslist)
* [patientMessagesPartialUpdate](#patientmessagespartialupdate)
* [patientMessagesRead](#patientmessagesread)
* [patientMessagesUpdate](#patientmessagesupdate)
* [patientPhysicalExamsCreate](#patientphysicalexamscreate) - Create patient physical exam for CQM
* [patientPhysicalExamsList](#patientphysicalexamslist) - Retrieve or search patient physical exams for CQM
* [patientPhysicalExamsPartialUpdate](#patientphysicalexamspartialupdate) - Update an existing patient physical exam for CQM
* [patientPhysicalExamsRead](#patientphysicalexamsread) - Retrieve an existing patient physical exam for CQM
* [patientPhysicalExamsUpdate](#patientphysicalexamsupdate) - Update an existing patient physical exam for CQM
* [patientRiskAssessmentsCreate](#patientriskassessmentscreate)
* [patientRiskAssessmentsList](#patientriskassessmentslist)
* [patientRiskAssessmentsPartialUpdate](#patientriskassessmentspartialupdate)
* [patientRiskAssessmentsRead](#patientriskassessmentsread)
* [patientRiskAssessmentsUpdate](#patientriskassessmentsupdate)
* [patientVaccineRecordsCreate](#patientvaccinerecordscreate) - Create patient vaccine records
* [patientVaccineRecordsList](#patientvaccinerecordslist) - Retrieve or search patient vaccine records
* [patientVaccineRecordsPartialUpdate](#patientvaccinerecordspartialupdate) - Update an existing patient vaccine records
* [patientVaccineRecordsRead](#patientvaccinerecordsread) - Retrieve an existing patient vaccine records
* [patientVaccineRecordsUpdate](#patientvaccinerecordsupdate) - Update an existing patient vaccine records
* [patientsCcda](#patientsccda) - Retrieve patient CCDA
* [patientsCreate](#patientscreate) - Create patient
* [patientsDelete](#patientsdelete) - Delete an existing patient
* [patientsList](#patientslist) - Retrieve or search patients
* [patientsOnpatientAccessCreate](#patientsonpatientaccesscreate) - Send new onpatient invite to patient
* [patientsOnpatientAccessDelete](#patientsonpatientaccessdelete) - Revoke sent onpatient invites
* [patientsOnpatientAccessRead](#patientsonpatientaccessread) - Retrieve or search existing onpatient access invites
* [patientsPartialUpdate](#patientspartialupdate) - Update an existing patient
* [patientsQrda1](#patientsqrda1) - Retrieve patient QRDA1
* [patientsRead](#patientsread) - Retrieve an existing patient
* [patientsSummaryCreate](#patientssummarycreate)
* [patientsSummaryDelete](#patientssummarydelete)
* [patientsSummaryList](#patientssummarylist)
* [patientsSummaryPartialUpdate](#patientssummarypartialupdate)
* [patientsSummaryRead](#patientssummaryread)
* [patientsSummaryUpdate](#patientssummaryupdate)
* [patientsUpdate](#patientsupdate) - Update an existing patient
* [prescriptionMessagesList](#prescriptionmessageslist) - Retrieve or search prescription messages
* [prescriptionMessagesRead](#prescriptionmessagesread) - Retrieve an existing prescription message
* [problemsCreate](#problemscreate) - Create patient problems
* [problemsList](#problemslist) - Retrieve or search patient problems
* [problemsPartialUpdate](#problemspartialupdate) - Update an existing patient problems
* [problemsRead](#problemsread) - Retrieve an existing patient problems
* [problemsUpdate](#problemsupdate) - Update an existing patient problems
* [reminderProfilesCreate](#reminderprofilescreate) - Create reminder profile
* [reminderProfilesDelete](#reminderprofilesdelete) - Delete an existing reminder profile
* [reminderProfilesList](#reminderprofileslist) - Retrieve or search reminder profiles
* [reminderProfilesPartialUpdate](#reminderprofilespartialupdate) - Update an existing reminder profile
* [reminderProfilesRead](#reminderprofilesread) - Retrieve an existing reminder profile
* [reminderProfilesUpdate](#reminderprofilesupdate) - Update an existing reminder profile
* [sublabsCreate](#sublabscreate) - Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [sublabsDelete](#sublabsdelete) - Delete an existing sub vendor
* [sublabsList](#sublabslist) - Retrieve or search sub vendors
* [sublabsPartialUpdate](#sublabspartialupdate) - Update an existing sub vendor
* [sublabsRead](#sublabsread) - Retrieve an existing sub vendor
* [sublabsUpdate](#sublabsupdate) - Update an existing sub vendor

## allergiesCreate

Create patient allergy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllergiesCreateRequest;
import org.openapis.openapi.models.operations.AllergiesCreateResponse;
import org.openapis.openapi.models.operations.AllergiesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllergiesCreateRequest req = new AllergiesCreateRequest() {{
                doctor = 756107L;
                patient = 576157L;
            }};            

            AllergiesCreateResponse res = sdk.clinical.allergiesCreate(req, new AllergiesCreateSecurity("aliquid") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientAllergy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allergiesList

Retrieve or search patient allergies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllergiesListRequest;
import org.openapis.openapi.models.operations.AllergiesListResponse;
import org.openapis.openapi.models.operations.AllergiesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllergiesListRequest req = new AllergiesListRequest() {{
                cursor = "provident";
                doctor = 896039L;
                pageSize = 572252L;
                patient = 638921L;
            }};            

            AllergiesListResponse res = sdk.clinical.allergiesList(req, new AllergiesListSecurity("dolor") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.allergiesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allergiesPartialUpdate

Update an existing patient allergy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllergiesPartialUpdateRequest;
import org.openapis.openapi.models.operations.AllergiesPartialUpdateResponse;
import org.openapis.openapi.models.operations.AllergiesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllergiesPartialUpdateRequest req = new AllergiesPartialUpdateRequest("debitis") {{
                doctor = 952749L;
                patient = 680056L;
            }};            

            AllergiesPartialUpdateResponse res = sdk.clinical.allergiesPartialUpdate(req, new AllergiesPartialUpdateSecurity("in") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allergiesRead

Retrieve an existing patient allergy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllergiesReadRequest;
import org.openapis.openapi.models.operations.AllergiesReadResponse;
import org.openapis.openapi.models.operations.AllergiesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllergiesReadRequest req = new AllergiesReadRequest("in") {{
                doctor = 846409L;
                patient = 978571L;
            }};            

            AllergiesReadResponse res = sdk.clinical.allergiesRead(req, new AllergiesReadSecurity("rerum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientAllergy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allergiesUpdate

Update an existing patient allergy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllergiesUpdateRequest;
import org.openapis.openapi.models.operations.AllergiesUpdateResponse;
import org.openapis.openapi.models.operations.AllergiesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllergiesUpdateRequest req = new AllergiesUpdateRequest("dicta") {{
                doctor = 297437L;
                patient = 767024L;
            }};            

            AllergiesUpdateResponse res = sdk.clinical.allergiesUpdate(req, new AllergiesUpdateSecurity("facere") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## amendmentsCreate

Create patient amendments to a patient's clinical records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AmendmentsCreateRequest;
import org.openapis.openapi.models.operations.AmendmentsCreateResponse;
import org.openapis.openapi.models.operations.AmendmentsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AmendmentsCreateRequest req = new AmendmentsCreateRequest() {{
                appointment = 411820L;
                doctor = 396506L;
                patient = 675439L;
            }};            

            AmendmentsCreateResponse res = sdk.clinical.amendmentsCreate(req, new AmendmentsCreateSecurity("accusamus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientAmendment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## amendmentsDelete

Delete an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AmendmentsDeleteRequest;
import org.openapis.openapi.models.operations.AmendmentsDeleteResponse;
import org.openapis.openapi.models.operations.AmendmentsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AmendmentsDeleteRequest req = new AmendmentsDeleteRequest("non") {{
                appointment = 581273L;
                doctor = 313218L;
                patient = 881736L;
            }};            

            AmendmentsDeleteResponse res = sdk.clinical.amendmentsDelete(req, new AmendmentsDeleteSecurity("delectus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## amendmentsList

Retrieve or search patient amendments. You can only interact with amendments created by your API application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AmendmentsListRequest;
import org.openapis.openapi.models.operations.AmendmentsListResponse;
import org.openapis.openapi.models.operations.AmendmentsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AmendmentsListRequest req = new AmendmentsListRequest() {{
                appointment = 692532L;
                cursor = "provident";
                doctor = 725255L;
                pageSize = 659669L;
                patient = 501324L;
            }};            

            AmendmentsListResponse res = sdk.clinical.amendmentsList(req, new AmendmentsListSecurity("deleniti") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.amendmentsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## amendmentsPartialUpdate

Update an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AmendmentsPartialUpdateRequest;
import org.openapis.openapi.models.operations.AmendmentsPartialUpdateResponse;
import org.openapis.openapi.models.operations.AmendmentsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AmendmentsPartialUpdateRequest req = new AmendmentsPartialUpdateRequest("sapiente") {{
                appointment = 230533L;
                doctor = 643990L;
                patient = 394869L;
            }};            

            AmendmentsPartialUpdateResponse res = sdk.clinical.amendmentsPartialUpdate(req, new AmendmentsPartialUpdateSecurity("vel") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## amendmentsRead

Retrieve an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AmendmentsReadRequest;
import org.openapis.openapi.models.operations.AmendmentsReadResponse;
import org.openapis.openapi.models.operations.AmendmentsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AmendmentsReadRequest req = new AmendmentsReadRequest("natus") {{
                appointment = 606393L;
                doctor = 474867L;
                patient = 19193L;
            }};            

            AmendmentsReadResponse res = sdk.clinical.amendmentsRead(req, new AmendmentsReadSecurity("nihil") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientAmendment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## amendmentsUpdate

Update an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AmendmentsUpdateRequest;
import org.openapis.openapi.models.operations.AmendmentsUpdateResponse;
import org.openapis.openapi.models.operations.AmendmentsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AmendmentsUpdateRequest req = new AmendmentsUpdateRequest("magnam") {{
                appointment = 716075L;
                doctor = 660174L;
                patient = 287991L;
            }};            

            AmendmentsUpdateResponse res = sdk.clinical.amendmentsUpdate(req, new AmendmentsUpdateSecurity("labore") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentProfilesCreate

Create appointment profiles for a doctor's calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentProfilesCreateRequest;
import org.openapis.openapi.models.operations.AppointmentProfilesCreateResponse;
import org.openapis.openapi.models.operations.AppointmentProfilesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentProfilesCreateRequest req = new AppointmentProfilesCreateRequest() {{
                doctor = 383462L;
            }};            

            AppointmentProfilesCreateResponse res = sdk.clinical.appointmentProfilesCreate(req, new AppointmentProfilesCreateSecurity("natus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointmentProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentProfilesDelete

Delete an existing appointment profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentProfilesDeleteRequest;
import org.openapis.openapi.models.operations.AppointmentProfilesDeleteResponse;
import org.openapis.openapi.models.operations.AppointmentProfilesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentProfilesDeleteRequest req = new AppointmentProfilesDeleteRequest("nobis") {{
                doctor = 428769L;
            }};            

            AppointmentProfilesDeleteResponse res = sdk.clinical.appointmentProfilesDelete(req, new AppointmentProfilesDeleteSecurity("vero") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentProfilesList

Retrieve or search appointment profiles for a doctor's calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentProfilesListRequest;
import org.openapis.openapi.models.operations.AppointmentProfilesListResponse;
import org.openapis.openapi.models.operations.AppointmentProfilesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentProfilesListRequest req = new AppointmentProfilesListRequest() {{
                cursor = "aspernatur";
                doctor = 102863L;
                pageSize = 298282L;
            }};            

            AppointmentProfilesListResponse res = sdk.clinical.appointmentProfilesList(req, new AppointmentProfilesListSecurity("et") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointmentProfilesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentProfilesPartialUpdate

Update an existing appointment profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentProfilesPartialUpdateRequest;
import org.openapis.openapi.models.operations.AppointmentProfilesPartialUpdateResponse;
import org.openapis.openapi.models.operations.AppointmentProfilesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentProfilesPartialUpdateRequest req = new AppointmentProfilesPartialUpdateRequest("excepturi") {{
                doctor = 354047L;
            }};            

            AppointmentProfilesPartialUpdateResponse res = sdk.clinical.appointmentProfilesPartialUpdate(req, new AppointmentProfilesPartialUpdateSecurity("provident") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentProfilesRead

Retrieve an existing appointment profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentProfilesReadRequest;
import org.openapis.openapi.models.operations.AppointmentProfilesReadResponse;
import org.openapis.openapi.models.operations.AppointmentProfilesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentProfilesReadRequest req = new AppointmentProfilesReadRequest("quos") {{
                doctor = 574325L;
            }};            

            AppointmentProfilesReadResponse res = sdk.clinical.appointmentProfilesRead(req, new AppointmentProfilesReadSecurity("accusantium") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointmentProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentProfilesUpdate

Update an existing appointment profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentProfilesUpdateRequest;
import org.openapis.openapi.models.operations.AppointmentProfilesUpdateResponse;
import org.openapis.openapi.models.operations.AppointmentProfilesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentProfilesUpdateRequest req = new AppointmentProfilesUpdateRequest("mollitia") {{
                doctor = 968962L;
            }};            

            AppointmentProfilesUpdateResponse res = sdk.clinical.appointmentProfilesUpdate(req, new AppointmentProfilesUpdateSecurity("mollitia") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentTemplatesCreate

Create appointment templates for a doctor's calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentTemplatesCreateRequest;
import org.openapis.openapi.models.operations.AppointmentTemplatesCreateResponse;
import org.openapis.openapi.models.operations.AppointmentTemplatesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentTemplatesCreateRequest req = new AppointmentTemplatesCreateRequest() {{
                doctor = 320997L;
                office = 431418L;
                profile = 221262L;
            }};            

            AppointmentTemplatesCreateResponse res = sdk.clinical.appointmentTemplatesCreate(req, new AppointmentTemplatesCreateSecurity("necessitatibus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointmentTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentTemplatesDelete

Delete an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentTemplatesDeleteRequest;
import org.openapis.openapi.models.operations.AppointmentTemplatesDeleteResponse;
import org.openapis.openapi.models.operations.AppointmentTemplatesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentTemplatesDeleteRequest req = new AppointmentTemplatesDeleteRequest("odit") {{
                doctor = 367562L;
                office = 97260L;
                profile = 435865L;
            }};            

            AppointmentTemplatesDeleteResponse res = sdk.clinical.appointmentTemplatesDelete(req, new AppointmentTemplatesDeleteSecurity("doloribus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentTemplatesList

Retrieve or search appointment templates for a doctor's calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentTemplatesListRequest;
import org.openapis.openapi.models.operations.AppointmentTemplatesListResponse;
import org.openapis.openapi.models.operations.AppointmentTemplatesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentTemplatesListRequest req = new AppointmentTemplatesListRequest() {{
                cursor = "debitis";
                doctor = 260341L;
                office = 806194L;
                pageSize = 537023L;
                profile = 703889L;
            }};            

            AppointmentTemplatesListResponse res = sdk.clinical.appointmentTemplatesList(req, new AppointmentTemplatesListSecurity("in") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointmentTemplatesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentTemplatesPartialUpdate

Update an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentTemplatesPartialUpdateRequest;
import org.openapis.openapi.models.operations.AppointmentTemplatesPartialUpdateResponse;
import org.openapis.openapi.models.operations.AppointmentTemplatesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentTemplatesPartialUpdateRequest req = new AppointmentTemplatesPartialUpdateRequest("architecto") {{
                doctor = 99569L;
                office = 919483L;
                profile = 352312L;
            }};            

            AppointmentTemplatesPartialUpdateResponse res = sdk.clinical.appointmentTemplatesPartialUpdate(req, new AppointmentTemplatesPartialUpdateSecurity("expedita") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentTemplatesRead

Retrieve an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentTemplatesReadRequest;
import org.openapis.openapi.models.operations.AppointmentTemplatesReadResponse;
import org.openapis.openapi.models.operations.AppointmentTemplatesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentTemplatesReadRequest req = new AppointmentTemplatesReadRequest("nihil") {{
                doctor = 998848L;
                office = 841140L;
                profile = 149448L;
            }};            

            AppointmentTemplatesReadResponse res = sdk.clinical.appointmentTemplatesRead(req, new AppointmentTemplatesReadSecurity("saepe") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointmentTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentTemplatesUpdate

Update an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentTemplatesUpdateRequest;
import org.openapis.openapi.models.operations.AppointmentTemplatesUpdateResponse;
import org.openapis.openapi.models.operations.AppointmentTemplatesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentTemplatesUpdateRequest req = new AppointmentTemplatesUpdateRequest("pariatur") {{
                doctor = 37559L;
                office = 162493L;
                profile = 508315L;
            }};            

            AppointmentTemplatesUpdateResponse res = sdk.clinical.appointmentTemplatesUpdate(req, new AppointmentTemplatesUpdateSecurity("natus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentsCreate

Create a new appointment or break on doctor's calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentsCreateRequest;
import org.openapis.openapi.models.operations.AppointmentsCreateResponse;
import org.openapis.openapi.models.operations.AppointmentsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentsCreateRequest req = new AppointmentsCreateRequest() {{
                date = "magni";
                dateRange = "sunt";
                doctor = 779051L;
                office = 848009L;
                patient = 864934L;
                since = "maxime";
                status = "ea";
            }};            

            AppointmentsCreateResponse res = sdk.clinical.appointmentsCreate(req, new AppointmentsCreateSecurity("excepturi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentsDelete

Delete an existing appointment or break

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentsDeleteRequest;
import org.openapis.openapi.models.operations.AppointmentsDeleteResponse;
import org.openapis.openapi.models.operations.AppointmentsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentsDeleteRequest req = new AppointmentsDeleteRequest("odit") {{
                date = "ea";
                dateRange = "accusantium";
                doctor = 69167L;
                office = 982575L;
                patient = 697429L;
                since = "ipsam";
                status = "voluptate";
            }};            

            AppointmentsDeleteResponse res = sdk.clinical.appointmentsDelete(req, new AppointmentsDeleteSecurity("autem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentsList

Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentsListRequest;
import org.openapis.openapi.models.operations.AppointmentsListResponse;
import org.openapis.openapi.models.operations.AppointmentsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentsListRequest req = new AppointmentsListRequest() {{
                cursor = "nam";
                date = "eaque";
                dateRange = "pariatur";
                doctor = 365496L;
                office = 975522L;
                pageSize = 16627L;
                patient = 855804L;
                since = "amet";
                status = "aut";
            }};            

            AppointmentsListResponse res = sdk.clinical.appointmentsList(req, new AppointmentsListSecurity("cumque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointmentsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentsPartialUpdate

Update an existing appointment or break

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentsPartialUpdateRequest;
import org.openapis.openapi.models.operations.AppointmentsPartialUpdateResponse;
import org.openapis.openapi.models.operations.AppointmentsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentsPartialUpdateRequest req = new AppointmentsPartialUpdateRequest("corporis") {{
                date = "hic";
                dateRange = "libero";
                doctor = 749999L;
                office = 171629L;
                patient = 339404L;
                since = "totam";
                status = "dignissimos";
            }};            

            AppointmentsPartialUpdateResponse res = sdk.clinical.appointmentsPartialUpdate(req, new AppointmentsPartialUpdateSecurity("eaque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentsRead

Retrieve an existing appointment or break

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentsReadRequest;
import org.openapis.openapi.models.operations.AppointmentsReadResponse;
import org.openapis.openapi.models.operations.AppointmentsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentsReadRequest req = new AppointmentsReadRequest("quis") {{
                date = "nesciunt";
                dateRange = "eos";
                doctor = 18521L;
                office = 170986L;
                patient = 793698L;
                since = "quam";
                status = "dolor";
            }};            

            AppointmentsReadResponse res = sdk.clinical.appointmentsRead(req, new AppointmentsReadSecurity("vero") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appointment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appointmentsUpdate

Update an existing appointment or break

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppointmentsUpdateRequest;
import org.openapis.openapi.models.operations.AppointmentsUpdateResponse;
import org.openapis.openapi.models.operations.AppointmentsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppointmentsUpdateRequest req = new AppointmentsUpdateRequest("nostrum") {{
                date = "hic";
                dateRange = "recusandae";
                doctor = 608253L;
                office = 704415L;
                patient = 596656L;
                since = "voluptatem";
                status = "porro";
            }};            

            AppointmentsUpdateResponse res = sdk.clinical.appointmentsUpdate(req, new AppointmentsUpdateSecurity("consequuntur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## carePlansList

Retrieve or search care plans

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CarePlansListRequest;
import org.openapis.openapi.models.operations.CarePlansListResponse;
import org.openapis.openapi.models.operations.CarePlansListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CarePlansListRequest req = new CarePlansListRequest() {{
                cursor = "blanditiis";
                doctor = 621479L;
                pageSize = 50370L;
                patient = 577229L;
                planType = 699098L;
            }};            

            CarePlansListResponse res = sdk.clinical.carePlansList(req, new CarePlansListSecurity("adipisci") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.carePlansList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## carePlansRead

Retrieve an existing care plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CarePlansReadRequest;
import org.openapis.openapi.models.operations.CarePlansReadResponse;
import org.openapis.openapi.models.operations.CarePlansReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CarePlansReadRequest req = new CarePlansReadRequest("asperiores") {{
                doctor = 934214L;
                patient = 267262L;
                planType = 613966L;
            }};            

            CarePlansReadResponse res = sdk.clinical.carePlansRead(req, new CarePlansReadSecurity("dolorum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.carePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## careTeamMembersList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CareTeamMembersListRequest;
import org.openapis.openapi.models.operations.CareTeamMembersListResponse;
import org.openapis.openapi.models.operations.CareTeamMembersListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CareTeamMembersListRequest req = new CareTeamMembersListRequest() {{
                appointment = 535633L;
                cursor = "pariatur";
                doctor = 589910L;
                pageSize = 750844L;
                patient = 730122L;
            }};            

            CareTeamMembersListResponse res = sdk.clinical.careTeamMembersList(req, new CareTeamMembersListSecurity("delectus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.careTeamMembersList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## careTeamMembersRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CareTeamMembersReadRequest;
import org.openapis.openapi.models.operations.CareTeamMembersReadResponse;
import org.openapis.openapi.models.operations.CareTeamMembersReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CareTeamMembersReadRequest req = new CareTeamMembersReadRequest("quaerat") {{
                appointment = 554242L;
                doctor = 398221L;
                patient = 212390L;
            }};            

            CareTeamMembersReadResponse res = sdk.clinical.careTeamMembersRead(req, new CareTeamMembersReadSecurity("dolorem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.careTeamMember != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## claimBillingNotesCreate

Create a new billing note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimBillingNotesCreateRequest;
import org.openapis.openapi.models.operations.ClaimBillingNotesCreateResponse;
import org.openapis.openapi.models.operations.ClaimBillingNotesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClaimBillingNotesCreateRequest req = new ClaimBillingNotesCreateRequest() {{
                appointment = 222443L;
                doctor = 186193L;
            }};            

            ClaimBillingNotesCreateResponse res = sdk.clinical.claimBillingNotesCreate(req, new ClaimBillingNotesCreateSecurity("ipsum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.claimBillingNotes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## claimBillingNotesList

Retrieve or search billing notes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimBillingNotesListRequest;
import org.openapis.openapi.models.operations.ClaimBillingNotesListResponse;
import org.openapis.openapi.models.operations.ClaimBillingNotesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClaimBillingNotesListRequest req = new ClaimBillingNotesListRequest() {{
                appointment = 944373L;
                cursor = "excepturi";
                doctor = 739551L;
                pageSize = 452109L;
            }};            

            ClaimBillingNotesListResponse res = sdk.clinical.claimBillingNotesList(req, new ClaimBillingNotesListSecurity("dignissimos") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.claimBillingNotesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## claimBillingNotesRead

Retrieve an existing billing note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimBillingNotesReadRequest;
import org.openapis.openapi.models.operations.ClaimBillingNotesReadResponse;
import org.openapis.openapi.models.operations.ClaimBillingNotesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClaimBillingNotesReadRequest req = new ClaimBillingNotesReadRequest("reiciendis") {{
                appointment = 227414L;
                doctor = 680545L;
            }};            

            ClaimBillingNotesReadResponse res = sdk.clinical.claimBillingNotesRead(req, new ClaimBillingNotesReadSecurity("numquam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.claimBillingNotes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteFieldTypesList

Retrieve or search clinical note field types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteFieldTypesListRequest;
import org.openapis.openapi.models.operations.ClinicalNoteFieldTypesListResponse;
import org.openapis.openapi.models.operations.ClinicalNoteFieldTypesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteFieldTypesListRequest req = new ClinicalNoteFieldTypesListRequest() {{
                clinicalNoteTemplate = 85295L;
                cursor = "ipsa";
                doctor = 56418L;
                pageSize = 434417L;
            }};            

            ClinicalNoteFieldTypesListResponse res = sdk.clinical.clinicalNoteFieldTypesList(req, new ClinicalNoteFieldTypesListSecurity("odio") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clinicalNoteFieldTypesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteFieldTypesRead

Retrieve an existing clinial note field type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteFieldTypesReadRequest;
import org.openapis.openapi.models.operations.ClinicalNoteFieldTypesReadResponse;
import org.openapis.openapi.models.operations.ClinicalNoteFieldTypesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteFieldTypesReadRequest req = new ClinicalNoteFieldTypesReadRequest("quaerat") {{
                clinicalNoteTemplate = 881005L;
                doctor = 696344L;
            }};            

            ClinicalNoteFieldTypesReadResponse res = sdk.clinical.clinicalNoteFieldTypesRead(req, new ClinicalNoteFieldTypesReadSecurity("voluptatibus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.soapNoteLineItemFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteFieldValuesCreate

Create clinical note field value

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesCreateRequest;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesCreateResponse;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteFieldValuesCreateRequest req = new ClinicalNoteFieldValuesCreateRequest() {{
                appointment = 377752L;
                clinicalNoteField = 617658L;
                clinicalNoteTemplate = 179603L;
                doctor = 542499L;
                since = "sit";
            }};            

            ClinicalNoteFieldValuesCreateResponse res = sdk.clinical.clinicalNoteFieldValuesCreate(req, new ClinicalNoteFieldValuesCreateSecurity("fugiat") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.soapNoteLineItemFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteFieldValuesList

Retrieve or search clinical note field values

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesListRequest;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesListResponse;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteFieldValuesListRequest req = new ClinicalNoteFieldValuesListRequest() {{
                appointment = 67249L;
                clinicalNoteField = 743835L;
                clinicalNoteTemplate = 679393L;
                cursor = "iusto";
                doctor = 453697L;
                pageSize = 677082L;
                since = "deleniti";
            }};            

            ClinicalNoteFieldValuesListResponse res = sdk.clinical.clinicalNoteFieldValuesList(req, new ClinicalNoteFieldValuesListSecurity("omnis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clinicalNoteFieldValuesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteFieldValuesPartialUpdate

Update an existing clinical note field value

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesPartialUpdateRequest;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesPartialUpdateResponse;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteFieldValuesPartialUpdateRequest req = new ClinicalNoteFieldValuesPartialUpdateRequest("necessitatibus") {{
                appointment = 714697L;
                clinicalNoteField = 990339L;
                clinicalNoteTemplate = 469497L;
                doctor = 216897L;
                since = "voluptate";
            }};            

            ClinicalNoteFieldValuesPartialUpdateResponse res = sdk.clinical.clinicalNoteFieldValuesPartialUpdate(req, new ClinicalNoteFieldValuesPartialUpdateSecurity("id") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteFieldValuesRead

Retrieve an existing clinical note field value

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesReadRequest;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesReadResponse;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteFieldValuesReadRequest req = new ClinicalNoteFieldValuesReadRequest("saepe") {{
                appointment = 263322L;
                clinicalNoteField = 137220L;
                clinicalNoteTemplate = 20651L;
                doctor = 229219L;
                since = "optio";
            }};            

            ClinicalNoteFieldValuesReadResponse res = sdk.clinical.clinicalNoteFieldValuesRead(req, new ClinicalNoteFieldValuesReadSecurity("accusamus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.soapNoteLineItemFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteFieldValuesUpdate

Update an existing clinical note field value

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesUpdateRequest;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesUpdateResponse;
import org.openapis.openapi.models.operations.ClinicalNoteFieldValuesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteFieldValuesUpdateRequest req = new ClinicalNoteFieldValuesUpdateRequest("ad") {{
                appointment = 904425L;
                clinicalNoteField = 383464L;
                clinicalNoteTemplate = 645785L;
                doctor = 588317L;
                since = "minima";
            }};            

            ClinicalNoteFieldValuesUpdateResponse res = sdk.clinical.clinicalNoteFieldValuesUpdate(req, new ClinicalNoteFieldValuesUpdateSecurity("repellendus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteTemplatesList

Retrieve or search clinical note templates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteTemplatesListRequest;
import org.openapis.openapi.models.operations.ClinicalNoteTemplatesListResponse;
import org.openapis.openapi.models.operations.ClinicalNoteTemplatesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteTemplatesListRequest req = new ClinicalNoteTemplatesListRequest() {{
                cursor = "totam";
                doctor = 628982L;
                pageSize = 55L;
            }};            

            ClinicalNoteTemplatesListResponse res = sdk.clinical.clinicalNoteTemplatesList(req, new ClinicalNoteTemplatesListSecurity("at") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clinicalNoteTemplatesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNoteTemplatesRead

Retrieve an existing clinical note tempalte

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNoteTemplatesReadRequest;
import org.openapis.openapi.models.operations.ClinicalNoteTemplatesReadResponse;
import org.openapis.openapi.models.operations.ClinicalNoteTemplatesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNoteTemplatesReadRequest req = new ClinicalNoteTemplatesReadRequest("quaerat") {{
                doctor = 273542L;
            }};            

            ClinicalNoteTemplatesReadResponse res = sdk.clinical.clinicalNoteTemplatesRead(req, new ClinicalNoteTemplatesReadSecurity("vel") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.soapNoteCustomReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNotesList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNotesListRequest;
import org.openapis.openapi.models.operations.ClinicalNotesListResponse;
import org.openapis.openapi.models.operations.ClinicalNotesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNotesListRequest req = new ClinicalNotesListRequest() {{
                cursor = "quod";
                date = "officiis";
                dateRange = "qui";
                doctor = 679880L;
                office = 952792L;
                pageSize = 456130L;
                patient = 687488L;
                since = "iusto";
            }};            

            ClinicalNotesListResponse res = sdk.clinical.clinicalNotesList(req, new ClinicalNotesListSecurity("ipsum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clinicalNotesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clinicalNotesRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClinicalNotesReadRequest;
import org.openapis.openapi.models.operations.ClinicalNotesReadResponse;
import org.openapis.openapi.models.operations.ClinicalNotesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClinicalNotesReadRequest req = new ClinicalNotesReadRequest("quisquam") {{
                date = "tenetur";
                dateRange = "amet";
                doctor = 730856L;
                office = 880298L;
                patient = 253941L;
                since = "enim";
            }};            

            ClinicalNotesReadResponse res = sdk.clinical.clinicalNotesRead(req, new ClinicalNotesReadSecurity("dolorem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clinicalNote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consentFormsApplyToAppointment

Assign (apply) a consent form to appointment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsentFormsApplyToAppointmentRequest;
import org.openapis.openapi.models.operations.ConsentFormsApplyToAppointmentResponse;
import org.openapis.openapi.models.operations.ConsentFormsApplyToAppointmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsentFormsApplyToAppointmentRequest req = new ConsentFormsApplyToAppointmentRequest("sapiente") {{
                doctor = 518201L;
            }};            

            ConsentFormsApplyToAppointmentResponse res = sdk.clinical.consentFormsApplyToAppointment(req, new ConsentFormsApplyToAppointmentSecurity("nihil") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consentFormsCreate

Create a patient consent form

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsentFormsCreateRequest;
import org.openapis.openapi.models.operations.ConsentFormsCreateResponse;
import org.openapis.openapi.models.operations.ConsentFormsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsentFormsCreateRequest req = new ConsentFormsCreateRequest() {{
                doctor = 25662L;
            }};            

            ConsentFormsCreateResponse res = sdk.clinical.consentFormsCreate(req, new ConsentFormsCreateSecurity("expedita") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.consentForm != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consentFormsList

Retrieve or search patient consent forms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsentFormsListRequest;
import org.openapis.openapi.models.operations.ConsentFormsListResponse;
import org.openapis.openapi.models.operations.ConsentFormsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsentFormsListRequest req = new ConsentFormsListRequest() {{
                cursor = "neque";
                doctor = 153694L;
                pageSize = 424685L;
            }};            

            ConsentFormsListResponse res = sdk.clinical.consentFormsList(req, new ConsentFormsListSecurity("libero") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.consentFormsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consentFormsPartialUpdate

Update an existing patient consent form

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsentFormsPartialUpdateRequest;
import org.openapis.openapi.models.operations.ConsentFormsPartialUpdateResponse;
import org.openapis.openapi.models.operations.ConsentFormsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsentFormsPartialUpdateRequest req = new ConsentFormsPartialUpdateRequest("voluptas") {{
                doctor = 646265L;
            }};            

            ConsentFormsPartialUpdateResponse res = sdk.clinical.consentFormsPartialUpdate(req, new ConsentFormsPartialUpdateSecurity("quam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consentFormsRead

Retrieve an existing patient consent form

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsentFormsReadRequest;
import org.openapis.openapi.models.operations.ConsentFormsReadResponse;
import org.openapis.openapi.models.operations.ConsentFormsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsentFormsReadRequest req = new ConsentFormsReadRequest("ipsum") {{
                doctor = 277628L;
            }};            

            ConsentFormsReadResponse res = sdk.clinical.consentFormsRead(req, new ConsentFormsReadSecurity("qui") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.consentForm != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consentFormsUnapplyFromAppointment

Unassign (unapply) a consent form from appointment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsentFormsUnapplyFromAppointmentRequest;
import org.openapis.openapi.models.operations.ConsentFormsUnapplyFromAppointmentResponse;
import org.openapis.openapi.models.operations.ConsentFormsUnapplyFromAppointmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsentFormsUnapplyFromAppointmentRequest req = new ConsentFormsUnapplyFromAppointmentRequest("cupiditate") {{
                doctor = 807581L;
            }};            

            ConsentFormsUnapplyFromAppointmentResponse res = sdk.clinical.consentFormsUnapplyFromAppointment(req, new ConsentFormsUnapplyFromAppointmentSecurity("pariatur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consentFormsUpdate

Update an existing patient consent form

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsentFormsUpdateRequest;
import org.openapis.openapi.models.operations.ConsentFormsUpdateResponse;
import org.openapis.openapi.models.operations.ConsentFormsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsentFormsUpdateRequest req = new ConsentFormsUpdateRequest("soluta") {{
                doctor = 117531L;
            }};            

            ConsentFormsUpdateResponse res = sdk.clinical.consentFormsUpdate(req, new ConsentFormsUpdateSecurity("laborum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customAppointmentFieldsCreate

Create custom appointment fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsCreateRequest;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsCreateResponse;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomAppointmentFieldsCreateRequest req = new CustomAppointmentFieldsCreateRequest() {{
                doctor = 517379L;
            }};            

            CustomAppointmentFieldsCreateResponse res = sdk.clinical.customAppointmentFieldsCreate(req, new CustomAppointmentFieldsCreateSecurity("incidunt") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customAppointmentFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customAppointmentFieldsList

Retrieve or search custom appointment fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsListRequest;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsListResponse;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomAppointmentFieldsListRequest req = new CustomAppointmentFieldsListRequest() {{
                cursor = "aspernatur";
                doctor = 174909L;
                pageSize = 716860L;
            }};            

            CustomAppointmentFieldsListResponse res = sdk.clinical.customAppointmentFieldsList(req, new CustomAppointmentFieldsListSecurity("facilis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customAppointmentFieldsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customAppointmentFieldsPartialUpdate

Update an existing custom appointment field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsPartialUpdateRequest;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsPartialUpdateResponse;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomAppointmentFieldsPartialUpdateRequest req = new CustomAppointmentFieldsPartialUpdateRequest("aliquid") {{
                doctor = 463150L;
            }};            

            CustomAppointmentFieldsPartialUpdateResponse res = sdk.clinical.customAppointmentFieldsPartialUpdate(req, new CustomAppointmentFieldsPartialUpdateSecurity("molestias") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customAppointmentFieldsRead

Retrieve an existing custom appointment field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsReadRequest;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsReadResponse;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomAppointmentFieldsReadRequest req = new CustomAppointmentFieldsReadRequest("temporibus") {{
                doctor = 183280L;
            }};            

            CustomAppointmentFieldsReadResponse res = sdk.clinical.customAppointmentFieldsRead(req, new CustomAppointmentFieldsReadSecurity("neque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customAppointmentFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customAppointmentFieldsUpdate

Update an existing custom appointment field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsUpdateRequest;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsUpdateResponse;
import org.openapis.openapi.models.operations.CustomAppointmentFieldsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomAppointmentFieldsUpdateRequest req = new CustomAppointmentFieldsUpdateRequest("fugit") {{
                doctor = 164959L;
            }};            

            CustomAppointmentFieldsUpdateResponse res = sdk.clinical.customAppointmentFieldsUpdate(req, new CustomAppointmentFieldsUpdateSecurity("odio") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDemographicsCreate

Create custom demographics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDemographicsCreateRequest;
import org.openapis.openapi.models.operations.CustomDemographicsCreateResponse;
import org.openapis.openapi.models.operations.CustomDemographicsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomDemographicsCreateRequest req = new CustomDemographicsCreateRequest() {{
                doctor = 124833L;
            }};            

            CustomDemographicsCreateResponse res = sdk.clinical.customDemographicsCreate(req, new CustomDemographicsCreateSecurity("ullam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customPatientFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDemographicsList

Retrieve or search custom demographics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDemographicsListRequest;
import org.openapis.openapi.models.operations.CustomDemographicsListResponse;
import org.openapis.openapi.models.operations.CustomDemographicsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomDemographicsListRequest req = new CustomDemographicsListRequest() {{
                cursor = "nam";
                doctor = 940432L;
                pageSize = 30452L;
            }};            

            CustomDemographicsListResponse res = sdk.clinical.customDemographicsList(req, new CustomDemographicsListSecurity("cumque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customDemographicsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDemographicsPartialUpdate

Update an existing custom demographics field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDemographicsPartialUpdateRequest;
import org.openapis.openapi.models.operations.CustomDemographicsPartialUpdateResponse;
import org.openapis.openapi.models.operations.CustomDemographicsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomDemographicsPartialUpdateRequest req = new CustomDemographicsPartialUpdateRequest("soluta") {{
                doctor = 748664L;
            }};            

            CustomDemographicsPartialUpdateResponse res = sdk.clinical.customDemographicsPartialUpdate(req, new CustomDemographicsPartialUpdateSecurity("et") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDemographicsRead

Retrieve an existing custom demographics field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDemographicsReadRequest;
import org.openapis.openapi.models.operations.CustomDemographicsReadResponse;
import org.openapis.openapi.models.operations.CustomDemographicsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomDemographicsReadRequest req = new CustomDemographicsReadRequest("saepe") {{
                doctor = 217450L;
            }};            

            CustomDemographicsReadResponse res = sdk.clinical.customDemographicsRead(req, new CustomDemographicsReadSecurity("veritatis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customPatientFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customDemographicsUpdate

Update an existing custom demographics field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomDemographicsUpdateRequest;
import org.openapis.openapi.models.operations.CustomDemographicsUpdateResponse;
import org.openapis.openapi.models.operations.CustomDemographicsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomDemographicsUpdateRequest req = new CustomDemographicsUpdateRequest("nobis") {{
                doctor = 552193L;
            }};            

            CustomDemographicsUpdateResponse res = sdk.clinical.customDemographicsUpdate(req, new CustomDemographicsUpdateSecurity("tempore") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customVitalsList

Retrieve or search custom vital types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomVitalsListRequest;
import org.openapis.openapi.models.operations.CustomVitalsListResponse;
import org.openapis.openapi.models.operations.CustomVitalsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomVitalsListRequest req = new CustomVitalsListRequest() {{
                cursor = "cupiditate";
                doctor = 45614L;
                pageSize = 961937L;
            }};            

            CustomVitalsListResponse res = sdk.clinical.customVitalsList(req, new CustomVitalsListSecurity("dolorem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customVitalsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customVitalsRead

Retrieve an existing custom vital type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomVitalsReadRequest;
import org.openapis.openapi.models.operations.CustomVitalsReadResponse;
import org.openapis.openapi.models.operations.CustomVitalsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomVitalsReadRequest req = new CustomVitalsReadRequest("dolore") {{
                doctor = 286915L;
            }};            

            CustomVitalsReadResponse res = sdk.clinical.customVitalsRead(req, new CustomVitalsReadSecurity("adipisci") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customVitalType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentsCreate

Create documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentsCreateRequest;
import org.openapis.openapi.models.operations.DocumentsCreateResponse;
import org.openapis.openapi.models.operations.DocumentsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentsCreateRequest req = new DocumentsCreateRequest() {{
                doctor = 677263L;
                patient = 100294L;
                since = "quae";
            }};            

            DocumentsCreateResponse res = sdk.clinical.documentsCreate(req, new DocumentsCreateSecurity("aut") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scannedClinicalDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentsDelete

Delete an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentsDeleteRequest;
import org.openapis.openapi.models.operations.DocumentsDeleteResponse;
import org.openapis.openapi.models.operations.DocumentsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentsDeleteRequest req = new DocumentsDeleteRequest("quas") {{
                doctor = 929530L;
                patient = 9240L;
                since = "est";
            }};            

            DocumentsDeleteResponse res = sdk.clinical.documentsDelete(req, new DocumentsDeleteSecurity("repellendus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentsList

Retrieve or search documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentsListRequest;
import org.openapis.openapi.models.operations.DocumentsListResponse;
import org.openapis.openapi.models.operations.DocumentsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentsListRequest req = new DocumentsListRequest() {{
                cursor = "porro";
                doctor = 984330L;
                pageSize = 281730L;
                patient = 703495L;
                since = "cupiditate";
            }};            

            DocumentsListResponse res = sdk.clinical.documentsList(req, new DocumentsListSecurity("qui") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.documentsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentsPartialUpdate

Update an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentsPartialUpdateRequest;
import org.openapis.openapi.models.operations.DocumentsPartialUpdateResponse;
import org.openapis.openapi.models.operations.DocumentsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentsPartialUpdateRequest req = new DocumentsPartialUpdateRequest("quae") {{
                doctor = 512393L;
                patient = 485628L;
                since = "occaecati";
            }};            

            DocumentsPartialUpdateResponse res = sdk.clinical.documentsPartialUpdate(req, new DocumentsPartialUpdateSecurity("voluptatibus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentsRead

Retrieve an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentsReadRequest;
import org.openapis.openapi.models.operations.DocumentsReadResponse;
import org.openapis.openapi.models.operations.DocumentsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentsReadRequest req = new DocumentsReadRequest("quisquam") {{
                doctor = 876506L;
                patient = 606476L;
                since = "quis";
            }};            

            DocumentsReadResponse res = sdk.clinical.documentsRead(req, new DocumentsReadSecurity("ipsum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scannedClinicalDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentsUpdate

Update an existing appointment template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentsUpdateRequest;
import org.openapis.openapi.models.operations.DocumentsUpdateResponse;
import org.openapis.openapi.models.operations.DocumentsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentsUpdateRequest req = new DocumentsUpdateRequest("delectus") {{
                doctor = 455169L;
                patient = 231701L;
                since = "vero";
            }};            

            DocumentsUpdateResponse res = sdk.clinical.documentsUpdate(req, new DocumentsUpdateSecurity("tenetur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eobsCreate

Create EOB object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EobsCreateRequest;
import org.openapis.openapi.models.operations.EobsCreateResponse;
import org.openapis.openapi.models.operations.EobsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EobsCreateRequest req = new EobsCreateRequest() {{
                doctor = 492268L;
            }};            

            EobsCreateResponse res = sdk.clinical.eobsCreate(req, new EobsCreateSecurity("hic") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eobObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eobsList

Retrieve or search EOB objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EobsListRequest;
import org.openapis.openapi.models.operations.EobsListResponse;
import org.openapis.openapi.models.operations.EobsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EobsListRequest req = new EobsListRequest() {{
                cursor = "distinctio";
                doctor = 799203L;
                pageSize = 486160L;
            }};            

            EobsListResponse res = sdk.clinical.eobsList(req, new EobsListSecurity("similique") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eobsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eobsRead

Retrieve an existing EOB object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EobsReadRequest;
import org.openapis.openapi.models.operations.EobsReadResponse;
import org.openapis.openapi.models.operations.EobsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EobsReadRequest req = new EobsReadRequest("facilis") {{
                doctor = 874288L;
            }};            

            EobsReadResponse res = sdk.clinical.eobsRead(req, new EobsReadSecurity("ducimus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eobObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## feeSchedulesList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FeeSchedulesListRequest;
import org.openapis.openapi.models.operations.FeeSchedulesListResponse;
import org.openapis.openapi.models.operations.FeeSchedulesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FeeSchedulesListRequest req = new FeeSchedulesListRequest() {{
                code = "dolore";
                codeType = "quibusdam";
                cursor = "illum";
                doctor = 194342L;
                pageSize = 617877L;
                payerId = "impedit";
                since = "aut";
            }};            

            FeeSchedulesListResponse res = sdk.clinical.feeSchedulesList(req, new FeeSchedulesListSecurity("voluptatibus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feeSchedulesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## feeSchedulesRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FeeSchedulesReadRequest;
import org.openapis.openapi.models.operations.FeeSchedulesReadResponse;
import org.openapis.openapi.models.operations.FeeSchedulesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FeeSchedulesReadRequest req = new FeeSchedulesReadRequest("exercitationem") {{
                code = "nulla";
                codeType = "fugit";
                doctor = 780427L;
                payerId = "maiores";
                since = "doloribus";
            }};            

            FeeSchedulesReadResponse res = sdk.clinical.feeSchedulesRead(req, new FeeSchedulesReadSecurity("iusto") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.doctorFeeSchedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## implantableDevicesList

Retrieve or search implantable devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImplantableDevicesListRequest;
import org.openapis.openapi.models.operations.ImplantableDevicesListResponse;
import org.openapis.openapi.models.operations.ImplantableDevicesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImplantableDevicesListRequest req = new ImplantableDevicesListRequest() {{
                cursor = "eligendi";
                doctor = 497391L;
                muDate = "alias";
                muDateRange = "officia";
                pageSize = 269479L;
                patient = 368584L;
            }};            

            ImplantableDevicesListResponse res = sdk.clinical.implantableDevicesList(req, new ImplantableDevicesListSecurity("ea") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.implantableDevicesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## implantableDevicesRead

Retrieve an existing implantable device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImplantableDevicesReadRequest;
import org.openapis.openapi.models.operations.ImplantableDevicesReadResponse;
import org.openapis.openapi.models.operations.ImplantableDevicesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImplantableDevicesReadRequest req = new ImplantableDevicesReadRequest("aspernatur") {{
                doctor = 428224L;
                muDate = "possimus";
                muDateRange = "magnam";
                patient = 189848L;
            }};            

            ImplantableDevicesReadResponse res = sdk.clinical.implantableDevicesRead(req, new ImplantableDevicesReadSecurity("ex") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.implantableDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insurancesList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsurancesListRequest;
import org.openapis.openapi.models.operations.InsurancesListResponse;
import org.openapis.openapi.models.operations.InsurancesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InsurancesListRequest req = new InsurancesListRequest("laudantium") {{
                cursor = "dicta";
                pageSize = 224317L;
                term = "maiores";
            }};            

            InsurancesListResponse res = sdk.clinical.insurancesList(req, new InsurancesListSecurity("quasi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.insurancesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insurancesRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsurancesReadRequest;
import org.openapis.openapi.models.operations.InsurancesReadResponse;
import org.openapis.openapi.models.operations.InsurancesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InsurancesReadRequest req = new InsurancesReadRequest("ex", "nulla") {{
                term = "excepturi";
            }};            

            InsurancesReadResponse res = sdk.clinical.insurancesRead(req, new InsurancesReadSecurity("voluptatibus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.insurance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labDocumentsCreate

Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabDocumentsCreateRequest;
import org.openapis.openapi.models.operations.LabDocumentsCreateResponse;
import org.openapis.openapi.models.operations.LabDocumentsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabDocumentsCreateRequest req = new LabDocumentsCreateRequest() {{
                doctor = 343605L;
                since = "sapiente";
            }};            

            LabDocumentsCreateResponse res = sdk.clinical.labDocumentsCreate(req, new LabDocumentsCreateSecurity("quisquam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labOrderDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labDocumentsDelete

Delete an existing lab order document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabDocumentsDeleteRequest;
import org.openapis.openapi.models.operations.LabDocumentsDeleteResponse;
import org.openapis.openapi.models.operations.LabDocumentsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabDocumentsDeleteRequest req = new LabDocumentsDeleteRequest("saepe") {{
                doctor = 411372L;
                since = "impedit";
            }};            

            LabDocumentsDeleteResponse res = sdk.clinical.labDocumentsDelete(req, new LabDocumentsDeleteSecurity("corporis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labDocumentsList

Retrieve or search lab order documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabDocumentsListRequest;
import org.openapis.openapi.models.operations.LabDocumentsListResponse;
import org.openapis.openapi.models.operations.LabDocumentsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabDocumentsListRequest req = new LabDocumentsListRequest() {{
                cursor = "veniam";
                doctor = 399499L;
                pageSize = 81101L;
                since = "magnam";
            }};            

            LabDocumentsListResponse res = sdk.clinical.labDocumentsList(req, new LabDocumentsListSecurity("ea") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labDocumentsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labDocumentsPartialUpdate

Update an existing lab order document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabDocumentsPartialUpdateRequest;
import org.openapis.openapi.models.operations.LabDocumentsPartialUpdateResponse;
import org.openapis.openapi.models.operations.LabDocumentsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabDocumentsPartialUpdateRequest req = new LabDocumentsPartialUpdateRequest("quo") {{
                doctor = 232234L;
                since = "recusandae";
            }};            

            LabDocumentsPartialUpdateResponse res = sdk.clinical.labDocumentsPartialUpdate(req, new LabDocumentsPartialUpdateSecurity("aspernatur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labDocumentsRead

Retrieve an existing lab order document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabDocumentsReadRequest;
import org.openapis.openapi.models.operations.LabDocumentsReadResponse;
import org.openapis.openapi.models.operations.LabDocumentsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabDocumentsReadRequest req = new LabDocumentsReadRequest("minima") {{
                doctor = 53427L;
                since = "a";
            }};            

            LabDocumentsReadResponse res = sdk.clinical.labDocumentsRead(req, new LabDocumentsReadSecurity("libero") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labOrderDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labDocumentsUpdate

Update an existing lab order document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabDocumentsUpdateRequest;
import org.openapis.openapi.models.operations.LabDocumentsUpdateResponse;
import org.openapis.openapi.models.operations.LabDocumentsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabDocumentsUpdateRequest req = new LabDocumentsUpdateRequest("aut") {{
                doctor = 11427L;
                since = "deleniti";
            }};            

            LabDocumentsUpdateResponse res = sdk.clinical.labDocumentsUpdate(req, new LabDocumentsUpdateSecurity("impedit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersCreate

Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersCreateRequest;
import org.openapis.openapi.models.operations.LabOrdersCreateResponse;
import org.openapis.openapi.models.operations.LabOrdersCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersCreateRequest req = new LabOrdersCreateRequest() {{
                doctor = 304582L;
                since = "fugit";
            }};            

            LabOrdersCreateResponse res = sdk.clinical.labOrdersCreate(req, new LabOrdersCreateSecurity("accusamus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersDelete

Delete an existing lab order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersDeleteRequest;
import org.openapis.openapi.models.operations.LabOrdersDeleteResponse;
import org.openapis.openapi.models.operations.LabOrdersDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersDeleteRequest req = new LabOrdersDeleteRequest("inventore") {{
                doctor = 250622L;
                since = "et";
            }};            

            LabOrdersDeleteResponse res = sdk.clinical.labOrdersDelete(req, new LabOrdersDeleteSecurity("dolorum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersList

Retrieve or search lab orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersListRequest;
import org.openapis.openapi.models.operations.LabOrdersListResponse;
import org.openapis.openapi.models.operations.LabOrdersListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersListRequest req = new LabOrdersListRequest() {{
                cursor = "laborum";
                doctor = 810424L;
                pageSize = 245367L;
                since = "eum";
            }};            

            LabOrdersListResponse res = sdk.clinical.labOrdersList(req, new LabOrdersListSecurity("autem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labOrdersList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersPartialUpdate

Update an existing lab order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersPartialUpdateRequest;
import org.openapis.openapi.models.operations.LabOrdersPartialUpdateResponse;
import org.openapis.openapi.models.operations.LabOrdersPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersPartialUpdateRequest req = new LabOrdersPartialUpdateRequest("nobis") {{
                doctor = 557369L;
                since = "assumenda";
            }};            

            LabOrdersPartialUpdateResponse res = sdk.clinical.labOrdersPartialUpdate(req, new LabOrdersPartialUpdateSecurity("nulla") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersRead

Retrieve an existing lab order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersReadRequest;
import org.openapis.openapi.models.operations.LabOrdersReadResponse;
import org.openapis.openapi.models.operations.LabOrdersReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersReadRequest req = new LabOrdersReadRequest("voluptas") {{
                doctor = 727044L;
                since = "quasi";
            }};            

            LabOrdersReadResponse res = sdk.clinical.labOrdersRead(req, new LabOrdersReadSecurity("tempora") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersSummaryList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersSummaryListRequest;
import org.openapis.openapi.models.operations.LabOrdersSummaryListResponse;
import org.openapis.openapi.models.operations.LabOrdersSummaryListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersSummaryListRequest req = new LabOrdersSummaryListRequest() {{
                cursor = "numquam";
                doctor = 131482L;
                pageSize = 591935L;
                patient = 55374L;
                since = "molestiae";
            }};            

            LabOrdersSummaryListResponse res = sdk.clinical.labOrdersSummaryList(req, new LabOrdersSummaryListSecurity("magnam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labOrdersSummaryList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersSummaryRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersSummaryReadRequest;
import org.openapis.openapi.models.operations.LabOrdersSummaryReadResponse;
import org.openapis.openapi.models.operations.LabOrdersSummaryReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersSummaryReadRequest req = new LabOrdersSummaryReadRequest("odio") {{
                doctor = 262118L;
                patient = 458515L;
                since = "esse";
            }};            

            LabOrdersSummaryReadResponse res = sdk.clinical.labOrdersSummaryRead(req, new LabOrdersSummaryReadSecurity("rem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labOrdersUpdate

Update an existing lab order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabOrdersUpdateRequest;
import org.openapis.openapi.models.operations.LabOrdersUpdateResponse;
import org.openapis.openapi.models.operations.LabOrdersUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabOrdersUpdateRequest req = new LabOrdersUpdateRequest("fuga") {{
                doctor = 442015L;
                since = "quidem";
            }};            

            LabOrdersUpdateResponse res = sdk.clinical.labOrdersUpdate(req, new LabOrdersUpdateSecurity("fugiat") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labResultsCreate

Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabResultsCreateRequest;
import org.openapis.openapi.models.operations.LabResultsCreateResponse;
import org.openapis.openapi.models.operations.LabResultsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabResultsCreateRequest req = new LabResultsCreateRequest() {{
                doctor = 283519L;
                order = 433439L;
            }};            

            LabResultsCreateResponse res = sdk.clinical.labResultsCreate(req, new LabResultsCreateSecurity("suscipit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labResultsDelete

Delete an existing lab result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabResultsDeleteRequest;
import org.openapis.openapi.models.operations.LabResultsDeleteResponse;
import org.openapis.openapi.models.operations.LabResultsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabResultsDeleteRequest req = new LabResultsDeleteRequest("assumenda") {{
                doctor = 181151L;
                order = 509342L;
            }};            

            LabResultsDeleteResponse res = sdk.clinical.labResultsDelete(req, new LabResultsDeleteSecurity("quisquam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labResultsList

Retrieve or search lab results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabResultsListRequest;
import org.openapis.openapi.models.operations.LabResultsListResponse;
import org.openapis.openapi.models.operations.LabResultsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabResultsListRequest req = new LabResultsListRequest() {{
                cursor = "veritatis";
                doctor = 56848L;
                order = 660040L;
                pageSize = 696997L;
            }};            

            LabResultsListResponse res = sdk.clinical.labResultsList(req, new LabResultsListSecurity("neque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labResultsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labResultsPartialUpdate

Update an existing lab result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabResultsPartialUpdateRequest;
import org.openapis.openapi.models.operations.LabResultsPartialUpdateResponse;
import org.openapis.openapi.models.operations.LabResultsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabResultsPartialUpdateRequest req = new LabResultsPartialUpdateRequest("quo") {{
                doctor = 847276L;
                order = 777408L;
            }};            

            LabResultsPartialUpdateResponse res = sdk.clinical.labResultsPartialUpdate(req, new LabResultsPartialUpdateSecurity("fuga") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labResultsRead

Retrieve an existing lab result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabResultsReadRequest;
import org.openapis.openapi.models.operations.LabResultsReadResponse;
import org.openapis.openapi.models.operations.LabResultsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabResultsReadRequest req = new LabResultsReadRequest("eius") {{
                doctor = 178367L;
                order = 373813L;
            }};            

            LabResultsReadResponse res = sdk.clinical.labResultsRead(req, new LabResultsReadSecurity("ab") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labResultsUpdate

Update an existing lab result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabResultsUpdateRequest;
import org.openapis.openapi.models.operations.LabResultsUpdateResponse;
import org.openapis.openapi.models.operations.LabResultsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabResultsUpdateRequest req = new LabResultsUpdateRequest("cupiditate") {{
                doctor = 9688L;
                order = 272822L;
            }};            

            LabResultsUpdateResponse res = sdk.clinical.labResultsUpdate(req, new LabResultsUpdateSecurity("debitis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labTestsCreate

Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabTestsCreateRequest;
import org.openapis.openapi.models.operations.LabTestsCreateResponse;
import org.openapis.openapi.models.operations.LabTestsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabTestsCreateRequest req = new LabTestsCreateRequest() {{
                doctor = 370853L;
                order = 133465L;
            }};            

            LabTestsCreateResponse res = sdk.clinical.labTestsCreate(req, new LabTestsCreateSecurity("sequi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labTest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labTestsDelete

Delete an existing lab test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabTestsDeleteRequest;
import org.openapis.openapi.models.operations.LabTestsDeleteResponse;
import org.openapis.openapi.models.operations.LabTestsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabTestsDeleteRequest req = new LabTestsDeleteRequest("quo") {{
                doctor = 459856L;
                order = 925164L;
            }};            

            LabTestsDeleteResponse res = sdk.clinical.labTestsDelete(req, new LabTestsDeleteSecurity("aperiam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labTestsList

Retrieve or search lab tests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabTestsListRequest;
import org.openapis.openapi.models.operations.LabTestsListResponse;
import org.openapis.openapi.models.operations.LabTestsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabTestsListRequest req = new LabTestsListRequest() {{
                cursor = "distinctio";
                doctor = 799796L;
                order = 490819L;
                pageSize = 76956L;
            }};            

            LabTestsListResponse res = sdk.clinical.labTestsList(req, new LabTestsListSecurity("nihil") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labTestsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labTestsPartialUpdate

Update an existing lab test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabTestsPartialUpdateRequest;
import org.openapis.openapi.models.operations.LabTestsPartialUpdateResponse;
import org.openapis.openapi.models.operations.LabTestsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabTestsPartialUpdateRequest req = new LabTestsPartialUpdateRequest("totam") {{
                doctor = 882710L;
                order = 306810L;
            }};            

            LabTestsPartialUpdateResponse res = sdk.clinical.labTestsPartialUpdate(req, new LabTestsPartialUpdateSecurity("odio") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labTestsRead

Retrieve an existing lab test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabTestsReadRequest;
import org.openapis.openapi.models.operations.LabTestsReadResponse;
import org.openapis.openapi.models.operations.LabTestsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabTestsReadRequest req = new LabTestsReadRequest("occaecati") {{
                doctor = 414567L;
                order = 959434L;
            }};            

            LabTestsReadResponse res = sdk.clinical.labTestsRead(req, new LabTestsReadSecurity("dolores") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labTest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labTestsUpdate

Update an existing lab test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabTestsUpdateRequest;
import org.openapis.openapi.models.operations.LabTestsUpdateResponse;
import org.openapis.openapi.models.operations.LabTestsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LabTestsUpdateRequest req = new LabTestsUpdateRequest("deserunt") {{
                doctor = 475289L;
                order = 35362L;
            }};            

            LabTestsUpdateResponse res = sdk.clinical.labTestsUpdate(req, new LabTestsUpdateSecurity("porro") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## medicationsAppendToPharmacyNote

Append a message to the "pharmacy_note" section of the prescription, in a new paragraph

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MedicationsAppendToPharmacyNoteRequest;
import org.openapis.openapi.models.operations.MedicationsAppendToPharmacyNoteResponse;
import org.openapis.openapi.models.operations.MedicationsAppendToPharmacyNoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MedicationsAppendToPharmacyNoteRequest req = new MedicationsAppendToPharmacyNoteRequest("eum") {{
                doctor = 556429L;
                patient = 510017L;
            }};            

            MedicationsAppendToPharmacyNoteResponse res = sdk.clinical.medicationsAppendToPharmacyNote(req, new MedicationsAppendToPharmacyNoteSecurity("consequuntur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## medicationsCreate

Create patient medications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MedicationsCreateRequest;
import org.openapis.openapi.models.operations.MedicationsCreateResponse;
import org.openapis.openapi.models.operations.MedicationsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MedicationsCreateRequest req = new MedicationsCreateRequest() {{
                doctor = 536178L;
                patient = 143829L;
            }};            

            MedicationsCreateResponse res = sdk.clinical.medicationsCreate(req, new MedicationsCreateSecurity("fuga") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientDrug != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## medicationsList

Retrieve or search patient medications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MedicationsListRequest;
import org.openapis.openapi.models.operations.MedicationsListResponse;
import org.openapis.openapi.models.operations.MedicationsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MedicationsListRequest req = new MedicationsListRequest() {{
                cursor = "mollitia";
                doctor = 277596L;
                pageSize = 539224L;
                patient = 128860L;
            }};            

            MedicationsListResponse res = sdk.clinical.medicationsList(req, new MedicationsListSecurity("minima") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.medicationsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## medicationsPartialUpdate

Update an existing patient medications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MedicationsPartialUpdateRequest;
import org.openapis.openapi.models.operations.MedicationsPartialUpdateResponse;
import org.openapis.openapi.models.operations.MedicationsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MedicationsPartialUpdateRequest req = new MedicationsPartialUpdateRequest("nisi") {{
                doctor = 147014L;
                patient = 956406L;
            }};            

            MedicationsPartialUpdateResponse res = sdk.clinical.medicationsPartialUpdate(req, new MedicationsPartialUpdateSecurity("consequuntur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## medicationsRead

Retrieve an existing patient medications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MedicationsReadRequest;
import org.openapis.openapi.models.operations.MedicationsReadResponse;
import org.openapis.openapi.models.operations.MedicationsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MedicationsReadRequest req = new MedicationsReadRequest("ratione") {{
                doctor = 129412L;
                patient = 903984L;
            }};            

            MedicationsReadResponse res = sdk.clinical.medicationsRead(req, new MedicationsReadSecurity("occaecati") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientDrug != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## medicationsUpdate

Update an existing patient medications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MedicationsUpdateRequest;
import org.openapis.openapi.models.operations.MedicationsUpdateResponse;
import org.openapis.openapi.models.operations.MedicationsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MedicationsUpdateRequest req = new MedicationsUpdateRequest("atque") {{
                doctor = 92260L;
                patient = 456911L;
            }};            

            MedicationsUpdateResponse res = sdk.clinical.medicationsUpdate(req, new MedicationsUpdateSecurity("eveniet") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientCommunicationsCreate

Create patient communication for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientCommunicationsCreateRequest;
import org.openapis.openapi.models.operations.PatientCommunicationsCreateResponse;
import org.openapis.openapi.models.operations.PatientCommunicationsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientCommunicationsCreateRequest req = new PatientCommunicationsCreateRequest() {{
                doctor = 882042L;
                patient = 82971L;
            }};            

            PatientCommunicationsCreateResponse res = sdk.clinical.patientCommunicationsCreate(req, new PatientCommunicationsCreateSecurity("esse") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientCommunication != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientCommunicationsList

Retrieve or search patient communications for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientCommunicationsListRequest;
import org.openapis.openapi.models.operations.PatientCommunicationsListResponse;
import org.openapis.openapi.models.operations.PatientCommunicationsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientCommunicationsListRequest req = new PatientCommunicationsListRequest() {{
                cursor = "quod";
                doctor = 724168L;
                pageSize = 877131L;
                patient = 399025L;
            }};            

            PatientCommunicationsListResponse res = sdk.clinical.patientCommunicationsList(req, new PatientCommunicationsListSecurity("quasi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientCommunicationsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientCommunicationsPartialUpdate

Update an existing patient communication for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientCommunicationsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientCommunicationsPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientCommunicationsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientCommunicationsPartialUpdateRequest req = new PatientCommunicationsPartialUpdateRequest("saepe") {{
                doctor = 426306L;
                patient = 690025L;
            }};            

            PatientCommunicationsPartialUpdateResponse res = sdk.clinical.patientCommunicationsPartialUpdate(req, new PatientCommunicationsPartialUpdateSecurity("molestiae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientCommunicationsRead

Retrieve an existing patient communication for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientCommunicationsReadRequest;
import org.openapis.openapi.models.operations.PatientCommunicationsReadResponse;
import org.openapis.openapi.models.operations.PatientCommunicationsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientCommunicationsReadRequest req = new PatientCommunicationsReadRequest("rerum") {{
                doctor = 580197L;
                patient = 327720L;
            }};            

            PatientCommunicationsReadResponse res = sdk.clinical.patientCommunicationsRead(req, new PatientCommunicationsReadSecurity("distinctio") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientCommunication != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientCommunicationsUpdate

Update an existing patient communication for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientCommunicationsUpdateRequest;
import org.openapis.openapi.models.operations.PatientCommunicationsUpdateResponse;
import org.openapis.openapi.models.operations.PatientCommunicationsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientCommunicationsUpdateRequest req = new PatientCommunicationsUpdateRequest("eligendi") {{
                doctor = 27069L;
                patient = 636061L;
            }};            

            PatientCommunicationsUpdateResponse res = sdk.clinical.patientCommunicationsUpdate(req, new PatientCommunicationsUpdateSecurity("tempore") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientFlagTypesCreate

Create patient flag types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientFlagTypesCreateRequest;
import org.openapis.openapi.models.operations.PatientFlagTypesCreateResponse;
import org.openapis.openapi.models.operations.PatientFlagTypesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientFlagTypesCreateRequest req = new PatientFlagTypesCreateRequest() {{
                doctor = 240020L;
            }};            

            PatientFlagTypesCreateResponse res = sdk.clinical.patientFlagTypesCreate(req, new PatientFlagTypesCreateSecurity("cumque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientFlagType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientFlagTypesList

Retrieve or search patient flag types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientFlagTypesListRequest;
import org.openapis.openapi.models.operations.PatientFlagTypesListResponse;
import org.openapis.openapi.models.operations.PatientFlagTypesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientFlagTypesListRequest req = new PatientFlagTypesListRequest() {{
                cursor = "consequuntur";
                doctor = 9766L;
                pageSize = 796392L;
            }};            

            PatientFlagTypesListResponse res = sdk.clinical.patientFlagTypesList(req, new PatientFlagTypesListSecurity("quaerat") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientFlagTypesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientFlagTypesPartialUpdate

Update an existing patient flag type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientFlagTypesPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientFlagTypesPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientFlagTypesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientFlagTypesPartialUpdateRequest req = new PatientFlagTypesPartialUpdateRequest("sapiente") {{
                doctor = 232865L;
            }};            

            PatientFlagTypesPartialUpdateResponse res = sdk.clinical.patientFlagTypesPartialUpdate(req, new PatientFlagTypesPartialUpdateSecurity("esse") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientFlagTypesRead

Retrieve an existing patient flag type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientFlagTypesReadRequest;
import org.openapis.openapi.models.operations.PatientFlagTypesReadResponse;
import org.openapis.openapi.models.operations.PatientFlagTypesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientFlagTypesReadRequest req = new PatientFlagTypesReadRequest("blanditiis") {{
                doctor = 590984L;
            }};            

            PatientFlagTypesReadResponse res = sdk.clinical.patientFlagTypesRead(req, new PatientFlagTypesReadSecurity("a") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientFlagType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientFlagTypesUpdate

Update an existing patient flag type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientFlagTypesUpdateRequest;
import org.openapis.openapi.models.operations.PatientFlagTypesUpdateResponse;
import org.openapis.openapi.models.operations.PatientFlagTypesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientFlagTypesUpdateRequest req = new PatientFlagTypesUpdateRequest("nulla") {{
                doctor = 557811L;
            }};            

            PatientFlagTypesUpdateResponse res = sdk.clinical.patientFlagTypesUpdate(req, new PatientFlagTypesUpdateSecurity("esse") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientInterventionsCreate

Create patient intervention for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientInterventionsCreateRequest;
import org.openapis.openapi.models.operations.PatientInterventionsCreateResponse;
import org.openapis.openapi.models.operations.PatientInterventionsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientInterventionsCreateRequest req = new PatientInterventionsCreateRequest() {{
                doctor = 97468L;
                patient = 951875L;
            }};            

            PatientInterventionsCreateResponse res = sdk.clinical.patientInterventionsCreate(req, new PatientInterventionsCreateSecurity("error") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientIntervention != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientInterventionsList

Retrieve or search patient interventions for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientInterventionsListRequest;
import org.openapis.openapi.models.operations.PatientInterventionsListResponse;
import org.openapis.openapi.models.operations.PatientInterventionsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientInterventionsListRequest req = new PatientInterventionsListRequest() {{
                cursor = "sint";
                doctor = 863023L;
                pageSize = 820767L;
                patient = 157632L;
            }};            

            PatientInterventionsListResponse res = sdk.clinical.patientInterventionsList(req, new PatientInterventionsListSecurity("eveniet") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientInterventionsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientInterventionsPartialUpdate

Update an existing patient intervention for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientInterventionsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientInterventionsPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientInterventionsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientInterventionsPartialUpdateRequest req = new PatientInterventionsPartialUpdateRequest("asperiores") {{
                doctor = 815524L;
                patient = 85001L;
            }};            

            PatientInterventionsPartialUpdateResponse res = sdk.clinical.patientInterventionsPartialUpdate(req, new PatientInterventionsPartialUpdateSecurity("consequuntur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientInterventionsRead

Retrieve an existing patient intervention for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientInterventionsReadRequest;
import org.openapis.openapi.models.operations.PatientInterventionsReadResponse;
import org.openapis.openapi.models.operations.PatientInterventionsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientInterventionsReadRequest req = new PatientInterventionsReadRequest("quasi") {{
                doctor = 628899L;
                patient = 633608L;
            }};            

            PatientInterventionsReadResponse res = sdk.clinical.patientInterventionsRead(req, new PatientInterventionsReadSecurity("aliquid") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientIntervention != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientInterventionsUpdate

Update an existing patient intervention for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientInterventionsUpdateRequest;
import org.openapis.openapi.models.operations.PatientInterventionsUpdateResponse;
import org.openapis.openapi.models.operations.PatientInterventionsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientInterventionsUpdateRequest req = new PatientInterventionsUpdateRequest("tenetur") {{
                doctor = 62713L;
                patient = 936747L;
            }};            

            PatientInterventionsUpdateResponse res = sdk.clinical.patientInterventionsUpdate(req, new PatientInterventionsUpdateSecurity("vel") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientLabResultsCreate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientLabResultsCreateRequest;
import org.openapis.openapi.models.operations.PatientLabResultsCreateResponse;
import org.openapis.openapi.models.operations.PatientLabResultsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientLabResultsCreateRequest req = new PatientLabResultsCreateRequest() {{
                doctor = 447378L;
                orderingDoctor = 258684L;
                patient = 727697L;
                since = "illum";
            }};            

            PatientLabResultsCreateResponse res = sdk.clinical.patientLabResultsCreate(req, new PatientLabResultsCreateSecurity("soluta") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientLabResultSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientLabResultsDelete

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientLabResultsDeleteRequest;
import org.openapis.openapi.models.operations.PatientLabResultsDeleteResponse;
import org.openapis.openapi.models.operations.PatientLabResultsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientLabResultsDeleteRequest req = new PatientLabResultsDeleteRequest("accusantium") {{
                doctor = 306986L;
                orderingDoctor = 958983L;
                patient = 119771L;
                since = "ullam";
            }};            

            PatientLabResultsDeleteResponse res = sdk.clinical.patientLabResultsDelete(req, new PatientLabResultsDeleteSecurity("reprehenderit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientLabResultsList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientLabResultsListRequest;
import org.openapis.openapi.models.operations.PatientLabResultsListResponse;
import org.openapis.openapi.models.operations.PatientLabResultsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientLabResultsListRequest req = new PatientLabResultsListRequest() {{
                cursor = "ullam";
                doctor = 391774L;
                orderingDoctor = 16328L;
                pageSize = 531849L;
                patient = 185232L;
                since = "quibusdam";
            }};            

            PatientLabResultsListResponse res = sdk.clinical.patientLabResultsList(req, new PatientLabResultsListSecurity("ex") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientLabResultsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientLabResultsPartialUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientLabResultsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientLabResultsPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientLabResultsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientLabResultsPartialUpdateRequest req = new PatientLabResultsPartialUpdateRequest("deleniti") {{
                doctor = 929292L;
                orderingDoctor = 680270L;
                patient = 99615L;
                since = "omnis";
            }};            

            PatientLabResultsPartialUpdateResponse res = sdk.clinical.patientLabResultsPartialUpdate(req, new PatientLabResultsPartialUpdateSecurity("tenetur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientLabResultsRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientLabResultsReadRequest;
import org.openapis.openapi.models.operations.PatientLabResultsReadResponse;
import org.openapis.openapi.models.operations.PatientLabResultsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientLabResultsReadRequest req = new PatientLabResultsReadRequest("quasi") {{
                doctor = 869489L;
                orderingDoctor = 92027L;
                patient = 454162L;
                since = "ipsa";
            }};            

            PatientLabResultsReadResponse res = sdk.clinical.patientLabResultsRead(req, new PatientLabResultsReadSecurity("minima") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientLabResultSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientLabResultsUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientLabResultsUpdateRequest;
import org.openapis.openapi.models.operations.PatientLabResultsUpdateResponse;
import org.openapis.openapi.models.operations.PatientLabResultsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientLabResultsUpdateRequest req = new PatientLabResultsUpdateRequest("veritatis") {{
                doctor = 232744L;
                orderingDoctor = 237173L;
                patient = 614465L;
                since = "temporibus";
            }};            

            PatientLabResultsUpdateResponse res = sdk.clinical.patientLabResultsUpdate(req, new PatientLabResultsUpdateSecurity("accusantium") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientMessagesCreate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientMessagesCreateRequest;
import org.openapis.openapi.models.operations.PatientMessagesCreateResponse;
import org.openapis.openapi.models.operations.PatientMessagesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientMessagesCreateRequest req = new PatientMessagesCreateRequest() {{
                doctor = 522371L;
                patient = 15606L;
                since = "laudantium";
            }};            

            PatientMessagesCreateResponse res = sdk.clinical.patientMessagesCreate(req, new PatientMessagesCreateSecurity("eum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientMessagesList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientMessagesListRequest;
import org.openapis.openapi.models.operations.PatientMessagesListResponse;
import org.openapis.openapi.models.operations.PatientMessagesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientMessagesListRequest req = new PatientMessagesListRequest() {{
                cursor = "mollitia";
                doctor = 68074L;
                pageSize = 544591L;
                patient = 251941L;
                since = "voluptatem";
            }};            

            PatientMessagesListResponse res = sdk.clinical.patientMessagesList(req, new PatientMessagesListSecurity("dolor") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientMessagesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientMessagesPartialUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientMessagesPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientMessagesPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientMessagesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientMessagesPartialUpdateRequest req = new PatientMessagesPartialUpdateRequest("occaecati") {{
                doctor = 253191L;
                patient = 771089L;
                since = "explicabo";
            }};            

            PatientMessagesPartialUpdateResponse res = sdk.clinical.patientMessagesPartialUpdate(req, new PatientMessagesPartialUpdateSecurity("voluptas") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientMessagesRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientMessagesReadRequest;
import org.openapis.openapi.models.operations.PatientMessagesReadResponse;
import org.openapis.openapi.models.operations.PatientMessagesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientMessagesReadRequest req = new PatientMessagesReadRequest("aut") {{
                doctor = 491025L;
                patient = 115484L;
                since = "maiores";
            }};            

            PatientMessagesReadResponse res = sdk.clinical.patientMessagesRead(req, new PatientMessagesReadSecurity("natus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientMessagesUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientMessagesUpdateRequest;
import org.openapis.openapi.models.operations.PatientMessagesUpdateResponse;
import org.openapis.openapi.models.operations.PatientMessagesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientMessagesUpdateRequest req = new PatientMessagesUpdateRequest("velit") {{
                doctor = 974257L;
                patient = 374323L;
                since = "asperiores";
            }};            

            PatientMessagesUpdateResponse res = sdk.clinical.patientMessagesUpdate(req, new PatientMessagesUpdateSecurity("aperiam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPhysicalExamsCreate

Create patient physical exam for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPhysicalExamsCreateRequest;
import org.openapis.openapi.models.operations.PatientPhysicalExamsCreateResponse;
import org.openapis.openapi.models.operations.PatientPhysicalExamsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPhysicalExamsCreateRequest req = new PatientPhysicalExamsCreateRequest() {{
                doctor = 409054L;
                patient = 310067L;
            }};            

            PatientPhysicalExamsCreateResponse res = sdk.clinical.patientPhysicalExamsCreate(req, new PatientPhysicalExamsCreateSecurity("consequuntur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientPhysicalExam != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPhysicalExamsList

Retrieve or search patient physical exams for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPhysicalExamsListRequest;
import org.openapis.openapi.models.operations.PatientPhysicalExamsListResponse;
import org.openapis.openapi.models.operations.PatientPhysicalExamsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPhysicalExamsListRequest req = new PatientPhysicalExamsListRequest() {{
                cursor = "repellendus";
                doctor = 638762L;
                pageSize = 807023L;
                patient = 490305L;
            }};            

            PatientPhysicalExamsListResponse res = sdk.clinical.patientPhysicalExamsList(req, new PatientPhysicalExamsListSecurity("officia") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientPhysicalExamsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPhysicalExamsPartialUpdate

Update an existing patient physical exam for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPhysicalExamsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientPhysicalExamsPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientPhysicalExamsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPhysicalExamsPartialUpdateRequest req = new PatientPhysicalExamsPartialUpdateRequest("asperiores") {{
                doctor = 368102L;
                patient = 65304L;
            }};            

            PatientPhysicalExamsPartialUpdateResponse res = sdk.clinical.patientPhysicalExamsPartialUpdate(req, new PatientPhysicalExamsPartialUpdateSecurity("quaerat") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPhysicalExamsRead

Retrieve an existing patient physical exam for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPhysicalExamsReadRequest;
import org.openapis.openapi.models.operations.PatientPhysicalExamsReadResponse;
import org.openapis.openapi.models.operations.PatientPhysicalExamsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPhysicalExamsReadRequest req = new PatientPhysicalExamsReadRequest("porro") {{
                doctor = 801836L;
                patient = 288398L;
            }};            

            PatientPhysicalExamsReadResponse res = sdk.clinical.patientPhysicalExamsRead(req, new PatientPhysicalExamsReadSecurity("ab") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientPhysicalExam != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPhysicalExamsUpdate

Update an existing patient physical exam for CQM

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPhysicalExamsUpdateRequest;
import org.openapis.openapi.models.operations.PatientPhysicalExamsUpdateResponse;
import org.openapis.openapi.models.operations.PatientPhysicalExamsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPhysicalExamsUpdateRequest req = new PatientPhysicalExamsUpdateRequest("adipisci") {{
                doctor = 683573L;
                patient = 662505L;
            }};            

            PatientPhysicalExamsUpdateResponse res = sdk.clinical.patientPhysicalExamsUpdate(req, new PatientPhysicalExamsUpdateSecurity("suscipit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientRiskAssessmentsCreate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsCreateRequest;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsCreateResponse;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientRiskAssessmentsCreateRequest req = new PatientRiskAssessmentsCreateRequest() {{
                doctor = 246063L;
                patient = 633931L;
            }};            

            PatientRiskAssessmentsCreateResponse res = sdk.clinical.patientRiskAssessmentsCreate(req, new PatientRiskAssessmentsCreateSecurity("est") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientRiskAssessment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientRiskAssessmentsList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsListRequest;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsListResponse;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientRiskAssessmentsListRequest req = new PatientRiskAssessmentsListRequest() {{
                cursor = "recusandae";
                doctor = 517309L;
                pageSize = 853940L;
                patient = 424089L;
            }};            

            PatientRiskAssessmentsListResponse res = sdk.clinical.patientRiskAssessmentsList(req, new PatientRiskAssessmentsListSecurity("ducimus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientRiskAssessmentsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientRiskAssessmentsPartialUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientRiskAssessmentsPartialUpdateRequest req = new PatientRiskAssessmentsPartialUpdateRequest("quos") {{
                doctor = 427834L;
                patient = 287051L;
            }};            

            PatientRiskAssessmentsPartialUpdateResponse res = sdk.clinical.patientRiskAssessmentsPartialUpdate(req, new PatientRiskAssessmentsPartialUpdateSecurity("possimus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientRiskAssessmentsRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsReadRequest;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsReadResponse;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientRiskAssessmentsReadRequest req = new PatientRiskAssessmentsReadRequest("facilis") {{
                doctor = 738227L;
                patient = 414857L;
            }};            

            PatientRiskAssessmentsReadResponse res = sdk.clinical.patientRiskAssessmentsRead(req, new PatientRiskAssessmentsReadSecurity("in") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientRiskAssessment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientRiskAssessmentsUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsUpdateRequest;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsUpdateResponse;
import org.openapis.openapi.models.operations.PatientRiskAssessmentsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientRiskAssessmentsUpdateRequest req = new PatientRiskAssessmentsUpdateRequest("corporis") {{
                doctor = 968904L;
                patient = 828657L;
            }};            

            PatientRiskAssessmentsUpdateResponse res = sdk.clinical.patientRiskAssessmentsUpdate(req, new PatientRiskAssessmentsUpdateSecurity("nemo") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientVaccineRecordsCreate

Create patient vaccine records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientVaccineRecordsCreateRequest;
import org.openapis.openapi.models.operations.PatientVaccineRecordsCreateResponse;
import org.openapis.openapi.models.operations.PatientVaccineRecordsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientVaccineRecordsCreateRequest req = new PatientVaccineRecordsCreateRequest() {{
                cvxCode = "recusandae";
                doctor = 397533L;
                patient = 46007L;
                since = "cum";
            }};            

            PatientVaccineRecordsCreateResponse res = sdk.clinical.patientVaccineRecordsCreate(req, new PatientVaccineRecordsCreateSecurity("consectetur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientVaccineRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientVaccineRecordsList

Retrieve or search patient vaccine records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientVaccineRecordsListRequest;
import org.openapis.openapi.models.operations.PatientVaccineRecordsListResponse;
import org.openapis.openapi.models.operations.PatientVaccineRecordsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientVaccineRecordsListRequest req = new PatientVaccineRecordsListRequest() {{
                cursor = "in";
                cvxCode = "exercitationem";
                doctor = 937285L;
                pageSize = 814967L;
                patient = 257233L;
                since = "doloribus";
            }};            

            PatientVaccineRecordsListResponse res = sdk.clinical.patientVaccineRecordsList(req, new PatientVaccineRecordsListSecurity("suscipit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientVaccineRecordsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientVaccineRecordsPartialUpdate

Update an existing patient vaccine records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientVaccineRecordsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientVaccineRecordsPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientVaccineRecordsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientVaccineRecordsPartialUpdateRequest req = new PatientVaccineRecordsPartialUpdateRequest("reiciendis") {{
                cvxCode = "quidem";
                doctor = 904949L;
                patient = 897071L;
                since = "dolore";
            }};            

            PatientVaccineRecordsPartialUpdateResponse res = sdk.clinical.patientVaccineRecordsPartialUpdate(req, new PatientVaccineRecordsPartialUpdateSecurity("sunt") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientVaccineRecordsRead

Retrieve an existing patient vaccine records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientVaccineRecordsReadRequest;
import org.openapis.openapi.models.operations.PatientVaccineRecordsReadResponse;
import org.openapis.openapi.models.operations.PatientVaccineRecordsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientVaccineRecordsReadRequest req = new PatientVaccineRecordsReadRequest("asperiores") {{
                cvxCode = "adipisci";
                doctor = 249420L;
                patient = 228263L;
                since = "beatae";
            }};            

            PatientVaccineRecordsReadResponse res = sdk.clinical.patientVaccineRecordsRead(req, new PatientVaccineRecordsReadSecurity("dignissimos") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientVaccineRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientVaccineRecordsUpdate

Update an existing patient vaccine records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientVaccineRecordsUpdateRequest;
import org.openapis.openapi.models.operations.PatientVaccineRecordsUpdateResponse;
import org.openapis.openapi.models.operations.PatientVaccineRecordsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientVaccineRecordsUpdateRequest req = new PatientVaccineRecordsUpdateRequest("a") {{
                cvxCode = "debitis";
                doctor = 233420L;
                patient = 358107L;
                since = "harum";
            }};            

            PatientVaccineRecordsUpdateResponse res = sdk.clinical.patientVaccineRecordsUpdate(req, new PatientVaccineRecordsUpdateSecurity("laboriosam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsCcda

Retrieve patient CCDA

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsCcdaRequest;
import org.openapis.openapi.models.operations.PatientsCcdaResponse;
import org.openapis.openapi.models.operations.PatientsCcdaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsCcdaRequest req = new PatientsCcdaRequest("ipsa") {{
                chartId = "voluptates";
                dateOfBirth = "libero";
                doctor = 113816L;
                email = "Lonie37@hotmail.com";
                ethnicity = "voluptas";
                firstName = "Garland";
                gender = "female";
                lastName = "Rohan";
                preferredLanguage = "dolorum";
                race = "adipisci";
                since = "minus";
            }};            

            PatientsCcdaResponse res = sdk.clinical.patientsCcda(req, new PatientsCcdaSecurity("dolores") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsCreate

Create patient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsCreateRequest;
import org.openapis.openapi.models.operations.PatientsCreateResponse;
import org.openapis.openapi.models.operations.PatientsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsCreateRequest req = new PatientsCreateRequest() {{
                chartId = "blanditiis";
                dateOfBirth = "in";
                doctor = 296242L;
                email = "Sheldon.Smitham@gmail.com";
                ethnicity = "cum";
                firstName = "Jimmy";
                gender = "male";
                lastName = "Weissnat";
                preferredLanguage = "nesciunt";
                race = "culpa";
                since = "corrupti";
            }};            

            PatientsCreateResponse res = sdk.clinical.patientsCreate(req, new PatientsCreateSecurity("pariatur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsDelete

Delete an existing patient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsDeleteRequest;
import org.openapis.openapi.models.operations.PatientsDeleteResponse;
import org.openapis.openapi.models.operations.PatientsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsDeleteRequest req = new PatientsDeleteRequest("totam") {{
                chartId = "hic";
                dateOfBirth = "exercitationem";
                doctor = 750765L;
                email = "Maximus.Cormier99@gmail.com";
                ethnicity = "facilis";
                firstName = "Ivy";
                gender = "male";
                lastName = "Bernier";
                preferredLanguage = "iste";
                race = "dolore";
                since = "laborum";
            }};            

            PatientsDeleteResponse res = sdk.clinical.patientsDelete(req, new PatientsDeleteSecurity("sed") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsList

Retrieve or search patients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsListRequest;
import org.openapis.openapi.models.operations.PatientsListResponse;
import org.openapis.openapi.models.operations.PatientsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsListRequest req = new PatientsListRequest() {{
                chartId = "in";
                cursor = "commodi";
                dateOfBirth = "quidem";
                doctor = 131289L;
                email = "Leilani_Bradtke@yahoo.com";
                ethnicity = "debitis";
                firstName = "Antonina";
                gender = "male";
                lastName = "Aufderhar";
                pageSize = 546885L;
                preferredLanguage = "maiores";
                race = "incidunt";
                since = "sed";
            }};            

            PatientsListResponse res = sdk.clinical.patientsList(req, new PatientsListSecurity("provident") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsOnpatientAccessCreate

Send new onpatient invite to patient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessCreateRequest;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessCreateResponse;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsOnpatientAccessCreateRequest req = new PatientsOnpatientAccessCreateRequest("eius") {{
                chartId = "necessitatibus";
                dateOfBirth = "ipsum";
                doctor = 406733L;
                email = "Katrina27@yahoo.com";
                ethnicity = "voluptate";
                firstName = "Waldo";
                gender = "female";
                lastName = "Balistreri";
                preferredLanguage = "non";
                race = "officiis";
                since = "praesentium";
            }};            

            PatientsOnpatientAccessCreateResponse res = sdk.clinical.patientsOnpatientAccessCreate(req, new PatientsOnpatientAccessCreateSecurity("facilis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsOnpatientAccessDelete

Revoke sent onpatient invites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessDeleteRequest;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessDeleteResponse;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsOnpatientAccessDeleteRequest req = new PatientsOnpatientAccessDeleteRequest("quaerat") {{
                chartId = "incidunt";
                dateOfBirth = "ipsam";
                doctor = 894864L;
                email = "Aleen.Rolfson@yahoo.com";
                ethnicity = "minima";
                firstName = "Thora";
                gender = "male";
                lastName = "Stoltenberg";
                preferredLanguage = "magni";
                race = "aperiam";
                since = "saepe";
            }};            

            PatientsOnpatientAccessDeleteResponse res = sdk.clinical.patientsOnpatientAccessDelete(req, new PatientsOnpatientAccessDeleteSecurity("numquam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsOnpatientAccessRead

Retrieve or search existing onpatient access invites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessReadRequest;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessReadResponse;
import org.openapis.openapi.models.operations.PatientsOnpatientAccessReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsOnpatientAccessReadRequest req = new PatientsOnpatientAccessReadRequest("veniam") {{
                chartId = "in";
                dateOfBirth = "officiis";
                doctor = 104627L;
                email = "Faustino.Langosh68@yahoo.com";
                ethnicity = "voluptatum";
                firstName = "Lilyan";
                gender = "male";
                lastName = "Rath";
                preferredLanguage = "debitis";
                race = "neque";
                since = "dolorum";
            }};            

            PatientsOnpatientAccessReadResponse res = sdk.clinical.patientsOnpatientAccessRead(req, new PatientsOnpatientAccessReadSecurity("nostrum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsPartialUpdate

Update an existing patient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientsPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsPartialUpdateRequest req = new PatientsPartialUpdateRequest("officia") {{
                chartId = "dolorum";
                dateOfBirth = "corrupti";
                doctor = 879235L;
                email = "Karina85@gmail.com";
                ethnicity = "voluptatem";
                firstName = "Lorine";
                gender = "male";
                lastName = "Gusikowski";
                preferredLanguage = "consequatur";
                race = "esse";
                since = "ipsam";
            }};            

            PatientsPartialUpdateResponse res = sdk.clinical.patientsPartialUpdate(req, new PatientsPartialUpdateSecurity("sit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsQrda1

Retrieve patient QRDA1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsQrda1Request;
import org.openapis.openapi.models.operations.PatientsQrda1Response;
import org.openapis.openapi.models.operations.PatientsQrda1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsQrda1Request req = new PatientsQrda1Request("voluptatum") {{
                chartId = "quas";
                dateOfBirth = "repudiandae";
                doctor = 361151L;
                email = "Jo2@gmail.com";
                ethnicity = "vel";
                firstName = "Eveline";
                gender = "male";
                lastName = "Mueller";
                preferredLanguage = "consequatur";
                race = "incidunt";
                since = "reiciendis";
            }};            

            PatientsQrda1Response res = sdk.clinical.patientsQrda1(req, new PatientsQrda1Security("dolorem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsRead

Retrieve an existing patient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsReadRequest;
import org.openapis.openapi.models.operations.PatientsReadResponse;
import org.openapis.openapi.models.operations.PatientsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsReadRequest req = new PatientsReadRequest("harum") {{
                chartId = "dicta";
                dateOfBirth = "architecto";
                doctor = 577140L;
                email = "Maureen_Lind94@gmail.com";
                ethnicity = "laboriosam";
                firstName = "Abdul";
                gender = "female";
                lastName = "O'Connell";
                preferredLanguage = "voluptate";
                race = "unde";
                since = "reiciendis";
            }};            

            PatientsReadResponse res = sdk.clinical.patientsRead(req, new PatientsReadSecurity("provident") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsSummaryCreate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsSummaryCreateRequest;
import org.openapis.openapi.models.operations.PatientsSummaryCreateResponse;
import org.openapis.openapi.models.operations.PatientsSummaryCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsSummaryCreateRequest req = new PatientsSummaryCreateRequest() {{
                dateOfBirth = "repellendus";
                doctor = 962771L;
                firstName = "Tavares";
                gender = "female";
                lastName = "Orn";
                since = "quidem";
            }};            

            PatientsSummaryCreateResponse res = sdk.clinical.patientsSummaryCreate(req, new PatientsSummaryCreateSecurity("reprehenderit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsSummaryDelete

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsSummaryDeleteRequest;
import org.openapis.openapi.models.operations.PatientsSummaryDeleteResponse;
import org.openapis.openapi.models.operations.PatientsSummaryDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsSummaryDeleteRequest req = new PatientsSummaryDeleteRequest("facere") {{
                dateOfBirth = "fuga";
                doctor = 509807L;
                firstName = "Lynn";
                gender = "female";
                lastName = "Barrows";
                since = "quisquam";
            }};            

            PatientsSummaryDeleteResponse res = sdk.clinical.patientsSummaryDelete(req, new PatientsSummaryDeleteSecurity("repudiandae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsSummaryList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsSummaryListRequest;
import org.openapis.openapi.models.operations.PatientsSummaryListResponse;
import org.openapis.openapi.models.operations.PatientsSummaryListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsSummaryListRequest req = new PatientsSummaryListRequest() {{
                cursor = "quasi";
                dateOfBirth = "atque";
                doctor = 442036L;
                firstName = "Yvette";
                gender = "male";
                lastName = "Hoppe";
                pageSize = 693957L;
                since = "maxime";
            }};            

            PatientsSummaryListResponse res = sdk.clinical.patientsSummaryList(req, new PatientsSummaryListSecurity("et") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientsSummaryList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsSummaryPartialUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsSummaryPartialUpdateRequest;
import org.openapis.openapi.models.operations.PatientsSummaryPartialUpdateResponse;
import org.openapis.openapi.models.operations.PatientsSummaryPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsSummaryPartialUpdateRequest req = new PatientsSummaryPartialUpdateRequest("esse") {{
                dateOfBirth = "amet";
                doctor = 826825L;
                firstName = "Halle";
                gender = "male";
                lastName = "Mueller";
                since = "officiis";
            }};            

            PatientsSummaryPartialUpdateResponse res = sdk.clinical.patientsSummaryPartialUpdate(req, new PatientsSummaryPartialUpdateSecurity("officiis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsSummaryRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsSummaryReadRequest;
import org.openapis.openapi.models.operations.PatientsSummaryReadResponse;
import org.openapis.openapi.models.operations.PatientsSummaryReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsSummaryReadRequest req = new PatientsSummaryReadRequest("accusamus") {{
                dateOfBirth = "natus";
                doctor = 328303L;
                firstName = "Bret";
                gender = "female";
                lastName = "Wuckert";
                since = "corrupti";
            }};            

            PatientsSummaryReadResponse res = sdk.clinical.patientsSummaryRead(req, new PatientsSummaryReadSecurity("at") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsSummaryUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsSummaryUpdateRequest;
import org.openapis.openapi.models.operations.PatientsSummaryUpdateResponse;
import org.openapis.openapi.models.operations.PatientsSummaryUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsSummaryUpdateRequest req = new PatientsSummaryUpdateRequest("error") {{
                dateOfBirth = "blanditiis";
                doctor = 379356L;
                firstName = "Theodore";
                gender = "male";
                lastName = "Littel";
                since = "sunt";
            }};            

            PatientsSummaryUpdateResponse res = sdk.clinical.patientsSummaryUpdate(req, new PatientsSummaryUpdateSecurity("recusandae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientsUpdate

Update an existing patient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientsUpdateRequest;
import org.openapis.openapi.models.operations.PatientsUpdateResponse;
import org.openapis.openapi.models.operations.PatientsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientsUpdateRequest req = new PatientsUpdateRequest("dolorum") {{
                chartId = "repellendus";
                dateOfBirth = "labore";
                doctor = 968287L;
                email = "Tevin10@gmail.com";
                ethnicity = "dolores";
                firstName = "Emil";
                gender = "female";
                lastName = "Franecki";
                preferredLanguage = "a";
                race = "molestias";
                since = "magnam";
            }};            

            PatientsUpdateResponse res = sdk.clinical.patientsUpdate(req, new PatientsUpdateSecurity("saepe") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prescriptionMessagesList

Retrieve or search prescription messages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrescriptionMessagesListRequest;
import org.openapis.openapi.models.operations.PrescriptionMessagesListResponse;
import org.openapis.openapi.models.operations.PrescriptionMessagesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrescriptionMessagesListRequest req = new PrescriptionMessagesListRequest() {{
                cursor = "consequuntur";
                doctor = 580107L;
                pageSize = 886305L;
                parentMessage = 597937L;
                patient = 446394L;
                since = "adipisci";
            }};            

            PrescriptionMessagesListResponse res = sdk.clinical.prescriptionMessagesList(req, new PrescriptionMessagesListSecurity("eveniet") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.prescriptionMessagesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prescriptionMessagesRead

Retrieve an existing prescription message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrescriptionMessagesReadRequest;
import org.openapis.openapi.models.operations.PrescriptionMessagesReadResponse;
import org.openapis.openapi.models.operations.PrescriptionMessagesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrescriptionMessagesReadRequest req = new PrescriptionMessagesReadRequest("occaecati") {{
                doctor = 160230L;
                parentMessage = 145870L;
                patient = 661118L;
                since = "quis";
            }};            

            PrescriptionMessagesReadResponse res = sdk.clinical.prescriptionMessagesRead(req, new PrescriptionMessagesReadSecurity("reprehenderit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.prescriptionMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## problemsCreate

Create patient problems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProblemsCreateRequest;
import org.openapis.openapi.models.operations.ProblemsCreateResponse;
import org.openapis.openapi.models.operations.ProblemsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProblemsCreateRequest req = new ProblemsCreateRequest() {{
                doctor = 625528L;
                patient = 76486L;
            }};            

            ProblemsCreateResponse res = sdk.clinical.problemsCreate(req, new ProblemsCreateSecurity("corporis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientProblem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## problemsList

Retrieve or search patient problems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProblemsListRequest;
import org.openapis.openapi.models.operations.ProblemsListResponse;
import org.openapis.openapi.models.operations.ProblemsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProblemsListRequest req = new ProblemsListRequest() {{
                cursor = "quidem";
                doctor = 910994L;
                pageSize = 247399L;
                patient = 878493L;
            }};            

            ProblemsListResponse res = sdk.clinical.problemsList(req, new ProblemsListSecurity("doloremque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.problemsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## problemsPartialUpdate

Update an existing patient problems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProblemsPartialUpdateRequest;
import org.openapis.openapi.models.operations.ProblemsPartialUpdateResponse;
import org.openapis.openapi.models.operations.ProblemsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProblemsPartialUpdateRequest req = new ProblemsPartialUpdateRequest("iure") {{
                doctor = 59944L;
                patient = 517612L;
            }};            

            ProblemsPartialUpdateResponse res = sdk.clinical.problemsPartialUpdate(req, new ProblemsPartialUpdateSecurity("quae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## problemsRead

Retrieve an existing patient problems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProblemsReadRequest;
import org.openapis.openapi.models.operations.ProblemsReadResponse;
import org.openapis.openapi.models.operations.ProblemsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProblemsReadRequest req = new ProblemsReadRequest("molestiae") {{
                doctor = 907733L;
                patient = 184362L;
            }};            

            ProblemsReadResponse res = sdk.clinical.problemsRead(req, new ProblemsReadSecurity("cum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientProblem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## problemsUpdate

Update an existing patient problems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProblemsUpdateRequest;
import org.openapis.openapi.models.operations.ProblemsUpdateResponse;
import org.openapis.openapi.models.operations.ProblemsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProblemsUpdateRequest req = new ProblemsUpdateRequest("iure") {{
                doctor = 898063L;
                patient = 187552L;
            }};            

            ProblemsUpdateResponse res = sdk.clinical.problemsUpdate(req, new ProblemsUpdateSecurity("laborum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reminderProfilesCreate

Create reminder profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReminderProfilesCreateRequest;
import org.openapis.openapi.models.operations.ReminderProfilesCreateResponse;
import org.openapis.openapi.models.operations.ReminderProfilesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReminderProfilesCreateRequest req = new ReminderProfilesCreateRequest() {{
                doctor = 715208L;
            }};            

            ReminderProfilesCreateResponse res = sdk.clinical.reminderProfilesCreate(req, new ReminderProfilesCreateSecurity("voluptatum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reminderProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reminderProfilesDelete

Delete an existing reminder profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReminderProfilesDeleteRequest;
import org.openapis.openapi.models.operations.ReminderProfilesDeleteResponse;
import org.openapis.openapi.models.operations.ReminderProfilesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReminderProfilesDeleteRequest req = new ReminderProfilesDeleteRequest("rem") {{
                doctor = 304446L;
            }};            

            ReminderProfilesDeleteResponse res = sdk.clinical.reminderProfilesDelete(req, new ReminderProfilesDeleteSecurity("ad") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reminderProfilesList

Retrieve or search reminder profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReminderProfilesListRequest;
import org.openapis.openapi.models.operations.ReminderProfilesListResponse;
import org.openapis.openapi.models.operations.ReminderProfilesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReminderProfilesListRequest req = new ReminderProfilesListRequest() {{
                cursor = "repellat";
                doctor = 3099L;
                pageSize = 362189L;
            }};            

            ReminderProfilesListResponse res = sdk.clinical.reminderProfilesList(req, new ReminderProfilesListSecurity("perspiciatis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reminderProfilesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reminderProfilesPartialUpdate

Update an existing reminder profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReminderProfilesPartialUpdateRequest;
import org.openapis.openapi.models.operations.ReminderProfilesPartialUpdateResponse;
import org.openapis.openapi.models.operations.ReminderProfilesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReminderProfilesPartialUpdateRequest req = new ReminderProfilesPartialUpdateRequest("nihil") {{
                doctor = 649078L;
            }};            

            ReminderProfilesPartialUpdateResponse res = sdk.clinical.reminderProfilesPartialUpdate(req, new ReminderProfilesPartialUpdateSecurity("voluptas") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reminderProfilesRead

Retrieve an existing reminder profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReminderProfilesReadRequest;
import org.openapis.openapi.models.operations.ReminderProfilesReadResponse;
import org.openapis.openapi.models.operations.ReminderProfilesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReminderProfilesReadRequest req = new ReminderProfilesReadRequest("alias") {{
                doctor = 979527L;
            }};            

            ReminderProfilesReadResponse res = sdk.clinical.reminderProfilesRead(req, new ReminderProfilesReadSecurity("reiciendis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reminderProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reminderProfilesUpdate

Update an existing reminder profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReminderProfilesUpdateRequest;
import org.openapis.openapi.models.operations.ReminderProfilesUpdateResponse;
import org.openapis.openapi.models.operations.ReminderProfilesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReminderProfilesUpdateRequest req = new ReminderProfilesUpdateRequest("dolores") {{
                doctor = 663866L;
            }};            

            ReminderProfilesUpdateResponse res = sdk.clinical.reminderProfilesUpdate(req, new ReminderProfilesUpdateSecurity("minima") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sublabsCreate

Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SublabsCreateResponse;
import org.openapis.openapi.models.operations.SublabsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SublabsCreateResponse res = sdk.clinical.sublabsCreate(new SublabsCreateSecurity("dolore") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labVendorLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sublabsDelete

Delete an existing sub vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SublabsDeleteRequest;
import org.openapis.openapi.models.operations.SublabsDeleteResponse;
import org.openapis.openapi.models.operations.SublabsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SublabsDeleteRequest req = new SublabsDeleteRequest(680349L);            

            SublabsDeleteResponse res = sdk.clinical.sublabsDelete(req, new SublabsDeleteSecurity("nesciunt") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sublabsList

Retrieve or search sub vendors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SublabsListRequest;
import org.openapis.openapi.models.operations.SublabsListResponse;
import org.openapis.openapi.models.operations.SublabsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SublabsListRequest req = new SublabsListRequest() {{
                cursor = "quae";
                pageSize = 925703L;
            }};            

            SublabsListResponse res = sdk.clinical.sublabsList(req, new SublabsListSecurity("omnis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sublabsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sublabsPartialUpdate

Update an existing sub vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SublabsPartialUpdateRequest;
import org.openapis.openapi.models.operations.SublabsPartialUpdateResponse;
import org.openapis.openapi.models.operations.SublabsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SublabsPartialUpdateRequest req = new SublabsPartialUpdateRequest(309251L);            

            SublabsPartialUpdateResponse res = sdk.clinical.sublabsPartialUpdate(req, new SublabsPartialUpdateSecurity("molestiae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sublabsRead

Retrieve an existing sub vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SublabsReadRequest;
import org.openapis.openapi.models.operations.SublabsReadResponse;
import org.openapis.openapi.models.operations.SublabsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SublabsReadRequest req = new SublabsReadRequest(403218L);            

            SublabsReadResponse res = sdk.clinical.sublabsRead(req, new SublabsReadSecurity("ut") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labVendorLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sublabsUpdate

Update an existing sub vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SublabsUpdateRequest;
import org.openapis.openapi.models.operations.SublabsUpdateResponse;
import org.openapis.openapi.models.operations.SublabsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SublabsUpdateRequest req = new SublabsUpdateRequest(633062L);            

            SublabsUpdateResponse res = sdk.clinical.sublabsUpdate(req, new SublabsUpdateSecurity("adipisci") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
