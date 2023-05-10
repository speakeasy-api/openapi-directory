# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoctorsListRequest();
    $request->cursor = 'corrupti';
    $request->doctor = 592845;
    $request->pageSize = 715190;

    $requestSecurity = new DoctorsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->doctorsList($request, $requestSecurity);

    if ($response->doctorsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [administrative](docs/administrative/README.md)

* [doctorsList](docs/administrative/README.md#doctorslist) - Retrieve or search doctors within practice group
* [doctorsRead](docs/administrative/README.md#doctorsread) - Retrieve an existing dcotor
* [userGroupsList](docs/administrative/README.md#usergroupslist) - Retrieve or search user groups
* [userGroupsRead](docs/administrative/README.md#usergroupsread) - Retrieve an existing user group
* [usersList](docs/administrative/README.md#userslist) - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
* [usersRead](docs/administrative/README.md#usersread) - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### [billing](docs/billing/README.md)

* [billingProfilesList](docs/billing/README.md#billingprofileslist) - Retrieve or search billing profiles
* [billingProfilesRead](docs/billing/README.md#billingprofilesread) - Retrieve an existing billing profiles
* [commLogsCreate](docs/billing/README.md#commlogscreate) - Create communication (phone call) logs
* [commLogsList](docs/billing/README.md#commlogslist) - Retrieve or search communicatioin (phone call) logs
* [commLogsPartialUpdate](docs/billing/README.md#commlogspartialupdate) - Update an existing communication (phone call) logs
* [commLogsRead](docs/billing/README.md#commlogsread) - Retrieve an existing communication (phone call) logs
* [commLogsUpdate](docs/billing/README.md#commlogsupdate) - Update an existing communication (phone call) logs
* [customInsurancePlanNamesList](docs/billing/README.md#custominsuranceplannameslist) - Retrieve or search custom insurance plan names
* [customInsurancePlanNamesRead](docs/billing/README.md#custominsuranceplannamesread) - Retrieve an existing custom insurance plan name
* [eligibilityChecksList](docs/billing/README.md#eligibilitycheckslist) - Retrieve or search past eligibility checks for patient
* [eligibilityChecksRead](docs/billing/README.md#eligibilitychecksread) - Retrieve an existing past eligibility check
* [lineItemsCreate](docs/billing/README.md#lineitemscreate) - Create billing line item for appointments
* [lineItemsDelete](docs/billing/README.md#lineitemsdelete)
* [lineItemsList](docs/billing/README.md#lineitemslist) - Retrieve or search billing line items
* [lineItemsPartialUpdate](docs/billing/README.md#lineitemspartialupdate)
* [lineItemsRead](docs/billing/README.md#lineitemsread) - Retrieve an existing billing line item
* [lineItemsUpdate](docs/billing/README.md#lineitemsupdate)
* [patientPaymentLogList](docs/billing/README.md#patientpaymentloglist) - Retrieve or search patient payment logs
* [patientPaymentLogRead](docs/billing/README.md#patientpaymentlogread) - Retrieve an existing patient payment log
* [patientPaymentsCreate](docs/billing/README.md#patientpaymentscreate) - Create patient payment
* [patientPaymentsList](docs/billing/README.md#patientpaymentslist) - Retrieve or search patient payments
* [patientPaymentsRead](docs/billing/README.md#patientpaymentsread) - Retrieve an existing patient payment
* [proceduresList](docs/billing/README.md#procedureslist)
* [proceduresRead](docs/billing/README.md#proceduresread)
* [transactionsList](docs/billing/README.md#transactionslist) - Retrieve or search insurance transactions associated with billing line items
* [transactionsRead](docs/billing/README.md#transactionsread) - Retrieve an existing insurance transaction

### [clinical](docs/clinical/README.md)

* [allergiesCreate](docs/clinical/README.md#allergiescreate) - Create patient allergy
* [allergiesList](docs/clinical/README.md#allergieslist) - Retrieve or search patient allergies
* [allergiesPartialUpdate](docs/clinical/README.md#allergiespartialupdate) - Update an existing patient allergy
* [allergiesRead](docs/clinical/README.md#allergiesread) - Retrieve an existing patient allergy
* [allergiesUpdate](docs/clinical/README.md#allergiesupdate) - Update an existing patient allergy
* [amendmentsCreate](docs/clinical/README.md#amendmentscreate) - Create patient amendments to a patient's clinical records
* [amendmentsDelete](docs/clinical/README.md#amendmentsdelete) - Delete an existing patient amendment, you can only interact with amendments created by your API application
* [amendmentsList](docs/clinical/README.md#amendmentslist) - Retrieve or search patient amendments. You can only interact with amendments created by your API application
* [amendmentsPartialUpdate](docs/clinical/README.md#amendmentspartialupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [amendmentsRead](docs/clinical/README.md#amendmentsread) - Retrieve an existing patient amendment, you can only interact with amendments created by your API application
* [amendmentsUpdate](docs/clinical/README.md#amendmentsupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [appointmentProfilesCreate](docs/clinical/README.md#appointmentprofilescreate) - Create appointment profiles for a doctor's calendar
* [appointmentProfilesDelete](docs/clinical/README.md#appointmentprofilesdelete) - Delete an existing appointment profile
* [appointmentProfilesList](docs/clinical/README.md#appointmentprofileslist) - Retrieve or search appointment profiles for a doctor's calendar
* [appointmentProfilesPartialUpdate](docs/clinical/README.md#appointmentprofilespartialupdate) - Update an existing appointment profile
* [appointmentProfilesRead](docs/clinical/README.md#appointmentprofilesread) - Retrieve an existing appointment profile
* [appointmentProfilesUpdate](docs/clinical/README.md#appointmentprofilesupdate) - Update an existing appointment profile
* [appointmentTemplatesCreate](docs/clinical/README.md#appointmenttemplatescreate) - Create appointment templates for a doctor's calendar
* [appointmentTemplatesDelete](docs/clinical/README.md#appointmenttemplatesdelete) - Delete an existing appointment template
* [appointmentTemplatesList](docs/clinical/README.md#appointmenttemplateslist) - Retrieve or search appointment templates for a doctor's calendar
* [appointmentTemplatesPartialUpdate](docs/clinical/README.md#appointmenttemplatespartialupdate) - Update an existing appointment template
* [appointmentTemplatesRead](docs/clinical/README.md#appointmenttemplatesread) - Retrieve an existing appointment template
* [appointmentTemplatesUpdate](docs/clinical/README.md#appointmenttemplatesupdate) - Update an existing appointment template
* [appointmentsCreate](docs/clinical/README.md#appointmentscreate) - Create a new appointment or break on doctor's calendar
* [appointmentsDelete](docs/clinical/README.md#appointmentsdelete) - Delete an existing appointment or break
* [appointmentsList](docs/clinical/README.md#appointmentslist) - Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            
* [appointmentsPartialUpdate](docs/clinical/README.md#appointmentspartialupdate) - Update an existing appointment or break
* [appointmentsRead](docs/clinical/README.md#appointmentsread) - Retrieve an existing appointment or break
* [appointmentsUpdate](docs/clinical/README.md#appointmentsupdate) - Update an existing appointment or break
* [carePlansList](docs/clinical/README.md#careplanslist) - Retrieve or search care plans
* [carePlansRead](docs/clinical/README.md#careplansread) - Retrieve an existing care plan
* [careTeamMembersList](docs/clinical/README.md#careteammemberslist)
* [careTeamMembersRead](docs/clinical/README.md#careteammembersread)
* [claimBillingNotesCreate](docs/clinical/README.md#claimbillingnotescreate) - Create a new billing note
* [claimBillingNotesList](docs/clinical/README.md#claimbillingnoteslist) - Retrieve or search billing notes
* [claimBillingNotesRead](docs/clinical/README.md#claimbillingnotesread) - Retrieve an existing billing note
* [clinicalNoteFieldTypesList](docs/clinical/README.md#clinicalnotefieldtypeslist) - Retrieve or search clinical note field types
* [clinicalNoteFieldTypesRead](docs/clinical/README.md#clinicalnotefieldtypesread) - Retrieve an existing clinial note field type
* [clinicalNoteFieldValuesCreate](docs/clinical/README.md#clinicalnotefieldvaluescreate) - Create clinical note field value
* [clinicalNoteFieldValuesList](docs/clinical/README.md#clinicalnotefieldvalueslist) - Retrieve or search clinical note field values
* [clinicalNoteFieldValuesPartialUpdate](docs/clinical/README.md#clinicalnotefieldvaluespartialupdate) - Update an existing clinical note field value
* [clinicalNoteFieldValuesRead](docs/clinical/README.md#clinicalnotefieldvaluesread) - Retrieve an existing clinical note field value
* [clinicalNoteFieldValuesUpdate](docs/clinical/README.md#clinicalnotefieldvaluesupdate) - Update an existing clinical note field value
* [clinicalNoteTemplatesList](docs/clinical/README.md#clinicalnotetemplateslist) - Retrieve or search clinical note templates
* [clinicalNoteTemplatesRead](docs/clinical/README.md#clinicalnotetemplatesread) - Retrieve an existing clinical note tempalte
* [clinicalNotesList](docs/clinical/README.md#clinicalnoteslist)
* [clinicalNotesRead](docs/clinical/README.md#clinicalnotesread)
* [consentFormsApplyToAppointment](docs/clinical/README.md#consentformsapplytoappointment) - Assign (apply) a consent form to appointment
* [consentFormsCreate](docs/clinical/README.md#consentformscreate) - Create a patient consent form
* [consentFormsList](docs/clinical/README.md#consentformslist) - Retrieve or search patient consent forms
* [consentFormsPartialUpdate](docs/clinical/README.md#consentformspartialupdate) - Update an existing patient consent form
* [consentFormsRead](docs/clinical/README.md#consentformsread) - Retrieve an existing patient consent form
* [consentFormsUnapplyFromAppointment](docs/clinical/README.md#consentformsunapplyfromappointment) - Unassign (unapply) a consent form from appointment
* [consentFormsUpdate](docs/clinical/README.md#consentformsupdate) - Update an existing patient consent form
* [customAppointmentFieldsCreate](docs/clinical/README.md#customappointmentfieldscreate) - Create custom appointment fields
* [customAppointmentFieldsList](docs/clinical/README.md#customappointmentfieldslist) - Retrieve or search custom appointment fields
* [customAppointmentFieldsPartialUpdate](docs/clinical/README.md#customappointmentfieldspartialupdate) - Update an existing custom appointment field
* [customAppointmentFieldsRead](docs/clinical/README.md#customappointmentfieldsread) - Retrieve an existing custom appointment field
* [customAppointmentFieldsUpdate](docs/clinical/README.md#customappointmentfieldsupdate) - Update an existing custom appointment field
* [customDemographicsCreate](docs/clinical/README.md#customdemographicscreate) - Create custom demographics fields
* [customDemographicsList](docs/clinical/README.md#customdemographicslist) - Retrieve or search custom demographics fields
* [customDemographicsPartialUpdate](docs/clinical/README.md#customdemographicspartialupdate) - Update an existing custom demographics field
* [customDemographicsRead](docs/clinical/README.md#customdemographicsread) - Retrieve an existing custom demographics field
* [customDemographicsUpdate](docs/clinical/README.md#customdemographicsupdate) - Update an existing custom demographics field
* [customVitalsList](docs/clinical/README.md#customvitalslist) - Retrieve or search custom vital types
* [customVitalsRead](docs/clinical/README.md#customvitalsread) - Retrieve an existing custom vital type
* [documentsCreate](docs/clinical/README.md#documentscreate) - Create documents
* [documentsDelete](docs/clinical/README.md#documentsdelete) - Delete an existing appointment template
* [documentsList](docs/clinical/README.md#documentslist) - Retrieve or search documents
* [documentsPartialUpdate](docs/clinical/README.md#documentspartialupdate) - Update an existing appointment template
* [documentsRead](docs/clinical/README.md#documentsread) - Retrieve an existing appointment template
* [documentsUpdate](docs/clinical/README.md#documentsupdate) - Update an existing appointment template
* [eobsCreate](docs/clinical/README.md#eobscreate) - Create EOB object
* [eobsList](docs/clinical/README.md#eobslist) - Retrieve or search EOB objects
* [eobsRead](docs/clinical/README.md#eobsread) - Retrieve an existing EOB object
* [feeSchedulesList](docs/clinical/README.md#feescheduleslist)
* [feeSchedulesRead](docs/clinical/README.md#feeschedulesread)
* [implantableDevicesList](docs/clinical/README.md#implantabledeviceslist) - Retrieve or search implantable devices
* [implantableDevicesRead](docs/clinical/README.md#implantabledevicesread) - Retrieve an existing implantable device
* [insurancesList](docs/clinical/README.md#insuranceslist)
* [insurancesRead](docs/clinical/README.md#insurancesread)
* [labDocumentsCreate](docs/clinical/README.md#labdocumentscreate) - Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labDocumentsDelete](docs/clinical/README.md#labdocumentsdelete) - Delete an existing lab order document
* [labDocumentsList](docs/clinical/README.md#labdocumentslist) - Retrieve or search lab order documents
* [labDocumentsPartialUpdate](docs/clinical/README.md#labdocumentspartialupdate) - Update an existing lab order document
* [labDocumentsRead](docs/clinical/README.md#labdocumentsread) - Retrieve an existing lab order document
* [labDocumentsUpdate](docs/clinical/README.md#labdocumentsupdate) - Update an existing lab order document
* [labOrdersCreate](docs/clinical/README.md#laborderscreate) - Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labOrdersDelete](docs/clinical/README.md#labordersdelete) - Delete an existing lab order
* [labOrdersList](docs/clinical/README.md#laborderslist) - Retrieve or search lab orders
* [labOrdersPartialUpdate](docs/clinical/README.md#laborderspartialupdate) - Update an existing lab order
* [labOrdersRead](docs/clinical/README.md#labordersread) - Retrieve an existing lab order
* [labOrdersSummaryList](docs/clinical/README.md#laborderssummarylist)
* [labOrdersSummaryRead](docs/clinical/README.md#laborderssummaryread)
* [labOrdersUpdate](docs/clinical/README.md#labordersupdate) - Update an existing lab order
* [labResultsCreate](docs/clinical/README.md#labresultscreate) - Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labResultsDelete](docs/clinical/README.md#labresultsdelete) - Delete an existing lab result
* [labResultsList](docs/clinical/README.md#labresultslist) - Retrieve or search lab results
* [labResultsPartialUpdate](docs/clinical/README.md#labresultspartialupdate) - Update an existing lab result
* [labResultsRead](docs/clinical/README.md#labresultsread) - Retrieve an existing lab result
* [labResultsUpdate](docs/clinical/README.md#labresultsupdate) - Update an existing lab result
* [labTestsCreate](docs/clinical/README.md#labtestscreate) - Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [labTestsDelete](docs/clinical/README.md#labtestsdelete) - Delete an existing lab test
* [labTestsList](docs/clinical/README.md#labtestslist) - Retrieve or search lab tests
* [labTestsPartialUpdate](docs/clinical/README.md#labtestspartialupdate) - Update an existing lab test
* [labTestsRead](docs/clinical/README.md#labtestsread) - Retrieve an existing lab test
* [labTestsUpdate](docs/clinical/README.md#labtestsupdate) - Update an existing lab test
* [medicationsAppendToPharmacyNote](docs/clinical/README.md#medicationsappendtopharmacynote) - Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
* [medicationsCreate](docs/clinical/README.md#medicationscreate) - Create patient medications
* [medicationsList](docs/clinical/README.md#medicationslist) - Retrieve or search patient medications
* [medicationsPartialUpdate](docs/clinical/README.md#medicationspartialupdate) - Update an existing patient medications
* [medicationsRead](docs/clinical/README.md#medicationsread) - Retrieve an existing patient medications
* [medicationsUpdate](docs/clinical/README.md#medicationsupdate) - Update an existing patient medications
* [patientCommunicationsCreate](docs/clinical/README.md#patientcommunicationscreate) - Create patient communication for CQM
* [patientCommunicationsList](docs/clinical/README.md#patientcommunicationslist) - Retrieve or search patient communications for CQM
* [patientCommunicationsPartialUpdate](docs/clinical/README.md#patientcommunicationspartialupdate) - Update an existing patient communication for CQM
* [patientCommunicationsRead](docs/clinical/README.md#patientcommunicationsread) - Retrieve an existing patient communication for CQM
* [patientCommunicationsUpdate](docs/clinical/README.md#patientcommunicationsupdate) - Update an existing patient communication for CQM
* [patientFlagTypesCreate](docs/clinical/README.md#patientflagtypescreate) - Create patient flag types
* [patientFlagTypesList](docs/clinical/README.md#patientflagtypeslist) - Retrieve or search patient flag types
* [patientFlagTypesPartialUpdate](docs/clinical/README.md#patientflagtypespartialupdate) - Update an existing patient flag type
* [patientFlagTypesRead](docs/clinical/README.md#patientflagtypesread) - Retrieve an existing patient flag type
* [patientFlagTypesUpdate](docs/clinical/README.md#patientflagtypesupdate) - Update an existing patient flag type
* [patientInterventionsCreate](docs/clinical/README.md#patientinterventionscreate) - Create patient intervention for CQM
* [patientInterventionsList](docs/clinical/README.md#patientinterventionslist) - Retrieve or search patient interventions for CQM
* [patientInterventionsPartialUpdate](docs/clinical/README.md#patientinterventionspartialupdate) - Update an existing patient intervention for CQM
* [patientInterventionsRead](docs/clinical/README.md#patientinterventionsread) - Retrieve an existing patient intervention for CQM
* [patientInterventionsUpdate](docs/clinical/README.md#patientinterventionsupdate) - Update an existing patient intervention for CQM
* [patientLabResultsCreate](docs/clinical/README.md#patientlabresultscreate)
* [patientLabResultsDelete](docs/clinical/README.md#patientlabresultsdelete)
* [patientLabResultsList](docs/clinical/README.md#patientlabresultslist)
* [patientLabResultsPartialUpdate](docs/clinical/README.md#patientlabresultspartialupdate)
* [patientLabResultsRead](docs/clinical/README.md#patientlabresultsread)
* [patientLabResultsUpdate](docs/clinical/README.md#patientlabresultsupdate)
* [patientMessagesCreate](docs/clinical/README.md#patientmessagescreate)
* [patientMessagesList](docs/clinical/README.md#patientmessageslist)
* [patientMessagesPartialUpdate](docs/clinical/README.md#patientmessagespartialupdate)
* [patientMessagesRead](docs/clinical/README.md#patientmessagesread)
* [patientMessagesUpdate](docs/clinical/README.md#patientmessagesupdate)
* [patientPhysicalExamsCreate](docs/clinical/README.md#patientphysicalexamscreate) - Create patient physical exam for CQM
* [patientPhysicalExamsList](docs/clinical/README.md#patientphysicalexamslist) - Retrieve or search patient physical exams for CQM
* [patientPhysicalExamsPartialUpdate](docs/clinical/README.md#patientphysicalexamspartialupdate) - Update an existing patient physical exam for CQM
* [patientPhysicalExamsRead](docs/clinical/README.md#patientphysicalexamsread) - Retrieve an existing patient physical exam for CQM
* [patientPhysicalExamsUpdate](docs/clinical/README.md#patientphysicalexamsupdate) - Update an existing patient physical exam for CQM
* [patientRiskAssessmentsCreate](docs/clinical/README.md#patientriskassessmentscreate)
* [patientRiskAssessmentsList](docs/clinical/README.md#patientriskassessmentslist)
* [patientRiskAssessmentsPartialUpdate](docs/clinical/README.md#patientriskassessmentspartialupdate)
* [patientRiskAssessmentsRead](docs/clinical/README.md#patientriskassessmentsread)
* [patientRiskAssessmentsUpdate](docs/clinical/README.md#patientriskassessmentsupdate)
* [patientVaccineRecordsCreate](docs/clinical/README.md#patientvaccinerecordscreate) - Create patient vaccine records
* [patientVaccineRecordsList](docs/clinical/README.md#patientvaccinerecordslist) - Retrieve or search patient vaccine records
* [patientVaccineRecordsPartialUpdate](docs/clinical/README.md#patientvaccinerecordspartialupdate) - Update an existing patient vaccine records
* [patientVaccineRecordsRead](docs/clinical/README.md#patientvaccinerecordsread) - Retrieve an existing patient vaccine records
* [patientVaccineRecordsUpdate](docs/clinical/README.md#patientvaccinerecordsupdate) - Update an existing patient vaccine records
* [patientsCcda](docs/clinical/README.md#patientsccda) - Retrieve patient CCDA
* [patientsCreate](docs/clinical/README.md#patientscreate) - Create patient
* [patientsDelete](docs/clinical/README.md#patientsdelete) - Delete an existing patient
* [patientsList](docs/clinical/README.md#patientslist) - Retrieve or search patients
* [patientsOnpatientAccessCreate](docs/clinical/README.md#patientsonpatientaccesscreate) - Send new onpatient invite to patient
* [patientsOnpatientAccessDelete](docs/clinical/README.md#patientsonpatientaccessdelete) - Revoke sent onpatient invites
* [patientsOnpatientAccessRead](docs/clinical/README.md#patientsonpatientaccessread) - Retrieve or search existing onpatient access invites
* [patientsPartialUpdate](docs/clinical/README.md#patientspartialupdate) - Update an existing patient
* [patientsQrda1](docs/clinical/README.md#patientsqrda1) - Retrieve patient QRDA1
* [patientsRead](docs/clinical/README.md#patientsread) - Retrieve an existing patient
* [patientsSummaryCreate](docs/clinical/README.md#patientssummarycreate)
* [patientsSummaryDelete](docs/clinical/README.md#patientssummarydelete)
* [patientsSummaryList](docs/clinical/README.md#patientssummarylist)
* [patientsSummaryPartialUpdate](docs/clinical/README.md#patientssummarypartialupdate)
* [patientsSummaryRead](docs/clinical/README.md#patientssummaryread)
* [patientsSummaryUpdate](docs/clinical/README.md#patientssummaryupdate)
* [patientsUpdate](docs/clinical/README.md#patientsupdate) - Update an existing patient
* [prescriptionMessagesList](docs/clinical/README.md#prescriptionmessageslist) - Retrieve or search prescription messages
* [prescriptionMessagesRead](docs/clinical/README.md#prescriptionmessagesread) - Retrieve an existing prescription message
* [problemsCreate](docs/clinical/README.md#problemscreate) - Create patient problems
* [problemsList](docs/clinical/README.md#problemslist) - Retrieve or search patient problems
* [problemsPartialUpdate](docs/clinical/README.md#problemspartialupdate) - Update an existing patient problems
* [problemsRead](docs/clinical/README.md#problemsread) - Retrieve an existing patient problems
* [problemsUpdate](docs/clinical/README.md#problemsupdate) - Update an existing patient problems
* [reminderProfilesCreate](docs/clinical/README.md#reminderprofilescreate) - Create reminder profile
* [reminderProfilesDelete](docs/clinical/README.md#reminderprofilesdelete) - Delete an existing reminder profile
* [reminderProfilesList](docs/clinical/README.md#reminderprofileslist) - Retrieve or search reminder profiles
* [reminderProfilesPartialUpdate](docs/clinical/README.md#reminderprofilespartialupdate) - Update an existing reminder profile
* [reminderProfilesRead](docs/clinical/README.md#reminderprofilesread) - Retrieve an existing reminder profile
* [reminderProfilesUpdate](docs/clinical/README.md#reminderprofilesupdate) - Update an existing reminder profile
* [sublabsCreate](docs/clinical/README.md#sublabscreate) - Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [sublabsDelete](docs/clinical/README.md#sublabsdelete) - Delete an existing sub vendor
* [sublabsList](docs/clinical/README.md#sublabslist) - Retrieve or search sub vendors
* [sublabsPartialUpdate](docs/clinical/README.md#sublabspartialupdate) - Update an existing sub vendor
* [sublabsRead](docs/clinical/README.md#sublabsread) - Retrieve an existing sub vendor
* [sublabsUpdate](docs/clinical/README.md#sublabsupdate) - Update an existing sub vendor

### [practiceManagement](docs/practicemanagement/README.md)

* [inventoryCategoriesList](docs/practicemanagement/README.md#inventorycategorieslist) - Retrieve or search inventory categories
* [inventoryCategoriesRead](docs/practicemanagement/README.md#inventorycategoriesread) - Retrieve an existing inventory category
* [inventoryVaccinesCreate](docs/practicemanagement/README.md#inventoryvaccinescreate) - Create vaccine inventory
* [inventoryVaccinesList](docs/practicemanagement/README.md#inventoryvaccineslist) - Retrieve or search vaccine inventories
* [inventoryVaccinesRead](docs/practicemanagement/README.md#inventoryvaccinesread) - Retrieve an existing vaccine inventory
* [messagesCreate](docs/practicemanagement/README.md#messagescreate) - Create messages in doctor's message center
* [messagesDelete](docs/practicemanagement/README.md#messagesdelete) - Delete an existing message in doctor's message center
* [messagesList](docs/practicemanagement/README.md#messageslist) - Retrieve or search messages in doctor's message center
* [messagesPartialUpdate](docs/practicemanagement/README.md#messagespartialupdate) - Update an existing message in doctor's message center
* [messagesRead](docs/practicemanagement/README.md#messagesread) - Retrieve an existing message in doctor's message center
* [messagesUpdate](docs/practicemanagement/README.md#messagesupdate) - Update an existing message in doctor's message center
* [officesAddExamRoom](docs/practicemanagement/README.md#officesaddexamroom) - Add an exam room to the office
* [officesList](docs/practicemanagement/README.md#officeslist) - Retrieve or search offices
* [officesPartialUpdate](docs/practicemanagement/README.md#officespartialupdate) - Update an existing office
* [officesRead](docs/practicemanagement/README.md#officesread) - Retrieve an existing office
* [officesUpdate](docs/practicemanagement/README.md#officesupdate) - Update an existing office
* [taskCategoriesCreate](docs/practicemanagement/README.md#taskcategoriescreate) - Create a task category
* [taskCategoriesList](docs/practicemanagement/README.md#taskcategorieslist) - Retrieve or search task categories
* [taskCategoriesPartialUpdate](docs/practicemanagement/README.md#taskcategoriespartialupdate) - Update an existing task category
* [taskCategoriesRead](docs/practicemanagement/README.md#taskcategoriesread) - Retrieve an existing task category
* [taskCategoriesUpdate](docs/practicemanagement/README.md#taskcategoriesupdate) - Update an existing task category
* [taskNotesCreate](docs/practicemanagement/README.md#tasknotescreate) - Create a task note
* [taskNotesList](docs/practicemanagement/README.md#tasknoteslist) - Retrieve or search task notes
* [taskNotesPartialUpdate](docs/practicemanagement/README.md#tasknotespartialupdate) - Update an existing task note
* [taskNotesRead](docs/practicemanagement/README.md#tasknotesread) - Retrieve an existing task note
* [taskNotesUpdate](docs/practicemanagement/README.md#tasknotesupdate) - Update an existing task note
* [taskStatusesCreate](docs/practicemanagement/README.md#taskstatusescreate) - Create a task status
* [taskStatusesList](docs/practicemanagement/README.md#taskstatuseslist) - Retrieve or search task statuses
* [taskStatusesPartialUpdate](docs/practicemanagement/README.md#taskstatusespartialupdate) - Update an existing task status
* [taskStatusesRead](docs/practicemanagement/README.md#taskstatusesread) - Retrieve an existing task status
* [taskStatusesUpdate](docs/practicemanagement/README.md#taskstatusesupdate) - Update an existing task status
* [taskTemplatesCreate](docs/practicemanagement/README.md#tasktemplatescreate) - Create a task template
* [taskTemplatesList](docs/practicemanagement/README.md#tasktemplateslist) - Retrieve or search task templates
* [taskTemplatesPartialUpdate](docs/practicemanagement/README.md#tasktemplatespartialupdate) - Update an existing task template
* [taskTemplatesRead](docs/practicemanagement/README.md#tasktemplatesread) - Retrieve an existing task template
* [taskTemplatesUpdate](docs/practicemanagement/README.md#tasktemplatesupdate) - Update an existing task template
* [tasksCreate](docs/practicemanagement/README.md#taskscreate) - Create a task
* [tasksList](docs/practicemanagement/README.md#taskslist) - Retrieve or search tasks
* [tasksPartialUpdate](docs/practicemanagement/README.md#taskspartialupdate) - Update an existing task
* [tasksRead](docs/practicemanagement/README.md#tasksread) - Retrieve an existing task
* [tasksUpdate](docs/practicemanagement/README.md#tasksupdate) - Update an existing task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
