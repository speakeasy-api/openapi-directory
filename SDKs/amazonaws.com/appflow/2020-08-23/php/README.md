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
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->connectionMode = CreateConnectorProfileRequestBodyConnectionModeEnum::PRIVATE;
    $request->requestBody->connectorLabel = 'distinctio';
    $request->requestBody->connectorProfileConfig = new CreateConnectorProfileRequestBodyConnectorProfileConfig();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials = new ConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude = new AmplitudeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude->apiKey = 'quibusdam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->amplitude->secretKey = 'unde';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector = new CustomConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey = new ApiKeyCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey->apiKey = 'nulla';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->apiKey->apiSecretKey = 'corrupti';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->authenticationType = AuthenticationTypeEnum::CUSTOM;
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic = new BasicAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic->password = 'vel';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->basic->username = 'Linda.Oberbrunner';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom = new CustomAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom->credentialsMap = [
        'debitis' => 'ipsa',
        'delectus' => 'tempora',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->custom->customAuthenticationType = 'suscipit';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2 = new OAuth2Credentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->accessToken = 'molestiae';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->clientId = 'minus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->clientSecret = 'placeat';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest->authCode = 'voluptatum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->oAuthRequest->redirectUri = 'iusto';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->customConnector->oauth2->refreshToken = 'excepturi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog = new DatadogConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog->apiKey = 'nisi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->datadog->applicationKey = 'recusandae';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->dynatrace = new DynatraceConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->dynatrace->apiToken = 'temporibus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->accessToken = 'ab';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->clientId = 'quis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->clientSecret = 'veritatis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest->authCode = 'deserunt';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->oAuthRequest->redirectUri = 'perferendis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->googleAnalytics->refreshToken = 'ipsam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode = new HoneycodeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->accessToken = 'repellendus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest->authCode = 'sapiente';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->oAuthRequest->redirectUri = 'quo';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->honeycode->refreshToken = 'odit';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus = new InforNexusConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->accessKeyId = 'at';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->datakey = 'at';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->secretAccessKey = 'maiores';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->inforNexus->userId = 'molestiae';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo = new MarketoConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->accessToken = 'quod';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->clientId = 'quod';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->clientSecret = 'esse';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest->authCode = 'totam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->marketo->oAuthRequest->redirectUri = 'porro';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot = new PardotConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->accessToken = 'dolorum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->clientCredentialsArn = 'dicta';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest->authCode = 'nam';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->oAuthRequest->redirectUri = 'officia';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->pardot->refreshToken = 'occaecati';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift = new RedshiftConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift->password = 'fugit';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->redshift->username = 'Kale_Welch10';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData = new SAPODataConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials = new BasicAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials->password = 'commodi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->basicAuthCredentials->username = 'Jaren77';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials = new OAuthCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->accessToken = 'cum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->clientId = 'esse';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->clientSecret = 'ipsum';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest->authCode = 'excepturi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->oAuthRequest->redirectUri = 'aspernatur';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->sapoData->oAuthCredentials->refreshToken = 'perferendis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce = new SalesforceConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->accessToken = 'ad';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->clientCredentialsArn = 'natus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest->authCode = 'sed';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->oAuthRequest->redirectUri = 'iste';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->salesforce->refreshToken = 'dolor';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow = new ServiceNowConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow->password = 'natus';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->serviceNow->username = 'Gertrude_Welch44';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->singular = new SingularConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->singular->apiKey = 'corporis';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack = new SlackConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->accessToken = 'iste';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->clientId = 'iure';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->clientSecret = 'saepe';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest->authCode = 'quidem';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->slack->oAuthRequest->redirectUri = 'architecto';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake = new SnowflakeConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake->password = 'ipsa';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->snowflake->username = 'Waino_Orn';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->trendmicro = new TrendmicroConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->trendmicro->apiSecretKey = 'dolores';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva = new VeevaConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva->password = 'dolorem';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->veeva->username = 'Florian.Champlin60';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk = new ZendeskConnectorProfileCredentials();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->accessToken = 'nemo';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->clientId = 'minima';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->clientSecret = 'excepturi';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest = new ConnectorOAuthRequest();
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest->authCode = 'accusantium';
    $request->requestBody->connectorProfileConfig->connectorProfileCredentials->zendesk->oAuthRequest->redirectUri = 'iure';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties = new ConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->amplitude = [
        'doloribus' => 'sapiente',
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector = new CustomConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties = new OAuth2Properties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->oAuth2GrantType = OAuth2GrantTypeEnum::CLIENT_CREDENTIALS;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->tokenUrl = 'repellat';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->oAuth2Properties->tokenUrlCustomProperties = [
        'occaecati' => 'numquam',
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->customConnector->profileProperties = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->datadog = new DatadogConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->datadog->instanceUrl = 'odit';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->dynatrace = new DynatraceConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->dynatrace->instanceUrl = 'quo';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->googleAnalytics = [
        'tenetur' => 'ipsam',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->honeycode = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->inforNexus = new InforNexusConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->inforNexus->instanceUrl = 'quasi';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->marketo = new MarketoConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->marketo->instanceUrl = 'reiciendis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot = new PardotConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->businessUnitId = 'voluptatibus';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->instanceUrl = 'vero';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->pardot->isSandboxEnvironment = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift = new RedshiftConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->bucketName = 'nihil';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->bucketPrefix = 'praesentium';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->clusterIdentifier = 'voluptatibus';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->dataApiRoleArn = 'ipsa';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->databaseName = 'omnis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->databaseUrl = 'voluptate';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->isRedshiftServerless = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->roleArn = 'cum';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->redshift->workgroupName = 'perferendis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData = new SAPODataConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->applicationHostUrl = 'doloremque';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->applicationServicePath = 'reprehenderit';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->clientNumber = 'ut';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->logonLanguage = 'maiores';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties = new OAuthProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->authCodeUrl = 'dicta';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->oAuthScopes = [
        'dolore',
        'iusto',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->oAuthProperties->tokenUrl = 'dicta';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->portNumber = 688661;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->sapoData->privateLinkServiceName = 'enim';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce = new SalesforceConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->instanceUrl = 'accusamus';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->isSandboxEnvironment = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->salesforce->usePrivateLinkForMetadataAndAuthorization = false;
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->serviceNow = new ServiceNowConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->serviceNow->instanceUrl = 'commodi';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->singular = [
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->slack = new SlackConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->slack->instanceUrl = 'rem';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake = new SnowflakeConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->accountName = 'voluptates';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->bucketName = 'quasi';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->bucketPrefix = 'repudiandae';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->privateLinkServiceName = 'sint';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->region = 'veritatis';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->stage = 'itaque';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->snowflake->warehouse = 'incidunt';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->trendmicro = [
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
    ];
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->veeva = new VeevaConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->veeva->instanceUrl = 'deserunt';
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->zendesk = new ZendeskConnectorProfileProperties();
    $request->requestBody->connectorProfileConfig->connectorProfileProperties->zendesk->instanceUrl = 'distinctio';
    $request->requestBody->connectorProfileName = 'quibusdam';
    $request->requestBody->connectorType = CreateConnectorProfileRequestBodyConnectorTypeEnum::GOOGLEANALYTICS;
    $request->requestBody->kmsArn = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->createConnectorProfile($request);

    if ($response->createConnectorProfileResponse !== null) {
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

* [createConnectorProfile](docs/sdk/README.md#createconnectorprofile) -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* [createFlow](docs/sdk/README.md#createflow) -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* [deleteConnectorProfile](docs/sdk/README.md#deleteconnectorprofile) -  Enables you to delete an existing connector profile. 
* [deleteFlow](docs/sdk/README.md#deleteflow) -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* [describeConnector](docs/sdk/README.md#describeconnector) - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* [describeConnectorEntity](docs/sdk/README.md#describeconnectorentity) -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* [describeConnectorProfiles](docs/sdk/README.md#describeconnectorprofiles) - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* [describeConnectors](docs/sdk/README.md#describeconnectors) -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* [describeFlow](docs/sdk/README.md#describeflow) -  Provides a description of the specified flow. 
* [describeFlowExecutionRecords](docs/sdk/README.md#describeflowexecutionrecords) -  Fetches the execution history of the flow. 
* [listConnectorEntities](docs/sdk/README.md#listconnectorentities) -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* [listConnectors](docs/sdk/README.md#listconnectors) - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* [listFlows](docs/sdk/README.md#listflows) -  Lists all of the flows associated with your account. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Retrieves the tags that are associated with a specified flow. 
* [registerConnector](docs/sdk/README.md#registerconnector) - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* [startFlow](docs/sdk/README.md#startflow) -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* [stopFlow](docs/sdk/README.md#stopflow) -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* [tagResource](docs/sdk/README.md#tagresource) -  Applies a tag to the specified flow. 
* [unregisterConnector](docs/sdk/README.md#unregisterconnector) - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* [untagResource](docs/sdk/README.md#untagresource) -  Removes a tag from the specified flow. 
* [updateConnectorProfile](docs/sdk/README.md#updateconnectorprofile) -  Updates a given connector profile associated with your account. 
* [updateConnectorRegistration](docs/sdk/README.md#updateconnectorregistration) - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* [updateFlow](docs/sdk/README.md#updateflow) -  Updates an existing flow. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
