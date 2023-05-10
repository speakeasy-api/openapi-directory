# SDK

## Overview

<fullname>Service Catalog</fullname> <p> <a href="http://aws.amazon.com/servicecatalog">Service Catalog</a> enables organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To get the most out of this documentation, you should be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">Service Catalog Concepts</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicecatalog/>
### Available Operations

* [acceptPortfolioShare](#acceptportfolioshare) - Accepts an offer to share the specified portfolio.
* [associateBudgetWithResource](#associatebudgetwithresource) - Associates the specified budget with the specified resource.
* [associatePrincipalWithPortfolio](#associateprincipalwithportfolio) - <p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [associateProductWithPortfolio](#associateproductwithportfolio) - <p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [associateServiceActionWithProvisioningArtifact](#associateserviceactionwithprovisioningartifact) - Associates a self-service action with a provisioning artifact.
* [associateTagOptionWithResource](#associatetagoptionwithresource) - Associate the specified TagOption with the specified portfolio or product.
* [batchAssociateServiceActionWithProvisioningArtifact](#batchassociateserviceactionwithprovisioningartifact) - Associates multiple self-service actions with provisioning artifacts.
* [batchDisassociateServiceActionFromProvisioningArtifact](#batchdisassociateserviceactionfromprovisioningartifact) - Disassociates a batch of self-service actions from the specified provisioning artifact.
* [copyProduct](#copyproduct) - <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
* [createConstraint](#createconstraint) - <p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [createPortfolio](#createportfolio) - <p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [createPortfolioShare](#createportfolioshare) - <p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [createProduct](#createproduct) - <p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* [createProvisionedProductPlan](#createprovisionedproductplan) - <p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
* [createProvisioningArtifact](#createprovisioningartifact) - <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* [createServiceAction](#createserviceaction) - Creates a self-service action.
* [createTagOption](#createtagoption) - Creates a TagOption.
* [deleteConstraint](#deleteconstraint) - <p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [deletePortfolio](#deleteportfolio) - <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [deletePortfolioShare](#deleteportfolioshare) - <p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
* [deleteProduct](#deleteproduct) - <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [deleteProvisionedProductPlan](#deleteprovisionedproductplan) - Deletes the specified plan.
* [deleteProvisioningArtifact](#deleteprovisioningartifact) - <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
* [deleteServiceAction](#deleteserviceaction) - Deletes a self-service action.
* [deleteTagOption](#deletetagoption) - <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
* [describeConstraint](#describeconstraint) - Gets information about the specified constraint.
* [describeCopyProductStatus](#describecopyproductstatus) - Gets the status of the specified copy product operation.
* [describePortfolio](#describeportfolio) - <p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [describePortfolioShareStatus](#describeportfoliosharestatus) - Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.
* [describePortfolioShares](#describeportfolioshares) - <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
* [describeProduct](#describeproduct) - <p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>
* [describeProductAsAdmin](#describeproductasadmin) - Gets information about the specified product. This operation is run with administrator access.
* [describeProductView](#describeproductview) - Gets information about the specified product.
* [describeProvisionedProduct](#describeprovisionedproduct) - Gets information about the specified provisioned product.
* [describeProvisionedProductPlan](#describeprovisionedproductplan) - Gets information about the resource changes for the specified plan.
* [describeProvisioningArtifact](#describeprovisioningartifact) - Gets information about the specified provisioning artifact (also known as a version) for the specified product.
* [describeProvisioningParameters](#describeprovisioningparameters) - <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
* [describeRecord](#describerecord) - <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
* [describeServiceAction](#describeserviceaction) - Describes a self-service action.
* [describeServiceActionExecutionParameters](#describeserviceactionexecutionparameters) - Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
* [describeTagOption](#describetagoption) - Gets information about the specified TagOption.
* [disableAWSOrganizationsAccess](#disableawsorganizationsaccess) - <p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>
* [disassociateBudgetFromResource](#disassociatebudgetfromresource) - Disassociates the specified budget from the specified resource.
* [disassociatePrincipalFromPortfolio](#disassociateprincipalfromportfolio) - <p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>
* [disassociateProductFromPortfolio](#disassociateproductfromportfolio) - <p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>
* [disassociateServiceActionFromProvisioningArtifact](#disassociateserviceactionfromprovisioningartifact) - Disassociates the specified self-service action association from the specified provisioning artifact.
* [disassociateTagOptionFromResource](#disassociatetagoptionfromresource) - Disassociates the specified TagOption from the specified resource.
* [enableAWSOrganizationsAccess](#enableawsorganizationsaccess) - <p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>
* [executeProvisionedProductPlan](#executeprovisionedproductplan) - Provisions or modifies a product based on the resource changes for the specified plan.
* [executeProvisionedProductServiceAction](#executeprovisionedproductserviceaction) - Executes a self-service action against a provisioned product.
* [getAWSOrganizationsAccessStatus](#getawsorganizationsaccessstatus) - Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.
* [getProvisionedProductOutputs](#getprovisionedproductoutputs) - This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.
* [importAsProvisionedProduct](#importasprovisionedproduct) - <p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
* [listAcceptedPortfolioShares](#listacceptedportfolioshares) - Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.
* [listBudgetsForResource](#listbudgetsforresource) - Lists all the budgets associated to the specified resource.
* [listConstraintsForPortfolio](#listconstraintsforportfolio) - Lists the constraints for the specified portfolio and product.
* [listLaunchPaths](#listlaunchpaths) - <p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>
* [listOrganizationPortfolioAccess](#listorganizationportfolioaccess) - <p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
* [listPortfolioAccess](#listportfolioaccess) - <p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
* [listPortfolios](#listportfolios) - Lists all portfolios in the catalog.
* [listPortfoliosForProduct](#listportfoliosforproduct) - Lists all portfolios that the specified product is associated with.
* [listPrincipalsForPortfolio](#listprincipalsforportfolio) - Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.
* [listProvisionedProductPlans](#listprovisionedproductplans) - Lists the plans for the specified provisioned product or all plans to which the user has access.
* [listProvisioningArtifacts](#listprovisioningartifacts) - Lists all provisioning artifacts (also known as versions) for the specified product.
* [listProvisioningArtifactsForServiceAction](#listprovisioningartifactsforserviceaction) - Lists all provisioning artifacts (also known as versions) for the specified self-service action.
* [listRecordHistory](#listrecordhistory) - Lists the specified requests or all performed requests.
* [listResourcesForTagOption](#listresourcesfortagoption) - Lists the resources associated with the specified TagOption.
* [listServiceActions](#listserviceactions) - Lists all self-service actions.
* [listServiceActionsForProvisioningArtifact](#listserviceactionsforprovisioningartifact) - Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
* [listStackInstancesForProvisionedProduct](#liststackinstancesforprovisionedproduct) - Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. 
* [listTagOptions](#listtagoptions) - Lists the specified TagOptions or all TagOptions.
* [notifyProvisionProductEngineWorkflowResult](#notifyprovisionproductengineworkflowresult) -  Notifies the result of the provisioning engine execution. 
* [notifyTerminateProvisionedProductEngineWorkflowResult](#notifyterminateprovisionedproductengineworkflowresult) -  Notifies the result of the terminate engine execution. 
* [notifyUpdateProvisionedProductEngineWorkflowResult](#notifyupdateprovisionedproductengineworkflowresult) -  Notifies the result of the update engine execution. 
* [provisionProduct](#provisionproduct) - <p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>
* [rejectPortfolioShare](#rejectportfolioshare) - Rejects an offer to share the specified portfolio.
* [scanProvisionedProducts](#scanprovisionedproducts) - <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
* [searchProducts](#searchproducts) - Gets information about the products to which the caller has access.
* [searchProductsAsAdmin](#searchproductsasadmin) - Gets information about the products for the specified portfolio or all products.
* [searchProvisionedProducts](#searchprovisionedproducts) - Gets information about the provisioned products that meet the specified criteria.
* [terminateProvisionedProduct](#terminateprovisionedproduct) - <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* [updateConstraint](#updateconstraint) - Updates the specified constraint.
* [updatePortfolio](#updateportfolio) - <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
* [updatePortfolioShare](#updateportfolioshare) - <p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [updateProduct](#updateproduct) - Updates the specified product.
* [updateProvisionedProduct](#updateprovisionedproduct) - <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* [updateProvisionedProductProperties](#updateprovisionedproductproperties) - Requests updates to the properties of the specified provisioned product.
* [updateProvisioningArtifact](#updateprovisioningartifact) - <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
* [updateServiceAction](#updateserviceaction) - Updates a self-service action.
* [updateTagOption](#updatetagoption) - Updates the specified TagOption.

## acceptPortfolioShare

Accepts an offer to share the specified portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPortfolioShareRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptPortfolioShareInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPortfolioShareXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptPortfolioShareRequest();
    $request->acceptPortfolioShareInput = new AcceptPortfolioShareInput();
    $request->acceptPortfolioShareInput->acceptLanguage = 'deserunt';
    $request->acceptPortfolioShareInput->portfolioId = 'suscipit';
    $request->acceptPortfolioShareInput->portfolioShareType = PortfolioShareTypeEnum::AWS_SERVICECATALOG;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AcceptPortfolioShareXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ACCEPT_PORTFOLIO_SHARE;

    $response = $sdk->sdk->acceptPortfolioShare($request);

    if ($response->acceptPortfolioShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateBudgetWithResource

Associates the specified budget with the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateBudgetWithResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateBudgetWithResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateBudgetWithResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateBudgetWithResourceRequest();
    $request->associateBudgetWithResourceInput = new AssociateBudgetWithResourceInput();
    $request->associateBudgetWithResourceInput->budgetName = 'minus';
    $request->associateBudgetWithResourceInput->resourceId = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = AssociateBudgetWithResourceXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_BUDGET_WITH_RESOURCE;

    $response = $sdk->sdk->associateBudgetWithResource($request);

    if ($response->associateBudgetWithResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associatePrincipalWithPortfolio

<p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociatePrincipalWithPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociatePrincipalWithPortfolioInput;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociatePrincipalWithPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociatePrincipalWithPortfolioRequest();
    $request->associatePrincipalWithPortfolioInput = new AssociatePrincipalWithPortfolioInput();
    $request->associatePrincipalWithPortfolioInput->acceptLanguage = 'quis';
    $request->associatePrincipalWithPortfolioInput->portfolioId = 'veritatis';
    $request->associatePrincipalWithPortfolioInput->principalARN = 'deserunt';
    $request->associatePrincipalWithPortfolioInput->principalType = PrincipalTypeEnum::IAM;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = AssociatePrincipalWithPortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_PRINCIPAL_WITH_PORTFOLIO;

    $response = $sdk->sdk->associatePrincipalWithPortfolio($request);

    if ($response->associatePrincipalWithPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateProductWithPortfolio

<p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateProductWithPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateProductWithPortfolioInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateProductWithPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateProductWithPortfolioRequest();
    $request->associateProductWithPortfolioInput = new AssociateProductWithPortfolioInput();
    $request->associateProductWithPortfolioInput->acceptLanguage = 'maiores';
    $request->associateProductWithPortfolioInput->portfolioId = 'molestiae';
    $request->associateProductWithPortfolioInput->productId = 'quod';
    $request->associateProductWithPortfolioInput->sourcePortfolioId = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = AssociateProductWithPortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_PRODUCT_WITH_PORTFOLIO;

    $response = $sdk->sdk->associateProductWithPortfolio($request);

    if ($response->associateProductWithPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateServiceActionWithProvisioningArtifact

Associates a self-service action with a provisioning artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceActionWithProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateServiceActionWithProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateServiceActionWithProvisioningArtifactRequest();
    $request->associateServiceActionWithProvisioningArtifactInput = new AssociateServiceActionWithProvisioningArtifactInput();
    $request->associateServiceActionWithProvisioningArtifactInput->acceptLanguage = 'occaecati';
    $request->associateServiceActionWithProvisioningArtifactInput->productId = 'fugit';
    $request->associateServiceActionWithProvisioningArtifactInput->provisioningArtifactId = 'deleniti';
    $request->associateServiceActionWithProvisioningArtifactInput->serviceActionId = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->associateServiceActionWithProvisioningArtifact($request);

    if ($response->associateServiceActionWithProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateTagOptionWithResource

Associate the specified TagOption with the specified portfolio or product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTagOptionWithResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateTagOptionWithResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTagOptionWithResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTagOptionWithResourceRequest();
    $request->associateTagOptionWithResourceInput = new AssociateTagOptionWithResourceInput();
    $request->associateTagOptionWithResourceInput->resourceId = 'impedit';
    $request->associateTagOptionWithResourceInput->tagOptionId = 'cum';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = AssociateTagOptionWithResourceXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_TAG_OPTION_WITH_RESOURCE;

    $response = $sdk->sdk->associateTagOptionWithResource($request);

    if ($response->associateTagOptionWithResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateServiceActionWithProvisioningArtifact

Associates multiple self-service actions with provisioning artifacts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateServiceActionWithProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchAssociateServiceActionWithProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceActionAssociation;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateServiceActionWithProvisioningArtifactRequest();
    $request->batchAssociateServiceActionWithProvisioningArtifactInput = new BatchAssociateServiceActionWithProvisioningArtifactInput();
    $request->batchAssociateServiceActionWithProvisioningArtifactInput->acceptLanguage = 'sed';
    $request->batchAssociateServiceActionWithProvisioningArtifactInput->serviceActionAssociations = [
        new ServiceActionAssociation(),
        new ServiceActionAssociation(),
        new ServiceActionAssociation(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_BATCH_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->batchAssociateServiceActionWithProvisioningArtifact($request);

    if ($response->batchAssociateServiceActionWithProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateServiceActionFromProvisioningArtifact

Disassociates a batch of self-service actions from the specified provisioning artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateServiceActionFromProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDisassociateServiceActionFromProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceActionAssociation;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateServiceActionFromProvisioningArtifactRequest();
    $request->batchDisassociateServiceActionFromProvisioningArtifactInput = new BatchDisassociateServiceActionFromProvisioningArtifactInput();
    $request->batchDisassociateServiceActionFromProvisioningArtifactInput->acceptLanguage = 'corporis';
    $request->batchDisassociateServiceActionFromProvisioningArtifactInput->serviceActionAssociations = [
        new ServiceActionAssociation(),
        new ServiceActionAssociation(),
        new ServiceActionAssociation(),
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_BATCH_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->batchDisassociateServiceActionFromProvisioningArtifact($request);

    if ($response->batchDisassociateServiceActionFromProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyProduct

<p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyProductInput;
use \OpenAPI\OpenAPI\Models\Shared\CopyOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CopyProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyProductRequest();
    $request->copyProductInput = new CopyProductInput();
    $request->copyProductInput->acceptLanguage = 'mollitia';
    $request->copyProductInput->copyOptions = [
        CopyOptionEnum::COPY_TAGS,
        CopyOptionEnum::COPY_TAGS,
        CopyOptionEnum::COPY_TAGS,
    ];
    $request->copyProductInput->idempotencyToken = 'dolores';
    $request->copyProductInput->sourceProductArn = 'dolorem';
    $request->copyProductInput->sourceProvisioningArtifactIdentifiers = [
        [
            'nobis' => 'enim',
        ],
        [
            'nemo' => 'minima',
            'excepturi' => 'accusantium',
            'iure' => 'culpa',
        ],
    ];
    $request->copyProductInput->targetProductId = 'doloribus';
    $request->copyProductInput->targetProductName = 'sapiente';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = CopyProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_COPY_PRODUCT;

    $response = $sdk->sdk->copyProduct($request);

    if ($response->copyProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConstraint

<p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConstraintRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConstraintInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateConstraintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConstraintRequest();
    $request->createConstraintInput = new CreateConstraintInput();
    $request->createConstraintInput->acceptLanguage = 'occaecati';
    $request->createConstraintInput->description = 'numquam';
    $request->createConstraintInput->idempotencyToken = 'commodi';
    $request->createConstraintInput->parameters = 'quam';
    $request->createConstraintInput->portfolioId = 'molestiae';
    $request->createConstraintInput->productId = 'velit';
    $request->createConstraintInput->type = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = CreateConstraintXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_CONSTRAINT;

    $response = $sdk->sdk->createConstraint($request);

    if ($response->createConstraintOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPortfolio

<p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePortfolioInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePortfolioRequest();
    $request->createPortfolioInput = new CreatePortfolioInput();
    $request->createPortfolioInput->acceptLanguage = 'quo';
    $request->createPortfolioInput->description = 'sequi';
    $request->createPortfolioInput->displayName = 'tenetur';
    $request->createPortfolioInput->idempotencyToken = 'ipsam';
    $request->createPortfolioInput->providerName = 'id';
    $request->createPortfolioInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreatePortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_PORTFOLIO;

    $response = $sdk->sdk->createPortfolio($request);

    if ($response->createPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPortfolioShare

<p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioShareRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePortfolioShareInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationNode;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationNodeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioShareXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePortfolioShareRequest();
    $request->createPortfolioShareInput = new CreatePortfolioShareInput();
    $request->createPortfolioShareInput->acceptLanguage = 'voluptatibus';
    $request->createPortfolioShareInput->accountId = 'vero';
    $request->createPortfolioShareInput->organizationNode = new OrganizationNode();
    $request->createPortfolioShareInput->organizationNode->type = OrganizationNodeTypeEnum::ORGANIZATIONAL_UNIT;
    $request->createPortfolioShareInput->organizationNode->value = 'praesentium';
    $request->createPortfolioShareInput->portfolioId = 'voluptatibus';
    $request->createPortfolioShareInput->sharePrincipals = false;
    $request->createPortfolioShareInput->shareTagOptions = false;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = CreatePortfolioShareXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_PORTFOLIO_SHARE;

    $response = $sdk->sdk->createPortfolioShare($request);

    if ($response->createPortfolioShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProduct

<p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProductInput;
use \OpenAPI\OpenAPI\Models\Shared\ProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningArtifactProperties;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningArtifactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnection;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectionParameters;
use \OpenAPI\OpenAPI\Models\Shared\CodeStarParameters;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProductRequest();
    $request->createProductInput = new CreateProductInput();
    $request->createProductInput->acceptLanguage = 'ut';
    $request->createProductInput->description = 'maiores';
    $request->createProductInput->distributor = 'dicta';
    $request->createProductInput->idempotencyToken = 'corporis';
    $request->createProductInput->name = 'Heidi Carter';
    $request->createProductInput->owner = 'accusamus';
    $request->createProductInput->productType = ProductTypeEnum::MARKETPLACE;
    $request->createProductInput->provisioningArtifactParameters = new ProvisioningArtifactProperties();
    $request->createProductInput->provisioningArtifactParameters->description = 'repudiandae';
    $request->createProductInput->provisioningArtifactParameters->disableTemplateValidation = false;
    $request->createProductInput->provisioningArtifactParameters->info = [
        'ipsum' => 'quidem',
    ];
    $request->createProductInput->provisioningArtifactParameters->name = 'Andy Streich';
    $request->createProductInput->provisioningArtifactParameters->type = ProvisioningArtifactTypeEnum::MARKETPLACE_CAR;
    $request->createProductInput->sourceConnection = new SourceConnection();
    $request->createProductInput->sourceConnection->connectionParameters = new SourceConnectionParameters();
    $request->createProductInput->sourceConnection->connectionParameters->codeStar = new CodeStarParameters();
    $request->createProductInput->sourceConnection->connectionParameters->codeStar->artifactPath = 'voluptates';
    $request->createProductInput->sourceConnection->connectionParameters->codeStar->branch = 'quasi';
    $request->createProductInput->sourceConnection->connectionParameters->codeStar->connectionArn = 'repudiandae';
    $request->createProductInput->sourceConnection->connectionParameters->codeStar->repository = 'sint';
    $request->createProductInput->sourceConnection->type = SourceTypeEnum::CODESTAR;
    $request->createProductInput->supportDescription = 'veritatis';
    $request->createProductInput->supportEmail = 'itaque';
    $request->createProductInput->supportUrl = 'incidunt';
    $request->createProductInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = CreateProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_PRODUCT;

    $response = $sdk->sdk->createProduct($request);

    if ($response->createProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProvisionedProductPlan

<p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisionedProductPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProvisionedProductPlanInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedProductPlanTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProvisioningParameter;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisionedProductPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProvisionedProductPlanRequest();
    $request->createProvisionedProductPlanInput = new CreateProvisionedProductPlanInput();
    $request->createProvisionedProductPlanInput->acceptLanguage = 'labore';
    $request->createProvisionedProductPlanInput->idempotencyToken = 'modi';
    $request->createProvisionedProductPlanInput->notificationArns = [
        'aliquid',
    ];
    $request->createProvisionedProductPlanInput->pathId = 'cupiditate';
    $request->createProvisionedProductPlanInput->planName = 'quos';
    $request->createProvisionedProductPlanInput->planType = ProvisionedProductPlanTypeEnum::CLOUDFORMATION;
    $request->createProvisionedProductPlanInput->productId = 'perferendis';
    $request->createProvisionedProductPlanInput->provisionedProductName = 'magni';
    $request->createProvisionedProductPlanInput->provisioningArtifactId = 'assumenda';
    $request->createProvisionedProductPlanInput->provisioningParameters = [
        new UpdateProvisioningParameter(),
        new UpdateProvisioningParameter(),
    ];
    $request->createProvisionedProductPlanInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = CreateProvisionedProductPlanXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_PROVISIONED_PRODUCT_PLAN;

    $response = $sdk->sdk->createProvisionedProductPlan($request);

    if ($response->createProvisionedProductPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProvisioningArtifact

<p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningArtifactProperties;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningArtifactTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProvisioningArtifactRequest();
    $request->createProvisioningArtifactInput = new CreateProvisioningArtifactInput();
    $request->createProvisioningArtifactInput->acceptLanguage = 'delectus';
    $request->createProvisioningArtifactInput->idempotencyToken = 'eum';
    $request->createProvisioningArtifactInput->parameters = new ProvisioningArtifactProperties();
    $request->createProvisioningArtifactInput->parameters->description = 'non';
    $request->createProvisioningArtifactInput->parameters->disableTemplateValidation = false;
    $request->createProvisioningArtifactInput->parameters->info = [
        'sint' => 'aliquid',
        'provident' => 'necessitatibus',
        'sint' => 'officia',
        'dolor' => 'debitis',
    ];
    $request->createProvisioningArtifactInput->parameters->name = 'Wilbur King';
    $request->createProvisioningArtifactInput->parameters->type = ProvisioningArtifactTypeEnum::TERRAFORM_OPEN_SOURCE;
    $request->createProvisioningArtifactInput->productId = 'rerum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreateProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->createProvisioningArtifact($request);

    if ($response->createProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceAction

Creates a self-service action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceActionInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceActionDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceActionRequest();
    $request->createServiceActionInput = new CreateServiceActionInput();
    $request->createServiceActionInput->acceptLanguage = 'accusamus';
    $request->createServiceActionInput->definition = [
        'occaecati' => 'enim',
    ];
    $request->createServiceActionInput->definitionType = ServiceActionDefinitionTypeEnum::SSM_AUTOMATION;
    $request->createServiceActionInput->description = 'accusamus';
    $request->createServiceActionInput->idempotencyToken = 'delectus';
    $request->createServiceActionInput->name = 'Rene Reinger';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateServiceActionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_SERVICE_ACTION;

    $response = $sdk->sdk->createServiceAction($request);

    if ($response->createServiceActionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTagOption

Creates a TagOption.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTagOptionInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagOptionRequest();
    $request->createTagOptionInput = new CreateTagOptionInput();
    $request->createTagOptionInput->key = 'omnis';
    $request->createTagOptionInput->value = 'molestiae';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = CreateTagOptionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_CREATE_TAG_OPTION;

    $response = $sdk->sdk->createTagOption($request);

    if ($response->createTagOptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConstraint

<p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConstraintRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConstraintInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConstraintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConstraintRequest();
    $request->deleteConstraintInput = new DeleteConstraintInput();
    $request->deleteConstraintInput->acceptLanguage = 'suscipit';
    $request->deleteConstraintInput->id = '9b6e2141-9598-490a-ba56-3e2516fe4c8b';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DeleteConstraintXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_CONSTRAINT;

    $response = $sdk->sdk->deleteConstraint($request);

    if ($response->deleteConstraintOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePortfolio

<p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePortfolioInput;
use \OpenAPI\OpenAPI\Models\Operations\DeletePortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePortfolioRequest();
    $request->deletePortfolioInput = new DeletePortfolioInput();
    $request->deletePortfolioInput->acceptLanguage = 'repellat';
    $request->deletePortfolioInput->id = 'd2ed0289-21cd-4dc6-9260-1fb576b0d5f0';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DeletePortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_PORTFOLIO;

    $response = $sdk->sdk->deletePortfolio($request);

    if ($response->deletePortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePortfolioShare

<p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePortfolioShareRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePortfolioShareInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationNode;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationNodeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeletePortfolioShareXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePortfolioShareRequest();
    $request->deletePortfolioShareInput = new DeletePortfolioShareInput();
    $request->deletePortfolioShareInput->acceptLanguage = 'nobis';
    $request->deletePortfolioShareInput->accountId = 'dolores';
    $request->deletePortfolioShareInput->organizationNode = new OrganizationNode();
    $request->deletePortfolioShareInput->organizationNode->type = OrganizationNodeTypeEnum::ORGANIZATIONAL_UNIT;
    $request->deletePortfolioShareInput->organizationNode->value = 'totam';
    $request->deletePortfolioShareInput->portfolioId = 'dignissimos';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = DeletePortfolioShareXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_PORTFOLIO_SHARE;

    $response = $sdk->sdk->deletePortfolioShare($request);

    if ($response->deletePortfolioShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProduct

<p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProductInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductRequest();
    $request->deleteProductInput = new DeleteProductInput();
    $request->deleteProductInput->acceptLanguage = 'quam';
    $request->deleteProductInput->id = '3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_PRODUCT;

    $response = $sdk->sdk->deleteProduct($request);

    if ($response->deleteProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProvisionedProductPlan

Deletes the specified plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProvisionedProductPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProvisionedProductPlanInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProvisionedProductPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProvisionedProductPlanRequest();
    $request->deleteProvisionedProductPlanInput = new DeleteProvisionedProductPlanInput();
    $request->deleteProvisionedProductPlanInput->acceptLanguage = 'cum';
    $request->deleteProvisionedProductPlanInput->ignoreErrors = false;
    $request->deleteProvisionedProductPlanInput->planId = 'voluptate';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeleteProvisionedProductPlanXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_PROVISIONED_PRODUCT_PLAN;

    $response = $sdk->sdk->deleteProvisionedProductPlan($request);

    if ($response->deleteProvisionedProductPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProvisioningArtifact

<p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProvisioningArtifactRequest();
    $request->deleteProvisioningArtifactInput = new DeleteProvisioningArtifactInput();
    $request->deleteProvisioningArtifactInput->acceptLanguage = 'ipsa';
    $request->deleteProvisioningArtifactInput->productId = 'iure';
    $request->deleteProvisioningArtifactInput->provisioningArtifactId = 'odio';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = DeleteProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->deleteProvisioningArtifact($request);

    if ($response->deleteProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceAction

Deletes a self-service action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceActionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceActionRequest();
    $request->deleteServiceActionInput = new DeleteServiceActionInput();
    $request->deleteServiceActionInput->acceptLanguage = 'atque';
    $request->deleteServiceActionInput->id = '0d1ba77a-89eb-4f73-bae4-203ce5e6a95d';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteServiceActionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_SERVICE_ACTION;

    $response = $sdk->sdk->deleteServiceAction($request);

    if ($response->deleteServiceActionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTagOption

<p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTagOptionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagOptionRequest();
    $request->deleteTagOptionInput = new DeleteTagOptionInput();
    $request->deleteTagOptionInput->id = 'ce2af7a7-3cf3-4be4-93f8-70b326b5a734';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteTagOptionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DELETE_TAG_OPTION;

    $response = $sdk->sdk->deleteTagOption($request);

    if ($response->deleteTagOptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConstraint

Gets information about the specified constraint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConstraintRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConstraintInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConstraintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConstraintRequest();
    $request->describeConstraintInput = new DescribeConstraintInput();
    $request->describeConstraintInput->acceptLanguage = 'totam';
    $request->describeConstraintInput->id = '422bb679-d232-4271-9bf0-cbb1e31b8b90';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DescribeConstraintXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_CONSTRAINT;

    $response = $sdk->sdk->describeConstraint($request);

    if ($response->describeConstraintOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCopyProductStatus

Gets the status of the specified copy product operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCopyProductStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCopyProductStatusInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCopyProductStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCopyProductStatusRequest();
    $request->describeCopyProductStatusInput = new DescribeCopyProductStatusInput();
    $request->describeCopyProductStatusInput->acceptLanguage = 'quae';
    $request->describeCopyProductStatusInput->copyProductToken = 'aut';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = DescribeCopyProductStatusXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_COPY_PRODUCT_STATUS;

    $response = $sdk->sdk->describeCopyProductStatus($request);

    if ($response->describeCopyProductStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePortfolio

<p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePortfolioInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribePortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePortfolioRequest();
    $request->describePortfolioInput = new DescribePortfolioInput();
    $request->describePortfolioInput->acceptLanguage = 'ut';
    $request->describePortfolioInput->id = 'b921879f-ce95-43f7-bef7-fbc7abd74dd3';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = DescribePortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO;

    $response = $sdk->sdk->describePortfolio($request);

    if ($response->describePortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePortfolioShareStatus

Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePortfolioShareStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePortfolioShareStatusInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribePortfolioShareStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePortfolioShareStatusRequest();
    $request->describePortfolioShareStatusInput = new DescribePortfolioShareStatusInput();
    $request->describePortfolioShareStatusInput->portfolioShareToken = 'porro';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DescribePortfolioShareStatusXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO_SHARE_STATUS;

    $response = $sdk->sdk->describePortfolioShareStatus($request);

    if ($response->describePortfolioShareStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePortfolioShares

<p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePortfolioSharesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePortfolioSharesInput;
use \OpenAPI\OpenAPI\Models\Shared\DescribePortfolioShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribePortfolioSharesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePortfolioSharesRequest();
    $request->describePortfolioSharesInput = new DescribePortfolioSharesInput();
    $request->describePortfolioSharesInput->pageSize = 269479;
    $request->describePortfolioSharesInput->pageToken = 'ipsam';
    $request->describePortfolioSharesInput->portfolioId = 'ea';
    $request->describePortfolioSharesInput->type = DescribePortfolioShareTypeEnum::ACCOUNT;
    $request->pageSize = 'vel';
    $request->pageToken = 'possimus';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribePortfolioSharesXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO_SHARES;

    $response = $sdk->sdk->describePortfolioShares($request);

    if ($response->describePortfolioSharesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProduct

<p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProductInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProductRequest();
    $request->describeProductInput = new DescribeProductInput();
    $request->describeProductInput->acceptLanguage = 'quasi';
    $request->describeProductInput->id = '6d9f5fce-6c55-4614-ac3e-250fb008c42e';
    $request->describeProductInput->name = 'Ellen Borer';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = DescribeProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PRODUCT;

    $response = $sdk->sdk->describeProduct($request);

    if ($response->describeProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProductAsAdmin

Gets information about the specified product. This operation is run with administrator access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProductAsAdminRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProductAsAdminInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProductAsAdminXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProductAsAdminRequest();
    $request->describeProductAsAdminInput = new DescribeProductAsAdminInput();
    $request->describeProductAsAdminInput->acceptLanguage = 'nulla';
    $request->describeProductAsAdminInput->id = '6b144290-7474-4778-a7bd-466d28c10ab3';
    $request->describeProductAsAdminInput->name = 'Dallas Sanford';
    $request->describeProductAsAdminInput->sourcePortfolioId = 'eos';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DescribeProductAsAdminXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PRODUCT_AS_ADMIN;

    $response = $sdk->sdk->describeProductAsAdmin($request);

    if ($response->describeProductAsAdminOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProductView

Gets information about the specified product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProductViewRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProductViewInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProductViewXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProductViewRequest();
    $request->describeProductViewInput = new DescribeProductViewInput();
    $request->describeProductViewInput->acceptLanguage = 'aspernatur';
    $request->describeProductViewInput->id = '3c7e0bc7-178e-4479-af2a-70c688282aa4';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DescribeProductViewXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PRODUCT_VIEW;

    $response = $sdk->sdk->describeProductView($request);

    if ($response->describeProductViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProvisionedProduct

Gets information about the specified provisioned product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisionedProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProvisionedProductInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisionedProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProvisionedProductRequest();
    $request->describeProvisionedProductInput = new DescribeProvisionedProductInput();
    $request->describeProvisionedProductInput->acceptLanguage = 'ratione';
    $request->describeProvisionedProductInput->id = '2e9817ee-17cb-4e61-a6b7-b95bc0ab3c20';
    $request->describeProvisionedProductInput->name = 'Calvin Williamson';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribeProvisionedProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONED_PRODUCT;

    $response = $sdk->sdk->describeProvisionedProduct($request);

    if ($response->describeProvisionedProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProvisionedProductPlan

Gets information about the resource changes for the specified plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisionedProductPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProvisionedProductPlanInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisionedProductPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProvisionedProductPlanRequest();
    $request->describeProvisionedProductPlanInput = new DescribeProvisionedProductPlanInput();
    $request->describeProvisionedProductPlanInput->acceptLanguage = 'a';
    $request->describeProvisionedProductPlanInput->pageSize = 621679;
    $request->describeProvisionedProductPlanInput->pageToken = 'sint';
    $request->describeProvisionedProductPlanInput->planId = 'pariatur';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DescribeProvisionedProductPlanXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONED_PRODUCT_PLAN;

    $response = $sdk->sdk->describeProvisionedProductPlan($request);

    if ($response->describeProvisionedProductPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProvisioningArtifact

Gets information about the specified provisioning artifact (also known as a version) for the specified product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProvisioningArtifactRequest();
    $request->describeProvisioningArtifactInput = new DescribeProvisioningArtifactInput();
    $request->describeProvisioningArtifactInput->acceptLanguage = 'quasi';
    $request->describeProvisioningArtifactInput->productId = 'similique';
    $request->describeProvisioningArtifactInput->productName = 'culpa';
    $request->describeProvisioningArtifactInput->provisioningArtifactId = 'aliquid';
    $request->describeProvisioningArtifactInput->provisioningArtifactName = 'tenetur';
    $request->describeProvisioningArtifactInput->verbose = false;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DescribeProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->describeProvisioningArtifact($request);

    if ($response->describeProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProvisioningParameters

<p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisioningParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProvisioningParametersInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisioningParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProvisioningParametersRequest();
    $request->describeProvisioningParametersInput = new DescribeProvisioningParametersInput();
    $request->describeProvisioningParametersInput->acceptLanguage = 'soluta';
    $request->describeProvisioningParametersInput->pathId = 'accusantium';
    $request->describeProvisioningParametersInput->pathName = 'aliquam';
    $request->describeProvisioningParametersInput->productId = 'sapiente';
    $request->describeProvisioningParametersInput->productName = 'dicta';
    $request->describeProvisioningParametersInput->provisioningArtifactId = 'ullam';
    $request->describeProvisioningParametersInput->provisioningArtifactName = 'reprehenderit';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = DescribeProvisioningParametersXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONING_PARAMETERS;

    $response = $sdk->sdk->describeProvisioningParameters($request);

    if ($response->describeProvisioningParametersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecord

<p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRecordInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecordRequest();
    $request->describeRecordInput = new DescribeRecordInput();
    $request->describeRecordInput->acceptLanguage = 'deleniti';
    $request->describeRecordInput->id = 'ea19f1d1-7051-4339-9080-86a1840394c2';
    $request->describeRecordInput->pageSize = 376226;
    $request->describeRecordInput->pageToken = 'aut';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = DescribeRecordXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_RECORD;

    $response = $sdk->sdk->describeRecord($request);

    if ($response->describeRecordOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeServiceAction

Describes a self-service action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServiceActionInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServiceActionRequest();
    $request->describeServiceActionInput = new DescribeServiceActionInput();
    $request->describeServiceActionInput->acceptLanguage = 'asperiores';
    $request->describeServiceActionInput->id = '0642dac7-af51-45cc-813a-a63aae8d6786';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DescribeServiceActionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_SERVICE_ACTION;

    $response = $sdk->sdk->describeServiceAction($request);

    if ($response->describeServiceActionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeServiceActionExecutionParameters

Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceActionExecutionParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServiceActionExecutionParametersInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceActionExecutionParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServiceActionExecutionParametersRequest();
    $request->describeServiceActionExecutionParametersInput = new DescribeServiceActionExecutionParametersInput();
    $request->describeServiceActionExecutionParametersInput->acceptLanguage = 'reiciendis';
    $request->describeServiceActionExecutionParametersInput->provisionedProductId = 'assumenda';
    $request->describeServiceActionExecutionParametersInput->serviceActionId = 'nemo';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->xAmzTarget = DescribeServiceActionExecutionParametersXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_SERVICE_ACTION_EXECUTION_PARAMETERS;

    $response = $sdk->sdk->describeServiceActionExecutionParameters($request);

    if ($response->describeServiceActionExecutionParametersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTagOption

Gets information about the specified TagOption.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTagOptionInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTagOptionRequest();
    $request->describeTagOptionInput = new DescribeTagOptionInput();
    $request->describeTagOptionInput->id = 'ed4f6fbe-e41f-4333-97fe-35b60eb1ea42';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = DescribeTagOptionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_TAG_OPTION;

    $response = $sdk->sdk->describeTagOption($request);

    if ($response->describeTagOptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableAWSOrganizationsAccess

<p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableAWSOrganizationsAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableAWSOrganizationsAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableAWSOrganizationsAccessRequest();
    $request->requestBody = [
        'dolores' => 'blanditiis',
        'in' => 'dolore',
        'aliquam' => 'officiis',
        'temporibus' => 'ullam',
    ];
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DisableAWSOrganizationsAccessXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DISABLE_AWS_ORGANIZATIONS_ACCESS;

    $response = $sdk->sdk->disableAWSOrganizationsAccess($request);

    if ($response->disableAWSOrganizationsAccessOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateBudgetFromResource

Disassociates the specified budget from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateBudgetFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateBudgetFromResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateBudgetFromResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateBudgetFromResourceRequest();
    $request->disassociateBudgetFromResourceInput = new DisassociateBudgetFromResourceInput();
    $request->disassociateBudgetFromResourceInput->budgetName = 'corrupti';
    $request->disassociateBudgetFromResourceInput->resourceId = 'pariatur';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DisassociateBudgetFromResourceXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_BUDGET_FROM_RESOURCE;

    $response = $sdk->sdk->disassociateBudgetFromResource($request);

    if ($response->disassociateBudgetFromResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociatePrincipalFromPortfolio

<p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociatePrincipalFromPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociatePrincipalFromPortfolioInput;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisassociatePrincipalFromPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociatePrincipalFromPortfolioRequest();
    $request->disassociatePrincipalFromPortfolioInput = new DisassociatePrincipalFromPortfolioInput();
    $request->disassociatePrincipalFromPortfolioInput->acceptLanguage = 'reiciendis';
    $request->disassociatePrincipalFromPortfolioInput->portfolioId = 'explicabo';
    $request->disassociatePrincipalFromPortfolioInput->principalARN = 'asperiores';
    $request->disassociatePrincipalFromPortfolioInput->principalType = PrincipalTypeEnum::IAM_PATTERN;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DisassociatePrincipalFromPortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_PRINCIPAL_FROM_PORTFOLIO;

    $response = $sdk->sdk->disassociatePrincipalFromPortfolio($request);

    if ($response->disassociatePrincipalFromPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateProductFromPortfolio

<p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateProductFromPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateProductFromPortfolioInput;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateProductFromPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateProductFromPortfolioRequest();
    $request->disassociateProductFromPortfolioInput = new DisassociateProductFromPortfolioInput();
    $request->disassociateProductFromPortfolioInput->acceptLanguage = 'in';
    $request->disassociateProductFromPortfolioInput->portfolioId = 'commodi';
    $request->disassociateProductFromPortfolioInput->productId = 'quidem';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = DisassociateProductFromPortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_PRODUCT_FROM_PORTFOLIO;

    $response = $sdk->sdk->disassociateProductFromPortfolio($request);

    if ($response->disassociateProductFromPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateServiceActionFromProvisioningArtifact

Disassociates the specified self-service action association from the specified provisioning artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateServiceActionFromProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateServiceActionFromProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateServiceActionFromProvisioningArtifactRequest();
    $request->disassociateServiceActionFromProvisioningArtifactInput = new DisassociateServiceActionFromProvisioningArtifactInput();
    $request->disassociateServiceActionFromProvisioningArtifactInput->acceptLanguage = 'illo';
    $request->disassociateServiceActionFromProvisioningArtifactInput->productId = 'reiciendis';
    $request->disassociateServiceActionFromProvisioningArtifactInput->provisioningArtifactId = 'perferendis';
    $request->disassociateServiceActionFromProvisioningArtifactInput->serviceActionId = 'corrupti';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->disassociateServiceActionFromProvisioningArtifact($request);

    if ($response->disassociateServiceActionFromProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateTagOptionFromResource

Disassociates the specified TagOption from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTagOptionFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateTagOptionFromResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTagOptionFromResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateTagOptionFromResourceRequest();
    $request->disassociateTagOptionFromResourceInput = new DisassociateTagOptionFromResourceInput();
    $request->disassociateTagOptionFromResourceInput->resourceId = 'ea';
    $request->disassociateTagOptionFromResourceInput->tagOptionId = 'occaecati';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = DisassociateTagOptionFromResourceXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_TAG_OPTION_FROM_RESOURCE;

    $response = $sdk->sdk->disassociateTagOptionFromResource($request);

    if ($response->disassociateTagOptionFromResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableAWSOrganizationsAccess

<p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableAWSOrganizationsAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableAWSOrganizationsAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableAWSOrganizationsAccessRequest();
    $request->requestBody = [
        'non' => 'officiis',
    ];
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = EnableAWSOrganizationsAccessXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ENABLE_AWS_ORGANIZATIONS_ACCESS;

    $response = $sdk->sdk->enableAWSOrganizationsAccess($request);

    if ($response->enableAWSOrganizationsAccessOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeProvisionedProductPlan

Provisions or modifies a product based on the resource changes for the specified plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteProvisionedProductPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteProvisionedProductPlanInput;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteProvisionedProductPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteProvisionedProductPlanRequest();
    $request->executeProvisionedProductPlanInput = new ExecuteProvisionedProductPlanInput();
    $request->executeProvisionedProductPlanInput->acceptLanguage = 'sit';
    $request->executeProvisionedProductPlanInput->idempotencyToken = 'nobis';
    $request->executeProvisionedProductPlanInput->planId = 'error';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = ExecuteProvisionedProductPlanXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_EXECUTE_PROVISIONED_PRODUCT_PLAN;

    $response = $sdk->sdk->executeProvisionedProductPlan($request);

    if ($response->executeProvisionedProductPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeProvisionedProductServiceAction

Executes a self-service action against a provisioned product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteProvisionedProductServiceActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteProvisionedProductServiceActionInput;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteProvisionedProductServiceActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteProvisionedProductServiceActionRequest();
    $request->executeProvisionedProductServiceActionInput = new ExecuteProvisionedProductServiceActionInput();
    $request->executeProvisionedProductServiceActionInput->acceptLanguage = 'saepe';
    $request->executeProvisionedProductServiceActionInput->executeToken = 'numquam';
    $request->executeProvisionedProductServiceActionInput->parameters = [
        'in' => [
            'beatae',
            'laudantium',
            'exercitationem',
            'praesentium',
        ],
        'cum' => [
            'dolorum',
            'voluptatum',
        ],
    ];
    $request->executeProvisionedProductServiceActionInput->provisionedProductId = 'error';
    $request->executeProvisionedProductServiceActionInput->serviceActionId = 'hic';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ExecuteProvisionedProductServiceActionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_EXECUTE_PROVISIONED_PRODUCT_SERVICE_ACTION;

    $response = $sdk->sdk->executeProvisionedProductServiceAction($request);

    if ($response->executeProvisionedProductServiceActionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAWSOrganizationsAccessStatus

Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAWSOrganizationsAccessStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAWSOrganizationsAccessStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAWSOrganizationsAccessStatusRequest();
    $request->requestBody = [
        'accusamus' => 'tempora',
        'atque' => 'fugit',
        'ut' => 'fugiat',
    ];
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = GetAWSOrganizationsAccessStatusXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_GET_AWS_ORGANIZATIONS_ACCESS_STATUS;

    $response = $sdk->sdk->getAWSOrganizationsAccessStatus($request);

    if ($response->getAWSOrganizationsAccessStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvisionedProductOutputs

This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProvisionedProductOutputsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetProvisionedProductOutputsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetProvisionedProductOutputsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvisionedProductOutputsRequest();
    $request->getProvisionedProductOutputsInput = new GetProvisionedProductOutputsInput();
    $request->getProvisionedProductOutputsInput->acceptLanguage = 'sit';
    $request->getProvisionedProductOutputsInput->outputKeys = [
        'quas',
        'repudiandae',
        'corporis',
    ];
    $request->getProvisionedProductOutputsInput->pageSize = 89494;
    $request->getProvisionedProductOutputsInput->pageToken = 'blanditiis';
    $request->getProvisionedProductOutputsInput->provisionedProductId = 'ex';
    $request->getProvisionedProductOutputsInput->provisionedProductName = 'sed';
    $request->pageSize = 'sit';
    $request->pageToken = 'vel';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = GetProvisionedProductOutputsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_GET_PROVISIONED_PRODUCT_OUTPUTS;

    $response = $sdk->sdk->getProvisionedProductOutputs($request);

    if ($response->getProvisionedProductOutputsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importAsProvisionedProduct

<p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportAsProvisionedProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportAsProvisionedProductInput;
use \OpenAPI\OpenAPI\Models\Operations\ImportAsProvisionedProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportAsProvisionedProductRequest();
    $request->importAsProvisionedProductInput = new ImportAsProvisionedProductInput();
    $request->importAsProvisionedProductInput->acceptLanguage = 'harum';
    $request->importAsProvisionedProductInput->idempotencyToken = 'dicta';
    $request->importAsProvisionedProductInput->physicalId = 'architecto';
    $request->importAsProvisionedProductInput->productId = 'occaecati';
    $request->importAsProvisionedProductInput->provisionedProductName = 'labore';
    $request->importAsProvisionedProductInput->provisioningArtifactId = 'quidem';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ImportAsProvisionedProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_IMPORT_AS_PROVISIONED_PRODUCT;

    $response = $sdk->sdk->importAsProvisionedProduct($request);

    if ($response->importAsProvisionedProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAcceptedPortfolioShares

Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAcceptedPortfolioSharesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAcceptedPortfolioSharesInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAcceptedPortfolioSharesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAcceptedPortfolioSharesRequest();
    $request->listAcceptedPortfolioSharesInput = new ListAcceptedPortfolioSharesInput();
    $request->listAcceptedPortfolioSharesInput->acceptLanguage = 'deserunt';
    $request->listAcceptedPortfolioSharesInput->pageSize = 454860;
    $request->listAcceptedPortfolioSharesInput->pageToken = 'unde';
    $request->listAcceptedPortfolioSharesInput->portfolioShareType = PortfolioShareTypeEnum::AWS_ORGANIZATIONS;
    $request->pageSize = 'provident';
    $request->pageToken = 'repellendus';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = ListAcceptedPortfolioSharesXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_ACCEPTED_PORTFOLIO_SHARES;

    $response = $sdk->sdk->listAcceptedPortfolioShares($request);

    if ($response->listAcceptedPortfolioSharesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBudgetsForResource

Lists all the budgets associated to the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBudgetsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBudgetsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListBudgetsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBudgetsForResourceRequest();
    $request->listBudgetsForResourceInput = new ListBudgetsForResourceInput();
    $request->listBudgetsForResourceInput->acceptLanguage = 'fuga';
    $request->listBudgetsForResourceInput->pageSize = 509807;
    $request->listBudgetsForResourceInput->pageToken = 'mollitia';
    $request->listBudgetsForResourceInput->resourceId = 'veniam';
    $request->pageSize = 'voluptatem';
    $request->pageToken = 'quisquam';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = ListBudgetsForResourceXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_BUDGETS_FOR_RESOURCE;

    $response = $sdk->sdk->listBudgetsForResource($request);

    if ($response->listBudgetsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConstraintsForPortfolio

Lists the constraints for the specified portfolio and product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConstraintsForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConstraintsForPortfolioInput;
use \OpenAPI\OpenAPI\Models\Operations\ListConstraintsForPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConstraintsForPortfolioRequest();
    $request->listConstraintsForPortfolioInput = new ListConstraintsForPortfolioInput();
    $request->listConstraintsForPortfolioInput->acceptLanguage = 'quidem';
    $request->listConstraintsForPortfolioInput->pageSize = 806670;
    $request->listConstraintsForPortfolioInput->pageToken = 'et';
    $request->listConstraintsForPortfolioInput->portfolioId = 'esse';
    $request->listConstraintsForPortfolioInput->productId = 'amet';
    $request->pageSize = 'assumenda';
    $request->pageToken = 'ea';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = ListConstraintsForPortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_CONSTRAINTS_FOR_PORTFOLIO;

    $response = $sdk->sdk->listConstraintsForPortfolio($request);

    if ($response->listConstraintsForPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLaunchPaths

<p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLaunchPathsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLaunchPathsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListLaunchPathsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLaunchPathsRequest();
    $request->listLaunchPathsInput = new ListLaunchPathsInput();
    $request->listLaunchPathsInput->acceptLanguage = 'aspernatur';
    $request->listLaunchPathsInput->pageSize = 404425;
    $request->listLaunchPathsInput->pageToken = 'maiores';
    $request->listLaunchPathsInput->productId = 'corrupti';
    $request->pageSize = 'at';
    $request->pageToken = 'error';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = ListLaunchPathsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_LAUNCH_PATHS;

    $response = $sdk->sdk->listLaunchPaths($request);

    if ($response->listLaunchPathsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizationPortfolioAccess

<p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationPortfolioAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOrganizationPortfolioAccessInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationNodeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationPortfolioAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationPortfolioAccessRequest();
    $request->listOrganizationPortfolioAccessInput = new ListOrganizationPortfolioAccessInput();
    $request->listOrganizationPortfolioAccessInput->acceptLanguage = 'dolorum';
    $request->listOrganizationPortfolioAccessInput->organizationNodeType = OrganizationNodeTypeEnum::ACCOUNT;
    $request->listOrganizationPortfolioAccessInput->pageSize = 287119;
    $request->listOrganizationPortfolioAccessInput->pageToken = 'reiciendis';
    $request->listOrganizationPortfolioAccessInput->portfolioId = 'doloremque';
    $request->pageSize = 'repudiandae';
    $request->pageToken = 'dicta';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = ListOrganizationPortfolioAccessXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_ORGANIZATION_PORTFOLIO_ACCESS;

    $response = $sdk->sdk->listOrganizationPortfolioAccess($request);

    if ($response->listOrganizationPortfolioAccessOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPortfolioAccess

<p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPortfolioAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPortfolioAccessInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPortfolioAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPortfolioAccessRequest();
    $request->listPortfolioAccessInput = new ListPortfolioAccessInput();
    $request->listPortfolioAccessInput->acceptLanguage = 'molestias';
    $request->listPortfolioAccessInput->organizationParentId = 'magnam';
    $request->listPortfolioAccessInput->pageSize = 906355;
    $request->listPortfolioAccessInput->pageToken = 'consequuntur';
    $request->listPortfolioAccessInput->portfolioId = 'occaecati';
    $request->pageSize = 'officiis';
    $request->pageToken = 'perspiciatis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListPortfolioAccessXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_PORTFOLIO_ACCESS;

    $response = $sdk->sdk->listPortfolioAccess($request);

    if ($response->listPortfolioAccessOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPortfolios

Lists all portfolios in the catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPortfoliosRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPortfoliosInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPortfoliosXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPortfoliosRequest();
    $request->listPortfoliosInput = new ListPortfoliosInput();
    $request->listPortfoliosInput->acceptLanguage = 'quis';
    $request->listPortfoliosInput->pageSize = 440264;
    $request->listPortfoliosInput->pageToken = 'error';
    $request->pageSize = 'illo';
    $request->pageToken = 'corporis';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = ListPortfoliosXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_PORTFOLIOS;

    $response = $sdk->sdk->listPortfolios($request);

    if ($response->listPortfoliosOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPortfoliosForProduct

Lists all portfolios that the specified product is associated with.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPortfoliosForProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPortfoliosForProductInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPortfoliosForProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPortfoliosForProductRequest();
    $request->listPortfoliosForProductInput = new ListPortfoliosForProductInput();
    $request->listPortfoliosForProductInput->acceptLanguage = 'totam';
    $request->listPortfoliosForProductInput->pageSize = 61078;
    $request->listPortfoliosForProductInput->pageToken = 'molestiae';
    $request->listPortfoliosForProductInput->productId = 'eveniet';
    $request->pageSize = 'qui';
    $request->pageToken = 'cum';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = ListPortfoliosForProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_PORTFOLIOS_FOR_PRODUCT;

    $response = $sdk->sdk->listPortfoliosForProduct($request);

    if ($response->listPortfoliosForProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPrincipalsForPortfolio

Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPrincipalsForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPrincipalsForPortfolioInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPrincipalsForPortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPrincipalsForPortfolioRequest();
    $request->listPrincipalsForPortfolioInput = new ListPrincipalsForPortfolioInput();
    $request->listPrincipalsForPortfolioInput->acceptLanguage = 'aliquam';
    $request->listPrincipalsForPortfolioInput->pageSize = 320565;
    $request->listPrincipalsForPortfolioInput->pageToken = 'repellat';
    $request->listPrincipalsForPortfolioInput->portfolioId = 'alias';
    $request->pageSize = 'corporis';
    $request->pageToken = 'perspiciatis';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = ListPrincipalsForPortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_PRINCIPALS_FOR_PORTFOLIO;

    $response = $sdk->sdk->listPrincipalsForPortfolio($request);

    if ($response->listPrincipalsForPortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProvisionedProductPlans

Lists the plans for the specified provisioned product or all plans to which the user has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisionedProductPlansRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProvisionedProductPlansInput;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilter;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisionedProductPlansXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProvisionedProductPlansRequest();
    $request->listProvisionedProductPlansInput = new ListProvisionedProductPlansInput();
    $request->listProvisionedProductPlansInput->acceptLanguage = 'id';
    $request->listProvisionedProductPlansInput->accessLevelFilter = new AccessLevelFilter();
    $request->listProvisionedProductPlansInput->accessLevelFilter->key = AccessLevelFilterKeyEnum::ACCOUNT;
    $request->listProvisionedProductPlansInput->accessLevelFilter->value = 'dolore';
    $request->listProvisionedProductPlansInput->pageSize = 680349;
    $request->listProvisionedProductPlansInput->pageToken = 'nesciunt';
    $request->listProvisionedProductPlansInput->provisionProductId = 'quae';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = ListProvisionedProductPlansXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONED_PRODUCT_PLANS;

    $response = $sdk->sdk->listProvisionedProductPlans($request);

    if ($response->listProvisionedProductPlansOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProvisioningArtifacts

Lists all provisioning artifacts (also known as versions) for the specified product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisioningArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProvisioningArtifactsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisioningArtifactsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProvisioningArtifactsRequest();
    $request->listProvisioningArtifactsInput = new ListProvisioningArtifactsInput();
    $request->listProvisioningArtifactsInput->acceptLanguage = 'adipisci';
    $request->listProvisioningArtifactsInput->productId = 'debitis';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = ListProvisioningArtifactsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONING_ARTIFACTS;

    $response = $sdk->sdk->listProvisioningArtifacts($request);

    if ($response->listProvisioningArtifactsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProvisioningArtifactsForServiceAction

Lists all provisioning artifacts (also known as versions) for the specified self-service action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisioningArtifactsForServiceActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProvisioningArtifactsForServiceActionInput;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisioningArtifactsForServiceActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProvisioningArtifactsForServiceActionRequest();
    $request->listProvisioningArtifactsForServiceActionInput = new ListProvisioningArtifactsForServiceActionInput();
    $request->listProvisioningArtifactsForServiceActionInput->acceptLanguage = 'eum';
    $request->listProvisioningArtifactsForServiceActionInput->pageSize = 970494;
    $request->listProvisioningArtifactsForServiceActionInput->pageToken = 'provident';
    $request->listProvisioningArtifactsForServiceActionInput->serviceActionId = 'aspernatur';
    $request->pageSize = 'ullam';
    $request->pageToken = 'quasi';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = ListProvisioningArtifactsForServiceActionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONING_ARTIFACTS_FOR_SERVICE_ACTION;

    $response = $sdk->sdk->listProvisioningArtifactsForServiceAction($request);

    if ($response->listProvisioningArtifactsForServiceActionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecordHistory

Lists the specified requests or all performed requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRecordHistoryInput;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilter;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListRecordHistorySearchFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordHistoryRequest();
    $request->listRecordHistoryInput = new ListRecordHistoryInput();
    $request->listRecordHistoryInput->acceptLanguage = 'aliquid';
    $request->listRecordHistoryInput->accessLevelFilter = new AccessLevelFilter();
    $request->listRecordHistoryInput->accessLevelFilter->key = AccessLevelFilterKeyEnum::ACCOUNT;
    $request->listRecordHistoryInput->accessLevelFilter->value = 'repellat';
    $request->listRecordHistoryInput->pageSize = 984632;
    $request->listRecordHistoryInput->pageToken = 'ullam';
    $request->listRecordHistoryInput->searchFilter = new ListRecordHistorySearchFilter();
    $request->listRecordHistoryInput->searchFilter->key = 'in';
    $request->listRecordHistoryInput->searchFilter->value = 'nam';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = ListRecordHistoryXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_RECORD_HISTORY;

    $response = $sdk->sdk->listRecordHistory($request);

    if ($response->listRecordHistoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourcesForTagOption

Lists the resources associated with the specified TagOption.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesForTagOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourcesForTagOptionInput;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesForTagOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesForTagOptionRequest();
    $request->listResourcesForTagOptionInput = new ListResourcesForTagOptionInput();
    $request->listResourcesForTagOptionInput->pageSize = 889794;
    $request->listResourcesForTagOptionInput->pageToken = 'sapiente';
    $request->listResourcesForTagOptionInput->resourceType = 'cumque';
    $request->listResourcesForTagOptionInput->tagOptionId = 'vitae';
    $request->pageSize = 'rerum';
    $request->pageToken = 'tempora';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = ListResourcesForTagOptionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_RESOURCES_FOR_TAG_OPTION;

    $response = $sdk->sdk->listResourcesForTagOption($request);

    if ($response->listResourcesForTagOptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceActions

Lists all self-service actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceActionsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceActionsRequest();
    $request->listServiceActionsInput = new ListServiceActionsInput();
    $request->listServiceActionsInput->acceptLanguage = 'aspernatur';
    $request->listServiceActionsInput->pageSize = 432281;
    $request->listServiceActionsInput->pageToken = 'eius';
    $request->pageSize = 'rem';
    $request->pageToken = 'at';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = ListServiceActionsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_SERVICE_ACTIONS;

    $response = $sdk->sdk->listServiceActions($request);

    if ($response->listServiceActionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceActionsForProvisioningArtifact

Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceActionsForProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceActionsForProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceActionsForProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceActionsForProvisioningArtifactRequest();
    $request->listServiceActionsForProvisioningArtifactInput = new ListServiceActionsForProvisioningArtifactInput();
    $request->listServiceActionsForProvisioningArtifactInput->acceptLanguage = 'cupiditate';
    $request->listServiceActionsForProvisioningArtifactInput->pageSize = 589695;
    $request->listServiceActionsForProvisioningArtifactInput->pageToken = 'earum';
    $request->listServiceActionsForProvisioningArtifactInput->productId = 'soluta';
    $request->listServiceActionsForProvisioningArtifactInput->provisioningArtifactId = 'hic';
    $request->pageSize = 'illum';
    $request->pageToken = 'eaque';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = ListServiceActionsForProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_SERVICE_ACTIONS_FOR_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->listServiceActionsForProvisioningArtifact($request);

    if ($response->listServiceActionsForProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStackInstancesForProvisionedProduct

Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStackInstancesForProvisionedProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStackInstancesForProvisionedProductInput;
use \OpenAPI\OpenAPI\Models\Operations\ListStackInstancesForProvisionedProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStackInstancesForProvisionedProductRequest();
    $request->listStackInstancesForProvisionedProductInput = new ListStackInstancesForProvisionedProductInput();
    $request->listStackInstancesForProvisionedProductInput->acceptLanguage = 'dolorem';
    $request->listStackInstancesForProvisionedProductInput->pageSize = 147808;
    $request->listStackInstancesForProvisionedProductInput->pageToken = 'cumque';
    $request->listStackInstancesForProvisionedProductInput->provisionedProductId = 'fuga';
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = ListStackInstancesForProvisionedProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_STACK_INSTANCES_FOR_PROVISIONED_PRODUCT;

    $response = $sdk->sdk->listStackInstancesForProvisionedProduct($request);

    if ($response->listStackInstancesForProvisionedProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagOptions

Lists the specified TagOptions or all TagOptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\ListTagOptionsFilters;
use \OpenAPI\OpenAPI\Models\Operations\ListTagOptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagOptionsRequest();
    $request->listTagOptionsInput = new ListTagOptionsInput();
    $request->listTagOptionsInput->filters = new ListTagOptionsFilters();
    $request->listTagOptionsInput->filters->active = false;
    $request->listTagOptionsInput->filters->key = 'ducimus';
    $request->listTagOptionsInput->filters->value = 'natus';
    $request->listTagOptionsInput->pageSize = 581082;
    $request->listTagOptionsInput->pageToken = 'suscipit';
    $request->pageSize = 'adipisci';
    $request->pageToken = 'quasi';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = ListTagOptionsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_LIST_TAG_OPTIONS;

    $response = $sdk->sdk->listTagOptions($request);

    if ($response->listTagOptionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyProvisionProductEngineWorkflowResult

 Notifies the result of the provisioning engine execution. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyProvisionProductEngineWorkflowResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyProvisionProductEngineWorkflowResultInput;
use \OpenAPI\OpenAPI\Models\Shared\RecordOutput;
use \OpenAPI\OpenAPI\Models\Shared\EngineWorkflowResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\UniqueTagResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\EngineWorkflowStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotifyProvisionProductEngineWorkflowResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyProvisionProductEngineWorkflowResultRequest();
    $request->notifyProvisionProductEngineWorkflowResultInput = new NotifyProvisionProductEngineWorkflowResultInput();
    $request->notifyProvisionProductEngineWorkflowResultInput->failureReason = 'molestiae';
    $request->notifyProvisionProductEngineWorkflowResultInput->idempotencyToken = 'dicta';
    $request->notifyProvisionProductEngineWorkflowResultInput->outputs = [
        new RecordOutput(),
        new RecordOutput(),
    ];
    $request->notifyProvisionProductEngineWorkflowResultInput->recordId = 'esse';
    $request->notifyProvisionProductEngineWorkflowResultInput->resourceIdentifier = new EngineWorkflowResourceIdentifier();
    $request->notifyProvisionProductEngineWorkflowResultInput->resourceIdentifier->uniqueTag = new UniqueTagResourceIdentifier();
    $request->notifyProvisionProductEngineWorkflowResultInput->resourceIdentifier->uniqueTag->key = 'praesentium';
    $request->notifyProvisionProductEngineWorkflowResultInput->resourceIdentifier->uniqueTag->value = 'maiores';
    $request->notifyProvisionProductEngineWorkflowResultInput->status = EngineWorkflowStatusEnum::FAILED;
    $request->notifyProvisionProductEngineWorkflowResultInput->workflowToken = 'vel';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = NotifyProvisionProductEngineWorkflowResultXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_NOTIFY_PROVISION_PRODUCT_ENGINE_WORKFLOW_RESULT;

    $response = $sdk->sdk->notifyProvisionProductEngineWorkflowResult($request);

    if ($response->notifyProvisionProductEngineWorkflowResultOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyTerminateProvisionedProductEngineWorkflowResult

 Notifies the result of the terminate engine execution. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyTerminateProvisionedProductEngineWorkflowResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyTerminateProvisionedProductEngineWorkflowResultInput;
use \OpenAPI\OpenAPI\Models\Shared\EngineWorkflowStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotifyTerminateProvisionedProductEngineWorkflowResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyTerminateProvisionedProductEngineWorkflowResultRequest();
    $request->notifyTerminateProvisionedProductEngineWorkflowResultInput = new NotifyTerminateProvisionedProductEngineWorkflowResultInput();
    $request->notifyTerminateProvisionedProductEngineWorkflowResultInput->failureReason = 'ex';
    $request->notifyTerminateProvisionedProductEngineWorkflowResultInput->idempotencyToken = 'consectetur';
    $request->notifyTerminateProvisionedProductEngineWorkflowResultInput->recordId = 'aliquid';
    $request->notifyTerminateProvisionedProductEngineWorkflowResultInput->status = EngineWorkflowStatusEnum::SUCCEEDED;
    $request->notifyTerminateProvisionedProductEngineWorkflowResultInput->workflowToken = 'laborum';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = NotifyTerminateProvisionedProductEngineWorkflowResultXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_NOTIFY_TERMINATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT;

    $response = $sdk->sdk->notifyTerminateProvisionedProductEngineWorkflowResult($request);

    if ($response->notifyTerminateProvisionedProductEngineWorkflowResultOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyUpdateProvisionedProductEngineWorkflowResult

 Notifies the result of the update engine execution. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyUpdateProvisionedProductEngineWorkflowResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyUpdateProvisionedProductEngineWorkflowResultInput;
use \OpenAPI\OpenAPI\Models\Shared\RecordOutput;
use \OpenAPI\OpenAPI\Models\Shared\EngineWorkflowStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotifyUpdateProvisionedProductEngineWorkflowResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyUpdateProvisionedProductEngineWorkflowResultRequest();
    $request->notifyUpdateProvisionedProductEngineWorkflowResultInput = new NotifyUpdateProvisionedProductEngineWorkflowResultInput();
    $request->notifyUpdateProvisionedProductEngineWorkflowResultInput->failureReason = 'aliquid';
    $request->notifyUpdateProvisionedProductEngineWorkflowResultInput->idempotencyToken = 'perferendis';
    $request->notifyUpdateProvisionedProductEngineWorkflowResultInput->outputs = [
        new RecordOutput(),
        new RecordOutput(),
    ];
    $request->notifyUpdateProvisionedProductEngineWorkflowResultInput->recordId = 'voluptas';
    $request->notifyUpdateProvisionedProductEngineWorkflowResultInput->status = EngineWorkflowStatusEnum::FAILED;
    $request->notifyUpdateProvisionedProductEngineWorkflowResultInput->workflowToken = 'id';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = NotifyUpdateProvisionedProductEngineWorkflowResultXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_NOTIFY_UPDATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT;

    $response = $sdk->sdk->notifyUpdateProvisionedProductEngineWorkflowResult($request);

    if ($response->notifyUpdateProvisionedProductEngineWorkflowResultOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisionProduct

<p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionProductInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningParameter;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningPreferences;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisionProductRequest();
    $request->provisionProductInput = new ProvisionProductInput();
    $request->provisionProductInput->acceptLanguage = 'ad';
    $request->provisionProductInput->notificationArns = [
        'enim',
        'vitae',
        'repellendus',
    ];
    $request->provisionProductInput->pathId = 'ex';
    $request->provisionProductInput->pathName = 'quo';
    $request->provisionProductInput->productId = 'ex';
    $request->provisionProductInput->productName = 'ut';
    $request->provisionProductInput->provisionToken = 'ad';
    $request->provisionProductInput->provisionedProductName = 'expedita';
    $request->provisionProductInput->provisioningArtifactId = 'voluptatem';
    $request->provisionProductInput->provisioningArtifactName = 'molestias';
    $request->provisionProductInput->provisioningParameters = [
        new ProvisioningParameter(),
        new ProvisioningParameter(),
        new ProvisioningParameter(),
    ];
    $request->provisionProductInput->provisioningPreferences = new ProvisioningPreferences();
    $request->provisionProductInput->provisioningPreferences->stackSetAccounts = [
        'beatae',
        'voluptatum',
    ];
    $request->provisionProductInput->provisioningPreferences->stackSetFailureToleranceCount = 606308;
    $request->provisionProductInput->provisioningPreferences->stackSetFailureTolerancePercentage = 85233;
    $request->provisionProductInput->provisioningPreferences->stackSetMaxConcurrencyCount = 703218;
    $request->provisionProductInput->provisioningPreferences->stackSetMaxConcurrencyPercentage = 665678;
    $request->provisionProductInput->provisioningPreferences->stackSetRegions = [
        'voluptatem',
        'sapiente',
        'officiis',
    ];
    $request->provisionProductInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = ProvisionProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_PROVISION_PRODUCT;

    $response = $sdk->sdk->provisionProduct($request);

    if ($response->provisionProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectPortfolioShare

Rejects an offer to share the specified portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectPortfolioShareRequest;
use \OpenAPI\OpenAPI\Models\Shared\RejectPortfolioShareInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RejectPortfolioShareXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectPortfolioShareRequest();
    $request->rejectPortfolioShareInput = new RejectPortfolioShareInput();
    $request->rejectPortfolioShareInput->acceptLanguage = 'ex';
    $request->rejectPortfolioShareInput->portfolioId = 'sapiente';
    $request->rejectPortfolioShareInput->portfolioShareType = PortfolioShareTypeEnum::AWS_SERVICECATALOG;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = RejectPortfolioShareXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_REJECT_PORTFOLIO_SHARE;

    $response = $sdk->sdk->rejectPortfolioShare($request);

    if ($response->rejectPortfolioShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scanProvisionedProducts

<p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScanProvisionedProductsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScanProvisionedProductsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilter;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScanProvisionedProductsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanProvisionedProductsRequest();
    $request->scanProvisionedProductsInput = new ScanProvisionedProductsInput();
    $request->scanProvisionedProductsInput->acceptLanguage = 'totam';
    $request->scanProvisionedProductsInput->accessLevelFilter = new AccessLevelFilter();
    $request->scanProvisionedProductsInput->accessLevelFilter->key = AccessLevelFilterKeyEnum::USER;
    $request->scanProvisionedProductsInput->accessLevelFilter->value = 'quibusdam';
    $request->scanProvisionedProductsInput->pageSize = 720528;
    $request->scanProvisionedProductsInput->pageToken = 'ipsam';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = ScanProvisionedProductsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_SCAN_PROVISIONED_PRODUCTS;

    $response = $sdk->sdk->scanProvisionedProducts($request);

    if ($response->scanProvisionedProductsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchProducts

Gets information about the products to which the caller has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchProductsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProductViewSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProductsRequest();
    $request->pageSize = 'dolor';
    $request->pageToken = 'consequatur';
    $request->searchProductsInput = new SearchProductsInput();
    $request->searchProductsInput->acceptLanguage = 'architecto';
    $request->searchProductsInput->filters = [
        'modi' => [
            'ab',
        ],
    ];
    $request->searchProductsInput->pageSize = 513760;
    $request->searchProductsInput->pageToken = 'quae';
    $request->searchProductsInput->sortBy = ProductViewSortByEnum::TITLE;
    $request->searchProductsInput->sortOrder = SortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = SearchProductsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PRODUCTS;

    $response = $sdk->sdk->searchProducts($request);

    if ($response->searchProductsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchProductsAsAdmin

Gets information about the products for the specified portfolio or all products.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsAsAdminRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchProductsAsAdminInput;
use \OpenAPI\OpenAPI\Models\Shared\ProductSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductViewSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsAsAdminXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProductsAsAdminRequest();
    $request->pageSize = 'esse';
    $request->pageToken = 'necessitatibus';
    $request->searchProductsAsAdminInput = new SearchProductsAsAdminInput();
    $request->searchProductsAsAdminInput->acceptLanguage = 'sed';
    $request->searchProductsAsAdminInput->filters = [
        'nesciunt' => [
            'eum',
            'vel',
            'voluptatum',
        ],
        'magnam' => [
            'ab',
            'porro',
        ],
    ];
    $request->searchProductsAsAdminInput->pageSize = 421844;
    $request->searchProductsAsAdminInput->pageToken = 'nobis';
    $request->searchProductsAsAdminInput->portfolioId = 'laboriosam';
    $request->searchProductsAsAdminInput->productSource = ProductSourceEnum::ACCOUNT;
    $request->searchProductsAsAdminInput->sortBy = ProductViewSortByEnum::CREATION_DATE;
    $request->searchProductsAsAdminInput->sortOrder = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = SearchProductsAsAdminXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PRODUCTS_AS_ADMIN;

    $response = $sdk->sdk->searchProductsAsAdmin($request);

    if ($response->searchProductsAsAdminOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchProvisionedProducts

Gets information about the provisioned products that meet the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchProvisionedProductsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchProvisionedProductsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilter;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevelFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchProvisionedProductsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProvisionedProductsRequest();
    $request->pageSize = 'est';
    $request->pageToken = 'harum';
    $request->searchProvisionedProductsInput = new SearchProvisionedProductsInput();
    $request->searchProvisionedProductsInput->acceptLanguage = 'sequi';
    $request->searchProvisionedProductsInput->accessLevelFilter = new AccessLevelFilter();
    $request->searchProvisionedProductsInput->accessLevelFilter->key = AccessLevelFilterKeyEnum::USER;
    $request->searchProvisionedProductsInput->accessLevelFilter->value = 'repudiandae';
    $request->searchProvisionedProductsInput->filters = [
        'occaecati' => [
            'voluptate',
            'blanditiis',
        ],
        'officia' => [
            'numquam',
            'nemo',
        ],
        'quos' => [
            'aspernatur',
            'ducimus',
        ],
        'nesciunt' => [
            'laudantium',
            'incidunt',
            'quasi',
        ],
    ];
    $request->searchProvisionedProductsInput->pageSize = 524380;
    $request->searchProvisionedProductsInput->pageToken = 'fugiat';
    $request->searchProvisionedProductsInput->sortBy = 'dicta';
    $request->searchProvisionedProductsInput->sortOrder = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = SearchProvisionedProductsXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PROVISIONED_PRODUCTS;

    $response = $sdk->sdk->searchProvisionedProducts($request);

    if ($response->searchProvisionedProductsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateProvisionedProduct

<p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateProvisionedProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminateProvisionedProductInput;
use \OpenAPI\OpenAPI\Models\Operations\TerminateProvisionedProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateProvisionedProductRequest();
    $request->terminateProvisionedProductInput = new TerminateProvisionedProductInput();
    $request->terminateProvisionedProductInput->acceptLanguage = 'omnis';
    $request->terminateProvisionedProductInput->ignoreErrors = false;
    $request->terminateProvisionedProductInput->provisionedProductId = 'eos';
    $request->terminateProvisionedProductInput->provisionedProductName = 'occaecati';
    $request->terminateProvisionedProductInput->retainPhysicalResources = false;
    $request->terminateProvisionedProductInput->terminateToken = 'iste';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = TerminateProvisionedProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_TERMINATE_PROVISIONED_PRODUCT;

    $response = $sdk->sdk->terminateProvisionedProduct($request);

    if ($response->terminateProvisionedProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConstraint

Updates the specified constraint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConstraintRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConstraintInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConstraintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConstraintRequest();
    $request->updateConstraintInput = new UpdateConstraintInput();
    $request->updateConstraintInput->acceptLanguage = 'delectus';
    $request->updateConstraintInput->description = 'minima';
    $request->updateConstraintInput->id = '8c4d86e6-8e4b-4e05-a013-f59da757a59e';
    $request->updateConstraintInput->parameters = 'impedit';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = UpdateConstraintXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_CONSTRAINT;

    $response = $sdk->sdk->updateConstraint($request);

    if ($response->updateConstraintOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePortfolio

<p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePortfolioInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePortfolioRequest();
    $request->updatePortfolioInput = new UpdatePortfolioInput();
    $request->updatePortfolioInput->acceptLanguage = 'quae';
    $request->updatePortfolioInput->addTags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->updatePortfolioInput->description = 'fuga';
    $request->updatePortfolioInput->displayName = 'laborum';
    $request->updatePortfolioInput->id = '3383c2be-b477-4373-88d7-2f64d1db1f2c';
    $request->updatePortfolioInput->providerName = 'aliquam';
    $request->updatePortfolioInput->removeTags = [
        'illo',
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = UpdatePortfolioXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PORTFOLIO;

    $response = $sdk->sdk->updatePortfolio($request);

    if ($response->updatePortfolioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePortfolioShare

<p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioShareRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePortfolioShareInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationNode;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationNodeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioShareXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePortfolioShareRequest();
    $request->updatePortfolioShareInput = new UpdatePortfolioShareInput();
    $request->updatePortfolioShareInput->acceptLanguage = 'velit';
    $request->updatePortfolioShareInput->accountId = 'ut';
    $request->updatePortfolioShareInput->organizationNode = new OrganizationNode();
    $request->updatePortfolioShareInput->organizationNode->type = OrganizationNodeTypeEnum::ORGANIZATIONAL_UNIT;
    $request->updatePortfolioShareInput->organizationNode->value = 'earum';
    $request->updatePortfolioShareInput->portfolioId = 'dicta';
    $request->updatePortfolioShareInput->sharePrincipals = false;
    $request->updatePortfolioShareInput->shareTagOptions = false;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = UpdatePortfolioShareXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PORTFOLIO_SHARE;

    $response = $sdk->sdk->updatePortfolioShare($request);

    if ($response->updatePortfolioShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProduct

Updates the specified product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProductInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnection;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectionParameters;
use \OpenAPI\OpenAPI\Models\Shared\CodeStarParameters;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProductRequest();
    $request->updateProductInput = new UpdateProductInput();
    $request->updateProductInput->acceptLanguage = 'velit';
    $request->updateProductInput->addTags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->updateProductInput->description = 'non';
    $request->updateProductInput->distributor = 'dolor';
    $request->updateProductInput->id = '7000ae6b-6bc9-4b8f-b59e-ac55a9741d31';
    $request->updateProductInput->name = 'Florence Hand';
    $request->updateProductInput->owner = 'ex';
    $request->updateProductInput->removeTags = [
        'soluta',
        'libero',
    ];
    $request->updateProductInput->sourceConnection = new SourceConnection();
    $request->updateProductInput->sourceConnection->connectionParameters = new SourceConnectionParameters();
    $request->updateProductInput->sourceConnection->connectionParameters->codeStar = new CodeStarParameters();
    $request->updateProductInput->sourceConnection->connectionParameters->codeStar->artifactPath = 'rem';
    $request->updateProductInput->sourceConnection->connectionParameters->codeStar->branch = 'dolorum';
    $request->updateProductInput->sourceConnection->connectionParameters->codeStar->connectionArn = 'odio';
    $request->updateProductInput->sourceConnection->connectionParameters->codeStar->repository = 'fugit';
    $request->updateProductInput->sourceConnection->type = SourceTypeEnum::CODESTAR;
    $request->updateProductInput->supportDescription = 'alias';
    $request->updateProductInput->supportEmail = 'magni';
    $request->updateProductInput->supportUrl = 'vel';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = UpdateProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PRODUCT;

    $response = $sdk->sdk->updateProduct($request);

    if ($response->updateProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProvisionedProduct

<p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisionedProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProvisionedProductInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProvisioningParameter;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProvisioningPreferences;
use \OpenAPI\OpenAPI\Models\Shared\StackSetOperationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisionedProductXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProvisionedProductRequest();
    $request->updateProvisionedProductInput = new UpdateProvisionedProductInput();
    $request->updateProvisionedProductInput->acceptLanguage = 'ipsum';
    $request->updateProvisionedProductInput->pathId = 'unde';
    $request->updateProvisionedProductInput->pathName = 'nulla';
    $request->updateProvisionedProductInput->productId = 'distinctio';
    $request->updateProvisionedProductInput->productName = 'maxime';
    $request->updateProvisionedProductInput->provisionedProductId = 'quia';
    $request->updateProvisionedProductInput->provisionedProductName = 'quia';
    $request->updateProvisionedProductInput->provisioningArtifactId = 'nostrum';
    $request->updateProvisionedProductInput->provisioningArtifactName = 'omnis';
    $request->updateProvisionedProductInput->provisioningParameters = [
        new UpdateProvisioningParameter(),
        new UpdateProvisioningParameter(),
        new UpdateProvisioningParameter(),
    ];
    $request->updateProvisionedProductInput->provisioningPreferences = new UpdateProvisioningPreferences();
    $request->updateProvisionedProductInput->provisioningPreferences->stackSetAccounts = [
        'id',
    ];
    $request->updateProvisionedProductInput->provisioningPreferences->stackSetFailureToleranceCount = 727888;
    $request->updateProvisionedProductInput->provisioningPreferences->stackSetFailureTolerancePercentage = 854460;
    $request->updateProvisionedProductInput->provisioningPreferences->stackSetMaxConcurrencyCount = 637462;
    $request->updateProvisionedProductInput->provisioningPreferences->stackSetMaxConcurrencyPercentage = 554603;
    $request->updateProvisionedProductInput->provisioningPreferences->stackSetOperationType = StackSetOperationTypeEnum::DELETE;
    $request->updateProvisionedProductInput->provisioningPreferences->stackSetRegions = [
        'iusto',
    ];
    $request->updateProvisionedProductInput->tags = [
        new Tag(),
    ];
    $request->updateProvisionedProductInput->updateToken = 'voluptates';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = UpdateProvisionedProductXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PROVISIONED_PRODUCT;

    $response = $sdk->sdk->updateProvisionedProduct($request);

    if ($response->updateProvisionedProductOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProvisionedProductProperties

Requests updates to the properties of the specified provisioned product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisionedProductPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProvisionedProductPropertiesInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisionedProductPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProvisionedProductPropertiesRequest();
    $request->updateProvisionedProductPropertiesInput = new UpdateProvisionedProductPropertiesInput();
    $request->updateProvisionedProductPropertiesInput->acceptLanguage = 'autem';
    $request->updateProvisionedProductPropertiesInput->idempotencyToken = 'esse';
    $request->updateProvisionedProductPropertiesInput->provisionedProductId = 'dolores';
    $request->updateProvisionedProductPropertiesInput->provisionedProductProperties = [
        'beatae' => 'est',
        'facere' => 'corrupti',
        'molestiae' => 'provident',
        'accusamus' => 'necessitatibus',
    ];
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = UpdateProvisionedProductPropertiesXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PROVISIONED_PRODUCT_PROPERTIES;

    $response = $sdk->sdk->updateProvisionedProductProperties($request);

    if ($response->updateProvisionedProductPropertiesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProvisioningArtifact

<p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisioningArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProvisioningArtifactInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningArtifactGuidanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisioningArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProvisioningArtifactRequest();
    $request->updateProvisioningArtifactInput = new UpdateProvisioningArtifactInput();
    $request->updateProvisioningArtifactInput->acceptLanguage = 'corporis';
    $request->updateProvisioningArtifactInput->active = false;
    $request->updateProvisioningArtifactInput->description = 'officiis';
    $request->updateProvisioningArtifactInput->guidance = ProvisioningArtifactGuidanceEnum::DEPRECATED;
    $request->updateProvisioningArtifactInput->name = 'Josh Abshire';
    $request->updateProvisioningArtifactInput->productId = 'fuga';
    $request->updateProvisioningArtifactInput->provisioningArtifactId = 'repudiandae';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = UpdateProvisioningArtifactXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PROVISIONING_ARTIFACT;

    $response = $sdk->sdk->updateProvisioningArtifact($request);

    if ($response->updateProvisioningArtifactOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceAction

Updates a self-service action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceActionInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceActionRequest();
    $request->updateServiceActionInput = new UpdateServiceActionInput();
    $request->updateServiceActionInput->acceptLanguage = 'odit';
    $request->updateServiceActionInput->definition = [
        'corporis' => 'error',
    ];
    $request->updateServiceActionInput->description = 'earum';
    $request->updateServiceActionInput->id = '3ea4b519-7f92-4443-9a7c-e52b895c537c';
    $request->updateServiceActionInput->name = 'Emma Herzog';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = UpdateServiceActionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_SERVICE_ACTION;

    $response = $sdk->sdk->updateServiceAction($request);

    if ($response->updateServiceActionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagOption

Updates the specified TagOption.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTagOptionInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagOptionRequest();
    $request->updateTagOptionInput = new UpdateTagOptionInput();
    $request->updateTagOptionInput->active = false;
    $request->updateTagOptionInput->id = '96c3ca5a-cfbe-42fd-9707-577929177dea';
    $request->updateTagOptionInput->value = 'optio';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->xAmzTarget = UpdateTagOptionXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_UPDATE_TAG_OPTION;

    $response = $sdk->sdk->updateTagOption($request);

    if ($response->updateTagOptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
