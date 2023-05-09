# SDK

## Overview

<fullname>Service Catalog</fullname> <p> <a href="http://aws.amazon.com/servicecatalog">Service Catalog</a> enables organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To get the most out of this documentation, you should be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">Service Catalog Concepts</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicecatalog/>
### Available Operations

* [AcceptPortfolioShare](#acceptportfolioshare) - Accepts an offer to share the specified portfolio.
* [AssociateBudgetWithResource](#associatebudgetwithresource) - Associates the specified budget with the specified resource.
* [AssociatePrincipalWithPortfolio](#associateprincipalwithportfolio) - <p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [AssociateProductWithPortfolio](#associateproductwithportfolio) - <p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [AssociateServiceActionWithProvisioningArtifact](#associateserviceactionwithprovisioningartifact) - Associates a self-service action with a provisioning artifact.
* [AssociateTagOptionWithResource](#associatetagoptionwithresource) - Associate the specified TagOption with the specified portfolio or product.
* [BatchAssociateServiceActionWithProvisioningArtifact](#batchassociateserviceactionwithprovisioningartifact) - Associates multiple self-service actions with provisioning artifacts.
* [BatchDisassociateServiceActionFromProvisioningArtifact](#batchdisassociateserviceactionfromprovisioningartifact) - Disassociates a batch of self-service actions from the specified provisioning artifact.
* [CopyProduct](#copyproduct) - <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
* [CreateConstraint](#createconstraint) - <p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [CreatePortfolio](#createportfolio) - <p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [CreatePortfolioShare](#createportfolioshare) - <p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [CreateProduct](#createproduct) - <p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* [CreateProvisionedProductPlan](#createprovisionedproductplan) - <p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
* [CreateProvisioningArtifact](#createprovisioningartifact) - <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* [CreateServiceAction](#createserviceaction) - Creates a self-service action.
* [CreateTagOption](#createtagoption) - Creates a TagOption.
* [DeleteConstraint](#deleteconstraint) - <p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [DeletePortfolio](#deleteportfolio) - <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [DeletePortfolioShare](#deleteportfolioshare) - <p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
* [DeleteProduct](#deleteproduct) - <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [DeleteProvisionedProductPlan](#deleteprovisionedproductplan) - Deletes the specified plan.
* [DeleteProvisioningArtifact](#deleteprovisioningartifact) - <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
* [DeleteServiceAction](#deleteserviceaction) - Deletes a self-service action.
* [DeleteTagOption](#deletetagoption) - <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
* [DescribeConstraint](#describeconstraint) - Gets information about the specified constraint.
* [DescribeCopyProductStatus](#describecopyproductstatus) - Gets the status of the specified copy product operation.
* [DescribePortfolio](#describeportfolio) - <p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* [DescribePortfolioShareStatus](#describeportfoliosharestatus) - Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.
* [DescribePortfolioShares](#describeportfolioshares) - <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
* [DescribeProduct](#describeproduct) - <p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>
* [DescribeProductAsAdmin](#describeproductasadmin) - Gets information about the specified product. This operation is run with administrator access.
* [DescribeProductView](#describeproductview) - Gets information about the specified product.
* [DescribeProvisionedProduct](#describeprovisionedproduct) - Gets information about the specified provisioned product.
* [DescribeProvisionedProductPlan](#describeprovisionedproductplan) - Gets information about the resource changes for the specified plan.
* [DescribeProvisioningArtifact](#describeprovisioningartifact) - Gets information about the specified provisioning artifact (also known as a version) for the specified product.
* [DescribeProvisioningParameters](#describeprovisioningparameters) - <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
* [DescribeRecord](#describerecord) - <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
* [DescribeServiceAction](#describeserviceaction) - Describes a self-service action.
* [DescribeServiceActionExecutionParameters](#describeserviceactionexecutionparameters) - Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
* [DescribeTagOption](#describetagoption) - Gets information about the specified TagOption.
* [DisableAWSOrganizationsAccess](#disableawsorganizationsaccess) - <p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>
* [DisassociateBudgetFromResource](#disassociatebudgetfromresource) - Disassociates the specified budget from the specified resource.
* [DisassociatePrincipalFromPortfolio](#disassociateprincipalfromportfolio) - <p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>
* [DisassociateProductFromPortfolio](#disassociateproductfromportfolio) - <p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>
* [DisassociateServiceActionFromProvisioningArtifact](#disassociateserviceactionfromprovisioningartifact) - Disassociates the specified self-service action association from the specified provisioning artifact.
* [DisassociateTagOptionFromResource](#disassociatetagoptionfromresource) - Disassociates the specified TagOption from the specified resource.
* [EnableAWSOrganizationsAccess](#enableawsorganizationsaccess) - <p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>
* [ExecuteProvisionedProductPlan](#executeprovisionedproductplan) - Provisions or modifies a product based on the resource changes for the specified plan.
* [ExecuteProvisionedProductServiceAction](#executeprovisionedproductserviceaction) - Executes a self-service action against a provisioned product.
* [GetAWSOrganizationsAccessStatus](#getawsorganizationsaccessstatus) - Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.
* [GetProvisionedProductOutputs](#getprovisionedproductoutputs) - This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.
* [ImportAsProvisionedProduct](#importasprovisionedproduct) - <p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
* [ListAcceptedPortfolioShares](#listacceptedportfolioshares) - Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.
* [ListBudgetsForResource](#listbudgetsforresource) - Lists all the budgets associated to the specified resource.
* [ListConstraintsForPortfolio](#listconstraintsforportfolio) - Lists the constraints for the specified portfolio and product.
* [ListLaunchPaths](#listlaunchpaths) - <p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>
* [ListOrganizationPortfolioAccess](#listorganizationportfolioaccess) - <p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
* [ListPortfolioAccess](#listportfolioaccess) - <p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
* [ListPortfolios](#listportfolios) - Lists all portfolios in the catalog.
* [ListPortfoliosForProduct](#listportfoliosforproduct) - Lists all portfolios that the specified product is associated with.
* [ListPrincipalsForPortfolio](#listprincipalsforportfolio) - Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.
* [ListProvisionedProductPlans](#listprovisionedproductplans) - Lists the plans for the specified provisioned product or all plans to which the user has access.
* [ListProvisioningArtifacts](#listprovisioningartifacts) - Lists all provisioning artifacts (also known as versions) for the specified product.
* [ListProvisioningArtifactsForServiceAction](#listprovisioningartifactsforserviceaction) - Lists all provisioning artifacts (also known as versions) for the specified self-service action.
* [ListRecordHistory](#listrecordhistory) - Lists the specified requests or all performed requests.
* [ListResourcesForTagOption](#listresourcesfortagoption) - Lists the resources associated with the specified TagOption.
* [ListServiceActions](#listserviceactions) - Lists all self-service actions.
* [ListServiceActionsForProvisioningArtifact](#listserviceactionsforprovisioningartifact) - Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
* [ListStackInstancesForProvisionedProduct](#liststackinstancesforprovisionedproduct) - Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. 
* [ListTagOptions](#listtagoptions) - Lists the specified TagOptions or all TagOptions.
* [NotifyProvisionProductEngineWorkflowResult](#notifyprovisionproductengineworkflowresult) -  Notifies the result of the provisioning engine execution. 
* [NotifyTerminateProvisionedProductEngineWorkflowResult](#notifyterminateprovisionedproductengineworkflowresult) -  Notifies the result of the terminate engine execution. 
* [NotifyUpdateProvisionedProductEngineWorkflowResult](#notifyupdateprovisionedproductengineworkflowresult) -  Notifies the result of the update engine execution. 
* [ProvisionProduct](#provisionproduct) - <p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>
* [RejectPortfolioShare](#rejectportfolioshare) - Rejects an offer to share the specified portfolio.
* [ScanProvisionedProducts](#scanprovisionedproducts) - <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
* [SearchProducts](#searchproducts) - Gets information about the products to which the caller has access.
* [SearchProductsAsAdmin](#searchproductsasadmin) - Gets information about the products for the specified portfolio or all products.
* [SearchProvisionedProducts](#searchprovisionedproducts) - Gets information about the provisioned products that meet the specified criteria.
* [TerminateProvisionedProduct](#terminateprovisionedproduct) - <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* [UpdateConstraint](#updateconstraint) - Updates the specified constraint.
* [UpdatePortfolio](#updateportfolio) - <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
* [UpdatePortfolioShare](#updateportfolioshare) - <p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>
* [UpdateProduct](#updateproduct) - Updates the specified product.
* [UpdateProvisionedProduct](#updateprovisionedproduct) - <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* [UpdateProvisionedProductProperties](#updateprovisionedproductproperties) - Requests updates to the properties of the specified provisioned product.
* [UpdateProvisioningArtifact](#updateprovisioningartifact) - <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
* [UpdateServiceAction](#updateserviceaction) - Updates a self-service action.
* [UpdateTagOption](#updatetagoption) - Updates the specified TagOption.

## AcceptPortfolioShare

Accepts an offer to share the specified portfolio.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AcceptPortfolioShare(ctx, operations.AcceptPortfolioShareRequest{
        AcceptPortfolioShareInput: shared.AcceptPortfolioShareInput{
            AcceptLanguage: sdk.String("deserunt"),
            PortfolioID: "suscipit",
            PortfolioShareType: shared.PortfolioShareTypeEnumAwsServicecatalog.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AcceptPortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceAcceptPortfolioShare,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPortfolioShareOutput != nil {
        // handle response
    }
}
```

## AssociateBudgetWithResource

Associates the specified budget with the specified resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateBudgetWithResource(ctx, operations.AssociateBudgetWithResourceRequest{
        AssociateBudgetWithResourceInput: shared.AssociateBudgetWithResourceInput{
            BudgetName: "minus",
            ResourceID: "placeat",
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.AssociateBudgetWithResourceXAmzTargetEnumAws242ServiceCatalogServiceAssociateBudgetWithResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateBudgetWithResourceOutput != nil {
        // handle response
    }
}
```

## AssociatePrincipalWithPortfolio

<p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociatePrincipalWithPortfolio(ctx, operations.AssociatePrincipalWithPortfolioRequest{
        AssociatePrincipalWithPortfolioInput: shared.AssociatePrincipalWithPortfolioInput{
            AcceptLanguage: sdk.String("quis"),
            PortfolioID: "veritatis",
            PrincipalARN: "deserunt",
            PrincipalType: shared.PrincipalTypeEnumIam,
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.AssociatePrincipalWithPortfolioXAmzTargetEnumAws242ServiceCatalogServiceAssociatePrincipalWithPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociatePrincipalWithPortfolioOutput != nil {
        // handle response
    }
}
```

## AssociateProductWithPortfolio

<p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateProductWithPortfolio(ctx, operations.AssociateProductWithPortfolioRequest{
        AssociateProductWithPortfolioInput: shared.AssociateProductWithPortfolioInput{
            AcceptLanguage: sdk.String("maiores"),
            PortfolioID: "molestiae",
            ProductID: "quod",
            SourcePortfolioID: sdk.String("quod"),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.AssociateProductWithPortfolioXAmzTargetEnumAws242ServiceCatalogServiceAssociateProductWithPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateProductWithPortfolioOutput != nil {
        // handle response
    }
}
```

## AssociateServiceActionWithProvisioningArtifact

Associates a self-service action with a provisioning artifact.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateServiceActionWithProvisioningArtifact(ctx, operations.AssociateServiceActionWithProvisioningArtifactRequest{
        AssociateServiceActionWithProvisioningArtifactInput: shared.AssociateServiceActionWithProvisioningArtifactInput{
            AcceptLanguage: sdk.String("occaecati"),
            ProductID: "fugit",
            ProvisioningArtifactID: "deleniti",
            ServiceActionID: "hic",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.AssociateServiceActionWithProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceActionWithProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## AssociateTagOptionWithResource

Associate the specified TagOption with the specified portfolio or product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateTagOptionWithResource(ctx, operations.AssociateTagOptionWithResourceRequest{
        AssociateTagOptionWithResourceInput: shared.AssociateTagOptionWithResourceInput{
            ResourceID: "impedit",
            TagOptionID: "cum",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.AssociateTagOptionWithResourceXAmzTargetEnumAws242ServiceCatalogServiceAssociateTagOptionWithResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTagOptionWithResourceOutput != nil {
        // handle response
    }
}
```

## BatchAssociateServiceActionWithProvisioningArtifact

Associates multiple self-service actions with provisioning artifacts.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchAssociateServiceActionWithProvisioningArtifact(ctx, operations.BatchAssociateServiceActionWithProvisioningArtifactRequest{
        BatchAssociateServiceActionWithProvisioningArtifactInput: shared.BatchAssociateServiceActionWithProvisioningArtifactInput{
            AcceptLanguage: sdk.String("sed"),
            ServiceActionAssociations: []shared.ServiceActionAssociation{
                shared.ServiceActionAssociation{
                    ProductID: "dolor",
                    ProvisioningArtifactID: "natus",
                    ServiceActionID: "laboriosam",
                },
                shared.ServiceActionAssociation{
                    ProductID: "hic",
                    ProvisioningArtifactID: "saepe",
                    ServiceActionID: "fuga",
                },
                shared.ServiceActionAssociation{
                    ProductID: "in",
                    ProvisioningArtifactID: "corporis",
                    ServiceActionID: "iste",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateServiceActionWithProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## BatchDisassociateServiceActionFromProvisioningArtifact

Disassociates a batch of self-service actions from the specified provisioning artifact.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDisassociateServiceActionFromProvisioningArtifact(ctx, operations.BatchDisassociateServiceActionFromProvisioningArtifactRequest{
        BatchDisassociateServiceActionFromProvisioningArtifactInput: shared.BatchDisassociateServiceActionFromProvisioningArtifactInput{
            AcceptLanguage: sdk.String("mollitia"),
            ServiceActionAssociations: []shared.ServiceActionAssociation{
                shared.ServiceActionAssociation{
                    ProductID: "dolores",
                    ProvisioningArtifactID: "dolorem",
                    ServiceActionID: "corporis",
                },
                shared.ServiceActionAssociation{
                    ProductID: "explicabo",
                    ProvisioningArtifactID: "nobis",
                    ServiceActionID: "enim",
                },
                shared.ServiceActionAssociation{
                    ProductID: "omnis",
                    ProvisioningArtifactID: "nemo",
                    ServiceActionID: "minima",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateServiceActionFromProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## CopyProduct

<p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopyProduct(ctx, operations.CopyProductRequest{
        CopyProductInput: shared.CopyProductInput{
            AcceptLanguage: sdk.String("mollitia"),
            CopyOptions: []shared.CopyOptionEnum{
                shared.CopyOptionEnumCopyTags,
            },
            IdempotencyToken: "culpa",
            SourceProductArn: "consequuntur",
            SourceProvisioningArtifactIdentifiers: []map[string]string{
                map[string]string{
                    "occaecati": "numquam",
                    "commodi": "quam",
                    "molestiae": "velit",
                },
                map[string]string{
                    "quia": "quis",
                    "vitae": "laborum",
                    "animi": "enim",
                },
                map[string]string{
                    "quo": "sequi",
                },
                map[string]string{
                    "ipsam": "id",
                    "possimus": "aut",
                    "quasi": "error",
                    "temporibus": "laborum",
                },
            },
            TargetProductID: sdk.String("quasi"),
            TargetProductName: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.CopyProductXAmzTargetEnumAws242ServiceCatalogServiceCopyProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyProductOutput != nil {
        // handle response
    }
}
```

## CreateConstraint

<p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConstraint(ctx, operations.CreateConstraintRequest{
        CreateConstraintInput: shared.CreateConstraintInput{
            AcceptLanguage: sdk.String("voluptate"),
            Description: sdk.String("cum"),
            IdempotencyToken: "perferendis",
            Parameters: "doloremque",
            PortfolioID: "reprehenderit",
            ProductID: "ut",
            Type: "maiores",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.CreateConstraintXAmzTargetEnumAws242ServiceCatalogServiceCreateConstraint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConstraintOutput != nil {
        // handle response
    }
}
```

## CreatePortfolio

<p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePortfolio(ctx, operations.CreatePortfolioRequest{
        CreatePortfolioInput: shared.CreatePortfolioInput{
            AcceptLanguage: sdk.String("accusamus"),
            Description: sdk.String("commodi"),
            DisplayName: "repudiandae",
            IdempotencyToken: "quae",
            ProviderName: "ipsum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestias",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "pariatur",
                    Value: "modi",
                },
                shared.Tag{
                    Key: "praesentium",
                    Value: "rem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.CreatePortfolioXAmzTargetEnumAws242ServiceCatalogServiceCreatePortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePortfolioOutput != nil {
        // handle response
    }
}
```

## CreatePortfolioShare

<p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePortfolioShare(ctx, operations.CreatePortfolioShareRequest{
        CreatePortfolioShareInput: shared.CreatePortfolioShareInput{
            AcceptLanguage: sdk.String("enim"),
            AccountID: sdk.String("consequatur"),
            OrganizationNode: &shared.OrganizationNode{
                Type: shared.OrganizationNodeTypeEnumAccount.ToPointer(),
                Value: sdk.String("quibusdam"),
            },
            PortfolioID: "explicabo",
            SharePrincipals: sdk.Bool(false),
            ShareTagOptions: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.CreatePortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceCreatePortfolioShare,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePortfolioShareOutput != nil {
        // handle response
    }
}
```

## CreateProduct

<p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProduct(ctx, operations.CreateProductRequest{
        CreateProductInput: shared.CreateProductInput{
            AcceptLanguage: sdk.String("cupiditate"),
            Description: sdk.String("quos"),
            Distributor: sdk.String("perferendis"),
            IdempotencyToken: "magni",
            Name: "Vernon Abshire",
            Owner: "excepturi",
            ProductType: shared.ProductTypeEnumCloudFormationTemplate,
            ProvisioningArtifactParameters: &shared.ProvisioningArtifactProperties{
                Description: sdk.String("facilis"),
                DisableTemplateValidation: sdk.Bool(false),
                Info: map[string]string{
                    "labore": "delectus",
                    "eum": "non",
                    "eligendi": "sint",
                },
                Name: sdk.String("Sherri Tremblay"),
                Type: shared.ProvisioningArtifactTypeEnumCloudFormationTemplate.ToPointer(),
            },
            SourceConnection: &shared.SourceConnection{
                ConnectionParameters: shared.SourceConnectionParameters{
                    CodeStar: &shared.CodeStarParameters{
                        ArtifactPath: "debitis",
                        Branch: "a",
                        ConnectionArn: "dolorum",
                        Repository: "in",
                    },
                },
                Type: shared.SourceTypeEnumCodestar.ToPointer(),
            },
            SupportDescription: sdk.String("in"),
            SupportEmail: sdk.String("illum"),
            SupportURL: sdk.String("maiores"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dicta",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "cumque",
                    Value: "facere",
                },
                shared.Tag{
                    Key: "ea",
                    Value: "aliquid",
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.CreateProductXAmzTargetEnumAws242ServiceCatalogServiceCreateProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProductOutput != nil {
        // handle response
    }
}
```

## CreateProvisionedProductPlan

<p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProvisionedProductPlan(ctx, operations.CreateProvisionedProductPlanRequest{
        CreateProvisionedProductPlanInput: shared.CreateProvisionedProductPlanInput{
            AcceptLanguage: sdk.String("quidem"),
            IdempotencyToken: "provident",
            NotificationArns: []string{
                "id",
                "blanditiis",
                "deleniti",
            },
            PathID: sdk.String("sapiente"),
            PlanName: "amet",
            PlanType: shared.ProvisionedProductPlanTypeEnumCloudformation,
            ProductID: "deserunt",
            ProvisionedProductName: "nisi",
            ProvisioningArtifactID: "vel",
            ProvisioningParameters: []shared.UpdateProvisioningParameter{
                shared.UpdateProvisioningParameter{
                    Key: sdk.String("omnis"),
                    UsePreviousValue: sdk.Bool(false),
                    Value: sdk.String("molestiae"),
                },
                shared.UpdateProvisioningParameter{
                    Key: sdk.String("perferendis"),
                    UsePreviousValue: sdk.Bool(false),
                    Value: sdk.String("nihil"),
                },
                shared.UpdateProvisioningParameter{
                    Key: sdk.String("magnam"),
                    UsePreviousValue: sdk.Bool(false),
                    Value: sdk.String("distinctio"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "labore",
                    Value: "labore",
                },
                shared.Tag{
                    Key: "suscipit",
                    Value: "natus",
                },
                shared.Tag{
                    Key: "nobis",
                    Value: "eum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.CreateProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceCreateProvisionedProductPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProvisionedProductPlanOutput != nil {
        // handle response
    }
}
```

## CreateProvisioningArtifact

<p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProvisioningArtifact(ctx, operations.CreateProvisioningArtifactRequest{
        CreateProvisioningArtifactInput: shared.CreateProvisioningArtifactInput{
            AcceptLanguage: sdk.String("provident"),
            IdempotencyToken: "quos",
            Parameters: shared.ProvisioningArtifactProperties{
                Description: sdk.String("sint"),
                DisableTemplateValidation: sdk.Bool(false),
                Info: map[string]string{
                    "mollitia": "reiciendis",
                },
                Name: sdk.String("Tommy Kemmer"),
                Type: shared.ProvisioningArtifactTypeEnumCloudFormationTemplate.ToPointer(),
            },
            ProductID: "nemo",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CreateProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceCreateProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## CreateServiceAction

Creates a self-service action.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateServiceAction(ctx, operations.CreateServiceActionRequest{
        CreateServiceActionInput: shared.CreateServiceActionInput{
            AcceptLanguage: sdk.String("facilis"),
            Definition: map[string]string{
                "architecto": "architecto",
                "repudiandae": "ullam",
            },
            DefinitionType: shared.ServiceActionDefinitionTypeEnumSsmAutomation,
            Description: sdk.String("expedita"),
            IdempotencyToken: "nihil",
            Name: "Marty Cormier",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.CreateServiceActionXAmzTargetEnumAws242ServiceCatalogServiceCreateServiceAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceActionOutput != nil {
        // handle response
    }
}
```

## CreateTagOption

Creates a TagOption.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTagOption(ctx, operations.CreateTagOptionRequest{
        CreateTagOptionInput: shared.CreateTagOptionInput{
            Key: "illum",
            Value: "pariatur",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.CreateTagOptionXAmzTargetEnumAws242ServiceCatalogServiceCreateTagOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTagOptionOutput != nil {
        // handle response
    }
}
```

## DeleteConstraint

<p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConstraint(ctx, operations.DeleteConstraintRequest{
        DeleteConstraintInput: shared.DeleteConstraintInput{
            AcceptLanguage: sdk.String("maiores"),
            ID: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.DeleteConstraintXAmzTargetEnumAws242ServiceCatalogServiceDeleteConstraint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConstraintOutput != nil {
        // handle response
    }
}
```

## DeletePortfolio

<p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePortfolio(ctx, operations.DeletePortfolioRequest{
        DeletePortfolioInput: shared.DeletePortfolioInput{
            AcceptLanguage: sdk.String("voluptatem"),
            ID: "c28909b3-fe49-4a8d-9cbf-48633323f9b7",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DeletePortfolioXAmzTargetEnumAws242ServiceCatalogServiceDeletePortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePortfolioOutput != nil {
        // handle response
    }
}
```

## DeletePortfolioShare

<p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePortfolioShare(ctx, operations.DeletePortfolioShareRequest{
        DeletePortfolioShareInput: shared.DeletePortfolioShareInput{
            AcceptLanguage: sdk.String("ipsa"),
            AccountID: sdk.String("iure"),
            OrganizationNode: &shared.OrganizationNode{
                Type: shared.OrganizationNodeTypeEnumOrganizationalUnit.ToPointer(),
                Value: sdk.String("quaerat"),
            },
            PortfolioID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.DeletePortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceDeletePortfolioShare,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePortfolioShareOutput != nil {
        // handle response
    }
}
```

## DeleteProduct

<p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProduct(ctx, operations.DeleteProductRequest{
        DeleteProductInput: shared.DeleteProductInput{
            AcceptLanguage: sdk.String("fugiat"),
            ID: "1ba77a89-ebf7-437a-a420-3ce5e6a95d8a",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.DeleteProductXAmzTargetEnumAws242ServiceCatalogServiceDeleteProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProductOutput != nil {
        // handle response
    }
}
```

## DeleteProvisionedProductPlan

Deletes the specified plan.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProvisionedProductPlan(ctx, operations.DeleteProvisionedProductPlanRequest{
        DeleteProvisionedProductPlanInput: shared.DeleteProvisionedProductPlanInput{
            AcceptLanguage: sdk.String("qui"),
            IgnoreErrors: sdk.Bool(false),
            PlanID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.DeleteProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceDeleteProvisionedProductPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProvisionedProductPlanOutput != nil {
        // handle response
    }
}
```

## DeleteProvisioningArtifact

<p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProvisioningArtifact(ctx, operations.DeleteProvisioningArtifactRequest{
        DeleteProvisioningArtifactInput: shared.DeleteProvisioningArtifactInput{
            AcceptLanguage: sdk.String("amet"),
            ProductID: "tempore",
            ProvisioningArtifactID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.DeleteProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceDeleteProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## DeleteServiceAction

Deletes a self-service action.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteServiceAction(ctx, operations.DeleteServiceActionRequest{
        DeleteServiceActionInput: shared.DeleteServiceActionInput{
            AcceptLanguage: sdk.String("expedita"),
            ID: "326b5a73-429c-4db1-a842-2bb679d23227",
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DeleteServiceActionXAmzTargetEnumAws242ServiceCatalogServiceDeleteServiceAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceActionOutput != nil {
        // handle response
    }
}
```

## DeleteTagOption

<p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTagOption(ctx, operations.DeleteTagOptionRequest{
        DeleteTagOptionInput: shared.DeleteTagOptionInput{
            ID: "b1e31b8b-90f3-4443-a110-8e0adcf4b921",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DeleteTagOptionXAmzTargetEnumAws242ServiceCatalogServiceDeleteTagOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTagOptionOutput != nil {
        // handle response
    }
}
```

## DescribeConstraint

Gets information about the specified constraint.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConstraint(ctx, operations.DescribeConstraintRequest{
        DescribeConstraintInput: shared.DescribeConstraintInput{
            AcceptLanguage: sdk.String("quis"),
            ID: "3f73ef7f-bc7a-4bd7-8dd3-9c0f5d2cff7c",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DescribeConstraintXAmzTargetEnumAws242ServiceCatalogServiceDescribeConstraint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConstraintOutput != nil {
        // handle response
    }
}
```

## DescribeCopyProductStatus

Gets the status of the specified copy product operation.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCopyProductStatus(ctx, operations.DescribeCopyProductStatusRequest{
        DescribeCopyProductStatusInput: shared.DescribeCopyProductStatusInput{
            AcceptLanguage: sdk.String("vel"),
            CopyProductToken: "possimus",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribeCopyProductStatusXAmzTargetEnumAws242ServiceCatalogServiceDescribeCopyProductStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCopyProductStatusOutput != nil {
        // handle response
    }
}
```

## DescribePortfolio

<p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePortfolio(ctx, operations.DescribePortfolioRequest{
        DescribePortfolioInput: shared.DescribePortfolioInput{
            AcceptLanguage: sdk.String("quasi"),
            ID: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.DescribePortfolioXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePortfolioOutput != nil {
        // handle response
    }
}
```

## DescribePortfolioShareStatus

Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePortfolioShareStatus(ctx, operations.DescribePortfolioShareStatusRequest{
        DescribePortfolioShareStatusInput: shared.DescribePortfolioShareStatusInput{
            PortfolioShareToken: "eum",
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DescribePortfolioShareStatusXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolioShareStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePortfolioShareStatusOutput != nil {
        // handle response
    }
}
```

## DescribePortfolioShares

<p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePortfolioShares(ctx, operations.DescribePortfolioSharesRequest{
        DescribePortfolioSharesInput: shared.DescribePortfolioSharesInput{
            PageSize: sdk.Int64(96549),
            PageToken: sdk.String("tempora"),
            PortfolioID: "numquam",
            Type: shared.DescribePortfolioShareTypeEnumAccount,
        },
        PageSize: sdk.String("provident"),
        PageToken: sdk.String("ipsa"),
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DescribePortfolioSharesXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolioShares,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePortfolioSharesOutput != nil {
        // handle response
    }
}
```

## DescribeProduct

<p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProduct(ctx, operations.DescribeProductRequest{
        DescribeProductInput: shared.DescribeProductInput{
            AcceptLanguage: sdk.String("fuga"),
            ID: sdk.String("7bd466d2-8c10-4ab3-8dca-4251904e523c"),
            Name: sdk.String("Sophie Bayer"),
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DescribeProductXAmzTargetEnumAws242ServiceCatalogServiceDescribeProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProductOutput != nil {
        // handle response
    }
}
```

## DescribeProductAsAdmin

Gets information about the specified product. This operation is run with administrator access.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProductAsAdmin(ctx, operations.DescribeProductAsAdminRequest{
        DescribeProductAsAdminInput: shared.DescribeProductAsAdminInput{
            AcceptLanguage: sdk.String("occaecati"),
            ID: sdk.String("6f2a70c6-8828-42aa-8825-62f222e9817e"),
            Name: sdk.String("Patrick Koch"),
            SourcePortfolioID: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DescribeProductAsAdminXAmzTargetEnumAws242ServiceCatalogServiceDescribeProductAsAdmin,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProductAsAdminOutput != nil {
        // handle response
    }
}
```

## DescribeProductView

Gets information about the specified product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProductView(ctx, operations.DescribeProductViewRequest{
        DescribeProductViewInput: shared.DescribeProductViewInput{
            AcceptLanguage: sdk.String("occaecati"),
            ID: "5bc0ab3c-20c4-4f37-89fd-871f99dd2efd",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.DescribeProductViewXAmzTargetEnumAws242ServiceCatalogServiceDescribeProductView,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProductViewOutput != nil {
        // handle response
    }
}
```

## DescribeProvisionedProduct

Gets information about the specified provisioned product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProvisionedProduct(ctx, operations.DescribeProvisionedProductRequest{
        DescribeProvisionedProductInput: shared.DescribeProvisionedProductInput{
            AcceptLanguage: sdk.String("quae"),
            ID: sdk.String("e674bdb0-4f15-4756-882d-68ea19f1d170"),
            Name: sdk.String("Marie Feest"),
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DescribeProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisionedProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProvisionedProductOutput != nil {
        // handle response
    }
}
```

## DescribeProvisionedProductPlan

Gets information about the resource changes for the specified plan.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProvisionedProductPlan(ctx, operations.DescribeProvisionedProductPlanRequest{
        DescribeProvisionedProductPlanInput: shared.DescribeProvisionedProductPlanInput{
            AcceptLanguage: sdk.String("ab"),
            PageSize: sdk.Int64(544591),
            PageToken: sdk.String("non"),
            PlanID: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribeProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisionedProductPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProvisionedProductPlanOutput != nil {
        // handle response
    }
}
```

## DescribeProvisioningArtifact

Gets information about the specified provisioning artifact (also known as a version) for the specified product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProvisioningArtifact(ctx, operations.DescribeProvisioningArtifactRequest{
        DescribeProvisioningArtifactInput: shared.DescribeProvisioningArtifactInput{
            AcceptLanguage: sdk.String("dignissimos"),
            ProductID: sdk.String("dicta"),
            ProductName: sdk.String("maiores"),
            ProvisioningArtifactID: sdk.String("natus"),
            ProvisioningArtifactName: sdk.String("velit"),
            Verbose: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.DescribeProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## DescribeProvisioningParameters

<p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProvisioningParameters(ctx, operations.DescribeProvisioningParametersRequest{
        DescribeProvisioningParametersInput: shared.DescribeProvisioningParametersInput{
            AcceptLanguage: sdk.String("repellendus"),
            PathID: sdk.String("officia"),
            PathName: sdk.String("maxime"),
            ProductID: sdk.String("dignissimos"),
            ProductName: sdk.String("officia"),
            ProvisioningArtifactID: sdk.String("asperiores"),
            ProvisioningArtifactName: sdk.String("nemo"),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeProvisioningParametersXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisioningParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProvisioningParametersOutput != nil {
        // handle response
    }
}
```

## DescribeRecord

<p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRecord(ctx, operations.DescribeRecordRequest{
        DescribeRecordInput: shared.DescribeRecordInput{
            AcceptLanguage: sdk.String("fuga"),
            ID: "a63aae8d-6786-44db-b675-fd5e60b375ed",
            PageSize: sdk.Int64(257233),
            PageToken: sdk.String("doloribus"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.DescribeRecordXAmzTargetEnumAws242ServiceCatalogServiceDescribeRecord,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecordOutput != nil {
        // handle response
    }
}
```

## DescribeServiceAction

Describes a self-service action.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeServiceAction(ctx, operations.DescribeServiceActionRequest{
        DescribeServiceActionInput: shared.DescribeServiceActionInput{
            AcceptLanguage: sdk.String("asperiores"),
            ID: "33317fe3-5b60-4eb1-aa42-6555ba3c2874",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.DescribeServiceActionXAmzTargetEnumAws242ServiceCatalogServiceDescribeServiceAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServiceActionOutput != nil {
        // handle response
    }
}
```

## DescribeServiceActionExecutionParameters

Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeServiceActionExecutionParameters(ctx, operations.DescribeServiceActionExecutionParametersRequest{
        DescribeServiceActionExecutionParametersInput: shared.DescribeServiceActionExecutionParametersInput{
            AcceptLanguage: sdk.String("quas"),
            ProvisionedProductID: "hic",
            ServiceActionID: "nesciunt",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeServiceActionExecutionParametersXAmzTargetEnumAws242ServiceCatalogServiceDescribeServiceActionExecutionParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServiceActionExecutionParametersOutput != nil {
        // handle response
    }
}
```

## DescribeTagOption

Gets information about the specified TagOption.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTagOption(ctx, operations.DescribeTagOptionRequest{
        DescribeTagOptionInput: shared.DescribeTagOptionInput{
            ID: "0b2f2fb7-b194-4a27-ab26-916fe1f08f42",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.DescribeTagOptionXAmzTargetEnumAws242ServiceCatalogServiceDescribeTagOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTagOptionOutput != nil {
        // handle response
    }
}
```

## DisableAWSOrganizationsAccess

<p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>

### Example Usage

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableAWSOrganizationsAccess(ctx, operations.DisableAWSOrganizationsAccessRequest{
        RequestBody: map[string]interface{}{
            "tempora": "tempora",
            "voluptate": "reiciendis",
            "ex": "sit",
            "non": "officiis",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DisableAWSOrganizationsAccessXAmzTargetEnumAws242ServiceCatalogServiceDisableAwsOrganizationsAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableAWSOrganizationsAccessOutput != nil {
        // handle response
    }
}
```

## DisassociateBudgetFromResource

Disassociates the specified budget from the specified resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateBudgetFromResource(ctx, operations.DisassociateBudgetFromResourceRequest{
        DisassociateBudgetFromResourceInput: shared.DisassociateBudgetFromResourceInput{
            BudgetName: "sit",
            ResourceID: "nobis",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DisassociateBudgetFromResourceXAmzTargetEnumAws242ServiceCatalogServiceDisassociateBudgetFromResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateBudgetFromResourceOutput != nil {
        // handle response
    }
}
```

## DisassociatePrincipalFromPortfolio

<p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociatePrincipalFromPortfolio(ctx, operations.DisassociatePrincipalFromPortfolioRequest{
        DisassociatePrincipalFromPortfolioInput: shared.DisassociatePrincipalFromPortfolioInput{
            AcceptLanguage: sdk.String("aperiam"),
            PortfolioID: "saepe",
            PrincipalARN: "numquam",
            PrincipalType: shared.PrincipalTypeEnumIam.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DisassociatePrincipalFromPortfolioXAmzTargetEnumAws242ServiceCatalogServiceDisassociatePrincipalFromPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociatePrincipalFromPortfolioOutput != nil {
        // handle response
    }
}
```

## DisassociateProductFromPortfolio

<p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateProductFromPortfolio(ctx, operations.DisassociateProductFromPortfolioRequest{
        DisassociateProductFromPortfolioInput: shared.DisassociateProductFromPortfolioInput{
            AcceptLanguage: sdk.String("laboriosam"),
            PortfolioID: "dolorum",
            ProductID: "voluptatum",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        XAmzTarget: operations.DisassociateProductFromPortfolioXAmzTargetEnumAws242ServiceCatalogServiceDisassociateProductFromPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateProductFromPortfolioOutput != nil {
        // handle response
    }
}
```

## DisassociateServiceActionFromProvisioningArtifact

Disassociates the specified self-service action association from the specified provisioning artifact.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateServiceActionFromProvisioningArtifact(ctx, operations.DisassociateServiceActionFromProvisioningArtifactRequest{
        DisassociateServiceActionFromProvisioningArtifactInput: shared.DisassociateServiceActionFromProvisioningArtifactInput{
            AcceptLanguage: sdk.String("officia"),
            ProductID: "dolorum",
            ProvisioningArtifactID: "corrupti",
            ServiceActionID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateServiceActionFromProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## DisassociateTagOptionFromResource

Disassociates the specified TagOption from the specified resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateTagOptionFromResource(ctx, operations.DisassociateTagOptionFromResourceRequest{
        DisassociateTagOptionFromResourceInput: shared.DisassociateTagOptionFromResourceInput{
            ResourceID: "expedita",
            TagOptionID: "magnam",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.DisassociateTagOptionFromResourceXAmzTargetEnumAws242ServiceCatalogServiceDisassociateTagOptionFromResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateTagOptionFromResourceOutput != nil {
        // handle response
    }
}
```

## EnableAWSOrganizationsAccess

<p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>

### Example Usage

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableAWSOrganizationsAccess(ctx, operations.EnableAWSOrganizationsAccessRequest{
        RequestBody: map[string]interface{}{
            "et": "blanditiis",
            "ex": "sed",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.EnableAWSOrganizationsAccessXAmzTargetEnumAws242ServiceCatalogServiceEnableAwsOrganizationsAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableAWSOrganizationsAccessOutput != nil {
        // handle response
    }
}
```

## ExecuteProvisionedProductPlan

Provisions or modifies a product based on the resource changes for the specified plan.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExecuteProvisionedProductPlan(ctx, operations.ExecuteProvisionedProductPlanRequest{
        ExecuteProvisionedProductPlanInput: shared.ExecuteProvisionedProductPlanInput{
            AcceptLanguage: sdk.String("reiciendis"),
            IdempotencyToken: "dolorem",
            PlanID: "harum",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ExecuteProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceExecuteProvisionedProductPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteProvisionedProductPlanOutput != nil {
        // handle response
    }
}
```

## ExecuteProvisionedProductServiceAction

Executes a self-service action against a provisioned product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExecuteProvisionedProductServiceAction(ctx, operations.ExecuteProvisionedProductServiceActionRequest{
        ExecuteProvisionedProductServiceActionInput: shared.ExecuteProvisionedProductServiceActionInput{
            AcceptLanguage: sdk.String("nam"),
            ExecuteToken: "tenetur",
            Parameters: map[string][]string{
                "alias": []string{
                    "deserunt",
                },
                "voluptate": []string{
                    "reiciendis",
                    "provident",
                    "repellendus",
                },
            },
            ProvisionedProductID: "delectus",
            ServiceActionID: "voluptates",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ExecuteProvisionedProductServiceActionXAmzTargetEnumAws242ServiceCatalogServiceExecuteProvisionedProductServiceAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteProvisionedProductServiceActionOutput != nil {
        // handle response
    }
}
```

## GetAWSOrganizationsAccessStatus

Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.

### Example Usage

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAWSOrganizationsAccessStatus(ctx, operations.GetAWSOrganizationsAccessStatusRequest{
        RequestBody: map[string]interface{}{
            "veniam": "voluptatem",
            "quisquam": "repudiandae",
            "quasi": "atque",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.GetAWSOrganizationsAccessStatusXAmzTargetEnumAws242ServiceCatalogServiceGetAwsOrganizationsAccessStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAWSOrganizationsAccessStatusOutput != nil {
        // handle response
    }
}
```

## GetProvisionedProductOutputs

This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProvisionedProductOutputs(ctx, operations.GetProvisionedProductOutputsRequest{
        GetProvisionedProductOutputsInput: shared.GetProvisionedProductOutputsInput{
            AcceptLanguage: sdk.String("esse"),
            OutputKeys: []string{
                "assumenda",
            },
            PageSize: sdk.Int64(410301),
            PageToken: sdk.String("atque"),
            ProvisionedProductID: sdk.String("error"),
            ProvisionedProductName: sdk.String("officiis"),
        },
        PageSize: sdk.String("officiis"),
        PageToken: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.GetProvisionedProductOutputsXAmzTargetEnumAws242ServiceCatalogServiceGetProvisionedProductOutputs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvisionedProductOutputsOutput != nil {
        // handle response
    }
}
```

## ImportAsProvisionedProduct

<p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportAsProvisionedProduct(ctx, operations.ImportAsProvisionedProductRequest{
        ImportAsProvisionedProductInput: shared.ImportAsProvisionedProductInput{
            AcceptLanguage: sdk.String("error"),
            IdempotencyToken: "blanditiis",
            PhysicalID: "suscipit",
            ProductID: "repudiandae",
            ProvisionedProductName: "atque",
            ProvisioningArtifactID: "atque",
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.ImportAsProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceImportAsProvisionedProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportAsProvisionedProductOutput != nil {
        // handle response
    }
}
```

## ListAcceptedPortfolioShares

Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAcceptedPortfolioShares(ctx, operations.ListAcceptedPortfolioSharesRequest{
        ListAcceptedPortfolioSharesInput: shared.ListAcceptedPortfolioSharesInput{
            AcceptLanguage: sdk.String("repudiandae"),
            PageSize: sdk.Int64(116098),
            PageToken: sdk.String("accusantium"),
            PortfolioShareType: shared.PortfolioShareTypeEnumImported.ToPointer(),
        },
        PageSize: sdk.String("dolores"),
        PageToken: sdk.String("enim"),
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.ListAcceptedPortfolioSharesXAmzTargetEnumAws242ServiceCatalogServiceListAcceptedPortfolioShares,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAcceptedPortfolioSharesOutput != nil {
        // handle response
    }
}
```

## ListBudgetsForResource

Lists all the budgets associated to the specified resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBudgetsForResource(ctx, operations.ListBudgetsForResourceRequest{
        ListBudgetsForResourceInput: shared.ListBudgetsForResourceInput{
            AcceptLanguage: sdk.String("occaecati"),
            PageSize: sdk.Int64(886305),
            PageToken: sdk.String("perspiciatis"),
            ResourceID: "in",
        },
        PageSize: sdk.String("adipisci"),
        PageToken: sdk.String("eveniet"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ListBudgetsForResourceXAmzTargetEnumAws242ServiceCatalogServiceListBudgetsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBudgetsForResourceOutput != nil {
        // handle response
    }
}
```

## ListConstraintsForPortfolio

Lists the constraints for the specified portfolio and product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConstraintsForPortfolio(ctx, operations.ListConstraintsForPortfolioRequest{
        ListConstraintsForPortfolioInput: shared.ListConstraintsForPortfolioInput{
            AcceptLanguage: sdk.String("illo"),
            PageSize: sdk.Int64(361306),
            PageToken: sdk.String("quidem"),
            PortfolioID: "eveniet",
            ProductID: sdk.String("non"),
        },
        PageSize: sdk.String("vero"),
        PageToken: sdk.String("doloremque"),
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.ListConstraintsForPortfolioXAmzTargetEnumAws242ServiceCatalogServiceListConstraintsForPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConstraintsForPortfolioOutput != nil {
        // handle response
    }
}
```

## ListLaunchPaths

<p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListLaunchPaths(ctx, operations.ListLaunchPathsRequest{
        ListLaunchPathsInput: shared.ListLaunchPathsInput{
            AcceptLanguage: sdk.String("cum"),
            PageSize: sdk.Int64(434761),
            PageToken: sdk.String("necessitatibus"),
            ProductID: "ratione",
        },
        PageSize: sdk.String("laborum"),
        PageToken: sdk.String("distinctio"),
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.ListLaunchPathsXAmzTargetEnumAws242ServiceCatalogServiceListLaunchPaths,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLaunchPathsOutput != nil {
        // handle response
    }
}
```

## ListOrganizationPortfolioAccess

<p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOrganizationPortfolioAccess(ctx, operations.ListOrganizationPortfolioAccessRequest{
        ListOrganizationPortfolioAccessInput: shared.ListOrganizationPortfolioAccessInput{
            AcceptLanguage: sdk.String("perspiciatis"),
            OrganizationNodeType: shared.OrganizationNodeTypeEnumOrganizationalUnit,
            PageSize: sdk.Int64(649078),
            PageToken: sdk.String("voluptas"),
            PortfolioID: "alias",
        },
        PageSize: sdk.String("maiores"),
        PageToken: sdk.String("reiciendis"),
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ListOrganizationPortfolioAccessXAmzTargetEnumAws242ServiceCatalogServiceListOrganizationPortfolioAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrganizationPortfolioAccessOutput != nil {
        // handle response
    }
}
```

## ListPortfolioAccess

<p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPortfolioAccess(ctx, operations.ListPortfolioAccessRequest{
        ListPortfolioAccessInput: shared.ListPortfolioAccessInput{
            AcceptLanguage: sdk.String("recusandae"),
            OrganizationParentID: sdk.String("omnis"),
            PageSize: sdk.Int64(309251),
            PageToken: sdk.String("molestiae"),
            PortfolioID: "ex",
        },
        PageSize: sdk.String("ut"),
        PageToken: sdk.String("culpa"),
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListPortfolioAccessXAmzTargetEnumAws242ServiceCatalogServiceListPortfolioAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPortfolioAccessOutput != nil {
        // handle response
    }
}
```

## ListPortfolios

Lists all portfolios in the catalog.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPortfolios(ctx, operations.ListPortfoliosRequest{
        ListPortfoliosInput: shared.ListPortfoliosInput{
            AcceptLanguage: sdk.String("provident"),
            PageSize: sdk.Int64(337477),
            PageToken: sdk.String("eum"),
        },
        PageSize: sdk.String("reiciendis"),
        PageToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.ListPortfoliosXAmzTargetEnumAws242ServiceCatalogServiceListPortfolios,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPortfoliosOutput != nil {
        // handle response
    }
}
```

## ListPortfoliosForProduct

Lists all portfolios that the specified product is associated with.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPortfoliosForProduct(ctx, operations.ListPortfoliosForProductRequest{
        ListPortfoliosForProductInput: shared.ListPortfoliosForProductInput{
            AcceptLanguage: sdk.String("possimus"),
            PageSize: sdk.Int64(659177),
            PageToken: sdk.String("ex"),
            ProductID: "aliquid",
        },
        PageSize: sdk.String("accusantium"),
        PageToken: sdk.String("repellat"),
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListPortfoliosForProductXAmzTargetEnumAws242ServiceCatalogServiceListPortfoliosForProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPortfoliosForProductOutput != nil {
        // handle response
    }
}
```

## ListPrincipalsForPortfolio

Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPrincipalsForPortfolio(ctx, operations.ListPrincipalsForPortfolioRequest{
        ListPrincipalsForPortfolioInput: shared.ListPrincipalsForPortfolioInput{
            AcceptLanguage: sdk.String("placeat"),
            PageSize: sdk.Int64(266697),
            PageToken: sdk.String("voluptatibus"),
            PortfolioID: "molestias",
        },
        PageSize: sdk.String("officiis"),
        PageToken: sdk.String("sapiente"),
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListPrincipalsForPortfolioXAmzTargetEnumAws242ServiceCatalogServiceListPrincipalsForPortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrincipalsForPortfolioOutput != nil {
        // handle response
    }
}
```

## ListProvisionedProductPlans

Lists the plans for the specified provisioned product or all plans to which the user has access.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProvisionedProductPlans(ctx, operations.ListProvisionedProductPlansRequest{
        ListProvisionedProductPlansInput: shared.ListProvisionedProductPlansInput{
            AcceptLanguage: sdk.String("cumque"),
            AccessLevelFilter: &shared.AccessLevelFilter{
                Key: shared.AccessLevelFilterKeyEnumAccount.ToPointer(),
                Value: sdk.String("perferendis"),
            },
            PageSize: sdk.Int64(241901),
            PageToken: sdk.String("aspernatur"),
            ProvisionProductID: sdk.String("eum"),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.ListProvisionedProductPlansXAmzTargetEnumAws242ServiceCatalogServiceListProvisionedProductPlans,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisionedProductPlansOutput != nil {
        // handle response
    }
}
```

## ListProvisioningArtifacts

Lists all provisioning artifacts (also known as versions) for the specified product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProvisioningArtifacts(ctx, operations.ListProvisioningArtifactsRequest{
        ListProvisioningArtifactsInput: shared.ListProvisioningArtifactsInput{
            AcceptLanguage: sdk.String("dicta"),
            ProductID: "minima",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.ListProvisioningArtifactsXAmzTargetEnumAws242ServiceCatalogServiceListProvisioningArtifacts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisioningArtifactsOutput != nil {
        // handle response
    }
}
```

## ListProvisioningArtifactsForServiceAction

Lists all provisioning artifacts (also known as versions) for the specified self-service action.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProvisioningArtifactsForServiceAction(ctx, operations.ListProvisioningArtifactsForServiceActionRequest{
        ListProvisioningArtifactsForServiceActionInput: shared.ListProvisioningArtifactsForServiceActionInput{
            AcceptLanguage: sdk.String("eaque"),
            PageSize: sdk.Int64(935833),
            PageToken: sdk.String("perspiciatis"),
            ServiceActionID: "maiores",
        },
        PageSize: sdk.String("debitis"),
        PageToken: sdk.String("aliquid"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("ratione"),
        XAmzTarget: operations.ListProvisioningArtifactsForServiceActionXAmzTargetEnumAws242ServiceCatalogServiceListProvisioningArtifactsForServiceAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisioningArtifactsForServiceActionOutput != nil {
        // handle response
    }
}
```

## ListRecordHistory

Lists the specified requests or all performed requests.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRecordHistory(ctx, operations.ListRecordHistoryRequest{
        ListRecordHistoryInput: shared.ListRecordHistoryInput{
            AcceptLanguage: sdk.String("animi"),
            AccessLevelFilter: &shared.AccessLevelFilter{
                Key: shared.AccessLevelFilterKeyEnumUser.ToPointer(),
                Value: sdk.String("nulla"),
            },
            PageSize: sdk.Int64(8931),
            PageToken: sdk.String("quasi"),
            SearchFilter: &shared.ListRecordHistorySearchFilter{
                Key: sdk.String("et"),
                Value: sdk.String("ducimus"),
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.ListRecordHistoryXAmzTargetEnumAws242ServiceCatalogServiceListRecordHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecordHistoryOutput != nil {
        // handle response
    }
}
```

## ListResourcesForTagOption

Lists the resources associated with the specified TagOption.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListResourcesForTagOption(ctx, operations.ListResourcesForTagOptionRequest{
        ListResourcesForTagOptionInput: shared.ListResourcesForTagOptionInput{
            PageSize: sdk.Int64(859581),
            PageToken: sdk.String("necessitatibus"),
            ResourceType: sdk.String("ipsa"),
            TagOptionID: "tempora",
        },
        PageSize: sdk.String("nihil"),
        PageToken: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.ListResourcesForTagOptionXAmzTargetEnumAws242ServiceCatalogServiceListResourcesForTagOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcesForTagOptionOutput != nil {
        // handle response
    }
}
```

## ListServiceActions

Lists all self-service actions.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServiceActions(ctx, operations.ListServiceActionsRequest{
        ListServiceActionsInput: shared.ListServiceActionsInput{
            AcceptLanguage: sdk.String("architecto"),
            PageSize: sdk.Int64(857125),
            PageToken: sdk.String("doloremque"),
        },
        PageSize: sdk.String("dicta"),
        PageToken: sdk.String("odio"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListServiceActionsXAmzTargetEnumAws242ServiceCatalogServiceListServiceActions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceActionsOutput != nil {
        // handle response
    }
}
```

## ListServiceActionsForProvisioningArtifact

Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServiceActionsForProvisioningArtifact(ctx, operations.ListServiceActionsForProvisioningArtifactRequest{
        ListServiceActionsForProvisioningArtifactInput: shared.ListServiceActionsForProvisioningArtifactInput{
            AcceptLanguage: sdk.String("sunt"),
            PageSize: sdk.Int64(344718),
            PageToken: sdk.String("fugiat"),
            ProductID: "expedita",
            ProvisioningArtifactID: "aliquid",
        },
        PageSize: sdk.String("officia"),
        PageToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.ListServiceActionsForProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceListServiceActionsForProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceActionsForProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## ListStackInstancesForProvisionedProduct

Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListStackInstancesForProvisionedProduct(ctx, operations.ListStackInstancesForProvisionedProductRequest{
        ListStackInstancesForProvisionedProductInput: shared.ListStackInstancesForProvisionedProductInput{
            AcceptLanguage: sdk.String("error"),
            PageSize: sdk.Int64(822407),
            PageToken: sdk.String("voluptates"),
            ProvisionedProductID: "mollitia",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.ListStackInstancesForProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceListStackInstancesForProvisionedProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStackInstancesForProvisionedProductOutput != nil {
        // handle response
    }
}
```

## ListTagOptions

Lists the specified TagOptions or all TagOptions.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagOptions(ctx, operations.ListTagOptionsRequest{
        ListTagOptionsInput: shared.ListTagOptionsInput{
            Filters: &shared.ListTagOptionsFilters{
                Active: sdk.Bool(false),
                Key: sdk.String("ex"),
                Value: sdk.String("quo"),
            },
            PageSize: sdk.Int64(405373),
            PageToken: sdk.String("ut"),
        },
        PageSize: sdk.String("ad"),
        PageToken: sdk.String("expedita"),
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.ListTagOptionsXAmzTargetEnumAws242ServiceCatalogServiceListTagOptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagOptionsOutput != nil {
        // handle response
    }
}
```

## NotifyProvisionProductEngineWorkflowResult

 Notifies the result of the provisioning engine execution. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.NotifyProvisionProductEngineWorkflowResult(ctx, operations.NotifyProvisionProductEngineWorkflowResultRequest{
        NotifyProvisionProductEngineWorkflowResultInput: shared.NotifyProvisionProductEngineWorkflowResultInput{
            FailureReason: sdk.String("veritatis"),
            IdempotencyToken: "rerum",
            Outputs: []shared.RecordOutput{
                shared.RecordOutput{
                    Description: sdk.String("culpa"),
                    OutputKey: sdk.String("voluptatem"),
                    OutputValue: sdk.String("sapiente"),
                },
                shared.RecordOutput{
                    Description: sdk.String("officiis"),
                    OutputKey: sdk.String("architecto"),
                    OutputValue: sdk.String("fuga"),
                },
                shared.RecordOutput{
                    Description: sdk.String("pariatur"),
                    OutputKey: sdk.String("debitis"),
                    OutputValue: sdk.String("voluptatem"),
                },
            },
            RecordID: "alias",
            ResourceIdentifier: &shared.EngineWorkflowResourceIdentifier{
                UniqueTag: &shared.UniqueTagResourceIdentifier{
                    Key: sdk.String("deleniti"),
                    Value: sdk.String("earum"),
                },
            },
            Status: shared.EngineWorkflowStatusEnumSucceeded,
            WorkflowToken: "sapiente",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.NotifyProvisionProductEngineWorkflowResultXAmzTargetEnumAws242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyProvisionProductEngineWorkflowResultOutput != nil {
        // handle response
    }
}
```

## NotifyTerminateProvisionedProductEngineWorkflowResult

 Notifies the result of the terminate engine execution. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.NotifyTerminateProvisionedProductEngineWorkflowResult(ctx, operations.NotifyTerminateProvisionedProductEngineWorkflowResultRequest{
        NotifyTerminateProvisionedProductEngineWorkflowResultInput: shared.NotifyTerminateProvisionedProductEngineWorkflowResultInput{
            FailureReason: sdk.String("illum"),
            IdempotencyToken: "totam",
            RecordID: "impedit",
            Status: shared.EngineWorkflowStatusEnumFailed,
            WorkflowToken: "nam",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.NotifyTerminateProvisionedProductEngineWorkflowResultXAmzTargetEnumAws242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyTerminateProvisionedProductEngineWorkflowResultOutput != nil {
        // handle response
    }
}
```

## NotifyUpdateProvisionedProductEngineWorkflowResult

 Notifies the result of the update engine execution. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.NotifyUpdateProvisionedProductEngineWorkflowResult(ctx, operations.NotifyUpdateProvisionedProductEngineWorkflowResultRequest{
        NotifyUpdateProvisionedProductEngineWorkflowResultInput: shared.NotifyUpdateProvisionedProductEngineWorkflowResultInput{
            FailureReason: sdk.String("tempora"),
            IdempotencyToken: "dolor",
            Outputs: []shared.RecordOutput{
                shared.RecordOutput{
                    Description: sdk.String("architecto"),
                    OutputKey: sdk.String("sit"),
                    OutputValue: sdk.String("modi"),
                },
            },
            RecordID: "fugit",
            Status: shared.EngineWorkflowStatusEnumSucceeded,
            WorkflowToken: "laudantium",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.NotifyUpdateProvisionedProductEngineWorkflowResultXAmzTargetEnumAws242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyUpdateProvisionedProductEngineWorkflowResultOutput != nil {
        // handle response
    }
}
```

## ProvisionProduct

<p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProvisionProduct(ctx, operations.ProvisionProductRequest{
        ProvisionProductInput: shared.ProvisionProductInput{
            AcceptLanguage: sdk.String("eveniet"),
            NotificationArns: []string{
                "officiis",
                "esse",
                "necessitatibus",
                "sed",
            },
            PathID: sdk.String("veniam"),
            PathName: sdk.String("nesciunt"),
            ProductID: sdk.String("expedita"),
            ProductName: sdk.String("eum"),
            ProvisionToken: "vel",
            ProvisionedProductName: "voluptatum",
            ProvisioningArtifactID: sdk.String("magnam"),
            ProvisioningArtifactName: sdk.String("exercitationem"),
            ProvisioningParameters: []shared.ProvisioningParameter{
                shared.ProvisioningParameter{
                    Key: sdk.String("porro"),
                    Value: sdk.String("autem"),
                },
            },
            ProvisioningPreferences: &shared.ProvisioningPreferences{
                StackSetAccounts: []string{
                    "laboriosam",
                    "recusandae",
                    "consequuntur",
                    "voluptatem",
                },
                StackSetFailureToleranceCount: sdk.Int64(350207),
                StackSetFailureTolerancePercentage: sdk.Int64(895692),
                StackSetMaxConcurrencyCount: sdk.Int64(95619),
                StackSetMaxConcurrencyPercentage: sdk.Int64(392569),
                StackSetRegions: []string{
                    "vero",
                    "est",
                    "harum",
                    "sequi",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "repudiandae",
                    Value: "optio",
                },
                shared.Tag{
                    Key: "occaecati",
                    Value: "nemo",
                },
                shared.Tag{
                    Key: "voluptate",
                    Value: "blanditiis",
                },
                shared.Tag{
                    Key: "officia",
                    Value: "voluptas",
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.ProvisionProductXAmzTargetEnumAws242ServiceCatalogServiceProvisionProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisionProductOutput != nil {
        // handle response
    }
}
```

## RejectPortfolioShare

Rejects an offer to share the specified portfolio.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RejectPortfolioShare(ctx, operations.RejectPortfolioShareRequest{
        RejectPortfolioShareInput: shared.RejectPortfolioShareInput{
            AcceptLanguage: sdk.String("fuga"),
            PortfolioID: "laudantium",
            PortfolioShareType: shared.PortfolioShareTypeEnumImported.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.RejectPortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceRejectPortfolioShare,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectPortfolioShareOutput != nil {
        // handle response
    }
}
```

## ScanProvisionedProducts

<p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ScanProvisionedProducts(ctx, operations.ScanProvisionedProductsRequest{
        ScanProvisionedProductsInput: shared.ScanProvisionedProductsInput{
            AcceptLanguage: sdk.String("aperiam"),
            AccessLevelFilter: &shared.AccessLevelFilter{
                Key: shared.AccessLevelFilterKeyEnumRole.ToPointer(),
                Value: sdk.String("reiciendis"),
            },
            PageSize: sdk.Int64(746837),
            PageToken: sdk.String("alias"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.ScanProvisionedProductsXAmzTargetEnumAws242ServiceCatalogServiceScanProvisionedProducts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanProvisionedProductsOutput != nil {
        // handle response
    }
}
```

## SearchProducts

Gets information about the products to which the caller has access.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchProducts(ctx, operations.SearchProductsRequest{
        PageSize: sdk.String("accusamus"),
        PageToken: sdk.String("voluptatibus"),
        SearchProductsInput: shared.SearchProductsInput{
            AcceptLanguage: sdk.String("distinctio"),
            Filters: map[string][]string{
                "delectus": []string{
                    "praesentium",
                    "maxime",
                },
                "magnam": []string{
                    "quos",
                    "commodi",
                    "itaque",
                    "commodi",
                },
                "totam": []string{
                    "modi",
                    "nam",
                    "vero",
                    "voluptatem",
                },
            },
            PageSize: sdk.Int64(371919),
            PageToken: sdk.String("vel"),
            SortBy: shared.ProductViewSortByEnumTitle.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.SearchProductsXAmzTargetEnumAws242ServiceCatalogServiceSearchProducts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchProductsOutput != nil {
        // handle response
    }
}
```

## SearchProductsAsAdmin

Gets information about the products for the specified portfolio or all products.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchProductsAsAdmin(ctx, operations.SearchProductsAsAdminRequest{
        PageSize: sdk.String("nemo"),
        PageToken: sdk.String("reprehenderit"),
        SearchProductsAsAdminInput: shared.SearchProductsAsAdminInput{
            AcceptLanguage: sdk.String("est"),
            Filters: map[string][]string{
                "sint": []string{
                    "impedit",
                    "hic",
                    "necessitatibus",
                    "asperiores",
                },
                "ex": []string{
                    "debitis",
                    "delectus",
                },
            },
            PageSize: sdk.Int64(65082),
            PageToken: sdk.String("minus"),
            PortfolioID: sdk.String("fuga"),
            ProductSource: shared.ProductSourceEnumAccount.ToPointer(),
            SortBy: shared.ProductViewSortByEnumCreationDate.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.SearchProductsAsAdminXAmzTargetEnumAws242ServiceCatalogServiceSearchProductsAsAdmin,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchProductsAsAdminOutput != nil {
        // handle response
    }
}
```

## SearchProvisionedProducts

Gets information about the provisioned products that meet the specified criteria.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchProvisionedProducts(ctx, operations.SearchProvisionedProductsRequest{
        PageSize: sdk.String("nam"),
        PageToken: sdk.String("dolore"),
        SearchProvisionedProductsInput: shared.SearchProvisionedProductsInput{
            AcceptLanguage: sdk.String("iusto"),
            AccessLevelFilter: &shared.AccessLevelFilter{
                Key: shared.AccessLevelFilterKeyEnumRole.ToPointer(),
                Value: sdk.String("sequi"),
            },
            Filters: map[string][]string{
                "neque": []string{
                    "deleniti",
                    "quibusdam",
                    "iure",
                    "odit",
                },
                "voluptatibus": []string{
                    "magnam",
                    "quibusdam",
                },
            },
            PageSize: sdk.Int64(78969),
            PageToken: sdk.String("facere"),
            SortBy: sdk.String("libero"),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.SearchProvisionedProductsXAmzTargetEnumAws242ServiceCatalogServiceSearchProvisionedProducts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchProvisionedProductsOutput != nil {
        // handle response
    }
}
```

## TerminateProvisionedProduct

<p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TerminateProvisionedProduct(ctx, operations.TerminateProvisionedProductRequest{
        TerminateProvisionedProductInput: shared.TerminateProvisionedProductInput{
            AcceptLanguage: sdk.String("vel"),
            IgnoreErrors: sdk.Bool(false),
            ProvisionedProductID: sdk.String("ea"),
            ProvisionedProductName: sdk.String("beatae"),
            RetainPhysicalResources: sdk.Bool(false),
            TerminateToken: "vero",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.TerminateProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceTerminateProvisionedProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateProvisionedProductOutput != nil {
        // handle response
    }
}
```

## UpdateConstraint

Updates the specified constraint.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateConstraint(ctx, operations.UpdateConstraintRequest{
        UpdateConstraintInput: shared.UpdateConstraintInput{
            AcceptLanguage: sdk.String("impedit"),
            Description: sdk.String("voluptatibus"),
            ID: "9e06e3a4-3700-40ae-ab6b-c9b8f759eac5",
            Parameters: sdk.String("corporis"),
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.UpdateConstraintXAmzTargetEnumAws242ServiceCatalogServiceUpdateConstraint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConstraintOutput != nil {
        // handle response
    }
}
```

## UpdatePortfolio

<p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePortfolio(ctx, operations.UpdatePortfolioRequest{
        UpdatePortfolioInput: shared.UpdatePortfolioInput{
            AcceptLanguage: sdk.String("vitae"),
            AddTags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: "ad",
                },
            },
            Description: sdk.String("qui"),
            DisplayName: sdk.String("iste"),
            ID: "65bb8a72-0261-4143-9e13-9dbc2259b1ab",
            ProviderName: sdk.String("fugiat"),
            RemoveTags: []string{
                "quos",
                "placeat",
                "sit",
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.UpdatePortfolioXAmzTargetEnumAws242ServiceCatalogServiceUpdatePortfolio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePortfolioOutput != nil {
        // handle response
    }
}
```

## UpdatePortfolioShare

<p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePortfolioShare(ctx, operations.UpdatePortfolioShareRequest{
        UpdatePortfolioShareInput: shared.UpdatePortfolioShareInput{
            AcceptLanguage: sdk.String("eligendi"),
            AccountID: sdk.String("distinctio"),
            OrganizationNode: &shared.OrganizationNode{
                Type: shared.OrganizationNodeTypeEnumOrganization.ToPointer(),
                Value: sdk.String("autem"),
            },
            PortfolioID: "esse",
            SharePrincipals: sdk.Bool(false),
            ShareTagOptions: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.UpdatePortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceUpdatePortfolioShare,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePortfolioShareOutput != nil {
        // handle response
    }
}
```

## UpdateProduct

Updates the specified product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProduct(ctx, operations.UpdateProductRequest{
        UpdateProductInput: shared.UpdateProductInput{
            AcceptLanguage: sdk.String("provident"),
            AddTags: []shared.Tag{
                shared.Tag{
                    Key: "necessitatibus",
                    Value: "tempore",
                },
                shared.Tag{
                    Key: "sint",
                    Value: "ea",
                },
                shared.Tag{
                    Key: "autem",
                    Value: "ipsam",
                },
                shared.Tag{
                    Key: "rerum",
                    Value: "laudantium",
                },
            },
            Description: sdk.String("corporis"),
            Distributor: sdk.String("officiis"),
            ID: "fbd02bae-0be2-4d78-a259-e3ea4b5197f9",
            Name: sdk.String("Elaine Gerhold"),
            Owner: sdk.String("officia"),
            RemoveTags: []string{
                "optio",
                "necessitatibus",
            },
            SourceConnection: &shared.SourceConnection{
                ConnectionParameters: shared.SourceConnectionParameters{
                    CodeStar: &shared.CodeStarParameters{
                        ArtifactPath: "corporis",
                        Branch: "qui",
                        ConnectionArn: "expedita",
                        Repository: "voluptatum",
                    },
                },
                Type: shared.SourceTypeEnumCodestar.ToPointer(),
            },
            SupportDescription: sdk.String("cupiditate"),
            SupportEmail: sdk.String("minima"),
            SupportURL: sdk.String("placeat"),
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.UpdateProductXAmzTargetEnumAws242ServiceCatalogServiceUpdateProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProductOutput != nil {
        // handle response
    }
}
```

## UpdateProvisionedProduct

<p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProvisionedProduct(ctx, operations.UpdateProvisionedProductRequest{
        UpdateProvisionedProductInput: shared.UpdateProvisionedProductInput{
            AcceptLanguage: sdk.String("magnam"),
            PathID: sdk.String("voluptates"),
            PathName: sdk.String("maiores"),
            ProductID: sdk.String("tempore"),
            ProductName: sdk.String("aperiam"),
            ProvisionedProductID: sdk.String("libero"),
            ProvisionedProductName: sdk.String("ratione"),
            ProvisioningArtifactID: sdk.String("labore"),
            ProvisioningArtifactName: sdk.String("totam"),
            ProvisioningParameters: []shared.UpdateProvisioningParameter{
                shared.UpdateProvisioningParameter{
                    Key: sdk.String("voluptas"),
                    UsePreviousValue: sdk.Bool(false),
                    Value: sdk.String("quo"),
                },
                shared.UpdateProvisioningParameter{
                    Key: sdk.String("velit"),
                    UsePreviousValue: sdk.Bool(false),
                    Value: sdk.String("minus"),
                },
                shared.UpdateProvisioningParameter{
                    Key: sdk.String("fuga"),
                    UsePreviousValue: sdk.Bool(false),
                    Value: sdk.String("nostrum"),
                },
            },
            ProvisioningPreferences: &shared.UpdateProvisioningPreferences{
                StackSetAccounts: []string{
                    "impedit",
                    "delectus",
                    "tempore",
                },
                StackSetFailureToleranceCount: sdk.Int64(878601),
                StackSetFailureTolerancePercentage: sdk.Int64(141506),
                StackSetMaxConcurrencyCount: sdk.Int64(997437),
                StackSetMaxConcurrencyPercentage: sdk.Int64(865946),
                StackSetOperationType: shared.StackSetOperationTypeEnumUpdate.ToPointer(),
                StackSetRegions: []string{
                    "aperiam",
                    "odio",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "in",
                    Value: "ducimus",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "dolores",
                },
            },
            UpdateToken: "error",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.UpdateProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceUpdateProvisionedProduct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProvisionedProductOutput != nil {
        // handle response
    }
}
```

## UpdateProvisionedProductProperties

Requests updates to the properties of the specified provisioned product.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProvisionedProductProperties(ctx, operations.UpdateProvisionedProductPropertiesRequest{
        UpdateProvisionedProductPropertiesInput: shared.UpdateProvisionedProductPropertiesInput{
            AcceptLanguage: sdk.String("ex"),
            IdempotencyToken: "quaerat",
            ProvisionedProductID: "commodi",
            ProvisionedProductProperties: map[string]string{
                "placeat": "quidem",
                "exercitationem": "quam",
                "dolorem": "modi",
                "ipsa": "sint",
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.UpdateProvisionedProductPropertiesXAmzTargetEnumAws242ServiceCatalogServiceUpdateProvisionedProductProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProvisionedProductPropertiesOutput != nil {
        // handle response
    }
}
```

## UpdateProvisioningArtifact

<p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProvisioningArtifact(ctx, operations.UpdateProvisioningArtifactRequest{
        UpdateProvisioningArtifactInput: shared.UpdateProvisioningArtifactInput{
            AcceptLanguage: sdk.String("animi"),
            Active: sdk.Bool(false),
            Description: sdk.String("dolores"),
            Guidance: shared.ProvisioningArtifactGuidanceEnumDeprecated.ToPointer(),
            Name: sdk.String("Louise Tromp IV"),
            ProductID: "maiores",
            ProvisioningArtifactID: "veritatis",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.UpdateProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceUpdateProvisioningArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProvisioningArtifactOutput != nil {
        // handle response
    }
}
```

## UpdateServiceAction

Updates a self-service action.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateServiceAction(ctx, operations.UpdateServiceActionRequest{
        UpdateServiceActionInput: shared.UpdateServiceActionInput{
            AcceptLanguage: sdk.String("aliquam"),
            Definition: map[string]string{
                "doloribus": "eligendi",
                "sint": "enim",
            },
            Description: sdk.String("hic"),
            ID: "a88970e1-89db-4b30-bcb3-3ea055b197cd",
            Name: sdk.String("Danielle Waters"),
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.UpdateServiceActionXAmzTargetEnumAws242ServiceCatalogServiceUpdateServiceAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceActionOutput != nil {
        // handle response
    }
}
```

## UpdateTagOption

Updates the specified TagOption.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTagOption(ctx, operations.UpdateTagOptionRequest{
        UpdateTagOptionInput: shared.UpdateTagOptionInput{
            Active: sdk.Bool(false),
            ID: "513bb6f4-8b65-46bc-9b35-ff2e4b27537a",
            Value: sdk.String("rem"),
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.UpdateTagOptionXAmzTargetEnumAws242ServiceCatalogServiceUpdateTagOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTagOptionOutput != nil {
        // handle response
    }
}
```
