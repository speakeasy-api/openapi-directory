# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/drchrono.com/v4 (Hunt Valley)/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Administrative.DoctorsList(ctx, operations.DoctorsListRequest{
        Cursor: sdk.String("corrupti"),
        Doctor: sdk.Int64(592845),
        PageSize: sdk.Int64(715190),
    }, operations.DoctorsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Administrative](docs/administrative/README.md)

* [DoctorsList](docs/administrative/README.md#doctorslist) - Retrieve or search doctors within practice group
* [DoctorsRead](docs/administrative/README.md#doctorsread) - Retrieve an existing dcotor
* [UserGroupsList](docs/administrative/README.md#usergroupslist) - Retrieve or search user groups
* [UserGroupsRead](docs/administrative/README.md#usergroupsread) - Retrieve an existing user group
* [UsersList](docs/administrative/README.md#userslist) - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
* [UsersRead](docs/administrative/README.md#usersread) - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### [Billing](docs/billing/README.md)

* [BillingProfilesList](docs/billing/README.md#billingprofileslist) - Retrieve or search billing profiles
* [BillingProfilesRead](docs/billing/README.md#billingprofilesread) - Retrieve an existing billing profiles
* [CommLogsCreate](docs/billing/README.md#commlogscreate) - Create communication (phone call) logs
* [CommLogsList](docs/billing/README.md#commlogslist) - Retrieve or search communicatioin (phone call) logs
* [CommLogsPartialUpdate](docs/billing/README.md#commlogspartialupdate) - Update an existing communication (phone call) logs
* [CommLogsRead](docs/billing/README.md#commlogsread) - Retrieve an existing communication (phone call) logs
* [CommLogsUpdate](docs/billing/README.md#commlogsupdate) - Update an existing communication (phone call) logs
* [CustomInsurancePlanNamesList](docs/billing/README.md#custominsuranceplannameslist) - Retrieve or search custom insurance plan names
* [CustomInsurancePlanNamesRead](docs/billing/README.md#custominsuranceplannamesread) - Retrieve an existing custom insurance plan name
* [EligibilityChecksList](docs/billing/README.md#eligibilitycheckslist) - Retrieve or search past eligibility checks for patient
* [EligibilityChecksRead](docs/billing/README.md#eligibilitychecksread) - Retrieve an existing past eligibility check
* [LineItemsCreate](docs/billing/README.md#lineitemscreate) - Create billing line item for appointments
* [LineItemsDelete](docs/billing/README.md#lineitemsdelete)
* [LineItemsList](docs/billing/README.md#lineitemslist) - Retrieve or search billing line items
* [LineItemsPartialUpdate](docs/billing/README.md#lineitemspartialupdate)
* [LineItemsRead](docs/billing/README.md#lineitemsread) - Retrieve an existing billing line item
* [LineItemsUpdate](docs/billing/README.md#lineitemsupdate)
* [PatientPaymentLogList](docs/billing/README.md#patientpaymentloglist) - Retrieve or search patient payment logs
* [PatientPaymentLogRead](docs/billing/README.md#patientpaymentlogread) - Retrieve an existing patient payment log
* [PatientPaymentsCreate](docs/billing/README.md#patientpaymentscreate) - Create patient payment
* [PatientPaymentsList](docs/billing/README.md#patientpaymentslist) - Retrieve or search patient payments
* [PatientPaymentsRead](docs/billing/README.md#patientpaymentsread) - Retrieve an existing patient payment
* [ProceduresList](docs/billing/README.md#procedureslist)
* [ProceduresRead](docs/billing/README.md#proceduresread)
* [TransactionsList](docs/billing/README.md#transactionslist) - Retrieve or search insurance transactions associated with billing line items
* [TransactionsRead](docs/billing/README.md#transactionsread) - Retrieve an existing insurance transaction

### [Clinical](docs/clinical/README.md)

* [AllergiesCreate](docs/clinical/README.md#allergiescreate) - Create patient allergy
* [AllergiesList](docs/clinical/README.md#allergieslist) - Retrieve or search patient allergies
* [AllergiesPartialUpdate](docs/clinical/README.md#allergiespartialupdate) - Update an existing patient allergy
* [AllergiesRead](docs/clinical/README.md#allergiesread) - Retrieve an existing patient allergy
* [AllergiesUpdate](docs/clinical/README.md#allergiesupdate) - Update an existing patient allergy
* [AmendmentsCreate](docs/clinical/README.md#amendmentscreate) - Create patient amendments to a patient's clinical records
* [AmendmentsDelete](docs/clinical/README.md#amendmentsdelete) - Delete an existing patient amendment, you can only interact with amendments created by your API application
* [AmendmentsList](docs/clinical/README.md#amendmentslist) - Retrieve or search patient amendments. You can only interact with amendments created by your API application
* [AmendmentsPartialUpdate](docs/clinical/README.md#amendmentspartialupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [AmendmentsRead](docs/clinical/README.md#amendmentsread) - Retrieve an existing patient amendment, you can only interact with amendments created by your API application
* [AmendmentsUpdate](docs/clinical/README.md#amendmentsupdate) - Update an existing patient amendment, you can only interact with amendments created by your API application
* [AppointmentProfilesCreate](docs/clinical/README.md#appointmentprofilescreate) - Create appointment profiles for a doctor's calendar
* [AppointmentProfilesDelete](docs/clinical/README.md#appointmentprofilesdelete) - Delete an existing appointment profile
* [AppointmentProfilesList](docs/clinical/README.md#appointmentprofileslist) - Retrieve or search appointment profiles for a doctor's calendar
* [AppointmentProfilesPartialUpdate](docs/clinical/README.md#appointmentprofilespartialupdate) - Update an existing appointment profile
* [AppointmentProfilesRead](docs/clinical/README.md#appointmentprofilesread) - Retrieve an existing appointment profile
* [AppointmentProfilesUpdate](docs/clinical/README.md#appointmentprofilesupdate) - Update an existing appointment profile
* [AppointmentTemplatesCreate](docs/clinical/README.md#appointmenttemplatescreate) - Create appointment templates for a doctor's calendar
* [AppointmentTemplatesDelete](docs/clinical/README.md#appointmenttemplatesdelete) - Delete an existing appointment template
* [AppointmentTemplatesList](docs/clinical/README.md#appointmenttemplateslist) - Retrieve or search appointment templates for a doctor's calendar
* [AppointmentTemplatesPartialUpdate](docs/clinical/README.md#appointmenttemplatespartialupdate) - Update an existing appointment template
* [AppointmentTemplatesRead](docs/clinical/README.md#appointmenttemplatesread) - Retrieve an existing appointment template
* [AppointmentTemplatesUpdate](docs/clinical/README.md#appointmenttemplatesupdate) - Update an existing appointment template
* [AppointmentsCreate](docs/clinical/README.md#appointmentscreate) - Create a new appointment or break on doctor's calendar
* [AppointmentsDelete](docs/clinical/README.md#appointmentsdelete) - Delete an existing appointment or break
* [AppointmentsList](docs/clinical/README.md#appointmentslist) - Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            
* [AppointmentsPartialUpdate](docs/clinical/README.md#appointmentspartialupdate) - Update an existing appointment or break
* [AppointmentsRead](docs/clinical/README.md#appointmentsread) - Retrieve an existing appointment or break
* [AppointmentsUpdate](docs/clinical/README.md#appointmentsupdate) - Update an existing appointment or break
* [CarePlansList](docs/clinical/README.md#careplanslist) - Retrieve or search care plans
* [CarePlansRead](docs/clinical/README.md#careplansread) - Retrieve an existing care plan
* [CareTeamMembersList](docs/clinical/README.md#careteammemberslist)
* [CareTeamMembersRead](docs/clinical/README.md#careteammembersread)
* [ClaimBillingNotesCreate](docs/clinical/README.md#claimbillingnotescreate) - Create a new billing note
* [ClaimBillingNotesList](docs/clinical/README.md#claimbillingnoteslist) - Retrieve or search billing notes
* [ClaimBillingNotesRead](docs/clinical/README.md#claimbillingnotesread) - Retrieve an existing billing note
* [ClinicalNoteFieldTypesList](docs/clinical/README.md#clinicalnotefieldtypeslist) - Retrieve or search clinical note field types
* [ClinicalNoteFieldTypesRead](docs/clinical/README.md#clinicalnotefieldtypesread) - Retrieve an existing clinial note field type
* [ClinicalNoteFieldValuesCreate](docs/clinical/README.md#clinicalnotefieldvaluescreate) - Create clinical note field value
* [ClinicalNoteFieldValuesList](docs/clinical/README.md#clinicalnotefieldvalueslist) - Retrieve or search clinical note field values
* [ClinicalNoteFieldValuesPartialUpdate](docs/clinical/README.md#clinicalnotefieldvaluespartialupdate) - Update an existing clinical note field value
* [ClinicalNoteFieldValuesRead](docs/clinical/README.md#clinicalnotefieldvaluesread) - Retrieve an existing clinical note field value
* [ClinicalNoteFieldValuesUpdate](docs/clinical/README.md#clinicalnotefieldvaluesupdate) - Update an existing clinical note field value
* [ClinicalNoteTemplatesList](docs/clinical/README.md#clinicalnotetemplateslist) - Retrieve or search clinical note templates
* [ClinicalNoteTemplatesRead](docs/clinical/README.md#clinicalnotetemplatesread) - Retrieve an existing clinical note tempalte
* [ClinicalNotesList](docs/clinical/README.md#clinicalnoteslist)
* [ClinicalNotesRead](docs/clinical/README.md#clinicalnotesread)
* [ConsentFormsApplyToAppointment](docs/clinical/README.md#consentformsapplytoappointment) - Assign (apply) a consent form to appointment
* [ConsentFormsCreate](docs/clinical/README.md#consentformscreate) - Create a patient consent form
* [ConsentFormsList](docs/clinical/README.md#consentformslist) - Retrieve or search patient consent forms
* [ConsentFormsPartialUpdate](docs/clinical/README.md#consentformspartialupdate) - Update an existing patient consent form
* [ConsentFormsRead](docs/clinical/README.md#consentformsread) - Retrieve an existing patient consent form
* [ConsentFormsUnapplyFromAppointment](docs/clinical/README.md#consentformsunapplyfromappointment) - Unassign (unapply) a consent form from appointment
* [ConsentFormsUpdate](docs/clinical/README.md#consentformsupdate) - Update an existing patient consent form
* [CustomAppointmentFieldsCreate](docs/clinical/README.md#customappointmentfieldscreate) - Create custom appointment fields
* [CustomAppointmentFieldsList](docs/clinical/README.md#customappointmentfieldslist) - Retrieve or search custom appointment fields
* [CustomAppointmentFieldsPartialUpdate](docs/clinical/README.md#customappointmentfieldspartialupdate) - Update an existing custom appointment field
* [CustomAppointmentFieldsRead](docs/clinical/README.md#customappointmentfieldsread) - Retrieve an existing custom appointment field
* [CustomAppointmentFieldsUpdate](docs/clinical/README.md#customappointmentfieldsupdate) - Update an existing custom appointment field
* [CustomDemographicsCreate](docs/clinical/README.md#customdemographicscreate) - Create custom demographics fields
* [CustomDemographicsList](docs/clinical/README.md#customdemographicslist) - Retrieve or search custom demographics fields
* [CustomDemographicsPartialUpdate](docs/clinical/README.md#customdemographicspartialupdate) - Update an existing custom demographics field
* [CustomDemographicsRead](docs/clinical/README.md#customdemographicsread) - Retrieve an existing custom demographics field
* [CustomDemographicsUpdate](docs/clinical/README.md#customdemographicsupdate) - Update an existing custom demographics field
* [CustomVitalsList](docs/clinical/README.md#customvitalslist) - Retrieve or search custom vital types
* [CustomVitalsRead](docs/clinical/README.md#customvitalsread) - Retrieve an existing custom vital type
* [DocumentsCreate](docs/clinical/README.md#documentscreate) - Create documents
* [DocumentsDelete](docs/clinical/README.md#documentsdelete) - Delete an existing appointment template
* [DocumentsList](docs/clinical/README.md#documentslist) - Retrieve or search documents
* [DocumentsPartialUpdate](docs/clinical/README.md#documentspartialupdate) - Update an existing appointment template
* [DocumentsRead](docs/clinical/README.md#documentsread) - Retrieve an existing appointment template
* [DocumentsUpdate](docs/clinical/README.md#documentsupdate) - Update an existing appointment template
* [EobsCreate](docs/clinical/README.md#eobscreate) - Create EOB object
* [EobsList](docs/clinical/README.md#eobslist) - Retrieve or search EOB objects
* [EobsRead](docs/clinical/README.md#eobsread) - Retrieve an existing EOB object
* [FeeSchedulesList](docs/clinical/README.md#feescheduleslist)
* [FeeSchedulesRead](docs/clinical/README.md#feeschedulesread)
* [ImplantableDevicesList](docs/clinical/README.md#implantabledeviceslist) - Retrieve or search implantable devices
* [ImplantableDevicesRead](docs/clinical/README.md#implantabledevicesread) - Retrieve an existing implantable device
* [InsurancesList](docs/clinical/README.md#insuranceslist)
* [InsurancesRead](docs/clinical/README.md#insurancesread)
* [LabDocumentsCreate](docs/clinical/README.md#labdocumentscreate) - Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabDocumentsDelete](docs/clinical/README.md#labdocumentsdelete) - Delete an existing lab order document
* [LabDocumentsList](docs/clinical/README.md#labdocumentslist) - Retrieve or search lab order documents
* [LabDocumentsPartialUpdate](docs/clinical/README.md#labdocumentspartialupdate) - Update an existing lab order document
* [LabDocumentsRead](docs/clinical/README.md#labdocumentsread) - Retrieve an existing lab order document
* [LabDocumentsUpdate](docs/clinical/README.md#labdocumentsupdate) - Update an existing lab order document
* [LabOrdersCreate](docs/clinical/README.md#laborderscreate) - Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabOrdersDelete](docs/clinical/README.md#labordersdelete) - Delete an existing lab order
* [LabOrdersList](docs/clinical/README.md#laborderslist) - Retrieve or search lab orders
* [LabOrdersPartialUpdate](docs/clinical/README.md#laborderspartialupdate) - Update an existing lab order
* [LabOrdersRead](docs/clinical/README.md#labordersread) - Retrieve an existing lab order
* [LabOrdersSummaryList](docs/clinical/README.md#laborderssummarylist)
* [LabOrdersSummaryRead](docs/clinical/README.md#laborderssummaryread)
* [LabOrdersUpdate](docs/clinical/README.md#labordersupdate) - Update an existing lab order
* [LabResultsCreate](docs/clinical/README.md#labresultscreate) - Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabResultsDelete](docs/clinical/README.md#labresultsdelete) - Delete an existing lab result
* [LabResultsList](docs/clinical/README.md#labresultslist) - Retrieve or search lab results
* [LabResultsPartialUpdate](docs/clinical/README.md#labresultspartialupdate) - Update an existing lab result
* [LabResultsRead](docs/clinical/README.md#labresultsread) - Retrieve an existing lab result
* [LabResultsUpdate](docs/clinical/README.md#labresultsupdate) - Update an existing lab result
* [LabTestsCreate](docs/clinical/README.md#labtestscreate) - Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [LabTestsDelete](docs/clinical/README.md#labtestsdelete) - Delete an existing lab test
* [LabTestsList](docs/clinical/README.md#labtestslist) - Retrieve or search lab tests
* [LabTestsPartialUpdate](docs/clinical/README.md#labtestspartialupdate) - Update an existing lab test
* [LabTestsRead](docs/clinical/README.md#labtestsread) - Retrieve an existing lab test
* [LabTestsUpdate](docs/clinical/README.md#labtestsupdate) - Update an existing lab test
* [MedicationsAppendToPharmacyNote](docs/clinical/README.md#medicationsappendtopharmacynote) - Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
* [MedicationsCreate](docs/clinical/README.md#medicationscreate) - Create patient medications
* [MedicationsList](docs/clinical/README.md#medicationslist) - Retrieve or search patient medications
* [MedicationsPartialUpdate](docs/clinical/README.md#medicationspartialupdate) - Update an existing patient medications
* [MedicationsRead](docs/clinical/README.md#medicationsread) - Retrieve an existing patient medications
* [MedicationsUpdate](docs/clinical/README.md#medicationsupdate) - Update an existing patient medications
* [PatientCommunicationsCreate](docs/clinical/README.md#patientcommunicationscreate) - Create patient communication for CQM
* [PatientCommunicationsList](docs/clinical/README.md#patientcommunicationslist) - Retrieve or search patient communications for CQM
* [PatientCommunicationsPartialUpdate](docs/clinical/README.md#patientcommunicationspartialupdate) - Update an existing patient communication for CQM
* [PatientCommunicationsRead](docs/clinical/README.md#patientcommunicationsread) - Retrieve an existing patient communication for CQM
* [PatientCommunicationsUpdate](docs/clinical/README.md#patientcommunicationsupdate) - Update an existing patient communication for CQM
* [PatientFlagTypesCreate](docs/clinical/README.md#patientflagtypescreate) - Create patient flag types
* [PatientFlagTypesList](docs/clinical/README.md#patientflagtypeslist) - Retrieve or search patient flag types
* [PatientFlagTypesPartialUpdate](docs/clinical/README.md#patientflagtypespartialupdate) - Update an existing patient flag type
* [PatientFlagTypesRead](docs/clinical/README.md#patientflagtypesread) - Retrieve an existing patient flag type
* [PatientFlagTypesUpdate](docs/clinical/README.md#patientflagtypesupdate) - Update an existing patient flag type
* [PatientInterventionsCreate](docs/clinical/README.md#patientinterventionscreate) - Create patient intervention for CQM
* [PatientInterventionsList](docs/clinical/README.md#patientinterventionslist) - Retrieve or search patient interventions for CQM
* [PatientInterventionsPartialUpdate](docs/clinical/README.md#patientinterventionspartialupdate) - Update an existing patient intervention for CQM
* [PatientInterventionsRead](docs/clinical/README.md#patientinterventionsread) - Retrieve an existing patient intervention for CQM
* [PatientInterventionsUpdate](docs/clinical/README.md#patientinterventionsupdate) - Update an existing patient intervention for CQM
* [PatientLabResultsCreate](docs/clinical/README.md#patientlabresultscreate)
* [PatientLabResultsDelete](docs/clinical/README.md#patientlabresultsdelete)
* [PatientLabResultsList](docs/clinical/README.md#patientlabresultslist)
* [PatientLabResultsPartialUpdate](docs/clinical/README.md#patientlabresultspartialupdate)
* [PatientLabResultsRead](docs/clinical/README.md#patientlabresultsread)
* [PatientLabResultsUpdate](docs/clinical/README.md#patientlabresultsupdate)
* [PatientMessagesCreate](docs/clinical/README.md#patientmessagescreate)
* [PatientMessagesList](docs/clinical/README.md#patientmessageslist)
* [PatientMessagesPartialUpdate](docs/clinical/README.md#patientmessagespartialupdate)
* [PatientMessagesRead](docs/clinical/README.md#patientmessagesread)
* [PatientMessagesUpdate](docs/clinical/README.md#patientmessagesupdate)
* [PatientPhysicalExamsCreate](docs/clinical/README.md#patientphysicalexamscreate) - Create patient physical exam for CQM
* [PatientPhysicalExamsList](docs/clinical/README.md#patientphysicalexamslist) - Retrieve or search patient physical exams for CQM
* [PatientPhysicalExamsPartialUpdate](docs/clinical/README.md#patientphysicalexamspartialupdate) - Update an existing patient physical exam for CQM
* [PatientPhysicalExamsRead](docs/clinical/README.md#patientphysicalexamsread) - Retrieve an existing patient physical exam for CQM
* [PatientPhysicalExamsUpdate](docs/clinical/README.md#patientphysicalexamsupdate) - Update an existing patient physical exam for CQM
* [PatientRiskAssessmentsCreate](docs/clinical/README.md#patientriskassessmentscreate)
* [PatientRiskAssessmentsList](docs/clinical/README.md#patientriskassessmentslist)
* [PatientRiskAssessmentsPartialUpdate](docs/clinical/README.md#patientriskassessmentspartialupdate)
* [PatientRiskAssessmentsRead](docs/clinical/README.md#patientriskassessmentsread)
* [PatientRiskAssessmentsUpdate](docs/clinical/README.md#patientriskassessmentsupdate)
* [PatientVaccineRecordsCreate](docs/clinical/README.md#patientvaccinerecordscreate) - Create patient vaccine records
* [PatientVaccineRecordsList](docs/clinical/README.md#patientvaccinerecordslist) - Retrieve or search patient vaccine records
* [PatientVaccineRecordsPartialUpdate](docs/clinical/README.md#patientvaccinerecordspartialupdate) - Update an existing patient vaccine records
* [PatientVaccineRecordsRead](docs/clinical/README.md#patientvaccinerecordsread) - Retrieve an existing patient vaccine records
* [PatientVaccineRecordsUpdate](docs/clinical/README.md#patientvaccinerecordsupdate) - Update an existing patient vaccine records
* [PatientsCcda](docs/clinical/README.md#patientsccda) - Retrieve patient CCDA
* [PatientsCreate](docs/clinical/README.md#patientscreate) - Create patient
* [PatientsDelete](docs/clinical/README.md#patientsdelete) - Delete an existing patient
* [PatientsList](docs/clinical/README.md#patientslist) - Retrieve or search patients
* [PatientsOnpatientAccessCreate](docs/clinical/README.md#patientsonpatientaccesscreate) - Send new onpatient invite to patient
* [PatientsOnpatientAccessDelete](docs/clinical/README.md#patientsonpatientaccessdelete) - Revoke sent onpatient invites
* [PatientsOnpatientAccessRead](docs/clinical/README.md#patientsonpatientaccessread) - Retrieve or search existing onpatient access invites
* [PatientsPartialUpdate](docs/clinical/README.md#patientspartialupdate) - Update an existing patient
* [PatientsQrda1](docs/clinical/README.md#patientsqrda1) - Retrieve patient QRDA1
* [PatientsRead](docs/clinical/README.md#patientsread) - Retrieve an existing patient
* [PatientsSummaryCreate](docs/clinical/README.md#patientssummarycreate)
* [PatientsSummaryDelete](docs/clinical/README.md#patientssummarydelete)
* [PatientsSummaryList](docs/clinical/README.md#patientssummarylist)
* [PatientsSummaryPartialUpdate](docs/clinical/README.md#patientssummarypartialupdate)
* [PatientsSummaryRead](docs/clinical/README.md#patientssummaryread)
* [PatientsSummaryUpdate](docs/clinical/README.md#patientssummaryupdate)
* [PatientsUpdate](docs/clinical/README.md#patientsupdate) - Update an existing patient
* [PrescriptionMessagesList](docs/clinical/README.md#prescriptionmessageslist) - Retrieve or search prescription messages
* [PrescriptionMessagesRead](docs/clinical/README.md#prescriptionmessagesread) - Retrieve an existing prescription message
* [ProblemsCreate](docs/clinical/README.md#problemscreate) - Create patient problems
* [ProblemsList](docs/clinical/README.md#problemslist) - Retrieve or search patient problems
* [ProblemsPartialUpdate](docs/clinical/README.md#problemspartialupdate) - Update an existing patient problems
* [ProblemsRead](docs/clinical/README.md#problemsread) - Retrieve an existing patient problems
* [ProblemsUpdate](docs/clinical/README.md#problemsupdate) - Update an existing patient problems
* [ReminderProfilesCreate](docs/clinical/README.md#reminderprofilescreate) - Create reminder profile
* [ReminderProfilesDelete](docs/clinical/README.md#reminderprofilesdelete) - Delete an existing reminder profile
* [ReminderProfilesList](docs/clinical/README.md#reminderprofileslist) - Retrieve or search reminder profiles
* [ReminderProfilesPartialUpdate](docs/clinical/README.md#reminderprofilespartialupdate) - Update an existing reminder profile
* [ReminderProfilesRead](docs/clinical/README.md#reminderprofilesread) - Retrieve an existing reminder profile
* [ReminderProfilesUpdate](docs/clinical/README.md#reminderprofilesupdate) - Update an existing reminder profile
* [SublabsCreate](docs/clinical/README.md#sublabscreate) - Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* [SublabsDelete](docs/clinical/README.md#sublabsdelete) - Delete an existing sub vendor
* [SublabsList](docs/clinical/README.md#sublabslist) - Retrieve or search sub vendors
* [SublabsPartialUpdate](docs/clinical/README.md#sublabspartialupdate) - Update an existing sub vendor
* [SublabsRead](docs/clinical/README.md#sublabsread) - Retrieve an existing sub vendor
* [SublabsUpdate](docs/clinical/README.md#sublabsupdate) - Update an existing sub vendor

### [PracticeManagement](docs/practicemanagement/README.md)

* [InventoryCategoriesList](docs/practicemanagement/README.md#inventorycategorieslist) - Retrieve or search inventory categories
* [InventoryCategoriesRead](docs/practicemanagement/README.md#inventorycategoriesread) - Retrieve an existing inventory category
* [InventoryVaccinesCreate](docs/practicemanagement/README.md#inventoryvaccinescreate) - Create vaccine inventory
* [InventoryVaccinesList](docs/practicemanagement/README.md#inventoryvaccineslist) - Retrieve or search vaccine inventories
* [InventoryVaccinesRead](docs/practicemanagement/README.md#inventoryvaccinesread) - Retrieve an existing vaccine inventory
* [MessagesCreate](docs/practicemanagement/README.md#messagescreate) - Create messages in doctor's message center
* [MessagesDelete](docs/practicemanagement/README.md#messagesdelete) - Delete an existing message in doctor's message center
* [MessagesList](docs/practicemanagement/README.md#messageslist) - Retrieve or search messages in doctor's message center
* [MessagesPartialUpdate](docs/practicemanagement/README.md#messagespartialupdate) - Update an existing message in doctor's message center
* [MessagesRead](docs/practicemanagement/README.md#messagesread) - Retrieve an existing message in doctor's message center
* [MessagesUpdate](docs/practicemanagement/README.md#messagesupdate) - Update an existing message in doctor's message center
* [OfficesAddExamRoom](docs/practicemanagement/README.md#officesaddexamroom) - Add an exam room to the office
* [OfficesList](docs/practicemanagement/README.md#officeslist) - Retrieve or search offices
* [OfficesPartialUpdate](docs/practicemanagement/README.md#officespartialupdate) - Update an existing office
* [OfficesRead](docs/practicemanagement/README.md#officesread) - Retrieve an existing office
* [OfficesUpdate](docs/practicemanagement/README.md#officesupdate) - Update an existing office
* [TaskCategoriesCreate](docs/practicemanagement/README.md#taskcategoriescreate) - Create a task category
* [TaskCategoriesList](docs/practicemanagement/README.md#taskcategorieslist) - Retrieve or search task categories
* [TaskCategoriesPartialUpdate](docs/practicemanagement/README.md#taskcategoriespartialupdate) - Update an existing task category
* [TaskCategoriesRead](docs/practicemanagement/README.md#taskcategoriesread) - Retrieve an existing task category
* [TaskCategoriesUpdate](docs/practicemanagement/README.md#taskcategoriesupdate) - Update an existing task category
* [TaskNotesCreate](docs/practicemanagement/README.md#tasknotescreate) - Create a task note
* [TaskNotesList](docs/practicemanagement/README.md#tasknoteslist) - Retrieve or search task notes
* [TaskNotesPartialUpdate](docs/practicemanagement/README.md#tasknotespartialupdate) - Update an existing task note
* [TaskNotesRead](docs/practicemanagement/README.md#tasknotesread) - Retrieve an existing task note
* [TaskNotesUpdate](docs/practicemanagement/README.md#tasknotesupdate) - Update an existing task note
* [TaskStatusesCreate](docs/practicemanagement/README.md#taskstatusescreate) - Create a task status
* [TaskStatusesList](docs/practicemanagement/README.md#taskstatuseslist) - Retrieve or search task statuses
* [TaskStatusesPartialUpdate](docs/practicemanagement/README.md#taskstatusespartialupdate) - Update an existing task status
* [TaskStatusesRead](docs/practicemanagement/README.md#taskstatusesread) - Retrieve an existing task status
* [TaskStatusesUpdate](docs/practicemanagement/README.md#taskstatusesupdate) - Update an existing task status
* [TaskTemplatesCreate](docs/practicemanagement/README.md#tasktemplatescreate) - Create a task template
* [TaskTemplatesList](docs/practicemanagement/README.md#tasktemplateslist) - Retrieve or search task templates
* [TaskTemplatesPartialUpdate](docs/practicemanagement/README.md#tasktemplatespartialupdate) - Update an existing task template
* [TaskTemplatesRead](docs/practicemanagement/README.md#tasktemplatesread) - Retrieve an existing task template
* [TaskTemplatesUpdate](docs/practicemanagement/README.md#tasktemplatesupdate) - Update an existing task template
* [TasksCreate](docs/practicemanagement/README.md#taskscreate) - Create a task
* [TasksList](docs/practicemanagement/README.md#taskslist) - Retrieve or search tasks
* [TasksPartialUpdate](docs/practicemanagement/README.md#taskspartialupdate) - Update an existing task
* [TasksRead](docs/practicemanagement/README.md#tasksread) - Retrieve an existing task
* [TasksUpdate](docs/practicemanagement/README.md#tasksupdate) - Update an existing task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
