import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Clinical {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allergiesCreate - Create patient allergy
    **/
    allergiesCreate(req: operations.AllergiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AllergiesCreateResponse>;
    /**
     * allergiesList - Retrieve or search patient allergies
    **/
    allergiesList(req: operations.AllergiesListRequest, config?: AxiosRequestConfig): Promise<operations.AllergiesListResponse>;
    /**
     * allergiesPartialUpdate - Update an existing patient allergy
    **/
    allergiesPartialUpdate(req: operations.AllergiesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AllergiesPartialUpdateResponse>;
    /**
     * allergiesRead - Retrieve an existing patient allergy
    **/
    allergiesRead(req: operations.AllergiesReadRequest, config?: AxiosRequestConfig): Promise<operations.AllergiesReadResponse>;
    /**
     * allergiesUpdate - Update an existing patient allergy
    **/
    allergiesUpdate(req: operations.AllergiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AllergiesUpdateResponse>;
    /**
     * amendmentsCreate - Create patient amendments to a patient's clinical records
    **/
    amendmentsCreate(req: operations.AmendmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AmendmentsCreateResponse>;
    /**
     * amendmentsDelete - Delete an existing patient amendment, you can only interact with amendments created by your API application
    **/
    amendmentsDelete(req: operations.AmendmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AmendmentsDeleteResponse>;
    /**
     * amendmentsList - Retrieve or search patient amendments. You can only interact with amendments created by your API application
    **/
    amendmentsList(req: operations.AmendmentsListRequest, config?: AxiosRequestConfig): Promise<operations.AmendmentsListResponse>;
    /**
     * amendmentsPartialUpdate - Update an existing patient amendment, you can only interact with amendments created by your API application
    **/
    amendmentsPartialUpdate(req: operations.AmendmentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AmendmentsPartialUpdateResponse>;
    /**
     * amendmentsRead - Retrieve an existing patient amendment, you can only interact with amendments created by your API application
    **/
    amendmentsRead(req: operations.AmendmentsReadRequest, config?: AxiosRequestConfig): Promise<operations.AmendmentsReadResponse>;
    /**
     * amendmentsUpdate - Update an existing patient amendment, you can only interact with amendments created by your API application
    **/
    amendmentsUpdate(req: operations.AmendmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AmendmentsUpdateResponse>;
    /**
     * appointmentProfilesCreate - Create appointment profiles for a doctor's calendar
    **/
    appointmentProfilesCreate(req: operations.AppointmentProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesCreateResponse>;
    /**
     * appointmentProfilesDelete - Delete an existing appointment profile
    **/
    appointmentProfilesDelete(req: operations.AppointmentProfilesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesDeleteResponse>;
    /**
     * appointmentProfilesList - Retrieve or search appointment profiles for a doctor's calendar
    **/
    appointmentProfilesList(req: operations.AppointmentProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesListResponse>;
    /**
     * appointmentProfilesPartialUpdate - Update an existing appointment profile
    **/
    appointmentProfilesPartialUpdate(req: operations.AppointmentProfilesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesPartialUpdateResponse>;
    /**
     * appointmentProfilesRead - Retrieve an existing appointment profile
    **/
    appointmentProfilesRead(req: operations.AppointmentProfilesReadRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesReadResponse>;
    /**
     * appointmentProfilesUpdate - Update an existing appointment profile
    **/
    appointmentProfilesUpdate(req: operations.AppointmentProfilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentProfilesUpdateResponse>;
    /**
     * appointmentTemplatesCreate - Create appointment templates for a doctor's calendar
    **/
    appointmentTemplatesCreate(req: operations.AppointmentTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesCreateResponse>;
    /**
     * appointmentTemplatesDelete - Delete an existing appointment template
    **/
    appointmentTemplatesDelete(req: operations.AppointmentTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesDeleteResponse>;
    /**
     * appointmentTemplatesList - Retrieve or search appointment templates for a doctor's calendar
    **/
    appointmentTemplatesList(req: operations.AppointmentTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesListResponse>;
    /**
     * appointmentTemplatesPartialUpdate - Update an existing appointment template
    **/
    appointmentTemplatesPartialUpdate(req: operations.AppointmentTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesPartialUpdateResponse>;
    /**
     * appointmentTemplatesRead - Retrieve an existing appointment template
    **/
    appointmentTemplatesRead(req: operations.AppointmentTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesReadResponse>;
    /**
     * appointmentTemplatesUpdate - Update an existing appointment template
    **/
    appointmentTemplatesUpdate(req: operations.AppointmentTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentTemplatesUpdateResponse>;
    /**
     * appointmentsCreate - Create a new appointment or break on doctor's calendar
    **/
    appointmentsCreate(req: operations.AppointmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentsCreateResponse>;
    /**
     * appointmentsDelete - Delete an existing appointment or break
    **/
    appointmentsDelete(req: operations.AppointmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentsDeleteResponse>;
    /**
     * appointmentsList - Retrieve or search appointment or breaks.
     * <b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
     *
    **/
    appointmentsList(req: operations.AppointmentsListRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentsListResponse>;
    /**
     * appointmentsPartialUpdate - Update an existing appointment or break
    **/
    appointmentsPartialUpdate(req: operations.AppointmentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentsPartialUpdateResponse>;
    /**
     * appointmentsRead - Retrieve an existing appointment or break
    **/
    appointmentsRead(req: operations.AppointmentsReadRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentsReadResponse>;
    /**
     * appointmentsUpdate - Update an existing appointment or break
    **/
    appointmentsUpdate(req: operations.AppointmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AppointmentsUpdateResponse>;
    /**
     * carePlansList - Retrieve or search care plans
    **/
    carePlansList(req: operations.CarePlansListRequest, config?: AxiosRequestConfig): Promise<operations.CarePlansListResponse>;
    /**
     * carePlansRead - Retrieve an existing care plan
    **/
    carePlansRead(req: operations.CarePlansReadRequest, config?: AxiosRequestConfig): Promise<operations.CarePlansReadResponse>;
    careTeamMembersList(req: operations.CareTeamMembersListRequest, config?: AxiosRequestConfig): Promise<operations.CareTeamMembersListResponse>;
    careTeamMembersRead(req: operations.CareTeamMembersReadRequest, config?: AxiosRequestConfig): Promise<operations.CareTeamMembersReadResponse>;
    /**
     * claimBillingNotesCreate - Create a new billing note
    **/
    claimBillingNotesCreate(req: operations.ClaimBillingNotesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ClaimBillingNotesCreateResponse>;
    /**
     * claimBillingNotesList - Retrieve or search billing notes
    **/
    claimBillingNotesList(req: operations.ClaimBillingNotesListRequest, config?: AxiosRequestConfig): Promise<operations.ClaimBillingNotesListResponse>;
    /**
     * claimBillingNotesRead - Retrieve an existing billing note
    **/
    claimBillingNotesRead(req: operations.ClaimBillingNotesReadRequest, config?: AxiosRequestConfig): Promise<operations.ClaimBillingNotesReadResponse>;
    /**
     * clinicalNoteFieldTypesList - Retrieve or search clinical note field types
    **/
    clinicalNoteFieldTypesList(req: operations.ClinicalNoteFieldTypesListRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldTypesListResponse>;
    /**
     * clinicalNoteFieldTypesRead - Retrieve an existing clinial note field type
    **/
    clinicalNoteFieldTypesRead(req: operations.ClinicalNoteFieldTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldTypesReadResponse>;
    /**
     * clinicalNoteFieldValuesCreate - Create clinical note field value
    **/
    clinicalNoteFieldValuesCreate(req: operations.ClinicalNoteFieldValuesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesCreateResponse>;
    /**
     * clinicalNoteFieldValuesList - Retrieve or search clinical note field values
    **/
    clinicalNoteFieldValuesList(req: operations.ClinicalNoteFieldValuesListRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesListResponse>;
    /**
     * clinicalNoteFieldValuesPartialUpdate - Update an existing clinical note field value
    **/
    clinicalNoteFieldValuesPartialUpdate(req: operations.ClinicalNoteFieldValuesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesPartialUpdateResponse>;
    /**
     * clinicalNoteFieldValuesRead - Retrieve an existing clinical note field value
    **/
    clinicalNoteFieldValuesRead(req: operations.ClinicalNoteFieldValuesReadRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesReadResponse>;
    /**
     * clinicalNoteFieldValuesUpdate - Update an existing clinical note field value
    **/
    clinicalNoteFieldValuesUpdate(req: operations.ClinicalNoteFieldValuesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteFieldValuesUpdateResponse>;
    /**
     * clinicalNoteTemplatesList - Retrieve or search clinical note templates
    **/
    clinicalNoteTemplatesList(req: operations.ClinicalNoteTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteTemplatesListResponse>;
    /**
     * clinicalNoteTemplatesRead - Retrieve an existing clinical note tempalte
    **/
    clinicalNoteTemplatesRead(req: operations.ClinicalNoteTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNoteTemplatesReadResponse>;
    clinicalNotesList(req: operations.ClinicalNotesListRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNotesListResponse>;
    clinicalNotesRead(req: operations.ClinicalNotesReadRequest, config?: AxiosRequestConfig): Promise<operations.ClinicalNotesReadResponse>;
    /**
     * consentFormsApplyToAppointment - Assign (apply) a consent form to appointment
    **/
    consentFormsApplyToAppointment(req: operations.ConsentFormsApplyToAppointmentRequest, config?: AxiosRequestConfig): Promise<operations.ConsentFormsApplyToAppointmentResponse>;
    /**
     * consentFormsCreate - Create a patient consent form
    **/
    consentFormsCreate(req: operations.ConsentFormsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ConsentFormsCreateResponse>;
    /**
     * consentFormsList - Retrieve or search patient consent forms
    **/
    consentFormsList(req: operations.ConsentFormsListRequest, config?: AxiosRequestConfig): Promise<operations.ConsentFormsListResponse>;
    /**
     * consentFormsPartialUpdate - Update an existing patient consent form
    **/
    consentFormsPartialUpdate(req: operations.ConsentFormsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ConsentFormsPartialUpdateResponse>;
    /**
     * consentFormsRead - Retrieve an existing patient consent form
    **/
    consentFormsRead(req: operations.ConsentFormsReadRequest, config?: AxiosRequestConfig): Promise<operations.ConsentFormsReadResponse>;
    /**
     * consentFormsUnapplyFromAppointment - Unassign (unapply) a consent form from appointment
    **/
    consentFormsUnapplyFromAppointment(req: operations.ConsentFormsUnapplyFromAppointmentRequest, config?: AxiosRequestConfig): Promise<operations.ConsentFormsUnapplyFromAppointmentResponse>;
    /**
     * consentFormsUpdate - Update an existing patient consent form
    **/
    consentFormsUpdate(req: operations.ConsentFormsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ConsentFormsUpdateResponse>;
    /**
     * customAppointmentFieldsCreate - Create custom appointment fields
    **/
    customAppointmentFieldsCreate(req: operations.CustomAppointmentFieldsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsCreateResponse>;
    /**
     * customAppointmentFieldsList - Retrieve or search custom appointment fields
    **/
    customAppointmentFieldsList(req: operations.CustomAppointmentFieldsListRequest, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsListResponse>;
    /**
     * customAppointmentFieldsPartialUpdate - Update an existing custom appointment field
    **/
    customAppointmentFieldsPartialUpdate(req: operations.CustomAppointmentFieldsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsPartialUpdateResponse>;
    /**
     * customAppointmentFieldsRead - Retrieve an existing custom appointment field
    **/
    customAppointmentFieldsRead(req: operations.CustomAppointmentFieldsReadRequest, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsReadResponse>;
    /**
     * customAppointmentFieldsUpdate - Update an existing custom appointment field
    **/
    customAppointmentFieldsUpdate(req: operations.CustomAppointmentFieldsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CustomAppointmentFieldsUpdateResponse>;
    /**
     * customDemographicsCreate - Create custom demographics fields
    **/
    customDemographicsCreate(req: operations.CustomDemographicsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsCreateResponse>;
    /**
     * customDemographicsList - Retrieve or search custom demographics fields
    **/
    customDemographicsList(req: operations.CustomDemographicsListRequest, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsListResponse>;
    /**
     * customDemographicsPartialUpdate - Update an existing custom demographics field
    **/
    customDemographicsPartialUpdate(req: operations.CustomDemographicsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsPartialUpdateResponse>;
    /**
     * customDemographicsRead - Retrieve an existing custom demographics field
    **/
    customDemographicsRead(req: operations.CustomDemographicsReadRequest, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsReadResponse>;
    /**
     * customDemographicsUpdate - Update an existing custom demographics field
    **/
    customDemographicsUpdate(req: operations.CustomDemographicsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CustomDemographicsUpdateResponse>;
    /**
     * customVitalsList - Retrieve or search custom vital types
    **/
    customVitalsList(req: operations.CustomVitalsListRequest, config?: AxiosRequestConfig): Promise<operations.CustomVitalsListResponse>;
    /**
     * customVitalsRead - Retrieve an existing custom vital type
    **/
    customVitalsRead(req: operations.CustomVitalsReadRequest, config?: AxiosRequestConfig): Promise<operations.CustomVitalsReadResponse>;
    /**
     * documentsCreate - Create documents
    **/
    documentsCreate(req: operations.DocumentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DocumentsCreateResponse>;
    /**
     * documentsDelete - Delete an existing appointment template
    **/
    documentsDelete(req: operations.DocumentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DocumentsDeleteResponse>;
    /**
     * documentsList - Retrieve or search documents
    **/
    documentsList(req: operations.DocumentsListRequest, config?: AxiosRequestConfig): Promise<operations.DocumentsListResponse>;
    /**
     * documentsPartialUpdate - Update an existing appointment template
    **/
    documentsPartialUpdate(req: operations.DocumentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DocumentsPartialUpdateResponse>;
    /**
     * documentsRead - Retrieve an existing appointment template
    **/
    documentsRead(req: operations.DocumentsReadRequest, config?: AxiosRequestConfig): Promise<operations.DocumentsReadResponse>;
    /**
     * documentsUpdate - Update an existing appointment template
    **/
    documentsUpdate(req: operations.DocumentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DocumentsUpdateResponse>;
    /**
     * eobsCreate - Create EOB object
    **/
    eobsCreate(req: operations.EobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.EobsCreateResponse>;
    /**
     * eobsList - Retrieve or search EOB objects
    **/
    eobsList(req: operations.EobsListRequest, config?: AxiosRequestConfig): Promise<operations.EobsListResponse>;
    /**
     * eobsRead - Retrieve an existing EOB object
    **/
    eobsRead(req: operations.EobsReadRequest, config?: AxiosRequestConfig): Promise<operations.EobsReadResponse>;
    feeSchedulesList(req: operations.FeeSchedulesListRequest, config?: AxiosRequestConfig): Promise<operations.FeeSchedulesListResponse>;
    feeSchedulesRead(req: operations.FeeSchedulesReadRequest, config?: AxiosRequestConfig): Promise<operations.FeeSchedulesReadResponse>;
    /**
     * implantableDevicesList - Retrieve or search implantable devices
    **/
    implantableDevicesList(req: operations.ImplantableDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.ImplantableDevicesListResponse>;
    /**
     * implantableDevicesRead - Retrieve an existing implantable device
    **/
    implantableDevicesRead(req: operations.ImplantableDevicesReadRequest, config?: AxiosRequestConfig): Promise<operations.ImplantableDevicesReadResponse>;
    insurancesList(req: operations.InsurancesListRequest, config?: AxiosRequestConfig): Promise<operations.InsurancesListResponse>;
    insurancesRead(req: operations.InsurancesReadRequest, config?: AxiosRequestConfig): Promise<operations.InsurancesReadResponse>;
    /**
     * labDocumentsCreate - Create lab order documents. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
    **/
    labDocumentsCreate(req: operations.LabDocumentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LabDocumentsCreateResponse>;
    /**
     * labDocumentsDelete - Delete an existing lab order document
    **/
    labDocumentsDelete(req: operations.LabDocumentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LabDocumentsDeleteResponse>;
    /**
     * labDocumentsList - Retrieve or search lab order documents
    **/
    labDocumentsList(req: operations.LabDocumentsListRequest, config?: AxiosRequestConfig): Promise<operations.LabDocumentsListResponse>;
    /**
     * labDocumentsPartialUpdate - Update an existing lab order document
    **/
    labDocumentsPartialUpdate(req: operations.LabDocumentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabDocumentsPartialUpdateResponse>;
    /**
     * labDocumentsRead - Retrieve an existing lab order document
    **/
    labDocumentsRead(req: operations.LabDocumentsReadRequest, config?: AxiosRequestConfig): Promise<operations.LabDocumentsReadResponse>;
    /**
     * labDocumentsUpdate - Update an existing lab order document
    **/
    labDocumentsUpdate(req: operations.LabDocumentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabDocumentsUpdateResponse>;
    /**
     * labOrdersCreate - Create lab orders. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
    **/
    labOrdersCreate(req: operations.LabOrdersCreateRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersCreateResponse>;
    /**
     * labOrdersDelete - Delete an existing lab order
    **/
    labOrdersDelete(req: operations.LabOrdersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersDeleteResponse>;
    /**
     * labOrdersList - Retrieve or search lab orders
    **/
    labOrdersList(req: operations.LabOrdersListRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersListResponse>;
    /**
     * labOrdersPartialUpdate - Update an existing lab order
    **/
    labOrdersPartialUpdate(req: operations.LabOrdersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersPartialUpdateResponse>;
    /**
     * labOrdersRead - Retrieve an existing lab order
    **/
    labOrdersRead(req: operations.LabOrdersReadRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersReadResponse>;
    labOrdersSummaryList(req: operations.LabOrdersSummaryListRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersSummaryListResponse>;
    labOrdersSummaryRead(req: operations.LabOrdersSummaryReadRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersSummaryReadResponse>;
    /**
     * labOrdersUpdate - Update an existing lab order
    **/
    labOrdersUpdate(req: operations.LabOrdersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabOrdersUpdateResponse>;
    /**
     * labResultsCreate - Create lab results. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
    **/
    labResultsCreate(req: operations.LabResultsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LabResultsCreateResponse>;
    /**
     * labResultsDelete - Delete an existing lab result
    **/
    labResultsDelete(req: operations.LabResultsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LabResultsDeleteResponse>;
    /**
     * labResultsList - Retrieve or search lab results
    **/
    labResultsList(req: operations.LabResultsListRequest, config?: AxiosRequestConfig): Promise<operations.LabResultsListResponse>;
    /**
     * labResultsPartialUpdate - Update an existing lab result
    **/
    labResultsPartialUpdate(req: operations.LabResultsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabResultsPartialUpdateResponse>;
    /**
     * labResultsRead - Retrieve an existing lab result
    **/
    labResultsRead(req: operations.LabResultsReadRequest, config?: AxiosRequestConfig): Promise<operations.LabResultsReadResponse>;
    /**
     * labResultsUpdate - Update an existing lab result
    **/
    labResultsUpdate(req: operations.LabResultsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabResultsUpdateResponse>;
    /**
     * labTestsCreate - Create lab tests. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
    **/
    labTestsCreate(req: operations.LabTestsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LabTestsCreateResponse>;
    /**
     * labTestsDelete - Delete an existing lab test
    **/
    labTestsDelete(req: operations.LabTestsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LabTestsDeleteResponse>;
    /**
     * labTestsList - Retrieve or search lab tests
    **/
    labTestsList(req: operations.LabTestsListRequest, config?: AxiosRequestConfig): Promise<operations.LabTestsListResponse>;
    /**
     * labTestsPartialUpdate - Update an existing lab test
    **/
    labTestsPartialUpdate(req: operations.LabTestsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabTestsPartialUpdateResponse>;
    /**
     * labTestsRead - Retrieve an existing lab test
    **/
    labTestsRead(req: operations.LabTestsReadRequest, config?: AxiosRequestConfig): Promise<operations.LabTestsReadResponse>;
    /**
     * labTestsUpdate - Update an existing lab test
    **/
    labTestsUpdate(req: operations.LabTestsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LabTestsUpdateResponse>;
    /**
     * medicationsAppendToPharmacyNote - Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
    **/
    medicationsAppendToPharmacyNote(req: operations.MedicationsAppendToPharmacyNoteRequest, config?: AxiosRequestConfig): Promise<operations.MedicationsAppendToPharmacyNoteResponse>;
    /**
     * medicationsCreate - Create patient medications
    **/
    medicationsCreate(req: operations.MedicationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MedicationsCreateResponse>;
    /**
     * medicationsList - Retrieve or search patient medications
    **/
    medicationsList(req: operations.MedicationsListRequest, config?: AxiosRequestConfig): Promise<operations.MedicationsListResponse>;
    /**
     * medicationsPartialUpdate - Update an existing patient medications
    **/
    medicationsPartialUpdate(req: operations.MedicationsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MedicationsPartialUpdateResponse>;
    /**
     * medicationsRead - Retrieve an existing patient medications
    **/
    medicationsRead(req: operations.MedicationsReadRequest, config?: AxiosRequestConfig): Promise<operations.MedicationsReadResponse>;
    /**
     * medicationsUpdate - Update an existing patient medications
    **/
    medicationsUpdate(req: operations.MedicationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MedicationsUpdateResponse>;
    /**
     * patientCommunicationsCreate - Create patient communication for CQM
    **/
    patientCommunicationsCreate(req: operations.PatientCommunicationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsCreateResponse>;
    /**
     * patientCommunicationsList - Retrieve or search patient communications for CQM
    **/
    patientCommunicationsList(req: operations.PatientCommunicationsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsListResponse>;
    /**
     * patientCommunicationsPartialUpdate - Update an existing patient communication for CQM
    **/
    patientCommunicationsPartialUpdate(req: operations.PatientCommunicationsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsPartialUpdateResponse>;
    /**
     * patientCommunicationsRead - Retrieve an existing patient communication for CQM
    **/
    patientCommunicationsRead(req: operations.PatientCommunicationsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsReadResponse>;
    /**
     * patientCommunicationsUpdate - Update an existing patient communication for CQM
    **/
    patientCommunicationsUpdate(req: operations.PatientCommunicationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientCommunicationsUpdateResponse>;
    /**
     * patientFlagTypesCreate - Create patient flag types
    **/
    patientFlagTypesCreate(req: operations.PatientFlagTypesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesCreateResponse>;
    /**
     * patientFlagTypesList - Retrieve or search patient flag types
    **/
    patientFlagTypesList(req: operations.PatientFlagTypesListRequest, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesListResponse>;
    /**
     * patientFlagTypesPartialUpdate - Update an existing patient flag type
    **/
    patientFlagTypesPartialUpdate(req: operations.PatientFlagTypesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesPartialUpdateResponse>;
    /**
     * patientFlagTypesRead - Retrieve an existing patient flag type
    **/
    patientFlagTypesRead(req: operations.PatientFlagTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesReadResponse>;
    /**
     * patientFlagTypesUpdate - Update an existing patient flag type
    **/
    patientFlagTypesUpdate(req: operations.PatientFlagTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientFlagTypesUpdateResponse>;
    /**
     * patientInterventionsCreate - Create patient intervention for CQM
    **/
    patientInterventionsCreate(req: operations.PatientInterventionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsCreateResponse>;
    /**
     * patientInterventionsList - Retrieve or search patient interventions for CQM
    **/
    patientInterventionsList(req: operations.PatientInterventionsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsListResponse>;
    /**
     * patientInterventionsPartialUpdate - Update an existing patient intervention for CQM
    **/
    patientInterventionsPartialUpdate(req: operations.PatientInterventionsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsPartialUpdateResponse>;
    /**
     * patientInterventionsRead - Retrieve an existing patient intervention for CQM
    **/
    patientInterventionsRead(req: operations.PatientInterventionsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsReadResponse>;
    /**
     * patientInterventionsUpdate - Update an existing patient intervention for CQM
    **/
    patientInterventionsUpdate(req: operations.PatientInterventionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientInterventionsUpdateResponse>;
    patientLabResultsCreate(req: operations.PatientLabResultsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsCreateResponse>;
    patientLabResultsDelete(req: operations.PatientLabResultsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsDeleteResponse>;
    patientLabResultsList(req: operations.PatientLabResultsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsListResponse>;
    patientLabResultsPartialUpdate(req: operations.PatientLabResultsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsPartialUpdateResponse>;
    patientLabResultsRead(req: operations.PatientLabResultsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsReadResponse>;
    patientLabResultsUpdate(req: operations.PatientLabResultsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientLabResultsUpdateResponse>;
    patientMessagesCreate(req: operations.PatientMessagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientMessagesCreateResponse>;
    patientMessagesList(req: operations.PatientMessagesListRequest, config?: AxiosRequestConfig): Promise<operations.PatientMessagesListResponse>;
    patientMessagesPartialUpdate(req: operations.PatientMessagesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientMessagesPartialUpdateResponse>;
    patientMessagesRead(req: operations.PatientMessagesReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientMessagesReadResponse>;
    patientMessagesUpdate(req: operations.PatientMessagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientMessagesUpdateResponse>;
    /**
     * patientPhysicalExamsCreate - Create patient physical exam for CQM
    **/
    patientPhysicalExamsCreate(req: operations.PatientPhysicalExamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsCreateResponse>;
    /**
     * patientPhysicalExamsList - Retrieve or search patient physical exams for CQM
    **/
    patientPhysicalExamsList(req: operations.PatientPhysicalExamsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsListResponse>;
    /**
     * patientPhysicalExamsPartialUpdate - Update an existing patient physical exam for CQM
    **/
    patientPhysicalExamsPartialUpdate(req: operations.PatientPhysicalExamsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsPartialUpdateResponse>;
    /**
     * patientPhysicalExamsRead - Retrieve an existing patient physical exam for CQM
    **/
    patientPhysicalExamsRead(req: operations.PatientPhysicalExamsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsReadResponse>;
    /**
     * patientPhysicalExamsUpdate - Update an existing patient physical exam for CQM
    **/
    patientPhysicalExamsUpdate(req: operations.PatientPhysicalExamsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientPhysicalExamsUpdateResponse>;
    patientRiskAssessmentsCreate(req: operations.PatientRiskAssessmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsCreateResponse>;
    patientRiskAssessmentsList(req: operations.PatientRiskAssessmentsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsListResponse>;
    patientRiskAssessmentsPartialUpdate(req: operations.PatientRiskAssessmentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsPartialUpdateResponse>;
    patientRiskAssessmentsRead(req: operations.PatientRiskAssessmentsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsReadResponse>;
    patientRiskAssessmentsUpdate(req: operations.PatientRiskAssessmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientRiskAssessmentsUpdateResponse>;
    /**
     * patientVaccineRecordsCreate - Create patient vaccine records
    **/
    patientVaccineRecordsCreate(req: operations.PatientVaccineRecordsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsCreateResponse>;
    /**
     * patientVaccineRecordsList - Retrieve or search patient vaccine records
    **/
    patientVaccineRecordsList(req: operations.PatientVaccineRecordsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsListResponse>;
    /**
     * patientVaccineRecordsPartialUpdate - Update an existing patient vaccine records
    **/
    patientVaccineRecordsPartialUpdate(req: operations.PatientVaccineRecordsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsPartialUpdateResponse>;
    /**
     * patientVaccineRecordsRead - Retrieve an existing patient vaccine records
    **/
    patientVaccineRecordsRead(req: operations.PatientVaccineRecordsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsReadResponse>;
    /**
     * patientVaccineRecordsUpdate - Update an existing patient vaccine records
    **/
    patientVaccineRecordsUpdate(req: operations.PatientVaccineRecordsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientVaccineRecordsUpdateResponse>;
    /**
     * patientsCcda - Retrieve patient CCDA
    **/
    patientsCcda(req: operations.PatientsCcdaRequest, config?: AxiosRequestConfig): Promise<operations.PatientsCcdaResponse>;
    /**
     * patientsCreate - Create patient
    **/
    patientsCreate(req: operations.PatientsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientsCreateResponse>;
    /**
     * patientsDelete - Delete an existing patient
    **/
    patientsDelete(req: operations.PatientsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PatientsDeleteResponse>;
    /**
     * patientsList - Retrieve or search patients
    **/
    patientsList(req: operations.PatientsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientsListResponse>;
    /**
     * patientsOnpatientAccessCreate - Send new onpatient invite to patient
    **/
    patientsOnpatientAccessCreate(req: operations.PatientsOnpatientAccessCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientsOnpatientAccessCreateResponse>;
    /**
     * patientsOnpatientAccessDelete - Revoke sent onpatient invites
    **/
    patientsOnpatientAccessDelete(req: operations.PatientsOnpatientAccessDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PatientsOnpatientAccessDeleteResponse>;
    /**
     * patientsOnpatientAccessRead - Retrieve or search existing onpatient access invites
    **/
    patientsOnpatientAccessRead(req: operations.PatientsOnpatientAccessReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientsOnpatientAccessReadResponse>;
    /**
     * patientsPartialUpdate - Update an existing patient
    **/
    patientsPartialUpdate(req: operations.PatientsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientsPartialUpdateResponse>;
    /**
     * patientsQrda1 - Retrieve patient QRDA1
    **/
    patientsQrda1(req: operations.PatientsQrda1Request, config?: AxiosRequestConfig): Promise<operations.PatientsQrda1Response>;
    /**
     * patientsRead - Retrieve an existing patient
    **/
    patientsRead(req: operations.PatientsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientsReadResponse>;
    patientsSummaryCreate(req: operations.PatientsSummaryCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryCreateResponse>;
    patientsSummaryDelete(req: operations.PatientsSummaryDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryDeleteResponse>;
    patientsSummaryList(req: operations.PatientsSummaryListRequest, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryListResponse>;
    patientsSummaryPartialUpdate(req: operations.PatientsSummaryPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryPartialUpdateResponse>;
    patientsSummaryRead(req: operations.PatientsSummaryReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryReadResponse>;
    patientsSummaryUpdate(req: operations.PatientsSummaryUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientsSummaryUpdateResponse>;
    /**
     * patientsUpdate - Update an existing patient
    **/
    patientsUpdate(req: operations.PatientsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatientsUpdateResponse>;
    /**
     * prescriptionMessagesList - Retrieve or search prescription messages
    **/
    prescriptionMessagesList(req: operations.PrescriptionMessagesListRequest, config?: AxiosRequestConfig): Promise<operations.PrescriptionMessagesListResponse>;
    /**
     * prescriptionMessagesRead - Retrieve an existing prescription message
    **/
    prescriptionMessagesRead(req: operations.PrescriptionMessagesReadRequest, config?: AxiosRequestConfig): Promise<operations.PrescriptionMessagesReadResponse>;
    /**
     * problemsCreate - Create patient problems
    **/
    problemsCreate(req: operations.ProblemsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProblemsCreateResponse>;
    /**
     * problemsList - Retrieve or search patient problems
    **/
    problemsList(req: operations.ProblemsListRequest, config?: AxiosRequestConfig): Promise<operations.ProblemsListResponse>;
    /**
     * problemsPartialUpdate - Update an existing patient problems
    **/
    problemsPartialUpdate(req: operations.ProblemsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ProblemsPartialUpdateResponse>;
    /**
     * problemsRead - Retrieve an existing patient problems
    **/
    problemsRead(req: operations.ProblemsReadRequest, config?: AxiosRequestConfig): Promise<operations.ProblemsReadResponse>;
    /**
     * problemsUpdate - Update an existing patient problems
    **/
    problemsUpdate(req: operations.ProblemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ProblemsUpdateResponse>;
    /**
     * reminderProfilesCreate - Create reminder profile
    **/
    reminderProfilesCreate(req: operations.ReminderProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesCreateResponse>;
    /**
     * reminderProfilesDelete - Delete an existing reminder profile
    **/
    reminderProfilesDelete(req: operations.ReminderProfilesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesDeleteResponse>;
    /**
     * reminderProfilesList - Retrieve or search reminder profiles
    **/
    reminderProfilesList(req: operations.ReminderProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesListResponse>;
    /**
     * reminderProfilesPartialUpdate - Update an existing reminder profile
    **/
    reminderProfilesPartialUpdate(req: operations.ReminderProfilesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesPartialUpdateResponse>;
    /**
     * reminderProfilesRead - Retrieve an existing reminder profile
    **/
    reminderProfilesRead(req: operations.ReminderProfilesReadRequest, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesReadResponse>;
    /**
     * reminderProfilesUpdate - Update an existing reminder profile
    **/
    reminderProfilesUpdate(req: operations.ReminderProfilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ReminderProfilesUpdateResponse>;
    /**
     * sublabsCreate - Create sub-vendors
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
    **/
    sublabsCreate(req: operations.SublabsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SublabsCreateResponse>;
    /**
     * sublabsDelete - Delete an existing sub vendor
    **/
    sublabsDelete(req: operations.SublabsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SublabsDeleteResponse>;
    /**
     * sublabsList - Retrieve or search sub vendors
    **/
    sublabsList(req: operations.SublabsListRequest, config?: AxiosRequestConfig): Promise<operations.SublabsListResponse>;
    /**
     * sublabsPartialUpdate - Update an existing sub vendor
    **/
    sublabsPartialUpdate(req: operations.SublabsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SublabsPartialUpdateResponse>;
    /**
     * sublabsRead - Retrieve an existing sub vendor
    **/
    sublabsRead(req: operations.SublabsReadRequest, config?: AxiosRequestConfig): Promise<operations.SublabsReadResponse>;
    /**
     * sublabsUpdate - Update an existing sub vendor
    **/
    sublabsUpdate(req: operations.SublabsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SublabsUpdateResponse>;
}
