# Form

## Overview

The forms APIs allow you to manage the inputs and data submitted through receive folder forms.

### Available Operations

* [DeleteFormMessageByID](#deleteformmessagebyid) - Delete a receive form submission
* [GetFormByID](#getformbyid) - Get receive folder form by Id
* [GetFormByShareHash](#getformbysharehash) - Get receive folder form settings
* [GetFormEntries](#getformentries) - Get form data entries for a receive
* [UpdateFormByID](#updateformbyid) - Updates a form with given parameters

## DeleteFormMessageByID

Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this. 

**Notes**:

- Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete
- You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation
- It is not possible to un-delete data that is removed in this way


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
    res, err := s.Form.DeleteFormMessageByID(ctx, operations.DeleteFormMessageByIDRequest{
        EvAccessToken: "doloribus",
        EvAPIKey: "sapiente",
        ID: 102044,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## GetFormByID

Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings. 

Use the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder. 

**Note**

If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead. 


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
    res, err := s.Form.GetFormByID(ctx, operations.GetFormByIDRequest{
        EvAccessToken: "mollitia",
        EvAPIKey: "dolorem",
        ID: 635059,
        Include: sdk.String("share"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormResponse != nil {
        // handle response
    }
}
```

## GetFormByShareHash

Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.

Use the `include` parameter (with the value **share**) to also get the details of the associated receive folder.

**Note**

- If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead. 


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
    res, err := s.Form.GetFormByShareHash(ctx, operations.GetFormByShareHashRequest{
        EvAccessToken: "consequuntur",
        EvAPIKey: "repellat",
        Include: operations.GetFormByShareHashIncludeEnumShare.ToPointer(),
        ShareHash: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormResponse != nil {
        // handle response
    }
}
```

## GetFormEntries

Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.


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
    res, err := s.Form.GetFormEntries(ctx, operations.GetFormEntriesRequest{
        EvAccessToken: "occaecati",
        EvAPIKey: "numquam",
        ID: 414369,
        Limit: sdk.Int64(466311),
        Offset: sdk.Int64(474697),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormEntryResponse != nil {
        // handle response
    }
}
```

## UpdateFormByID

Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files. 

**Notes**

*This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.                          

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
    res, err := s.Form.UpdateFormByID(ctx, operations.UpdateFormByIDRequest{
        RequestBody: &operations.UpdateFormByIDUpdateFormByIDRequestBody{
            CSSStyles: sdk.String("#ev-widget-form {
          /*Change this to change the font. Remove to use your website font*/
          font-family: Helvetica Neue, sans-serif;
          /*Makes the form the same width as your website */
          margin: 0 -2%;
        }
        #ev-widget-form label{
          width: 100%;
        }
        #ev-widget-form input,
        #ev-widget-form textarea {
          /*Changes color and thickness of borders on form elements */
          border: 2px solid #ccc;
          /*Changes spacing inside the form elements (top/bottom and left/right */
          padding: 5px 5px;
          /* Changes how far away the inputs are from their label */
          margin-top: 2px;
        }
        
        #ev-widget-form input:focus,
        #ev-widget-form textarea:focus {
          /*Changes the color of the form elements when they are clicked in to */
          border: 2px solid #b2cf88;
          /*Removes glow effect from form elements that are clicked in to */
          outline: none;
        }
        
        #ev-widget-form label {
          font-size: 14px;
          font-weight: bold;
          /*Changes color of labels */
          color: #232323
        }
        
        #ev-widget-form .ev-form-element-description {
          /*Changes size of descriptions */
          font-size: 12px;
          /*Changes color of descriptions */
          color: #777;
          /* Changes how far away the descriptions are from their input */
          margin-top: 2px;
        }
        
        #ev-widget-form textarea {
          /* Makes textareas (multiline inputs) a taller. */
          min-height: 90px;
        }     "),
            Elements: []UpdateFormByIDUpdateFormByIDRequestBodyElements{
                operations.UpdateFormByIDUpdateFormByIDRequestBodyElements{
                    ID: sdk.Int64(123),
                    Name: sdk.String("Your name"),
                    Order: sdk.Int64(623510),
                    Settings: &operations.UpdateFormByIDUpdateFormByIDRequestBodyElementsSettings{
                        IsRequired: sdk.Bool(true),
                        SenderEmail: sdk.Bool(false),
                        UseAsFolderName: sdk.Bool(false),
                    },
                    Type: operations.UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnumName.ToPointer(),
                },
            },
            FormDescription: sdk.String("Send your files"),
            SubmitButtonText: sdk.String("Send Files"),
            SuccessMessage: sdk.String("Your files were uploaded"),
        },
        EvAccessToken: "quia",
        EvAPIKey: "quis",
        ID: 110375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormResponse != nil {
        // handle response
    }
}
```
