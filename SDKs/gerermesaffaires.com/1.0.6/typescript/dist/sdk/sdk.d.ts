import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sandbox.gerermesaffaires.com/api/v1/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Sécurisez vos données en interfaçant votre logiciel métier avec le service en ligne GererMesAffaires
 *
 * @see {@link https://api.gerermesaffaires.com/} - Documentation fonctionnelle des API GererMesAffaires
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Remove a customer space from partner
     */
    deleteBusinessGroupsIdSpacesSpaceId(req: operations.DeleteBusinessGroupsIdSpacesSpaceIdRequest, security: operations.DeleteBusinessGroupsIdSpacesSpaceIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteBusinessGroupsIdSpacesSpaceIdResponse>;
    /**
     * Delete a Space (only space not delivered to customer)
     */
    deleteSpacesId(req: operations.DeleteSpacesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdResponse>;
    /**
     * delete a contact detail for a company entity
     */
    deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignation(req: operations.DeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationResponse>;
    /**
     * delete access to a folder for a group
     */
    deleteSpacesIdGroupsGroupIdFoldersFolderId(req: operations.DeleteSpacesIdGroupsGroupIdFoldersFolderIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdGroupsGroupIdFoldersFolderIdResponse>;
    /**
     * Delete a person of a group
     */
    deleteSpacesIdGroupsGroupIdPersonsMemberId(req: operations.DeleteSpacesIdGroupsGroupIdPersonsMemberIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdGroupsGroupIdPersonsMemberIdResponse>;
    /**
     * delete a person
     */
    deleteSpacesIdPersonsPersonId(req: operations.DeleteSpacesIdPersonsPersonIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdPersonsPersonIdResponse>;
    /**
     * delete a contact detail for a person
     */
    deleteSpacesIdPersonsPersonIdDetailsDesignation(req: operations.DeleteSpacesIdPersonsPersonIdDetailsDesignationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdPersonsPersonIdDetailsDesignationResponse>;
    /**
     * delete a status of the space
     */
    deleteSpacesIdStatusCode(req: operations.DeleteSpacesIdStatusCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdStatusCodeResponse>;
    /**
     * Deletes a trigger for the space id
     */
    deleteSpacesIdTriggersName(req: operations.DeleteSpacesIdTriggersNameRequest, security: operations.DeleteSpacesIdTriggersNameSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesIdTriggersNameResponse>;
    /**
     * Delete a common folder
     */
    deleteSpacesSpaceIdCommonFoldersId(req: operations.DeleteSpacesSpaceIdCommonFoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdCommonFoldersIdResponse>;
    /**
     * delete a bank statement
     */
    deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdResponse>;
    /**
     * delete a contractual document
     */
    deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdResponse>;
    /**
     * delete a corporate tax declaration
     */
    deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdResponse>;
    /**
     * delete an expense proof
     */
    deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdResponse>;
    /**
     * delete an expense report
     */
    deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdResponse>;
    /**
     * delete an invoice document
     */
    deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdResponse>;
    /**
     * delete a tax declaration
     */
    deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdResponse>;
    /**
     * delete a payroll
     */
    deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdResponse>;
    /**
     * delete a payslip
     */
    deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdResponse>;
    /**
     * delete a social contract
     */
    deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdResponse>;
    /**
     * delete a social declaration
     */
    deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdResponse>;
    /**
     * delete a VAT declaration
     */
    deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdResponse>;
    /**
     * delete an AccountingYear
     */
    deleteSpacesSpaceIdFoldersIdAccountingYear(req: operations.DeleteSpacesSpaceIdFoldersIdAccountingYearRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdAccountingYearResponse>;
    /**
     * Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
     */
    deleteSpacesSpaceIdFoldersIdBank(req: operations.DeleteSpacesSpaceIdFoldersIdBankRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdBankResponse>;
    /**
     * delete a customer
     */
    deleteSpacesSpaceIdFoldersIdCustomer(req: operations.DeleteSpacesSpaceIdFoldersIdCustomerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdCustomerResponse>;
    /**
     * Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
     */
    deleteSpacesSpaceIdFoldersIdEmployee(req: operations.DeleteSpacesSpaceIdFoldersIdEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdEmployeeResponse>;
    /**
     * Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
     */
    deleteSpacesSpaceIdFoldersIdInsurance(req: operations.DeleteSpacesSpaceIdFoldersIdInsuranceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdInsuranceResponse>;
    /**
     * Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
     */
    deleteSpacesSpaceIdFoldersIdLoan(req: operations.DeleteSpacesSpaceIdFoldersIdLoanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdLoanResponse>;
    /**
     * delete a password
     */
    deleteSpacesSpaceIdFoldersIdPasswordsPasswordId(req: operations.DeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdResponse>;
    /**
     * delete a nominative social declaration in a folder social
     */
    deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration(req: operations.DeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRequest, security: operations.DeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationResponse>;
    /**
     * delete a secondary portfolio of a customer contract
     */
    deleteSpacesSpaceIdFoldersIdPortfolioPortfolioId(req: operations.DeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdResponse>;
    /**
     * delete a Professional Vehicle
     */
    deleteSpacesSpaceIdFoldersIdProfessionalVehicle(req: operations.DeleteSpacesSpaceIdFoldersIdProfessionalVehicleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdProfessionalVehicleResponse>;
    /**
     * delete a provider
     */
    deleteSpacesSpaceIdFoldersIdProvider(req: operations.DeleteSpacesSpaceIdFoldersIdProviderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdProviderResponse>;
    /**
     * delete a document from a required document
     */
    deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentId(req: operations.DeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdRequest, security: operations.DeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdResponse>;
    /**
     * delete a social regime
     */
    deleteSpacesSpaceIdFoldersIdSocialRegimes(req: operations.DeleteSpacesSpaceIdFoldersIdSocialRegimesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdSocialRegimesResponse>;
    /**
     * Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data
     */
    deleteSpacesSpaceIdFoldersIdTaxContract(req: operations.DeleteSpacesSpaceIdFoldersIdTaxContractRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdTaxContractResponse>;
    /**
     * delete a class document
     */
    deleteSpacesSpaceIdFoldersIdDocumentClass(req: operations.DeleteSpacesSpaceIdFoldersIdDocumentClassRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdFoldersIdDocumentClassResponse>;
    /**
     * delete the invitation of a person in a space
     */
    deleteSpacesSpaceIdPersonsIdGuestInSpace(req: operations.DeleteSpacesSpaceIdPersonsIdGuestInSpaceRequest, security: operations.DeleteSpacesSpaceIdPersonsIdGuestInSpaceSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdPersonsIdGuestInSpaceResponse>;
    /**
     * delete the invitation of a person in a space
     */
    deleteSpacesSpaceIdPersonsIdInvitation(req: operations.DeleteSpacesSpaceIdPersonsIdInvitationRequest, security: operations.DeleteSpacesSpaceIdPersonsIdInvitationSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSpacesSpaceIdPersonsIdInvitationResponse>;
    /**
     * Returns predefined folders and workbooks of the Box for all the spaces
     */
    getBoxMenus(config?: AxiosRequestConfig): Promise<operations.GetBoxMenusResponse>;
    /**
     * Returns a list of groups custom ordered by name
     */
    getBusinessGroups(req: operations.GetBusinessGroupsRequest, security: operations.GetBusinessGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.GetBusinessGroupsResponse>;
    /**
     * Returns list of groups custom for managers
     */
    getBusinessGroupsAll(req: operations.GetBusinessGroupsAllRequest, security: operations.GetBusinessGroupsAllSecurity, config?: AxiosRequestConfig): Promise<operations.GetBusinessGroupsAllResponse>;
    /**
     * Returns a group
     */
    getBusinessGroupsId(req: operations.GetBusinessGroupsIdRequest, security: operations.GetBusinessGroupsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBusinessGroupsIdResponse>;
    /**
     * Returns spaces of the business group with id
     */
    getBusinessGroupsIdSpaces(req: operations.GetBusinessGroupsIdSpacesRequest, security: operations.GetBusinessGroupsIdSpacesSecurity, config?: AxiosRequestConfig): Promise<operations.GetBusinessGroupsIdSpacesResponse>;
    /**
     * Returns predefined folders and workbooks of the Hub for all the spaces of the business group
     */
    getHubBusinessGroupsIdMenus(req: operations.GetHubBusinessGroupsIdMenusRequest, security: operations.GetHubBusinessGroupsIdMenusSecurity, config?: AxiosRequestConfig): Promise<operations.GetHubBusinessGroupsIdMenusResponse>;
    /**
     * Returns predefined folders and workbooks of the Hub for all the spaces
     */
    getHubMenus(config?: AxiosRequestConfig): Promise<operations.GetHubMenusResponse>;
    /**
     * Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces
     */
    getHubMenusAll(config?: AxiosRequestConfig): Promise<operations.GetHubMenusAllResponse>;
    /**
     * Returns predefined folders and workbooks of the Hub for the space
     */
    getHubSpacesSpaceIdMenus(req: operations.GetHubSpacesSpaceIdMenusRequest, config?: AxiosRequestConfig): Promise<operations.GetHubSpacesSpaceIdMenusResponse>;
    /**
     * Returns predefined entries
     */
    getMenus(config?: AxiosRequestConfig): Promise<operations.GetMenusResponse>;
    /**
     * Returns status of member
     */
    getProfile(req: operations.GetProfileRequest, security: operations.GetProfileSecurity, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * Returns status of member
     */
    getProfileIdFile(req: operations.GetProfileIdFileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileIdFileResponse>;
    /**
     * Returns the method to get the validation code or the link to register after invitation
     */
    getRegistration(req: operations.GetRegistrationRequest, security: operations.GetRegistrationSecurity, config?: AxiosRequestConfig): Promise<operations.GetRegistrationResponse>;
    /**
     * Returns member id of user logged
     */
    getSession(config?: AxiosRequestConfig): Promise<operations.GetSessionResponse>;
    /**
     * Returns spaces of my group
     */
    getSpaces(req: operations.GetSpacesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesResponse>;
    /**
     * Returns all spaces
     */
    getSpacesAll(req: operations.GetSpacesAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesAllResponse>;
    /**
     * Returns a space
     */
    getSpacesId(req: operations.GetSpacesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdResponse>;
    /**
     * Returns list of accounting years for the space {id}
     */
    getSpacesIdAccountingYear(req: operations.GetSpacesIdAccountingYearRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdAccountingYearResponse>;
    /**
     * Returns list of collective decisions for the space {id}
     */
    getSpacesIdCollectiveDecision(req: operations.GetSpacesIdCollectiveDecisionRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdCollectiveDecisionResponse>;
    /**
     * Returns list of company entities
     */
    getSpacesIdCompanyEntities(req: operations.GetSpacesIdCompanyEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdCompanyEntitiesResponse>;
    /**
     * Returns list of company entities even company entities archived
     */
    getSpacesIdCompanyEntitiesAll(req: operations.GetSpacesIdCompanyEntitiesAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdCompanyEntitiesAllResponse>;
    /**
     * Returns a compay entity
     */
    getSpacesIdCompanyEntitiesCompanyId(req: operations.GetSpacesIdCompanyEntitiesCompanyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdCompanyEntitiesCompanyIdResponse>;
    /**
     * Returns all details of a company entity
     */
    getSpacesIdCompanyEntitiesPersonIdDetails(req: operations.GetSpacesIdCompanyEntitiesPersonIdDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdCompanyEntitiesPersonIdDetailsResponse>;
    /**
     * return the access of a person in a customer contract
     */
    getSpacesIdFoldersFolderIdPersonsMemberId(req: operations.GetSpacesIdFoldersFolderIdPersonsMemberIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdFoldersFolderIdPersonsMemberIdResponse>;
    /**
     * Returns list of groups
     */
    getSpacesIdGroups(req: operations.GetSpacesIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdGroupsResponse>;
    /**
     * Returns list of groups even archived of the space
     */
    getSpacesIdGroupsAll(req: operations.GetSpacesIdGroupsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdGroupsAllResponse>;
    /**
     * Returns a group
     */
    getSpacesIdGroupsGroupId(req: operations.GetSpacesIdGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdGroupsGroupIdResponse>;
    /**
     * Returns legal information of a space (except private)
     */
    getSpacesIdLegal(req: operations.GetSpacesIdLegalRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdLegalResponse>;
    /**
     * Returns a space with the logo
     */
    getSpacesIdLogo(req: operations.GetSpacesIdLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdLogoResponse>;
    /**
     * Returns list of persons
     */
    getSpacesIdPersons(req: operations.GetSpacesIdPersonsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdPersonsResponse>;
    /**
     * Returns list of persons even persons archived
     */
    getSpacesIdPersonsAll(req: operations.GetSpacesIdPersonsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdPersonsAllResponse>;
    /**
     * Returns a person
     */
    getSpacesIdPersonsPersonId(req: operations.GetSpacesIdPersonsPersonIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdPersonsPersonIdResponse>;
    /**
     * Returns all details of a person
     */
    getSpacesIdPersonsPersonIdDetails(req: operations.GetSpacesIdPersonsPersonIdDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdPersonsPersonIdDetailsResponse>;
    /**
     * Returns list of folders with exceptionnal access of the person personId
     */
    getSpacesIdPersonsPersonIdFolders(req: operations.GetSpacesIdPersonsPersonIdFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdPersonsPersonIdFoldersResponse>;
    /**
     * Returns list of groups of the person personId
     */
    getSpacesIdPersonsPersonIdGroups(req: operations.GetSpacesIdPersonsPersonIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdPersonsPersonIdGroupsResponse>;
    /**
     * Returns list of portfolios of the person personId
     */
    getSpacesIdPersonsPersonIdPortfolios(req: operations.GetSpacesIdPersonsPersonIdPortfoliosRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdPersonsPersonIdPortfoliosResponse>;
    /**
     * Returns list of professionalvehicles for the space {id}
     */
    getSpacesIdProfessionalVehicles(req: operations.GetSpacesIdProfessionalVehiclesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdProfessionalVehiclesResponse>;
    /**
     * Returns state of activation of logs
     */
    getSpacesIdSettingsNf203Logs(req: operations.GetSpacesIdSettingsNf203LogsRequest, security: operations.GetSpacesIdSettingsNf203LogsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdSettingsNf203LogsResponse>;
    /**
     * Returns all status of the space
     */
    getSpacesIdStatus(req: operations.GetSpacesIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdStatusResponse>;
    /**
     * Returns list of tax contracts for the space {id}
     */
    getSpacesIdTaxContracts(req: operations.GetSpacesIdTaxContractsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdTaxContractsResponse>;
    /**
     * Returns list of triggers for the space {id}
     */
    getSpacesIdTriggers(req: operations.GetSpacesIdTriggersRequest, security: operations.GetSpacesIdTriggersSecurity, config?: AxiosRequestConfig): Promise<operations.GetSpacesIdTriggersResponse>;
    /**
     * Returns folder of the company entity
     */
    getSpacesSpaceIdCompanyEntitiesIdFollowUps(req: operations.GetSpacesSpaceIdCompanyEntitiesIdFollowUpsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdCompanyEntitiesIdFollowUpsResponse>;
    /**
     * Returns folder with Id and customer data
     */
    getSpacesSpaceIdCustomers(req: operations.GetSpacesSpaceIdCustomersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdCustomersResponse>;
    /**
     * Returns folder with Id and customer data (even archived)
     */
    getSpacesSpaceIdCustomersAll(req: operations.GetSpacesSpaceIdCustomersAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdCustomersAllResponse>;
    /**
     * Returns documents of the folder
     */
    getSpacesSpaceIdDocuments(req: operations.GetSpacesSpaceIdDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsResponse>;
    /**
     * read the data of a document
     */
    getSpacesSpaceIdDocumentsDocumentIdExtend(req: operations.GetSpacesSpaceIdDocumentsDocumentIdExtendRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsDocumentIdExtendResponse>;
    /**
     * Returns versions of the document
     */
    getSpacesSpaceIdDocumentsDocumentIdFolders(req: operations.GetSpacesSpaceIdDocumentsDocumentIdFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsDocumentIdFoldersResponse>;
    /**
     * returns the number of pages and the price of the pdf to send by mail
     */
    getSpacesSpaceIdDocumentsDocumentIdMailingprice(req: operations.GetSpacesSpaceIdDocumentsDocumentIdMailingpriceRequest, security: operations.GetSpacesSpaceIdDocumentsDocumentIdMailingpriceSecurity, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsDocumentIdMailingpriceResponse>;
    /**
     * Returns versions of the document
     */
    getSpacesSpaceIdDocumentsDocumentIdVersions(req: operations.GetSpacesSpaceIdDocumentsDocumentIdVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsDocumentIdVersionsResponse>;
    /**
     * Returns current version of the document
     */
    getSpacesSpaceIdDocumentsDocumentIdVersionsCurrent(req: operations.GetSpacesSpaceIdDocumentsDocumentIdVersionsCurrentRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsDocumentIdVersionsCurrentResponse>;
    /**
     * Returns accesses of one document
     */
    getSpacesSpaceIdDocumentsIdAccess(req: operations.GetSpacesSpaceIdDocumentsIdAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsIdAccessResponse>;
    /**
     * Returns the document with the accounting property
     */
    getSpacesSpaceIdDocumentsIdAccounting(req: operations.GetSpacesSpaceIdDocumentsIdAccountingRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsIdAccountingResponse>;
    /**
     * Returns content of one document
     */
    getSpacesSpaceIdDocumentsIdDownload(req: operations.GetSpacesSpaceIdDocumentsIdDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdDocumentsIdDownloadResponse>;
    /**
     * Returns folders with Id and employee data
     */
    getSpacesSpaceIdEmployees(req: operations.GetSpacesSpaceIdEmployeesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdEmployeesResponse>;
    /**
     * Returns folders with Id and employee data (even archived)
     */
    getSpacesSpaceIdEmployeesAll(req: operations.GetSpacesSpaceIdEmployeesAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdEmployeesAllResponse>;
    /**
     * Returns folders with Id and employer data
     */
    getSpacesSpaceIdEmployers(req: operations.GetSpacesSpaceIdEmployersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdEmployersResponse>;
    /**
     * Returns folders with Id and employer data (even archived)
     */
    getSpacesSpaceIdEmployersAll(req: operations.GetSpacesSpaceIdEmployersAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdEmployersAllResponse>;
    /**
     * read the data of a space
     */
    getSpacesSpaceIdExtend(req: operations.GetSpacesSpaceIdExtendRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdExtendResponse>;
    /**
     * Returns folders of the space
     */
    getSpacesSpaceIdFolders(req: operations.GetSpacesSpaceIdFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersResponse>;
    /**
     * Returns folders of the space (even archived)
     */
    getSpacesSpaceIdFoldersAll(req: operations.GetSpacesSpaceIdFoldersAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersAllResponse>;
    /**
     * get a nominative social declaration
     */
    getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId(req: operations.GetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdResponse>;
    /**
     * Returns folder with Id
     */
    getSpacesSpaceIdFoldersId(req: operations.GetSpacesSpaceIdFoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdResponse>;
    /**
     * Returns accountings documents of the folder (results and taxation or accountingyear)
     */
    getSpacesSpaceIdFoldersIdAccountings(req: operations.GetSpacesSpaceIdFoldersIdAccountingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdAccountingsResponse>;
    /**
     * journal of accountings document delivered to a customer
     */
    getSpacesSpaceIdFoldersIdAccountingsJournal(req: operations.GetSpacesSpaceIdFoldersIdAccountingsJournalRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdAccountingsJournalResponse>;
    /**
     * Returns folder with Id and bank data
     */
    getSpacesSpaceIdFoldersIdBank(req: operations.GetSpacesSpaceIdFoldersIdBankRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdBankResponse>;
    /**
     * Returns bank statements of the folder bank
     */
    getSpacesSpaceIdFoldersIdBankStatements(req: operations.GetSpacesSpaceIdFoldersIdBankStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdBankStatementsResponse>;
    /**
     * Returns common folders of a folder
     */
    getSpacesSpaceIdFoldersIdCommonFolders(req: operations.GetSpacesSpaceIdFoldersIdCommonFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdCommonFoldersResponse>;
    /**
     * Returns common folders (even archived) of a folder
     */
    getSpacesSpaceIdFoldersIdCommonFoldersAll(req: operations.GetSpacesSpaceIdFoldersIdCommonFoldersAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdCommonFoldersAllResponse>;
    /**
     * Returns all contracting partners of a contract
     */
    getSpacesSpaceIdFoldersIdContractingPartner(req: operations.GetSpacesSpaceIdFoldersIdContractingPartnerRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdContractingPartnerResponse>;
    /**
     * Returns collector space of a contract
     */
    getSpacesSpaceIdFoldersIdContractingPartnerSpace(req: operations.GetSpacesSpaceIdFoldersIdContractingPartnerSpaceRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdContractingPartnerSpaceResponse>;
    /**
     * Returns documents of the folder
     */
    getSpacesSpaceIdFoldersIdContractualDocuments(req: operations.GetSpacesSpaceIdFoldersIdContractualDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdContractualDocumentsResponse>;
    /**
     * Returns folder with Id and contractual-relationship data
     */
    getSpacesSpaceIdFoldersIdContractualRelationship(req: operations.GetSpacesSpaceIdFoldersIdContractualRelationshipRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdContractualRelationshipResponse>;
    /**
     * Returns corporate tax declarations
     */
    getSpacesSpaceIdFoldersIdCoporateTaxDeclarations(req: operations.GetSpacesSpaceIdFoldersIdCoporateTaxDeclarationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdCoporateTaxDeclarationsResponse>;
    /**
     * Returns folder with Id and customer data
     */
    getSpacesSpaceIdFoldersIdCustomer(req: operations.GetSpacesSpaceIdFoldersIdCustomerRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdCustomerResponse>;
    /**
     * journal of documents delivered to a customer
     */
    getSpacesSpaceIdFoldersIdDeliveriesJournal(req: operations.GetSpacesSpaceIdFoldersIdDeliveriesJournalRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdDeliveriesJournalResponse>;
    /**
     * Returns documents of the folder
     */
    getSpacesSpaceIdFoldersIdDocuments(req: operations.GetSpacesSpaceIdFoldersIdDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdDocumentsResponse>;
    /**
     * Returns folder with Id and employee data
     */
    getSpacesSpaceIdFoldersIdEmployee(req: operations.GetSpacesSpaceIdFoldersIdEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdEmployeeResponse>;
    /**
     * Returns expense proofs of the folder (social, followup or exchange)
     */
    getSpacesSpaceIdFoldersIdExpenseProofs(req: operations.GetSpacesSpaceIdFoldersIdExpenseProofsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdExpenseProofsResponse>;
    /**
     * Returns expense reports of the folder (social or followup)
     */
    getSpacesSpaceIdFoldersIdExpenseReports(req: operations.GetSpacesSpaceIdFoldersIdExpenseReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdExpenseReportsResponse>;
    /**
     * Returns expense proofs linked to the expenseReportId
     */
    getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs(req: operations.GetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsResponse>;
    /**
     * Returns folder with Id and insurance data
     */
    getSpacesSpaceIdFoldersIdInsurance(req: operations.GetSpacesSpaceIdFoldersIdInsuranceRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdInsuranceResponse>;
    /**
     * Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
     */
    getSpacesSpaceIdFoldersIdInvoices(req: operations.GetSpacesSpaceIdFoldersIdInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdInvoicesResponse>;
    /**
     * Returns legal entity of a follow up folder
     */
    getSpacesSpaceIdFoldersIdLegalEntity(req: operations.GetSpacesSpaceIdFoldersIdLegalEntityRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdLegalEntityResponse>;
    /**
     * Returns folder with Id and loan data
     */
    getSpacesSpaceIdFoldersIdLoan(req: operations.GetSpacesSpaceIdFoldersIdLoanRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdLoanResponse>;
    /**
     * Returns messages of the folder
     */
    getSpacesSpaceIdFoldersIdMessages(req: operations.GetSpacesSpaceIdFoldersIdMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdMessagesResponse>;
    /**
     * Returns message with Id
     */
    getSpacesSpaceIdFoldersIdMessagesMessageId(req: operations.GetSpacesSpaceIdFoldersIdMessagesMessageIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdMessagesMessageIdResponse>;
    /**
     * Returns nominative social declarations of the folder social
     */
    getSpacesSpaceIdFoldersIdNominativeSocialDeclarations(req: operations.GetSpacesSpaceIdFoldersIdNominativeSocialDeclarationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdNominativeSocialDeclarationsResponse>;
    /**
     * Returns other taxes declarations
     */
    getSpacesSpaceIdFoldersIdOtherTaxes(req: operations.GetSpacesSpaceIdFoldersIdOtherTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdOtherTaxesResponse>;
    /**
     * Returns identifiers/passwords of the folder
     */
    getSpacesSpaceIdFoldersIdPasswords(req: operations.GetSpacesSpaceIdFoldersIdPasswordsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdPasswordsResponse>;
    /**
     * Returns password with Id
     */
    getSpacesSpaceIdFoldersIdPasswordsPasswordId(req: operations.GetSpacesSpaceIdFoldersIdPasswordsPasswordIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdPasswordsPasswordIdResponse>;
    /**
     * Returns payrolls of the folder social
     */
    getSpacesSpaceIdFoldersIdPayrolls(req: operations.GetSpacesSpaceIdFoldersIdPayrollsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdPayrollsResponse>;
    /**
     * Returns payslips of the folder employee
     */
    getSpacesSpaceIdFoldersIdPayslips(req: operations.GetSpacesSpaceIdFoldersIdPayslipsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdPayslipsResponse>;
    /**
     * Returns folder with Id and provider data
     */
    getSpacesSpaceIdFoldersIdProvider(req: operations.GetSpacesSpaceIdFoldersIdProviderRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdProviderResponse>;
    /**
     * list of the required documents for a person
     */
    getSpacesSpaceIdFoldersIdRequiredDocuments(req: operations.GetSpacesSpaceIdFoldersIdRequiredDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdRequiredDocumentsResponse>;
    /**
     * Returns sections of the folder
     */
    getSpacesSpaceIdFoldersIdSections(req: operations.GetSpacesSpaceIdFoldersIdSectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdSectionsResponse>;
    /**
     * Returns social contracts of the folder employee
     */
    getSpacesSpaceIdFoldersIdSocialContracts(req: operations.GetSpacesSpaceIdFoldersIdSocialContractsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdSocialContractsResponse>;
    /**
     * Returns social declarations
     */
    getSpacesSpaceIdFoldersIdSocialDeclarations(req: operations.GetSpacesSpaceIdFoldersIdSocialDeclarationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdSocialDeclarationsResponse>;
    /**
     * Returns folder with Id and social regime data
     */
    getSpacesSpaceIdFoldersIdSocialRegimes(req: operations.GetSpacesSpaceIdFoldersIdSocialRegimesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdSocialRegimesResponse>;
    /**
     * Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
     */
    getSpacesSpaceIdFoldersIdSumInvoices(req: operations.GetSpacesSpaceIdFoldersIdSumInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdSumInvoicesResponse>;
    /**
     * Returns vat declarations
     */
    getSpacesSpaceIdFoldersIdVatDeclarations(req: operations.GetSpacesSpaceIdFoldersIdVatDeclarationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdVatDeclarationsResponse>;
    /**
     * Returns document of documentClass (without specific data) of the folder
     */
    getSpacesSpaceIdFoldersIdDocumentClass(req: operations.GetSpacesSpaceIdFoldersIdDocumentClassRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdFoldersIdDocumentClassResponse>;
    /**
     * Returns list of bank folders for a legal-entity
     */
    getSpacesSpaceIdLegalEntitiesIdBanks(req: operations.GetSpacesSpaceIdLegalEntitiesIdBanksRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdBanksResponse>;
    /**
     * Returns folder of the banks even archived
     */
    getSpacesSpaceIdLegalEntitiesIdBanksAll(req: operations.GetSpacesSpaceIdLegalEntitiesIdBanksAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdBanksAllResponse>;
    /**
     * Returns all contract folders of the legal entity
     */
    getSpacesSpaceIdLegalEntitiesIdContracts(req: operations.GetSpacesSpaceIdLegalEntitiesIdContractsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdContractsResponse>;
    /**
     * Returns folder of the others contract with legal entity
     */
    getSpacesSpaceIdLegalEntitiesIdContractualRelationships(req: operations.GetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsResponse>;
    /**
     * Returns folder of the others contract with legal entity (even archived)
     */
    getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAll(req: operations.GetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllResponse>;
    /**
     * Returns folder of the customer
     */
    getSpacesSpaceIdLegalEntitiesIdCustomers(req: operations.GetSpacesSpaceIdLegalEntitiesIdCustomersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdCustomersResponse>;
    /**
     * Returns folder of the customers (even archived)
     */
    getSpacesSpaceIdLegalEntitiesIdCustomersAll(req: operations.GetSpacesSpaceIdLegalEntitiesIdCustomersAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdCustomersAllResponse>;
    /**
     * Returns list of insurance folders for a legal-entity
     */
    getSpacesSpaceIdLegalEntitiesIdInsurances(req: operations.GetSpacesSpaceIdLegalEntitiesIdInsurancesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdInsurancesResponse>;
    /**
     * Returns folder of the insurances even archived
     */
    getSpacesSpaceIdLegalEntitiesIdInsurancesAll(req: operations.GetSpacesSpaceIdLegalEntitiesIdInsurancesAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdInsurancesAllResponse>;
    /**
     * Returns folder of the loan
     */
    getSpacesSpaceIdLegalEntitiesIdLoans(req: operations.GetSpacesSpaceIdLegalEntitiesIdLoansRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdLoansResponse>;
    /**
     * Returns folder of the loans even archived
     */
    getSpacesSpaceIdLegalEntitiesIdLoansAll(req: operations.GetSpacesSpaceIdLegalEntitiesIdLoansAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdLoansAllResponse>;
    /**
     * Returns list of providers folders for a legal-entity
     */
    getSpacesSpaceIdLegalEntitiesIdProviders(req: operations.GetSpacesSpaceIdLegalEntitiesIdProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdProvidersResponse>;
    /**
     * Returns folder of the providers even archived
     */
    getSpacesSpaceIdLegalEntitiesIdProvidersAll(req: operations.GetSpacesSpaceIdLegalEntitiesIdProvidersAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdProvidersAllResponse>;
    /**
     * Returns list of social regimes folders for a legal-entity
     */
    getSpacesSpaceIdLegalEntitiesIdSocialRegimes(req: operations.GetSpacesSpaceIdLegalEntitiesIdSocialRegimesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdSocialRegimesResponse>;
    /**
     * Returns folder of the social regimes even archived
     */
    getSpacesSpaceIdLegalEntitiesIdSocialRegimesAll(req: operations.GetSpacesSpaceIdLegalEntitiesIdSocialRegimesAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLegalEntitiesIdSocialRegimesAllResponse>;
    /**
     * Returns list of all loan folders of the space
     */
    getSpacesSpaceIdLoans(req: operations.GetSpacesSpaceIdLoansRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLoansResponse>;
    /**
     * Returns list of all loan folders even archived of the space
     */
    getSpacesSpaceIdLoansAll(req: operations.GetSpacesSpaceIdLoansAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdLoansAllResponse>;
    /**
     * Returns folder of the employee
     */
    getSpacesSpaceIdPersonsIdEmployees(req: operations.GetSpacesSpaceIdPersonsIdEmployeesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdPersonsIdEmployeesResponse>;
    /**
     * Returns folder of all employees (even archived)
     */
    getSpacesSpaceIdPersonsIdEmployeesAll(req: operations.GetSpacesSpaceIdPersonsIdEmployeesAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdPersonsIdEmployeesAllResponse>;
    /**
     * Returns folder exchange of the person
     */
    getSpacesSpaceIdPersonsIdExchange(req: operations.GetSpacesSpaceIdPersonsIdExchangeRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdPersonsIdExchangeResponse>;
    /**
     * Returns folder of the person
     */
    getSpacesSpaceIdPersonsIdFollowUps(req: operations.GetSpacesSpaceIdPersonsIdFollowUpsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdPersonsIdFollowUpsResponse>;
    /**
     * Returns invitation of a person
     */
    getSpacesSpaceIdPersonsIdInvitation(req: operations.GetSpacesSpaceIdPersonsIdInvitationRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdPersonsIdInvitationResponse>;
    /**
     * Returns folderId with the access of the person
     */
    getSpacesSpaceIdPersonsMemberIdFoldersId(req: operations.GetSpacesSpaceIdPersonsMemberIdFoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdPersonsMemberIdFoldersIdResponse>;
    /**
     * Returns folder with Id and provider data
     */
    getSpacesSpaceIdProviders(req: operations.GetSpacesSpaceIdProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdProvidersResponse>;
    /**
     * Returns folder with Id and provider data (even archived)
     */
    getSpacesSpaceIdProvidersAll(req: operations.GetSpacesSpaceIdProvidersAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdProvidersAllResponse>;
    /**
     * Returns folder with Id and social regime data
     */
    getSpacesSpaceIdSocialRegimes(req: operations.GetSpacesSpaceIdSocialRegimesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdSocialRegimesResponse>;
    /**
     * Returns folder with Id and social regime data (even archived)
     */
    getSpacesSpaceIdSocialRegimesAll(req: operations.GetSpacesSpaceIdSocialRegimesAllRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdSocialRegimesAllResponse>;
    /**
     * Returns CSV Invoicings of the spaces for the account of the spaceId
     */
    getSpacesSpaceIdSpacesInvoicings(req: operations.GetSpacesSpaceIdSpacesInvoicingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesSpaceIdSpacesInvoicingsResponse>;
    /**
     * Modifies an object
     */
    patchBusinessGroups(req: operations.PatchBusinessGroupsRequestBody, security: operations.PatchBusinessGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.PatchBusinessGroupsResponse>;
    /**
     * modify email of profile
     */
    patchProfileEmail(req: any, security: operations.PatchProfileEmailSecurity, config?: AxiosRequestConfig): Promise<operations.PatchProfileEmailResponse>;
    /**
     * modify mobile of profile
     */
    patchProfileMobile(req: any, security: operations.PatchProfileMobileSecurity, config?: AxiosRequestConfig): Promise<operations.PatchProfileMobileResponse>;
    /**
     * modify infos of profile
     */
    patchProfileJson(req: operations.PatchProfileApplicationJSON, security: operations.PatchProfileJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PatchProfileJsonResponse>;
    /**
     * modify infos of profile
     */
    patchProfileMultipart(req: operations.PatchProfileMultipartFormData1, security: operations.PatchProfileMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PatchProfileMultipartResponse>;
    /**
     * Modify a Space (except private)
     */
    patchSpacesId(req: operations.PatchSpacesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdResponse>;
    /**
     * Modify a company entity
     */
    patchSpacesIdCompanyEntitiesCompanyId(req: operations.PatchSpacesIdCompanyEntitiesCompanyIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdCompanyEntitiesCompanyIdResponse>;
    /**
     * Add/Modify/Delete a person in a customer contract (except manager)
     */
    patchSpacesIdFoldersFolderIdPersonsMemberId(req: operations.PatchSpacesIdFoldersFolderIdPersonsMemberIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdFoldersFolderIdPersonsMemberIdResponse>;
    /**
     * open an access
     */
    patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccess(req: operations.PatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessResponse>;
    /**
     * close an access
     */
    patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccess(req: operations.PatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessResponse>;
    /**
     * Modify a group
     */
    patchSpacesIdGroupsGroupId(req: operations.PatchSpacesIdGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdGroupsGroupIdResponse>;
    /**
     * Add access to a folder for a group
     */
    patchSpacesIdGroupsGroupIdFoldersFolderId(req: operations.PatchSpacesIdGroupsGroupIdFoldersFolderIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdGroupsGroupIdFoldersFolderIdResponse>;
    /**
     * Add a person to a group
     */
    patchSpacesIdGroupsGroupIdPersonsMemberId(req: operations.PatchSpacesIdGroupsGroupIdPersonsMemberIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdGroupsGroupIdPersonsMemberIdResponse>;
    /**
     * Modify legal information of a Space (except private)
     */
    patchSpacesIdLegal(req: operations.PatchSpacesIdLegalRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdLegalResponse>;
    /**
     * Modify the role of a person
     */
    patchSpacesIdPersonsMemberIdPlayer(req: operations.PatchSpacesIdPersonsMemberIdPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdPersonsMemberIdPlayerResponse>;
    /**
     * Modify a person
     */
    patchSpacesIdPersonsPersonId(req: operations.PatchSpacesIdPersonsPersonIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdPersonsPersonIdResponse>;
    /**
     * Add/Modify/Delete a person in a portfolio (except manager)
     */
    patchSpacesIdPortfoliosPortfolioIdPersonsMemberId(req: operations.PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdResponse>;
    /**
     * Modify a common folder
     */
    patchSpacesSpaceIdCommonFoldersId(req: operations.PatchSpacesSpaceIdCommonFoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdCommonFoldersIdResponse>;
    /**
     * modify a doc
     */
    patchSpacesSpaceIdDocumentsDocumentId(req: operations.PatchSpacesSpaceIdDocumentsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdDocumentsDocumentIdResponse>;
    /**
     * modify a bank statement
     */
    patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdResponse>;
    /**
     * modify a contractual document
     */
    patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdResponse>;
    /**
     * modify a coporate tax declaration
     */
    patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdResponse>;
    /**
     * modify an expense report
     */
    patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdResponse>;
    /**
     * modify an expense report
     */
    patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdResponse>;
    /**
     * modify a invoice
     */
    patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdResponse>;
    /**
     * modify an other tax declaration
     */
    patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdResponse>;
    /**
     * modify a payroll
     */
    patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdResponse>;
    /**
     * modify a payslip
     */
    patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdResponse>;
    /**
     * modify a social contract
     */
    patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdResponse>;
    /**
     * modify a social declaration
     */
    patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdResponse>;
    /**
     * modify a vat declaration
     */
    patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId(req: operations.PatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)
     */
    patchSpacesSpaceIdFoldersId(req: operations.PatchSpacesSpaceIdFoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data
     */
    patchSpacesSpaceIdFoldersIdAccountingYear(req: operations.PatchSpacesSpaceIdFoldersIdAccountingYearRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdAccountingYearResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
     */
    patchSpacesSpaceIdFoldersIdBank(req: operations.PatchSpacesSpaceIdFoldersIdBankRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdBankResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data
     */
    patchSpacesSpaceIdFoldersIdCollectiveDecision(req: operations.PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdCollectiveDecisionResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data
     */
    patchSpacesSpaceIdFoldersIdCustomer(req: operations.PatchSpacesSpaceIdFoldersIdCustomerRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdCustomerResponse>;
    /**
     * Detach a doc of a folder
     */
    patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetach(req: operations.PatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
     */
    patchSpacesSpaceIdFoldersIdEmployee(req: operations.PatchSpacesSpaceIdFoldersIdEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdEmployeeResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
     */
    patchSpacesSpaceIdFoldersIdInsurance(req: operations.PatchSpacesSpaceIdFoldersIdInsuranceRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdInsuranceResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
     */
    patchSpacesSpaceIdFoldersIdLoan(req: operations.PatchSpacesSpaceIdFoldersIdLoanRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdLoanResponse>;
    /**
     * Modify a Message
     */
    patchSpacesSpaceIdFoldersIdMessagesMessageId(req: operations.PatchSpacesSpaceIdFoldersIdMessagesMessageIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdMessagesMessageIdResponse>;
    /**
     * Modify a Password
     */
    patchSpacesSpaceIdFoldersIdPasswordsPasswordId(req: operations.PatchSpacesSpaceIdFoldersIdPasswordsPasswordIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdPasswordsPasswordIdResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data
     */
    patchSpacesSpaceIdFoldersIdProfessionalVehicle(req: operations.PatchSpacesSpaceIdFoldersIdProfessionalVehicleRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdProfessionalVehicleResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data
     */
    patchSpacesSpaceIdFoldersIdProvider(req: operations.PatchSpacesSpaceIdFoldersIdProviderRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdProviderResponse>;
    /**
     * Modify the status of a requireddocument
     */
    patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid(req: operations.PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data
     */
    patchSpacesSpaceIdFoldersIdSocialRegimes(req: operations.PatchSpacesSpaceIdFoldersIdSocialRegimesRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdSocialRegimesResponse>;
    /**
     * Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data
     */
    patchSpacesSpaceIdFoldersIdTaxContract(req: operations.PatchSpacesSpaceIdFoldersIdTaxContractRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdFoldersIdTaxContractResponse>;
    /**
     * modify the invitation of a person to collect documents
     */
    patchSpacesSpaceIdPersonsIdCallForDocument(req: operations.PatchSpacesSpaceIdPersonsIdCallForDocumentRequest, security: operations.PatchSpacesSpaceIdPersonsIdCallForDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdPersonsIdCallForDocumentResponse>;
    /**
     * invite a person in a space
     */
    patchSpacesSpaceIdPersonsIdGuestInSpace(req: operations.PatchSpacesSpaceIdPersonsIdGuestInSpaceRequest, security: operations.PatchSpacesSpaceIdPersonsIdGuestInSpaceSecurity, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdPersonsIdGuestInSpaceResponse>;
    /**
     * modify an invitation
     */
    patchSpacesSpaceIdPersonsIdInvitation(req: operations.PatchSpacesSpaceIdPersonsIdInvitationRequest, security: operations.PatchSpacesSpaceIdPersonsIdInvitationSecurity, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdPersonsIdInvitationResponse>;
    /**
     * Modify an access
     */
    patchSpacesSpaceIdPersonsMemberIdFoldersId(req: operations.PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchSpacesSpaceIdPersonsMemberIdFoldersIdResponse>;
    /**
     * Adds a group (only for managers and ADN collaborators)
     */
    postBusinessGroups(req: operations.PostBusinessGroupsRequestBody, security: operations.PostBusinessGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.PostBusinessGroupsResponse>;
    /**
     * send an invitation to manager the private space of personId
     */
    postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace(req: operations.PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRequest, security: operations.PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceSecurity, config?: AxiosRequestConfig): Promise<operations.PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceResponse>;
    /**
     * Add a Space in a group
     */
    postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces(req: operations.PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRequest, security: operations.PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesSecurity, config?: AxiosRequestConfig): Promise<operations.PostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesResponse>;
    /**
     * Add a document (this document is analyzed to be saved in the correct folder and correct space)
     */
    postHubDocumentsJson(req: operations.PostHubDocumentsApplicationJSON, security: operations.PostHubDocumentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubDocumentsJsonResponse>;
    /**
     * Add a document (this document is analyzed to be saved in the correct folder and correct space)
     */
    postHubDocumentsMultipart(req: operations.PostHubDocumentsMultipartFormData1, security: operations.PostHubDocumentsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubDocumentsMultipartResponse>;
    /**
     * Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
     */
    postHubPayslipsJson(req: operations.PostHubPayslipsApplicationJSON, security: operations.PostHubPayslipsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubPayslipsJsonResponse>;
    /**
     * Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
     */
    postHubPayslipsMultipart(req: operations.PostHubPayslipsMultipartFormData1, security: operations.PostHubPayslipsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubPayslipsMultipartResponse>;
    /**
     * Add a document in a space (this document is analyzed to be saved in the correct folder)
     */
    postHubSpacesSpaceIdDocumentsJson(req: operations.PostHubSpacesSpaceIdDocumentsJsonRequest, security: operations.PostHubSpacesSpaceIdDocumentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubSpacesSpaceIdDocumentsJsonResponse>;
    /**
     * Add a document in a space (this document is analyzed to be saved in the correct folder)
     */
    postHubSpacesSpaceIdDocumentsMultipart(req: operations.PostHubSpacesSpaceIdDocumentsMultipartRequest, security: operations.PostHubSpacesSpaceIdDocumentsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubSpacesSpaceIdDocumentsMultipartResponse>;
    /**
     * Add a payslip in a space (this document is analyzed to be saved in the correct folder)
     */
    postHubSpacesSpaceIdPayslipsJson(req: operations.PostHubSpacesSpaceIdPayslipsJsonRequest, security: operations.PostHubSpacesSpaceIdPayslipsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubSpacesSpaceIdPayslipsJsonResponse>;
    /**
     * Add a payslip in a space (this document is analyzed to be saved in the correct folder)
     */
    postHubSpacesSpaceIdPayslipsMultipart(req: operations.PostHubSpacesSpaceIdPayslipsMultipartRequest, security: operations.PostHubSpacesSpaceIdPayslipsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostHubSpacesSpaceIdPayslipsMultipartResponse>;
    /**
     * add a document to the target menuId
     */
    postMenusMenuIdDocumentsJson(req: operations.PostMenusMenuIdDocumentsJsonRequest, security: operations.PostMenusMenuIdDocumentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostMenusMenuIdDocumentsJsonResponse>;
    /**
     * add a document to the target menuId
     */
    postMenusMenuIdDocumentsMultipart(req: operations.PostMenusMenuIdDocumentsMultipartRequest, security: operations.PostMenusMenuIdDocumentsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostMenusMenuIdDocumentsMultipartResponse>;
    /**
     * create infos of profile
     */
    postProfileJson(req: operations.PostProfileApplicationJSON, security: operations.PostProfileJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostProfileJsonResponse>;
    /**
     * create infos of profile
     */
    postProfileMultipart(req: operations.PostProfileMultipartFormData1, security: operations.PostProfileMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostProfileMultipartResponse>;
    /**
     * complete the invitation
     */
    postRegistration(req: operations.PostRegistrationRequestBody, security: operations.PostRegistrationSecurity, config?: AxiosRequestConfig): Promise<operations.PostRegistrationResponse>;
    /**
     * Add a Space in my group
     */
    postSpaces(req: operations.PostSpacesRequestBody, security: operations.PostSpacesSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesResponse>;
    /**
     * Create a accounting year for the space id
     */
    postSpacesIdAccountingYear(req: operations.PostSpacesIdAccountingYearRequest, security: operations.PostSpacesIdAccountingYearSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdAccountingYearResponse>;
    /**
     * Create a colletive decision for the space id
     */
    postSpacesIdCollectiveDecision(req: operations.PostSpacesIdCollectiveDecisionRequest, security: operations.PostSpacesIdCollectiveDecisionSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdCollectiveDecisionResponse>;
    /**
     * Add a Company Entity in a Space
     */
    postSpacesIdCompanyEntities(req: operations.PostSpacesIdCompanyEntitiesRequest, security: operations.PostSpacesIdCompanyEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdCompanyEntitiesResponse>;
    /**
     * Replace or Add a contact detail for a person
     */
    postSpacesIdCompanyEntitiesPersonIdDetails(req: operations.PostSpacesIdCompanyEntitiesPersonIdDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdCompanyEntitiesPersonIdDetailsResponse>;
    /**
     * create an archive with documents
     */
    postSpacesIdDocumentsDownload(req: operations.PostSpacesIdDocumentsDownloadRequest, security: operations.PostSpacesIdDocumentsDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdDocumentsDownloadResponse>;
    /**
     * invite a owner in a space
     */
    postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpace(req: operations.PostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceRequest, security: operations.PostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceResponse>;
    /**
     * Add a group in a Space
     */
    postSpacesIdGroups(req: operations.PostSpacesIdGroupsRequest, security: operations.PostSpacesIdGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdGroupsResponse>;
    /**
     * Add a Person in a Space
     */
    postSpacesIdPersons(req: operations.PostSpacesIdPersonsRequest, security: operations.PostSpacesIdPersonsSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdPersonsResponse>;
    /**
     * Replace or Add a contact detail for a person
     */
    postSpacesIdPersonsPersonIdDetails(req: operations.PostSpacesIdPersonsPersonIdDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdPersonsPersonIdDetailsResponse>;
    /**
     * Create a portfolio for the person personId
     */
    postSpacesIdPersonsPersonIdPortfolios(req: operations.PostSpacesIdPersonsPersonIdPortfoliosRequest, security: operations.PostSpacesIdPersonsPersonIdPortfoliosSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdPersonsPersonIdPortfoliosResponse>;
    /**
     * Create a professional vehicle for the space
     */
    postSpacesIdProfessionalVehicles(req: operations.PostSpacesIdProfessionalVehiclesRequest, security: operations.PostSpacesIdProfessionalVehiclesSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdProfessionalVehiclesResponse>;
    /**
     * Enable/Disable logs
     */
    postSpacesIdSettingsNf203Logs(req: operations.PostSpacesIdSettingsNf203LogsRequest, security: operations.PostSpacesIdSettingsNf203LogsSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdSettingsNf203LogsResponse>;
    /**
     * Replace or Add a status
     */
    postSpacesIdStatus(req: operations.PostSpacesIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdStatusResponse>;
    /**
     * Create a tax contract for the space
     */
    postSpacesIdTaxContracts(req: operations.PostSpacesIdTaxContractsRequest, security: operations.PostSpacesIdTaxContractsSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdTaxContractsResponse>;
    /**
     * Creates a trigger for the space id
     */
    postSpacesIdTriggersName(req: operations.PostSpacesIdTriggersNameRequest, security: operations.PostSpacesIdTriggersNameSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesIdTriggersNameResponse>;
    /**
     * Add a data to a document
     */
    postSpacesSpaceIdDocumentsDocumentIdExtend(req: operations.PostSpacesSpaceIdDocumentsDocumentIdExtendRequest, security: operations.PostSpacesSpaceIdDocumentsDocumentIdExtendSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdDocumentsDocumentIdExtendResponse>;
    /**
     * send by mail a document
     */
    postSpacesSpaceIdDocumentsDocumentIdMailing(req: operations.PostSpacesSpaceIdDocumentsDocumentIdMailingRequest, security: operations.PostSpacesSpaceIdDocumentsDocumentIdMailingSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdDocumentsDocumentIdMailingResponse>;
    /**
     * Add a version to a document and set it as current
     */
    postSpacesSpaceIdDocumentsDocumentIdVersionsJson(req: operations.PostSpacesSpaceIdDocumentsDocumentIdVersionsJsonRequest, security: operations.PostSpacesSpaceIdDocumentsDocumentIdVersionsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdDocumentsDocumentIdVersionsJsonResponse>;
    /**
     * Add a version to a document and set it as current
     */
    postSpacesSpaceIdDocumentsDocumentIdVersionsMultipart(req: operations.PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartRequest, security: operations.PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartResponse>;
    /**
     * Add a data to a space
     */
    postSpacesSpaceIdExtend(req: operations.PostSpacesSpaceIdExtendRequest, security: operations.PostSpacesSpaceIdExtendSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdExtendResponse>;
    /**
     * recalculate a payroll
     */
    postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh(req: operations.PostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshResponse>;
    /**
     * Add a bank statement in a folder bank
     */
    postSpacesSpaceIdFoldersIdBankStatementsJson(req: operations.PostSpacesSpaceIdFoldersIdBankStatementsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdBankStatementsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdBankStatementsJsonResponse>;
    /**
     * Add a bank statement in a folder bank
     */
    postSpacesSpaceIdFoldersIdBankStatementsMultipart(req: operations.PostSpacesSpaceIdFoldersIdBankStatementsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdBankStatementsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdBankStatementsMultipartResponse>;
    /**
     * Add a common folder in another folder
     */
    postSpacesSpaceIdFoldersIdCommonFolders(req: operations.PostSpacesSpaceIdFoldersIdCommonFoldersRequest, security: operations.PostSpacesSpaceIdFoldersIdCommonFoldersSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdCommonFoldersResponse>;
    /**
     * Add a document in a folder
     */
    postSpacesSpaceIdFoldersIdContractualDocumentsJson(req: operations.PostSpacesSpaceIdFoldersIdContractualDocumentsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdContractualDocumentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdContractualDocumentsJsonResponse>;
    /**
     * Add a document in a folder
     */
    postSpacesSpaceIdFoldersIdContractualDocumentsMultipart(req: operations.PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdContractualDocumentsMultipartResponse>;
    /**
     * Add a corporate tax declaration
     */
    postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJson(req: operations.PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJsonResponse>;
    /**
     * Add a corporate tax declaration
     */
    postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipart(req: operations.PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartResponse>;
    /**
     * Add a document in a folder
     */
    postSpacesSpaceIdFoldersIdDocumentsJson(req: operations.PostSpacesSpaceIdFoldersIdDocumentsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdDocumentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdDocumentsJsonResponse>;
    /**
     * Add a document in a folder
     */
    postSpacesSpaceIdFoldersIdDocumentsMultipart(req: operations.PostSpacesSpaceIdFoldersIdDocumentsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdDocumentsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdDocumentsMultipartResponse>;
    /**
     * Add a expense proof in a folder followup or exchange
     */
    postSpacesSpaceIdFoldersIdExpenseProofsJson(req: operations.PostSpacesSpaceIdFoldersIdExpenseProofsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdExpenseProofsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdExpenseProofsJsonResponse>;
    /**
     * Add a expense proof in a folder followup or exchange
     */
    postSpacesSpaceIdFoldersIdExpenseProofsMultipart(req: operations.PostSpacesSpaceIdFoldersIdExpenseProofsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdExpenseProofsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdExpenseProofsMultipartResponse>;
    /**
     * Add a expense report in a folder followup
     */
    postSpacesSpaceIdFoldersIdExpenseReportsJson(req: operations.PostSpacesSpaceIdFoldersIdExpenseReportsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdExpenseReportsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdExpenseReportsJsonResponse>;
    /**
     * Add a expense report in a folder followup
     */
    postSpacesSpaceIdFoldersIdExpenseReportsMultipart(req: operations.PostSpacesSpaceIdFoldersIdExpenseReportsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdExpenseReportsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdExpenseReportsMultipartResponse>;
    /**
     * Add a invoice in a folder of a customer or a provider
     */
    postSpacesSpaceIdFoldersIdInvoicesJson(req: operations.PostSpacesSpaceIdFoldersIdInvoicesJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdInvoicesJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdInvoicesJsonResponse>;
    /**
     * Add a invoice in a folder of a customer or a provider
     */
    postSpacesSpaceIdFoldersIdInvoicesMultipart(req: operations.PostSpacesSpaceIdFoldersIdInvoicesMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdInvoicesMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdInvoicesMultipartResponse>;
    /**
     * Write a message in the journal of a folder
     */
    postSpacesSpaceIdFoldersIdMessages(req: operations.PostSpacesSpaceIdFoldersIdMessagesRequest, security: operations.PostSpacesSpaceIdFoldersIdMessagesSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdMessagesResponse>;
    /**
     * Add a tax declaration
     */
    postSpacesSpaceIdFoldersIdOtherTaxesJson(req: operations.PostSpacesSpaceIdFoldersIdOtherTaxesJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdOtherTaxesJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdOtherTaxesJsonResponse>;
    /**
     * Add a tax declaration
     */
    postSpacesSpaceIdFoldersIdOtherTaxesMultipart(req: operations.PostSpacesSpaceIdFoldersIdOtherTaxesMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdOtherTaxesMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdOtherTaxesMultipartResponse>;
    /**
     * Write a identifier/password in aa folder
     */
    postSpacesSpaceIdFoldersIdPasswords(req: operations.PostSpacesSpaceIdFoldersIdPasswordsRequest, security: operations.PostSpacesSpaceIdFoldersIdPasswordsSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdPasswordsResponse>;
    /**
     * Add a nominative social declaration in a folder social
     */
    postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJson(req: operations.PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJsonResponse>;
    /**
     * Add a nominative social declaration in a folder social
     */
    postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipart(req: operations.PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartResponse>;
    /**
     * Add a payroll in a folder social
     */
    postSpacesSpaceIdFoldersIdPayrollsJson(req: operations.PostSpacesSpaceIdFoldersIdPayrollsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdPayrollsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdPayrollsJsonResponse>;
    /**
     * Add a payroll in a folder social
     */
    postSpacesSpaceIdFoldersIdPayrollsMultipart(req: operations.PostSpacesSpaceIdFoldersIdPayrollsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdPayrollsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdPayrollsMultipartResponse>;
    /**
     * Add a payslip in a folder employee
     */
    postSpacesSpaceIdFoldersIdPayslipsJson(req: operations.PostSpacesSpaceIdFoldersIdPayslipsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdPayslipsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdPayslipsJsonResponse>;
    /**
     * Add a payslip in a folder employee
     */
    postSpacesSpaceIdFoldersIdPayslipsMultipart(req: operations.PostSpacesSpaceIdFoldersIdPayslipsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdPayslipsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdPayslipsMultipartResponse>;
    /**
     * Add a required document to a line
     */
    postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJson(req: operations.PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJsonResponse>;
    /**
     * Add a required document to a line
     */
    postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipart(req: operations.PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartResponse>;
    /**
     * Add a social contract in a folder employee
     */
    postSpacesSpaceIdFoldersIdSocialContractsJson(req: operations.PostSpacesSpaceIdFoldersIdSocialContractsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdSocialContractsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdSocialContractsJsonResponse>;
    /**
     * Add a social contract in a folder employee
     */
    postSpacesSpaceIdFoldersIdSocialContractsMultipart(req: operations.PostSpacesSpaceIdFoldersIdSocialContractsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdSocialContractsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdSocialContractsMultipartResponse>;
    /**
     * Add a social declaration
     */
    postSpacesSpaceIdFoldersIdSocialDeclarationsJson(req: operations.PostSpacesSpaceIdFoldersIdSocialDeclarationsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdSocialDeclarationsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdSocialDeclarationsJsonResponse>;
    /**
     * Add a social declaration
     */
    postSpacesSpaceIdFoldersIdSocialDeclarationsMultipart(req: operations.PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartResponse>;
    /**
     * Add a vat declaration
     */
    postSpacesSpaceIdFoldersIdVatDeclarationsJson(req: operations.PostSpacesSpaceIdFoldersIdVatDeclarationsJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdVatDeclarationsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdVatDeclarationsJsonResponse>;
    /**
     * Add a vat declaration
     */
    postSpacesSpaceIdFoldersIdVatDeclarationsMultipart(req: operations.PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartResponse>;
    /**
     * Add a document in a folder
     */
    postSpacesSpaceIdFoldersIdDocumentClassJson(req: operations.PostSpacesSpaceIdFoldersIdDocumentClassJsonRequest, security: operations.PostSpacesSpaceIdFoldersIdDocumentClassJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdDocumentClassJsonResponse>;
    /**
     * Add a document in a folder
     */
    postSpacesSpaceIdFoldersIdDocumentClassMultipart(req: operations.PostSpacesSpaceIdFoldersIdDocumentClassMultipartRequest, security: operations.PostSpacesSpaceIdFoldersIdDocumentClassMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdFoldersIdDocumentClassMultipartResponse>;
    /**
     * Add a folder for a bank
     */
    postSpacesSpaceIdLegalEntitiesIdBanks(req: operations.PostSpacesSpaceIdLegalEntitiesIdBanksRequest, security: operations.PostSpacesSpaceIdLegalEntitiesIdBanksSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdLegalEntitiesIdBanksResponse>;
    /**
     * Add a folder for a customer
     */
    postSpacesSpaceIdLegalEntitiesIdCustomers(req: operations.PostSpacesSpaceIdLegalEntitiesIdCustomersRequest, security: operations.PostSpacesSpaceIdLegalEntitiesIdCustomersSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdLegalEntitiesIdCustomersResponse>;
    /**
     * Add a folder for a insurance
     */
    postSpacesSpaceIdLegalEntitiesIdInsurances(req: operations.PostSpacesSpaceIdLegalEntitiesIdInsurancesRequest, security: operations.PostSpacesSpaceIdLegalEntitiesIdInsurancesSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdLegalEntitiesIdInsurancesResponse>;
    /**
     * Add a folder for a loan
     */
    postSpacesSpaceIdLegalEntitiesIdLoans(req: operations.PostSpacesSpaceIdLegalEntitiesIdLoansRequest, security: operations.PostSpacesSpaceIdLegalEntitiesIdLoansSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdLegalEntitiesIdLoansResponse>;
    /**
     * Add a folder for a provider
     */
    postSpacesSpaceIdLegalEntitiesIdProviders(req: operations.PostSpacesSpaceIdLegalEntitiesIdProvidersRequest, security: operations.PostSpacesSpaceIdLegalEntitiesIdProvidersSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdLegalEntitiesIdProvidersResponse>;
    /**
     * Add a folder for a social regime
     */
    postSpacesSpaceIdLegalEntitiesIdSocialRegimes(req: operations.PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequest, security: operations.PostSpacesSpaceIdLegalEntitiesIdSocialRegimesSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdLegalEntitiesIdSocialRegimesResponse>;
    /**
     * invite a person to collect documents
     */
    postSpacesSpaceIdPersonsIdCallForDocument(req: operations.PostSpacesSpaceIdPersonsIdCallForDocumentRequest, security: operations.PostSpacesSpaceIdPersonsIdCallForDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdPersonsIdCallForDocumentResponse>;
    /**
     * Add a folder for a employee
     */
    postSpacesSpaceIdPersonsIdEmployees(req: operations.PostSpacesSpaceIdPersonsIdEmployeesRequest, security: operations.PostSpacesSpaceIdPersonsIdEmployeesSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdPersonsIdEmployeesResponse>;
    /**
     * invite a person in a space
     */
    postSpacesSpaceIdPersonsIdGuestInSpace(req: operations.PostSpacesSpaceIdPersonsIdGuestInSpaceRequest, security: operations.PostSpacesSpaceIdPersonsIdGuestInSpaceSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdPersonsIdGuestInSpaceResponse>;
    /**
     * create an invitation in a space for a person
     */
    postSpacesSpaceIdPersonsIdInvitation(req: operations.PostSpacesSpaceIdPersonsIdInvitationRequest, security: operations.PostSpacesSpaceIdPersonsIdInvitationSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdPersonsIdInvitationResponse>;
    /**
     * send the invitation of a person in a space
     */
    postSpacesSpaceIdPersonsIdInvitationInvitationIdSend(req: operations.PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendRequest, security: operations.PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendSecurity, config?: AxiosRequestConfig): Promise<operations.PostSpacesSpaceIdPersonsIdInvitationInvitationIdSendResponse>;
}
