# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->acceptPortfolioShareInput->acceptLanguage = 'corrupti';
    $request->acceptPortfolioShareInput->portfolioId = 'provident';
    $request->acceptPortfolioShareInput->portfolioShareType = PortfolioShareTypeEnum::AWS_ORGANIZATIONS;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AcceptPortfolioShareXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ACCEPT_PORTFOLIO_SHARE;

    $response = $sdk->acceptPortfolioShare($request);

    if ($response->acceptPortfolioShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [acceptPortfolioShare](docs/sdk/README.md#acceptportfolioshare) - Accepts an offer to share the specified portfolio.
* [associateBudgetWithResource](docs/sdk/README.md#associatebudgetwithresource) - Associates the specified budget with the specified resource.
* [associatePrincipalWithPortfolio](docs/sdk/README.md#associateprincipalwithportfolio) - <p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [associateProductWithPortfolio](docs/sdk/README.md#associateproductwithportfolio) - <p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [associateServiceActionWithProvisioningArtifact](docs/sdk/README.md#associateserviceactionwithprovisioningartifact) - Associates a self-service action with a provisioning artifact.
* [associateTagOptionWithResource](docs/sdk/README.md#associatetagoptionwithresource) - Associate the specified TagOption with the specified portfolio or product.
* [batchAssociateServiceActionWithProvisioningArtifact](docs/sdk/README.md#batchassociateserviceactionwithprovisioningartifact) - Associates multiple self-service actions with provisioning artifacts.
* [batchDisassociateServiceActionFromProvisioningArtifact](docs/sdk/README.md#batchdisassociateserviceactionfromprovisioningartifact) - Disassociates a batch of self-service actions from the specified provisioning artifact.
* [copyProduct](docs/sdk/README.md#copyproduct) - <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
* [createConstraint](docs/sdk/README.md#createconstraint) - <p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [createPortfolio](docs/sdk/README.md#createportfolio) - <p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [createPortfolioShare](docs/sdk/README.md#createportfolioshare) - <p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [createProduct](docs/sdk/README.md#createproduct) - <p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* [createProvisionedProductPlan](docs/sdk/README.md#createprovisionedproductplan) - <p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
* [createProvisioningArtifact](docs/sdk/README.md#createprovisioningartifact) - <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* [createServiceAction](docs/sdk/README.md#createserviceaction) - Creates a self-service action.
* [createTagOption](docs/sdk/README.md#createtagoption) - Creates a TagOption.
* [deleteConstraint](docs/sdk/README.md#deleteconstraint) - <p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [deletePortfolio](docs/sdk/README.md#deleteportfolio) - <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [deletePortfolioShare](docs/sdk/README.md#deleteportfolioshare) - <p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
* [deleteProduct](docs/sdk/README.md#deleteproduct) - <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [deleteProvisionedProductPlan](docs/sdk/README.md#deleteprovisionedproductplan) - Deletes the specified plan.
* [deleteProvisioningArtifact](docs/sdk/README.md#deleteprovisioningartifact) - <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
* [deleteServiceAction](docs/sdk/README.md#deleteserviceaction) - Deletes a self-service action.
* [deleteTagOption](docs/sdk/README.md#deletetagoption) - <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
* [describeConstraint](docs/sdk/README.md#describeconstraint) - Gets information about the specified constraint.
* [describeCopyProductStatus](docs/sdk/README.md#describecopyproductstatus) - Gets the status of the specified copy product operation.
* [describePortfolio](docs/sdk/README.md#describeportfolio) - <p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [describePortfolioShareStatus](docs/sdk/README.md#describeportfoliosharestatus) - Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.
* [describePortfolioShares](docs/sdk/README.md#describeportfolioshares) - <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
* [describeProduct](docs/sdk/README.md#describeproduct) - <p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>
* [describeProductAsAdmin](docs/sdk/README.md#describeproductasadmin) - Gets information about the specified product. This operation is run with administrator access.
* [describeProductView](docs/sdk/README.md#describeproductview) - Gets information about the specified product.
* [describeProvisionedProduct](docs/sdk/README.md#describeprovisionedproduct) - Gets information about the specified provisioned product.
* [describeProvisionedProductPlan](docs/sdk/README.md#describeprovisionedproductplan) - Gets information about the resource changes for the specified plan.
* [describeProvisioningArtifact](docs/sdk/README.md#describeprovisioningartifact) - Gets information about the specified provisioning artifact (also known as a version) for the specified product.
* [describeProvisioningParameters](docs/sdk/README.md#describeprovisioningparameters) - <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
* [describeRecord](docs/sdk/README.md#describerecord) - <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
* [describeServiceAction](docs/sdk/README.md#describeserviceaction) - Describes a self-service action.
* [describeServiceActionExecutionParameters](docs/sdk/README.md#describeserviceactionexecutionparameters) - Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
* [describeTagOption](docs/sdk/README.md#describetagoption) - Gets information about the specified TagOption.
* [disableAWSOrganizationsAccess](docs/sdk/README.md#disableawsorganizationsaccess) - <p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>
* [disassociateBudgetFromResource](docs/sdk/README.md#disassociatebudgetfromresource) - Disassociates the specified budget from the specified resource.
* [disassociatePrincipalFromPortfolio](docs/sdk/README.md#disassociateprincipalfromportfolio) - <p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>
* [disassociateProductFromPortfolio](docs/sdk/README.md#disassociateproductfromportfolio) - <p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>
* [disassociateServiceActionFromProvisioningArtifact](docs/sdk/README.md#disassociateserviceactionfromprovisioningartifact) - Disassociates the specified self-service action association from the specified provisioning artifact.
* [disassociateTagOptionFromResource](docs/sdk/README.md#disassociatetagoptionfromresource) - Disassociates the specified TagOption from the specified resource.
* [enableAWSOrganizationsAccess](docs/sdk/README.md#enableawsorganizationsaccess) - <p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>
* [executeProvisionedProductPlan](docs/sdk/README.md#executeprovisionedproductplan) - Provisions or modifies a product based on the resource changes for the specified plan.
* [executeProvisionedProductServiceAction](docs/sdk/README.md#executeprovisionedproductserviceaction) - Executes a self-service action against a provisioned product.
* [getAWSOrganizationsAccessStatus](docs/sdk/README.md#getawsorganizationsaccessstatus) - Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.
* [getProvisionedProductOutputs](docs/sdk/README.md#getprovisionedproductoutputs) - This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.
* [importAsProvisionedProduct](docs/sdk/README.md#importasprovisionedproduct) - <p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
* [listAcceptedPortfolioShares](docs/sdk/README.md#listacceptedportfolioshares) - Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.
* [listBudgetsForResource](docs/sdk/README.md#listbudgetsforresource) - Lists all the budgets associated to the specified resource.
* [listConstraintsForPortfolio](docs/sdk/README.md#listconstraintsforportfolio) - Lists the constraints for the specified portfolio and product.
* [listLaunchPaths](docs/sdk/README.md#listlaunchpaths) - <p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>
* [listOrganizationPortfolioAccess](docs/sdk/README.md#listorganizationportfolioaccess) - <p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
* [listPortfolioAccess](docs/sdk/README.md#listportfolioaccess) - <p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
* [listPortfolios](docs/sdk/README.md#listportfolios) - Lists all portfolios in the catalog.
* [listPortfoliosForProduct](docs/sdk/README.md#listportfoliosforproduct) - Lists all portfolios that the specified product is associated with.
* [listPrincipalsForPortfolio](docs/sdk/README.md#listprincipalsforportfolio) - Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.
* [listProvisionedProductPlans](docs/sdk/README.md#listprovisionedproductplans) - Lists the plans for the specified provisioned product or all plans to which the user has access.
* [listProvisioningArtifacts](docs/sdk/README.md#listprovisioningartifacts) - Lists all provisioning artifacts (also known as versions) for the specified product.
* [listProvisioningArtifactsForServiceAction](docs/sdk/README.md#listprovisioningartifactsforserviceaction) - Lists all provisioning artifacts (also known as versions) for the specified self-service action.
* [listRecordHistory](docs/sdk/README.md#listrecordhistory) - Lists the specified requests or all performed requests.
* [listResourcesForTagOption](docs/sdk/README.md#listresourcesfortagoption) - Lists the resources associated with the specified TagOption.
* [listServiceActions](docs/sdk/README.md#listserviceactions) - Lists all self-service actions.
* [listServiceActionsForProvisioningArtifact](docs/sdk/README.md#listserviceactionsforprovisioningartifact) - Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
* [listStackInstancesForProvisionedProduct](docs/sdk/README.md#liststackinstancesforprovisionedproduct) - Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. 
* [listTagOptions](docs/sdk/README.md#listtagoptions) - Lists the specified TagOptions or all TagOptions.
* [notifyProvisionProductEngineWorkflowResult](docs/sdk/README.md#notifyprovisionproductengineworkflowresult) -  Notifies the result of the provisioning engine execution. 
* [notifyTerminateProvisionedProductEngineWorkflowResult](docs/sdk/README.md#notifyterminateprovisionedproductengineworkflowresult) -  Notifies the result of the terminate engine execution. 
* [notifyUpdateProvisionedProductEngineWorkflowResult](docs/sdk/README.md#notifyupdateprovisionedproductengineworkflowresult) -  Notifies the result of the update engine execution. 
* [provisionProduct](docs/sdk/README.md#provisionproduct) - <p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>
* [rejectPortfolioShare](docs/sdk/README.md#rejectportfolioshare) - Rejects an offer to share the specified portfolio.
* [scanProvisionedProducts](docs/sdk/README.md#scanprovisionedproducts) - <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
* [searchProducts](docs/sdk/README.md#searchproducts) - Gets information about the products to which the caller has access.
* [searchProductsAsAdmin](docs/sdk/README.md#searchproductsasadmin) - Gets information about the products for the specified portfolio or all products.
* [searchProvisionedProducts](docs/sdk/README.md#searchprovisionedproducts) - Gets information about the provisioned products that meet the specified criteria.
* [terminateProvisionedProduct](docs/sdk/README.md#terminateprovisionedproduct) - <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* [updateConstraint](docs/sdk/README.md#updateconstraint) - Updates the specified constraint.
* [updatePortfolio](docs/sdk/README.md#updateportfolio) - <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
* [updatePortfolioShare](docs/sdk/README.md#updateportfolioshare) - <p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [updateProduct](docs/sdk/README.md#updateproduct) - Updates the specified product.
* [updateProvisionedProduct](docs/sdk/README.md#updateprovisionedproduct) - <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* [updateProvisionedProductProperties](docs/sdk/README.md#updateprovisionedproductproperties) - Requests updates to the properties of the specified provisioned product.
* [updateProvisioningArtifact](docs/sdk/README.md#updateprovisioningartifact) - <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
* [updateServiceAction](docs/sdk/README.md#updateserviceaction) - Updates a self-service action.
* [updateTagOption](docs/sdk/README.md#updatetagoption) - Updates the specified TagOption.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
