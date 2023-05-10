# banks

### Available Operations

* [deleteBanksCategoriesIdCategory](#deletebankscategoriesidcategory) - Delete the supplied category
* [deleteCategoriesKeywordsIdKeyword](#deletecategorieskeywordsidkeyword) - Delete a particular key-value pair on a transaction.
* [deleteConnectionsIdConnectionSourcesIdSource](#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteConnectorsIdConnectorLogosIdLogo](#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster](#deleteusersiduseraccountsidaccounttransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [deleteUsersIdUserCategoriesFullIdFull](#deleteusersidusercategoriesfullidfull) - Delete a user-created transaction category
* [deleteUsersIdUserConnections](#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionAccounts](#deleteusersiduserconnectionsidconnectionaccounts) - Delete all accounts
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount](#deleteusersiduserconnectionsidconnectionaccountsidaccount) - Delete an account.
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions](#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Delete transactions
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations](#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - Delete all arbitrary key-value pairs of a transaction
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation](#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformationsidinformation) - Delete a particular key-value pair on a transaction.
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster](#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster](#deleteusersiduserconnectionsidconnectiontransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [deleteUsersIdUserTransactionsclustersIdTransactionscluster](#deleteusersidusertransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [getAccountTypes](#getaccounttypes) - Get account types
* [getAccountTypesIdAccountType](#getaccounttypesidaccounttype) - Get an account type
* [getBanks](#getbanks) - Get list of connectors
* [getBanksIdBank](#getbanksidbank) - Get a connector
* [getBanksIdConnectorConnections](#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [getBanksIdConnectorLogos](#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosMain](#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosThumbnail](#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getBanksIdConnectorSources](#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdConnectorSourceFields](#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getBanksIdConnectorSourcesIdSource](#getbanksidconnectorsourcesidsource) - Get the connector source
* [getCategories](#getcategories) - Get all categories
* [getConnections](#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorLogos](#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosMain](#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosThumbnail](#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorSources](#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdConnectorSourceFields](#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getConnectorsIdConnectorSourcesIdSource](#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getInvoicing](#getinvoicing) - Get invoicing data for a given period (default is the current month).
* [getLogs](#getlogs) - Get connection logs
* [getProviders](#getproviders) - Get list of connectors
* [getProvidersIdConnectorConnections](#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [getProvidersIdConnectorLogos](#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosMain](#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosThumbnail](#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorSources](#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdConnectorSourceFields](#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getProvidersIdConnectorSourcesIdSource](#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](#getprovidersidprovider) - Get a connector
* [getPsd2Registrations](#getpsd2registrations) - Get details on all psd2 registrations
* [getPsd2RegistrationsIdPsd2Registration](#getpsd2registrationsidpsd2registration) - Get details for a given psd2 registration
* [getPsd2RegistrationsIdPsd2registrationLogs](#getpsd2registrationsidpsd2registrationlogs) - Get psd2 registration logs.
* [getUsersIdUserAccountTypes](#getusersiduseraccounttypes) - Get account types
* [getUsersIdUserAccountTypesIdAccountType](#getusersiduseraccounttypesidaccounttype) - Get an account type
* [getUsersIdUserAccountsIdAccountCategories](#getusersiduseraccountsidaccountcategories) - Get the category
* [getUsersIdUserAccountsIdAccountTransactionsclusters](#getusersiduseraccountsidaccounttransactionsclusters) - Get clustered transactions
* [getUsersIdUserAlerts](#getusersiduseralerts) - Get alerts
* [getUsersIdUserCategories](#getusersidusercategories) - Get the category
* [getUsersIdUserCategoriesFull](#getusersidusercategoriesfull) - Get the category
* [getUsersIdUserConnections](#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionAccounts](#getusersiduserconnectionsidconnectionaccounts) - Get accounts list.
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories](#getusersiduserconnectionsidconnectionaccountsidaccountcategories) - Get the category
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta](#getusersiduserconnectionsidconnectionaccountsidaccountdelta) - Get deltas of accounts
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs](#getusersiduserconnectionsidconnectionaccountsidaccountlogs) - Get accounts logs.
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources](#getusersiduserconnectionsidconnectionaccountsidaccountsources) - Get account sources
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions](#getusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Get transactions
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations](#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - List all arbitrary key-value pairs on a transaction
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation](#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformationsidinformation) - Get a particular arbitrary key-value pair on a transaction
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters](#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsclusters) - Get clustered transactions
* [getUsersIdUserConnectionsIdConnectionInformations](#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserConnectionsIdConnectionTransactionsclusters](#getusersiduserconnectionsidconnectiontransactionsclusters) - Get clustered transactions
* [getUsersIdUserForecast](#getusersiduserforecast) - Get forecast
* [getUsersIdUserLogs](#getusersiduserlogs) - Get connection logs
* [getUsersIdUserTransactionsclusters](#getusersidusertransactionsclusters) - Get clustered transactions
* [postBanksCategories](#postbankscategories) - Create bank categories
* [postBanksCategoriesIdCategory](#postbankscategoriesidcategory) - Edit a bank categories
* [postCategoriesKeywords](#postcategorieskeywords) - Add a new keyword associated with a category in the database.
* [postCategorize](#postcategorize) - categorize transactions without storing them
* [postConnectionsIdConnectionSourcesIdSource](#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](#postconnectors) - Request a new connector
* [postConnectorsIdConnectorLogos](#postconnectorsidconnectorlogos) - Create a connector Logo
* [postUsersIdUserAccountsIdAccountTransactionsclusters](#postusersiduseraccountsidaccounttransactionsclusters) - Create clustered transaction
* [postUsersIdUserCategoriesFull](#postusersidusercategoriesfull) - Create a new transaction category
* [postUsersIdUserConnections](#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionAccounts](#postusersiduserconnectionsidconnectionaccounts) - Create an account
* [postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions](#postusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Create transactions
* [postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters](#postusersiduserconnectionsidconnectionaccountsidaccounttransactionsclusters) - Create clustered transaction
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [postUsersIdUserConnectionsIdConnectionTransactionsclusters](#postusersiduserconnectionsidconnectiontransactionsclusters) - Create clustered transaction
* [postUsersIdUserTransactionsclusters](#postusersidusertransactionsclusters) - Create clustered transaction
* [putConnectionsIdConnectionSourcesIdSource](#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectors](#putconnectors) - Enable/disable several connectors
* [putConnectorsIdConnector](#putconnectorsidconnector) - Edit the provided connector
* [putConnectorsIdConnectorLogos](#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [putConnectorsIdConnectorLogosIdLogo](#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
* [putConnectorsIdConnectorSources](#putconnectorsidconnectorsources) - Edit several connector sources
* [putConnectorsIdConnectorSourcesIdSource](#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster](#putusersiduseraccountsidaccounttransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [putUsersIdUserCategoriesFullIdFull](#putusersidusercategoriesfullidfull) - Modify a user-created category
* [putUsersIdUserConnectionsIdConnection](#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [putUsersIdUserConnectionsIdConnectionAccounts](#putusersiduserconnectionsidconnectionaccounts) - Update many accounts at once
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccount](#putusersiduserconnectionsidconnectionaccountsidaccount) - Update an account
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction](#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransaction) - Edit a transaction meta-data
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations](#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - Add or edit transaction arbitrary key-value pairs
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster](#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [putUsersIdUserConnectionsIdConnectionSourcesIdSource](#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source
* [putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster](#putusersiduserconnectionsidconnectiontransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [putUsersIdUserTransactionsclustersIdTransactionscluster](#putusersidusertransactionsclustersidtransactionscluster) - Edit a clustered transaction

## deleteBanksCategoriesIdCategory

Delete the supplied category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBanksCategoriesIdCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBanksCategoriesIdCategoryRequest();
    $request->expand = 'ut';
    $request->idCategory = 979587;

    $response = $sdk->banks->deleteBanksCategoriesIdCategory($request);

    if ($response->connectorCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCategoriesKeywordsIdKeyword

Delete a particular key-value pair on a transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCategoriesKeywordsIdKeywordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCategoriesKeywordsIdKeywordRequest();
    $request->expand = 'dicta';
    $request->idKeyword = 359444;

    $response = $sdk->banks->deleteCategoriesKeywordsIdKeyword($request);

    if ($response->keyword !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionsIdConnectionSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionsIdConnectionSourcesIdSourceRequest();
    $request->expand = 'dolore';
    $request->idConnection = 480894;
    $request->idSource = 118727;

    $response = $sdk->banks->deleteConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectorsIdConnectorLogosIdLogo

Delete a single Logo object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorsIdConnectorLogosIdLogoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectorsIdConnectorLogosIdLogoRequest();
    $request->expand = 'harum';
    $request->idConnector = 317983;
    $request->idLogo = 880476;

    $response = $sdk->banks->deleteConnectorsIdConnectorLogosIdLogo($request);

    if ($response->connectorLogo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'commodi';
    $request->idAccount = 918236;
    $request->idTransactionscluster = 64147;
    $request->idUser = 'ipsum';

    $response = $sdk->banks->deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserCategoriesFullIdFull

Delete a user-created transaction category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserCategoriesFullIdFullRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserCategoriesFullIdFullRequest();
    $request->expand = 'quidem';
    $request->idFull = 565189;
    $request->idUser = 'excepturi';

    $response = $sdk->banks->deleteUsersIdUserCategoriesFullIdFull($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnections

Delete all connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsRequest();
    $request->expand = 'pariatur';
    $request->idUser = 'modi';

    $response = $sdk->banks->deleteUsersIdUserConnections($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnection

This endpoint deletes a connection and all related accounts and transactions.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionRequest();
    $request->expand = 'praesentium';
    $request->idConnection = 523248;
    $request->idUser = 'voluptates';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionAccounts

Delete all accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionAccountsRequest();
    $request->expand = 'quasi';
    $request->idConnection = 921158;
    $request->idUser = 'sint';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionAccounts($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount

It deletes a specific account.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest();
    $request->expand = 'veritatis';
    $request->idAccount = 929297;
    $request->idConnection = 277718;
    $request->idUser = 'enim';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions

Delete transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest();
    $request->expand = 'consequatur';
    $request->idAccount = 667411;
    $request->idConnection = 842342;
    $request->idUser = 'explicabo';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions($request);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations

Delete all arbitrary key-value pairs of a transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest();
    $request->expand = 'deserunt';
    $request->idAccount = 716327;
    $request->idConnection = 841386;
    $request->idTransaction = 289406;
    $request->idUser = 'modi';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations($request);

    if ($response->transactionInformation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation

Delete a particular key-value pair on a transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest();
    $request->expand = 'qui';
    $request->idAccount = 397821;
    $request->idConnection = 586513;
    $request->idInformation = 552822;
    $request->idTransaction = 20107;
    $request->idUser = 'magni';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation($request);

    if ($response->transactionInformation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'assumenda';
    $request->idAccount = 369808;
    $request->idConnection = 4695;
    $request->idTransactionscluster = 146441;
    $request->idUser = 'dolorum';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest();
    $request->expand = 'excepturi';
    $request->idConnection = 270008;
    $request->idSource = 703737;
    $request->idUser = 'tempore';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'labore';
    $request->idConnection = 962189;
    $request->idTransactionscluster = 433288;
    $request->idUser = 'non';

    $response = $sdk->banks->deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'eligendi';
    $request->idTransactionscluster = 576157;
    $request->idUser = 'aliquid';

    $response = $sdk->banks->deleteUsersIdUserTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountTypes

Get account types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountTypesRequest();
    $request->expand = 'provident';

    $response = $sdk->banks->getAccountTypes($request);

    if ($response->getAccountTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountTypesIdAccountType

Get an account type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTypesIdAccountTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountTypesIdAccountTypeRequest();
    $request->expand = 'necessitatibus';
    $request->idAccountType = 572252;

    $response = $sdk->banks->getAccountTypesIdAccountType($request);

    if ($response->accountType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanks

Get list of connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksRequest();
    $request->expand = 'officia';

    $response = $sdk->banks->getBanks($request);

    if ($response->getBanks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdBank

Get a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdBankRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdBankRequest();
    $request->expand = 'dolor';
    $request->idBank = 891555;

    $response = $sdk->banks->getBanksIdBank($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorConnections

By default, it selects a set of 3 connections with the 'diversity' method<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorConnectionsRequest();
    $request->expand = 'a';
    $request->idConnector = 680056;
    $request->method = 'in';
    $request->minutesWithoutSync = 449198;
    $request->n = 846409;
    $request->occurences = 978571;
    $request->source = 'rerum';
    $request->type = 116202;

    $response = $sdk->banks->getBanksIdConnectorConnections($request);

    if ($response->getBanksIdConnectorConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorLogosRequest();
    $request->expand = 'magnam';
    $request->idConnector = 767024;

    $response = $sdk->banks->getBanksIdConnectorLogos($request);

    if ($response->getBanksIdConnectorLogos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorLogosMainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorLogosMainRequest();
    $request->expand = 'facere';
    $request->idConnector = 411820;

    $response = $sdk->banks->getBanksIdConnectorLogosMain($request);

    if ($response->getBanksIdConnectorLogosMain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorLogosThumbnailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorLogosThumbnailRequest();
    $request->expand = 'aliquid';
    $request->idConnector = 675439;

    $response = $sdk->banks->getBanksIdConnectorLogosThumbnail($request);

    if ($response->getBanksIdConnectorLogosThumbnail200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorSources

Get list of connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorSourcesRequest();
    $request->expand = 'accusamus';
    $request->idConnector = 249796;

    $response = $sdk->banks->getBanksIdConnectorSources($request);

    if ($response->getBanksIdConnectorSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest();
    $request->expand = 'occaecati';
    $request->idConnector = 313218;
    $request->idConnectorSource = 881736;

    $response = $sdk->banks->getBanksIdConnectorSourcesIdConnectorSourceFields($request);

    if ($response->getBanksIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorSourcesIdSourceRequest();
    $request->expand = 'delectus';
    $request->idConnector = 692532;
    $request->idSource = 588465;

    $response = $sdk->banks->getBanksIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategories

Ressource to get all existing categories<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesRequest();
    $request->expand = 'nam';

    $response = $sdk->banks->getCategories($request);

    if ($response->getCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnections

Get connections without a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsRequest();
    $request->expand = 'id';

    $response = $sdk->banks->getConnections($request);

    if ($response->getConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsIdConnectionLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsIdConnectionLogsRequest();
    $request->connectorUuid = 'blanditiis';
    $request->error = 'deleniti';
    $request->expand = 'sapiente';
    $request->idConnectionPathParameter = 230533;
    $request->idConnectionQueryParameter = 643990;
    $request->idConnector = 394869;
    $request->idMax = 423855;
    $request->idSource = 618809;
    $request->idUser = 606393;
    $request->limit = 474867;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-07-13');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-04-14');
    $request->offset = 660174;
    $request->period = 'labore';

    $response = $sdk->banks->getConnectionsIdConnectionLogs($request);

    if ($response->getConnectionsIdConnectionLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectionsIdConnectionSources

Get connection sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsIdConnectionSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsIdConnectionSourcesRequest();
    $request->expand = 'labore';
    $request->idConnection = 383462;

    $response = $sdk->banks->getConnectionsIdConnectionSources($request);

    if ($response->getConnectionsIdConnectionSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectors

Get list of connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsRequest();
    $request->expand = 'natus';

    $response = $sdk->banks->getConnectors($request);

    if ($response->getConnectors200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnector

Get a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorRequest();
    $request->expand = 'nobis';
    $request->idConnector = 428769;

    $response = $sdk->banks->getConnectorsIdConnector($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorLogosRequest();
    $request->expand = 'vero';
    $request->idConnector = 135474;

    $response = $sdk->banks->getConnectorsIdConnectorLogos($request);

    if ($response->getConnectorsIdConnectorLogos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorLogosMainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorLogosMainRequest();
    $request->expand = 'architecto';
    $request->idConnector = 298282;

    $response = $sdk->banks->getConnectorsIdConnectorLogosMain($request);

    if ($response->getConnectorsIdConnectorLogosMain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorLogosThumbnailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorLogosThumbnailRequest();
    $request->expand = 'et';
    $request->idConnector = 569965;

    $response = $sdk->banks->getConnectorsIdConnectorLogosThumbnail($request);

    if ($response->getConnectorsIdConnectorLogosThumbnail200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorSources

Get list of connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorSourcesRequest();
    $request->expand = 'ullam';
    $request->idConnector = 590873;

    $response = $sdk->banks->getConnectorsIdConnectorSources($request);

    if ($response->getConnectorsIdConnectorSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest();
    $request->expand = 'quos';
    $request->idConnector = 574325;
    $request->idConnectorSource = 33625;

    $response = $sdk->banks->getConnectorsIdConnectorSourcesIdConnectorSourceFields($request);

    if ($response->getConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorSourcesIdSourceRequest();
    $request->expand = 'mollitia';
    $request->idConnector = 968962;
    $request->idSource = 652103;

    $response = $sdk->banks->getConnectorsIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvoicing

You can get all the invoicing data or just specific ones by using the available parameters.<br><br>If no parameters are specified, no invoicing data is returned.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoicingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoicingRequest();
    $request->accountsSynced = 'ad';
    $request->all = 'eum';
    $request->connectionsAccount = 'dolor';
    $request->connectionsSynced = 'necessitatibus';
    $request->detail = 'odit';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-01-06');
    $request->paymentsSynced = 'debitis';
    $request->subscriptionsSynced = 'eius';
    $request->transfersSynced = 'maxime';
    $request->usersBank = 'deleniti';
    $request->usersBill = 'facilis';
    $request->usersSynced = 'in';

    $response = $sdk->banks->getInvoicing($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLogsRequest();
    $request->connectorUuid = 'architecto';
    $request->error = 'architecto';
    $request->expand = 'repudiandae';
    $request->idConnection = 352312;
    $request->idConnector = 714242;
    $request->idMax = 469249;
    $request->idSource = 998848;
    $request->idUser = 841140;
    $request->limit = 149448;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2020-05-25');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-11-02');
    $request->offset = 508315;
    $request->period = 'natus';

    $response = $sdk->banks->getLogs($request);

    if ($response->getLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProviders

Get list of connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersRequest();
    $request->expand = 'magni';

    $response = $sdk->banks->getProviders($request);

    if ($response->getProviders200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorConnections

By default, it selects a set of 3 connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorConnectionsRequest();
    $request->expand = 'sunt';
    $request->idConnector = 779051;
    $request->range = 848009;

    $response = $sdk->banks->getProvidersIdConnectorConnections($request);

    if ($response->getProvidersIdConnectorConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorLogosRequest();
    $request->expand = 'pariatur';
    $request->idConnector = 807319;

    $response = $sdk->banks->getProvidersIdConnectorLogos($request);

    if ($response->getProvidersIdConnectorLogos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorLogosMainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorLogosMainRequest();
    $request->expand = 'ea';
    $request->idConnector = 569101;

    $response = $sdk->banks->getProvidersIdConnectorLogosMain($request);

    if ($response->getProvidersIdConnectorLogosMain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorLogosThumbnailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorLogosThumbnailRequest();
    $request->expand = 'odit';
    $request->idConnector = 407183;

    $response = $sdk->banks->getProvidersIdConnectorLogosThumbnail($request);

    if ($response->getProvidersIdConnectorLogosThumbnail200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorSources

Get list of connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorSourcesRequest();
    $request->expand = 'accusantium';
    $request->idConnector = 69167;

    $response = $sdk->banks->getProvidersIdConnectorSources($request);

    if ($response->getProvidersIdConnectorSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest();
    $request->expand = 'maiores';
    $request->idConnector = 697429;
    $request->idConnectorSource = 373291;

    $response = $sdk->banks->getProvidersIdConnectorSourcesIdConnectorSourceFields($request);

    if ($response->getProvidersIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorSourcesIdSourceRequest();
    $request->expand = 'voluptate';
    $request->idConnector = 420075;
    $request->idSource = 722056;

    $response = $sdk->banks->getProvidersIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdProvider

Get a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdProviderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdProviderRequest();
    $request->expand = 'eaque';
    $request->idProvider = 866383;

    $response = $sdk->banks->getProvidersIdProvider($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPsd2Registrations

Get details on all psd2 registrations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPsd2RegistrationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPsd2RegistrationsRequest();
    $request->expand = 'nemo';

    $response = $sdk->banks->getPsd2Registrations($request);

    if ($response->getPsd2Registrations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPsd2RegistrationsIdPsd2Registration

Get details for a given psd2 registration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPsd2RegistrationsIdPsd2RegistrationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPsd2RegistrationsIdPsd2RegistrationRequest();
    $request->expand = 'voluptatibus';
    $request->idPsd2Registration = 16627;

    $response = $sdk->banks->getPsd2RegistrationsIdPsd2Registration($request);

    if ($response->psd2Registration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPsd2RegistrationsIdPsd2registrationLogs

Get logs of psd2 registration. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPsd2RegistrationsIdPsd2registrationLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPsd2RegistrationsIdPsd2registrationLogsRequest();
    $request->expand = 'fugiat';
    $request->idPsd2registration = 230742;
    $request->limit = 11714;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-12-02');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2020-10-23');
    $request->offset = 749999;

    $response = $sdk->banks->getPsd2RegistrationsIdPsd2registrationLogs($request);

    if ($response->getPsd2RegistrationsIdPsd2registrationLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserAccountTypes

Get account types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserAccountTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserAccountTypesRequest();
    $request->expand = 'dolores';
    $request->idUser = 'quis';

    $response = $sdk->banks->getUsersIdUserAccountTypes($request);

    if ($response->getUsersIdUserAccountTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserAccountTypesIdAccountType

Get an account type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserAccountTypesIdAccountTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserAccountTypesIdAccountTypeRequest();
    $request->expand = 'totam';
    $request->idAccountType = 489549;
    $request->idUser = 'eaque';

    $response = $sdk->banks->getUsersIdUserAccountTypesIdAccountType($request);

    if ($response->accountType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserAccountsIdAccountCategories

Ressource to get categories for the user's transactions<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserAccountsIdAccountCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserAccountsIdAccountCategoriesRequest();
    $request->idAccount = 338985;
    $request->idUser = 'nesciunt';

    $response = $sdk->banks->getUsersIdUserAccountsIdAccountCategories($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserAccountsIdAccountTransactionsclusters

Get clustered transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserAccountsIdAccountTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserAccountsIdAccountTransactionsclustersRequest();
    $request->expand = 'eos';
    $request->idAccount = 18521;
    $request->idUser = 'dolores';

    $response = $sdk->banks->getUsersIdUserAccountsIdAccountTransactionsclusters($request);

    if ($response->getUsersIdUserAccountsIdAccountTransactionsclusters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserAlerts

Get alerts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserAlertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserAlertsRequest();
    $request->expand = 'minus';
    $request->idUser = 'quam';

    $response = $sdk->banks->getUsersIdUserAlerts($request);

    if ($response->getUsersIdUserAlerts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserCategories

Ressource to get categories for the user's transactions<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserCategoriesRequest();
    $request->idUser = 'dolor';

    $response = $sdk->banks->getUsersIdUserCategories($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserCategoriesFull

Ressource to get categories<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserCategoriesFullRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserCategoriesFullRequest();
    $request->expand = 'vero';
    $request->idUser = 'nostrum';

    $response = $sdk->banks->getUsersIdUserCategoriesFull($request);

    if ($response->getUsersIdUserCategoriesFull200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnections

Get connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsRequest();
    $request->expand = 'hic';
    $request->idUser = 'recusandae';

    $response = $sdk->banks->getUsersIdUserConnections($request);

    if ($response->getUsersIdUserConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccounts

Get accounts list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsRequest();
    $request->expand = 'omnis';
    $request->idConnection = 704415;
    $request->idUser = 'perspiciatis';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccounts($request);

    if ($response->getUsersIdUserConnectionsIdConnectionAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories

Ressource to get categories for the user's transactions<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRequest();
    $request->idAccount = 31838;
    $request->idConnection = 783645;
    $request->idUser = 'consequuntur';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta

Get account delta between sums of transactions and difference of account balance for the given period.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRequest();
    $request->idAccount = 500026;
    $request->idConnection = 621479;
    $request->idUser = 'eaque';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-08-08');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-01-03');
    $request->period = 'earum';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs

Get logs of account. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRequest();
    $request->expand = 'modi';
    $request->idAccount = 613966;
    $request->idConnection = 679091;
    $request->idUser = 'deleniti';
    $request->limit = 864282;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-07-01');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2021-01-26');
    $request->offset = 311945;

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs($request);

    if ($response->getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources

Get account sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRequest();
    $request->expand = 'quos';
    $request->idAccount = 398221;
    $request->idConnection = 212390;
    $request->idUser = 'dolorem';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources($request);

    if ($response->getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions

Get list of transactions.<br><br>By default, it selects transactions for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest();
    $request->all = false;
    $request->deleted = false;
    $request->expand = 'dolor';
    $request->idAccount = 186193;
    $request->idCategory = 218749;
    $request->idConnection = 944373;
    $request->idUser = 'excepturi';
    $request->income = false;
    $request->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T23:02:58.199Z');
    $request->limit = 490459;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-04-26');
    $request->maxValue = 6805.45;
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-11-30');
    $request->minValue = 580.29;
    $request->offset = 56418;
    $request->search = 'iure';
    $request->value = 'odio';
    $request->wording = 'quaerat';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions($request);

    if ($response->getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations

List all arbitrary key-value pairs on a transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest();
    $request->expand = 'accusamus';
    $request->idAccount = 696344;
    $request->idConnection = 976405;
    $request->idTransaction = 377752;
    $request->idUser = 'natus';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations($request);

    if ($response->getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation

Get a particular arbitrary key-value pair on a transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest();
    $request->expand = 'eos';
    $request->idAccount = 542499;
    $request->idConnection = 24678;
    $request->idInformation = 854614;
    $request->idTransaction = 67249;
    $request->idUser = 'soluta';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation($request);

    if ($response->transactionInformation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters

Get clustered transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest();
    $request->expand = 'dolorum';
    $request->idAccount = 478596;
    $request->idConnection = 453697;
    $request->idUser = 'dolorum';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters($request);

    if ($response->getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionInformations

<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionInformationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionInformationsRequest();
    $request->expand = 'deleniti';
    $request->idConnection = 607045;
    $request->idUser = 'necessitatibus';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionInformations($request);

    if ($response->getUsersIdUserConnectionsIdConnectionInformations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionLogsRequest();
    $request->connectorUuid = 'distinctio';
    $request->error = 'asperiores';
    $request->expand = 'nihil';
    $request->idConnectionPathParameter = 216897;
    $request->idConnectionQueryParameter = 456015;
    $request->idConnector = 663078;
    $request->idMax = 906418;
    $request->idSource = 263322;
    $request->idUserPathParameter = 'aspernatur';
    $request->idUserQueryParameter = 20651;
    $request->limit = 229219;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2020-05-10');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-02-04');
    $request->offset = 383464;
    $request->period = 'deserunt';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionLogs($request);

    if ($response->getUsersIdUserConnectionsIdConnectionLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionSources

Get connection sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionSourcesRequest();
    $request->expand = 'provident';
    $request->idConnection = 324683;
    $request->idUser = 'repellendus';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionSources($request);

    if ($response->getUsersIdUserConnectionsIdConnectionSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionTransactionsclusters

Get clustered transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionTransactionsclustersRequest();
    $request->expand = 'totam';
    $request->idConnection = 628982;
    $request->idUser = 'alias';

    $response = $sdk->banks->getUsersIdUserConnectionsIdConnectionTransactionsclusters($request);

    if ($response->getUsersIdUserConnectionsIdConnectionTransactionsclusters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserForecast

Get forecast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserForecastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserForecastRequest();
    $request->idUser = 'at';

    $response = $sdk->banks->getUsersIdUserForecast($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserLogsRequest();
    $request->connectorUuid = 'quaerat';
    $request->error = 'tempora';
    $request->expand = 'vel';
    $request->idConnection = 798047;
    $request->idConnector = 885338;
    $request->idMax = 185636;
    $request->idSource = 679880;
    $request->idUserPathParameter = 'a';
    $request->idUserQueryParameter = 456130;
    $request->limit = 687488;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-10-14');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2020-02-28');
    $request->offset = 229442;
    $request->period = 'tempore';

    $response = $sdk->banks->getUsersIdUserLogs($request);

    if ($response->getUsersIdUserLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserTransactionsclusters

Get clustered transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserTransactionsclustersRequest();
    $request->expand = 'accusamus';
    $request->idUser = 'numquam';

    $response = $sdk->banks->getUsersIdUserTransactionsclusters($request);

    if ($response->getUsersIdUserTransactionsclusters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBanksCategories

It requires the name of the category to be created<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBanksCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostBanksCategoriesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBanksCategoriesRequest();
    $request->requestBody = new PostBanksCategoriesRequestBody();
    $request->requestBody->name = 'Florence Will';
    $request->expand = 'sit';

    $response = $sdk->banks->postBanksCategories($request);

    if ($response->connectorCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBanksCategoriesIdCategory

Edit the name for the supplied category.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBanksCategoriesIdCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostBanksCategoriesIdCategoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBanksCategoriesIdCategoryRequest();
    $request->requestBody = new PostBanksCategoriesIdCategoryRequestBody();
    $request->requestBody->name = 'Luis Cremin';
    $request->expand = 'voluptas';
    $request->idCategory = 646265;

    $response = $sdk->banks->postBanksCategoriesIdCategory($request);

    if ($response->connectorCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCategoriesKeywords

If the keyword already exists the keyword is not added. Used for the categorization of transactions.<br><br>Form params: - id_category (integer): a reference towards the category associated with the keyword - keyword (string): the searched keyword - income (bool): 1 if the associated category represents an income else 0 - priority (integer): sets the priority for the keyword, used when categorizing<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCategoriesKeywordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCategoriesKeywordsRequest();
    $request->expand = 'quam';

    $response = $sdk->banks->postCategoriesKeywords($request);

    if ($response->keyword !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCategorize

It requires an array of transaction dictionaries. Any fields of transactions that are not required will be kept in the response. The response contains the list of transactions with two more fields: id_category and state (it indicates how the transaction has been categorized)<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCategorizeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCategorizeRequestBody();
    $request->type = 'ipsum';
    $request->value = 277628;
    $request->wording = 'qui';

    $response = $sdk->banks->postCategorize($request);

    if ($response->postCategorize200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PostConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'cupiditate';
    $request->idConnection = 807581;
    $request->idSource = 863856;

    $response = $sdk->banks->postConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConnectors

Send a request to add a new connector<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConnectorsRequest();
    $request->requestBody = new PostConnectorsRequestBody();
    $request->requestBody->comment = 'soluta';
    $request->requestBody->email = 'Marguerite13@gmail.com';
    $request->requestBody->login = 'dolores';
    $request->requestBody->name = 'Cesar Hyatt';
    $request->requestBody->password = 'temporibus';
    $request->requestBody->sendmail = false;
    $request->requestBody->types = 'qui';
    $request->requestBody->url = 'neque';
    $request->expand = 'fugit';

    $response = $sdk->banks->postConnectors($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConnectorsIdConnectorLogos

This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectorsIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConnectorsIdConnectorLogosRequest();
    $request->expand = 'magni';
    $request->idConnector = 488056;

    $response = $sdk->banks->postConnectorsIdConnectorLogos($request);

    if ($response->connectorLogo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserAccountsIdAccountTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserAccountsIdAccountTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserAccountsIdAccountTransactionsclustersRequest();
    $request->expand = 'sunt';
    $request->idAccount = 355613;
    $request->idUser = 'nam';

    $response = $sdk->banks->postUsersIdUserAccountsIdAccountTransactionsclusters($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserCategoriesFull

Create a new transaction category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserCategoriesFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserCategoriesFullRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserCategoriesFullRequest();
    $request->requestBody = new PostUsersIdUserCategoriesFullRequestBody();
    $request->requestBody->accountantAccount = 'hic';
    $request->requestBody->color = 'voluptatem';
    $request->requestBody->idParentCategory = 765326;
    $request->requestBody->idParentCategoryInMenu = 746994;
    $request->requestBody->income = false;
    $request->requestBody->name = 'Carl Turner DDS';
    $request->requestBody->refundable = false;
    $request->expand = 'quos';
    $request->idUser = 'tempore';

    $response = $sdk->banks->postUsersIdUserCategoriesFull($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnections

Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsRequest();
    $request->requestBody = new PostUsersIdUserConnectionsRequestBody();
    $request->requestBody->connectorUuid = 'cupiditate';
    $request->requestBody->idConnector = 45614;
    $request->expand = 'delectus';
    $request->idUser = 'dolorem';
    $request->source = 'dolore';

    $response = $sdk->banks->postUsersIdUserConnections($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnection

Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionRequest();
    $request->requestBody = new PostUsersIdUserConnectionsIdConnectionRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->decoupled = false;
    $request->requestBody->expire = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T02:20:22.923Z');
    $request->requestBody->login = 'dolorum';
    $request->requestBody->password = 'architecto';
    $request->background = false;
    $request->expand = 'quae';
    $request->idConnection = 16429;
    $request->idUser = 'quas';
    $request->psuRequested = false;
    $request->refreshPsd2Auth = false;

    $response = $sdk->banks->postUsersIdUserConnectionsIdConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnectionAccounts

This endpoint creates an account related to a connection or not.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionAccountsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionAccountsRequest();
    $request->requestBody = new PostUsersIdUserConnectionsIdConnectionAccountsRequestBody();
    $request->requestBody->balance = 9295.3;
    $request->requestBody->iban = 'consequatur';
    $request->requestBody->idConnection = 669917;
    $request->requestBody->idCurrency = 'repellendus';
    $request->requestBody->name = 'Domingo Grady';
    $request->requestBody->number = 'qui';
    $request->expand = 'quae';
    $request->idConnection = 512393;
    $request->idUser = 'odio';

    $response = $sdk->banks->postUsersIdUserConnectionsIdConnectionAccounts($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions

Create transactions for the supplied account or the account whose id is given with form parameters. It requires an array of transaction dictionaries.<br><br><br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest();
    $request->requestBody = new PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->coming = false;
    $request->requestBody->date = DateTime::createFromFormat('Y-m-d', '2021-01-17');
    $request->requestBody->dateScraped = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-16T05:26:31.901Z');
    $request->requestBody->idAccount = 606476;
    $request->requestBody->originalWording = 'quis';
    $request->requestBody->rdate = DateTime::createFromFormat('Y-m-d', '2022-01-15');
    $request->requestBody->state = 'voluptate';
    $request->requestBody->type = 'consectetur';
    $request->requestBody->value = 878870;
    $request->expand = 'tenetur';
    $request->idAccount = 492268;
    $request->idConnection = 941378;
    $request->idUser = 'distinctio';

    $response = $sdk->banks->postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions($request);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest();
    $request->expand = 'quod';
    $request->idAccount = 486160;
    $request->idConnection = 630448;
    $request->idUser = 'facilis';

    $response = $sdk->banks->postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'vero';
    $request->idConnection = 498140;
    $request->idSource = 293020;
    $request->idUser = 'quibusdam';

    $response = $sdk->banks->postUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnectionTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionTransactionsclustersRequest();
    $request->expand = 'illum';
    $request->idConnection = 194342;
    $request->idUser = 'natus';

    $response = $sdk->banks->postUsersIdUserConnectionsIdConnectionTransactionsclusters($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserTransactionsclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserTransactionsclustersRequest();
    $request->expand = 'impedit';
    $request->idUser = 'aut';

    $response = $sdk->banks->postUsersIdUserTransactionsclusters($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PutConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->force = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'voluptatibus';
    $request->idConnection = 347233;
    $request->idSource = 862310;

    $response = $sdk->banks->putConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectors

Enable/disable several connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsRequest();
    $request->requestBody = new PutConnectorsRequestBody();
    $request->requestBody->hidden = false;
    $request->expand = 'fugit';

    $response = $sdk->banks->putConnectors($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnector

<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorRequest();
    $request->requestBody = new PutConnectorsIdConnectorRequestBody();
    $request->requestBody->authMechanism = 'porro';
    $request->requestBody->hidden = false;
    $request->requestBody->idCategories = 'maiores';
    $request->requestBody->syncFrequency = 985033;
    $request->expand = 'iusto';
    $request->idConnector = 753570;

    $response = $sdk->banks->putConnectorsIdConnector($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorLogos

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorLogosRequest();
    $request->expand = 'ducimus';
    $request->idConnector = 4048;

    $response = $sdk->banks->putConnectorsIdConnectorLogos($request);

    if ($response->connectorLogo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorLogosIdLogo

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorLogosIdLogoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorLogosIdLogoRequest();
    $request->expand = 'officia';
    $request->idConnector = 269479;
    $request->idLogo = 368584;

    $response = $sdk->banks->putConnectorsIdConnectorLogosIdLogo($request);

    if ($response->connectorLogo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorSources

Edit several connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorSourcesRequest();
    $request->requestBody = new PutConnectorsIdConnectorSourcesRequestBody();
    $request->requestBody->disabledCapabilities = 'ea';
    $request->requestBody->unavailableCapabilities = 'aspernatur';
    $request->expand = 'vel';
    $request->idConnector = 822118;

    $response = $sdk->banks->putConnectorsIdConnectorSources($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorSourcesIdSource

Edit the provided connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorSourcesIdSourceRequest();
    $request->requestBody = new PutConnectorsIdConnectorSourcesIdSourceRequestBody();
    $request->requestBody->authMechanism = 'magnam';
    $request->requestBody->disabled = false;
    $request->requestBody->disabledCapabilities = 'ratione';
    $request->requestBody->unavailable = false;
    $request->requestBody->unavailableCapabilities = 'ex';
    $request->expand = 'laudantium';
    $request->idConnector = 120657;
    $request->idSource = 224317;

    $response = $sdk->banks->putConnectorsIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'maiores';
    $request->idAccount = 97844;
    $request->idTransactionscluster = 406120;
    $request->idUser = 'nulla';

    $response = $sdk->banks->putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserCategoriesFullIdFull

Modify a user-created category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserCategoriesFullIdFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserCategoriesFullIdFullRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserCategoriesFullIdFullRequest();
    $request->requestBody = new PutUsersIdUserCategoriesFullIdFullRequestBody();
    $request->requestBody->accountantAccount = 'excepturi';
    $request->requestBody->hide = 'voluptatibus';
    $request->expand = 'nostrum';
    $request->idFull = 960835;
    $request->idUser = 'quisquam';

    $response = $sdk->banks->putUsersIdUserCategoriesFullIdFull($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnection

We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionRequest();
    $request->background = false;
    $request->expand = 'saepe';
    $request->idConnection = 411372;
    $request->idUser = 'impedit';
    $request->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T09:38:53.685Z');
    $request->psuRequested = false;

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionAccounts

Update many accounts at once

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionAccountsRequest();
    $request->expand = 'aliquid';
    $request->idConnection = 81101;
    $request->idUser = 'magnam';

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnectionAccounts($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccount

It updates a specific account<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest();
    $request->requestBody = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequestBody();
    $request->requestBody->balance = 4072.41;
    $request->requestBody->bookmarked = false;
    $request->requestBody->disabled = false;
    $request->requestBody->display = false;
    $request->requestBody->iban = 'quo';
    $request->requestBody->name = 'Kate Cole DVM';
    $request->requestBody->usage = 'libero';
    $request->expand = 'aut';
    $request->idAccount = 11427;
    $request->idConnection = 533466;
    $request->idUser = 'impedit';

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnectionAccountsIdAccount($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction

Edit a transaction meta-data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequest();
    $request->requestBody = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->applicationDate = DateTime::createFromFormat('Y-m-d', '2022-11-08');
    $request->requestBody->comment = 'accusamus';
    $request->requestBody->idCategory = 79522;
    $request->requestBody->wording = 'non';
    $request->expand = 'et';
    $request->idAccount = 677412;
    $request->idConnection = 672048;
    $request->idTransaction = 810424;
    $request->idUser = 'velit';

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction($request);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations

Add or edit transaction arbitrary key-value pairs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest();
    $request->expand = 'eum';
    $request->idAccount = 420539;
    $request->idConnection = 752135;
    $request->idTransaction = 557369;
    $request->idUser = 'assumenda';

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations($request);

    if ($response->transactionInformation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'nulla';
    $request->idAccount = 379034;
    $request->idConnection = 727044;
    $request->idTransactionscluster = 96549;
    $request->idUser = 'tempora';

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->force = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'numquam';
    $request->idConnection = 131482;
    $request->idSource = 591935;
    $request->idUser = 'ipsa';

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'molestiae';
    $request->idConnection = 301598;
    $request->idTransactionscluster = 487935;
    $request->idUser = 'eius';

    $response = $sdk->banks->putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserTransactionsclustersIdTransactionsclusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserTransactionsclustersIdTransactionsclusterRequest();
    $request->expand = 'esse';
    $request->idTransactionscluster = 456141;
    $request->idUser = 'rem';

    $response = $sdk->banks->putUsersIdUserTransactionsclustersIdTransactionscluster($request);

    if ($response->transactionsCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
