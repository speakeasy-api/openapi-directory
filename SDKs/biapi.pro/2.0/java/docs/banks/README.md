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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBanksCategoriesIdCategoryRequest;
import org.openapis.openapi.models.operations.DeleteBanksCategoriesIdCategoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBanksCategoriesIdCategoryRequest req = new DeleteBanksCategoriesIdCategoryRequest(976460L) {{
                expand = "vero";
            }};            

            DeleteBanksCategoriesIdCategoryResponse res = sdk.banks.deleteBanksCategoriesIdCategory(req);

            if (res.connectorCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCategoriesKeywordsIdKeyword

Delete a particular key-value pair on a transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCategoriesKeywordsIdKeywordRequest;
import org.openapis.openapi.models.operations.DeleteCategoriesKeywordsIdKeywordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCategoriesKeywordsIdKeywordRequest req = new DeleteCategoriesKeywordsIdKeywordRequest(468651L) {{
                expand = "praesentium";
            }};            

            DeleteCategoriesKeywordsIdKeywordResponse res = sdk.banks.deleteCategoriesKeywordsIdKeyword(req);

            if (res.keyword != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.DeleteConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectionsIdConnectionSourcesIdSourceRequest req = new DeleteConnectionsIdConnectionSourcesIdSourceRequest(976762L, 55714L) {{
                expand = "omnis";
            }};            

            DeleteConnectionsIdConnectionSourcesIdSourceResponse res = sdk.banks.deleteConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectorsIdConnectorLogosIdLogo

Delete a single Logo object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectorsIdConnectorLogosIdLogoRequest;
import org.openapis.openapi.models.operations.DeleteConnectorsIdConnectorLogosIdLogoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectorsIdConnectorLogosIdLogoRequest req = new DeleteConnectorsIdConnectorLogosIdLogoRequest(451159L, 739264L) {{
                expand = "perferendis";
            }};            

            DeleteConnectorsIdConnectorLogosIdLogoResponse res = sdk.banks.deleteConnectorsIdConnectorLogosIdLogo(req);

            if (res.connectorLogo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest req = new DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest(39187L, 441711L, "ut") {{
                expand = "maiores";
            }};            

            DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserCategoriesFullIdFull

Delete a user-created transaction category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserCategoriesFullIdFullRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserCategoriesFullIdFullResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserCategoriesFullIdFullRequest req = new DeleteUsersIdUserCategoriesFullIdFullRequest(120196L, "corporis") {{
                expand = "dolore";
            }};            

            DeleteUsersIdUserCategoriesFullIdFullResponse res = sdk.banks.deleteUsersIdUserCategoriesFullIdFull(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnections

Delete all connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsRequest req = new DeleteUsersIdUserConnectionsRequest("iusto") {{
                expand = "dicta";
            }};            

            DeleteUsersIdUserConnectionsResponse res = sdk.banks.deleteUsersIdUserConnections(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnection

This endpoint deletes a connection and all related accounts and transactions.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionRequest req = new DeleteUsersIdUserConnectionsIdConnectionRequest(688661L, "enim") {{
                expand = "accusamus";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionAccounts

Delete all accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionAccountsRequest req = new DeleteUsersIdUserConnectionsIdConnectionAccountsRequest(414263L, "repudiandae") {{
                expand = "quae";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionAccountsResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionAccounts(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount

It deletes a specific account.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest req = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest(216822L, 692472L, "molestias") {{
                expand = "excepturi";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions

Delete transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest req = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest(865103L, 265389L, "praesentium") {{
                expand = "rem";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(req);

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations

Delete all arbitrary key-value pairs of a transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest req = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest(916723L, 93940L, 921158L, "sint") {{
                expand = "veritatis";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(req);

            if (res.transactionInformation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation

Delete a particular key-value pair on a transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest req = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest(929297L, 277718L, 318569L, 9356L, "est") {{
                expand = "quibusdam";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation(req);

            if (res.transactionInformation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest req = new DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest(131797L, 647174L, 716327L, "quibusdam") {{
                expand = "labore";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(264730L, 183191L, "aliquid") {{
                expand = "cupiditate";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest req = new DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest(552822L, 20107L, "magni") {{
                expand = "assumenda";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserTransactionsclustersIdTransactionscluster

Delete a clustered transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserTransactionsclustersIdTransactionsclusterRequest req = new DeleteUsersIdUserTransactionsclustersIdTransactionsclusterRequest(369808L, "alias") {{
                expand = "fugit";
            }};            

            DeleteUsersIdUserTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.deleteUsersIdUserTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountTypes

Get account types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountTypesRequest;
import org.openapis.openapi.models.operations.GetAccountTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountTypesRequest req = new GetAccountTypesRequest() {{
                expand = "dolorum";
            }};            

            GetAccountTypesResponse res = sdk.banks.getAccountTypes(req);

            if (res.getAccountTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountTypesIdAccountType

Get an account type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountTypesIdAccountTypeRequest;
import org.openapis.openapi.models.operations.GetAccountTypesIdAccountTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountTypesIdAccountTypeRequest req = new GetAccountTypesIdAccountTypeRequest(569618L) {{
                expand = "tempora";
            }};            

            GetAccountTypesIdAccountTypeResponse res = sdk.banks.getAccountTypesIdAccountType(req);

            if (res.accountType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanks

Get list of connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksRequest;
import org.openapis.openapi.models.operations.GetBanksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksRequest req = new GetBanksRequest() {{
                expand = "facilis";
            }};            

            GetBanksResponse res = sdk.banks.getBanks(req);

            if (res.getBanks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdBank

Get a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdBankRequest;
import org.openapis.openapi.models.operations.GetBanksIdBankResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdBankRequest req = new GetBanksIdBankRequest(735194L) {{
                expand = "labore";
            }};            

            GetBanksIdBankResponse res = sdk.banks.getBanksIdBank(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorConnections

By default, it selects a set of 3 connections with the 'diversity' method<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorConnectionsRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorConnectionsRequest req = new GetBanksIdConnectorConnectionsRequest(962189L) {{
                expand = "eum";
                method = "non";
                minutesWithoutSync = 756107L;
                n = 576157L;
                occurences = 396098L;
                source = "provident";
                type = 896039L;
            }};            

            GetBanksIdConnectorConnectionsResponse res = sdk.banks.getBanksIdConnectorConnections(req);

            if (res.getBanksIdConnectorConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorLogosRequest req = new GetBanksIdConnectorLogosRequest(572252L) {{
                expand = "officia";
            }};            

            GetBanksIdConnectorLogosResponse res = sdk.banks.getBanksIdConnectorLogos(req);

            if (res.getBanksIdConnectorLogos200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosMainRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosMainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorLogosMainRequest req = new GetBanksIdConnectorLogosMainRequest(223081L) {{
                expand = "debitis";
            }};            

            GetBanksIdConnectorLogosMainResponse res = sdk.banks.getBanksIdConnectorLogosMain(req);

            if (res.getBanksIdConnectorLogosMain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosThumbnailRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosThumbnailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorLogosThumbnailRequest req = new GetBanksIdConnectorLogosThumbnailRequest(952749L) {{
                expand = "dolorum";
            }};            

            GetBanksIdConnectorLogosThumbnailResponse res = sdk.banks.getBanksIdConnectorLogosThumbnail(req);

            if (res.getBanksIdConnectorLogosThumbnail200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorSources

Get list of connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorSourcesRequest req = new GetBanksIdConnectorSourcesRequest(447125L) {{
                expand = "in";
            }};            

            GetBanksIdConnectorSourcesResponse res = sdk.banks.getBanksIdConnectorSources(req);

            if (res.getBanksIdConnectorSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest req = new GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest(846409L, 978571L) {{
                expand = "rerum";
            }};            

            GetBanksIdConnectorSourcesIdConnectorSourceFieldsResponse res = sdk.banks.getBanksIdConnectorSourcesIdConnectorSourceFields(req);

            if (res.getBanksIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorSourcesIdSourceRequest req = new GetBanksIdConnectorSourcesIdSourceRequest(116202L, 297437L) {{
                expand = "cumque";
            }};            

            GetBanksIdConnectorSourcesIdSourceResponse res = sdk.banks.getBanksIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategories

Ressource to get all existing categories<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesRequest;
import org.openapis.openapi.models.operations.GetCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoriesRequest req = new GetCategoriesRequest() {{
                expand = "facere";
            }};            

            GetCategoriesResponse res = sdk.banks.getCategories(req);

            if (res.getCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnections

Get connections without a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionsRequest;
import org.openapis.openapi.models.operations.GetConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectionsRequest req = new GetConnectionsRequest() {{
                expand = "ea";
            }};            

            GetConnectionsResponse res = sdk.banks.getConnections(req);

            if (res.getConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionLogsRequest;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectionsIdConnectionLogsRequest req = new GetConnectionsIdConnectionLogsRequest(396506L) {{
                connectorUuid = "laborum";
                error = "accusamus";
                expand = "non";
                idConnectionQueryParameter = 581273L;
                idConnector = 313218L;
                idMax = 881736L;
                idSource = 965417L;
                idUser = 692532L;
                limit = 588465L;
                maxDate = LocalDate.parse("2021-09-06");
                minDate = LocalDate.parse("2021-12-07");
                offset = 956084L;
                period = "amet";
            }};            

            GetConnectionsIdConnectionLogsResponse res = sdk.banks.getConnectionsIdConnectionLogs(req);

            if (res.getConnectionsIdConnectionLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectionsIdConnectionSources

Get connection sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionSourcesRequest;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectionsIdConnectionSourcesRequest req = new GetConnectionsIdConnectionSourcesRequest(643990L) {{
                expand = "nisi";
            }};            

            GetConnectionsIdConnectionSourcesResponse res = sdk.banks.getConnectionsIdConnectionSources(req);

            if (res.getConnectionsIdConnectionSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectors

Get list of connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsRequest;
import org.openapis.openapi.models.operations.GetConnectorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsRequest req = new GetConnectorsRequest() {{
                expand = "vel";
            }};            

            GetConnectorsResponse res = sdk.banks.getConnectors(req);

            if (res.getConnectors200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnector

Get a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorRequest req = new GetConnectorsIdConnectorRequest(618809L) {{
                expand = "omnis";
            }};            

            GetConnectorsIdConnectorResponse res = sdk.banks.getConnectorsIdConnector(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorLogosRequest req = new GetConnectorsIdConnectorLogosRequest(474867L) {{
                expand = "perferendis";
            }};            

            GetConnectorsIdConnectorLogosResponse res = sdk.banks.getConnectorsIdConnectorLogos(req);

            if (res.getConnectorsIdConnectorLogos200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosMainRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosMainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorLogosMainRequest req = new GetConnectorsIdConnectorLogosMainRequest(470132L) {{
                expand = "magnam";
            }};            

            GetConnectorsIdConnectorLogosMainResponse res = sdk.banks.getConnectorsIdConnectorLogosMain(req);

            if (res.getConnectorsIdConnectorLogosMain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosThumbnailRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosThumbnailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorLogosThumbnailRequest req = new GetConnectorsIdConnectorLogosThumbnailRequest(716075L) {{
                expand = "id";
            }};            

            GetConnectorsIdConnectorLogosThumbnailResponse res = sdk.banks.getConnectorsIdConnectorLogosThumbnail(req);

            if (res.getConnectorsIdConnectorLogosThumbnail200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorSources

Get list of connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorSourcesRequest req = new GetConnectorsIdConnectorSourcesRequest(287991L) {{
                expand = "labore";
            }};            

            GetConnectorsIdConnectorSourcesResponse res = sdk.banks.getConnectorsIdConnectorSources(req);

            if (res.getConnectorsIdConnectorSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest req = new GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest(383462L, 618016L) {{
                expand = "nobis";
            }};            

            GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsResponse res = sdk.banks.getConnectorsIdConnectorSourcesIdConnectorSourceFields(req);

            if (res.getConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorSourcesIdSourceRequest req = new GetConnectorsIdConnectorSourcesIdSourceRequest(428769L, 878453L) {{
                expand = "aspernatur";
            }};            

            GetConnectorsIdConnectorSourcesIdSourceResponse res = sdk.banks.getConnectorsIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvoicing

You can get all the invoicing data or just specific ones by using the available parameters.<br><br>If no parameters are specified, no invoicing data is returned.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoicingRequest;
import org.openapis.openapi.models.operations.GetInvoicingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvoicingRequest req = new GetInvoicingRequest() {{
                accountsSynced = "architecto";
                all = "magnam";
                connectionsAccount = "et";
                connectionsSynced = "excepturi";
                detail = "ullam";
                maxDate = LocalDate.parse("2021-11-24");
                minDate = LocalDate.parse("2022-12-07");
                paymentsSynced = "mollitia";
                subscriptionsSynced = "reiciendis";
                transfersSynced = "mollitia";
                usersBank = "ad";
                usersBill = "eum";
                usersSynced = "dolor";
            }};            

            GetInvoicingResponse res = sdk.banks.getInvoicing(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogsRequest;
import org.openapis.openapi.models.operations.GetLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLogsRequest req = new GetLogsRequest() {{
                connectorUuid = "necessitatibus";
                error = "odit";
                expand = "nemo";
                idConnection = 97260L;
                idConnector = 435865L;
                idMax = 984043L;
                idSource = 891924L;
                idUser = 260341L;
                limit = 806194L;
                maxDate = LocalDate.parse("2021-08-05");
                minDate = LocalDate.parse("2022-11-25");
                offset = 99569L;
                period = "repudiandae";
            }};            

            GetLogsResponse res = sdk.banks.getLogs(req);

            if (res.getLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProviders

Get list of connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersRequest;
import org.openapis.openapi.models.operations.GetProvidersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersRequest req = new GetProvidersRequest() {{
                expand = "ullam";
            }};            

            GetProvidersResponse res = sdk.banks.getProviders(req);

            if (res.getProviders200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorConnections

By default, it selects a set of 3 connections.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorConnectionsRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorConnectionsRequest req = new GetProvidersIdConnectorConnectionsRequest(714242L) {{
                expand = "nihil";
                range = 998848L;
            }};            

            GetProvidersIdConnectorConnectionsResponse res = sdk.banks.getProvidersIdConnectorConnections(req);

            if (res.getProvidersIdConnectorConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorLogosRequest req = new GetProvidersIdConnectorLogosRequest(841140L) {{
                expand = "sed";
            }};            

            GetProvidersIdConnectorLogosResponse res = sdk.banks.getProvidersIdConnectorLogos(req);

            if (res.getProvidersIdConnectorLogos200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosMainRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosMainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorLogosMainRequest req = new GetProvidersIdConnectorLogosMainRequest(904648L) {{
                expand = "pariatur";
            }};            

            GetProvidersIdConnectorLogosMainResponse res = sdk.banks.getProvidersIdConnectorLogosMain(req);

            if (res.getProvidersIdConnectorLogosMain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosThumbnailRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosThumbnailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorLogosThumbnailRequest req = new GetProvidersIdConnectorLogosThumbnailRequest(37559L) {{
                expand = "consequuntur";
            }};            

            GetProvidersIdConnectorLogosThumbnailResponse res = sdk.banks.getProvidersIdConnectorLogosThumbnail(req);

            if (res.getProvidersIdConnectorLogosThumbnail200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorSources

Get list of connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorSourcesRequest req = new GetProvidersIdConnectorSourcesRequest(508315L) {{
                expand = "natus";
            }};            

            GetProvidersIdConnectorSourcesResponse res = sdk.banks.getProvidersIdConnectorSources(req);

            if (res.getProvidersIdConnectorSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest req = new GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest(166847L, 123820L) {{
                expand = "quo";
            }};            

            GetProvidersIdConnectorSourcesIdConnectorSourceFieldsResponse res = sdk.banks.getProvidersIdConnectorSourcesIdConnectorSourceFields(req);

            if (res.getProvidersIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorSourcesIdSourceRequest req = new GetProvidersIdConnectorSourcesIdSourceRequest(848009L, 864934L) {{
                expand = "maxime";
            }};            

            GetProvidersIdConnectorSourcesIdSourceResponse res = sdk.banks.getProvidersIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdProvider

Get a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdProviderRequest;
import org.openapis.openapi.models.operations.GetProvidersIdProviderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdProviderRequest req = new GetProvidersIdProviderRequest(411397L) {{
                expand = "excepturi";
            }};            

            GetProvidersIdProviderResponse res = sdk.banks.getProvidersIdProvider(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPsd2Registrations

Get details on all psd2 registrations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPsd2RegistrationsRequest;
import org.openapis.openapi.models.operations.GetPsd2RegistrationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPsd2RegistrationsRequest req = new GetPsd2RegistrationsRequest() {{
                expand = "odit";
            }};            

            GetPsd2RegistrationsResponse res = sdk.banks.getPsd2Registrations(req);

            if (res.getPsd2Registrations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPsd2RegistrationsIdPsd2Registration

Get details for a given psd2 registration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPsd2RegistrationsIdPsd2RegistrationRequest;
import org.openapis.openapi.models.operations.GetPsd2RegistrationsIdPsd2RegistrationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPsd2RegistrationsIdPsd2RegistrationRequest req = new GetPsd2RegistrationsIdPsd2RegistrationRequest(407183L) {{
                expand = "accusantium";
            }};            

            GetPsd2RegistrationsIdPsd2RegistrationResponse res = sdk.banks.getPsd2RegistrationsIdPsd2Registration(req);

            if (res.psd2Registration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPsd2RegistrationsIdPsd2registrationLogs

Get logs of psd2 registration. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPsd2RegistrationsIdPsd2registrationLogsRequest;
import org.openapis.openapi.models.operations.GetPsd2RegistrationsIdPsd2registrationLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPsd2RegistrationsIdPsd2registrationLogsRequest req = new GetPsd2RegistrationsIdPsd2registrationLogsRequest(69167L) {{
                expand = "maiores";
                limit = 697429L;
                maxDate = LocalDate.parse("2022-07-19");
                minDate = LocalDate.parse("2022-04-12");
                offset = 50588L;
            }};            

            GetPsd2RegistrationsIdPsd2registrationLogsResponse res = sdk.banks.getPsd2RegistrationsIdPsd2registrationLogs(req);

            if (res.getPsd2RegistrationsIdPsd2registrationLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserAccountTypes

Get account types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountTypesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserAccountTypesRequest req = new GetUsersIdUserAccountTypesRequest("pariatur") {{
                expand = "nemo";
            }};            

            GetUsersIdUserAccountTypesResponse res = sdk.banks.getUsersIdUserAccountTypes(req);

            if (res.getUsersIdUserAccountTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserAccountTypesIdAccountType

Get an account type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountTypesIdAccountTypeRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountTypesIdAccountTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserAccountTypesIdAccountTypeRequest req = new GetUsersIdUserAccountTypesIdAccountTypeRequest(975522L, "perferendis") {{
                expand = "fugiat";
            }};            

            GetUsersIdUserAccountTypesIdAccountTypeResponse res = sdk.banks.getUsersIdUserAccountTypesIdAccountType(req);

            if (res.accountType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserAccountsIdAccountCategories

Ressource to get categories for the user's transactions<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountsIdAccountCategoriesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountsIdAccountCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserAccountsIdAccountCategoriesRequest req = new GetUsersIdUserAccountsIdAccountCategoriesRequest(230742L, "aut");            

            GetUsersIdUserAccountsIdAccountCategoriesResponse res = sdk.banks.getUsersIdUserAccountsIdAccountCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserAccountsIdAccountTransactionsclusters

Get clustered transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountsIdAccountTransactionsclustersRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserAccountsIdAccountTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserAccountsIdAccountTransactionsclustersRequest req = new GetUsersIdUserAccountsIdAccountTransactionsclustersRequest(764912L, "corporis") {{
                expand = "hic";
            }};            

            GetUsersIdUserAccountsIdAccountTransactionsclustersResponse res = sdk.banks.getUsersIdUserAccountsIdAccountTransactionsclusters(req);

            if (res.getUsersIdUserAccountsIdAccountTransactionsclusters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserAlerts

Get alerts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserAlertsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserAlertsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserAlertsRequest req = new GetUsersIdUserAlertsRequest("libero") {{
                expand = "nobis";
            }};            

            GetUsersIdUserAlertsResponse res = sdk.banks.getUsersIdUserAlerts(req);

            if (res.getUsersIdUserAlerts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserCategories

Ressource to get categories for the user's transactions<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserCategoriesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserCategoriesRequest req = new GetUsersIdUserCategoriesRequest("dolores");            

            GetUsersIdUserCategoriesResponse res = sdk.banks.getUsersIdUserCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserCategoriesFull

Ressource to get categories<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserCategoriesFullRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserCategoriesFullResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserCategoriesFullRequest req = new GetUsersIdUserCategoriesFullRequest("quis") {{
                expand = "totam";
            }};            

            GetUsersIdUserCategoriesFullResponse res = sdk.banks.getUsersIdUserCategoriesFull(req);

            if (res.getUsersIdUserCategoriesFull200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnections

Get connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsRequest req = new GetUsersIdUserConnectionsRequest("dignissimos") {{
                expand = "eaque";
            }};            

            GetUsersIdUserConnectionsResponse res = sdk.banks.getUsersIdUserConnections(req);

            if (res.getUsersIdUserConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccounts

Get accounts list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsRequest(338985L, "nesciunt") {{
                expand = "eos";
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccounts(req);

            if (res.getUsersIdUserConnectionsIdConnectionAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories

Ressource to get categories for the user's transactions<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRequest(18521L, 170986L, "minus");            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta

Get account delta between sums of transactions and difference of account balance for the given period.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRequest(463451L, 223924L, "vero") {{
                maxDate = LocalDate.parse("2022-01-21");
                minDate = LocalDate.parse("2021-03-05");
                period = "facilis";
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs

Get logs of account. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRequest(596656L, 31838L, "porro") {{
                expand = "consequuntur";
                limit = 500026L;
                maxDate = LocalDate.parse("2022-11-25");
                minDate = LocalDate.parse("2021-08-08");
                offset = 237893L;
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs(req);

            if (res.getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources

Get account sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRequest(992397L, 934214L, "modi") {{
                expand = "iste";
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources(req);

            if (res.getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions

Get list of transactions.<br><br>By default, it selects transactions for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest(679091L, 535633L, "pariatur") {{
                all = false;
                deleted = false;
                expand = "provident";
                idCategory = 750844L;
                income = false;
                lastUpdate = OffsetDateTime.parse("2021-01-26T22:08:21.462Z");
                limit = 311945L;
                maxDate = LocalDate.parse("2022-03-16");
                maxValue = 2123.9;
                minDate = LocalDate.parse("2022-10-11");
                minValue = 1861.93;
                offset = 218749L;
                search = "hic";
                value = "excepturi";
                wording = "cum";
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(req);

            if (res.getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations

List all arbitrary key-value pairs on a transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest(452109L, 490459L, 970237L, "amet") {{
                expand = "dolorum";
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(req);

            if (res.getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation

Get a particular arbitrary key-value pair on a transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest(254356L, 85295L, 58029L, 56418L, "iure") {{
                expand = "odio";
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation(req);

            if (res.transactionInformation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters

Get clustered transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest req = new GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest(311796L, 881005L, "quidem") {{
                expand = "voluptatibus";
            }};            

            GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters(req);

            if (res.getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionInformations

<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionInformationsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionInformationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionInformationsRequest req = new GetUsersIdUserConnectionsIdConnectionInformationsRequest(377752L, "natus") {{
                expand = "eos";
            }};            

            GetUsersIdUserConnectionsIdConnectionInformationsResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionInformations(req);

            if (res.getUsersIdUserConnectionsIdConnectionInformations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionLogsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionLogsRequest req = new GetUsersIdUserConnectionsIdConnectionLogsRequest(542499L, "sit") {{
                connectorUuid = "fugiat";
                error = "ab";
                expand = "soluta";
                idConnectionQueryParameter = 679393L;
                idConnector = 478596L;
                idMax = 453697L;
                idSource = 677082L;
                idUserQueryParameter = 536579L;
                limit = 607045L;
                maxDate = LocalDate.parse("2020-11-09");
                minDate = LocalDate.parse("2021-08-04");
                offset = 216897L;
                period = "voluptate";
            }};            

            GetUsersIdUserConnectionsIdConnectionLogsResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionLogs(req);

            if (res.getUsersIdUserConnectionsIdConnectionLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionSources

Get connection sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionSourcesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionSourcesRequest req = new GetUsersIdUserConnectionsIdConnectionSourcesRequest(663078L, "saepe") {{
                expand = "eius";
            }};            

            GetUsersIdUserConnectionsIdConnectionSourcesResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionSources(req);

            if (res.getUsersIdUserConnectionsIdConnectionSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionTransactionsclusters

Get clustered transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionTransactionsclustersRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionTransactionsclustersRequest req = new GetUsersIdUserConnectionsIdConnectionTransactionsclustersRequest(137220L, "perferendis") {{
                expand = "amet";
            }};            

            GetUsersIdUserConnectionsIdConnectionTransactionsclustersResponse res = sdk.banks.getUsersIdUserConnectionsIdConnectionTransactionsclusters(req);

            if (res.getUsersIdUserConnectionsIdConnectionTransactionsclusters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserForecast

Get forecast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserForecastRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserForecastRequest req = new GetUsersIdUserForecastRequest("optio");            

            GetUsersIdUserForecastResponse res = sdk.banks.getUsersIdUserForecast(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserLogsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserLogsRequest req = new GetUsersIdUserLogsRequest("accusamus") {{
                connectorUuid = "ad";
                error = "saepe";
                expand = "suscipit";
                idConnection = 645785L;
                idConnector = 588317L;
                idMax = 324683L;
                idSource = 831049L;
                idUserQueryParameter = 519711L;
                limit = 628982L;
                maxDate = LocalDate.parse("2022-02-16");
                minDate = LocalDate.parse("2022-09-23");
                offset = 425451L;
                period = "quod";
            }};            

            GetUsersIdUserLogsResponse res = sdk.banks.getUsersIdUserLogs(req);

            if (res.getUsersIdUserLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserTransactionsclusters

Get clustered transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserTransactionsclustersRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserTransactionsclustersRequest req = new GetUsersIdUserTransactionsclustersRequest("officiis") {{
                expand = "qui";
            }};            

            GetUsersIdUserTransactionsclustersResponse res = sdk.banks.getUsersIdUserTransactionsclusters(req);

            if (res.getUsersIdUserTransactionsclusters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBanksCategories

It requires the name of the category to be created<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBanksCategoriesRequest;
import org.openapis.openapi.models.operations.PostBanksCategoriesRequestBody;
import org.openapis.openapi.models.operations.PostBanksCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBanksCategoriesRequest req = new PostBanksCategoriesRequest(                new PostBanksCategoriesRequestBody("dolorum");) {{
                expand = "a";
            }};            

            PostBanksCategoriesResponse res = sdk.banks.postBanksCategories(req);

            if (res.connectorCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBanksCategoriesIdCategory

Edit the name for the supplied category.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBanksCategoriesIdCategoryRequest;
import org.openapis.openapi.models.operations.PostBanksCategoriesIdCategoryRequestBody;
import org.openapis.openapi.models.operations.PostBanksCategoriesIdCategoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBanksCategoriesIdCategoryRequest req = new PostBanksCategoriesIdCategoryRequest(                new PostBanksCategoriesIdCategoryRequestBody("esse");, 687488L) {{
                expand = "iusto";
            }};            

            PostBanksCategoriesIdCategoryResponse res = sdk.banks.postBanksCategoriesIdCategory(req);

            if (res.connectorCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCategoriesKeywords

If the keyword already exists the keyword is not added. Used for the categorization of transactions.<br><br>Form params: - id_category (integer): a reference towards the category associated with the keyword - keyword (string): the searched keyword - income (bool): 1 if the associated category represents an income else 0 - priority (integer): sets the priority for the keyword, used when categorizing<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCategoriesKeywordsRequest;
import org.openapis.openapi.models.operations.PostCategoriesKeywordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCategoriesKeywordsRequest req = new PostCategoriesKeywordsRequest() {{
                expand = "ipsum";
            }};            

            PostCategoriesKeywordsResponse res = sdk.banks.postCategoriesKeywords(req);

            if (res.keyword != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCategorize

It requires an array of transaction dictionaries. Any fields of transactions that are not required will be kept in the response. The response contains the list of transactions with two more fields: id_category and state (it indicates how the transaction has been categorized)<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCategorizeRequestBody;
import org.openapis.openapi.models.operations.PostCategorizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCategorizeRequestBody req = new PostCategorizeRequestBody("quisquam", 947371L, "amet");            

            PostCategorizeResponse res = sdk.banks.postCategorize(req);

            if (res.postCategorize200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PostConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PostConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostConnectionsIdConnectionSourcesIdSourceRequest req = new PostConnectionsIdConnectionSourcesIdSourceRequest(730856L, 880298L) {{
                requestBody = new PostConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "numquam";
            }};            

            PostConnectionsIdConnectionSourcesIdSourceResponse res = sdk.banks.postConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConnectors

Send a request to add a new connector<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConnectorsRequest;
import org.openapis.openapi.models.operations.PostConnectorsRequestBody;
import org.openapis.openapi.models.operations.PostConnectorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostConnectorsRequest req = new PostConnectorsRequest(                new PostConnectorsRequestBody("enim", "dolorem", "sapiente") {{
                                comment = "totam";
                                email = "Alden15@yahoo.com";
                                sendmail = false;
                                types = "vel";
                                url = "libero";
                            }};) {{
                expand = "voluptas";
            }};            

            PostConnectorsResponse res = sdk.banks.postConnectors(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConnectorsIdConnectorLogos

This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConnectorsIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.PostConnectorsIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostConnectorsIdConnectorLogosRequest req = new PostConnectorsIdConnectorLogosRequest(646265L) {{
                expand = "quam";
            }};            

            PostConnectorsIdConnectorLogosResponse res = sdk.banks.postConnectorsIdConnectorLogos(req);

            if (res.connectorLogo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserAccountsIdAccountTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserAccountsIdAccountTransactionsclustersRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserAccountsIdAccountTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserAccountsIdAccountTransactionsclustersRequest req = new PostUsersIdUserAccountsIdAccountTransactionsclustersRequest(214880L, "incidunt") {{
                expand = "qui";
            }};            

            PostUsersIdUserAccountsIdAccountTransactionsclustersResponse res = sdk.banks.postUsersIdUserAccountsIdAccountTransactionsclusters(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserCategoriesFull

Create a new transaction category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserCategoriesFullRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserCategoriesFullRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserCategoriesFullResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserCategoriesFullRequest req = new PostUsersIdUserCategoriesFullRequest("cupiditate") {{
                requestBody = new PostUsersIdUserCategoriesFullRequestBody() {{
                    accountantAccount = "maxime";
                    color = "pariatur";
                    idParentCategory = 747080L;
                    idParentCategoryInMenu = 117531L;
                    income = false;
                    name = "Felix Gorczany";
                    refundable = false;
                }};;
                expand = "distinctio";
            }};            

            PostUsersIdUserCategoriesFullResponse res = sdk.banks.postUsersIdUserCategoriesFull(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnections

Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsRequest req = new PostUsersIdUserConnectionsRequest("facilis") {{
                requestBody = new PostUsersIdUserConnectionsRequestBody() {{
                    connectorUuid = "aliquid";
                    idConnector = 463150L;
                }};;
                expand = "molestias";
                source = "temporibus";
            }};            

            PostUsersIdUserConnectionsResponse res = sdk.banks.postUsersIdUserConnections(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnection

Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionRequest req = new PostUsersIdUserConnectionsIdConnectionRequest(183280L, "neque") {{
                requestBody = new PostUsersIdUserConnectionsIdConnectionRequestBody() {{
                    active = false;
                    decoupled = false;
                    expire = OffsetDateTime.parse("2022-11-01T18:57:36.196Z");
                    login = "odio";
                    password = "sunt";
                }};;
                background = false;
                expand = "ullam";
                psuRequested = false;
                refreshPsd2Auth = false;
            }};            

            PostUsersIdUserConnectionsIdConnectionResponse res = sdk.banks.postUsersIdUserConnectionsIdConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnectionAccounts

This endpoint creates an account related to a connection or not.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionAccountsRequest req = new PostUsersIdUserConnectionsIdConnectionAccountsRequest(                new PostUsersIdUserConnectionsIdConnectionAccountsRequestBody("nam") {{
                                balance = 9404.32;
                                iban = "voluptatem";
                                idConnection = 765326L;
                                idCurrency = "soluta";
                                number = "nobis";
                            }};, 92596L, "saepe") {{
                expand = "ipsum";
            }};            

            PostUsersIdUserConnectionsIdConnectionAccountsResponse res = sdk.banks.postUsersIdUserConnectionsIdConnectionAccounts(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions

Create transactions for the supplied account or the account whose id is given with form parameters. It requires an array of transaction dictionaries.<br><br><br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest req = new PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest(                new PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequestBody(LocalDate.parse("2022-04-02"), "quos", 731694L) {{
                                active = false;
                                coming = false;
                                dateScraped = OffsetDateTime.parse("2022-11-28T16:49:52.722Z");
                                idAccount = 961937L;
                                rdate = LocalDate.parse("2022-09-16");
                                state = "labore";
                                type = "adipisci";
                            }};, 677263L, 100294L, "quae") {{
                expand = "aut";
            }};            

            PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse res = sdk.banks.postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(req);

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest req = new PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest(555649L, 929530L, "consequatur") {{
                expand = "est";
            }};            

            PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse res = sdk.banks.postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(833038L, 785153L, "doloribus") {{
                requestBody = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "ut";
            }};            

            PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.banks.postUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnectionTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionTransactionsclustersRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionTransactionsclustersRequest req = new PostUsersIdUserConnectionsIdConnectionTransactionsclustersRequest(703495L, "cupiditate") {{
                expand = "qui";
            }};            

            PostUsersIdUserConnectionsIdConnectionTransactionsclustersResponse res = sdk.banks.postUsersIdUserConnectionsIdConnectionTransactionsclusters(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserTransactionsclusters

Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserTransactionsclustersRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserTransactionsclustersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserTransactionsclustersRequest req = new PostUsersIdUserTransactionsclustersRequest("quae") {{
                expand = "laudantium";
            }};            

            PostUsersIdUserTransactionsclustersResponse res = sdk.banks.postUsersIdUserTransactionsclusters(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PutConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PutConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectionsIdConnectionSourcesIdSourceRequest req = new PutConnectionsIdConnectionSourcesIdSourceRequest(485628L, 580447L) {{
                requestBody = new PutConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    force = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "voluptatibus";
            }};            

            PutConnectionsIdConnectionSourcesIdSourceResponse res = sdk.banks.putConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectors

Enable/disable several connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsRequest;
import org.openapis.openapi.models.operations.PutConnectorsRequestBody;
import org.openapis.openapi.models.operations.PutConnectorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsRequest req = new PutConnectorsRequest() {{
                requestBody = new PutConnectorsRequestBody() {{
                    hidden = false;
                }};;
                expand = "quisquam";
            }};            

            PutConnectorsResponse res = sdk.banks.putConnectors(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnector

<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorRequestBody;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorRequest req = new PutConnectorsIdConnectorRequest(876506L) {{
                requestBody = new PutConnectorsIdConnectorRequestBody() {{
                    authMechanism = "omnis";
                    hidden = false;
                    idCategories = "quis";
                    syncFrequency = 218403L;
                }};;
                expand = "delectus";
            }};            

            PutConnectorsIdConnectorResponse res = sdk.banks.putConnectorsIdConnector(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorLogos

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorLogosRequest req = new PutConnectorsIdConnectorLogosRequest(455169L) {{
                expand = "consectetur";
            }};            

            PutConnectorsIdConnectorLogosResponse res = sdk.banks.putConnectorsIdConnectorLogos(req);

            if (res.connectorLogo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorLogosIdLogo

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosIdLogoRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosIdLogoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorLogosIdLogoRequest req = new PutConnectorsIdConnectorLogosIdLogoRequest(878870L, 949319L) {{
                expand = "dignissimos";
            }};            

            PutConnectorsIdConnectorLogosIdLogoResponse res = sdk.banks.putConnectorsIdConnectorLogosIdLogo(req);

            if (res.connectorLogo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorSources

Edit several connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesRequestBody;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorSourcesRequest req = new PutConnectorsIdConnectorSourcesRequest(941378L) {{
                requestBody = new PutConnectorsIdConnectorSourcesRequestBody() {{
                    disabledCapabilities = "distinctio";
                    unavailableCapabilities = "quod";
                }};;
                expand = "odio";
            }};            

            PutConnectorsIdConnectorSourcesResponse res = sdk.banks.putConnectorsIdConnectorSources(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorSourcesIdSource

Edit the provided connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorSourcesIdSourceRequest req = new PutConnectorsIdConnectorSourcesIdSourceRequest(630448L, 708548L) {{
                requestBody = new PutConnectorsIdConnectorSourcesIdSourceRequestBody() {{
                    authMechanism = "vero";
                    disabled = false;
                    disabledCapabilities = "ducimus";
                    unavailable = false;
                    unavailableCapabilities = "dolore";
                }};;
                expand = "quibusdam";
            }};            

            PutConnectorsIdConnectorSourcesIdSourceResponse res = sdk.banks.putConnectorsIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest req = new PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest(848944L, 194342L, "natus") {{
                expand = "impedit";
            }};            

            PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserCategoriesFullIdFull

Modify a user-created category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserCategoriesFullIdFullRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserCategoriesFullIdFullRequestBody;
import org.openapis.openapi.models.operations.PutUsersIdUserCategoriesFullIdFullResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserCategoriesFullIdFullRequest req = new PutUsersIdUserCategoriesFullIdFullRequest(13236L, "voluptatibus") {{
                requestBody = new PutUsersIdUserCategoriesFullIdFullRequestBody() {{
                    accountantAccount = "exercitationem";
                    hide = "nulla";
                }};;
                expand = "fugit";
            }};            

            PutUsersIdUserCategoriesFullIdFullResponse res = sdk.banks.putUsersIdUserCategoriesFullIdFull(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnection

We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionRequest req = new PutUsersIdUserConnectionsIdConnectionRequest(780427L, "maiores") {{
                background = false;
                expand = "doloribus";
                lastUpdate = OffsetDateTime.parse("2022-03-31T22:43:48.703Z");
                psuRequested = false;
            }};            

            PutUsersIdUserConnectionsIdConnectionResponse res = sdk.banks.putUsersIdUserConnectionsIdConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionAccounts

Update many accounts at once

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionAccountsRequest req = new PutUsersIdUserConnectionsIdConnectionAccountsRequest(497391L, "alias") {{
                expand = "officia";
            }};            

            PutUsersIdUserConnectionsIdConnectionAccountsResponse res = sdk.banks.putUsersIdUserConnectionsIdConnectionAccounts(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccount

It updates a specific account<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequestBody;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest req = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest(269479L, 368584L, "ea") {{
                requestBody = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequestBody() {{
                    balance = 1369;
                    bookmarked = false;
                    disabled = false;
                    display = false;
                    iban = "vel";
                    name = "Clifford Dickens";
                    usage = "dicta";
                }};;
                expand = "dolor";
            }};            

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountResponse res = sdk.banks.putUsersIdUserConnectionsIdConnectionAccountsIdAccount(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction

Edit a transaction meta-data

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequestBody;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequest req = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequest(980700L, 97844L, 406120L, "nulla") {{
                requestBody = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequestBody() {{
                    active = false;
                    applicationDate = LocalDate.parse("2021-01-20");
                    comment = "nostrum";
                    idCategory = 960835L;
                    wording = "quisquam";
                }};;
                expand = "saepe";
            }};            

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionResponse res = sdk.banks.putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction(req);

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations

Add or edit transaction arbitrary key-value pairs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest req = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest(411372L, 774048L, 359271L, "veniam") {{
                expand = "aliquid";
            }};            

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse res = sdk.banks.putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(req);

            if (res.transactionInformation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest req = new PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest(81101L, 301831L, 407241L, "quo") {{
                expand = "consectetur";
            }};            

            PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(926213L, 132487L, "minima") {{
                requestBody = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    force = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "eaque";
            }};            

            PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.banks.putUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest req = new PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest(952871L, 725595L, "aut") {{
                expand = "aut";
            }};            

            PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserTransactionsclustersIdTransactionscluster

Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserTransactionsclustersIdTransactionsclusterRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserTransactionsclustersIdTransactionsclusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserTransactionsclustersIdTransactionsclusterRequest req = new PutUsersIdUserTransactionsclustersIdTransactionsclusterRequest(533466L, "impedit") {{
                expand = "aliquam";
            }};            

            PutUsersIdUserTransactionsclustersIdTransactionsclusterResponse res = sdk.banks.putUsersIdUserTransactionsclustersIdTransactionscluster(req);

            if (res.transactionsCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
