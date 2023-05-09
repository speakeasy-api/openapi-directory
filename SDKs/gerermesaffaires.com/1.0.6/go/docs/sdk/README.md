# SDK

## Overview

Sécurisez vos données en interfaçant votre logiciel métier avec le service en ligne GererMesAffaires

Documentation fonctionnelle des API GererMesAffaires
<https://api.gerermesaffaires.com/>
### Available Operations

* [DeleteBusinessGroupsIDSpacesSpaceID](#deletebusinessgroupsidspacesspaceid) - Remove a customer space from partner
* [DeleteSpacesID](#deletespacesid) - Delete a Space (only space not delivered to customer)
* [DeleteSpacesIDCompanyEntitiesPersonIDDetailsDesignation](#deletespacesidcompanyentitiespersoniddetailsdesignation) - delete a contact detail for a company entity
* [DeleteSpacesIDGroupsGroupIDFoldersFolderID](#deletespacesidgroupsgroupidfoldersfolderid) - delete access to a folder for a group
* [DeleteSpacesIDGroupsGroupIDPersonsMemberID](#deletespacesidgroupsgroupidpersonsmemberid) - Delete a person of a group
* [DeleteSpacesIDPersonsPersonID](#deletespacesidpersonspersonid) - delete a person
* [DeleteSpacesIDPersonsPersonIDDetailsDesignation](#deletespacesidpersonspersoniddetailsdesignation) - delete a contact detail for a person
* [DeleteSpacesIDStatusCode](#deletespacesidstatuscode) - delete a status of the space
* [DeleteSpacesIDTriggersName](#deletespacesidtriggersname) - Deletes a trigger for the space id
* [DeleteSpacesSpaceIDCommonFoldersID](#deletespacesspaceidcommonfoldersid) - Delete a common folder
* [DeleteSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID](#deletespacesspaceidfoldersfolderidbankstatementsdocumentid) - delete a bank statement
* [DeleteSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID](#deletespacesspaceidfoldersfolderidcontractualdocumentsdocumentid) - delete a contractual document
* [DeleteSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID](#deletespacesspaceidfoldersfolderidcorporatetaxdeclarationsdocumentid) - delete a corporate tax declaration
* [DeleteSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID](#deletespacesspaceidfoldersfolderidexpenseproofsdocumentid) - delete an expense proof
* [DeleteSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID](#deletespacesspaceidfoldersfolderidexpensereportsdocumentid) - delete an expense report
* [DeleteSpacesSpaceIDFoldersFolderIDInvoicesDocumentID](#deletespacesspaceidfoldersfolderidinvoicesdocumentid) - delete an invoice document
* [DeleteSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID](#deletespacesspaceidfoldersfolderidothertaxesdocumentid) - delete a tax declaration
* [DeleteSpacesSpaceIDFoldersFolderIDPayrollsDocumentID](#deletespacesspaceidfoldersfolderidpayrollsdocumentid) - delete a payroll
* [DeleteSpacesSpaceIDFoldersFolderIDPayslipsDocumentID](#deletespacesspaceidfoldersfolderidpayslipsdocumentid) - delete a payslip
* [DeleteSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID](#deletespacesspaceidfoldersfolderidsocialcontractsdocumentid) - delete a social contract
* [DeleteSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID](#deletespacesspaceidfoldersfolderidsocialdeclarationsdocumentid) - delete a social declaration
* [DeleteSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID](#deletespacesspaceidfoldersfolderidvatdeclarationsdocumentid) - delete a VAT declaration
* [DeleteSpacesSpaceIDFoldersIDAccountingYear](#deletespacesspaceidfoldersidaccountingyear) - delete an AccountingYear
* [DeleteSpacesSpaceIDFoldersIDBank](#deletespacesspaceidfoldersidbank) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* [DeleteSpacesSpaceIDFoldersIDCustomer](#deletespacesspaceidfoldersidcustomer) - delete a customer
* [DeleteSpacesSpaceIDFoldersIDEmployee](#deletespacesspaceidfoldersidemployee) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* [DeleteSpacesSpaceIDFoldersIDInsurance](#deletespacesspaceidfoldersidinsurance) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* [DeleteSpacesSpaceIDFoldersIDLoan](#deletespacesspaceidfoldersidloan) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* [DeleteSpacesSpaceIDFoldersIDPasswordsPasswordID](#deletespacesspaceidfoldersidpasswordspasswordid) - delete a password
* [DeleteSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclaration](#deletespacesspaceidfoldersidpayrollspayrollidnominativesocialdeclaration) - delete a nominative social declaration in a folder social
* [DeleteSpacesSpaceIDFoldersIDPortfolioPortfolioID](#deletespacesspaceidfoldersidportfolioportfolioid) - delete a secondary portfolio of a customer contract
* [DeleteSpacesSpaceIDFoldersIDProfessionalVehicle](#deletespacesspaceidfoldersidprofessionalvehicle) - delete a Professional Vehicle
* [DeleteSpacesSpaceIDFoldersIDProvider](#deletespacesspaceidfoldersidprovider) - delete a provider
* [DeleteSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidDocumentsDocumentID](#deletespacesspaceidfoldersidrequireddocumentsrequireddocumentiddocumentsdocumentid) - delete a document from a required document
* [DeleteSpacesSpaceIDFoldersIDSocialRegimes](#deletespacesspaceidfoldersidsocialregimes) - delete a social regime
* [DeleteSpacesSpaceIDFoldersIDTaxContract](#deletespacesspaceidfoldersidtaxcontract) - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data
* [DeleteSpacesSpaceIDFoldersIDDocumentClass](#deletespacesspaceidfoldersiddocumentclass) - delete a class document
* [DeleteSpacesSpaceIDPersonsIDGuestInSpace](#deletespacesspaceidpersonsidguestinspace) - delete the invitation of a person in a space
* [DeleteSpacesSpaceIDPersonsIDInvitation](#deletespacesspaceidpersonsidinvitation) - delete the invitation of a person in a space
* [GetBoxMenus](#getboxmenus) - Returns predefined folders and workbooks of the Box for all the spaces
* [GetBusinessGroups](#getbusinessgroups) - Returns a list of groups custom ordered by name
* [GetBusinessGroupsAll](#getbusinessgroupsall) - Returns list of groups custom for managers
* [GetBusinessGroupsID](#getbusinessgroupsid) - Returns a group
* [GetBusinessGroupsIDSpaces](#getbusinessgroupsidspaces) - Returns spaces of the business group with id
* [GetHubBusinessGroupsIDMenus](#gethubbusinessgroupsidmenus) - Returns predefined folders and workbooks of the Hub for all the spaces of the business group
* [GetHubMenus](#gethubmenus) - Returns predefined folders and workbooks of the Hub for all the spaces
* [GetHubMenusAll](#gethubmenusall) - Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces
* [GetHubSpacesSpaceIDMenus](#gethubspacesspaceidmenus) - Returns predefined folders and workbooks of the Hub for the space
* [GetMenus](#getmenus) - Returns predefined entries
* [GetProfile](#getprofile) - Returns status of member
* [GetProfileIDFile](#getprofileidfile) - Returns status of member
* [GetRegistration](#getregistration) - Returns the method to get the validation code or the link to register after invitation
* [GetSession](#getsession) - Returns member id of user logged
* [GetSpaces](#getspaces) - Returns spaces of my group
* [GetSpacesAll](#getspacesall) - Returns all spaces
* [GetSpacesID](#getspacesid) - Returns a space
* [GetSpacesIDAccountingYear](#getspacesidaccountingyear) - Returns list of accounting years for the space {id}
* [GetSpacesIDCollectiveDecision](#getspacesidcollectivedecision) - Returns list of collective decisions for the space {id}
* [GetSpacesIDCompanyEntities](#getspacesidcompanyentities) - Returns list of company entities
* [GetSpacesIDCompanyEntitiesAll](#getspacesidcompanyentitiesall) - Returns list of company entities even company entities archived
* [GetSpacesIDCompanyEntitiesCompanyID](#getspacesidcompanyentitiescompanyid) - Returns a compay entity
* [GetSpacesIDCompanyEntitiesPersonIDDetails](#getspacesidcompanyentitiespersoniddetails) - Returns all details of a company entity
* [GetSpacesIDFoldersFolderIDPersonsMemberID](#getspacesidfoldersfolderidpersonsmemberid) - return the access of a person in a customer contract
* [GetSpacesIDGroups](#getspacesidgroups) - Returns list of groups
* [GetSpacesIDGroupsAll](#getspacesidgroupsall) - Returns list of groups even archived of the space
* [GetSpacesIDGroupsGroupID](#getspacesidgroupsgroupid) - Returns a group
* [GetSpacesIDLegal](#getspacesidlegal) - Returns legal information of a space (except private)
* [GetSpacesIDLogo](#getspacesidlogo) - Returns a space with the logo
* [GetSpacesIDPersons](#getspacesidpersons) - Returns list of persons
* [GetSpacesIDPersonsAll](#getspacesidpersonsall) - Returns list of persons even persons archived
* [GetSpacesIDPersonsPersonID](#getspacesidpersonspersonid) - Returns a person
* [GetSpacesIDPersonsPersonIDDetails](#getspacesidpersonspersoniddetails) - Returns all details of a person
* [GetSpacesIDPersonsPersonIDFolders](#getspacesidpersonspersonidfolders) - Returns list of folders with exceptionnal access of the person personId
* [GetSpacesIDPersonsPersonIDGroups](#getspacesidpersonspersonidgroups) - Returns list of groups of the person personId
* [GetSpacesIDPersonsPersonIDPortfolios](#getspacesidpersonspersonidportfolios) - Returns list of portfolios of the person personId
* [GetSpacesIDProfessionalVehicles](#getspacesidprofessionalvehicles) - Returns list of professionalvehicles for the space {id}
* [GetSpacesIDSettingsNf203Logs](#getspacesidsettingsnf203logs) - Returns state of activation of logs
* [GetSpacesIDStatus](#getspacesidstatus) - Returns all status of the space
* [GetSpacesIDTaxContracts](#getspacesidtaxcontracts) - Returns list of tax contracts for the space {id}
* [GetSpacesIDTriggers](#getspacesidtriggers) - Returns list of triggers for the space {id}
* [GetSpacesSpaceIDCompanyEntitiesIDFollowUps](#getspacesspaceidcompanyentitiesidfollowups) - Returns folder of the company entity
* [GetSpacesSpaceIDCustomers](#getspacesspaceidcustomers) - Returns folder with Id and customer data
* [GetSpacesSpaceIDCustomersAll](#getspacesspaceidcustomersall) - Returns folder with Id and customer data (even archived)
* [GetSpacesSpaceIDDocuments](#getspacesspaceiddocuments) - Returns documents of the folder
* [GetSpacesSpaceIDDocumentsDocumentIDExtend](#getspacesspaceiddocumentsdocumentidextend) - read the data of a document
* [GetSpacesSpaceIDDocumentsDocumentIDFolders](#getspacesspaceiddocumentsdocumentidfolders) - Returns versions of the document
* [GetSpacesSpaceIDDocumentsDocumentIDMailingprice](#getspacesspaceiddocumentsdocumentidmailingprice) - returns the number of pages and the price of the pdf to send by mail
* [GetSpacesSpaceIDDocumentsDocumentIDVersions](#getspacesspaceiddocumentsdocumentidversions) - Returns versions of the document
* [GetSpacesSpaceIDDocumentsDocumentIDVersionsCurrent](#getspacesspaceiddocumentsdocumentidversionscurrent) - Returns current version of the document
* [GetSpacesSpaceIDDocumentsIDAccess](#getspacesspaceiddocumentsidaccess) - Returns accesses of one document
* [GetSpacesSpaceIDDocumentsIDAccounting](#getspacesspaceiddocumentsidaccounting) - Returns the document with the accounting property
* [GetSpacesSpaceIDDocumentsIDDownload](#getspacesspaceiddocumentsiddownload) - Returns content of one document
* [GetSpacesSpaceIDEmployees](#getspacesspaceidemployees) - Returns folders with Id and employee data
* [GetSpacesSpaceIDEmployeesAll](#getspacesspaceidemployeesall) - Returns folders with Id and employee data (even archived)
* [GetSpacesSpaceIDEmployers](#getspacesspaceidemployers) - Returns folders with Id and employer data
* [GetSpacesSpaceIDEmployersAll](#getspacesspaceidemployersall) - Returns folders with Id and employer data (even archived)
* [GetSpacesSpaceIDExtend](#getspacesspaceidextend) - read the data of a space
* [GetSpacesSpaceIDFolders](#getspacesspaceidfolders) - Returns folders of the space
* [GetSpacesSpaceIDFoldersAll](#getspacesspaceidfoldersall) - Returns folders of the space (even archived)
* [GetSpacesSpaceIDFoldersFolderIDNominativeSocialDeclarationsDocumentID](#getspacesspaceidfoldersfolderidnominativesocialdeclarationsdocumentid) - get a nominative social declaration
* [GetSpacesSpaceIDFoldersID](#getspacesspaceidfoldersid) - Returns folder with Id
* [GetSpacesSpaceIDFoldersIDAccountings](#getspacesspaceidfoldersidaccountings) - Returns accountings documents of the folder (results and taxation or accountingyear)
* [GetSpacesSpaceIDFoldersIDAccountingsJournal](#getspacesspaceidfoldersidaccountingsjournal) - journal of accountings document delivered to a customer
* [GetSpacesSpaceIDFoldersIDBank](#getspacesspaceidfoldersidbank) - Returns folder with Id and bank data
* [GetSpacesSpaceIDFoldersIDBankStatements](#getspacesspaceidfoldersidbankstatements) - Returns bank statements of the folder bank
* [GetSpacesSpaceIDFoldersIDCommonFolders](#getspacesspaceidfoldersidcommonfolders) - Returns common folders of a folder
* [GetSpacesSpaceIDFoldersIDCommonFoldersAll](#getspacesspaceidfoldersidcommonfoldersall) - Returns common folders (even archived) of a folder
* [GetSpacesSpaceIDFoldersIDContractingPartner](#getspacesspaceidfoldersidcontractingpartner) - Returns all contracting partners of a contract
* [GetSpacesSpaceIDFoldersIDContractingPartnerSpace](#getspacesspaceidfoldersidcontractingpartnerspace) - Returns collector space of a contract
* [GetSpacesSpaceIDFoldersIDContractualDocuments](#getspacesspaceidfoldersidcontractualdocuments) - Returns documents of the folder
* [GetSpacesSpaceIDFoldersIDContractualRelationship](#getspacesspaceidfoldersidcontractualrelationship) - Returns folder with Id and contractual-relationship data
* [GetSpacesSpaceIDFoldersIDCoporateTaxDeclarations](#getspacesspaceidfoldersidcoporatetaxdeclarations) - Returns corporate tax declarations
* [GetSpacesSpaceIDFoldersIDCustomer](#getspacesspaceidfoldersidcustomer) - Returns folder with Id and customer data
* [GetSpacesSpaceIDFoldersIDDeliveriesJournal](#getspacesspaceidfoldersiddeliveriesjournal) - journal of documents delivered to a customer
* [GetSpacesSpaceIDFoldersIDDocuments](#getspacesspaceidfoldersiddocuments) - Returns documents of the folder
* [GetSpacesSpaceIDFoldersIDEmployee](#getspacesspaceidfoldersidemployee) - Returns folder with Id and employee data
* [GetSpacesSpaceIDFoldersIDExpenseProofs](#getspacesspaceidfoldersidexpenseproofs) - Returns expense proofs of the folder (social, followup or exchange)
* [GetSpacesSpaceIDFoldersIDExpenseReports](#getspacesspaceidfoldersidexpensereports) - Returns expense reports of the folder (social or followup)
* [GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofs](#getspacesspaceidfoldersidexpensereportsexpensereportidexpenseproofs) - Returns expense proofs linked to the expenseReportId
* [GetSpacesSpaceIDFoldersIDInsurance](#getspacesspaceidfoldersidinsurance) - Returns folder with Id and insurance data
* [GetSpacesSpaceIDFoldersIDInvoices](#getspacesspaceidfoldersidinvoices) - Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* [GetSpacesSpaceIDFoldersIDLegalEntity](#getspacesspaceidfoldersidlegalentity) - Returns legal entity of a follow up folder
* [GetSpacesSpaceIDFoldersIDLoan](#getspacesspaceidfoldersidloan) - Returns folder with Id and loan data
* [GetSpacesSpaceIDFoldersIDMessages](#getspacesspaceidfoldersidmessages) - Returns messages of the folder
* [GetSpacesSpaceIDFoldersIDMessagesMessageID](#getspacesspaceidfoldersidmessagesmessageid) - Returns message with Id
* [GetSpacesSpaceIDFoldersIDNominativeSocialDeclarations](#getspacesspaceidfoldersidnominativesocialdeclarations) - Returns nominative social declarations of the folder social
* [GetSpacesSpaceIDFoldersIDOtherTaxes](#getspacesspaceidfoldersidothertaxes) - Returns other taxes declarations
* [GetSpacesSpaceIDFoldersIDPasswords](#getspacesspaceidfoldersidpasswords) - Returns identifiers/passwords of the folder
* [GetSpacesSpaceIDFoldersIDPasswordsPasswordID](#getspacesspaceidfoldersidpasswordspasswordid) - Returns password with Id
* [GetSpacesSpaceIDFoldersIDPayrolls](#getspacesspaceidfoldersidpayrolls) - Returns payrolls of the folder social
* [GetSpacesSpaceIDFoldersIDPayslips](#getspacesspaceidfoldersidpayslips) - Returns payslips of the folder employee
* [GetSpacesSpaceIDFoldersIDProvider](#getspacesspaceidfoldersidprovider) - Returns folder with Id and provider data
* [GetSpacesSpaceIDFoldersIDRequiredDocuments](#getspacesspaceidfoldersidrequireddocuments) - list of the required documents for a person
* [GetSpacesSpaceIDFoldersIDSections](#getspacesspaceidfoldersidsections) - Returns sections of the folder
* [GetSpacesSpaceIDFoldersIDSocialContracts](#getspacesspaceidfoldersidsocialcontracts) - Returns social contracts of the folder employee
* [GetSpacesSpaceIDFoldersIDSocialDeclarations](#getspacesspaceidfoldersidsocialdeclarations) - Returns social declarations
* [GetSpacesSpaceIDFoldersIDSocialRegimes](#getspacesspaceidfoldersidsocialregimes) - Returns folder with Id and social regime data
* [GetSpacesSpaceIDFoldersIDSumInvoices](#getspacesspaceidfoldersidsuminvoices) - Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* [GetSpacesSpaceIDFoldersIDVatDeclarations](#getspacesspaceidfoldersidvatdeclarations) - Returns vat declarations
* [GetSpacesSpaceIDFoldersIDDocumentClass](#getspacesspaceidfoldersiddocumentclass) - Returns document of documentClass (without specific data) of the folder
* [GetSpacesSpaceIDLegalEntitiesIDBanks](#getspacesspaceidlegalentitiesidbanks) - Returns list of bank folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDBanksAll](#getspacesspaceidlegalentitiesidbanksall) - Returns folder of the banks even archived
* [GetSpacesSpaceIDLegalEntitiesIDContracts](#getspacesspaceidlegalentitiesidcontracts) - Returns all contract folders of the legal entity
* [GetSpacesSpaceIDLegalEntitiesIDContractualRelationships](#getspacesspaceidlegalentitiesidcontractualrelationships) - Returns folder of the others contract with legal entity
* [GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsAll](#getspacesspaceidlegalentitiesidcontractualrelationshipsall) - Returns folder of the others contract with legal entity (even archived)
* [GetSpacesSpaceIDLegalEntitiesIDCustomers](#getspacesspaceidlegalentitiesidcustomers) - Returns folder of the customer
* [GetSpacesSpaceIDLegalEntitiesIDCustomersAll](#getspacesspaceidlegalentitiesidcustomersall) - Returns folder of the customers (even archived)
* [GetSpacesSpaceIDLegalEntitiesIDInsurances](#getspacesspaceidlegalentitiesidinsurances) - Returns list of insurance folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDInsurancesAll](#getspacesspaceidlegalentitiesidinsurancesall) - Returns folder of the insurances even archived
* [GetSpacesSpaceIDLegalEntitiesIDLoans](#getspacesspaceidlegalentitiesidloans) - Returns folder of the loan
* [GetSpacesSpaceIDLegalEntitiesIDLoansAll](#getspacesspaceidlegalentitiesidloansall) - Returns folder of the loans even archived
* [GetSpacesSpaceIDLegalEntitiesIDProviders](#getspacesspaceidlegalentitiesidproviders) - Returns list of providers folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDProvidersAll](#getspacesspaceidlegalentitiesidprovidersall) - Returns folder of the providers even archived
* [GetSpacesSpaceIDLegalEntitiesIDSocialRegimes](#getspacesspaceidlegalentitiesidsocialregimes) - Returns list of social regimes folders for a legal-entity
* [GetSpacesSpaceIDLegalEntitiesIDSocialRegimesAll](#getspacesspaceidlegalentitiesidsocialregimesall) - Returns folder of the social regimes even archived
* [GetSpacesSpaceIDLoans](#getspacesspaceidloans) - Returns list of all loan folders of the space
* [GetSpacesSpaceIDLoansAll](#getspacesspaceidloansall) - Returns list of all loan folders even archived of the space
* [GetSpacesSpaceIDPersonsIDEmployees](#getspacesspaceidpersonsidemployees) - Returns folder of the employee
* [GetSpacesSpaceIDPersonsIDEmployeesAll](#getspacesspaceidpersonsidemployeesall) - Returns folder of all employees (even archived)
* [GetSpacesSpaceIDPersonsIDExchange](#getspacesspaceidpersonsidexchange) - Returns folder exchange of the person
* [GetSpacesSpaceIDPersonsIDFollowUps](#getspacesspaceidpersonsidfollowups) - Returns folder of the person
* [GetSpacesSpaceIDPersonsIDInvitation](#getspacesspaceidpersonsidinvitation) - Returns invitation of a person
* [GetSpacesSpaceIDPersonsMemberIDFoldersID](#getspacesspaceidpersonsmemberidfoldersid) - Returns folderId with the access of the person
* [GetSpacesSpaceIDProviders](#getspacesspaceidproviders) - Returns folder with Id and provider data
* [GetSpacesSpaceIDProvidersAll](#getspacesspaceidprovidersall) - Returns folder with Id and provider data (even archived)
* [GetSpacesSpaceIDSocialRegimes](#getspacesspaceidsocialregimes) - Returns folder with Id and social regime data
* [GetSpacesSpaceIDSocialRegimesAll](#getspacesspaceidsocialregimesall) - Returns folder with Id and social regime data (even archived)
* [GetSpacesSpaceIDSpacesInvoicings](#getspacesspaceidspacesinvoicings) - Returns CSV Invoicings of the spaces for the account of the spaceId
* [PatchBusinessGroups](#patchbusinessgroups) - Modifies an object
* [PatchProfileEmail](#patchprofileemail) - modify email of profile
* [PatchProfileMobile](#patchprofilemobile) - modify mobile of profile
* [PatchProfileJSON](#patchprofilejson) - modify infos of profile
* [PatchProfileMultipart](#patchprofilemultipart) - modify infos of profile
* [PatchSpacesID](#patchspacesid) - Modify a Space (except private)
* [PatchSpacesIDCompanyEntitiesCompanyID](#patchspacesidcompanyentitiescompanyid) - Modify a company entity
* [PatchSpacesIDFoldersFolderIDPersonsMemberID](#patchspacesidfoldersfolderidpersonsmemberid) - Add/Modify/Delete a person in a customer contract (except manager)
* [PatchSpacesIDFoldersFolderIDPersonsMemberIDActiveaccess](#patchspacesidfoldersfolderidpersonsmemberidactiveaccess) - open an access
* [PatchSpacesIDFoldersFolderIDPersonsMemberIDUnactiveaccess](#patchspacesidfoldersfolderidpersonsmemberidunactiveaccess) - close an access
* [PatchSpacesIDGroupsGroupID](#patchspacesidgroupsgroupid) - Modify a group
* [PatchSpacesIDGroupsGroupIDFoldersFolderID](#patchspacesidgroupsgroupidfoldersfolderid) - Add access to a folder for a group
* [PatchSpacesIDGroupsGroupIDPersonsMemberID](#patchspacesidgroupsgroupidpersonsmemberid) - Add a person to a group
* [PatchSpacesIDLegal](#patchspacesidlegal) - Modify legal information of a Space (except private)
* [PatchSpacesIDPersonsMemberIDPlayer](#patchspacesidpersonsmemberidplayer) - Modify the role of a person
* [PatchSpacesIDPersonsPersonID](#patchspacesidpersonspersonid) - Modify a person
* [PatchSpacesIDPortfoliosPortfolioIDPersonsMemberID](#patchspacesidportfoliosportfolioidpersonsmemberid) - Add/Modify/Delete a person in a portfolio (except manager)
* [PatchSpacesSpaceIDCommonFoldersID](#patchspacesspaceidcommonfoldersid) - Modify a common folder
* [PatchSpacesSpaceIDDocumentsDocumentID](#patchspacesspaceiddocumentsdocumentid) - modify a doc
* [PatchSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID](#patchspacesspaceidfoldersfolderidbankstatementsdocumentid) - modify a bank statement
* [PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID](#patchspacesspaceidfoldersfolderidcontractualdocumentsdocumentid) - modify a contractual document
* [PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID](#patchspacesspaceidfoldersfolderidcorporatetaxdeclarationsdocumentid) - modify a coporate tax declaration
* [PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID](#patchspacesspaceidfoldersfolderidexpenseproofsdocumentid) - modify an expense report
* [PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID](#patchspacesspaceidfoldersfolderidexpensereportsdocumentid) - modify an expense report
* [PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentID](#patchspacesspaceidfoldersfolderidinvoicesdocumentid) - modify a invoice
* [PatchSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID](#patchspacesspaceidfoldersfolderidothertaxesdocumentid) - modify an other tax declaration
* [PatchSpacesSpaceIDFoldersFolderIDPayrollsDocumentID](#patchspacesspaceidfoldersfolderidpayrollsdocumentid) - modify a payroll
* [PatchSpacesSpaceIDFoldersFolderIDPayslipsDocumentID](#patchspacesspaceidfoldersfolderidpayslipsdocumentid) - modify a payslip
* [PatchSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID](#patchspacesspaceidfoldersfolderidsocialcontractsdocumentid) - modify a social contract
* [PatchSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID](#patchspacesspaceidfoldersfolderidsocialdeclarationsdocumentid) - modify a social declaration
* [PatchSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID](#patchspacesspaceidfoldersfolderidvatdeclarationsdocumentid) - modify a vat declaration
* [PatchSpacesSpaceIDFoldersID](#patchspacesspaceidfoldersid) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)
* [PatchSpacesSpaceIDFoldersIDAccountingYear](#patchspacesspaceidfoldersidaccountingyear) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data
* [PatchSpacesSpaceIDFoldersIDBank](#patchspacesspaceidfoldersidbank) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* [PatchSpacesSpaceIDFoldersIDCollectiveDecision](#patchspacesspaceidfoldersidcollectivedecision) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data
* [PatchSpacesSpaceIDFoldersIDCustomer](#patchspacesspaceidfoldersidcustomer) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data
* [PatchSpacesSpaceIDFoldersIDDocumentsDocumentIDDetach](#patchspacesspaceidfoldersiddocumentsdocumentiddetach) - Detach a doc of a folder
* [PatchSpacesSpaceIDFoldersIDEmployee](#patchspacesspaceidfoldersidemployee) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* [PatchSpacesSpaceIDFoldersIDInsurance](#patchspacesspaceidfoldersidinsurance) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* [PatchSpacesSpaceIDFoldersIDLoan](#patchspacesspaceidfoldersidloan) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* [PatchSpacesSpaceIDFoldersIDMessagesMessageID](#patchspacesspaceidfoldersidmessagesmessageid) - Modify a Message
* [PatchSpacesSpaceIDFoldersIDPasswordsPasswordID](#patchspacesspaceidfoldersidpasswordspasswordid) - Modify a Password
* [PatchSpacesSpaceIDFoldersIDProfessionalVehicle](#patchspacesspaceidfoldersidprofessionalvehicle) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data
* [PatchSpacesSpaceIDFoldersIDProvider](#patchspacesspaceidfoldersidprovider) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data
* [PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentid](#patchspacesspaceidfoldersidrequireddocumentsrequireddocumentid) - Modify the status of a requireddocument
* [PatchSpacesSpaceIDFoldersIDSocialRegimes](#patchspacesspaceidfoldersidsocialregimes) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data
* [PatchSpacesSpaceIDFoldersIDTaxContract](#patchspacesspaceidfoldersidtaxcontract) - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data
* [PatchSpacesSpaceIDPersonsIDCallForDocument](#patchspacesspaceidpersonsidcallfordocument) - modify the invitation of a person to collect documents
* [PatchSpacesSpaceIDPersonsIDGuestInSpace](#patchspacesspaceidpersonsidguestinspace) - invite a person in a space
* [PatchSpacesSpaceIDPersonsIDInvitation](#patchspacesspaceidpersonsidinvitation) - modify an invitation
* [PatchSpacesSpaceIDPersonsMemberIDFoldersID](#patchspacesspaceidpersonsmemberidfoldersid) - Modify an access
* [PostBusinessGroups](#postbusinessgroups) - Adds a group (only for managers and ADN collaborators)
* [PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpace](#postbusinessgroupsidspacesspaceidlegalentitiespersonidcustomersfolderidguestinspace) - send an invitation to manager the private space of personId
* [PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpaces](#postbusinessgroupsidspacesspaceidlegalentitiespersonidcustomersfolderidspaces) - Add a Space in a group
* [PostHubDocumentsJSON](#posthubdocumentsjson) - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubDocumentsMultipart](#posthubdocumentsmultipart) - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubPayslipsJSON](#posthubpayslipsjson) - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubPayslipsMultipart](#posthubpayslipsmultipart) - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* [PostHubSpacesSpaceIDDocumentsJSON](#posthubspacesspaceiddocumentsjson) - Add a document in a space (this document is analyzed to be saved in the correct folder)
* [PostHubSpacesSpaceIDDocumentsMultipart](#posthubspacesspaceiddocumentsmultipart) - Add a document in a space (this document is analyzed to be saved in the correct folder)
* [PostHubSpacesSpaceIDPayslipsJSON](#posthubspacesspaceidpayslipsjson) - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* [PostHubSpacesSpaceIDPayslipsMultipart](#posthubspacesspaceidpayslipsmultipart) - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* [PostMenusMenuIDDocumentsJSON](#postmenusmenuiddocumentsjson) - add a document to the target menuId
* [PostMenusMenuIDDocumentsMultipart](#postmenusmenuiddocumentsmultipart) - add a document to the target menuId
* [PostProfileJSON](#postprofilejson) - create infos of profile
* [PostProfileMultipart](#postprofilemultipart) - create infos of profile
* [PostRegistration](#postregistration) - complete the invitation
* [PostSpaces](#postspaces) - Add a Space in my group
* [PostSpacesIDAccountingYear](#postspacesidaccountingyear) - Create a accounting year for the space id
* [PostSpacesIDCollectiveDecision](#postspacesidcollectivedecision) - Create a colletive decision for the space id
* [PostSpacesIDCompanyEntities](#postspacesidcompanyentities) - Add a Company Entity in a Space
* [PostSpacesIDCompanyEntitiesPersonIDDetails](#postspacesidcompanyentitiespersoniddetails) - Replace or Add a contact detail for a person
* [PostSpacesIDDocumentsDownload](#postspacesiddocumentsdownload) - create an archive with documents
* [PostSpacesIDFoldersFolderIDPersonsPersonIDGuestInSpace](#postspacesidfoldersfolderidpersonspersonidguestinspace) - invite a owner in a space
* [PostSpacesIDGroups](#postspacesidgroups) - Add a group in a Space
* [PostSpacesIDPersons](#postspacesidpersons) - Add a Person in a Space
* [PostSpacesIDPersonsPersonIDDetails](#postspacesidpersonspersoniddetails) - Replace or Add a contact detail for a person
* [PostSpacesIDPersonsPersonIDPortfolios](#postspacesidpersonspersonidportfolios) - Create a portfolio for the person personId
* [PostSpacesIDProfessionalVehicles](#postspacesidprofessionalvehicles) - Create a professional vehicle for the space
* [PostSpacesIDSettingsNf203Logs](#postspacesidsettingsnf203logs) - Enable/Disable logs
* [PostSpacesIDStatus](#postspacesidstatus) - Replace or Add a status
* [PostSpacesIDTaxContracts](#postspacesidtaxcontracts) - Create a tax contract for the space
* [PostSpacesIDTriggersName](#postspacesidtriggersname) - Creates a trigger for the space id
* [PostSpacesSpaceIDDocumentsDocumentIDExtend](#postspacesspaceiddocumentsdocumentidextend) - Add a data to a document
* [PostSpacesSpaceIDDocumentsDocumentIDMailing](#postspacesspaceiddocumentsdocumentidmailing) - send by mail a document
* [PostSpacesSpaceIDDocumentsDocumentIDVersionsJSON](#postspacesspaceiddocumentsdocumentidversionsjson) - Add a version to a document and set it as current
* [PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipart](#postspacesspaceiddocumentsdocumentidversionsmultipart) - Add a version to a document and set it as current
* [PostSpacesSpaceIDExtend](#postspacesspaceidextend) - Add a data to a space
* [PostSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRefresh](#postspacesspaceidfoldersfolderidpayrollsdocumentidrefresh) - recalculate a payroll
* [PostSpacesSpaceIDFoldersIDBankStatementsJSON](#postspacesspaceidfoldersidbankstatementsjson) - Add a bank statement in a folder bank
* [PostSpacesSpaceIDFoldersIDBankStatementsMultipart](#postspacesspaceidfoldersidbankstatementsmultipart) - Add a bank statement in a folder bank
* [PostSpacesSpaceIDFoldersIDCommonFolders](#postspacesspaceidfoldersidcommonfolders) - Add a common folder in another folder
* [PostSpacesSpaceIDFoldersIDContractualDocumentsJSON](#postspacesspaceidfoldersidcontractualdocumentsjson) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDContractualDocumentsMultipart](#postspacesspaceidfoldersidcontractualdocumentsmultipart) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSON](#postspacesspaceidfoldersidcoporatetaxdeclarationsjson) - Add a corporate tax declaration
* [PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipart](#postspacesspaceidfoldersidcoporatetaxdeclarationsmultipart) - Add a corporate tax declaration
* [PostSpacesSpaceIDFoldersIDDocumentsJSON](#postspacesspaceidfoldersiddocumentsjson) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDDocumentsMultipart](#postspacesspaceidfoldersiddocumentsmultipart) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDExpenseProofsJSON](#postspacesspaceidfoldersidexpenseproofsjson) - Add a expense proof in a folder followup or exchange
* [PostSpacesSpaceIDFoldersIDExpenseProofsMultipart](#postspacesspaceidfoldersidexpenseproofsmultipart) - Add a expense proof in a folder followup or exchange
* [PostSpacesSpaceIDFoldersIDExpenseReportsJSON](#postspacesspaceidfoldersidexpensereportsjson) - Add a expense report in a folder followup
* [PostSpacesSpaceIDFoldersIDExpenseReportsMultipart](#postspacesspaceidfoldersidexpensereportsmultipart) - Add a expense report in a folder followup
* [PostSpacesSpaceIDFoldersIDInvoicesJSON](#postspacesspaceidfoldersidinvoicesjson) - Add a invoice in a folder of a customer or a provider
* [PostSpacesSpaceIDFoldersIDInvoicesMultipart](#postspacesspaceidfoldersidinvoicesmultipart) - Add a invoice in a folder of a customer or a provider
* [PostSpacesSpaceIDFoldersIDMessages](#postspacesspaceidfoldersidmessages) - Write a message in the journal of a folder
* [PostSpacesSpaceIDFoldersIDOtherTaxesJSON](#postspacesspaceidfoldersidothertaxesjson) - Add a tax declaration
* [PostSpacesSpaceIDFoldersIDOtherTaxesMultipart](#postspacesspaceidfoldersidothertaxesmultipart) - Add a tax declaration
* [PostSpacesSpaceIDFoldersIDPasswords](#postspacesspaceidfoldersidpasswords) - Write a identifier/password in aa folder
* [PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSON](#postspacesspaceidfoldersidpayrollspayrollidnominativesocialdeclarationjson) - Add a nominative social declaration in a folder social
* [PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipart](#postspacesspaceidfoldersidpayrollspayrollidnominativesocialdeclarationmultipart) - Add a nominative social declaration in a folder social
* [PostSpacesSpaceIDFoldersIDPayrollsJSON](#postspacesspaceidfoldersidpayrollsjson) - Add a payroll in a folder social
* [PostSpacesSpaceIDFoldersIDPayrollsMultipart](#postspacesspaceidfoldersidpayrollsmultipart) - Add a payroll in a folder social
* [PostSpacesSpaceIDFoldersIDPayslipsJSON](#postspacesspaceidfoldersidpayslipsjson) - Add a payslip in a folder employee
* [PostSpacesSpaceIDFoldersIDPayslipsMultipart](#postspacesspaceidfoldersidpayslipsmultipart) - Add a payslip in a folder employee
* [PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSON](#postspacesspaceidfoldersidrequireddocumentsrequireddocumentidjson) - Add a required document to a line
* [PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipart](#postspacesspaceidfoldersidrequireddocumentsrequireddocumentidmultipart) - Add a required document to a line
* [PostSpacesSpaceIDFoldersIDSocialContractsJSON](#postspacesspaceidfoldersidsocialcontractsjson) - Add a social contract in a folder employee
* [PostSpacesSpaceIDFoldersIDSocialContractsMultipart](#postspacesspaceidfoldersidsocialcontractsmultipart) - Add a social contract in a folder employee
* [PostSpacesSpaceIDFoldersIDSocialDeclarationsJSON](#postspacesspaceidfoldersidsocialdeclarationsjson) - Add a social declaration
* [PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipart](#postspacesspaceidfoldersidsocialdeclarationsmultipart) - Add a social declaration
* [PostSpacesSpaceIDFoldersIDVatDeclarationsJSON](#postspacesspaceidfoldersidvatdeclarationsjson) - Add a vat declaration
* [PostSpacesSpaceIDFoldersIDVatDeclarationsMultipart](#postspacesspaceidfoldersidvatdeclarationsmultipart) - Add a vat declaration
* [PostSpacesSpaceIDFoldersIDDocumentClassJSON](#postspacesspaceidfoldersiddocumentclassjson) - Add a document in a folder
* [PostSpacesSpaceIDFoldersIDDocumentClassMultipart](#postspacesspaceidfoldersiddocumentclassmultipart) - Add a document in a folder
* [PostSpacesSpaceIDLegalEntitiesIDBanks](#postspacesspaceidlegalentitiesidbanks) - Add a folder for a bank
* [PostSpacesSpaceIDLegalEntitiesIDCustomers](#postspacesspaceidlegalentitiesidcustomers) - Add a folder for a customer
* [PostSpacesSpaceIDLegalEntitiesIDInsurances](#postspacesspaceidlegalentitiesidinsurances) - Add a folder for a insurance
* [PostSpacesSpaceIDLegalEntitiesIDLoans](#postspacesspaceidlegalentitiesidloans) - Add a folder for a loan
* [PostSpacesSpaceIDLegalEntitiesIDProviders](#postspacesspaceidlegalentitiesidproviders) - Add a folder for a provider
* [PostSpacesSpaceIDLegalEntitiesIDSocialRegimes](#postspacesspaceidlegalentitiesidsocialregimes) - Add a folder for a social regime
* [PostSpacesSpaceIDPersonsIDCallForDocument](#postspacesspaceidpersonsidcallfordocument) - invite a person to collect documents
* [PostSpacesSpaceIDPersonsIDEmployees](#postspacesspaceidpersonsidemployees) - Add a folder for a employee
* [PostSpacesSpaceIDPersonsIDGuestInSpace](#postspacesspaceidpersonsidguestinspace) - invite a person in a space
* [PostSpacesSpaceIDPersonsIDInvitation](#postspacesspaceidpersonsidinvitation) - create an invitation in a space for a person
* [PostSpacesSpaceIDPersonsIDInvitationInvitationIDSend](#postspacesspaceidpersonsidinvitationinvitationidsend) - send the invitation of a person in a space

## DeleteBusinessGroupsIDSpacesSpaceID

Remove a customer space from partner

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
    res, err := s.SDK.DeleteBusinessGroupsIDSpacesSpaceID(ctx, operations.DeleteBusinessGroupsIDSpacesSpaceIDRequest{
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

## DeleteSpacesID

Delete a Space (only space not delivered to customer)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesID(ctx, operations.DeleteSpacesIDRequest{
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesIDCompanyEntitiesPersonIDDetailsDesignation

delete a contact detail for a company entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesIDCompanyEntitiesPersonIDDetailsDesignation(ctx, operations.DeleteSpacesIDCompanyEntitiesPersonIDDetailsDesignationRequest{
        Designation: "P18784",
        ID: "P18784",
        PersonID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesIDGroupsGroupIDFoldersFolderID

delete access to a folder for a group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesIDGroupsGroupIDFoldersFolderID(ctx, operations.DeleteSpacesIDGroupsGroupIDFoldersFolderIDRequest{
        FolderID: "P1863763784",
        GroupID: "P1863763784",
        ID: "P187867864",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesIDGroupsGroupIDPersonsMemberID

Delete a person of a group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesIDGroupsGroupIDPersonsMemberID(ctx, operations.DeleteSpacesIDGroupsGroupIDPersonsMemberIDRequest{
        GroupID: "P1863763784",
        ID: "P187867864",
        MemberID: "P1863763784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesIDPersonsPersonID

delete a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesIDPersonsPersonID(ctx, operations.DeleteSpacesIDPersonsPersonIDRequest{
        ID: "P18784",
        PersonID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesIDPersonsPersonIDDetailsDesignation

delete a contact detail for a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesIDPersonsPersonIDDetailsDesignation(ctx, operations.DeleteSpacesIDPersonsPersonIDDetailsDesignationRequest{
        Designation: "P18784",
        ID: "P18784",
        PersonID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesIDStatusCode

delete a status of the space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesIDStatusCode(ctx, operations.DeleteSpacesIDStatusCodeRequest{
        Code: "P18784",
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesIDTriggersName

Deletes a trigger for the space id

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
    res, err := s.SDK.DeleteSpacesIDTriggersName(ctx, operations.DeleteSpacesIDTriggersNameRequest{
        ID: "P198746",
        Name: "collect",
    }, operations.DeleteSpacesIDTriggersNameSecurity{
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

## DeleteSpacesSpaceIDCommonFoldersID

Delete a common folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDCommonFoldersID(ctx, operations.DeleteSpacesSpaceIDCommonFoldersIDRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID

delete a bank statement

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDBankStatementsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID

delete a contractual document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID

delete a corporate tax declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID

delete an expense proof

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID

delete an expense report

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDInvoicesDocumentID

delete an invoice document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDInvoicesDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDInvoicesDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID

delete a tax declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDPayrollsDocumentID

delete a payroll

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDPayrollsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDPayslipsDocumentID

delete a payslip

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDPayslipsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDPayslipsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID

delete a social contract

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDSocialContractsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID

delete a social declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID

delete a VAT declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDAccountingYear

delete an AccountingYear

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDAccountingYear(ctx, operations.DeleteSpacesSpaceIDFoldersIDAccountingYearRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDBank

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDBank(ctx, operations.DeleteSpacesSpaceIDFoldersIDBankRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDCustomer

delete a customer

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDCustomer(ctx, operations.DeleteSpacesSpaceIDFoldersIDCustomerRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDEmployee

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDEmployee(ctx, operations.DeleteSpacesSpaceIDFoldersIDEmployeeRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDInsurance

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDInsurance(ctx, operations.DeleteSpacesSpaceIDFoldersIDInsuranceRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDLoan

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDLoan(ctx, operations.DeleteSpacesSpaceIDFoldersIDLoanRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDPasswordsPasswordID

delete a password

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDPasswordsPasswordID(ctx, operations.DeleteSpacesSpaceIDFoldersIDPasswordsPasswordIDRequest{
        ID: "P18784",
        PasswordID: "TJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclaration

delete a nominative social declaration in a folder social

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
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclaration(ctx, operations.DeleteSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationRequest{
        ID: "P1987HGFKJFAA46",
        PayrollID: "P156HUFHA476",
        SpaceID: "P156HUFHA476",
    }, operations.DeleteSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationSecurity{
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

## DeleteSpacesSpaceIDFoldersIDPortfolioPortfolioID

delete a secondary portfolio of a customer contract

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDPortfolioPortfolioID(ctx, operations.DeleteSpacesSpaceIDFoldersIDPortfolioPortfolioIDRequest{
        ID: "T18784",
        PortfolioID: "P156HUFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDProfessionalVehicle

delete a Professional Vehicle

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDProfessionalVehicle(ctx, operations.DeleteSpacesSpaceIDFoldersIDProfessionalVehicleRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDProvider

delete a provider

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDProvider(ctx, operations.DeleteSpacesSpaceIDFoldersIDProviderRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidDocumentsDocumentID

delete a document from a required document

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
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidDocumentsDocumentID(ctx, operations.DeleteSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidDocumentsDocumentIDRequest{
        DocumentID: "P156HUFHA476",
        ID: "P1987HGFKJFAA46",
        Requireddocumentid: "T156HUFHA476",
        SpaceID: "P156HUFHA476",
    }, operations.DeleteSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidDocumentsDocumentIDSecurity{
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

## DeleteSpacesSpaceIDFoldersIDSocialRegimes

delete a social regime

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDSocialRegimes(ctx, operations.DeleteSpacesSpaceIDFoldersIDSocialRegimesRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDTaxContract

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDTaxContract(ctx, operations.DeleteSpacesSpaceIDFoldersIDTaxContractRequest{
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDFoldersIDDocumentClass

delete a class document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSpacesSpaceIDFoldersIDDocumentClass(ctx, operations.DeleteSpacesSpaceIDFoldersIDDocumentClassRequest{
        DocumentClass: "birthCertificate",
        ID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpacesSpaceIDPersonsIDGuestInSpace

delete the invitation of a person in a space

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
    res, err := s.SDK.DeleteSpacesSpaceIDPersonsIDGuestInSpace(ctx, operations.DeleteSpacesSpaceIDPersonsIDGuestInSpaceRequest{
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.DeleteSpacesSpaceIDPersonsIDGuestInSpaceSecurity{
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

## DeleteSpacesSpaceIDPersonsIDInvitation

delete the invitation of a person in a space

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
    res, err := s.SDK.DeleteSpacesSpaceIDPersonsIDInvitation(ctx, operations.DeleteSpacesSpaceIDPersonsIDInvitationRequest{
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.DeleteSpacesSpaceIDPersonsIDInvitationSecurity{
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

## GetBoxMenus

Returns predefined folders and workbooks of the Box for all the spaces

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
    res, err := s.SDK.GetBoxMenus(ctx, operations.GetBoxMenusSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBoxMenus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBusinessGroups

Returns a list of groups custom ordered by name

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
    res, err := s.SDK.GetBusinessGroups(ctx, operations.GetBusinessGroupsRequest{
        Name: sdk.String("Dupond"),
    }, operations.GetBusinessGroupsSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBusinessGroups200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetBusinessGroupsAll

Returns list of groups custom for managers

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
    res, err := s.SDK.GetBusinessGroupsAll(ctx, operations.GetBusinessGroupsAllRequest{
        Name: sdk.String("Terrence Rau"),
    }, operations.GetBusinessGroupsAllSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBusinessGroupsAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetBusinessGroupsID

Returns a group

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
    res, err := s.SDK.GetBusinessGroupsID(ctx, operations.GetBusinessGroupsIDRequest{
        ID: "P18784",
    }, operations.GetBusinessGroupsIDSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBusinessGroupsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBusinessGroupsIDSpaces

Returns spaces of the business group with id

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
    res, err := s.SDK.GetBusinessGroupsIDSpaces(ctx, operations.GetBusinessGroupsIDSpacesRequest{
        Name: sdk.String("Mon Entreprise"),
        RegistrationNumber: sdk.String("12345"),
        Type: operations.GetBusinessGroupsIDSpacesTypeEnumPrivate.ToPointer(),
        ID: "P18784",
    }, operations.GetBusinessGroupsIDSpacesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBusinessGroupsIDSpaces200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetHubBusinessGroupsIDMenus

Returns predefined folders and workbooks of the Hub for all the spaces of the business group

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
    res, err := s.SDK.GetHubBusinessGroupsIDMenus(ctx, operations.GetHubBusinessGroupsIDMenusRequest{
        ID: "P156HUFHA476",
    }, operations.GetHubBusinessGroupsIDMenusSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHubBusinessGroupsIDMenus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetHubMenus

Returns predefined folders and workbooks of the Hub for all the spaces

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
    res, err := s.SDK.GetHubMenus(ctx, operations.GetHubMenusSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHubMenus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetHubMenusAll

Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces

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
    res, err := s.SDK.GetHubMenusAll(ctx, operations.GetHubMenusAllSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHubMenusAll200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetHubSpacesSpaceIDMenus

Returns predefined folders and workbooks of the Hub for the space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetHubSpacesSpaceIDMenus(ctx, operations.GetHubSpacesSpaceIDMenusRequest{
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHubSpacesSpaceIDMenus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMenus

Returns predefined entries

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMenus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMenus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProfile

Returns status of member

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
    res, err := s.SDK.GetProfile(ctx, operations.GetProfileRequest{
        Contract: sdk.String("member"),
    }, operations.GetProfileSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProfileIDFile

Returns status of member

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProfileIDFile(ctx, operations.GetProfileIDFileRequest{
        Contract: sdk.String("member"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfileIDFile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetRegistration

Returns the method to get the validation code or the link to register after invitation

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
    res, err := s.SDK.GetRegistration(ctx, operations.GetRegistrationRequest{
        Code: "HFIHA",
    }, operations.GetRegistrationSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegistration200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetSession

Returns member id of user logged

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
    res, err := s.SDK.GetSession(ctx, operations.GetSessionSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Session != nil {
        // handle response
    }
}
```

## GetSpaces

Returns spaces of my group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpaces(ctx, operations.GetSpacesRequest{
        Name: sdk.String("Mon Entreprise"),
        RegistrationNumber: sdk.String("12345"),
        Type: operations.GetSpacesTypeEnumPrivate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpaces200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesAll

Returns all spaces

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesAll(ctx, operations.GetSpacesAllRequest{
        Name: sdk.String("Mon Entreprise"),
        Type: operations.GetSpacesAllTypeEnumPrivate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesAll200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesID

Returns a space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesID(ctx, operations.GetSpacesIDRequest{
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesIDAccountingYear

Returns list of accounting years for the space {id}

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDAccountingYear(ctx, operations.GetSpacesIDAccountingYearRequest{
        EffectiveDate: sdk.String("20160301"),
        End: sdk.String("201603"),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDAccountingYear200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesIDCollectiveDecision

Returns list of collective decisions for the space {id}

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDCollectiveDecision(ctx, operations.GetSpacesIDCollectiveDecisionRequest{
        Date: sdk.String("20160302,null"),
        Event: sdk.String("OGM"),
        HasCompanyRegistrationCertificate: operations.GetSpacesIDCollectiveDecisionHasCompanyRegistrationCertificateEnumTrue.ToPointer(),
        HasMinutes: operations.GetSpacesIDCollectiveDecisionHasMinutesEnumTrue.ToPointer(),
        HasSireneRegister: operations.GetSpacesIDCollectiveDecisionHasSireneRegisterEnumTrue.ToPointer(),
        HasStatus: operations.GetSpacesIDCollectiveDecisionHasStatusEnumTrue.ToPointer(),
        Range: sdk.String("10-19"),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDCollectiveDecision200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesIDCompanyEntities

Returns list of company entities

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDCompanyEntities(ctx, operations.GetSpacesIDCompanyEntitiesRequest{
        LegalName: sdk.String("Source de France SAS"),
        Name: sdk.String("Source de France"),
        RegistrationNumber: sdk.String("12356213854"),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDCompanyEntities200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDCompanyEntitiesAll

Returns list of company entities even company entities archived

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDCompanyEntitiesAll(ctx, operations.GetSpacesIDCompanyEntitiesAllRequest{
        Name: sdk.String("Source de France"),
        RegistrationNumber: sdk.String("12356213854"),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDCompanyEntitiesAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDCompanyEntitiesCompanyID

Returns a compay entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDCompanyEntitiesCompanyID(ctx, operations.GetSpacesIDCompanyEntitiesCompanyIDRequest{
        CompanyID: "P15646476",
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyEntity != nil {
        // handle response
    }
}
```

## GetSpacesIDCompanyEntitiesPersonIDDetails

Returns all details of a company entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDCompanyEntitiesPersonIDDetails(ctx, operations.GetSpacesIDCompanyEntitiesPersonIDDetailsRequest{
        ID: "P15646476",
        PersonID: "T18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDCompanyEntitiesPersonIDDetails200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDFoldersFolderIDPersonsMemberID

return the access of a person in a customer contract

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDFoldersFolderIDPersonsMemberID(ctx, operations.GetSpacesIDFoldersFolderIDPersonsMemberIDRequest{
        FolderID: "T18784",
        ID: "P18784",
        MemberID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDFoldersFolderIDPersonsMemberID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesIDGroups

Returns list of groups

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDGroups(ctx, operations.GetSpacesIDGroupsRequest{
        Name: sdk.String("RH"),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDGroups200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDGroupsAll

Returns list of groups even archived of the space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDGroupsAll(ctx, operations.GetSpacesIDGroupsAllRequest{
        Name: sdk.String("RH"),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDGroupsAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDGroupsGroupID

Returns a group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDGroupsGroupID(ctx, operations.GetSpacesIDGroupsGroupIDRequest{
        GroupID: "P15646476",
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDGroupsGroupID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesIDLegal

Returns legal information of a space (except private)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDLegal(ctx, operations.GetSpacesIDLegalRequest{
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Legal != nil {
        // handle response
    }
}
```

## GetSpacesIDLogo

Returns a space with the logo

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDLogo(ctx, operations.GetSpacesIDLogoRequest{
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Space != nil {
        // handle response
    }
}
```

## GetSpacesIDPersons

Returns list of persons

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDPersons(ctx, operations.GetSpacesIDPersonsRequest{
        Email: sdk.String("maxgermain@maxgermain.com"),
        Function: sdk.String("employee"),
        Name: sdk.String("Germain"),
        Range: sdk.String("10-19"),
        Validated: operations.GetSpacesIDPersonsValidatedEnumTrue.ToPointer(),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDPersons200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDPersonsAll

Returns list of persons even persons archived

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDPersonsAll(ctx, operations.GetSpacesIDPersonsAllRequest{
        Email: sdk.String("maxgermain@maxgermain.com"),
        Function: sdk.String("employee"),
        Name: sdk.String("Germain"),
        Range: sdk.String("10-19"),
        Validated: operations.GetSpacesIDPersonsAllValidatedEnumTrue.ToPointer(),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDPersonsAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDPersonsPersonID

Returns a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDPersonsPersonID(ctx, operations.GetSpacesIDPersonsPersonIDRequest{
        ID: "P15646476",
        PersonID: "T18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDPersonsPersonID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesIDPersonsPersonIDDetails

Returns all details of a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDPersonsPersonIDDetails(ctx, operations.GetSpacesIDPersonsPersonIDDetailsRequest{
        ID: "P15646476",
        PersonID: "T18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDPersonsPersonIDDetails200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDPersonsPersonIDFolders

Returns list of folders with exceptionnal access of the person personId

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDPersonsPersonIDFolders(ctx, operations.GetSpacesIDPersonsPersonIDFoldersRequest{
        Range: sdk.String("10-19"),
        ID: "P15646476",
        PersonID: "T18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDPersonsPersonIDFolders200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDPersonsPersonIDGroups

Returns list of groups of the person personId

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDPersonsPersonIDGroups(ctx, operations.GetSpacesIDPersonsPersonIDGroupsRequest{
        ID: "P15646476",
        PersonID: "T18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDPersonsPersonIDGroups200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDPersonsPersonIDPortfolios

Returns list of portfolios of the person personId

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDPersonsPersonIDPortfolios(ctx, operations.GetSpacesIDPersonsPersonIDPortfoliosRequest{
        ID: "P15646476",
        PersonID: "T18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDPersonsPersonIDPortfolios200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesIDProfessionalVehicles

Returns list of professionalvehicles for the space {id}

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDProfessionalVehicles(ctx, operations.GetSpacesIDProfessionalVehiclesRequest{
        Designation: sdk.String("peugeot"),
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDProfessionalVehicles200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesIDSettingsNf203Logs

Returns state of activation of logs

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
    res, err := s.SDK.GetSpacesIDSettingsNf203Logs(ctx, operations.GetSpacesIDSettingsNf203LogsRequest{
        ID: "P15646476",
    }, operations.GetSpacesIDSettingsNf203LogsSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDSettingsNf203Logs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesIDStatus

Returns all status of the space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDStatus(ctx, operations.GetSpacesIDStatusRequest{
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDStatus200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesIDTaxContracts

Returns list of tax contracts for the space {id}

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesIDTaxContracts(ctx, operations.GetSpacesIDTaxContractsRequest{
        ID: "P15646476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDTaxContracts200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesIDTriggers

Returns list of triggers for the space {id}

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
    res, err := s.SDK.GetSpacesIDTriggers(ctx, operations.GetSpacesIDTriggersRequest{
        ID: "P15646476",
    }, operations.GetSpacesIDTriggersSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesIDTriggers200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDCompanyEntitiesIDFollowUps

Returns folder of the company entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDCompanyEntitiesIDFollowUps(ctx, operations.GetSpacesSpaceIDCompanyEntitiesIDFollowUpsRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDCompanyEntitiesIDFollowUps200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDCustomers

Returns folder with Id and customer data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDCustomers(ctx, operations.GetSpacesSpaceIDCustomersRequest{
        CustomerNumber: sdk.String("nulla"),
        WithContractingPartner: sdk.String("corrupti"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDCustomers200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDCustomersAll

Returns folder with Id and customer data (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDCustomersAll(ctx, operations.GetSpacesSpaceIDCustomersAllRequest{
        CustomerNumber: sdk.String("illum"),
        WithContractingPartner: sdk.String("vel"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDCustomersAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocuments

Returns documents of the folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocuments(ctx, operations.GetSpacesSpaceIDDocumentsRequest{
        Class: sdk.String("payslip"),
        FullText: sdk.String("durand"),
        Range: sdk.String("10-19"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocuments200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsDocumentIDExtend

read the data of a document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocumentsDocumentIDExtend(ctx, operations.GetSpacesSpaceIDDocumentsDocumentIDExtendRequest{
        DocumentID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocumentsDocumentIDExtend200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsDocumentIDFolders

Returns versions of the document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocumentsDocumentIDFolders(ctx, operations.GetSpacesSpaceIDDocumentsDocumentIDFoldersRequest{
        DocumentID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocumentsDocumentIDFolders200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsDocumentIDMailingprice

returns the number of pages and the price of the pdf to send by mail

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
    res, err := s.SDK.GetSpacesSpaceIDDocumentsDocumentIDMailingprice(ctx, operations.GetSpacesSpaceIDDocumentsDocumentIDMailingpriceRequest{
        DocumentID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.GetSpacesSpaceIDDocumentsDocumentIDMailingpriceSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocumentsDocumentIDMailingprice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsDocumentIDVersions

Returns versions of the document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocumentsDocumentIDVersions(ctx, operations.GetSpacesSpaceIDDocumentsDocumentIDVersionsRequest{
        DocumentID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocumentsDocumentIDVersions200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsDocumentIDVersionsCurrent

Returns current version of the document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocumentsDocumentIDVersionsCurrent(ctx, operations.GetSpacesSpaceIDDocumentsDocumentIDVersionsCurrentRequest{
        DocumentID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocumentsDocumentIDVersionsCurrent200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsIDAccess

Returns accesses of one document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocumentsIDAccess(ctx, operations.GetSpacesSpaceIDDocumentsIDAccessRequest{
        ID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocumentsIDAccess200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsIDAccounting

Returns the document with the accounting property

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocumentsIDAccounting(ctx, operations.GetSpacesSpaceIDDocumentsIDAccountingRequest{
        ID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDDocumentsIDAccounting200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDDocumentsIDDownload

Returns content of one document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDDocumentsIDDownload(ctx, operations.GetSpacesSpaceIDDocumentsIDDownloadRequest{
        ID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDEmployees

Returns folders with Id and employee data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDEmployees(ctx, operations.GetSpacesSpaceIDEmployeesRequest{
        EmployeeNumber: sdk.String("error"),
        SSNumber: sdk.String("deserunt"),
        WithContractingPartner: sdk.String("suscipit"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDEmployees200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDEmployeesAll

Returns folders with Id and employee data (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDEmployeesAll(ctx, operations.GetSpacesSpaceIDEmployeesAllRequest{
        EmployeeNumber: sdk.String("iure"),
        SSNumber: sdk.String("magnam"),
        WithContractingPartner: sdk.String("debitis"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDEmployeesAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDEmployers

Returns folders with Id and employer data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDEmployers(ctx, operations.GetSpacesSpaceIDEmployersRequest{
        EmployeeNumber: sdk.String("ipsa"),
        WithContractingPartner: sdk.String("delectus"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDEmployers200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDEmployersAll

Returns folders with Id and employer data (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDEmployersAll(ctx, operations.GetSpacesSpaceIDEmployersAllRequest{
        EmployeeNumber: sdk.String("tempora"),
        WithContractingPartner: sdk.String("suscipit"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDEmployersAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDExtend

read the data of a space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDExtend(ctx, operations.GetSpacesSpaceIDExtendRequest{
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDExtend200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFolders

Returns folders of the space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFolders(ctx, operations.GetSpacesSpaceIDFoldersRequest{
        Class: sdk.String("social"),
        Keywords: sdk.String("juridique"),
        Name: sdk.String("Secrétariat juridique"),
        Range: sdk.String("10-19"),
        RootFolders: operations.GetSpacesSpaceIDFoldersRootFoldersEnumAll.ToPointer(),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFolders200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersAll

Returns folders of the space (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersAll(ctx, operations.GetSpacesSpaceIDFoldersAllRequest{
        Class: sdk.String("social"),
        Keywords: sdk.String("juridique"),
        Name: sdk.String("Secrétariat juridique"),
        Range: sdk.String("10-19"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersFolderIDNominativeSocialDeclarationsDocumentID

get a nominative social declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersFolderIDNominativeSocialDeclarationsDocumentID(ctx, operations.GetSpacesSpaceIDFoldersFolderIDNominativeSocialDeclarationsDocumentIDRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersFolderIDNominativeSocialDeclarationsDocumentID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersID

Returns folder with Id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersID(ctx, operations.GetSpacesSpaceIDFoldersIDRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDAccountings

Returns accountings documents of the folder (results and taxation or accountingyear)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDAccountings(ctx, operations.GetSpacesSpaceIDFoldersIDAccountingsRequest{
        AccountedOn: sdk.String("20180201,null"),
        Class: sdk.String("Invoice"),
        Date: sdk.String("20160321,null"),
        FolderDate: sdk.String("20180306,null"),
        Range: sdk.String("10-19"),
        Title: sdk.String("Accounting"),
        WithFolders: sdk.String("yes"),
        Workbook: sdk.String("Accounting"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDAccountings200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDAccountingsJournal

journal of accountings document delivered to a customer

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDAccountingsJournal(ctx, operations.GetSpacesSpaceIDFoldersIDAccountingsJournalRequest{
        AccountingDate: sdk.String("20170215,null"),
        Class: sdk.String("invoice"),
        Code: sdk.String("delivered"),
        DeliveryDate: sdk.String("20191123082536,null"),
        Number: sdk.Int64(12,17),
        TargetFolderName: sdk.String("Exercice*"),
        Workbook: sdk.String("cashwoucher"),
        YearMonth: sdk.String("201802"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDAccountingsJournal200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDBank

Returns folder with Id and bank data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDBank(ctx, operations.GetSpacesSpaceIDFoldersIDBankRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bank != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDBankStatements

Returns bank statements of the folder bank

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDBankStatements(ctx, operations.GetSpacesSpaceIDFoldersIDBankStatementsRequest{
        Date: sdk.String("20160321, null"),
        Number: sdk.String("201603"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDBankStatements200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDCommonFolders

Returns common folders of a folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDCommonFolders(ctx, operations.GetSpacesSpaceIDFoldersIDCommonFoldersRequest{
        Keywords: sdk.String("juridique"),
        Name: sdk.String("Folder one"),
        ID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDCommonFolders200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDCommonFoldersAll

Returns common folders (even archived) of a folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDCommonFoldersAll(ctx, operations.GetSpacesSpaceIDFoldersIDCommonFoldersAllRequest{
        Keywords: sdk.String("juridique"),
        Name: sdk.String("Folder one"),
        ID: "P15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDCommonFoldersAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDContractingPartner

Returns all contracting partners of a contract

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDContractingPartner(ctx, operations.GetSpacesSpaceIDFoldersIDContractingPartnerRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDContractingPartnerSpace

Returns collector space of a contract

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDContractingPartnerSpace(ctx, operations.GetSpacesSpaceIDFoldersIDContractingPartnerSpaceRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDContractingPartnerSpace200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDContractualDocuments

Returns documents of the folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDContractualDocuments(ctx, operations.GetSpacesSpaceIDFoldersIDContractualDocumentsRequest{
        Date: sdk.String("20160321,null"),
        FolderDate: sdk.String("20180306,null"),
        Range: sdk.String("10-19"),
        Type: operations.GetSpacesSpaceIDFoldersIDContractualDocumentsTypeEnumAmendment.ToPointer(),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDContractualDocuments200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDContractualRelationship

Returns folder with Id and contractual-relationship data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDContractualRelationship(ctx, operations.GetSpacesSpaceIDFoldersIDContractualRelationshipRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContractualRelationship != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDCoporateTaxDeclarations

Returns corporate tax declarations

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDCoporateTaxDeclarations(ctx, operations.GetSpacesSpaceIDFoldersIDCoporateTaxDeclarationsRequest{
        Date: sdk.String("20160321, null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDCoporateTaxDeclarations200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDCustomer

Returns folder with Id and customer data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDCustomer(ctx, operations.GetSpacesSpaceIDFoldersIDCustomerRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDCustomer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDDeliveriesJournal

journal of documents delivered to a customer

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDDeliveriesJournal(ctx, operations.GetSpacesSpaceIDFoldersIDDeliveriesJournalRequest{
        AccountingDate: sdk.String("20170215,null"),
        Class: sdk.String("invoice"),
        DeliveryDate: sdk.String("20191123082536,null"),
        Number: sdk.Int64(12,17),
        TargetFolderName: sdk.String("Exercice*"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDDeliveriesJournal200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDDocuments

Returns documents of the folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDDocuments(ctx, operations.GetSpacesSpaceIDFoldersIDDocumentsRequest{
        Class: sdk.String("Contract"),
        Date: sdk.String("20160321,null"),
        FolderDate: sdk.String("20180306,null"),
        Range: sdk.String("10-19"),
        Title: sdk.String("Facture EDF"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDDocuments200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDEmployee

Returns folder with Id and employee data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDEmployee(ctx, operations.GetSpacesSpaceIDFoldersIDEmployeeRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employee != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDExpenseProofs

Returns expense proofs of the folder (social, followup or exchange)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDExpenseProofs(ctx, operations.GetSpacesSpaceIDFoldersIDExpenseProofsRequest{
        Date: sdk.String("20160321,null"),
        FolderDate: sdk.String("20180306,null"),
        NoExpenseReport: sdk.Bool(true),
        Range: sdk.String("10-19"),
        Status: operations.GetSpacesSpaceIDFoldersIDExpenseProofsStatusEnumR.ToPointer(),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDExpenseProofs200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDExpenseReports

Returns expense reports of the folder (social or followup)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDExpenseReports(ctx, operations.GetSpacesSpaceIDFoldersIDExpenseReportsRequest{
        Date: sdk.String("20160321,null"),
        ExpenseDate: sdk.String("molestiae"),
        FolderDate: sdk.String("20180306,null"),
        ProcessingDate: sdk.String("20180526,null"),
        Range: sdk.String("10-19"),
        SortName: operations.GetSpacesSpaceIDFoldersIDExpenseReportsSortNameEnumExpenseDate.ToPointer(),
        SortOrder: operations.GetSpacesSpaceIDFoldersIDExpenseReportsSortOrderEnumAsc.ToPointer(),
        WithExtend: operations.GetSpacesSpaceIDFoldersIDExpenseReportsWithExtendEnumTrue.ToPointer(),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDExpenseReports200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofs

Returns expense proofs linked to the expenseReportId

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofs(ctx, operations.GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofsRequest{
        Date: sdk.String("20160321"),
        FolderDate: sdk.String("20180202000000"),
        Status: operations.GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofsStatusEnumR.ToPointer(),
        ExpenseReportID: "P156HUFHA476",
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDExpenseReportsExpenseReportIDExpenseProofs200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDInsurance

Returns folder with Id and insurance data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDInsurance(ctx, operations.GetSpacesSpaceIDFoldersIDInsuranceRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Insurance != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDInvoices

Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDInvoices(ctx, operations.GetSpacesSpaceIDFoldersIDInvoicesRequest{
        AccountedOn: sdk.String("20220101"),
        BeforeVAT: sdk.Float64(102.50,123.69),
        Date: sdk.String("20160321,null"),
        DueDate: sdk.String("20201231,20211231"),
        Extend: sdk.String("[{"Name":"field1","Equals":"test"},{"Name":"field2","Start":"20180101"},{"Name":"field3","End":"20190101"}]"),
        FolderDate: sdk.String("20180306,null"),
        InclVAT: sdk.Float64(100.50,123.69),
        InvoiceDate: sdk.String("20201201"),
        Number: sdk.String("23585"),
        PaymentDate: sdk.String("20201201,20211201"),
        Range: sdk.String("10-19"),
        SortName: operations.GetSpacesSpaceIDFoldersIDInvoicesSortNameEnumPaymentDate.ToPointer(),
        SortOrder: operations.GetSpacesSpaceIDFoldersIDInvoicesSortOrderEnumAsc.ToPointer(),
        Title: sdk.String("factrure"),
        WithExtend: sdk.String("202102,null"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDInvoices200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDLegalEntity

Returns legal entity of a follow up folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDLegalEntity(ctx, operations.GetSpacesSpaceIDFoldersIDLegalEntityRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDLegalEntity200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDLoan

Returns folder with Id and loan data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDLoan(ctx, operations.GetSpacesSpaceIDFoldersIDLoanRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Loan != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDMessages

Returns messages of the folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDMessages(ctx, operations.GetSpacesSpaceIDFoldersIDMessagesRequest{
        MessageDate: sdk.String("20190202"),
        Range: sdk.String("10-19"),
        Text: sdk.String("*welcom*"),
        ID: "P18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDMessages200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDMessagesMessageID

Returns message with Id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDMessagesMessageID(ctx, operations.GetSpacesSpaceIDFoldersIDMessagesMessageIDRequest{
        ID: "T15646476",
        MessageID: "TJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDMessagesMessageID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDNominativeSocialDeclarations

Returns nominative social declarations of the folder social

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDNominativeSocialDeclarations(ctx, operations.GetSpacesSpaceIDFoldersIDNominativeSocialDeclarationsRequest{
        Date: sdk.String("20160321, null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDNominativeSocialDeclarations200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDOtherTaxes

Returns other taxes declarations

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDOtherTaxes(ctx, operations.GetSpacesSpaceIDFoldersIDOtherTaxesRequest{
        Date: sdk.String("20160321, null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDOtherTaxes200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDPasswords

Returns identifiers/passwords of the folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDPasswords(ctx, operations.GetSpacesSpaceIDFoldersIDPasswordsRequest{
        ID: "P18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDPasswords200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDPasswordsPasswordID

Returns password with Id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDPasswordsPasswordID(ctx, operations.GetSpacesSpaceIDFoldersIDPasswordsPasswordIDRequest{
        ID: "T15646476",
        PasswordID: "TJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDPasswordsPasswordID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDPayrolls

Returns payrolls of the folder social

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDPayrolls(ctx, operations.GetSpacesSpaceIDFoldersIDPayrollsRequest{
        Begin: sdk.String("20160321,null"),
        Date: sdk.String("20160321, null"),
        End: sdk.String("20160321,null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDPayrolls200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDPayslips

Returns payslips of the folder employee

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDPayslips(ctx, operations.GetSpacesSpaceIDFoldersIDPayslipsRequest{
        Date: sdk.String("20160321, null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDPayslips200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDProvider

Returns folder with Id and provider data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDProvider(ctx, operations.GetSpacesSpaceIDFoldersIDProviderRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Provider != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDRequiredDocuments

list of the required documents for a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDRequiredDocuments(ctx, operations.GetSpacesSpaceIDFoldersIDRequiredDocumentsRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDRequiredDocuments200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDSections

Returns sections of the folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDSections(ctx, operations.GetSpacesSpaceIDFoldersIDSectionsRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDSections200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDSocialContracts

Returns social contracts of the folder employee

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDSocialContracts(ctx, operations.GetSpacesSpaceIDFoldersIDSocialContractsRequest{
        Date: sdk.String("20160321, null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDSocialContracts200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDSocialDeclarations

Returns social declarations

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDSocialDeclarations(ctx, operations.GetSpacesSpaceIDFoldersIDSocialDeclarationsRequest{
        Date: sdk.String("20160321, null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDSocialDeclarations200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDSocialRegimes

Returns folder with Id and social regime data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDSocialRegimes(ctx, operations.GetSpacesSpaceIDFoldersIDSocialRegimesRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SocialRegime != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDSumInvoices

Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDSumInvoices(ctx, operations.GetSpacesSpaceIDFoldersIDSumInvoicesRequest{
        BeforeVAT: sdk.Float64(102.50,101.50),
        DueDate: sdk.String("20201231"),
        InclVat: sdk.Float64(100.50,101.50),
        InvoiceDate: sdk.String("20201201,null"),
        Number: sdk.String("23585"),
        PaymentDate: sdk.String("20201201,null"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDSumInvoices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDVatDeclarations

Returns vat declarations

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDVatDeclarations(ctx, operations.GetSpacesSpaceIDFoldersIDVatDeclarationsRequest{
        Date: sdk.String("20160321, null"),
        Range: sdk.String("10-19"),
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDVatDeclarations200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDFoldersIDDocumentClass

Returns document of documentClass (without specific data) of the folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDFoldersIDDocumentClass(ctx, operations.GetSpacesSpaceIDFoldersIDDocumentClassRequest{
        DocumentClass: "birthCertificate",
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDFoldersIDDocumentClass200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDBanks

Returns list of bank folders for a legal-entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDBanks(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDBanksRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDBanks200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDBanksAll

Returns folder of the banks even archived

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDBanksAll(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDBanksAllRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDBanksAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDContracts

Returns all contract folders of the legal entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDContracts(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDContractsRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDContracts200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDContractualRelationships

Returns folder of the others contract with legal entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDContractualRelationships(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDContractualRelationships200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsAll

Returns folder of the others contract with legal entity (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsAll(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsAllRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDContractualRelationshipsAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDCustomers

Returns folder of the customer

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDCustomers(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDCustomersRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDCustomers200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDCustomersAll

Returns folder of the customers (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDCustomersAll(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDCustomersAllRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDCustomersAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDInsurances

Returns list of insurance folders for a legal-entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDInsurances(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDInsurancesRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDInsurances200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDInsurancesAll

Returns folder of the insurances even archived

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDInsurancesAll(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDInsurancesAllRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDInsurancesAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDLoans

Returns folder of the loan

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDLoans(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDLoansRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDLoans200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDLoansAll

Returns folder of the loans even archived

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDLoansAll(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDLoansAllRequest{
        ID: "T15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDLoansAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDProviders

Returns list of providers folders for a legal-entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDProviders(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDProvidersRequest{
        ID: "P15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDProviders200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDProvidersAll

Returns folder of the providers even archived

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDProvidersAll(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDProvidersAllRequest{
        ID: "P15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDProvidersAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDSocialRegimes

Returns list of social regimes folders for a legal-entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDSocialRegimes(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDSocialRegimesRequest{
        ID: "P15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDSocialRegimes200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLegalEntitiesIDSocialRegimesAll

Returns folder of the social regimes even archived

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLegalEntitiesIDSocialRegimesAll(ctx, operations.GetSpacesSpaceIDLegalEntitiesIDSocialRegimesAllRequest{
        ID: "P15646476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLegalEntitiesIDSocialRegimesAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLoans

Returns list of all loan folders of the space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLoans(ctx, operations.GetSpacesSpaceIDLoansRequest{
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLoans200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDLoansAll

Returns list of all loan folders even archived of the space

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDLoansAll(ctx, operations.GetSpacesSpaceIDLoansAllRequest{
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDLoansAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDPersonsIDEmployees

Returns folder of the employee

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDPersonsIDEmployees(ctx, operations.GetSpacesSpaceIDPersonsIDEmployeesRequest{
        ID: "P15HBGUFA76",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDPersonsIDEmployees200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDPersonsIDEmployeesAll

Returns folder of all employees (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDPersonsIDEmployeesAll(ctx, operations.GetSpacesSpaceIDPersonsIDEmployeesAllRequest{
        ID: "P15HBGUFA76",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDPersonsIDEmployeesAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDPersonsIDExchange

Returns folder exchange of the person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDPersonsIDExchange(ctx, operations.GetSpacesSpaceIDPersonsIDExchangeRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDPersonsIDExchange200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDPersonsIDFollowUps

Returns folder of the person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDPersonsIDFollowUps(ctx, operations.GetSpacesSpaceIDPersonsIDFollowUpsRequest{
        ID: "T15646IFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FollowUp != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDPersonsIDInvitation

Returns invitation of a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDPersonsIDInvitation(ctx, operations.GetSpacesSpaceIDPersonsIDInvitationRequest{
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDPersonsMemberIDFoldersID

Returns folderId with the access of the person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDPersonsMemberIDFoldersID(ctx, operations.GetSpacesSpaceIDPersonsMemberIDFoldersIDRequest{
        ID: "T15646476",
        MemberID: "P156HUFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDPersonsMemberIDFoldersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDProviders

Returns folder with Id and provider data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDProviders(ctx, operations.GetSpacesSpaceIDProvidersRequest{
        WithContractingPartner: sdk.String("minus"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDProviders200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDProvidersAll

Returns folder with Id and provider data (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDProvidersAll(ctx, operations.GetSpacesSpaceIDProvidersAllRequest{
        WithContractingPartner: sdk.String("placeat"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDProvidersAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDSocialRegimes

Returns folder with Id and social regime data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDSocialRegimes(ctx, operations.GetSpacesSpaceIDSocialRegimesRequest{
        WithContractingPartner: sdk.String("voluptatum"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDSocialRegimes200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDSocialRegimesAll

Returns folder with Id and social regime data (even archived)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDSocialRegimesAll(ctx, operations.GetSpacesSpaceIDSocialRegimesAllRequest{
        WithContractingPartner: sdk.String("iusto"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDSocialRegimesAll200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## GetSpacesSpaceIDSpacesInvoicings

Returns CSV Invoicings of the spaces for the account of the spaceId

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSpacesSpaceIDSpacesInvoicings(ctx, operations.GetSpacesSpaceIDSpacesInvoicingsRequest{
        Date: sdk.String("20160321,null"),
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpacesSpaceIDSpacesInvoicings200ApplicationJSONAllOfs != nil {
        // handle response
    }
}
```

## PatchBusinessGroups

Modifies an object

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
    res, err := s.SDK.PatchBusinessGroups(ctx, operations.PatchBusinessGroupsRequestBody{
        Name: sdk.String("Client Durand"),
    }, operations.PatchBusinessGroupsSecurity{
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

## PatchProfileEmail

modify email of profile

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
    res, err := s.SDK.PatchProfileEmail(ctx, operations.PatchProfileEmailRequestBody{}, operations.PatchProfileEmailSecurity{
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

## PatchProfileMobile

modify mobile of profile

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
    res, err := s.SDK.PatchProfileMobile(ctx, operations.PatchProfileMobileRequestBody{}, operations.PatchProfileMobileSecurity{
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

## PatchProfileJSON

modify infos of profile

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
    res, err := s.SDK.PatchProfileJSON(ctx, operations.PatchProfileApplicationJSON{
        Birth: &operations.PatchProfileApplicationJSONBirth{
            City: sdk.String("Créteil"),
            Country: sdk.String("FR"),
            Date: sdk.String("19800101"),
            ZipCode: sdk.String("94000"),
        },
        BirthName: sdk.String("Dupond"),
        Email: sdk.String("paule@durand.fr"),
        FirstName: sdk.String("Paule"),
        IDFile: &operations.PatchProfileApplicationJSONIDFile{
            Content64Encoded: sdk.String("PIHFPAH20FBIA="),
            Name: sdk.String("id.png"),
        },
        Name: sdk.String("Durand"),
        Sex: operations.PatchProfileApplicationJSONSexEnumFemale.ToPointer(),
    }, operations.PatchProfileJSONSecurity{
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

## PatchProfileMultipart

modify infos of profile

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
    res, err := s.SDK.PatchProfileMultipart(ctx, operations.PatchProfileMultipartFormData1{
        Birth: &operations.PatchProfileMultipartFormDataBirth{
            City: sdk.String("Créteil"),
            Country: sdk.String("France"),
            Date: sdk.String("19800101"),
            ZipCode: sdk.String("94000"),
        },
        BirthName: sdk.String("Dupond"),
        Email: sdk.String("paule@durand.fr"),
        FirstName: sdk.String("Paule"),
        IDFile: &operations.PatchProfileMultipartFormDataIDFile{
            IDFile: "nisi",
            Content: []byte("recusandae"),
        },
        Name: sdk.String("Durand"),
        Sex: operations.PatchProfileMultipartFormDataSexEnumFemale.ToPointer(),
    }, operations.PatchProfileMultipartSecurity{
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

## PatchSpacesID

Modify a Space (except private)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesID(ctx, operations.PatchSpacesIDRequest{
        RequestBody: operations.PatchSpacesIDRequestBody{
            Logo: &operations.PatchSpacesIDRequestBodyLogo{
                Content64Encoded: sdk.String("NIFHAZFA07GA="),
                Name: sdk.String("toto.png"),
            },
            Name: sdk.String("Mon Entreprise"),
            TemplateSpaceID: sdk.String("PHAOH8486"),
        },
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDCompanyEntitiesCompanyID

Modify a company entity

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDCompanyEntitiesCompanyID(ctx, operations.PatchSpacesIDCompanyEntitiesCompanyIDRequest{
        RequestBody: operations.PatchSpacesIDCompanyEntitiesCompanyIDRequestBody{
            ApeCode: sdk.String("420F"),
            ArchivalDate: sdk.String("20160203"),
            Comment: sdk.String("my brother"),
            LegalName: sdk.String("Mon entreprise Dupond"),
            LegalStatut: sdk.String("SAS"),
            Name: sdk.String("Dupond"),
            RegistrationNumber: sdk.String("236542158"),
            Type: sdk.String("EPT"),
            VatNumber: sdk.String("46546847864"),
        },
        CompanyID: "P1863763784",
        ID: "P187867864",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDFoldersFolderIDPersonsMemberID

Add/Modify/Delete a person in a customer contract (except manager)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDFoldersFolderIDPersonsMemberID(ctx, operations.PatchSpacesIDFoldersFolderIDPersonsMemberIDRequest{
        RequestBody: operations.PatchSpacesIDFoldersFolderIDPersonsMemberIDRequestBody{
            Groups: []string{
                "quis",
            },
            IsAdmin: sdk.Bool(false),
            Role: operations.PatchSpacesIDFoldersFolderIDPersonsMemberIDRequestBodyRoleEnumCollaborator.ToPointer(),
        },
        FolderID: "T18784",
        ID: "P18784",
        MemberID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDFoldersFolderIDPersonsMemberIDActiveaccess

open an access

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDFoldersFolderIDPersonsMemberIDActiveaccess(ctx, operations.PatchSpacesIDFoldersFolderIDPersonsMemberIDActiveaccessRequest{
        FolderID: "T18784",
        ID: "P18784",
        MemberID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDFoldersFolderIDPersonsMemberIDUnactiveaccess

close an access

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDFoldersFolderIDPersonsMemberIDUnactiveaccess(ctx, operations.PatchSpacesIDFoldersFolderIDPersonsMemberIDUnactiveaccessRequest{
        FolderID: "T18784",
        ID: "P18784",
        MemberID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDGroupsGroupID

Modify a group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDGroupsGroupID(ctx, operations.PatchSpacesIDGroupsGroupIDRequest{
        RequestBody: operations.PatchSpacesIDGroupsGroupIDRequestBody{
            EndDate: sdk.String("20160203"),
            Name: sdk.String("RH"),
        },
        GroupID: "P1863763784",
        ID: "P187867864",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDGroupsGroupIDFoldersFolderID

Add access to a folder for a group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDGroupsGroupIDFoldersFolderID(ctx, operations.PatchSpacesIDGroupsGroupIDFoldersFolderIDRequest{
        RequestBody: operations.PatchSpacesIDGroupsGroupIDFoldersFolderIDRequestBody{
            Right: operations.PatchSpacesIDGroupsGroupIDFoldersFolderIDRequestBodyRightEnumRead,
        },
        FolderID: "P1863763784",
        GroupID: "P1863763784",
        ID: "P187867864",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDGroupsGroupIDPersonsMemberID

Add a person to a group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDGroupsGroupIDPersonsMemberID(ctx, operations.PatchSpacesIDGroupsGroupIDPersonsMemberIDRequest{
        GroupID: "P1863763784",
        ID: "P187867864",
        MemberID: "P1863763784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDLegal

Modify legal information of a Space (except private)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDLegal(ctx, operations.PatchSpacesIDLegalRequest{
        Legal: shared.Legal{
            IdentificationNumber: sdk.String("548"),
            RegistrationDate: sdk.String("20190325"),
            RegistrationNumber: sdk.String("123456"),
            VATNumber: sdk.String("123"),
        },
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDPersonsMemberIDPlayer

Modify the role of a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDPersonsMemberIDPlayer(ctx, operations.PatchSpacesIDPersonsMemberIDPlayerRequest{
        RequestBody: operations.PatchSpacesIDPersonsMemberIDPlayerRequestBody{
            ClientManagement: operations.PatchSpacesIDPersonsMemberIDPlayerRequestBodyClientManagementEnumNo.ToPointer(),
            IsAdmin: sdk.Bool(true),
            Player: operations.PatchSpacesIDPersonsMemberIDPlayerRequestBodyPlayerEnumGuest,
            PlayerEnd: sdk.String("20210203"),
        },
        ID: "P18784",
        MemberID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDPersonsPersonID

Modify a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDPersonsPersonID(ctx, operations.PatchSpacesIDPersonsPersonIDRequest{
        RequestBody: operations.PatchSpacesIDPersonsPersonIDRequestBody{
            Address: &operations.PatchSpacesIDPersonsPersonIDRequestBodyAddress{
                City: sdk.String("Paris"),
                Complement: sdk.String("batiment A"),
                Country: sdk.String("France"),
                Street: sdk.String("2, rue du chateau"),
                ZipCode: sdk.String("75001"),
            },
            ArchivalDate: sdk.String("20160203"),
            Birth: &operations.PatchSpacesIDPersonsPersonIDRequestBodyBirth{
                Date: sdk.Int64(19671231),
                Place: sdk.String("Lille"),
            },
            Comment: sdk.String("my brother"),
            Email: sdk.String("bertrand@monmail.com"),
            FirstName: sdk.String("Bertrand"),
            Mobile: sdk.String("+33606060606"),
            Name: sdk.String("Dupond"),
            Sex: operations.PatchSpacesIDPersonsPersonIDRequestBodySexEnumMale.ToPointer(),
        },
        ID: "P18784",
        PersonID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesIDPortfoliosPortfolioIDPersonsMemberID

Add/Modify/Delete a person in a portfolio (except manager)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesIDPortfoliosPortfolioIDPersonsMemberID(ctx, operations.PatchSpacesIDPortfoliosPortfolioIDPersonsMemberIDRequest{
        RequestBody: operations.PatchSpacesIDPortfoliosPortfolioIDPersonsMemberIDRequestBody{
            Apply: sdk.Bool(true),
            Groups: []string{
                "perferendis",
                "ipsam",
                "repellendus",
            },
            IsAdmin: sdk.Bool(false),
            Role: operations.PatchSpacesIDPortfoliosPortfolioIDPersonsMemberIDRequestBodyRoleEnumCollaborator.ToPointer(),
        },
        ID: "P18784",
        MemberID: "P18784",
        PortfolioID: "T18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDCommonFoldersID

Modify a common folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDCommonFoldersID(ctx, operations.PatchSpacesSpaceIDCommonFoldersIDRequest{
        RequestBody: operations.PatchSpacesSpaceIDCommonFoldersIDRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            ArchivalDate: sdk.String("20160203"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "quo",
                "odit",
                "at",
                "at",
            },
            Level: operations.PatchSpacesSpaceIDCommonFoldersIDRequestBodyLevelEnumConfidential.ToPointer(),
            Name: sdk.String("Dupond"),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDDocumentsDocumentID

modify a doc

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDDocumentsDocumentID(ctx, operations.PatchSpacesSpaceIDDocumentsDocumentIDRequest{
        RequestBody: operations.PatchSpacesSpaceIDDocumentsDocumentIDRequestBody{
            Accounting: &operations.PatchSpacesSpaceIDDocumentsDocumentIDRequestBodyAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PatchSpacesSpaceIDDocumentsDocumentIDRequestBodyAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201802"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            Title: sdk.String("Facture décembre"),
        },
        DocumentID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID

modify a bank statement

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDBankStatementsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDBankStatementsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDBankStatementsDocumentIDRequestBody{
            Balance: sdk.Float64(1352.63),
            Number: sdk.Float64(10015848),
            StatementDate: sdk.String("20160801"),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID

modify a contractual document

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentIDRequestBody{
            Amount: sdk.String("1001.36"),
            Designation: sdk.String("contrat client"),
            Reference: sdk.String("151465AFHIA"),
            StartDate: sdk.String("20181128"),
            Type: operations.PatchSpacesSpaceIDFoldersFolderIDContractualDocumentsDocumentIDRequestBodyTypeEnumQuotation.ToPointer(),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID

modify a coporate tax declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentIDRequestBody{
            Amount: sdk.Float32(132.63),
            DeclarationDate: sdk.String("20160801"),
            Order: operations.PatchSpacesSpaceIDFoldersFolderIDCorporateTaxDeclarationsDocumentIDRequestBodyOrderEnumOnestAdvance.ToPointer(),
            Rate: sdk.Float32(10.63),
            TaxBase: sdk.Float32(123.36),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID

modify an expense report

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentIDRequestBody{
            Account: operations.PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentIDRequestBodyAccountEnumCab.ToPointer(),
            ArchivalDate: sdk.String("20211231"),
            BeforeVAT: sdk.Float64(1000),
            ExpenseDate: sdk.String("20200202"),
            ExpenseReportID: sdk.String("PFOIAHF874984"),
            Provider: sdk.String("G7"),
            Reason: sdk.String("taxi"),
            Status: operations.PatchSpacesSpaceIDFoldersFolderIDExpenseProofsDocumentIDRequestBodyStatusEnumR.ToPointer(),
            Vat: sdk.Float64(19.5),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID

modify an expense report

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentIDRequestBody{
            BeforeVAT: sdk.Float64(1000),
            ExpenseDate: sdk.String("20200202"),
            InclVAT: sdk.Float64(1200),
            ProcessingDate: sdk.String("20200203"),
            Vat: sdk.Float64(19.5),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentID

modify a invoice

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentIDRequestBody{
            BeforeVAT: sdk.Float64(1000),
            DueDate: sdk.String("20190130"),
            InclVAT: sdk.Float64(1200),
            InvoiceDate: sdk.String("20200202"),
            Number: sdk.String("036459879874"),
            PaymentDate: sdk.String("20190131"),
            Type: operations.PatchSpacesSpaceIDFoldersFolderIDInvoicesDocumentIDRequestBodyTypeEnumCommercialInvoice.ToPointer(),
            Vat: sdk.Float64(19.5),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID

modify an other tax declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDOtherTaxesDocumentIDRequestBody{
            Amount: sdk.Float32(132.63),
            DeclarationDate: sdk.String("20160801"),
            Reference: sdk.String("décla CFE"),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDPayrollsDocumentID

modify a payroll

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDPayrollsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRequestBody{
            Begin: sdk.String("20160801"),
            EmployeeContributions: sdk.Float32(1352.63),
            EmployerContributions: sdk.Float32(132.63),
            End: sdk.String("20160831"),
            NetAmount: sdk.Float32(1005.63),
            TotalGrossAmount: sdk.Float32(1548.63),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDPayslipsDocumentID

modify a payslip

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDPayslipsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDPayslipsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDPayslipsDocumentIDRequestBody{
            Begin: sdk.String("20160801"),
            EmployeeContributions: sdk.Float32(2000.5),
            EmployerContributions: sdk.Float32(400.5),
            End: sdk.String("20160831"),
            FixedGrossAmount: sdk.Float32(1352.63),
            NetAmount: sdk.Float32(1005.63),
            TotalGrossAmount: sdk.Float32(1548.63),
            Vacation: sdk.Float32(20.5),
            VariableGrossAmount: sdk.Float32(132.63),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID

modify a social contract

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDSocialContractsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDSocialContractsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDSocialContractsDocumentIDRequestBody{
            ContractDate: sdk.String("20190202"),
            ContractDuration: sdk.String("6 mois"),
            ContractualChange: sdk.String("augmentation"),
            Position: sdk.String("cadre"),
            WageDevelopments: sdk.Float32(1548.63),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID

modify a social declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDSocialDeclarationsDocumentIDRequestBody{
            Amount: sdk.Float32(132.63),
            DeclarationDate: sdk.String("20160801"),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID

modify a vat declaration

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentID(ctx, operations.PatchSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentIDRequest{
        RequestBody: &operations.PatchSpacesSpaceIDFoldersFolderIDVatDeclarationsDocumentIDRequestBody{
            Begin: sdk.String("20160801"),
            CollectedVAT: sdk.Float32(1548.63),
            CreditVAT: sdk.Float32(400.5),
            DeductibleVAT: sdk.Float32(20.5),
            End: sdk.String("20160831"),
            ExemptTurnover: sdk.Float32(132.63),
            Number: sdk.String("153126"),
            PayableVAT: sdk.Float32(2000.5),
            TaxableTurnover: sdk.Float32(1352.63),
        },
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersID

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersID(ctx, operations.PatchSpacesSpaceIDFoldersIDRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "molestiae",
                "quod",
                "quod",
                "esse",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDRequestBodyLevelEnumConfidential.ToPointer(),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDAccountingYear

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDAccountingYear(ctx, operations.PatchSpacesSpaceIDFoldersIDAccountingYearRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDAccountingYearRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("ogm of the company"),
            End: sdk.String("20181231"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "porro",
                "dolorum",
                "dicta",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDAccountingYearRequestBodyLevelEnumConfidential.ToPointer(),
            NetIncome: sdk.Float64(52634.36),
            NetPosition: sdk.Float64(14580.36),
            Start: sdk.String("20180101"),
            Tax: sdk.Float64(45698.36),
            TaxableIncome: sdk.Float64(869523.36),
            Turnover: sdk.Float64(1025.36),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDBank

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDBank(ctx, operations.PatchSpacesSpaceIDFoldersIDBankRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDBankRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            ContractReference: sdk.String("13587449420F"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "officia",
                "occaecati",
                "fugit",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDBankRequestBodyLevelEnumConfidential.ToPointer(),
            Start: sdk.String("20180630"),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDCollectiveDecision

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDCollectiveDecision(ctx, operations.PatchSpacesSpaceIDFoldersIDCollectiveDecisionRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDCollectiveDecisionRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("ogm of the company"),
            Date: sdk.String("20180202"),
            DividendDistributions: sdk.Float64(1025.36),
            DividendDistributionsDate: sdk.String("20180203"),
            Event: operations.PatchSpacesSpaceIDFoldersIDCollectiveDecisionRequestBodyEventEnumEgm.ToPointer(),
            Home: sdk.Bool(true),
            Keywords: []string{
                "hic",
                "optio",
                "totam",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDCollectiveDecisionRequestBodyLevelEnumConfidential.ToPointer(),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDCustomer

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDCustomer(ctx, operations.PatchSpacesSpaceIDFoldersIDCustomerRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDCustomerRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            CustomerNumber: sdk.String("13587449420F"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            KeepOld: sdk.Bool(true),
            Keywords: []string{
                "commodi",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDCustomerRequestBodyLevelEnumConfidential.ToPointer(),
            PortfolioID: sdk.String("T1OJFOAZ7449420F"),
            SecondaryPortfolioID: sdk.String("T1OJFOAZ7449420F"),
            Start: sdk.String("20180630"),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDDocumentsDocumentIDDetach

Detach a doc of a folder

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDDocumentsDocumentIDDetach(ctx, operations.PatchSpacesSpaceIDFoldersIDDocumentsDocumentIDDetachRequest{
        DocumentID: "PJOFJAFA8Y",
        ID: "P18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDEmployee

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDEmployee(ctx, operations.PatchSpacesSpaceIDFoldersIDEmployeeRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDEmployeeRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            ContractType: sdk.String("01"),
            EmployeeNumber: sdk.String("13587FAZCD420F"),
            End: sdk.String("20190101"),
            Function: sdk.String("commercial"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "modi",
                "qui",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDEmployeeRequestBodyLevelEnumConfidential.ToPointer(),
            PostalMail: sdk.Bool(true),
            SSNumber: sdk.String("1542012365985215"),
            Start: sdk.String("20180630"),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDInsurance

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDInsurance(ctx, operations.PatchSpacesSpaceIDFoldersIDInsuranceRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDInsuranceRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            CustomerNumber: sdk.String("13587449420F"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "cum",
                "esse",
                "ipsum",
                "excepturi",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDInsuranceRequestBodyLevelEnumConfidential.ToPointer(),
            PolicyNumber: sdk.String("1358"),
            Start: sdk.String("20180630"),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDLoan

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDLoan(ctx, operations.PatchSpacesSpaceIDFoldersIDLoanRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDLoanRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Amount: sdk.Float32(1000),
            Category: operations.PatchSpacesSpaceIDFoldersIDLoanRequestBodyCategoryEnumDebtSpreading.ToPointer(),
            Comment: sdk.String("pieces company"),
            Designation: sdk.String("emprunt entreprise"),
            DueAmount: sdk.Float32(1000.6),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "perferendis",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDLoanRequestBodyLevelEnumConfidential.ToPointer(),
            MonthsNumber: sdk.Float64(12),
            Rate: sdk.Float32(2.5),
            Start: sdk.String("20180630"),
            TotalCost: sdk.Float32(10200),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDMessagesMessageID

Modify a Message

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDMessagesMessageID(ctx, operations.PatchSpacesSpaceIDFoldersIDMessagesMessageIDRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDMessagesMessageIDRequestBody{
            Level: operations.PatchSpacesSpaceIDFoldersIDMessagesMessageIDRequestBodyLevelEnumConfidential.ToPointer(),
            MessageDate: sdk.String("20160203"),
            Notify: &operations.PatchSpacesSpaceIDFoldersIDMessagesMessageIDRequestBodyNotify{
                How: operations.PatchSpacesSpaceIDFoldersIDMessagesMessageIDRequestBodyNotifyHowEnumSms.ToPointer(),
                MemberIds: []string{
                    "PJOFJAFJAOJ,PJFJAPJF",
                    "PJOFJAFJAOJ,PJFJAPJF",
                },
            },
            Text: sdk.String("<p> hello world </p>"),
        },
        ID: "P18784",
        MessageID: "TJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDPasswordsPasswordID

Modify a Password

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDPasswordsPasswordID(ctx, operations.PatchSpacesSpaceIDFoldersIDPasswordsPasswordIDRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDPasswordsPasswordIDRequestBody{
            Comment: sdk.String("mon compte google"),
            Designation: sdk.String("compte google"),
            Ident: sdk.String("test"),
            Link: sdk.String("www.google.fr"),
            Password: sdk.String("azerty"),
        },
        ID: "P18784",
        PasswordID: "TJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDProfessionalVehicle

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDProfessionalVehicle(ctx, operations.PatchSpacesSpaceIDFoldersIDProfessionalVehicleRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDProfessionalVehicleRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Brand: sdk.String("Renault"),
            Comment: sdk.String("Peugeot Lyon"),
            CompanyTax: sdk.Bool(true),
            DateIn: sdk.String("20201802"),
            DateOut: sdk.String("20201802"),
            Designation: sdk.String("peugeot siège"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "sed",
                "iste",
                "dolor",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDProfessionalVehicleRequestBodyLevelEnumConfidential.ToPointer(),
            Model: sdk.String("Clio"),
            RegistrationDate: sdk.String("20181231"),
            RegistrationNumber: sdk.String("AA001AA"),
            Type: sdk.String("car"),
            Value: sdk.Float64(1500.23),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDProvider

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDProvider(ctx, operations.PatchSpacesSpaceIDFoldersIDProviderRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDProviderRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "laboriosam",
                "hic",
                "saepe",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDProviderRequestBodyLevelEnumConfidential.ToPointer(),
            ProviderNumber: sdk.String("13587449420F"),
            Start: sdk.String("20180630"),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentid

Modify the status of a requireddocument

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentid(ctx, operations.PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidRequestBody{
            Status: operations.PatchSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidRequestBodyStatusEnumWaiting.ToPointer(),
        },
        ID: "P18784",
        Requireddocumentid: "T156HUFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDSocialRegimes

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDSocialRegimes(ctx, operations.PatchSpacesSpaceIDFoldersIDSocialRegimesRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDSocialRegimesRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "in",
                "corporis",
                "iste",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDSocialRegimesRequestBodyLevelEnumConfidential.ToPointer(),
            Periodicity: operations.PatchSpacesSpaceIDFoldersIDSocialRegimesRequestBodyPeriodicityEnumMonthly.ToPointer(),
            Start: sdk.String("20180630"),
            Type: operations.PatchSpacesSpaceIDFoldersIDSocialRegimesRequestBodyTypeEnumMandatory.ToPointer(),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDFoldersIDTaxContract

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDFoldersIDTaxContract(ctx, operations.PatchSpacesSpaceIDFoldersIDTaxContractRequest{
        RequestBody: operations.PatchSpacesSpaceIDFoldersIDTaxContractRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            ArchivalDate: sdk.String("20160203"),
            Comment: sdk.String("pieces company"),
            Designation: sdk.String("taxes foncières"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "saepe",
                "quidem",
            },
            Level: operations.PatchSpacesSpaceIDFoldersIDTaxContractRequestBodyLevelEnumConfidential.ToPointer(),
            Start: sdk.String("20180630"),
        },
        ID: "T18784",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchSpacesSpaceIDPersonsIDCallForDocument

modify the invitation of a person to collect documents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDPersonsIDCallForDocument(ctx, operations.PatchSpacesSpaceIDPersonsIDCallForDocumentRequest{
        ModifyCollect: shared.ModifyCollect{
            Categories: []string{
                "ID,Invoices",
            },
            ClientManagement: shared.ModifyCollectClientManagementEnumNo.ToPointer(),
            IsAdmin: sdk.Bool(true),
            Player: shared.ModifyCollectPlayerEnumGuest.ToPointer(),
            PlayerEnd: sdk.String("20190601"),
        },
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PatchSpacesSpaceIDPersonsIDCallForDocumentSecurity{
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

## PatchSpacesSpaceIDPersonsIDGuestInSpace

invite a person in a space

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDPersonsIDGuestInSpace(ctx, operations.PatchSpacesSpaceIDPersonsIDGuestInSpaceRequest{
        ModifyInvitation: shared.ModifyInvitation{
            ClientManagement: shared.ModifyInvitationClientManagementEnumAdn.ToPointer(),
            Folders: []shared.ModifyInvitationFolders{
                shared.ModifyInvitationFolders{
                    ID: sdk.String("PK8481482"),
                    Right: shared.ModifyInvitationFoldersRightEnumRead.ToPointer(),
                },
                shared.ModifyInvitationFolders{
                    ID: sdk.String("PK8481482"),
                    Right: shared.ModifyInvitationFoldersRightEnumRead.ToPointer(),
                },
                shared.ModifyInvitationFolders{
                    ID: sdk.String("PK8481482"),
                    Right: shared.ModifyInvitationFoldersRightEnumRead.ToPointer(),
                },
            },
            GroupIds: []string{
                "PJFIA84,PHAJHFJHA",
                "PJFIA84,PHAJHFJHA",
                "PJFIA84,PHAJHFJHA",
            },
            IsAdmin: sdk.Bool(true),
            Player: shared.ModifyInvitationPlayerEnumGuest.ToPointer(),
            PlayerEnd: sdk.String("20190601"),
        },
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PatchSpacesSpaceIDPersonsIDGuestInSpaceSecurity{
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

## PatchSpacesSpaceIDPersonsIDInvitation

modify an invitation

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
    res, err := s.SDK.PatchSpacesSpaceIDPersonsIDInvitation(ctx, operations.PatchSpacesSpaceIDPersonsIDInvitationRequest{
        RequestBody: operations.PatchSpacesSpaceIDPersonsIDInvitationRequestBody{
            ClientManagement: operations.PatchSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnumAdn.ToPointer(),
            EmployeeAccess: sdk.Bool(true),
            Folders: []PatchSpacesSpaceIDPersonsIDInvitationRequestBodyFolders{
                operations.PatchSpacesSpaceIDPersonsIDInvitationRequestBodyFolders{
                    ID: sdk.String("PK8481482"),
                    Right: operations.PatchSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnumRead.ToPointer(),
                },
            },
            GroupIds: []string{
                "PJFIA84,PHAJHFJHA",
            },
            IsAdmin: sdk.Bool(true),
            Player: operations.PatchSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnumGuest.ToPointer(),
            PlayerEnd: sdk.String("20190601"),
        },
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PatchSpacesSpaceIDPersonsIDInvitationSecurity{
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

## PatchSpacesSpaceIDPersonsMemberIDFoldersID

Modify an access

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PatchSpacesSpaceIDPersonsMemberIDFoldersID(ctx, operations.PatchSpacesSpaceIDPersonsMemberIDFoldersIDRequest{
        RequestBody: operations.PatchSpacesSpaceIDPersonsMemberIDFoldersIDRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "explicabo",
                "nobis",
            },
            Level: operations.PatchSpacesSpaceIDPersonsMemberIDFoldersIDRequestBodyLevelEnumConfidential.ToPointer(),
            Right: operations.PatchSpacesSpaceIDPersonsMemberIDFoldersIDRequestBodyRightEnumWrite.ToPointer(),
        },
        ID: "T18784",
        MemberID: "P156HUFHA476",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostBusinessGroups

Adds a group (only for managers and ADN collaborators)

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
    res, err := s.SDK.PostBusinessGroups(ctx, operations.PostBusinessGroupsRequestBody{
        Name: "Client Durand",
    }, operations.PostBusinessGroupsSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostBusinessGroups201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpace

send an invitation to manager the private space of personId

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
    res, err := s.SDK.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpace(ctx, operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpaceRequest{
        RequestBody: operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpaceRequestBody{
            Groups: []string{
                "omnis",
                "nemo",
            },
            Role: operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpaceRequestBodyRoleEnumCollaborator,
        },
        FolderID: "P18784",
        ID: "P18784",
        PersonID: "P18784",
        SpaceID: "P18784",
    }, operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpaceSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDGuestInSpace201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpaces

Add a Space in a group

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
    res, err := s.SDK.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpaces(ctx, operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpacesRequest{
        RequestBody: operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpacesRequestBody{
            Logo: &operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpacesRequestBodyLogo{
                Content64Encoded: sdk.String("NIFHAZFA07GA="),
                Name: sdk.String("toto.png"),
            },
            Name: sdk.String("Mon Entreprise"),
            TemplateSpaceID: sdk.String("PKOJOFOFKAOKF"),
            Type: operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpacesRequestBodyTypeEnumCompany,
        },
        FolderID: "P18784",
        ID: "P18784",
        PersonID: "P18784",
        SpaceID: "P18784",
    }, operations.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpacesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostBusinessGroupsIDSpacesSpaceIDLegalEntitiesPersonIDCustomersFolderIDSpaces201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubDocumentsJSON

Add a document (this document is analyzed to be saved in the correct folder and correct space)

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
    res, err := s.SDK.PostHubDocumentsJSON(ctx, operations.PostHubDocumentsApplicationJSON{
        Accounting: &operations.PostHubDocumentsApplicationJSONAccounting{
            AccountedOn: sdk.String("20181202"),
            Workbook: operations.PostHubDocumentsApplicationJSONAccountingWorkbookEnumFiscal.ToPointer(),
            YearMonth: sdk.String("201902"),
        },
        AddContractAllowed: sdk.Bool(true),
        Author: sdk.String("Antoine Dupond"),
        Comment: sdk.String("my document"),
        Date: sdk.String("20161203"),
        File: operations.PostHubDocumentsApplicationJSONFile{
            Content64Encoded: sdk.String("gjgjJ9FJA829H9HA18B"),
            Name: sdk.String("Mon Document"),
        },
        Title: "Facture décembre",
    }, operations.PostHubDocumentsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubDocumentsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubDocumentsMultipart

Add a document (this document is analyzed to be saved in the correct folder and correct space)

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
    res, err := s.SDK.PostHubDocumentsMultipart(ctx, operations.PostHubDocumentsMultipartFormData1{
        Accounting: &operations.PostHubDocumentsMultipartFormDataAccounting{
            AccountedOn: sdk.String("20181202"),
            Workbook: operations.PostHubDocumentsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
            YearMonth: sdk.String("201902"),
        },
        Author: sdk.String("Antoine Dupond"),
        Comment: sdk.String("my document"),
        Date: sdk.String("20161203"),
        File: operations.PostHubDocumentsMultipartFormDataFile{
            File: "minima",
            Content: []byte("excepturi"),
        },
        Title: "Facture décembre",
    }, operations.PostHubDocumentsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubDocumentsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubPayslipsJSON

Add a payslip (this document is analyzed to be saved in the correct folder and correct space)

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
    res, err := s.SDK.PostHubPayslipsJSON(ctx, operations.PostHubPayslipsApplicationJSON{
        Accounting: &operations.PostHubPayslipsApplicationJSONAccounting{
            AccountedOn: sdk.String("20181202"),
            Workbook: operations.PostHubPayslipsApplicationJSONAccountingWorkbookEnumFiscal.ToPointer(),
            YearMonth: sdk.String("201902"),
        },
        AddContractAllowed: sdk.Bool(true),
        Author: sdk.String("Antoine Dupond"),
        Comment: sdk.String("my document"),
        Date: sdk.String("20161203"),
        File: operations.PostHubPayslipsApplicationJSONFile{
            Content64Encoded: sdk.String("gjgjJ9FJA829H9HA18B"),
            Name: sdk.String("Mon Document"),
        },
        Title: "Facture décembre",
    }, operations.PostHubPayslipsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubPayslipsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubPayslipsMultipart

Add a payslip (this document is analyzed to be saved in the correct folder and correct space)

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
    res, err := s.SDK.PostHubPayslipsMultipart(ctx, operations.PostHubPayslipsMultipartFormData1{
        Accounting: &operations.PostHubPayslipsMultipartFormDataAccounting{
            AccountedOn: sdk.String("20181202"),
            Workbook: operations.PostHubPayslipsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
            YearMonth: sdk.String("201902"),
        },
        Author: sdk.String("Antoine Dupond"),
        Comment: sdk.String("my document"),
        Date: sdk.String("20161203"),
        File: operations.PostHubPayslipsMultipartFormDataFile{
            File: "accusantium",
            Content: []byte("iure"),
        },
        Title: "Facture décembre",
    }, operations.PostHubPayslipsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubPayslipsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubSpacesSpaceIDDocumentsJSON

Add a document in a space (this document is analyzed to be saved in the correct folder)

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
    res, err := s.SDK.PostHubSpacesSpaceIDDocumentsJSON(ctx, operations.PostHubSpacesSpaceIDDocumentsJSONRequest{
        RequestBody: operations.PostHubSpacesSpaceIDDocumentsApplicationJSON{
            Accounting: &operations.PostHubSpacesSpaceIDDocumentsApplicationJSONAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostHubSpacesSpaceIDDocumentsApplicationJSONAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostHubSpacesSpaceIDDocumentsApplicationJSONFile{
                Content64Encoded: sdk.String("gjgjJ9FJA829H9HA18B"),
                Name: sdk.String("Mon Document"),
            },
            Title: "Facture décembre",
        },
        SpaceID: "P156HUFHA476",
    }, operations.PostHubSpacesSpaceIDDocumentsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubSpacesSpaceIDDocumentsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubSpacesSpaceIDDocumentsMultipart

Add a document in a space (this document is analyzed to be saved in the correct folder)

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
    res, err := s.SDK.PostHubSpacesSpaceIDDocumentsMultipart(ctx, operations.PostHubSpacesSpaceIDDocumentsMultipartRequest{
        RequestBody: operations.PostHubSpacesSpaceIDDocumentsMultipartFormData1{
            Accounting: &operations.PostHubSpacesSpaceIDDocumentsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostHubSpacesSpaceIDDocumentsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostHubSpacesSpaceIDDocumentsMultipartFormDataFile{
                File: "culpa",
                Content: []byte("doloribus"),
            },
            Title: "Facture décembre",
        },
        SpaceID: "P156HUFHA476",
    }, operations.PostHubSpacesSpaceIDDocumentsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubSpacesSpaceIDDocumentsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubSpacesSpaceIDPayslipsJSON

Add a payslip in a space (this document is analyzed to be saved in the correct folder)

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
    res, err := s.SDK.PostHubSpacesSpaceIDPayslipsJSON(ctx, operations.PostHubSpacesSpaceIDPayslipsJSONRequest{
        RequestBody: operations.PostHubSpacesSpaceIDPayslipsApplicationJSON{
            Accounting: &operations.PostHubSpacesSpaceIDPayslipsApplicationJSONAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostHubSpacesSpaceIDPayslipsApplicationJSONAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostHubSpacesSpaceIDPayslipsApplicationJSONFile{
                Content64Encoded: sdk.String("gjgjJ9FJA829H9HA18B"),
                Name: sdk.String("Mon Document"),
            },
            Title: "Facture décembre",
        },
        SpaceID: "P156HUFHA476",
    }, operations.PostHubSpacesSpaceIDPayslipsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubSpacesSpaceIDPayslipsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostHubSpacesSpaceIDPayslipsMultipart

Add a payslip in a space (this document is analyzed to be saved in the correct folder)

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
    res, err := s.SDK.PostHubSpacesSpaceIDPayslipsMultipart(ctx, operations.PostHubSpacesSpaceIDPayslipsMultipartRequest{
        RequestBody: operations.PostHubSpacesSpaceIDPayslipsMultipartFormData1{
            Accounting: &operations.PostHubSpacesSpaceIDPayslipsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostHubSpacesSpaceIDPayslipsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostHubSpacesSpaceIDPayslipsMultipartFormDataFile{
                File: "sapiente",
                Content: []byte("architecto"),
            },
            Title: "Facture décembre",
        },
        SpaceID: "P156HUFHA476",
    }, operations.PostHubSpacesSpaceIDPayslipsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostHubSpacesSpaceIDPayslipsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostMenusMenuIDDocumentsJSON

add a document to the target menuId

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
    res, err := s.SDK.PostMenusMenuIDDocumentsJSON(ctx, operations.PostMenusMenuIDDocumentsJSONRequest{
        RequestBody: operations.PostMenusMenuIDDocumentsApplicationJSON{
            Author: sdk.String("Antoine Dupond"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostMenusMenuIDDocumentsApplicationJSONFile{
                Content64Encoded: sdk.String("gjgjJ9FJA829H9HA18B"),
                Name: sdk.String("Mon Document"),
            },
            Title: "Facture décembre",
        },
        MenuID: "P156HUFHA476",
    }, operations.PostMenusMenuIDDocumentsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostMenusMenuIDDocumentsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostMenusMenuIDDocumentsMultipart

add a document to the target menuId

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
    res, err := s.SDK.PostMenusMenuIDDocumentsMultipart(ctx, operations.PostMenusMenuIDDocumentsMultipartRequest{
        RequestBody: operations.PostMenusMenuIDDocumentsMultipartFormData{
            Author: sdk.String("Antoine Dupond"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostMenusMenuIDDocumentsMultipartFormDataFile{
                File: "mollitia",
                Content: []byte("dolorem"),
            },
            Title: "Facture décembre",
        },
        MenuID: "P156HUFHA476",
    }, operations.PostMenusMenuIDDocumentsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostMenusMenuIDDocumentsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostProfileJSON

create infos of profile

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
    res, err := s.SDK.PostProfileJSON(ctx, operations.PostProfileApplicationJSON{
        Birth: operations.PostProfileApplicationJSONBirth{
            City: sdk.String("Créteil"),
            Country: sdk.String("FR"),
            Date: sdk.String("19800101"),
            ZipCode: sdk.String("94000"),
        },
        BirthName: "Dupond",
        Email: "paule@durand.fr",
        FirstName: "Paule",
        IDFile: &operations.PostProfileApplicationJSONIDFile{
            Content64Encoded: sdk.String("PIHFPAH20FBIA="),
            Name: sdk.String("id.png"),
        },
        Name: "Durand",
        Sex: operations.PostProfileApplicationJSONSexEnumFemale,
    }, operations.PostProfileJSONSecurity{
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

## PostProfileMultipart

create infos of profile

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
    res, err := s.SDK.PostProfileMultipart(ctx, operations.PostProfileMultipartFormData1{
        Birth: operations.PostProfileMultipartFormDataBirth{
            City: sdk.String("Créteil"),
            Country: sdk.String("France"),
            Date: sdk.String("19800101"),
            ZipCode: sdk.String("94000"),
        },
        BirthName: "Dupond",
        Email: "paule@durand.fr",
        FirstName: "Paule",
        IDFile: &operations.PostProfileMultipartFormDataIDFile{
            IDFile: "consequuntur",
            Content: []byte("repellat"),
        },
        Name: "Durand",
        Sex: operations.PostProfileMultipartFormDataSexEnumFemale,
    }, operations.PostProfileMultipartSecurity{
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

## PostRegistration

complete the invitation

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
    res, err := s.SDK.PostRegistration(ctx, operations.PostRegistrationRequestBody{
        Code: sdk.String("OJFOA"),
        Secret: sdk.String("123456"),
    }, operations.PostRegistrationSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostRegistration201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpaces

Add a Space in my group

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
    res, err := s.SDK.PostSpaces(ctx, operations.PostSpacesRequestBody{
        LegalStatut: sdk.String("SA"),
        Logo: &operations.PostSpacesRequestBodyLogo{
            Content64Encoded: sdk.String("NIFHAZFA07GA="),
            Name: sdk.String("toto.png"),
        },
        Name: "Mon Entreprise",
        RegistrationNumber: sdk.String("5146486846"),
        TemplateSpaceID: sdk.String("PKOJOFOFKAOKF"),
        Type: operations.PostSpacesRequestBodyTypeEnumCompany,
    }, operations.PostSpacesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpaces201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDAccountingYear

Create a accounting year for the space id

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
    res, err := s.SDK.PostSpacesIDAccountingYear(ctx, operations.PostSpacesIDAccountingYearRequest{
        RequestBody: operations.PostSpacesIDAccountingYearRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("ogm of the company"),
            End: "20181231",
            Home: sdk.Bool(true),
            Keywords: []string{
                "numquam",
                "commodi",
                "quam",
            },
            Level: operations.PostSpacesIDAccountingYearRequestBodyLevelEnumConfidential.ToPointer(),
            NetIncome: sdk.Float64(52634.36),
            NetPosition: sdk.Float64(14580.36),
            Start: sdk.String("20180101"),
            Tax: sdk.Float64(45698.36),
            TaxableIncome: sdk.Float64(869523.36),
            Turnover: sdk.Float64(1025.36),
        },
        ID: "P198746",
    }, operations.PostSpacesIDAccountingYearSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDAccountingYear201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDCollectiveDecision

Create a colletive decision for the space id

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
    res, err := s.SDK.PostSpacesIDCollectiveDecision(ctx, operations.PostSpacesIDCollectiveDecisionRequest{
        RequestBody: operations.PostSpacesIDCollectiveDecisionRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("ogm of the company"),
            Date: "20180202",
            DividendDistributions: sdk.Float64(1025.36),
            DividendDistributionsDate: sdk.String("20180203"),
            Event: operations.PostSpacesIDCollectiveDecisionRequestBodyEventEnumEgm,
            Home: sdk.Bool(true),
            Keywords: []string{
                "velit",
                "error",
            },
            Level: operations.PostSpacesIDCollectiveDecisionRequestBodyLevelEnumConfidential.ToPointer(),
        },
        ID: "P198746",
    }, operations.PostSpacesIDCollectiveDecisionSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDCollectiveDecision201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDCompanyEntities

Add a Company Entity in a Space

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
    res, err := s.SDK.PostSpacesIDCompanyEntities(ctx, operations.PostSpacesIDCompanyEntitiesRequest{
        RequestBody: operations.PostSpacesIDCompanyEntitiesRequestBody{
            ApeCode: sdk.String("420F"),
            ArchivalDate: sdk.String("20160203"),
            Comment: sdk.String("my brother"),
            LegalName: "Mon entreprise Dupond",
            LegalStatut: sdk.String("SAS"),
            Name: "Dupond",
            RegistrationNumber: sdk.String("236542158"),
            Type: sdk.String("EPT"),
            VatNumber: sdk.String("46546847864"),
        },
        ID: "T198746",
    }, operations.PostSpacesIDCompanyEntitiesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDCompanyEntities201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDCompanyEntitiesPersonIDDetails

Replace or Add a contact detail for a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostSpacesIDCompanyEntitiesPersonIDDetails(ctx, operations.PostSpacesIDCompanyEntitiesPersonIDDetailsRequest{
        RequestBody: operations.PostSpacesIDCompanyEntitiesPersonIDDetailsRequestBody{
            Address: &operations.PostSpacesIDCompanyEntitiesPersonIDDetailsRequestBodyAddress{
                City: sdk.String("Paris"),
                Complement: sdk.String("batiment A"),
                Country: sdk.String("France"),
                Street: sdk.String("2, rue du chateau"),
                ZipCode: sdk.String("75001"),
            },
            Designation: "Office",
            Email: []string{
                "bertrand@monmail.com",
            },
            Phone: []string{
                "+33606060606",
                "+33606060606",
            },
        },
        ID: "P18784",
        PersonID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSpacesIDDocumentsDownload

create an archive with documents

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
    res, err := s.SDK.PostSpacesIDDocumentsDownload(ctx, operations.PostSpacesIDDocumentsDownloadRequest{
        RequestBody: operations.PostSpacesIDDocumentsDownloadRequestBody{
            DocumentID: []string{
                "POFA872498",
            },
        },
        ID: "P198746",
    }, operations.PostSpacesIDDocumentsDownloadSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDDocumentsDownload201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDFoldersFolderIDPersonsPersonIDGuestInSpace

invite a owner in a space

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostSpacesIDFoldersFolderIDPersonsPersonIDGuestInSpace(ctx, operations.PostSpacesIDFoldersFolderIDPersonsPersonIDGuestInSpaceRequest{
        InvitationPerson: shared.InvitationPerson{
            PersonID: sdk.String("PAIHIHFA79TFA"),
        },
        FolderID: "T198NFNIAJFAA46",
        ID: "P156HUFHA476",
        PersonID: "P198NFNIAJFAA46",
    }, operations.PostSpacesIDFoldersFolderIDPersonsPersonIDGuestInSpaceSecurity{
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

## PostSpacesIDGroups

Add a group in a Space

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
    res, err := s.SDK.PostSpacesIDGroups(ctx, operations.PostSpacesIDGroupsRequest{
        RequestBody: operations.PostSpacesIDGroupsRequestBody{
            EndDate: sdk.String("20160203"),
            Name: "RH",
        },
        ID: "T198746",
    }, operations.PostSpacesIDGroupsSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDGroups201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDPersons

Add a Person in a Space

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
    res, err := s.SDK.PostSpacesIDPersons(ctx, operations.PostSpacesIDPersonsRequest{
        RequestBody: operations.PostSpacesIDPersonsRequestBody{
            Address: &operations.PostSpacesIDPersonsRequestBodyAddress{
                City: sdk.String("Paris"),
                Complement: sdk.String("batiment A"),
                Country: sdk.String("France"),
                Street: sdk.String("2, rue du chateau"),
                ZipCode: sdk.String("75001"),
            },
            ArchivalDate: sdk.String("20160203"),
            Birth: &operations.PostSpacesIDPersonsRequestBodyBirth{
                Date: sdk.Int64(19671231),
                Place: sdk.String("Lille"),
            },
            Comment: sdk.String("my brother"),
            Email: sdk.String("bertrand@monmail.com"),
            FirstName: "Bertrand",
            Mobile: sdk.String("+33606060606"),
            Name: "Dupond",
            Sex: operations.PostSpacesIDPersonsRequestBodySexEnumMale,
        },
        ID: "P198746",
    }, operations.PostSpacesIDPersonsSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDPersons201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDPersonsPersonIDDetails

Replace or Add a contact detail for a person

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostSpacesIDPersonsPersonIDDetails(ctx, operations.PostSpacesIDPersonsPersonIDDetailsRequest{
        RequestBody: operations.PostSpacesIDPersonsPersonIDDetailsRequestBody{
            Address: &operations.PostSpacesIDPersonsPersonIDDetailsRequestBodyAddress{
                City: sdk.String("Paris"),
                Complement: sdk.String("batiment A"),
                Country: sdk.String("France"),
                Street: sdk.String("2, rue du chateau"),
                ZipCode: sdk.String("75001"),
            },
            Designation: "Office",
            Email: []string{
                "bertrand@monmail.com",
                "bertrand@monmail.com",
                "bertrand@monmail.com",
            },
            Phone: []string{
                "+33606060606",
                "+33606060606",
                "+33606060606",
            },
        },
        ID: "P18784",
        PersonID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSpacesIDPersonsPersonIDPortfolios

Create a portfolio for the person personId

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
    res, err := s.SDK.PostSpacesIDPersonsPersonIDPortfolios(ctx, operations.PostSpacesIDPersonsPersonIDPortfoliosRequest{
        RequestBody: &operations.PostSpacesIDPersonsPersonIDPortfoliosRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            ArchivalDate: sdk.String("20160203"),
            Designation: sdk.String("My Portfolio"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "odit",
                "quo",
            },
            Level: operations.PostSpacesIDPersonsPersonIDPortfoliosRequestBodyLevelEnumConfidential.ToPointer(),
            Name: sdk.String("Dupond"),
        },
        ID: "P198746",
        PersonID: "T18784",
    }, operations.PostSpacesIDPersonsPersonIDPortfoliosSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDPersonsPersonIDPortfolios201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDProfessionalVehicles

Create a professional vehicle for the space

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
    res, err := s.SDK.PostSpacesIDProfessionalVehicles(ctx, operations.PostSpacesIDProfessionalVehiclesRequest{
        RequestBody: operations.PostSpacesIDProfessionalVehiclesRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Brand: sdk.String("Renault"),
            Comment: sdk.String("Peugeot Lyon"),
            CompanyTax: sdk.Bool(true),
            DateIn: sdk.String("20201802"),
            DateOut: sdk.String("20201802"),
            Designation: "peugeot siège",
            Home: sdk.Bool(true),
            Keywords: []string{
                "tenetur",
            },
            Level: operations.PostSpacesIDProfessionalVehiclesRequestBodyLevelEnumConfidential.ToPointer(),
            Model: sdk.String("Clio"),
            RegistrationDate: sdk.String("20181231"),
            RegistrationNumber: sdk.String("AA001AA"),
            Type: sdk.String("car"),
            Value: sdk.Float64(1500.23),
        },
        ID: "P198746",
    }, operations.PostSpacesIDProfessionalVehiclesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDProfessionalVehicles201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDSettingsNf203Logs

Enable/Disable logs

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
    res, err := s.SDK.PostSpacesIDSettingsNf203Logs(ctx, operations.PostSpacesIDSettingsNf203LogsRequest{
        RequestBody: &operations.PostSpacesIDSettingsNf203LogsRequestBody{
            Enabled: sdk.Bool(true),
        },
        ID: "P198746",
    }, operations.PostSpacesIDSettingsNf203LogsSecurity{
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

## PostSpacesIDStatus

Replace or Add a status

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostSpacesIDStatus(ctx, operations.PostSpacesIDStatusRequest{
        RequestBody: operations.PostSpacesIDStatusRequestBody{
            Code: "COD",
            Comment: sdk.String("my first code"),
            Label: "code 1",
        },
        ID: "P18784",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSpacesIDTaxContracts

Create a tax contract for the space

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
    res, err := s.SDK.PostSpacesIDTaxContracts(ctx, operations.PostSpacesIDTaxContractsRequest{
        RequestBody: operations.PostSpacesIDTaxContractsRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("ogm of the company"),
            Designation: "année 2019",
            End: sdk.String("20181231"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "id",
                "possimus",
            },
            Level: operations.PostSpacesIDTaxContractsRequestBodyLevelEnumConfidential.ToPointer(),
            Start: sdk.String("20180101"),
        },
        ID: "P198746",
    }, operations.PostSpacesIDTaxContractsSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesIDTaxContracts201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesIDTriggersName

Creates a trigger for the space id

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
    res, err := s.SDK.PostSpacesIDTriggersName(ctx, operations.PostSpacesIDTriggersNameRequest{
        ID: "P198746",
        Name: "collect",
    }, operations.PostSpacesIDTriggersNameSecurity{
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

## PostSpacesSpaceIDDocumentsDocumentIDExtend

Add a data to a document

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
    res, err := s.SDK.PostSpacesSpaceIDDocumentsDocumentIDExtend(ctx, operations.PostSpacesSpaceIDDocumentsDocumentIDExtendRequest{
        RequestBody: map[string]interface{}{
            "quasi": "error",
        },
        DocumentID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDDocumentsDocumentIDExtendSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDDocumentsDocumentIDExtend201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDDocumentsDocumentIDMailing

send by mail a document

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
    res, err := s.SDK.PostSpacesSpaceIDDocumentsDocumentIDMailing(ctx, operations.PostSpacesSpaceIDDocumentsDocumentIDMailingRequest{
        RequestBody: operations.PostSpacesSpaceIDDocumentsDocumentIDMailingRequestBody{
            Address: &operations.PostSpacesSpaceIDDocumentsDocumentIDMailingRequestBodyAddress{
                City: sdk.String("Paris"),
                Complement: sdk.String("batiment A"),
                Country: sdk.String("France"),
                Street: sdk.String("2, rue du chateau"),
                ZipCode: sdk.String("75001"),
            },
            Name: sdk.String("Société Dupond"),
        },
        DocumentID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDDocumentsDocumentIDMailingSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDDocumentsDocumentIDMailing200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDDocumentsDocumentIDVersionsJSON

Add a version to a document and set it as current

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
    res, err := s.SDK.PostSpacesSpaceIDDocumentsDocumentIDVersionsJSON(ctx, operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsApplicationJSON{
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsApplicationJSONFile{
                Content64Encoded: sdk.String("gjgjJ9FJA829H9HA18B"),
                Name: sdk.String("MonDocument.pdf"),
            },
            Title: "Facture décembre",
        },
        DocumentID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDDocumentsDocumentIDVersionsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipart

Add a version to a document and set it as current

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
    res, err := s.SDK.PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipart(ctx, operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipartFormData{
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipartFormDataFile{
                File: "temporibus",
                Content: []byte("laborum"),
            },
            Title: "Facture décembre",
        },
        DocumentID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDDocumentsDocumentIDVersionsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDExtend

Add a data to a space

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
    res, err := s.SDK.PostSpacesSpaceIDExtend(ctx, operations.PostSpacesSpaceIDExtendRequest{
        RequestBody: map[string]interface{}{
            "reiciendis": "voluptatibus",
        },
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDExtendSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDExtend201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRefresh

recalculate a payroll

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRefresh(ctx, operations.PostSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRefreshRequest{
        DocumentID: "PJOFJAFA8Y",
        FolderID: "PJOFJAFA8Y",
        SpaceID: "P156HUFHA476",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersFolderIDPayrollsDocumentIDRefresh201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDBankStatementsJSON

Add a bank statement in a folder bank

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDBankStatementsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDBankStatementsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDBankStatementsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDBankStatementsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDBankStatementsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDBankStatementsMultipart

Add a bank statement in a folder bank

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDBankStatementsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDBankStatementsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDBankStatementsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDBankStatementsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDBankStatementsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Balance: sdk.Float64(1352.63),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostSpacesSpaceIDFoldersIDBankStatementsMultipartFormDataFile{
                File: "vero",
                Content: []byte("nihil"),
            },
            Number: sdk.Float64(10015848),
            StatementDate: "20160801",
            Title: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDBankStatementsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDBankStatementsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDCommonFolders

Add a common folder in another folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDCommonFolders(ctx, operations.PostSpacesSpaceIDFoldersIDCommonFoldersRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDCommonFoldersRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            ArchivalDate: sdk.String("20160203"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "voluptatibus",
                "ipsa",
                "omnis",
            },
            Level: operations.PostSpacesSpaceIDFoldersIDCommonFoldersRequestBodyLevelEnumConfidential.ToPointer(),
            Name: "Dupond",
            Rights: sdk.Bool(true),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDCommonFoldersSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDCommonFolders201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDContractualDocumentsJSON

Add a document in a folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDContractualDocumentsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDContractualDocumentsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDContractualDocumentsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDContractualDocumentsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDContractualDocumentsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDContractualDocumentsMultipart

Add a document in a folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Amount: sdk.String("1001.36"),
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            Designation: sdk.String("contrat client"),
            File: operations.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipartFormDataFile{
                File: "voluptate",
                Content: []byte("cum"),
            },
            Reference: sdk.String("151465AFHIA"),
            StartDate: sdk.String("20181128"),
            Title: "Facture décembre",
            Type: operations.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipartFormDataTypeEnumQuotation.ToPointer(),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDContractualDocumentsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSON

Add a corporate tax declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipart

Add a corporate tax declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Amount: sdk.Float32(132.63),
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            DeclarationDate: sdk.String("20160801"),
            File: operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipartFormDataFile{
                File: "perferendis",
                Content: []byte("doloremque"),
            },
            Order: operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipartFormDataOrderEnumOnestAdvance.ToPointer(),
            Rate: sdk.Float32(10.63),
            TaxBase: sdk.Float32(123.36),
            Title: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDCoporateTaxDeclarationsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDDocumentsJSON

Add a document in a folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDDocumentsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDDocumentsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDDocumentsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDDocumentsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDDocumentsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDDocumentsMultipart

Add a document in a folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDDocumentsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDDocumentsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDDocumentsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDDocumentsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDDocumentsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostSpacesSpaceIDFoldersIDDocumentsMultipartFormDataFile{
                File: "reprehenderit",
                Content: []byte("ut"),
            },
            Title: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDDocumentsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDDocumentsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDExpenseProofsJSON

Add a expense proof in a folder followup or exchange

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDExpenseProofsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDExpenseProofsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDExpenseProofsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDExpenseProofsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDExpenseProofsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDExpenseProofsMultipart

Add a expense proof in a folder followup or exchange

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDExpenseProofsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartFormData1{
            Account: operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartFormDataAccountEnumCab.ToPointer(),
            Accounting: &operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            ArchivalDate: sdk.String("20211231"),
            Author: sdk.String("Antoine Dupond"),
            BeforeVAT: sdk.Float64(1000),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            ExpenseDate: sdk.String("20200202"),
            ExpenseReportID: sdk.String("PFOIAHF874984"),
            File: operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartFormDataFile{
                File: "maiores",
                Content: []byte("dicta"),
            },
            Provider: sdk.String("G7"),
            Reason: sdk.String("taxi"),
            Status: operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartFormDataStatusEnumR.ToPointer(),
            Title: "Facture décembre",
            Vat: sdk.Float64(19.5),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDExpenseProofsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDExpenseProofsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDExpenseReportsJSON

Add a expense report in a folder followup

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDExpenseReportsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDExpenseReportsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDExpenseReportsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDExpenseReportsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDExpenseReportsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDExpenseReportsMultipart

Add a expense report in a folder followup

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDExpenseReportsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDExpenseReportsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDExpenseReportsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDExpenseReportsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDExpenseReportsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            BeforeVAT: sdk.Float64(1000),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            ExpenseDate: sdk.String("20200202"),
            File: operations.PostSpacesSpaceIDFoldersIDExpenseReportsMultipartFormDataFile{
                File: "corporis",
                Content: []byte("dolore"),
            },
            InclVAT: sdk.Float64(1200),
            ProcessingDate: sdk.String("20200203"),
            Title: "Facture décembre",
            Vat: sdk.Float64(19.5),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDExpenseReportsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDExpenseReportsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDInvoicesJSON

Add a invoice in a folder of a customer or a provider

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDInvoicesJSON(ctx, operations.PostSpacesSpaceIDFoldersIDInvoicesJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDInvoicesApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDInvoicesJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDInvoicesJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDInvoicesMultipart

Add a invoice in a folder of a customer or a provider

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDInvoicesMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDInvoicesMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDInvoicesMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDInvoicesMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDInvoicesMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            BeforeVAT: sdk.Float64(1000),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            DueDate: sdk.String("20190130"),
            File: operations.PostSpacesSpaceIDFoldersIDInvoicesMultipartFormDataFile{
                File: "iusto",
                Content: []byte("dicta"),
            },
            InclVAT: sdk.Float64(1200),
            InvoiceDate: sdk.String("20200202"),
            Number: sdk.String("036459879874"),
            PaymentDate: sdk.String("20190131"),
            Title: "Facture décembre",
            Type: operations.PostSpacesSpaceIDFoldersIDInvoicesMultipartFormDataTypeEnumCommercialInvoice.ToPointer(),
            Vat: sdk.Float64(19.5),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDInvoicesMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDInvoicesMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDMessages

Write a message in the journal of a folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDMessages(ctx, operations.PostSpacesSpaceIDFoldersIDMessagesRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDMessagesRequestBody{
            Level: operations.PostSpacesSpaceIDFoldersIDMessagesRequestBodyLevelEnumConfidential.ToPointer(),
            MessageDate: sdk.String("20160203"),
            Notify: &operations.PostSpacesSpaceIDFoldersIDMessagesRequestBodyNotify{
                How: operations.PostSpacesSpaceIDFoldersIDMessagesRequestBodyNotifyHowEnumSms.ToPointer(),
                MemberIds: []string{
                    "PJOFJAFJAOJ,PJFJAPJF",
                    "PJOFJAFJAOJ,PJFJAPJF",
                    "PJOFJAFJAOJ,PJFJAPJF",
                },
            },
            Text: "<p> hello world </p>",
        },
        ID: "P18784",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDMessagesSecurity{
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

## PostSpacesSpaceIDFoldersIDOtherTaxesJSON

Add a tax declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDOtherTaxesJSON(ctx, operations.PostSpacesSpaceIDFoldersIDOtherTaxesJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDOtherTaxesApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDOtherTaxesJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDOtherTaxesJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDOtherTaxesMultipart

Add a tax declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDOtherTaxesMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDOtherTaxesMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDOtherTaxesMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDOtherTaxesMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDOtherTaxesMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Amount: sdk.Float32(132.63),
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            DeclarationDate: sdk.String("20160801"),
            File: operations.PostSpacesSpaceIDFoldersIDOtherTaxesMultipartFormDataFile{
                File: "enim",
                Content: []byte("accusamus"),
            },
            Reference: sdk.String("décla CFE"),
            Title: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDOtherTaxesMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDOtherTaxesMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDPasswords

Write a identifier/password in aa folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDPasswords(ctx, operations.PostSpacesSpaceIDFoldersIDPasswordsRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDPasswordsRequestBody{
            Comment: sdk.String("mon compte google"),
            Designation: "compte google",
            Ident: sdk.String("test"),
            Link: sdk.String("www.google.fr"),
            Password: sdk.String("azerty"),
        },
        ID: "P18784",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDPasswordsSecurity{
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

## PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSON

Add a nominative social declaration in a folder social

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSON(ctx, operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        PayrollID: "P156HUFHA476",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipart

Add a nominative social declaration in a folder social

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipartFormDataFile{
                File: "commodi",
                Content: []byte("repudiandae"),
            },
            Title: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        PayrollID: "P156HUFHA476",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDPayrollsPayrollIDNominativeSocialDeclarationMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDPayrollsJSON

Add a payroll in a folder social

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDPayrollsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDPayrollsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDPayrollsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDPayrollsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDPayrollsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDPayrollsMultipart

Add a payroll in a folder social

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDPayrollsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDPayrollsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDPayrollsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDPayrollsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDPayrollsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Begin: sdk.String("20160801"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            EmployeeContributions: sdk.Float32(1352.63),
            EmployerContributions: sdk.Float32(132.63),
            End: sdk.String("20160831"),
            File: operations.PostSpacesSpaceIDFoldersIDPayrollsMultipartFormDataFile{
                File: "quae",
                Content: []byte("ipsum"),
            },
            NetAmount: sdk.Float32(1005.63),
            Title: "Facture décembre",
            TotalGrossAmount: sdk.Float32(1548.63),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDPayrollsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDPayrollsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDPayslipsJSON

Add a payslip in a folder employee

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDPayslipsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDPayslipsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDPayslipsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDPayslipsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDPayslipsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDPayslipsMultipart

Add a payslip in a folder employee

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDPayslipsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDPayslipsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDPayslipsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDPayslipsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDPayslipsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Begin: sdk.String("20160801"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            EmployeeContributions: sdk.Float32(2000.5),
            EmployerContributions: sdk.Float32(400.5),
            End: sdk.String("20160831"),
            File: operations.PostSpacesSpaceIDFoldersIDPayslipsMultipartFormDataFile{
                File: "quidem",
                Content: []byte("molestias"),
            },
            FixedGrossAmount: sdk.Float32(1352.63),
            NetAmount: sdk.Float32(1005.63),
            Title: "Facture décembre",
            TotalGrossAmount: sdk.Float32(1548.63),
            Vacation: sdk.Float32(20.5),
            VariableGrossAmount: sdk.Float32(132.63),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDPayslipsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDPayslipsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSON

Add a required document to a line

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSON(ctx, operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidApplicationJSON{
            File: operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidApplicationJSONFile{
                Content64Encoded: sdk.String("gjgjJ9FJA829H9HA18B"),
                Name: sdk.String("MonDocument.pdf"),
            },
        },
        ID: "P1987HGFKJFAA46",
        Requireddocumentid: "T156HUFHA476",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipart

Add a required document to a line

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipartFormData{
            File: operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipartFormDataFile{
                File: "excepturi",
                Content: []byte("pariatur"),
            },
            Name: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        Requireddocumentid: "T156HUFHA476",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDRequiredDocumentsRequireddocumentidMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDSocialContractsJSON

Add a social contract in a folder employee

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDSocialContractsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDSocialContractsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDSocialContractsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDSocialContractsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDSocialContractsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDSocialContractsMultipart

Add a social contract in a folder employee

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDSocialContractsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDSocialContractsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDSocialContractsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDSocialContractsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDSocialContractsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            ContractDate: sdk.String("20190202"),
            ContractDuration: sdk.String("6 mois"),
            ContractualChange: sdk.String("augmentation"),
            Date: sdk.String("20161203"),
            File: operations.PostSpacesSpaceIDFoldersIDSocialContractsMultipartFormDataFile{
                File: "modi",
                Content: []byte("praesentium"),
            },
            Position: sdk.String("cadre"),
            Title: "Facture décembre",
            WageDevelopments: sdk.Float32(1548.63),
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDSocialContractsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDSocialContractsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDSocialDeclarationsJSON

Add a social declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDSocialDeclarationsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDSocialDeclarationsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipart

Add a social declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Amount: sdk.Float32(132.63),
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            DeclarationDate: sdk.String("20160801"),
            File: operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipartFormDataFile{
                File: "rem",
                Content: []byte("voluptates"),
            },
            Title: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDSocialDeclarationsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDVatDeclarationsJSON

Add a vat declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDVatDeclarationsJSON(ctx, operations.PostSpacesSpaceIDFoldersIDVatDeclarationsJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDVatDeclarationsApplicationJSON{},
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDVatDeclarationsJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDVatDeclarationsJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDVatDeclarationsMultipart

Add a vat declaration

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Begin: sdk.String("20160801"),
            Code: sdk.String("COD"),
            CollectedVAT: sdk.Float32(1548.63),
            Comment: sdk.String("my document"),
            CreditVAT: sdk.Float32(400.5),
            Date: sdk.String("20161203"),
            DeductibleVAT: sdk.Float32(20.5),
            End: "20160831",
            ExemptTurnover: sdk.Float32(132.63),
            File: operations.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipartFormDataFile{
                File: "quasi",
                Content: []byte("repudiandae"),
            },
            Number: sdk.String("153126"),
            PayableVAT: sdk.Float32(2000.5),
            TaxableTurnover: sdk.Float32(1352.63),
            Title: "Facture décembre",
        },
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDVatDeclarationsMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDDocumentClassJSON

Add a document in a folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDDocumentClassJSON(ctx, operations.PostSpacesSpaceIDFoldersIDDocumentClassJSONRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDDocumentClassApplicationJSON{},
        DocumentClass: "birthCertificate",
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDDocumentClassJSONSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDDocumentClassJSON201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDFoldersIDDocumentClassMultipart

Add a document in a folder

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
    res, err := s.SDK.PostSpacesSpaceIDFoldersIDDocumentClassMultipart(ctx, operations.PostSpacesSpaceIDFoldersIDDocumentClassMultipartRequest{
        RequestBody: operations.PostSpacesSpaceIDFoldersIDDocumentClassMultipartFormData1{
            Accounting: &operations.PostSpacesSpaceIDFoldersIDDocumentClassMultipartFormDataAccounting{
                AccountedOn: sdk.String("20181202"),
                Workbook: operations.PostSpacesSpaceIDFoldersIDDocumentClassMultipartFormDataAccountingWorkbookEnumFiscal.ToPointer(),
                YearMonth: sdk.String("201902"),
            },
            Author: sdk.String("Antoine Dupond"),
            Code: sdk.String("COD"),
            Comment: sdk.String("my document"),
            Date: sdk.String("20161203"),
            File: operations.PostSpacesSpaceIDFoldersIDDocumentClassMultipartFormDataFile{
                File: "sint",
                Content: []byte("veritatis"),
            },
            Title: "Facture décembre",
        },
        DocumentClass: "birthCertificate",
        ID: "P1987HGFKJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDFoldersIDDocumentClassMultipartSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDFoldersIDDocumentClassMultipart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDLegalEntitiesIDBanks

Add a folder for a bank

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
    res, err := s.SDK.PostSpacesSpaceIDLegalEntitiesIDBanks(ctx, operations.PostSpacesSpaceIDLegalEntitiesIDBanksRequest{
        RequestBody: operations.PostSpacesSpaceIDLegalEntitiesIDBanksRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            ContractReference: sdk.String("13587449420F"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "incidunt",
                "enim",
                "consequatur",
                "est",
            },
            Level: operations.PostSpacesSpaceIDLegalEntitiesIDBanksRequestBodyLevelEnumConfidential.ToPointer(),
            Start: sdk.String("20180630"),
        },
        ID: "T1987HGFA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDLegalEntitiesIDBanksSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDLegalEntitiesIDBanks201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDLegalEntitiesIDCustomers

Add a folder for a customer

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
    res, err := s.SDK.PostSpacesSpaceIDLegalEntitiesIDCustomers(ctx, operations.PostSpacesSpaceIDLegalEntitiesIDCustomersRequest{
        RequestBody: operations.PostSpacesSpaceIDLegalEntitiesIDCustomersRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            CustomerNumber: sdk.String("13587449420F"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "explicabo",
                "deserunt",
                "distinctio",
                "quibusdam",
            },
            Level: operations.PostSpacesSpaceIDLegalEntitiesIDCustomersRequestBodyLevelEnumConfidential.ToPointer(),
            PortfolioID: sdk.String("T1OJFOAZ7449420F"),
            Start: sdk.String("20180630"),
        },
        ID: "T1987HGFA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDLegalEntitiesIDCustomersSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDLegalEntitiesIDCustomers201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDLegalEntitiesIDInsurances

Add a folder for a insurance

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
    res, err := s.SDK.PostSpacesSpaceIDLegalEntitiesIDInsurances(ctx, operations.PostSpacesSpaceIDLegalEntitiesIDInsurancesRequest{
        RequestBody: operations.PostSpacesSpaceIDLegalEntitiesIDInsurancesRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            CustomerNumber: sdk.String("13587449420F"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "modi",
                "qui",
            },
            Level: operations.PostSpacesSpaceIDLegalEntitiesIDInsurancesRequestBodyLevelEnumConfidential.ToPointer(),
            PolicyNumber: sdk.String("1358"),
            Start: sdk.String("20180630"),
        },
        ID: "T1987HGFA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDLegalEntitiesIDInsurancesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDLegalEntitiesIDInsurances201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDLegalEntitiesIDLoans

Add a folder for a loan

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
    res, err := s.SDK.PostSpacesSpaceIDLegalEntitiesIDLoans(ctx, operations.PostSpacesSpaceIDLegalEntitiesIDLoansRequest{
        RequestBody: operations.PostSpacesSpaceIDLegalEntitiesIDLoansRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Amount: sdk.Float32(1000),
            Category: operations.PostSpacesSpaceIDLegalEntitiesIDLoansRequestBodyCategoryEnumDebtSpreading.ToPointer(),
            Comment: sdk.String("pieces company"),
            Designation: sdk.String("emprunt entreprise"),
            DueAmount: sdk.Float32(1000.6),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "cupiditate",
                "quos",
            },
            Level: operations.PostSpacesSpaceIDLegalEntitiesIDLoansRequestBodyLevelEnumConfidential.ToPointer(),
            MonthsNumber: sdk.Float64(12),
            Rate: sdk.Float32(2.5),
            Start: sdk.String("20180630"),
            TotalCost: sdk.Float32(10200),
        },
        ID: "T1987HGFA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDLegalEntitiesIDLoansSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDLegalEntitiesIDLoans201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDLegalEntitiesIDProviders

Add a folder for a provider

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
    res, err := s.SDK.PostSpacesSpaceIDLegalEntitiesIDProviders(ctx, operations.PostSpacesSpaceIDLegalEntitiesIDProvidersRequest{
        RequestBody: operations.PostSpacesSpaceIDLegalEntitiesIDProvidersRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "magni",
            },
            Level: operations.PostSpacesSpaceIDLegalEntitiesIDProvidersRequestBodyLevelEnumConfidential.ToPointer(),
            ProviderNumber: sdk.String("13587449420F"),
            Start: sdk.String("20180630"),
        },
        ID: "P1987HGFA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDLegalEntitiesIDProvidersSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDLegalEntitiesIDProviders201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDLegalEntitiesIDSocialRegimes

Add a folder for a social regime

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
    res, err := s.SDK.PostSpacesSpaceIDLegalEntitiesIDSocialRegimes(ctx, operations.PostSpacesSpaceIDLegalEntitiesIDSocialRegimesRequest{
        RequestBody: operations.PostSpacesSpaceIDLegalEntitiesIDSocialRegimesRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            Designation: sdk.String("client pièces détachées"),
            End: sdk.String("20190101"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "ipsam",
                "alias",
                "fugit",
                "dolorum",
            },
            Level: operations.PostSpacesSpaceIDLegalEntitiesIDSocialRegimesRequestBodyLevelEnumConfidential.ToPointer(),
            Periodicity: operations.PostSpacesSpaceIDLegalEntitiesIDSocialRegimesRequestBodyPeriodicityEnumMonthly.ToPointer(),
            Start: sdk.String("20180630"),
            Type: operations.PostSpacesSpaceIDLegalEntitiesIDSocialRegimesRequestBodyTypeEnumMandatory.ToPointer(),
        },
        ID: "P1987HGFA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDLegalEntitiesIDSocialRegimesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDLegalEntitiesIDSocialRegimes201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDPersonsIDCallForDocument

invite a person to collect documents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostSpacesSpaceIDPersonsIDCallForDocument(ctx, operations.PostSpacesSpaceIDPersonsIDCallForDocumentRequest{
        CallForDocument: shared.CallForDocument{
            Categories: []string{
                "tempora",
                "facilis",
                "tempore",
            },
            ClientManagement: shared.CallForDocumentClientManagementEnumNo.ToPointer(),
            Comment: sdk.String("first invitation"),
            Contact: sdk.String("Dupond"),
            IsAdmin: sdk.Bool(true),
            Message: sdk.String("<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>"),
            Player: shared.CallForDocumentPlayerEnumGuest.ToPointer(),
            PlayerEnd: sdk.String("20190601"),
            Signature: sdk.String("cordialement"),
            Subject: sdk.String("invitation sur le coffre"),
        },
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDPersonsIDCallForDocumentSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDPersonsIDCallForDocument201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDPersonsIDEmployees

Add a folder for a employee

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
    res, err := s.SDK.PostSpacesSpaceIDPersonsIDEmployees(ctx, operations.PostSpacesSpaceIDPersonsIDEmployeesRequest{
        RequestBody: operations.PostSpacesSpaceIDPersonsIDEmployeesRequestBody{
            About: sdk.String("<b> Mon premier dossier </b>"),
            Comment: sdk.String("pieces company"),
            ContractType: sdk.String("01"),
            EmployeeNumber: sdk.String("13587FAZCD420F"),
            End: sdk.String("20190101"),
            Function: sdk.String("commercial"),
            Home: sdk.Bool(true),
            Keywords: []string{
                "eum",
                "non",
                "eligendi",
                "sint",
            },
            Level: operations.PostSpacesSpaceIDPersonsIDEmployeesRequestBodyLevelEnumConfidential.ToPointer(),
            PostalMail: sdk.Bool(true),
            SSNumber: sdk.String("1542012365985215"),
            Start: sdk.String("20180630"),
        },
        ID: "P198JFUAFA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDPersonsIDEmployeesSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDPersonsIDEmployees201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDPersonsIDGuestInSpace

invite a person in a space

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostSpacesSpaceIDPersonsIDGuestInSpace(ctx, operations.PostSpacesSpaceIDPersonsIDGuestInSpaceRequest{
        GuestInSpace: shared.GuestInSpace{
            ClientManagement: shared.GuestInSpaceClientManagementEnumManager.ToPointer(),
            Comment: sdk.String("first invitation"),
            Contact: sdk.String("Dupond"),
            Folders: []shared.GuestInSpaceFolders{
                shared.GuestInSpaceFolders{
                    ID: sdk.String("PK8481482"),
                    Right: shared.GuestInSpaceFoldersRightEnumRead.ToPointer(),
                },
                shared.GuestInSpaceFolders{
                    ID: sdk.String("PK8481482"),
                    Right: shared.GuestInSpaceFoldersRightEnumRead.ToPointer(),
                },
                shared.GuestInSpaceFolders{
                    ID: sdk.String("PK8481482"),
                    Right: shared.GuestInSpaceFoldersRightEnumRead.ToPointer(),
                },
            },
            GroupIds: []string{
                "PJFIA84,PHAJHFJHA",
                "PJFIA84,PHAJHFJHA",
                "PJFIA84,PHAJHFJHA",
                "PJFIA84,PHAJHFJHA",
            },
            IsAdmin: sdk.Bool(true),
            MemberID: sdk.String("PAIHIHFA79TFA"),
            Message: sdk.String("<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>"),
            Player: shared.GuestInSpacePlayerEnumGuest.ToPointer(),
            PlayerEnd: sdk.String("20190601"),
            Signature: sdk.String("cordialement"),
            Subject: sdk.String("invitation sur le coffre"),
        },
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDPersonsIDGuestInSpaceSecurity{
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

## PostSpacesSpaceIDPersonsIDInvitation

create an invitation in a space for a person

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
    res, err := s.SDK.PostSpacesSpaceIDPersonsIDInvitation(ctx, operations.PostSpacesSpaceIDPersonsIDInvitationRequest{
        RequestBody: operations.PostSpacesSpaceIDPersonsIDInvitationRequestBody{
            ClientManagement: operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnumManager.ToPointer(),
            EmployeeAccess: sdk.Bool(true),
            Folders: []PostSpacesSpaceIDPersonsIDInvitationRequestBodyFolders{
                operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyFolders{
                    ID: sdk.String("PK8481482"),
                    Right: operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnumRead.ToPointer(),
                },
                operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyFolders{
                    ID: sdk.String("PK8481482"),
                    Right: operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnumRead.ToPointer(),
                },
                operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyFolders{
                    ID: sdk.String("PK8481482"),
                    Right: operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnumRead.ToPointer(),
                },
            },
            GroupIds: []string{
                "PJFIA84,PHAJHFJHA",
            },
            IsAdmin: sdk.Bool(true),
            Player: operations.PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnumGuest.ToPointer(),
            PlayerEnd: sdk.String("20190601"),
        },
        ID: "P198NFNIAJFAA46",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDPersonsIDInvitationSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDPersonsIDInvitation201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSpacesSpaceIDPersonsIDInvitationInvitationIDSend

send the invitation of a person in a space

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
    res, err := s.SDK.PostSpacesSpaceIDPersonsIDInvitationInvitationIDSend(ctx, operations.PostSpacesSpaceIDPersonsIDInvitationInvitationIDSendRequest{
        RequestBody: operations.PostSpacesSpaceIDPersonsIDInvitationInvitationIDSendRequestBody{
            Contact: sdk.String("Dupond"),
            Message: sdk.String("<p> Bienvenue dans l'espace de l'envtreprise SOCIETE </p>"),
            Signature: sdk.String("cordialement"),
            Subject: sdk.String("invitation sur le coffre"),
        },
        ID: "P198NFNIAJFAA46",
        InvitationID: "P156HUFHA476",
        SpaceID: "P156HUFHA476",
    }, operations.PostSpacesSpaceIDPersonsIDInvitationInvitationIDSendSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSpacesSpaceIDPersonsIDInvitationInvitationIDSend201ApplicationJSONObject != nil {
        // handle response
    }
}
```
