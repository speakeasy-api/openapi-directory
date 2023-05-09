# Push

### Available Operations

* [DeletePushDeviceDetails](#deletepushdevicedetails) - Delete a registered device's update token
* [GetChannelsWithPushSubscribers](#getchannelswithpushsubscribers) - List all channels with at least one subscribed device
* [GetPushDeviceDetails](#getpushdevicedetails) - Get a device registration
* [GetPushSubscriptionsOnChannels](#getpushsubscriptionsonchannels) - List channel subscriptions
* [GetRegisteredPushDevices](#getregisteredpushdevices) - List devices registered for receiving push notifications
* [PatchPushDeviceDetailsForm](#patchpushdevicedetailsform) - Update a device registration
* [PatchPushDeviceDetailsJSON](#patchpushdevicedetailsjson) - Update a device registration
* [PatchPushDeviceDetailsRaw](#patchpushdevicedetailsraw) - Update a device registration
* [PublishPushNotificationToDevicesForm](#publishpushnotificationtodevicesform) - Publish a push notification to device(s)
* [PublishPushNotificationToDevicesJSON](#publishpushnotificationtodevicesjson) - Publish a push notification to device(s)
* [PublishPushNotificationToDevicesRaw](#publishpushnotificationtodevicesraw) - Publish a push notification to device(s)
* [PutPushDeviceDetailsForm](#putpushdevicedetailsform) - Update a device registration
* [PutPushDeviceDetailsJSON](#putpushdevicedetailsjson) - Update a device registration
* [PutPushDeviceDetailsRaw](#putpushdevicedetailsraw) - Update a device registration
* [RegisterPushDeviceJSON](#registerpushdevicejson) - Register a device for receiving push notifications
* [RegisterPushDeviceRaw](#registerpushdeviceraw) - Register a device for receiving push notifications
* [UnregisterAllPushDevices](#unregisterallpushdevices) - Unregister matching devices for push notifications
* [UnregisterPushDevice](#unregisterpushdevice) - Unregister a single device for push notifications
* [UpdatePushDeviceDetails](#updatepushdevicedetails) - Reset a registered device's update token

## DeletePushDeviceDetails

Delete a device details object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.DeletePushDeviceDetails(ctx, operations.DeletePushDeviceDetailsRequest{
        XAblyVersion: sdk.String("dolores"),
        Channel: sdk.String("dolorem"),
        ClientID: sdk.String("corporis"),
        DeviceID: sdk.String("explicabo"),
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChannelsWithPushSubscribers

Returns a paginated response of channel names.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.GetChannelsWithPushSubscribers(ctx, operations.GetChannelsWithPushSubscribersRequest{
        XAblyVersion: sdk.String("enim"),
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChannelsWithPushSubscribers2XXApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetPushDeviceDetails

Get the full details of a device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.GetPushDeviceDetails(ctx, operations.GetPushDeviceDetailsRequest{
        XAblyVersion: sdk.String("nemo"),
        DeviceID: "minima",
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## GetPushSubscriptionsOnChannels

Get a list of push notification subscriptions to channels.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.GetPushSubscriptionsOnChannels(ctx, operations.GetPushSubscriptionsOnChannelsRequest{
        XAblyVersion: sdk.String("accusantium"),
        Channel: sdk.String("iure"),
        ClientID: sdk.String("culpa"),
        DeviceID: sdk.String("doloribus"),
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
        Limit: sdk.Int64(102044),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## GetRegisteredPushDevices

List of device details of devices registed for push notifications.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.GetRegisteredPushDevices(ctx, operations.GetRegisteredPushDevicesRequest{
        XAblyVersion: sdk.String("mollitia"),
        ClientID: sdk.String("dolorem"),
        DeviceID: sdk.String("culpa"),
        Format: shared.ResponseFormatEnumJSON.ToPointer(),
        Limit: sdk.Int64(995300),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## PatchPushDeviceDetailsForm

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PatchPushDeviceDetailsForm(ctx, operations.PatchPushDeviceDetailsFormRequest{
        DeviceDetailsInput: &shared.DeviceDetailsInput{
            ClientID: sdk.String("mollitia"),
            DeviceSecret: sdk.String("occaecati"),
            FormFactor: shared.DeviceDetailsFormFactorEnumTablet.ToPointer(),
            ID: sdk.String("67739251-aa52-4c3f-9ad0-19da1ffe78f0"),
            Metadata: map[string]interface{}{
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
            },
            Platform: shared.DeviceDetailsPlatformEnumAndroid.ToPointer(),
            PushRecipient: &shared.Recipient{
                ClientID: sdk.String("dicta"),
                DeviceID: sdk.String("corporis"),
                DeviceToken: sdk.String("dolore"),
                RegistrationToken: sdk.String("iusto"),
                TransportType: shared.RecipientTransportTypeEnumApns.ToPointer(),
            },
        },
        XAblyVersion: sdk.String("harum"),
        DeviceID: "enim",
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## PatchPushDeviceDetailsJSON

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PatchPushDeviceDetailsJSON(ctx, operations.PatchPushDeviceDetailsJSONRequest{
        DeviceDetailsInput: &shared.DeviceDetailsInput{
            ClientID: sdk.String("commodi"),
            DeviceSecret: sdk.String("repudiandae"),
            FormFactor: shared.DeviceDetailsFormFactorEnumPhone.ToPointer(),
            ID: sdk.String("3b99d488-e1e9-41e4-90ad-2abd44269802"),
            Metadata: map[string]interface{}{
                "ipsam": "alias",
                "fugit": "dolorum",
                "excepturi": "tempora",
                "facilis": "tempore",
            },
            Platform: shared.DeviceDetailsPlatformEnumIos.ToPointer(),
            PushRecipient: &shared.Recipient{
                ClientID: sdk.String("delectus"),
                DeviceID: sdk.String("eum"),
                DeviceToken: sdk.String("non"),
                RegistrationToken: sdk.String("eligendi"),
                TransportType: shared.RecipientTransportTypeEnumFcm.ToPointer(),
            },
        },
        XAblyVersion: sdk.String("aliquid"),
        DeviceID: "provident",
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## PatchPushDeviceDetailsRaw

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PatchPushDeviceDetailsRaw(ctx, operations.PatchPushDeviceDetailsRawRequest{
        RequestBody: []byte("sint"),
        XAblyVersion: sdk.String("officia"),
        DeviceID: "dolor",
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## PublishPushNotificationToDevicesForm

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PublishPushNotificationToDevicesForm(ctx, operations.PublishPushNotificationToDevicesFormRequest{
        RequestBody: &operations.PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded{
            Push: &shared.Push{
                Apns: &shared.PushApns{
                    Notification: &shared.Notification{
                        Body: sdk.String("a"),
                        CollapseKey: sdk.String("dolorum"),
                        Icon: sdk.String("in"),
                        Sound: sdk.String("in"),
                        Title: sdk.String("Dr."),
                    },
                },
                Data: sdk.String("maiores"),
                Fcm: &shared.PushFcm{
                    Notification: &shared.Notification{
                        Body: sdk.String("rerum"),
                        CollapseKey: sdk.String("dicta"),
                        Icon: sdk.String("magnam"),
                        Sound: sdk.String("cumque"),
                        Title: sdk.String("Dr."),
                    },
                },
                Notification: &shared.Notification{
                    Body: sdk.String("ea"),
                    CollapseKey: sdk.String("aliquid"),
                    Icon: sdk.String("laborum"),
                    Sound: sdk.String("accusamus"),
                    Title: sdk.String("Mrs."),
                },
                Web: &shared.PushWeb{
                    Notification: &shared.Notification{
                        Body: sdk.String("occaecati"),
                        CollapseKey: sdk.String("enim"),
                        Icon: sdk.String("accusamus"),
                        Sound: sdk.String("delectus"),
                        Title: sdk.String("Miss"),
                    },
                },
            },
            Recipient: shared.Recipient{
                ClientID: sdk.String("provident"),
                DeviceID: sdk.String("nam"),
                DeviceToken: sdk.String("id"),
                RegistrationToken: sdk.String("blanditiis"),
                TransportType: shared.RecipientTransportTypeEnumFcm.ToPointer(),
            },
        },
        XAblyVersion: sdk.String("sapiente"),
        Format: shared.ResponseFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PublishPushNotificationToDevicesJSON

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PublishPushNotificationToDevicesJSON(ctx, operations.PublishPushNotificationToDevicesJSONRequest{
        RequestBody: &operations.PublishPushNotificationToDevicesApplicationJSON{
            Push: &shared.Push{
                Apns: &shared.PushApns{
                    Notification: &shared.Notification{
                        Body: sdk.String("deserunt"),
                        CollapseKey: sdk.String("nisi"),
                        Icon: sdk.String("vel"),
                        Sound: sdk.String("natus"),
                        Title: sdk.String("Miss"),
                    },
                },
                Data: sdk.String("molestiae"),
                Fcm: &shared.PushFcm{
                    Notification: &shared.Notification{
                        Body: sdk.String("perferendis"),
                        CollapseKey: sdk.String("nihil"),
                        Icon: sdk.String("magnam"),
                        Sound: sdk.String("distinctio"),
                        Title: sdk.String("Miss"),
                    },
                },
                Notification: &shared.Notification{
                    Body: sdk.String("labore"),
                    CollapseKey: sdk.String("labore"),
                    Icon: sdk.String("suscipit"),
                    Sound: sdk.String("natus"),
                    Title: sdk.String("Miss"),
                },
                Web: &shared.PushWeb{
                    Notification: &shared.Notification{
                        Body: sdk.String("eum"),
                        CollapseKey: sdk.String("vero"),
                        Icon: sdk.String("aspernatur"),
                        Sound: sdk.String("architecto"),
                        Title: sdk.String("Mrs."),
                    },
                },
            },
            Recipient: shared.Recipient{
                ClientID: sdk.String("et"),
                DeviceID: sdk.String("excepturi"),
                DeviceToken: sdk.String("ullam"),
                RegistrationToken: sdk.String("provident"),
                TransportType: shared.RecipientTransportTypeEnumFcm.ToPointer(),
            },
        },
        XAblyVersion: sdk.String("sint"),
        Format: shared.ResponseFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PublishPushNotificationToDevicesRaw

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PublishPushNotificationToDevicesRaw(ctx, operations.PublishPushNotificationToDevicesRawRequest{
        RequestBody: []byte("mollitia"),
        XAblyVersion: sdk.String("reiciendis"),
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutPushDeviceDetailsForm

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PutPushDeviceDetailsForm(ctx, operations.PutPushDeviceDetailsFormRequest{
        DeviceDetailsInput: &shared.DeviceDetailsInput{
            ClientID: sdk.String("ad"),
            DeviceSecret: sdk.String("eum"),
            FormFactor: shared.DeviceDetailsFormFactorEnumTablet.ToPointer(),
            ID: sdk.String("e2516fe4-c8b7-411e-9b7f-d2ed028921cd"),
            Metadata: map[string]interface{}{
                "maxime": "ea",
                "excepturi": "odit",
                "ea": "accusantium",
                "ab": "maiores",
            },
            Platform: shared.DeviceDetailsPlatformEnumAndroid.ToPointer(),
            PushRecipient: &shared.Recipient{
                ClientID: sdk.String("ipsam"),
                DeviceID: sdk.String("voluptate"),
                DeviceToken: sdk.String("autem"),
                RegistrationToken: sdk.String("nam"),
                TransportType: shared.RecipientTransportTypeEnumApns.ToPointer(),
            },
        },
        XAblyVersion: sdk.String("pariatur"),
        DeviceID: "nemo",
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## PutPushDeviceDetailsJSON

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PutPushDeviceDetailsJSON(ctx, operations.PutPushDeviceDetailsJSONRequest{
        DeviceDetailsInput: &shared.DeviceDetailsInput{
            ClientID: sdk.String("perferendis"),
            DeviceSecret: sdk.String("fugiat"),
            FormFactor: shared.DeviceDetailsFormFactorEnumTablet.ToPointer(),
            ID: sdk.String("0c5fbb25-8705-4320-ac73-d5fe9b90c289"),
            Metadata: map[string]interface{}{
                "occaecati": "rerum",
            },
            Platform: shared.DeviceDetailsPlatformEnumIos.ToPointer(),
            PushRecipient: &shared.Recipient{
                ClientID: sdk.String("asperiores"),
                DeviceID: sdk.String("earum"),
                DeviceToken: sdk.String("modi"),
                RegistrationToken: sdk.String("iste"),
                TransportType: shared.RecipientTransportTypeEnumGcm.ToPointer(),
            },
        },
        XAblyVersion: sdk.String("deleniti"),
        DeviceID: "pariatur",
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## PutPushDeviceDetailsRaw

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.PutPushDeviceDetailsRaw(ctx, operations.PutPushDeviceDetailsRawRequest{
        RequestBody: []byte("nobis"),
        XAblyVersion: sdk.String("libero"),
        DeviceID: "delectus",
        Format: shared.ResponseFormatEnumJsonp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## RegisterPushDeviceJSON

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.RegisterPushDeviceJSON(ctx, operations.RegisterPushDeviceJSONRequest{
        DeviceDetailsInput: &shared.DeviceDetailsInput{
            ClientID: sdk.String("quos"),
            DeviceSecret: sdk.String("aliquid"),
            FormFactor: shared.DeviceDetailsFormFactorEnumTablet.ToPointer(),
            ID: sdk.String("3323f9b7-7f3a-4410-8674-ebf69280d1ba"),
            Metadata: map[string]interface{}{
                "voluptate": "dolorum",
                "deleniti": "omnis",
            },
            Platform: shared.DeviceDetailsPlatformEnumAndroid.ToPointer(),
            PushRecipient: &shared.Recipient{
                ClientID: sdk.String("distinctio"),
                DeviceID: sdk.String("asperiores"),
                DeviceToken: sdk.String("nihil"),
                RegistrationToken: sdk.String("ipsum"),
                TransportType: shared.RecipientTransportTypeEnumFcm.ToPointer(),
            },
        },
        XAblyVersion: sdk.String("id"),
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## RegisterPushDeviceRaw

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.RegisterPushDeviceRaw(ctx, operations.RegisterPushDeviceRawRequest{
        RequestBody: []byte("eius"),
        XAblyVersion: sdk.String("aspernatur"),
        Format: shared.ResponseFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```

## UnregisterAllPushDevices

Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.UnregisterAllPushDevices(ctx, operations.UnregisterAllPushDevicesRequest{
        XAblyVersion: sdk.String("amet"),
        ClientID: sdk.String("optio"),
        DeviceID: sdk.String("accusamus"),
        Format: shared.ResponseFormatEnumJsonp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnregisterPushDevice

Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.UnregisterPushDevice(ctx, operations.UnregisterPushDeviceRequest{
        XAblyVersion: sdk.String("saepe"),
        DeviceID: "suscipit",
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePushDeviceDetails

Gets an updated device details object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Push.UpdatePushDeviceDetails(ctx, operations.UpdatePushDeviceDetailsRequest{
        XAblyVersion: sdk.String("provident"),
        DeviceID: "minima",
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceDetails != nil {
        // handle response
    }
}
```
