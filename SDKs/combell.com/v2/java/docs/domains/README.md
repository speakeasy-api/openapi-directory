# domains

## Overview

Manage your domains.

### Available Operations

* [configureDomain](#configuredomain) - Edit domain name renew state
* [editNameServers](#editnameservers) - Edit domain name servers
* [getDomain](#getdomain) - Details of a domain
* [getDomains](#getdomains) - Overviews of domains
* [register](#register) - Register a domain
* [transfer](#transfer) - Transfer a domain

## configureDomain

Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
Allowed if the requesting user has the finance role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureDomainRequest;
import org.openapis.openapi.models.operations.ConfigureDomainResponse;
import org.openapis.openapi.models.shared.EditDomainWillRenewRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureDomainRequest req = new ConfigureDomainRequest("commodi", "quam") {{
                editDomainWillRenewRequest = new EditDomainWillRenewRequest() {{
                    willRenew = false;
                }};;
            }};            

            ConfigureDomainResponse res = sdk.domains.configureDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## editNameServers

Edit domain name servers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditNameServersRequest;
import org.openapis.openapi.models.operations.EditNameServersResponse;
import org.openapis.openapi.models.shared.EditNameServers;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EditNameServersRequest req = new EditNameServersRequest("molestiae", "velit") {{
                editNameServers = new EditNameServers() {{
                    domainName = "error";
                    nameServers = new String[]{{
                        add("quis"),
                    }};
                }};;
            }};            

            EditNameServersResponse res = sdk.domains.editNameServers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomain

Details of a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainRequest;
import org.openapis.openapi.models.operations.GetDomainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainRequest req = new GetDomainRequest("vitae", "laborum");            

            GetDomainResponse res = sdk.domains.getDomain(req);

            if (res.domainDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomains

Overviews of domains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsRequest;
import org.openapis.openapi.models.operations.GetDomainsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsRequest req = new GetDomainsRequest() {{
                skip = 656330;
                take = 317202;
            }};            

            GetDomainsResponse res = sdk.domains.getDomains(req);

            if (res.domains != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## register

Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterResponse;
import org.openapis.openapi.models.shared.ExtraField;
import org.openapis.openapi.models.shared.RegisterDomain;
import org.openapis.openapi.models.shared.RegistrantInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegisterDomain req = new RegisterDomain() {{
                domainName = "odit";
                nameServers = new String[]{{
                    add("sequi"),
                    add("tenetur"),
                    add("ipsam"),
                    add("id"),
                }};
                registrant = new RegistrantInput() {{
                    address = "006 Pacocha Cliffs";
                    city = "Weymouth Town";
                    companyName = "vero";
                    countryCode = "KH";
                    email = "Whitney.Bednar@yahoo.com";
                    enterpriseNumber = "cum";
                    extraFields = new org.openapis.openapi.models.shared.ExtraField[]{{
                        add(new ExtraField() {{
                            name = "Bessie Grady II";
                            value = "dolore";
                        }}),
                    }};
                    fax = "iusto";
                    firstName = "Birdie";
                    languageCode = "harum";
                    lastName = "Hamill";
                    phone = "1-590-365-5825 x59095";
                    postalCode = "92306";
                }};;
            }};            

            RegisterResponse res = sdk.domains.register(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transfer

Transfers a domain with a transfer authorization code.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferResponse;
import org.openapis.openapi.models.shared.ExtraField;
import org.openapis.openapi.models.shared.RegistrantInput;
import org.openapis.openapi.models.shared.TransferDomain;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferDomain req = new TransferDomain() {{
                authCode = "quibusdam";
                domainName = "explicabo";
                nameServers = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("labore"),
                }};
                registrant = new RegistrantInput() {{
                    address = "13550 Rhoda Heights";
                    city = "East Marianostead";
                    companyName = "tempora";
                    countryCode = "PG";
                    email = "Edwardo.Windler@hotmail.com";
                    enterpriseNumber = "eligendi";
                    extraFields = new org.openapis.openapi.models.shared.ExtraField[]{{
                        add(new ExtraField() {{
                            name = "Sherri Tremblay";
                            value = "dolor";
                        }}),
                        add(new ExtraField() {{
                            name = "Randal Parisian";
                            value = "illum";
                        }}),
                        add(new ExtraField() {{
                            name = "Jean Buckridge";
                            value = "facere";
                        }}),
                    }};
                    fax = "ea";
                    firstName = "Gracie";
                    languageCode = "laborum";
                    lastName = "Thompson";
                    phone = "638.965.7655";
                    postalCode = "26346-6404";
                }};;
            }};            

            TransferResponse res = sdk.domains.transfer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
