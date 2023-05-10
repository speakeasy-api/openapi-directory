# SDK

## Overview

<p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p> <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p> <p>Use the following links to get started on the Amazon AppFlow API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p> <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm"> <i>Authorize Apps with OAuth</i> </a> documentation.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appflow/>
### Available Operations

* [createConnectorProfile](#createconnectorprofile) -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* [createFlow](#createflow) -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* [deleteConnectorProfile](#deleteconnectorprofile) -  Enables you to delete an existing connector profile. 
* [deleteFlow](#deleteflow) -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* [describeConnector](#describeconnector) - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* [describeConnectorEntity](#describeconnectorentity) -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* [describeConnectorProfiles](#describeconnectorprofiles) - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* [describeConnectors](#describeconnectors) -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* [describeFlow](#describeflow) -  Provides a description of the specified flow. 
* [describeFlowExecutionRecords](#describeflowexecutionrecords) -  Fetches the execution history of the flow. 
* [listConnectorEntities](#listconnectorentities) -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* [listConnectors](#listconnectors) - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* [listFlows](#listflows) -  Lists all of the flows associated with your account. 
* [listTagsForResource](#listtagsforresource) -  Retrieves the tags that are associated with a specified flow. 
* [registerConnector](#registerconnector) - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* [startFlow](#startflow) -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* [stopFlow](#stopflow) -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* [tagResource](#tagresource) -  Applies a tag to the specified flow. 
* [unregisterConnector](#unregisterconnector) - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* [untagResource](#untagresource) -  Removes a tag from the specified flow. 
* [updateConnectorProfile](#updateconnectorprofile) -  Updates a given connector profile associated with your account. 
* [updateConnectorRegistration](#updateconnectorregistration) - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* [updateFlow](#updateflow) -  Updates an existing flow. 

## createConnectorProfile

 Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorProfileRequestBodyConnectionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorProfileRequestBodyConnectorProfileConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\AmplitudeConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ApiKeyCredentials;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuthCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CustomAuthCredentials;
use \OpenAPI\OpenAPI\Models\Shared\OAuth2Credentials;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorOAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatadogConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\HoneycodeConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\PardotConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\OAuthCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SingularConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SlackConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SnowflakeConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\TrendmicroConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\VeevaConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\OAuth2Properties;
use \OpenAPI\OpenAPI\Models\Shared\OAuth2GrantTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatadogConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\PardotConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\OAuthProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\SlackConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\SnowflakeConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\VeevaConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorProfileRequestBodyConnectorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectorProfileRequest();
    $request->requestBody = new CreateConnectorProfileRequestBody();
    $request->requestBody->clientToken = 'ipsam';
    $request->requestBody->connectionMode = CreateConnectorProfileRequestBodyConnectionModeEnum::PUBLIC;
    $request->requestBody->connectorLabel = 'fugit';
    $request->requestBody->connectorProfileConfig = new CreateConnectorProfileRequestBodyConnectorProfileConfig();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials = new ConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude = new AmplitudeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude->apiKey = 'dolorum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude->secretKey = 'excepturi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector = new CustomConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey = new ApiKeyCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey->apiKey = 'tempora';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey->apiSecretKey = 'facilis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->authenticationType = AuthenticationTypeEnum::BASIC;
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic = new BasicAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic->password = 'labore';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic->username = 'Vilma75';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom = new CustomAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom->credentialsMap = [
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom->customAuthenticationType = 'debitis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2 = new OAuth2Credentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->accessToken = 'a';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->clientId = 'dolorum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->clientSecret = 'in';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest->authCode = 'in';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest->redirectUri = 'illum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->refreshToken = 'maiores';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog = new DatadogConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog->apiKey = 'rerum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog->applicationKey = 'dicta';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->dynatrace = new DynatraceConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->dynatrace->apiToken = 'magnam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->accessToken = 'cumque';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->clientId = 'facere';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->clientSecret = 'ea';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest->authCode = 'aliquid';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest->redirectUri = 'laborum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->refreshToken = 'accusamus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode = new HoneycodeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->accessToken = 'non';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest->authCode = 'occaecati';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest->redirectUri = 'enim';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->refreshToken = 'accusamus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus = new InforNexusConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->accessKeyId = 'delectus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->datakey = 'quidem';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->secretAccessKey = 'provident';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->userId = 'nam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo = new MarketoConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->accessToken = 'id';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->clientId = 'blanditiis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->clientSecret = 'deleniti';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest->authCode = 'sapiente';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest->redirectUri = 'amet';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot = new PardotConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->accessToken = 'deserunt';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->clientCredentialsArn = 'nisi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest->authCode = 'vel';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest->redirectUri = 'natus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->refreshToken = 'omnis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift = new RedshiftConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift->password = 'molestiae';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift->username = 'Aileen71';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData = new SAPODataConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials = new BasicAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials->password = 'id';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials->username = 'Edward_Greenfelder';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials = new OAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->accessToken = 'nobis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->clientId = 'eum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->clientSecret = 'vero';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest->authCode = 'aspernatur';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest->redirectUri = 'architecto';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->refreshToken = 'magnam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce = new SalesforceConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->accessToken = 'et';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->clientCredentialsArn = 'excepturi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest->authCode = 'ullam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest->redirectUri = 'provident';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->refreshToken = 'quos';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow = new ServiceNowConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow->password = 'sint';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow->username = 'Alexis_OHara32';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->singular = new SingularConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->singular->apiKey = 'eum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack = new SlackConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->accessToken = 'dolor';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->clientId = 'necessitatibus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->clientSecret = 'odit';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest->authCode = 'nemo';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest->redirectUri = 'quasi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake = new SnowflakeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake->password = 'iure';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake->username = 'Wilton80';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->trendmicro = new TrendmicroConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->trendmicro->apiSecretKey = 'deleniti';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva = new VeevaConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva->password = 'facilis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva->username = 'Isaias91';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk = new ZendeskConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->accessToken = 'ullam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->clientId = 'expedita';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->clientSecret = 'nihil';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest->authCode = 'repellat';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest->redirectUri = 'quibusdam';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties = new ConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->amplitude = [
        'saepe' => 'pariatur',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector = new CustomConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties = new OAuth2Properties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->oAuth2GrantType = OAuth2GrantTypeEnum::CLIENT_CREDENTIALS;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->tokenUrl = 'consequuntur';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->tokenUrlCustomProperties = [
        'natus' => 'magni',
        'sunt' => 'quo',
        'illum' => 'pariatur',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->profileProperties = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->datadog = new DatadogConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->datadog->instanceUrl = 'ipsam';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->dynatrace = new DynatraceConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->dynatrace->instanceUrl = 'voluptate';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->googleAnalytics = [
        'nam' => 'eaque',
        'pariatur' => 'nemo',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->honeycode = [
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
        'hic' => 'libero',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->inforNexus = new InforNexusConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->inforNexus->instanceUrl = 'nobis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->marketo = new MarketoConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->marketo->instanceUrl = 'dolores';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot = new PardotConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->businessUnitId = 'quis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->instanceUrl = 'totam';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->isSandboxEnvironment = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift = new RedshiftConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->bucketName = 'dignissimos';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->bucketPrefix = 'eaque';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->clusterIdentifier = 'quis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->dataApiRoleArn = 'nesciunt';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->databaseName = 'eos';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->databaseUrl = 'perferendis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->isRedshiftServerless = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->roleArn = 'dolores';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->workgroupName = 'minus';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData = new SAPODataConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->applicationHostUrl = 'quam';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->applicationServicePath = 'dolor';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->clientNumber = 'vero';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->logonLanguage = 'nostrum';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties = new OAuthProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->authCodeUrl = 'hic';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->oAuthScopes = [
        'omnis',
        'facilis',
        'perspiciatis',
        'voluptatem',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->tokenUrl = 'porro';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->portNumber = 164694;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->privateLinkServiceName = 'blanditiis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce = new SalesforceConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->instanceUrl = 'error';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->isSandboxEnvironment = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->usePrivateLinkForMetadataAndAuthorization = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->serviceNow = new ServiceNowConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->serviceNow->instanceUrl = 'eaque';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->singular = [
        'rerum' => 'adipisci',
        'asperiores' => 'earum',
        'modi' => 'iste',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->slack = new SlackConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->slack->instanceUrl = 'dolorum';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake = new SnowflakeConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->accountName = 'deleniti';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->bucketName = 'pariatur';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->bucketPrefix = 'provident';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->privateLinkServiceName = 'nobis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->region = 'libero';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->stage = 'delectus';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->warehouse = 'quaerat';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->trendmicro = [
        'aliquid' => 'dolorem',
        'dolorem' => 'dolor',
        'qui' => 'ipsum',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->veeva = new VeevaConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->veeva->instanceUrl = 'hic';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->zendesk = new ZendeskConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->zendesk->instanceUrl = 'excepturi';
    $request->requestBody->connectorProfileName = 'cum';
    $request->requestBody->connectorType = CreateConnectorProfileRequestBodyConnectorTypeEnum::TRENDMICRO;
    $request->requestBody->kmsArn = 'dignissimos';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->createConnectorProfile($request);

    if ($response->createConnectorProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFlow

 Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DestinationFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConnectorProperties;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\ErrorHandlingConfig;
use \OpenAPI\OpenAPI\Models\Shared\WriteOperationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerProfilesDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventBridgeDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\HoneycodeDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3OutputFormatConfig;
use \OpenAPI\OpenAPI\Models\Shared\AggregationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrefixConfig;
use \OpenAPI\OpenAPI\Models\Shared\PathPrefixEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrefixFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrefixTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\SuccessResponseHandlingConfig;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceDataTransferApiEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowflakeDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\UpsolverDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\UpsolverS3OutputFormatConfig;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskDestinationProperties;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowRequestBodyMetadataCatalogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GlueDataCatalogConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowRequestBodySourceFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\IncrementalPullConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectorProperties;
use \OpenAPI\OpenAPI\Models\Shared\AmplitudeSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\DatadogSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\PardotSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3InputFormatConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3InputFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SingularSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SlackSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\TrendmicroSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\VeevaSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorOperator;
use \OpenAPI\OpenAPI\Models\Shared\AmplitudeConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatadogConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PardotConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3ConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SingularConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlackConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrendmicroConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VeevaConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowRequestBodyTriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\TriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledTriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataPullModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFlowRequest();
    $request->requestBody = new CreateFlowRequestBody();
    $request->requestBody->clientToken = 'iure';
    $request->requestBody->description = 'odio';
    $request->requestBody->destinationFlowConfigList = [
        new DestinationFlowConfig(),
        new DestinationFlowConfig(),
    ];
    $request->requestBody->flowName = 'accusamus';
    $request->requestBody->kmsArn = 'quidem';
    $request->requestBody->metadataCatalogConfig = new CreateFlowRequestBodyMetadataCatalogConfig();
    $request->requestBody->metadataCatalogConfig->glueDataCatalog = new GlueDataCatalogConfig();
    $request->requestBody->metadataCatalogConfig->glueDataCatalog->databaseName = 'voluptatibus';
    $request->requestBody->metadataCatalogConfig->glueDataCatalog->roleArn = 'voluptas';
    $request->requestBody->metadataCatalogConfig->glueDataCatalog->tablePrefix = 'natus';
    $request->requestBody->sourceFlowConfig = new CreateFlowRequestBodySourceFlowConfig();
    $request->requestBody->sourceFlowConfig->apiVersion = 'eos';
    $request->requestBody->sourceFlowConfig->connectorProfileName = 'atque';
    $request->requestBody->sourceFlowConfig->connectorType = ConnectorTypeEnum::SALESFORCE;
    $request->requestBody->sourceFlowConfig->incrementalPullConfig = new IncrementalPullConfig();
    $request->requestBody->sourceFlowConfig->incrementalPullConfig->datetimeTypeFieldName = 'fugiat';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties = new SourceConnectorProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->amplitude = new AmplitudeSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->amplitude->object = 'ab';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->customConnector = new CustomConnectorSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->customConnector->customProperties = [
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->customConnector->entityName = 'necessitatibus';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->datadog = new DatadogSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->datadog->object = 'distinctio';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->dynatrace = new DynatraceSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->dynatrace->object = 'asperiores';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->googleAnalytics = new GoogleAnalyticsSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->googleAnalytics->object = 'nihil';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->inforNexus = new InforNexusSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->inforNexus->object = 'ipsum';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->marketo = new MarketoSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->marketo->object = 'voluptate';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->pardot = new PardotSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->pardot->object = 'id';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3 = new S3SourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->bucketName = 'saepe';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->bucketPrefix = 'eius';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->s3InputFormatConfig = new S3InputFormatConfig();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->s3InputFormatConfig->s3InputFileType = S3InputFileTypeEnum::CSV;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->sapoData = new SAPODataSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->sapoData->objectPath = 'perferendis';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce = new SalesforceSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->dataTransferApi = SalesforceDataTransferApiEnum::AUTOMATIC;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->enableDynamicFieldUpdate = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->includeDeletedRecords = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->object = 'optio';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->serviceNow = new ServiceNowSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->serviceNow->object = 'accusamus';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->singular = new SingularSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->singular->object = 'ad';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->slack = new SlackSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->slack->object = 'saepe';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->trendmicro = new TrendmicroSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->trendmicro->object = 'suscipit';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva = new VeevaSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->documentType = 'deserunt';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->includeAllVersions = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->includeRenditions = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->includeSourceFiles = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->object = 'provident';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->zendesk = new ZendeskSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->zendesk->object = 'minima';
    $request->requestBody->tags = [
        'totam' => 'similique',
        'alias' => 'at',
        'quaerat' => 'tempora',
        'vel' => 'quod',
    ];
    $request->requestBody->tasks = [
        new Task(),
        new Task(),
        new Task(),
        new Task(),
    ];
    $request->requestBody->triggerConfig = new CreateFlowRequestBodyTriggerConfig();
    $request->requestBody->triggerConfig->triggerProperties = new TriggerProperties();
    $request->requestBody->triggerConfig->triggerProperties->scheduled = new ScheduledTriggerProperties();
    $request->requestBody->triggerConfig->triggerProperties->scheduled->dataPullMode = DataPullModeEnum::INCREMENTAL;
    $request->requestBody->triggerConfig->triggerProperties->scheduled->firstExecutionFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-04T11:05:24.484Z');
    $request->requestBody->triggerConfig->triggerProperties->scheduled->flowErrorDeactivationThreshold = 456130;
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-13T02:40:51.157Z');
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleExpression = 'ipsum';
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleOffset = 788740;
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T18:16:06.669Z');
    $request->requestBody->triggerConfig->triggerProperties->scheduled->timezone = 'tempore';
    $request->requestBody->triggerConfig->triggerType = TriggerTypeEnum::ON_DEMAND;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->createFlow($request);

    if ($response->createFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectorProfile

 Enables you to delete an existing connector profile. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorProfileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectorProfileRequest();
    $request->requestBody = new DeleteConnectorProfileRequestBody();
    $request->requestBody->connectorProfileName = 'expedita';
    $request->requestBody->forceDelete = false;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->deleteConnectorProfile($request);

    if ($response->deleteConnectorProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFlow

 Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFlowRequest();
    $request->requestBody = new DeleteFlowRequestBody();
    $request->requestBody->flowName = 'ipsum';
    $request->requestBody->forceDelete = false;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->deleteFlow($request);

    if ($response->deleteFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnector

Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorRequestBodyConnectorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectorRequest();
    $request->requestBody = new DescribeConnectorRequestBody();
    $request->requestBody->connectorLabel = 'laborum';
    $request->requestBody->connectorType = DescribeConnectorRequestBodyConnectorTypeEnum::DYNATRACE;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->describeConnector($request);

    if ($response->describeConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnectorEntity

 Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorEntityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorEntityRequestBodyConnectorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectorEntityRequest();
    $request->requestBody = new DescribeConnectorEntityRequestBody();
    $request->requestBody->apiVersion = 'molestias';
    $request->requestBody->connectorEntityName = 'temporibus';
    $request->requestBody->connectorProfileName = 'qui';
    $request->requestBody->connectorType = DescribeConnectorEntityRequestBodyConnectorTypeEnum::S3;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->describeConnectorEntity($request);

    if ($response->describeConnectorEntityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnectorProfiles

<p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorProfilesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorProfilesRequestBodyConnectorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectorProfilesRequest();
    $request->requestBody = new DescribeConnectorProfilesRequestBody();
    $request->requestBody->connectorLabel = 'voluptatem';
    $request->requestBody->connectorProfileNames = [
        'soluta',
        'nobis',
        'et',
        'saepe',
    ];
    $request->requestBody->connectorType = DescribeConnectorProfilesRequestBodyConnectorTypeEnum::MARKETO;
    $request->requestBody->maxResults = 83422;
    $request->requestBody->nextToken = 'nobis';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolore';
    $request->maxResults = 'labore';
    $request->nextToken = 'adipisci';

    $response = $sdk->sdk->describeConnectorProfiles($request);

    if ($response->describeConnectorProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnectors

 Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectorsRequest();
    $request->requestBody = new DescribeConnectorsRequestBody();
    $request->requestBody->connectorTypes = [
        ConnectorTypeEnum::SLACK,
        ConnectorTypeEnum::SINGULAR,
        ConnectorTypeEnum::SALESFORCE,
    ];
    $request->requestBody->maxResults = 555649;
    $request->requestBody->nextToken = 'itaque';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';
    $request->maxResults = 'cupiditate';
    $request->nextToken = 'qui';

    $response = $sdk->sdk->describeConnectors($request);

    if ($response->describeConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFlow

 Provides a description of the specified flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFlowRequest();
    $request->requestBody = new DescribeFlowRequestBody();
    $request->requestBody->flowName = 'quae';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->describeFlow($request);

    if ($response->describeFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFlowExecutionRecords

 Fetches the execution history of the flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlowExecutionRecordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlowExecutionRecordsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFlowExecutionRecordsRequest();
    $request->requestBody = new DescribeFlowExecutionRecordsRequestBody();
    $request->requestBody->flowName = 'quis';
    $request->requestBody->maxResults = 218403;
    $request->requestBody->nextToken = 'delectus';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->maxResults = 'quod';
    $request->nextToken = 'odio';

    $response = $sdk->sdk->describeFlowExecutionRecords($request);

    if ($response->describeFlowExecutionRecordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectorEntities

 Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorEntitiesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorEntitiesRequestBodyConnectorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectorEntitiesRequest();
    $request->requestBody = new ListConnectorEntitiesRequestBody();
    $request->requestBody->apiVersion = 'similique';
    $request->requestBody->connectorProfileName = 'facilis';
    $request->requestBody->connectorType = ListConnectorEntitiesRequestBodyConnectorTypeEnum::CUSTOMER_PROFILES;
    $request->requestBody->entitiesPath = 'ducimus';
    $request->requestBody->maxResults = 293020;
    $request->requestBody->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->listConnectorEntities($request);

    if ($response->listConnectorEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectors

Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectorsRequest();
    $request->requestBody = new ListConnectorsRequestBody();
    $request->requestBody->maxResults = 862310;
    $request->requestBody->nextToken = 'fugit';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'alias';
    $request->maxResults = 'officia';
    $request->nextToken = 'tempora';

    $response = $sdk->sdk->listConnectors($request);

    if ($response->listConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFlows

 Lists all of the flows associated with your account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlowsRequest();
    $request->requestBody = new ListFlowsRequestBody();
    $request->requestBody->maxResults = 368584;
    $request->requestBody->nextToken = 'ea';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->maxResults = 'dicta';
    $request->nextToken = 'dolor';

    $response = $sdk->sdk->listFlows($request);

    if ($response->listFlowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 Retrieves the tags that are associated with a specified flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->resourceArn = 'sapiente';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerConnector

Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterConnectorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterConnectorRequestBodyConnectorProvisioningConfig;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConnectorProvisioningConfig;
use \OpenAPI\OpenAPI\Models\Operations\RegisterConnectorRequestBodyConnectorProvisioningTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterConnectorRequest();
    $request->requestBody = new RegisterConnectorRequestBody();
    $request->requestBody->clientToken = 'quisquam';
    $request->requestBody->connectorLabel = 'saepe';
    $request->requestBody->connectorProvisioningConfig = new RegisterConnectorRequestBodyConnectorProvisioningConfig();
    $request->requestBody->connectorProvisioningConfig->lambda = new LambdaConnectorProvisioningConfig();
    $request->requestBody->connectorProvisioningConfig->lambda->lambdaArn = 'ea';
    $request->requestBody->connectorProvisioningType = RegisterConnectorRequestBodyConnectorProvisioningTypeEnum::LAMBDA;
    $request->requestBody->description = 'impedit';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->registerConnector($request);

    if ($response->registerConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFlow

 Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartFlowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFlowRequest();
    $request->requestBody = new StartFlowRequestBody();
    $request->requestBody->clientToken = 'consectetur';
    $request->requestBody->flowName = 'recusandae';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->startFlow($request);

    if ($response->startFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopFlow

 Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopFlowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopFlowRequest();
    $request->requestBody = new StopFlowRequestBody();
    $request->requestBody->flowName = 'deleniti';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->stopFlow($request);

    if ($response->stopFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Applies a tag to the specified flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'laborum' => 'placeat',
        'velit' => 'eum',
        'autem' => 'nobis',
    ];
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->resourceArn = 'numquam';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unregisterConnector

Unregisters the custom connector registered in your account that matches the connector label provided in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnregisterConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnregisterConnectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnregisterConnectorRequest();
    $request->requestBody = new UnregisterConnectorRequestBody();
    $request->requestBody->connectorLabel = 'explicabo';
    $request->requestBody->forceDelete = false;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->unregisterConnector($request);

    if ($response->unregisterConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Removes a tag from the specified flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';
    $request->resourceArn = 'eum';
    $request->tagKeys = [
        'assumenda',
        'eos',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectorProfile

 Updates a given connector profile associated with your account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectorProfileConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\AmplitudeConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ApiKeyCredentials;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuthCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CustomAuthCredentials;
use \OpenAPI\OpenAPI\Models\Shared\OAuth2Credentials;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorOAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatadogConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\HoneycodeConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\PardotConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\OAuthCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SingularConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SlackConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SnowflakeConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\TrendmicroConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\VeevaConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorProfileCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\OAuth2Properties;
use \OpenAPI\OpenAPI\Models\Shared\OAuth2GrantTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatadogConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\PardotConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\OAuthProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\SlackConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\SnowflakeConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\VeevaConnectorProfileProperties;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorProfileProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectorProfileRequest();
    $request->requestBody = new UpdateConnectorProfileRequestBody();
    $request->requestBody->clientToken = 'praesentium';
    $request->requestBody->connectionMode = UpdateConnectorProfileRequestBodyConnectionModeEnum::PRIVATE;
    $request->requestBody->connectorProfileConfig = new UpdateConnectorProfileRequestBodyConnectorProfileConfig();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials = new ConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude = new AmplitudeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude->apiKey = 'veritatis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude->secretKey = 'ipsa';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector = new CustomConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey = new ApiKeyCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey->apiKey = 'id';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey->apiSecretKey = 'quidem';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->authenticationType = AuthenticationTypeEnum::OAUTH2;
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic = new BasicAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic->password = 'quo';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic->username = 'Rosemarie.Sanford17';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom = new CustomAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom->credentialsMap = [
        'ab' => 'cupiditate',
        'consequatur' => 'tempora',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom->customAuthenticationType = 'debitis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2 = new OAuth2Credentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->accessToken = 'ipsam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->clientId = 'aspernatur';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->clientSecret = 'sequi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest->authCode = 'quo';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest->redirectUri = 'esse';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->refreshToken = 'recusandae';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog = new DatadogConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog->apiKey = 'aperiam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog->applicationKey = 'distinctio';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->dynatrace = new DynatraceConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->dynatrace->apiToken = 'quod';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->accessToken = 'dignissimos';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->clientId = 'inventore';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->clientSecret = 'nihil';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest->authCode = 'totam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest->redirectUri = 'accusamus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->refreshToken = 'aliquam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode = new HoneycodeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->accessToken = 'odio';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest->authCode = 'occaecati';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest->redirectUri = 'commodi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->refreshToken = 'sapiente';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus = new InforNexusConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->accessKeyId = 'dolores';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->datakey = 'deserunt';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->secretAccessKey = 'molestiae';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->userId = 'accusantium';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo = new MarketoConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->accessToken = 'porro';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->clientId = 'eum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->clientSecret = 'quas';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest->authCode = 'praesentium';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest->redirectUri = 'consequuntur';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot = new PardotConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->accessToken = 'deleniti';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->clientCredentialsArn = 'fugit';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest->authCode = 'fuga';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest->redirectUri = 'mollitia';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->refreshToken = 'incidunt';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift = new RedshiftConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift->password = 'atque';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift->username = 'Braulio.Hansen';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData = new SAPODataConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials = new BasicAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials->password = 'sapiente';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials->username = 'Carol90';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials = new OAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->accessToken = 'occaecati';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->clientId = 'atque';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->clientSecret = 'et';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest->authCode = 'esse';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest->redirectUri = 'eveniet';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->refreshToken = 'accusamus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce = new SalesforceConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->accessToken = 'veritatis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->clientCredentialsArn = 'esse';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest->authCode = 'quod';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest->redirectUri = 'nam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->refreshToken = 'vero';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow = new ServiceNowConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow->password = 'aliquid';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow->username = 'Augustine_Turner';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->singular = new SingularConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->singular->apiKey = 'molestiae';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack = new SlackConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->accessToken = 'rerum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->clientId = 'occaecati';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->clientSecret = 'minima';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest->authCode = 'distinctio';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest->redirectUri = 'eligendi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake = new SnowflakeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake->password = 'sit';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake->username = 'Lou76';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->trendmicro = new TrendmicroConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->trendmicro->apiSecretKey = 'consequuntur';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva = new VeevaConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva->password = 'consequatur';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva->username = 'Peyton.Hackett45';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk = new ZendeskConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->accessToken = 'blanditiis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->clientId = 'provident';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->clientSecret = 'a';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest->authCode = 'nulla';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest->redirectUri = 'quas';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties = new ConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->amplitude = [
        'quasi' => 'a',
        'error' => 'sint',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector = new CustomConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties = new OAuth2Properties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->oAuth2GrantType = OAuth2GrantTypeEnum::AUTHORIZATION_CODE;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->tokenUrl = 'possimus';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->tokenUrlCustomProperties = [
        'eveniet' => 'asperiores',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->profileProperties = [
        'veritatis' => 'consequuntur',
        'quasi' => 'similique',
        'culpa' => 'aliquid',
        'tenetur' => 'quae',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->datadog = new DatadogConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->datadog->instanceUrl = 'earum';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->dynatrace = new DynatraceConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->dynatrace->instanceUrl = 'vel';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->googleAnalytics = [
        'eius' => 'libero',
        'illum' => 'soluta',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->honeycode = [
        'aliquam' => 'sapiente',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->inforNexus = new InforNexusConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->inforNexus->instanceUrl = 'dicta';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->marketo = new MarketoConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->marketo->instanceUrl = 'ullam';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot = new PardotConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->businessUnitId = 'reprehenderit';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->instanceUrl = 'ullam';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->isSandboxEnvironment = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift = new RedshiftConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->bucketName = 'nisi';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->bucketPrefix = 'aut';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->clusterIdentifier = 'voluptatum';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->dataApiRoleArn = 'qui';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->databaseName = 'quibusdam';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->databaseUrl = 'ex';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->isRedshiftServerless = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->roleArn = 'deleniti';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->workgroupName = 'itaque';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData = new SAPODataConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->applicationHostUrl = 'dolorum';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->applicationServicePath = 'architecto';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->clientNumber = 'omnis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->logonLanguage = 'tenetur';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties = new OAuthProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->authCodeUrl = 'quasi';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->oAuthScopes = [
        'et',
        'voluptate',
        'ipsa',
        'minima',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->tokenUrl = 'veritatis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->portNumber = 232744;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->privateLinkServiceName = 'adipisci';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce = new SalesforceConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->instanceUrl = 'iste';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->isSandboxEnvironment = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->usePrivateLinkForMetadataAndAuthorization = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->serviceNow = new ServiceNowConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->serviceNow->instanceUrl = 'temporibus';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->singular = [
        'rem' => 'aut',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->slack = new SlackConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->slack->instanceUrl = 'laudantium';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake = new SnowflakeConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->accountName = 'eum';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->bucketName = 'mollitia';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->bucketPrefix = 'ab';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->privateLinkServiceName = 'corrupti';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->region = 'non';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->stage = 'voluptatem';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->warehouse = 'dolor';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->trendmicro = [
        'numquam' => 'impedit',
        'explicabo' => 'voluptas',
        'aut' => 'dignissimos',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->veeva = new VeevaConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->veeva->instanceUrl = 'dicta';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->zendesk = new ZendeskConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->zendesk->instanceUrl = 'maiores';
    $request->requestBody->connectorProfileName = 'natus';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->updateConnectorProfile($request);

    if ($response->updateConnectorProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectorRegistration

<p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorRegistrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorRegistrationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorRegistrationRequestBodyConnectorProvisioningConfig;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConnectorProvisioningConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectorRegistrationRequest();
    $request->requestBody = new UpdateConnectorRegistrationRequestBody();
    $request->requestBody->clientToken = 'consequuntur';
    $request->requestBody->connectorLabel = 'repellendus';
    $request->requestBody->connectorProvisioningConfig = new UpdateConnectorRegistrationRequestBodyConnectorProvisioningConfig();
    $request->requestBody->connectorProvisioningConfig->lambda = new LambdaConnectorProvisioningConfig();
    $request->requestBody->connectorProvisioningConfig->lambda->lambdaArn = 'officia';
    $request->requestBody->description = 'maxime';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->updateConnectorRegistration($request);

    if ($response->updateConnectorRegistrationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFlow

 Updates an existing flow. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DestinationFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConnectorProperties;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\ErrorHandlingConfig;
use \OpenAPI\OpenAPI\Models\Shared\WriteOperationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerProfilesDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventBridgeDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\HoneycodeDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3OutputFormatConfig;
use \OpenAPI\OpenAPI\Models\Shared\AggregationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrefixConfig;
use \OpenAPI\OpenAPI\Models\Shared\PathPrefixEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrefixFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrefixTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\SuccessResponseHandlingConfig;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceDataTransferApiEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowflakeDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\UpsolverDestinationProperties;
use \OpenAPI\OpenAPI\Models\Shared\UpsolverS3OutputFormatConfig;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskDestinationProperties;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowRequestBodyMetadataCatalogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GlueDataCatalogConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowRequestBodySourceFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\IncrementalPullConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectorProperties;
use \OpenAPI\OpenAPI\Models\Shared\AmplitudeSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\CustomConnectorSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\DatadogSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\PardotSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3InputFormatConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3InputFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SingularSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SlackSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\TrendmicroSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\VeevaSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorOperator;
use \OpenAPI\OpenAPI\Models\Shared\AmplitudeConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatadogConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynatraceConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\InforNexusConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PardotConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3ConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAPODataConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SingularConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlackConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrendmicroConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VeevaConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowRequestBodyTriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\TriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledTriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataPullModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFlowRequest();
    $request->requestBody = new UpdateFlowRequestBody();
    $request->requestBody->clientToken = 'quod';
    $request->requestBody->description = 'labore';
    $request->requestBody->destinationFlowConfigList = [
        new DestinationFlowConfig(),
    ];
    $request->requestBody->flowName = 'adipisci';
    $request->requestBody->metadataCatalogConfig = new UpdateFlowRequestBodyMetadataCatalogConfig();
    $request->requestBody->metadataCatalogConfig->glueDataCatalog = new GlueDataCatalogConfig();
    $request->requestBody->metadataCatalogConfig->glueDataCatalog->databaseName = 'fuga';
    $request->requestBody->metadataCatalogConfig->glueDataCatalog->roleArn = 'id';
    $request->requestBody->metadataCatalogConfig->glueDataCatalog->tablePrefix = 'suscipit';
    $request->requestBody->sourceFlowConfig = new UpdateFlowRequestBodySourceFlowConfig();
    $request->requestBody->sourceFlowConfig->apiVersion = 'velit';
    $request->requestBody->sourceFlowConfig->connectorProfileName = 'culpa';
    $request->requestBody->sourceFlowConfig->connectorType = ConnectorTypeEnum::VEEVA;
    $request->requestBody->sourceFlowConfig->incrementalPullConfig = new IncrementalPullConfig();
    $request->requestBody->sourceFlowConfig->incrementalPullConfig->datetimeTypeFieldName = 'recusandae';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties = new SourceConnectorProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->amplitude = new AmplitudeSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->amplitude->object = 'totam';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->customConnector = new CustomConnectorSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->customConnector->customProperties = [
        'vel' => 'ducimus',
        'quos' => 'vel',
        'labore' => 'possimus',
        'facilis' => 'cum',
    ];
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->customConnector->entityName = 'commodi';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->datadog = new DatadogSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->datadog->object = 'in';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->dynatrace = new DynatraceSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->dynatrace->object = 'corporis';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->googleAnalytics = new GoogleAnalyticsSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->googleAnalytics->object = 'reiciendis';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->inforNexus = new InforNexusSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->inforNexus->object = 'assumenda';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->marketo = new MarketoSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->marketo->object = 'nemo';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->pardot = new PardotSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->pardot->object = 'recusandae';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3 = new S3SourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->bucketName = 'aliquid';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->bucketPrefix = 'aperiam';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->s3InputFormatConfig = new S3InputFormatConfig();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->s3->s3InputFormatConfig->s3InputFileType = S3InputFileTypeEnum::JSON;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->sapoData = new SAPODataSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->sapoData->objectPath = 'consectetur';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce = new SalesforceSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->dataTransferApi = SalesforceDataTransferApiEnum::BULKV2;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->enableDynamicFieldUpdate = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->includeDeletedRecords = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->salesforce->object = 'exercitationem';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->serviceNow = new ServiceNowSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->serviceNow->object = 'earum';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->singular = new SingularSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->singular->object = 'facere';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->slack = new SlackSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->slack->object = 'numquam';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->trendmicro = new TrendmicroSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->trendmicro->object = 'doloribus';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva = new VeevaSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->documentType = 'suscipit';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->includeAllVersions = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->includeRenditions = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->includeSourceFiles = false;
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->veeva->object = 'reiciendis';
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->zendesk = new ZendeskSourceProperties();
    $request->requestBody->sourceFlowConfig->sourceConnectorProperties->zendesk->object = 'quidem';
    $request->requestBody->tasks = [
        new Task(),
        new Task(),
        new Task(),
        new Task(),
    ];
    $request->requestBody->triggerConfig = new UpdateFlowRequestBodyTriggerConfig();
    $request->requestBody->triggerConfig->triggerProperties = new TriggerProperties();
    $request->requestBody->triggerConfig->triggerProperties->scheduled = new ScheduledTriggerProperties();
    $request->requestBody->triggerConfig->triggerProperties->scheduled->dataPullMode = DataPullModeEnum::COMPLETE;
    $request->requestBody->triggerConfig->triggerProperties->scheduled->firstExecutionFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-17T19:30:54.837Z');
    $request->requestBody->triggerConfig->triggerProperties->scheduled->flowErrorDeactivationThreshold = 992012;
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T23:04:48.771Z');
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleExpression = 'amet';
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleOffset = 105906;
    $request->requestBody->triggerConfig->triggerProperties->scheduled->scheduleStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T21:39:18.493Z');
    $request->requestBody->triggerConfig->triggerProperties->scheduled->timezone = 'debitis';
    $request->requestBody->triggerConfig->triggerType = TriggerTypeEnum::SCHEDULED;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'vitae';

    $response = $sdk->sdk->updateFlow($request);

    if ($response->updateFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
