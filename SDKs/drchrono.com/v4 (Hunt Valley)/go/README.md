# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DoctorsListRequest{
        Security: operations.DoctorsListSecurity{
            DrchronoOauth2: shared.SchemeDrchronoOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoctorsListQueryParams{
            Cursor: "consequatur",
            Doctor: 5065105845538771853,
            PageSize: 6879998696661704987,
        },
    }
    
    res, err := s.Administrative.DoctorsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorsList200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Administrative

* `DoctorsList` - Retrieve or search doctors within practice group
* `DoctorsRead` - Retrieve an existing dcotor
* `UserGroupsList` - Retrieve or search user groups
* `UserGroupsRead` - Retrieve an existing user group
* `UsersList` - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
* `UsersRead` - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### Billing

* `BillingProfilesList` - Retrieve or search billing profiles
* `BillingProfilesRead` - Retrieve an existing billing profiles
* `CommLogsCreate` - Create communication (phone call) logs
* `CommLogsList` - Retrieve or search communicatioin (phone call) logs
* `CommLogsPartialUpdate` - Update an existing communication (phone call) logs
* `CommLogsRead` - Retrieve an existing communication (phone call) logs
* `CommLogsUpdate` - Update an existing communication (phone call) logs
* `CustomInsurancePlanNamesList` - Retrieve or search custom insurance plan names
* `CustomInsurancePlanNamesRead` - Retrieve an existing custom insurance plan name
* `EligibilityChecksList` - Retrieve or search past eligibility checks for patient
* `EligibilityChecksRead` - Retrieve an existing past eligibility check
* `LineItemsCreate` - Create billing line item for appointments
* `LineItemsDelete`
* `LineItemsList` - Retrieve or search billing line items
* `LineItemsPartialUpdate`
* `LineItemsRead` - Retrieve an existing billing line item
* `LineItemsUpdate`
* `PatientPaymentLogList` - Retrieve or search patient payment logs
* `PatientPaymentLogRead` - Retrieve an existing patient payment log
* `PatientPaymentsCreate` - Create patient payment
* `PatientPaymentsList` - Retrieve or search patient payments
* `PatientPaymentsRead` - Retrieve an existing patient payment
* `ProceduresList`
* `ProceduresRead`
* `TransactionsList` - Retrieve or search insurance transactions associated with billing line items
* `TransactionsRead` - Retrieve an existing insurance transaction

### Clinical

