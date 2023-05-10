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