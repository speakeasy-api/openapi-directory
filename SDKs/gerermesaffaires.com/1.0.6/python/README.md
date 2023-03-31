# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/gerermesaffaires.com/1.0.6/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteBusinessGroupsIDSpacesSpaceIDRequest(
    id="P18784",
    space_id="P18784",
)
    
res = s.delete_business_groups_id_spaces_space_id_(req, operations.DeleteBusinessGroupsIDSpacesSpaceIDSecurity(
    gma_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_business_groups_id_spaces_space_id_` - Remove a customer space from partner
* `delete_spaces_id_` - Delete a Space (only space not delivered to customer)
* `delete_spaces_id_company_entities_person_id_details_designation_` - delete a contact detail for a company entity
* `delete_spaces_id_groups_group_id_folders_folder_id_` - delete access to a folder for a group
* `delete_spaces_id_groups_group_id_persons_member_id_` - Delete a person of a group
* `delete_spaces_id_persons_person_id_` - delete a person
* `delete_spaces_id_persons_person_id_details_designation_` - delete a contact detail for a person
* `delete_spaces_id_status_code_` - delete a status of the space
* `delete_spaces_id_triggers_name_` - Deletes a trigger for the space id
* `delete_spaces_space_id_common_folders_id_` - Delete a common folder
* `delete_spaces_space_id_folders_folder_id_bank_statements_document_id_` - delete a bank statement
* `delete_spaces_space_id_folders_folder_id_contractual_documents_document_id_` - delete a contractual document
* `delete_spaces_space_id_folders_folder_id_corporate_tax_declarations_document_id_` - delete a corporate tax declaration
* `delete_spaces_space_id_folders_folder_id_expense_proofs_document_id_` - delete an expense proof
* `delete_spaces_space_id_folders_folder_id_expense_reports_document_id_` - delete an expense report
* `delete_spaces_space_id_folders_folder_id_invoices_document_id_` - delete an invoice document
* `delete_spaces_space_id_folders_folder_id_other_taxes_document_id_` - delete a tax declaration
* `delete_spaces_space_id_folders_folder_id_payrolls_document_id_` - delete a payroll
* `delete_spaces_space_id_folders_folder_id_payslips_document_id_` - delete a payslip
* `delete_spaces_space_id_folders_folder_id_social_contracts_document_id_` - delete a social contract
* `delete_spaces_space_id_folders_folder_id_social_declarations_document_id_` - delete a social declaration
* `delete_spaces_space_id_folders_folder_id_vat_declarations_document_id_` - delete a VAT declaration
* `delete_spaces_space_id_folders_id_accounting_year` - delete an AccountingYear
* `delete_spaces_space_id_folders_id_bank` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* `delete_spaces_space_id_folders_id_customer` - delete a customer
* `delete_spaces_space_id_folders_id_employee` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* `delete_spaces_space_id_folders_id_insurance` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* `delete_spaces_space_id_folders_id_loan` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* `delete_spaces_space_id_folders_id_passwords_password_id_` - delete a password
* `delete_spaces_space_id_folders_id_payrolls_payroll_id_nominative_social_declaration` - delete a nominative social declaration in a folder social
* `delete_spaces_space_id_folders_id_portfolio_portfolio_id_` - delete a secondary portfolio of a customer contract
* `delete_spaces_space_id_folders_id_professional_vehicle` - delete a Professional Vehicle
* `delete_spaces_space_id_folders_id_provider` - delete a provider
* `delete_spaces_space_id_folders_id_required_documents_requireddocumentid_documents_document_id_` - delete a document from a required document
* `delete_spaces_space_id_folders_id_social_regimes` - delete a social regime
* `delete_spaces_space_id_folders_id_tax_contract` - Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data
* `delete_spaces_space_id_folders_id_document_class_` - delete a class document
* `delete_spaces_space_id_persons_id_guest_in_space` - delete the invitation of a person in a space
* `delete_spaces_space_id_persons_id_invitation` - delete the invitation of a person in a space
* `get_box_menus` - Returns predefined folders and workbooks of the Box for all the spaces
* `get_business_groups` - Returns a list of groups custom ordered by name
* `get_business_groups_all` - Returns list of groups custom for managers
* `get_business_groups_id_` - Returns a group
* `get_business_groups_id_spaces` - Returns spaces of the business group with id
* `get_hub_business_groups_id_menus` - Returns predefined folders and workbooks of the Hub for all the spaces of the business group
* `get_hub_menus` - Returns predefined folders and workbooks of the Hub for all the spaces
* `get_hub_menus_all` - Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces
* `get_hub_spaces_space_id_menus` - Returns predefined folders and workbooks of the Hub for the space
* `get_menus` - Returns predefined entries
* `get_profile` - Returns status of member
* `get_profile_id_file` - Returns status of member
* `get_registration` - Returns the method to get the validation code or the link to register after invitation
* `get_session` - Returns member id of user logged
* `get_spaces` - Returns spaces of my group
* `get_spaces_all` - Returns all spaces
* `get_spaces_id_` - Returns a space
* `get_spaces_id_accounting_year` - Returns list of accounting years for the space {id}
* `get_spaces_id_collective_decision` - Returns list of collective decisions for the space {id}
* `get_spaces_id_company_entities` - Returns list of company entities
* `get_spaces_id_company_entities_all` - Returns list of company entities even company entities archived
* `get_spaces_id_company_entities_company_id_` - Returns a compay entity
* `get_spaces_id_company_entities_person_id_details` - Returns all details of a company entity
* `get_spaces_id_folders_folder_id_persons_member_id_` - return the access of a person in a customer contract
* `get_spaces_id_groups` - Returns list of groups
* `get_spaces_id_groups_all` - Returns list of groups even archived of the space
* `get_spaces_id_groups_group_id_` - Returns a group
* `get_spaces_id_legal` - Returns legal information of a space (except private)
* `get_spaces_id_logo` - Returns a space with the logo
* `get_spaces_id_persons` - Returns list of persons
* `get_spaces_id_persons_all` - Returns list of persons even persons archived
* `get_spaces_id_persons_person_id_` - Returns a person
* `get_spaces_id_persons_person_id_details` - Returns all details of a person
* `get_spaces_id_persons_person_id_folders` - Returns list of folders with exceptionnal access of the person personId
* `get_spaces_id_persons_person_id_groups` - Returns list of groups of the person personId
* `get_spaces_id_persons_person_id_portfolios` - Returns list of portfolios of the person personId
* `get_spaces_id_professional_vehicles` - Returns list of professionalvehicles for the space {id}
* `get_spaces_id_settings_nf203_logs` - Returns state of activation of logs
* `get_spaces_id_status` - Returns all status of the space
* `get_spaces_id_tax_contracts` - Returns list of tax contracts for the space {id}
* `get_spaces_id_triggers` - Returns list of triggers for the space {id}
* `get_spaces_space_id_company_entities_id_follow_ups` - Returns folder of the company entity
* `get_spaces_space_id_customers` - Returns folder with Id and customer data
* `get_spaces_space_id_customers_all` - Returns folder with Id and customer data (even archived)
* `get_spaces_space_id_documents` - Returns documents of the folder
* `get_spaces_space_id_documents_document_id_extend` - read the data of a document
* `get_spaces_space_id_documents_document_id_folders` - Returns versions of the document
* `get_spaces_space_id_documents_document_id_mailingprice` - returns the number of pages and the price of the pdf to send by mail
* `get_spaces_space_id_documents_document_id_versions` - Returns versions of the document
* `get_spaces_space_id_documents_document_id_versions_current` - Returns current version of the document
* `get_spaces_space_id_documents_id_access` - Returns accesses of one document
* `get_spaces_space_id_documents_id_accounting` - Returns the document with the accounting property
* `get_spaces_space_id_documents_id_download` - Returns content of one document
* `get_spaces_space_id_employees` - Returns folders with Id and employee data
* `get_spaces_space_id_employees_all` - Returns folders with Id and employee data (even archived)
* `get_spaces_space_id_employers` - Returns folders with Id and employer data
* `get_spaces_space_id_employers_all` - Returns folders with Id and employer data (even archived)
* `get_spaces_space_id_extend` - read the data of a space
* `get_spaces_space_id_folders` - Returns folders of the space
* `get_spaces_space_id_folders_all` - Returns folders of the space (even archived)
* `get_spaces_space_id_folders_folder_id_nominative_social_declarations_document_id_` - get a nominative social declaration
* `get_spaces_space_id_folders_id_` - Returns folder with Id
* `get_spaces_space_id_folders_id_accountings` - Returns accountings documents of the folder (results and taxation or accountingyear)
* `get_spaces_space_id_folders_id_accountings_journal` - journal of accountings document delivered to a customer
* `get_spaces_space_id_folders_id_bank` - Returns folder with Id and bank data
* `get_spaces_space_id_folders_id_bank_statements` - Returns bank statements of the folder bank
* `get_spaces_space_id_folders_id_common_folders` - Returns common folders of a folder
* `get_spaces_space_id_folders_id_common_folders_all` - Returns common folders (even archived) of a folder
* `get_spaces_space_id_folders_id_contracting_partner` - Returns all contracting partners of a contract
* `get_spaces_space_id_folders_id_contracting_partner_space` - Returns collector space of a contract
* `get_spaces_space_id_folders_id_contractual_documents` - Returns documents of the folder
* `get_spaces_space_id_folders_id_contractual_relationship` - Returns folder with Id and contractual-relationship data
* `get_spaces_space_id_folders_id_coporate_tax_declarations` - Returns corporate tax declarations
* `get_spaces_space_id_folders_id_customer` - Returns folder with Id and customer data
* `get_spaces_space_id_folders_id_deliveries_journal` - journal of documents delivered to a customer
* `get_spaces_space_id_folders_id_documents` - Returns documents of the folder
* `get_spaces_space_id_folders_id_employee` - Returns folder with Id and employee data
* `get_spaces_space_id_folders_id_expense_proofs` - Returns expense proofs of the folder (social, followup or exchange)
* `get_spaces_space_id_folders_id_expense_reports` - Returns expense reports of the folder (social or followup)
* `get_spaces_space_id_folders_id_expense_reports_expense_report_id_expense_proofs` - Returns expense proofs linked to the expenseReportId
* `get_spaces_space_id_folders_id_insurance` - Returns folder with Id and insurance data
* `get_spaces_space_id_folders_id_invoices` - Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* `get_spaces_space_id_folders_id_legal_entity` - Returns legal entity of a follow up folder
* `get_spaces_space_id_folders_id_loan` - Returns folder with Id and loan data
* `get_spaces_space_id_folders_id_messages` - Returns messages of the folder
* `get_spaces_space_id_folders_id_messages_message_id_` - Returns message with Id
* `get_spaces_space_id_folders_id_nominative_social_declarations` - Returns nominative social declarations of the folder social
* `get_spaces_space_id_folders_id_other_taxes` - Returns other taxes declarations
* `get_spaces_space_id_folders_id_passwords` - Returns identifiers/passwords of the folder
* `get_spaces_space_id_folders_id_passwords_password_id_` - Returns password with Id
* `get_spaces_space_id_folders_id_payrolls` - Returns payrolls of the folder social
* `get_spaces_space_id_folders_id_payslips` - Returns payslips of the folder employee
* `get_spaces_space_id_folders_id_provider` - Returns folder with Id and provider data
* `get_spaces_space_id_folders_id_required_documents` - list of the required documents for a person
* `get_spaces_space_id_folders_id_sections` - Returns sections of the folder
* `get_spaces_space_id_folders_id_social_contracts` - Returns social contracts of the folder employee
* `get_spaces_space_id_folders_id_social_declarations` - Returns social declarations
* `get_spaces_space_id_folders_id_social_regimes` - Returns folder with Id and social regime data
* `get_spaces_space_id_folders_id_sum_invoices` - Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)
* `get_spaces_space_id_folders_id_vat_declarations` - Returns vat declarations
* `get_spaces_space_id_folders_id_document_class_` - Returns document of documentClass (without specific data) of the folder
* `get_spaces_space_id_legal_entities_id_banks` - Returns list of bank folders for a legal-entity
* `get_spaces_space_id_legal_entities_id_banks_all` - Returns folder of the banks even archived
* `get_spaces_space_id_legal_entities_id_contracts` - Returns all contract folders of the legal entity
* `get_spaces_space_id_legal_entities_id_contractual_relationships` - Returns folder of the others contract with legal entity
* `get_spaces_space_id_legal_entities_id_contractual_relationships_all` - Returns folder of the others contract with legal entity (even archived)
* `get_spaces_space_id_legal_entities_id_customers` - Returns folder of the customer
* `get_spaces_space_id_legal_entities_id_customers_all` - Returns folder of the customers (even archived)
* `get_spaces_space_id_legal_entities_id_insurances` - Returns list of insurance folders for a legal-entity
* `get_spaces_space_id_legal_entities_id_insurances_all` - Returns folder of the insurances even archived
* `get_spaces_space_id_legal_entities_id_loans` - Returns folder of the loan
* `get_spaces_space_id_legal_entities_id_loans_all` - Returns folder of the loans even archived
* `get_spaces_space_id_legal_entities_id_providers` - Returns list of providers folders for a legal-entity
* `get_spaces_space_id_legal_entities_id_providers_all` - Returns folder of the providers even archived
* `get_spaces_space_id_legal_entities_id_social_regimes` - Returns list of social regimes folders for a legal-entity
* `get_spaces_space_id_legal_entities_id_social_regimes_all` - Returns folder of the social regimes even archived
* `get_spaces_space_id_loans` - Returns list of all loan folders of the space
* `get_spaces_space_id_loans_all` - Returns list of all loan folders even archived of the space
* `get_spaces_space_id_persons_id_employees` - Returns folder of the employee
* `get_spaces_space_id_persons_id_employees_all` - Returns folder of all employees (even archived)
* `get_spaces_space_id_persons_id_exchange` - Returns folder exchange of the person
* `get_spaces_space_id_persons_id_follow_ups` - Returns folder of the person
* `get_spaces_space_id_persons_id_invitation` - Returns invitation of a person
* `get_spaces_space_id_persons_member_id_folders_id_` - Returns folderId with the access of the person
* `get_spaces_space_id_providers` - Returns folder with Id and provider data
* `get_spaces_space_id_providers_all` - Returns folder with Id and provider data (even archived)
* `get_spaces_space_id_social_regimes` - Returns folder with Id and social regime data
* `get_spaces_space_id_social_regimes_all` - Returns folder with Id and social regime data (even archived)
* `get_spaces_space_id_spaces_invoicings` - Returns CSV Invoicings of the spaces for the account of the spaceId
* `patch_business_groups` - Modifies an object
* `patch_profile_email` - modify email of profile
* `patch_profile_mobile` - modify mobile of profile
* `patch_profile_json` - modify infos of profile
* `patch_profile_multipart` - modify infos of profile
* `patch_spaces_id_` - Modify a Space (except private)
* `patch_spaces_id_company_entities_company_id_` - Modify a company entity
* `patch_spaces_id_folders_folder_id_persons_member_id_` - Add/Modify/Delete a person in a customer contract (except manager)
* `patch_spaces_id_folders_folder_id_persons_member_id_activeaccess` - open an access
* `patch_spaces_id_folders_folder_id_persons_member_id_unactiveaccess` - close an access
* `patch_spaces_id_groups_group_id_` - Modify a group
* `patch_spaces_id_groups_group_id_folders_folder_id_` - Add access to a folder for a group
* `patch_spaces_id_groups_group_id_persons_member_id_` - Add a person to a group
* `patch_spaces_id_legal` - Modify legal information of a Space (except private)
* `patch_spaces_id_persons_member_id_player` - Modify the role of a person
* `patch_spaces_id_persons_person_id_` - Modify a person
* `patch_spaces_id_portfolios_portfolio_id_persons_member_id_` - Add/Modify/Delete a person in a portfolio (except manager)
* `patch_spaces_space_id_common_folders_id_` - Modify a common folder
* `patch_spaces_space_id_documents_document_id_` - modify a doc
* `patch_spaces_space_id_folders_folder_id_bank_statements_document_id_` - modify a bank statement
* `patch_spaces_space_id_folders_folder_id_contractual_documents_document_id_` - modify a contractual document
* `patch_spaces_space_id_folders_folder_id_corporate_tax_declarations_document_id_` - modify a coporate tax declaration
* `patch_spaces_space_id_folders_folder_id_expense_proofs_document_id_` - modify an expense report
* `patch_spaces_space_id_folders_folder_id_expense_reports_document_id_` - modify an expense report
* `patch_spaces_space_id_folders_folder_id_invoices_document_id_` - modify a invoice
* `patch_spaces_space_id_folders_folder_id_other_taxes_document_id_` - modify an other tax declaration
* `patch_spaces_space_id_folders_folder_id_payrolls_document_id_` - modify a payroll
* `patch_spaces_space_id_folders_folder_id_payslips_document_id_` - modify a payslip
* `patch_spaces_space_id_folders_folder_id_social_contracts_document_id_` - modify a social contract
* `patch_spaces_space_id_folders_folder_id_social_declarations_document_id_` - modify a social declaration
* `patch_spaces_space_id_folders_folder_id_vat_declarations_document_id_` - modify a vat declaration
* `patch_spaces_space_id_folders_id_` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)
* `patch_spaces_space_id_folders_id_accounting_year` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data
* `patch_spaces_space_id_folders_id_bank` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data
* `patch_spaces_space_id_folders_id_collective_decision` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data
* `patch_spaces_space_id_folders_id_customer` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data
* `patch_spaces_space_id_folders_id_documents_document_id_detach` - Detach a doc of a folder
* `patch_spaces_space_id_folders_id_employee` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data
* `patch_spaces_space_id_folders_id_insurance` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data
* `patch_spaces_space_id_folders_id_loan` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data
* `patch_spaces_space_id_folders_id_messages_message_id_` - Modify a Message
* `patch_spaces_space_id_folders_id_passwords_password_id_` - Modify a Password
* `patch_spaces_space_id_folders_id_professional_vehicle` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data
* `patch_spaces_space_id_folders_id_provider` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data
* `patch_spaces_space_id_folders_id_required_documents_requireddocumentid_` - Modify the status of a requireddocument
* `patch_spaces_space_id_folders_id_social_regimes` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data
* `patch_spaces_space_id_folders_id_tax_contract` - Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data
* `patch_spaces_space_id_persons_id_call_for_document` - modify the invitation of a person to collect documents
* `patch_spaces_space_id_persons_id_guest_in_space` - invite a person in a space
* `patch_spaces_space_id_persons_id_invitation` - modify an invitation
* `patch_spaces_space_id_persons_member_id_folders_id_` - Modify an access
* `post_business_groups` - Adds a group (only for managers and ADN collaborators)
* `post_business_groups_id_spaces_space_id_legal_entities_person_id_customers_folder_id_guest_in_space` - send an invitation to manager the private space of personId
* `post_business_groups_id_spaces_space_id_legal_entities_person_id_customers_folder_id_spaces` - Add a Space in a group
* `post_hub_documents_json` - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* `post_hub_documents_multipart` - Add a document (this document is analyzed to be saved in the correct folder and correct space)
* `post_hub_payslips_json` - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* `post_hub_payslips_multipart` - Add a payslip (this document is analyzed to be saved in the correct folder and correct space)
* `post_hub_spaces_space_id_documents_json` - Add a document in a space (this document is analyzed to be saved in the correct folder)
* `post_hub_spaces_space_id_documents_multipart` - Add a document in a space (this document is analyzed to be saved in the correct folder)
* `post_hub_spaces_space_id_payslips_json` - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* `post_hub_spaces_space_id_payslips_multipart` - Add a payslip in a space (this document is analyzed to be saved in the correct folder)
* `post_menus_menu_id_documents_json` - add a document to the target menuId
* `post_menus_menu_id_documents_multipart` - add a document to the target menuId
* `post_profile_json` - create infos of profile
* `post_profile_multipart` - create infos of profile
* `post_registration` - complete the invitation
* `post_spaces` - Add a Space in my group
* `post_spaces_id_accounting_year` - Create a accounting year for the space id
* `post_spaces_id_collective_decision` - Create a colletive decision for the space id
* `post_spaces_id_company_entities` - Add a Company Entity in a Space
* `post_spaces_id_company_entities_person_id_details` - Replace or Add a contact detail for a person
* `post_spaces_id_documents_download` - create an archive with documents
* `post_spaces_id_folders_folder_id_persons_person_id_guest_in_space` - invite a owner in a space
* `post_spaces_id_groups` - Add a group in a Space
* `post_spaces_id_persons` - Add a Person in a Space
* `post_spaces_id_persons_person_id_details` - Replace or Add a contact detail for a person
* `post_spaces_id_persons_person_id_portfolios` - Create a portfolio for the person personId
* `post_spaces_id_professional_vehicles` - Create a professional vehicle for the space
* `post_spaces_id_settings_nf203_logs` - Enable/Disable logs
* `post_spaces_id_status` - Replace or Add a status
* `post_spaces_id_tax_contracts` - Create a tax contract for the space
* `post_spaces_id_triggers_name_` - Creates a trigger for the space id
* `post_spaces_space_id_documents_document_id_extend` - Add a data to a document
* `post_spaces_space_id_documents_document_id_mailing` - send by mail a document
* `post_spaces_space_id_documents_document_id_versions_json` - Add a version to a document and set it as current
* `post_spaces_space_id_documents_document_id_versions_multipart` - Add a version to a document and set it as current
* `post_spaces_space_id_extend` - Add a data to a space
* `post_spaces_space_id_folders_folder_id_payrolls_document_id_refresh` - recalculate a payroll
* `post_spaces_space_id_folders_id_bank_statements_json` - Add a bank statement in a folder bank
* `post_spaces_space_id_folders_id_bank_statements_multipart` - Add a bank statement in a folder bank
* `post_spaces_space_id_folders_id_common_folders` - Add a common folder in another folder
* `post_spaces_space_id_folders_id_contractual_documents_json` - Add a document in a folder
* `post_spaces_space_id_folders_id_contractual_documents_multipart` - Add a document in a folder
* `post_spaces_space_id_folders_id_coporate_tax_declarations_json` - Add a corporate tax declaration
* `post_spaces_space_id_folders_id_coporate_tax_declarations_multipart` - Add a corporate tax declaration
* `post_spaces_space_id_folders_id_documents_json` - Add a document in a folder
* `post_spaces_space_id_folders_id_documents_multipart` - Add a document in a folder
* `post_spaces_space_id_folders_id_expense_proofs_json` - Add a expense proof in a folder followup or exchange
* `post_spaces_space_id_folders_id_expense_proofs_multipart` - Add a expense proof in a folder followup or exchange
* `post_spaces_space_id_folders_id_expense_reports_json` - Add a expense report in a folder followup
* `post_spaces_space_id_folders_id_expense_reports_multipart` - Add a expense report in a folder followup
* `post_spaces_space_id_folders_id_invoices_json` - Add a invoice in a folder of a customer or a provider
* `post_spaces_space_id_folders_id_invoices_multipart` - Add a invoice in a folder of a customer or a provider
* `post_spaces_space_id_folders_id_messages` - Write a message in the journal of a folder
* `post_spaces_space_id_folders_id_other_taxes_json` - Add a tax declaration
* `post_spaces_space_id_folders_id_other_taxes_multipart` - Add a tax declaration
* `post_spaces_space_id_folders_id_passwords` - Write a identifier/password in aa folder
* `post_spaces_space_id_folders_id_payrolls_payroll_id_nominative_social_declaration_json` - Add a nominative social declaration in a folder social
* `post_spaces_space_id_folders_id_payrolls_payroll_id_nominative_social_declaration_multipart` - Add a nominative social declaration in a folder social
* `post_spaces_space_id_folders_id_payrolls_json` - Add a payroll in a folder social
* `post_spaces_space_id_folders_id_payrolls_multipart` - Add a payroll in a folder social
* `post_spaces_space_id_folders_id_payslips_json` - Add a payslip in a folder employee
* `post_spaces_space_id_folders_id_payslips_multipart` - Add a payslip in a folder employee
* `post_spaces_space_id_folders_id_required_documents_requireddocumentid_json` - Add a required document to a line
* `post_spaces_space_id_folders_id_required_documents_requireddocumentid_multipart` - Add a required document to a line
* `post_spaces_space_id_folders_id_social_contracts_json` - Add a social contract in a folder employee
* `post_spaces_space_id_folders_id_social_contracts_multipart` - Add a social contract in a folder employee
* `post_spaces_space_id_folders_id_social_declarations_json` - Add a social declaration
* `post_spaces_space_id_folders_id_social_declarations_multipart` - Add a social declaration
* `post_spaces_space_id_folders_id_vat_declarations_json` - Add a vat declaration
* `post_spaces_space_id_folders_id_vat_declarations_multipart` - Add a vat declaration
* `post_spaces_space_id_folders_id_document_class_json` - Add a document in a folder
* `post_spaces_space_id_folders_id_document_class_multipart` - Add a document in a folder
* `post_spaces_space_id_legal_entities_id_banks` - Add a folder for a bank
* `post_spaces_space_id_legal_entities_id_customers` - Add a folder for a customer
* `post_spaces_space_id_legal_entities_id_insurances` - Add a folder for a insurance
* `post_spaces_space_id_legal_entities_id_loans` - Add a folder for a loan
* `post_spaces_space_id_legal_entities_id_providers` - Add a folder for a provider
* `post_spaces_space_id_legal_entities_id_social_regimes` - Add a folder for a social regime
* `post_spaces_space_id_persons_id_call_for_document` - invite a person to collect documents
* `post_spaces_space_id_persons_id_employees` - Add a folder for a employee
* `post_spaces_space_id_persons_id_guest_in_space` - invite a person in a space
* `post_spaces_space_id_persons_id_invitation` - create an invitation in a space for a person
* `post_spaces_space_id_persons_id_invitation_invitation_id_send` - send the invitation of a person in a space
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
