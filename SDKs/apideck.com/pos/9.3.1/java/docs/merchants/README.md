# merchants

### Available Operations

* [merchantsAdd](#merchantsadd) - Create Merchant
* [merchantsAll](#merchantsall) - List Merchants
* [merchantsDelete](#merchantsdelete) - Delete Merchant
* [merchantsOne](#merchantsone) - Get Merchant
* [merchantsUpdate](#merchantsupdate) - Update Merchant

## merchantsAdd

Create Merchant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MerchantsAddRequest;
import org.openapis.openapi.models.operations.MerchantsAddResponse;
import org.openapis.openapi.models.operations.MerchantsAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.MerchantInput;
import org.openapis.openapi.models.shared.MerchantStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChargeInput;
import org.openapis.openapi.models.shared.ServiceChargeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MerchantsAddRequest req = new MerchantsAddRequest(                new MerchantInput() {{
                                address = new Address() {{
                                    city = "San Francisco";
                                    contactName = "Elon Musk";
                                    country = "US";
                                    county = "Santa Clara";
                                    email = "elon@musk.com";
                                    fax = "122-111-1111";
                                    id = "123";
                                    latitude = "40.759211";
                                    line1 = "Main street";
                                    line2 = "apt #";
                                    line3 = "Suite #";
                                    line4 = "delivery instructions";
                                    longitude = "-73.984638";
                                    name = "HQ US";
                                    phoneNumber = "111-111-1111";
                                    postalCode = "94104";
                                    rowVersion = "1-12345";
                                    salutation = "Mr";
                                    state = "CA";
                                    streetNumber = "25";
                                    string = "25 Spring Street, Blackburn, VIC 3130";
                                    type = AddressTypeEnum.PRIMARY;
                                    website = "https://elonmusk.com";
                                }};;
                                currency = CurrencyEnum.USD;
                                language = "EN";
                                mainLocationId = "12345";
                                name = "Dunkin Donuts";
                                ownerId = "12345";
                                serviceCharges = new org.openapis.openapi.models.shared.ServiceChargeInput[]{{
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.CUSTOM;
                                    }}),
                                }};
                                status = MerchantStatusEnum.ACTIVE;
                            }};, "voluptatibus", "vero") {{
                raw = false;
                xApideckServiceId = "nihil";
            }};            

            MerchantsAddResponse res = sdk.merchants.merchantsAdd(req, new MerchantsAddSecurity("praesentium") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## merchantsAll

List Merchants

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MerchantsAllRequest;
import org.openapis.openapi.models.operations.MerchantsAllResponse;
import org.openapis.openapi.models.operations.MerchantsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MerchantsAllRequest req = new MerchantsAllRequest("voluptatibus", "ipsa") {{
                cursor = "omnis";
                fields = "voluptate";
                limit = 739264L;
                raw = false;
                xApideckServiceId = "perferendis";
            }};            

            MerchantsAllResponse res = sdk.merchants.merchantsAll(req, new MerchantsAllSecurity("doloremque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMerchantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## merchantsDelete

Delete Merchant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MerchantsDeleteRequest;
import org.openapis.openapi.models.operations.MerchantsDeleteResponse;
import org.openapis.openapi.models.operations.MerchantsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MerchantsDeleteRequest req = new MerchantsDeleteRequest("reprehenderit", "ut", "maiores") {{
                raw = false;
                xApideckServiceId = "dicta";
            }};            

            MerchantsDeleteResponse res = sdk.merchants.merchantsDelete(req, new MerchantsDeleteSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## merchantsOne

Get Merchant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MerchantsOneRequest;
import org.openapis.openapi.models.operations.MerchantsOneResponse;
import org.openapis.openapi.models.operations.MerchantsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MerchantsOneRequest req = new MerchantsOneRequest("dolore", "iusto", "dicta") {{
                fields = "harum";
                raw = false;
                xApideckServiceId = "enim";
            }};            

            MerchantsOneResponse res = sdk.merchants.merchantsOne(req, new MerchantsOneSecurity("accusamus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## merchantsUpdate

Update Merchant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MerchantsUpdateRequest;
import org.openapis.openapi.models.operations.MerchantsUpdateResponse;
import org.openapis.openapi.models.operations.MerchantsUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.MerchantInput;
import org.openapis.openapi.models.shared.MerchantStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChargeInput;
import org.openapis.openapi.models.shared.ServiceChargeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MerchantsUpdateRequest req = new MerchantsUpdateRequest(                new MerchantInput() {{
                                address = new Address() {{
                                    city = "San Francisco";
                                    contactName = "Elon Musk";
                                    country = "US";
                                    county = "Santa Clara";
                                    email = "elon@musk.com";
                                    fax = "122-111-1111";
                                    id = "123";
                                    latitude = "40.759211";
                                    line1 = "Main street";
                                    line2 = "apt #";
                                    line3 = "Suite #";
                                    line4 = "delivery instructions";
                                    longitude = "-73.984638";
                                    name = "HQ US";
                                    phoneNumber = "111-111-1111";
                                    postalCode = "94104";
                                    rowVersion = "1-12345";
                                    salutation = "Mr";
                                    state = "CA";
                                    streetNumber = "25";
                                    string = "25 Spring Street, Blackburn, VIC 3130";
                                    type = AddressTypeEnum.PRIMARY;
                                    website = "https://elonmusk.com";
                                }};;
                                currency = CurrencyEnum.USD;
                                language = "EN";
                                mainLocationId = "12345";
                                name = "Dunkin Donuts";
                                ownerId = "12345";
                                serviceCharges = new org.openapis.openapi.models.shared.ServiceChargeInput[]{{
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.CUSTOM;
                                    }}),
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
                                }};
                                status = MerchantStatusEnum.ACTIVE;
                            }};, "ipsum", "quidem", "molestias") {{
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            MerchantsUpdateResponse res = sdk.merchants.merchantsUpdate(req, new MerchantsUpdateSecurity("pariatur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
