# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gerermesaffaires.com/1.0.6/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gerermesaffaires.com/1.0.6/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteBusinessGroupsIdSpacesSpaceIdRequest,
  DeleteBusinessGroupsIdSpacesSpaceIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteBusinessGroupsIdSpacesSpaceIdRequest = {
  id: "P18784",
  spaceId: "P18784",
};

sdk.deleteBusinessGroupsIdSpacesSpaceId(req).then((res: DeleteBusinessGroupsIdSpacesSpaceIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `deleteBusinessGroupsIdSpacesSpaceId` - Remove a customer space from partner
* `deleteSpacesId` - Delete a Space (only space not delivered to customer)
* `deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignation` - delete a contact detail for a company entity
* `deleteSpacesIdGroupsGroupIdFoldersFolderId` - delete access to a folder for a group
* `deleteSpacesIdGroupsGroupIdPersonsMemberId` - Delete a person of a group
* `deleteSpacesIdPersonsPersonId` - delete a person
* `deleteSpacesIdPersonsPersonIdDetailsDesignation` - delete a contact detail for a person
* `deleteSpacesIdStatusCode` - delete a status of the space
* `deleteSpacesIdTriggersName` - Deletes a trigger for the space id
* `deleteSpacesSpaceIdCommonFoldersId` - Delete a common folder
* `deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId` - delete a bank statement
* `deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId` - delete a contractual document
* `deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId` - delete a corporate tax declaration
* `deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId` - delete an expense proof
* `deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId` - delete an expense report
* `deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentId` - delete an invoice document
* `deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId` - delete a tax declaration
* `deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentId` - delete a payroll
* `deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentId` - delete a payslip
* `deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId` - delete a social contract
* `deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId` - delete a social declaration
* `deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId` - delete a VAT declaration
* `deleteSpacesSpaceIdFoldersIdAccountingYear` - delete an AccountingYear
* `deleteSpacesSpaceIdFoldersIdBank` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* `deleteSpacesSpaceIdFoldersIdCustomer` - delete a customer
* `deleteSpacesSpaceIdFoldersIdEmployee` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* `deleteSpacesSpaceIdFoldersIdInsurance` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* `deleteSpacesSpaceIdFoldersIdLoan` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* `deleteSpacesSpaceIdFoldersIdPasswordsPasswordId` - delete a password
* `deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration` - delete a nominative social declaration in a folder social
* `deleteSpacesSpaceIdFoldersIdPortfolioPortfolioId` - delete a secondary portfolio of a customer contract
* `deleteSpacesSpaceIdFoldersIdProfessionalVehicle` - delete a Professional Vehicle
* `deleteSpacesSpaceIdFoldersIdProvider` - delete a provider
* `deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentId` - delete a document from a required document
* `deleteSpacesSpaceIdFoldersIdSocialRegimes` - delete a social regime
* `deleteSpacesSpaceIdFoldersIdTaxContract` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data
* `deleteSpacesSpaceIdFoldersIdDocumentClass` - delete a class document
* `deleteSpacesSpaceIdPersonsIdGuestInSpace` - delete the invitation of a person in a space
* `deleteSpacesSpaceIdPersonsIdInvitation` - delete the invitation of a person in a space
* `getBoxMenus` - Returns predefined folders and workbooks of the Box for all the spaces
* `getBusinessGroups` - Returns a list of groups custom ordered by name
* `getBusinessGroupsAll` - Returns list of groups custom for managers
* `getBusinessGroupsId` - Returns a group
* `getBusinessGroupsIdSpaces` - Returns spaces of the business group with id
* `getHubBusinessGroupsIdMenus` - Returns predefined folders and workbooks of the Hub for all the spaces of the business group
* `getHubMenus` - Returns predefined folders and workbooks of the Hub for all the spaces
* `getHubMenusAll` - Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces
* `getHubSpacesSpaceIdMenus` - Returns predefined folders and workbooks of the Hub for the space
* `getMenus` - Returns predefined entries
* `getProfile` - Returns status of member
* `getProfileIdFile` - Returns status of member
* `getRegistration` - Returns the method to get the validation code or the link to register after invitation
* `getSession` - Returns member id of user logged
* `getSpaces` - Returns spaces of my group
* `getSpacesAll` - Returns all spaces
* `getSpacesId` - Returns a space
* `getSpacesIdAccountingYear` - Returns list of accounting years for the space {id}
* `getSpacesIdCollectiveDecision` - Returns list of collective decisions for the space {id}
* `getSpacesIdCompanyEntities` - Returns list of company entities
* `getSpacesIdCompanyEntitiesAll` - Returns list of company entities even company entities archived
* `getSpacesIdCompanyEntitiesCompanyId` - Returns a compay entity
* `getSpacesIdCompanyEntitiesPersonIdDetails` - Returns all details of a company entity
* `getSpacesIdFoldersFolderIdPersonsMemberId` - return the access of a person in a customer contract
* `getSpacesIdGroups` - Returns list of groups
* `getSpacesIdGroupsAll` - Returns list of groups even archived of the space
* `getSpacesIdGroupsGroupId` - Returns a group
* `getSpacesIdLegal` - Returns legal information of a space (except private)
* `getSpacesIdLogo` - Returns a space with the logo
* `getSpacesIdPersons` - Returns list of persons
* `getSpacesIdPersonsAll` - Returns list of persons even persons archived
* `getSpacesIdPersonsPersonId` - Returns a person
* `getSpacesIdPersonsPersonIdDetails` - Returns all details of a person
* `getSpacesIdPersonsPersonIdFolders` - Returns list of folders with exceptionnal access of the person personId
* `getSpacesIdPersonsPersonIdGroups` - Returns list of groups of the person personId
* `getSpacesIdPersonsPersonIdPortfolios` - Returns list of portfolios of the person personId
* `getSpacesIdProfessionalVehicles` - Returns list of professionalvehicles for the space {id}
* `getSpacesIdSettingsNf203Logs` - Returns state of activation of logs
* `getSpacesIdStatus` - Returns all status of the space
* `getSpacesIdTaxContracts` - Returns list of tax contracts for the space {id}
* `getSpacesIdTriggers` - Returns list of triggers for the space {id}
* `getSpacesSpaceIdCompanyEntitiesIdFollowUps` - Returns folder of the company entity
* `getSpacesSpaceIdCustomers` - Returns folder with Id and customer data
* `getSpacesSpaceIdCustomersAll` - Returns folder with Id and customer data (even archived)
* `getSpacesSpaceIdDocuments` - Returns documents of the folder
* `getSpacesSpaceIdDocumentsDocumentIdExtend` - read the data of a document
* `getSpacesSpaceIdDocumentsDocumentIdFolders` - Returns versions of the document
* `getSpacesSpaceIdDocumentsDocumentIdMailingprice` - returns the number of pages and the price of the pdf to send by mail
* `getSpacesSpaceIdDocumentsDocumentIdVersions` - Returns versions of the document
* `getSpacesSpaceIdDocumentsDocumentIdVersionsCurrent` - Returns current version of the document
* `getSpacesSpaceIdDocumentsIdAccess` - Returns accesses of one document
* `getSpacesSpaceIdDocumentsIdAccounting` - Returns the document with the accounting property
* `getSpacesSpaceIdDocumentsIdDownload` - Returns content of one document
* `getSpacesSpaceIdEmployees` - Returns folders with Id and employee data
* `getSpacesSpaceIdEmployeesAll` - Returns folders with Id and employee data (even archived)
* `getSpacesSpaceIdEmployers` - Returns folders with Id and employer data
* `getSpacesSpaceIdEmployersAll` - Returns folders with Id and employer data (even archived)
* `getSpacesSpaceIdExtend` - read the data of a space
* `getSpacesSpaceIdFolders` - Returns folders of the space
* `getSpacesSpaceIdFoldersAll` - Returns folders of the space (even archived)
* `getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId` - get a nominative social declaration
* `getSpacesSpaceIdFoldersId` - Returns folder with Id
* `getSpacesSpaceIdFoldersIdAccountings` - Returns accountings documents of the folder (results and taxation or accountingyear)
* `getSpacesSpaceIdFoldersIdAccountingsJournal` - journal of accountings document delivered to a customer
* `getSpacesSpaceIdFoldersIdBank` - Returns folder with Id and bank data
* `getSpacesSpaceIdFoldersIdBankStatements` - Returns bank statements of the folder bank
* `getSpacesSpaceIdFoldersIdCommonFolders` - Returns common folders of a folder
* `getSpacesSpaceIdFoldersIdCommonFoldersAll` - Returns common folders (even archived) of a folder
* `getSpacesSpaceIdFoldersIdContractingPartner` - Returns all contracting partners of a contract
* `getSpacesSpaceIdFoldersIdContractingPartnerSpace` - Returns collector space of a contract
* `getSpacesSpaceIdFoldersIdContractualDocuments` - Returns documents of the folder
* `getSpacesSpaceIdFoldersIdContractualRelationship` - Returns folder with Id and contractual-relationship data
* `getSpacesSpaceIdFoldersIdCoporateTaxDeclarations` - Returns corporate tax declarations
* `getSpacesSpaceIdFoldersIdCustomer` - Returns folder with Id and customer data
* `getSpacesSpaceIdFoldersIdDeliveriesJournal` - journal of documents delivered to a customer
* `getSpacesSpaceIdFoldersIdDocuments` - Returns documents of the folder
* `getSpacesSpaceIdFoldersIdEmployee` - Returns folder with Id and employee data
* `getSpacesSpaceIdFoldersIdExpenseProofs` - Returns expense proofs of the folder (social, followup or exchange)
* `getSpacesSpaceIdFoldersIdExpenseReports` - Returns expense reports of the folder (social or followup)
* `getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs` - Returns expense proofs linked to the expenseReportId
* `getSpacesSpaceIdFoldersIdInsurance` - Returns folder with Id and insurance data
* `getSpacesSpaceIdFoldersIdInvoices` - Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* `getSpacesSpaceIdFoldersIdLegalEntity` - Returns legal entity of a follow up folder
* `getSpacesSpaceIdFoldersIdLoan` - Returns folder with Id and loan data
* `getSpacesSpaceIdFoldersIdMessages` - Returns messages of the folder
* `getSpacesSpaceIdFoldersIdMessagesMessageId` - Returns message with Id
* `getSpacesSpaceIdFoldersIdNominativeSocialDeclarations` - Returns nominative social declarations of the folder social
* `getSpacesSpaceIdFoldersIdOtherTaxes` - Returns other taxes declarations
* `getSpacesSpaceIdFoldersIdPasswords` - Returns identifiers/passwords of the folder
* `getSpacesSpaceIdFoldersIdPasswordsPasswordId` - Returns password with Id
* `getSpacesSpaceIdFoldersIdPayrolls` - Returns payrolls of the folder social
* `getSpacesSpaceIdFoldersIdPayslips` - Returns payslips of the folder employee
* `getSpacesSpaceIdFoldersIdProvider` - Returns folder with Id and provider data
* `getSpacesSpaceIdFoldersIdRequiredDocuments` - list of the required documents for a person
* `getSpacesSpaceIdFoldersIdSections` - Returns sections of the folder
* `getSpacesSpaceIdFoldersIdSocialContracts` - Returns social contracts of the folder employee
* `getSpacesSpaceIdFoldersIdSocialDeclarations` - Returns social declarations
* `getSpacesSpaceIdFoldersIdSocialRegimes` - Returns folder with Id and social regime data
* `getSpacesSpaceIdFoldersIdSumInvoices` - Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* `getSpacesSpaceIdFoldersIdVatDeclarations` - Returns vat declarations
* `getSpacesSpaceIdFoldersIdDocumentClass` - Returns document of documentClass (without specific data) of the folder
* `getSpacesSpaceIdLegalEntitiesIdBanks` - Returns list of bank folders for a legal-entity
* `getSpacesSpaceIdLegalEntitiesIdBanksAll` - Returns folder of the banks even archived
* `getSpacesSpaceIdLegalEntitiesIdContracts` - Returns all contract folders of the legal entity
* `getSpacesSpaceIdLegalEntitiesIdContractualRelationships` - Returns folder of the others contract with legal entity
* `getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAll` - Returns folder of the others contract with legal entity (even archived)
* `getSpacesSpaceIdLegalEntitiesIdCustomers` - Returns folder of the customer
* `getSpacesSpaceIdLegalEntitiesIdCustomersAll` - Returns folder of the customers (even archived)
* `getSpacesSpaceIdLegalEntitiesIdInsurances` - Returns list of insurance folders for a legal-entity
* `getSpacesSpaceIdLegalEntitiesIdInsurancesAll` - Returns folder of the insurances even archived
* `getSpacesSpaceIdLegalEntitiesIdLoans` - Returns folder of the loan
* `getSpacesSpaceIdLegalEntitiesIdLoansAll` - Returns folder of the loans even archived
* `getSpacesSpaceIdLegalEntitiesIdProviders` - Returns list of providers folders for a legal-entity
* `getSpacesSpaceIdLegalEntitiesIdProvidersAll` - Returns folder of the providers even archived
* `getSpacesSpaceIdLegalEntitiesIdSocialRegimes` - Returns list of social regimes folders for a legal-entity
* `getSpacesSpaceIdLegalEntitiesIdSocialRegimesAll` - Returns folder of the social regimes even archived
* `getSpacesSpaceIdLoans` - Returns list of all loan folders of the space
* `getSpacesSpaceIdLoansAll` - Returns list of all loan folders even archived of the space
* `getSpacesSpaceIdPersonsIdEmployees` - Returns folder of the employee
* `getSpacesSpaceIdPersonsIdEmployeesAll` - Returns folder of all employees (even archived)
* `getSpacesSpaceIdPersonsIdExchange` - Returns folder exchange of the person
* `getSpacesSpaceIdPersonsIdFollowUps` - Returns folder of the person
* `getSpacesSpaceIdPersonsIdInvitation` - Returns invitation of a person
* `getSpacesSpaceIdPersonsMemberIdFoldersId` - Returns folderId with the access of the person
* `getSpacesSpaceIdProviders` - Returns folder with Id and provider data
* `getSpacesSpaceIdProvidersAll` - Returns folder with Id and provider data (even archived)
* `getSpacesSpaceIdSocialRegimes` - Returns folder with Id and social regime data
* `getSpacesSpaceIdSocialRegimesAll` - Returns folder with Id and social regime data (even archived)
* `getSpacesSpaceIdSpacesInvoicings` - Returns CSV Invoicings of the spaces for the account of the spaceId
* `patchBusinessGroups` - Modifies an object
* `patchProfileEmail` - modify email of profile
* `patchProfileMobile` - modify mobile of profile
* `patchProfileJson` - modify infos of profile
* `patchProfileMultipart` - modify infos of profile
* `patchSpacesId` - Modify a Space (except private)
* `patchSpacesIdCompanyEntitiesCompanyId` - Modify a company entity
* `patchSpacesIdFoldersFolderIdPersonsMemberId` - Add/Modify/Delete a person in a customer contract (except manager)
* `patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccess` - open an access
* `patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccess` - close an access
* `patchSpacesIdGroupsGroupId` - Modify a group
* `patchSpacesIdGroupsGroupIdFoldersFolderId` - Add access to a folder for a group
* `patchSpacesIdGroupsGroupIdPersonsMemberId` - Add a person to a group
* `patchSpacesIdLegal` - Modify legal information of a Space (except private)
* `patchSpacesIdPersonsMemberIdPlayer` - Modify the role of a person
* `patchSpacesIdPersonsPersonId` - Modify a person
* `patchSpacesIdPortfoliosPortfolioIdPersonsMemberId` - Add/Modify/Delete a person in a portfolio (except manager)
* `patchSpacesSpaceIdCommonFoldersId` - Modify a common folder
* `patchSpacesSpaceIdDocumentsDocumentId` - modify a doc
* `patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId` - modify a bank statement
* `patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId` - modify a contractual document
* `patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId` - modify a coporate tax declaration
* `patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId` - modify an expense report
* `patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId` - modify an expense report
* `patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentId` - modify a invoice
* `patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId` - modify an other tax declaration
* `patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentId` - modify a payroll
* `patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentId` - modify a payslip
* `patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId` - modify a social contract
* `patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId` - modify a social declaration
* `patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId` - modify a vat declaration
* `patchSpacesSpaceIdFoldersId` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)
* `patchSpacesSpaceIdFoldersIdAccountingYear` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data
* `patchSpacesSpaceIdFoldersIdBank` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* `patchSpacesSpaceIdFoldersIdCollectiveDecision` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data
* `patchSpacesSpaceIdFoldersIdCustomer` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data
* `patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetach` - Detach a doc of a folder
* `patchSpacesSpaceIdFoldersIdEmployee` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* `patchSpacesSpaceIdFoldersIdInsurance` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* `patchSpacesSpaceIdFoldersIdLoan` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* `patchSpacesSpaceIdFoldersIdMessagesMessageId` - Modify a Message
* `patchSpacesSpaceIdFoldersIdPasswordsPasswordId` - Modify a Password
* `patchSpacesSpaceIdFoldersIdProfessionalVehicle` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data
* `patchSpacesSpaceIdFoldersIdProvider` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data
* `patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid` - Modify the status of a requireddocument
* `patchSpacesSpaceIdFoldersIdSocialRegimes` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data
* `patchSpacesSpaceIdFoldersIdTaxContract` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data
* `patchSpacesSpaceIdPersonsIdCallForDocument` - modify the invitation of a person to collect documents
* `patchSpacesSpaceIdPersonsIdGuestInSpace` - invite a person in a space
* `patchSpacesSpaceIdPersonsIdInvitation` - modify an invitation
* `patchSpacesSpaceIdPersonsMemberIdFoldersId` - Modify an access
* `postBusinessGroups` - Adds a group (only for managers and ADN collaborators)
* `postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace` - send an invitation to manager the private space of personId
* `postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces` - Add a Space in a group
* `postHubDocumentsJson` - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* `postHubDocumentsMultipart` - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* `postHubPayslipsJson` - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* `postHubPayslipsMultipart` - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* `postHubSpacesSpaceIdDocumentsJson` - Add a document in a space (this document is analyzed to be saved in the correct folder)
* `postHubSpacesSpaceIdDocumentsMultipart` - Add a document in a space (this document is analyzed to be saved in the correct folder)
* `postHubSpacesSpaceIdPayslipsJson` - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* `postHubSpacesSpaceIdPayslipsMultipart` - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* `postMenusMenuIdDocumentsJson` - add a document to the target menuId
* `postMenusMenuIdDocumentsMultipart` - add a document to the target menuId
* `postProfileJson` - create infos of profile
* `postProfileMultipart` - create infos of profile
* `postRegistration` - complete the invitation
* `postSpaces` - Add a Space in my group
* `postSpacesIdAccountingYear` - Create a accounting year for the space id
* `postSpacesIdCollectiveDecision` - Create a colletive decision for the space id
* `postSpacesIdCompanyEntities` - Add a Company Entity in a Space
* `postSpacesIdCompanyEntitiesPersonIdDetails` - Replace or Add a contact detail for a person
* `postSpacesIdDocumentsDownload` - create an archive with documents
* `postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpace` - invite a owner in a space
* `postSpacesIdGroups` - Add a group in a Space
* `postSpacesIdPersons` - Add a Person in a Space
* `postSpacesIdPersonsPersonIdDetails` - Replace or Add a contact detail for a person
* `postSpacesIdPersonsPersonIdPortfolios` - Create a portfolio for the person personId
* `postSpacesIdProfessionalVehicles` - Create a professional vehicle for the space
* `postSpacesIdSettingsNf203Logs` - Enable/Disable logs
* `postSpacesIdStatus` - Replace or Add a status
* `postSpacesIdTaxContracts` - Create a tax contract for the space
* `postSpacesIdTriggersName` - Creates a trigger for the space id
* `postSpacesSpaceIdDocumentsDocumentIdExtend` - Add a data to a document
* `postSpacesSpaceIdDocumentsDocumentIdMailing` - send by mail a document
* `postSpacesSpaceIdDocumentsDocumentIdVersionsJson` - Add a version to a document and set it as current
* `postSpacesSpaceIdDocumentsDocumentIdVersionsMultipart` - Add a version to a document and set it as current
* `postSpacesSpaceIdExtend` - Add a data to a space
* `postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh` - recalculate a payroll
* `postSpacesSpaceIdFoldersIdBankStatementsJson` - Add a bank statement in a folder bank
* `postSpacesSpaceIdFoldersIdBankStatementsMultipart` - Add a bank statement in a folder bank
* `postSpacesSpaceIdFoldersIdCommonFolders` - Add a common folder in another folder
* `postSpacesSpaceIdFoldersIdContractualDocumentsJson` - Add a document in a folder
* `postSpacesSpaceIdFoldersIdContractualDocumentsMultipart` - Add a document in a folder
* `postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJson` - Add a corporate tax declaration
* `postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipart` - Add a corporate tax declaration
* `postSpacesSpaceIdFoldersIdDocumentsJson` - Add a document in a folder
* `postSpacesSpaceIdFoldersIdDocumentsMultipart` - Add a document in a folder
* `postSpacesSpaceIdFoldersIdExpenseProofsJson` - Add a expense proof in a folder followup or exchange
* `postSpacesSpaceIdFoldersIdExpenseProofsMultipart` - Add a expense proof in a folder followup or exchange
* `postSpacesSpaceIdFoldersIdExpenseReportsJson` - Add a expense report in a folder followup
* `postSpacesSpaceIdFoldersIdExpenseReportsMultipart` - Add a expense report in a folder followup
* `postSpacesSpaceIdFoldersIdInvoicesJson` - Add a invoice in a folder of a customer or a provider
* `postSpacesSpaceIdFoldersIdInvoicesMultipart` - Add a invoice in a folder of a customer or a provider
* `postSpacesSpaceIdFoldersIdMessages` - Write a message in the journal of a folder
* `postSpacesSpaceIdFoldersIdOtherTaxesJson` - Add a tax declaration
* `postSpacesSpaceIdFoldersIdOtherTaxesMultipart` - Add a tax declaration
* `postSpacesSpaceIdFoldersIdPasswords` - Write a identifier/password in aa folder
* `postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJson` - Add a nominative social declaration in a folder social
* `postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipart` - Add a nominative social declaration in a folder social
* `postSpacesSpaceIdFoldersIdPayrollsJson` - Add a payroll in a folder social
* `postSpacesSpaceIdFoldersIdPayrollsMultipart` - Add a payroll in a folder social
* `postSpacesSpaceIdFoldersIdPayslipsJson` - Add a payslip in a folder employee
* `postSpacesSpaceIdFoldersIdPayslipsMultipart` - Add a payslip in a folder employee
* `postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJson` - Add a required document to a line
* `postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipart` - Add a required document to a line
* `postSpacesSpaceIdFoldersIdSocialContractsJson` - Add a social contract in a folder employee
* `postSpacesSpaceIdFoldersIdSocialContractsMultipart` - Add a social contract in a folder employee
* `postSpacesSpaceIdFoldersIdSocialDeclarationsJson` - Add a social declaration
* `postSpacesSpaceIdFoldersIdSocialDeclarationsMultipart` - Add a social declaration
* `postSpacesSpaceIdFoldersIdVatDeclarationsJson` - Add a vat declaration
* `postSpacesSpaceIdFoldersIdVatDeclarationsMultipart` - Add a vat declaration
* `postSpacesSpaceIdFoldersIdDocumentClassJson` - Add a document in a folder
* `postSpacesSpaceIdFoldersIdDocumentClassMultipart` - Add a document in a folder
* `postSpacesSpaceIdLegalEntitiesIdBanks` - Add a folder for a bank
* `postSpacesSpaceIdLegalEntitiesIdCustomers` - Add a folder for a customer
* `postSpacesSpaceIdLegalEntitiesIdInsurances` - Add a folder for a insurance
* `postSpacesSpaceIdLegalEntitiesIdLoans` - Add a folder for a loan
* `postSpacesSpaceIdLegalEntitiesIdProviders` - Add a folder for a provider
* `postSpacesSpaceIdLegalEntitiesIdSocialRegimes` - Add a folder for a social regime
* `postSpacesSpaceIdPersonsIdCallForDocument` - invite a person to collect documents
* `postSpacesSpaceIdPersonsIdEmployees` - Add a folder for a employee
* `postSpacesSpaceIdPersonsIdGuestInSpace` - invite a person in a space
* `postSpacesSpaceIdPersonsIdInvitation` - create an invitation in a space for a person
* `postSpacesSpaceIdPersonsIdInvitationInvitationIdSend` - send the invitation of a person in a space
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

