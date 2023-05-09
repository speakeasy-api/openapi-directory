# Contacts

### Available Operations

* [AddContactListItems](#addcontactlistitems) - Add contacts to a contact list
* [AddDoNotContacts](#adddonotcontacts) - Add do not contact (dnc) numbers
* [CreateContactList](#createcontactlist) - Create contact lists
* [CreateContactListFromFile](#createcontactlistfromfile) - Create contact list from file
* [CreateContacts](#createcontacts) - Create contacts
* [DeleteContact](#deletecontact) - Delete a contact
* [DeleteContactList](#deletecontactlist) - Delete a contact list
* [DeleteDoNotContact](#deletedonotcontact) - Delete do not contact (dnc) number. If number contains commas treat as list of numbers
* [DeleteDoNotContactsBySource](#deletedonotcontactsbysource) - Delete do not contact (dnc) numbers contained in source.
* [FindContactLists](#findcontactlists) - Find contact lists
* [FindContacts](#findcontacts) - Find contacts
* [FindDoNotContacts](#finddonotcontacts) - Find do not contact (dnc) items
* [GetContact](#getcontact) - Find a specific contact
* [GetContactHistory](#getcontacthistory) - Find a contact's history
* [GetContactList](#getcontactlist) - Find a specific contact list
* [GetContactListItems](#getcontactlistitems) - Find contacts in a contact list
* [GetDoNotContact](#getdonotcontact) - Get do not contact (dnc)
* [GetUniversalDoNotContacts](#getuniversaldonotcontacts) - Find universal do not contacts (udnc) associated with toNumber
* [RemoveContactListItem](#removecontactlistitem) - Delete a contact from a contact list
* [RemoveContactListItems](#removecontactlistitems) - Delete contacts from a contact list
* [UpdateContact](#updatecontact) - Update a contact
* [UpdateContactList](#updatecontactlist) - Update a contact list
* [UpdateDoNotContact](#updatedonotcontact) - Update an individual do not contact (dnc) number

## AddContactListItems

Adds contacts to a contact list. Available contact sources are: list of the contact entities, list of ids of existing contacts in user's account, list of phone numbers in E.164 format (11-digits)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contacts.AddContactListItems(ctx, operations.AddContactListItemsRequest{
        AddContactListContactsRequest: &shared.AddContactListContactsRequest{
            ContactIds: []int64{
                674848,
            },
            ContactNumbers: []string{
                "incidunt",
                "aspernatur",
                "dolores",
            },
            ContactNumbersField: sdk.String("distinctio"),
            Contacts: []shared.Contact{
                shared.Contact{
                    Deleted: sdk.Bool(false),
                    ExternalID: sdk.String("aliquid"),
                    ExternalSystem: sdk.String("quam"),
                    ExtraPhone1: sdk.String("molestias"),
                    ExtraPhone2: sdk.String("temporibus"),
                    ExtraPhone3: sdk.String("qui"),
                    FirstName: sdk.String("Conor"),
                    HomePhone: sdk.String("fugit"),
                    ID: sdk.Int64(164959),
                    LastName: sdk.String("Kuhlman"),
                    MobilePhone: sdk.String("sunt"),
                    Properties: map[string]string{
                        "nam": "hic",
                        "voluptatem": "cumque",
                    },
                    WorkPhone: sdk.String("soluta"),
                    Zipcode: sdk.String("09207-5750"),
                },
                shared.Contact{
                    Deleted: sdk.Bool(false),
                    ExternalID: sdk.String("delectus"),
                    ExternalSystem: sdk.String("dolorem"),
                    ExtraPhone1: sdk.String("dolore"),
                    ExtraPhone2: sdk.String("labore"),
                    ExtraPhone3: sdk.String("adipisci"),
                    FirstName: sdk.String("Marianne"),
                    HomePhone: sdk.String("architecto"),
                    ID: sdk.Int64(63038),
                    LastName: sdk.String("Armstrong"),
                    MobilePhone: sdk.String("quas"),
                    Properties: map[string]string{
                        "consequatur": "est",
                        "repellendus": "porro",
                        "doloribus": "ut",
                        "facilis": "cupiditate",
                    },
                    WorkPhone: sdk.String("qui"),
                    Zipcode: sdk.String("54597"),
                },
                shared.Contact{
                    Deleted: sdk.Bool(false),
                    ExternalID: sdk.String("vero"),
                    ExternalSystem: sdk.String("omnis"),
                    ExtraPhone1: sdk.String("quis"),
                    ExtraPhone2: sdk.String("ipsum"),
                    ExtraPhone3: sdk.String("delectus"),
                    FirstName: sdk.String("Jackie"),
                    HomePhone: sdk.String("consectetur"),
                    ID: sdk.Int64(878870),
                    LastName: sdk.String("Wiegand"),
                    MobilePhone: sdk.String("dignissimos"),
                    Properties: map[string]string{
                        "distinctio": "quod",
                        "odio": "similique",
                        "facilis": "vero",
                        "ducimus": "dolore",
                    },
                    WorkPhone: sdk.String("quibusdam"),
                    Zipcode: sdk.String("16709-3817"),
                },
            },
            UseCustomFields: sdk.Bool(false),
        },
        ID: 981830,
    }, operations.AddContactListItemsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddDoNotContacts

Add or update a list of Do Not Contact (DNC) contact entries. Can toggle whether the DNCs are enabled for calls/texts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contacts.AddDoNotContacts(ctx, shared.AddDoNotContactRequest{
        Call: sdk.Bool(false),
        InboundCall: sdk.Bool(false),
        InboundText: sdk.Bool(false),
        Numbers: []string{
            "iusto",
            "eligendi",
            "ducimus",
            "alias",
        },
        Source: sdk.String("officia"),
        Text: sdk.Bool(false),
    }, operations.AddDoNotContactsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateContactList

Creates a contact list for use with campaigns using 1 of 3 inputs. A List of Contact objects, a list of String E.164 numbers, or a list of CallFire contactIds can be used as the data source for the created contact list. After contact list is added into the CallFire system, contact lists goes through seven system safeguards that check the accuracy and consistency of the data. For example, our system checks that contact number is formatted correctly, is valid, is not duplicated in another contact list, or is not added on a specific DNC list. You can configure to keep/merge or remove contacts which do not complies these rules. If contacts were not added to a contact list after the validation, this means the data needs to be properly formatted and corrected before calling this API

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contacts.CreateContactList(ctx, operations.CreateContactListRequest{
        CreateContactListRequest: &shared.CreateContactListRequest{
            ContactIds: []int64{
                368584,
                410492,
            },
            ContactNumbers: []string{
                "vel",
            },
            ContactNumbersField: sdk.String("possimus"),
            Contacts: []shared.Contact{
                shared.Contact{
                    Deleted: sdk.Bool(false),
                    ExternalID: sdk.String("ratione"),
                    ExternalSystem: sdk.String("ex"),
                    ExtraPhone1: sdk.String("laudantium"),
                    ExtraPhone2: sdk.String("dicta"),
                    ExtraPhone3: sdk.String("dolor"),
                    FirstName: sdk.String("Willa"),
                    HomePhone: sdk.String("quasi"),
                    ID: sdk.Int64(406120),
                    LastName: sdk.String("Stoltenberg"),
                    MobilePhone: sdk.String("excepturi"),
                    Properties: map[string]string{
                        "nostrum": "sapiente",
                        "quisquam": "saepe",
                        "ea": "impedit",
                        "corporis": "veniam",
                    },
                    WorkPhone: sdk.String("aliquid"),
                    Zipcode: sdk.String("34729"),
                },
                shared.Contact{
                    Deleted: sdk.Bool(false),
                    ExternalID: sdk.String("aspernatur"),
                    ExternalSystem: sdk.String("minima"),
                    ExtraPhone1: sdk.String("eaque"),
                    ExtraPhone2: sdk.String("a"),
                    ExtraPhone3: sdk.String("libero"),
                    FirstName: sdk.String("Adrian"),
                    HomePhone: sdk.String("aut"),
                    ID: sdk.Int64(533466),
                    LastName: sdk.String("Russel"),
                    MobilePhone: sdk.String("aliquam"),
                    Properties: map[string]string{
                        "accusamus": "inventore",
                    },
                    WorkPhone: sdk.String("non"),
                    Zipcode: sdk.String("66824"),
                },
            },
            Name: sdk.String("Vicky Lynch"),
            UseCustomFields: sdk.Bool(false),
        },
        Fields: sdk.String("voluptas"),
    }, operations.CreateContactListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactList != nil {
        // handle response
    }
}
```

## CreateContactListFromFile

Creates a contact list to be used with campaigns through uploading a .csv file. Returns the id of created list

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
    res, err := s.Contacts.CreateContactListFromFile(ctx, operations.CreateContactListFromFileRequestBody{
        File: operations.CreateContactListFromFileRequestBodyFile{
            Content: []byte("libero"),
            File: "quasi",
        },
        Name: sdk.String("Carrie Cole IV"),
        UseCustomFields: sdk.Bool(false),
    }, operations.CreateContactListFromFileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```

## CreateContacts

Creates contacts in CallFire system. Only values from the next list can be used as external system parameter in contact creation: **NATION_BUILDER, SALES_FORCE_CONTACTS, SALES_FORCE_LEADS, SALES_FORCE_REPORTS, ZOHO, MAIL_CHIMP**. See [contacts validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contacts.CreateContacts(ctx, []shared.Contact{
        shared.Contact{
            Deleted: sdk.Bool(false),
            ExternalID: sdk.String("odio"),
            ExternalSystem: sdk.String("eius"),
            ExtraPhone1: sdk.String("esse"),
            ExtraPhone2: sdk.String("esse"),
            ExtraPhone3: sdk.String("rem"),
            FirstName: sdk.String("Marjory"),
            HomePhone: sdk.String("reprehenderit"),
            ID: sdk.Int64(695626),
            LastName: sdk.String("Stehr"),
            MobilePhone: sdk.String("ut"),
            Properties: map[string]string{
                "suscipit": "assumenda",
                "eos": "praesentium",
            },
            WorkPhone: sdk.String("quisquam"),
            Zipcode: sdk.String("06627"),
        },
        shared.Contact{
            Deleted: sdk.Bool(false),
            ExternalID: sdk.String("illum"),
            ExternalSystem: sdk.String("quo"),
            ExtraPhone1: sdk.String("fuga"),
            ExtraPhone2: sdk.String("eius"),
            ExtraPhone3: sdk.String("eos"),
            FirstName: sdk.String("Garfield"),
            HomePhone: sdk.String("ab"),
            ID: sdk.Int64(587600),
            LastName: sdk.String("Altenwerth"),
            MobilePhone: sdk.String("tempora"),
            Properties: map[string]string{
                "ipsam": "aspernatur",
                "sequi": "quo",
                "esse": "recusandae",
                "aperiam": "distinctio",
            },
            WorkPhone: sdk.String("quod"),
            Zipcode: sdk.String("04583"),
        },
    }, operations.CreateContactsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceIDList != nil {
        // handle response
    }
}
```

## DeleteContact

Deletes a contact instance from account

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
    res, err := s.Contacts.DeleteContact(ctx, operations.DeleteContactRequest{
        ID: 488410,
    }, operations.DeleteContactSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteContactList

Deletes a contact list, included contacts will not be deleted.

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
    res, err := s.Contacts.DeleteContactList(ctx, operations.DeleteContactListRequest{
        ID: 577543,
    }, operations.DeleteContactListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDoNotContact

Delete a Do Not Contact (DNC) contact entry.

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
    res, err := s.Contacts.DeleteDoNotContact(ctx, operations.DeleteDoNotContactRequest{
        Number: "commodi",
    }, operations.DeleteDoNotContactSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDoNotContactsBySource

Delete Do Not Contact (DNC) contact entries contained in source.

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
    res, err := s.Contacts.DeleteDoNotContactsBySource(ctx, operations.DeleteDoNotContactsBySourceRequest{
        Source: "sapiente",
    }, operations.DeleteDoNotContactsBySourceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindContactLists

Searches for all contact lists which are available for the current user. Returns a paged list of contact lists

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
    res, err := s.Contacts.FindContactLists(ctx, operations.FindContactListsRequest{
        ContactCount: sdk.Int(174112),
        ExactMatch: sdk.Bool(false),
        Fields: sdk.String("deserunt"),
        Limit: sdk.Int(475289),
        Name: sdk.String("Robyn Keeling"),
        Offset: sdk.Int(159867),
        OrderBy: sdk.String("deleniti"),
    }, operations.FindContactListsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactListPage != nil {
        // handle response
    }
}
```

## FindContacts

Find user's contacts by id, contact list, or on any property name. Returns a paged list of contacts

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
    res, err := s.Contacts.FindContacts(ctx, operations.FindContactsRequest{
        ContactListID: sdk.Int64(143829),
        Fields: sdk.String("fuga"),
        ID: []int64{
            277596,
            539224,
            128860,
        },
        Limit: sdk.Int(325685),
        Number: []string{
            "fugit",
            "sapiente",
        },
        Offset: sdk.Int(159870),
        PropertyName: sdk.String("ratione"),
        PropertyValue: sdk.String("explicabo"),
    }, operations.FindContactsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactPage != nil {
        // handle response
    }
}
```

## FindDoNotContacts

Searches for all Do Not Contact (DNC) objects created by user. These DoNotContact entries only affect calls/texts/campaigns on this account. Returns a paged list of DoNotContact objects

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
    res, err := s.Contacts.FindDoNotContacts(ctx, operations.FindDoNotContactsRequest{
        Call: sdk.Bool(false),
        CampaignID: sdk.Int64(903984),
        Fields: sdk.String("occaecati"),
        InboundCall: sdk.Bool(false),
        InboundText: sdk.Bool(false),
        Limit: sdk.Int(543806),
        Number: []string{
            "esse",
        },
        Offset: sdk.Int(910545),
        Prefix: sdk.String("accusamus"),
        Source: sdk.String("veritatis"),
        Text: sdk.Bool(false),
    }, operations.FindDoNotContactsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoNotContactPage != nil {
        // handle response
    }
}
```

## GetContact

Returns a Contact instance for a given contact id. Deleted contacts can be still retrieved but will be marked as deleted. Deleted contacts will not be shown in search request.

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
    res, err := s.Contacts.GetContact(ctx, operations.GetContactRequest{
        Fields: sdk.String("esse"),
        ID: 800379,
    }, operations.GetContactSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contact != nil {
        // handle response
    }
}
```

## GetContactHistory

Searches for all texts and calls attributed to a contact. Returns a list of calls and texts a contact has been involved with

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
    res, err := s.Contacts.GetContactHistory(ctx, operations.GetContactHistoryRequest{
        Fields: sdk.String("nam"),
        ID: 877131,
        Limit: sdk.Int(399025),
        Offset: sdk.Int(93459),
    }, operations.GetContactHistorySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactHistory != nil {
        // handle response
    }
}
```

## GetContactList

Returns a single ContactList instance for a given contact list id

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
    res, err := s.Contacts.GetContactList(ctx, operations.GetContactListRequest{
        Fields: sdk.String("saepe"),
        ID: 426306,
    }, operations.GetContactListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactList != nil {
        // handle response
    }
}
```

## GetContactListItems

Searches for all entries in a contact list with specified id. Returns a paged list of contact entries

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
    res, err := s.Contacts.GetContactListItems(ctx, operations.GetContactListItemsRequest{
        Fields: sdk.String("harum"),
        ID: 473221,
        Limit: sdk.Int(699622),
        Offset: sdk.Int(580197),
    }, operations.GetContactListItemsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactPage != nil {
        // handle response
    }
}
```

## GetDoNotContact

Get Do Not Contact (DNC) object create by user. This DoNotContact entry only affects calls/texts/campaigns on this account.

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
    res, err := s.Contacts.GetDoNotContact(ctx, operations.GetDoNotContactRequest{
        Number: "minima",
    }, operations.GetDoNotContactSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoNotContact != nil {
        // handle response
    }
}
```

## GetUniversalDoNotContacts

Searches for a UniversalDoNotContact object for a given phone number. Shows whether inbound/outbound actions are allowed for a given number

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
    res, err := s.Contacts.GetUniversalDoNotContacts(ctx, operations.GetUniversalDoNotContactsRequest{
        Fields: sdk.String("distinctio"),
        FromNumber: sdk.String("eligendi"),
        ToNumber: "sit",
    }, operations.GetUniversalDoNotContactsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemListUniversalDoNotContact != nil {
        // handle response
    }
}
```

## RemoveContactListItem

Deletes a single contact from a contact list

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
    res, err := s.Contacts.RemoveContactListItem(ctx, operations.RemoveContactListItemRequest{
        ContactID: 636061,
        ID: 731398,
    }, operations.RemoveContactListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveContactListItems

Deletes contacts from a contact list. List the contact ids in request to delete multiple contacts with one request.

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
    res, err := s.Contacts.RemoveContactListItems(ctx, operations.RemoveContactListItemsRequest{
        ContactID: []int64{
            766964,
        },
        ID: 160538,
    }, operations.RemoveContactListItemsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContact

Updates a single contact instance with id specified. See [contact validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contacts.UpdateContact(ctx, operations.UpdateContactRequest{
        Contact: &shared.Contact{
            Deleted: sdk.Bool(false),
            ExternalID: sdk.String("consequatur"),
            ExternalSystem: sdk.String("minus"),
            ExtraPhone1: sdk.String("quaerat"),
            ExtraPhone2: sdk.String("sapiente"),
            ExtraPhone3: sdk.String("consectetur"),
            FirstName: sdk.String("Jade"),
            HomePhone: sdk.String("blanditiis"),
            ID: sdk.Int64(590984),
            LastName: sdk.String("Wilkinson"),
            MobilePhone: sdk.String("nulla"),
            Properties: map[string]string{
                "esse": "quasi",
                "a": "error",
                "sint": "pariatur",
            },
            WorkPhone: sdk.String("possimus"),
            Zipcode: sdk.String("99801"),
        },
        ID: 94458,
    }, operations.UpdateContactSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContactList

Updates contact list instance.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contacts.UpdateContactList(ctx, operations.UpdateContactListRequest{
        UpdateContactListRequest: &shared.UpdateContactListRequest{
            Name: sdk.String("Shannon Jacobi DVM"),
        },
        ID: 424032,
    }, operations.UpdateContactListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDoNotContact

Update a Do Not Contact (DNC) contact entry. Can toggle whether the DNC is enabled for calls/texts.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contacts.UpdateDoNotContact(ctx, operations.UpdateDoNotContactRequest{
        DoNotContactInput: &shared.DoNotContactInput{
            Call: sdk.Bool(false),
            InboundCall: sdk.Bool(false),
            InboundText: sdk.Bool(false),
            Number: sdk.String("in"),
            Source: sdk.String("eius"),
            Text: sdk.Bool(false),
        },
        Number: "libero",
    }, operations.UpdateDoNotContactSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
