# orders

### Available Operations

* [ordersAdd](#ordersadd) - Create Order
* [ordersAll](#ordersall) - List Orders
* [ordersDelete](#ordersdelete) - Delete Order
* [ordersOne](#ordersone) - Get Order
* [ordersPay](#orderspay) - Pay Order
* [ordersUpdate](#ordersupdate) - Update Order

## ordersAdd

Create Order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersAddRequest;
import org.openapis.openapi.models.operations.OrdersAddResponse;
import org.openapis.openapi.models.operations.OrdersAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.OrderCustomers;
import org.openapis.openapi.models.shared.OrderDiscountsInput;
import org.openapis.openapi.models.shared.OrderDiscountsScopeEnum;
import org.openapis.openapi.models.shared.OrderDiscountsTypeEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsFulfillmentStatusEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsInput;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsInput;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsRecipient;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsScheduleTypeEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsTypeEnum;
import org.openapis.openapi.models.shared.OrderInput;
import org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput;
import org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput;
import org.openapis.openapi.models.shared.OrderLineItemsInput;
import org.openapis.openapi.models.shared.OrderLineItemsModifiers;
import org.openapis.openapi.models.shared.OrderPaymentsInput;
import org.openapis.openapi.models.shared.OrderPosPaymentStatusEnum;
import org.openapis.openapi.models.shared.OrderRefundsInput;
import org.openapis.openapi.models.shared.OrderRefundsStatusEnum;
import org.openapis.openapi.models.shared.OrderStatusEnum;
import org.openapis.openapi.models.shared.OrderTaxes;
import org.openapis.openapi.models.shared.OrderTaxesScopeEnum;
import org.openapis.openapi.models.shared.OrderTaxesTypeEnum;
import org.openapis.openapi.models.shared.OrderTendersCardEntryMethodEnum;
import org.openapis.openapi.models.shared.OrderTendersCardStatusEnum;
import org.openapis.openapi.models.shared.OrderTendersInput;
import org.openapis.openapi.models.shared.OrderTendersTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardCardBrandEnum;
import org.openapis.openapi.models.shared.PaymentCardCardTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardInput;
import org.openapis.openapi.models.shared.PaymentCardPrepaidTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChargeInput;
import org.openapis.openapi.models.shared.ServiceChargeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersAddRequest req = new OrdersAddRequest(                new OrderInput("12345", "12345") {{
                                closedDate = LocalDate.parse("2022-08-13");
                                currency = CurrencyEnum.USD;
                                customerId = "12345";
                                customers = new org.openapis.openapi.models.shared.OrderCustomers[]{{
                                    add(new OrderCustomers() {{
                                        emails = new org.openapis.openapi.models.shared.Email[]{{
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                        firstName = "Elon";
                                        id = "12345";
                                        lastName = "Musk";
                                        middleName = "D.";
                                        phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                    }}),
                                    add(new OrderCustomers() {{
                                        emails = new org.openapis.openapi.models.shared.Email[]{{
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                        firstName = "Elon";
                                        id = "12345";
                                        lastName = "Musk";
                                        middleName = "D.";
                                        phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                    }}),
                                }};
                                discounts = new org.openapis.openapi.models.shared.OrderDiscountsInput[]{{
                                    add(new OrderDiscountsInput(OrderDiscountsTypeEnum.PERCENTAGE) {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        scope = OrderDiscountsScopeEnum.ORDER;
                                        type = OrderDiscountsTypeEnum.PERCENTAGE;
                                    }}),
                                    add(new OrderDiscountsInput(OrderDiscountsTypeEnum.PERCENTAGE) {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        scope = OrderDiscountsScopeEnum.ORDER;
                                        type = OrderDiscountsTypeEnum.PERCENTAGE;
                                    }}),
                                }};
                                employeeId = "12345";
                                fulfillments = new org.openapis.openapi.models.shared.OrderFulfillmentsInput[]{{
                                    add(new OrderFulfillmentsInput() {{
                                        id = "12345";
                                        pickupDetails = new OrderFulfillmentsPickupDetailsInput() {{
                                            autoCompleteDuration = "P1W3D";
                                            cancelReason = "Not hungry";
                                            canceledAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            curbsidePickupDetails = new OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                                curbsideDetails = "natus";
                                            }};
                                            expiredAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            expiresAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            isCurbsidePickup = false;
                                            note = "Pickup in the back.";
                                            pickedUpAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupWindowDuration = "P1W3D";
                                            placedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            prepTimeDuration = "P1W3D";
                                            readyAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            recipient = new OrderFulfillmentsPickupDetailsRecipient() {{
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
                                                }};
                                                customerId = "12345";
                                                displayName = "Elon Musk";
                                                email = new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }};
                                                phoneNumber = new PhoneNumber("111-111-1111") {{
                                                    areaCode = "323";
                                                    countryCode = "1";
                                                    extension = "105";
                                                    id = "12345";
                                                    number = "111-111-1111";
                                                    type = PhoneNumberTypeEnum.PRIMARY;
                                                }};
                                            }};
                                            rejectedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            scheduleType = OrderFulfillmentsPickupDetailsScheduleTypeEnum.SCHEDULED;
                                        }};
                                        shipmentDetails = new java.util.HashMap<String, Object>() {{
                                            put("eum", "vero");
                                            put("aspernatur", "architecto");
                                            put("magnam", "et");
                                        }};
                                        status = OrderFulfillmentsFulfillmentStatusEnum.COMPLETED;
                                        type = OrderFulfillmentsTypeEnum.SHIPMENT;
                                    }}),
                                    add(new OrderFulfillmentsInput() {{
                                        id = "12345";
                                        pickupDetails = new OrderFulfillmentsPickupDetailsInput() {{
                                            autoCompleteDuration = "P1W3D";
                                            cancelReason = "Not hungry";
                                            canceledAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            curbsidePickupDetails = new OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                                curbsideDetails = "ullam";
                                            }};
                                            expiredAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            expiresAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            isCurbsidePickup = false;
                                            note = "Pickup in the back.";
                                            pickedUpAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupWindowDuration = "P1W3D";
                                            placedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            prepTimeDuration = "P1W3D";
                                            readyAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            recipient = new OrderFulfillmentsPickupDetailsRecipient() {{
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
                                                }};
                                                customerId = "12345";
                                                displayName = "Elon Musk";
                                                email = new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }};
                                                phoneNumber = new PhoneNumber("111-111-1111") {{
                                                    areaCode = "323";
                                                    countryCode = "1";
                                                    extension = "105";
                                                    id = "12345";
                                                    number = "111-111-1111";
                                                    type = PhoneNumberTypeEnum.PRIMARY;
                                                }};
                                            }};
                                            rejectedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            scheduleType = OrderFulfillmentsPickupDetailsScheduleTypeEnum.SCHEDULED;
                                        }};
                                        shipmentDetails = new java.util.HashMap<String, Object>() {{
                                            put("quos", "sint");
                                            put("accusantium", "mollitia");
                                            put("reiciendis", "mollitia");
                                        }};
                                        status = OrderFulfillmentsFulfillmentStatusEnum.PREPARED;
                                        type = OrderFulfillmentsTypeEnum.SHIPMENT;
                                    }}),
                                }};
                                idempotencyKey = "random_string";
                                lineItems = new org.openapis.openapi.models.shared.OrderLineItemsInput[]{{
                                    add(new OrderLineItemsInput() {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput[]{{
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput[]{{
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemsModifiers[]{{
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                        }};
                                        name = "New York Strip Steak";
                                        quantity = 1;
                                        totalAmount = 27500L;
                                        totalDiscount = 3000L;
                                        totalTax = 2000L;
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new OrderLineItemsInput() {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput[]{{
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput[]{{
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemsModifiers[]{{
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                        }};
                                        name = "New York Strip Steak";
                                        quantity = 1;
                                        totalAmount = 27500L;
                                        totalDiscount = 3000L;
                                        totalTax = 2000L;
                                        unitPrice = 27500.5;
                                    }}),
                                }};
                                note = "doloribus";
                                orderDate = LocalDate.parse("2022-08-12");
                                orderNumber = "1F";
                                orderTypeId = "12345";
                                paymentStatus = OrderPosPaymentStatusEnum.OPEN;
                                payments = new org.openapis.openapi.models.shared.OrderPaymentsInput[]{{
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                }};
                                referenceId = "my-order-001";
                                refunded = false;
                                refunds = new org.openapis.openapi.models.shared.OrderRefundsInput[]{{
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.FAILED;
                                    }}),
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.REJECTED;
                                    }}),
                                }};
                                seat = "23F";
                                serviceCharges = new org.openapis.openapi.models.shared.ServiceChargeInput[]{{
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
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
                                status = OrderStatusEnum.OPEN;
                                table = "1F";
                                taxes = new org.openapis.openapi.models.shared.OrderTaxes[]{{
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.ORDER;
                                        type = OrderTaxesTypeEnum.INCLUSIVE;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.ORDER;
                                        type = OrderTaxesTypeEnum.INCLUSIVE;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.LINE_ITEM;
                                        type = OrderTaxesTypeEnum.UNKNOWN;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.LINE_ITEM;
                                        type = OrderTaxesTypeEnum.INCLUSIVE;
                                    }}),
                                }};
                                tenders = new org.openapis.openapi.models.shared.OrderTendersInput[]{{
                                    add(new OrderTendersInput() {{
                                        amount = 27500;
                                        buyerTenderedCashAmount = 27500L;
                                        card = new PaymentCardInput() {{
                                            billingAddress = new Address() {{
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
                                            }};
                                            bin = "41111";
                                            cardBrand = PaymentCardCardBrandEnum.AMEX;
                                            cardType = PaymentCardCardTypeEnum.CREDIT;
                                            cardholderName = "John Doe";
                                            customerId = "12345";
                                            enabled = true;
                                            expMonth = 1L;
                                            expYear = 2022L;
                                            fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                            last4 = "The last 4 digits of the card number.";
                                            merchantId = "12345";
                                            prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                            referenceId = "card-001";
                                            version = "230320320320";
                                        }};
                                        cardEntryMethod = OrderTendersCardEntryMethodEnum.SWIPED;
                                        cardStatus = OrderTendersCardStatusEnum.AUTHORIZED;
                                        changeBackCashAmount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        note = "An optional note associated with the tender at the time of payment.";
                                        percentage = 10;
                                        totalAmount = 27.5L;
                                        totalDiscount = 3L;
                                        totalProcessingFee = 508315L;
                                        totalRefund = 615560L;
                                        totalServiceCharge = 166847L;
                                        totalTax = 2.75L;
                                        totalTip = 7L;
                                        type = OrderTendersTypeEnum.CASH;
                                    }}),
                                }};
                                title = "Mr.";
                                totalAmount = 275L;
                                totalDiscount = 300L;
                                totalRefund = 779051L;
                                totalServiceCharge = 848009L;
                                totalTax = 275L;
                                totalTip = 700L;
                                version = "230320320320";
                                voided = false;
                            }};, "pariatur", "maxime") {{
                raw = false;
                xApideckServiceId = "ea";
            }};            

            OrdersAddResponse res = sdk.orders.ordersAdd(req, new OrdersAddSecurity("excepturi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ordersAll

List Orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersAllRequest;
import org.openapis.openapi.models.operations.OrdersAllResponse;
import org.openapis.openapi.models.operations.OrdersAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersAllRequest req = new OrdersAllRequest("odit", "ea") {{
                cursor = "accusantium";
                fields = "ab";
                limit = 982575L;
                locationId = "quidem";
                raw = false;
                xApideckServiceId = "ipsam";
            }};            

            OrdersAllResponse res = sdk.orders.ordersAll(req, new OrdersAllSecurity("voluptate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ordersDelete

Delete Order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersDeleteRequest;
import org.openapis.openapi.models.operations.OrdersDeleteResponse;
import org.openapis.openapi.models.operations.OrdersDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersDeleteRequest req = new OrdersDeleteRequest("autem", "nam", "eaque") {{
                raw = false;
                xApideckServiceId = "pariatur";
            }};            

            OrdersDeleteResponse res = sdk.orders.ordersDelete(req, new OrdersDeleteSecurity("nemo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ordersOne

Get Order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersOneRequest;
import org.openapis.openapi.models.operations.OrdersOneResponse;
import org.openapis.openapi.models.operations.OrdersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersOneRequest req = new OrdersOneRequest("voluptatibus", "perferendis", "fugiat") {{
                fields = "amet";
                raw = false;
                xApideckServiceId = "aut";
            }};            

            OrdersOneResponse res = sdk.orders.ordersOne(req, new OrdersOneSecurity("cumque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ordersPay

Pay Order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersPayRequest;
import org.openapis.openapi.models.operations.OrdersPayResponse;
import org.openapis.openapi.models.operations.OrdersPaySecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.OrderCustomers;
import org.openapis.openapi.models.shared.OrderDiscountsInput;
import org.openapis.openapi.models.shared.OrderDiscountsScopeEnum;
import org.openapis.openapi.models.shared.OrderDiscountsTypeEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsFulfillmentStatusEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsInput;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsInput;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsRecipient;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsScheduleTypeEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsTypeEnum;
import org.openapis.openapi.models.shared.OrderInput;
import org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput;
import org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput;
import org.openapis.openapi.models.shared.OrderLineItemsInput;
import org.openapis.openapi.models.shared.OrderLineItemsModifiers;
import org.openapis.openapi.models.shared.OrderPaymentsInput;
import org.openapis.openapi.models.shared.OrderPosPaymentStatusEnum;
import org.openapis.openapi.models.shared.OrderRefundsInput;
import org.openapis.openapi.models.shared.OrderRefundsStatusEnum;
import org.openapis.openapi.models.shared.OrderStatusEnum;
import org.openapis.openapi.models.shared.OrderTaxes;
import org.openapis.openapi.models.shared.OrderTaxesScopeEnum;
import org.openapis.openapi.models.shared.OrderTaxesTypeEnum;
import org.openapis.openapi.models.shared.OrderTendersCardEntryMethodEnum;
import org.openapis.openapi.models.shared.OrderTendersCardStatusEnum;
import org.openapis.openapi.models.shared.OrderTendersInput;
import org.openapis.openapi.models.shared.OrderTendersTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardCardBrandEnum;
import org.openapis.openapi.models.shared.PaymentCardCardTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardInput;
import org.openapis.openapi.models.shared.PaymentCardPrepaidTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChargeInput;
import org.openapis.openapi.models.shared.ServiceChargeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersPayRequest req = new OrdersPayRequest(                new OrderInput("12345", "12345") {{
                                closedDate = LocalDate.parse("2022-08-13");
                                currency = CurrencyEnum.USD;
                                customerId = "12345";
                                customers = new org.openapis.openapi.models.shared.OrderCustomers[]{{
                                    add(new OrderCustomers() {{
                                        emails = new org.openapis.openapi.models.shared.Email[]{{
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                        firstName = "Elon";
                                        id = "12345";
                                        lastName = "Musk";
                                        middleName = "D.";
                                        phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                    }}),
                                    add(new OrderCustomers() {{
                                        emails = new org.openapis.openapi.models.shared.Email[]{{
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                        firstName = "Elon";
                                        id = "12345";
                                        lastName = "Musk";
                                        middleName = "D.";
                                        phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                    }}),
                                }};
                                discounts = new org.openapis.openapi.models.shared.OrderDiscountsInput[]{{
                                    add(new OrderDiscountsInput(OrderDiscountsTypeEnum.PERCENTAGE) {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        scope = OrderDiscountsScopeEnum.ORDER;
                                        type = OrderDiscountsTypeEnum.PERCENTAGE;
                                    }}),
                                    add(new OrderDiscountsInput(OrderDiscountsTypeEnum.PERCENTAGE) {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        scope = OrderDiscountsScopeEnum.ORDER;
                                        type = OrderDiscountsTypeEnum.PERCENTAGE;
                                    }}),
                                }};
                                employeeId = "12345";
                                fulfillments = new org.openapis.openapi.models.shared.OrderFulfillmentsInput[]{{
                                    add(new OrderFulfillmentsInput() {{
                                        id = "12345";
                                        pickupDetails = new OrderFulfillmentsPickupDetailsInput() {{
                                            autoCompleteDuration = "P1W3D";
                                            cancelReason = "Not hungry";
                                            canceledAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            curbsidePickupDetails = new OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                                curbsideDetails = "dignissimos";
                                            }};
                                            expiredAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            expiresAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            isCurbsidePickup = false;
                                            note = "Pickup in the back.";
                                            pickedUpAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupWindowDuration = "P1W3D";
                                            placedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            prepTimeDuration = "P1W3D";
                                            readyAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            recipient = new OrderFulfillmentsPickupDetailsRecipient() {{
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
                                                }};
                                                customerId = "12345";
                                                displayName = "Elon Musk";
                                                email = new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }};
                                                phoneNumber = new PhoneNumber("111-111-1111") {{
                                                    areaCode = "323";
                                                    countryCode = "1";
                                                    extension = "105";
                                                    id = "12345";
                                                    number = "111-111-1111";
                                                    type = PhoneNumberTypeEnum.PRIMARY;
                                                }};
                                            }};
                                            rejectedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            scheduleType = OrderFulfillmentsPickupDetailsScheduleTypeEnum.SCHEDULED;
                                        }};
                                        shipmentDetails = new java.util.HashMap<String, Object>() {{
                                            put("quis", "nesciunt");
                                        }};
                                        status = OrderFulfillmentsFulfillmentStatusEnum.RESERVED;
                                        type = OrderFulfillmentsTypeEnum.SHIPMENT;
                                    }}),
                                    add(new OrderFulfillmentsInput() {{
                                        id = "12345";
                                        pickupDetails = new OrderFulfillmentsPickupDetailsInput() {{
                                            autoCompleteDuration = "P1W3D";
                                            cancelReason = "Not hungry";
                                            canceledAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            curbsidePickupDetails = new OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                                curbsideDetails = "perferendis";
                                            }};
                                            expiredAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            expiresAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            isCurbsidePickup = false;
                                            note = "Pickup in the back.";
                                            pickedUpAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupWindowDuration = "P1W3D";
                                            placedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            prepTimeDuration = "P1W3D";
                                            readyAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            recipient = new OrderFulfillmentsPickupDetailsRecipient() {{
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
                                                }};
                                                customerId = "12345";
                                                displayName = "Elon Musk";
                                                email = new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }};
                                                phoneNumber = new PhoneNumber("111-111-1111") {{
                                                    areaCode = "323";
                                                    countryCode = "1";
                                                    extension = "105";
                                                    id = "12345";
                                                    number = "111-111-1111";
                                                    type = PhoneNumberTypeEnum.PRIMARY;
                                                }};
                                            }};
                                            rejectedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            scheduleType = OrderFulfillmentsPickupDetailsScheduleTypeEnum.SCHEDULED;
                                        }};
                                        shipmentDetails = new java.util.HashMap<String, Object>() {{
                                            put("minus", "quam");
                                        }};
                                        status = OrderFulfillmentsFulfillmentStatusEnum.RESERVED;
                                        type = OrderFulfillmentsTypeEnum.SHIPMENT;
                                    }}),
                                    add(new OrderFulfillmentsInput() {{
                                        id = "12345";
                                        pickupDetails = new OrderFulfillmentsPickupDetailsInput() {{
                                            autoCompleteDuration = "P1W3D";
                                            cancelReason = "Not hungry";
                                            canceledAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            curbsidePickupDetails = new OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                                curbsideDetails = "vero";
                                            }};
                                            expiredAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            expiresAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            isCurbsidePickup = false;
                                            note = "Pickup in the back.";
                                            pickedUpAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupWindowDuration = "P1W3D";
                                            placedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            prepTimeDuration = "P1W3D";
                                            readyAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            recipient = new OrderFulfillmentsPickupDetailsRecipient() {{
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
                                                }};
                                                customerId = "12345";
                                                displayName = "Elon Musk";
                                                email = new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }};
                                                phoneNumber = new PhoneNumber("111-111-1111") {{
                                                    areaCode = "323";
                                                    countryCode = "1";
                                                    extension = "105";
                                                    id = "12345";
                                                    number = "111-111-1111";
                                                    type = PhoneNumberTypeEnum.PRIMARY;
                                                }};
                                            }};
                                            rejectedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            scheduleType = OrderFulfillmentsPickupDetailsScheduleTypeEnum.SCHEDULED;
                                        }};
                                        shipmentDetails = new java.util.HashMap<String, Object>() {{
                                            put("hic", "recusandae");
                                            put("omnis", "facilis");
                                        }};
                                        status = OrderFulfillmentsFulfillmentStatusEnum.CANCELLED;
                                        type = OrderFulfillmentsTypeEnum.SHIPMENT;
                                    }}),
                                }};
                                idempotencyKey = "random_string";
                                lineItems = new org.openapis.openapi.models.shared.OrderLineItemsInput[]{{
                                    add(new OrderLineItemsInput() {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput[]{{
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput[]{{
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemsModifiers[]{{
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                        }};
                                        name = "New York Strip Steak";
                                        quantity = 1;
                                        totalAmount = 27500L;
                                        totalDiscount = 3000L;
                                        totalTax = 2000L;
                                        unitPrice = 27500.5;
                                    }}),
                                }};
                                note = "error";
                                orderDate = LocalDate.parse("2022-08-12");
                                orderNumber = "1F";
                                orderTypeId = "12345";
                                paymentStatus = OrderPosPaymentStatusEnum.OPEN;
                                payments = new org.openapis.openapi.models.shared.OrderPaymentsInput[]{{
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                }};
                                referenceId = "my-order-001";
                                refunded = false;
                                refunds = new org.openapis.openapi.models.shared.OrderRefundsInput[]{{
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.REJECTED;
                                    }}),
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.PENDING;
                                    }}),
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.FAILED;
                                    }}),
                                }};
                                seat = "23F";
                                serviceCharges = new org.openapis.openapi.models.shared.ServiceChargeInput[]{{
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
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
                                        type = ServiceChargeTypeEnum.CUSTOM;
                                    }}),
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.CUSTOM;
                                    }}),
                                }};
                                status = OrderStatusEnum.OPEN;
                                table = "1F";
                                taxes = new org.openapis.openapi.models.shared.OrderTaxes[]{{
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.LINE_ITEM;
                                        type = OrderTaxesTypeEnum.INCLUSIVE;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.LINE_ITEM;
                                        type = OrderTaxesTypeEnum.INCLUSIVE;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.ORDER;
                                        type = OrderTaxesTypeEnum.ADDITIVE;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.ORDER;
                                        type = OrderTaxesTypeEnum.UNKNOWN;
                                    }}),
                                }};
                                tenders = new org.openapis.openapi.models.shared.OrderTendersInput[]{{
                                    add(new OrderTendersInput() {{
                                        amount = 27500;
                                        buyerTenderedCashAmount = 27500L;
                                        card = new PaymentCardInput() {{
                                            billingAddress = new Address() {{
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
                                            }};
                                            bin = "41111";
                                            cardBrand = PaymentCardCardBrandEnum.DISCOVER;
                                            cardType = PaymentCardCardTypeEnum.CREDIT;
                                            cardholderName = "John Doe";
                                            customerId = "12345";
                                            enabled = true;
                                            expMonth = 1L;
                                            expYear = 2022L;
                                            fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                            last4 = "The last 4 digits of the card number.";
                                            merchantId = "12345";
                                            prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                            referenceId = "card-001";
                                            version = "230320320320";
                                        }};
                                        cardEntryMethod = OrderTendersCardEntryMethodEnum.SWIPED;
                                        cardStatus = OrderTendersCardStatusEnum.AUTHORIZED;
                                        changeBackCashAmount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        note = "An optional note associated with the tender at the time of payment.";
                                        percentage = 10;
                                        totalAmount = 27.5L;
                                        totalDiscount = 3L;
                                        totalProcessingFee = 186193L;
                                        totalRefund = 218749L;
                                        totalServiceCharge = 944373L;
                                        totalTax = 2.75L;
                                        totalTip = 7L;
                                        type = OrderTendersTypeEnum.CASH;
                                    }}),
                                }};
                                title = "Ms.";
                                totalAmount = 275L;
                                totalDiscount = 300L;
                                totalRefund = 739551L;
                                totalServiceCharge = 452109L;
                                totalTax = 275L;
                                totalTip = 700L;
                                version = "230320320320";
                                voided = false;
                            }};, "dignissimos", "reiciendis", "amet") {{
                fields = "dolorum";
                raw = false;
                xApideckServiceId = "numquam";
            }};            

            OrdersPayResponse res = sdk.orders.ordersPay(req, new OrdersPaySecurity("veritatis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ordersUpdate

Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersUpdateRequest;
import org.openapis.openapi.models.operations.OrdersUpdateResponse;
import org.openapis.openapi.models.operations.OrdersUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.OrderCustomers;
import org.openapis.openapi.models.shared.OrderDiscountsInput;
import org.openapis.openapi.models.shared.OrderDiscountsScopeEnum;
import org.openapis.openapi.models.shared.OrderDiscountsTypeEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsFulfillmentStatusEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsInput;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsInput;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsRecipient;
import org.openapis.openapi.models.shared.OrderFulfillmentsPickupDetailsScheduleTypeEnum;
import org.openapis.openapi.models.shared.OrderFulfillmentsTypeEnum;
import org.openapis.openapi.models.shared.OrderInput;
import org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput;
import org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput;
import org.openapis.openapi.models.shared.OrderLineItemsInput;
import org.openapis.openapi.models.shared.OrderLineItemsModifiers;
import org.openapis.openapi.models.shared.OrderPaymentsInput;
import org.openapis.openapi.models.shared.OrderPosPaymentStatusEnum;
import org.openapis.openapi.models.shared.OrderRefundsInput;
import org.openapis.openapi.models.shared.OrderRefundsStatusEnum;
import org.openapis.openapi.models.shared.OrderStatusEnum;
import org.openapis.openapi.models.shared.OrderTaxes;
import org.openapis.openapi.models.shared.OrderTaxesScopeEnum;
import org.openapis.openapi.models.shared.OrderTaxesTypeEnum;
import org.openapis.openapi.models.shared.OrderTendersCardEntryMethodEnum;
import org.openapis.openapi.models.shared.OrderTendersCardStatusEnum;
import org.openapis.openapi.models.shared.OrderTendersInput;
import org.openapis.openapi.models.shared.OrderTendersTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardCardBrandEnum;
import org.openapis.openapi.models.shared.PaymentCardCardTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardInput;
import org.openapis.openapi.models.shared.PaymentCardPrepaidTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChargeInput;
import org.openapis.openapi.models.shared.ServiceChargeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersUpdateRequest req = new OrdersUpdateRequest(                new OrderInput("12345", "12345") {{
                                closedDate = LocalDate.parse("2022-08-13");
                                currency = CurrencyEnum.USD;
                                customerId = "12345";
                                customers = new org.openapis.openapi.models.shared.OrderCustomers[]{{
                                    add(new OrderCustomers() {{
                                        emails = new org.openapis.openapi.models.shared.Email[]{{
                                            add(new Email("elon@musk.com") {{
                                                email = "elon@musk.com";
                                                id = "123";
                                                type = EmailTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                        firstName = "Elon";
                                        id = "12345";
                                        lastName = "Musk";
                                        middleName = "D.";
                                        phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                            add(new PhoneNumber("111-111-1111") {{
                                                areaCode = "323";
                                                countryCode = "1";
                                                extension = "105";
                                                id = "12345";
                                                number = "111-111-1111";
                                                type = PhoneNumberTypeEnum.PRIMARY;
                                            }}),
                                        }};
                                    }}),
                                }};
                                discounts = new org.openapis.openapi.models.shared.OrderDiscountsInput[]{{
                                    add(new OrderDiscountsInput(OrderDiscountsTypeEnum.PERCENTAGE) {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        scope = OrderDiscountsScopeEnum.ORDER;
                                        type = OrderDiscountsTypeEnum.PERCENTAGE;
                                    }}),
                                    add(new OrderDiscountsInput(OrderDiscountsTypeEnum.PERCENTAGE) {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        scope = OrderDiscountsScopeEnum.ORDER;
                                        type = OrderDiscountsTypeEnum.PERCENTAGE;
                                    }}),
                                }};
                                employeeId = "12345";
                                fulfillments = new org.openapis.openapi.models.shared.OrderFulfillmentsInput[]{{
                                    add(new OrderFulfillmentsInput() {{
                                        id = "12345";
                                        pickupDetails = new OrderFulfillmentsPickupDetailsInput() {{
                                            autoCompleteDuration = "P1W3D";
                                            cancelReason = "Not hungry";
                                            canceledAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            curbsidePickupDetails = new OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                                curbsideDetails = "accusamus";
                                            }};
                                            expiredAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            expiresAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            isCurbsidePickup = false;
                                            note = "Pickup in the back.";
                                            pickedUpAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupWindowDuration = "P1W3D";
                                            placedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            prepTimeDuration = "P1W3D";
                                            readyAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            recipient = new OrderFulfillmentsPickupDetailsRecipient() {{
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
                                                }};
                                                customerId = "12345";
                                                displayName = "Elon Musk";
                                                email = new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }};
                                                phoneNumber = new PhoneNumber("111-111-1111") {{
                                                    areaCode = "323";
                                                    countryCode = "1";
                                                    extension = "105";
                                                    id = "12345";
                                                    number = "111-111-1111";
                                                    type = PhoneNumberTypeEnum.PRIMARY;
                                                }};
                                            }};
                                            rejectedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            scheduleType = OrderFulfillmentsPickupDetailsScheduleTypeEnum.SCHEDULED;
                                        }};
                                        shipmentDetails = new java.util.HashMap<String, Object>() {{
                                            put("voluptatibus", "voluptas");
                                            put("natus", "eos");
                                            put("atque", "sit");
                                        }};
                                        status = OrderFulfillmentsFulfillmentStatusEnum.FAILED;
                                        type = OrderFulfillmentsTypeEnum.SHIPMENT;
                                    }}),
                                    add(new OrderFulfillmentsInput() {{
                                        id = "12345";
                                        pickupDetails = new OrderFulfillmentsPickupDetailsInput() {{
                                            autoCompleteDuration = "P1W3D";
                                            cancelReason = "Not hungry";
                                            canceledAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            curbsidePickupDetails = new OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                                curbsideDetails = "ab";
                                            }};
                                            expiredAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            expiresAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            isCurbsidePickup = false;
                                            note = "Pickup in the back.";
                                            pickedUpAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            pickupWindowDuration = "P1W3D";
                                            placedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            prepTimeDuration = "P1W3D";
                                            readyAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            recipient = new OrderFulfillmentsPickupDetailsRecipient() {{
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
                                                }};
                                                customerId = "12345";
                                                displayName = "Elon Musk";
                                                email = new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }};
                                                phoneNumber = new PhoneNumber("111-111-1111") {{
                                                    areaCode = "323";
                                                    countryCode = "1";
                                                    extension = "105";
                                                    id = "12345";
                                                    number = "111-111-1111";
                                                    type = PhoneNumberTypeEnum.PRIMARY;
                                                }};
                                            }};
                                            rejectedAt = OffsetDateTime.parse("2016-09-04T23:59:33.123Z");
                                            scheduleType = OrderFulfillmentsPickupDetailsScheduleTypeEnum.SCHEDULED;
                                        }};
                                        shipmentDetails = new java.util.HashMap<String, Object>() {{
                                            put("dolorum", "iusto");
                                            put("voluptate", "dolorum");
                                            put("deleniti", "omnis");
                                        }};
                                        status = OrderFulfillmentsFulfillmentStatusEnum.OTHER;
                                        type = OrderFulfillmentsTypeEnum.SHIPMENT;
                                    }}),
                                }};
                                idempotencyKey = "random_string";
                                lineItems = new org.openapis.openapi.models.shared.OrderLineItemsInput[]{{
                                    add(new OrderLineItemsInput() {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput[]{{
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput[]{{
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemsModifiers[]{{
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                        }};
                                        name = "New York Strip Steak";
                                        quantity = 1;
                                        totalAmount = 27500L;
                                        totalDiscount = 3000L;
                                        totalTax = 2000L;
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new OrderLineItemsInput() {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput[]{{
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput[]{{
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemsModifiers[]{{
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                        }};
                                        name = "New York Strip Steak";
                                        quantity = 1;
                                        totalAmount = 27500L;
                                        totalDiscount = 3000L;
                                        totalTax = 2000L;
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new OrderLineItemsInput() {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemsAppliedDiscountsInput[]{{
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                            add(new OrderLineItemsAppliedDiscountsInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                discountId = "12345";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemsAppliedTaxesInput[]{{
                                            add(new OrderLineItemsAppliedTaxesInput() {{
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                taxId = "sales-tax";
                                            }}),
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemsModifiers[]{{
                                            add(new OrderLineItemsModifiers() {{
                                                alternateName = "Modifier New";
                                                amount = 27500L;
                                                currency = CurrencyEnum.USD;
                                                id = "12345";
                                                modifierGroupId = "123";
                                                name = "New York Strip Steak - no cheese";
                                            }}),
                                        }};
                                        name = "New York Strip Steak";
                                        quantity = 1;
                                        totalAmount = 27500L;
                                        totalDiscount = 3000L;
                                        totalTax = 2000L;
                                        unitPrice = 27500.5;
                                    }}),
                                }};
                                note = "amet";
                                orderDate = LocalDate.parse("2022-08-12");
                                orderNumber = "1F";
                                orderTypeId = "12345";
                                paymentStatus = OrderPosPaymentStatusEnum.OPEN;
                                payments = new org.openapis.openapi.models.shared.OrderPaymentsInput[]{{
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                    add(new OrderPaymentsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                    }}),
                                }};
                                referenceId = "my-order-001";
                                refunded = false;
                                refunds = new org.openapis.openapi.models.shared.OrderRefundsInput[]{{
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.APPROVED;
                                    }}),
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.FAILED;
                                    }}),
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.APPROVED;
                                    }}),
                                    add(new OrderRefundsInput() {{
                                        amount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        reason = "The reason for the refund being issued.";
                                        status = OrderRefundsStatusEnum.REJECTED;
                                    }}),
                                }};
                                seat = "23F";
                                serviceCharges = new org.openapis.openapi.models.shared.ServiceChargeInput[]{{
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
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
                                        type = ServiceChargeTypeEnum.CUSTOM;
                                    }}),
                                }};
                                status = OrderStatusEnum.OPEN;
                                table = "1F";
                                taxes = new org.openapis.openapi.models.shared.OrderTaxes[]{{
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.ORDER;
                                        type = OrderTaxesTypeEnum.INCLUSIVE;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.ORDER;
                                        type = OrderTaxesTypeEnum.UNKNOWN;
                                    }}),
                                    add(new OrderTaxes() {{
                                        amount = 27500L;
                                        autoApplied = true;
                                        currency = CurrencyEnum.USD;
                                        id = "state-sales-tax";
                                        name = "State Sales Tax";
                                        percentage = 15;
                                        scope = OrderTaxesScopeEnum.ORDER;
                                        type = OrderTaxesTypeEnum.INCLUSIVE;
                                    }}),
                                }};
                                tenders = new org.openapis.openapi.models.shared.OrderTendersInput[]{{
                                    add(new OrderTendersInput() {{
                                        amount = 27500;
                                        buyerTenderedCashAmount = 27500L;
                                        card = new PaymentCardInput() {{
                                            billingAddress = new Address() {{
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
                                            }};
                                            bin = "41111";
                                            cardBrand = PaymentCardCardBrandEnum.AMEX;
                                            cardType = PaymentCardCardTypeEnum.CREDIT;
                                            cardholderName = "John Doe";
                                            customerId = "12345";
                                            enabled = true;
                                            expMonth = 1L;
                                            expYear = 2022L;
                                            fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                            last4 = "The last 4 digits of the card number.";
                                            merchantId = "12345";
                                            prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                            referenceId = "card-001";
                                            version = "230320320320";
                                        }};
                                        cardEntryMethod = OrderTendersCardEntryMethodEnum.SWIPED;
                                        cardStatus = OrderTendersCardStatusEnum.AUTHORIZED;
                                        changeBackCashAmount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        note = "An optional note associated with the tender at the time of payment.";
                                        percentage = 10;
                                        totalAmount = 27.5L;
                                        totalDiscount = 3L;
                                        totalProcessingFee = 679880L;
                                        totalRefund = 952792L;
                                        totalServiceCharge = 456130L;
                                        totalTax = 2.75L;
                                        totalTip = 7L;
                                        type = OrderTendersTypeEnum.CASH;
                                    }}),
                                    add(new OrderTendersInput() {{
                                        amount = 27500;
                                        buyerTenderedCashAmount = 27500L;
                                        card = new PaymentCardInput() {{
                                            billingAddress = new Address() {{
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
                                            }};
                                            bin = "41111";
                                            cardBrand = PaymentCardCardBrandEnum.INTERAC;
                                            cardType = PaymentCardCardTypeEnum.CREDIT;
                                            cardholderName = "John Doe";
                                            customerId = "12345";
                                            enabled = true;
                                            expMonth = 1L;
                                            expYear = 2022L;
                                            fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                            last4 = "The last 4 digits of the card number.";
                                            merchantId = "12345";
                                            prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                            referenceId = "card-001";
                                            version = "230320320320";
                                        }};
                                        cardEntryMethod = OrderTendersCardEntryMethodEnum.SWIPED;
                                        cardStatus = OrderTendersCardStatusEnum.AUTHORIZED;
                                        changeBackCashAmount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        note = "An optional note associated with the tender at the time of payment.";
                                        percentage = 10;
                                        totalAmount = 27.5L;
                                        totalDiscount = 3L;
                                        totalProcessingFee = 483409L;
                                        totalRefund = 215507L;
                                        totalServiceCharge = 788740L;
                                        totalTax = 2.75L;
                                        totalTip = 7L;
                                        type = OrderTendersTypeEnum.CASH;
                                    }}),
                                    add(new OrderTendersInput() {{
                                        amount = 27500;
                                        buyerTenderedCashAmount = 27500L;
                                        card = new PaymentCardInput() {{
                                            billingAddress = new Address() {{
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
                                            }};
                                            bin = "41111";
                                            cardBrand = PaymentCardCardBrandEnum.OTHER;
                                            cardType = PaymentCardCardTypeEnum.CREDIT;
                                            cardholderName = "John Doe";
                                            customerId = "12345";
                                            enabled = true;
                                            expMonth = 1L;
                                            expYear = 2022L;
                                            fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                            last4 = "The last 4 digits of the card number.";
                                            merchantId = "12345";
                                            prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                            referenceId = "card-001";
                                            version = "230320320320";
                                        }};
                                        cardEntryMethod = OrderTendersCardEntryMethodEnum.SWIPED;
                                        cardStatus = OrderTendersCardStatusEnum.AUTHORIZED;
                                        changeBackCashAmount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        note = "An optional note associated with the tender at the time of payment.";
                                        percentage = 10;
                                        totalAmount = 27.5L;
                                        totalDiscount = 3L;
                                        totalProcessingFee = 229442L;
                                        totalRefund = 730856L;
                                        totalServiceCharge = 880298L;
                                        totalTax = 2.75L;
                                        totalTip = 7L;
                                        type = OrderTendersTypeEnum.CASH;
                                    }}),
                                    add(new OrderTendersInput() {{
                                        amount = 27500;
                                        buyerTenderedCashAmount = 27500L;
                                        card = new PaymentCardInput() {{
                                            billingAddress = new Address() {{
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
                                            }};
                                            bin = "41111";
                                            cardBrand = PaymentCardCardBrandEnum.DISCOVER;
                                            cardType = PaymentCardCardTypeEnum.CREDIT;
                                            cardholderName = "John Doe";
                                            customerId = "12345";
                                            enabled = true;
                                            expMonth = 1L;
                                            expYear = 2022L;
                                            fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                            last4 = "The last 4 digits of the card number.";
                                            merchantId = "12345";
                                            prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                            referenceId = "card-001";
                                            version = "230320320320";
                                        }};
                                        cardEntryMethod = OrderTendersCardEntryMethodEnum.SWIPED;
                                        cardStatus = OrderTendersCardStatusEnum.AUTHORIZED;
                                        changeBackCashAmount = 27500L;
                                        currency = CurrencyEnum.USD;
                                        name = "10% off";
                                        note = "An optional note associated with the tender at the time of payment.";
                                        percentage = 10;
                                        totalAmount = 27.5L;
                                        totalDiscount = 3L;
                                        totalProcessingFee = 313692L;
                                        totalRefund = 213312L;
                                        totalServiceCharge = 957451L;
                                        totalTax = 2.75L;
                                        totalTip = 7L;
                                        type = OrderTendersTypeEnum.CASH;
                                    }}),
                                }};
                                title = "Ms.";
                                totalAmount = 275L;
                                totalDiscount = 300L;
                                totalRefund = 471752L;
                                totalServiceCharge = 25662L;
                                totalTax = 275L;
                                totalTip = 700L;
                                version = "230320320320";
                                voided = false;
                            }};, "expedita", "neque", "sed") {{
                raw = false;
                xApideckServiceId = "vel";
            }};            

            OrdersUpdateResponse res = sdk.orders.ordersUpdate(req, new OrdersUpdateSecurity("libero") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