* `AllergiesCreate` - Create patient allergy
* `AllergiesList` - Retrieve or search patient allergies
* `AllergiesPartialUpdate` - Update an existing patient allergy
* `AllergiesRead` - Retrieve an existing patient allergy
* `AllergiesUpdate` - Update an existing patient allergy
* `AmendmentsCreate` - Create patient amendments to a patient's clinical records
* `AmendmentsDelete` - Delete an existing patient amendment, you can only interact with amendments created by your API application
* `AmendmentsList` - Retrieve or search patient amendments. You can only interact with amendments created by your API application
* `AmendmentsPartialUpdate` - Update an existing patient amendment, you can only interact with amendments created by your API application
* `AmendmentsRead` - Retrieve an existing patient amendment, you can only interact with amendments created by your API application
* `AmendmentsUpdate` - Update an existing patient amendment, you can only interact with amendments created by your API application
* `AppointmentProfilesCreate` - Create appointment profiles for a doctor's calendar
* `AppointmentProfilesDelete` - Delete an existing appointment profile
* `AppointmentProfilesList` - Retrieve or search appointment profiles for a doctor's calendar
* `AppointmentProfilesPartialUpdate` - Update an existing appointment profile
* `AppointmentProfilesRead` - Retrieve an existing appointment profile
* `AppointmentProfilesUpdate` - Update an existing appointment profile
* `AppointmentTemplatesCreate` - Create appointment templates for a doctor's calendar
* `AppointmentTemplatesDelete` - Delete an existing appointment template
* `AppointmentTemplatesList` - Retrieve or search appointment templates for a doctor's calendar
* `AppointmentTemplatesPartialUpdate` - Update an existing appointment template
* `AppointmentTemplatesRead` - Retrieve an existing appointment template
* `AppointmentTemplatesUpdate` - Update an existing appointment template
* `AppointmentsCreate` - Create a new appointment or break on doctor's calendar
* `AppointmentsDelete` - Delete an existing appointment or break
* `AppointmentsList` - Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            
* `AppointmentsPartialUpdate` - Update an existing appointment or break
* `AppointmentsRead` - Retrieve an existing appointment or break
* `AppointmentsUpdate` - Update an existing appointment or break
* `CarePlansList` - Retrieve or search care plans
* `CarePlansRead` - Retrieve an existing care plan
* `CareTeamMembersList`
* `CareTeamMembersRead`
* `ClaimBillingNotesCreate` - Create a new billing note
* `ClaimBillingNotesList` - Retrieve or search billing notes
* `ClaimBillingNotesRead` - Retrieve an existing billing note
* `ClinicalNoteFieldTypesList` - Retrieve or search clinical note field types
* `ClinicalNoteFieldTypesRead` - Retrieve an existing clinial note field type
* `ClinicalNoteFieldValuesCreate` - Create clinical note field value
* `ClinicalNoteFieldValuesList` - Retrieve or search clinical note field values
* `ClinicalNoteFieldValuesPartialUpdate` - Update an existing clinical note field value
* `ClinicalNoteFieldValuesRead` - Retrieve an existing clinical note field value
* `ClinicalNoteFieldValuesUpdate` - Update an existing clinical note field value
* `ClinicalNoteTemplatesList` - Retrieve or search clinical note templates
* `ClinicalNoteTemplatesRead` - Retrieve an existing clinical note tempalte
* `ClinicalNotesList`
* `ClinicalNotesRead`
* `ConsentFormsApplyToAppointment` - Assign (apply) a consent form to appointment
* `ConsentFormsCreate` - Create a patient consent form
* `ConsentFormsList` - Retrieve or search patient consent forms
* `ConsentFormsPartialUpdate` - Update an existing patient consent form
* `ConsentFormsRead` - Retrieve an existing patient consent form
* `ConsentFormsUnapplyFromAppointment` - Unassign (unapply) a consent form from appointment
* `ConsentFormsUpdate` - Update an existing patient consent form
* `CustomAppointmentFieldsCreate` - Create custom appointment fields
* `CustomAppointmentFieldsList` - Retrieve or search custom appointment fields
* `CustomAppointmentFieldsPartialUpdate` - Update an existing custom appointment field
* `CustomAppointmentFieldsRead` - Retrieve an existing custom appointment field
* `CustomAppointmentFieldsUpdate` - Update an existing custom appointment field
* `CustomDemographicsCreate` - Create custom demographics fields
* `CustomDemographicsList` - Retrieve or search custom demographics fields
* `CustomDemographicsPartialUpdate` - Update an existing custom demographics field
* `CustomDemographicsRead` - Retrieve an existing custom demographics field
* `CustomDemographicsUpdate` - Update an existing custom demographics field
* `CustomVitalsList` - Retrieve or search custom vital types
* `CustomVitalsRead` - Retrieve an existing custom vital type
* `DocumentsCreate` - Create documents
* `DocumentsDelete` - Delete an existing appointment template
* `DocumentsList` - Retrieve or search documents
* `DocumentsPartialUpdate` - Update an existing appointment template
* `DocumentsRead` - Retrieve an existing appointment template
* `DocumentsUpdate` - Update an existing appointment template
* `EobsCreate` - Create EOB object
* `EobsList` - Retrieve or search EOB objects
* `EobsRead` - Retrieve an existing EOB object
* `FeeSchedulesList`
* `FeeSchedulesRead`
* `ImplantableDevicesList` - Retrieve or search implantable devices
* `ImplantableDevicesRead` - Retrieve an existing implantable device
* `InsurancesList`
* `InsurancesRead`
* `LabDocumentsCreate` - Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `LabDocumentsDelete` - Delete an existing lab order document
* `LabDocumentsList` - Retrieve or search lab order documents
* `LabDocumentsPartialUpdate` - Update an existing lab order document
* `LabDocumentsRead` - Retrieve an existing lab order document
* `LabDocumentsUpdate` - Update an existing lab order document
* `LabOrdersCreate` - Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `LabOrdersDelete` - Delete an existing lab order
* `LabOrdersList` - Retrieve or search lab orders
* `LabOrdersPartialUpdate` - Update an existing lab order
* `LabOrdersRead` - Retrieve an existing lab order
* `LabOrdersSummaryList`
* `LabOrdersSummaryRead`
* `LabOrdersUpdate` - Update an existing lab order
* `LabResultsCreate` - Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `LabResultsDelete` - Delete an existing lab result
* `LabResultsList` - Retrieve or search lab results
* `LabResultsPartialUpdate` - Update an existing lab result
* `LabResultsRead` - Retrieve an existing lab result
* `LabResultsUpdate` - Update an existing lab result
* `LabTestsCreate` - Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `LabTestsDelete` - Delete an existing lab test
* `LabTestsList` - Retrieve or search lab tests
* `LabTestsPartialUpdate` - Update an existing lab test
* `LabTestsRead` - Retrieve an existing lab test
* `LabTestsUpdate` - Update an existing lab test
* `MedicationsAppendToPharmacyNote` - Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
* `MedicationsCreate` - Create patient medications
* `MedicationsList` - Retrieve or search patient medications
* `MedicationsPartialUpdate` - Update an existing patient medications
* `MedicationsRead` - Retrieve an existing patient medications
* `MedicationsUpdate` - Update an existing patient medications
* `PatientCommunicationsCreate` - Create patient communication for CQM
* `PatientCommunicationsList` - Retrieve or search patient communications for CQM
* `PatientCommunicationsPartialUpdate` - Update an existing patient communication for CQM
* `PatientCommunicationsRead` - Retrieve an existing patient communication for CQM
* `PatientCommunicationsUpdate` - Update an existing patient communication for CQM
* `PatientFlagTypesCreate` - Create patient flag types
* `PatientFlagTypesList` - Retrieve or search patient flag types
* `PatientFlagTypesPartialUpdate` - Update an existing patient flag type
* `PatientFlagTypesRead` - Retrieve an existing patient flag type
* `PatientFlagTypesUpdate` - Update an existing patient flag type
* `PatientInterventionsCreate` - Create patient intervention for CQM
* `PatientInterventionsList` - Retrieve or search patient interventions for CQM
* `PatientInterventionsPartialUpdate` - Update an existing patient intervention for CQM
* `PatientInterventionsRead` - Retrieve an existing patient intervention for CQM
* `PatientInterventionsUpdate` - Update an existing patient intervention for CQM
* `PatientLabResultsCreate`
* `PatientLabResultsDelete`
* `PatientLabResultsList`
* `PatientLabResultsPartialUpdate`
* `PatientLabResultsRead`
* `PatientLabResultsUpdate`
* `PatientMessagesCreate`
* `PatientMessagesList`
* `PatientMessagesPartialUpdate`
* `PatientMessagesRead`
* `PatientMessagesUpdate`
* `PatientPhysicalExamsCreate` - Create patient physical exam for CQM
* `PatientPhysicalExamsList` - Retrieve or search patient physical exams for CQM
* `PatientPhysicalExamsPartialUpdate` - Update an existing patient physical exam for CQM
* `PatientPhysicalExamsRead` - Retrieve an existing patient physical exam for CQM
* `PatientPhysicalExamsUpdate` - Update an existing patient physical exam for CQM
* `PatientRiskAssessmentsCreate`
* `PatientRiskAssessmentsList`
* `PatientRiskAssessmentsPartialUpdate`
* `PatientRiskAssessmentsRead`
* `PatientRiskAssessmentsUpdate`
* `PatientVaccineRecordsCreate` - Create patient vaccine records
* `PatientVaccineRecordsList` - Retrieve or search patient vaccine records
* `PatientVaccineRecordsPartialUpdate` - Update an existing patient vaccine records
* `PatientVaccineRecordsRead` - Retrieve an existing patient vaccine records
* `PatientVaccineRecordsUpdate` - Update an existing patient vaccine records
* `PatientsCcda` - Retrieve patient CCDA
* `PatientsCreate` - Create patient
* `PatientsDelete` - Delete an existing patient
* `PatientsList` - Retrieve or search patients
* `PatientsOnpatientAccessCreate` - Send new onpatient invite to patient
* `PatientsOnpatientAccessDelete` - Revoke sent onpatient invites
* `PatientsOnpatientAccessRead` - Retrieve or search existing onpatient access invites
* `PatientsPartialUpdate` - Update an existing patient
* `PatientsQrda1` - Retrieve patient QRDA1
* `PatientsRead` - Retrieve an existing patient
* `PatientsSummaryCreate`
* `PatientsSummaryDelete`
* `PatientsSummaryList`
* `PatientsSummaryPartialUpdate`
* `PatientsSummaryRead`
* `PatientsSummaryUpdate`
* `PatientsUpdate` - Update an existing patient
* `PrescriptionMessagesList` - Retrieve or search prescription messages
* `PrescriptionMessagesRead` - Retrieve an existing prescription message
* `ProblemsCreate` - Create patient problems
* `ProblemsList` - Retrieve or search patient problems
* `ProblemsPartialUpdate` - Update an existing patient problems
* `ProblemsRead` - Retrieve an existing patient problems
* `ProblemsUpdate` - Update an existing patient problems
* `ReminderProfilesCreate` - Create reminder profile
* `ReminderProfilesDelete` - Delete an existing reminder profile
* `ReminderProfilesList` - Retrieve or search reminder profiles
* `ReminderProfilesPartialUpdate` - Update an existing reminder profile
* `ReminderProfilesRead` - Retrieve an existing reminder profile
* `ReminderProfilesUpdate` - Update an existing reminder profile
* `SublabsCreate` - Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `SublabsDelete` - Delete an existing sub vendor
* `SublabsList` - Retrieve or search sub vendors
* `SublabsPartialUpdate` - Update an existing sub vendor
* `SublabsRead` - Retrieve an existing sub vendor
* `SublabsUpdate` - Update an existing sub vendor

