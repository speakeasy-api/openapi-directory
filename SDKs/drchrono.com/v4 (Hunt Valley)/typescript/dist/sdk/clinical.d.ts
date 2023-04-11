import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and manage clinical resources
 */
export declare class Clinical {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create patient allergy
     */
    allergiesCreate(req: operations.AllergiesCreateRequest, security: operations.AllergiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AllergiesCreateResponse>;
    /**
     * Retrieve or search patient allergies
     */
    allergiesList(req: operations.AllergiesListRequest, security: operations.AllergiesListSecurity, config?: AxiosRequestConfig): Promise<operations.AllergiesListResponse>;
    /**
     * Update an existing patient allergy
     */
    allergiesPartialUpdate(req: operations.AllergiesPartialUpdateRequest, security: operations.AllergiesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AllergiesPartialUpdateResponse>;
    /**
     * Retrieve an existing patient allergy
     */
    allergiesRead(req: operations.AllergiesReadRequest, security: operations.AllergiesReadSecurity, config?: AxiosRequestConfig): Promise<operations.AllergiesReadResponse>;
    /**
     * Update an existing patient allergy
     */
    allergiesUpdate(req: operations.AllergiesUpdateRequest, security: operations.AllergiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AllergiesUpdateResponse>;
    /**
     * Create patient amendments to a patient's clinical records
     */
    amendmentsCreate(req: operations.AmendmentsCreateRequest, security: operations.AmendmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AmendmentsCreateResponse>;
    /**
     * Delete an existing patient amendment, you can only interact with amendments created by your API application
     */
    amendmentsDelete(req: operations.AmendmentsDeleteRequest, security: operations.AmendmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AmendmentsDeleteResponse>;
    /**
     * Retrieve or search patient amendments. You can only interact with amendments created by your API application
     */
    amendmentsList(req: operations.AmendmentsListRequest, security: operations.AmendmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AmendmentsListResponse>;
    /**
     * Update an existing patient amendment, you can only interact with amendments created by your API application
     */
    amendmentsPartialUpdate(req: operations.AmendmentsPartialUpdateRequest, security: operations.AmendmentsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AmendmentsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient amendment, you can only interact with amendments created by your API application
     */
    amendmentsRead(req: operations.AmendmentsReadRequest, security: operations.AmendmentsReadSecurity, config?: AxiosRequestConfig): Promise<operations.AmendmentsReadResponse>;
    /**
     * Update an existing patient amendment, you can only interact with amendments created by your API application
     */
    amendmentsUpdate(req: operations.AmendmentsUpdateRequest, security: operations.AmendmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AmendmentsUpdateResponse>;
    /**
     * Create appointment profiles for a doctor's calendar
     */
    appointmentProfilesCreate(req: operations.AppointmentProfilesCreateRequest, security: operations.AppointmentProfilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesCreateResponse>;
    /**
     * Delete an existing appointment profile
     */
    appointmentProfilesDelete(req: operations.AppointmentProfilesDeleteRequest, security: operations.AppointmentProfilesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesDeleteResponse>;
    /**
     * Retrieve or search appointment profiles for a doctor's calendar
     */
    appointmentProfilesList(req: operations.AppointmentProfilesListRequest, security: operations.AppointmentProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesListResponse>;
    /**
     * Update an existing appointment profile
     */
    appointmentProfilesPartialUpdate(req: operations.AppointmentProfilesPartialUpdateRequest, security: operations.AppointmentProfilesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesPartialUpdateResponse>;
    /**
     * Retrieve an existing appointment profile
     */
    appointmentProfilesRead(req: operations.AppointmentProfilesReadRequest, security: operations.AppointmentProfilesReadSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesReadResponse>;
    /**
     * Update an existing appointment profile
     */
    appointmentProfilesUpdate(req: operations.AppointmentProfilesUpdateRequest, security: operations.AppointmentProfilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesUpdateResponse>;
    /**
     * Create appointment templates for a doctor's calendar
     */
    appointmentTemplatesCreate(req: operations.AppointmentTemplatesCreateRequest, security: operations.AppointmentTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesCreateResponse>;
    /**
     * Delete an existing appointment template
     */
    appointmentTemplatesDelete(req: operations.AppointmentTemplatesDeleteRequest, security: operations.AppointmentTemplatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesDeleteResponse>;
    /**
     * Retrieve or search appointment templates for a doctor's calendar
     */
    appointmentTemplatesList(req: operations.AppointmentTemplatesListRequest, security: operations.AppointmentTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesListResponse>;
    /**
     * Update an existing appointment template
     */
    appointmentTemplatesPartialUpdate(req: operations.AppointmentTemplatesPartialUpdateRequest, security: operations.AppointmentTemplatesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesPartialUpdateResponse>;
    /**
     * Retrieve an existing appointment template
     */
    appointmentTemplatesRead(req: operations.AppointmentTemplatesReadRequest, security: operations.AppointmentTemplatesReadSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesReadResponse>;
    /**
     * Update an existing appointment template
     */
    appointmentTemplatesUpdate(req: operations.AppointmentTemplatesUpdateRequest, security: operations.AppointmentTemplatesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesUpdateResponse>;
    /**
     * Create a new appointment or break on doctor's calendar
     */
    appointmentsCreate(req: operations.AppointmentsCreateRequest, security: operations.AppointmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentsCreateResponse>;
    /**
     * Delete an existing appointment or break
     */
    appointmentsDelete(req: operations.AppointmentsDeleteRequest, security: operations.AppointmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentsDeleteResponse>;
    /**
     * Retrieve or search appointment or breaks.
     * <b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
     *
     */
    appointmentsList(req: operations.AppointmentsListRequest, security: operations.AppointmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentsListResponse>;
    /**
     * Update an existing appointment or break
     */
    appointmentsPartialUpdate(req: operations.AppointmentsPartialUpdateRequest, security: operations.AppointmentsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentsPartialUpdateResponse>;
    /**
     * Retrieve an existing appointment or break
     */
    appointmentsRead(req: operations.AppointmentsReadRequest, security: operations.AppointmentsReadSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentsReadResponse>;
    /**
     * Update an existing appointment or break
     */
    appointmentsUpdate(req: operations.AppointmentsUpdateRequest, security: operations.AppointmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppointmentsUpdateResponse>;
    /**
     * Retrieve or search care plans
     */
    carePlansList(req: operations.CarePlansListRequest, security: operations.CarePlansListSecurity, config?: AxiosRequestConfig): Promise<operations.CarePlansListResponse>;
    /**
     * Retrieve an existing care plan
     */
    carePlansRead(req: operations.CarePlansReadRequest, security: operations.CarePlansReadSecurity, config?: AxiosRequestConfig): Promise<operations.CarePlansReadResponse>;
    careTeamMembersList(req: operations.CareTeamMembersListRequest, security: operations.CareTeamMembersListSecurity, config?: AxiosRequestConfig): Promise<operations.CareTeamMembersListResponse>;
    careTeamMembersRead(req: operations.CareTeamMembersReadRequest, security: operations.CareTeamMembersReadSecurity, config?: AxiosRequestConfig): Promise<operations.CareTeamMembersReadResponse>;
    /**
     * Create a new billing note
     */
    claimBillingNotesCreate(req: operations.ClaimBillingNotesCreateRequest, security: operations.ClaimBillingNotesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClaimBillingNotesCreateResponse>;
    /**
     * Retrieve or search billing notes
     */
    claimBillingNotesList(req: operations.ClaimBillingNotesListRequest, security: operations.ClaimBillingNotesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClaimBillingNotesListResponse>;
    /**
     * Retrieve an existing billing note
     */
    claimBillingNotesRead(req: operations.ClaimBillingNotesReadRequest, security: operations.ClaimBillingNotesReadSecurity, config?: AxiosRequestConfig): Promise<operations.ClaimBillingNotesReadResponse>;
    /**
     * Retrieve or search clinical note field types
     */
    clinicalNoteFieldTypesList(req: operations.ClinicalNoteFieldTypesListRequest, security: operations.ClinicalNoteFieldTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldTypesListResponse>;
    /**
     * Retrieve an existing clinial note field type
     */
    clinicalNoteFieldTypesRead(req: operations.ClinicalNoteFieldTypesReadRequest, security: operations.ClinicalNoteFieldTypesReadSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldTypesReadResponse>;
    /**
     * Create clinical note field value
     */
    clinicalNoteFieldValuesCreate(req: operations.ClinicalNoteFieldValuesCreateRequest, security: operations.ClinicalNoteFieldValuesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesCreateResponse>;
    /**
     * Retrieve or search clinical note field values
     */
    clinicalNoteFieldValuesList(req: operations.ClinicalNoteFieldValuesListRequest, security: operations.ClinicalNoteFieldValuesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesListResponse>;
    /**
     * Update an existing clinical note field value
     */
    clinicalNoteFieldValuesPartialUpdate(req: operations.ClinicalNoteFieldValuesPartialUpdateRequest, security: operations.ClinicalNoteFieldValuesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesPartialUpdateResponse>;
    /**
     * Retrieve an existing clinical note field value
     */
    clinicalNoteFieldValuesRead(req: operations.ClinicalNoteFieldValuesReadRequest, security: operations.ClinicalNoteFieldValuesReadSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesReadResponse>;
    /**
     * Update an existing clinical note field value
     */
    clinicalNoteFieldValuesUpdate(req: operations.ClinicalNoteFieldValuesUpdateRequest, security: operations.ClinicalNoteFieldValuesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesUpdateResponse>;
    /**
     * Retrieve or search clinical note templates
     */
    clinicalNoteTemplatesList(req: operations.ClinicalNoteTemplatesListRequest, security: operations.ClinicalNoteTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteTemplatesListResponse>;
    /**
     * Retrieve an existing clinical note tempalte
     */
    clinicalNoteTemplatesRead(req: operations.ClinicalNoteTemplatesReadRequest, security: operations.ClinicalNoteTemplatesReadSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteTemplatesReadResponse>;
    clinicalNotesList(req: operations.ClinicalNotesListRequest, security: operations.ClinicalNotesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNotesListResponse>;
    clinicalNotesRead(req: operations.ClinicalNotesReadRequest, security: operations.ClinicalNotesReadSecurity, config?: AxiosRequestConfig): Promise<operations.ClinicalNotesReadResponse>;
    /**
     * Assign (apply) a consent form to appointment
     */
    consentFormsApplyToAppointment(req: operations.ConsentFormsApplyToAppointmentRequest, security: operations.ConsentFormsApplyToAppointmentSecurity, config?: AxiosRequestConfig): Promise<operations.ConsentFormsApplyToAppointmentResponse>;
    /**
     * Create a patient consent form
     */
    consentFormsCreate(req: operations.ConsentFormsCreateRequest, security: operations.ConsentFormsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ConsentFormsCreateResponse>;
    /**
     * Retrieve or search patient consent forms
     */
    consentFormsList(req: operations.ConsentFormsListRequest, security: operations.ConsentFormsListSecurity, config?: AxiosRequestConfig): Promise<operations.ConsentFormsListResponse>;
    /**
     * Update an existing patient consent form
     */
    consentFormsPartialUpdate(req: operations.ConsentFormsPartialUpdateRequest, security: operations.ConsentFormsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ConsentFormsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient consent form
     */
    consentFormsRead(req: operations.ConsentFormsReadRequest, security: operations.ConsentFormsReadSecurity, config?: AxiosRequestConfig): Promise<operations.ConsentFormsReadResponse>;
    /**
     * Unassign (unapply) a consent form from appointment
     */
    consentFormsUnapplyFromAppointment(req: operations.ConsentFormsUnapplyFromAppointmentRequest, security: operations.ConsentFormsUnapplyFromAppointmentSecurity, config?: AxiosRequestConfig): Promise<operations.ConsentFormsUnapplyFromAppointmentResponse>;
    /**
     * Update an existing patient consent form
     */
    consentFormsUpdate(req: operations.ConsentFormsUpdateRequest, security: operations.ConsentFormsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ConsentFormsUpdateResponse>;
    /**
     * Create custom appointment fields
     */
    customAppointmentFieldsCreate(req: operations.CustomAppointmentFieldsCreateRequest, security: operations.CustomAppointmentFieldsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsCreateResponse>;
    /**
     * Retrieve or search custom appointment fields
     */
    customAppointmentFieldsList(req: operations.CustomAppointmentFieldsListRequest, security: operations.CustomAppointmentFieldsListSecurity, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsListResponse>;
    /**
     * Update an existing custom appointment field
     */
    customAppointmentFieldsPartialUpdate(req: operations.CustomAppointmentFieldsPartialUpdateRequest, security: operations.CustomAppointmentFieldsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsPartialUpdateResponse>;
    /**
     * Retrieve an existing custom appointment field
     */
    customAppointmentFieldsRead(req: operations.CustomAppointmentFieldsReadRequest, security: operations.CustomAppointmentFieldsReadSecurity, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsReadResponse>;
    /**
     * Update an existing custom appointment field
     */
    customAppointmentFieldsUpdate(req: operations.CustomAppointmentFieldsUpdateRequest, security: operations.CustomAppointmentFieldsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsUpdateResponse>;
    /**
     * Create custom demographics fields
     */
    customDemographicsCreate(req: operations.CustomDemographicsCreateRequest, security: operations.CustomDemographicsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsCreateResponse>;
    /**
     * Retrieve or search custom demographics fields
     */
    customDemographicsList(req: operations.CustomDemographicsListRequest, security: operations.CustomDemographicsListSecurity, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsListResponse>;
    /**
     * Update an existing custom demographics field
     */
    customDemographicsPartialUpdate(req: operations.CustomDemographicsPartialUpdateRequest, security: operations.CustomDemographicsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsPartialUpdateResponse>;
    /**
     * Retrieve an existing custom demographics field
     */
    customDemographicsRead(req: operations.CustomDemographicsReadRequest, security: operations.CustomDemographicsReadSecurity, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsReadResponse>;
    /**
     * Update an existing custom demographics field
     */
    customDemographicsUpdate(req: operations.CustomDemographicsUpdateRequest, security: operations.CustomDemographicsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsUpdateResponse>;
    /**
     * Retrieve or search custom vital types
     */
    customVitalsList(req: operations.CustomVitalsListRequest, security: operations.CustomVitalsListSecurity, config?: AxiosRequestConfig): Promise<operations.CustomVitalsListResponse>;
    /**
     * Retrieve an existing custom vital type
     */
    customVitalsRead(req: operations.CustomVitalsReadRequest, security: operations.CustomVitalsReadSecurity, config?: AxiosRequestConfig): Promise<operations.CustomVitalsReadResponse>;
    /**
     * Create documents
     */
    documentsCreate(req: operations.DocumentsCreateRequest, security: operations.DocumentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentsCreateResponse>;
    /**
     * Delete an existing appointment template
     */
    documentsDelete(req: operations.DocumentsDeleteRequest, security: operations.DocumentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentsDeleteResponse>;
    /**
     * Retrieve or search documents
     */
    documentsList(req: operations.DocumentsListRequest, security: operations.DocumentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentsListResponse>;
    /**
     * Update an existing appointment template
     */
    documentsPartialUpdate(req: operations.DocumentsPartialUpdateRequest, security: operations.DocumentsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentsPartialUpdateResponse>;
    /**
     * Retrieve an existing appointment template
     */
    documentsRead(req: operations.DocumentsReadRequest, security: operations.DocumentsReadSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentsReadResponse>;
    /**
     * Update an existing appointment template
     */
    documentsUpdate(req: operations.DocumentsUpdateRequest, security: operations.DocumentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentsUpdateResponse>;
    /**
     * Create EOB object
     */
    eobsCreate(req: operations.EobsCreateRequest, security: operations.EobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.EobsCreateResponse>;
    /**
     * Retrieve or search EOB objects
     */
    eobsList(req: operations.EobsListRequest, security: operations.EobsListSecurity, config?: AxiosRequestConfig): Promise<operations.EobsListResponse>;
    /**
     * Retrieve an existing EOB object
     */
    eobsRead(req: operations.EobsReadRequest, security: operations.EobsReadSecurity, config?: AxiosRequestConfig): Promise<operations.EobsReadResponse>;
    feeSchedulesList(req: operations.FeeSchedulesListRequest, security: operations.FeeSchedulesListSecurity, config?: AxiosRequestConfig): Promise<operations.FeeSchedulesListResponse>;
    feeSchedulesRead(req: operations.FeeSchedulesReadRequest, security: operations.FeeSchedulesReadSecurity, config?: AxiosRequestConfig): Promise<operations.FeeSchedulesReadResponse>;
    /**
     * Retrieve or search implantable devices
     */
    implantableDevicesList(req: operations.ImplantableDevicesListRequest, security: operations.ImplantableDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ImplantableDevicesListResponse>;
    /**
     * Retrieve an existing implantable device
     */
    implantableDevicesRead(req: operations.ImplantableDevicesReadRequest, security: operations.ImplantableDevicesReadSecurity, config?: AxiosRequestConfig): Promise<operations.ImplantableDevicesReadResponse>;
    insurancesList(req: operations.InsurancesListRequest, security: operations.InsurancesListSecurity, config?: AxiosRequestConfig): Promise<operations.InsurancesListResponse>;
    insurancesRead(req: operations.InsurancesReadRequest, security: operations.InsurancesReadSecurity, config?: AxiosRequestConfig): Promise<operations.InsurancesReadResponse>;
    /**
     * Create lab order documents. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     */
    labDocumentsCreate(req: operations.LabDocumentsCreateRequest, security: operations.LabDocumentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.LabDocumentsCreateResponse>;
    /**
     * Delete an existing lab order document
     */
    labDocumentsDelete(req: operations.LabDocumentsDeleteRequest, security: operations.LabDocumentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LabDocumentsDeleteResponse>;
    /**
     * Retrieve or search lab order documents
     */
    labDocumentsList(req: operations.LabDocumentsListRequest, security: operations.LabDocumentsListSecurity, config?: AxiosRequestConfig): Promise<operations.LabDocumentsListResponse>;
    /**
     * Update an existing lab order document
     */
    labDocumentsPartialUpdate(req: operations.LabDocumentsPartialUpdateRequest, security: operations.LabDocumentsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabDocumentsPartialUpdateResponse>;
    /**
     * Retrieve an existing lab order document
     */
    labDocumentsRead(req: operations.LabDocumentsReadRequest, security: operations.LabDocumentsReadSecurity, config?: AxiosRequestConfig): Promise<operations.LabDocumentsReadResponse>;
    /**
     * Update an existing lab order document
     */
    labDocumentsUpdate(req: operations.LabDocumentsUpdateRequest, security: operations.LabDocumentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabDocumentsUpdateResponse>;
    /**
     * Create lab orders. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     */
    labOrdersCreate(req: operations.LabOrdersCreateRequest, security: operations.LabOrdersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersCreateResponse>;
    /**
     * Delete an existing lab order
     */
    labOrdersDelete(req: operations.LabOrdersDeleteRequest, security: operations.LabOrdersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersDeleteResponse>;
    /**
     * Retrieve or search lab orders
     */
    labOrdersList(req: operations.LabOrdersListRequest, security: operations.LabOrdersListSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersListResponse>;
    /**
     * Update an existing lab order
     */
    labOrdersPartialUpdate(req: operations.LabOrdersPartialUpdateRequest, security: operations.LabOrdersPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersPartialUpdateResponse>;
    /**
     * Retrieve an existing lab order
     */
    labOrdersRead(req: operations.LabOrdersReadRequest, security: operations.LabOrdersReadSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersReadResponse>;
    labOrdersSummaryList(req: operations.LabOrdersSummaryListRequest, security: operations.LabOrdersSummaryListSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersSummaryListResponse>;
    labOrdersSummaryRead(req: operations.LabOrdersSummaryReadRequest, security: operations.LabOrdersSummaryReadSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersSummaryReadResponse>;
    /**
     * Update an existing lab order
     */
    labOrdersUpdate(req: operations.LabOrdersUpdateRequest, security: operations.LabOrdersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabOrdersUpdateResponse>;
    /**
     * Create lab results. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     */
    labResultsCreate(req: operations.LabResultsCreateRequest, security: operations.LabResultsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.LabResultsCreateResponse>;
    /**
     * Delete an existing lab result
     */
    labResultsDelete(req: operations.LabResultsDeleteRequest, security: operations.LabResultsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LabResultsDeleteResponse>;
    /**
     * Retrieve or search lab results
     */
    labResultsList(req: operations.LabResultsListRequest, security: operations.LabResultsListSecurity, config?: AxiosRequestConfig): Promise<operations.LabResultsListResponse>;
    /**
     * Update an existing lab result
     */
    labResultsPartialUpdate(req: operations.LabResultsPartialUpdateRequest, security: operations.LabResultsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabResultsPartialUpdateResponse>;
    /**
     * Retrieve an existing lab result
     */
    labResultsRead(req: operations.LabResultsReadRequest, security: operations.LabResultsReadSecurity, config?: AxiosRequestConfig): Promise<operations.LabResultsReadResponse>;
    /**
     * Update an existing lab result
     */
    labResultsUpdate(req: operations.LabResultsUpdateRequest, security: operations.LabResultsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabResultsUpdateResponse>;
    /**
     * Create lab tests. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     */
    labTestsCreate(req: operations.LabTestsCreateRequest, security: operations.LabTestsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.LabTestsCreateResponse>;
    /**
     * Delete an existing lab test
     */
    labTestsDelete(req: operations.LabTestsDeleteRequest, security: operations.LabTestsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LabTestsDeleteResponse>;
    /**
     * Retrieve or search lab tests
     */
    labTestsList(req: operations.LabTestsListRequest, security: operations.LabTestsListSecurity, config?: AxiosRequestConfig): Promise<operations.LabTestsListResponse>;
    /**
     * Update an existing lab test
     */
    labTestsPartialUpdate(req: operations.LabTestsPartialUpdateRequest, security: operations.LabTestsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabTestsPartialUpdateResponse>;
    /**
     * Retrieve an existing lab test
     */
    labTestsRead(req: operations.LabTestsReadRequest, security: operations.LabTestsReadSecurity, config?: AxiosRequestConfig): Promise<operations.LabTestsReadResponse>;
    /**
     * Update an existing lab test
     */
    labTestsUpdate(req: operations.LabTestsUpdateRequest, security: operations.LabTestsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LabTestsUpdateResponse>;
    /**
     * Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
     */
    medicationsAppendToPharmacyNote(req: operations.MedicationsAppendToPharmacyNoteRequest, security: operations.MedicationsAppendToPharmacyNoteSecurity, config?: AxiosRequestConfig): Promise<operations.MedicationsAppendToPharmacyNoteResponse>;
    /**
     * Create patient medications
     */
    medicationsCreate(req: operations.MedicationsCreateRequest, security: operations.MedicationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MedicationsCreateResponse>;
    /**
     * Retrieve or search patient medications
     */
    medicationsList(req: operations.MedicationsListRequest, security: operations.MedicationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MedicationsListResponse>;
    /**
     * Update an existing patient medications
     */
    medicationsPartialUpdate(req: operations.MedicationsPartialUpdateRequest, security: operations.MedicationsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MedicationsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient medications
     */
    medicationsRead(req: operations.MedicationsReadRequest, security: operations.MedicationsReadSecurity, config?: AxiosRequestConfig): Promise<operations.MedicationsReadResponse>;
    /**
     * Update an existing patient medications
     */
    medicationsUpdate(req: operations.MedicationsUpdateRequest, security: operations.MedicationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MedicationsUpdateResponse>;
    /**
     * Create patient communication for CQM
     */
    patientCommunicationsCreate(req: operations.PatientCommunicationsCreateRequest, security: operations.PatientCommunicationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsCreateResponse>;
    /**
     * Retrieve or search patient communications for CQM
     */
    patientCommunicationsList(req: operations.PatientCommunicationsListRequest, security: operations.PatientCommunicationsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsListResponse>;
    /**
     * Update an existing patient communication for CQM
     */
    patientCommunicationsPartialUpdate(req: operations.PatientCommunicationsPartialUpdateRequest, security: operations.PatientCommunicationsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient communication for CQM
     */
    patientCommunicationsRead(req: operations.PatientCommunicationsReadRequest, security: operations.PatientCommunicationsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsReadResponse>;
    /**
     * Update an existing patient communication for CQM
     */
    patientCommunicationsUpdate(req: operations.PatientCommunicationsUpdateRequest, security: operations.PatientCommunicationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsUpdateResponse>;
    /**
     * Create patient flag types
     */
    patientFlagTypesCreate(req: operations.PatientFlagTypesCreateRequest, security: operations.PatientFlagTypesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesCreateResponse>;
    /**
     * Retrieve or search patient flag types
     */
    patientFlagTypesList(req: operations.PatientFlagTypesListRequest, security: operations.PatientFlagTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesListResponse>;
    /**
     * Update an existing patient flag type
     */
    patientFlagTypesPartialUpdate(req: operations.PatientFlagTypesPartialUpdateRequest, security: operations.PatientFlagTypesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesPartialUpdateResponse>;
    /**
     * Retrieve an existing patient flag type
     */
    patientFlagTypesRead(req: operations.PatientFlagTypesReadRequest, security: operations.PatientFlagTypesReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesReadResponse>;
    /**
     * Update an existing patient flag type
     */
    patientFlagTypesUpdate(req: operations.PatientFlagTypesUpdateRequest, security: operations.PatientFlagTypesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesUpdateResponse>;
    /**
     * Create patient intervention for CQM
     */
    patientInterventionsCreate(req: operations.PatientInterventionsCreateRequest, security: operations.PatientInterventionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsCreateResponse>;
    /**
     * Retrieve or search patient interventions for CQM
     */
    patientInterventionsList(req: operations.PatientInterventionsListRequest, security: operations.PatientInterventionsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsListResponse>;
    /**
     * Update an existing patient intervention for CQM
     */
    patientInterventionsPartialUpdate(req: operations.PatientInterventionsPartialUpdateRequest, security: operations.PatientInterventionsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient intervention for CQM
     */
    patientInterventionsRead(req: operations.PatientInterventionsReadRequest, security: operations.PatientInterventionsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsReadResponse>;
    /**
     * Update an existing patient intervention for CQM
     */
    patientInterventionsUpdate(req: operations.PatientInterventionsUpdateRequest, security: operations.PatientInterventionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsUpdateResponse>;
    patientLabResultsCreate(req: operations.PatientLabResultsCreateRequest, security: operations.PatientLabResultsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsCreateResponse>;
    patientLabResultsDelete(req: operations.PatientLabResultsDeleteRequest, security: operations.PatientLabResultsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsDeleteResponse>;
    patientLabResultsList(req: operations.PatientLabResultsListRequest, security: operations.PatientLabResultsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsListResponse>;
    patientLabResultsPartialUpdate(req: operations.PatientLabResultsPartialUpdateRequest, security: operations.PatientLabResultsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsPartialUpdateResponse>;
    patientLabResultsRead(req: operations.PatientLabResultsReadRequest, security: operations.PatientLabResultsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsReadResponse>;
    patientLabResultsUpdate(req: operations.PatientLabResultsUpdateRequest, security: operations.PatientLabResultsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsUpdateResponse>;
    patientMessagesCreate(req: operations.PatientMessagesCreateRequest, security: operations.PatientMessagesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientMessagesCreateResponse>;
    patientMessagesList(req: operations.PatientMessagesListRequest, security: operations.PatientMessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientMessagesListResponse>;
    patientMessagesPartialUpdate(req: operations.PatientMessagesPartialUpdateRequest, security: operations.PatientMessagesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientMessagesPartialUpdateResponse>;
    patientMessagesRead(req: operations.PatientMessagesReadRequest, security: operations.PatientMessagesReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientMessagesReadResponse>;
    patientMessagesUpdate(req: operations.PatientMessagesUpdateRequest, security: operations.PatientMessagesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientMessagesUpdateResponse>;
    /**
     * Create patient physical exam for CQM
     */
    patientPhysicalExamsCreate(req: operations.PatientPhysicalExamsCreateRequest, security: operations.PatientPhysicalExamsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsCreateResponse>;
    /**
     * Retrieve or search patient physical exams for CQM
     */
    patientPhysicalExamsList(req: operations.PatientPhysicalExamsListRequest, security: operations.PatientPhysicalExamsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsListResponse>;
    /**
     * Update an existing patient physical exam for CQM
     */
    patientPhysicalExamsPartialUpdate(req: operations.PatientPhysicalExamsPartialUpdateRequest, security: operations.PatientPhysicalExamsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient physical exam for CQM
     */
    patientPhysicalExamsRead(req: operations.PatientPhysicalExamsReadRequest, security: operations.PatientPhysicalExamsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsReadResponse>;
    /**
     * Update an existing patient physical exam for CQM
     */
    patientPhysicalExamsUpdate(req: operations.PatientPhysicalExamsUpdateRequest, security: operations.PatientPhysicalExamsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsUpdateResponse>;
    patientRiskAssessmentsCreate(req: operations.PatientRiskAssessmentsCreateRequest, security: operations.PatientRiskAssessmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsCreateResponse>;
    patientRiskAssessmentsList(req: operations.PatientRiskAssessmentsListRequest, security: operations.PatientRiskAssessmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsListResponse>;
    patientRiskAssessmentsPartialUpdate(req: operations.PatientRiskAssessmentsPartialUpdateRequest, security: operations.PatientRiskAssessmentsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsPartialUpdateResponse>;
    patientRiskAssessmentsRead(req: operations.PatientRiskAssessmentsReadRequest, security: operations.PatientRiskAssessmentsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsReadResponse>;
    patientRiskAssessmentsUpdate(req: operations.PatientRiskAssessmentsUpdateRequest, security: operations.PatientRiskAssessmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsUpdateResponse>;
    /**
     * Create patient vaccine records
     */
    patientVaccineRecordsCreate(req: operations.PatientVaccineRecordsCreateRequest, security: operations.PatientVaccineRecordsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsCreateResponse>;
    /**
     * Retrieve or search patient vaccine records
     */
    patientVaccineRecordsList(req: operations.PatientVaccineRecordsListRequest, security: operations.PatientVaccineRecordsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsListResponse>;
    /**
     * Update an existing patient vaccine records
     */
    patientVaccineRecordsPartialUpdate(req: operations.PatientVaccineRecordsPartialUpdateRequest, security: operations.PatientVaccineRecordsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient vaccine records
     */
    patientVaccineRecordsRead(req: operations.PatientVaccineRecordsReadRequest, security: operations.PatientVaccineRecordsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsReadResponse>;
    /**
     * Update an existing patient vaccine records
     */
    patientVaccineRecordsUpdate(req: operations.PatientVaccineRecordsUpdateRequest, security: operations.PatientVaccineRecordsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsUpdateResponse>;
    /**
     * Retrieve patient CCDA
     */
    patientsCcda(req: operations.PatientsCcdaRequest, security: operations.PatientsCcdaSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsCcdaResponse>;
    /**
     * Create patient
     */
    patientsCreate(req: operations.PatientsCreateRequest, security: operations.PatientsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsCreateResponse>;
    /**
     * Delete an existing patient
     */
    patientsDelete(req: operations.PatientsDeleteRequest, security: operations.PatientsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsDeleteResponse>;
    /**
     * Retrieve or search patients
     */
    patientsList(req: operations.PatientsListRequest, security: operations.PatientsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsListResponse>;
    /**
     * Send new onpatient invite to patient
     */
    patientsOnpatientAccessCreate(req: operations.PatientsOnpatientAccessCreateRequest, security: operations.PatientsOnpatientAccessCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsOnpatientAccessCreateResponse>;
    /**
     * Revoke sent onpatient invites
     */
    patientsOnpatientAccessDelete(req: operations.PatientsOnpatientAccessDeleteRequest, security: operations.PatientsOnpatientAccessDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsOnpatientAccessDeleteResponse>;
    /**
     * Retrieve or search existing onpatient access invites
     */
    patientsOnpatientAccessRead(req: operations.PatientsOnpatientAccessReadRequest, security: operations.PatientsOnpatientAccessReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsOnpatientAccessReadResponse>;
    /**
     * Update an existing patient
     */
    patientsPartialUpdate(req: operations.PatientsPartialUpdateRequest, security: operations.PatientsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsPartialUpdateResponse>;
    /**
     * Retrieve patient QRDA1
     */
    patientsQrda1(req: operations.PatientsQrda1Request, security: operations.PatientsQrda1Security, config?: AxiosRequestConfig): Promise<operations.PatientsQrda1Response>;
    /**
     * Retrieve an existing patient
     */
    patientsRead(req: operations.PatientsReadRequest, security: operations.PatientsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsReadResponse>;
    patientsSummaryCreate(req: operations.PatientsSummaryCreateRequest, security: operations.PatientsSummaryCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryCreateResponse>;
    patientsSummaryDelete(req: operations.PatientsSummaryDeleteRequest, security: operations.PatientsSummaryDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryDeleteResponse>;
    patientsSummaryList(req: operations.PatientsSummaryListRequest, security: operations.PatientsSummaryListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryListResponse>;
    patientsSummaryPartialUpdate(req: operations.PatientsSummaryPartialUpdateRequest, security: operations.PatientsSummaryPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryPartialUpdateResponse>;
    patientsSummaryRead(req: operations.PatientsSummaryReadRequest, security: operations.PatientsSummaryReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryReadResponse>;
    patientsSummaryUpdate(req: operations.PatientsSummaryUpdateRequest, security: operations.PatientsSummaryUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryUpdateResponse>;
    /**
     * Update an existing patient
     */
    patientsUpdate(req: operations.PatientsUpdateRequest, security: operations.PatientsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientsUpdateResponse>;
    /**
     * Retrieve or search prescription messages
     */
    prescriptionMessagesList(req: operations.PrescriptionMessagesListRequest, security: operations.PrescriptionMessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrescriptionMessagesListResponse>;
    /**
     * Retrieve an existing prescription message
     */
    prescriptionMessagesRead(req: operations.PrescriptionMessagesReadRequest, security: operations.PrescriptionMessagesReadSecurity, config?: AxiosRequestConfig): Promise<operations.PrescriptionMessagesReadResponse>;
    /**
     * Create patient problems
     */
    problemsCreate(req: operations.ProblemsCreateRequest, security: operations.ProblemsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ProblemsCreateResponse>;
    /**
     * Retrieve or search patient problems
     */
    problemsList(req: operations.ProblemsListRequest, security: operations.ProblemsListSecurity, config?: AxiosRequestConfig): Promise<operations.ProblemsListResponse>;
    /**
     * Update an existing patient problems
     */
    problemsPartialUpdate(req: operations.ProblemsPartialUpdateRequest, security: operations.ProblemsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ProblemsPartialUpdateResponse>;
    /**
     * Retrieve an existing patient problems
     */
    problemsRead(req: operations.ProblemsReadRequest, security: operations.ProblemsReadSecurity, config?: AxiosRequestConfig): Promise<operations.ProblemsReadResponse>;
    /**
     * Update an existing patient problems
     */
    problemsUpdate(req: operations.ProblemsUpdateRequest, security: operations.ProblemsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ProblemsUpdateResponse>;
    /**
     * Create reminder profile
     */
    reminderProfilesCreate(req: operations.ReminderProfilesCreateRequest, security: operations.ReminderProfilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesCreateResponse>;
    /**
     * Delete an existing reminder profile
     */
    reminderProfilesDelete(req: operations.ReminderProfilesDeleteRequest, security: operations.ReminderProfilesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesDeleteResponse>;
    /**
     * Retrieve or search reminder profiles
     */
    reminderProfilesList(req: operations.ReminderProfilesListRequest, security: operations.ReminderProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesListResponse>;
    /**
     * Update an existing reminder profile
     */
    reminderProfilesPartialUpdate(req: operations.ReminderProfilesPartialUpdateRequest, security: operations.ReminderProfilesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesPartialUpdateResponse>;
    /**
     * Retrieve an existing reminder profile
     */
    reminderProfilesRead(req: operations.ReminderProfilesReadRequest, security: operations.ReminderProfilesReadSecurity, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesReadResponse>;
    /**
     * Update an existing reminder profile
     */
    reminderProfilesUpdate(req: operations.ReminderProfilesUpdateRequest, security: operations.ReminderProfilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesUpdateResponse>;
    /**
     * Create sub-vendors
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     */
    sublabsCreate(config?: AxiosRequestConfig): Promise<operations.SublabsCreateResponse>;
    /**
     * Delete an existing sub vendor
     */
    sublabsDelete(req: operations.SublabsDeleteRequest, security: operations.SublabsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SublabsDeleteResponse>;
    /**
     * Retrieve or search sub vendors
     */
    sublabsList(req: operations.SublabsListRequest, security: operations.SublabsListSecurity, config?: AxiosRequestConfig): Promise<operations.SublabsListResponse>;
    /**
     * Update an existing sub vendor
     */
    sublabsPartialUpdate(req: operations.SublabsPartialUpdateRequest, security: operations.SublabsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SublabsPartialUpdateResponse>;
    /**
     * Retrieve an existing sub vendor
     */
    sublabsRead(req: operations.SublabsReadRequest, security: operations.SublabsReadSecurity, config?: AxiosRequestConfig): Promise<operations.SublabsReadResponse>;
    /**
     * Update an existing sub vendor
     */
    sublabsUpdate(req: operations.SublabsUpdateRequest, security: operations.SublabsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SublabsUpdateResponse>;
}
