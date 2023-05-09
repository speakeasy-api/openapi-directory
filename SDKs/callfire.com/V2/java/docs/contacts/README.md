# contacts

### Available Operations

* [addContactListItems](#addcontactlistitems) - Add contacts to a contact list
* [addDoNotContacts](#adddonotcontacts) - Add do not contact (dnc) numbers
* [createContactList](#createcontactlist) - Create contact lists
* [createContactListFromFile](#createcontactlistfromfile) - Create contact list from file
* [createContacts](#createcontacts) - Create contacts
* [deleteContact](#deletecontact) - Delete a contact
* [deleteContactList](#deletecontactlist) - Delete a contact list
* [deleteDoNotContact](#deletedonotcontact) - Delete do not contact (dnc) number. If number contains commas treat as list of numbers
* [deleteDoNotContactsBySource](#deletedonotcontactsbysource) - Delete do not contact (dnc) numbers contained in source.
* [findContactLists](#findcontactlists) - Find contact lists
* [findContacts](#findcontacts) - Find contacts
* [findDoNotContacts](#finddonotcontacts) - Find do not contact (dnc) items
* [getContact](#getcontact) - Find a specific contact
* [getContactHistory](#getcontacthistory) - Find a contact's history
* [getContactList](#getcontactlist) - Find a specific contact list
* [getContactListItems](#getcontactlistitems) - Find contacts in a contact list
* [getDoNotContact](#getdonotcontact) - Get do not contact (dnc)
* [getUniversalDoNotContacts](#getuniversaldonotcontacts) - Find universal do not contacts (udnc) associated with toNumber
* [removeContactListItem](#removecontactlistitem) - Delete a contact from a contact list
* [removeContactListItems](#removecontactlistitems) - Delete contacts from a contact list
* [updateContact](#updatecontact) - Update a contact
* [updateContactList](#updatecontactlist) - Update a contact list
* [updateDoNotContact](#updatedonotcontact) - Update an individual do not contact (dnc) number

## addContactListItems

Adds contacts to a contact list. Available contact sources are: list of the contact entities, list of ids of existing contacts in user's account, list of phone numbers in E.164 format (11-digits)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddContactListItemsRequest;
import org.openapis.openapi.models.operations.AddContactListItemsResponse;
import org.openapis.openapi.models.operations.AddContactListItemsSecurity;
import org.openapis.openapi.models.shared.AddContactListContactsRequest;
import org.openapis.openapi.models.shared.Contact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddContactListItemsRequest req = new AddContactListItemsRequest(703495L) {{
                addContactListContactsRequest = new AddContactListContactsRequest() {{
                    contactIds = new Long[]{{
                        add(181631L),
                        add(63955L),
                        add(512393L),
                    }};
                    contactNumbers = new String[]{{
                        add("occaecati"),
                        add("voluptatibus"),
                    }};
                    contactNumbersField = "quisquam";
                    contacts = new org.openapis.openapi.models.shared.Contact[]{{
                        add(new Contact() {{
                            deleted = false;
                            externalId = "omnis";
                            externalSystem = "quis";
                            extraPhone1 = "ipsum";
                            extraPhone2 = "delectus";
                            extraPhone3 = "voluptate";
                            firstName = "Dario";
                            homePhone = "vero";
                            id = 949319L;
                            lastName = "Kulas";
                            mobilePhone = "hic";
                            properties = new java.util.HashMap<String, String>() {{
                                put("quod", "odio");
                                put("similique", "facilis");
                                put("vero", "ducimus");
                            }};
                            workPhone = "dolore";
                            zipcode = "81670-9381";
                        }}),
                        add(new Contact() {{
                            deleted = false;
                            externalId = "porro";
                            externalSystem = "maiores";
                            extraPhone1 = "doloribus";
                            extraPhone2 = "iusto";
                            extraPhone3 = "eligendi";
                            firstName = "Jess";
                            homePhone = "alias";
                            id = 639473L;
                            lastName = "Glover";
                            mobilePhone = "ipsam";
                            properties = new java.util.HashMap<String, String>() {{
                                put("aspernatur", "vel");
                                put("possimus", "magnam");
                            }};
                            workPhone = "ratione";
                            zipcode = "51290";
                        }}),
                        add(new Contact() {{
                            deleted = false;
                            externalId = "ex";
                            externalSystem = "nulla";
                            extraPhone1 = "excepturi";
                            extraPhone2 = "voluptatibus";
                            extraPhone3 = "nostrum";
                            firstName = "Victor";
                            homePhone = "quisquam";
                            id = 906556L;
                            lastName = "Jenkins";
                            mobilePhone = "impedit";
                            properties = new java.util.HashMap<String, String>() {{
                                put("veniam", "aliquid");
                                put("inventore", "magnam");
                            }};
                            workPhone = "ea";
                            zipcode = "29130-9700";
                        }}),
                        add(new Contact() {{
                            deleted = false;
                            externalId = "deleniti";
                            externalSystem = "impedit";
                            extraPhone1 = "aliquam";
                            extraPhone2 = "fugit";
                            extraPhone3 = "accusamus";
                            firstName = "Arjun";
                            homePhone = "non";
                            id = 89603L;
                            lastName = "Pagac";
                            mobilePhone = "laborum";
                            properties = new java.util.HashMap<String, String>() {{
                                put("velit", "eum");
                                put("autem", "nobis");
                                put("quas", "assumenda");
                                put("nulla", "voluptas");
                            }};
                            workPhone = "libero";
                            zipcode = "22150";
                        }}),
                    }};
                    useCustomFields = false;
                }};;
            }};            

            AddContactListItemsResponse res = sdk.contacts.addContactListItems(req, new AddContactListItemsSecurity("molestiae", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addDoNotContacts

Add or update a list of Do Not Contact (DNC) contact entries. Can toggle whether the DNCs are enabled for calls/texts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDoNotContactsResponse;
import org.openapis.openapi.models.operations.AddDoNotContactsSecurity;
import org.openapis.openapi.models.shared.AddDoNotContactRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AddDoNotContactRequest req = new AddDoNotContactRequest() {{
                call = false;
                inboundCall = false;
                inboundText = false;
                numbers = new String[]{{
                    add("eius"),
                    add("esse"),
                }};
                source = "esse";
                text = false;
            }};            

            AddDoNotContactsResponse res = sdk.contacts.addDoNotContacts(req, new AddDoNotContactsSecurity("rem", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContactList

Creates a contact list for use with campaigns using 1 of 3 inputs. A List of Contact objects, a list of String E.164 numbers, or a list of CallFire contactIds can be used as the data source for the created contact list. After contact list is added into the CallFire system, contact lists goes through seven system safeguards that check the accuracy and consistency of the data. For example, our system checks that contact number is formatted correctly, is valid, is not duplicated in another contact list, or is not added on a specific DNC list. You can configure to keep/merge or remove contacts which do not complies these rules. If contacts were not added to a contact list after the validation, this means the data needs to be properly formatted and corrected before calling this API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactListRequest;
import org.openapis.openapi.models.operations.CreateContactListResponse;
import org.openapis.openapi.models.operations.CreateContactListSecurity;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.CreateContactListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateContactListRequest req = new CreateContactListRequest() {{
                createContactListRequest = new CreateContactListRequest() {{
                    contactIds = new Long[]{{
                        add(695626L),
                        add(852635L),
                    }};
                    contactNumbers = new String[]{{
                        add("eum"),
                        add("suscipit"),
                    }};
                    contactNumbersField = "assumenda";
                    contacts = new org.openapis.openapi.models.shared.Contact[]{{
                        add(new Contact() {{
                            deleted = false;
                            externalId = "praesentium";
                            externalSystem = "quisquam";
                            extraPhone1 = "veritatis";
                            extraPhone2 = "ipsa";
                            extraPhone3 = "id";
                            firstName = "Mavis";
                            homePhone = "neque";
                            id = 778696L;
                            lastName = "Stamm";
                            mobilePhone = "quo";
                            properties = new java.util.HashMap<String, String>() {{
                                put("eius", "eos");
                                put("voluptas", "ab");
                                put("cupiditate", "consequatur");
                            }};
                            workPhone = "tempora";
                            zipcode = "31174-9077";
                        }}),
                    }};
                    name = "Debra Kovacek";
                    useCustomFields = false;
                }};;
                fields = "aliquam";
            }};            

            CreateContactListResponse res = sdk.contacts.createContactList(req, new CreateContactListSecurity("odio", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contactList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContactListFromFile

Creates a contact list to be used with campaigns through uploading a .csv file. Returns the id of created list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactListFromFileRequestBody;
import org.openapis.openapi.models.operations.CreateContactListFromFileRequestBodyFile;
import org.openapis.openapi.models.operations.CreateContactListFromFileResponse;
import org.openapis.openapi.models.operations.CreateContactListFromFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateContactListFromFileRequestBody req = new CreateContactListFromFileRequestBody(                new CreateContactListFromFileRequestBodyFile("commodi".getBytes(), "sapiente");) {{
                name = "Miss Rosie Krajcik";
                useCustomFields = false;
            }};            

            CreateContactListFromFileResponse res = sdk.contacts.createContactListFromFile(req, new CreateContactListFromFileSecurity("quas", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContacts

Creates contacts in CallFire system. Only values from the next list can be used as external system parameter in contact creation: **NATION_BUILDER, SALES_FORCE_CONTACTS, SALES_FORCE_LEADS, SALES_FORCE_REPORTS, ZOHO, MAIL_CHIMP**. See [contacts validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactsResponse;
import org.openapis.openapi.models.operations.CreateContactsSecurity;
import org.openapis.openapi.models.shared.Contact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.Contact[]{{
                add(new Contact() {{
                    deleted = false;
                    externalId = "deleniti";
                    externalSystem = "fugit";
                    extraPhone1 = "fuga";
                    extraPhone2 = "mollitia";
                    extraPhone3 = "incidunt";
                    firstName = "Kameron";
                    homePhone = "explicabo";
                    id = 325685L;
                    lastName = "Huel";
                    mobilePhone = "fugit";
                    properties = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "ratione");
                        put("explicabo", "saepe");
                        put("occaecati", "atque");
                        put("et", "esse");
                    }};
                    workPhone = "eveniet";
                    zipcode = "04878-3094";
                }}),
            }}            

            CreateContactsResponse res = sdk.contacts.createContacts(req, new CreateContactsSecurity("harum", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceIdList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContact

Deletes a contact instance from account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContactRequest;
import org.openapis.openapi.models.operations.DeleteContactResponse;
import org.openapis.openapi.models.operations.DeleteContactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContactRequest req = new DeleteContactRequest(699622L);            

            DeleteContactResponse res = sdk.contacts.deleteContact(req, new DeleteContactSecurity("occaecati", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContactList

Deletes a contact list, included contacts will not be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContactListRequest;
import org.openapis.openapi.models.operations.DeleteContactListResponse;
import org.openapis.openapi.models.operations.DeleteContactListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContactListRequest req = new DeleteContactListRequest(716244L);            

            DeleteContactListResponse res = sdk.contacts.deleteContactList(req, new DeleteContactListSecurity("eligendi", "sit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDoNotContact

Delete a Do Not Contact (DNC) contact entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDoNotContactRequest;
import org.openapis.openapi.models.operations.DeleteDoNotContactResponse;
import org.openapis.openapi.models.operations.DeleteDoNotContactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDoNotContactRequest req = new DeleteDoNotContactRequest("culpa");            

            DeleteDoNotContactResponse res = sdk.contacts.deleteDoNotContact(req, new DeleteDoNotContactSecurity("tempore", "adipisci") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDoNotContactsBySource

Delete Do Not Contact (DNC) contact entries contained in source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDoNotContactsBySourceRequest;
import org.openapis.openapi.models.operations.DeleteDoNotContactsBySourceResponse;
import org.openapis.openapi.models.operations.DeleteDoNotContactsBySourceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDoNotContactsBySourceRequest req = new DeleteDoNotContactsBySourceRequest("cumque");            

            DeleteDoNotContactsBySourceResponse res = sdk.contacts.deleteDoNotContactsBySource(req, new DeleteDoNotContactsBySourceSecurity("consequuntur", "consequatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findContactLists

Searches for all contact lists which are available for the current user. Returns a paged list of contact lists

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindContactListsRequest;
import org.openapis.openapi.models.operations.FindContactListsResponse;
import org.openapis.openapi.models.operations.FindContactListsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindContactListsRequest req = new FindContactListsRequest() {{
                contactCount = 796392;
                exactMatch = false;
                fields = "quaerat";
                limit = 959167;
                name = "Joy Labadie";
                offset = 857723;
                orderBy = "quas";
            }};            

            FindContactListsResponse res = sdk.contacts.findContactLists(req, new FindContactListsSecurity("esse", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contactListPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findContacts

Find user's contacts by id, contact list, or on any property name. Returns a paged list of contacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindContactsRequest;
import org.openapis.openapi.models.operations.FindContactsResponse;
import org.openapis.openapi.models.operations.FindContactsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindContactsRequest req = new FindContactsRequest() {{
                contactListId = 951875L;
                fields = "error";
                id = new Long[]{{
                    add(863023L),
                    add(820767L),
                    add(157632L),
                }};
                limit = 908844;
                number = new String[]{{
                    add("facere"),
                    add("veritatis"),
                    add("consequuntur"),
                    add("quasi"),
                }};
                offset = 628899;
                propertyName = "culpa";
                propertyValue = "aliquid";
            }};            

            FindContactsResponse res = sdk.contacts.findContacts(req, new FindContactsSecurity("tenetur", "quae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contactPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findDoNotContacts

Searches for all Do Not Contact (DNC) objects created by user. These DoNotContact entries only affect calls/texts/campaigns on this account. Returns a paged list of DoNotContact objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindDoNotContactsRequest;
import org.openapis.openapi.models.operations.FindDoNotContactsResponse;
import org.openapis.openapi.models.operations.FindDoNotContactsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindDoNotContactsRequest req = new FindDoNotContactsRequest() {{
                call = false;
                campaignId = 936747L;
                fields = "vel";
                inboundCall = false;
                inboundText = false;
                limit = 447378;
                number = new String[]{{
                    add("libero"),
                    add("illum"),
                }};
                offset = 742238;
                prefix = "accusantium";
                source = "aliquam";
                text = false;
            }};            

            FindDoNotContactsResponse res = sdk.contacts.findDoNotContacts(req, new FindDoNotContactsSecurity("sapiente", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.doNotContactPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContact

Returns a Contact instance for a given contact id. Deleted contacts can be still retrieved but will be marked as deleted. Deleted contacts will not be shown in search request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactRequest;
import org.openapis.openapi.models.operations.GetContactResponse;
import org.openapis.openapi.models.operations.GetContactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContactRequest req = new GetContactRequest(355369L) {{
                fields = "reprehenderit";
            }};            

            GetContactResponse res = sdk.contacts.getContact(req, new GetContactSecurity("ullam", "nisi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactHistory

Searches for all texts and calls attributed to a contact. Returns a list of calls and texts a contact has been involved with

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactHistoryRequest;
import org.openapis.openapi.models.operations.GetContactHistoryResponse;
import org.openapis.openapi.models.operations.GetContactHistorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContactHistoryRequest req = new GetContactHistoryRequest(16328L) {{
                fields = "voluptatum";
                limit = 185232;
                offset = 845358;
            }};            

            GetContactHistoryResponse res = sdk.contacts.getContactHistory(req, new GetContactHistorySecurity("ex", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contactHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactList

Returns a single ContactList instance for a given contact list id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactListRequest;
import org.openapis.openapi.models.operations.GetContactListResponse;
import org.openapis.openapi.models.operations.GetContactListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContactListRequest req = new GetContactListRequest(929292L) {{
                fields = "dolorum";
            }};            

            GetContactListResponse res = sdk.contacts.getContactList(req, new GetContactListSecurity("architecto", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contactList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactListItems

Searches for all entries in a contact list with specified id. Returns a paged list of contact entries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactListItemsRequest;
import org.openapis.openapi.models.operations.GetContactListItemsResponse;
import org.openapis.openapi.models.operations.GetContactListItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContactListItemsRequest req = new GetContactListItemsRequest(945302L) {{
                fields = "quasi";
                limit = 869489;
                offset = 92027;
            }};            

            GetContactListItemsResponse res = sdk.contacts.getContactListItems(req, new GetContactListItemsSecurity("voluptate", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contactPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDoNotContact

Get Do Not Contact (DNC) object create by user. This DoNotContact entry only affects calls/texts/campaigns on this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDoNotContactRequest;
import org.openapis.openapi.models.operations.GetDoNotContactResponse;
import org.openapis.openapi.models.operations.GetDoNotContactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDoNotContactRequest req = new GetDoNotContactRequest("minima");            

            GetDoNotContactResponse res = sdk.contacts.getDoNotContact(req, new GetDoNotContactSecurity("veritatis", "consectetur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.doNotContact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUniversalDoNotContacts

Searches for a UniversalDoNotContact object for a given phone number. Shows whether inbound/outbound actions are allowed for a given number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUniversalDoNotContactsRequest;
import org.openapis.openapi.models.operations.GetUniversalDoNotContactsResponse;
import org.openapis.openapi.models.operations.GetUniversalDoNotContactsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUniversalDoNotContactsRequest req = new GetUniversalDoNotContactsRequest("adipisci") {{
                fields = "iste";
                fromNumber = "temporibus";
            }};            

            GetUniversalDoNotContactsResponse res = sdk.contacts.getUniversalDoNotContacts(req, new GetUniversalDoNotContactsSecurity("accusantium", "rem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.itemListUniversalDoNotContact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeContactListItem

Deletes a single contact from a contact list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveContactListItemRequest;
import org.openapis.openapi.models.operations.RemoveContactListItemResponse;
import org.openapis.openapi.models.operations.RemoveContactListItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveContactListItemRequest req = new RemoveContactListItemRequest(15606L, 513075L);            

            RemoveContactListItemResponse res = sdk.contacts.removeContactListItem(req, new RemoveContactListItemSecurity("eum", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeContactListItems

Deletes contacts from a contact list. List the contact ids in request to delete multiple contacts with one request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveContactListItemsRequest;
import org.openapis.openapi.models.operations.RemoveContactListItemsResponse;
import org.openapis.openapi.models.operations.RemoveContactListItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveContactListItemsRequest req = new RemoveContactListItemsRequest(68074L) {{
                contactId = new Long[]{{
                    add(251941L),
                    add(32465L),
                    add(221161L),
                }};
            }};            

            RemoveContactListItemsResponse res = sdk.contacts.removeContactListItems(req, new RemoveContactListItemsSecurity("occaecati", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContact

Updates a single contact instance with id specified. See [contact validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactRequest;
import org.openapis.openapi.models.operations.UpdateContactResponse;
import org.openapis.openapi.models.operations.UpdateContactSecurity;
import org.openapis.openapi.models.shared.Contact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateContactRequest req = new UpdateContactRequest(771089L) {{
                contact = new Contact() {{
                    deleted = false;
                    externalId = "explicabo";
                    externalSystem = "voluptas";
                    extraPhone1 = "aut";
                    extraPhone2 = "dignissimos";
                    extraPhone3 = "dicta";
                    firstName = "William";
                    homePhone = "natus";
                    id = 244651L;
                    lastName = "Wiza";
                    mobilePhone = "voluptas";
                    properties = new java.util.HashMap<String, String>() {{
                        put("aperiam", "ea");
                        put("quaerat", "consequuntur");
                        put("repellendus", "officia");
                        put("maxime", "dignissimos");
                    }};
                    workPhone = "officia";
                    zipcode = "30378-2026";
                }};;
            }};            

            UpdateContactResponse res = sdk.contacts.updateContact(req, new UpdateContactSecurity("id", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContactList

Updates contact list instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactListRequest;
import org.openapis.openapi.models.operations.UpdateContactListResponse;
import org.openapis.openapi.models.operations.UpdateContactListSecurity;
import org.openapis.openapi.models.shared.UpdateContactListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateContactListRequest req = new UpdateContactListRequest(246063L) {{
                updateContactListRequest = new UpdateContactListRequest() {{
                    name = "Rex Walter";
                }};;
            }};            

            UpdateContactListResponse res = sdk.contacts.updateContactList(req, new UpdateContactListSecurity("vel", "ducimus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDoNotContact

Update a Do Not Contact (DNC) contact entry. Can toggle whether the DNC is enabled for calls/texts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDoNotContactRequest;
import org.openapis.openapi.models.operations.UpdateDoNotContactResponse;
import org.openapis.openapi.models.operations.UpdateDoNotContactSecurity;
import org.openapis.openapi.models.shared.DoNotContactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDoNotContactRequest req = new UpdateDoNotContactRequest("quos") {{
                doNotContactInput = new DoNotContactInput() {{
                    call = false;
                    inboundCall = false;
                    inboundText = false;
                    number = "vel";
                    source = "labore";
                    text = false;
                }};;
            }};            

            UpdateDoNotContactResponse res = sdk.contacts.updateDoNotContact(req, new UpdateDoNotContactSecurity("possimus", "facilis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
