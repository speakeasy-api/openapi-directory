# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DoctorsListRequest req = new DoctorsListRequest() {{
                security = new DoctorsListSecurity() {{
                    drchronoOauth2 = new SchemeDrchronoOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DoctorsListQueryParams() {{
                    cursor = "sit";
                    doctor = 2259404117704393152;
                    pageSize = 6050128673802995827;
                }};
            }};

            DoctorsListResponse res = sdk.administrative.doctorsList(req);

            if (res.doctorsList200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Administrative

* `doctorsList` - Retrieve or search doctors within practice group
* `doctorsRead` - Retrieve an existing dcotor
* `userGroupsList` - Retrieve or search user groups
* `userGroupsRead` - Retrieve an existing user group
* `usersList` - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
* `usersRead` - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### Billing

* `billingProfilesList` - Retrieve or search billing profiles
* `billingProfilesRead` - Retrieve an existing billing profiles
* `commLogsCreate` - Create communication (phone call) logs
* `commLogsList` - Retrieve or search communicatioin (phone call) logs
* `commLogsPartialUpdate` - Update an existing communication (phone call) logs
* `commLogsRead` - Retrieve an existing communication (phone call) logs
* `commLogsUpdate` - Update an existing communication (phone call) logs
* `customInsurancePlanNamesList` - Retrieve or search custom insurance plan names
* `customInsurancePlanNamesRead` - Retrieve an existing custom insurance plan name
* `eligibilityChecksList` - Retrieve or search past eligibility checks for patient
* `eligibilityChecksRead` - Retrieve an existing past eligibility check
* `lineItemsCreate` - Create billing line item for appointments
* `lineItemsDelete`
* `lineItemsList` - Retrieve or search billing line items
* `lineItemsPartialUpdate`
* `lineItemsRead` - Retrieve an existing billing line item
* `lineItemsUpdate`
* `patientPaymentLogList` - Retrieve or search patient payment logs
* `patientPaymentLogRead` - Retrieve an existing patient payment log
* `patientPaymentsCreate` - Create patient payment
* `patientPaymentsList` - Retrieve or search patient payments
* `patientPaymentsRead` - Retrieve an existing patient payment
* `proceduresList`
* `proceduresRead`
* `transactionsList` - Retrieve or search insurance transactions associated with billing line items
* `transactionsRead` - Retrieve an existing insurance transaction

### Clinical

* `allergiesCreate` - Create patient allergy
* `allergiesList` - Retrieve or search patient allergies
* `allergiesPartialUpdate` - Update an existing patient allergy
* `allergiesRead` - Retrieve an existing patient allergy
* `allergiesUpdate` - Update an existing patient allergy
* `amendmentsCreate` - Create patient amendments to a patient's clinical records
* `amendmentsDelete` - Delete an existing patient amendment, you can only interact with amendments created by your API application
* `amendmentsList` - Retrieve or search patient amendments. You can only interact with amendments created by your API application
* `amendmentsPartialUpdate` - Update an existing patient amendment, you can only interact with amendments created by your API application
* `amendmentsRead` - Retrieve an existing patient amendment, you can only interact with amendments created by your API application
* `amendmentsUpdate` - Update an existing patient amendment, you can only interact with amendments created by your API application
* `appointmentProfilesCreate` - Create appointment profiles for a doctor's calendar
* `appointmentProfilesDelete` - Delete an existing appointment profile
* `appointmentProfilesList` - Retrieve or search appointment profiles for a doctor's calendar
* `appointmentProfilesPartialUpdate` - Update an existing appointment profile
* `appointmentProfilesRead` - Retrieve an existing appointment profile
* `appointmentProfilesUpdate` - Update an existing appointment profile
* `appointmentTemplatesCreate` - Create appointment templates for a doctor's calendar
* `appointmentTemplatesDelete` - Delete an existing appointment template
* `appointmentTemplatesList` - Retrieve or search appointment templates for a doctor's calendar
* `appointmentTemplatesPartialUpdate` - Update an existing appointment template
* `appointmentTemplatesRead` - Retrieve an existing appointment template
* `appointmentTemplatesUpdate` - Update an existing appointment template
* `appointmentsCreate` - Create a new appointment or break on doctor's calendar
* `appointmentsDelete` - Delete an existing appointment or break
* `appointmentsList` - Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            
* `appointmentsPartialUpdate` - Update an existing appointment or break
* `appointmentsRead` - Retrieve an existing appointment or break
* `appointmentsUpdate` - Update an existing appointment or break
* `carePlansList` - Retrieve or search care plans
* `carePlansRead` - Retrieve an existing care plan
* `careTeamMembersList`
* `careTeamMembersRead`
* `claimBillingNotesCreate` - Create a new billing note
* `claimBillingNotesList` - Retrieve or search billing notes
* `claimBillingNotesRead` - Retrieve an existing billing note
* `clinicalNoteFieldTypesList` - Retrieve or search clinical note field types
* `clinicalNoteFieldTypesRead` - Retrieve an existing clinial note field type
* `clinicalNoteFieldValuesCreate` - Create clinical note field value
* `clinicalNoteFieldValuesList` - Retrieve or search clinical note field values
* `clinicalNoteFieldValuesPartialUpdate` - Update an existing clinical note field value
* `clinicalNoteFieldValuesRead` - Retrieve an existing clinical note field value
* `clinicalNoteFieldValuesUpdate` - Update an existing clinical note field value
* `clinicalNoteTemplatesList` - Retrieve or search clinical note templates
* `clinicalNoteTemplatesRead` - Retrieve an existing clinical note tempalte
* `clinicalNotesList`
* `clinicalNotesRead`
* `consentFormsApplyToAppointment` - Assign (apply) a consent form to appointment
* `consentFormsCreate` - Create a patient consent form
* `consentFormsList` - Retrieve or search patient consent forms
* `consentFormsPartialUpdate` - Update an existing patient consent form
* `consentFormsRead` - Retrieve an existing patient consent form
* `consentFormsUnapplyFromAppointment` - Unassign (unapply) a consent form from appointment
* `consentFormsUpdate` - Update an existing patient consent form
* `customAppointmentFieldsCreate` - Create custom appointment fields
* `customAppointmentFieldsList` - Retrieve or search custom appointment fields
* `customAppointmentFieldsPartialUpdate` - Update an existing custom appointment field
* `customAppointmentFieldsRead` - Retrieve an existing custom appointment field
* `customAppointmentFieldsUpdate` - Update an existing custom appointment field
* `customDemographicsCreate` - Create custom demographics fields
* `customDemographicsList` - Retrieve or search custom demographics fields
* `customDemographicsPartialUpdate` - Update an existing custom demographics field
* `customDemographicsRead` - Retrieve an existing custom demographics field
* `customDemographicsUpdate` - Update an existing custom demographics field
* `customVitalsList` - Retrieve or search custom vital types
* `customVitalsRead` - Retrieve an existing custom vital type
* `documentsCreate` - Create documents
* `documentsDelete` - Delete an existing appointment template
* `documentsList` - Retrieve or search documents
* `documentsPartialUpdate` - Update an existing appointment template
* `documentsRead` - Retrieve an existing appointment template
* `documentsUpdate` - Update an existing appointment template
* `eobsCreate` - Create EOB object
* `eobsList` - Retrieve or search EOB objects
* `eobsRead` - Retrieve an existing EOB object
* `feeSchedulesList`
* `feeSchedulesRead`
* `implantableDevicesList` - Retrieve or search implantable devices
* `implantableDevicesRead` - Retrieve an existing implantable device
* `insurancesList`
* `insurancesRead`
* `labDocumentsCreate` - Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `labDocumentsDelete` - Delete an existing lab order document
* `labDocumentsList` - Retrieve or search lab order documents
* `labDocumentsPartialUpdate` - Update an existing lab order document
* `labDocumentsRead` - Retrieve an existing lab order document
* `labDocumentsUpdate` - Update an existing lab order document
* `labOrdersCreate` - Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `labOrdersDelete` - Delete an existing lab order
* `labOrdersList` - Retrieve or search lab orders
* `labOrdersPartialUpdate` - Update an existing lab order
* `labOrdersRead` - Retrieve an existing lab order
* `labOrdersSummaryList`
* `labOrdersSummaryRead`
* `labOrdersUpdate` - Update an existing lab order
* `labResultsCreate` - Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `labResultsDelete` - Delete an existing lab result
* `labResultsList` - Retrieve or search lab results
* `labResultsPartialUpdate` - Update an existing lab result
* `labResultsRead` - Retrieve an existing lab result
* `labResultsUpdate` - Update an existing lab result
* `labTestsCreate` - Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `labTestsDelete` - Delete an existing lab test
* `labTestsList` - Retrieve or search lab tests
* `labTestsPartialUpdate` - Update an existing lab test
* `labTestsRead` - Retrieve an existing lab test
* `labTestsUpdate` - Update an existing lab test
* `medicationsAppendToPharmacyNote` - Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
* `medicationsCreate` - Create patient medications
* `medicationsList` - Retrieve or search patient medications
* `medicationsPartialUpdate` - Update an existing patient medications
* `medicationsRead` - Retrieve an existing patient medications
* `medicationsUpdate` - Update an existing patient medications
* `patientCommunicationsCreate` - Create patient communication for CQM
* `patientCommunicationsList` - Retrieve or search patient communications for CQM
* `patientCommunicationsPartialUpdate` - Update an existing patient communication for CQM
* `patientCommunicationsRead` - Retrieve an existing patient communication for CQM
* `patientCommunicationsUpdate` - Update an existing patient communication for CQM
* `patientFlagTypesCreate` - Create patient flag types
* `patientFlagTypesList` - Retrieve or search patient flag types
* `patientFlagTypesPartialUpdate` - Update an existing patient flag type
* `patientFlagTypesRead` - Retrieve an existing patient flag type
* `patientFlagTypesUpdate` - Update an existing patient flag type
* `patientInterventionsCreate` - Create patient intervention for CQM
* `patientInterventionsList` - Retrieve or search patient interventions for CQM
* `patientInterventionsPartialUpdate` - Update an existing patient intervention for CQM
* `patientInterventionsRead` - Retrieve an existing patient intervention for CQM
* `patientInterventionsUpdate` - Update an existing patient intervention for CQM
* `patientLabResultsCreate`
* `patientLabResultsDelete`
* `patientLabResultsList`
* `patientLabResultsPartialUpdate`
* `patientLabResultsRead`
* `patientLabResultsUpdate`
* `patientMessagesCreate`
* `patientMessagesList`
* `patientMessagesPartialUpdate`
* `patientMessagesRead`
* `patientMessagesUpdate`
* `patientPhysicalExamsCreate` - Create patient physical exam for CQM
* `patientPhysicalExamsList` - Retrieve or search patient physical exams for CQM
* `patientPhysicalExamsPartialUpdate` - Update an existing patient physical exam for CQM
* `patientPhysicalExamsRead` - Retrieve an existing patient physical exam for CQM
* `patientPhysicalExamsUpdate` - Update an existing patient physical exam for CQM
* `patientRiskAssessmentsCreate`
* `patientRiskAssessmentsList`
* `patientRiskAssessmentsPartialUpdate`
* `patientRiskAssessmentsRead`
* `patientRiskAssessmentsUpdate`
* `patientVaccineRecordsCreate` - Create patient vaccine records
* `patientVaccineRecordsList` - Retrieve or search patient vaccine records
* `patientVaccineRecordsPartialUpdate` - Update an existing patient vaccine records
* `patientVaccineRecordsRead` - Retrieve an existing patient vaccine records
* `patientVaccineRecordsUpdate` - Update an existing patient vaccine records
* `patientsCcda` - Retrieve patient CCDA
* `patientsCreate` - Create patient
* `patientsDelete` - Delete an existing patient
* `patientsList` - Retrieve or search patients
* `patientsOnpatientAccessCreate` - Send new onpatient invite to patient
* `patientsOnpatientAccessDelete` - Revoke sent onpatient invites
* `patientsOnpatientAccessRead` - Retrieve or search existing onpatient access invites
* `patientsPartialUpdate` - Update an existing patient
* `patientsQrda1` - Retrieve patient QRDA1
* `patientsRead` - Retrieve an existing patient
* `patientsSummaryCreate`
* `patientsSummaryDelete`
* `patientsSummaryList`
* `patientsSummaryPartialUpdate`
* `patientsSummaryRead`
* `patientsSummaryUpdate`
* `patientsUpdate` - Update an existing patient
* `prescriptionMessagesList` - Retrieve or search prescription messages
* `prescriptionMessagesRead` - Retrieve an existing prescription message
* `problemsCreate` - Create patient problems
* `problemsList` - Retrieve or search patient problems
* `problemsPartialUpdate` - Update an existing patient problems
* `problemsRead` - Retrieve an existing patient problems
* `problemsUpdate` - Update an existing patient problems
* `reminderProfilesCreate` - Create reminder profile
* `reminderProfilesDelete` - Delete an existing reminder profile
* `reminderProfilesList` - Retrieve or search reminder profiles
* `reminderProfilesPartialUpdate` - Update an existing reminder profile
* `reminderProfilesRead` - Retrieve an existing reminder profile
* `reminderProfilesUpdate` - Update an existing reminder profile
* `sublabsCreate` - Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status

* `sublabsDelete` - Delete an existing sub vendor
* `sublabsList` - Retrieve or search sub vendors
* `sublabsPartialUpdate` - Update an existing sub vendor
* `sublabsRead` - Retrieve an existing sub vendor
* `sublabsUpdate` - Update an existing sub vendor

### PracticeManagement

* `inventoryCategoriesList` - Retrieve or search inventory categories
* `inventoryCategoriesRead` - Retrieve an existing inventory category
* `inventoryVaccinesCreate` - Create vaccine inventory
* `inventoryVaccinesList` - Retrieve or search vaccine inventories
* `inventoryVaccinesRead` - Retrieve an existing vaccine inventory
* `messagesCreate` - Create messages in doctor's message center
* `messagesDelete` - Delete an existing message in doctor's message center
* `messagesList` - Retrieve or search messages in doctor's message center
* `messagesPartialUpdate` - Update an existing message in doctor's message center
* `messagesRead` - Retrieve an existing message in doctor's message center
* `messagesUpdate` - Update an existing message in doctor's message center
* `officesAddExamRoom` - Add an exam room to the office
* `officesList` - Retrieve or search offices
* `officesPartialUpdate` - Update an existing office
* `officesRead` - Retrieve an existing office
* `officesUpdate` - Update an existing office
* `taskCategoriesCreate` - Create a task category
* `taskCategoriesList` - Retrieve or search task categories
* `taskCategoriesPartialUpdate` - Update an existing task category
* `taskCategoriesRead` - Retrieve an existing task category
* `taskCategoriesUpdate` - Update an existing task category
* `taskNotesCreate` - Create a task note
* `taskNotesList` - Retrieve or search task notes
* `taskNotesPartialUpdate` - Update an existing task note
* `taskNotesRead` - Retrieve an existing task note
* `taskNotesUpdate` - Update an existing task note
* `taskStatusesCreate` - Create a task status
* `taskStatusesList` - Retrieve or search task statuses
* `taskStatusesPartialUpdate` - Update an existing task status
* `taskStatusesRead` - Retrieve an existing task status
* `taskStatusesUpdate` - Update an existing task status
* `taskTemplatesCreate` - Create a task template
* `taskTemplatesList` - Retrieve or search task templates
* `taskTemplatesPartialUpdate` - Update an existing task template
* `taskTemplatesRead` - Retrieve an existing task template
* `taskTemplatesUpdate` - Update an existing task template
* `tasksCreate` - Create a task
* `tasksList` - Retrieve or search tasks
* `tasksPartialUpdate` - Update an existing task
* `tasksRead` - Retrieve an existing task
* `tasksUpdate` - Update an existing task

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
