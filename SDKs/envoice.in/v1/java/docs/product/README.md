# product

### Available Operations

* [productApiAll](#productapiall) - Return all products for the account
* [productApiDeleteForm](#productapideleteform) - Delete an existing product
* [productApiDeleteJson](#productapideletejson) - Delete an existing product
* [productApiDeleteRaw](#productapideleteraw) - Delete an existing product
* [productApiDetails](#productapidetails) - Return product details
* [productApiNewForm](#productapinewform) - Create a product
* [productApiNewJson](#productapinewjson) - Create a product
* [productApiNewRaw](#productapinewraw) - Create a product
* [productApiUpdateForm](#productapiupdateform) - Update an existing product
* [productApiUpdateJson](#productapiupdatejson) - Update an existing product
* [productApiUpdateRaw](#productapiupdateraw) - Update an existing product

## productApiAll

Return all products for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiAllRequest;
import org.openapis.openapi.models.operations.ProductApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiAllRequest req = new ProductApiAllRequest("maiores", "distinctio") {{
                queryOptionsPage = 649657;
                queryOptionsPageSize = 770997;
            }};            

            ProductApiAllResponse res = sdk.product.productApiAll(req);

            if (res.listResultProductDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiDeleteForm

Delete an existing product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiDeleteFormRequest;
import org.openapis.openapi.models.operations.ProductApiDeleteFormResponse;
import org.openapis.openapi.models.shared.ProductDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiDeleteFormRequest req = new ProductApiDeleteFormRequest(                new ProductDeleteApiModel() {{
                                id = 880998;
                            }};, "et", "quas");            

            ProductApiDeleteFormResponse res = sdk.product.productApiDeleteForm(req);

            if (res.productApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiDeleteJson

Delete an existing product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.ProductApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.ProductDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiDeleteJsonRequest req = new ProductApiDeleteJsonRequest(                new ProductDeleteApiModel() {{
                                id = 501462;
                            }};, "cum", "dicta");            

            ProductApiDeleteJsonResponse res = sdk.product.productApiDeleteJson(req);

            if (res.productApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiDeleteRaw

Delete an existing product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiDeleteRawRequest;
import org.openapis.openapi.models.operations.ProductApiDeleteRawResponse;
import org.openapis.openapi.models.shared.ProductDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiDeleteRawRequest req = new ProductApiDeleteRawRequest("impedit".getBytes(), "tempora", "eveniet");            

            ProductApiDeleteRawResponse res = sdk.product.productApiDeleteRaw(req);

            if (res.productApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiDetails

Return product details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiDetailsRequest;
import org.openapis.openapi.models.operations.ProductApiDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiDetailsRequest req = new ProductApiDetailsRequest(920548, "sed", "impedit");            

            ProductApiDetailsResponse res = sdk.product.productApiDetails(req);

            if (res.productFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiNewForm

Create a product

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiNewFormRequest;
import org.openapis.openapi.models.operations.ProductApiNewFormResponse;
import org.openapis.openapi.models.shared.ProductAttachmentApiModel;
import org.openapis.openapi.models.shared.ProductAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.ProductCouponApiModel;
import org.openapis.openapi.models.shared.ProductCreateApiModel;
import org.openapis.openapi.models.shared.ProductCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.ProductDiscountApiModel;
import org.openapis.openapi.models.shared.ProductGatewayApiModel;
import org.openapis.openapi.models.shared.ProductItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiNewFormRequest req = new ProductApiNewFormRequest(                new ProductCreateApiModel() {{
                                afterPaymentDescription = "quas";
                                attachments = new org.openapis.openapi.models.shared.ProductAttachmentApiModel[]{{
                                    add(new ProductAttachmentApiModel() {{
                                        id = 428378;
                                        link = "eligendi";
                                        obfuscatedFileName = "recusandae";
                                        originalFileName = "ex";
                                        size = 105094L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 982574;
                                        link = "itaque";
                                        obfuscatedFileName = "vero";
                                        originalFileName = "quidem";
                                        size = 73826L;
                                        type = ProductAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 490966;
                                        link = "minus";
                                        obfuscatedFileName = "distinctio";
                                        originalFileName = "possimus";
                                        size = 738152L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 906495;
                                        link = "earum";
                                        obfuscatedFileName = "quod";
                                        originalFileName = "nihil";
                                        size = 310930L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                }};
                                buttonCallToAction = "ducimus";
                                coupons = new org.openapis.openapi.models.shared.ProductCouponApiModel[]{{
                                    add(new ProductCouponApiModel() {{
                                        code = "rerum";
                                        discountAmount = 6439.97;
                                        discountPercentage = 1384.36;
                                        id = 319419;
                                        validUntil = OffsetDateTime.parse("2022-11-23T00:22:34.246Z");
                                    }}),
                                    add(new ProductCouponApiModel() {{
                                        code = "iusto";
                                        discountAmount = 4568.65;
                                        discountPercentage = 2982.46;
                                        id = 487799;
                                        validUntil = OffsetDateTime.parse("2020-09-08T07:27:26.848Z");
                                    }}),
                                    add(new ProductCouponApiModel() {{
                                        code = "cupiditate";
                                        discountAmount = 724.22;
                                        discountPercentage = 3486.65;
                                        id = 670430;
                                        validUntil = OffsetDateTime.parse("2022-07-22T22:49:44.757Z");
                                    }}),
                                }};
                                currencyId = 804879;
                                description = "dolorum";
                                discounts = new org.openapis.openapi.models.shared.ProductDiscountApiModel[]{{
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 3419.83;
                                        discountPercentage = 8473.08;
                                        id = 845086;
                                        name = "Tamara Champlin";
                                        validFrom = OffsetDateTime.parse("2022-10-27T13:33:42.141Z");
                                        validTo = OffsetDateTime.parse("2021-12-13T10:52:20.774Z");
                                    }}),
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 6336.43;
                                        discountPercentage = 9197.38;
                                        id = 134428;
                                        name = "Tony Nikolaus";
                                        validFrom = OffsetDateTime.parse("2022-12-16T12:05:54.159Z");
                                        validTo = OffsetDateTime.parse("2022-06-27T05:09:07.569Z");
                                    }}),
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 4817.04;
                                        discountPercentage = 5468.68;
                                        id = 474885;
                                        name = "Vera Bernhard";
                                        validFrom = OffsetDateTime.parse("2021-12-05T00:10:54.956Z");
                                        validTo = OffsetDateTime.parse("2022-02-17T08:18:43.977Z");
                                    }}),
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 7876.29;
                                        discountPercentage = 5909.27;
                                        id = 515595;
                                        name = "Maurice Hamill";
                                        validFrom = OffsetDateTime.parse("2022-12-24T19:30:03.350Z");
                                        validTo = OffsetDateTime.parse("2022-12-02T03:52:20.120Z");
                                    }}),
                                }};
                                isFeatured = false;
                                items = new org.openapis.openapi.models.shared.ProductItemApiModel[]{{
                                    add(new ProductItemApiModel() {{
                                        cost = 2578.21;
                                        description = "doloremque";
                                        id = 740245;
                                        minimumQuantity = 7512.98;
                                        referenceId = "similique";
                                        subTotalAmount = 7837.64;
                                        taxAmount = 7697.89;
                                        taxId = 394724;
                                        taxPercentage = 7689.2;
                                        totalAmount = 7437.95;
                                        workTypeId = 856568;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 3892.87;
                                        description = "nam";
                                        id = 315387;
                                        minimumQuantity = 9790.11;
                                        referenceId = "consectetur";
                                        subTotalAmount = 8988.26;
                                        taxAmount = 8037.92;
                                        taxId = 586717;
                                        taxPercentage = 290.8;
                                        totalAmount = 5881.58;
                                        workTypeId = 239097;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 342.67;
                                        description = "magnam";
                                        id = 998527;
                                        minimumQuantity = 6076.31;
                                        referenceId = "explicabo";
                                        subTotalAmount = 4258.17;
                                        taxAmount = 7403.47;
                                        taxId = 663062;
                                        taxPercentage = 8210.16;
                                        totalAmount = 1430.61;
                                        workTypeId = 373054;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 3434.54;
                                        description = "sequi";
                                        id = 529310;
                                        minimumQuantity = 987.59;
                                        referenceId = "error";
                                        subTotalAmount = 7486.06;
                                        taxAmount = 2696;
                                        taxId = 452653;
                                        taxPercentage = 2611.7;
                                        totalAmount = 7137.18;
                                        workTypeId = 46384;
                                    }}),
                                }};
                                name = "Dr. Woodrow Corkery";
                                paymentGateways = new org.openapis.openapi.models.shared.ProductGatewayApiModel[]{{
                                    add(new ProductGatewayApiModel() {{
                                        name = "Suzanne Kuvalis";
                                    }}),
                                    add(new ProductGatewayApiModel() {{
                                        name = "Raul Dooley";
                                    }}),
                                }};
                                shippingAmount = 5911.71;
                                shippingDescription = "beatae";
                                status = ProductCreateApiModelStatusEnum.ACTIVE;
                                whatHappensNextDescription = "mollitia";
                            }};, "nam", "assumenda");            

            ProductApiNewFormResponse res = sdk.product.productApiNewForm(req);

            if (res.productApiNewForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiNewJson

Create a product

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiNewJsonRequest;
import org.openapis.openapi.models.operations.ProductApiNewJsonResponse;
import org.openapis.openapi.models.shared.ProductAttachmentApiModel;
import org.openapis.openapi.models.shared.ProductAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.ProductCouponApiModel;
import org.openapis.openapi.models.shared.ProductCreateApiModel;
import org.openapis.openapi.models.shared.ProductCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.ProductDiscountApiModel;
import org.openapis.openapi.models.shared.ProductGatewayApiModel;
import org.openapis.openapi.models.shared.ProductItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiNewJsonRequest req = new ProductApiNewJsonRequest(                new ProductCreateApiModel() {{
                                afterPaymentDescription = "quo";
                                attachments = new org.openapis.openapi.models.shared.ProductAttachmentApiModel[]{{
                                    add(new ProductAttachmentApiModel() {{
                                        id = 733763;
                                        link = "commodi";
                                        obfuscatedFileName = "fugit";
                                        originalFileName = "suscipit";
                                        size = 453880L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 397160;
                                        link = "provident";
                                        obfuscatedFileName = "laboriosam";
                                        originalFileName = "accusamus";
                                        size = 68292L;
                                        type = ProductAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 790305;
                                        link = "eaque";
                                        obfuscatedFileName = "alias";
                                        originalFileName = "qui";
                                        size = 163263L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                }};
                                buttonCallToAction = "quidem";
                                coupons = new org.openapis.openapi.models.shared.ProductCouponApiModel[]{{
                                    add(new ProductCouponApiModel() {{
                                        code = "amet";
                                        discountAmount = 3466.08;
                                        discountPercentage = 8470.18;
                                        id = 506532;
                                        validUntil = OffsetDateTime.parse("2021-09-28T11:50:21.312Z");
                                    }}),
                                }};
                                currencyId = 753261;
                                description = "tempore";
                                discounts = new org.openapis.openapi.models.shared.ProductDiscountApiModel[]{{
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 8901.12;
                                        discountPercentage = 7513.81;
                                        id = 989089;
                                        name = "Orlando Littel DDS";
                                        validFrom = OffsetDateTime.parse("2022-09-10T18:01:08.970Z");
                                        validTo = OffsetDateTime.parse("2021-04-01T17:52:16.993Z");
                                    }}),
                                }};
                                isFeatured = false;
                                items = new org.openapis.openapi.models.shared.ProductItemApiModel[]{{
                                    add(new ProductItemApiModel() {{
                                        cost = 427.63;
                                        description = "ipsum";
                                        id = 367;
                                        minimumQuantity = 437.15;
                                        referenceId = "tempora";
                                        subTotalAmount = 5959.86;
                                        taxAmount = 4620.97;
                                        taxId = 541009;
                                        taxPercentage = 6383.63;
                                        totalAmount = 4064.93;
                                        workTypeId = 101770;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 9535.64;
                                        description = "laborum";
                                        id = 84288;
                                        minimumQuantity = 8018.16;
                                        referenceId = "a";
                                        subTotalAmount = 1853.13;
                                        taxAmount = 349.89;
                                        taxId = 415125;
                                        taxPercentage = 5389.44;
                                        totalAmount = 5199.85;
                                        workTypeId = 945637;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 4518.07;
                                        description = "quam";
                                        id = 799830;
                                        minimumQuantity = 1102.47;
                                        referenceId = "sapiente";
                                        subTotalAmount = 9686.89;
                                        taxAmount = 7989.53;
                                        taxId = 451589;
                                        taxPercentage = 779.92;
                                        totalAmount = 8156.11;
                                        workTypeId = 804936;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 6815.78;
                                        description = "ab";
                                        id = 405789;
                                        minimumQuantity = 2359.7;
                                        referenceId = "maiores";
                                        subTotalAmount = 1530.97;
                                        taxAmount = 6571.41;
                                        taxId = 197519;
                                        taxPercentage = 7574.71;
                                        totalAmount = 5283.15;
                                        workTypeId = 21668;
                                    }}),
                                }};
                                name = "Alejandro Kovacek";
                                paymentGateways = new org.openapis.openapi.models.shared.ProductGatewayApiModel[]{{
                                    add(new ProductGatewayApiModel() {{
                                        name = "Ellen Ruecker";
                                    }}),
                                }};
                                shippingAmount = 9453.2;
                                shippingDescription = "molestias";
                                status = ProductCreateApiModelStatusEnum.NOT_AVAILABLE;
                                whatHappensNextDescription = "esse";
                            }};, "laborum", "perspiciatis");            

            ProductApiNewJsonResponse res = sdk.product.productApiNewJson(req);

            if (res.productApiNewJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiNewRaw

Create a product

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiNewRawRequest;
import org.openapis.openapi.models.operations.ProductApiNewRawResponse;
import org.openapis.openapi.models.shared.ProductAttachmentApiModel;
import org.openapis.openapi.models.shared.ProductAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.ProductCouponApiModel;
import org.openapis.openapi.models.shared.ProductCreateApiModel;
import org.openapis.openapi.models.shared.ProductCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.ProductDiscountApiModel;
import org.openapis.openapi.models.shared.ProductGatewayApiModel;
import org.openapis.openapi.models.shared.ProductItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiNewRawRequest req = new ProductApiNewRawRequest("voluptates".getBytes(), "eum", "quasi");            

            ProductApiNewRawResponse res = sdk.product.productApiNewRaw(req);

            if (res.productApiNewRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiUpdateForm

Update an existing product

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiUpdateFormRequest;
import org.openapis.openapi.models.operations.ProductApiUpdateFormResponse;
import org.openapis.openapi.models.shared.ProductAttachmentApiModel;
import org.openapis.openapi.models.shared.ProductAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.ProductCouponApiModel;
import org.openapis.openapi.models.shared.ProductDiscountApiModel;
import org.openapis.openapi.models.shared.ProductGatewayApiModel;
import org.openapis.openapi.models.shared.ProductItemApiModel;
import org.openapis.openapi.models.shared.ProductUpdateApiModel;
import org.openapis.openapi.models.shared.ProductUpdateApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiUpdateFormRequest req = new ProductApiUpdateFormRequest(                new ProductUpdateApiModel() {{
                                afterPaymentDescription = "quas";
                                attachments = new org.openapis.openapi.models.shared.ProductAttachmentApiModel[]{{
                                    add(new ProductAttachmentApiModel() {{
                                        id = 416934;
                                        link = "porro";
                                        obfuscatedFileName = "aliquid";
                                        originalFileName = "mollitia";
                                        size = 695347L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 92851;
                                        link = "nulla";
                                        obfuscatedFileName = "magni";
                                        originalFileName = "natus";
                                        size = 851199L;
                                        type = ProductAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                buttonCallToAction = "impedit";
                                coupons = new org.openapis.openapi.models.shared.ProductCouponApiModel[]{{
                                    add(new ProductCouponApiModel() {{
                                        code = "ut";
                                        discountAmount = 8145.85;
                                        discountPercentage = 3772.69;
                                        id = 987384;
                                        validUntil = OffsetDateTime.parse("2020-08-21T17:46:18.554Z");
                                    }}),
                                    add(new ProductCouponApiModel() {{
                                        code = "facere";
                                        discountAmount = 4913.8;
                                        discountPercentage = 6143.46;
                                        id = 588473;
                                        validUntil = OffsetDateTime.parse("2022-06-05T18:21:29.961Z");
                                    }}),
                                    add(new ProductCouponApiModel() {{
                                        code = "aperiam";
                                        discountAmount = 494.56;
                                        discountPercentage = 4312.58;
                                        id = 385291;
                                        validUntil = OffsetDateTime.parse("2022-02-26T17:43:17.857Z");
                                    }}),
                                }};
                                currencyId = 828481;
                                description = "explicabo";
                                discounts = new org.openapis.openapi.models.shared.ProductDiscountApiModel[]{{
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 413.06;
                                        discountPercentage = 327.75;
                                        id = 4747;
                                        name = "Dana Hayes";
                                        validFrom = OffsetDateTime.parse("2021-05-24T19:52:17.085Z");
                                        validTo = OffsetDateTime.parse("2020-09-12T14:59:58.242Z");
                                    }}),
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 390.47;
                                        discountPercentage = 5168.33;
                                        id = 435266;
                                        name = "Dr. Carlton Considine";
                                        validFrom = OffsetDateTime.parse("2022-08-19T06:41:35.111Z");
                                        validTo = OffsetDateTime.parse("2022-03-27T16:13:53.889Z");
                                    }}),
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 6962.19;
                                        discountPercentage = 2476.15;
                                        id = 109569;
                                        name = "Felicia Breitenberg";
                                        validFrom = OffsetDateTime.parse("2021-11-16T16:36:56.075Z");
                                        validTo = OffsetDateTime.parse("2022-05-06T10:22:27.901Z");
                                    }}),
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 7698.72;
                                        discountPercentage = 5507.99;
                                        id = 849690;
                                        name = "Kenneth Friesen IV";
                                        validFrom = OffsetDateTime.parse("2021-10-02T12:44:48.225Z");
                                        validTo = OffsetDateTime.parse("2022-04-22T18:37:10.708Z");
                                    }}),
                                }};
                                id = 377680;
                                isFeatured = false;
                                items = new org.openapis.openapi.models.shared.ProductItemApiModel[]{{
                                    add(new ProductItemApiModel() {{
                                        cost = 9382.44;
                                        description = "tenetur";
                                        id = 826797;
                                        minimumQuantity = 2941.81;
                                        referenceId = "enim";
                                        subTotalAmount = 3539.04;
                                        taxAmount = 5981.93;
                                        taxId = 3709;
                                        taxPercentage = 4041.21;
                                        totalAmount = 8450.78;
                                        workTypeId = 116867;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 1548.4;
                                        description = "commodi";
                                        id = 204144;
                                        minimumQuantity = 8436.59;
                                        referenceId = "numquam";
                                        subTotalAmount = 5231.09;
                                        taxAmount = 8846.22;
                                        taxId = 608402;
                                        taxPercentage = 2064.51;
                                        totalAmount = 3598.74;
                                        workTypeId = 797527;
                                    }}),
                                }};
                                name = "Nichole Marks";
                                paymentGateways = new org.openapis.openapi.models.shared.ProductGatewayApiModel[]{{
                                    add(new ProductGatewayApiModel() {{
                                        name = "Dale Altenwerth";
                                    }}),
                                }};
                                shippingAmount = 1960;
                                shippingDescription = "recusandae";
                                status = ProductUpdateApiModelStatusEnum.ACTIVE;
                                whatHappensNextDescription = "adipisci";
                            }};, "magni", "aperiam");            

            ProductApiUpdateFormResponse res = sdk.product.productApiUpdateForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiUpdateJson

Update an existing product

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiUpdateJsonRequest;
import org.openapis.openapi.models.operations.ProductApiUpdateJsonResponse;
import org.openapis.openapi.models.shared.ProductAttachmentApiModel;
import org.openapis.openapi.models.shared.ProductAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.ProductCouponApiModel;
import org.openapis.openapi.models.shared.ProductDiscountApiModel;
import org.openapis.openapi.models.shared.ProductGatewayApiModel;
import org.openapis.openapi.models.shared.ProductItemApiModel;
import org.openapis.openapi.models.shared.ProductUpdateApiModel;
import org.openapis.openapi.models.shared.ProductUpdateApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiUpdateJsonRequest req = new ProductApiUpdateJsonRequest(                new ProductUpdateApiModel() {{
                                afterPaymentDescription = "dolores";
                                attachments = new org.openapis.openapi.models.shared.ProductAttachmentApiModel[]{{
                                    add(new ProductAttachmentApiModel() {{
                                        id = 481553;
                                        link = "magni";
                                        obfuscatedFileName = "beatae";
                                        originalFileName = "aliquid";
                                        size = 321697L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 426594;
                                        link = "minima";
                                        obfuscatedFileName = "sit";
                                        originalFileName = "vel";
                                        size = 388333L;
                                        type = ProductAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 94122;
                                        link = "rem";
                                        obfuscatedFileName = "dignissimos";
                                        originalFileName = "doloremque";
                                        size = 825739L;
                                        type = ProductAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new ProductAttachmentApiModel() {{
                                        id = 818422;
                                        link = "sed";
                                        obfuscatedFileName = "inventore";
                                        originalFileName = "voluptatibus";
                                        size = 601228L;
                                        type = ProductAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                buttonCallToAction = "repellendus";
                                coupons = new org.openapis.openapi.models.shared.ProductCouponApiModel[]{{
                                    add(new ProductCouponApiModel() {{
                                        code = "adipisci";
                                        discountAmount = 390.69;
                                        discountPercentage = 7619.27;
                                        id = 269731;
                                        validUntil = OffsetDateTime.parse("2020-09-16T11:45:06.115Z");
                                    }}),
                                }};
                                currencyId = 806124;
                                description = "et";
                                discounts = new org.openapis.openapi.models.shared.ProductDiscountApiModel[]{{
                                    add(new ProductDiscountApiModel() {{
                                        discountAmount = 6620.68;
                                        discountPercentage = 90.6;
                                        id = 551576;
                                        name = "Willie Glover";
                                        validFrom = OffsetDateTime.parse("2022-08-13T17:46:00.555Z");
                                        validTo = OffsetDateTime.parse("2021-08-05T12:18:31.502Z");
                                    }}),
                                }};
                                id = 514609;
                                isFeatured = false;
                                items = new org.openapis.openapi.models.shared.ProductItemApiModel[]{{
                                    add(new ProductItemApiModel() {{
                                        cost = 149;
                                        description = "quia";
                                        id = 642576;
                                        minimumQuantity = 3126.9;
                                        referenceId = "corporis";
                                        subTotalAmount = 8843.25;
                                        taxAmount = 4813.07;
                                        taxId = 958533;
                                        taxPercentage = 4590.86;
                                        totalAmount = 2075.12;
                                        workTypeId = 697591;
                                    }}),
                                    add(new ProductItemApiModel() {{
                                        cost = 7884.69;
                                        description = "praesentium";
                                        id = 273349;
                                        minimumQuantity = 3700.52;
                                        referenceId = "officiis";
                                        subTotalAmount = 1964.97;
                                        taxAmount = 1655.45;
                                        taxId = 29881;
                                        taxPercentage = 6659.6;
                                        totalAmount = 2261.81;
                                        workTypeId = 84211;
                                    }}),
                                }};
                                name = "Boyd Gerlach";
                                paymentGateways = new org.openapis.openapi.models.shared.ProductGatewayApiModel[]{{
                                    add(new ProductGatewayApiModel() {{
                                        name = "Andy Gerhold";
                                    }}),
                                    add(new ProductGatewayApiModel() {{
                                        name = "Matt Lehner";
                                    }}),
                                    add(new ProductGatewayApiModel() {{
                                        name = "Earnest Goyette";
                                    }}),
                                    add(new ProductGatewayApiModel() {{
                                        name = "Vicki Kemmer";
                                    }}),
                                }};
                                shippingAmount = 5522.87;
                                shippingDescription = "illo";
                                status = ProductUpdateApiModelStatusEnum.NOT_AVAILABLE;
                                whatHappensNextDescription = "quibusdam";
                            }};, "fugiat", "impedit");            

            ProductApiUpdateJsonResponse res = sdk.product.productApiUpdateJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productApiUpdateRaw

Update an existing product

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductApiUpdateRawRequest;
import org.openapis.openapi.models.operations.ProductApiUpdateRawResponse;
import org.openapis.openapi.models.shared.ProductAttachmentApiModel;
import org.openapis.openapi.models.shared.ProductAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.ProductCouponApiModel;
import org.openapis.openapi.models.shared.ProductDiscountApiModel;
import org.openapis.openapi.models.shared.ProductGatewayApiModel;
import org.openapis.openapi.models.shared.ProductItemApiModel;
import org.openapis.openapi.models.shared.ProductUpdateApiModel;
import org.openapis.openapi.models.shared.ProductUpdateApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductApiUpdateRawRequest req = new ProductApiUpdateRawRequest("culpa".getBytes(), "atque", "voluptates");            

            ProductApiUpdateRawResponse res = sdk.product.productApiUpdateRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