### PracticeManagement

* `InventoryCategoriesList` - Retrieve or search inventory categories
* `InventoryCategoriesRead` - Retrieve an existing inventory category
* `InventoryVaccinesCreate` - Create vaccine inventory
* `InventoryVaccinesList` - Retrieve or search vaccine inventories
* `InventoryVaccinesRead` - Retrieve an existing vaccine inventory
* `MessagesCreate` - Create messages in doctor's message center
* `MessagesDelete` - Delete an existing message in doctor's message center
* `MessagesList` - Retrieve or search messages in doctor's message center
* `MessagesPartialUpdate` - Update an existing message in doctor's message center
* `MessagesRead` - Retrieve an existing message in doctor's message center
* `MessagesUpdate` - Update an existing message in doctor's message center
* `OfficesAddExamRoom` - Add an exam room to the office
* `OfficesList` - Retrieve or search offices
* `OfficesPartialUpdate` - Update an existing office
* `OfficesRead` - Retrieve an existing office
* `OfficesUpdate` - Update an existing office
* `TaskCategoriesCreate` - Create a task category
* `TaskCategoriesList` - Retrieve or search task categories
* `TaskCategoriesPartialUpdate` - Update an existing task category
* `TaskCategoriesRead` - Retrieve an existing task category
* `TaskCategoriesUpdate` - Update an existing task category
* `TaskNotesCreate` - Create a task note
* `TaskNotesList` - Retrieve or search task notes
* `TaskNotesPartialUpdate` - Update an existing task note
* `TaskNotesRead` - Retrieve an existing task note
* `TaskNotesUpdate` - Update an existing task note
* `TaskStatusesCreate` - Create a task status
* `TaskStatusesList` - Retrieve or search task statuses
* `TaskStatusesPartialUpdate` - Update an existing task status
* `TaskStatusesRead` - Retrieve an existing task status
* `TaskStatusesUpdate` - Update an existing task status
* `TaskTemplatesCreate` - Create a task template
* `TaskTemplatesList` - Retrieve or search task templates
* `TaskTemplatesPartialUpdate` - Update an existing task template
* `TaskTemplatesRead` - Retrieve an existing task template
* `TaskTemplatesUpdate` - Update an existing task template
* `TasksCreate` - Create a task
* `TasksList` - Retrieve or search tasks
* `TasksPartialUpdate` - Update an existing task
* `TasksRead` - Retrieve an existing task
* `TasksUpdate` - Update an existing task

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
