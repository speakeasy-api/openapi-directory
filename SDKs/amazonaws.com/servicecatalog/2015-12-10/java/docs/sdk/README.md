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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptPortfolioShareRequest;
import org.openapis.openapi.models.operations.AcceptPortfolioShareResponse;
import org.openapis.openapi.models.operations.AcceptPortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptPortfolioShareInput;
import org.openapis.openapi.models.shared.PortfolioShareTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptPortfolioShareRequest req = new AcceptPortfolioShareRequest(                new AcceptPortfolioShareInput("iure") {{
                                acceptLanguage = "magnam";
                                portfolioShareType = PortfolioShareTypeEnum.AWS_ORGANIZATIONS;
                            }};, AcceptPortfolioShareXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ACCEPT_PORTFOLIO_SHARE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            AcceptPortfolioShareResponse res = sdk.sdk.acceptPortfolioShare(req);

            if (res.acceptPortfolioShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateBudgetWithResource

Associates the specified budget with the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateBudgetWithResourceRequest;
import org.openapis.openapi.models.operations.AssociateBudgetWithResourceResponse;
import org.openapis.openapi.models.operations.AssociateBudgetWithResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateBudgetWithResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateBudgetWithResourceRequest req = new AssociateBudgetWithResourceRequest(                new AssociateBudgetWithResourceInput("iusto", "excepturi");, AssociateBudgetWithResourceXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_BUDGET_WITH_RESOURCE) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            AssociateBudgetWithResourceResponse res = sdk.sdk.associateBudgetWithResource(req);

            if (res.associateBudgetWithResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associatePrincipalWithPortfolio

<p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociatePrincipalWithPortfolioRequest;
import org.openapis.openapi.models.operations.AssociatePrincipalWithPortfolioResponse;
import org.openapis.openapi.models.operations.AssociatePrincipalWithPortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociatePrincipalWithPortfolioInput;
import org.openapis.openapi.models.shared.PrincipalTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociatePrincipalWithPortfolioRequest req = new AssociatePrincipalWithPortfolioRequest(                new AssociatePrincipalWithPortfolioInput("ipsam", "repellendus", PrincipalTypeEnum.IAM_PATTERN) {{
                                acceptLanguage = "quo";
                            }};, AssociatePrincipalWithPortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_PRINCIPAL_WITH_PORTFOLIO) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            AssociatePrincipalWithPortfolioResponse res = sdk.sdk.associatePrincipalWithPortfolio(req);

            if (res.associatePrincipalWithPortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateProductWithPortfolio

<p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateProductWithPortfolioRequest;
import org.openapis.openapi.models.operations.AssociateProductWithPortfolioResponse;
import org.openapis.openapi.models.operations.AssociateProductWithPortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateProductWithPortfolioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateProductWithPortfolioRequest req = new AssociateProductWithPortfolioRequest(                new AssociateProductWithPortfolioInput("totam", "porro") {{
                                acceptLanguage = "dolorum";
                                sourcePortfolioId = "dicta";
                            }};, AssociateProductWithPortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_PRODUCT_WITH_PORTFOLIO) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            AssociateProductWithPortfolioResponse res = sdk.sdk.associateProductWithPortfolio(req);

            if (res.associateProductWithPortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateServiceActionWithProvisioningArtifact

Associates a self-service action with a provisioning artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateServiceActionWithProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.AssociateServiceActionWithProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateServiceActionWithProvisioningArtifactInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateServiceActionWithProvisioningArtifactRequest req = new AssociateServiceActionWithProvisioningArtifactRequest(                new AssociateServiceActionWithProvisioningArtifactInput("beatae", "commodi", "molestiae") {{
                                acceptLanguage = "modi";
                            }};, AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            AssociateServiceActionWithProvisioningArtifactResponse res = sdk.sdk.associateServiceActionWithProvisioningArtifact(req);

            if (res.associateServiceActionWithProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateTagOptionWithResource

Associate the specified TagOption with the specified portfolio or product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateTagOptionWithResourceRequest;
import org.openapis.openapi.models.operations.AssociateTagOptionWithResourceResponse;
import org.openapis.openapi.models.operations.AssociateTagOptionWithResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateTagOptionWithResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTagOptionWithResourceRequest req = new AssociateTagOptionWithResourceRequest(                new AssociateTagOptionWithResourceInput("ad", "natus");, AssociateTagOptionWithResourceXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ASSOCIATE_TAG_OPTION_WITH_RESOURCE) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            AssociateTagOptionWithResourceResponse res = sdk.sdk.associateTagOptionWithResource(req);

            if (res.associateTagOptionWithResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateServiceActionWithProvisioningArtifact

Associates multiple self-service actions with provisioning artifacts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateServiceActionWithProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.BatchAssociateServiceActionWithProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchAssociateServiceActionWithProvisioningArtifactInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceActionAssociation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateServiceActionWithProvisioningArtifactRequest req = new BatchAssociateServiceActionWithProvisioningArtifactRequest(                new BatchAssociateServiceActionWithProvisioningArtifactInput(                new org.openapis.openapi.models.shared.ServiceActionAssociation[]{{
                                                add(new ServiceActionAssociation("saepe", "quidem", "architecto") {{
                                                    productId = "corporis";
                                                    provisioningArtifactId = "iste";
                                                    serviceActionId = "iure";
                                                }}),
                                                add(new ServiceActionAssociation("mollitia", "laborum", "dolores") {{
                                                    productId = "ipsa";
                                                    provisioningArtifactId = "reiciendis";
                                                    serviceActionId = "est";
                                                }}),
                                            }}) {{
                                acceptLanguage = "dolorem";
                            }};, BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_BATCH_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            BatchAssociateServiceActionWithProvisioningArtifactResponse res = sdk.sdk.batchAssociateServiceActionWithProvisioningArtifact(req);

            if (res.batchAssociateServiceActionWithProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateServiceActionFromProvisioningArtifact

Disassociates a batch of self-service actions from the specified provisioning artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateServiceActionFromProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.BatchDisassociateServiceActionFromProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDisassociateServiceActionFromProvisioningArtifactInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceActionAssociation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateServiceActionFromProvisioningArtifactRequest req = new BatchDisassociateServiceActionFromProvisioningArtifactRequest(                new BatchDisassociateServiceActionFromProvisioningArtifactInput(                new org.openapis.openapi.models.shared.ServiceActionAssociation[]{{
                                                add(new ServiceActionAssociation("sapiente", "architecto", "mollitia") {{
                                                    productId = "iure";
                                                    provisioningArtifactId = "culpa";
                                                    serviceActionId = "doloribus";
                                                }}),
                                            }}) {{
                                acceptLanguage = "dolorem";
                            }};, BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_BATCH_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            BatchDisassociateServiceActionFromProvisioningArtifactResponse res = sdk.sdk.batchDisassociateServiceActionFromProvisioningArtifact(req);

            if (res.batchDisassociateServiceActionFromProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyProduct

<p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyProductRequest;
import org.openapis.openapi.models.operations.CopyProductResponse;
import org.openapis.openapi.models.operations.CopyProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopyOptionEnum;
import org.openapis.openapi.models.shared.CopyProductInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyProductRequest req = new CopyProductRequest(                new CopyProductInput("molestiae", "velit") {{
                                acceptLanguage = "error";
                                copyOptions = new org.openapis.openapi.models.shared.CopyOptionEnum[]{{
                                    add(CopyOptionEnum.COPY_TAGS),
                                }};
                                sourceProvisioningArtifactIdentifiers = new java.util.HashMap<String, String>[]{{
                                    add(new java.util.HashMap<String, String>() {{
                                        put("laborum", "animi");
                                    }}),
                                    add(new java.util.HashMap<String, String>() {{
                                        put("odit", "quo");
                                        put("sequi", "tenetur");
                                    }}),
                                }};
                                targetProductId = "ipsam";
                                targetProductName = "id";
                            }};, CopyProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_COPY_PRODUCT) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            CopyProductResponse res = sdk.sdk.copyProduct(req);

            if (res.copyProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConstraint

<p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConstraintRequest;
import org.openapis.openapi.models.operations.CreateConstraintResponse;
import org.openapis.openapi.models.operations.CreateConstraintXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConstraintInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConstraintRequest req = new CreateConstraintRequest(                new CreateConstraintInput("voluptatibus", "vero", "nihil", "praesentium", "voluptatibus") {{
                                acceptLanguage = "ipsa";
                                description = "omnis";
                            }};, CreateConstraintXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_CONSTRAINT) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateConstraintResponse res = sdk.sdk.createConstraint(req);

            if (res.createConstraintOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPortfolio

<p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePortfolioRequest;
import org.openapis.openapi.models.operations.CreatePortfolioResponse;
import org.openapis.openapi.models.operations.CreatePortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePortfolioInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePortfolioRequest req = new CreatePortfolioRequest(                new CreatePortfolioInput("corporis", "dolore", "iusto") {{
                                acceptLanguage = "dicta";
                                description = "harum";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("repudiandae", "quae") {{
                                        key = "accusamus";
                                        value = "commodi";
                                    }}),
                                    add(new Tag("molestias", "excepturi") {{
                                        key = "ipsum";
                                        value = "quidem";
                                    }}),
                                }};
                            }};, CreatePortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_PORTFOLIO) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreatePortfolioResponse res = sdk.sdk.createPortfolio(req);

            if (res.createPortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPortfolioShare

<p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePortfolioShareRequest;
import org.openapis.openapi.models.operations.CreatePortfolioShareResponse;
import org.openapis.openapi.models.operations.CreatePortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePortfolioShareInput;
import org.openapis.openapi.models.shared.OrganizationNode;
import org.openapis.openapi.models.shared.OrganizationNodeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePortfolioShareRequest req = new CreatePortfolioShareRequest(                new CreatePortfolioShareInput("veritatis") {{
                                acceptLanguage = "itaque";
                                accountId = "incidunt";
                                organizationNode = new OrganizationNode() {{
                                    type = OrganizationNodeTypeEnum.ORGANIZATION;
                                    value = "consequatur";
                                }};;
                                sharePrincipals = false;
                                shareTagOptions = false;
                            }};, CreatePortfolioShareXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_PORTFOLIO_SHARE) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            CreatePortfolioShareResponse res = sdk.sdk.createPortfolioShare(req);

            if (res.createPortfolioShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProduct

<p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProductRequest;
import org.openapis.openapi.models.operations.CreateProductResponse;
import org.openapis.openapi.models.operations.CreateProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.CodeStarParameters;
import org.openapis.openapi.models.shared.CreateProductInput;
import org.openapis.openapi.models.shared.ProductTypeEnum;
import org.openapis.openapi.models.shared.ProvisioningArtifactProperties;
import org.openapis.openapi.models.shared.ProvisioningArtifactTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceConnection;
import org.openapis.openapi.models.shared.SourceConnectionParameters;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProductRequest req = new CreateProductRequest(                new CreateProductInput("qui", "aliquid", "cupiditate", ProductTypeEnum.MARKETPLACE) {{
                                acceptLanguage = "perferendis";
                                description = "magni";
                                distributor = "assumenda";
                                provisioningArtifactParameters = new ProvisioningArtifactProperties() {{
                                    description = "ipsam";
                                    disableTemplateValidation = false;
                                    info = new java.util.HashMap<String, String>() {{
                                        put("fugit", "dolorum");
                                    }};
                                    name = "Eddie Prosacco";
                                    type = ProvisioningArtifactTypeEnum.TERRAFORM_OPEN_SOURCE;
                                }};;
                                sourceConnection = new SourceConnection(                new SourceConnectionParameters() {{
                                                    codeStar = new CodeStarParameters("eum", "non", "eligendi", "sint");;
                                                }};) {{
                                    type = SourceTypeEnum.CODESTAR;
                                }};;
                                supportDescription = "aliquid";
                                supportEmail = "provident";
                                supportUrl = "necessitatibus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("debitis", "a") {{
                                        key = "officia";
                                        value = "dolor";
                                    }}),
                                    add(new Tag("in", "illum") {{
                                        key = "dolorum";
                                        value = "in";
                                    }}),
                                    add(new Tag("dicta", "magnam") {{
                                        key = "maiores";
                                        value = "rerum";
                                    }}),
                                }};
                            }};, CreateProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_PRODUCT) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            CreateProductResponse res = sdk.sdk.createProduct(req);

            if (res.createProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProvisionedProductPlan

<p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProvisionedProductPlanRequest;
import org.openapis.openapi.models.operations.CreateProvisionedProductPlanResponse;
import org.openapis.openapi.models.operations.CreateProvisionedProductPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateProvisionedProductPlanInput;
import org.openapis.openapi.models.shared.ProvisionedProductPlanTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateProvisioningParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProvisionedProductPlanRequest req = new CreateProvisionedProductPlanRequest(                new CreateProvisionedProductPlanInput("enim", "accusamus", ProvisionedProductPlanTypeEnum.CLOUDFORMATION, "delectus", "quidem", "provident") {{
                                acceptLanguage = "nam";
                                notificationArns = new String[]{{
                                    add("blanditiis"),
                                    add("deleniti"),
                                    add("sapiente"),
                                }};
                                pathId = "amet";
                                provisioningParameters = new org.openapis.openapi.models.shared.UpdateProvisioningParameter[]{{
                                    add(new UpdateProvisioningParameter() {{
                                        key = "nisi";
                                        usePreviousValue = false;
                                        value = "vel";
                                    }}),
                                    add(new UpdateProvisioningParameter() {{
                                        key = "natus";
                                        usePreviousValue = false;
                                        value = "omnis";
                                    }}),
                                    add(new UpdateProvisioningParameter() {{
                                        key = "molestiae";
                                        usePreviousValue = false;
                                        value = "perferendis";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("id", "labore") {{
                                        key = "magnam";
                                        value = "distinctio";
                                    }}),
                                    add(new Tag("natus", "nobis") {{
                                        key = "labore";
                                        value = "suscipit";
                                    }}),
                                }};
                            }};, CreateProvisionedProductPlanXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_PROVISIONED_PRODUCT_PLAN) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateProvisionedProductPlanResponse res = sdk.sdk.createProvisionedProductPlan(req);

            if (res.createProvisionedProductPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProvisioningArtifact

<p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.CreateProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.CreateProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateProvisioningArtifactInput;
import org.openapis.openapi.models.shared.ProvisioningArtifactProperties;
import org.openapis.openapi.models.shared.ProvisioningArtifactTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProvisioningArtifactRequest req = new CreateProvisioningArtifactRequest(                new CreateProvisioningArtifactInput("provident",                 new ProvisioningArtifactProperties() {{
                                                description = "quos";
                                                disableTemplateValidation = false;
                                                info = new java.util.HashMap<String, String>() {{
                                                    put("accusantium", "mollitia");
                                                    put("reiciendis", "mollitia");
                                                    put("ad", "eum");
                                                }};
                                                name = "Jana Connelly III";
                                                type = ProvisioningArtifactTypeEnum.TERRAFORM_OPEN_SOURCE;
                                            }};, "debitis") {{
                                acceptLanguage = "eius";
                            }};, CreateProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateProvisioningArtifactResponse res = sdk.sdk.createProvisioningArtifact(req);

            if (res.createProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceAction

Creates a self-service action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceActionRequest;
import org.openapis.openapi.models.operations.CreateServiceActionResponse;
import org.openapis.openapi.models.operations.CreateServiceActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateServiceActionInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceActionDefinitionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceActionRequest req = new CreateServiceActionRequest(                new CreateServiceActionInput(                new java.util.HashMap<String, String>() {{
                                                put("nihil", "repellat");
                                                put("quibusdam", "sed");
                                                put("saepe", "pariatur");
                                            }}, ServiceActionDefinitionTypeEnum.SSM_AUTOMATION, "accusantium", "consequuntur") {{
                                acceptLanguage = "praesentium";
                                description = "natus";
                            }};, CreateServiceActionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_SERVICE_ACTION) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            CreateServiceActionResponse res = sdk.sdk.createServiceAction(req);

            if (res.createServiceActionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTagOption

Creates a TagOption.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagOptionRequest;
import org.openapis.openapi.models.operations.CreateTagOptionResponse;
import org.openapis.openapi.models.operations.CreateTagOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTagOptionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTagOptionRequest req = new CreateTagOptionRequest(                new CreateTagOptionInput("odit", "ea");, CreateTagOptionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_CREATE_TAG_OPTION) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            CreateTagOptionResponse res = sdk.sdk.createTagOption(req);

            if (res.createTagOptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConstraint

<p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConstraintRequest;
import org.openapis.openapi.models.operations.DeleteConstraintResponse;
import org.openapis.openapi.models.operations.DeleteConstraintXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConstraintInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConstraintRequest req = new DeleteConstraintRequest(                new DeleteConstraintInput("eaque") {{
                                acceptLanguage = "pariatur";
                            }};, DeleteConstraintXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_CONSTRAINT) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            DeleteConstraintResponse res = sdk.sdk.deleteConstraint(req);

            if (res.deleteConstraintOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePortfolio

<p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePortfolioRequest;
import org.openapis.openapi.models.operations.DeletePortfolioResponse;
import org.openapis.openapi.models.operations.DeletePortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePortfolioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePortfolioRequest req = new DeletePortfolioRequest(                new DeletePortfolioInput("hic") {{
                                acceptLanguage = "libero";
                            }};, DeletePortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_PORTFOLIO) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            DeletePortfolioResponse res = sdk.sdk.deletePortfolio(req);

            if (res.deletePortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePortfolioShare

<p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePortfolioShareRequest;
import org.openapis.openapi.models.operations.DeletePortfolioShareResponse;
import org.openapis.openapi.models.operations.DeletePortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePortfolioShareInput;
import org.openapis.openapi.models.shared.OrganizationNode;
import org.openapis.openapi.models.shared.OrganizationNodeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePortfolioShareRequest req = new DeletePortfolioShareRequest(                new DeletePortfolioShareInput("eos") {{
                                acceptLanguage = "perferendis";
                                accountId = "dolores";
                                organizationNode = new OrganizationNode() {{
                                    type = OrganizationNodeTypeEnum.ACCOUNT;
                                    value = "quam";
                                }};;
                            }};, DeletePortfolioShareXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_PORTFOLIO_SHARE) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            DeletePortfolioShareResponse res = sdk.sdk.deletePortfolioShare(req);

            if (res.deletePortfolioShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProduct

<p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductRequest;
import org.openapis.openapi.models.operations.DeleteProductResponse;
import org.openapis.openapi.models.operations.DeleteProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProductInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProductRequest req = new DeleteProductRequest(                new DeleteProductInput("voluptatem") {{
                                acceptLanguage = "porro";
                            }};, DeleteProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_PRODUCT) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
            }};            

            DeleteProductResponse res = sdk.sdk.deleteProduct(req);

            if (res.deleteProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProvisionedProductPlan

Deletes the specified plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProvisionedProductPlanRequest;
import org.openapis.openapi.models.operations.DeleteProvisionedProductPlanResponse;
import org.openapis.openapi.models.operations.DeleteProvisionedProductPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProvisionedProductPlanInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProvisionedProductPlanRequest req = new DeleteProvisionedProductPlanRequest(                new DeleteProvisionedProductPlanInput("earum") {{
                                acceptLanguage = "modi";
                                ignoreErrors = false;
                            }};, DeleteProvisionedProductPlanXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_PROVISIONED_PRODUCT_PLAN) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "libero";
            }};            

            DeleteProvisionedProductPlanResponse res = sdk.sdk.deleteProvisionedProductPlan(req);

            if (res.deleteProvisionedProductPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProvisioningArtifact

<p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.DeleteProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.DeleteProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProvisioningArtifactInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProvisioningArtifactRequest req = new DeleteProvisioningArtifactRequest(                new DeleteProvisioningArtifactInput("quaerat", "quos") {{
                                acceptLanguage = "aliquid";
                            }};, DeleteProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteProvisioningArtifactResponse res = sdk.sdk.deleteProvisioningArtifact(req);

            if (res.deleteProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceAction

Deletes a self-service action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceActionRequest;
import org.openapis.openapi.models.operations.DeleteServiceActionResponse;
import org.openapis.openapi.models.operations.DeleteServiceActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceActionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceActionRequest req = new DeleteServiceActionRequest(                new DeleteServiceActionInput("voluptate") {{
                                acceptLanguage = "dignissimos";
                            }};, DeleteServiceActionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_SERVICE_ACTION) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteServiceActionResponse res = sdk.sdk.deleteServiceAction(req);

            if (res.deleteServiceActionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTagOption

<p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagOptionRequest;
import org.openapis.openapi.models.operations.DeleteTagOptionResponse;
import org.openapis.openapi.models.operations.DeleteTagOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTagOptionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagOptionRequest req = new DeleteTagOptionRequest(                new DeleteTagOptionInput("odio");, DeleteTagOptionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DELETE_TAG_OPTION) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            DeleteTagOptionResponse res = sdk.sdk.deleteTagOption(req);

            if (res.deleteTagOptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConstraint

Gets information about the specified constraint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConstraintRequest;
import org.openapis.openapi.models.operations.DescribeConstraintResponse;
import org.openapis.openapi.models.operations.DescribeConstraintXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConstraintInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConstraintRequest req = new DescribeConstraintRequest(                new DescribeConstraintInput("sit") {{
                                acceptLanguage = "fugiat";
                            }};, DescribeConstraintXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_CONSTRAINT) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            DescribeConstraintResponse res = sdk.sdk.describeConstraint(req);

            if (res.describeConstraintOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCopyProductStatus

Gets the status of the specified copy product operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCopyProductStatusRequest;
import org.openapis.openapi.models.operations.DescribeCopyProductStatusResponse;
import org.openapis.openapi.models.operations.DescribeCopyProductStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCopyProductStatusInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCopyProductStatusRequest req = new DescribeCopyProductStatusRequest(                new DescribeCopyProductStatusInput("necessitatibus") {{
                                acceptLanguage = "distinctio";
                            }};, DescribeCopyProductStatusXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_COPY_PRODUCT_STATUS) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            DescribeCopyProductStatusResponse res = sdk.sdk.describeCopyProductStatus(req);

            if (res.describeCopyProductStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePortfolio

<p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePortfolioRequest;
import org.openapis.openapi.models.operations.DescribePortfolioResponse;
import org.openapis.openapi.models.operations.DescribePortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePortfolioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePortfolioRequest req = new DescribePortfolioRequest(                new DescribePortfolioInput("perferendis") {{
                                acceptLanguage = "amet";
                            }};, DescribePortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "ad";
                xAmzDate = "saepe";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "provident";
            }};            

            DescribePortfolioResponse res = sdk.sdk.describePortfolio(req);

            if (res.describePortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePortfolioShareStatus

Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePortfolioShareStatusRequest;
import org.openapis.openapi.models.operations.DescribePortfolioShareStatusResponse;
import org.openapis.openapi.models.operations.DescribePortfolioShareStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePortfolioShareStatusInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePortfolioShareStatusRequest req = new DescribePortfolioShareStatusRequest(                new DescribePortfolioShareStatusInput("repellendus");, DescribePortfolioShareStatusXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO_SHARE_STATUS) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "similique";
                xAmzCredential = "alias";
                xAmzDate = "at";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "vel";
            }};            

            DescribePortfolioShareStatusResponse res = sdk.sdk.describePortfolioShareStatus(req);

            if (res.describePortfolioShareStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePortfolioShares

<p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePortfolioSharesRequest;
import org.openapis.openapi.models.operations.DescribePortfolioSharesResponse;
import org.openapis.openapi.models.operations.DescribePortfolioSharesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePortfolioShareTypeEnum;
import org.openapis.openapi.models.shared.DescribePortfolioSharesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePortfolioSharesRequest req = new DescribePortfolioSharesRequest(                new DescribePortfolioSharesInput("officiis", DescribePortfolioShareTypeEnum.ACCOUNT) {{
                                pageSize = 679880L;
                                pageToken = "a";
                            }};, DescribePortfolioSharesXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO_SHARES) {{
                pageSize = "esse";
                pageToken = "harum";
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribePortfolioSharesResponse res = sdk.sdk.describePortfolioShares(req);

            if (res.describePortfolioSharesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProduct

<p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProductRequest;
import org.openapis.openapi.models.operations.DescribeProductResponse;
import org.openapis.openapi.models.operations.DescribeProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProductInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProductRequest req = new DescribeProductRequest(                new DescribeProductInput() {{
                                acceptLanguage = "enim";
                                id = "3f870b32-6b5a-4734-a9cd-b1a8422bb679";
                                name = "Shawn Doyle";
                            }};, DescribeProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PRODUCT) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            DescribeProductResponse res = sdk.sdk.describeProduct(req);

            if (res.describeProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProductAsAdmin

Gets information about the specified product. This operation is run with administrator access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProductAsAdminRequest;
import org.openapis.openapi.models.operations.DescribeProductAsAdminResponse;
import org.openapis.openapi.models.operations.DescribeProductAsAdminXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProductAsAdminInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProductAsAdminRequest req = new DescribeProductAsAdminRequest(                new DescribeProductAsAdminInput() {{
                                acceptLanguage = "nobis";
                                id = "1e31b8b9-0f34-443a-9108-e0adcf4b9218";
                                name = "Toni Wolff";
                                sourcePortfolioId = "omnis";
                            }};, DescribeProductAsAdminXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PRODUCT_AS_ADMIN) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
            }};            

            DescribeProductAsAdminResponse res = sdk.sdk.describeProductAsAdmin(req);

            if (res.describeProductAsAdminOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProductView

Gets information about the specified product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProductViewRequest;
import org.openapis.openapi.models.operations.DescribeProductViewResponse;
import org.openapis.openapi.models.operations.DescribeProductViewXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProductViewInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProductViewRequest req = new DescribeProductViewRequest(                new DescribeProductViewInput("hic") {{
                                acceptLanguage = "distinctio";
                            }};, DescribeProductViewXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PRODUCT_VIEW) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            DescribeProductViewResponse res = sdk.sdk.describeProductView(req);

            if (res.describeProductViewOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProvisionedProduct

Gets information about the specified provisioned product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProvisionedProductRequest;
import org.openapis.openapi.models.operations.DescribeProvisionedProductResponse;
import org.openapis.openapi.models.operations.DescribeProvisionedProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProvisionedProductInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProvisionedProductRequest req = new DescribeProvisionedProductRequest(                new DescribeProvisionedProductInput() {{
                                acceptLanguage = "illum";
                                id = "39c0f5d2-cff7-4c70-a456-26d436813f16";
                                name = "Marshall Wiza";
                            }};, DescribeProvisionedProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONED_PRODUCT) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
            }};            

            DescribeProvisionedProductResponse res = sdk.sdk.describeProvisionedProduct(req);

            if (res.describeProvisionedProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProvisionedProductPlan

Gets information about the resource changes for the specified plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProvisionedProductPlanRequest;
import org.openapis.openapi.models.operations.DescribeProvisionedProductPlanResponse;
import org.openapis.openapi.models.operations.DescribeProvisionedProductPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProvisionedProductPlanInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProvisionedProductPlanRequest req = new DescribeProvisionedProductPlanRequest(                new DescribeProvisionedProductPlanInput("magnam") {{
                                acceptLanguage = "ea";
                                pageSize = 775220L;
                                pageToken = "consectetur";
                            }};, DescribeProvisionedProductPlanXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONED_PRODUCT_PLAN) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "minima";
                xAmzDate = "eaque";
                xAmzSecurityToken = "a";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeProvisionedProductPlanResponse res = sdk.sdk.describeProvisionedProductPlan(req);

            if (res.describeProvisionedProductPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProvisioningArtifact

Gets information about the specified provisioning artifact (also known as a version) for the specified product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.DescribeProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.DescribeProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProvisioningArtifactInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProvisioningArtifactRequest req = new DescribeProvisioningArtifactRequest(                new DescribeProvisioningArtifactInput() {{
                                acceptLanguage = "deleniti";
                                productId = "impedit";
                                productName = "aliquam";
                                provisioningArtifactId = "fugit";
                                provisioningArtifactName = "accusamus";
                                verbose = false;
                            }};, DescribeProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "non";
                xAmzCredential = "et";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "velit";
            }};            

            DescribeProvisioningArtifactResponse res = sdk.sdk.describeProvisioningArtifact(req);

            if (res.describeProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProvisioningParameters

<p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProvisioningParametersRequest;
import org.openapis.openapi.models.operations.DescribeProvisioningParametersResponse;
import org.openapis.openapi.models.operations.DescribeProvisioningParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProvisioningParametersInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProvisioningParametersRequest req = new DescribeProvisioningParametersRequest(                new DescribeProvisioningParametersInput() {{
                                acceptLanguage = "autem";
                                pathId = "nobis";
                                pathName = "quas";
                                productId = "assumenda";
                                productName = "nulla";
                                provisioningArtifactId = "voluptas";
                                provisioningArtifactName = "libero";
                            }};, DescribeProvisioningParametersXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PROVISIONING_PARAMETERS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "numquam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "provident";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "molestiae";
            }};            

            DescribeProvisioningParametersResponse res = sdk.sdk.describeProvisioningParameters(req);

            if (res.describeProvisioningParametersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecord

<p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecordRequest;
import org.openapis.openapi.models.operations.DescribeRecordResponse;
import org.openapis.openapi.models.operations.DescribeRecordXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRecordInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecordRequest req = new DescribeRecordRequest(                new DescribeRecordInput("odio") {{
                                acceptLanguage = "eius";
                                pageSize = 458515L;
                                pageToken = "esse";
                            }};, DescribeRecordXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_RECORD) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "reprehenderit";
                xAmzDate = "quidem";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "eum";
            }};            

            DescribeRecordResponse res = sdk.sdk.describeRecord(req);

            if (res.describeRecordOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServiceAction

Describes a self-service action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServiceActionRequest;
import org.openapis.openapi.models.operations.DescribeServiceActionResponse;
import org.openapis.openapi.models.operations.DescribeServiceActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServiceActionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServiceActionRequest req = new DescribeServiceActionRequest(                new DescribeServiceActionInput("assumenda") {{
                                acceptLanguage = "eos";
                            }};, DescribeServiceActionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_SERVICE_ACTION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "id";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "neque";
            }};            

            DescribeServiceActionResponse res = sdk.sdk.describeServiceAction(req);

            if (res.describeServiceActionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServiceActionExecutionParameters

Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServiceActionExecutionParametersRequest;
import org.openapis.openapi.models.operations.DescribeServiceActionExecutionParametersResponse;
import org.openapis.openapi.models.operations.DescribeServiceActionExecutionParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServiceActionExecutionParametersInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServiceActionExecutionParametersRequest req = new DescribeServiceActionExecutionParametersRequest(                new DescribeServiceActionExecutionParametersInput("illum", "quo") {{
                                acceptLanguage = "fuga";
                            }};, DescribeServiceActionExecutionParametersXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_SERVICE_ACTION_EXECUTION_PARAMETERS) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeServiceActionExecutionParametersResponse res = sdk.sdk.describeServiceActionExecutionParameters(req);

            if (res.describeServiceActionExecutionParametersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTagOption

Gets information about the specified TagOption.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTagOptionRequest;
import org.openapis.openapi.models.operations.DescribeTagOptionResponse;
import org.openapis.openapi.models.operations.DescribeTagOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTagOptionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTagOptionRequest req = new DescribeTagOptionRequest(                new DescribeTagOptionInput("ipsam");, DescribeTagOptionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_TAG_OPTION) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "quo";
                xAmzDate = "esse";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeTagOptionResponse res = sdk.sdk.describeTagOption(req);

            if (res.describeTagOptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableAWSOrganizationsAccess

<p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableAWSOrganizationsAccessRequest;
import org.openapis.openapi.models.operations.DisableAWSOrganizationsAccessResponse;
import org.openapis.openapi.models.operations.DisableAWSOrganizationsAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableAWSOrganizationsAccessRequest req = new DisableAWSOrganizationsAccessRequest(                new java.util.HashMap<String, Object>() {{
                                put("inventore", "nihil");
                                put("totam", "accusamus");
                            }}, DisableAWSOrganizationsAccessXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DISABLE_AWS_ORGANIZATIONS_ACCESS) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "commodi";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "deserunt";
            }};            

            DisableAWSOrganizationsAccessResponse res = sdk.sdk.disableAWSOrganizationsAccess(req);

            if (res.disableAWSOrganizationsAccessOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateBudgetFromResource

Disassociates the specified budget from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateBudgetFromResourceRequest;
import org.openapis.openapi.models.operations.DisassociateBudgetFromResourceResponse;
import org.openapis.openapi.models.operations.DisassociateBudgetFromResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateBudgetFromResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateBudgetFromResourceRequest req = new DisassociateBudgetFromResourceRequest(                new DisassociateBudgetFromResourceInput("accusantium", "porro");, DisassociateBudgetFromResourceXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_BUDGET_FROM_RESOURCE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "praesentium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "fuga";
            }};            

            DisassociateBudgetFromResourceResponse res = sdk.sdk.disassociateBudgetFromResource(req);

            if (res.disassociateBudgetFromResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociatePrincipalFromPortfolio

<p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociatePrincipalFromPortfolioRequest;
import org.openapis.openapi.models.operations.DisassociatePrincipalFromPortfolioResponse;
import org.openapis.openapi.models.operations.DisassociatePrincipalFromPortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociatePrincipalFromPortfolioInput;
import org.openapis.openapi.models.shared.PrincipalTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociatePrincipalFromPortfolioRequest req = new DisassociatePrincipalFromPortfolioRequest(                new DisassociatePrincipalFromPortfolioInput("incidunt", "atque") {{
                                acceptLanguage = "explicabo";
                                principalType = PrincipalTypeEnum.IAM;
                            }};, DisassociatePrincipalFromPortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_PRINCIPAL_FROM_PORTFOLIO) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "sapiente";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "saepe";
            }};            

            DisassociatePrincipalFromPortfolioResponse res = sdk.sdk.disassociatePrincipalFromPortfolio(req);

            if (res.disassociatePrincipalFromPortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateProductFromPortfolio

<p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateProductFromPortfolioRequest;
import org.openapis.openapi.models.operations.DisassociateProductFromPortfolioResponse;
import org.openapis.openapi.models.operations.DisassociateProductFromPortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateProductFromPortfolioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateProductFromPortfolioRequest req = new DisassociateProductFromPortfolioRequest(                new DisassociateProductFromPortfolioInput("atque", "et") {{
                                acceptLanguage = "esse";
                            }};, DisassociateProductFromPortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_PRODUCT_FROM_PORTFOLIO) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "veritatis";
                xAmzDate = "esse";
                xAmzSecurityToken = "quod";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "vero";
            }};            

            DisassociateProductFromPortfolioResponse res = sdk.sdk.disassociateProductFromPortfolio(req);

            if (res.disassociateProductFromPortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateServiceActionFromProvisioningArtifact

Disassociates the specified self-service action association from the specified provisioning artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateServiceActionFromProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.DisassociateServiceActionFromProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateServiceActionFromProvisioningArtifactInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateServiceActionFromProvisioningArtifactRequest req = new DisassociateServiceActionFromProvisioningArtifactRequest(                new DisassociateServiceActionFromProvisioningArtifactInput("quasi", "saepe", "vel") {{
                                acceptLanguage = "harum";
                            }};, DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_SERVICE_ACTION_FROM_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "occaecati";
                xAmzDate = "minima";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sit";
            }};            

            DisassociateServiceActionFromProvisioningArtifactResponse res = sdk.sdk.disassociateServiceActionFromProvisioningArtifact(req);

            if (res.disassociateServiceActionFromProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateTagOptionFromResource

Disassociates the specified TagOption from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateTagOptionFromResourceRequest;
import org.openapis.openapi.models.operations.DisassociateTagOptionFromResourceResponse;
import org.openapis.openapi.models.operations.DisassociateTagOptionFromResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateTagOptionFromResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateTagOptionFromResourceRequest req = new DisassociateTagOptionFromResourceRequest(                new DisassociateTagOptionFromResourceInput("tempore", "adipisci");, DisassociateTagOptionFromResourceXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_TAG_OPTION_FROM_RESOURCE) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            DisassociateTagOptionFromResourceResponse res = sdk.sdk.disassociateTagOptionFromResource(req);

            if (res.disassociateTagOptionFromResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableAWSOrganizationsAccess

<p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableAWSOrganizationsAccessRequest;
import org.openapis.openapi.models.operations.EnableAWSOrganizationsAccessResponse;
import org.openapis.openapi.models.operations.EnableAWSOrganizationsAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableAWSOrganizationsAccessRequest req = new EnableAWSOrganizationsAccessRequest(                new java.util.HashMap<String, Object>() {{
                                put("provident", "a");
                                put("nulla", "quas");
                                put("esse", "quasi");
                            }}, EnableAWSOrganizationsAccessXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ENABLE_AWS_ORGANIZATIONS_ACCESS) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "error";
                xAmzCredential = "sint";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "eveniet";
            }};            

            EnableAWSOrganizationsAccessResponse res = sdk.sdk.enableAWSOrganizationsAccess(req);

            if (res.enableAWSOrganizationsAccessOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeProvisionedProductPlan

Provisions or modifies a product based on the resource changes for the specified plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteProvisionedProductPlanRequest;
import org.openapis.openapi.models.operations.ExecuteProvisionedProductPlanResponse;
import org.openapis.openapi.models.operations.ExecuteProvisionedProductPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecuteProvisionedProductPlanInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExecuteProvisionedProductPlanRequest req = new ExecuteProvisionedProductPlanRequest(                new ExecuteProvisionedProductPlanInput("facere", "veritatis") {{
                                acceptLanguage = "consequuntur";
                            }};, ExecuteProvisionedProductPlanXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_EXECUTE_PROVISIONED_PRODUCT_PLAN) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
            }};            

            ExecuteProvisionedProductPlanResponse res = sdk.sdk.executeProvisionedProductPlan(req);

            if (res.executeProvisionedProductPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeProvisionedProductServiceAction

Executes a self-service action against a provisioned product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteProvisionedProductServiceActionRequest;
import org.openapis.openapi.models.operations.ExecuteProvisionedProductServiceActionResponse;
import org.openapis.openapi.models.operations.ExecuteProvisionedProductServiceActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecuteProvisionedProductServiceActionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExecuteProvisionedProductServiceActionRequest req = new ExecuteProvisionedProductServiceActionRequest(                new ExecuteProvisionedProductServiceActionInput("in", "eius", "libero") {{
                                acceptLanguage = "illum";
                                parameters = new java.util.HashMap<String, String[]>() {{
                                    put("accusantium", new String[]{{
                                        add("sapiente"),
                                        add("dicta"),
                                    }});
                                    put("ullam", new String[]{{
                                        add("ullam"),
                                        add("nisi"),
                                    }});
                                    put("aut", new String[]{{
                                        add("qui"),
                                        add("quibusdam"),
                                        add("ex"),
                                    }});
                                }};
                            }};, ExecuteProvisionedProductServiceActionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_EXECUTE_PROVISIONED_PRODUCT_SERVICE_ACTION) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quasi";
            }};            

            ExecuteProvisionedProductServiceActionResponse res = sdk.sdk.executeProvisionedProductServiceAction(req);

            if (res.executeProvisionedProductServiceActionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAWSOrganizationsAccessStatus

Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAWSOrganizationsAccessStatusRequest;
import org.openapis.openapi.models.operations.GetAWSOrganizationsAccessStatusResponse;
import org.openapis.openapi.models.operations.GetAWSOrganizationsAccessStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAWSOrganizationsAccessStatusRequest req = new GetAWSOrganizationsAccessStatusRequest(                new java.util.HashMap<String, Object>() {{
                                put("voluptate", "ipsa");
                            }}, GetAWSOrganizationsAccessStatusXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_GET_AWS_ORGANIZATIONS_ACCESS_STATUS) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "consectetur";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "iste";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetAWSOrganizationsAccessStatusResponse res = sdk.sdk.getAWSOrganizationsAccessStatus(req);

            if (res.getAWSOrganizationsAccessStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvisionedProductOutputs

This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvisionedProductOutputsRequest;
import org.openapis.openapi.models.operations.GetProvisionedProductOutputsResponse;
import org.openapis.openapi.models.operations.GetProvisionedProductOutputsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetProvisionedProductOutputsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProvisionedProductOutputsRequest req = new GetProvisionedProductOutputsRequest(                new GetProvisionedProductOutputsInput() {{
                                acceptLanguage = "aut";
                                outputKeys = new String[]{{
                                    add("eum"),
                                    add("mollitia"),
                                    add("ab"),
                                }};
                                pageSize = 544591L;
                                pageToken = "non";
                                provisionedProductId = "voluptatem";
                                provisionedProductName = "dolor";
                            }};, GetProvisionedProductOutputsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_GET_PROVISIONED_PRODUCT_OUTPUTS) {{
                pageSize = "occaecati";
                pageToken = "numquam";
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "aut";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "maiores";
            }};            

            GetProvisionedProductOutputsResponse res = sdk.sdk.getProvisionedProductOutputs(req);

            if (res.getProvisionedProductOutputsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importAsProvisionedProduct

<p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportAsProvisionedProductRequest;
import org.openapis.openapi.models.operations.ImportAsProvisionedProductResponse;
import org.openapis.openapi.models.operations.ImportAsProvisionedProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportAsProvisionedProductInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportAsProvisionedProductRequest req = new ImportAsProvisionedProductRequest(                new ImportAsProvisionedProductInput("velit", "voluptatibus", "voluptas", "asperiores", "aperiam") {{
                                acceptLanguage = "ea";
                            }};, ImportAsProvisionedProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_IMPORT_AS_PROVISIONED_PRODUCT) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellendus";
                xAmzDate = "officia";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "officia";
            }};            

            ImportAsProvisionedProductResponse res = sdk.sdk.importAsProvisionedProduct(req);

            if (res.importAsProvisionedProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAcceptedPortfolioShares

Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAcceptedPortfolioSharesRequest;
import org.openapis.openapi.models.operations.ListAcceptedPortfolioSharesResponse;
import org.openapis.openapi.models.operations.ListAcceptedPortfolioSharesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAcceptedPortfolioSharesInput;
import org.openapis.openapi.models.shared.PortfolioShareTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAcceptedPortfolioSharesRequest req = new ListAcceptedPortfolioSharesRequest(                new ListAcceptedPortfolioSharesInput() {{
                                acceptLanguage = "nemo";
                                pageSize = 65304L;
                                pageToken = "quaerat";
                                portfolioShareType = PortfolioShareTypeEnum.AWS_ORGANIZATIONS;
                            }};, ListAcceptedPortfolioSharesXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_ACCEPTED_PORTFOLIO_SHARES) {{
                pageSize = "quod";
                pageToken = "labore";
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "fuga";
                xAmzDate = "id";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "culpa";
            }};            

            ListAcceptedPortfolioSharesResponse res = sdk.sdk.listAcceptedPortfolioShares(req);

            if (res.listAcceptedPortfolioSharesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBudgetsForResource

Lists all the budgets associated to the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBudgetsForResourceRequest;
import org.openapis.openapi.models.operations.ListBudgetsForResourceResponse;
import org.openapis.openapi.models.operations.ListBudgetsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBudgetsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBudgetsForResourceRequest req = new ListBudgetsForResourceRequest(                new ListBudgetsForResourceInput("recusandae") {{
                                acceptLanguage = "totam";
                                pageSize = 853940L;
                                pageToken = "vel";
                            }};, ListBudgetsForResourceXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_BUDGETS_FOR_RESOURCE) {{
                pageSize = "ducimus";
                pageToken = "quos";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "labore";
                xAmzCredential = "possimus";
                xAmzDate = "facilis";
                xAmzSecurityToken = "cum";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "in";
            }};            

            ListBudgetsForResourceResponse res = sdk.sdk.listBudgetsForResource(req);

            if (res.listBudgetsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConstraintsForPortfolio

Lists the constraints for the specified portfolio and product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConstraintsForPortfolioRequest;
import org.openapis.openapi.models.operations.ListConstraintsForPortfolioResponse;
import org.openapis.openapi.models.operations.ListConstraintsForPortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListConstraintsForPortfolioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConstraintsForPortfolioRequest req = new ListConstraintsForPortfolioRequest(                new ListConstraintsForPortfolioInput("reiciendis") {{
                                acceptLanguage = "assumenda";
                                pageSize = 363161L;
                                pageToken = "recusandae";
                                productId = "aliquid";
                            }};, ListConstraintsForPortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_CONSTRAINTS_FOR_PORTFOLIO) {{
                pageSize = "aperiam";
                pageToken = "cum";
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "in";
                xAmzCredential = "exercitationem";
                xAmzDate = "earum";
                xAmzSecurityToken = "facere";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListConstraintsForPortfolioResponse res = sdk.sdk.listConstraintsForPortfolio(req);

            if (res.listConstraintsForPortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLaunchPaths

<p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLaunchPathsRequest;
import org.openapis.openapi.models.operations.ListLaunchPathsResponse;
import org.openapis.openapi.models.operations.ListLaunchPathsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLaunchPathsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLaunchPathsRequest req = new ListLaunchPathsRequest(                new ListLaunchPathsInput("reiciendis") {{
                                acceptLanguage = "quidem";
                                pageSize = 904949L;
                                pageToken = "necessitatibus";
                            }};, ListLaunchPathsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_LAUNCH_PATHS) {{
                pageSize = "dolore";
                pageToken = "sunt";
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "non";
                xAmzDate = "amet";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "a";
            }};            

            ListLaunchPathsResponse res = sdk.sdk.listLaunchPaths(req);

            if (res.listLaunchPathsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrganizationPortfolioAccess

<p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrganizationPortfolioAccessRequest;
import org.openapis.openapi.models.operations.ListOrganizationPortfolioAccessResponse;
import org.openapis.openapi.models.operations.ListOrganizationPortfolioAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOrganizationPortfolioAccessInput;
import org.openapis.openapi.models.shared.OrganizationNodeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrganizationPortfolioAccessRequest req = new ListOrganizationPortfolioAccessRequest(                new ListOrganizationPortfolioAccessInput(OrganizationNodeTypeEnum.ORGANIZATION, "corporis") {{
                                acceptLanguage = "harum";
                                pageSize = 385237L;
                                pageToken = "ipsa";
                            }};, ListOrganizationPortfolioAccessXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_ORGANIZATION_PORTFOLIO_ACCESS) {{
                pageSize = "voluptates";
                pageToken = "libero";
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "similique";
                xAmzDate = "tempora";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "voluptas";
            }};            

            ListOrganizationPortfolioAccessResponse res = sdk.sdk.listOrganizationPortfolioAccess(req);

            if (res.listOrganizationPortfolioAccessOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPortfolioAccess

<p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPortfolioAccessRequest;
import org.openapis.openapi.models.operations.ListPortfolioAccessResponse;
import org.openapis.openapi.models.operations.ListPortfolioAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPortfolioAccessInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPortfolioAccessRequest req = new ListPortfolioAccessRequest(                new ListPortfolioAccessInput("minima") {{
                                acceptLanguage = "nobis";
                                organizationParentId = "dolorum";
                                pageSize = 237807L;
                                pageToken = "minus";
                            }};, ListPortfolioAccessXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_PORTFOLIO_ACCESS) {{
                pageSize = "dolores";
                pageToken = "blanditiis";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "aliquam";
                xAmzDate = "officiis";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "adipisci";
            }};            

            ListPortfolioAccessResponse res = sdk.sdk.listPortfolioAccess(req);

            if (res.listPortfolioAccessOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPortfolios

Lists all portfolios in the catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPortfoliosRequest;
import org.openapis.openapi.models.operations.ListPortfoliosResponse;
import org.openapis.openapi.models.operations.ListPortfoliosXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPortfoliosInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPortfoliosRequest req = new ListPortfoliosRequest(                new ListPortfoliosInput() {{
                                acceptLanguage = "blanditiis";
                                pageSize = 555361L;
                                pageToken = "hic";
                            }};, ListPortfoliosXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_PORTFOLIOS) {{
                pageSize = "nesciunt";
                pageToken = "culpa";
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "totam";
                xAmzDate = "hic";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "sit";
            }};            

            ListPortfoliosResponse res = sdk.sdk.listPortfolios(req);

            if (res.listPortfoliosOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPortfoliosForProduct

Lists all portfolios that the specified product is associated with.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPortfoliosForProductRequest;
import org.openapis.openapi.models.operations.ListPortfoliosForProductResponse;
import org.openapis.openapi.models.operations.ListPortfoliosForProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPortfoliosForProductInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPortfoliosForProductRequest req = new ListPortfoliosForProductRequest(                new ListPortfoliosForProductInput("sed") {{
                                acceptLanguage = "reiciendis";
                                pageSize = 131852L;
                                pageToken = "asperiores";
                            }};, ListPortfoliosForProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_PORTFOLIOS_FOR_PRODUCT) {{
                pageSize = "facilis";
                pageToken = "voluptate";
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "ab";
                xAmzCredential = "iste";
                xAmzDate = "dolore";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "in";
            }};            

            ListPortfoliosForProductResponse res = sdk.sdk.listPortfoliosForProduct(req);

            if (res.listPortfoliosForProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPrincipalsForPortfolio

Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPrincipalsForPortfolioRequest;
import org.openapis.openapi.models.operations.ListPrincipalsForPortfolioResponse;
import org.openapis.openapi.models.operations.ListPrincipalsForPortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPrincipalsForPortfolioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPrincipalsForPortfolioRequest req = new ListPrincipalsForPortfolioRequest(                new ListPrincipalsForPortfolioInput("quidem") {{
                                acceptLanguage = "explicabo";
                                pageSize = 378326L;
                                pageToken = "unde";
                            }};, ListPrincipalsForPortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_PRINCIPALS_FOR_PORTFOLIO) {{
                pageSize = "architecto";
                pageToken = "suscipit";
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "illo";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "maiores";
            }};            

            ListPrincipalsForPortfolioResponse res = sdk.sdk.listPrincipalsForPortfolio(req);

            if (res.listPrincipalsForPortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProvisionedProductPlans

Lists the plans for the specified provisioned product or all plans to which the user has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProvisionedProductPlansRequest;
import org.openapis.openapi.models.operations.ListProvisionedProductPlansResponse;
import org.openapis.openapi.models.operations.ListProvisionedProductPlansXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessLevelFilter;
import org.openapis.openapi.models.shared.AccessLevelFilterKeyEnum;
import org.openapis.openapi.models.shared.ListProvisionedProductPlansInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProvisionedProductPlansRequest req = new ListProvisionedProductPlansRequest(                new ListProvisionedProductPlansInput() {{
                                acceptLanguage = "sed";
                                accessLevelFilter = new AccessLevelFilter() {{
                                    key = AccessLevelFilterKeyEnum.ROLE;
                                    value = "eius";
                                }};;
                                pageSize = 896762L;
                                pageToken = "ipsum";
                                provisionProductId = "ea";
                            }};, ListProvisionedProductPlansXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONED_PRODUCT_PLANS) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "quos";
                xAmzCredential = "voluptatibus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListProvisionedProductPlansResponse res = sdk.sdk.listProvisionedProductPlans(req);

            if (res.listProvisionedProductPlansOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProvisioningArtifacts

Lists all provisioning artifacts (also known as versions) for the specified product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProvisioningArtifactsRequest;
import org.openapis.openapi.models.operations.ListProvisioningArtifactsResponse;
import org.openapis.openapi.models.operations.ListProvisioningArtifactsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProvisioningArtifactsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProvisioningArtifactsRequest req = new ListProvisioningArtifactsRequest(                new ListProvisioningArtifactsInput("sit") {{
                                acceptLanguage = "non";
                            }};, ListProvisioningArtifactsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONING_ARTIFACTS) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "facilis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "debitis";
            }};            

            ListProvisioningArtifactsResponse res = sdk.sdk.listProvisioningArtifacts(req);

            if (res.listProvisioningArtifactsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProvisioningArtifactsForServiceAction

Lists all provisioning artifacts (also known as versions) for the specified self-service action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProvisioningArtifactsForServiceActionRequest;
import org.openapis.openapi.models.operations.ListProvisioningArtifactsForServiceActionResponse;
import org.openapis.openapi.models.operations.ListProvisioningArtifactsForServiceActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProvisioningArtifactsForServiceActionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProvisioningArtifactsForServiceActionRequest req = new ListProvisioningArtifactsForServiceActionRequest(                new ListProvisioningArtifactsForServiceActionInput("sit") {{
                                acceptLanguage = "nobis";
                                pageSize = 625637L;
                                pageToken = "veniam";
                            }};, ListProvisioningArtifactsForServiceActionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONING_ARTIFACTS_FOR_SERVICE_ACTION) {{
                pageSize = "minima";
                pageToken = "recusandae";
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "magni";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veniam";
            }};            

            ListProvisioningArtifactsForServiceActionResponse res = sdk.sdk.listProvisioningArtifactsForServiceAction(req);

            if (res.listProvisioningArtifactsForServiceActionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecordHistory

Lists the specified requests or all performed requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecordHistoryRequest;
import org.openapis.openapi.models.operations.ListRecordHistoryResponse;
import org.openapis.openapi.models.operations.ListRecordHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessLevelFilter;
import org.openapis.openapi.models.shared.AccessLevelFilterKeyEnum;
import org.openapis.openapi.models.shared.ListRecordHistoryInput;
import org.openapis.openapi.models.shared.ListRecordHistorySearchFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecordHistoryRequest req = new ListRecordHistoryRequest(                new ListRecordHistoryInput() {{
                                acceptLanguage = "officiis";
                                accessLevelFilter = new AccessLevelFilter() {{
                                    key = AccessLevelFilterKeyEnum.ACCOUNT;
                                    value = "laudantium";
                                }};;
                                pageSize = 348476L;
                                pageToken = "praesentium";
                                searchFilter = new ListRecordHistorySearchFilter() {{
                                    key = "cum";
                                    value = "laboriosam";
                                }};;
                            }};, ListRecordHistoryXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_RECORD_HISTORY) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "error";
                xAmzDate = "hic";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "neque";
            }};            

            ListRecordHistoryResponse res = sdk.sdk.listRecordHistory(req);

            if (res.listRecordHistoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourcesForTagOption

Lists the resources associated with the specified TagOption.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesForTagOptionRequest;
import org.openapis.openapi.models.operations.ListResourcesForTagOptionResponse;
import org.openapis.openapi.models.operations.ListResourcesForTagOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourcesForTagOptionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesForTagOptionRequest req = new ListResourcesForTagOptionRequest(                new ListResourcesForTagOptionInput("nostrum") {{
                                pageSize = 639028L;
                                pageToken = "dolorum";
                                resourceType = "corrupti";
                            }};, ListResourcesForTagOptionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_RESOURCES_FOR_TAG_OPTION) {{
                pageSize = "accusamus";
                pageToken = "tempora";
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "ut";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "expedita";
            }};            

            ListResourcesForTagOptionResponse res = sdk.sdk.listResourcesForTagOption(req);

            if (res.listResourcesForTagOptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceActions

Lists all self-service actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceActionsRequest;
import org.openapis.openapi.models.operations.ListServiceActionsResponse;
import org.openapis.openapi.models.operations.ListServiceActionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceActionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceActionsRequest req = new ListServiceActionsRequest(                new ListServiceActionsInput() {{
                                acceptLanguage = "consequatur";
                                pageSize = 460220L;
                                pageToken = "ipsam";
                            }};, ListServiceActionsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_SERVICE_ACTIONS) {{
                pageSize = "sit";
                pageToken = "voluptatum";
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "corporis";
                xAmzDate = "et";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "sed";
            }};            

            ListServiceActionsResponse res = sdk.sdk.listServiceActions(req);

            if (res.listServiceActionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceActionsForProvisioningArtifact

Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceActionsForProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.ListServiceActionsForProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.ListServiceActionsForProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceActionsForProvisioningArtifactInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceActionsForProvisioningArtifactRequest req = new ListServiceActionsForProvisioningArtifactRequest(                new ListServiceActionsForProvisioningArtifactInput("vel", "nostrum") {{
                                acceptLanguage = "saepe";
                                pageSize = 622231L;
                                pageToken = "consequatur";
                            }};, ListServiceActionsForProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_SERVICE_ACTIONS_FOR_PROVISIONING_ARTIFACT) {{
                pageSize = "incidunt";
                pageToken = "reiciendis";
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "harum";
                xAmzCredential = "dicta";
                xAmzDate = "architecto";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "quidem";
            }};            

            ListServiceActionsForProvisioningArtifactResponse res = sdk.sdk.listServiceActionsForProvisioningArtifact(req);

            if (res.listServiceActionsForProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStackInstancesForProvisionedProduct

Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStackInstancesForProvisionedProductRequest;
import org.openapis.openapi.models.operations.ListStackInstancesForProvisionedProductResponse;
import org.openapis.openapi.models.operations.ListStackInstancesForProvisionedProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListStackInstancesForProvisionedProductInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStackInstancesForProvisionedProductRequest req = new ListStackInstancesForProvisionedProductRequest(                new ListStackInstancesForProvisionedProductInput("laborum") {{
                                acceptLanguage = "nam";
                                pageSize = 948861L;
                                pageToken = "laboriosam";
                            }};, ListStackInstancesForProvisionedProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_STACK_INSTANCES_FOR_PROVISIONED_PRODUCT) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "unde";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "provident";
            }};            

            ListStackInstancesForProvisionedProductResponse res = sdk.sdk.listStackInstancesForProvisionedProduct(req);

            if (res.listStackInstancesForProvisionedProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagOptions

Lists the specified TagOptions or all TagOptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagOptionsRequest;
import org.openapis.openapi.models.operations.ListTagOptionsResponse;
import org.openapis.openapi.models.operations.ListTagOptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagOptionsFilters;
import org.openapis.openapi.models.shared.ListTagOptionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagOptionsRequest req = new ListTagOptionsRequest(                new ListTagOptionsInput() {{
                                filters = new ListTagOptionsFilters() {{
                                    active = false;
                                    key = "delectus";
                                    value = "voluptates";
                                }};;
                                pageSize = 16871L;
                                pageToken = "est";
                            }};, ListTagOptionsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_LIST_TAG_OPTIONS) {{
                pageSize = "quidem";
                pageToken = "reprehenderit";
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "praesentium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "quisquam";
            }};            

            ListTagOptionsResponse res = sdk.sdk.listTagOptions(req);

            if (res.listTagOptionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyProvisionProductEngineWorkflowResult

 Notifies the result of the provisioning engine execution. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyProvisionProductEngineWorkflowResultRequest;
import org.openapis.openapi.models.operations.NotifyProvisionProductEngineWorkflowResultResponse;
import org.openapis.openapi.models.operations.NotifyProvisionProductEngineWorkflowResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.EngineWorkflowResourceIdentifier;
import org.openapis.openapi.models.shared.EngineWorkflowStatusEnum;
import org.openapis.openapi.models.shared.NotifyProvisionProductEngineWorkflowResultInput;
import org.openapis.openapi.models.shared.RecordOutput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UniqueTagResourceIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyProvisionProductEngineWorkflowResultRequest req = new NotifyProvisionProductEngineWorkflowResultRequest(                new NotifyProvisionProductEngineWorkflowResultInput("quasi", "atque", EngineWorkflowStatusEnum.SUCCEEDED, "asperiores") {{
                                failureReason = "totam";
                                outputs = new org.openapis.openapi.models.shared.RecordOutput[]{{
                                    add(new RecordOutput() {{
                                        description = "quidem";
                                        outputKey = "maxime";
                                        outputValue = "et";
                                    }}),
                                    add(new RecordOutput() {{
                                        description = "esse";
                                        outputKey = "amet";
                                        outputValue = "assumenda";
                                    }}),
                                }};
                                resourceIdentifier = new EngineWorkflowResourceIdentifier() {{
                                    uniqueTag = new UniqueTagResourceIdentifier() {{
                                        key = "ea";
                                        value = "atque";
                                    }};;
                                }};;
                            }};, NotifyProvisionProductEngineWorkflowResultXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_NOTIFY_PROVISION_PRODUCT_ENGINE_WORKFLOW_RESULT) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "officiis";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "natus";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "aspernatur";
            }};            

            NotifyProvisionProductEngineWorkflowResultResponse res = sdk.sdk.notifyProvisionProductEngineWorkflowResult(req);

            if (res.notifyProvisionProductEngineWorkflowResultOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyTerminateProvisionedProductEngineWorkflowResult

 Notifies the result of the terminate engine execution. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyTerminateProvisionedProductEngineWorkflowResultRequest;
import org.openapis.openapi.models.operations.NotifyTerminateProvisionedProductEngineWorkflowResultResponse;
import org.openapis.openapi.models.operations.NotifyTerminateProvisionedProductEngineWorkflowResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.EngineWorkflowStatusEnum;
import org.openapis.openapi.models.shared.NotifyTerminateProvisionedProductEngineWorkflowResultInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyTerminateProvisionedProductEngineWorkflowResultRequest req = new NotifyTerminateProvisionedProductEngineWorkflowResultRequest(                new NotifyTerminateProvisionedProductEngineWorkflowResultInput("maiores", "corrupti", EngineWorkflowStatusEnum.FAILED, "error") {{
                                failureReason = "blanditiis";
                            }};, NotifyTerminateProvisionedProductEngineWorkflowResultXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_NOTIFY_TERMINATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "atque";
                xAmzDate = "atque";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "dolorum";
            }};            

            NotifyTerminateProvisionedProductEngineWorkflowResultResponse res = sdk.sdk.notifyTerminateProvisionedProductEngineWorkflowResult(req);

            if (res.notifyTerminateProvisionedProductEngineWorkflowResultOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyUpdateProvisionedProductEngineWorkflowResult

 Notifies the result of the update engine execution. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyUpdateProvisionedProductEngineWorkflowResultRequest;
import org.openapis.openapi.models.operations.NotifyUpdateProvisionedProductEngineWorkflowResultResponse;
import org.openapis.openapi.models.operations.NotifyUpdateProvisionedProductEngineWorkflowResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.EngineWorkflowStatusEnum;
import org.openapis.openapi.models.shared.NotifyUpdateProvisionedProductEngineWorkflowResultInput;
import org.openapis.openapi.models.shared.RecordOutput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyUpdateProvisionedProductEngineWorkflowResultRequest req = new NotifyUpdateProvisionedProductEngineWorkflowResultRequest(                new NotifyUpdateProvisionedProductEngineWorkflowResultInput("labore", "reiciendis", EngineWorkflowStatusEnum.SUCCEEDED, "repudiandae") {{
                                failureReason = "dicta";
                                outputs = new org.openapis.openapi.models.shared.RecordOutput[]{{
                                    add(new RecordOutput() {{
                                        description = "beatae";
                                        outputKey = "dolores";
                                        outputValue = "enim";
                                    }}),
                                }};
                            }};, NotifyUpdateProvisionedProductEngineWorkflowResultXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_NOTIFY_UPDATE_PROVISIONED_PRODUCT_ENGINE_WORKFLOW_RESULT) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "velit";
                xAmzCredential = "a";
                xAmzDate = "molestias";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "consequuntur";
            }};            

            NotifyUpdateProvisionedProductEngineWorkflowResultResponse res = sdk.sdk.notifyUpdateProvisionedProductEngineWorkflowResult(req);

            if (res.notifyUpdateProvisionedProductEngineWorkflowResultOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provisionProduct

<p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvisionProductRequest;
import org.openapis.openapi.models.operations.ProvisionProductResponse;
import org.openapis.openapi.models.operations.ProvisionProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProvisionProductInput;
import org.openapis.openapi.models.shared.ProvisioningParameter;
import org.openapis.openapi.models.shared.ProvisioningPreferences;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProvisionProductRequest req = new ProvisionProductRequest(                new ProvisionProductInput("officiis", "perspiciatis") {{
                                acceptLanguage = "in";
                                notificationArns = new String[]{{
                                    add("eveniet"),
                                }};
                                pathId = "occaecati";
                                pathName = "consequuntur";
                                productId = "fugit";
                                productName = "id";
                                provisioningArtifactId = "quis";
                                provisioningArtifactName = "reprehenderit";
                                provisioningParameters = new org.openapis.openapi.models.shared.ProvisioningParameter[]{{
                                    add(new ProvisioningParameter() {{
                                        key = "illo";
                                        value = "corporis";
                                    }}),
                                    add(new ProvisioningParameter() {{
                                        key = "quidem";
                                        value = "eveniet";
                                    }}),
                                    add(new ProvisioningParameter() {{
                                        key = "non";
                                        value = "vero";
                                    }}),
                                }};
                                provisioningPreferences = new ProvisioningPreferences() {{
                                    stackSetAccounts = new String[]{{
                                        add("iure"),
                                    }};
                                    stackSetFailureToleranceCount = 59944L;
                                    stackSetFailureTolerancePercentage = 517612L;
                                    stackSetMaxConcurrencyCount = 61078L;
                                    stackSetMaxConcurrencyPercentage = 474668L;
                                    stackSetRegions = new String[]{{
                                        add("qui"),
                                        add("cum"),
                                        add("iure"),
                                        add("necessitatibus"),
                                    }};
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("voluptatum", "rem") {{
                                        key = "laborum";
                                        value = "distinctio";
                                    }}),
                                }};
                            }};, ProvisionProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_PROVISION_PRODUCT) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "ad";
                xAmzCredential = "repellat";
                xAmzDate = "alias";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "nihil";
            }};            

            ProvisionProductResponse res = sdk.sdk.provisionProduct(req);

            if (res.provisionProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectPortfolioShare

Rejects an offer to share the specified portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectPortfolioShareRequest;
import org.openapis.openapi.models.operations.RejectPortfolioShareResponse;
import org.openapis.openapi.models.operations.RejectPortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.shared.PortfolioShareTypeEnum;
import org.openapis.openapi.models.shared.RejectPortfolioShareInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectPortfolioShareRequest req = new RejectPortfolioShareRequest(                new RejectPortfolioShareInput("voluptas") {{
                                acceptLanguage = "alias";
                                portfolioShareType = PortfolioShareTypeEnum.AWS_ORGANIZATIONS;
                            }};, RejectPortfolioShareXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_REJECT_PORTFOLIO_SHARE) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "id";
                xAmzDate = "minima";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "nesciunt";
            }};            

            RejectPortfolioShareResponse res = sdk.sdk.rejectPortfolioShare(req);

            if (res.rejectPortfolioShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scanProvisionedProducts

<p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScanProvisionedProductsRequest;
import org.openapis.openapi.models.operations.ScanProvisionedProductsResponse;
import org.openapis.openapi.models.operations.ScanProvisionedProductsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessLevelFilter;
import org.openapis.openapi.models.shared.AccessLevelFilterKeyEnum;
import org.openapis.openapi.models.shared.ScanProvisionedProductsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScanProvisionedProductsRequest req = new ScanProvisionedProductsRequest(                new ScanProvisionedProductsInput() {{
                                acceptLanguage = "recusandae";
                                accessLevelFilter = new AccessLevelFilter() {{
                                    key = AccessLevelFilterKeyEnum.ROLE;
                                    value = "quaerat";
                                }};;
                                pageSize = 477646L;
                                pageToken = "ex";
                            }};, ScanProvisionedProductsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_SCAN_PROVISIONED_PRODUCTS) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "adipisci";
                xAmzDate = "debitis";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "nemo";
            }};            

            ScanProvisionedProductsResponse res = sdk.sdk.scanProvisionedProducts(req);

            if (res.scanProvisionedProductsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchProducts

Gets information about the products to which the caller has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProductsRequest;
import org.openapis.openapi.models.operations.SearchProductsResponse;
import org.openapis.openapi.models.operations.SearchProductsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProductViewSortByEnum;
import org.openapis.openapi.models.shared.SearchProductsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchProductsRequest req = new SearchProductsRequest(                new SearchProductsInput() {{
                                acceptLanguage = "esse";
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("quis", new String[]{{
                                        add("reiciendis"),
                                        add("provident"),
                                    }});
                                    put("aspernatur", new String[]{{
                                        add("quasi"),
                                        add("animi"),
                                    }});
                                    put("nostrum", new String[]{{
                                        add("provident"),
                                        add("possimus"),
                                        add("animi"),
                                    }});
                                }};
                                pageSize = 402767L;
                                pageToken = "aliquid";
                                sortBy = ProductViewSortByEnum.TITLE;
                                sortOrder = SortOrderEnum.DESCENDING;
                            }};, SearchProductsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PRODUCTS) {{
                pageSize = "doloribus";
                pageToken = "ullam";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "nam";
                xAmzCredential = "earum";
                xAmzDate = "officia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "modi";
            }};            

            SearchProductsResponse res = sdk.sdk.searchProducts(req);

            if (res.searchProductsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchProductsAsAdmin

Gets information about the products for the specified portfolio or all products.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProductsAsAdminRequest;
import org.openapis.openapi.models.operations.SearchProductsAsAdminResponse;
import org.openapis.openapi.models.operations.SearchProductsAsAdminXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProductSourceEnum;
import org.openapis.openapi.models.shared.ProductViewSortByEnum;
import org.openapis.openapi.models.shared.SearchProductsAsAdminInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchProductsAsAdminRequest req = new SearchProductsAsAdminRequest(                new SearchProductsAsAdminInput() {{
                                acceptLanguage = "molestias";
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("sapiente", new String[]{{
                                        add("vitae"),
                                        add("rerum"),
                                        add("tempora"),
                                        add("quis"),
                                    }});
                                    put("inventore", new String[]{{
                                        add("cumque"),
                                    }});
                                    put("quae", new String[]{{
                                        add("velit"),
                                    }});
                                    put("aspernatur", new String[]{{
                                        add("eius"),
                                        add("rem"),
                                    }});
                                }};
                                pageSize = 871083L;
                                pageToken = "impedit";
                                portfolioId = "eos";
                                productSource = ProductSourceEnum.ACCOUNT;
                                sortBy = ProductViewSortByEnum.CREATION_DATE;
                                sortOrder = SortOrderEnum.ASCENDING;
                            }};, SearchProductsAsAdminXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PRODUCTS_AS_ADMIN) {{
                pageSize = "dicta";
                pageToken = "minima";
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "provident";
                xAmzDate = "earum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "illum";
            }};            

            SearchProductsAsAdminResponse res = sdk.sdk.searchProductsAsAdmin(req);

            if (res.searchProductsAsAdminOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchProvisionedProducts

Gets information about the provisioned products that meet the specified criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProvisionedProductsRequest;
import org.openapis.openapi.models.operations.SearchProvisionedProductsResponse;
import org.openapis.openapi.models.operations.SearchProvisionedProductsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessLevelFilter;
import org.openapis.openapi.models.shared.AccessLevelFilterKeyEnum;
import org.openapis.openapi.models.shared.SearchProvisionedProductsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchProvisionedProductsRequest req = new SearchProvisionedProductsRequest(                new SearchProvisionedProductsInput() {{
                                acceptLanguage = "earum";
                                accessLevelFilter = new AccessLevelFilter() {{
                                    key = AccessLevelFilterKeyEnum.ROLE;
                                    value = "maiores";
                                }};;
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("aliquid", new String[]{{
                                        add("suscipit"),
                                        add("dolorem"),
                                        add("fugit"),
                                        add("cumque"),
                                    }});
                                    put("fuga", new String[]{{
                                        add("animi"),
                                    }});
                                    put("necessitatibus", new String[]{{
                                        add("consequatur"),
                                        add("quasi"),
                                        add("et"),
                                        add("ducimus"),
                                    }});
                                    put("natus", new String[]{{
                                        add("suscipit"),
                                        add("adipisci"),
                                        add("quasi"),
                                    }});
                                }};
                                pageSize = 169025L;
                                pageToken = "doloribus";
                                sortBy = "nulla";
                                sortOrder = SortOrderEnum.DESCENDING;
                            }};, SearchProvisionedProductsXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PROVISIONED_PRODUCTS) {{
                pageSize = "ipsa";
                pageToken = "tempora";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "dicta";
                xAmzDate = "iusto";
                xAmzSecurityToken = "esse";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "maiores";
            }};            

            SearchProvisionedProductsResponse res = sdk.sdk.searchProvisionedProducts(req);

            if (res.searchProvisionedProductsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateProvisionedProduct

<p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateProvisionedProductRequest;
import org.openapis.openapi.models.operations.TerminateProvisionedProductResponse;
import org.openapis.openapi.models.operations.TerminateProvisionedProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateProvisionedProductInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateProvisionedProductRequest req = new TerminateProvisionedProductRequest(                new TerminateProvisionedProductInput("vel") {{
                                acceptLanguage = "architecto";
                                ignoreErrors = false;
                                provisionedProductId = "fugiat";
                                provisionedProductName = "doloremque";
                                retainPhysicalResources = false;
                            }};, TerminateProvisionedProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_TERMINATE_PROVISIONED_PRODUCT) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "odio";
                xAmzCredential = "tempora";
                xAmzDate = "esse";
                xAmzSecurityToken = "ex";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "aliquid";
            }};            

            TerminateProvisionedProductResponse res = sdk.sdk.terminateProvisionedProduct(req);

            if (res.terminateProvisionedProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConstraint

Updates the specified constraint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConstraintRequest;
import org.openapis.openapi.models.operations.UpdateConstraintResponse;
import org.openapis.openapi.models.operations.UpdateConstraintXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConstraintInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConstraintRequest req = new UpdateConstraintRequest(                new UpdateConstraintInput("laborum") {{
                                acceptLanguage = "sunt";
                                description = "nostrum";
                                parameters = "fugiat";
                            }};, UpdateConstraintXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_CONSTRAINT) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "officia";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "eum";
            }};            

            UpdateConstraintResponse res = sdk.sdk.updateConstraint(req);

            if (res.updateConstraintOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePortfolio

<p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePortfolioRequest;
import org.openapis.openapi.models.operations.UpdatePortfolioResponse;
import org.openapis.openapi.models.operations.UpdatePortfolioXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdatePortfolioInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePortfolioRequest req = new UpdatePortfolioRequest(                new UpdatePortfolioInput("iste") {{
                                acceptLanguage = "id";
                                addTags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("voluptates", "mollitia") {{
                                        key = "error";
                                        value = "possimus";
                                    }}),
                                }};
                                description = "laborum";
                                displayName = "libero";
                                providerName = "ad";
                                removeTags = new String[]{{
                                    add("enim"),
                                    add("vitae"),
                                    add("repellendus"),
                                }};
                            }};, UpdatePortfolioXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PORTFOLIO) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "quo";
                xAmzCredential = "ex";
                xAmzDate = "ut";
                xAmzSecurityToken = "ad";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "voluptatem";
            }};            

            UpdatePortfolioResponse res = sdk.sdk.updatePortfolio(req);

            if (res.updatePortfolioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePortfolioShare

<p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePortfolioShareRequest;
import org.openapis.openapi.models.operations.UpdatePortfolioShareResponse;
import org.openapis.openapi.models.operations.UpdatePortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.shared.OrganizationNode;
import org.openapis.openapi.models.shared.OrganizationNodeTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePortfolioShareInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePortfolioShareRequest req = new UpdatePortfolioShareRequest(                new UpdatePortfolioShareInput("cum") {{
                                acceptLanguage = "aliquid";
                                accountId = "beatae";
                                organizationNode = new OrganizationNode() {{
                                    type = OrganizationNodeTypeEnum.ORGANIZATIONAL_UNIT;
                                    value = "omnis";
                                }};;
                                sharePrincipals = false;
                                shareTagOptions = false;
                            }};, UpdatePortfolioShareXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PORTFOLIO_SHARE) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "est";
                xAmzDate = "culpa";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdatePortfolioShareResponse res = sdk.sdk.updatePortfolioShare(req);

            if (res.updatePortfolioShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProduct

Updates the specified product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProductRequest;
import org.openapis.openapi.models.operations.UpdateProductResponse;
import org.openapis.openapi.models.operations.UpdateProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.CodeStarParameters;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceConnection;
import org.openapis.openapi.models.shared.SourceConnectionParameters;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateProductInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProductRequest req = new UpdateProductRequest(                new UpdateProductInput("fuga") {{
                                acceptLanguage = "pariatur";
                                addTags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deleniti", "earum") {{
                                        key = "voluptatem";
                                        value = "alias";
                                    }}),
                                    add(new Tag("rem", "minus") {{
                                        key = "ex";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag("ratione", "ullam") {{
                                        key = "nemo";
                                        value = "asperiores";
                                    }}),
                                    add(new Tag("totam", "impedit") {{
                                        key = "perferendis";
                                        value = "illum";
                                    }}),
                                }};
                                description = "quibusdam";
                                distributor = "nam";
                                name = "Molly Fadel IV";
                                owner = "veritatis";
                                removeTags = new String[]{{
                                    add("dolor"),
                                    add("consequatur"),
                                }};
                                sourceConnection = new SourceConnection(                new SourceConnectionParameters() {{
                                                    codeStar = new CodeStarParameters("architecto", "sit", "modi", "fugit");;
                                                }};) {{
                                    type = SourceTypeEnum.CODESTAR;
                                }};;
                                supportDescription = "ab";
                                supportEmail = "laudantium";
                                supportUrl = "quae";
                            }};, UpdateProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PRODUCT) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ipsam";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "eveniet";
            }};            

            UpdateProductResponse res = sdk.sdk.updateProduct(req);

            if (res.updateProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProvisionedProduct

<p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProvisionedProductRequest;
import org.openapis.openapi.models.operations.UpdateProvisionedProductResponse;
import org.openapis.openapi.models.operations.UpdateProvisionedProductXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetOperationTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateProvisionedProductInput;
import org.openapis.openapi.models.shared.UpdateProvisioningParameter;
import org.openapis.openapi.models.shared.UpdateProvisioningPreferences;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProvisionedProductRequest req = new UpdateProvisionedProductRequest(                new UpdateProvisionedProductInput("officiis") {{
                                acceptLanguage = "esse";
                                pathId = "necessitatibus";
                                pathName = "sed";
                                productId = "veniam";
                                productName = "nesciunt";
                                provisionedProductId = "expedita";
                                provisionedProductName = "eum";
                                provisioningArtifactId = "vel";
                                provisioningArtifactName = "voluptatum";
                                provisioningParameters = new org.openapis.openapi.models.shared.UpdateProvisioningParameter[]{{
                                    add(new UpdateProvisioningParameter() {{
                                        key = "exercitationem";
                                        usePreviousValue = false;
                                        value = "ab";
                                    }}),
                                    add(new UpdateProvisioningParameter() {{
                                        key = "porro";
                                        usePreviousValue = false;
                                        value = "autem";
                                    }}),
                                }};
                                provisioningPreferences = new UpdateProvisioningPreferences() {{
                                    stackSetAccounts = new String[]{{
                                        add("laboriosam"),
                                        add("recusandae"),
                                        add("consequuntur"),
                                        add("voluptatem"),
                                    }};
                                    stackSetFailureToleranceCount = 350207L;
                                    stackSetFailureTolerancePercentage = 895692L;
                                    stackSetMaxConcurrencyCount = 95619L;
                                    stackSetMaxConcurrencyPercentage = 392569L;
                                    stackSetOperationType = StackSetOperationTypeEnum.DELETE;
                                    stackSetRegions = new String[]{{
                                        add("est"),
                                        add("harum"),
                                        add("sequi"),
                                        add("doloribus"),
                                    }};
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nemo", "voluptate") {{
                                        key = "optio";
                                        value = "occaecati";
                                    }}),
                                    add(new Tag("voluptas", "numquam") {{
                                        key = "blanditiis";
                                        value = "officia";
                                    }}),
                                    add(new Tag("eius", "aspernatur") {{
                                        key = "nemo";
                                        value = "quos";
                                    }}),
                                    add(new Tag("fuga", "laudantium") {{
                                        key = "ducimus";
                                        value = "nesciunt";
                                    }}),
                                }};
                            }};, UpdateProvisionedProductXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PROVISIONED_PRODUCT) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "rem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "consequuntur";
            }};            

            UpdateProvisionedProductResponse res = sdk.sdk.updateProvisionedProduct(req);

            if (res.updateProvisionedProductOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProvisionedProductProperties

Requests updates to the properties of the specified provisioned product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProvisionedProductPropertiesRequest;
import org.openapis.openapi.models.operations.UpdateProvisionedProductPropertiesResponse;
import org.openapis.openapi.models.operations.UpdateProvisionedProductPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProvisionedProductPropertiesInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProvisionedProductPropertiesRequest req = new UpdateProvisionedProductPropertiesRequest(                new UpdateProvisionedProductPropertiesInput("aperiam", "cupiditate",                 new java.util.HashMap<String, String>() {{
                                                put("soluta", "alias");
                                                put("omnis", "eos");
                                                put("occaecati", "iste");
                                                put("magni", "inventore");
                                            }}) {{
                                acceptLanguage = "fuga";
                            }};, UpdateProvisionedProductPropertiesXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PROVISIONED_PRODUCT_PROPERTIES) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "omnis";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "praesentium";
            }};            

            UpdateProvisionedProductPropertiesResponse res = sdk.sdk.updateProvisionedProductProperties(req);

            if (res.updateProvisionedProductPropertiesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProvisioningArtifact

<p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProvisioningArtifactRequest;
import org.openapis.openapi.models.operations.UpdateProvisioningArtifactResponse;
import org.openapis.openapi.models.operations.UpdateProvisioningArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProvisioningArtifactGuidanceEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProvisioningArtifactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProvisioningArtifactRequest req = new UpdateProvisioningArtifactRequest(                new UpdateProvisioningArtifactInput("magnam", "temporibus") {{
                                acceptLanguage = "quos";
                                active = false;
                                description = "commodi";
                                guidance = ProvisioningArtifactGuidanceEnum.DEPRECATED;
                                name = "Deanna Wehner";
                            }};, UpdateProvisioningArtifactXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PROVISIONING_ARTIFACT) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "ipsam";
                xAmzDate = "vel";
                xAmzSecurityToken = "alias";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "non";
            }};            

            UpdateProvisioningArtifactResponse res = sdk.sdk.updateProvisioningArtifact(req);

            if (res.updateProvisioningArtifactOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceAction

Updates a self-service action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceActionRequest;
import org.openapis.openapi.models.operations.UpdateServiceActionResponse;
import org.openapis.openapi.models.operations.UpdateServiceActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceActionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceActionRequest req = new UpdateServiceActionRequest(                new UpdateServiceActionInput("enim") {{
                                acceptLanguage = "sint";
                                definition = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "esse");
                                    put("nemo", "reprehenderit");
                                    put("est", "quis");
                                    put("sint", "accusamus");
                                }};
                                description = "impedit";
                                name = "Alonzo Zemlak";
                            }};, UpdateServiceActionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_SERVICE_ACTION) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quae";
                xAmzDate = "minus";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "consectetur";
            }};            

            UpdateServiceActionResponse res = sdk.sdk.updateServiceAction(req);

            if (res.updateServiceActionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTagOption

Updates the specified TagOption.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagOptionRequest;
import org.openapis.openapi.models.operations.UpdateTagOptionResponse;
import org.openapis.openapi.models.operations.UpdateTagOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTagOptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTagOptionRequest req = new UpdateTagOptionRequest(                new UpdateTagOptionInput("atque") {{
                                active = false;
                                value = "ipsum";
                            }};, UpdateTagOptionXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_UPDATE_TAG_OPTION) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "soluta";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "nam";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            UpdateTagOptionResponse res = sdk.sdk.updateTagOption(req);

            if (res.updateTagOptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
