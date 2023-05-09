# Orders

### Available Operations

* [OrdersAdd](#ordersadd) - Create Order
* [OrdersAll](#ordersall) - List Orders
* [OrdersDelete](#ordersdelete) - Delete Order
* [OrdersOne](#ordersone) - Get Order
* [OrdersPay](#orderspay) - Pay Order
* [OrdersUpdate](#ordersupdate) - Update Order

## OrdersAdd

Create Order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrdersAdd(ctx, operations.OrdersAddRequest{
        OrderInput: shared.OrderInput{
            ClosedDate: types.MustDateFromString("2022-08-13"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomerID: sdk.String("12345"),
            Customers: []shared.OrderCustomers{
                shared.OrderCustomers{
                    Emails: []shared.Email{
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                    },
                    FirstName: sdk.String("Elon"),
                    ID: sdk.String("12345"),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    PhoneNumbers: []shared.PhoneNumber{
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                    },
                },
                shared.OrderCustomers{
                    Emails: []shared.Email{
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                    },
                    FirstName: sdk.String("Elon"),
                    ID: sdk.String("12345"),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    PhoneNumbers: []shared.PhoneNumber{
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                    },
                },
                shared.OrderCustomers{
                    Emails: []shared.Email{
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                    },
                    FirstName: sdk.String("Elon"),
                    ID: sdk.String("12345"),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    PhoneNumbers: []shared.PhoneNumber{
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                    },
                },
            },
            Discounts: []shared.OrderDiscountsInput{
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
            },
            EmployeeID: sdk.String("12345"),
            Fulfillments: []shared.OrderFulfillmentsInput{
                shared.OrderFulfillmentsInput{
                    ID: sdk.String("12345"),
                    PickupDetails: &shared.OrderFulfillmentsPickupDetailsInput{
                        AutoCompleteDuration: sdk.String("P1W3D"),
                        CancelReason: sdk.String("Not hungry"),
                        CanceledAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                            CurbsideDetails: sdk.String("sint"),
                        },
                        ExpiredAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ExpiresAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("Pickup in the back."),
                        PickedUpAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupWindowDuration: sdk.String("P1W3D"),
                        PlacedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PrepTimeDuration: sdk.String("P1W3D"),
                        ReadyAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        Recipient: &shared.OrderFulfillmentsPickupDetailsRecipient{
                            Address: &shared.Address{
                                City: sdk.String("San Francisco"),
                                ContactName: sdk.String("Elon Musk"),
                                Country: sdk.String("US"),
                                County: sdk.String("Santa Clara"),
                                Email: sdk.String("elon@musk.com"),
                                Fax: sdk.String("122-111-1111"),
                                ID: sdk.String("123"),
                                Latitude: sdk.String("40.759211"),
                                Line1: sdk.String("Main street"),
                                Line2: sdk.String("apt #"),
                                Line3: sdk.String("Suite #"),
                                Line4: sdk.String("delivery instructions"),
                                Longitude: sdk.String("-73.984638"),
                                Name: sdk.String("HQ US"),
                                PhoneNumber: sdk.String("111-111-1111"),
                                PostalCode: sdk.String("94104"),
                                RowVersion: sdk.String("1-12345"),
                                Salutation: sdk.String("Mr"),
                                State: sdk.String("CA"),
                                StreetNumber: sdk.String("25"),
                                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                                Website: sdk.String("https://elonmusk.com"),
                            },
                            CustomerID: sdk.String("12345"),
                            DisplayName: sdk.String("Elon Musk"),
                            Email: &shared.Email{
                                Email: "elon@musk.com",
                                ID: sdk.String("123"),
                                Type: shared.EmailTypeEnumPrimary.ToPointer(),
                            },
                            PhoneNumber: &shared.PhoneNumber{
                                AreaCode: sdk.String("323"),
                                CountryCode: sdk.String("1"),
                                Extension: sdk.String("105"),
                                ID: sdk.String("12345"),
                                Number: "111-111-1111",
                                Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                            },
                        },
                        RejectedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ScheduleType: shared.OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled.ToPointer(),
                    },
                    ShipmentDetails: map[string]interface{}{
                        "possimus": "quia",
                        "eveniet": "asperiores",
                        "facere": "veritatis",
                        "consequuntur": "quasi",
                    },
                    Status: shared.OrderFulfillmentsFulfillmentStatusEnumCancelled.ToPointer(),
                    Type: shared.OrderFulfillmentsTypeEnumShipment.ToPointer(),
                },
                shared.OrderFulfillmentsInput{
                    ID: sdk.String("12345"),
                    PickupDetails: &shared.OrderFulfillmentsPickupDetailsInput{
                        AutoCompleteDuration: sdk.String("P1W3D"),
                        CancelReason: sdk.String("Not hungry"),
                        CanceledAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                            CurbsideDetails: sdk.String("culpa"),
                        },
                        ExpiredAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ExpiresAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("Pickup in the back."),
                        PickedUpAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupWindowDuration: sdk.String("P1W3D"),
                        PlacedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PrepTimeDuration: sdk.String("P1W3D"),
                        ReadyAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        Recipient: &shared.OrderFulfillmentsPickupDetailsRecipient{
                            Address: &shared.Address{
                                City: sdk.String("San Francisco"),
                                ContactName: sdk.String("Elon Musk"),
                                Country: sdk.String("US"),
                                County: sdk.String("Santa Clara"),
                                Email: sdk.String("elon@musk.com"),
                                Fax: sdk.String("122-111-1111"),
                                ID: sdk.String("123"),
                                Latitude: sdk.String("40.759211"),
                                Line1: sdk.String("Main street"),
                                Line2: sdk.String("apt #"),
                                Line3: sdk.String("Suite #"),
                                Line4: sdk.String("delivery instructions"),
                                Longitude: sdk.String("-73.984638"),
                                Name: sdk.String("HQ US"),
                                PhoneNumber: sdk.String("111-111-1111"),
                                PostalCode: sdk.String("94104"),
                                RowVersion: sdk.String("1-12345"),
                                Salutation: sdk.String("Mr"),
                                State: sdk.String("CA"),
                                StreetNumber: sdk.String("25"),
                                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                                Website: sdk.String("https://elonmusk.com"),
                            },
                            CustomerID: sdk.String("12345"),
                            DisplayName: sdk.String("Elon Musk"),
                            Email: &shared.Email{
                                Email: "elon@musk.com",
                                ID: sdk.String("123"),
                                Type: shared.EmailTypeEnumPrimary.ToPointer(),
                            },
                            PhoneNumber: &shared.PhoneNumber{
                                AreaCode: sdk.String("323"),
                                CountryCode: sdk.String("1"),
                                Extension: sdk.String("105"),
                                ID: sdk.String("12345"),
                                Number: "111-111-1111",
                                Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                            },
                        },
                        RejectedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ScheduleType: shared.OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled.ToPointer(),
                    },
                    ShipmentDetails: map[string]interface{}{
                        "tenetur": "quae",
                        "earum": "vel",
                    },
                    Status: shared.OrderFulfillmentsFulfillmentStatusEnumCompleted.ToPointer(),
                    Type: shared.OrderFulfillmentsTypeEnumShipment.ToPointer(),
                },
                shared.OrderFulfillmentsInput{
                    ID: sdk.String("12345"),
                    PickupDetails: &shared.OrderFulfillmentsPickupDetailsInput{
                        AutoCompleteDuration: sdk.String("P1W3D"),
                        CancelReason: sdk.String("Not hungry"),
                        CanceledAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                            CurbsideDetails: sdk.String("eius"),
                        },
                        ExpiredAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ExpiresAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("Pickup in the back."),
                        PickedUpAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupWindowDuration: sdk.String("P1W3D"),
                        PlacedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PrepTimeDuration: sdk.String("P1W3D"),
                        ReadyAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        Recipient: &shared.OrderFulfillmentsPickupDetailsRecipient{
                            Address: &shared.Address{
                                City: sdk.String("San Francisco"),
                                ContactName: sdk.String("Elon Musk"),
                                Country: sdk.String("US"),
                                County: sdk.String("Santa Clara"),
                                Email: sdk.String("elon@musk.com"),
                                Fax: sdk.String("122-111-1111"),
                                ID: sdk.String("123"),
                                Latitude: sdk.String("40.759211"),
                                Line1: sdk.String("Main street"),
                                Line2: sdk.String("apt #"),
                                Line3: sdk.String("Suite #"),
                                Line4: sdk.String("delivery instructions"),
                                Longitude: sdk.String("-73.984638"),
                                Name: sdk.String("HQ US"),
                                PhoneNumber: sdk.String("111-111-1111"),
                                PostalCode: sdk.String("94104"),
                                RowVersion: sdk.String("1-12345"),
                                Salutation: sdk.String("Mr"),
                                State: sdk.String("CA"),
                                StreetNumber: sdk.String("25"),
                                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                                Website: sdk.String("https://elonmusk.com"),
                            },
                            CustomerID: sdk.String("12345"),
                            DisplayName: sdk.String("Elon Musk"),
                            Email: &shared.Email{
                                Email: "elon@musk.com",
                                ID: sdk.String("123"),
                                Type: shared.EmailTypeEnumPrimary.ToPointer(),
                            },
                            PhoneNumber: &shared.PhoneNumber{
                                AreaCode: sdk.String("323"),
                                CountryCode: sdk.String("1"),
                                Extension: sdk.String("105"),
                                ID: sdk.String("12345"),
                                Number: "111-111-1111",
                                Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                            },
                        },
                        RejectedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ScheduleType: shared.OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled.ToPointer(),
                    },
                    ShipmentDetails: map[string]interface{}{
                        "illum": "soluta",
                        "accusantium": "aliquam",
                        "sapiente": "dicta",
                    },
                    Status: shared.OrderFulfillmentsFulfillmentStatusEnumPrepared.ToPointer(),
                    Type: shared.OrderFulfillmentsTypeEnumShipment.ToPointer(),
                },
            },
            IdempotencyKey: sdk.String("random_string"),
            LineItems: []shared.OrderLineItemsInput{
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
            },
            LocationID: "12345",
            MerchantID: "12345",
            Note: sdk.String("ex"),
            OrderDate: types.MustDateFromString("2022-08-12"),
            OrderNumber: sdk.String("1F"),
            OrderTypeID: sdk.String("12345"),
            PaymentStatus: shared.OrderPosPaymentStatusEnumOpen.ToPointer(),
            Payments: []shared.OrderPaymentsInput{
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
            },
            ReferenceID: sdk.String("my-order-001"),
            Refunded: sdk.Bool(false),
            Refunds: []shared.OrderRefundsInput{
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumRejected.ToPointer(),
                },
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumPending.ToPointer(),
                },
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumRejected.ToPointer(),
                },
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumFailed.ToPointer(),
                },
            },
            Seat: sdk.String("23F"),
            ServiceCharges: []shared.ServiceChargeInput{
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
            },
            Status: shared.OrderStatusEnumOpen.ToPointer(),
            Table: sdk.String("1F"),
            Taxes: []shared.OrderTaxes{
                shared.OrderTaxes{
                    Amount: sdk.Int64(27500),
                    AutoApplied: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("state-sales-tax"),
                    Name: sdk.String("State Sales Tax"),
                    Percentage: sdk.Float64(15),
                    Scope: shared.OrderTaxesScopeEnumOrder.ToPointer(),
                    Type: shared.OrderTaxesTypeEnumUnknown.ToPointer(),
                },
            },
            Tenders: []shared.OrderTendersInput{
                shared.OrderTendersInput{
                    Amount: sdk.Float64(27500),
                    BuyerTenderedCashAmount: sdk.Int64(27500),
                    Card: &shared.PaymentCardInput{
                        BillingAddress: &shared.Address{
                            City: sdk.String("San Francisco"),
                            ContactName: sdk.String("Elon Musk"),
                            Country: sdk.String("US"),
                            County: sdk.String("Santa Clara"),
                            Email: sdk.String("elon@musk.com"),
                            Fax: sdk.String("122-111-1111"),
                            ID: sdk.String("123"),
                            Latitude: sdk.String("40.759211"),
                            Line1: sdk.String("Main street"),
                            Line2: sdk.String("apt #"),
                            Line3: sdk.String("Suite #"),
                            Line4: sdk.String("delivery instructions"),
                            Longitude: sdk.String("-73.984638"),
                            Name: sdk.String("HQ US"),
                            PhoneNumber: sdk.String("111-111-1111"),
                            PostalCode: sdk.String("94104"),
                            RowVersion: sdk.String("1-12345"),
                            Salutation: sdk.String("Mr"),
                            State: sdk.String("CA"),
                            StreetNumber: sdk.String("25"),
                            String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                            Type: shared.AddressTypeEnumPrimary.ToPointer(),
                            Website: sdk.String("https://elonmusk.com"),
                        },
                        Bin: sdk.String("41111"),
                        CardBrand: shared.PaymentCardCardBrandEnumMastercard.ToPointer(),
                        CardType: shared.PaymentCardCardTypeEnumCredit.ToPointer(),
                        CardholderName: sdk.String("John Doe"),
                        CustomerID: sdk.String("12345"),
                        Enabled: sdk.Bool(true),
                        ExpMonth: sdk.Int64(1),
                        ExpYear: sdk.Int64(2022),
                        Fingerprint: sdk.String(" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application."),
                        Last4: sdk.String("The last 4 digits of the card number."),
                        MerchantID: sdk.String("12345"),
                        PrepaidType: shared.PaymentCardPrepaidTypeEnumPrepaid.ToPointer(),
                        ReferenceID: sdk.String("card-001"),
                        Version: sdk.String("230320320320"),
                    },
                    CardEntryMethod: shared.OrderTendersCardEntryMethodEnumSwiped.ToPointer(),
                    CardStatus: shared.OrderTendersCardStatusEnumAuthorized.ToPointer(),
                    ChangeBackCashAmount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Note: sdk.String("An optional note associated with the tender at the time of payment."),
                    Percentage: sdk.Float64(10),
                    TotalAmount: sdk.Int64(27.5),
                    TotalDiscount: sdk.Int64(3),
                    TotalProcessingFee: sdk.Int64(232744),
                    TotalRefund: sdk.Int64(237173),
                    TotalServiceCharge: sdk.Int64(614465),
                    TotalTax: sdk.Int64(2.75),
                    TotalTip: sdk.Int64(7),
                    Type: shared.OrderTendersTypeEnumCash.ToPointer(),
                },
                shared.OrderTendersInput{
                    Amount: sdk.Float64(27500),
                    BuyerTenderedCashAmount: sdk.Int64(27500),
                    Card: &shared.PaymentCardInput{
                        BillingAddress: &shared.Address{
                            City: sdk.String("San Francisco"),
                            ContactName: sdk.String("Elon Musk"),
                            Country: sdk.String("US"),
                            County: sdk.String("Santa Clara"),
                            Email: sdk.String("elon@musk.com"),
                            Fax: sdk.String("122-111-1111"),
                            ID: sdk.String("123"),
                            Latitude: sdk.String("40.759211"),
                            Line1: sdk.String("Main street"),
                            Line2: sdk.String("apt #"),
                            Line3: sdk.String("Suite #"),
                            Line4: sdk.String("delivery instructions"),
                            Longitude: sdk.String("-73.984638"),
                            Name: sdk.String("HQ US"),
                            PhoneNumber: sdk.String("111-111-1111"),
                            PostalCode: sdk.String("94104"),
                            RowVersion: sdk.String("1-12345"),
                            Salutation: sdk.String("Mr"),
                            State: sdk.String("CA"),
                            StreetNumber: sdk.String("25"),
                            String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                            Type: shared.AddressTypeEnumPrimary.ToPointer(),
                            Website: sdk.String("https://elonmusk.com"),
                        },
                        Bin: sdk.String("41111"),
                        CardBrand: shared.PaymentCardCardBrandEnumFelica.ToPointer(),
                        CardType: shared.PaymentCardCardTypeEnumCredit.ToPointer(),
                        CardholderName: sdk.String("John Doe"),
                        CustomerID: sdk.String("12345"),
                        Enabled: sdk.Bool(true),
                        ExpMonth: sdk.Int64(1),
                        ExpYear: sdk.Int64(2022),
                        Fingerprint: sdk.String(" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application."),
                        Last4: sdk.String("The last 4 digits of the card number."),
                        MerchantID: sdk.String("12345"),
                        PrepaidType: shared.PaymentCardPrepaidTypeEnumPrepaid.ToPointer(),
                        ReferenceID: sdk.String("card-001"),
                        Version: sdk.String("230320320320"),
                    },
                    CardEntryMethod: shared.OrderTendersCardEntryMethodEnumSwiped.ToPointer(),
                    CardStatus: shared.OrderTendersCardStatusEnumAuthorized.ToPointer(),
                    ChangeBackCashAmount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Note: sdk.String("An optional note associated with the tender at the time of payment."),
                    Percentage: sdk.Float64(10),
                    TotalAmount: sdk.Int64(27.5),
                    TotalDiscount: sdk.Int64(3),
                    TotalProcessingFee: sdk.Int64(33074),
                    TotalRefund: sdk.Int64(522371),
                    TotalServiceCharge: sdk.Int64(15606),
                    TotalTax: sdk.Int64(2.75),
                    TotalTip: sdk.Int64(7),
                    Type: shared.OrderTendersTypeEnumCash.ToPointer(),
                },
            },
            Title: sdk.String("Ms."),
            TotalAmount: sdk.Int64(275),
            TotalDiscount: sdk.Int64(300),
            TotalRefund: sdk.Int64(428796),
            TotalServiceCharge: sdk.Int64(649832),
            TotalTax: sdk.Int64(275),
            TotalTip: sdk.Int64(700),
            Version: sdk.String("230320320320"),
            Voided: sdk.Bool(false),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "ab",
        XApideckConsumerID: "corrupti",
        XApideckServiceID: sdk.String("non"),
    }, operations.OrdersAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrderResponse != nil {
        // handle response
    }
}
```

## OrdersAll

List Orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrdersAll(ctx, operations.OrdersAllRequest{
        Cursor: sdk.String("voluptatem"),
        Fields: sdk.String("dolor"),
        Limit: sdk.Int64(580152),
        LocationID: sdk.String("numquam"),
        Raw: sdk.Bool(false),
        XApideckAppID: "impedit",
        XApideckConsumerID: "explicabo",
        XApideckServiceID: sdk.String("voluptas"),
    }, operations.OrdersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrdersResponse != nil {
        // handle response
    }
}
```

## OrdersDelete

Delete Order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrdersDelete(ctx, operations.OrdersDeleteRequest{
        ID: "071f93f5-f064-42da-87af-515cc413aa63",
        Raw: sdk.Bool(false),
        XApideckAppID: "culpa",
        XApideckConsumerID: "est",
        XApideckServiceID: sdk.String("recusandae"),
    }, operations.OrdersDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOrderResponse != nil {
        // handle response
    }
}
```

## OrdersOne

Get Order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrdersOne(ctx, operations.OrdersOneRequest{
        Fields: sdk.String("totam"),
        ID: "d67864db-b675-4fd5-a60b-375ed4f6fbee",
        Raw: sdk.Bool(false),
        XApideckAppID: "dolore",
        XApideckConsumerID: "sunt",
        XApideckServiceID: sdk.String("asperiores"),
    }, operations.OrdersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderResponse != nil {
        // handle response
    }
}
```

## OrdersPay

Pay Order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrdersPay(ctx, operations.OrdersPayRequest{
        OrderInput: shared.OrderInput{
            ClosedDate: types.MustDateFromString("2022-08-13"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomerID: sdk.String("12345"),
            Customers: []shared.OrderCustomers{
                shared.OrderCustomers{
                    Emails: []shared.Email{
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                    },
                    FirstName: sdk.String("Elon"),
                    ID: sdk.String("12345"),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    PhoneNumbers: []shared.PhoneNumber{
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                    },
                },
            },
            Discounts: []shared.OrderDiscountsInput{
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
            },
            EmployeeID: sdk.String("12345"),
            Fulfillments: []shared.OrderFulfillmentsInput{
                shared.OrderFulfillmentsInput{
                    ID: sdk.String("12345"),
                    PickupDetails: &shared.OrderFulfillmentsPickupDetailsInput{
                        AutoCompleteDuration: sdk.String("P1W3D"),
                        CancelReason: sdk.String("Not hungry"),
                        CanceledAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                            CurbsideDetails: sdk.String("a"),
                        },
                        ExpiredAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ExpiresAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("Pickup in the back."),
                        PickedUpAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupWindowDuration: sdk.String("P1W3D"),
                        PlacedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PrepTimeDuration: sdk.String("P1W3D"),
                        ReadyAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        Recipient: &shared.OrderFulfillmentsPickupDetailsRecipient{
                            Address: &shared.Address{
                                City: sdk.String("San Francisco"),
                                ContactName: sdk.String("Elon Musk"),
                                Country: sdk.String("US"),
                                County: sdk.String("Santa Clara"),
                                Email: sdk.String("elon@musk.com"),
                                Fax: sdk.String("122-111-1111"),
                                ID: sdk.String("123"),
                                Latitude: sdk.String("40.759211"),
                                Line1: sdk.String("Main street"),
                                Line2: sdk.String("apt #"),
                                Line3: sdk.String("Suite #"),
                                Line4: sdk.String("delivery instructions"),
                                Longitude: sdk.String("-73.984638"),
                                Name: sdk.String("HQ US"),
                                PhoneNumber: sdk.String("111-111-1111"),
                                PostalCode: sdk.String("94104"),
                                RowVersion: sdk.String("1-12345"),
                                Salutation: sdk.String("Mr"),
                                State: sdk.String("CA"),
                                StreetNumber: sdk.String("25"),
                                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                                Website: sdk.String("https://elonmusk.com"),
                            },
                            CustomerID: sdk.String("12345"),
                            DisplayName: sdk.String("Elon Musk"),
                            Email: &shared.Email{
                                Email: "elon@musk.com",
                                ID: sdk.String("123"),
                                Type: shared.EmailTypeEnumPrimary.ToPointer(),
                            },
                            PhoneNumber: &shared.PhoneNumber{
                                AreaCode: sdk.String("323"),
                                CountryCode: sdk.String("1"),
                                Extension: sdk.String("105"),
                                ID: sdk.String("12345"),
                                Number: "111-111-1111",
                                Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                            },
                        },
                        RejectedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ScheduleType: shared.OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled.ToPointer(),
                    },
                    ShipmentDetails: map[string]interface{}{
                        "consectetur": "corporis",
                        "harum": "laboriosam",
                        "ipsa": "voluptates",
                        "libero": "vitae",
                    },
                    Status: shared.OrderFulfillmentsFulfillmentStatusEnumOther.ToPointer(),
                    Type: shared.OrderFulfillmentsTypeEnumShipment.ToPointer(),
                },
                shared.OrderFulfillmentsInput{
                    ID: sdk.String("12345"),
                    PickupDetails: &shared.OrderFulfillmentsPickupDetailsInput{
                        AutoCompleteDuration: sdk.String("P1W3D"),
                        CancelReason: sdk.String("Not hungry"),
                        CanceledAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                            CurbsideDetails: sdk.String("similique"),
                        },
                        ExpiredAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ExpiresAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("Pickup in the back."),
                        PickedUpAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupWindowDuration: sdk.String("P1W3D"),
                        PlacedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PrepTimeDuration: sdk.String("P1W3D"),
                        ReadyAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        Recipient: &shared.OrderFulfillmentsPickupDetailsRecipient{
                            Address: &shared.Address{
                                City: sdk.String("San Francisco"),
                                ContactName: sdk.String("Elon Musk"),
                                Country: sdk.String("US"),
                                County: sdk.String("Santa Clara"),
                                Email: sdk.String("elon@musk.com"),
                                Fax: sdk.String("122-111-1111"),
                                ID: sdk.String("123"),
                                Latitude: sdk.String("40.759211"),
                                Line1: sdk.String("Main street"),
                                Line2: sdk.String("apt #"),
                                Line3: sdk.String("Suite #"),
                                Line4: sdk.String("delivery instructions"),
                                Longitude: sdk.String("-73.984638"),
                                Name: sdk.String("HQ US"),
                                PhoneNumber: sdk.String("111-111-1111"),
                                PostalCode: sdk.String("94104"),
                                RowVersion: sdk.String("1-12345"),
                                Salutation: sdk.String("Mr"),
                                State: sdk.String("CA"),
                                StreetNumber: sdk.String("25"),
                                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                                Website: sdk.String("https://elonmusk.com"),
                            },
                            CustomerID: sdk.String("12345"),
                            DisplayName: sdk.String("Elon Musk"),
                            Email: &shared.Email{
                                Email: "elon@musk.com",
                                ID: sdk.String("123"),
                                Type: shared.EmailTypeEnumPrimary.ToPointer(),
                            },
                            PhoneNumber: &shared.PhoneNumber{
                                AreaCode: sdk.String("323"),
                                CountryCode: sdk.String("1"),
                                Extension: sdk.String("105"),
                                ID: sdk.String("12345"),
                                Number: "111-111-1111",
                                Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                            },
                        },
                        RejectedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ScheduleType: shared.OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled.ToPointer(),
                    },
                    ShipmentDetails: map[string]interface{}{
                        "aspernatur": "voluptas",
                        "voluptas": "voluptas",
                    },
                    Status: shared.OrderFulfillmentsFulfillmentStatusEnumPrepared.ToPointer(),
                    Type: shared.OrderFulfillmentsTypeEnumShipment.ToPointer(),
                },
            },
            IdempotencyKey: sdk.String("random_string"),
            LineItems: []shared.OrderLineItemsInput{
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
            },
            LocationID: "12345",
            MerchantID: "12345",
            Note: sdk.String("temporibus"),
            OrderDate: types.MustDateFromString("2022-08-12"),
            OrderNumber: sdk.String("1F"),
            OrderTypeID: sdk.String("12345"),
            PaymentStatus: shared.OrderPosPaymentStatusEnumOpen.ToPointer(),
            Payments: []shared.OrderPaymentsInput{
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
            },
            ReferenceID: sdk.String("my-order-001"),
            Refunded: sdk.Bool(false),
            Refunds: []shared.OrderRefundsInput{
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumRejected.ToPointer(),
                },
            },
            Seat: sdk.String("23F"),
            ServiceCharges: []shared.ServiceChargeInput{
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumAutoGratuity.ToPointer(),
                },
            },
            Status: shared.OrderStatusEnumOpen.ToPointer(),
            Table: sdk.String("1F"),
            Taxes: []shared.OrderTaxes{
                shared.OrderTaxes{
                    Amount: sdk.Int64(27500),
                    AutoApplied: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("state-sales-tax"),
                    Name: sdk.String("State Sales Tax"),
                    Percentage: sdk.Float64(15),
                    Scope: shared.OrderTaxesScopeEnumLineItem.ToPointer(),
                    Type: shared.OrderTaxesTypeEnumInclusive.ToPointer(),
                },
                shared.OrderTaxes{
                    Amount: sdk.Int64(27500),
                    AutoApplied: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("state-sales-tax"),
                    Name: sdk.String("State Sales Tax"),
                    Percentage: sdk.Float64(15),
                    Scope: shared.OrderTaxesScopeEnumLineItem.ToPointer(),
                    Type: shared.OrderTaxesTypeEnumInclusive.ToPointer(),
                },
                shared.OrderTaxes{
                    Amount: sdk.Int64(27500),
                    AutoApplied: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("state-sales-tax"),
                    Name: sdk.String("State Sales Tax"),
                    Percentage: sdk.Float64(15),
                    Scope: shared.OrderTaxesScopeEnumOrder.ToPointer(),
                    Type: shared.OrderTaxesTypeEnumInclusive.ToPointer(),
                },
            },
            Tenders: []shared.OrderTendersInput{
                shared.OrderTendersInput{
                    Amount: sdk.Float64(27500),
                    BuyerTenderedCashAmount: sdk.Int64(27500),
                    Card: &shared.PaymentCardInput{
                        BillingAddress: &shared.Address{
                            City: sdk.String("San Francisco"),
                            ContactName: sdk.String("Elon Musk"),
                            Country: sdk.String("US"),
                            County: sdk.String("Santa Clara"),
                            Email: sdk.String("elon@musk.com"),
                            Fax: sdk.String("122-111-1111"),
                            ID: sdk.String("123"),
                            Latitude: sdk.String("40.759211"),
                            Line1: sdk.String("Main street"),
                            Line2: sdk.String("apt #"),
                            Line3: sdk.String("Suite #"),
                            Line4: sdk.String("delivery instructions"),
                            Longitude: sdk.String("-73.984638"),
                            Name: sdk.String("HQ US"),
                            PhoneNumber: sdk.String("111-111-1111"),
                            PostalCode: sdk.String("94104"),
                            RowVersion: sdk.String("1-12345"),
                            Salutation: sdk.String("Mr"),
                            State: sdk.String("CA"),
                            StreetNumber: sdk.String("25"),
                            String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                            Type: shared.AddressTypeEnumPrimary.ToPointer(),
                            Website: sdk.String("https://elonmusk.com"),
                        },
                        Bin: sdk.String("41111"),
                        CardBrand: shared.PaymentCardCardBrandEnumInterac.ToPointer(),
                        CardType: shared.PaymentCardCardTypeEnumCredit.ToPointer(),
                        CardholderName: sdk.String("John Doe"),
                        CustomerID: sdk.String("12345"),
                        Enabled: sdk.Bool(true),
                        ExpMonth: sdk.Int64(1),
                        ExpYear: sdk.Int64(2022),
                        Fingerprint: sdk.String(" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application."),
                        Last4: sdk.String("The last 4 digits of the card number."),
                        MerchantID: sdk.String("12345"),
                        PrepaidType: shared.PaymentCardPrepaidTypeEnumPrepaid.ToPointer(),
                        ReferenceID: sdk.String("card-001"),
                        Version: sdk.String("230320320320"),
                    },
                    CardEntryMethod: shared.OrderTendersCardEntryMethodEnumSwiped.ToPointer(),
                    CardStatus: shared.OrderTendersCardStatusEnumAuthorized.ToPointer(),
                    ChangeBackCashAmount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Note: sdk.String("An optional note associated with the tender at the time of payment."),
                    Percentage: sdk.Float64(10),
                    TotalAmount: sdk.Int64(27.5),
                    TotalDiscount: sdk.Int64(3),
                    TotalProcessingFee: sdk.Int64(148829),
                    TotalRefund: sdk.Int64(967966),
                    TotalServiceCharge: sdk.Int64(131852),
                    TotalTax: sdk.Int64(2.75),
                    TotalTip: sdk.Int64(7),
                    Type: shared.OrderTendersTypeEnumCash.ToPointer(),
                },
            },
            Title: sdk.String("Dr."),
            TotalAmount: sdk.Int64(275),
            TotalDiscount: sdk.Int64(300),
            TotalRefund: sdk.Int64(707918),
            TotalServiceCharge: sdk.Int64(451822),
            TotalTax: sdk.Int64(275),
            TotalTip: sdk.Int64(700),
            Version: sdk.String("230320320320"),
            Voided: sdk.Bool(false),
        },
        Fields: sdk.String("expedita"),
        ID: "194a276b-2691-46fe-9f08-f4294e3698f4",
        Raw: sdk.Bool(false),
        XApideckAppID: "tempora",
        XApideckConsumerID: "voluptate",
        XApideckServiceID: sdk.String("reiciendis"),
    }, operations.OrdersPaySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrderResponse != nil {
        // handle response
    }
}
```

## OrdersUpdate

Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrdersUpdate(ctx, operations.OrdersUpdateRequest{
        OrderInput: shared.OrderInput{
            ClosedDate: types.MustDateFromString("2022-08-13"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomerID: sdk.String("12345"),
            Customers: []shared.OrderCustomers{
                shared.OrderCustomers{
                    Emails: []shared.Email{
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                    },
                    FirstName: sdk.String("Elon"),
                    ID: sdk.String("12345"),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    PhoneNumbers: []shared.PhoneNumber{
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                    },
                },
                shared.OrderCustomers{
                    Emails: []shared.Email{
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                        shared.Email{
                            Email: "elon@musk.com",
                            ID: sdk.String("123"),
                            Type: shared.EmailTypeEnumPrimary.ToPointer(),
                        },
                    },
                    FirstName: sdk.String("Elon"),
                    ID: sdk.String("12345"),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    PhoneNumbers: []shared.PhoneNumber{
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                        shared.PhoneNumber{
                            AreaCode: sdk.String("323"),
                            CountryCode: sdk.String("1"),
                            Extension: sdk.String("105"),
                            ID: sdk.String("12345"),
                            Number: "111-111-1111",
                            Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                        },
                    },
                },
            },
            Discounts: []shared.OrderDiscountsInput{
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
                shared.OrderDiscountsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Scope: shared.OrderDiscountsScopeEnumOrder.ToPointer(),
                    Type: shared.OrderDiscountsTypeEnumPercentage,
                },
            },
            EmployeeID: sdk.String("12345"),
            Fulfillments: []shared.OrderFulfillmentsInput{
                shared.OrderFulfillmentsInput{
                    ID: sdk.String("12345"),
                    PickupDetails: &shared.OrderFulfillmentsPickupDetailsInput{
                        AutoCompleteDuration: sdk.String("P1W3D"),
                        CancelReason: sdk.String("Not hungry"),
                        CanceledAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                            CurbsideDetails: sdk.String("incidunt"),
                        },
                        ExpiredAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ExpiresAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("Pickup in the back."),
                        PickedUpAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupWindowDuration: sdk.String("P1W3D"),
                        PlacedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PrepTimeDuration: sdk.String("P1W3D"),
                        ReadyAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        Recipient: &shared.OrderFulfillmentsPickupDetailsRecipient{
                            Address: &shared.Address{
                                City: sdk.String("San Francisco"),
                                ContactName: sdk.String("Elon Musk"),
                                Country: sdk.String("US"),
                                County: sdk.String("Santa Clara"),
                                Email: sdk.String("elon@musk.com"),
                                Fax: sdk.String("122-111-1111"),
                                ID: sdk.String("123"),
                                Latitude: sdk.String("40.759211"),
                                Line1: sdk.String("Main street"),
                                Line2: sdk.String("apt #"),
                                Line3: sdk.String("Suite #"),
                                Line4: sdk.String("delivery instructions"),
                                Longitude: sdk.String("-73.984638"),
                                Name: sdk.String("HQ US"),
                                PhoneNumber: sdk.String("111-111-1111"),
                                PostalCode: sdk.String("94104"),
                                RowVersion: sdk.String("1-12345"),
                                Salutation: sdk.String("Mr"),
                                State: sdk.String("CA"),
                                StreetNumber: sdk.String("25"),
                                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                                Website: sdk.String("https://elonmusk.com"),
                            },
                            CustomerID: sdk.String("12345"),
                            DisplayName: sdk.String("Elon Musk"),
                            Email: &shared.Email{
                                Email: "elon@musk.com",
                                ID: sdk.String("123"),
                                Type: shared.EmailTypeEnumPrimary.ToPointer(),
                            },
                            PhoneNumber: &shared.PhoneNumber{
                                AreaCode: sdk.String("323"),
                                CountryCode: sdk.String("1"),
                                Extension: sdk.String("105"),
                                ID: sdk.String("12345"),
                                Number: "111-111-1111",
                                Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                            },
                        },
                        RejectedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ScheduleType: shared.OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled.ToPointer(),
                    },
                    ShipmentDetails: map[string]interface{}{
                        "debitis": "rem",
                        "sit": "nobis",
                    },
                    Status: shared.OrderFulfillmentsFulfillmentStatusEnumCancelled.ToPointer(),
                    Type: shared.OrderFulfillmentsTypeEnumShipment.ToPointer(),
                },
                shared.OrderFulfillmentsInput{
                    ID: sdk.String("12345"),
                    PickupDetails: &shared.OrderFulfillmentsPickupDetailsInput{
                        AutoCompleteDuration: sdk.String("P1W3D"),
                        CancelReason: sdk.String("Not hungry"),
                        CanceledAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentsPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                            CurbsideDetails: sdk.String("veniam"),
                        },
                        ExpiredAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ExpiresAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("Pickup in the back."),
                        PickedUpAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PickupWindowDuration: sdk.String("P1W3D"),
                        PlacedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        PrepTimeDuration: sdk.String("P1W3D"),
                        ReadyAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        Recipient: &shared.OrderFulfillmentsPickupDetailsRecipient{
                            Address: &shared.Address{
                                City: sdk.String("San Francisco"),
                                ContactName: sdk.String("Elon Musk"),
                                Country: sdk.String("US"),
                                County: sdk.String("Santa Clara"),
                                Email: sdk.String("elon@musk.com"),
                                Fax: sdk.String("122-111-1111"),
                                ID: sdk.String("123"),
                                Latitude: sdk.String("40.759211"),
                                Line1: sdk.String("Main street"),
                                Line2: sdk.String("apt #"),
                                Line3: sdk.String("Suite #"),
                                Line4: sdk.String("delivery instructions"),
                                Longitude: sdk.String("-73.984638"),
                                Name: sdk.String("HQ US"),
                                PhoneNumber: sdk.String("111-111-1111"),
                                PostalCode: sdk.String("94104"),
                                RowVersion: sdk.String("1-12345"),
                                Salutation: sdk.String("Mr"),
                                State: sdk.String("CA"),
                                StreetNumber: sdk.String("25"),
                                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                                Website: sdk.String("https://elonmusk.com"),
                            },
                            CustomerID: sdk.String("12345"),
                            DisplayName: sdk.String("Elon Musk"),
                            Email: &shared.Email{
                                Email: "elon@musk.com",
                                ID: sdk.String("123"),
                                Type: shared.EmailTypeEnumPrimary.ToPointer(),
                            },
                            PhoneNumber: &shared.PhoneNumber{
                                AreaCode: sdk.String("323"),
                                CountryCode: sdk.String("1"),
                                Extension: sdk.String("105"),
                                ID: sdk.String("12345"),
                                Number: "111-111-1111",
                                Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                            },
                        },
                        RejectedAt: types.MustTimeFromString("2016-09-04T23:59:33.123Z"),
                        ScheduleType: shared.OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled.ToPointer(),
                    },
                    ShipmentDetails: map[string]interface{}{
                        "recusandae": "reiciendis",
                        "nulla": "magni",
                    },
                    Status: shared.OrderFulfillmentsFulfillmentStatusEnumProposed.ToPointer(),
                    Type: shared.OrderFulfillmentsTypeEnumShipment.ToPointer(),
                },
            },
            IdempotencyKey: sdk.String("random_string"),
            LineItems: []shared.OrderLineItemsInput{
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.OrderLineItemsInput{
                    AppliedDiscounts: []shared.OrderLineItemsAppliedDiscountsInput{
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                        shared.OrderLineItemsAppliedDiscountsInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            DiscountID: sdk.String("12345"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemsAppliedTaxesInput{
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                        shared.OrderLineItemsAppliedTaxesInput{
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            TaxID: sdk.String("sales-tax"),
                        },
                    },
                    Modifiers: []shared.OrderLineItemsModifiers{
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                        shared.OrderLineItemsModifiers{
                            AlternateName: sdk.String("Modifier New"),
                            Amount: sdk.Int64(27500),
                            Currency: shared.CurrencyEnumUsd.ToPointer(),
                            ID: sdk.String("12345"),
                            ModifierGroupID: sdk.String("123"),
                            Name: sdk.String("New York Strip Steak - no cheese"),
                        },
                    },
                    Name: sdk.String("New York Strip Steak"),
                    Quantity: sdk.Float64(1),
                    TotalAmount: sdk.Int64(27500),
                    TotalDiscount: sdk.Int64(3000),
                    TotalTax: sdk.Int64(2000),
                    UnitPrice: sdk.Float64(27500.5),
                },
            },
            LocationID: "12345",
            MerchantID: "12345",
            Note: sdk.String("error"),
            OrderDate: types.MustDateFromString("2022-08-12"),
            OrderNumber: sdk.String("1F"),
            OrderTypeID: sdk.String("12345"),
            PaymentStatus: shared.OrderPosPaymentStatusEnumOpen.ToPointer(),
            Payments: []shared.OrderPaymentsInput{
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
                shared.OrderPaymentsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                },
            },
            ReferenceID: sdk.String("my-order-001"),
            Refunded: sdk.Bool(false),
            Refunds: []shared.OrderRefundsInput{
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumFailed.ToPointer(),
                },
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumPending.ToPointer(),
                },
                shared.OrderRefundsInput{
                    Amount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Reason: sdk.String("The reason for the refund being issued."),
                    Status: shared.OrderRefundsStatusEnumRejected.ToPointer(),
                },
            },
            Seat: sdk.String("23F"),
            ServiceCharges: []shared.ServiceChargeInput{
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
            },
            Status: shared.OrderStatusEnumOpen.ToPointer(),
            Table: sdk.String("1F"),
            Taxes: []shared.OrderTaxes{
                shared.OrderTaxes{
                    Amount: sdk.Int64(27500),
                    AutoApplied: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("state-sales-tax"),
                    Name: sdk.String("State Sales Tax"),
                    Percentage: sdk.Float64(15),
                    Scope: shared.OrderTaxesScopeEnumLineItem.ToPointer(),
                    Type: shared.OrderTaxesTypeEnumUnknown.ToPointer(),
                },
                shared.OrderTaxes{
                    Amount: sdk.Int64(27500),
                    AutoApplied: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("state-sales-tax"),
                    Name: sdk.String("State Sales Tax"),
                    Percentage: sdk.Float64(15),
                    Scope: shared.OrderTaxesScopeEnumLineItem.ToPointer(),
                    Type: shared.OrderTaxesTypeEnumUnknown.ToPointer(),
                },
                shared.OrderTaxes{
                    Amount: sdk.Int64(27500),
                    AutoApplied: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("state-sales-tax"),
                    Name: sdk.String("State Sales Tax"),
                    Percentage: sdk.Float64(15),
                    Scope: shared.OrderTaxesScopeEnumOrder.ToPointer(),
                    Type: shared.OrderTaxesTypeEnumInclusive.ToPointer(),
                },
            },
            Tenders: []shared.OrderTendersInput{
                shared.OrderTendersInput{
                    Amount: sdk.Float64(27500),
                    BuyerTenderedCashAmount: sdk.Int64(27500),
                    Card: &shared.PaymentCardInput{
                        BillingAddress: &shared.Address{
                            City: sdk.String("San Francisco"),
                            ContactName: sdk.String("Elon Musk"),
                            Country: sdk.String("US"),
                            County: sdk.String("Santa Clara"),
                            Email: sdk.String("elon@musk.com"),
                            Fax: sdk.String("122-111-1111"),
                            ID: sdk.String("123"),
                            Latitude: sdk.String("40.759211"),
                            Line1: sdk.String("Main street"),
                            Line2: sdk.String("apt #"),
                            Line3: sdk.String("Suite #"),
                            Line4: sdk.String("delivery instructions"),
                            Longitude: sdk.String("-73.984638"),
                            Name: sdk.String("HQ US"),
                            PhoneNumber: sdk.String("111-111-1111"),
                            PostalCode: sdk.String("94104"),
                            RowVersion: sdk.String("1-12345"),
                            Salutation: sdk.String("Mr"),
                            State: sdk.String("CA"),
                            StreetNumber: sdk.String("25"),
                            String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                            Type: shared.AddressTypeEnumPrimary.ToPointer(),
                            Website: sdk.String("https://elonmusk.com"),
                        },
                        Bin: sdk.String("41111"),
                        CardBrand: shared.PaymentCardCardBrandEnumSquareCapitalCard.ToPointer(),
                        CardType: shared.PaymentCardCardTypeEnumCredit.ToPointer(),
                        CardholderName: sdk.String("John Doe"),
                        CustomerID: sdk.String("12345"),
                        Enabled: sdk.Bool(true),
                        ExpMonth: sdk.Int64(1),
                        ExpYear: sdk.Int64(2022),
                        Fingerprint: sdk.String(" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application."),
                        Last4: sdk.String("The last 4 digits of the card number."),
                        MerchantID: sdk.String("12345"),
                        PrepaidType: shared.PaymentCardPrepaidTypeEnumPrepaid.ToPointer(),
                        ReferenceID: sdk.String("card-001"),
                        Version: sdk.String("230320320320"),
                    },
                    CardEntryMethod: shared.OrderTendersCardEntryMethodEnumSwiped.ToPointer(),
                    CardStatus: shared.OrderTendersCardStatusEnumAuthorized.ToPointer(),
                    ChangeBackCashAmount: sdk.Int64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("10% off"),
                    Note: sdk.String("An optional note associated with the tender at the time of payment."),
                    Percentage: sdk.Float64(10),
                    TotalAmount: sdk.Int64(27.5),
                    TotalDiscount: sdk.Int64(3),
                    TotalProcessingFee: sdk.Int64(710337),
                    TotalRefund: sdk.Int64(299643),
                    TotalServiceCharge: sdk.Int64(7884),
                    TotalTax: sdk.Int64(2.75),
                    TotalTip: sdk.Int64(7),
                    Type: shared.OrderTendersTypeEnumCash.ToPointer(),
                },
            },
            Title: sdk.String("Ms."),
            TotalAmount: sdk.Int64(275),
            TotalDiscount: sdk.Int64(300),
            TotalRefund: sdk.Int64(372679),
            TotalServiceCharge: sdk.Int64(24527),
            TotalTax: sdk.Int64(275),
            TotalTip: sdk.Int64(700),
            Version: sdk.String("230320320320"),
            Voided: sdk.Bool(false),
        },
        ID: "88e51862-065e-4904-b3b1-194b8abf603a",
        Raw: sdk.Bool(false),
        XApideckAppID: "voluptate",
        XApideckConsumerID: "unde",
        XApideckServiceID: sdk.String("reiciendis"),
    }, operations.OrdersUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrderResponse != nil {
        // handle response
    }
}
```
