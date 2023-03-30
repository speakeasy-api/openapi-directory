# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gerermesaffaires.com/1.0.6/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteBusinessGroupsIDSpacesSpaceIDRequest{
        Security: operations.DeleteBusinessGroupsIDSpacesSpaceIDSecurity{
            GmaAuth: shared.SchemeGmaAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteBusinessGroupsIDSpacesSpaceIDPathParams{
            ID: "P18784",
            SpaceID: "P18784",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteBusinessGroupsIDSpacesSpaceID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteBusinessGroupsIDSpacesSpaceID` - Remove a customer space from partner
* `DeleteSpacesID` - Delete a Space (only space not delivered to customer)
* `DeleteSpacesIDCompanyEntitiesPersonIDDetailsDesignation` - delete a contact detail for a company entity
* `DeleteSpacesIDGroupsGroupIDFoldersFolderID` - delete access to a folder for a group
* `DeleteSpacesIDGroupsGroupIDPersonsMemberID` - Delete a person of a group
* `DeleteSpacesIDPersonsPersonID` - delete a person
* `DeleteSpacesIDPersonsPersonIDDetailsDesignation` - delete a contact detail for a person
* `DeleteSpacesIDStatusCode` - delete a status of the space
* `DeleteSpacesIDTriggersName` - Deletes a trigger for the space id
* `DeleteSpacesSpaceIDCommonFoldersID` - Delete a common folder
* `DeleteSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID` - delete a bank statement
* `DeleteSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID` - delete a contractual document
* `DeleteSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID` - delete a corporate tax declaration
* `DeleteSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID` - delete an expense proof
* `DeleteSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID` - delete an expense report
* `DeleteSpacesSpaceIDFoldersFolderIDInvoicesDocumentID` - delete an invoice document
* `DeleteSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID` - delete a tax declaration
* `DeleteSpacesSpaceIDFoldersFolderIDPayrollsDocumentID` - delete a payroll
* `DeleteSpacesSpaceIDFoldersFolderIDPayslipsDocumentID` - delete a payslip
* `DeleteSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID` - delete a social contract
* `DeleteSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID` - delete a social declaration
* `DeleteSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID` - delete a VAT declaration
* `DeleteSpacesSpaceIDFoldersIDAccountingYear` - delete an AccountingYear
* `DeleteSpacesSpaceIDFoldersIDBank` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* `DeleteSpacesSpaceIDFoldersIDCustomer` - delete a customer
* `DeleteSpacesSpaceIDFoldersIDEmployee` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* `DeleteSpacesSpaceIDFoldersIDInsurance` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* `DeleteSpacesSpaceIDFoldersIDLoan` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* `DeleteSpacesSpaceIDFoldersIDPasswordsPasswordID` - delete a password
* `DeleteSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclaration` - delete a nominative social declaration in a folder social
* `DeleteSpacesSpaceIDFoldersIDPortfolioPortfolioID` - delete a secondary portfolio of a customer contract
* `DeleteSpacesSpaceIDFoldersIDProfessionalVehicle` - delete a Professional Vehicle
* `DeleteSpacesSpaceIDFoldersIDProvider` - delete a provider
* `DeleteSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidDocumentsDocumentID` - delete a document from a required document
* `DeleteSpacesSpaceIDFoldersIDSocialRegimes` - delete a social regime
* `DeleteSpacesSpaceIDFoldersIDTaxContract` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data
* `DeleteSpacesSpaceIDFoldersIDDocumentClass` - delete a class document
* `DeleteSpacesSpaceIDPersonsIDGuestInSpace` - delete the invitation of a person in a space
* `DeleteSpacesSpaceIDPersonsIDInvitation` - delete the invitation of a person in a space
* `GetBoxMenus` - Returns predefined folders and workbooks of the Box for all the spaces
* `GetBusinessGroups` - Returns a list of groups custom ordered by name
* `GetBusinessGroupsAll` - Returns list of groups custom for managers
* `GetBusinessGroupsID` - Returns a group
* `GetBusinessGroupsIDSpaces` - Returns spaces of the business group with id
* `GetHubBusinessGroupsIDMenus` - Returns predefined folders and workbooks of the Hub for all the spaces of the business group
* `GetHubMenus` - Returns predefined folders and workbooks of the Hub for all the spaces
* `GetHubMenusAll` - Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces
* `GetHubSpacesSpaceIDMenus` - Returns predefined folders and workbooks of the Hub for the space
* `GetMenus` - Returns predefined entries
* `GetProfile` - Returns status of member
* `GetProfileIDFile` - Returns status of member
* `GetRegistration` - Returns the method to get the validation code or the link to register after invitation
* `GetSession` - Returns member id of user logged
* `GetSpaces` - Returns spaces of my group
* `GetSpacesAll` - Returns all spaces
* `GetSpacesID` - Returns a space
* `GetSpacesIDAccountingYear` - Returns list of accounting years for the space {id}
* `GetSpacesIDCollectiveDecision` - Returns list of collective decisions for the space {id}
* `GetSpacesIDCompanyEntities` - Returns list of company entities
* `GetSpacesIDCompanyEntitiesAll` - Returns list of company entities even company entities archived
* `GetSpacesIDCompanyEntitiesCompanyID` - Returns a compay entity
* `GetSpacesIDCompanyEntitiesPersonIDDetails` - Returns all details of a company entity
* `GetSpacesIDFoldersFolderIDPersonsMemberID` - return the access of a person in a customer contract
* `GetSpacesIDGroups` - Returns list of groups
* `GetSpacesIDGroupsAll` - Returns list of groups even archived of the space
* `GetSpacesIDGroupsGroupID` - Returns a group
* `GetSpacesIDLegal` - Returns legal information of a space (except private)
* `GetSpacesIDLogo` - Returns a space with the logo
* `GetSpacesIDPersons` - Returns list of persons
* `GetSpacesIDPersonsAll` - Returns list of persons even persons archived
* `GetSpacesIDPersonsPersonID` - Returns a person
* `GetSpacesIDPersonsPersonIDDetails` - Returns all details of a person
* `GetSpacesIDPersonsPersonIDFolders` - Returns list of folders with exceptionnal access of the person personId
* `GetSpacesIDPersonsPersonIDGroups` - Returns list of groups of the person personId
* `GetSpacesIDPersonsPersonIDPortfolios` - Returns list of portfolios of the person personId
* `GetSpacesIDProfessionalVehicles` - Returns list of professionalvehicles for the space {id}
* `GetSpacesIDSettingsNf203Logs` - Returns state of activation of logs
* `GetSpacesIDStatus` - Returns all status of the space
* `GetSpacesIDTaxContracts` - Returns list of tax contracts for the space {id}
* `GetSpacesIDTriggers` - Returns list of triggers for the space {id}
* `GetSpacesSpaceIDCompanyEntitiesIDFollowUps` - Returns folder of the company entity
* `GetSpacesSpaceIDCustomers` - Returns folder with Id and customer data
* `GetSpacesSpaceIDCustomersAll` - Returns folder with Id and customer data (even archived)
* `GetSpacesSpaceIDDocuments` - Returns documents of the folder
* `GetSpacesSpaceIDDocumentsDocumentIDExtend` - read the data of a document
* `GetSpacesSpaceIDDocumentsDocumentIDFolders` - Returns versions of the document
* `GetSpacesSpaceIDDocumentsDocumentIDMailingprice` - returns the number of pages and the price of the pdf to send by mail
* `GetSpacesSpaceIDDocumentsDocumentIDVersions` - Returns versions of the document
* `GetSpacesSpaceIDDocumentsDocumentIDVersionsCurrent` - Returns current version of the document
* `GetSpacesSpaceIDDocumentsIDAccess` - Returns accesses of one document
* `GetSpacesSpaceIDDocumentsIDAccounting` - Returns the document with the accounting property
* `GetSpacesSpaceIDDocumentsIDDownload` - Returns content of one document
* `GetSpacesSpaceIDEmployees` - Returns folders with Id and employee data
* `GetSpacesSpaceIDEmployeesAll` - Returns folders with Id and employee data (even archived)
* `GetSpacesSpaceIDEmployers` - Returns folders with Id and employer data
* `GetSpacesSpaceIDEmployersAll` - Returns folders with Id and employer data (even archived)
* `GetSpacesSpaceIDExtend` - read the data of a space
* `GetSpacesSpaceIDFolders` - Returns folders of the space
* `GetSpacesSpaceIDFoldersAll` - Returns folders of the space (even archived)
* `GetSpacesSpaceIDFoldersFolderIDNominativeSocialDeclarationsDocumentID` - get a nominative social declaration
* `GetSpacesSpaceIDFoldersID` - Returns folder with Id
* `GetSpacesSpaceIDFoldersIDAccountings` - Returns accountings documents of the folder (results and taxation or accountingyear)
* `GetSpacesSpaceIDFoldersIDAccountingsJournal` - journal of accountings document delivered to a customer
* `GetSpacesSpaceIDFoldersIDBank` - Returns folder with Id and bank data
* `GetSpacesSpaceIDFoldersIDBankStatements` - Returns bank statements of the folder bank
* `GetSpacesSpaceIDFoldersIDCommonFolders` - Returns common folders of a folder
* `GetSpacesSpaceIDFoldersIDCommonFoldersAll` - Returns common folders (even archived) of a folder
* `GetSpacesSpaceIDFoldersIDContractingPartner` - Returns all contracting partners of a contract
* `GetSpacesSpaceIDFoldersIDContractingPartnerSpace` - Returns collector space of a contract
* `GetSpacesSpaceIDFoldersIDContractualDocuments` - Returns documents of the folder
* `GetSpacesSpaceIDFoldersIDContractualRelationship` - Returns folder with Id and contractual-relationship data
* `GetSpacesSpaceIDFoldersIDCoporateTaxDeclarations` - Returns corporate tax declarations
* `GetSpacesSpaceIDFoldersIDCustomer` - Returns folder with Id and customer data
* `GetSpacesSpaceIDFoldersIDDeliveriesJournal` - journal of documents delivered to a customer
* `GetSpacesSpaceIDFoldersIDDocuments` - Returns documents of the folder
* `GetSpacesSpaceIDFoldersIDEmployee` - Returns folder with Id and employee data
* `GetSpacesSpaceIDFoldersIDExpenseProofs` - Returns expense proofs of the folder (social, followup or exchange)
* `GetSpacesSpaceIDFoldersIDExpenseReports` - Returns expense reports of the folder (social or followup)
* `GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofs` - Returns expense proofs linked to the expenseReportId
* `GetSpacesSpaceIDFoldersIDInsurance` - Returns folder with Id and insurance data
* `GetSpacesSpaceIDFoldersIDInvoices` - Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* `GetSpacesSpaceIDFoldersIDLegalEntity` - Returns legal entity of a follow up folder
* `GetSpacesSpaceIDFoldersIDLoan` - Returns folder with Id and loan data
* `GetSpacesSpaceIDFoldersIDMessages` - Returns messages of the folder
* `GetSpacesSpaceIDFoldersIDMessagesMessageID` - Returns message with Id
* `GetSpacesSpaceIDFoldersIDNominativeSocialDeclarations` - Returns nominative social declarations of the folder social
* `GetSpacesSpaceIDFoldersIDOtherTaxes` - Returns other taxes declarations
* `GetSpacesSpaceIDFoldersIDPasswords` - Returns identifiers/passwords of the folder
* `GetSpacesSpaceIDFoldersIDPasswordsPasswordID` - Returns password with Id
* `GetSpacesSpaceIDFoldersIDPayrolls` - Returns payrolls of the folder social
* `GetSpacesSpaceIDFoldersIDPayslips` - Returns payslips of the folder employee
* `GetSpacesSpaceIDFoldersIDProvider` - Returns folder with Id and provider data
* `GetSpacesSpaceIDFoldersIDRequiredDocuments` - list of the required documents for a person
* `GetSpacesSpaceIDFoldersIDSections` - Returns sections of the folder
* `GetSpacesSpaceIDFoldersIDSocialContracts` - Returns social contracts of the folder employee
* `GetSpacesSpaceIDFoldersIDSocialDeclarations` - Returns social declarations
* `GetSpacesSpaceIDFoldersIDSocialRegimes` - Returns folder with Id and social regime data
* `GetSpacesSpaceIDFoldersIDSumInvoices` - Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* `GetSpacesSpaceIDFoldersIDVatDeclarations` - Returns vat declarations
* `GetSpacesSpaceIDFoldersIDDocumentClass` - Returns document of documentClass (without specific data) of the folder
* `GetSpacesSpaceIDLegalEntitiesIDBanks` - Returns list of bank folders for a legal-entity
* `GetSpacesSpaceIDLegalEntitiesIDBanksAll` - Returns folder of the banks even archived
* `GetSpacesSpaceIDLegalEntitiesIDContracts` - Returns all contract folders of the legal entity
* `GetSpacesSpaceIDLegalEntitiesIDContractualRelationships` - Returns folder of the others contract with legal entity
* `GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsAll` - Returns folder of the others contract with legal entity (even archived)
* `GetSpacesSpaceIDLegalEntitiesIDCustomers` - Returns folder of the customer
* `GetSpacesSpaceIDLegalEntitiesIDCustomersAll` - Returns folder of the customers (even archived)
* `GetSpacesSpaceIDLegalEntitiesIDInsurances` - Returns list of insurance folders for a legal-entity
* `GetSpacesSpaceIDLegalEntitiesIDInsurancesAll` - Returns folder of the insurances even archived
* `GetSpacesSpaceIDLegalEntitiesIDLoans` - Returns folder of the loan
* `GetSpacesSpaceIDLegalEntitiesIDLoansAll` - Returns folder of the loans even archived
* `GetSpacesSpaceIDLegalEntitiesIDProviders` - Returns list of providers folders for a legal-entity
* `GetSpacesSpaceIDLegalEntitiesIDProvidersAll` - Returns folder of the providers even archived
* `GetSpacesSpaceIDLegalEntitiesIDSocialRegimes` - Returns list of social regimes folders for a legal-entity
* `GetSpacesSpaceIDLegalEntitiesIDSocialRegimesAll` - Returns folder of the social regimes even archived
* `GetSpacesSpaceIDLoans` - Returns list of all loan folders of the space
* `GetSpacesSpaceIDLoansAll` - Returns list of all loan folders even archived of the space
* `GetSpacesSpaceIDPersonsIDEmployees` - Returns folder of the employee
* `GetSpacesSpaceIDPersonsIDEmployeesAll` - Returns folder of all employees (even archived)
* `GetSpacesSpaceIDPersonsIDExchange` - Returns folder exchange of the person
* `GetSpacesSpaceIDPersonsIDFollowUps` - Returns folder of the person
* `GetSpacesSpaceIDPersonsIDInvitation` - Returns invitation of a person
* `GetSpacesSpaceIDPersonsMemberIDFoldersID` - Returns folderId with the access of the person
* `GetSpacesSpaceIDProviders` - Returns folder with Id and provider data
* `GetSpacesSpaceIDProvidersAll` - Returns folder with Id and provider data (even archived)
* `GetSpacesSpaceIDSocialRegimes` - Returns folder with Id and social regime data
* `GetSpacesSpaceIDSocialRegimesAll` - Returns folder with Id and social regime data (even archived)
* `GetSpacesSpaceIDSpacesInvoicings` - Returns CSV Invoicings of the spaces for the account of the spaceId
* `PatchBusinessGroups` - Modifies an object
* `PatchProfileEmail` - modify email of profile
* `PatchProfileMobile` - modify mobile of profile
* `PatchProfileJSON` - modify infos of profile
* `PatchProfileMultipart` - modify infos of profile
* `PatchSpacesID` - Modify a Space (except private)
* `PatchSpacesIDCompanyEntitiesCompanyID` - Modify a company entity
* `PatchSpacesIDFoldersFolderIDPersonsMemberID` - Add/Modify/Delete a person in a customer contract (except manager)
* `PatchSpacesIDFoldersFolderIDPersonsMemberIDActiveaccess` - open an access
* `PatchSpacesIDFoldersFolderIDPersonsMemberIDUnactiveaccess` - close an access
* `PatchSpacesIDGroupsGroupID` - Modify a group
* `PatchSpacesIDGroupsGroupIDFoldersFolderID` - Add access to a folder for a group
* `PatchSpacesIDGroupsGroupIDPersonsMemberID` - Add a person to a group
* `PatchSpacesIDLegal` - Modify legal information of a Space (except private)
* `PatchSpacesIDPersonsMemberIDPlayer` - Modify the role of a person
* `PatchSpacesIDPersonsPersonID` - Modify a person
* `PatchSpacesIDPortfoliosPortfolioIDPersonsMemberID` - Add/Modify/Delete a person in a portfolio (except manager)
* `PatchSpacesSpaceIDCommonFoldersID` - Modify a common folder
* `PatchSpacesSpaceIDDocumentsDocumentID` - modify a doc
* `PatchSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID` - modify a bank statement
* `PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID` - modify a contractual document
* `PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID` - modify a coporate tax declaration
* `PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID` - modify an expense report
* `PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID` - modify an expense report
* `PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentID` - modify a invoice
* `PatchSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID` - modify an other tax declaration
* `PatchSpacesSpaceIDFoldersFolderIDPayrollsDocumentID` - modify a payroll
* `PatchSpacesSpaceIDFoldersFolderIDPayslipsDocumentID` - modify a payslip
* `PatchSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID` - modify a social contract
* `PatchSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID` - modify a social declaration
* `PatchSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID` - modify a vat declaration
* `PatchSpacesSpaceIDFoldersID` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)
* `PatchSpacesSpaceIDFoldersIDAccountingYear` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data
* `PatchSpacesSpaceIDFoldersIDBank` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* `PatchSpacesSpaceIDFoldersIDCollectiveDecision` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data
* `PatchSpacesSpaceIDFoldersIDCustomer` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data
* `PatchSpacesSpaceIDFoldersIDDocumentsDocumentIDDetach` - Detach a doc of a folder
* `PatchSpacesSpaceIDFoldersIDEmployee` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* `PatchSpacesSpaceIDFoldersIDInsurance` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* `PatchSpacesSpaceIDFoldersIDLoan` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* `PatchSpacesSpaceIDFoldersIDMessagesMessageID` - Modify a Message
* `PatchSpacesSpaceIDFoldersIDPasswordsPasswordID` - Modify a Password
* `PatchSpacesSpaceIDFoldersIDProfessionalVehicle` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data
* `PatchSpacesSpaceIDFoldersIDProvider` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data
* `PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentid` - Modify the status of a requireddocument
* `PatchSpacesSpaceIDFoldersIDSocialRegimes` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data
* `PatchSpacesSpaceIDFoldersIDTaxContract` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data
* `PatchSpacesSpaceIDPersonsIDCallForDocument` - modify the invitation of a person to collect documents
* `PatchSpacesSpaceIDPersonsIDGuestInSpace` - invite a person in a space
* `PatchSpacesSpaceIDPersonsIDInvitation` - modify an invitation
* `PatchSpacesSpaceIDPersonsMemberIDFoldersID` - Modify an access
* `PostBusinessGroups` - Adds a group (only for managers and ADN collaborators)
* `PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpace` - send an invitation to manager the private space of personId
* `PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpaces` - Add a Space in a group
* `PostHubDocumentsJSON` - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* `PostHubDocumentsMultipart` - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* `PostHubPayslipsJSON` - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* `PostHubPayslipsMultipart` - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* `PostHubSpacesSpaceIDDocumentsJSON` - Add a document in a space (this document is analyzed to be saved in the correct folder)
* `PostHubSpacesSpaceIDDocumentsMultipart` - Add a document in a space (this document is analyzed to be saved in the correct folder)
* `PostHubSpacesSpaceIDPayslipsJSON` - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* `PostHubSpacesSpaceIDPayslipsMultipart` - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* `PostMenusMenuIDDocumentsJSON` - add a document to the target menuId
* `PostMenusMenuIDDocumentsMultipart` - add a document to the target menuId
* `PostProfileJSON` - create infos of profile
* `PostProfileMultipart` - create infos of profile
* `PostRegistration` - complete the invitation
* `PostSpaces` - Add a Space in my group
* `PostSpacesIDAccountingYear` - Create a accounting year for the space id
* `PostSpacesIDCollectiveDecision` - Create a colletive decision for the space id
* `PostSpacesIDCompanyEntities` - Add a Company Entity in a Space
* `PostSpacesIDCompanyEntitiesPersonIDDetails` - Replace or Add a contact detail for a person
* `PostSpacesIDDocumentsDownload` - create an archive with documents
* `PostSpacesIDFoldersFolderIDPersonsPersonIDGuestInSpace` - invite a owner in a space
* `PostSpacesIDGroups` - Add a group in a Space
* `PostSpacesIDPersons` - Add a Person in a Space
* `PostSpacesIDPersonsPersonIDDetails` - Replace or Add a contact detail for a person
* `PostSpacesIDPersonsPersonIDPortfolios` - Create a portfolio for the person personId
* `PostSpacesIDProfessionalVehicles` - Create a professional vehicle for the space
* `PostSpacesIDSettingsNf203Logs` - Enable/Disable logs
* `PostSpacesIDStatus` - Replace or Add a status
* `PostSpacesIDTaxContracts` - Create a tax contract for the space
* `PostSpacesIDTriggersName` - Creates a trigger for the space id
* `PostSpacesSpaceIDDocumentsDocumentIDExtend` - Add a data to a document
* `PostSpacesSpaceIDDocumentsDocumentIDMailing` - send by mail a document
* `PostSpacesSpaceIDDocumentsDocumentIDVersionsJSON` - Add a version to a document and set it as current
* `PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipart` - Add a version to a document and set it as current
* `PostSpacesSpaceIDExtend` - Add a data to a space
* `PostSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRefresh` - recalculate a payroll
* `PostSpacesSpaceIDFoldersIDBankStatementsJSON` - Add a bank statement in a folder bank
* `PostSpacesSpaceIDFoldersIDBankStatementsMultipart` - Add a bank statement in a folder bank
* `PostSpacesSpaceIDFoldersIDCommonFolders` - Add a common folder in another folder
* `PostSpacesSpaceIDFoldersIDContractualDocumentsJSON` - Add a document in a folder
* `PostSpacesSpaceIDFoldersIDContractualDocumentsMultipart` - Add a document in a folder
* `PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSON` - Add a corporate tax declaration
* `PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipart` - Add a corporate tax declaration
* `PostSpacesSpaceIDFoldersIDDocumentsJSON` - Add a document in a folder
* `PostSpacesSpaceIDFoldersIDDocumentsMultipart` - Add a document in a folder
* `PostSpacesSpaceIDFoldersIDExpenseProofsJSON` - Add a expense proof in a folder followup or exchange
* `PostSpacesSpaceIDFoldersIDExpenseProofsMultipart` - Add a expense proof in a folder followup or exchange
* `PostSpacesSpaceIDFoldersIDExpenseReportsJSON` - Add a expense report in a folder followup
* `PostSpacesSpaceIDFoldersIDExpenseReportsMultipart` - Add a expense report in a folder followup
* `PostSpacesSpaceIDFoldersIDInvoicesJSON` - Add a invoice in a folder of a customer or a provider
* `PostSpacesSpaceIDFoldersIDInvoicesMultipart` - Add a invoice in a folder of a customer or a provider
* `PostSpacesSpaceIDFoldersIDMessages` - Write a message in the journal of a folder
* `PostSpacesSpaceIDFoldersIDOtherTaxesJSON` - Add a tax declaration
* `PostSpacesSpaceIDFoldersIDOtherTaxesMultipart` - Add a tax declaration
* `PostSpacesSpaceIDFoldersIDPasswords` - Write a identifier/password in aa folder
* `PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSON` - Add a nominative social declaration in a folder social
* `PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipart` - Add a nominative social declaration in a folder social
* `PostSpacesSpaceIDFoldersIDPayrollsJSON` - Add a payroll in a folder social
* `PostSpacesSpaceIDFoldersIDPayrollsMultipart` - Add a payroll in a folder social
* `PostSpacesSpaceIDFoldersIDPayslipsJSON` - Add a payslip in a folder employee
* `PostSpacesSpaceIDFoldersIDPayslipsMultipart` - Add a payslip in a folder employee
* `PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSON` - Add a required document to a line
* `PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipart` - Add a required document to a line
* `PostSpacesSpaceIDFoldersIDSocialContractsJSON` - Add a social contract in a folder employee
* `PostSpacesSpaceIDFoldersIDSocialContractsMultipart` - Add a social contract in a folder employee
* `PostSpacesSpaceIDFoldersIDSocialDeclarationsJSON` - Add a social declaration
* `PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipart` - Add a social declaration
* `PostSpacesSpaceIDFoldersIDVatDeclarationsJSON` - Add a vat declaration
* `PostSpacesSpaceIDFoldersIDVatDeclarationsMultipart` - Add a vat declaration
* `PostSpacesSpaceIDFoldersIDDocumentClassJSON` - Add a document in a folder
* `PostSpacesSpaceIDFoldersIDDocumentClassMultipart` - Add a document in a folder
* `PostSpacesSpaceIDLegalEntitiesIDBanks` - Add a folder for a bank
* `PostSpacesSpaceIDLegalEntitiesIDCustomers` - Add a folder for a customer
* `PostSpacesSpaceIDLegalEntitiesIDInsurances` - Add a folder for a insurance
* `PostSpacesSpaceIDLegalEntitiesIDLoans` - Add a folder for a loan
* `PostSpacesSpaceIDLegalEntitiesIDProviders` - Add a folder for a provider
* `PostSpacesSpaceIDLegalEntitiesIDSocialRegimes` - Add a folder for a social regime
* `PostSpacesSpaceIDPersonsIDCallForDocument` - invite a person to collect documents
* `PostSpacesSpaceIDPersonsIDEmployees` - Add a folder for a employee
* `PostSpacesSpaceIDPersonsIDGuestInSpace` - invite a person in a space
* `PostSpacesSpaceIDPersonsIDInvitation` - create an invitation in a space for a person
* `PostSpacesSpaceIDPersonsIDInvitationInvitationIDSend` - send the invitation of a person in a space
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
