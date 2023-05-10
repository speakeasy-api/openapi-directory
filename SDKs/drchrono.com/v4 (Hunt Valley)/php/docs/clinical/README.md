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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllergiesCreateRequest();
    $request->doctor = 44612;
    $request->patient = 715179;

    $requestSecurity = new AllergiesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->allergiesCreate($request, $requestSecurity);

    if ($response->patientAllergy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allergiesList

Retrieve or search patient allergies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllergiesListRequest();
    $request->cursor = 'quod';
    $request->doctor = 490819;
    $request->pageSize = 76956;
    $request->patient = 469498;

    $requestSecurity = new AllergiesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->allergiesList($request, $requestSecurity);

    if ($response->allergiesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allergiesPartialUpdate

Update an existing patient allergy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllergiesPartialUpdateRequest();
    $request->doctor = 518835;
    $request->id = 'e4796f2a-70c6-4882-82aa-482562f222e9';
    $request->patient = 543806;

    $requestSecurity = new AllergiesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->allergiesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allergiesRead

Retrieve an existing patient allergy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllergiesReadRequest();
    $request->doctor = 92260;
    $request->id = '7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37';
    $request->patient = 503427;

    $requestSecurity = new AllergiesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->allergiesRead($request, $requestSecurity);

    if ($response->patientAllergy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allergiesUpdate

Update an existing patient allergy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllergiesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllergiesUpdateRequest();
    $request->doctor = 590984;
    $request->id = 'fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04';
    $request->patient = 958983;

    $requestSecurity = new AllergiesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->allergiesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## amendmentsCreate

Create patient amendments to a patient's clinical records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AmendmentsCreateRequest();
    $request->appointment = 119771;
    $request->doctor = 355369;
    $request->patient = 443879;

    $requestSecurity = new AmendmentsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->amendmentsCreate($request, $requestSecurity);

    if ($response->patientAmendment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## amendmentsDelete

Delete an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AmendmentsDeleteRequest();
    $request->appointment = 356707;
    $request->doctor = 391774;
    $request->id = '082d68ea-19f1-4d17-8513-39d08086a184';
    $request->patient = 32465;

    $requestSecurity = new AmendmentsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->amendmentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## amendmentsList

Retrieve or search patient amendments. You can only interact with amendments created by your API application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AmendmentsListRequest();
    $request->appointment = 221161;
    $request->cursor = 'occaecati';
    $request->doctor = 253191;
    $request->pageSize = 771089;
    $request->patient = 131055;

    $requestSecurity = new AmendmentsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->amendmentsList($request, $requestSecurity);

    if ($response->amendmentsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## amendmentsPartialUpdate

Update an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AmendmentsPartialUpdateRequest();
    $request->appointment = 376226;
    $request->doctor = 12036;
    $request->id = '71f93f5f-0642-4dac-baf5-15cc413aa63a';
    $request->patient = 665859;

    $requestSecurity = new AmendmentsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->amendmentsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## amendmentsRead

Retrieve an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AmendmentsReadRequest();
    $request->appointment = 926880;
    $request->doctor = 517309;
    $request->id = 'd67864db-b675-4fd5-a60b-375ed4f6fbee';
    $request->patient = 296556;

    $requestSecurity = new AmendmentsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->amendmentsRead($request, $requestSecurity);

    if ($response->patientAmendment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## amendmentsUpdate

Update an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AmendmentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AmendmentsUpdateRequest();
    $request->appointment = 121059;
    $request->doctor = 992012;
    $request->id = '33317fe3-5b60-4eb1-aa42-6555ba3c2874';
    $request->patient = 304468;

    $requestSecurity = new AmendmentsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->amendmentsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentProfilesCreate

Create appointment profiles for a doctor's calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentProfilesCreateRequest();
    $request->doctor = 885963;

    $requestSecurity = new AppointmentProfilesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentProfilesCreate($request, $requestSecurity);

    if ($response->appointmentProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentProfilesDelete

Delete an existing appointment profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentProfilesDeleteRequest();
    $request->doctor = 839189;
    $request->id = '53b88f3a-8d8f-45c0-b2f2-fb7b194a276b';

    $requestSecurity = new AppointmentProfilesDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentProfilesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentProfilesList

Retrieve or search appointment profiles for a doctor's calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentProfilesListRequest();
    $request->cursor = 'explicabo';
    $request->doctor = 378326;
    $request->pageSize = 604118;

    $requestSecurity = new AppointmentProfilesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentProfilesList($request, $requestSecurity);

    if ($response->appointmentProfilesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentProfilesPartialUpdate

Update an existing appointment profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentProfilesPartialUpdateRequest();
    $request->doctor = 100032;
    $request->id = '6fe1f08f-4294-4e36-98f4-47f603e8b445';

    $requestSecurity = new AppointmentProfilesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentProfilesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentProfilesRead

Retrieve an existing appointment profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentProfilesReadRequest();
    $request->doctor = 894864;
    $request->id = '80ca55ef-d20e-4457-a185-8b6a89fbe3a5';

    $requestSecurity = new AppointmentProfilesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentProfilesRead($request, $requestSecurity);

    if ($response->appointmentProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentProfilesUpdate

Update an existing appointment profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentProfilesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentProfilesUpdateRequest();
    $request->doctor = 639028;
    $request->id = 'a8e4824d-0ab4-4075-888e-51862065e904';

    $requestSecurity = new AppointmentProfilesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentProfilesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentTemplatesCreate

Create appointment templates for a doctor's calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentTemplatesCreateRequest();
    $request->doctor = 968865;
    $request->office = 209750;
    $request->profile = 690894;

    $requestSecurity = new AppointmentTemplatesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentTemplatesCreate($request, $requestSecurity);

    if ($response->appointmentTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentTemplatesDelete

Delete an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentTemplatesDeleteRequest();
    $request->doctor = 115703;
    $request->id = '194b8abf-603a-479f-9dfe-0ab7da8a50ce';
    $request->office = 97243;
    $request->profile = 542457;

    $requestSecurity = new AppointmentTemplatesDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentTemplatesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentTemplatesList

Retrieve or search appointment templates for a doctor's calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentTemplatesListRequest();
    $request->cursor = 'reprehenderit';
    $request->doctor = 991142;
    $request->office = 519952;
    $request->pageSize = 383103;
    $request->profile = 693957;

    $requestSecurity = new AppointmentTemplatesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentTemplatesList($request, $requestSecurity);

    if ($response->appointmentTemplatesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentTemplatesPartialUpdate

Update an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentTemplatesPartialUpdateRequest();
    $request->doctor = 806670;
    $request->id = '173d689e-ee95-426f-8d98-6e881ead4f0e';
    $request->office = 116098;
    $request->profile = 36033;

    $requestSecurity = new AppointmentTemplatesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentTemplatesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentTemplatesRead

Retrieve an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentTemplatesReadRequest();
    $request->doctor = 106429;
    $request->id = '2563f94e-29e9-473e-922a-57a15be3e060';
    $request->office = 517612;
    $request->profile = 61078;

    $requestSecurity = new AppointmentTemplatesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentTemplatesRead($request, $requestSecurity);

    if ($response->appointmentTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentTemplatesUpdate

Update an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentTemplatesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentTemplatesUpdateRequest();
    $request->doctor = 474668;
    $request->id = 'e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9';
    $request->office = 309251;
    $request->profile = 477646;

    $requestSecurity = new AppointmentTemplatesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentTemplatesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentsCreate

Create a new appointment or break on doctor's calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentsCreateRequest();
    $request->date = 'ex';
    $request->dateRange = 'ut';
    $request->doctor = 633062;
    $request->office = 238413;
    $request->patient = 890653;
    $request->since = 'laudantium';
    $request->status = 'eum';

    $requestSecurity = new AppointmentsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentsCreate($request, $requestSecurity);

    if ($response->appointment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentsDelete

Delete an existing appointment or break

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentsDeleteRequest();
    $request->date = 'nemo';
    $request->dateRange = 'recusandae';
    $request->doctor = 456520;
    $request->id = '956f9251-a5a9-4da6-a0ff-57bfaad4f9ef';
    $request->office = 764562;
    $request->patient = 113486;
    $request->since = 'rerum';
    $request->status = 'tempora';

    $requestSecurity = new AppointmentsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentsList

Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentsListRequest();
    $request->cursor = 'quis';
    $request->date = 'inventore';
    $request->dateRange = 'fugit';
    $request->doctor = 765271;
    $request->office = 62636;
    $request->pageSize = 21688;
    $request->patient = 241901;
    $request->since = 'aspernatur';
    $request->status = 'eum';

    $requestSecurity = new AppointmentsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentsList($request, $requestSecurity);

    if ($response->appointmentsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentsPartialUpdate

Update an existing appointment or break

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentsPartialUpdateRequest();
    $request->date = 'eius';
    $request->dateRange = 'rem';
    $request->doctor = 871083;
    $request->id = 'c2f61519-9ebf-4d0e-9fe6-c632ca3aed01';
    $request->office = 90233;
    $request->patient = 497777;
    $request->since = 'natus';
    $request->status = 'occaecati';

    $requestSecurity = new AppointmentsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentsRead

Retrieve an existing appointment or break

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentsReadRequest();
    $request->date = 'suscipit';
    $request->dateRange = 'adipisci';
    $request->doctor = 96562;
    $request->id = '2fde0477-1778-4ff6-9d01-7476360a15db';
    $request->office = 399667;
    $request->patient = 639187;
    $request->since = 'suscipit';
    $request->status = 'aliquid';

    $requestSecurity = new AppointmentsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentsRead($request, $requestSecurity);

    if ($response->appointment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appointmentsUpdate

Update an existing appointment or break

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppointmentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppointmentsUpdateRequest();
    $request->date = 'perferendis';
    $request->dateRange = 'eum';
    $request->doctor = 374753;
    $request->id = '9a1adeaa-b585-41d6-8645-b08b61891baa';
    $request->office = 29634;
    $request->patient = 959143;
    $request->since = 'officiis';
    $request->status = 'architecto';

    $requestSecurity = new AppointmentsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->appointmentsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## carePlansList

Retrieve or search care plans

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CarePlansListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CarePlansListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CarePlansListRequest();
    $request->cursor = 'fuga';
    $request->doctor = 867168;
    $request->pageSize = 891315;
    $request->patient = 29190;
    $request->planType = 1207;

    $requestSecurity = new CarePlansListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->carePlansList($request, $requestSecurity);

    if ($response->carePlansList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## carePlansRead

Retrieve an existing care plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CarePlansReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CarePlansReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CarePlansReadRequest();
    $request->doctor = 534917;
    $request->id = 'e6f8c5f3-50d8-4cdb-9a34-181430104218';
    $request->patient = 65604;
    $request->planType = 222658;

    $requestSecurity = new CarePlansReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->carePlansRead($request, $requestSecurity);

    if ($response->carePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## careTeamMembersList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CareTeamMembersListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CareTeamMembersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CareTeamMembersListRequest();
    $request->appointment = 856277;
    $request->cursor = 'ipsam';
    $request->doctor = 162120;
    $request->pageSize = 55107;
    $request->patient = 559682;

    $requestSecurity = new CareTeamMembersListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->careTeamMembersList($request, $requestSecurity);

    if ($response->careTeamMembersList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## careTeamMembersRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CareTeamMembersReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CareTeamMembersReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CareTeamMembersReadRequest();
    $request->appointment = 911198;
    $request->doctor = 773456;
    $request->id = 'e7e253b6-6845-41c6-86e2-05e16deab3fe';
    $request->patient = 759283;

    $requestSecurity = new CareTeamMembersReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->careTeamMembersRead($request, $requestSecurity);

    if ($response->careTeamMember !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimBillingNotesCreate

Create a new billing note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClaimBillingNotesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimBillingNotesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimBillingNotesCreateRequest();
    $request->appointment = 579681;
    $request->doctor = 364544;

    $requestSecurity = new ClaimBillingNotesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->claimBillingNotesCreate($request, $requestSecurity);

    if ($response->claimBillingNotes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimBillingNotesList

Retrieve or search billing notes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClaimBillingNotesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimBillingNotesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimBillingNotesListRequest();
    $request->appointment = 455898;
    $request->cursor = 'blanditiis';
    $request->doctor = 642352;
    $request->pageSize = 376389;

    $requestSecurity = new ClaimBillingNotesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->claimBillingNotesList($request, $requestSecurity);

    if ($response->claimBillingNotesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimBillingNotesRead

Retrieve an existing billing note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClaimBillingNotesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimBillingNotesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimBillingNotesReadRequest();
    $request->appointment = 254025;
    $request->doctor = 364912;
    $request->id = '84273a84-18d1-4623-89fb-0929921aefb9';

    $requestSecurity = new ClaimBillingNotesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->claimBillingNotesRead($request, $requestSecurity);

    if ($response->claimBillingNotes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteFieldTypesList

Retrieve or search clinical note field types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldTypesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteFieldTypesListRequest();
    $request->clinicalNoteTemplate = 966390;
    $request->cursor = 'minima';
    $request->doctor = 507636;
    $request->pageSize = 802692;

    $requestSecurity = new ClinicalNoteFieldTypesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteFieldTypesList($request, $requestSecurity);

    if ($response->clinicalNoteFieldTypesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteFieldTypesRead

Retrieve an existing clinial note field type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldTypesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldTypesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteFieldTypesReadRequest();
    $request->clinicalNoteTemplate = 300403;
    $request->doctor = 836364;
    $request->id = '86e68e4b-e056-4013-b59d-a757a59ecfef';

    $requestSecurity = new ClinicalNoteFieldTypesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteFieldTypesRead($request, $requestSecurity);

    if ($response->soapNoteLineItemFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteFieldValuesCreate

Create clinical note field value

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteFieldValuesCreateRequest();
    $request->appointment = 404306;
    $request->clinicalNoteField = 376741;
    $request->clinicalNoteTemplate = 895346;
    $request->doctor = 966148;
    $request->since = 'quae';

    $requestSecurity = new ClinicalNoteFieldValuesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteFieldValuesCreate($request, $requestSecurity);

    if ($response->soapNoteLineItemFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteFieldValuesList

Retrieve or search clinical note field values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteFieldValuesListRequest();
    $request->appointment = 791880;
    $request->clinicalNoteField = 685478;
    $request->clinicalNoteTemplate = 675689;
    $request->cursor = 'consectetur';
    $request->doctor = 244889;
    $request->pageSize = 538869;
    $request->since = 'ipsum';

    $requestSecurity = new ClinicalNoteFieldValuesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteFieldValuesList($request, $requestSecurity);

    if ($response->clinicalNoteFieldValuesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteFieldValuesPartialUpdate

Update an existing clinical note field value

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteFieldValuesPartialUpdateRequest();
    $request->appointment = 773035;
    $request->clinicalNoteField = 166047;
    $request->clinicalNoteTemplate = 746585;
    $request->doctor = 922757;
    $request->id = 'b477373c-8d72-4f64-91db-1f2c4310661e';
    $request->since = 'excepturi';

    $requestSecurity = new ClinicalNoteFieldValuesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteFieldValuesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteFieldValuesRead

Retrieve an existing clinical note field value

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteFieldValuesReadRequest();
    $request->appointment = 431994;
    $request->clinicalNoteField = 246557;
    $request->clinicalNoteTemplate = 284086;
    $request->doctor = 596433;
    $request->id = 'e1cf9e06-e3a4-4370-80ae-6b6bc9b8f759';
    $request->since = 'necessitatibus';

    $requestSecurity = new ClinicalNoteFieldValuesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteFieldValuesRead($request, $requestSecurity);

    if ($response->soapNoteLineItemFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteFieldValuesUpdate

Update an existing clinical note field value

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteFieldValuesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteFieldValuesUpdateRequest();
    $request->appointment = 654082;
    $request->clinicalNoteField = 769967;
    $request->clinicalNoteTemplate = 373040;
    $request->doctor = 357425;
    $request->id = 'a9741d31-1352-4965-bb8a-7202611435e1';
    $request->since = 'ipsum';

    $requestSecurity = new ClinicalNoteFieldValuesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteFieldValuesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteTemplatesList

Retrieve or search clinical note templates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteTemplatesListRequest();
    $request->cursor = 'unde';
    $request->doctor = 858338;
    $request->pageSize = 714376;

    $requestSecurity = new ClinicalNoteTemplatesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteTemplatesList($request, $requestSecurity);

    if ($response->clinicalNoteTemplatesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNoteTemplatesRead

Retrieve an existing clinical note tempalte

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteTemplatesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNoteTemplatesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNoteTemplatesReadRequest();
    $request->doctor = 802894;
    $request->id = '2259b1ab-da8c-4070-a108-4cb0672d1ad8';

    $requestSecurity = new ClinicalNoteTemplatesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNoteTemplatesRead($request, $requestSecurity);

    if ($response->soapNoteCustomReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNotesList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNotesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNotesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNotesListRequest();
    $request->cursor = 'molestiae';
    $request->date = 'provident';
    $request->dateRange = 'accusamus';
    $request->doctor = 896480;
    $request->office = 733289;
    $request->pageSize = 575078;
    $request->patient = 409726;
    $request->since = 'autem';

    $requestSecurity = new ClinicalNotesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNotesList($request, $requestSecurity);

    if ($response->clinicalNotesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clinicalNotesRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNotesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClinicalNotesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClinicalNotesReadRequest();
    $request->date = 'ipsam';
    $request->dateRange = 'rerum';
    $request->doctor = 515638;
    $request->id = '5efbd02b-ae0b-4e2d-b822-59e3ea4b5197';
    $request->office = 963198;
    $request->patient = 585593;
    $request->since = 'fugit';

    $requestSecurity = new ClinicalNotesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->clinicalNotesRead($request, $requestSecurity);

    if ($response->clinicalNote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consentFormsApplyToAppointment

Assign (apply) a consent form to appointment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsApplyToAppointmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsApplyToAppointmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsentFormsApplyToAppointmentRequest();
    $request->doctor = 253625;
    $request->id = '43da7ce5-2b89-45c5-b7c6-454efb0b3489';

    $requestSecurity = new ConsentFormsApplyToAppointmentSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->consentFormsApplyToAppointment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consentFormsCreate

Create a patient consent form

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsentFormsCreateRequest();
    $request->doctor = 375994;

    $requestSecurity = new ConsentFormsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->consentFormsCreate($request, $requestSecurity);

    if ($response->consentForm !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consentFormsList

Retrieve or search patient consent forms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsentFormsListRequest();
    $request->cursor = 'quo';
    $request->doctor = 242099;
    $request->pageSize = 795591;

    $requestSecurity = new ConsentFormsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->consentFormsList($request, $requestSecurity);

    if ($response->consentFormsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consentFormsPartialUpdate

Update an existing patient consent form

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsentFormsPartialUpdateRequest();
    $request->doctor = 684553;
    $request->id = '5acfbe2f-d570-4757-b929-177deac646ec';

    $requestSecurity = new ConsentFormsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->consentFormsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consentFormsRead

Retrieve an existing patient consent form

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsentFormsReadRequest();
    $request->doctor = 697274;
    $request->id = '573409e3-eb1e-45a2-b12e-b07f116db995';

    $requestSecurity = new ConsentFormsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->consentFormsRead($request, $requestSecurity);

    if ($response->consentForm !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consentFormsUnapplyFromAppointment

Unassign (unapply) a consent form from appointment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsUnapplyFromAppointmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsUnapplyFromAppointmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsentFormsUnapplyFromAppointmentRequest();
    $request->doctor = 306382;
    $request->id = '5fc95fa8-8970-4e18-9dbb-30fcb33ea055';

    $requestSecurity = new ConsentFormsUnapplyFromAppointmentSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->consentFormsUnapplyFromAppointment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consentFormsUpdate

Update an existing patient consent form

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsentFormsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsentFormsUpdateRequest();
    $request->doctor = 727481;
    $request->id = '197cd44e-2f52-4d82-9351-3bb6f48b656b';

    $requestSecurity = new ConsentFormsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->consentFormsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customAppointmentFieldsCreate

Create custom appointment fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomAppointmentFieldsCreateRequest();
    $request->doctor = 794507;

    $requestSecurity = new CustomAppointmentFieldsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customAppointmentFieldsCreate($request, $requestSecurity);

    if ($response->customAppointmentFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customAppointmentFieldsList

Retrieve or search custom appointment fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomAppointmentFieldsListRequest();
    $request->cursor = 'facere';
    $request->doctor = 706061;
    $request->pageSize = 217663;

    $requestSecurity = new CustomAppointmentFieldsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customAppointmentFieldsList($request, $requestSecurity);

    if ($response->customAppointmentFieldsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customAppointmentFieldsPartialUpdate

Update an existing custom appointment field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomAppointmentFieldsPartialUpdateRequest();
    $request->doctor = 318917;
    $request->id = 'ff2e4b27-537a-48cd-9e73-19c177d525f7';

    $requestSecurity = new CustomAppointmentFieldsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customAppointmentFieldsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customAppointmentFieldsRead

Retrieve an existing custom appointment field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomAppointmentFieldsReadRequest();
    $request->doctor = 491201;
    $request->id = 'b114eeb5-2ff7-485f-8378-14d4c98e0c2b';

    $requestSecurity = new CustomAppointmentFieldsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customAppointmentFieldsRead($request, $requestSecurity);

    if ($response->customAppointmentFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customAppointmentFieldsUpdate

Update an existing custom appointment field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomAppointmentFieldsUpdateRequest();
    $request->doctor = 711991;
    $request->id = '89eb75da-d636-4c60-8503-d8bb31180f73';

    $requestSecurity = new CustomAppointmentFieldsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customAppointmentFieldsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDemographicsCreate

Create custom demographics fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDemographicsCreateRequest();
    $request->doctor = 587967;

    $requestSecurity = new CustomDemographicsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customDemographicsCreate($request, $requestSecurity);

    if ($response->customPatientFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDemographicsList

Retrieve or search custom demographics fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDemographicsListRequest();
    $request->cursor = 'dolorum';
    $request->doctor = 897956;
    $request->pageSize = 592880;

    $requestSecurity = new CustomDemographicsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customDemographicsList($request, $requestSecurity);

    if ($response->customDemographicsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDemographicsPartialUpdate

Update an existing custom demographics field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDemographicsPartialUpdateRequest();
    $request->doctor = 920272;
    $request->id = '057eb809-e281-4033-9f39-81d4c700b607';

    $requestSecurity = new CustomDemographicsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customDemographicsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDemographicsRead

Retrieve an existing custom demographics field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDemographicsReadRequest();
    $request->doctor = 998026;
    $request->id = '3c93c73b-9da3-4f2c-ada7-e23f2257411f';

    $requestSecurity = new CustomDemographicsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customDemographicsRead($request, $requestSecurity);

    if ($response->customPatientFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDemographicsUpdate

Update an existing custom demographics field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomDemographicsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDemographicsUpdateRequest();
    $request->doctor = 644479;
    $request->id = 'f4b7544e-472e-4802-857a-5b40463a7d57';

    $requestSecurity = new CustomDemographicsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customDemographicsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customVitalsList

Retrieve or search custom vital types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomVitalsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomVitalsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomVitalsListRequest();
    $request->cursor = 'veniam';
    $request->doctor = 969206;
    $request->pageSize = 66207;

    $requestSecurity = new CustomVitalsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customVitalsList($request, $requestSecurity);

    if ($response->customVitalsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customVitalsRead

Retrieve an existing custom vital type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomVitalsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomVitalsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomVitalsReadRequest();
    $request->doctor = 265632;
    $request->id = '00e764ad-7334-4ec1-b781-b36a08088d10';

    $requestSecurity = new CustomVitalsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->customVitalsRead($request, $requestSecurity);

    if ($response->customVitalType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentsCreate

Create documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentsCreateRequest();
    $request->doctor = 51075;
    $request->patient = 904827;
    $request->since = 'delectus';

    $requestSecurity = new DocumentsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->documentsCreate($request, $requestSecurity);

    if ($response->scannedClinicalDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentsDelete

Delete an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentsDeleteRequest();
    $request->doctor = 651228;
    $request->id = 'da200ef0-422e-4b21-a4cf-9ab8366c723f';
    $request->patient = 997918;
    $request->since = 'nulla';

    $requestSecurity = new DocumentsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->documentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentsList

Retrieve or search documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentsListRequest();
    $request->cursor = 'laborum';
    $request->doctor = 617657;
    $request->pageSize = 883780;
    $request->patient = 42906;
    $request->since = 'nisi';

    $requestSecurity = new DocumentsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->documentsList($request, $requestSecurity);

    if ($response->documentsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentsPartialUpdate

Update an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentsPartialUpdateRequest();
    $request->doctor = 700856;
    $request->id = 'ee4825c1-fc0e-4115-880b-ff918544ec42';
    $request->patient = 828147;
    $request->since = 'vero';

    $requestSecurity = new DocumentsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->documentsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentsRead

Retrieve an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentsReadRequest();
    $request->doctor = 985109;
    $request->id = 'cce8f197-7773-4e63-962a-7b408f05e3d4';
    $request->patient = 552581;
    $request->since = 'doloribus';

    $requestSecurity = new DocumentsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->documentsRead($request, $requestSecurity);

    if ($response->scannedClinicalDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentsUpdate

Update an existing appointment template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DocumentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentsUpdateRequest();
    $request->doctor = 851809;
    $request->id = 'af313a1f-5fd9-4425-9c0b-36f25ea944f3';
    $request->patient = 728559;
    $request->since = 'in';

    $requestSecurity = new DocumentsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->documentsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eobsCreate

Create EOB object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\EobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EobsCreateRequest();
    $request->doctor = 329651;

    $requestSecurity = new EobsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->eobsCreate($request, $requestSecurity);

    if ($response->eobObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eobsList

Retrieve or search EOB objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EobsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\EobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EobsListRequest();
    $request->cursor = 'ex';
    $request->doctor = 791762;
    $request->pageSize = 68880;

    $requestSecurity = new EobsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->eobsList($request, $requestSecurity);

    if ($response->eobsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eobsRead

Retrieve an existing EOB object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EobsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\EobsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EobsReadRequest();
    $request->doctor = 108165;
    $request->id = 'f6c37a51-2624-4383-9bbc-05a23a45cefc';

    $requestSecurity = new EobsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->eobsRead($request, $requestSecurity);

    if ($response->eobObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## feeSchedulesList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FeeSchedulesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FeeSchedulesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FeeSchedulesListRequest();
    $request->code = 'enim';
    $request->codeType = 'doloribus';
    $request->cursor = 'assumenda';
    $request->doctor = 887363;
    $request->pageSize = 103990;
    $request->payerId = 'alias';
    $request->since = 'culpa';

    $requestSecurity = new FeeSchedulesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->feeSchedulesList($request, $requestSecurity);

    if ($response->feeSchedulesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## feeSchedulesRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FeeSchedulesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\FeeSchedulesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FeeSchedulesReadRequest();
    $request->code = 'ipsa';
    $request->codeType = 'nobis';
    $request->doctor = 898193;
    $request->id = '2169e510-019c-46dc-9e34-762799bfbbe6';
    $request->payerId = 'unde';
    $request->since = 'modi';

    $requestSecurity = new FeeSchedulesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->feeSchedulesRead($request, $requestSecurity);

    if ($response->doctorFeeSchedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## implantableDevicesList

Retrieve or search implantable devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImplantableDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImplantableDevicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImplantableDevicesListRequest();
    $request->cursor = 'perspiciatis';
    $request->doctor = 944626;
    $request->muDate = 'cum';
    $request->muDateRange = 'aspernatur';
    $request->pageSize = 725784;
    $request->patient = 720266;

    $requestSecurity = new ImplantableDevicesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->implantableDevicesList($request, $requestSecurity);

    if ($response->implantableDevicesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## implantableDevicesRead

Retrieve an existing implantable device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImplantableDevicesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImplantableDevicesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImplantableDevicesReadRequest();
    $request->doctor = 279172;
    $request->id = 'ecae6c3d-5db3-4ade-bd5d-aea4c506a8aa';
    $request->muDate = 'occaecati';
    $request->muDateRange = 'labore';
    $request->patient = 777378;

    $requestSecurity = new ImplantableDevicesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->implantableDevicesRead($request, $requestSecurity);

    if ($response->implantableDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insurancesList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InsurancesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\InsurancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsurancesListRequest();
    $request->cursor = 'perferendis';
    $request->pageSize = 143528;
    $request->payerType = 'aliquid';
    $request->term = 'magnam';

    $requestSecurity = new InsurancesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->insurancesList($request, $requestSecurity);

    if ($response->insurancesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insurancesRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InsurancesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\InsurancesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsurancesReadRequest();
    $request->id = '4cf5e9d9-a457-48ad-81ac-600dec001ac8';
    $request->payerType = 'quae';
    $request->term = 'magni';

    $requestSecurity = new InsurancesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->insurancesRead($request, $requestSecurity);

    if ($response->insurance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labDocumentsCreate

Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabDocumentsCreateRequest();
    $request->doctor = 885797;
    $request->since = 'sed';

    $requestSecurity = new LabDocumentsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labDocumentsCreate($request, $requestSecurity);

    if ($response->labOrderDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labDocumentsDelete

Delete an existing lab order document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabDocumentsDeleteRequest();
    $request->doctor = 898111;
    $request->id = 'c09ff8f0-f816-4ff3-877c-13e902c14125';
    $request->since = 'rerum';

    $requestSecurity = new LabDocumentsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labDocumentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labDocumentsList

Retrieve or search lab order documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabDocumentsListRequest();
    $request->cursor = 'alias';
    $request->doctor = 624498;
    $request->pageSize = 424854;
    $request->since = 'accusantium';

    $requestSecurity = new LabDocumentsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labDocumentsList($request, $requestSecurity);

    if ($response->labDocumentsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labDocumentsPartialUpdate

Update an existing lab order document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabDocumentsPartialUpdateRequest();
    $request->doctor = 664197;
    $request->id = '668151a4-72af-4923-8594-9f83f350cf87';
    $request->since = 'aliquid';

    $requestSecurity = new LabDocumentsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labDocumentsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labDocumentsRead

Retrieve an existing lab order document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabDocumentsReadRequest();
    $request->doctor = 989033;
    $request->id = 'fb901c6e-cbb4-4e24-bcf7-89ffafeda53e';
    $request->since = 'enim';

    $requestSecurity = new LabDocumentsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labDocumentsRead($request, $requestSecurity);

    if ($response->labOrderDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labDocumentsUpdate

Update an existing lab order document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabDocumentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabDocumentsUpdateRequest();
    $request->doctor = 638609;
    $request->id = 'e6e0ac18-4c2b-49c2-87c8-8373a40e1942';
    $request->since = 'maiores';

    $requestSecurity = new LabDocumentsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labDocumentsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersCreate

Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersCreateRequest();
    $request->doctor = 205011;
    $request->since = 'odit';

    $requestSecurity = new LabOrdersCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersCreate($request, $requestSecurity);

    if ($response->labOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersDelete

Delete an existing lab order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersDeleteRequest();
    $request->doctor = 936845;
    $request->id = '55055756-f5d5-46d0-bd0a-f2dfe13db4f6';
    $request->since = 'explicabo';

    $requestSecurity = new LabOrdersDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersList

Retrieve or search lab orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersListRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersListRequest();
    $request->cursor = 'minus';
    $request->doctor = 746688;
    $request->pageSize = 677509;
    $request->since = 'velit';

    $requestSecurity = new LabOrdersListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersList($request, $requestSecurity);

    if ($response->labOrdersList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersPartialUpdate

Update an existing lab order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersPartialUpdateRequest();
    $request->doctor = 937865;
    $request->id = '8941aebc-0b80-4a69-a4d3-b2ecfcc8f895';
    $request->since = 'accusantium';

    $requestSecurity = new LabOrdersPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersRead

Retrieve an existing lab order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersReadRequest();
    $request->doctor = 75850;
    $request->id = '0f5dd3d6-fa18-404e-94c8-2f168a363c88';
    $request->since = 'ducimus';

    $requestSecurity = new LabOrdersReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersRead($request, $requestSecurity);

    if ($response->labOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersSummaryList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersSummaryListRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersSummaryListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersSummaryListRequest();
    $request->cursor = 'adipisci';
    $request->doctor = 927959;
    $request->pageSize = 271306;
    $request->patient = 503449;
    $request->since = 'numquam';

    $requestSecurity = new LabOrdersSummaryListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersSummaryList($request, $requestSecurity);

    if ($response->labOrdersSummaryList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersSummaryRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersSummaryReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersSummaryReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersSummaryReadRequest();
    $request->doctor = 196374;
    $request->id = '80b1f6b8-ca27-45a6-8a04-c495cc699171';
    $request->patient = 725316;
    $request->since = 'ipsam';

    $requestSecurity = new LabOrdersSummaryReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersSummaryRead($request, $requestSecurity);

    if ($response->labOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labOrdersUpdate

Update an existing lab order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabOrdersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabOrdersUpdateRequest();
    $request->doctor = 97659;
    $request->id = 'c1bdb1cf-4b88-48eb-9fc4-ccca99bc7fc0';
    $request->since = 'soluta';

    $requestSecurity = new LabOrdersUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labOrdersUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labResultsCreate

Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabResultsCreateRequest();
    $request->doctor = 147400;
    $request->order = 866292;

    $requestSecurity = new LabResultsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labResultsCreate($request, $requestSecurity);

    if ($response->labResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labResultsDelete

Delete an existing lab result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabResultsDeleteRequest();
    $request->doctor = 756287;
    $request->id = 'e10873e4-2b00-46d6-b887-8ba8581a5820';
    $request->order = 556133;

    $requestSecurity = new LabResultsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labResultsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labResultsList

Retrieve or search lab results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabResultsListRequest();
    $request->cursor = 'placeat';
    $request->doctor = 318028;
    $request->order = 286453;
    $request->pageSize = 958068;

    $requestSecurity = new LabResultsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labResultsList($request, $requestSecurity);

    if ($response->labResultsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labResultsPartialUpdate

Update an existing lab result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabResultsPartialUpdateRequest();
    $request->doctor = 901651;
    $request->id = 'fa9c95f2-eac5-4565-9307-cfee81206e28';
    $request->order = 122744;

    $requestSecurity = new LabResultsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labResultsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labResultsRead

Retrieve an existing lab result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabResultsReadRequest();
    $request->doctor = 200190;
    $request->id = 'fa4a41c4-80d3-4f21-b2af-03102d514f4c';
    $request->order = 750537;

    $requestSecurity = new LabResultsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labResultsRead($request, $requestSecurity);

    if ($response->labResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labResultsUpdate

Update an existing lab result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabResultsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabResultsUpdateRequest();
    $request->doctor = 404422;
    $request->id = 'f18bf962-1a6a-44f7-ba87-ee3e4be752c6';
    $request->order = 339843;

    $requestSecurity = new LabResultsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labResultsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labTestsCreate

Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabTestsCreateRequest();
    $request->doctor = 704402;
    $request->order = 218128;

    $requestSecurity = new LabTestsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labTestsCreate($request, $requestSecurity);

    if ($response->labTest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labTestsDelete

Delete an existing lab test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabTestsDeleteRequest();
    $request->doctor = 284885;
    $request->id = '418e3bb9-1c8d-4975-a0e8-419d8f84f144';
    $request->order = 983434;

    $requestSecurity = new LabTestsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labTestsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labTestsList

Retrieve or search lab tests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabTestsListRequest();
    $request->cursor = 'sequi';
    $request->doctor = 902132;
    $request->order = 8904;
    $request->pageSize = 458723;

    $requestSecurity = new LabTestsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labTestsList($request, $requestSecurity);

    if ($response->labTestsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labTestsPartialUpdate

Update an existing lab test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabTestsPartialUpdateRequest();
    $request->doctor = 891302;
    $request->id = 'dcc4aa5f-3cab-4d90-9a97-2e056728227b';
    $request->order = 176935;

    $requestSecurity = new LabTestsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labTestsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labTestsRead

Retrieve an existing lab test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabTestsReadRequest();
    $request->doctor = 830477;
    $request->id = '309470bf-7a4f-4a87-8f53-5a6fae54ebf6';
    $request->order = 30426;

    $requestSecurity = new LabTestsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labTestsRead($request, $requestSecurity);

    if ($response->labTest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labTestsUpdate

Update an existing lab test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabTestsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabTestsUpdateRequest();
    $request->doctor = 759490;
    $request->id = '321f023b-75d2-4367-be1a-0cc8df79f0a3';
    $request->order = 590998;

    $requestSecurity = new LabTestsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->labTestsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## medicationsAppendToPharmacyNote

Append a message to the "pharmacy_note" section of the prescription, in a new paragraph

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsAppendToPharmacyNoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsAppendToPharmacyNoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MedicationsAppendToPharmacyNoteRequest();
    $request->doctor = 404774;
    $request->id = 'd90c364b-7c15-4dfb-ace1-88b1c4ee2c8c';
    $request->patient = 428378;

    $requestSecurity = new MedicationsAppendToPharmacyNoteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->medicationsAppendToPharmacyNote($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## medicationsCreate

Create patient medications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MedicationsCreateRequest();
    $request->doctor = 753087;
    $request->patient = 923159;

    $requestSecurity = new MedicationsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->medicationsCreate($request, $requestSecurity);

    if ($response->patientDrug !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## medicationsList

Retrieve or search patient medications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MedicationsListRequest();
    $request->cursor = 'ex';
    $request->doctor = 105094;
    $request->pageSize = 86955;
    $request->patient = 982574;

    $requestSecurity = new MedicationsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->medicationsList($request, $requestSecurity);

    if ($response->medicationsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## medicationsPartialUpdate

Update an existing patient medications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MedicationsPartialUpdateRequest();
    $request->doctor = 930877;
    $request->id = 'eb1c7cbd-b6ee-4c74-b78b-a25317747dc9';
    $request->patient = 72422;

    $requestSecurity = new MedicationsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->medicationsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## medicationsRead

Retrieve an existing patient medications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MedicationsReadRequest();
    $request->doctor = 348665;
    $request->id = 'ad2caf5d-d672-43dc-8f5a-e2f3a6b70087';
    $request->patient = 546868;

    $requestSecurity = new MedicationsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->medicationsRead($request, $requestSecurity);

    if ($response->patientDrug !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## medicationsUpdate

Update an existing patient medications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\MedicationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MedicationsUpdateRequest();
    $request->doctor = 474885;
    $request->id = '56143f5a-6c98-4b55-9540-80d40bcacc6c';
    $request->patient = 743795;

    $requestSecurity = new MedicationsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->medicationsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientCommunicationsCreate

Create patient communication for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientCommunicationsCreateRequest();
    $request->doctor = 856568;
    $request->patient = 389287;

    $requestSecurity = new PatientCommunicationsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientCommunicationsCreate($request, $requestSecurity);

    if ($response->patientCommunication !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientCommunicationsList

Retrieve or search patient communications for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientCommunicationsListRequest();
    $request->cursor = 'nam';
    $request->doctor = 315387;
    $request->pageSize = 979011;
    $request->patient = 235482;

    $requestSecurity = new PatientCommunicationsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientCommunicationsList($request, $requestSecurity);

    if ($response->patientCommunicationsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientCommunicationsPartialUpdate

Update an existing patient communication for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientCommunicationsPartialUpdateRequest();
    $request->doctor = 898826;
    $request->id = 'c909304f-926b-4ad2-9538-19b474b0ed20';
    $request->patient = 919171;

    $requestSecurity = new PatientCommunicationsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientCommunicationsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientCommunicationsRead

Retrieve an existing patient communication for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientCommunicationsReadRequest();
    $request->doctor = 360635;
    $request->id = '6248fff6-39a9-410a-bdca-b62676696e1e';
    $request->patient = 790305;

    $requestSecurity = new PatientCommunicationsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientCommunicationsRead($request, $requestSecurity);

    if ($response->patientCommunication !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientCommunicationsUpdate

Update an existing patient communication for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientCommunicationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientCommunicationsUpdateRequest();
    $request->doctor = 53529;
    $request->id = '0221b335-d89a-4cb3-acfd-a8d0c549ef03';
    $request->patient = 367;

    $requestSecurity = new PatientCommunicationsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientCommunicationsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientFlagTypesCreate

Create patient flag types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientFlagTypesCreateRequest();
    $request->doctor = 43715;

    $requestSecurity = new PatientFlagTypesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientFlagTypesCreate($request, $requestSecurity);

    if ($response->patientFlagType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientFlagTypesList

Retrieve or search patient flag types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientFlagTypesListRequest();
    $request->cursor = 'tempora';
    $request->doctor = 595986;
    $request->pageSize = 462097;

    $requestSecurity = new PatientFlagTypesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientFlagTypesList($request, $requestSecurity);

    if ($response->patientFlagTypesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientFlagTypesPartialUpdate

Update an existing patient flag type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientFlagTypesPartialUpdateRequest();
    $request->doctor = 541009;
    $request->id = 'a61fa1cf-2068-48f7-bc1f-fc71dca163f2';

    $requestSecurity = new PatientFlagTypesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientFlagTypesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientFlagTypesRead

Retrieve an existing patient flag type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientFlagTypesReadRequest();
    $request->doctor = 657141;
    $request->id = '3c80a97f-f334-4cdd-b857-a9e61876c6ab';

    $requestSecurity = new PatientFlagTypesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientFlagTypesRead($request, $requestSecurity);

    if ($response->patientFlagType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientFlagTypesUpdate

Update an existing patient flag type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientFlagTypesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientFlagTypesUpdateRequest();
    $request->doctor = 126512;
    $request->id = '1d29dfc9-4d6f-4ecd-b993-90066a6d2d00';

    $requestSecurity = new PatientFlagTypesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientFlagTypesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientInterventionsCreate

Create patient intervention for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientInterventionsCreateRequest();
    $request->doctor = 4747;
    $request->patient = 244157;

    $requestSecurity = new PatientInterventionsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientInterventionsCreate($request, $requestSecurity);

    if ($response->patientIntervention !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientInterventionsList

Retrieve or search patient interventions for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientInterventionsListRequest();
    $request->cursor = 'ullam';
    $request->doctor = 339094;
    $request->pageSize = 242532;
    $request->patient = 188732;

    $requestSecurity = new PatientInterventionsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientInterventionsList($request, $requestSecurity);

    if ($response->patientInterventionsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientInterventionsPartialUpdate

Update an existing patient intervention for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientInterventionsPartialUpdateRequest();
    $request->doctor = 555386;
    $request->id = 'cec086fa-21e9-4152-8b31-19167b8e3c8d';
    $request->patient = 717853;

    $requestSecurity = new PatientInterventionsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientInterventionsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientInterventionsRead

Retrieve an existing patient intervention for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientInterventionsReadRequest();
    $request->doctor = 32945;
    $request->id = '3408d6d3-64ff-4d45-9906-d1263d48e935';
    $request->patient = 797527;

    $requestSecurity = new PatientInterventionsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientInterventionsRead($request, $requestSecurity);

    if ($response->patientIntervention !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientInterventionsUpdate

Update an existing patient intervention for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientInterventionsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientInterventionsUpdateRequest();
    $request->doctor = 175803;
    $request->id = 'c9e81f30-be3e-4432-82d7-216576506641';
    $request->patient = 525223;

    $requestSecurity = new PatientInterventionsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientInterventionsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientLabResultsCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientLabResultsCreateRequest();
    $request->doctor = 493579;
    $request->orderingDoctor = 40017;
    $request->patient = 825739;
    $request->since = 'provident';

    $requestSecurity = new PatientLabResultsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientLabResultsCreate($request, $requestSecurity);

    if ($response->patientLabResultSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientLabResultsDelete

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientLabResultsDeleteRequest();
    $request->doctor = 818422;
    $request->id = '21f9ad03-0c4e-4cc1-9a08-36429068b850';
    $request->orderingDoctor = 154425;
    $request->patient = 642576;
    $request->since = 'quaerat';

    $requestSecurity = new PatientLabResultsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientLabResultsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientLabResultsList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientLabResultsListRequest();
    $request->cursor = 'corporis';
    $request->doctor = 884325;
    $request->orderingDoctor = 481307;
    $request->pageSize = 958533;
    $request->patient = 459086;
    $request->since = 'neque';

    $requestSecurity = new PatientLabResultsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientLabResultsList($request, $requestSecurity);

    if ($response->patientLabResultsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientLabResultsPartialUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientLabResultsPartialUpdateRequest();
    $request->doctor = 697591;
    $request->id = 'c845e320-a319-4f4b-adf9-47c9a867bc42';
    $request->orderingDoctor = 299379;
    $request->patient = 171172;
    $request->since = 'aliquid';

    $requestSecurity = new PatientLabResultsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientLabResultsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientLabResultsRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientLabResultsReadRequest();
    $request->doctor = 431843;
    $request->id = '65816ddc-a8ef-451f-8b4c-593ec12cdaad';
    $request->orderingDoctor = 59023;
    $request->patient = 879208;
    $request->since = 'placeat';

    $requestSecurity = new PatientLabResultsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientLabResultsRead($request, $requestSecurity);

    if ($response->patientLabResultSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientLabResultsUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientLabResultsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientLabResultsUpdateRequest();
    $request->doctor = 464878;
    $request->id = 'afedbd80-df44-48a4-bf93-90c58880983d';
    $request->orderingDoctor = 683490;
    $request->patient = 704732;
    $request->since = 'maiores';

    $requestSecurity = new PatientLabResultsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientLabResultsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientMessagesCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientMessagesCreateRequest();
    $request->doctor = 622968;
    $request->patient = 926119;
    $request->since = 'a';

    $requestSecurity = new PatientMessagesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientMessagesCreate($request, $requestSecurity);

    if ($response->patientMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientMessagesList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientMessagesListRequest();
    $request->cursor = 'consectetur';
    $request->doctor = 958280;
    $request->pageSize = 977641;
    $request->patient = 824267;
    $request->since = 'repellendus';

    $requestSecurity = new PatientMessagesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientMessagesList($request, $requestSecurity);

    if ($response->patientMessagesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientMessagesPartialUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientMessagesPartialUpdateRequest();
    $request->doctor = 607742;
    $request->id = 'f7f079af-4d35-4724-8db0-f4d281187d56';
    $request->patient = 512408;
    $request->since = 'modi';

    $requestSecurity = new PatientMessagesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientMessagesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientMessagesRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientMessagesReadRequest();
    $request->doctor = 301701;
    $request->id = 'eded85a9-065e-4628-bdfc-2032b6c87992';
    $request->patient = 212682;
    $request->since = 'quidem';

    $requestSecurity = new PatientMessagesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientMessagesRead($request, $requestSecurity);

    if ($response->patientMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientMessagesUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientMessagesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientMessagesUpdateRequest();
    $request->doctor = 476614;
    $request->id = 'e13584f7-ae12-4c68-91f8-2ce115717230';
    $request->patient = 347460;
    $request->since = 'amet';

    $requestSecurity = new PatientMessagesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientMessagesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPhysicalExamsCreate

Create patient physical exam for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPhysicalExamsCreateRequest();
    $request->doctor = 454165;
    $request->patient = 454232;

    $requestSecurity = new PatientPhysicalExamsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientPhysicalExamsCreate($request, $requestSecurity);

    if ($response->patientPhysicalExam !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPhysicalExamsList

Retrieve or search patient physical exams for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPhysicalExamsListRequest();
    $request->cursor = 'pariatur';
    $request->doctor = 791421;
    $request->pageSize = 955065;
    $request->patient = 686301;

    $requestSecurity = new PatientPhysicalExamsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientPhysicalExamsList($request, $requestSecurity);

    if ($response->patientPhysicalExamsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPhysicalExamsPartialUpdate

Update an existing patient physical exam for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPhysicalExamsPartialUpdateRequest();
    $request->doctor = 518926;
    $request->id = '9df975e3-5668-4609-ae9c-3ddc5f111dea';
    $request->patient = 118020;

    $requestSecurity = new PatientPhysicalExamsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientPhysicalExamsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPhysicalExamsRead

Retrieve an existing patient physical exam for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPhysicalExamsReadRequest();
    $request->doctor = 32737;
    $request->id = '26d541a4-d190-4feb-a178-0bccc0dbbddb';
    $request->patient = 297325;

    $requestSecurity = new PatientPhysicalExamsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientPhysicalExamsRead($request, $requestSecurity);

    if ($response->patientPhysicalExam !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPhysicalExamsUpdate

Update an existing patient physical exam for CQM

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPhysicalExamsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPhysicalExamsUpdateRequest();
    $request->doctor = 512349;
    $request->id = '4708fb4e-391e-46bc-958c-4c4e54599ea3';
    $request->patient = 268749;

    $requestSecurity = new PatientPhysicalExamsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientPhysicalExamsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientRiskAssessmentsCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientRiskAssessmentsCreateRequest();
    $request->doctor = 134832;
    $request->patient = 129762;

    $requestSecurity = new PatientRiskAssessmentsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientRiskAssessmentsCreate($request, $requestSecurity);

    if ($response->patientRiskAssessment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientRiskAssessmentsList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientRiskAssessmentsListRequest();
    $request->cursor = 'suscipit';
    $request->doctor = 58808;
    $request->pageSize = 910410;
    $request->patient = 575753;

    $requestSecurity = new PatientRiskAssessmentsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientRiskAssessmentsList($request, $requestSecurity);

    if ($response->patientRiskAssessmentsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientRiskAssessmentsPartialUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientRiskAssessmentsPartialUpdateRequest();
    $request->doctor = 749537;
    $request->id = '200ce78a-1bd8-4fb7-a0a1-16ce723d4097';
    $request->patient = 963908;

    $requestSecurity = new PatientRiskAssessmentsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientRiskAssessmentsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientRiskAssessmentsRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientRiskAssessmentsReadRequest();
    $request->doctor = 644397;
    $request->id = '30e9af72-5b29-4122-830d-83f5aeb7799d';
    $request->patient = 126367;

    $requestSecurity = new PatientRiskAssessmentsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientRiskAssessmentsRead($request, $requestSecurity);

    if ($response->patientRiskAssessment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientRiskAssessmentsUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientRiskAssessmentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientRiskAssessmentsUpdateRequest();
    $request->doctor = 142856;
    $request->id = 'e8c1f849-3825-4fdc-82c8-76c2c2dfb4cf';
    $request->patient = 779748;

    $requestSecurity = new PatientRiskAssessmentsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientRiskAssessmentsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientVaccineRecordsCreate

Create patient vaccine records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientVaccineRecordsCreateRequest();
    $request->cvxCode = 'illo';
    $request->doctor = 751347;
    $request->patient = 460803;
    $request->since = 'nisi';

    $requestSecurity = new PatientVaccineRecordsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientVaccineRecordsCreate($request, $requestSecurity);

    if ($response->patientVaccineRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientVaccineRecordsList

Retrieve or search patient vaccine records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientVaccineRecordsListRequest();
    $request->cursor = 'explicabo';
    $request->cvxCode = 'sequi';
    $request->doctor = 4787;
    $request->pageSize = 970131;
    $request->patient = 553766;
    $request->since = 'numquam';

    $requestSecurity = new PatientVaccineRecordsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientVaccineRecordsList($request, $requestSecurity);

    if ($response->patientVaccineRecordsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientVaccineRecordsPartialUpdate

Update an existing patient vaccine records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientVaccineRecordsPartialUpdateRequest();
    $request->cvxCode = 'vitae';
    $request->doctor = 980376;
    $request->id = 'b1bd23fd-b14d-4b6b-a5a6-85998e22ae20';
    $request->patient = 838176;
    $request->since = 'id';

    $requestSecurity = new PatientVaccineRecordsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientVaccineRecordsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientVaccineRecordsRead

Retrieve an existing patient vaccine records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientVaccineRecordsReadRequest();
    $request->cvxCode = 'quae';
    $request->doctor = 414439;
    $request->id = 'fc2b271a-289c-457e-854e-90439d222465';
    $request->patient = 426819;
    $request->since = 'cupiditate';

    $requestSecurity = new PatientVaccineRecordsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientVaccineRecordsRead($request, $requestSecurity);

    if ($response->patientVaccineRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientVaccineRecordsUpdate

Update an existing patient vaccine records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientVaccineRecordsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientVaccineRecordsUpdateRequest();
    $request->cvxCode = 'modi';
    $request->doctor = 392311;
    $request->id = '2407084f-7ab3-47ce-b022-25194db55410';
    $request->patient = 629902;
    $request->since = 'possimus';

    $requestSecurity = new PatientVaccineRecordsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientVaccineRecordsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsCcda

Retrieve patient CCDA

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsCcdaRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsCcdaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsCcdaRequest();
    $request->chartId = 'quo';
    $request->dateOfBirth = 'suscipit';
    $request->doctor = 405041;
    $request->email = 'Manuela.Wyman@yahoo.com';
    $request->ethnicity = 'deserunt';
    $request->firstName = 'Burnice';
    $request->gender = 'female';
    $request->id = 'c7cdc981-f068-4981-96bb-33cfaa348c31';
    $request->lastName = 'Reichert';
    $request->preferredLanguage = 'voluptatibus';
    $request->race = 'magnam';
    $request->since = 'aperiam';

    $requestSecurity = new PatientsCcdaSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsCcda($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsCreate

Create patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsCreateRequest();
    $request->chartId = 'ducimus';
    $request->dateOfBirth = 'itaque';
    $request->doctor = 898197;
    $request->email = 'Xavier.Rosenbaum77@gmail.com';
    $request->ethnicity = 'numquam';
    $request->firstName = 'Bridgette';
    $request->gender = 'male';
    $request->lastName = 'Koss';
    $request->preferredLanguage = 'voluptatum';
    $request->race = 'reiciendis';
    $request->since = 'vitae';

    $requestSecurity = new PatientsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsCreate($request, $requestSecurity);

    if ($response->patient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsDelete

Delete an existing patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsDeleteRequest();
    $request->chartId = 'ullam';
    $request->dateOfBirth = 'nisi';
    $request->doctor = 159496;
    $request->email = 'Claud_Mante@yahoo.com';
    $request->ethnicity = 'perferendis';
    $request->firstName = 'Romaine';
    $request->gender = 'male';
    $request->id = '766324cc-b06c-48ca-92d0-2529270b8d57';
    $request->lastName = 'Conroy';
    $request->preferredLanguage = 'aspernatur';
    $request->race = 'at';
    $request->since = 'illum';

    $requestSecurity = new PatientsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsList

Retrieve or search patients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsListRequest();
    $request->chartId = 'praesentium';
    $request->cursor = 'sint';
    $request->dateOfBirth = 'exercitationem';
    $request->doctor = 739938;
    $request->email = 'Meagan.Schowalter29@yahoo.com';
    $request->ethnicity = 'pariatur';
    $request->firstName = 'Meda';
    $request->gender = 'male';
    $request->lastName = 'Hickle';
    $request->pageSize = 615532;
    $request->preferredLanguage = 'nisi';
    $request->race = 'provident';
    $request->since = 'amet';

    $requestSecurity = new PatientsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsList($request, $requestSecurity);

    if ($response->patientsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsOnpatientAccessCreate

Send new onpatient invite to patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsOnpatientAccessCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsOnpatientAccessCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsOnpatientAccessCreateRequest();
    $request->chartId = 'dolor';
    $request->dateOfBirth = 'nostrum';
    $request->doctor = 184738;
    $request->email = 'Jason.Greenholt@hotmail.com';
    $request->ethnicity = 'adipisci';
    $request->firstName = 'Kristy';
    $request->gender = 'male';
    $request->id = '4d78de3b-6e93-489f-9abb-7f662550a283';
    $request->lastName = 'Leannon';
    $request->preferredLanguage = 'qui';
    $request->race = 'deserunt';
    $request->since = 'eligendi';

    $requestSecurity = new PatientsOnpatientAccessCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsOnpatientAccessCreate($request, $requestSecurity);

    if ($response->patient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsOnpatientAccessDelete

Revoke sent onpatient invites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsOnpatientAccessDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsOnpatientAccessDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsOnpatientAccessDeleteRequest();
    $request->chartId = 'incidunt';
    $request->dateOfBirth = 'deleniti';
    $request->doctor = 220746;
    $request->email = 'Viviane23@hotmail.com';
    $request->ethnicity = 'inventore';
    $request->firstName = 'Erica';
    $request->gender = 'male';
    $request->id = 'ba650164-e06f-45bf-aae5-91bc8bdef361';
    $request->lastName = 'Corkery';
    $request->preferredLanguage = 'nam';
    $request->race = 'ex';
    $request->since = 'neque';

    $requestSecurity = new PatientsOnpatientAccessDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsOnpatientAccessDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsOnpatientAccessRead

Retrieve or search existing onpatient access invites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsOnpatientAccessReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsOnpatientAccessReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsOnpatientAccessReadRequest();
    $request->chartId = 'quod';
    $request->dateOfBirth = 'eos';
    $request->doctor = 186;
    $request->email = 'Vena_Schumm@gmail.com';
    $request->ethnicity = 'quaerat';
    $request->firstName = 'Alvina';
    $request->gender = 'female';
    $request->id = '74a68a9a-35d0-486b-af66-fef020e9f443';
    $request->lastName = 'Robel';
    $request->preferredLanguage = 'incidunt';
    $request->race = 'dolores';
    $request->since = 'enim';

    $requestSecurity = new PatientsOnpatientAccessReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsOnpatientAccessRead($request, $requestSecurity);

    if ($response->patient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsPartialUpdate

Update an existing patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsPartialUpdateRequest();
    $request->chartId = 'nihil';
    $request->dateOfBirth = 'libero';
    $request->doctor = 607205;
    $request->email = 'Chelsea_Schamberger@yahoo.com';
    $request->ethnicity = 'cum';
    $request->firstName = 'Rosa';
    $request->gender = 'male';
    $request->id = '6a61efa2-1982-458f-90a9-eba47f7d3ef0';
    $request->lastName = 'Hahn';
    $request->preferredLanguage = 'excepturi';
    $request->race = 'aliquid';
    $request->since = 'dolore';

    $requestSecurity = new PatientsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsQrda1

Retrieve patient QRDA1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsQrda1Request;
use \OpenAPI\OpenAPI\Models\Operations\PatientsQrda1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsQrda1Request();
    $request->chartId = 'voluptatem';
    $request->dateOfBirth = 'illum';
    $request->doctor = 388006;
    $request->email = 'Beulah11@yahoo.com';
    $request->ethnicity = 'quisquam';
    $request->firstName = 'Kamron';
    $request->gender = 'female';
    $request->id = 'adf596fd-f1ad-4837-ae80-c1c19c95ba99';
    $request->lastName = 'Macejkovic';
    $request->preferredLanguage = 'laboriosam';
    $request->race = 'ducimus';
    $request->since = 'voluptatum';

    $requestSecurity = new PatientsQrda1Security();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsQrda1($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsRead

Retrieve an existing patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsReadRequest();
    $request->chartId = 'sapiente';
    $request->dateOfBirth = 'deserunt';
    $request->doctor = 221240;
    $request->email = 'Humberto_Mayer@hotmail.com';
    $request->ethnicity = 'cupiditate';
    $request->firstName = 'Annamarie';
    $request->gender = 'male';
    $request->id = 'f388ce03-6144-448c-b977-a0ef2f536028';
    $request->lastName = 'Toy';
    $request->preferredLanguage = 'a';
    $request->race = 'itaque';
    $request->since = 'eveniet';

    $requestSecurity = new PatientsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsRead($request, $requestSecurity);

    if ($response->patient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsSummaryCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsSummaryCreateRequest();
    $request->dateOfBirth = 'repellat';
    $request->doctor = 584663;
    $request->firstName = 'Dasia';
    $request->gender = 'female';
    $request->lastName = 'Bernier';
    $request->since = 'veniam';

    $requestSecurity = new PatientsSummaryCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsSummaryCreate($request, $requestSecurity);

    if ($response->patient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsSummaryDelete

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsSummaryDeleteRequest();
    $request->dateOfBirth = 'sed';
    $request->doctor = 897914;
    $request->firstName = 'Reginald';
    $request->gender = 'female';
    $request->id = 'e253f4c1-57de-4aa7-970f-445accf667aa';
    $request->lastName = 'Ziemann';
    $request->since = 'cupiditate';

    $requestSecurity = new PatientsSummaryDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsSummaryDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsSummaryList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsSummaryListRequest();
    $request->cursor = 'soluta';
    $request->dateOfBirth = 'tempore';
    $request->doctor = 636190;
    $request->firstName = 'Russ';
    $request->gender = 'female';
    $request->lastName = 'Littel';
    $request->pageSize = 323215;
    $request->since = 'sapiente';

    $requestSecurity = new PatientsSummaryListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsSummaryList($request, $requestSecurity);

    if ($response->patientsSummaryList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsSummaryPartialUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsSummaryPartialUpdateRequest();
    $request->dateOfBirth = 'voluptates';
    $request->doctor = 281135;
    $request->firstName = 'Colin';
    $request->gender = 'female';
    $request->id = 'd6bf5c83-8fbb-48c2-8cb6-7fc4b425e99e';
    $request->lastName = 'Howe';
    $request->since = 'eos';

    $requestSecurity = new PatientsSummaryPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsSummaryPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsSummaryRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsSummaryReadRequest();
    $request->dateOfBirth = 'amet';
    $request->doctor = 279679;
    $request->firstName = 'Ottilie';
    $request->gender = 'male';
    $request->id = 'f7b79dfe-b77a-45c3-8d4b-af91e506ef89';
    $request->lastName = 'Armstrong';
    $request->since = 'dolorum';

    $requestSecurity = new PatientsSummaryReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsSummaryRead($request, $requestSecurity);

    if ($response->patient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsSummaryUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsSummaryUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsSummaryUpdateRequest();
    $request->dateOfBirth = 'nostrum';
    $request->doctor = 270862;
    $request->firstName = 'Modesta';
    $request->gender = 'female';
    $request->id = '75f16f56-d385-4a3c-8ac6-31b99e26ced8';
    $request->lastName = 'Will';
    $request->since = 'natus';

    $requestSecurity = new PatientsSummaryUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsSummaryUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientsUpdate

Update an existing patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientsUpdateRequest();
    $request->chartId = 'sapiente';
    $request->dateOfBirth = 'repellendus';
    $request->doctor = 706371;
    $request->email = 'Einar98@yahoo.com';
    $request->ethnicity = 'nisi';
    $request->firstName = 'Dejuan';
    $request->gender = 'male';
    $request->id = 'bf817837-b01a-4fdd-b886-24189eb44873';
    $request->lastName = 'Williamson';
    $request->preferredLanguage = 'quis';
    $request->race = 'accusantium';
    $request->since = 'ratione';

    $requestSecurity = new PatientsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->patientsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prescriptionMessagesList

Retrieve or search prescription messages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrescriptionMessagesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrescriptionMessagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrescriptionMessagesListRequest();
    $request->cursor = 'consectetur';
    $request->doctor = 990540;
    $request->pageSize = 103053;
    $request->parentMessage = 571498;
    $request->patient = 821993;
    $request->since = 'tempore';

    $requestSecurity = new PrescriptionMessagesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->prescriptionMessagesList($request, $requestSecurity);

    if ($response->prescriptionMessagesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prescriptionMessagesRead

Retrieve an existing prescription message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrescriptionMessagesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrescriptionMessagesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrescriptionMessagesReadRequest();
    $request->doctor = 992244;
    $request->id = '125ce415-2eab-49cd-be52-24a6a0e123b7';
    $request->parentMessage = 546540;
    $request->patient = 251522;
    $request->since = 'esse';

    $requestSecurity = new PrescriptionMessagesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->prescriptionMessagesRead($request, $requestSecurity);

    if ($response->prescriptionMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## problemsCreate

Create patient problems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProblemsCreateRequest();
    $request->doctor = 876682;
    $request->patient = 752919;

    $requestSecurity = new ProblemsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->problemsCreate($request, $requestSecurity);

    if ($response->patientProblem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## problemsList

Retrieve or search patient problems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProblemsListRequest();
    $request->cursor = 'minima';
    $request->doctor = 607276;
    $request->pageSize = 924623;
    $request->patient = 102754;

    $requestSecurity = new ProblemsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->problemsList($request, $requestSecurity);

    if ($response->problemsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## problemsPartialUpdate

Update an existing patient problems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProblemsPartialUpdateRequest();
    $request->doctor = 974788;
    $request->id = '67f3c4cc-e4b6-4d76-96ff-3c5747501357';
    $request->patient = 887865;

    $requestSecurity = new ProblemsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->problemsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## problemsRead

Retrieve an existing patient problems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProblemsReadRequest();
    $request->doctor = 293799;
    $request->id = '4f51f8b0-84c3-4197-a193-a245467f9487';
    $request->patient = 260046;

    $requestSecurity = new ProblemsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->problemsRead($request, $requestSecurity);

    if ($response->patientProblem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## problemsUpdate

Update an existing patient problems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProblemsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProblemsUpdateRequest();
    $request->doctor = 811380;
    $request->id = '2d5cc497-2233-4e66-bd8f-e5d00b979ef2';
    $request->patient = 23236;

    $requestSecurity = new ProblemsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->problemsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reminderProfilesCreate

Create reminder profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReminderProfilesCreateRequest();
    $request->doctor = 243247;

    $requestSecurity = new ReminderProfilesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->reminderProfilesCreate($request, $requestSecurity);

    if ($response->reminderProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reminderProfilesDelete

Delete an existing reminder profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReminderProfilesDeleteRequest();
    $request->doctor = 531104;
    $request->id = '7320590c-cc10-4964-8031-3b3e5044f65f';

    $requestSecurity = new ReminderProfilesDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->reminderProfilesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reminderProfilesList

Retrieve or search reminder profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReminderProfilesListRequest();
    $request->cursor = 'debitis';
    $request->doctor = 442668;
    $request->pageSize = 181041;

    $requestSecurity = new ReminderProfilesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->reminderProfilesList($request, $requestSecurity);

    if ($response->reminderProfilesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reminderProfilesPartialUpdate

Update an existing reminder profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReminderProfilesPartialUpdateRequest();
    $request->doctor = 824861;
    $request->id = 'c4077d0c-c3f4-408e-bc15-ceb4d6e1eae0';

    $requestSecurity = new ReminderProfilesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->reminderProfilesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reminderProfilesRead

Retrieve an existing reminder profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReminderProfilesReadRequest();
    $request->doctor = 980705;
    $request->id = '75aedf2a-cab5-48b9-91c9-26ddb589461e';

    $requestSecurity = new ReminderProfilesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->reminderProfilesRead($request, $requestSecurity);

    if ($response->reminderProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reminderProfilesUpdate

Update an existing reminder profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReminderProfilesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReminderProfilesUpdateRequest();
    $request->doctor = 484833;
    $request->id = '421cbe6d-9502-4f0e-a930-b69f7ac2f72f';

    $requestSecurity = new ReminderProfilesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->reminderProfilesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sublabsCreate

Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SublabsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SublabsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->sublabsCreate($requestSecurity);

    if ($response->labVendorLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sublabsDelete

Delete an existing sub vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SublabsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\SublabsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SublabsDeleteRequest();
    $request->id = 550519;

    $requestSecurity = new SublabsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->sublabsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sublabsList

Retrieve or search sub vendors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SublabsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\SublabsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SublabsListRequest();
    $request->cursor = 'deleniti';
    $request->pageSize = 313223;

    $requestSecurity = new SublabsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->sublabsList($request, $requestSecurity);

    if ($response->sublabsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sublabsPartialUpdate

Update an existing sub vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SublabsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\SublabsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SublabsPartialUpdateRequest();
    $request->id = 24614;

    $requestSecurity = new SublabsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->sublabsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sublabsRead

Retrieve an existing sub vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SublabsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\SublabsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SublabsReadRequest();
    $request->id = 27955;

    $requestSecurity = new SublabsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->sublabsRead($request, $requestSecurity);

    if ($response->labVendorLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sublabsUpdate

Update an existing sub vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SublabsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\SublabsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SublabsUpdateRequest();
    $request->id = 619772;

    $requestSecurity = new SublabsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clinical->sublabsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
