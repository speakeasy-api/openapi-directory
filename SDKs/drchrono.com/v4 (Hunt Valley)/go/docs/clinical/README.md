# Clinical

## Overview

Create and manage clinical resources

### Available Operations

* [AllergiesCreate](#allergiescreate) - Create patient allergy
* [AllergiesList](#allergieslist) - Retrieve or search patient allergies
* [AllergiesPartialUpdate](#allergiespartialupdate) - Update an existing patient allergy
* [AllergiesRead](#allergiesread) - Retrieve an existing patient allergy
* [AllergiesUpdate](#allergiesupdate) - Update an existing patient allergy
* [AmendmentsCreate](#amendmentscreate) - Create patient amendments to a patient's clinical records
* [AmendmentsDelete](#amendmentsdelete) - Delete an existing patient amendment, you can only interact with amendments created by your API application
* [AmendmentsList](#amendmentslist) - Retrieve or search patient amendments. You can only interact with amendments created by your API application
* [AmendmentsPartialUpdate](#amendmentspartialupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [AmendmentsRead](#amendmentsread) - Retrieve an existing patient amendment, you can only interact with amendments created by your API application
* [AmendmentsUpdate](#amendmentsupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [AppointmentProfilesCreate](#appointmentprofilescreate) - Create appointment profiles for a doctor's calendar
* [AppointmentProfilesDelete](#appointmentprofilesdelete) - Delete an existing appointment profile
* [AppointmentProfilesList](#appointmentprofileslist) - Retrieve or search appointment profiles for a doctor's calendar
* [AppointmentProfilesPartialUpdate](#appointmentprofilespartialupdate) - Update an existing appointment profile
* [AppointmentProfilesRead](#appointmentprofilesread) - Retrieve an existing appointment profile
* [AppointmentProfilesUpdate](#appointmentprofilesupdate) - Update an existing appointment profile
* [AppointmentTemplatesCreate](#appointmenttemplatescreate) - Create appointment templates for a doctor's calendar
* [AppointmentTemplatesDelete](#appointmenttemplatesdelete) - Delete an existing appointment template
* [AppointmentTemplatesList](#appointmenttemplateslist) - Retrieve or search appointment templates for a doctor's calendar
* [AppointmentTemplatesPartialUpdate](#appointmenttemplatespartialupdate) - Update an existing appointment template
* [AppointmentTemplatesRead](#appointmenttemplatesread) - Retrieve an existing appointment template
* [AppointmentTemplatesUpdate](#appointmenttemplatesupdate) - Update an existing appointment template
* [AppointmentsCreate](#appointmentscreate) - Create a new appointment or break on doctor's calendar
* [AppointmentsDelete](#appointmentsdelete) - Delete an existing appointment or break
* [AppointmentsList](#appointmentslist) - Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            
* [AppointmentsPartialUpdate](#appointmentspartialupdate) - Update an existing appointment or break
* [AppointmentsRead](#appointmentsread) - Retrieve an existing appointment or break
* [AppointmentsUpdate](#appointmentsupdate) - Update an existing appointment or break
* [CarePlansList](#careplanslist) - Retrieve or search care plans
* [CarePlansRead](#careplansread) - Retrieve an existing care plan
* [CareTeamMembersList](#careteammemberslist)
* [CareTeamMembersRead](#careteammembersread)
* [ClaimBillingNotesCreate](#claimbillingnotescreate) - Create a new billing note
* [ClaimBillingNotesList](#claimbillingnoteslist) - Retrieve or search billing notes
* [ClaimBillingNotesRead](#claimbillingnotesread) - Retrieve an existing billing note
* [ClinicalNoteFieldTypesList](#clinicalnotefieldtypeslist) - Retrieve or search clinical note field types
* [ClinicalNoteFieldTypesRead](#clinicalnotefieldtypesread) - Retrieve an existing clinial note field type
* [ClinicalNoteFieldValuesCreate](#clinicalnotefieldvaluescreate) - Create clinical note field value
* [ClinicalNoteFieldValuesList](#clinicalnotefieldvalueslist) - Retrieve or search clinical note field values
* [ClinicalNoteFieldValuesPartialUpdate](#clinicalnotefieldvaluespartialupdate) - Update an existing clinical note field value
* [ClinicalNoteFieldValuesRead](#clinicalnotefieldvaluesread) - Retrieve an existing clinical note field value
* [ClinicalNoteFieldValuesUpdate](#clinicalnotefieldvaluesupdate) - Update an existing clinical note field value
* [ClinicalNoteTemplatesList](#clinicalnotetemplateslist) - Retrieve or search clinical note templates
* [ClinicalNoteTemplatesRead](#clinicalnotetemplatesread) - Retrieve an existing clinical note tempalte
* [ClinicalNotesList](#clinicalnoteslist)
* [ClinicalNotesRead](#clinicalnotesread)
* [ConsentFormsApplyToAppointment](#consentformsapplytoappointment) - Assign (apply) a consent form to appointment
* [ConsentFormsCreate](#consentformscreate) - Create a patient consent form
* [ConsentFormsList](#consentformslist) - Retrieve or search patient consent forms
* [ConsentFormsPartialUpdate](#consentformspartialupdate) - Update an existing patient consent form
* [ConsentFormsRead](#consentformsread) - Retrieve an existing patient consent form
* [ConsentFormsUnapplyFromAppointment](#consentformsunapplyfromappointment) - Unassign (unapply) a consent form from appointment
* [ConsentFormsUpdate](#consentformsupdate) - Update an existing patient consent form
* [CustomAppointmentFieldsCreate](#customappointmentfieldscreate) - Create custom appointment fields
* [CustomAppointmentFieldsList](#customappointmentfieldslist) - Retrieve or search custom appointment fields
* [CustomAppointmentFieldsPartialUpdate](#customappointmentfieldspartialupdate) - Update an existing custom appointment field
* [CustomAppointmentFieldsRead](#customappointmentfieldsread) - Retrieve an existing custom appointment field
* [CustomAppointmentFieldsUpdate](#customappointmentfieldsupdate) - Update an existing custom appointment field
* [CustomDemographicsCreate](#customdemographicscreate) - Create custom demographics fields
* [CustomDemographicsList](#customdemographicslist) - Retrieve or search custom demographics fields
* [CustomDemographicsPartialUpdate](#customdemographicspartialupdate) - Update an existing custom demographics field
* [CustomDemographicsRead](#customdemographicsread) - Retrieve an existing custom demographics field
* [CustomDemographicsUpdate](#customdemographicsupdate) - Update an existing custom demographics field
* [CustomVitalsList](#customvitalslist) - Retrieve or search custom vital types
* [CustomVitalsRead](#customvitalsread) - Retrieve an existing custom vital type
* [DocumentsCreate](#documentscreate) - Create documents
* [DocumentsDelete](#documentsdelete) - Delete an existing appointment template
* [DocumentsList](#documentslist) - Retrieve or search documents
* [DocumentsPartialUpdate](#documentspartialupdate) - Update an existing appointment template
* [DocumentsRead](#documentsread) - Retrieve an existing appointment template
* [DocumentsUpdate](#documentsupdate) - Update an existing appointment template
* [EobsCreate](#eobscreate) - Create EOB object
* [EobsList](#eobslist) - Retrieve or search EOB objects
* [EobsRead](#eobsread) - Retrieve an existing EOB object
* [FeeSchedulesList](#feescheduleslist)
* [FeeSchedulesRead](#feeschedulesread)
* [ImplantableDevicesList](#implantabledeviceslist) - Retrieve or search implantable devices
* [ImplantableDevicesRead](#implantabledevicesread) - Retrieve an existing implantable device
* [InsurancesList](#insuranceslist)
* [InsurancesRead](#insurancesread)
* [LabDocumentsCreate](#labdocumentscreate) - Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabDocumentsDelete](#labdocumentsdelete) - Delete an existing lab order document
* [LabDocumentsList](#labdocumentslist) - Retrieve or search lab order documents
* [LabDocumentsPartialUpdate](#labdocumentspartialupdate) - Update an existing lab order document
* [LabDocumentsRead](#labdocumentsread) - Retrieve an existing lab order document
* [LabDocumentsUpdate](#labdocumentsupdate) - Update an existing lab order document
* [LabOrdersCreate](#laborderscreate) - Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabOrdersDelete](#labordersdelete) - Delete an existing lab order
* [LabOrdersList](#laborderslist) - Retrieve or search lab orders
* [LabOrdersPartialUpdate](#laborderspartialupdate) - Update an existing lab order
* [LabOrdersRead](#labordersread) - Retrieve an existing lab order
* [LabOrdersSummaryList](#laborderssummarylist)
* [LabOrdersSummaryRead](#laborderssummaryread)
* [LabOrdersUpdate](#labordersupdate) - Update an existing lab order
* [LabResultsCreate](#labresultscreate) - Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabResultsDelete](#labresultsdelete) - Delete an existing lab result
* [LabResultsList](#labresultslist) - Retrieve or search lab results
* [LabResultsPartialUpdate](#labresultspartialupdate) - Update an existing lab result
* [LabResultsRead](#labresultsread) - Retrieve an existing lab result
* [LabResultsUpdate](#labresultsupdate) - Update an existing lab result
* [LabTestsCreate](#labtestscreate) - Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabTestsDelete](#labtestsdelete) - Delete an existing lab test
* [LabTestsList](#labtestslist) - Retrieve or search lab tests
* [LabTestsPartialUpdate](#labtestspartialupdate) - Update an existing lab test
* [LabTestsRead](#labtestsread) - Retrieve an existing lab test
* [LabTestsUpdate](#labtestsupdate) - Update an existing lab test
* [MedicationsAppendToPharmacyNote](#medicationsappendtopharmacynote) - Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
* [MedicationsCreate](#medicationscreate) - Create patient medications
* [MedicationsList](#medicationslist) - Retrieve or search patient medications
* [MedicationsPartialUpdate](#medicationspartialupdate) - Update an existing patient medications
* [MedicationsRead](#medicationsread) - Retrieve an existing patient medications
* [MedicationsUpdate](#medicationsupdate) - Update an existing patient medications
* [PatientCommunicationsCreate](#patientcommunicationscreate) - Create patient communication for CQM
* [PatientCommunicationsList](#patientcommunicationslist) - Retrieve or search patient communications for CQM
* [PatientCommunicationsPartialUpdate](#patientcommunicationspartialupdate) - Update an existing patient communication for CQM
* [PatientCommunicationsRead](#patientcommunicationsread) - Retrieve an existing patient communication for CQM
* [PatientCommunicationsUpdate](#patientcommunicationsupdate) - Update an existing patient communication for CQM
* [PatientFlagTypesCreate](#patientflagtypescreate) - Create patient flag types
* [PatientFlagTypesList](#patientflagtypeslist) - Retrieve or search patient flag types
* [PatientFlagTypesPartialUpdate](#patientflagtypespartialupdate) - Update an existing patient flag type
* [PatientFlagTypesRead](#patientflagtypesread) - Retrieve an existing patient flag type
* [PatientFlagTypesUpdate](#patientflagtypesupdate) - Update an existing patient flag type
* [PatientInterventionsCreate](#patientinterventionscreate) - Create patient intervention for CQM
* [PatientInterventionsList](#patientinterventionslist) - Retrieve or search patient interventions for CQM
* [PatientInterventionsPartialUpdate](#patientinterventionspartialupdate) - Update an existing patient intervention for CQM
* [PatientInterventionsRead](#patientinterventionsread) - Retrieve an existing patient intervention for CQM
* [PatientInterventionsUpdate](#patientinterventionsupdate) - Update an existing patient intervention for CQM
* [PatientLabResultsCreate](#patientlabresultscreate)
* [PatientLabResultsDelete](#patientlabresultsdelete)
* [PatientLabResultsList](#patientlabresultslist)
* [PatientLabResultsPartialUpdate](#patientlabresultspartialupdate)
* [PatientLabResultsRead](#patientlabresultsread)
* [PatientLabResultsUpdate](#patientlabresultsupdate)
* [PatientMessagesCreate](#patientmessagescreate)
* [PatientMessagesList](#patientmessageslist)
* [PatientMessagesPartialUpdate](#patientmessagespartialupdate)
* [PatientMessagesRead](#patientmessagesread)
* [PatientMessagesUpdate](#patientmessagesupdate)
* [PatientPhysicalExamsCreate](#patientphysicalexamscreate) - Create patient physical exam for CQM
* [PatientPhysicalExamsList](#patientphysicalexamslist) - Retrieve or search patient physical exams for CQM
* [PatientPhysicalExamsPartialUpdate](#patientphysicalexamspartialupdate) - Update an existing patient physical exam for CQM
* [PatientPhysicalExamsRead](#patientphysicalexamsread) - Retrieve an existing patient physical exam for CQM
* [PatientPhysicalExamsUpdate](#patientphysicalexamsupdate) - Update an existing patient physical exam for CQM
* [PatientRiskAssessmentsCreate](#patientriskassessmentscreate)
* [PatientRiskAssessmentsList](#patientriskassessmentslist)
* [PatientRiskAssessmentsPartialUpdate](#patientriskassessmentspartialupdate)
* [PatientRiskAssessmentsRead](#patientriskassessmentsread)
* [PatientRiskAssessmentsUpdate](#patientriskassessmentsupdate)
* [PatientVaccineRecordsCreate](#patientvaccinerecordscreate) - Create patient vaccine records
* [PatientVaccineRecordsList](#patientvaccinerecordslist) - Retrieve or search patient vaccine records
* [PatientVaccineRecordsPartialUpdate](#patientvaccinerecordspartialupdate) - Update an existing patient vaccine records
* [PatientVaccineRecordsRead](#patientvaccinerecordsread) - Retrieve an existing patient vaccine records
* [PatientVaccineRecordsUpdate](#patientvaccinerecordsupdate) - Update an existing patient vaccine records
* [PatientsCcda](#patientsccda) - Retrieve patient CCDA
* [PatientsCreate](#patientscreate) - Create patient
* [PatientsDelete](#patientsdelete) - Delete an existing patient
* [PatientsList](#patientslist) - Retrieve or search patients
* [PatientsOnpatientAccessCreate](#patientsonpatientaccesscreate) - Send new onpatient invite to patient
* [PatientsOnpatientAccessDelete](#patientsonpatientaccessdelete) - Revoke sent onpatient invites
* [PatientsOnpatientAccessRead](#patientsonpatientaccessread) - Retrieve or search existing onpatient access invites
* [PatientsPartialUpdate](#patientspartialupdate) - Update an existing patient
* [PatientsQrda1](#patientsqrda1) - Retrieve patient QRDA1
* [PatientsRead](#patientsread) - Retrieve an existing patient
* [PatientsSummaryCreate](#patientssummarycreate)
* [PatientsSummaryDelete](#patientssummarydelete)
* [PatientsSummaryList](#patientssummarylist)
* [PatientsSummaryPartialUpdate](#patientssummarypartialupdate)
* [PatientsSummaryRead](#patientssummaryread)
* [PatientsSummaryUpdate](#patientssummaryupdate)
* [PatientsUpdate](#patientsupdate) - Update an existing patient
* [PrescriptionMessagesList](#prescriptionmessageslist) - Retrieve or search prescription messages
* [PrescriptionMessagesRead](#prescriptionmessagesread) - Retrieve an existing prescription message
* [ProblemsCreate](#problemscreate) - Create patient problems
* [ProblemsList](#problemslist) - Retrieve or search patient problems
* [ProblemsPartialUpdate](#problemspartialupdate) - Update an existing patient problems
* [ProblemsRead](#problemsread) - Retrieve an existing patient problems
* [ProblemsUpdate](#problemsupdate) - Update an existing patient problems
* [ReminderProfilesCreate](#reminderprofilescreate) - Create reminder profile
* [ReminderProfilesDelete](#reminderprofilesdelete) - Delete an existing reminder profile
* [ReminderProfilesList](#reminderprofileslist) - Retrieve or search reminder profiles
* [ReminderProfilesPartialUpdate](#reminderprofilespartialupdate) - Update an existing reminder profile
* [ReminderProfilesRead](#reminderprofilesread) - Retrieve an existing reminder profile
* [ReminderProfilesUpdate](#reminderprofilesupdate) - Update an existing reminder profile
* [SublabsCreate](#sublabscreate) - Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [SublabsDelete](#sublabsdelete) - Delete an existing sub vendor
* [SublabsList](#sublabslist) - Retrieve or search sub vendors
* [SublabsPartialUpdate](#sublabspartialupdate) - Update an existing sub vendor
* [SublabsRead](#sublabsread) - Retrieve an existing sub vendor
* [SublabsUpdate](#sublabsupdate) - Update an existing sub vendor

## AllergiesCreate

Create patient allergy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AllergiesCreate(ctx, operations.AllergiesCreateRequest{
        Doctor: sdk.Int64(44612),
        Patient: sdk.Int64(715179),
    }, operations.AllergiesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientAllergy != nil {
        // handle response
    }
}
```

## AllergiesList

Retrieve or search patient allergies

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AllergiesList(ctx, operations.AllergiesListRequest{
        Cursor: sdk.String("quod"),
        Doctor: sdk.Int64(490819),
        PageSize: sdk.Int64(76956),
        Patient: sdk.Int64(469498),
    }, operations.AllergiesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllergiesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AllergiesPartialUpdate

Update an existing patient allergy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AllergiesPartialUpdate(ctx, operations.AllergiesPartialUpdateRequest{
        Doctor: sdk.Int64(518835),
        ID: "e4796f2a-70c6-4882-82aa-482562f222e9",
        Patient: sdk.Int64(543806),
    }, operations.AllergiesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AllergiesRead

Retrieve an existing patient allergy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AllergiesRead(ctx, operations.AllergiesReadRequest{
        Doctor: sdk.Int64(92260),
        ID: "7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37",
        Patient: sdk.Int64(503427),
    }, operations.AllergiesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientAllergy != nil {
        // handle response
    }
}
```

## AllergiesUpdate

Update an existing patient allergy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AllergiesUpdate(ctx, operations.AllergiesUpdateRequest{
        Doctor: sdk.Int64(590984),
        ID: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
        Patient: sdk.Int64(958983),
    }, operations.AllergiesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AmendmentsCreate

Create patient amendments to a patient's clinical records

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AmendmentsCreate(ctx, operations.AmendmentsCreateRequest{
        Appointment: sdk.Int64(119771),
        Doctor: sdk.Int64(355369),
        Patient: sdk.Int64(443879),
    }, operations.AmendmentsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientAmendment != nil {
        // handle response
    }
}
```

## AmendmentsDelete

Delete an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AmendmentsDelete(ctx, operations.AmendmentsDeleteRequest{
        Appointment: sdk.Int64(356707),
        Doctor: sdk.Int64(391774),
        ID: "082d68ea-19f1-4d17-8513-39d08086a184",
        Patient: sdk.Int64(32465),
    }, operations.AmendmentsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AmendmentsList

Retrieve or search patient amendments. You can only interact with amendments created by your API application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AmendmentsList(ctx, operations.AmendmentsListRequest{
        Appointment: sdk.Int64(221161),
        Cursor: sdk.String("occaecati"),
        Doctor: sdk.Int64(253191),
        PageSize: sdk.Int64(771089),
        Patient: sdk.Int64(131055),
    }, operations.AmendmentsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AmendmentsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AmendmentsPartialUpdate

Update an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AmendmentsPartialUpdate(ctx, operations.AmendmentsPartialUpdateRequest{
        Appointment: sdk.Int64(376226),
        Doctor: sdk.Int64(12036),
        ID: "71f93f5f-0642-4dac-baf5-15cc413aa63a",
        Patient: sdk.Int64(665859),
    }, operations.AmendmentsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AmendmentsRead

Retrieve an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AmendmentsRead(ctx, operations.AmendmentsReadRequest{
        Appointment: sdk.Int64(926880),
        Doctor: sdk.Int64(517309),
        ID: "d67864db-b675-4fd5-a60b-375ed4f6fbee",
        Patient: sdk.Int64(296556),
    }, operations.AmendmentsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientAmendment != nil {
        // handle response
    }
}
```

## AmendmentsUpdate

Update an existing patient amendment, you can only interact with amendments created by your API application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AmendmentsUpdate(ctx, operations.AmendmentsUpdateRequest{
        Appointment: sdk.Int64(121059),
        Doctor: sdk.Int64(992012),
        ID: "33317fe3-5b60-4eb1-aa42-6555ba3c2874",
        Patient: sdk.Int64(304468),
    }, operations.AmendmentsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentProfilesCreate

Create appointment profiles for a doctor's calendar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentProfilesCreate(ctx, operations.AppointmentProfilesCreateRequest{
        Doctor: sdk.Int64(885963),
    }, operations.AppointmentProfilesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentProfile != nil {
        // handle response
    }
}
```

## AppointmentProfilesDelete

Delete an existing appointment profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentProfilesDelete(ctx, operations.AppointmentProfilesDeleteRequest{
        Doctor: sdk.Int64(839189),
        ID: "53b88f3a-8d8f-45c0-b2f2-fb7b194a276b",
    }, operations.AppointmentProfilesDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentProfilesList

Retrieve or search appointment profiles for a doctor's calendar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentProfilesList(ctx, operations.AppointmentProfilesListRequest{
        Cursor: sdk.String("explicabo"),
        Doctor: sdk.Int64(378326),
        PageSize: sdk.Int64(604118),
    }, operations.AppointmentProfilesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentProfilesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppointmentProfilesPartialUpdate

Update an existing appointment profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentProfilesPartialUpdate(ctx, operations.AppointmentProfilesPartialUpdateRequest{
        Doctor: sdk.Int64(100032),
        ID: "6fe1f08f-4294-4e36-98f4-47f603e8b445",
    }, operations.AppointmentProfilesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentProfilesRead

Retrieve an existing appointment profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentProfilesRead(ctx, operations.AppointmentProfilesReadRequest{
        Doctor: sdk.Int64(894864),
        ID: "80ca55ef-d20e-4457-a185-8b6a89fbe3a5",
    }, operations.AppointmentProfilesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentProfile != nil {
        // handle response
    }
}
```

## AppointmentProfilesUpdate

Update an existing appointment profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentProfilesUpdate(ctx, operations.AppointmentProfilesUpdateRequest{
        Doctor: sdk.Int64(639028),
        ID: "a8e4824d-0ab4-4075-888e-51862065e904",
    }, operations.AppointmentProfilesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentTemplatesCreate

Create appointment templates for a doctor's calendar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentTemplatesCreate(ctx, operations.AppointmentTemplatesCreateRequest{
        Doctor: sdk.Int64(968865),
        Office: sdk.Int64(209750),
        Profile: sdk.Int64(690894),
    }, operations.AppointmentTemplatesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentTemplate != nil {
        // handle response
    }
}
```

## AppointmentTemplatesDelete

Delete an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentTemplatesDelete(ctx, operations.AppointmentTemplatesDeleteRequest{
        Doctor: sdk.Int64(115703),
        ID: "194b8abf-603a-479f-9dfe-0ab7da8a50ce",
        Office: sdk.Int64(97243),
        Profile: sdk.Int64(542457),
    }, operations.AppointmentTemplatesDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentTemplatesList

Retrieve or search appointment templates for a doctor's calendar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentTemplatesList(ctx, operations.AppointmentTemplatesListRequest{
        Cursor: sdk.String("reprehenderit"),
        Doctor: sdk.Int64(991142),
        Office: sdk.Int64(519952),
        PageSize: sdk.Int64(383103),
        Profile: sdk.Int64(693957),
    }, operations.AppointmentTemplatesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentTemplatesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppointmentTemplatesPartialUpdate

Update an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentTemplatesPartialUpdate(ctx, operations.AppointmentTemplatesPartialUpdateRequest{
        Doctor: sdk.Int64(806670),
        ID: "173d689e-ee95-426f-8d98-6e881ead4f0e",
        Office: sdk.Int64(116098),
        Profile: sdk.Int64(36033),
    }, operations.AppointmentTemplatesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentTemplatesRead

Retrieve an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentTemplatesRead(ctx, operations.AppointmentTemplatesReadRequest{
        Doctor: sdk.Int64(106429),
        ID: "2563f94e-29e9-473e-922a-57a15be3e060",
        Office: sdk.Int64(517612),
        Profile: sdk.Int64(61078),
    }, operations.AppointmentTemplatesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentTemplate != nil {
        // handle response
    }
}
```

## AppointmentTemplatesUpdate

Update an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentTemplatesUpdate(ctx, operations.AppointmentTemplatesUpdateRequest{
        Doctor: sdk.Int64(474668),
        ID: "e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9",
        Office: sdk.Int64(309251),
        Profile: sdk.Int64(477646),
    }, operations.AppointmentTemplatesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentsCreate

Create a new appointment or break on doctor's calendar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentsCreate(ctx, operations.AppointmentsCreateRequest{
        Date: sdk.String("ex"),
        DateRange: sdk.String("ut"),
        Doctor: sdk.Int64(633062),
        Office: sdk.Int64(238413),
        Patient: sdk.Int64(890653),
        Since: sdk.String("laudantium"),
        Status: sdk.String("eum"),
    }, operations.AppointmentsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Appointment != nil {
        // handle response
    }
}
```

## AppointmentsDelete

Delete an existing appointment or break

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentsDelete(ctx, operations.AppointmentsDeleteRequest{
        Date: sdk.String("nemo"),
        DateRange: sdk.String("recusandae"),
        Doctor: sdk.Int64(456520),
        ID: "956f9251-a5a9-4da6-a0ff-57bfaad4f9ef",
        Office: sdk.Int64(764562),
        Patient: sdk.Int64(113486),
        Since: sdk.String("rerum"),
        Status: sdk.String("tempora"),
    }, operations.AppointmentsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentsList

Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentsList(ctx, operations.AppointmentsListRequest{
        Cursor: sdk.String("quis"),
        Date: sdk.String("inventore"),
        DateRange: sdk.String("fugit"),
        Doctor: sdk.Int64(765271),
        Office: sdk.Int64(62636),
        PageSize: sdk.Int64(21688),
        Patient: sdk.Int64(241901),
        Since: sdk.String("aspernatur"),
        Status: sdk.String("eum"),
    }, operations.AppointmentsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppointmentsPartialUpdate

Update an existing appointment or break

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentsPartialUpdate(ctx, operations.AppointmentsPartialUpdateRequest{
        Date: sdk.String("eius"),
        DateRange: sdk.String("rem"),
        Doctor: sdk.Int64(871083),
        ID: "c2f61519-9ebf-4d0e-9fe6-c632ca3aed01",
        Office: sdk.Int64(90233),
        Patient: sdk.Int64(497777),
        Since: sdk.String("natus"),
        Status: sdk.String("occaecati"),
    }, operations.AppointmentsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppointmentsRead

Retrieve an existing appointment or break

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentsRead(ctx, operations.AppointmentsReadRequest{
        Date: sdk.String("suscipit"),
        DateRange: sdk.String("adipisci"),
        Doctor: sdk.Int64(96562),
        ID: "2fde0477-1778-4ff6-9d01-7476360a15db",
        Office: sdk.Int64(399667),
        Patient: sdk.Int64(639187),
        Since: sdk.String("suscipit"),
        Status: sdk.String("aliquid"),
    }, operations.AppointmentsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Appointment != nil {
        // handle response
    }
}
```

## AppointmentsUpdate

Update an existing appointment or break

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.AppointmentsUpdate(ctx, operations.AppointmentsUpdateRequest{
        Date: sdk.String("perferendis"),
        DateRange: sdk.String("eum"),
        Doctor: sdk.Int64(374753),
        ID: "9a1adeaa-b585-41d6-8645-b08b61891baa",
        Office: sdk.Int64(29634),
        Patient: sdk.Int64(959143),
        Since: sdk.String("officiis"),
        Status: sdk.String("architecto"),
    }, operations.AppointmentsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CarePlansList

Retrieve or search care plans

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CarePlansList(ctx, operations.CarePlansListRequest{
        Cursor: sdk.String("fuga"),
        Doctor: sdk.Int64(867168),
        PageSize: sdk.Int64(891315),
        Patient: sdk.Int64(29190),
        PlanType: sdk.Int64(1207),
    }, operations.CarePlansListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CarePlansList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CarePlansRead

Retrieve an existing care plan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CarePlansRead(ctx, operations.CarePlansReadRequest{
        Doctor: sdk.Int64(534917),
        ID: "e6f8c5f3-50d8-4cdb-9a34-181430104218",
        Patient: sdk.Int64(65604),
        PlanType: sdk.Int64(222658),
    }, operations.CarePlansReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CarePlan != nil {
        // handle response
    }
}
```

## CareTeamMembersList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CareTeamMembersList(ctx, operations.CareTeamMembersListRequest{
        Appointment: sdk.Int64(856277),
        Cursor: sdk.String("ipsam"),
        Doctor: sdk.Int64(162120),
        PageSize: sdk.Int64(55107),
        Patient: sdk.Int64(559682),
    }, operations.CareTeamMembersListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CareTeamMembersList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CareTeamMembersRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CareTeamMembersRead(ctx, operations.CareTeamMembersReadRequest{
        Appointment: sdk.Int64(911198),
        Doctor: sdk.Int64(773456),
        ID: "e7e253b6-6845-41c6-86e2-05e16deab3fe",
        Patient: sdk.Int64(759283),
    }, operations.CareTeamMembersReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CareTeamMember != nil {
        // handle response
    }
}
```

## ClaimBillingNotesCreate

Create a new billing note

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClaimBillingNotesCreate(ctx, operations.ClaimBillingNotesCreateRequest{
        Appointment: sdk.Int64(579681),
        Doctor: sdk.Int64(364544),
    }, operations.ClaimBillingNotesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimBillingNotes != nil {
        // handle response
    }
}
```

## ClaimBillingNotesList

Retrieve or search billing notes

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClaimBillingNotesList(ctx, operations.ClaimBillingNotesListRequest{
        Appointment: sdk.Int64(455898),
        Cursor: sdk.String("blanditiis"),
        Doctor: sdk.Int64(642352),
        PageSize: sdk.Int64(376389),
    }, operations.ClaimBillingNotesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimBillingNotesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClaimBillingNotesRead

Retrieve an existing billing note

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClaimBillingNotesRead(ctx, operations.ClaimBillingNotesReadRequest{
        Appointment: sdk.Int64(254025),
        Doctor: sdk.Int64(364912),
        ID: "84273a84-18d1-4623-89fb-0929921aefb9",
    }, operations.ClaimBillingNotesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimBillingNotes != nil {
        // handle response
    }
}
```

## ClinicalNoteFieldTypesList

Retrieve or search clinical note field types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteFieldTypesList(ctx, operations.ClinicalNoteFieldTypesListRequest{
        ClinicalNoteTemplate: sdk.Int64(966390),
        Cursor: sdk.String("minima"),
        Doctor: sdk.Int64(507636),
        PageSize: sdk.Int64(802692),
    }, operations.ClinicalNoteFieldTypesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClinicalNoteFieldTypesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClinicalNoteFieldTypesRead

Retrieve an existing clinial note field type

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteFieldTypesRead(ctx, operations.ClinicalNoteFieldTypesReadRequest{
        ClinicalNoteTemplate: sdk.Int64(300403),
        Doctor: sdk.Int64(836364),
        ID: "86e68e4b-e056-4013-b59d-a757a59ecfef",
    }, operations.ClinicalNoteFieldTypesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SoapNoteLineItemFieldType != nil {
        // handle response
    }
}
```

## ClinicalNoteFieldValuesCreate

Create clinical note field value

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteFieldValuesCreate(ctx, operations.ClinicalNoteFieldValuesCreateRequest{
        Appointment: sdk.Int64(404306),
        ClinicalNoteField: sdk.Int64(376741),
        ClinicalNoteTemplate: sdk.Int64(895346),
        Doctor: sdk.Int64(966148),
        Since: sdk.String("quae"),
    }, operations.ClinicalNoteFieldValuesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SoapNoteLineItemFieldValue != nil {
        // handle response
    }
}
```

## ClinicalNoteFieldValuesList

Retrieve or search clinical note field values

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteFieldValuesList(ctx, operations.ClinicalNoteFieldValuesListRequest{
        Appointment: sdk.Int64(791880),
        ClinicalNoteField: sdk.Int64(685478),
        ClinicalNoteTemplate: sdk.Int64(675689),
        Cursor: sdk.String("consectetur"),
        Doctor: sdk.Int64(244889),
        PageSize: sdk.Int64(538869),
        Since: sdk.String("ipsum"),
    }, operations.ClinicalNoteFieldValuesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClinicalNoteFieldValuesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClinicalNoteFieldValuesPartialUpdate

Update an existing clinical note field value

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteFieldValuesPartialUpdate(ctx, operations.ClinicalNoteFieldValuesPartialUpdateRequest{
        Appointment: sdk.Int64(773035),
        ClinicalNoteField: sdk.Int64(166047),
        ClinicalNoteTemplate: sdk.Int64(746585),
        Doctor: sdk.Int64(922757),
        ID: "b477373c-8d72-4f64-91db-1f2c4310661e",
        Since: sdk.String("excepturi"),
    }, operations.ClinicalNoteFieldValuesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ClinicalNoteFieldValuesRead

Retrieve an existing clinical note field value

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteFieldValuesRead(ctx, operations.ClinicalNoteFieldValuesReadRequest{
        Appointment: sdk.Int64(431994),
        ClinicalNoteField: sdk.Int64(246557),
        ClinicalNoteTemplate: sdk.Int64(284086),
        Doctor: sdk.Int64(596433),
        ID: "e1cf9e06-e3a4-4370-80ae-6b6bc9b8f759",
        Since: sdk.String("necessitatibus"),
    }, operations.ClinicalNoteFieldValuesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SoapNoteLineItemFieldValue != nil {
        // handle response
    }
}
```

## ClinicalNoteFieldValuesUpdate

Update an existing clinical note field value

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteFieldValuesUpdate(ctx, operations.ClinicalNoteFieldValuesUpdateRequest{
        Appointment: sdk.Int64(654082),
        ClinicalNoteField: sdk.Int64(769967),
        ClinicalNoteTemplate: sdk.Int64(373040),
        Doctor: sdk.Int64(357425),
        ID: "a9741d31-1352-4965-bb8a-7202611435e1",
        Since: sdk.String("ipsum"),
    }, operations.ClinicalNoteFieldValuesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ClinicalNoteTemplatesList

Retrieve or search clinical note templates

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteTemplatesList(ctx, operations.ClinicalNoteTemplatesListRequest{
        Cursor: sdk.String("unde"),
        Doctor: sdk.Int64(858338),
        PageSize: sdk.Int64(714376),
    }, operations.ClinicalNoteTemplatesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClinicalNoteTemplatesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClinicalNoteTemplatesRead

Retrieve an existing clinical note tempalte

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNoteTemplatesRead(ctx, operations.ClinicalNoteTemplatesReadRequest{
        Doctor: sdk.Int64(802894),
        ID: "2259b1ab-da8c-4070-a108-4cb0672d1ad8",
    }, operations.ClinicalNoteTemplatesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SoapNoteCustomReport != nil {
        // handle response
    }
}
```

## ClinicalNotesList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNotesList(ctx, operations.ClinicalNotesListRequest{
        Cursor: sdk.String("molestiae"),
        Date: sdk.String("provident"),
        DateRange: sdk.String("accusamus"),
        Doctor: sdk.Int64(896480),
        Office: sdk.Int64(733289),
        PageSize: sdk.Int64(575078),
        Patient: sdk.Int64(409726),
        Since: sdk.String("autem"),
    }, operations.ClinicalNotesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClinicalNotesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClinicalNotesRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ClinicalNotesRead(ctx, operations.ClinicalNotesReadRequest{
        Date: sdk.String("ipsam"),
        DateRange: sdk.String("rerum"),
        Doctor: sdk.Int64(515638),
        ID: "5efbd02b-ae0b-4e2d-b822-59e3ea4b5197",
        Office: sdk.Int64(963198),
        Patient: sdk.Int64(585593),
        Since: sdk.String("fugit"),
    }, operations.ClinicalNotesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClinicalNote != nil {
        // handle response
    }
}
```

## ConsentFormsApplyToAppointment

Assign (apply) a consent form to appointment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ConsentFormsApplyToAppointment(ctx, operations.ConsentFormsApplyToAppointmentRequest{
        Doctor: sdk.Int64(253625),
        ID: "43da7ce5-2b89-45c5-b7c6-454efb0b3489",
    }, operations.ConsentFormsApplyToAppointmentSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConsentFormsCreate

Create a patient consent form

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ConsentFormsCreate(ctx, operations.ConsentFormsCreateRequest{
        Doctor: sdk.Int64(375994),
    }, operations.ConsentFormsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentForm != nil {
        // handle response
    }
}
```

## ConsentFormsList

Retrieve or search patient consent forms

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ConsentFormsList(ctx, operations.ConsentFormsListRequest{
        Cursor: sdk.String("quo"),
        Doctor: sdk.Int64(242099),
        PageSize: sdk.Int64(795591),
    }, operations.ConsentFormsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentFormsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ConsentFormsPartialUpdate

Update an existing patient consent form

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ConsentFormsPartialUpdate(ctx, operations.ConsentFormsPartialUpdateRequest{
        Doctor: sdk.Int64(684553),
        ID: "5acfbe2f-d570-4757-b929-177deac646ec",
    }, operations.ConsentFormsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConsentFormsRead

Retrieve an existing patient consent form

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ConsentFormsRead(ctx, operations.ConsentFormsReadRequest{
        Doctor: sdk.Int64(697274),
        ID: "573409e3-eb1e-45a2-b12e-b07f116db995",
    }, operations.ConsentFormsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentForm != nil {
        // handle response
    }
}
```

## ConsentFormsUnapplyFromAppointment

Unassign (unapply) a consent form from appointment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ConsentFormsUnapplyFromAppointment(ctx, operations.ConsentFormsUnapplyFromAppointmentRequest{
        Doctor: sdk.Int64(306382),
        ID: "5fc95fa8-8970-4e18-9dbb-30fcb33ea055",
    }, operations.ConsentFormsUnapplyFromAppointmentSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConsentFormsUpdate

Update an existing patient consent form

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ConsentFormsUpdate(ctx, operations.ConsentFormsUpdateRequest{
        Doctor: sdk.Int64(727481),
        ID: "197cd44e-2f52-4d82-9351-3bb6f48b656b",
    }, operations.ConsentFormsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CustomAppointmentFieldsCreate

Create custom appointment fields

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomAppointmentFieldsCreate(ctx, operations.CustomAppointmentFieldsCreateRequest{
        Doctor: sdk.Int64(794507),
    }, operations.CustomAppointmentFieldsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomAppointmentFieldType != nil {
        // handle response
    }
}
```

## CustomAppointmentFieldsList

Retrieve or search custom appointment fields

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomAppointmentFieldsList(ctx, operations.CustomAppointmentFieldsListRequest{
        Cursor: sdk.String("facere"),
        Doctor: sdk.Int64(706061),
        PageSize: sdk.Int64(217663),
    }, operations.CustomAppointmentFieldsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomAppointmentFieldsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CustomAppointmentFieldsPartialUpdate

Update an existing custom appointment field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomAppointmentFieldsPartialUpdate(ctx, operations.CustomAppointmentFieldsPartialUpdateRequest{
        Doctor: sdk.Int64(318917),
        ID: "ff2e4b27-537a-48cd-9e73-19c177d525f7",
    }, operations.CustomAppointmentFieldsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CustomAppointmentFieldsRead

Retrieve an existing custom appointment field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomAppointmentFieldsRead(ctx, operations.CustomAppointmentFieldsReadRequest{
        Doctor: sdk.Int64(491201),
        ID: "b114eeb5-2ff7-485f-8378-14d4c98e0c2b",
    }, operations.CustomAppointmentFieldsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomAppointmentFieldType != nil {
        // handle response
    }
}
```

## CustomAppointmentFieldsUpdate

Update an existing custom appointment field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomAppointmentFieldsUpdate(ctx, operations.CustomAppointmentFieldsUpdateRequest{
        Doctor: sdk.Int64(711991),
        ID: "89eb75da-d636-4c60-8503-d8bb31180f73",
    }, operations.CustomAppointmentFieldsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CustomDemographicsCreate

Create custom demographics fields

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomDemographicsCreate(ctx, operations.CustomDemographicsCreateRequest{
        Doctor: sdk.Int64(587967),
    }, operations.CustomDemographicsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomPatientFieldType != nil {
        // handle response
    }
}
```

## CustomDemographicsList

Retrieve or search custom demographics fields

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomDemographicsList(ctx, operations.CustomDemographicsListRequest{
        Cursor: sdk.String("dolorum"),
        Doctor: sdk.Int64(897956),
        PageSize: sdk.Int64(592880),
    }, operations.CustomDemographicsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomDemographicsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CustomDemographicsPartialUpdate

Update an existing custom demographics field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomDemographicsPartialUpdate(ctx, operations.CustomDemographicsPartialUpdateRequest{
        Doctor: sdk.Int64(920272),
        ID: "057eb809-e281-4033-9f39-81d4c700b607",
    }, operations.CustomDemographicsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CustomDemographicsRead

Retrieve an existing custom demographics field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomDemographicsRead(ctx, operations.CustomDemographicsReadRequest{
        Doctor: sdk.Int64(998026),
        ID: "3c93c73b-9da3-4f2c-ada7-e23f2257411f",
    }, operations.CustomDemographicsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomPatientFieldType != nil {
        // handle response
    }
}
```

## CustomDemographicsUpdate

Update an existing custom demographics field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomDemographicsUpdate(ctx, operations.CustomDemographicsUpdateRequest{
        Doctor: sdk.Int64(644479),
        ID: "f4b7544e-472e-4802-857a-5b40463a7d57",
    }, operations.CustomDemographicsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CustomVitalsList

Retrieve or search custom vital types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomVitalsList(ctx, operations.CustomVitalsListRequest{
        Cursor: sdk.String("veniam"),
        Doctor: sdk.Int64(969206),
        PageSize: sdk.Int64(66207),
    }, operations.CustomVitalsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomVitalsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CustomVitalsRead

Retrieve an existing custom vital type

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.CustomVitalsRead(ctx, operations.CustomVitalsReadRequest{
        Doctor: sdk.Int64(265632),
        ID: "00e764ad-7334-4ec1-b781-b36a08088d10",
    }, operations.CustomVitalsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomVitalType != nil {
        // handle response
    }
}
```

## DocumentsCreate

Create documents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.DocumentsCreate(ctx, operations.DocumentsCreateRequest{
        Doctor: sdk.Int64(51075),
        Patient: sdk.Int64(904827),
        Since: sdk.String("delectus"),
    }, operations.DocumentsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScannedClinicalDocument != nil {
        // handle response
    }
}
```

## DocumentsDelete

Delete an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.DocumentsDelete(ctx, operations.DocumentsDeleteRequest{
        Doctor: sdk.Int64(651228),
        ID: "da200ef0-422e-4b21-a4cf-9ab8366c723f",
        Patient: sdk.Int64(997918),
        Since: sdk.String("nulla"),
    }, operations.DocumentsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DocumentsList

Retrieve or search documents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.DocumentsList(ctx, operations.DocumentsListRequest{
        Cursor: sdk.String("laborum"),
        Doctor: sdk.Int64(617657),
        PageSize: sdk.Int64(883780),
        Patient: sdk.Int64(42906),
        Since: sdk.String("nisi"),
    }, operations.DocumentsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DocumentsPartialUpdate

Update an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.DocumentsPartialUpdate(ctx, operations.DocumentsPartialUpdateRequest{
        Doctor: sdk.Int64(700856),
        ID: "ee4825c1-fc0e-4115-880b-ff918544ec42",
        Patient: sdk.Int64(828147),
        Since: sdk.String("vero"),
    }, operations.DocumentsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DocumentsRead

Retrieve an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.DocumentsRead(ctx, operations.DocumentsReadRequest{
        Doctor: sdk.Int64(985109),
        ID: "cce8f197-7773-4e63-962a-7b408f05e3d4",
        Patient: sdk.Int64(552581),
        Since: sdk.String("doloribus"),
    }, operations.DocumentsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScannedClinicalDocument != nil {
        // handle response
    }
}
```

## DocumentsUpdate

Update an existing appointment template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.DocumentsUpdate(ctx, operations.DocumentsUpdateRequest{
        Doctor: sdk.Int64(851809),
        ID: "af313a1f-5fd9-4425-9c0b-36f25ea944f3",
        Patient: sdk.Int64(728559),
        Since: sdk.String("in"),
    }, operations.DocumentsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EobsCreate

Create EOB object

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.EobsCreate(ctx, operations.EobsCreateRequest{
        Doctor: sdk.Int64(329651),
    }, operations.EobsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EOBObject != nil {
        // handle response
    }
}
```

## EobsList

Retrieve or search EOB objects

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.EobsList(ctx, operations.EobsListRequest{
        Cursor: sdk.String("ex"),
        Doctor: sdk.Int64(791762),
        PageSize: sdk.Int64(68880),
    }, operations.EobsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EobsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EobsRead

Retrieve an existing EOB object

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.EobsRead(ctx, operations.EobsReadRequest{
        Doctor: sdk.Int64(108165),
        ID: "f6c37a51-2624-4383-9bbc-05a23a45cefc",
    }, operations.EobsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EOBObject != nil {
        // handle response
    }
}
```

## FeeSchedulesList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.FeeSchedulesList(ctx, operations.FeeSchedulesListRequest{
        Code: sdk.String("enim"),
        CodeType: sdk.String("doloribus"),
        Cursor: sdk.String("assumenda"),
        Doctor: sdk.Int64(887363),
        PageSize: sdk.Int64(103990),
        PayerID: sdk.String("alias"),
        Since: sdk.String("culpa"),
    }, operations.FeeSchedulesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeeSchedulesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## FeeSchedulesRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.FeeSchedulesRead(ctx, operations.FeeSchedulesReadRequest{
        Code: sdk.String("ipsa"),
        CodeType: sdk.String("nobis"),
        Doctor: sdk.Int64(898193),
        ID: "2169e510-019c-46dc-9e34-762799bfbbe6",
        PayerID: sdk.String("unde"),
        Since: sdk.String("modi"),
    }, operations.FeeSchedulesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorFeeSchedule != nil {
        // handle response
    }
}
```

## ImplantableDevicesList

Retrieve or search implantable devices

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ImplantableDevicesList(ctx, operations.ImplantableDevicesListRequest{
        Cursor: sdk.String("perspiciatis"),
        Doctor: sdk.Int64(944626),
        MuDate: sdk.String("cum"),
        MuDateRange: sdk.String("aspernatur"),
        PageSize: sdk.Int64(725784),
        Patient: sdk.Int64(720266),
    }, operations.ImplantableDevicesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImplantableDevicesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ImplantableDevicesRead

Retrieve an existing implantable device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ImplantableDevicesRead(ctx, operations.ImplantableDevicesReadRequest{
        Doctor: sdk.Int64(279172),
        ID: "ecae6c3d-5db3-4ade-bd5d-aea4c506a8aa",
        MuDate: sdk.String("occaecati"),
        MuDateRange: sdk.String("labore"),
        Patient: sdk.Int64(777378),
    }, operations.ImplantableDevicesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImplantableDevice != nil {
        // handle response
    }
}
```

## InsurancesList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.InsurancesList(ctx, operations.InsurancesListRequest{
        Cursor: sdk.String("perferendis"),
        PageSize: sdk.Int64(143528),
        PayerType: "aliquid",
        Term: sdk.String("magnam"),
    }, operations.InsurancesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsurancesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InsurancesRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.InsurancesRead(ctx, operations.InsurancesReadRequest{
        ID: "4cf5e9d9-a457-48ad-81ac-600dec001ac8",
        PayerType: "quae",
        Term: sdk.String("magni"),
    }, operations.InsurancesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Insurance != nil {
        // handle response
    }
}
```

## LabDocumentsCreate

Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabDocumentsCreate(ctx, operations.LabDocumentsCreateRequest{
        Doctor: sdk.Int64(885797),
        Since: sdk.String("sed"),
    }, operations.LabDocumentsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabOrderDocument != nil {
        // handle response
    }
}
```

## LabDocumentsDelete

Delete an existing lab order document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabDocumentsDelete(ctx, operations.LabDocumentsDeleteRequest{
        Doctor: sdk.Int64(898111),
        ID: "c09ff8f0-f816-4ff3-877c-13e902c14125",
        Since: sdk.String("rerum"),
    }, operations.LabDocumentsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabDocumentsList

Retrieve or search lab order documents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabDocumentsList(ctx, operations.LabDocumentsListRequest{
        Cursor: sdk.String("alias"),
        Doctor: sdk.Int64(624498),
        PageSize: sdk.Int64(424854),
        Since: sdk.String("accusantium"),
    }, operations.LabDocumentsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabDocumentsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LabDocumentsPartialUpdate

Update an existing lab order document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabDocumentsPartialUpdate(ctx, operations.LabDocumentsPartialUpdateRequest{
        Doctor: sdk.Int64(664197),
        ID: "668151a4-72af-4923-8594-9f83f350cf87",
        Since: sdk.String("aliquid"),
    }, operations.LabDocumentsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabDocumentsRead

Retrieve an existing lab order document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabDocumentsRead(ctx, operations.LabDocumentsReadRequest{
        Doctor: sdk.Int64(989033),
        ID: "fb901c6e-cbb4-4e24-bcf7-89ffafeda53e",
        Since: sdk.String("enim"),
    }, operations.LabDocumentsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabOrderDocument != nil {
        // handle response
    }
}
```

## LabDocumentsUpdate

Update an existing lab order document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabDocumentsUpdate(ctx, operations.LabDocumentsUpdateRequest{
        Doctor: sdk.Int64(638609),
        ID: "e6e0ac18-4c2b-49c2-87c8-8373a40e1942",
        Since: sdk.String("maiores"),
    }, operations.LabDocumentsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabOrdersCreate

Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersCreate(ctx, operations.LabOrdersCreateRequest{
        Doctor: sdk.Int64(205011),
        Since: sdk.String("odit"),
    }, operations.LabOrdersCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabOrder != nil {
        // handle response
    }
}
```

## LabOrdersDelete

Delete an existing lab order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersDelete(ctx, operations.LabOrdersDeleteRequest{
        Doctor: sdk.Int64(936845),
        ID: "55055756-f5d5-46d0-bd0a-f2dfe13db4f6",
        Since: sdk.String("explicabo"),
    }, operations.LabOrdersDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabOrdersList

Retrieve or search lab orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersList(ctx, operations.LabOrdersListRequest{
        Cursor: sdk.String("minus"),
        Doctor: sdk.Int64(746688),
        PageSize: sdk.Int64(677509),
        Since: sdk.String("velit"),
    }, operations.LabOrdersListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabOrdersList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LabOrdersPartialUpdate

Update an existing lab order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersPartialUpdate(ctx, operations.LabOrdersPartialUpdateRequest{
        Doctor: sdk.Int64(937865),
        ID: "8941aebc-0b80-4a69-a4d3-b2ecfcc8f895",
        Since: sdk.String("accusantium"),
    }, operations.LabOrdersPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabOrdersRead

Retrieve an existing lab order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersRead(ctx, operations.LabOrdersReadRequest{
        Doctor: sdk.Int64(75850),
        ID: "0f5dd3d6-fa18-404e-94c8-2f168a363c88",
        Since: sdk.String("ducimus"),
    }, operations.LabOrdersReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabOrder != nil {
        // handle response
    }
}
```

## LabOrdersSummaryList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersSummaryList(ctx, operations.LabOrdersSummaryListRequest{
        Cursor: sdk.String("adipisci"),
        Doctor: sdk.Int64(927959),
        PageSize: sdk.Int64(271306),
        Patient: sdk.Int64(503449),
        Since: sdk.String("numquam"),
    }, operations.LabOrdersSummaryListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabOrdersSummaryList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LabOrdersSummaryRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersSummaryRead(ctx, operations.LabOrdersSummaryReadRequest{
        Doctor: sdk.Int64(196374),
        ID: "80b1f6b8-ca27-45a6-8a04-c495cc699171",
        Patient: sdk.Int64(725316),
        Since: sdk.String("ipsam"),
    }, operations.LabOrdersSummaryReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabOrder != nil {
        // handle response
    }
}
```

## LabOrdersUpdate

Update an existing lab order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabOrdersUpdate(ctx, operations.LabOrdersUpdateRequest{
        Doctor: sdk.Int64(97659),
        ID: "c1bdb1cf-4b88-48eb-9fc4-ccca99bc7fc0",
        Since: sdk.String("soluta"),
    }, operations.LabOrdersUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabResultsCreate

Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabResultsCreate(ctx, operations.LabResultsCreateRequest{
        Doctor: sdk.Int64(147400),
        Order: sdk.Int64(866292),
    }, operations.LabResultsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabResult != nil {
        // handle response
    }
}
```

## LabResultsDelete

Delete an existing lab result

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabResultsDelete(ctx, operations.LabResultsDeleteRequest{
        Doctor: sdk.Int64(756287),
        ID: "e10873e4-2b00-46d6-b887-8ba8581a5820",
        Order: sdk.Int64(556133),
    }, operations.LabResultsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabResultsList

Retrieve or search lab results

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabResultsList(ctx, operations.LabResultsListRequest{
        Cursor: sdk.String("placeat"),
        Doctor: sdk.Int64(318028),
        Order: sdk.Int64(286453),
        PageSize: sdk.Int64(958068),
    }, operations.LabResultsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabResultsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LabResultsPartialUpdate

Update an existing lab result

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabResultsPartialUpdate(ctx, operations.LabResultsPartialUpdateRequest{
        Doctor: sdk.Int64(901651),
        ID: "fa9c95f2-eac5-4565-9307-cfee81206e28",
        Order: sdk.Int64(122744),
    }, operations.LabResultsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabResultsRead

Retrieve an existing lab result

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabResultsRead(ctx, operations.LabResultsReadRequest{
        Doctor: sdk.Int64(200190),
        ID: "fa4a41c4-80d3-4f21-b2af-03102d514f4c",
        Order: sdk.Int64(750537),
    }, operations.LabResultsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabResult != nil {
        // handle response
    }
}
```

## LabResultsUpdate

Update an existing lab result

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabResultsUpdate(ctx, operations.LabResultsUpdateRequest{
        Doctor: sdk.Int64(404422),
        ID: "f18bf962-1a6a-44f7-ba87-ee3e4be752c6",
        Order: sdk.Int64(339843),
    }, operations.LabResultsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabTestsCreate

Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabTestsCreate(ctx, operations.LabTestsCreateRequest{
        Doctor: sdk.Int64(704402),
        Order: sdk.Int64(218128),
    }, operations.LabTestsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabTest != nil {
        // handle response
    }
}
```

## LabTestsDelete

Delete an existing lab test

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabTestsDelete(ctx, operations.LabTestsDeleteRequest{
        Doctor: sdk.Int64(284885),
        ID: "418e3bb9-1c8d-4975-a0e8-419d8f84f144",
        Order: sdk.Int64(983434),
    }, operations.LabTestsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabTestsList

Retrieve or search lab tests

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabTestsList(ctx, operations.LabTestsListRequest{
        Cursor: sdk.String("sequi"),
        Doctor: sdk.Int64(902132),
        Order: sdk.Int64(8904),
        PageSize: sdk.Int64(458723),
    }, operations.LabTestsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabTestsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LabTestsPartialUpdate

Update an existing lab test

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabTestsPartialUpdate(ctx, operations.LabTestsPartialUpdateRequest{
        Doctor: sdk.Int64(891302),
        ID: "dcc4aa5f-3cab-4d90-9a97-2e056728227b",
        Order: sdk.Int64(176935),
    }, operations.LabTestsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LabTestsRead

Retrieve an existing lab test

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabTestsRead(ctx, operations.LabTestsReadRequest{
        Doctor: sdk.Int64(830477),
        ID: "309470bf-7a4f-4a87-8f53-5a6fae54ebf6",
        Order: sdk.Int64(30426),
    }, operations.LabTestsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabTest != nil {
        // handle response
    }
}
```

## LabTestsUpdate

Update an existing lab test

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.LabTestsUpdate(ctx, operations.LabTestsUpdateRequest{
        Doctor: sdk.Int64(759490),
        ID: "321f023b-75d2-4367-be1a-0cc8df79f0a3",
        Order: sdk.Int64(590998),
    }, operations.LabTestsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MedicationsAppendToPharmacyNote

Append a message to the "pharmacy_note" section of the prescription, in a new paragraph

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.MedicationsAppendToPharmacyNote(ctx, operations.MedicationsAppendToPharmacyNoteRequest{
        Doctor: sdk.Int64(404774),
        ID: "d90c364b-7c15-4dfb-ace1-88b1c4ee2c8c",
        Patient: sdk.Int64(428378),
    }, operations.MedicationsAppendToPharmacyNoteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MedicationsCreate

Create patient medications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.MedicationsCreate(ctx, operations.MedicationsCreateRequest{
        Doctor: sdk.Int64(753087),
        Patient: sdk.Int64(923159),
    }, operations.MedicationsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientDrug != nil {
        // handle response
    }
}
```

## MedicationsList

Retrieve or search patient medications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.MedicationsList(ctx, operations.MedicationsListRequest{
        Cursor: sdk.String("ex"),
        Doctor: sdk.Int64(105094),
        PageSize: sdk.Int64(86955),
        Patient: sdk.Int64(982574),
    }, operations.MedicationsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MedicationsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MedicationsPartialUpdate

Update an existing patient medications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.MedicationsPartialUpdate(ctx, operations.MedicationsPartialUpdateRequest{
        Doctor: sdk.Int64(930877),
        ID: "eb1c7cbd-b6ee-4c74-b78b-a25317747dc9",
        Patient: sdk.Int64(72422),
    }, operations.MedicationsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MedicationsRead

Retrieve an existing patient medications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.MedicationsRead(ctx, operations.MedicationsReadRequest{
        Doctor: sdk.Int64(348665),
        ID: "ad2caf5d-d672-43dc-8f5a-e2f3a6b70087",
        Patient: sdk.Int64(546868),
    }, operations.MedicationsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientDrug != nil {
        // handle response
    }
}
```

## MedicationsUpdate

Update an existing patient medications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.MedicationsUpdate(ctx, operations.MedicationsUpdateRequest{
        Doctor: sdk.Int64(474885),
        ID: "56143f5a-6c98-4b55-9540-80d40bcacc6c",
        Patient: sdk.Int64(743795),
    }, operations.MedicationsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientCommunicationsCreate

Create patient communication for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientCommunicationsCreate(ctx, operations.PatientCommunicationsCreateRequest{
        Doctor: sdk.Int64(856568),
        Patient: sdk.Int64(389287),
    }, operations.PatientCommunicationsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientCommunication != nil {
        // handle response
    }
}
```

## PatientCommunicationsList

Retrieve or search patient communications for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientCommunicationsList(ctx, operations.PatientCommunicationsListRequest{
        Cursor: sdk.String("nam"),
        Doctor: sdk.Int64(315387),
        PageSize: sdk.Int64(979011),
        Patient: sdk.Int64(235482),
    }, operations.PatientCommunicationsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientCommunicationsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientCommunicationsPartialUpdate

Update an existing patient communication for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientCommunicationsPartialUpdate(ctx, operations.PatientCommunicationsPartialUpdateRequest{
        Doctor: sdk.Int64(898826),
        ID: "c909304f-926b-4ad2-9538-19b474b0ed20",
        Patient: sdk.Int64(919171),
    }, operations.PatientCommunicationsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientCommunicationsRead

Retrieve an existing patient communication for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientCommunicationsRead(ctx, operations.PatientCommunicationsReadRequest{
        Doctor: sdk.Int64(360635),
        ID: "6248fff6-39a9-410a-bdca-b62676696e1e",
        Patient: sdk.Int64(790305),
    }, operations.PatientCommunicationsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientCommunication != nil {
        // handle response
    }
}
```

## PatientCommunicationsUpdate

Update an existing patient communication for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientCommunicationsUpdate(ctx, operations.PatientCommunicationsUpdateRequest{
        Doctor: sdk.Int64(53529),
        ID: "0221b335-d89a-4cb3-acfd-a8d0c549ef03",
        Patient: sdk.Int64(367),
    }, operations.PatientCommunicationsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientFlagTypesCreate

Create patient flag types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientFlagTypesCreate(ctx, operations.PatientFlagTypesCreateRequest{
        Doctor: sdk.Int64(43715),
    }, operations.PatientFlagTypesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientFlagType != nil {
        // handle response
    }
}
```

## PatientFlagTypesList

Retrieve or search patient flag types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientFlagTypesList(ctx, operations.PatientFlagTypesListRequest{
        Cursor: sdk.String("tempora"),
        Doctor: sdk.Int64(595986),
        PageSize: sdk.Int64(462097),
    }, operations.PatientFlagTypesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientFlagTypesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientFlagTypesPartialUpdate

Update an existing patient flag type

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientFlagTypesPartialUpdate(ctx, operations.PatientFlagTypesPartialUpdateRequest{
        Doctor: sdk.Int64(541009),
        ID: "a61fa1cf-2068-48f7-bc1f-fc71dca163f2",
    }, operations.PatientFlagTypesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientFlagTypesRead

Retrieve an existing patient flag type

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientFlagTypesRead(ctx, operations.PatientFlagTypesReadRequest{
        Doctor: sdk.Int64(657141),
        ID: "3c80a97f-f334-4cdd-b857-a9e61876c6ab",
    }, operations.PatientFlagTypesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientFlagType != nil {
        // handle response
    }
}
```

## PatientFlagTypesUpdate

Update an existing patient flag type

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientFlagTypesUpdate(ctx, operations.PatientFlagTypesUpdateRequest{
        Doctor: sdk.Int64(126512),
        ID: "1d29dfc9-4d6f-4ecd-b993-90066a6d2d00",
    }, operations.PatientFlagTypesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientInterventionsCreate

Create patient intervention for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientInterventionsCreate(ctx, operations.PatientInterventionsCreateRequest{
        Doctor: sdk.Int64(4747),
        Patient: sdk.Int64(244157),
    }, operations.PatientInterventionsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientIntervention != nil {
        // handle response
    }
}
```

## PatientInterventionsList

Retrieve or search patient interventions for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientInterventionsList(ctx, operations.PatientInterventionsListRequest{
        Cursor: sdk.String("ullam"),
        Doctor: sdk.Int64(339094),
        PageSize: sdk.Int64(242532),
        Patient: sdk.Int64(188732),
    }, operations.PatientInterventionsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientInterventionsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientInterventionsPartialUpdate

Update an existing patient intervention for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientInterventionsPartialUpdate(ctx, operations.PatientInterventionsPartialUpdateRequest{
        Doctor: sdk.Int64(555386),
        ID: "cec086fa-21e9-4152-8b31-19167b8e3c8d",
        Patient: sdk.Int64(717853),
    }, operations.PatientInterventionsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientInterventionsRead

Retrieve an existing patient intervention for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientInterventionsRead(ctx, operations.PatientInterventionsReadRequest{
        Doctor: sdk.Int64(32945),
        ID: "3408d6d3-64ff-4d45-9906-d1263d48e935",
        Patient: sdk.Int64(797527),
    }, operations.PatientInterventionsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientIntervention != nil {
        // handle response
    }
}
```

## PatientInterventionsUpdate

Update an existing patient intervention for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientInterventionsUpdate(ctx, operations.PatientInterventionsUpdateRequest{
        Doctor: sdk.Int64(175803),
        ID: "c9e81f30-be3e-4432-82d7-216576506641",
        Patient: sdk.Int64(525223),
    }, operations.PatientInterventionsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientLabResultsCreate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientLabResultsCreate(ctx, operations.PatientLabResultsCreateRequest{
        Doctor: sdk.Int64(493579),
        OrderingDoctor: sdk.Int64(40017),
        Patient: sdk.Int64(825739),
        Since: sdk.String("provident"),
    }, operations.PatientLabResultsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientLabResultSet != nil {
        // handle response
    }
}
```

## PatientLabResultsDelete

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientLabResultsDelete(ctx, operations.PatientLabResultsDeleteRequest{
        Doctor: sdk.Int64(818422),
        ID: "21f9ad03-0c4e-4cc1-9a08-36429068b850",
        OrderingDoctor: sdk.Int64(154425),
        Patient: sdk.Int64(642576),
        Since: sdk.String("quaerat"),
    }, operations.PatientLabResultsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientLabResultsList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientLabResultsList(ctx, operations.PatientLabResultsListRequest{
        Cursor: sdk.String("corporis"),
        Doctor: sdk.Int64(884325),
        OrderingDoctor: sdk.Int64(481307),
        PageSize: sdk.Int64(958533),
        Patient: sdk.Int64(459086),
        Since: sdk.String("neque"),
    }, operations.PatientLabResultsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientLabResultsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientLabResultsPartialUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientLabResultsPartialUpdate(ctx, operations.PatientLabResultsPartialUpdateRequest{
        Doctor: sdk.Int64(697591),
        ID: "c845e320-a319-4f4b-adf9-47c9a867bc42",
        OrderingDoctor: sdk.Int64(299379),
        Patient: sdk.Int64(171172),
        Since: sdk.String("aliquid"),
    }, operations.PatientLabResultsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientLabResultsRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientLabResultsRead(ctx, operations.PatientLabResultsReadRequest{
        Doctor: sdk.Int64(431843),
        ID: "65816ddc-a8ef-451f-8b4c-593ec12cdaad",
        OrderingDoctor: sdk.Int64(59023),
        Patient: sdk.Int64(879208),
        Since: sdk.String("placeat"),
    }, operations.PatientLabResultsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientLabResultSet != nil {
        // handle response
    }
}
```

## PatientLabResultsUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientLabResultsUpdate(ctx, operations.PatientLabResultsUpdateRequest{
        Doctor: sdk.Int64(464878),
        ID: "afedbd80-df44-48a4-bf93-90c58880983d",
        OrderingDoctor: sdk.Int64(683490),
        Patient: sdk.Int64(704732),
        Since: sdk.String("maiores"),
    }, operations.PatientLabResultsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientMessagesCreate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientMessagesCreate(ctx, operations.PatientMessagesCreateRequest{
        Doctor: sdk.Int64(622968),
        Patient: sdk.Int64(926119),
        Since: sdk.String("a"),
    }, operations.PatientMessagesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientMessage != nil {
        // handle response
    }
}
```

## PatientMessagesList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientMessagesList(ctx, operations.PatientMessagesListRequest{
        Cursor: sdk.String("consectetur"),
        Doctor: sdk.Int64(958280),
        PageSize: sdk.Int64(977641),
        Patient: sdk.Int64(824267),
        Since: sdk.String("repellendus"),
    }, operations.PatientMessagesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientMessagesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientMessagesPartialUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientMessagesPartialUpdate(ctx, operations.PatientMessagesPartialUpdateRequest{
        Doctor: sdk.Int64(607742),
        ID: "f7f079af-4d35-4724-8db0-f4d281187d56",
        Patient: sdk.Int64(512408),
        Since: sdk.String("modi"),
    }, operations.PatientMessagesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientMessagesRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientMessagesRead(ctx, operations.PatientMessagesReadRequest{
        Doctor: sdk.Int64(301701),
        ID: "eded85a9-065e-4628-bdfc-2032b6c87992",
        Patient: sdk.Int64(212682),
        Since: sdk.String("quidem"),
    }, operations.PatientMessagesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientMessage != nil {
        // handle response
    }
}
```

## PatientMessagesUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientMessagesUpdate(ctx, operations.PatientMessagesUpdateRequest{
        Doctor: sdk.Int64(476614),
        ID: "e13584f7-ae12-4c68-91f8-2ce115717230",
        Patient: sdk.Int64(347460),
        Since: sdk.String("amet"),
    }, operations.PatientMessagesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientPhysicalExamsCreate

Create patient physical exam for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientPhysicalExamsCreate(ctx, operations.PatientPhysicalExamsCreateRequest{
        Doctor: sdk.Int64(454165),
        Patient: sdk.Int64(454232),
    }, operations.PatientPhysicalExamsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientPhysicalExam != nil {
        // handle response
    }
}
```

## PatientPhysicalExamsList

Retrieve or search patient physical exams for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientPhysicalExamsList(ctx, operations.PatientPhysicalExamsListRequest{
        Cursor: sdk.String("pariatur"),
        Doctor: sdk.Int64(791421),
        PageSize: sdk.Int64(955065),
        Patient: sdk.Int64(686301),
    }, operations.PatientPhysicalExamsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientPhysicalExamsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientPhysicalExamsPartialUpdate

Update an existing patient physical exam for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientPhysicalExamsPartialUpdate(ctx, operations.PatientPhysicalExamsPartialUpdateRequest{
        Doctor: sdk.Int64(518926),
        ID: "9df975e3-5668-4609-ae9c-3ddc5f111dea",
        Patient: sdk.Int64(118020),
    }, operations.PatientPhysicalExamsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientPhysicalExamsRead

Retrieve an existing patient physical exam for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientPhysicalExamsRead(ctx, operations.PatientPhysicalExamsReadRequest{
        Doctor: sdk.Int64(32737),
        ID: "26d541a4-d190-4feb-a178-0bccc0dbbddb",
        Patient: sdk.Int64(297325),
    }, operations.PatientPhysicalExamsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientPhysicalExam != nil {
        // handle response
    }
}
```

## PatientPhysicalExamsUpdate

Update an existing patient physical exam for CQM

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientPhysicalExamsUpdate(ctx, operations.PatientPhysicalExamsUpdateRequest{
        Doctor: sdk.Int64(512349),
        ID: "4708fb4e-391e-46bc-958c-4c4e54599ea3",
        Patient: sdk.Int64(268749),
    }, operations.PatientPhysicalExamsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientRiskAssessmentsCreate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientRiskAssessmentsCreate(ctx, operations.PatientRiskAssessmentsCreateRequest{
        Doctor: sdk.Int64(134832),
        Patient: sdk.Int64(129762),
    }, operations.PatientRiskAssessmentsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientRiskAssessment != nil {
        // handle response
    }
}
```

## PatientRiskAssessmentsList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientRiskAssessmentsList(ctx, operations.PatientRiskAssessmentsListRequest{
        Cursor: sdk.String("suscipit"),
        Doctor: sdk.Int64(58808),
        PageSize: sdk.Int64(910410),
        Patient: sdk.Int64(575753),
    }, operations.PatientRiskAssessmentsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientRiskAssessmentsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientRiskAssessmentsPartialUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientRiskAssessmentsPartialUpdate(ctx, operations.PatientRiskAssessmentsPartialUpdateRequest{
        Doctor: sdk.Int64(749537),
        ID: "200ce78a-1bd8-4fb7-a0a1-16ce723d4097",
        Patient: sdk.Int64(963908),
    }, operations.PatientRiskAssessmentsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientRiskAssessmentsRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientRiskAssessmentsRead(ctx, operations.PatientRiskAssessmentsReadRequest{
        Doctor: sdk.Int64(644397),
        ID: "30e9af72-5b29-4122-830d-83f5aeb7799d",
        Patient: sdk.Int64(126367),
    }, operations.PatientRiskAssessmentsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientRiskAssessment != nil {
        // handle response
    }
}
```

## PatientRiskAssessmentsUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientRiskAssessmentsUpdate(ctx, operations.PatientRiskAssessmentsUpdateRequest{
        Doctor: sdk.Int64(142856),
        ID: "e8c1f849-3825-4fdc-82c8-76c2c2dfb4cf",
        Patient: sdk.Int64(779748),
    }, operations.PatientRiskAssessmentsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientVaccineRecordsCreate

Create patient vaccine records

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientVaccineRecordsCreate(ctx, operations.PatientVaccineRecordsCreateRequest{
        CvxCode: sdk.String("illo"),
        Doctor: sdk.Int64(751347),
        Patient: sdk.Int64(460803),
        Since: sdk.String("nisi"),
    }, operations.PatientVaccineRecordsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientVaccineRecord != nil {
        // handle response
    }
}
```

## PatientVaccineRecordsList

Retrieve or search patient vaccine records

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientVaccineRecordsList(ctx, operations.PatientVaccineRecordsListRequest{
        Cursor: sdk.String("explicabo"),
        CvxCode: sdk.String("sequi"),
        Doctor: sdk.Int64(4787),
        PageSize: sdk.Int64(970131),
        Patient: sdk.Int64(553766),
        Since: sdk.String("numquam"),
    }, operations.PatientVaccineRecordsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientVaccineRecordsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientVaccineRecordsPartialUpdate

Update an existing patient vaccine records

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientVaccineRecordsPartialUpdate(ctx, operations.PatientVaccineRecordsPartialUpdateRequest{
        CvxCode: sdk.String("vitae"),
        Doctor: sdk.Int64(980376),
        ID: "b1bd23fd-b14d-4b6b-a5a6-85998e22ae20",
        Patient: sdk.Int64(838176),
        Since: sdk.String("id"),
    }, operations.PatientVaccineRecordsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientVaccineRecordsRead

Retrieve an existing patient vaccine records

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientVaccineRecordsRead(ctx, operations.PatientVaccineRecordsReadRequest{
        CvxCode: sdk.String("quae"),
        Doctor: sdk.Int64(414439),
        ID: "fc2b271a-289c-457e-854e-90439d222465",
        Patient: sdk.Int64(426819),
        Since: sdk.String("cupiditate"),
    }, operations.PatientVaccineRecordsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientVaccineRecord != nil {
        // handle response
    }
}
```

## PatientVaccineRecordsUpdate

Update an existing patient vaccine records

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientVaccineRecordsUpdate(ctx, operations.PatientVaccineRecordsUpdateRequest{
        CvxCode: sdk.String("modi"),
        Doctor: sdk.Int64(392311),
        ID: "2407084f-7ab3-47ce-b022-25194db55410",
        Patient: sdk.Int64(629902),
        Since: sdk.String("possimus"),
    }, operations.PatientVaccineRecordsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientsCcda

Retrieve patient CCDA

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsCcda(ctx, operations.PatientsCcdaRequest{
        ChartID: sdk.String("quo"),
        DateOfBirth: sdk.String("suscipit"),
        Doctor: sdk.Int64(405041),
        Email: sdk.String("Manuela.Wyman@yahoo.com"),
        Ethnicity: sdk.String("deserunt"),
        FirstName: sdk.String("Burnice"),
        Gender: sdk.String("female"),
        ID: "c7cdc981-f068-4981-96bb-33cfaa348c31",
        LastName: sdk.String("Reichert"),
        PreferredLanguage: sdk.String("voluptatibus"),
        Race: sdk.String("magnam"),
        Since: sdk.String("aperiam"),
    }, operations.PatientsCcdaSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PatientsCreate

Create patient

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsCreate(ctx, operations.PatientsCreateRequest{
        ChartID: sdk.String("ducimus"),
        DateOfBirth: sdk.String("itaque"),
        Doctor: sdk.Int64(898197),
        Email: sdk.String("Xavier.Rosenbaum77@gmail.com"),
        Ethnicity: sdk.String("numquam"),
        FirstName: sdk.String("Bridgette"),
        Gender: sdk.String("male"),
        LastName: sdk.String("Koss"),
        PreferredLanguage: sdk.String("voluptatum"),
        Race: sdk.String("reiciendis"),
        Since: sdk.String("vitae"),
    }, operations.PatientsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Patient != nil {
        // handle response
    }
}
```

## PatientsDelete

Delete an existing patient

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsDelete(ctx, operations.PatientsDeleteRequest{
        ChartID: sdk.String("ullam"),
        DateOfBirth: sdk.String("nisi"),
        Doctor: sdk.Int64(159496),
        Email: sdk.String("Claud_Mante@yahoo.com"),
        Ethnicity: sdk.String("perferendis"),
        FirstName: sdk.String("Romaine"),
        Gender: sdk.String("male"),
        ID: "766324cc-b06c-48ca-92d0-2529270b8d57",
        LastName: sdk.String("Conroy"),
        PreferredLanguage: sdk.String("aspernatur"),
        Race: sdk.String("at"),
        Since: sdk.String("illum"),
    }, operations.PatientsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientsList

Retrieve or search patients

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsList(ctx, operations.PatientsListRequest{
        ChartID: sdk.String("praesentium"),
        Cursor: sdk.String("sint"),
        DateOfBirth: sdk.String("exercitationem"),
        Doctor: sdk.Int64(739938),
        Email: sdk.String("Meagan.Schowalter29@yahoo.com"),
        Ethnicity: sdk.String("pariatur"),
        FirstName: sdk.String("Meda"),
        Gender: sdk.String("male"),
        LastName: sdk.String("Hickle"),
        PageSize: sdk.Int64(615532),
        PreferredLanguage: sdk.String("nisi"),
        Race: sdk.String("provident"),
        Since: sdk.String("amet"),
    }, operations.PatientsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientsOnpatientAccessCreate

Send new onpatient invite to patient

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsOnpatientAccessCreate(ctx, operations.PatientsOnpatientAccessCreateRequest{
        ChartID: sdk.String("dolor"),
        DateOfBirth: sdk.String("nostrum"),
        Doctor: sdk.Int64(184738),
        Email: sdk.String("Jason.Greenholt@hotmail.com"),
        Ethnicity: sdk.String("adipisci"),
        FirstName: sdk.String("Kristy"),
        Gender: sdk.String("male"),
        ID: "4d78de3b-6e93-489f-9abb-7f662550a283",
        LastName: sdk.String("Leannon"),
        PreferredLanguage: sdk.String("qui"),
        Race: sdk.String("deserunt"),
        Since: sdk.String("eligendi"),
    }, operations.PatientsOnpatientAccessCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Patient != nil {
        // handle response
    }
}
```

## PatientsOnpatientAccessDelete

Revoke sent onpatient invites

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsOnpatientAccessDelete(ctx, operations.PatientsOnpatientAccessDeleteRequest{
        ChartID: sdk.String("incidunt"),
        DateOfBirth: sdk.String("deleniti"),
        Doctor: sdk.Int64(220746),
        Email: sdk.String("Viviane23@hotmail.com"),
        Ethnicity: sdk.String("inventore"),
        FirstName: sdk.String("Erica"),
        Gender: sdk.String("male"),
        ID: "ba650164-e06f-45bf-aae5-91bc8bdef361",
        LastName: sdk.String("Corkery"),
        PreferredLanguage: sdk.String("nam"),
        Race: sdk.String("ex"),
        Since: sdk.String("neque"),
    }, operations.PatientsOnpatientAccessDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientsOnpatientAccessRead

Retrieve or search existing onpatient access invites

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsOnpatientAccessRead(ctx, operations.PatientsOnpatientAccessReadRequest{
        ChartID: sdk.String("quod"),
        DateOfBirth: sdk.String("eos"),
        Doctor: sdk.Int64(186),
        Email: sdk.String("Vena_Schumm@gmail.com"),
        Ethnicity: sdk.String("quaerat"),
        FirstName: sdk.String("Alvina"),
        Gender: sdk.String("female"),
        ID: "74a68a9a-35d0-486b-af66-fef020e9f443",
        LastName: sdk.String("Robel"),
        PreferredLanguage: sdk.String("incidunt"),
        Race: sdk.String("dolores"),
        Since: sdk.String("enim"),
    }, operations.PatientsOnpatientAccessReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Patient != nil {
        // handle response
    }
}
```

## PatientsPartialUpdate

Update an existing patient

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsPartialUpdate(ctx, operations.PatientsPartialUpdateRequest{
        ChartID: sdk.String("nihil"),
        DateOfBirth: sdk.String("libero"),
        Doctor: sdk.Int64(607205),
        Email: sdk.String("Chelsea_Schamberger@yahoo.com"),
        Ethnicity: sdk.String("cum"),
        FirstName: sdk.String("Rosa"),
        Gender: sdk.String("male"),
        ID: "6a61efa2-1982-458f-90a9-eba47f7d3ef0",
        LastName: sdk.String("Hahn"),
        PreferredLanguage: sdk.String("excepturi"),
        Race: sdk.String("aliquid"),
        Since: sdk.String("dolore"),
    }, operations.PatientsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientsQrda1

Retrieve patient QRDA1

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsQrda1(ctx, operations.PatientsQrda1Request{
        ChartID: sdk.String("voluptatem"),
        DateOfBirth: sdk.String("illum"),
        Doctor: sdk.Int64(388006),
        Email: sdk.String("Beulah11@yahoo.com"),
        Ethnicity: sdk.String("quisquam"),
        FirstName: sdk.String("Kamron"),
        Gender: sdk.String("female"),
        ID: "adf596fd-f1ad-4837-ae80-c1c19c95ba99",
        LastName: sdk.String("Macejkovic"),
        PreferredLanguage: sdk.String("laboriosam"),
        Race: sdk.String("ducimus"),
        Since: sdk.String("voluptatum"),
    }, operations.PatientsQrda1Security{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PatientsRead

Retrieve an existing patient

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsRead(ctx, operations.PatientsReadRequest{
        ChartID: sdk.String("sapiente"),
        DateOfBirth: sdk.String("deserunt"),
        Doctor: sdk.Int64(221240),
        Email: sdk.String("Humberto_Mayer@hotmail.com"),
        Ethnicity: sdk.String("cupiditate"),
        FirstName: sdk.String("Annamarie"),
        Gender: sdk.String("male"),
        ID: "f388ce03-6144-448c-b977-a0ef2f536028",
        LastName: sdk.String("Toy"),
        PreferredLanguage: sdk.String("a"),
        Race: sdk.String("itaque"),
        Since: sdk.String("eveniet"),
    }, operations.PatientsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Patient != nil {
        // handle response
    }
}
```

## PatientsSummaryCreate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsSummaryCreate(ctx, operations.PatientsSummaryCreateRequest{
        DateOfBirth: sdk.String("repellat"),
        Doctor: sdk.Int64(584663),
        FirstName: sdk.String("Dasia"),
        Gender: sdk.String("female"),
        LastName: sdk.String("Bernier"),
        Since: sdk.String("veniam"),
    }, operations.PatientsSummaryCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Patient != nil {
        // handle response
    }
}
```

## PatientsSummaryDelete

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsSummaryDelete(ctx, operations.PatientsSummaryDeleteRequest{
        DateOfBirth: sdk.String("sed"),
        Doctor: sdk.Int64(897914),
        FirstName: sdk.String("Reginald"),
        Gender: sdk.String("female"),
        ID: "e253f4c1-57de-4aa7-970f-445accf667aa",
        LastName: sdk.String("Ziemann"),
        Since: sdk.String("cupiditate"),
    }, operations.PatientsSummaryDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientsSummaryList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsSummaryList(ctx, operations.PatientsSummaryListRequest{
        Cursor: sdk.String("soluta"),
        DateOfBirth: sdk.String("tempore"),
        Doctor: sdk.Int64(636190),
        FirstName: sdk.String("Russ"),
        Gender: sdk.String("female"),
        LastName: sdk.String("Littel"),
        PageSize: sdk.Int64(323215),
        Since: sdk.String("sapiente"),
    }, operations.PatientsSummaryListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientsSummaryList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientsSummaryPartialUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsSummaryPartialUpdate(ctx, operations.PatientsSummaryPartialUpdateRequest{
        DateOfBirth: sdk.String("voluptates"),
        Doctor: sdk.Int64(281135),
        FirstName: sdk.String("Colin"),
        Gender: sdk.String("female"),
        ID: "d6bf5c83-8fbb-48c2-8cb6-7fc4b425e99e",
        LastName: sdk.String("Howe"),
        Since: sdk.String("eos"),
    }, operations.PatientsSummaryPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientsSummaryRead

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsSummaryRead(ctx, operations.PatientsSummaryReadRequest{
        DateOfBirth: sdk.String("amet"),
        Doctor: sdk.Int64(279679),
        FirstName: sdk.String("Ottilie"),
        Gender: sdk.String("male"),
        ID: "f7b79dfe-b77a-45c3-8d4b-af91e506ef89",
        LastName: sdk.String("Armstrong"),
        Since: sdk.String("dolorum"),
    }, operations.PatientsSummaryReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Patient != nil {
        // handle response
    }
}
```

## PatientsSummaryUpdate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsSummaryUpdate(ctx, operations.PatientsSummaryUpdateRequest{
        DateOfBirth: sdk.String("nostrum"),
        Doctor: sdk.Int64(270862),
        FirstName: sdk.String("Modesta"),
        Gender: sdk.String("female"),
        ID: "75f16f56-d385-4a3c-8ac6-31b99e26ced8",
        LastName: sdk.String("Will"),
        Since: sdk.String("natus"),
    }, operations.PatientsSummaryUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientsUpdate

Update an existing patient

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PatientsUpdate(ctx, operations.PatientsUpdateRequest{
        ChartID: sdk.String("sapiente"),
        DateOfBirth: sdk.String("repellendus"),
        Doctor: sdk.Int64(706371),
        Email: sdk.String("Einar98@yahoo.com"),
        Ethnicity: sdk.String("nisi"),
        FirstName: sdk.String("Dejuan"),
        Gender: sdk.String("male"),
        ID: "bf817837-b01a-4fdd-b886-24189eb44873",
        LastName: sdk.String("Williamson"),
        PreferredLanguage: sdk.String("quis"),
        Race: sdk.String("accusantium"),
        Since: sdk.String("ratione"),
    }, operations.PatientsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrescriptionMessagesList

Retrieve or search prescription messages

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PrescriptionMessagesList(ctx, operations.PrescriptionMessagesListRequest{
        Cursor: sdk.String("consectetur"),
        Doctor: sdk.Int64(990540),
        PageSize: sdk.Int64(103053),
        ParentMessage: sdk.Int64(571498),
        Patient: sdk.Int64(821993),
        Since: sdk.String("tempore"),
    }, operations.PrescriptionMessagesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrescriptionMessagesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PrescriptionMessagesRead

Retrieve an existing prescription message

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.PrescriptionMessagesRead(ctx, operations.PrescriptionMessagesReadRequest{
        Doctor: sdk.Int64(992244),
        ID: "125ce415-2eab-49cd-be52-24a6a0e123b7",
        ParentMessage: sdk.Int64(546540),
        Patient: sdk.Int64(251522),
        Since: sdk.String("esse"),
    }, operations.PrescriptionMessagesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrescriptionMessage != nil {
        // handle response
    }
}
```

## ProblemsCreate

Create patient problems

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ProblemsCreate(ctx, operations.ProblemsCreateRequest{
        Doctor: sdk.Int64(876682),
        Patient: sdk.Int64(752919),
    }, operations.ProblemsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientProblem != nil {
        // handle response
    }
}
```

## ProblemsList

Retrieve or search patient problems

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ProblemsList(ctx, operations.ProblemsListRequest{
        Cursor: sdk.String("minima"),
        Doctor: sdk.Int64(607276),
        PageSize: sdk.Int64(924623),
        Patient: sdk.Int64(102754),
    }, operations.ProblemsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProblemsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProblemsPartialUpdate

Update an existing patient problems

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ProblemsPartialUpdate(ctx, operations.ProblemsPartialUpdateRequest{
        Doctor: sdk.Int64(974788),
        ID: "67f3c4cc-e4b6-4d76-96ff-3c5747501357",
        Patient: sdk.Int64(887865),
    }, operations.ProblemsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProblemsRead

Retrieve an existing patient problems

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ProblemsRead(ctx, operations.ProblemsReadRequest{
        Doctor: sdk.Int64(293799),
        ID: "4f51f8b0-84c3-4197-a193-a245467f9487",
        Patient: sdk.Int64(260046),
    }, operations.ProblemsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientProblem != nil {
        // handle response
    }
}
```

## ProblemsUpdate

Update an existing patient problems

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ProblemsUpdate(ctx, operations.ProblemsUpdateRequest{
        Doctor: sdk.Int64(811380),
        ID: "2d5cc497-2233-4e66-bd8f-e5d00b979ef2",
        Patient: sdk.Int64(23236),
    }, operations.ProblemsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReminderProfilesCreate

Create reminder profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ReminderProfilesCreate(ctx, operations.ReminderProfilesCreateRequest{
        Doctor: sdk.Int64(243247),
    }, operations.ReminderProfilesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReminderProfile != nil {
        // handle response
    }
}
```

## ReminderProfilesDelete

Delete an existing reminder profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ReminderProfilesDelete(ctx, operations.ReminderProfilesDeleteRequest{
        Doctor: sdk.Int64(531104),
        ID: "7320590c-cc10-4964-8031-3b3e5044f65f",
    }, operations.ReminderProfilesDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReminderProfilesList

Retrieve or search reminder profiles

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ReminderProfilesList(ctx, operations.ReminderProfilesListRequest{
        Cursor: sdk.String("debitis"),
        Doctor: sdk.Int64(442668),
        PageSize: sdk.Int64(181041),
    }, operations.ReminderProfilesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReminderProfilesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReminderProfilesPartialUpdate

Update an existing reminder profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ReminderProfilesPartialUpdate(ctx, operations.ReminderProfilesPartialUpdateRequest{
        Doctor: sdk.Int64(824861),
        ID: "c4077d0c-c3f4-408e-bc15-ceb4d6e1eae0",
    }, operations.ReminderProfilesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReminderProfilesRead

Retrieve an existing reminder profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ReminderProfilesRead(ctx, operations.ReminderProfilesReadRequest{
        Doctor: sdk.Int64(980705),
        ID: "75aedf2a-cab5-48b9-91c9-26ddb589461e",
    }, operations.ReminderProfilesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReminderProfile != nil {
        // handle response
    }
}
```

## ReminderProfilesUpdate

Update an existing reminder profile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.ReminderProfilesUpdate(ctx, operations.ReminderProfilesUpdateRequest{
        Doctor: sdk.Int64(484833),
        ID: "421cbe6d-9502-4f0e-a930-b69f7ac2f72f",
    }, operations.ReminderProfilesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SublabsCreate

Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.SublabsCreate(ctx, operations.SublabsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabVendorLocation != nil {
        // handle response
    }
}
```

## SublabsDelete

Delete an existing sub vendor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.SublabsDelete(ctx, operations.SublabsDeleteRequest{
        ID: 550519,
    }, operations.SublabsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SublabsList

Retrieve or search sub vendors

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.SublabsList(ctx, operations.SublabsListRequest{
        Cursor: sdk.String("deleniti"),
        PageSize: sdk.Int64(313223),
    }, operations.SublabsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SublabsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SublabsPartialUpdate

Update an existing sub vendor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.SublabsPartialUpdate(ctx, operations.SublabsPartialUpdateRequest{
        ID: 24614,
    }, operations.SublabsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SublabsRead

Retrieve an existing sub vendor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.SublabsRead(ctx, operations.SublabsReadRequest{
        ID: 27955,
    }, operations.SublabsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabVendorLocation != nil {
        // handle response
    }
}
```

## SublabsUpdate

Update an existing sub vendor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Clinical.SublabsUpdate(ctx, operations.SublabsUpdateRequest{
        ID: 619772,
    }, operations.SublabsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
