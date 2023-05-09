# paymentLink

### Available Operations

* [paymentLinkApiAll](#paymentlinkapiall) - Create a payment link
* [paymentLinkApiDeleteForm](#paymentlinkapideleteform) - Delete an existing payment link
* [paymentLinkApiDeleteJson](#paymentlinkapideletejson) - Delete an existing payment link
* [paymentLinkApiDeleteRaw](#paymentlinkapideleteraw) - Delete an existing payment link
* [paymentLinkApiNewForm](#paymentlinkapinewform) - Create a payment link
* [paymentLinkApiNewJson](#paymentlinkapinewjson) - Create a payment link
* [paymentLinkApiNewRaw](#paymentlinkapinewraw) - Create a payment link
* [paymentLinkApiUri](#paymentlinkapiuri) - Return the unique url to the client's payment link

## paymentLinkApiAll

Create a payment link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiAllRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiAllRequest req = new PaymentLinkApiAllRequest("earum", "soluta") {{
                queryOptionsPage = 940782;
                queryOptionsPageSize = 848151;
            }};            

            PaymentLinkApiAllResponse res = sdk.paymentLink.paymentLinkApiAll(req);

            if (res.listResultPaymentLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentLinkApiDeleteForm

Delete an existing payment link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiDeleteFormRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiDeleteFormResponse;
import org.openapis.openapi.models.shared.Activity;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.Currency;
import org.openapis.openapi.models.shared.ExternalConnection;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAttachment;
import org.openapis.openapi.models.shared.InvoiceAttachmentTypeEnum;
import org.openapis.openapi.models.shared.InvoiceItem;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.PaymentGatewayForInvoice;
import org.openapis.openapi.models.shared.PaymentLink;
import org.openapis.openapi.models.shared.PaymentLinkItem;
import org.openapis.openapi.models.shared.PaymentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionPlan;
import org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanRecurrenceEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanStatusEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanSystemCancelationReasonEnum;
import org.openapis.openapi.models.shared.Tax;
import org.openapis.openapi.models.shared.UiLanguage;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserSettings;
import org.openapis.openapi.models.shared.UserSettingsInvoiceTemplateEnum;
import org.openapis.openapi.models.shared.UserSettingsProfessionEnum;
import org.openapis.openapi.models.shared.UserSettingsReferralProgramEnum;
import org.openapis.openapi.models.shared.UserSettingsStoreCheckoutFieldsEnum;
import org.openapis.openapi.models.shared.UserStatusEnum;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.UserYearsOfExperienceEnum;
import org.openapis.openapi.models.shared.WorkType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiDeleteFormRequest req = new PaymentLinkApiDeleteFormRequest(                new PaymentLink() {{
                                accessToken = "eaque";
                                client = new Client() {{
                                    address = "598 Oscar Hill";
                                    clientCountryId = 211534;
                                    clientCurrencyId = 147808;
                                    companyRegistrationNumber = "cumque";
                                    defaultDueDateInDays = 684935;
                                    email = "Madisyn.Tromp9@gmail.com";
                                    id = 90233;
                                    name = "Ada McClure";
                                    phoneNumber = "quasi";
                                    uiLanguageId = 169025;
                                    userId = 984934;
                                    vat = "nulla";
                                }};;
                                clientId = 896582;
                                currency = new Currency() {{
                                    code = "ipsa";
                                    id = 271113;
                                    name = "Tanya Buckridge";
                                    symbol = "praesentium";
                                    value = "maiores";
                                }};;
                                currencyId = 967260;
                                discountAmount = 4237.06;
                                id = 99958;
                                invoice = new Invoice() {{
                                    accessToken = "fugiat";
                                    activities = new org.openapis.openapi.models.shared.Activity[]{{
                                        add(new Activity() {{
                                            estimationId = 117315;
                                            estimationNumber = "odio";
                                            id = 271252;
                                            invoiceId = 458259;
                                            invoiceNumber = "ex";
                                            link = "consectetur";
                                            message = "aliquid";
                                            orderId = 58870;
                                            orderNumber = "laborum";
                                            type = ActivityTypeEnum.SENT_REMINDER_VIA_SMS;
                                            userId = 344718;
                                        }}),
                                    }};
                                    attachments = new org.openapis.openapi.models.shared.InvoiceAttachment[]{{
                                        add(new InvoiceAttachment() {{
                                            id = 713767;
                                            invoiceId = 399667;
                                            link = "officia";
                                            obfuscatedFileName = "suscipit";
                                            originalFileName = "aliquid";
                                            size = 21973L;
                                            type = InvoiceAttachmentTypeEnum.EXTERNAL;
                                        }}),
                                        add(new InvoiceAttachment() {{
                                            id = 374753;
                                            invoiceId = 614528;
                                            link = "id";
                                            obfuscatedFileName = "ab";
                                            originalFileName = "error";
                                            size = 822407L;
                                            type = InvoiceAttachmentTypeEnum.UPLOADED;
                                        }}),
                                        add(new InvoiceAttachment() {{
                                            id = 653421;
                                            invoiceId = 671794;
                                            link = "libero";
                                            obfuscatedFileName = "ad";
                                            originalFileName = "deleniti";
                                            size = 316220L;
                                            type = InvoiceAttachmentTypeEnum.EXTERNAL;
                                        }}),
                                        add(new InvoiceAttachment() {{
                                            id = 833316;
                                            invoiceId = 405036;
                                            link = "quo";
                                            obfuscatedFileName = "ex";
                                            originalFileName = "ut";
                                            size = 321043L;
                                            type = InvoiceAttachmentTypeEnum.UPLOADED;
                                        }}),
                                    }};
                                    clientId = 29950;
                                    clonedFromId = 561577;
                                    currencyId = 737254;
                                    discountAmount = 3996.6;
                                    duedate = OffsetDateTime.parse("2022-06-21T05:39:54.582Z");
                                    enablePartialPayments = false;
                                    estimationId = 606308;
                                    id = 85233;
                                    invoiceCategoryId = 703218;
                                    isDigitallySigned = false;
                                    issuedOn = OffsetDateTime.parse("2021-09-24T14:32:36.483Z");
                                    items = new org.openapis.openapi.models.shared.InvoiceItem[]{{
                                        add(new InvoiceItem() {{
                                            cost = 9591.43;
                                            description = "officiis";
                                            discountAmount = 1032.98;
                                            discountPercentage = 6821.19;
                                            id = 867168;
                                            invoiceId = 891315;
                                            quantity = 291.9;
                                            subTotalAmount = 12.07;
                                            taxAmount = 5349.17;
                                            taxId = 937219;
                                            taxPercentage = 4042.44;
                                            totalAmount = 9583.08;
                                            workTypeId = 524184;
                                        }}),
                                    }};
                                    notes = "minus";
                                    number = "nemo";
                                    orderId = 992074;
                                    paymentGateways = new org.openapis.openapi.models.shared.PaymentGatewayForInvoice[]{{
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 355225;
                                            name = "Desiree Leannon";
                                        }}),
                                    }};
                                    paymentLinkId = 720528;
                                    payments = new org.openapis.openapi.models.shared.Payment[]{{
                                        add(new Payment() {{
                                            amount = 6334.15;
                                            id = 222864;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 307376;
                                            isAutomatic = false;
                                            note = "inventore";
                                            paidOn = OffsetDateTime.parse("2022-10-30T17:21:08.305Z");
                                            referenceId = "tempora";
                                            type = PaymentTypeEnum.BANK;
                                        }}),
                                        add(new Payment() {{
                                            amount = 86.89;
                                            id = 100014;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 24944;
                                            isAutomatic = false;
                                            note = "modi";
                                            paidOn = OffsetDateTime.parse("2022-12-07T20:31:49.684Z");
                                            referenceId = "laudantium";
                                            type = PaymentTypeEnum.PAYPAL;
                                        }}),
                                    }};
                                    poNumber = "dolor";
                                    recurringProfileId = 856277;
                                    shouldSendReminders = false;
                                    status = InvoiceStatusEnum.PAID;
                                    subTotalAmount = 1621.2;
                                    taxAmount = 551.07;
                                    terms = "quas";
                                    totalAmount = 9111.98;
                                    userId = 773456;
                                }};;
                                items = new org.openapis.openapi.models.shared.PaymentLinkItem[]{{
                                    add(new PaymentLinkItem() {{
                                        cost = 4564.1;
                                        discountAmount = 8972.77;
                                        discountPercentage = 1533.69;
                                        id = 332191;
                                        paymentLinkId = 199596;
                                        quantity = 7129.27;
                                        subTotalAmount = 4329.84;
                                        tax = new Tax() {{
                                            id = 426943;
                                            name = "Miss Oscar Heller";
                                            percentage = 7510.22;
                                            userId = 388319;
                                        }};
                                        taxAmount = 9272.12;
                                        taxId = 160393;
                                        taxPercentage = 289.52;
                                        totalAmount = 3502.07;
                                        workType = new WorkType() {{
                                            id = 895692;
                                            title = "Mr.";
                                            userId = 392569;
                                        }};
                                        workTypeId = 871103;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 8783.73;
                                        discountAmount = 6675.93;
                                        discountPercentage = 6907.85;
                                        id = 192718;
                                        paymentLinkId = 987349;
                                        quantity = 9180.92;
                                        subTotalAmount = 7592.83;
                                        tax = new Tax() {{
                                            id = 579681;
                                            name = "Allison Kuvalis";
                                            percentage = 2540.25;
                                            userId = 364912;
                                        }};
                                        taxAmount = 5510.79;
                                        taxId = 260904;
                                        taxPercentage = 1319.03;
                                        totalAmount = 4959.7;
                                        workType = new WorkType() {{
                                            id = 200516;
                                            title = "Miss";
                                            userId = 514054;
                                        }};
                                        workTypeId = 277340;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 974.93;
                                        discountAmount = 5243.8;
                                        discountPercentage = 8518.54;
                                        id = 117380;
                                        paymentLinkId = 395544;
                                        quantity = 1598.45;
                                        subTotalAmount = 2330.78;
                                        tax = new Tax() {{
                                            id = 46806;
                                            name = "Miss Dominick Rogahn";
                                            percentage = 5790.11;
                                            userId = 612867;
                                        }};
                                        taxAmount = 1700.99;
                                        taxId = 81369;
                                        taxPercentage = 6863.62;
                                        totalAmount = 8818.97;
                                        workType = new WorkType() {{
                                            id = 976802;
                                            title = "Miss";
                                            userId = 608593;
                                        }};
                                        workTypeId = 966390;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 3283.79;
                                        discountAmount = 5076.36;
                                        discountPercentage = 8026.92;
                                        id = 300403;
                                        paymentLinkId = 836364;
                                        quantity = 5495.01;
                                        subTotalAmount = 4152.8;
                                        tax = new Tax() {{
                                            id = 930819;
                                            name = "Deanna Wehner";
                                            percentage = 8773.99;
                                            userId = 32901;
                                        }};
                                        taxAmount = 3719.19;
                                        taxId = 425946;
                                        taxPercentage = 13.83;
                                        totalAmount = 938.94;
                                        workType = new WorkType() {{
                                            id = 247685;
                                            title = "Dr.";
                                            userId = 318233;
                                        }};
                                        workTypeId = 575213;
                                    }}),
                                }};
                                number = "nulla";
                                subTotalAmount = 6436.78;
                                taxAmount = 4585.03;
                                totalAmount = 3644.63;
                                user = new User() {{
                                    actionNotificationsLastReadOn = OffsetDateTime.parse("2022-05-02T06:49:02.857Z");
                                    email = "Kiana_Thompson90@yahoo.com";
                                    externalConnections = new org.openapis.openapi.models.shared.ExternalConnection[]{{
                                        add(new ExternalConnection() {{
                                            accessToken = "ex";
                                            accessTokenSecret = "voluptas";
                                            data = "debitis";
                                            expiresOn = OffsetDateTime.parse("2022-10-21T17:37:55.823Z");
                                            externalUserId = "minus";
                                            externalUsername = "fuga";
                                            id = 675689;
                                            provider = "consectetur";
                                            userId = 244889;
                                        }}),
                                        add(new ExternalConnection() {{
                                            accessToken = "atque";
                                            accessTokenSecret = "ipsum";
                                            data = "impedit";
                                            expiresOn = OffsetDateTime.parse("2022-04-03T11:55:17.660Z");
                                            externalUserId = "repudiandae";
                                            externalUsername = "nam";
                                            id = 294076;
                                            provider = "iusto";
                                            userId = 453094;
                                        }}),
                                        add(new ExternalConnection() {{
                                            accessToken = "sequi";
                                            accessTokenSecret = "dignissimos";
                                            data = "neque";
                                            expiresOn = OffsetDateTime.parse("2021-05-24T15:53:38.806Z");
                                            externalUserId = "quibusdam";
                                            externalUsername = "iure";
                                            id = 139072;
                                            provider = "voluptatibus";
                                            userId = 426904;
                                        }}),
                                        add(new ExternalConnection() {{
                                            accessToken = "magnam";
                                            accessTokenSecret = "quibusdam";
                                            data = "inventore";
                                            expiresOn = OffsetDateTime.parse("2020-10-27T01:38:49.211Z");
                                            externalUserId = "architecto";
                                            externalUsername = "voluptatibus";
                                            id = 156383;
                                            provider = "porro";
                                            userId = 304198;
                                        }}),
                                    }};
                                    hasBeenOnboarded = false;
                                    id = 247045;
                                    isLocked = false;
                                    isVerified = false;
                                    knowledgeNotificationsLastReadOn = OffsetDateTime.parse("2022-12-18T15:43:31.696Z");
                                    lastSeenOn = OffsetDateTime.parse("2022-08-05T11:21:49.286Z");
                                    name = "Leigh Mante";
                                    password = "ut";
                                    passwordSalt = "perspiciatis";
                                    referralPath = "earum";
                                    referredUsers = 117525;
                                    referrerKey = "impedit";
                                    settings = new UserSettings() {{
                                        accountantEmail = "voluptatibus";
                                        address = "9039 Margie Fields";
                                        apiKey = "dolor";
                                        apiSecret = "iusto";
                                        backgroundImage = "sit";
                                        bank = "doloremque";
                                        bankAccount = "consequatur";
                                        cname = "officia";
                                        companyRegistrationNumber = "recusandae";
                                        country = new Country() {{
                                            id = 408303;
                                            name = "Hector Purdy";
                                            value = "expedita";
                                        }};;
                                        countryId = 537236;
                                        currency = new Currency() {{
                                            code = "a";
                                            id = 455579;
                                            name = "Lindsey Treutel";
                                            symbol = "ipsam";
                                            value = "corporis";
                                        }};;
                                        currencyId = 668234;
                                        currencySymbol = "error";
                                        defaultDateFormat = "esse";
                                        defaultDueDateInDays = 288570;
                                        doNotTrack = false;
                                        enableClientPortal = false;
                                        enablePredictiveInvoicing = false;
                                        enableRecurringInvoicing = false;
                                        hasInvoiceLogo = false;
                                        iban = "veritatis";
                                        id = 874400;
                                        invoiceTemplate = UserSettingsInvoiceTemplateEnum.DEFAULT_;
                                        invoiceTemplateColorHex = "vitae";
                                        phoneNumber = "inventore";
                                        profession = UserSettingsProfessionEnum.SOFTWARE_DEVELOPMENT;
                                        receiveSmsNotifications = false;
                                        referralProgram = UserSettingsReferralProgramEnum.ENABLED;
                                        storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum.SHOW_MINIMUM_REQUIRED_FIELDS;
                                        storeColorHex = "iste";
                                        storeCurrency = new Currency() {{
                                            code = "ex";
                                            id = 367626;
                                            name = "Wm Legros";
                                            symbol = "fugit";
                                            value = "alias";
                                        }};;
                                        storeCurrencyId = 168042;
                                        storeCustomJavaScript = "vel";
                                        storeDescription = "quae";
                                        storeEmail = "quae";
                                        storeLanguage = new UiLanguage() {{
                                            id = 264333;
                                            name = "Mrs. Annette Watsica";
                                            uiCulture = "nulla";
                                        }};;
                                        storeLanguageId = 714376;
                                        storeName = "maxime";
                                        storePurchaseEmailMessage = "quia";
                                        storePurchaseThankYouMessage = "quia";
                                        storeTextColorHex = "nostrum";
                                        storeUrl = "omnis";
                                        subscribeToProductEmails = false;
                                        swift = "libero";
                                        terms = "dicta";
                                        userId = 663318;
                                        userSignature = "libero";
                                        vatNumber = "fugiat";
                                        yearsOfExperience = 637462;
                                    }};;
                                    status = UserStatusEnum.FRAUDLENT;
                                    subscriptionPlan = new SubscriptionPlan() {{
                                        cancellatedOn = OffsetDateTime.parse("2022-12-03T19:07:11.911Z");
                                        couponCode = "iusto";
                                        currencyCode = "ipsa";
                                        externalIdentifier = "voluptates";
                                        features = new org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum[]{{
                                            add(SubscriptionPlanFeaturesEnum.API),
                                        }};
                                        hasDuePayment = false;
                                        hasDuePaymentSince = OffsetDateTime.parse("2022-06-01T04:35:31.707Z");
                                        id = 755106;
                                        identifier = "distinctio";
                                        isActive = false;
                                        isLifetime = false;
                                        lastPaymentOn = OffsetDateTime.parse("2022-08-01T09:21:47.394Z");
                                        maxClients = 456688;
                                        name = "Krystal Breitenberg";
                                        onHold = false;
                                        orderIdentifier = "corrupti";
                                        price = 4731.43;
                                        recurrence = SubscriptionPlanRecurrenceEnum.YEARLY;
                                        saleId = 882284L;
                                        status = SubscriptionPlanStatusEnum.FRAUDLENT;
                                        systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum.FRAUD;
                                        trialEndsOn = OffsetDateTime.parse("2022-03-07T21:35:48.234Z");
                                        trialNumberOfDays = 421819;
                                        trialStartsOn = OffsetDateTime.parse("2022-04-19T10:08:34.555Z");
                                        userId = 515638;
                                        version = 357207;
                                    }};;
                                    type = UserTypeEnum.COLLABORATOR;
                                    username = "Watson.Rippin15";
                                    verifiedOn = OffsetDateTime.parse("2021-08-19T14:07:01.740Z");
                                    yearsOfExperience = UserYearsOfExperienceEnum.SIX_PLUS;
                                }};;
                                userId = 34070;
                            }};, "expedita", "officiis");            

            PaymentLinkApiDeleteFormResponse res = sdk.paymentLink.paymentLinkApiDeleteForm(req);

            if (res.paymentLinkApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentLinkApiDeleteJson

Delete an existing payment link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.Activity;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.Currency;
import org.openapis.openapi.models.shared.ExternalConnection;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAttachment;
import org.openapis.openapi.models.shared.InvoiceAttachmentTypeEnum;
import org.openapis.openapi.models.shared.InvoiceItem;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.PaymentGatewayForInvoice;
import org.openapis.openapi.models.shared.PaymentLink;
import org.openapis.openapi.models.shared.PaymentLinkItem;
import org.openapis.openapi.models.shared.PaymentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionPlan;
import org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanRecurrenceEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanStatusEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanSystemCancelationReasonEnum;
import org.openapis.openapi.models.shared.Tax;
import org.openapis.openapi.models.shared.UiLanguage;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserSettings;
import org.openapis.openapi.models.shared.UserSettingsInvoiceTemplateEnum;
import org.openapis.openapi.models.shared.UserSettingsProfessionEnum;
import org.openapis.openapi.models.shared.UserSettingsReferralProgramEnum;
import org.openapis.openapi.models.shared.UserSettingsStoreCheckoutFieldsEnum;
import org.openapis.openapi.models.shared.UserStatusEnum;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.UserYearsOfExperienceEnum;
import org.openapis.openapi.models.shared.WorkType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiDeleteJsonRequest req = new PaymentLinkApiDeleteJsonRequest(                new PaymentLink() {{
                                accessToken = "eos";
                                client = new Client() {{
                                    address = "451 Florine Passage";
                                    clientCountryId = 937117;
                                    clientCurrencyId = 239337;
                                    companyRegistrationNumber = "recusandae";
                                    defaultDueDateInDays = 630871;
                                    email = "Matteo60@gmail.com";
                                    id = 476946;
                                    name = "Kent Corkery";
                                    phoneNumber = "nesciunt";
                                    uiLanguageId = 873557;
                                    userId = 637856;
                                    vat = "dignissimos";
                                }};;
                                clientId = 760744;
                                currency = new Currency() {{
                                    code = "necessitatibus";
                                    id = 359111;
                                    name = "Kristy Lemke";
                                    symbol = "placeat";
                                    value = "enim";
                                }};;
                                currencyId = 204072;
                                discountAmount = 4468.77;
                                id = 796397;
                                invoice = new Invoice() {{
                                    accessToken = "eum";
                                    activities = new org.openapis.openapi.models.shared.Activity[]{{
                                        add(new Activity() {{
                                            estimationId = 357347;
                                            estimationNumber = "magnam";
                                            id = 914971;
                                            invoiceId = 978173;
                                            invoiceNumber = "tempore";
                                            link = "aperiam";
                                            message = "libero";
                                            orderId = 189753;
                                            orderNumber = "labore";
                                            type = ActivityTypeEnum.NEW_PAYMENT_WITH_WEPAY;
                                            userId = 577709;
                                        }}),
                                        add(new Activity() {{
                                            estimationId = 375994;
                                            estimationNumber = "quo";
                                            id = 242099;
                                            invoiceId = 795591;
                                            invoiceNumber = "fuga";
                                            link = "nostrum";
                                            message = "est";
                                            orderId = 770873;
                                            orderNumber = "delectus";
                                            type = ActivityTypeEnum.NEW_PAYMENT_WITH_AUTHORIZE_NET;
                                            userId = 878601;
                                        }}),
                                    }};
                                    attachments = new org.openapis.openapi.models.shared.InvoiceAttachment[]{{
                                        add(new InvoiceAttachment() {{
                                            id = 997437;
                                            invoiceId = 865946;
                                            link = "nemo";
                                            obfuscatedFileName = "reprehenderit";
                                            originalFileName = "aperiam";
                                            size = 486410L;
                                            type = InvoiceAttachmentTypeEnum.EXTERNAL;
                                        }}),
                                    }};
                                    clientId = 448369;
                                    clonedFromId = 496915;
                                    currencyId = 567846;
                                    discountAmount = 1721.95;
                                    duedate = OffsetDateTime.parse("2022-10-30T21:28:00.704Z");
                                    enablePartialPayments = false;
                                    estimationId = 498180;
                                    id = 452729;
                                    invoiceCategoryId = 866789;
                                    isDigitallySigned = false;
                                    issuedOn = OffsetDateTime.parse("2021-02-12T15:07:49.977Z");
                                    items = new org.openapis.openapi.models.shared.InvoiceItem[]{{
                                        add(new InvoiceItem() {{
                                            cost = 4014.28;
                                            description = "quaerat";
                                            discountAmount = 4166.92;
                                            discountPercentage = 8886.16;
                                            id = 810839;
                                            invoiceId = 697274;
                                            quantity = 3481.92;
                                            subTotalAmount = 4633.44;
                                            taxAmount = 2114.55;
                                            taxId = 264619;
                                            taxPercentage = 593.83;
                                            totalAmount = 5755.34;
                                            workTypeId = 876027;
                                        }}),
                                        add(new InvoiceItem() {{
                                            cost = 1949.01;
                                            description = "repudiandae";
                                            discountAmount = 7412.32;
                                            discountPercentage = 1201.2;
                                            id = 936928;
                                            invoiceId = 334474;
                                            quantity = 6592.68;
                                            subTotalAmount = 1753.72;
                                            taxAmount = 7249.94;
                                            taxId = 115898;
                                            taxPercentage = 1644.88;
                                            totalAmount = 8998.67;
                                            workTypeId = 748224;
                                        }}),
                                        add(new InvoiceItem() {{
                                            cost = 568.77;
                                            description = "ducimus";
                                            discountAmount = 9804.86;
                                            discountPercentage = 873.82;
                                            id = 96450;
                                            invoiceId = 386447;
                                            quantity = 8634.71;
                                            subTotalAmount = 7294.48;
                                            taxAmount = 5665.06;
                                            taxId = 578210;
                                            taxPercentage = 3679.17;
                                            totalAmount = 3063.82;
                                            workTypeId = 342342;
                                        }}),
                                        add(new InvoiceItem() {{
                                            cost = 9887.49;
                                            description = "eligendi";
                                            discountAmount = 5740.32;
                                            discountPercentage = 3145.73;
                                            id = 944950;
                                            invoiceId = 657319;
                                            quantity = 5597.74;
                                            subTotalAmount = 5173.26;
                                            taxAmount = 5646.67;
                                            taxId = 484966;
                                            taxPercentage = 511.7;
                                            totalAmount = 9011.63;
                                            workTypeId = 104078;
                                        }}),
                                    }};
                                    notes = "quos";
                                    number = "iste";
                                    orderId = 826862;
                                    paymentGateways = new org.openapis.openapi.models.shared.PaymentGatewayForInvoice[]{{
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 725574;
                                            name = "Sharon Windler";
                                        }}),
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 216870;
                                            name = "Mrs. Kerry Nolan";
                                        }}),
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 727481;
                                            name = "Mae Krajcik";
                                        }}),
                                    }};
                                    paymentLinkId = 251464;
                                    payments = new org.openapis.openapi.models.shared.Payment[]{{
                                        add(new Payment() {{
                                            amount = 9322.96;
                                            id = 150935;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 993002;
                                            isAutomatic = false;
                                            note = "veniam";
                                            paidOn = OffsetDateTime.parse("2022-03-09T22:24:35.771Z");
                                            referenceId = "laudantium";
                                            type = PaymentTypeEnum.STRIPE;
                                        }}),
                                        add(new Payment() {{
                                            amount = 8634.77;
                                            id = 227362;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 347698;
                                            isAutomatic = false;
                                            note = "ab";
                                            paidOn = OffsetDateTime.parse("2022-04-18T09:58:47.871Z");
                                            referenceId = "tempore";
                                            type = PaymentTypeEnum.SEPA;
                                        }}),
                                    }};
                                    poNumber = "voluptatibus";
                                    recurringProfileId = 310840;
                                    shouldSendReminders = false;
                                    status = InvoiceStatusEnum.UNPAID;
                                    subTotalAmount = 7186.27;
                                    taxAmount = 3924.3;
                                    terms = "quis";
                                    totalAmount = 3919.33;
                                    userId = 727771;
                                }};;
                                items = new org.openapis.openapi.models.shared.PaymentLinkItem[]{{
                                    add(new PaymentLinkItem() {{
                                        cost = 8152;
                                        discountAmount = 7060.61;
                                        discountPercentage = 2176.63;
                                        id = 318917;
                                        paymentLinkId = 973819;
                                        quantity = 9745.89;
                                        subTotalAmount = 1623.58;
                                        tax = new Tax() {{
                                            id = 891581;
                                            name = "Susie Davis";
                                            percentage = 2072.96;
                                            userId = 480061;
                                        }};
                                        taxAmount = 6649.65;
                                        taxId = 522176;
                                        taxPercentage = 7538.9;
                                        totalAmount = 8536.06;
                                        workType = new WorkType() {{
                                            id = 604078;
                                            title = "Dr.";
                                            userId = 495617;
                                        }};
                                        workTypeId = 220104;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 1180.41;
                                        discountAmount = 6228.94;
                                        discountPercentage = 7847.31;
                                        id = 111496;
                                        paymentLinkId = 491591;
                                        quantity = 4589.7;
                                        subTotalAmount = 8541.15;
                                        tax = new Tax() {{
                                            id = 322333;
                                            name = "Jill Wintheiser";
                                            percentage = 7298.28;
                                            userId = 72350;
                                        }};
                                        taxAmount = 691.82;
                                        taxId = 280114;
                                        taxPercentage = 8791.74;
                                        totalAmount = 9025.81;
                                        workType = new WorkType() {{
                                            id = 734814;
                                            title = "Mrs.";
                                            userId = 176499;
                                        }};
                                        workTypeId = 970079;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 9391.61;
                                        discountAmount = 4441.21;
                                        discountPercentage = 5063.12;
                                        id = 367046;
                                        paymentLinkId = 999809;
                                        quantity = 7897.7;
                                        subTotalAmount = 1972.59;
                                        tax = new Tax() {{
                                            id = 467119;
                                            name = "Joshua Greenfelder";
                                            percentage = 7904.63;
                                            userId = 591065;
                                        }};
                                        taxAmount = 5149.93;
                                        taxId = 921719;
                                        taxPercentage = 96.83;
                                        totalAmount = 8052.64;
                                        workType = new WorkType() {{
                                            id = 136357;
                                            title = "Miss";
                                            userId = 711991;
                                        }};
                                        workTypeId = 559174;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 5908.58;
                                        discountAmount = 9222.99;
                                        discountPercentage = 7000.45;
                                        id = 492361;
                                        paymentLinkId = 360934;
                                        quantity = 8738.33;
                                        subTotalAmount = 6293.77;
                                        tax = new Tax() {{
                                            id = 833982;
                                            name = "Florence Jerde";
                                            percentage = 121.71;
                                            userId = 32055;
                                        }};
                                        taxAmount = 3228.29;
                                        taxId = 60995;
                                        taxPercentage = 2295.67;
                                        totalAmount = 8493.2;
                                        workType = new WorkType() {{
                                            id = 506863;
                                            title = "Miss";
                                            userId = 736853;
                                        }};
                                        workTypeId = 230411;
                                    }}),
                                }};
                                number = "quasi";
                                subTotalAmount = 1181.26;
                                taxAmount = 5149.22;
                                totalAmount = 407.1;
                                user = new User() {{
                                    actionNotificationsLastReadOn = OffsetDateTime.parse("2021-07-24T17:17:44.726Z");
                                    email = "Lacy_Pagac92@gmail.com";
                                    externalConnections = new org.openapis.openapi.models.shared.ExternalConnection[]{{
                                        add(new ExternalConnection() {{
                                            accessToken = "nemo";
                                            accessTokenSecret = "molestiae";
                                            data = "itaque";
                                            expiresOn = OffsetDateTime.parse("2021-11-28T13:56:44.956Z");
                                            externalUserId = "aperiam";
                                            externalUsername = "sint";
                                            id = 879522;
                                            provider = "eos";
                                            userId = 520081;
                                        }}),
                                    }};
                                    hasBeenOnboarded = false;
                                    id = 115861;
                                    isLocked = false;
                                    isVerified = false;
                                    knowledgeNotificationsLastReadOn = OffsetDateTime.parse("2022-10-03T19:15:55.395Z");
                                    lastSeenOn = OffsetDateTime.parse("2022-11-16T15:13:44.571Z");
                                    name = "Curtis McCullough PhD";
                                    password = "labore";
                                    passwordSalt = "minus";
                                    referralPath = "esse";
                                    referredUsers = 32356;
                                    referrerKey = "perferendis";
                                    settings = new UserSettings() {{
                                        accountantEmail = "rerum";
                                        address = "0492 McKenzie Falls";
                                        apiKey = "eligendi";
                                        apiSecret = "dignissimos";
                                        backgroundImage = "consectetur";
                                        bank = "soluta";
                                        bankAccount = "natus";
                                        cname = "temporibus";
                                        companyRegistrationNumber = "officia";
                                        country = new Country() {{
                                            id = 228857;
                                            name = "Bruce Satterfield";
                                            value = "laborum";
                                        }};;
                                        countryId = 490420;
                                        currency = new Currency() {{
                                            code = "vero";
                                            id = 185348;
                                            name = "Jaime Champlin";
                                            symbol = "nihil";
                                            value = "non";
                                        }};;
                                        currencyId = 68093;
                                        currencySymbol = "illo";
                                        defaultDateFormat = "hic";
                                        defaultDueDateInDays = 644479;
                                        doNotTrack = false;
                                        enableClientPortal = false;
                                        enablePredictiveInvoicing = false;
                                        enableRecurringInvoicing = false;
                                        hasInvoiceLogo = false;
                                        iban = "delectus";
                                        id = 251212;
                                        invoiceTemplate = UserSettingsInvoiceTemplateEnum.TEMPLATE2;
                                        invoiceTemplateColorHex = "in";
                                        phoneNumber = "exercitationem";
                                        profession = UserSettingsProfessionEnum.SOFTWARE_DEVELOPMENT;
                                        receiveSmsNotifications = false;
                                        referralProgram = UserSettingsReferralProgramEnum.ENABLED;
                                        storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum.SHOW_ALL_FIELDS;
                                        storeColorHex = "modi";
                                        storeCurrency = new Currency() {{
                                            code = "in";
                                            id = 127294;
                                            name = "Ian Baumbach";
                                            symbol = "enim";
                                            value = "voluptate";
                                        }};;
                                        storeCurrencyId = 626707;
                                        storeCustomJavaScript = "minima";
                                        storeDescription = "libero";
                                        storeEmail = "magnam";
                                        storeLanguage = new UiLanguage() {{
                                            id = 24272;
                                            name = "Natalie Dooley";
                                            uiCulture = "fugiat";
                                        }};;
                                        storeLanguageId = 345138;
                                        storeName = "molestiae";
                                        storePurchaseEmailMessage = "veniam";
                                        storePurchaseThankYouMessage = "reiciendis";
                                        storeTextColorHex = "ab";
                                        storeUrl = "modi";
                                        subscribeToProductEmails = false;
                                        swift = "aut";
                                        terms = "aut";
                                        userId = 911657;
                                        userSignature = "odio";
                                        vatNumber = "commodi";
                                        yearsOfExperience = 256114;
                                    }};;
                                    status = UserStatusEnum.LOCKED;
                                    subscriptionPlan = new SubscriptionPlan() {{
                                        cancellatedOn = OffsetDateTime.parse("2021-08-23T14:57:18.247Z");
                                        couponCode = "consectetur";
                                        currencyCode = "nesciunt";
                                        externalIdentifier = "quaerat";
                                        features = new org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum[]{{
                                            add(SubscriptionPlanFeaturesEnum.PAYMENT_LINKS),
                                            add(SubscriptionPlanFeaturesEnum.API),
                                            add(SubscriptionPlanFeaturesEnum.PAYMENT_LINKS),
                                            add(SubscriptionPlanFeaturesEnum.CLIENTS),
                                        }};
                                        hasDuePayment = false;
                                        hasDuePaymentSince = OffsetDateTime.parse("2022-10-26T00:55:24.466Z");
                                        id = 704948;
                                        identifier = "amet";
                                        isActive = false;
                                        isLifetime = false;
                                        lastPaymentOn = OffsetDateTime.parse("2022-04-25T19:45:54.258Z");
                                        maxClients = 5310;
                                        name = "David Lubowitz";
                                        onHold = false;
                                        orderIdentifier = "veritatis";
                                        price = 607.78;
                                        recurrence = SubscriptionPlanRecurrenceEnum.MONTHLY;
                                        saleId = 904827L;
                                        status = SubscriptionPlanStatusEnum.FRAUDLENT;
                                        systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum.FRAUD;
                                        trialEndsOn = OffsetDateTime.parse("2021-01-29T04:57:19.341Z");
                                        trialNumberOfDays = 152027;
                                        trialStartsOn = OffsetDateTime.parse("2022-12-31T18:10:52.300Z");
                                        userId = 910073;
                                        version = 941668;
                                    }};;
                                    type = UserTypeEnum.ANONYMOUS;
                                    username = "Dudley89";
                                    verifiedOn = OffsetDateTime.parse("2022-09-30T11:43:51.351Z");
                                    yearsOfExperience = UserYearsOfExperienceEnum.ONE;
                                }};;
                                userId = 397988;
                            }};, "modi", "optio");            

            PaymentLinkApiDeleteJsonResponse res = sdk.paymentLink.paymentLinkApiDeleteJson(req);

            if (res.paymentLinkApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentLinkApiDeleteRaw

Delete an existing payment link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiDeleteRawRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiDeleteRawResponse;
import org.openapis.openapi.models.shared.Activity;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.Currency;
import org.openapis.openapi.models.shared.ExternalConnection;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAttachment;
import org.openapis.openapi.models.shared.InvoiceAttachmentTypeEnum;
import org.openapis.openapi.models.shared.InvoiceItem;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.PaymentGatewayForInvoice;
import org.openapis.openapi.models.shared.PaymentLink;
import org.openapis.openapi.models.shared.PaymentLinkItem;
import org.openapis.openapi.models.shared.PaymentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionPlan;
import org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanRecurrenceEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanStatusEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanSystemCancelationReasonEnum;
import org.openapis.openapi.models.shared.Tax;
import org.openapis.openapi.models.shared.UiLanguage;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserSettings;
import org.openapis.openapi.models.shared.UserSettingsInvoiceTemplateEnum;
import org.openapis.openapi.models.shared.UserSettingsProfessionEnum;
import org.openapis.openapi.models.shared.UserSettingsReferralProgramEnum;
import org.openapis.openapi.models.shared.UserSettingsStoreCheckoutFieldsEnum;
import org.openapis.openapi.models.shared.UserStatusEnum;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.UserYearsOfExperienceEnum;
import org.openapis.openapi.models.shared.WorkType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiDeleteRawRequest req = new PaymentLinkApiDeleteRawRequest("voluptatibus".getBytes(), "molestias", "officia");            

            PaymentLinkApiDeleteRawResponse res = sdk.paymentLink.paymentLinkApiDeleteRaw(req);

            if (res.paymentLinkApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentLinkApiNewForm

Create a payment link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiNewFormRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiNewFormResponse;
import org.openapis.openapi.models.shared.Activity;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.Currency;
import org.openapis.openapi.models.shared.ExternalConnection;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAttachment;
import org.openapis.openapi.models.shared.InvoiceAttachmentTypeEnum;
import org.openapis.openapi.models.shared.InvoiceItem;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.PaymentGatewayForInvoice;
import org.openapis.openapi.models.shared.PaymentLink;
import org.openapis.openapi.models.shared.PaymentLinkItem;
import org.openapis.openapi.models.shared.PaymentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionPlan;
import org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanRecurrenceEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanStatusEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanSystemCancelationReasonEnum;
import org.openapis.openapi.models.shared.Tax;
import org.openapis.openapi.models.shared.UiLanguage;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserSettings;
import org.openapis.openapi.models.shared.UserSettingsInvoiceTemplateEnum;
import org.openapis.openapi.models.shared.UserSettingsProfessionEnum;
import org.openapis.openapi.models.shared.UserSettingsReferralProgramEnum;
import org.openapis.openapi.models.shared.UserSettingsStoreCheckoutFieldsEnum;
import org.openapis.openapi.models.shared.UserStatusEnum;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.UserYearsOfExperienceEnum;
import org.openapis.openapi.models.shared.WorkType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiNewFormRequest req = new PaymentLinkApiNewFormRequest(                new PaymentLink() {{
                                accessToken = "libero";
                                client = new Client() {{
                                    address = "1347 Brooks Field";
                                    clientCountryId = 967338;
                                    clientCurrencyId = 997918;
                                    companyRegistrationNumber = "nulla";
                                    defaultDueDateInDays = 671116;
                                    email = "Shawn_Baumbach@yahoo.com";
                                    id = 924840;
                                    name = "Kyle Leffler";
                                    phoneNumber = "quisquam";
                                    uiLanguageId = 120277;
                                    userId = 973017;
                                    vat = "eligendi";
                                }};;
                                clientId = 62035;
                                currency = new Currency() {{
                                    code = "officiis";
                                    id = 100002;
                                    name = "Jill Rosenbaum MD";
                                    symbol = "reiciendis";
                                    value = "a";
                                }};;
                                currencyId = 615058;
                                discountAmount = 1178.19;
                                id = 552439;
                                invoice = new Invoice() {{
                                    accessToken = "ullam";
                                    activities = new org.openapis.openapi.models.shared.Activity[]{{
                                        add(new Activity() {{
                                            estimationId = 266284;
                                            estimationNumber = "itaque";
                                            id = 807419;
                                            invoiceId = 265905;
                                            invoiceNumber = "consequuntur";
                                            link = "assumenda";
                                            message = "vero";
                                            orderId = 985109;
                                            orderNumber = "impedit";
                                            type = ActivityTypeEnum.ESTIMATION_CREATED;
                                            userId = 883819;
                                        }}),
                                        add(new Activity() {{
                                            estimationId = 518990;
                                            estimationNumber = "reiciendis";
                                            id = 66074;
                                            invoiceId = 573444;
                                            invoiceNumber = "nihil";
                                            link = "esse";
                                            message = "iure";
                                            orderId = 485031;
                                            orderNumber = "nesciunt";
                                            type = ActivityTypeEnum.ESTIMATION_VIEWED;
                                            userId = 423588;
                                        }}),
                                    }};
                                    attachments = new org.openapis.openapi.models.shared.InvoiceAttachment[]{{
                                        add(new InvoiceAttachment() {{
                                            id = 357758;
                                            invoiceId = 375350;
                                            link = "consequuntur";
                                            obfuscatedFileName = "officia";
                                            originalFileName = "reprehenderit";
                                            size = 716033L;
                                            type = InvoiceAttachmentTypeEnum.EXTERNAL;
                                        }}),
                                    }};
                                    clientId = 56372;
                                    clonedFromId = 522062;
                                    currencyId = 978154;
                                    discountAmount = 351.6;
                                    duedate = OffsetDateTime.parse("2022-02-04T05:24:45.768Z");
                                    enablePartialPayments = false;
                                    estimationId = 206063;
                                    id = 816365;
                                    invoiceCategoryId = 307173;
                                    isDigitallySigned = false;
                                    issuedOn = OffsetDateTime.parse("2021-01-12T02:47:10.751Z");
                                    items = new org.openapis.openapi.models.shared.InvoiceItem[]{{
                                        add(new InvoiceItem() {{
                                            cost = 6685.77;
                                            description = "delectus";
                                            discountAmount = 2452.78;
                                            discountPercentage = 1105.22;
                                            id = 201096;
                                            invoiceId = 630832;
                                            quantity = 748.95;
                                            subTotalAmount = 9979.95;
                                            taxAmount = 3632.14;
                                            taxId = 987890;
                                            taxPercentage = 8237.53;
                                            totalAmount = 6033.23;
                                            workTypeId = 275425;
                                        }}),
                                        add(new InvoiceItem() {{
                                            cost = 1280.21;
                                            description = "ipsam";
                                            discountAmount = 5831.93;
                                            discountPercentage = 7614.37;
                                            id = 2064;
                                            invoiceId = 695947;
                                            quantity = 1989.11;
                                            subTotalAmount = 4124.33;
                                            taxAmount = 9561.24;
                                            taxId = 164319;
                                            taxPercentage = 3304.4;
                                            totalAmount = 8937.73;
                                            workTypeId = 638390;
                                        }}),
                                        add(new InvoiceItem() {{
                                            cost = 5750.62;
                                            description = "ut";
                                            discountAmount = 2567.68;
                                            discountPercentage = 9478.22;
                                            id = 236790;
                                            invoiceId = 728559;
                                            quantity = 4483.86;
                                            subTotalAmount = 3296.51;
                                            taxAmount = 4031.47;
                                            taxId = 791762;
                                            taxPercentage = 688.8;
                                            totalAmount = 1081.65;
                                            workTypeId = 943143;
                                        }}),
                                        add(new InvoiceItem() {{
                                            cost = 3923.19;
                                            description = "quisquam";
                                            discountAmount = 2212.18;
                                            discountPercentage = 4965.48;
                                            id = 683727;
                                            invoiceId = 326903;
                                            quantity = 1024.46;
                                            subTotalAmount = 1814.76;
                                            taxAmount = 3970.26;
                                            taxId = 166289;
                                            taxPercentage = 2766.5;
                                            totalAmount = 2404.9;
                                            workTypeId = 506343;
                                        }}),
                                    }};
                                    notes = "dolor";
                                    number = "exercitationem";
                                    orderId = 709701;
                                    paymentGateways = new org.openapis.openapi.models.shared.PaymentGatewayForInvoice[]{{
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 769634;
                                            name = "Renee Nader";
                                        }}),
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 644734;
                                            name = "Sally Schmidt";
                                        }}),
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 788661;
                                            name = "Ora Shields Jr.";
                                        }}),
                                    }};
                                    paymentLinkId = 633982;
                                    payments = new org.openapis.openapi.models.shared.Payment[]{{
                                        add(new Payment() {{
                                            amount = 7510.33;
                                            id = 898193;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 155978;
                                            isAutomatic = false;
                                            note = "dicta";
                                            paidOn = OffsetDateTime.parse("2022-05-28T14:41:13.872Z");
                                            referenceId = "debitis";
                                            type = PaymentTypeEnum.ACH;
                                        }}),
                                    }};
                                    poNumber = "architecto";
                                    recurringProfileId = 33771;
                                    shouldSendReminders = false;
                                    status = InvoiceStatusEnum.DRAFT;
                                    subTotalAmount = 828.76;
                                    taxAmount = 5905.85;
                                    terms = "cumque";
                                    totalAmount = 4355.31;
                                    userId = 842402;
                                }};;
                                items = new org.openapis.openapi.models.shared.PaymentLinkItem[]{{
                                    add(new PaymentLinkItem() {{
                                        cost = 3632.24;
                                        discountAmount = 9234.56;
                                        discountPercentage = 2467.72;
                                        id = 299153;
                                        paymentLinkId = 493591;
                                        quantity = 3884.04;
                                        subTotalAmount = 1522.83;
                                        tax = new Tax() {{
                                            id = 486272;
                                            name = "Rene Ritchie";
                                            percentage = 6973.3;
                                            userId = 932080;
                                        }};
                                        taxAmount = 3895.48;
                                        taxId = 601714;
                                        taxPercentage = 2637.67;
                                        totalAmount = 5951.98;
                                        workType = new WorkType() {{
                                            id = 944626;
                                            title = "Miss";
                                            userId = 135548;
                                        }};
                                        workTypeId = 725784;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 7202.66;
                                        discountAmount = 2791.72;
                                        discountPercentage = 9253.95;
                                        id = 797254;
                                        paymentLinkId = 664666;
                                        quantity = 9044.4;
                                        subTotalAmount = 4230.54;
                                        tax = new Tax() {{
                                            id = 779409;
                                            name = "Desiree Hilll";
                                            percentage = 2476.18;
                                            userId = 649534;
                                        }};
                                        taxAmount = 8270.51;
                                        taxId = 927977;
                                        taxPercentage = 7189.81;
                                        totalAmount = 8668.61;
                                        workType = new WorkType() {{
                                            id = 323365;
                                            title = "Dr.";
                                            userId = 674683;
                                        }};
                                        workTypeId = 911451;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 6731.91;
                                        discountAmount = 2763.37;
                                        discountPercentage = 8023.56;
                                        id = 369523;
                                        paymentLinkId = 60;
                                        quantity = 3798.94;
                                        subTotalAmount = 6472.1;
                                        tax = new Tax() {{
                                            id = 560451;
                                            name = "Ernesto Mayert";
                                            percentage = 194.62;
                                            userId = 143528;
                                        }};
                                        taxAmount = 3992.22;
                                        taxId = 301309;
                                        taxPercentage = 3085.28;
                                        totalAmount = 7558.68;
                                        workType = new WorkType() {{
                                            id = 942185;
                                            title = "Mrs.";
                                            userId = 888265;
                                        }};
                                        workTypeId = 603650;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 8603.11;
                                        discountAmount = 6213.93;
                                        discountPercentage = 6530;
                                        id = 298613;
                                        paymentLinkId = 344289;
                                        quantity = 4609.09;
                                        subTotalAmount = 5488.49;
                                        tax = new Tax() {{
                                            id = 684799;
                                            name = "Edmund Boyle";
                                            percentage = 3857.39;
                                            userId = 41179;
                                        }};
                                        taxAmount = 315.74;
                                        taxId = 816421;
                                        taxPercentage = 9010.08;
                                        totalAmount = 8075.64;
                                        workType = new WorkType() {{
                                            id = 9375;
                                            title = "Mr.";
                                            userId = 102390;
                                        }};
                                        workTypeId = 627161;
                                    }}),
                                }};
                                number = "porro";
                                subTotalAmount = 5024.53;
                                taxAmount = 608.92;
                                totalAmount = 1698.19;
                                user = new User() {{
                                    actionNotificationsLastReadOn = OffsetDateTime.parse("2022-07-22T12:36:05.070Z");
                                    email = "Oma_Bednar@hotmail.com";
                                    externalConnections = new org.openapis.openapi.models.shared.ExternalConnection[]{{
                                        add(new ExternalConnection() {{
                                            accessToken = "laudantium";
                                            accessTokenSecret = "maiores";
                                            data = "alias";
                                            expiresOn = OffsetDateTime.parse("2021-06-06T21:58:33.426Z");
                                            externalUserId = "dicta";
                                            externalUsername = "suscipit";
                                            id = 938257;
                                            provider = "doloribus";
                                            userId = 244569;
                                        }}),
                                        add(new ExternalConnection() {{
                                            accessToken = "eius";
                                            accessTokenSecret = "esse";
                                            data = "in";
                                            expiresOn = OffsetDateTime.parse("2022-09-19T07:21:23.270Z");
                                            externalUserId = "neque";
                                            externalUsername = "vero";
                                            id = 566312;
                                            provider = "accusantium";
                                            userId = 185816;
                                        }}),
                                        add(new ExternalConnection() {{
                                            accessToken = "impedit";
                                            accessTokenSecret = "beatae";
                                            data = "incidunt";
                                            expiresOn = OffsetDateTime.parse("2022-11-11T05:11:31.731Z");
                                            externalUserId = "corporis";
                                            externalUsername = "rerum";
                                            id = 4654;
                                            provider = "error";
                                            userId = 424854;
                                        }}),
                                        add(new ExternalConnection() {{
                                            accessToken = "accusantium";
                                            accessTokenSecret = "id";
                                            data = "laboriosam";
                                            expiresOn = OffsetDateTime.parse("2022-06-12T04:15:05.357Z");
                                            externalUserId = "veritatis";
                                            externalUsername = "ullam";
                                            id = 62688;
                                            provider = "similique";
                                            userId = 278116;
                                        }}),
                                    }};
                                    hasBeenOnboarded = false;
                                    id = 462583;
                                    isLocked = false;
                                    isVerified = false;
                                    knowledgeNotificationsLastReadOn = OffsetDateTime.parse("2022-05-10T02:09:22.586Z");
                                    lastSeenOn = OffsetDateTime.parse("2021-03-04T13:22:29.959Z");
                                    name = "Peggy Schneider";
                                    password = "aliquam";
                                    passwordSalt = "excepturi";
                                    referralPath = "maiores";
                                    referredUsers = 512081;
                                    referrerKey = "velit";
                                    settings = new UserSettings() {{
                                        accountantEmail = "reiciendis";
                                        address = "30795 Gonzalo Ways";
                                        apiKey = "a";
                                        apiSecret = "nobis";
                                        backgroundImage = "perspiciatis";
                                        bank = "accusantium";
                                        bankAccount = "dicta";
                                        cname = "minus";
                                        companyRegistrationNumber = "commodi";
                                        country = new Country() {{
                                            id = 908734;
                                            name = "Geoffrey Powlowski";
                                            value = "fugit";
                                        }};;
                                        countryId = 259377;
                                        currency = new Currency() {{
                                            code = "sequi";
                                            id = 758194;
                                            name = "Claude Kutch";
                                            symbol = "a";
                                            value = "animi";
                                        }};;
                                        currencyId = 979287;
                                        currencySymbol = "itaque";
                                        defaultDateFormat = "nulla";
                                        defaultDueDateInDays = 643419;
                                        doNotTrack = false;
                                        enableClientPortal = false;
                                        enablePredictiveInvoicing = false;
                                        enableRecurringInvoicing = false;
                                        hasInvoiceLogo = false;
                                        iban = "corporis";
                                        id = 246577;
                                        invoiceTemplate = UserSettingsInvoiceTemplateEnum.TEMPLATE2;
                                        invoiceTemplateColorHex = "enim";
                                        phoneNumber = "officia";
                                        profession = UserSettingsProfessionEnum.INDIVIDUAL;
                                        receiveSmsNotifications = false;
                                        referralProgram = UserSettingsReferralProgramEnum.ENABLED;
                                        storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum.SHOW_ALL_FIELDS;
                                        storeColorHex = "accusantium";
                                        storeCurrency = new Currency() {{
                                            code = "officia";
                                            id = 770128;
                                            name = "Mattie Gibson";
                                            symbol = "nobis";
                                            value = "natus";
                                        }};;
                                        storeCurrencyId = 793568;
                                        storeCustomJavaScript = "quia";
                                        storeDescription = "magnam";
                                        storeEmail = "reprehenderit";
                                        storeLanguage = new UiLanguage() {{
                                            id = 800799;
                                            name = "Byron Farrell";
                                            uiCulture = "laborum";
                                        }};;
                                        storeLanguageId = 266946;
                                        storeName = "perferendis";
                                        storePurchaseEmailMessage = "necessitatibus";
                                        storePurchaseThankYouMessage = "architecto";
                                        storeTextColorHex = "molestias";
                                        storeUrl = "dolore";
                                        subscribeToProductEmails = false;
                                        swift = "sunt";
                                        terms = "maiores";
                                        userId = 205011;
                                        userSignature = "odit";
                                        vatNumber = "earum";
                                        yearsOfExperience = 330596;
                                    }};;
                                    status = UserStatusEnum.FRAUDLENT;
                                    subscriptionPlan = new SubscriptionPlan() {{
                                        cancellatedOn = OffsetDateTime.parse("2022-08-26T02:36:34.287Z");
                                        couponCode = "veniam";
                                        currencyCode = "nihil";
                                        externalIdentifier = "ad";
                                        features = new org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum[]{{
                                            add(SubscriptionPlanFeaturesEnum.CNAME),
                                            add(SubscriptionPlanFeaturesEnum.CLIENTS),
                                        }};
                                        hasDuePayment = false;
                                        hasDuePaymentSince = OffsetDateTime.parse("2021-11-25T16:54:25.224Z");
                                        id = 382764;
                                        identifier = "pariatur";
                                        isActive = false;
                                        isLifetime = false;
                                        lastPaymentOn = OffsetDateTime.parse("2022-04-22T10:10:54.165Z");
                                        maxClients = 831031;
                                        name = "Amelia Williamson";
                                        onHold = false;
                                        orderIdentifier = "repellat";
                                        price = 9210.6;
                                        recurrence = SubscriptionPlanRecurrenceEnum.MONTHLY;
                                        saleId = 240696L;
                                        status = SubscriptionPlanStatusEnum.FRAUDLENT;
                                        systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum.FRAUD;
                                        trialEndsOn = OffsetDateTime.parse("2022-01-09T11:33:54.925Z");
                                        trialNumberOfDays = 435353;
                                        trialStartsOn = OffsetDateTime.parse("2022-03-16T15:48:02.869Z");
                                        userId = 746688;
                                        version = 677509;
                                    }};;
                                    type = UserTypeEnum.ANONYMOUS;
                                    username = "Treva.Langosh";
                                    verifiedOn = OffsetDateTime.parse("2022-05-09T02:28:59.420Z");
                                    yearsOfExperience = UserYearsOfExperienceEnum.SIX_PLUS;
                                }};;
                                userId = 687589;
                            }};, "cumque", "doloremque");            

            PaymentLinkApiNewFormResponse res = sdk.paymentLink.paymentLinkApiNewForm(req);

            if (res.paymentLinkApiNewForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentLinkApiNewJson

Create a payment link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiNewJsonRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiNewJsonResponse;
import org.openapis.openapi.models.shared.Activity;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.Currency;
import org.openapis.openapi.models.shared.ExternalConnection;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAttachment;
import org.openapis.openapi.models.shared.InvoiceAttachmentTypeEnum;
import org.openapis.openapi.models.shared.InvoiceItem;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.PaymentGatewayForInvoice;
import org.openapis.openapi.models.shared.PaymentLink;
import org.openapis.openapi.models.shared.PaymentLinkItem;
import org.openapis.openapi.models.shared.PaymentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionPlan;
import org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanRecurrenceEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanStatusEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanSystemCancelationReasonEnum;
import org.openapis.openapi.models.shared.Tax;
import org.openapis.openapi.models.shared.UiLanguage;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserSettings;
import org.openapis.openapi.models.shared.UserSettingsInvoiceTemplateEnum;
import org.openapis.openapi.models.shared.UserSettingsProfessionEnum;
import org.openapis.openapi.models.shared.UserSettingsReferralProgramEnum;
import org.openapis.openapi.models.shared.UserSettingsStoreCheckoutFieldsEnum;
import org.openapis.openapi.models.shared.UserStatusEnum;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.UserYearsOfExperienceEnum;
import org.openapis.openapi.models.shared.WorkType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiNewJsonRequest req = new PaymentLinkApiNewJsonRequest(                new PaymentLink() {{
                                accessToken = "expedita";
                                client = new Client() {{
                                    address = "0635 Dorian Squares";
                                    clientCountryId = 220824;
                                    clientCurrencyId = 700529;
                                    companyRegistrationNumber = "sed";
                                    defaultDueDateInDays = 883078;
                                    email = "Vita_Schiller99@hotmail.com";
                                    id = 532326;
                                    name = "Mr. Zachary Bashirian";
                                    phoneNumber = "nostrum";
                                    uiLanguageId = 869848;
                                    userId = 823472;
                                    vat = "neque";
                                }};;
                                clientId = 866135;
                                currency = new Currency() {{
                                    code = "vel";
                                    id = 960813;
                                    name = "Mrs. Eric Lueilwitz";
                                    symbol = "ad";
                                    value = "aliquam";
                                }};;
                                currencyId = 788165;
                                discountAmount = 5579.87;
                                id = 162450;
                                invoice = new Invoice() {{
                                    accessToken = "maiores";
                                    activities = new org.openapis.openapi.models.shared.Activity[]{{
                                        add(new Activity() {{
                                            estimationId = 400448;
                                            estimationNumber = "laudantium";
                                            id = 665872;
                                            invoiceId = 221329;
                                            invoiceNumber = "aliquid";
                                            link = "consectetur";
                                            message = "cumque";
                                            orderId = 525917;
                                            orderNumber = "voluptatum";
                                            type = ActivityTypeEnum.NEW_PAYMENT_WITH_RAZORPAY;
                                            userId = 237523;
                                        }}),
                                    }};
                                    attachments = new org.openapis.openapi.models.shared.InvoiceAttachment[]{{
                                        add(new InvoiceAttachment() {{
                                            id = 271306;
                                            invoiceId = 503449;
                                            link = "numquam";
                                            obfuscatedFileName = "sequi";
                                            originalFileName = "voluptatum";
                                            size = 27078L;
                                            type = InvoiceAttachmentTypeEnum.UPLOADED;
                                        }}),
                                        add(new InvoiceAttachment() {{
                                            id = 84178;
                                            invoiceId = 949280;
                                            link = "autem";
                                            obfuscatedFileName = "quidem";
                                            originalFileName = "totam";
                                            size = 781193L;
                                            type = InvoiceAttachmentTypeEnum.UPLOADED;
                                        }}),
                                        add(new InvoiceAttachment() {{
                                            id = 168926;
                                            invoiceId = 471207;
                                            link = "voluptas";
                                            obfuscatedFileName = "animi";
                                            originalFileName = "commodi";
                                            size = 716L;
                                            type = InvoiceAttachmentTypeEnum.UPLOADED;
                                        }}),
                                        add(new InvoiceAttachment() {{
                                            id = 14780;
                                            invoiceId = 295892;
                                            link = "maxime";
                                            obfuscatedFileName = "aliquam";
                                            originalFileName = "iste";
                                            size = 355889L;
                                            type = InvoiceAttachmentTypeEnum.UPLOADED;
                                        }}),
                                    }};
                                    clientId = 810302;
                                    clonedFromId = 378403;
                                    currencyId = 577590;
                                    discountAmount = 6009.34;
                                    duedate = OffsetDateTime.parse("2022-07-13T18:04:19.094Z");
                                    enablePartialPayments = false;
                                    estimationId = 78246;
                                    id = 725316;
                                    invoiceCategoryId = 371287;
                                    isDigitallySigned = false;
                                    issuedOn = OffsetDateTime.parse("2022-03-27T04:39:44.275Z");
                                    items = new org.openapis.openapi.models.shared.InvoiceItem[]{{
                                        add(new InvoiceItem() {{
                                            cost = 6886.84;
                                            description = "facere";
                                            discountAmount = 7079.83;
                                            discountPercentage = 1053.72;
                                            id = 767210;
                                            invoiceId = 964511;
                                            quantity = 2871.52;
                                            subTotalAmount = 7126.4;
                                            taxAmount = 5482.56;
                                            taxId = 523995;
                                            taxPercentage = 5433.53;
                                            totalAmount = 8861.18;
                                            workTypeId = 739633;
                                        }}),
                                    }};
                                    notes = "pariatur";
                                    number = "sapiente";
                                    orderId = 775427;
                                    paymentGateways = new org.openapis.openapi.models.shared.PaymentGatewayForInvoice[]{{
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 797293;
                                            name = "Lowell Olson";
                                        }}),
                                        add(new PaymentGatewayForInvoice() {{
                                            id = 726851;
                                            name = "Cory Welch DDS";
                                        }}),
                                    }};
                                    paymentLinkId = 147400;
                                    payments = new org.openapis.openapi.models.shared.Payment[]{{
                                        add(new Payment() {{
                                            amount = 7562.87;
                                            id = 927490;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 83791;
                                            isAutomatic = false;
                                            note = "aut";
                                            paidOn = OffsetDateTime.parse("2022-01-15T07:00:59.329Z");
                                            referenceId = "dolor";
                                            type = PaymentTypeEnum.AUTHORIZE_NET;
                                        }}),
                                        add(new Payment() {{
                                            amount = 2742.95;
                                            id = 169935;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 701841;
                                            isAutomatic = false;
                                            note = "doloremque";
                                            paidOn = OffsetDateTime.parse("2022-07-27T23:55:27.293Z");
                                            referenceId = "at";
                                            type = PaymentTypeEnum.SQUARE;
                                        }}),
                                        add(new Payment() {{
                                            amount = 4444.79;
                                            id = 531195;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 502393;
                                            isAutomatic = false;
                                            note = "nihil";
                                            paidOn = OffsetDateTime.parse("2021-08-09T11:08:53.449Z");
                                            referenceId = "deserunt";
                                            type = PaymentTypeEnum.RAZORPAY;
                                        }}),
                                        add(new Payment() {{
                                            amount = 3448.56;
                                            id = 542340;
                                            invoice = new Invoice() {{}};
                                            invoiceId = 101107;
                                            isAutomatic = false;
                                            note = "est";
                                            paidOn = OffsetDateTime.parse("2022-06-24T07:51:44.560Z");
                                            referenceId = "magni";
                                            type = PaymentTypeEnum.PAYPAL;
                                        }}),
                                    }};
                                    poNumber = "quas";
                                    recurringProfileId = 811259;
                                    shouldSendReminders = false;
                                    status = InvoiceStatusEnum.PAID;
                                    subTotalAmount = 2864.53;
                                    taxAmount = 9580.68;
                                    terms = "saepe";
                                    totalAmount = 9657.35;
                                    userId = 642234;
                                }};;
                                items = new org.openapis.openapi.models.shared.PaymentLinkItem[]{{
                                    add(new PaymentLinkItem() {{
                                        cost = 7638.69;
                                        discountAmount = 6174.97;
                                        discountPercentage = 3125.11;
                                        id = 985379;
                                        paymentLinkId = 156098;
                                        quantity = 8872.84;
                                        subTotalAmount = 6514.67;
                                        tax = new Tax() {{
                                            id = 765070;
                                            name = "Darlene Keeling";
                                            percentage = 2012.66;
                                            userId = 22331;
                                        }};
                                        taxAmount = 4871.48;
                                        taxId = 794306;
                                        taxPercentage = 9903.69;
                                        totalAmount = 9242.93;
                                        workType = new WorkType() {{
                                            id = 912151;
                                            title = "Ms.";
                                            userId = 118349;
                                        }};
                                        workTypeId = 144179;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 251.9;
                                        discountAmount = 3962.34;
                                        discountPercentage = 8986.38;
                                        id = 148975;
                                        paymentLinkId = 537170;
                                        quantity = 1227.44;
                                        subTotalAmount = 2001.9;
                                        tax = new Tax() {{
                                            id = 963913;
                                            name = "Jay Nolan DDS";
                                            percentage = 2596;
                                            userId = 528320;
                                        }};
                                        taxAmount = 600.78;
                                        taxId = 872991;
                                        taxPercentage = 2098.6;
                                        totalAmount = 9998.54;
                                        workType = new WorkType() {{
                                            id = 132305;
                                            title = "Mr.";
                                            userId = 193236;
                                        }};
                                        workTypeId = 143078;
                                    }}),
                                    add(new PaymentLinkItem() {{
                                        cost = 6854.67;
                                        discountAmount = 9431.03;
                                        discountPercentage = 494.99;
                                        id = 211301;
                                        paymentLinkId = 101854;
                                        quantity = 449.29;
                                        subTotalAmount = 1341.73;
                                        tax = new Tax() {{
                                            id = 860362;
                                            name = "Pamela Gusikowski";
                                            percentage = 7602.79;
                                            userId = 750537;
                                        }};
                                        taxAmount = 4044.22;
                                        taxId = 998023;
                                        taxPercentage = 651.18;
                                        totalAmount = 5339.78;
                                        workType = new WorkType() {{
                                            id = 711615;
                                            title = "Dr.";
                                            userId = 569834;
                                        }};
                                        workTypeId = 396610;
                                    }}),
                                }};
                                number = "sed";
                                subTotalAmount = 1066.82;
                                taxAmount = 6273.41;
                                totalAmount = 4087.74;
                                user = new User() {{
                                    actionNotificationsLastReadOn = OffsetDateTime.parse("2022-05-29T19:50:28.684Z");
                                    email = "Jeremie_Koch@hotmail.com";
                                    externalConnections = new org.openapis.openapi.models.shared.ExternalConnection[]{{
                                        add(new ExternalConnection() {{
                                            accessToken = "eveniet";
                                            accessTokenSecret = "earum";
                                            data = "velit";
                                            expiresOn = OffsetDateTime.parse("2022-03-18T15:15:11.631Z");
                                            externalUserId = "rerum";
                                            externalUsername = "itaque";
                                            id = 489685;
                                            provider = "ipsam";
                                            userId = 131687;
                                        }}),
                                        add(new ExternalConnection() {{
                                            accessToken = "impedit";
                                            accessTokenSecret = "aliquid";
                                            data = "quis";
                                            expiresOn = OffsetDateTime.parse("2022-07-25T18:23:48.906Z");
                                            externalUserId = "ut";
                                            externalUsername = "quaerat";
                                            id = 103988;
                                            provider = "praesentium";
                                            userId = 907899;
                                        }}),
                                    }};
                                    hasBeenOnboarded = false;
                                    id = 221781;
                                    isLocked = false;
                                    isVerified = false;
                                    knowledgeNotificationsLastReadOn = OffsetDateTime.parse("2021-07-17T02:21:21.661Z");
                                    lastSeenOn = OffsetDateTime.parse("2022-11-07T07:22:33.976Z");
                                    name = "Isaac Smith";
                                    password = "enim";
                                    passwordSalt = "accusamus";
                                    referralPath = "aperiam";
                                    referredUsers = 916419;
                                    referrerKey = "laudantium";
                                    settings = new UserSettings() {{
                                        accountantEmail = "tempora";
                                        address = "68595 Tressie Club";
                                        apiKey = "aliquam";
                                        apiSecret = "labore";
                                        backgroundImage = "maiores";
                                        bank = "sequi";
                                        bankAccount = "saepe";
                                        cname = "consequatur";
                                        companyRegistrationNumber = "esse";
                                        country = new Country() {{
                                            id = 891302;
                                            name = "Devin Runte";
                                            value = "deserunt";
                                        }};;
                                        countryId = 319834;
                                        currency = new Currency() {{
                                            code = "reiciendis";
                                            id = 196451;
                                            name = "Cameron Rohan";
                                            symbol = "aut";
                                            value = "ipsam";
                                        }};;
                                        currencyId = 642804;
                                        currencySymbol = "cupiditate";
                                        defaultDateFormat = "reprehenderit";
                                        defaultDueDateInDays = 157281;
                                        doNotTrack = false;
                                        enableClientPortal = false;
                                        enablePredictiveInvoicing = false;
                                        enableRecurringInvoicing = false;
                                        hasInvoiceLogo = false;
                                        iban = "necessitatibus";
                                        id = 37764;
                                        invoiceTemplate = UserSettingsInvoiceTemplateEnum.DEFAULT_;
                                        invoiceTemplateColorHex = "nisi";
                                        phoneNumber = "molestiae";
                                        profession = UserSettingsProfessionEnum.DESIGN_AND_CREATIVE;
                                        receiveSmsNotifications = false;
                                        referralProgram = UserSettingsReferralProgramEnum.DISABLED;
                                        storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum.SHOW_MINIMUM_REQUIRED_FIELDS;
                                        storeColorHex = "odit";
                                        storeCurrency = new Currency() {{
                                            code = "iusto";
                                            id = 712893;
                                            name = "Ms. Kari Dooley";
                                            symbol = "esse";
                                            value = "accusantium";
                                        }};;
                                        storeCurrencyId = 718119;
                                        storeCustomJavaScript = "sapiente";
                                        storeDescription = "quam";
                                        storeEmail = "est";
                                        storeLanguage = new UiLanguage() {{
                                            id = 307306;
                                            name = "Trevor Lemke";
                                            uiCulture = "voluptatibus";
                                        }};;
                                        storeLanguageId = 374414;
                                        storeName = "non";
                                        storePurchaseEmailMessage = "ullam";
                                        storePurchaseThankYouMessage = "laborum";
                                        storeTextColorHex = "voluptas";
                                        storeUrl = "doloribus";
                                        subscribeToProductEmails = false;
                                        swift = "animi";
                                        terms = "recusandae";
                                        userId = 359453;
                                        userSignature = "non";
                                        vatNumber = "necessitatibus";
                                        yearsOfExperience = 719469;
                                    }};;
                                    status = UserStatusEnum.LOCKED;
                                    subscriptionPlan = new SubscriptionPlan() {{
                                        cancellatedOn = OffsetDateTime.parse("2022-12-20T21:27:48.504Z");
                                        couponCode = "optio";
                                        currencyCode = "sequi";
                                        externalIdentifier = "sunt";
                                        features = new org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum[]{{
                                            add(SubscriptionPlanFeaturesEnum.CNAME),
                                        }};
                                        hasDuePayment = false;
                                        hasDuePaymentSince = OffsetDateTime.parse("2022-11-07T10:23:33.296Z");
                                        id = 227741;
                                        identifier = "rerum";
                                        isActive = false;
                                        isLifetime = false;
                                        lastPaymentOn = OffsetDateTime.parse("2022-08-27T21:17:43.507Z");
                                        maxClients = 836991;
                                        name = "Carmen Hudson";
                                        onHold = false;
                                        orderIdentifier = "itaque";
                                        price = 1147.67;
                                        recurrence = SubscriptionPlanRecurrenceEnum.YEARLY;
                                        saleId = 33093L;
                                        status = SubscriptionPlanStatusEnum.CANCELED;
                                        systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum.FRAUD;
                                        trialEndsOn = OffsetDateTime.parse("2021-05-12T09:40:30.785Z");
                                        trialNumberOfDays = 980467;
                                        trialStartsOn = OffsetDateTime.parse("2022-05-31T03:19:09.957Z");
                                        userId = 960933;
                                        version = 45510;
                                    }};;
                                    type = UserTypeEnum.SYSTEM_ADMINISTRATOR;
                                    username = "Clinton_McLaughlin";
                                    verifiedOn = OffsetDateTime.parse("2022-12-31T04:26:39.100Z");
                                    yearsOfExperience = UserYearsOfExperienceEnum.SIX_PLUS;
                                }};;
                                userId = 196700;
                            }};, "commodi", "labore");            

            PaymentLinkApiNewJsonResponse res = sdk.paymentLink.paymentLinkApiNewJson(req);

            if (res.paymentLinkApiNewJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentLinkApiNewRaw

Create a payment link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiNewRawRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiNewRawResponse;
import org.openapis.openapi.models.shared.Activity;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.Currency;
import org.openapis.openapi.models.shared.ExternalConnection;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAttachment;
import org.openapis.openapi.models.shared.InvoiceAttachmentTypeEnum;
import org.openapis.openapi.models.shared.InvoiceItem;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.PaymentGatewayForInvoice;
import org.openapis.openapi.models.shared.PaymentLink;
import org.openapis.openapi.models.shared.PaymentLinkItem;
import org.openapis.openapi.models.shared.PaymentTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionPlan;
import org.openapis.openapi.models.shared.SubscriptionPlanFeaturesEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanRecurrenceEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanStatusEnum;
import org.openapis.openapi.models.shared.SubscriptionPlanSystemCancelationReasonEnum;
import org.openapis.openapi.models.shared.Tax;
import org.openapis.openapi.models.shared.UiLanguage;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserSettings;
import org.openapis.openapi.models.shared.UserSettingsInvoiceTemplateEnum;
import org.openapis.openapi.models.shared.UserSettingsProfessionEnum;
import org.openapis.openapi.models.shared.UserSettingsReferralProgramEnum;
import org.openapis.openapi.models.shared.UserSettingsStoreCheckoutFieldsEnum;
import org.openapis.openapi.models.shared.UserStatusEnum;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.UserYearsOfExperienceEnum;
import org.openapis.openapi.models.shared.WorkType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiNewRawRequest req = new PaymentLinkApiNewRawRequest("expedita".getBytes(), "in", "quisquam");            

            PaymentLinkApiNewRawResponse res = sdk.paymentLink.paymentLinkApiNewRaw(req);

            if (res.paymentLinkApiNewRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentLinkApiUri

Return the unique url to the client's payment link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentLinkApiUriRequest;
import org.openapis.openapi.models.operations.PaymentLinkApiUriResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentLinkApiUriRequest req = new PaymentLinkApiUriRequest(123795, "enim", "nulla");            

            PaymentLinkApiUriResponse res = sdk.paymentLink.paymentLinkApiUri(req);

            if (res.paymentLinkUriApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
