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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DeleteBusinessGroupsIDSpacesSpaceID(ctx, operations.DeleteBusinessGroupsIDSpacesSpaceIDRequest{
        ID: "P18784",
        SpaceID: "P18784",
    }, operations.DeleteBusinessGroupsIDSpacesSpaceIDSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
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
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteBusinessGroupsIDSpacesSpaceID](docs/sdk/README.md#deletebusinessgroupsidspacesspaceid) - Remove a customer space from partner
* [DeleteSpacesID](docs/sdk/README.md#deletespacesid) - Delete a Space (only space not delivered to customer)
* [DeleteSpacesIDCompanyEntitiesPersonIDDetailsDesignation](docs/sdk/README.md#deletespacesidcompanyentitiespersoniddetailsdesignation) - delete a contact detail for a company entity
* [DeleteSpacesIDGroupsGroupIDFoldersFolderID](docs/sdk/README.md#deletespacesidgroupsgroupidfoldersfolderid) - delete access to a folder for a group
* [DeleteSpacesIDGroupsGroupIDPersonsMemberID](docs/sdk/README.md#deletespacesidgroupsgroupidpersonsmemberid) - Delete a person of a group
* [DeleteSpacesIDPersonsPersonID](docs/sdk/README.md#deletespacesidpersonspersonid) - delete a person
* [DeleteSpacesIDPersonsPersonIDDetailsDesignation](docs/sdk/README.md#deletespacesidpersonspersoniddetailsdesignation) - delete a contact detail for a person
* [DeleteSpacesIDStatusCode](docs/sdk/README.md#deletespacesidstatuscode) - delete a status of the space
* [DeleteSpacesIDTriggersName](docs/sdk/README.md#deletespacesidtriggersname) - Deletes a trigger for the space id
* [DeleteSpacesSpaceIDCommonFoldersID](docs/sdk/README.md#deletespacesspaceidcommonfoldersid) - Delete a common folder
* [DeleteSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidbankstatementsdocumentid) - delete a bank statement
* [DeleteSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidcontractualdocumentsdocumentid) - delete a contractual document
* [DeleteSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidcorporatetaxdeclarationsdocumentid) - delete a corporate tax declaration
* [DeleteSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidexpenseproofsdocumentid) - delete an expense proof
* [DeleteSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidexpensereportsdocumentid) - delete an expense report
* [DeleteSpacesSpaceIDFoldersFolderIDInvoicesDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidinvoicesdocumentid) - delete an invoice document
* [DeleteSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidothertaxesdocumentid) - delete a tax declaration
* [DeleteSpacesSpaceIDFoldersFolderIDPayrollsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidpayrollsdocumentid) - delete a payroll
* [DeleteSpacesSpaceIDFoldersFolderIDPayslipsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidpayslipsdocumentid) - delete a payslip
* [DeleteSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidsocialcontractsdocumentid) - delete a social contract
* [DeleteSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidsocialdeclarationsdocumentid) - delete a social declaration
* [DeleteSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersfolderidvatdeclarationsdocumentid) - delete a VAT declaration
* [DeleteSpacesSpaceIDFoldersIDAccountingYear](docs/sdk/README.md#deletespacesspaceidfoldersidaccountingyear) - delete an AccountingYear
* [DeleteSpacesSpaceIDFoldersIDBank](docs/sdk/README.md#deletespacesspaceidfoldersidbank) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* [DeleteSpacesSpaceIDFoldersIDCustomer](docs/sdk/README.md#deletespacesspaceidfoldersidcustomer) - delete a customer
* [DeleteSpacesSpaceIDFoldersIDEmployee](docs/sdk/README.md#deletespacesspaceidfoldersidemployee) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* [DeleteSpacesSpaceIDFoldersIDInsurance](docs/sdk/README.md#deletespacesspaceidfoldersidinsurance) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* [DeleteSpacesSpaceIDFoldersIDLoan](docs/sdk/README.md#deletespacesspaceidfoldersidloan) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* [DeleteSpacesSpaceIDFoldersIDPasswordsPasswordID](docs/sdk/README.md#deletespacesspaceidfoldersidpasswordspasswordid) - delete a password
* [DeleteSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclaration](docs/sdk/README.md#deletespacesspaceidfoldersidpayrollspayrollidnominativesocialdeclaration) - delete a nominative social declaration in a folder social
* [DeleteSpacesSpaceIDFoldersIDPortfolioPortfolioID](docs/sdk/README.md#deletespacesspaceidfoldersidportfolioportfolioid) - delete a secondary portfolio of a customer contract
* [DeleteSpacesSpaceIDFoldersIDProfessionalVehicle](docs/sdk/README.md#deletespacesspaceidfoldersidprofessionalvehicle) - delete a Professional Vehicle
* [DeleteSpacesSpaceIDFoldersIDProvider](docs/sdk/README.md#deletespacesspaceidfoldersidprovider) - delete a provider
* [DeleteSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidDocumentsDocumentID](docs/sdk/README.md#deletespacesspaceidfoldersidrequireddocumentsrequireddocumentiddocumentsdocumentid) - delete a document from a required document
* [DeleteSpacesSpaceIDFoldersIDSocialRegimes](docs/sdk/README.md#deletespacesspaceidfoldersidsocialregimes) - delete a social regime
* [DeleteSpacesSpaceIDFoldersIDTaxContract](docs/sdk/README.md#deletespacesspaceidfoldersidtaxcontract) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data
* [DeleteSpacesSpaceIDFoldersIDDocumentClass](docs/sdk/README.md#deletespacesspaceidfoldersiddocumentclass) - delete a class document
* [DeleteSpacesSpaceIDPersonsIDGuestInSpace](docs/sdk/README.md#deletespacesspaceidpersonsidguestinspace) - delete the invitation of a person in a space
* [DeleteSpacesSpaceIDPersonsIDInvitation](docs/sdk/README.md#deletespacesspaceidpersonsidinvitation) - delete the invitation of a person in a space
* [GetBoxMenus](docs/sdk/README.md#getboxmenus) - Returns predefined folders and workbooks of the Box for all the spaces
* [GetBusinessGroups](docs/sdk/README.md#getbusinessgroups) - Returns a list of groups custom ordered by name
* [GetBusinessGroupsAll](docs/sdk/README.md#getbusinessgroupsall) - Returns list of groups custom for managers
* [GetBusinessGroupsID](docs/sdk/README.md#getbusinessgroupsid) - Returns a group
* [GetBusinessGroupsIDSpaces](docs/sdk/README.md#getbusinessgroupsidspaces) - Returns spaces of the business group with id
* [GetHubBusinessGroupsIDMenus](docs/sdk/README.md#gethubbusinessgroupsidmenus) - Returns predefined folders and workbooks of the Hub for all the spaces of the business group
* [GetHubMenus](docs/sdk/README.md#gethubmenus) - Returns predefined folders and workbooks of the Hub for all the spaces
* [GetHubMenusAll](docs/sdk/README.md#gethubmenusall) - Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces
* [GetHubSpacesSpaceIDMenus](docs/sdk/README.md#gethubspacesspaceidmenus) - Returns predefined folders and workbooks of the Hub for the space
* [GetMenus](docs/sdk/README.md#getmenus) - Returns predefined entries
* [GetProfile](docs/sdk/README.md#getprofile) - Returns status of member
* [GetProfileIDFile](docs/sdk/README.md#getprofileidfile) - Returns status of member
* [GetRegistration](docs/sdk/README.md#getregistration) - Returns the method to get the validation code or the link to register after invitation
* [GetSession](docs/sdk/README.md#getsession) - Returns member id of user logged
* [GetSpaces](docs/sdk/README.md#getspaces) - Returns spaces of my group
* [GetSpacesAll](docs/sdk/README.md#getspacesall) - Returns all spaces
* [GetSpacesID](docs/sdk/README.md#getspacesid) - Returns a space
* [GetSpacesIDAccountingYear](docs/sdk/README.md#getspacesidaccountingyear) - Returns list of accounting years for the space {id}
* [GetSpacesIDCollectiveDecision](docs/sdk/README.md#getspacesidcollectivedecision) - Returns list of collective decisions for the space {id}
* [GetSpacesIDCompanyEntities](docs/sdk/README.md#getspacesidcompanyentities) - Returns list of company entities
* [GetSpacesIDCompanyEntitiesAll](docs/sdk/README.md#getspacesidcompanyentitiesall) - Returns list of company entities even company entities archived
* [GetSpacesIDCompanyEntitiesCompanyID](docs/sdk/README.md#getspacesidcompanyentitiescompanyid) - Returns a compay entity
* [GetSpacesIDCompanyEntitiesPersonIDDetails](docs/sdk/README.md#getspacesidcompanyentitiespersoniddetails) - Returns all details of a company entity
* [GetSpacesIDFoldersFolderIDPersonsMemberID](docs/sdk/README.md#getspacesidfoldersfolderidpersonsmemberid) - return the access of a person in a customer contract
* [GetSpacesIDGroups](docs/sdk/README.md#getspacesidgroups) - Returns list of groups
* [GetSpacesIDGroupsAll](docs/sdk/README.md#getspacesidgroupsall) - Returns list of groups even archived of the space
* [GetSpacesIDGroupsGroupID](docs/sdk/README.md#getspacesidgroupsgroupid) - Returns a group
* [GetSpacesIDLegal](docs/sdk/README.md#getspacesidlegal) - Returns legal information of a space (except private)
* [GetSpacesIDLogo](docs/sdk/README.md#getspacesidlogo) - Returns a space with the logo
* [GetSpacesIDPersons](docs/sdk/README.md#getspacesidpersons) - Returns list of persons
* [GetSpacesIDPersonsAll](docs/sdk/README.md#getspacesidpersonsall) - Returns list of persons even persons archived
* [GetSpacesIDPersonsPersonID](docs/sdk/README.md#getspacesidpersonspersonid) - Returns a person
* [GetSpacesIDPersonsPersonIDDetails](docs/sdk/README.md#getspacesidpersonspersoniddetails) - Returns all details of a person
* [GetSpacesIDPersonsPersonIDFolders](docs/sdk/README.md#getspacesidpersonspersonidfolders) - Returns list of folders with exceptionnal access of the person personId
* [GetSpacesIDPersonsPersonIDGroups](docs/sdk/README.md#getspacesidpersonspersonidgroups) - Returns list of groups of the person personId
* [GetSpacesIDPersonsPersonIDPortfolios](docs/sdk/README.md#getspacesidpersonspersonidportfolios) - Returns list of portfolios of the person personId
* [GetSpacesIDProfessionalVehicles](docs/sdk/README.md#getspacesidprofessionalvehicles) - Returns list of professionalvehicles for the space {id}
* [GetSpacesIDSettingsNf203Logs](docs/sdk/README.md#getspacesidsettingsnf203logs) - Returns state of activation of logs
* [GetSpacesIDStatus](docs/sdk/README.md#getspacesidstatus) - Returns all status of the space
* [GetSpacesIDTaxContracts](docs/sdk/README.md#getspacesidtaxcontracts) - Returns list of tax contracts for the space {id}
* [GetSpacesIDTriggers](docs/sdk/README.md#getspacesidtriggers) - Returns list of triggers for the space {id}
* [GetSpacesSpaceIDCompanyEntitiesIDFollowUps](docs/sdk/README.md#getspacesspaceidcompanyentitiesidfollowups) - Returns folder of the company entity
* [GetSpacesSpaceIDCustomers](docs/sdk/README.md#getspacesspaceidcustomers) - Returns folder with Id and customer data
* [GetSpacesSpaceIDCustomersAll](docs/sdk/README.md#getspacesspaceidcustomersall) - Returns folder with Id and customer data (even archived)
* [GetSpacesSpaceIDDocuments](docs/sdk/README.md#getspacesspaceiddocuments) - Returns documents of the folder
* [GetSpacesSpaceIDDocumentsDocumentIDExtend](docs/sdk/README.md#getspacesspaceiddocumentsdocumentidextend) - read the data of a document
* [GetSpacesSpaceIDDocumentsDocumentIDFolders](docs/sdk/README.md#getspacesspaceiddocumentsdocumentidfolders) - Returns versions of the document
* [GetSpacesSpaceIDDocumentsDocumentIDMailingprice](docs/sdk/README.md#getspacesspaceiddocumentsdocumentidmailingprice) - returns the number of pages and the price of the pdf to send by mail
* [GetSpacesSpaceIDDocumentsDocumentIDVersions](docs/sdk/README.md#getspacesspaceiddocumentsdocumentidversions) - Returns versions of the document
* [GetSpacesSpaceIDDocumentsDocumentIDVersionsCurrent](docs/sdk/README.md#getspacesspaceiddocumentsdocumentidversionscurrent) - Returns current version of the document
* [GetSpacesSpaceIDDocumentsIDAccess](docs/sdk/README.md#getspacesspaceiddocumentsidaccess) - Returns accesses of one document
* [GetSpacesSpaceIDDocumentsIDAccounting](docs/sdk/README.md#getspacesspaceiddocumentsidaccounting) - Returns the document with the accounting property
* [GetSpacesSpaceIDDocumentsIDDownload](docs/sdk/README.md#getspacesspaceiddocumentsiddownload) - Returns content of one document
* [GetSpacesSpaceIDEmployees](docs/sdk/README.md#getspacesspaceidemployees) - Returns folders with Id and employee data
* [GetSpacesSpaceIDEmployeesAll](docs/sdk/README.md#getspacesspaceidemployeesall) - Returns folders with Id and employee data (even archived)
* [GetSpacesSpaceIDEmployers](docs/sdk/README.md#getspacesspaceidemployers) - Returns folders with Id and employer data
* [GetSpacesSpaceIDEmployersAll](docs/sdk/README.md#getspacesspaceidemployersall) - Returns folders with Id and employer data (even archived)
* [GetSpacesSpaceIDExtend](docs/sdk/README.md#getspacesspaceidextend) - read the data of a space
* [GetSpacesSpaceIDFolders](docs/sdk/README.md#getspacesspaceidfolders) - Returns folders of the space
* [GetSpacesSpaceIDFoldersAll](docs/sdk/README.md#getspacesspaceidfoldersall) - Returns folders of the space (even archived)
* [GetSpacesSpaceIDFoldersFolderIDNominativeSocialDeclarationsDocumentID](docs/sdk/README.md#getspacesspaceidfoldersfolderidnominativesocialdeclarationsdocumentid) - get a nominative social declaration
* [GetSpacesSpaceIDFoldersID](docs/sdk/README.md#getspacesspaceidfoldersid) - Returns folder with Id
* [GetSpacesSpaceIDFoldersIDAccountings](docs/sdk/README.md#getspacesspaceidfoldersidaccountings) - Returns accountings documents of the folder (results and taxation or accountingyear)
* [GetSpacesSpaceIDFoldersIDAccountingsJournal](docs/sdk/README.md#getspacesspaceidfoldersidaccountingsjournal) - journal of accountings document delivered to a customer
* [GetSpacesSpaceIDFoldersIDBank](docs/sdk/README.md#getspacesspaceidfoldersidbank) - Returns folder with Id and bank data
* [GetSpacesSpaceIDFoldersIDBankStatements](docs/sdk/README.md#getspacesspaceidfoldersidbankstatements) - Returns bank statements of the folder bank
* [GetSpacesSpaceIDFoldersIDCommonFolders](docs/sdk/README.md#getspacesspaceidfoldersidcommonfolders) - Returns common folders of a folder
* [GetSpacesSpaceIDFoldersIDCommonFoldersAll](docs/sdk/README.md#getspacesspaceidfoldersidcommonfoldersall) - Returns common folders (even archived) of a folder
* [GetSpacesSpaceIDFoldersIDContractingPartner](docs/sdk/README.md#getspacesspaceidfoldersidcontractingpartner) - Returns all contracting partners of a contract
* [GetSpacesSpaceIDFoldersIDContractingPartnerSpace](docs/sdk/README.md#getspacesspaceidfoldersidcontractingpartnerspace) - Returns collector space of a contract
* [GetSpacesSpaceIDFoldersIDContractualDocuments](docs/sdk/README.md#getspacesspaceidfoldersidcontractualdocuments) - Returns documents of the folder
* [GetSpacesSpaceIDFoldersIDContractualRelationship](docs/sdk/README.md#getspacesspaceidfoldersidcontractualrelationship) - Returns folder with Id and contractual-relationship data
* [GetSpacesSpaceIDFoldersIDCoporateTaxDeclarations](docs/sdk/README.md#getspacesspaceidfoldersidcoporatetaxdeclarations) - Returns corporate tax declarations
* [GetSpacesSpaceIDFoldersIDCustomer](docs/sdk/README.md#getspacesspaceidfoldersidcustomer) - Returns folder with Id and customer data
* [GetSpacesSpaceIDFoldersIDDeliveriesJournal](docs/sdk/README.md#getspacesspaceidfoldersiddeliveriesjournal) - journal of documents delivered to a customer
* [GetSpacesSpaceIDFoldersIDDocuments](docs/sdk/README.md#getspacesspaceidfoldersiddocuments) - Returns documents of the folder
* [GetSpacesSpaceIDFoldersIDEmployee](docs/sdk/README.md#getspacesspaceidfoldersidemployee) - Returns folder with Id and employee data
* [GetSpacesSpaceIDFoldersIDExpenseProofs](docs/sdk/README.md#getspacesspaceidfoldersidexpenseproofs) - Returns expense proofs of the folder (social, followup or exchange)
* [GetSpacesSpaceIDFoldersIDExpenseReports](docs/sdk/README.md#getspacesspaceidfoldersidexpensereports) - Returns expense reports of the folder (social or followup)
* [GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofs](docs/sdk/README.md#getspacesspaceidfoldersidexpensereportsexpensereportidexpenseproofs) - Returns expense proofs linked to the expenseReportId
* [GetSpacesSpaceIDFoldersIDInsurance](docs/sdk/README.md#getspacesspaceidfoldersidinsurance) - Returns folder with Id and insurance data
* [GetSpacesSpaceIDFoldersIDInvoices](docs/sdk/README.md#getspacesspaceidfoldersidinvoices) - Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* [GetSpacesSpaceIDFoldersIDLegalEntity](docs/sdk/README.md#getspacesspaceidfoldersidlegalentity) - Returns legal entity of a follow up folder
* [GetSpacesSpaceIDFoldersIDLoan](docs/sdk/README.md#getspacesspaceidfoldersidloan) - Returns folder with Id and loan data
* [GetSpacesSpaceIDFoldersIDMessages](docs/sdk/README.md#getspacesspaceidfoldersidmessages) - Returns messages of the folder
* [GetSpacesSpaceIDFoldersIDMessagesMessageID](docs/sdk/README.md#getspacesspaceidfoldersidmessagesmessageid) - Returns message with Id
* [GetSpacesSpaceIDFoldersIDNominativeSocialDeclarations](docs/sdk/README.md#getspacesspaceidfoldersidnominativesocialdeclarations) - Returns nominative social declarations of the folder social
* [GetSpacesSpaceIDFoldersIDOtherTaxes](docs/sdk/README.md#getspacesspaceidfoldersidothertaxes) - Returns other taxes declarations
* [GetSpacesSpaceIDFoldersIDPasswords](docs/sdk/README.md#getspacesspaceidfoldersidpasswords) - Returns identifiers/passwords of the folder
* [GetSpacesSpaceIDFoldersIDPasswordsPasswordID](docs/sdk/README.md#getspacesspaceidfoldersidpasswordspasswordid) - Returns password with Id
* [GetSpacesSpaceIDFoldersIDPayrolls](docs/sdk/README.md#getspacesspaceidfoldersidpayrolls) - Returns payrolls of the folder social
* [GetSpacesSpaceIDFoldersIDPayslips](docs/sdk/README.md#getspacesspaceidfoldersidpayslips) - Returns payslips of the folder employee
* [GetSpacesSpaceIDFoldersIDProvider](docs/sdk/README.md#getspacesspaceidfoldersidprovider) - Returns folder with Id and provider data
* [GetSpacesSpaceIDFoldersIDRequiredDocuments](docs/sdk/README.md#getspacesspaceidfoldersidrequireddocuments) - list of the required documents for a person
* [GetSpacesSpaceIDFoldersIDSections](docs/sdk/README.md#getspacesspaceidfoldersidsections) - Returns sections of the folder
* [GetSpacesSpaceIDFoldersIDSocialContracts](docs/sdk/README.md#getspacesspaceidfoldersidsocialcontracts) - Returns social contracts of the folder employee
* [GetSpacesSpaceIDFoldersIDSocialDeclarations](docs/sdk/README.md#getspacesspaceidfoldersidsocialdeclarations) - Returns social declarations
* [GetSpacesSpaceIDFoldersIDSocialRegimes](docs/sdk/README.md#getspacesspaceidfoldersidsocialregimes) - Returns folder with Id and social regime data
* [GetSpacesSpaceIDFoldersIDSumInvoices](docs/sdk/README.md#getspacesspaceidfoldersidsuminvoices) - Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* [GetSpacesSpaceIDFoldersIDVatDeclarations](docs/sdk/README.md#getspacesspaceidfoldersidvatdeclarations) - Returns vat declarations
* [GetSpacesSpaceIDFoldersIDDocumentClass](docs/sdk/README.md#getspacesspaceidfoldersiddocumentclass) - Returns document of documentClass (without specific data) of the folder
* [GetSpacesSpaceIDLegalEntitiesIDBanks](docs/sdk/README.md#getspacesspaceidlegalentitiesidbanks) - Returns list of bank folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDBanksAll](docs/sdk/README.md#getspacesspaceidlegalentitiesidbanksall) - Returns folder of the banks even archived
* [GetSpacesSpaceIDLegalEntitiesIDContracts](docs/sdk/README.md#getspacesspaceidlegalentitiesidcontracts) - Returns all contract folders of the legal entity
* [GetSpacesSpaceIDLegalEntitiesIDContractualRelationships](docs/sdk/README.md#getspacesspaceidlegalentitiesidcontractualrelationships) - Returns folder of the others contract with legal entity
* [GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsAll](docs/sdk/README.md#getspacesspaceidlegalentitiesidcontractualrelationshipsall) - Returns folder of the others contract with legal entity (even archived)
* [GetSpacesSpaceIDLegalEntitiesIDCustomers](docs/sdk/README.md#getspacesspaceidlegalentitiesidcustomers) - Returns folder of the customer
* [GetSpacesSpaceIDLegalEntitiesIDCustomersAll](docs/sdk/README.md#getspacesspaceidlegalentitiesidcustomersall) - Returns folder of the customers (even archived)
* [GetSpacesSpaceIDLegalEntitiesIDInsurances](docs/sdk/README.md#getspacesspaceidlegalentitiesidinsurances) - Returns list of insurance folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDInsurancesAll](docs/sdk/README.md#getspacesspaceidlegalentitiesidinsurancesall) - Returns folder of the insurances even archived
* [GetSpacesSpaceIDLegalEntitiesIDLoans](docs/sdk/README.md#getspacesspaceidlegalentitiesidloans) - Returns folder of the loan
* [GetSpacesSpaceIDLegalEntitiesIDLoansAll](docs/sdk/README.md#getspacesspaceidlegalentitiesidloansall) - Returns folder of the loans even archived
* [GetSpacesSpaceIDLegalEntitiesIDProviders](docs/sdk/README.md#getspacesspaceidlegalentitiesidproviders) - Returns list of providers folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDProvidersAll](docs/sdk/README.md#getspacesspaceidlegalentitiesidprovidersall) - Returns folder of the providers even archived
* [GetSpacesSpaceIDLegalEntitiesIDSocialRegimes](docs/sdk/README.md#getspacesspaceidlegalentitiesidsocialregimes) - Returns list of social regimes folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDSocialRegimesAll](docs/sdk/README.md#getspacesspaceidlegalentitiesidsocialregimesall) - Returns folder of the social regimes even archived
* [GetSpacesSpaceIDLoans](docs/sdk/README.md#getspacesspaceidloans) - Returns list of all loan folders of the space
* [GetSpacesSpaceIDLoansAll](docs/sdk/README.md#getspacesspaceidloansall) - Returns list of all loan folders even archived of the space
* [GetSpacesSpaceIDPersonsIDEmployees](docs/sdk/README.md#getspacesspaceidpersonsidemployees) - Returns folder of the employee
* [GetSpacesSpaceIDPersonsIDEmployeesAll](docs/sdk/README.md#getspacesspaceidpersonsidemployeesall) - Returns folder of all employees (even archived)
* [GetSpacesSpaceIDPersonsIDExchange](docs/sdk/README.md#getspacesspaceidpersonsidexchange) - Returns folder exchange of the person
* [GetSpacesSpaceIDPersonsIDFollowUps](docs/sdk/README.md#getspacesspaceidpersonsidfollowups) - Returns folder of the person
* [GetSpacesSpaceIDPersonsIDInvitation](docs/sdk/README.md#getspacesspaceidpersonsidinvitation) - Returns invitation of a person
* [GetSpacesSpaceIDPersonsMemberIDFoldersID](docs/sdk/README.md#getspacesspaceidpersonsmemberidfoldersid) - Returns folderId with the access of the person
* [GetSpacesSpaceIDProviders](docs/sdk/README.md#getspacesspaceidproviders) - Returns folder with Id and provider data
* [GetSpacesSpaceIDProvidersAll](docs/sdk/README.md#getspacesspaceidprovidersall) - Returns folder with Id and provider data (even archived)
* [GetSpacesSpaceIDSocialRegimes](docs/sdk/README.md#getspacesspaceidsocialregimes) - Returns folder with Id and social regime data
* [GetSpacesSpaceIDSocialRegimesAll](docs/sdk/README.md#getspacesspaceidsocialregimesall) - Returns folder with Id and social regime data (even archived)
* [GetSpacesSpaceIDSpacesInvoicings](docs/sdk/README.md#getspacesspaceidspacesinvoicings) - Returns CSV Invoicings of the spaces for the account of the spaceId
* [PatchBusinessGroups](docs/sdk/README.md#patchbusinessgroups) - Modifies an object
* [PatchProfileEmail](docs/sdk/README.md#patchprofileemail) - modify email of profile
* [PatchProfileMobile](docs/sdk/README.md#patchprofilemobile) - modify mobile of profile
* [PatchProfileJSON](docs/sdk/README.md#patchprofilejson) - modify infos of profile
* [PatchProfileMultipart](docs/sdk/README.md#patchprofilemultipart) - modify infos of profile
* [PatchSpacesID](docs/sdk/README.md#patchspacesid) - Modify a Space (except private)
* [PatchSpacesIDCompanyEntitiesCompanyID](docs/sdk/README.md#patchspacesidcompanyentitiescompanyid) - Modify a company entity
* [PatchSpacesIDFoldersFolderIDPersonsMemberID](docs/sdk/README.md#patchspacesidfoldersfolderidpersonsmemberid) - Add/Modify/Delete a person in a customer contract (except manager)
* [PatchSpacesIDFoldersFolderIDPersonsMemberIDActiveaccess](docs/sdk/README.md#patchspacesidfoldersfolderidpersonsmemberidactiveaccess) - open an access
* [PatchSpacesIDFoldersFolderIDPersonsMemberIDUnactiveaccess](docs/sdk/README.md#patchspacesidfoldersfolderidpersonsmemberidunactiveaccess) - close an access
* [PatchSpacesIDGroupsGroupID](docs/sdk/README.md#patchspacesidgroupsgroupid) - Modify a group
* [PatchSpacesIDGroupsGroupIDFoldersFolderID](docs/sdk/README.md#patchspacesidgroupsgroupidfoldersfolderid) - Add access to a folder for a group
* [PatchSpacesIDGroupsGroupIDPersonsMemberID](docs/sdk/README.md#patchspacesidgroupsgroupidpersonsmemberid) - Add a person to a group
* [PatchSpacesIDLegal](docs/sdk/README.md#patchspacesidlegal) - Modify legal information of a Space (except private)
* [PatchSpacesIDPersonsMemberIDPlayer](docs/sdk/README.md#patchspacesidpersonsmemberidplayer) - Modify the role of a person
* [PatchSpacesIDPersonsPersonID](docs/sdk/README.md#patchspacesidpersonspersonid) - Modify a person
* [PatchSpacesIDPortfoliosPortfolioIDPersonsMemberID](docs/sdk/README.md#patchspacesidportfoliosportfolioidpersonsmemberid) - Add/Modify/Delete a person in a portfolio (except manager)
* [PatchSpacesSpaceIDCommonFoldersID](docs/sdk/README.md#patchspacesspaceidcommonfoldersid) - Modify a common folder
* [PatchSpacesSpaceIDDocumentsDocumentID](docs/sdk/README.md#patchspacesspaceiddocumentsdocumentid) - modify a doc
* [PatchSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidbankstatementsdocumentid) - modify a bank statement
* [PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidcontractualdocumentsdocumentid) - modify a contractual document
* [PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidcorporatetaxdeclarationsdocumentid) - modify a coporate tax declaration
* [PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidexpenseproofsdocumentid) - modify an expense report
* [PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidexpensereportsdocumentid) - modify an expense report
* [PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidinvoicesdocumentid) - modify a invoice
* [PatchSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidothertaxesdocumentid) - modify an other tax declaration
* [PatchSpacesSpaceIDFoldersFolderIDPayrollsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidpayrollsdocumentid) - modify a payroll
* [PatchSpacesSpaceIDFoldersFolderIDPayslipsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidpayslipsdocumentid) - modify a payslip
* [PatchSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidsocialcontractsdocumentid) - modify a social contract
* [PatchSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidsocialdeclarationsdocumentid) - modify a social declaration
* [PatchSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID](docs/sdk/README.md#patchspacesspaceidfoldersfolderidvatdeclarationsdocumentid) - modify a vat declaration
* [PatchSpacesSpaceIDFoldersID](docs/sdk/README.md#patchspacesspaceidfoldersid) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)
* [PatchSpacesSpaceIDFoldersIDAccountingYear](docs/sdk/README.md#patchspacesspaceidfoldersidaccountingyear) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data
* [PatchSpacesSpaceIDFoldersIDBank](docs/sdk/README.md#patchspacesspaceidfoldersidbank) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* [PatchSpacesSpaceIDFoldersIDCollectiveDecision](docs/sdk/README.md#patchspacesspaceidfoldersidcollectivedecision) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data
* [PatchSpacesSpaceIDFoldersIDCustomer](docs/sdk/README.md#patchspacesspaceidfoldersidcustomer) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data
* [PatchSpacesSpaceIDFoldersIDDocumentsDocumentIDDetach](docs/sdk/README.md#patchspacesspaceidfoldersiddocumentsdocumentiddetach) - Detach a doc of a folder
* [PatchSpacesSpaceIDFoldersIDEmployee](docs/sdk/README.md#patchspacesspaceidfoldersidemployee) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* [PatchSpacesSpaceIDFoldersIDInsurance](docs/sdk/README.md#patchspacesspaceidfoldersidinsurance) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* [PatchSpacesSpaceIDFoldersIDLoan](docs/sdk/README.md#patchspacesspaceidfoldersidloan) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* [PatchSpacesSpaceIDFoldersIDMessagesMessageID](docs/sdk/README.md#patchspacesspaceidfoldersidmessagesmessageid) - Modify a Message
* [PatchSpacesSpaceIDFoldersIDPasswordsPasswordID](docs/sdk/README.md#patchspacesspaceidfoldersidpasswordspasswordid) - Modify a Password
* [PatchSpacesSpaceIDFoldersIDProfessionalVehicle](docs/sdk/README.md#patchspacesspaceidfoldersidprofessionalvehicle) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data
* [PatchSpacesSpaceIDFoldersIDProvider](docs/sdk/README.md#patchspacesspaceidfoldersidprovider) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data
* [PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentid](docs/sdk/README.md#patchspacesspaceidfoldersidrequireddocumentsrequireddocumentid) - Modify the status of a requireddocument
* [PatchSpacesSpaceIDFoldersIDSocialRegimes](docs/sdk/README.md#patchspacesspaceidfoldersidsocialregimes) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data
* [PatchSpacesSpaceIDFoldersIDTaxContract](docs/sdk/README.md#patchspacesspaceidfoldersidtaxcontract) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data
* [PatchSpacesSpaceIDPersonsIDCallForDocument](docs/sdk/README.md#patchspacesspaceidpersonsidcallfordocument) - modify the invitation of a person to collect documents
* [PatchSpacesSpaceIDPersonsIDGuestInSpace](docs/sdk/README.md#patchspacesspaceidpersonsidguestinspace) - invite a person in a space
* [PatchSpacesSpaceIDPersonsIDInvitation](docs/sdk/README.md#patchspacesspaceidpersonsidinvitation) - modify an invitation
* [PatchSpacesSpaceIDPersonsMemberIDFoldersID](docs/sdk/README.md#patchspacesspaceidpersonsmemberidfoldersid) - Modify an access
* [PostBusinessGroups](docs/sdk/README.md#postbusinessgroups) - Adds a group (only for managers and ADN collaborators)
* [PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpace](docs/sdk/README.md#postbusinessgroupsidspacesspaceidlegalentitiespersonidcustomersfolderidguestinspace) - send an invitation to manager the private space of personId
* [PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpaces](docs/sdk/README.md#postbusinessgroupsidspacesspaceidlegalentitiespersonidcustomersfolderidspaces) - Add a Space in a group
* [PostHubDocumentsJSON](docs/sdk/README.md#posthubdocumentsjson) - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubDocumentsMultipart](docs/sdk/README.md#posthubdocumentsmultipart) - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubPayslipsJSON](docs/sdk/README.md#posthubpayslipsjson) - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubPayslipsMultipart](docs/sdk/README.md#posthubpayslipsmultipart) - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubSpacesSpaceIDDocumentsJSON](docs/sdk/README.md#posthubspacesspaceiddocumentsjson) - Add a document in a space (this document is analyzed to be saved in the correct folder)
* [PostHubSpacesSpaceIDDocumentsMultipart](docs/sdk/README.md#posthubspacesspaceiddocumentsmultipart) - Add a document in a space (this document is analyzed to be saved in the correct folder)
* [PostHubSpacesSpaceIDPayslipsJSON](docs/sdk/README.md#posthubspacesspaceidpayslipsjson) - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* [PostHubSpacesSpaceIDPayslipsMultipart](docs/sdk/README.md#posthubspacesspaceidpayslipsmultipart) - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* [PostMenusMenuIDDocumentsJSON](docs/sdk/README.md#postmenusmenuiddocumentsjson) - add a document to the target menuId
* [PostMenusMenuIDDocumentsMultipart](docs/sdk/README.md#postmenusmenuiddocumentsmultipart) - add a document to the target menuId
* [PostProfileJSON](docs/sdk/README.md#postprofilejson) - create infos of profile
* [PostProfileMultipart](docs/sdk/README.md#postprofilemultipart) - create infos of profile
* [PostRegistration](docs/sdk/README.md#postregistration) - complete the invitation
* [PostSpaces](docs/sdk/README.md#postspaces) - Add a Space in my group
* [PostSpacesIDAccountingYear](docs/sdk/README.md#postspacesidaccountingyear) - Create a accounting year for the space id
* [PostSpacesIDCollectiveDecision](docs/sdk/README.md#postspacesidcollectivedecision) - Create a colletive decision for the space id
* [PostSpacesIDCompanyEntities](docs/sdk/README.md#postspacesidcompanyentities) - Add a Company Entity in a Space
* [PostSpacesIDCompanyEntitiesPersonIDDetails](docs/sdk/README.md#postspacesidcompanyentitiespersoniddetails) - Replace or Add a contact detail for a person
* [PostSpacesIDDocumentsDownload](docs/sdk/README.md#postspacesiddocumentsdownload) - create an archive with documents
* [PostSpacesIDFoldersFolderIDPersonsPersonIDGuestInSpace](docs/sdk/README.md#postspacesidfoldersfolderidpersonspersonidguestinspace) - invite a owner in a space
* [PostSpacesIDGroups](docs/sdk/README.md#postspacesidgroups) - Add a group in a Space
* [PostSpacesIDPersons](docs/sdk/README.md#postspacesidpersons) - Add a Person in a Space
* [PostSpacesIDPersonsPersonIDDetails](docs/sdk/README.md#postspacesidpersonspersoniddetails) - Replace or Add a contact detail for a person
* [PostSpacesIDPersonsPersonIDPortfolios](docs/sdk/README.md#postspacesidpersonspersonidportfolios) - Create a portfolio for the person personId
* [PostSpacesIDProfessionalVehicles](docs/sdk/README.md#postspacesidprofessionalvehicles) - Create a professional vehicle for the space
* [PostSpacesIDSettingsNf203Logs](docs/sdk/README.md#postspacesidsettingsnf203logs) - Enable/Disable logs
* [PostSpacesIDStatus](docs/sdk/README.md#postspacesidstatus) - Replace or Add a status
* [PostSpacesIDTaxContracts](docs/sdk/README.md#postspacesidtaxcontracts) - Create a tax contract for the space
* [PostSpacesIDTriggersName](docs/sdk/README.md#postspacesidtriggersname) - Creates a trigger for the space id
* [PostSpacesSpaceIDDocumentsDocumentIDExtend](docs/sdk/README.md#postspacesspaceiddocumentsdocumentidextend) - Add a data to a document
* [PostSpacesSpaceIDDocumentsDocumentIDMailing](docs/sdk/README.md#postspacesspaceiddocumentsdocumentidmailing) - send by mail a document
* [PostSpacesSpaceIDDocumentsDocumentIDVersionsJSON](docs/sdk/README.md#postspacesspaceiddocumentsdocumentidversionsjson) - Add a version to a document and set it as current
* [PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipart](docs/sdk/README.md#postspacesspaceiddocumentsdocumentidversionsmultipart) - Add a version to a document and set it as current
* [PostSpacesSpaceIDExtend](docs/sdk/README.md#postspacesspaceidextend) - Add a data to a space
* [PostSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRefresh](docs/sdk/README.md#postspacesspaceidfoldersfolderidpayrollsdocumentidrefresh) - recalculate a payroll
* [PostSpacesSpaceIDFoldersIDBankStatementsJSON](docs/sdk/README.md#postspacesspaceidfoldersidbankstatementsjson) - Add a bank statement in a folder bank
* [PostSpacesSpaceIDFoldersIDBankStatementsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidbankstatementsmultipart) - Add a bank statement in a folder bank
* [PostSpacesSpaceIDFoldersIDCommonFolders](docs/sdk/README.md#postspacesspaceidfoldersidcommonfolders) - Add a common folder in another folder
* [PostSpacesSpaceIDFoldersIDContractualDocumentsJSON](docs/sdk/README.md#postspacesspaceidfoldersidcontractualdocumentsjson) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDContractualDocumentsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidcontractualdocumentsmultipart) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSON](docs/sdk/README.md#postspacesspaceidfoldersidcoporatetaxdeclarationsjson) - Add a corporate tax declaration
* [PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidcoporatetaxdeclarationsmultipart) - Add a corporate tax declaration
* [PostSpacesSpaceIDFoldersIDDocumentsJSON](docs/sdk/README.md#postspacesspaceidfoldersiddocumentsjson) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDDocumentsMultipart](docs/sdk/README.md#postspacesspaceidfoldersiddocumentsmultipart) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDExpenseProofsJSON](docs/sdk/README.md#postspacesspaceidfoldersidexpenseproofsjson) - Add a expense proof in a folder followup or exchange
* [PostSpacesSpaceIDFoldersIDExpenseProofsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidexpenseproofsmultipart) - Add a expense proof in a folder followup or exchange
* [PostSpacesSpaceIDFoldersIDExpenseReportsJSON](docs/sdk/README.md#postspacesspaceidfoldersidexpensereportsjson) - Add a expense report in a folder followup
* [PostSpacesSpaceIDFoldersIDExpenseReportsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidexpensereportsmultipart) - Add a expense report in a folder followup
* [PostSpacesSpaceIDFoldersIDInvoicesJSON](docs/sdk/README.md#postspacesspaceidfoldersidinvoicesjson) - Add a invoice in a folder of a customer or a provider
* [PostSpacesSpaceIDFoldersIDInvoicesMultipart](docs/sdk/README.md#postspacesspaceidfoldersidinvoicesmultipart) - Add a invoice in a folder of a customer or a provider
* [PostSpacesSpaceIDFoldersIDMessages](docs/sdk/README.md#postspacesspaceidfoldersidmessages) - Write a message in the journal of a folder
* [PostSpacesSpaceIDFoldersIDOtherTaxesJSON](docs/sdk/README.md#postspacesspaceidfoldersidothertaxesjson) - Add a tax declaration
* [PostSpacesSpaceIDFoldersIDOtherTaxesMultipart](docs/sdk/README.md#postspacesspaceidfoldersidothertaxesmultipart) - Add a tax declaration
* [PostSpacesSpaceIDFoldersIDPasswords](docs/sdk/README.md#postspacesspaceidfoldersidpasswords) - Write a identifier/password in aa folder
* [PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSON](docs/sdk/README.md#postspacesspaceidfoldersidpayrollspayrollidnominativesocialdeclarationjson) - Add a nominative social declaration in a folder social
* [PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipart](docs/sdk/README.md#postspacesspaceidfoldersidpayrollspayrollidnominativesocialdeclarationmultipart) - Add a nominative social declaration in a folder social
* [PostSpacesSpaceIDFoldersIDPayrollsJSON](docs/sdk/README.md#postspacesspaceidfoldersidpayrollsjson) - Add a payroll in a folder social
* [PostSpacesSpaceIDFoldersIDPayrollsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidpayrollsmultipart) - Add a payroll in a folder social
* [PostSpacesSpaceIDFoldersIDPayslipsJSON](docs/sdk/README.md#postspacesspaceidfoldersidpayslipsjson) - Add a payslip in a folder employee
* [PostSpacesSpaceIDFoldersIDPayslipsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidpayslipsmultipart) - Add a payslip in a folder employee
* [PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSON](docs/sdk/README.md#postspacesspaceidfoldersidrequireddocumentsrequireddocumentidjson) - Add a required document to a line
* [PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipart](docs/sdk/README.md#postspacesspaceidfoldersidrequireddocumentsrequireddocumentidmultipart) - Add a required document to a line
* [PostSpacesSpaceIDFoldersIDSocialContractsJSON](docs/sdk/README.md#postspacesspaceidfoldersidsocialcontractsjson) - Add a social contract in a folder employee
* [PostSpacesSpaceIDFoldersIDSocialContractsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidsocialcontractsmultipart) - Add a social contract in a folder employee
* [PostSpacesSpaceIDFoldersIDSocialDeclarationsJSON](docs/sdk/README.md#postspacesspaceidfoldersidsocialdeclarationsjson) - Add a social declaration
* [PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidsocialdeclarationsmultipart) - Add a social declaration
* [PostSpacesSpaceIDFoldersIDVatDeclarationsJSON](docs/sdk/README.md#postspacesspaceidfoldersidvatdeclarationsjson) - Add a vat declaration
* [PostSpacesSpaceIDFoldersIDVatDeclarationsMultipart](docs/sdk/README.md#postspacesspaceidfoldersidvatdeclarationsmultipart) - Add a vat declaration
* [PostSpacesSpaceIDFoldersIDDocumentClassJSON](docs/sdk/README.md#postspacesspaceidfoldersiddocumentclassjson) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDDocumentClassMultipart](docs/sdk/README.md#postspacesspaceidfoldersiddocumentclassmultipart) - Add a document in a folder
* [PostSpacesSpaceIDLegalEntitiesIDBanks](docs/sdk/README.md#postspacesspaceidlegalentitiesidbanks) - Add a folder for a bank
* [PostSpacesSpaceIDLegalEntitiesIDCustomers](docs/sdk/README.md#postspacesspaceidlegalentitiesidcustomers) - Add a folder for a customer
* [PostSpacesSpaceIDLegalEntitiesIDInsurances](docs/sdk/README.md#postspacesspaceidlegalentitiesidinsurances) - Add a folder for a insurance
* [PostSpacesSpaceIDLegalEntitiesIDLoans](docs/sdk/README.md#postspacesspaceidlegalentitiesidloans) - Add a folder for a loan
* [PostSpacesSpaceIDLegalEntitiesIDProviders](docs/sdk/README.md#postspacesspaceidlegalentitiesidproviders) - Add a folder for a provider
* [PostSpacesSpaceIDLegalEntitiesIDSocialRegimes](docs/sdk/README.md#postspacesspaceidlegalentitiesidsocialregimes) - Add a folder for a social regime
* [PostSpacesSpaceIDPersonsIDCallForDocument](docs/sdk/README.md#postspacesspaceidpersonsidcallfordocument) - invite a person to collect documents
* [PostSpacesSpaceIDPersonsIDEmployees](docs/sdk/README.md#postspacesspaceidpersonsidemployees) - Add a folder for a employee
* [PostSpacesSpaceIDPersonsIDGuestInSpace](docs/sdk/README.md#postspacesspaceidpersonsidguestinspace) - invite a person in a space
* [PostSpacesSpaceIDPersonsIDInvitation](docs/sdk/README.md#postspacesspaceidpersonsidinvitation) - create an invitation in a space for a person
* [PostSpacesSpaceIDPersonsIDInvitationInvitationIDSend](docs/sdk/README.md#postspacesspaceidpersonsidinvitationinvitationidsend) - send the invitation of a person in a space
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
