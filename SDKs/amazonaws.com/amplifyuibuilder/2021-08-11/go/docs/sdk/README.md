# SDK

## Overview

<p>The Amplify UI Builder API provides a programmatic interface for creating and configuring user interface (UI) component libraries and themes for use in your Amplify applications. You can then connect these UI components to an application's backend Amazon Web Services resources.</p> <p>You can also use the Amplify Studio visual designer to create UI components and model data for an app. For more information, see <a href="https://docs.amplify.aws/console/adminui/intro">Introduction</a> in the <i>Amplify Docs</i>.</p> <p>The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework</a>. For more information about deploying an Amplify application to Amazon Web Services, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/amplifyuibuilder/>
### Available Operations

* [CreateComponent](#createcomponent) - Creates a new component for an Amplify app.
* [CreateForm](#createform) - Creates a new form for an Amplify app.
* [CreateTheme](#createtheme) - Creates a theme to apply to the components in an Amplify app.
* [DeleteComponent](#deletecomponent) - Deletes a component from an Amplify app.
* [DeleteForm](#deleteform) - Deletes a form from an Amplify app.
* [DeleteTheme](#deletetheme) - Deletes a theme from an Amplify app.
* [ExchangeCodeForToken](#exchangecodefortoken) - Exchanges an access code for a token.
* [ExportComponents](#exportcomponents) - Exports component configurations to code that is ready to integrate into an Amplify app.
* [ExportForms](#exportforms) - Exports form configurations to code that is ready to integrate into an Amplify app.
* [ExportThemes](#exportthemes) - Exports theme configurations to code that is ready to integrate into an Amplify app.
* [GetComponent](#getcomponent) - Returns an existing component for an Amplify app.
* [GetForm](#getform) - Returns an existing form for an Amplify app.
* [GetMetadata](#getmetadata) - Returns existing metadata for an Amplify app.
* [GetTheme](#gettheme) - Returns an existing theme for an Amplify app.
* [ListComponents](#listcomponents) - Retrieves a list of components for a specified Amplify app and backend environment.
* [ListForms](#listforms) - Retrieves a list of forms for a specified Amplify app and backend environment.
* [ListThemes](#listthemes) - Retrieves a list of themes for a specified Amplify app and backend environment.
* [PutMetadataFlag](#putmetadataflag) - Stores the metadata information about a feature on a form.
* [RefreshToken](#refreshtoken) - Refreshes a previously issued access token that might have expired.
* [UpdateComponent](#updatecomponent) - Updates an existing component.
* [UpdateForm](#updateform) - Updates an existing form.
* [UpdateTheme](#updatetheme) - Updates an existing theme.

## CreateComponent

Creates a new component for an Amplify app.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateComponent(ctx, operations.CreateComponentRequest{
        RequestBody: operations.CreateComponentRequestBody{
            ComponentToCreate: operations.CreateComponentRequestBodyComponentToCreate{
                BindingProperties: map[string]shared.ComponentBindingPropertiesValue{
                    "facilis": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("ipsum"),
                            DefaultValue: sdk.String("ad"),
                            Field: sdk.String("voluptatibus"),
                            Key: sdk.String("voluptatibus"),
                            Model: sdk.String("consequuntur"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("rerum"),
                                    Operand: sdk.String("eos"),
                                    OperandType: sdk.String("reprehenderit"),
                                    Operator: sdk.String("nostrum"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("est"),
                                    Operand: sdk.String("rem"),
                                    OperandType: sdk.String("eligendi"),
                                    Operator: sdk.String("fugiat"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("ducimus"),
                                    Operand: sdk.String("dolor"),
                                    OperandType: sdk.String("dicta"),
                                    Operator: sdk.String("error"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("dignissimos"),
                                    Operand: sdk.String("esse"),
                                    OperandType: sdk.String("fugiat"),
                                    Operator: sdk.String("ad"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("enim"),
                            UserAttribute: sdk.String("delectus"),
                        },
                        DefaultValue: sdk.String("iusto"),
                        Type: sdk.String("dignissimos"),
                    },
                    "libero": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("illo"),
                            DefaultValue: sdk.String("ab"),
                            Field: sdk.String("incidunt"),
                            Key: sdk.String("accusamus"),
                            Model: sdk.String("saepe"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("eos"),
                                    Operand: sdk.String("reiciendis"),
                                    OperandType: sdk.String("earum"),
                                    Operator: sdk.String("reprehenderit"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("repellat"),
                                    Operand: sdk.String("quisquam"),
                                    OperandType: sdk.String("sequi"),
                                    Operator: sdk.String("nihil"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("labore"),
                                    Operand: sdk.String("assumenda"),
                                    OperandType: sdk.String("aliquam"),
                                    Operator: sdk.String("quisquam"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("laudantium"),
                            UserAttribute: sdk.String("repudiandae"),
                        },
                        DefaultValue: sdk.String("consequatur"),
                        Type: sdk.String("maxime"),
                    },
                    "aspernatur": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("nam"),
                            DefaultValue: sdk.String("expedita"),
                            Field: sdk.String("quas"),
                            Key: sdk.String("provident"),
                            Model: sdk.String("repudiandae"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("corporis"),
                                    Operand: sdk.String("vero"),
                                    OperandType: sdk.String("similique"),
                                    Operator: sdk.String("repellendus"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("commodi"),
                                    Operand: sdk.String("impedit"),
                                    OperandType: sdk.String("commodi"),
                                    Operator: sdk.String("aut"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("quae"),
                                    Operand: sdk.String("amet"),
                                    OperandType: sdk.String("illum"),
                                    Operator: sdk.String("praesentium"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("cum"),
                            UserAttribute: sdk.String("amet"),
                        },
                        DefaultValue: sdk.String("quasi"),
                        Type: sdk.String("dicta"),
                    },
                    "laudantium": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("doloremque"),
                            DefaultValue: sdk.String("earum"),
                            Field: sdk.String("iusto"),
                            Key: sdk.String("amet"),
                            Model: sdk.String("provident"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("provident"),
                                    Operand: sdk.String("repudiandae"),
                                    OperandType: sdk.String("consequatur"),
                                    Operator: sdk.String("nemo"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("facilis"),
                                    Operand: sdk.String("corrupti"),
                                    OperandType: sdk.String("aperiam"),
                                    Operator: sdk.String("sint"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("totam"),
                                    Operand: sdk.String("dicta"),
                                    OperandType: sdk.String("voluptatem"),
                                    Operator: sdk.String("velit"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("sunt"),
                            UserAttribute: sdk.String("a"),
                        },
                        DefaultValue: sdk.String("dolor"),
                        Type: sdk.String("occaecati"),
                    },
                },
                Children: []shared.ComponentChild{
                    shared.ComponentChild{
                        Children: []shared.ComponentChild{
                            shared.ComponentChild{},
                        },
                        ComponentType: "at",
                        Events: map[string]shared.ComponentEvent{
                            "minus": shared.ComponentEvent{
                                Action: sdk.String("esse"),
                                BindingEvent: sdk.String("voluptatem"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("perferendis"),
                                            Property: "rerum",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "aperiam": shared.FormBindingElement{
                                                Element: "dignissimos",
                                                Property: "repellat",
                                            },
                                            "velit": shared.FormBindingElement{
                                                Element: "porro",
                                                Property: "provident",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("consectetur"),
                                            Property: "eligendi",
                                        },
                                        ComponentName: sdk.String("dignissimos"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("soluta"),
                                            Operand: sdk.String("natus"),
                                            OperandType: sdk.String("temporibus"),
                                            Operator: sdk.String("officia"),
                                            Property: sdk.String("amet"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("tenetur"),
                                        Event: sdk.String("aspernatur"),
                                        ImportedValue: sdk.String("quo"),
                                        Model: sdk.String("itaque"),
                                        Property: sdk.String("illum"),
                                        Type: sdk.String("laborum"),
                                        UserAttribute: sdk.String("dignissimos"),
                                        Value: sdk.String("vero"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "consectetur": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("repellat"),
                                                Property: "explicabo",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "exercitationem": shared.FormBindingElement{
                                                    Element: "nihil",
                                                    Property: "non",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("ab"),
                                                Property: "illo",
                                            },
                                            ComponentName: sdk.String("hic"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("delectus"),
                                                Operand: sdk.String("non"),
                                                OperandType: sdk.String("distinctio"),
                                                Operator: sdk.String("in"),
                                                Property: sdk.String("exercitationem"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("labore"),
                                            Event: sdk.String("numquam"),
                                            ImportedValue: sdk.String("repudiandae"),
                                            Model: sdk.String("modi"),
                                            Property: sdk.String("in"),
                                            Type: sdk.String("explicabo"),
                                            UserAttribute: sdk.String("accusamus"),
                                            Value: sdk.String("rem"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aperiam"),
                                            Property: "odit",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "enim": shared.FormBindingElement{
                                                Element: "voluptate",
                                                Property: "similique",
                                            },
                                            "minima": shared.FormBindingElement{
                                                Element: "libero",
                                                Property: "magnam",
                                            },
                                            "sit": shared.FormBindingElement{
                                                Element: "modi",
                                                Property: "eum",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nesciunt"),
                                            Property: "mollitia",
                                        },
                                        ComponentName: sdk.String("dignissimos"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("nostrum"),
                                            Operand: sdk.String("molestiae"),
                                            OperandType: sdk.String("veniam"),
                                            Operator: sdk.String("reiciendis"),
                                            Property: sdk.String("ab"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("modi"),
                                        Event: sdk.String("aut"),
                                        ImportedValue: sdk.String("aut"),
                                        Model: sdk.String("eveniet"),
                                        Property: sdk.String("odio"),
                                        Type: sdk.String("commodi"),
                                        UserAttribute: sdk.String("numquam"),
                                        Value: sdk.String("dolorum"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("possimus"),
                                            Property: "voluptate",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "nesciunt": shared.FormBindingElement{
                                                Element: "quaerat",
                                                Property: "itaque",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("minus"),
                                            Property: "sunt",
                                        },
                                        ComponentName: sdk.String("distinctio"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("quas"),
                                            Operand: sdk.String("et"),
                                            OperandType: sdk.String("facilis"),
                                            Operator: sdk.String("amet"),
                                            Property: sdk.String("autem"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("fuga"),
                                        Event: sdk.String("alias"),
                                        ImportedValue: sdk.String("rem"),
                                        Model: sdk.String("aut"),
                                        Property: sdk.String("quos"),
                                        Type: sdk.String("laudantium"),
                                        UserAttribute: sdk.String("repellendus"),
                                        Value: sdk.String("veritatis"),
                                    },
                                    Model: sdk.String("quae"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "eaque",
                                        Property: "saepe",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("delectus"),
                                                Property: "mollitia",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "officia": shared.FormBindingElement{
                                                    Element: "sed",
                                                    Property: "voluptatem",
                                                },
                                                "alias": shared.FormBindingElement{
                                                    Element: "eveniet",
                                                    Property: "hic",
                                                },
                                                "voluptatem": shared.FormBindingElement{
                                                    Element: "incidunt",
                                                    Property: "qui",
                                                },
                                                "qui": shared.FormBindingElement{
                                                    Element: "necessitatibus",
                                                    Property: "harum",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("explicabo"),
                                                Property: "beatae",
                                            },
                                            ComponentName: sdk.String("aliquid"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("optio"),
                                                Operand: sdk.String("voluptatibus"),
                                                OperandType: sdk.String("molestias"),
                                                Operator: sdk.String("officia"),
                                                Property: sdk.String("libero"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("totam"),
                                            Event: sdk.String("sequi"),
                                            ImportedValue: sdk.String("aliquid"),
                                            Model: sdk.String("ea"),
                                            Property: sdk.String("impedit"),
                                            Type: sdk.String("ducimus"),
                                            UserAttribute: sdk.String("odit"),
                                            Value: sdk.String("velit"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("reiciendis"),
                                            Property: "repellat",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "laborum": shared.FormBindingElement{
                                                Element: "natus",
                                                Property: "accusamus",
                                            },
                                            "doloremque": shared.FormBindingElement{
                                                Element: "nisi",
                                                Property: "rerum",
                                            },
                                            "recusandae": shared.FormBindingElement{
                                                Element: "voluptates",
                                                Property: "non",
                                            },
                                            "rem": shared.FormBindingElement{
                                                Element: "quia",
                                                Property: "ullam",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quisquam"),
                                            Property: "dicta",
                                        },
                                        ComponentName: sdk.String("voluptatibus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("quae"),
                                            Operand: sdk.String("officiis"),
                                            OperandType: sdk.String("architecto"),
                                            Operator: sdk.String("architecto"),
                                            Property: sdk.String("enim"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("optio"),
                                        Event: sdk.String("rem"),
                                        ImportedValue: sdk.String("perferendis"),
                                        Model: sdk.String("facilis"),
                                        Property: sdk.String("reiciendis"),
                                        Type: sdk.String("a"),
                                        UserAttribute: sdk.String("iste"),
                                        Value: sdk.String("dicta"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quos"),
                                            Property: "ullam",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "modi": shared.FormBindingElement{
                                                Element: "itaque",
                                                Property: "maxime",
                                            },
                                            "modi": shared.FormBindingElement{
                                                Element: "consequuntur",
                                                Property: "assumenda",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("vero"),
                                            Property: "doloribus",
                                        },
                                        ComponentName: sdk.String("impedit"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("accusamus"),
                                            Operand: sdk.String("totam"),
                                            OperandType: sdk.String("reiciendis"),
                                            Operator: sdk.String("ab"),
                                            Property: sdk.String("sint"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("nihil"),
                                        Event: sdk.String("esse"),
                                        ImportedValue: sdk.String("iure"),
                                        Model: sdk.String("odio"),
                                        Property: sdk.String("nesciunt"),
                                        Type: sdk.String("debitis"),
                                        UserAttribute: sdk.String("vel"),
                                        Value: sdk.String("neque"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("corporis"),
                                            Property: "voluptas",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "officia": shared.FormBindingElement{
                                                Element: "reprehenderit",
                                                Property: "distinctio",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("eius"),
                                            Property: "ipsa",
                                        },
                                        ComponentName: sdk.String("rem"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("accusantium"),
                                            Operand: sdk.String("veniam"),
                                            OperandType: sdk.String("saepe"),
                                            Operator: sdk.String("neque"),
                                            Property: sdk.String("facere"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("aliquam"),
                                        Event: sdk.String("quos"),
                                        ImportedValue: sdk.String("doloribus"),
                                        Model: sdk.String("fugiat"),
                                        Property: sdk.String("est"),
                                        Type: sdk.String("delectus"),
                                        UserAttribute: sdk.String("velit"),
                                        Value: sdk.String("vitae"),
                                    },
                                },
                            },
                            "nesciunt": shared.ComponentEvent{
                                Action: sdk.String("similique"),
                                BindingEvent: sdk.String("illo"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("repellat"),
                                            Property: "nemo",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "possimus": shared.FormBindingElement{
                                                Element: "unde",
                                                Property: "incidunt",
                                            },
                                            "explicabo": shared.FormBindingElement{
                                                Element: "ipsam",
                                                Property: "cupiditate",
                                            },
                                            "optio": shared.FormBindingElement{
                                                Element: "alias",
                                                Property: "quidem",
                                            },
                                            "nesciunt": shared.FormBindingElement{
                                                Element: "commodi",
                                                Property: "sapiente",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("consequuntur"),
                                            Property: "veniam",
                                        },
                                        ComponentName: sdk.String("debitis"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("sint"),
                                            Operand: sdk.String("ut"),
                                            OperandType: sdk.String("numquam"),
                                            Operator: sdk.String("tenetur"),
                                            Property: sdk.String("adipisci"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("libero"),
                                        Event: sdk.String("in"),
                                        ImportedValue: sdk.String("minima"),
                                        Model: sdk.String("ex"),
                                        Property: sdk.String("minus"),
                                        Type: sdk.String("ab"),
                                        UserAttribute: sdk.String("beatae"),
                                        Value: sdk.String("hic"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "quisquam": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("dolor"),
                                                Property: "ducimus",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "minima": shared.FormBindingElement{
                                                    Element: "architecto",
                                                    Property: "qui",
                                                },
                                                "aliquid": shared.FormBindingElement{
                                                    Element: "magni",
                                                    Property: "incidunt",
                                                },
                                                "adipisci": shared.FormBindingElement{
                                                    Element: "praesentium",
                                                    Property: "dolor",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("exercitationem"),
                                                Property: "expedita",
                                            },
                                            ComponentName: sdk.String("facilis"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("sit"),
                                                Operand: sdk.String("nemo"),
                                                OperandType: sdk.String("culpa"),
                                                Operator: sdk.String("consequuntur"),
                                                Property: sdk.String("amet"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("deserunt"),
                                            Event: sdk.String("modi"),
                                            ImportedValue: sdk.String("veniam"),
                                            Model: sdk.String("quod"),
                                            Property: sdk.String("itaque"),
                                            Type: sdk.String("a"),
                                            UserAttribute: sdk.String("quisquam"),
                                            Value: sdk.String("enim"),
                                        },
                                        "doloribus": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("assumenda"),
                                                Property: "officiis",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "alias": shared.FormBindingElement{
                                                    Element: "culpa",
                                                    Property: "ipsa",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("nobis"),
                                                Property: "necessitatibus",
                                            },
                                            ComponentName: sdk.String("quia"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("vel"),
                                                Operand: sdk.String("perspiciatis"),
                                                OperandType: sdk.String("debitis"),
                                                Operator: sdk.String("ullam"),
                                                Property: sdk.String("architecto"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("accusantium"),
                                            Event: sdk.String("perferendis"),
                                            ImportedValue: sdk.String("veritatis"),
                                            Model: sdk.String("provident"),
                                            Property: sdk.String("cumque"),
                                            Type: sdk.String("iure"),
                                            UserAttribute: sdk.String("quibusdam"),
                                            Value: sdk.String("quod"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nemo"),
                                            Property: "recusandae",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "magnam": shared.FormBindingElement{
                                                Element: "dignissimos",
                                                Property: "laboriosam",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("sed"),
                                            Property: "odio",
                                        },
                                        ComponentName: sdk.String("natus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("cum"),
                                            Operand: sdk.String("doloribus"),
                                            OperandType: sdk.String("facilis"),
                                            Operator: sdk.String("quidem"),
                                            Property: sdk.String("itaque"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("laboriosam"),
                                        Event: sdk.String("unde"),
                                        ImportedValue: sdk.String("modi"),
                                        Model: sdk.String("perspiciatis"),
                                        Property: sdk.String("hic"),
                                        Type: sdk.String("cum"),
                                        UserAttribute: sdk.String("aspernatur"),
                                        Value: sdk.String("libero"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nam"),
                                            Property: "incidunt",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quod": shared.FormBindingElement{
                                                Element: "id",
                                                Property: "saepe",
                                            },
                                            "autem": shared.FormBindingElement{
                                                Element: "quo",
                                                Property: "nesciunt",
                                            },
                                            "illum": shared.FormBindingElement{
                                                Element: "nemo",
                                                Property: "illum",
                                            },
                                            "facilis": shared.FormBindingElement{
                                                Element: "non",
                                                Property: "mollitia",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("assumenda"),
                                            Property: "recusandae",
                                        },
                                        ComponentName: sdk.String("distinctio"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("ad"),
                                            Operand: sdk.String("facere"),
                                            OperandType: sdk.String("laborum"),
                                            Operator: sdk.String("eveniet"),
                                            Property: sdk.String("laborum"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("incidunt"),
                                        Event: sdk.String("maxime"),
                                        ImportedValue: sdk.String("ipsam"),
                                        Model: sdk.String("alias"),
                                        Property: sdk.String("suscipit"),
                                        Type: sdk.String("deserunt"),
                                        UserAttribute: sdk.String("molestias"),
                                        Value: sdk.String("laborum"),
                                    },
                                    Model: sdk.String("est"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "occaecati",
                                        Property: "labore",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("quo"),
                                                Property: "perferendis",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "aliquid": shared.FormBindingElement{
                                                    Element: "magnam",
                                                    Property: "quaerat",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("eligendi"),
                                                Property: "hic",
                                            },
                                            ComponentName: sdk.String("nostrum"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("unde"),
                                                Operand: sdk.String("nulla"),
                                                OperandType: sdk.String("error"),
                                                Operator: sdk.String("mollitia"),
                                                Property: sdk.String("magnam"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("nostrum"),
                                            Event: sdk.String("esse"),
                                            ImportedValue: sdk.String("corrupti"),
                                            Model: sdk.String("fuga"),
                                            Property: sdk.String("facere"),
                                            Type: sdk.String("impedit"),
                                            UserAttribute: sdk.String("quasi"),
                                            Value: sdk.String("deserunt"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quod"),
                                            Property: "laboriosam",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "voluptatem": shared.FormBindingElement{
                                                Element: "facere",
                                                Property: "necessitatibus",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("maxime"),
                                            Property: "consequatur",
                                        },
                                        ComponentName: sdk.String("eaque"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("similique"),
                                            Operand: sdk.String("porro"),
                                            OperandType: sdk.String("blanditiis"),
                                            Operator: sdk.String("quae"),
                                            Property: sdk.String("magni"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("officiis"),
                                        Event: sdk.String("sed"),
                                        ImportedValue: sdk.String("necessitatibus"),
                                        Model: sdk.String("impedit"),
                                        Property: sdk.String("ipsa"),
                                        Type: sdk.String("excepturi"),
                                        UserAttribute: sdk.String("a"),
                                        Value: sdk.String("maiores"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("laudantium"),
                                            Property: "maiores",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "asperiores": shared.FormBindingElement{
                                                Element: "rem",
                                                Property: "dicta",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("suscipit"),
                                            Property: "earum",
                                        },
                                        ComponentName: sdk.String("doloribus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("eius"),
                                            Operand: sdk.String("esse"),
                                            OperandType: sdk.String("in"),
                                            Operator: sdk.String("eligendi"),
                                            Property: sdk.String("quasi"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("neque"),
                                        Event: sdk.String("vero"),
                                        ImportedValue: sdk.String("excepturi"),
                                        Model: sdk.String("accusantium"),
                                        Property: sdk.String("qui"),
                                        Type: sdk.String("impedit"),
                                        UserAttribute: sdk.String("beatae"),
                                        Value: sdk.String("incidunt"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("dicta"),
                                            Property: "odit",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "rerum": shared.FormBindingElement{
                                                Element: "alias",
                                                Property: "error",
                                            },
                                            "vel": shared.FormBindingElement{
                                                Element: "accusantium",
                                                Property: "id",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("laboriosam"),
                                            Property: "ex",
                                        },
                                        ComponentName: sdk.String("quas"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("ullam"),
                                            Operand: sdk.String("quae"),
                                            OperandType: sdk.String("similique"),
                                            Operator: sdk.String("incidunt"),
                                            Property: sdk.String("quam"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("magni"),
                                        Event: sdk.String("deserunt"),
                                        ImportedValue: sdk.String("delectus"),
                                        Model: sdk.String("omnis"),
                                        Property: sdk.String("sed"),
                                        Type: sdk.String("nesciunt"),
                                        UserAttribute: sdk.String("maxime"),
                                        Value: sdk.String("quis"),
                                    },
                                },
                            },
                        },
                        Name: "Jay Marks",
                        Properties: "velit",
                        SourceID: sdk.String("reiciendis"),
                    },
                    shared.ComponentChild{
                        Children: []shared.ComponentChild{
                            shared.ComponentChild{},
                        },
                        ComponentType: "nemo",
                        Events: map[string]shared.ComponentEvent{
                            "quisquam": shared.ComponentEvent{
                                Action: sdk.String("tenetur"),
                                BindingEvent: sdk.String("quas"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("molestiae"),
                                            Property: "aliquid",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "a": shared.FormBindingElement{
                                                Element: "nobis",
                                                Property: "perspiciatis",
                                            },
                                            "accusantium": shared.FormBindingElement{
                                                Element: "dicta",
                                                Property: "minus",
                                            },
                                            "commodi": shared.FormBindingElement{
                                                Element: "eveniet",
                                                Property: "porro",
                                            },
                                            "tempore": shared.FormBindingElement{
                                                Element: "quidem",
                                                Property: "modi",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("voluptates"),
                                            Property: "fugit",
                                        },
                                        ComponentName: sdk.String("eius"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("eligendi"),
                                            Operand: sdk.String("asperiores"),
                                            OperandType: sdk.String("esse"),
                                            Operator: sdk.String("blanditiis"),
                                            Property: sdk.String("sint"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("repellat"),
                                        Event: sdk.String("a"),
                                        ImportedValue: sdk.String("animi"),
                                        Model: sdk.String("maiores"),
                                        Property: sdk.String("itaque"),
                                        Type: sdk.String("nulla"),
                                        UserAttribute: sdk.String("deserunt"),
                                        Value: sdk.String("corporis"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "officiis": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("enim"),
                                                Property: "officia",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "eum": shared.FormBindingElement{
                                                    Element: "repudiandae",
                                                    Property: "accusantium",
                                                },
                                                "officia": shared.FormBindingElement{
                                                    Element: "impedit",
                                                    Property: "quasi",
                                                },
                                                "blanditiis": shared.FormBindingElement{
                                                    Element: "eius",
                                                    Property: "quisquam",
                                                },
                                                "eos": shared.FormBindingElement{
                                                    Element: "nobis",
                                                    Property: "natus",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("minus"),
                                                Property: "quia",
                                            },
                                            ComponentName: sdk.String("magnam"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("quod"),
                                                Operand: sdk.String("quos"),
                                                OperandType: sdk.String("corrupti"),
                                                Operator: sdk.String("amet"),
                                                Property: sdk.String("molestiae"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("amet"),
                                            Event: sdk.String("laborum"),
                                            ImportedValue: sdk.String("modi"),
                                            Model: sdk.String("perferendis"),
                                            Property: sdk.String("necessitatibus"),
                                            Type: sdk.String("architecto"),
                                            UserAttribute: sdk.String("molestias"),
                                            Value: sdk.String("dolore"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("sunt"),
                                            Property: "maiores",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "odit": shared.FormBindingElement{
                                                Element: "earum",
                                                Property: "veniam",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ipsam"),
                                            Property: "eaque",
                                        },
                                        ComponentName: sdk.String("exercitationem"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("nihil"),
                                            Operand: sdk.String("ad"),
                                            OperandType: sdk.String("nisi"),
                                            Operator: sdk.String("tenetur"),
                                            Property: sdk.String("quis"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("quibusdam"),
                                        Event: sdk.String("nemo"),
                                        ImportedValue: sdk.String("suscipit"),
                                        Model: sdk.String("pariatur"),
                                        Property: sdk.String("sit"),
                                        Type: sdk.String("quidem"),
                                        UserAttribute: sdk.String("repellendus"),
                                        Value: sdk.String("perferendis"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("id"),
                                            Property: "sapiente",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "possimus": shared.FormBindingElement{
                                                Element: "repellat",
                                                Property: "repudiandae",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("architecto"),
                                            Property: "adipisci",
                                        },
                                        ComponentName: sdk.String("pariatur"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("dolore"),
                                            Operand: sdk.String("voluptatibus"),
                                            OperandType: sdk.String("iure"),
                                            Operator: sdk.String("explicabo"),
                                            Property: sdk.String("minus"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("soluta"),
                                        Event: sdk.String("dolorum"),
                                        ImportedValue: sdk.String("velit"),
                                        Model: sdk.String("earum"),
                                        Property: sdk.String("praesentium"),
                                        Type: sdk.String("error"),
                                        UserAttribute: sdk.String("non"),
                                        Value: sdk.String("quasi"),
                                    },
                                    Model: sdk.String("mollitia"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "accusamus",
                                        Property: "harum",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("cumque"),
                                                Property: "doloremque",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "corrupti": shared.FormBindingElement{
                                                    Element: "eaque",
                                                    Property: "deserunt",
                                                },
                                                "aliquid": shared.FormBindingElement{
                                                    Element: "excepturi",
                                                    Property: "magni",
                                                },
                                                "tempora": shared.FormBindingElement{
                                                    Element: "possimus",
                                                    Property: "dolor",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("rerum"),
                                                Property: "sed",
                                            },
                                            ComponentName: sdk.String("accusamus"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("delectus"),
                                                Operand: sdk.String("minus"),
                                                OperandType: sdk.String("quo"),
                                                Operator: sdk.String("quos"),
                                                Property: sdk.String("asperiores"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("voluptatum"),
                                            Event: sdk.String("iste"),
                                            ImportedValue: sdk.String("corporis"),
                                            Model: sdk.String("accusantium"),
                                            Property: sdk.String("illo"),
                                            Type: sdk.String("aut"),
                                            UserAttribute: sdk.String("doloribus"),
                                            Value: sdk.String("nostrum"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("at"),
                                            Property: "possimus",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "pariatur": shared.FormBindingElement{
                                                Element: "vel",
                                                Property: "sapiente",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("mollitia"),
                                            Property: "quae",
                                        },
                                        ComponentName: sdk.String("quos"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("non"),
                                            Operand: sdk.String("voluptates"),
                                            OperandType: sdk.String("ad"),
                                            Operator: sdk.String("aliquam"),
                                            Property: sdk.String("quisquam"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("quas"),
                                        Event: sdk.String("consequuntur"),
                                        ImportedValue: sdk.String("maiores"),
                                        Model: sdk.String("inventore"),
                                        Property: sdk.String("aliquid"),
                                        Type: sdk.String("laudantium"),
                                        UserAttribute: sdk.String("est"),
                                        Value: sdk.String("dolor"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aliquid"),
                                            Property: "consectetur",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "rem": shared.FormBindingElement{
                                                Element: "voluptatum",
                                                Property: "ducimus",
                                            },
                                            "adipisci": shared.FormBindingElement{
                                                Element: "recusandae",
                                                Property: "tempora",
                                            },
                                            "blanditiis": shared.FormBindingElement{
                                                Element: "numquam",
                                                Property: "sequi",
                                            },
                                            "voluptatum": shared.FormBindingElement{
                                                Element: "sit",
                                                Property: "rerum",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("veritatis"),
                                            Property: "tenetur",
                                        },
                                        ComponentName: sdk.String("autem"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("totam"),
                                            Operand: sdk.String("porro"),
                                            OperandType: sdk.String("deserunt"),
                                            Operator: sdk.String("magni"),
                                            Property: sdk.String("nihil"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("voluptas"),
                                        Event: sdk.String("animi"),
                                        ImportedValue: sdk.String("commodi"),
                                        Model: sdk.String("alias"),
                                        Property: sdk.String("fuga"),
                                        Type: sdk.String("aut"),
                                        UserAttribute: sdk.String("dolore"),
                                        Value: sdk.String("maxime"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aliquam"),
                                            Property: "iste",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "eligendi": shared.FormBindingElement{
                                                Element: "placeat",
                                                Property: "voluptas",
                                            },
                                            "occaecati": shared.FormBindingElement{
                                                Element: "unde",
                                                Property: "illo",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nihil"),
                                            Property: "inventore",
                                        },
                                        ComponentName: sdk.String("libero"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("quasi"),
                                            Operand: sdk.String("cumque"),
                                            OperandType: sdk.String("dicta"),
                                            Operator: sdk.String("harum"),
                                            Property: sdk.String("facere"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("facilis"),
                                        Event: sdk.String("beatae"),
                                        ImportedValue: sdk.String("cumque"),
                                        Model: sdk.String("delectus"),
                                        Property: sdk.String("labore"),
                                        Type: sdk.String("expedita"),
                                        UserAttribute: sdk.String("corrupti"),
                                        Value: sdk.String("rem"),
                                    },
                                },
                            },
                        },
                        Name: "Frankie Ritchie",
                        Properties: "quo",
                        SourceID: sdk.String("incidunt"),
                    },
                    shared.ComponentChild{
                        Children: []shared.ComponentChild{
                            shared.ComponentChild{},
                            shared.ComponentChild{},
                            shared.ComponentChild{},
                            shared.ComponentChild{},
                        },
                        ComponentType: "minus",
                        Events: map[string]shared.ComponentEvent{
                            "id": shared.ComponentEvent{
                                Action: sdk.String("excepturi"),
                                BindingEvent: sdk.String("occaecati"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("libero"),
                                            Property: "quo",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "hic": shared.FormBindingElement{
                                                Element: "maxime",
                                                Property: "accusantium",
                                            },
                                            "soluta": shared.FormBindingElement{
                                                Element: "fugit",
                                                Property: "pariatur",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("eligendi"),
                                            Property: "recusandae",
                                        },
                                        ComponentName: sdk.String("veritatis"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("laudantium"),
                                            Operand: sdk.String("iusto"),
                                            OperandType: sdk.String("dolor"),
                                            Operator: sdk.String("voluptates"),
                                            Property: sdk.String("tempora"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("magni"),
                                        Event: sdk.String("rerum"),
                                        ImportedValue: sdk.String("doloremque"),
                                        Model: sdk.String("voluptatem"),
                                        Property: sdk.String("eum"),
                                        Type: sdk.String("at"),
                                        UserAttribute: sdk.String("eum"),
                                        Value: sdk.String("reprehenderit"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "blanditiis": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("nihil"),
                                                Property: "atque",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "deserunt": shared.FormBindingElement{
                                                    Element: "atque",
                                                    Property: "nostrum",
                                                },
                                                "atque": shared.FormBindingElement{
                                                    Element: "architecto",
                                                    Property: "est",
                                                },
                                                "enim": shared.FormBindingElement{
                                                    Element: "rem",
                                                    Property: "magni",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("quae"),
                                                Property: "quas",
                                            },
                                            ComponentName: sdk.String("placeat"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("labore"),
                                                Operand: sdk.String("sapiente"),
                                                OperandType: sdk.String("saepe"),
                                                Operator: sdk.String("delectus"),
                                                Property: sdk.String("officia"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("natus"),
                                            Event: sdk.String("cumque"),
                                            ImportedValue: sdk.String("natus"),
                                            Model: sdk.String("quaerat"),
                                            Property: sdk.String("doloribus"),
                                            Type: sdk.String("quia"),
                                            UserAttribute: sdk.String("officiis"),
                                            Value: sdk.String("mollitia"),
                                        },
                                        "cumque": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("quis"),
                                                Property: "enim",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "nemo": shared.FormBindingElement{
                                                    Element: "illum",
                                                    Property: "nesciunt",
                                                },
                                                "sit": shared.FormBindingElement{
                                                    Element: "odio",
                                                    Property: "minus",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("asperiores"),
                                                Property: "recusandae",
                                            },
                                            ComponentName: sdk.String("voluptates"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("dicta"),
                                                Operand: sdk.String("fugit"),
                                                OperandType: sdk.String("sit"),
                                                Operator: sdk.String("aliquid"),
                                                Property: sdk.String("necessitatibus"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("sed"),
                                            Event: sdk.String("deleniti"),
                                            ImportedValue: sdk.String("sunt"),
                                            Model: sdk.String("nesciunt"),
                                            Property: sdk.String("delectus"),
                                            Type: sdk.String("laborum"),
                                            UserAttribute: sdk.String("aliquam"),
                                            Value: sdk.String("deserunt"),
                                        },
                                        "modi": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("sunt"),
                                                Property: "impedit",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "voluptatum": shared.FormBindingElement{
                                                    Element: "ipsa",
                                                    Property: "at",
                                                },
                                                "dolorem": shared.FormBindingElement{
                                                    Element: "repellat",
                                                    Property: "aspernatur",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("inventore"),
                                                Property: "sequi",
                                            },
                                            ComponentName: sdk.String("fugit"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("hic"),
                                                Operand: sdk.String("eaque"),
                                                OperandType: sdk.String("dolorem"),
                                                Operator: sdk.String("architecto"),
                                                Property: sdk.String("aperiam"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("aspernatur"),
                                            Event: sdk.String("nulla"),
                                            ImportedValue: sdk.String("enim"),
                                            Model: sdk.String("illo"),
                                            Property: sdk.String("magnam"),
                                            Type: sdk.String("delectus"),
                                            UserAttribute: sdk.String("numquam"),
                                            Value: sdk.String("optio"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nobis"),
                                            Property: "ex",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quae": shared.FormBindingElement{
                                                Element: "deleniti",
                                                Property: "expedita",
                                            },
                                            "hic": shared.FormBindingElement{
                                                Element: "excepturi",
                                                Property: "aliquid",
                                            },
                                            "sed": shared.FormBindingElement{
                                                Element: "beatae",
                                                Property: "similique",
                                            },
                                            "ea": shared.FormBindingElement{
                                                Element: "animi",
                                                Property: "dolore",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("tenetur"),
                                            Property: "dignissimos",
                                        },
                                        ComponentName: sdk.String("esse"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("laudantium"),
                                            Operand: sdk.String("esse"),
                                            OperandType: sdk.String("eveniet"),
                                            Operator: sdk.String("earum"),
                                            Property: sdk.String("velit"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("officiis"),
                                        Event: sdk.String("eius"),
                                        ImportedValue: sdk.String("rerum"),
                                        Model: sdk.String("itaque"),
                                        Property: sdk.String("dignissimos"),
                                        Type: sdk.String("ipsam"),
                                        UserAttribute: sdk.String("explicabo"),
                                        Value: sdk.String("impedit"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aliquid"),
                                            Property: "quis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "ipsum": shared.FormBindingElement{
                                                Element: "ut",
                                                Property: "quaerat",
                                            },
                                            "architecto": shared.FormBindingElement{
                                                Element: "praesentium",
                                                Property: "eveniet",
                                            },
                                            "dolor": shared.FormBindingElement{
                                                Element: "expedita",
                                                Property: "libero",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("iste"),
                                            Property: "illo",
                                        },
                                        ComponentName: sdk.String("minus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("temporibus"),
                                            Operand: sdk.String("sint"),
                                            OperandType: sdk.String("iusto"),
                                            Operator: sdk.String("enim"),
                                            Property: sdk.String("accusamus"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("aperiam"),
                                        Event: sdk.String("voluptates"),
                                        ImportedValue: sdk.String("laudantium"),
                                        Model: sdk.String("tempora"),
                                        Property: sdk.String("quae"),
                                        Type: sdk.String("omnis"),
                                        UserAttribute: sdk.String("illum"),
                                        Value: sdk.String("rem"),
                                    },
                                    Model: sdk.String("tenetur"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "deleniti",
                                        Property: "modi",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("earum"),
                                                Property: "architecto",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "labore": shared.FormBindingElement{
                                                    Element: "maiores",
                                                    Property: "sequi",
                                                },
                                                "saepe": shared.FormBindingElement{
                                                    Element: "consequatur",
                                                    Property: "esse",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("debitis"),
                                                Property: "facere",
                                            },
                                            ComponentName: sdk.String("quisquam"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("aliquam"),
                                                Operand: sdk.String("dolorum"),
                                                OperandType: sdk.String("deserunt"),
                                                Operator: sdk.String("ad"),
                                                Property: sdk.String("reiciendis"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("sequi"),
                                            Event: sdk.String("porro"),
                                            ImportedValue: sdk.String("laborum"),
                                            Model: sdk.String("nobis"),
                                            Property: sdk.String("quibusdam"),
                                            Type: sdk.String("omnis"),
                                            UserAttribute: sdk.String("aut"),
                                            Value: sdk.String("ipsam"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("officia"),
                                            Property: "cupiditate",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quia": shared.FormBindingElement{
                                                Element: "necessitatibus",
                                                Property: "accusantium",
                                            },
                                            "ad": shared.FormBindingElement{
                                                Element: "nisi",
                                                Property: "molestiae",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quia"),
                                            Property: "laudantium",
                                        },
                                        ComponentName: sdk.String("sed"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("iusto"),
                                            Operand: sdk.String("expedita"),
                                            OperandType: sdk.String("eos"),
                                            Operator: sdk.String("repellendus"),
                                            Property: sdk.String("nesciunt"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("ipsa"),
                                        Event: sdk.String("sint"),
                                        ImportedValue: sdk.String("dolore"),
                                        Model: sdk.String("esse"),
                                        Property: sdk.String("accusantium"),
                                        Type: sdk.String("distinctio"),
                                        UserAttribute: sdk.String("sapiente"),
                                        Value: sdk.String("quam"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("est"),
                                            Property: "aliquam",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "culpa": shared.FormBindingElement{
                                                Element: "voluptatum",
                                                Property: "iusto",
                                            },
                                            "quod": shared.FormBindingElement{
                                                Element: "voluptatibus",
                                                Property: "voluptas",
                                            },
                                            "non": shared.FormBindingElement{
                                                Element: "ullam",
                                                Property: "laborum",
                                            },
                                            "voluptas": shared.FormBindingElement{
                                                Element: "doloribus",
                                                Property: "animi",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("recusandae"),
                                            Property: "corporis",
                                        },
                                        ComponentName: sdk.String("non"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("distinctio"),
                                            Operand: sdk.String("maiores"),
                                            OperandType: sdk.String("laboriosam"),
                                            Operator: sdk.String("voluptatem"),
                                            Property: sdk.String("optio"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("sequi"),
                                        Event: sdk.String("sunt"),
                                        ImportedValue: sdk.String("vitae"),
                                        Model: sdk.String("voluptatibus"),
                                        Property: sdk.String("doloremque"),
                                        Type: sdk.String("sed"),
                                        UserAttribute: sdk.String("amet"),
                                        Value: sdk.String("rerum"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("in"),
                                            Property: "nostrum",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "ratione": shared.FormBindingElement{
                                                Element: "dolor",
                                                Property: "nisi",
                                            },
                                            "dignissimos": shared.FormBindingElement{
                                                Element: "reiciendis",
                                                Property: "itaque",
                                            },
                                            "vitae": shared.FormBindingElement{
                                                Element: "est",
                                                Property: "accusantium",
                                            },
                                            "quod": shared.FormBindingElement{
                                                Element: "minus",
                                                Property: "quos",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("possimus"),
                                            Property: "maiores",
                                        },
                                        ComponentName: sdk.String("odio"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("sapiente"),
                                            Operand: sdk.String("aperiam"),
                                            OperandType: sdk.String("similique"),
                                            Operator: sdk.String("nesciunt"),
                                            Property: sdk.String("provident"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("ex"),
                                        Event: sdk.String("repellendus"),
                                        ImportedValue: sdk.String("unde"),
                                        Model: sdk.String("alias"),
                                        Property: sdk.String("impedit"),
                                        Type: sdk.String("sequi"),
                                        UserAttribute: sdk.String("commodi"),
                                        Value: sdk.String("labore"),
                                    },
                                },
                            },
                            "expedita": shared.ComponentEvent{
                                Action: sdk.String("in"),
                                BindingEvent: sdk.String("quisquam"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("sunt"),
                                            Property: "enim",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "maiores": shared.FormBindingElement{
                                                Element: "distinctio",
                                                Property: "mollitia",
                                            },
                                            "impedit": shared.FormBindingElement{
                                                Element: "accusamus",
                                                Property: "et",
                                            },
                                            "quas": shared.FormBindingElement{
                                                Element: "blanditiis",
                                                Property: "cum",
                                            },
                                            "dicta": shared.FormBindingElement{
                                                Element: "impedit",
                                                Property: "tempora",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("eveniet"),
                                            Property: "repudiandae",
                                        },
                                        ComponentName: sdk.String("sed"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("quas"),
                                            Operand: sdk.String("impedit"),
                                            OperandType: sdk.String("vel"),
                                            Operator: sdk.String("eligendi"),
                                            Property: sdk.String("recusandae"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("ex"),
                                        Event: sdk.String("beatae"),
                                        ImportedValue: sdk.String("veritatis"),
                                        Model: sdk.String("maiores"),
                                        Property: sdk.String("itaque"),
                                        Type: sdk.String("vero"),
                                        UserAttribute: sdk.String("quidem"),
                                        Value: sdk.String("illo"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "dignissimos": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("minus"),
                                                Property: "distinctio",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "cum": shared.FormBindingElement{
                                                    Element: "suscipit",
                                                    Property: "saepe",
                                                },
                                                "earum": shared.FormBindingElement{
                                                    Element: "quod",
                                                    Property: "nihil",
                                                },
                                                "quaerat": shared.FormBindingElement{
                                                    Element: "ipsum",
                                                    Property: "ducimus",
                                                },
                                                "laudantium": shared.FormBindingElement{
                                                    Element: "rerum",
                                                    Property: "deserunt",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("odit"),
                                                Property: "ad",
                                            },
                                            ComponentName: sdk.String("sequi"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("iusto"),
                                                Operand: sdk.String("esse"),
                                                OperandType: sdk.String("magnam"),
                                                Operator: sdk.String("odio"),
                                                Property: sdk.String("nulla"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("impedit"),
                                            Event: sdk.String("cupiditate"),
                                            ImportedValue: sdk.String("illo"),
                                            Model: sdk.String("exercitationem"),
                                            Property: sdk.String("laborum"),
                                            Type: sdk.String("illum"),
                                            UserAttribute: sdk.String("fugit"),
                                            Value: sdk.String("maxime"),
                                        },
                                        "dolorum": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("repellat"),
                                                Property: "nostrum",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "quibusdam": shared.FormBindingElement{
                                                    Element: "commodi",
                                                    Property: "esse",
                                                },
                                                "explicabo": shared.FormBindingElement{
                                                    Element: "consectetur",
                                                    Property: "temporibus",
                                                },
                                                "optio": shared.FormBindingElement{
                                                    Element: "ipsa",
                                                    Property: "maiores",
                                                },
                                                "exercitationem": shared.FormBindingElement{
                                                    Element: "culpa",
                                                    Property: "repudiandae",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("aspernatur"),
                                                Property: "sapiente",
                                            },
                                            ComponentName: sdk.String("neque"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("suscipit"),
                                                Operand: sdk.String("harum"),
                                                OperandType: sdk.String("ducimus"),
                                                Operator: sdk.String("doloremque"),
                                                Property: sdk.String("perferendis"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("laudantium"),
                                            Event: sdk.String("iusto"),
                                            ImportedValue: sdk.String("corrupti"),
                                            Model: sdk.String("molestiae"),
                                            Property: sdk.String("quis"),
                                            Type: sdk.String("iure"),
                                            UserAttribute: sdk.String("ab"),
                                            Value: sdk.String("quaerat"),
                                        },
                                        "amet": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("sapiente"),
                                                Property: "corporis",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "iure": shared.FormBindingElement{
                                                    Element: "quisquam",
                                                    Property: "provident",
                                                },
                                                "laudantium": shared.FormBindingElement{
                                                    Element: "nam",
                                                    Property: "nemo",
                                                },
                                                "enim": shared.FormBindingElement{
                                                    Element: "ipsam",
                                                    Property: "minima",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("tempora"),
                                                Property: "perferendis",
                                            },
                                            ComponentName: sdk.String("corrupti"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("fugiat"),
                                                Operand: sdk.String("numquam"),
                                                OperandType: sdk.String("doloremque"),
                                                Operator: sdk.String("cum"),
                                                Property: sdk.String("nobis"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("similique"),
                                            Event: sdk.String("porro"),
                                            ImportedValue: sdk.String("impedit"),
                                            Model: sdk.String("nisi"),
                                            Property: sdk.String("cumque"),
                                            Type: sdk.String("soluta"),
                                            UserAttribute: sdk.String("fugiat"),
                                            Value: sdk.String("laboriosam"),
                                        },
                                        "nam": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("enim"),
                                                Property: "maiores",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "necessitatibus": shared.FormBindingElement{
                                                    Element: "maxime",
                                                    Property: "cupiditate",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("voluptatem"),
                                                Property: "provident",
                                            },
                                            ComponentName: sdk.String("adipisci"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("magnam"),
                                                Operand: sdk.String("repellat"),
                                                OperandType: sdk.String("omnis"),
                                                Operator: sdk.String("explicabo"),
                                                Property: sdk.String("vel"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("cum"),
                                            Event: sdk.String("id"),
                                            ImportedValue: sdk.String("possimus"),
                                            Model: sdk.String("fugit"),
                                            Property: sdk.String("ipsam"),
                                            Type: sdk.String("nostrum"),
                                            UserAttribute: sdk.String("sequi"),
                                            Value: sdk.String("voluptatum"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quasi"),
                                            Property: "error",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "tempora": shared.FormBindingElement{
                                                Element: "voluptate",
                                                Property: "eius",
                                            },
                                            "expedita": shared.FormBindingElement{
                                                Element: "aperiam",
                                                Property: "voluptates",
                                            },
                                            "possimus": shared.FormBindingElement{
                                                Element: "fugit",
                                                Property: "voluptatem",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("repudiandae"),
                                            Property: "corporis",
                                        },
                                        ComponentName: sdk.String("ea"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("aliquam"),
                                            Operand: sdk.String("blanditiis"),
                                            OperandType: sdk.String("hic"),
                                            Operator: sdk.String("maiores"),
                                            Property: sdk.String("asperiores"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("autem"),
                                        Event: sdk.String("nesciunt"),
                                        ImportedValue: sdk.String("cupiditate"),
                                        Model: sdk.String("animi"),
                                        Property: sdk.String("provident"),
                                        Type: sdk.String("beatae"),
                                        UserAttribute: sdk.String("ipsa"),
                                        Value: sdk.String("mollitia"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nam"),
                                            Property: "assumenda",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "fuga": shared.FormBindingElement{
                                                Element: "tempore",
                                                Property: "commodi",
                                            },
                                            "fugit": shared.FormBindingElement{
                                                Element: "suscipit",
                                                Property: "voluptate",
                                            },
                                            "nisi": shared.FormBindingElement{
                                                Element: "aliquid",
                                                Property: "provident",
                                            },
                                            "laboriosam": shared.FormBindingElement{
                                                Element: "accusamus",
                                                Property: "ab",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("itaque"),
                                            Property: "quisquam",
                                        },
                                        ComponentName: sdk.String("eaque"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("qui"),
                                            Operand: sdk.String("consequuntur"),
                                            OperandType: sdk.String("vitae"),
                                            Operator: sdk.String("quidem"),
                                            Property: sdk.String("sequi"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("amet"),
                                        Event: sdk.String("exercitationem"),
                                        ImportedValue: sdk.String("illum"),
                                        Model: sdk.String("praesentium"),
                                        Property: sdk.String("unde"),
                                        Type: sdk.String("similique"),
                                        UserAttribute: sdk.String("eligendi"),
                                        Value: sdk.String("tempore"),
                                    },
                                    Model: sdk.String("amet"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "debitis",
                                        Property: "nobis",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("asperiores"),
                                                Property: "temporibus",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "atque": shared.FormBindingElement{
                                                    Element: "quibusdam",
                                                    Property: "sit",
                                                },
                                                "quo": shared.FormBindingElement{
                                                    Element: "veniam",
                                                    Property: "aliquam",
                                                },
                                                "provident": shared.FormBindingElement{
                                                    Element: "vero",
                                                    Property: "earum",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("doloremque"),
                                                Property: "ipsum",
                                            },
                                            ComponentName: sdk.String("alias"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("tempora"),
                                                Operand: sdk.String("perspiciatis"),
                                                OperandType: sdk.String("quam"),
                                                Operator: sdk.String("atque"),
                                                Property: sdk.String("officia"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("ex"),
                                            Event: sdk.String("architecto"),
                                            ImportedValue: sdk.String("a"),
                                            Model: sdk.String("laborum"),
                                            Property: sdk.String("veritatis"),
                                            Type: sdk.String("quod"),
                                            UserAttribute: sdk.String("a"),
                                            Value: sdk.String("qui"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("accusantium"),
                                            Property: "commodi",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "totam": shared.FormBindingElement{
                                                Element: "tenetur",
                                                Property: "voluptate",
                                            },
                                            "quam": shared.FormBindingElement{
                                                Element: "quod",
                                                Property: "vitae",
                                            },
                                            "sapiente": shared.FormBindingElement{
                                                Element: "reiciendis",
                                                Property: "quod",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("voluptate"),
                                            Property: "inventore",
                                        },
                                        ComponentName: sdk.String("facere"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("fuga"),
                                            Operand: sdk.String("ab"),
                                            OperandType: sdk.String("ex"),
                                            Operator: sdk.String("consectetur"),
                                            Property: sdk.String("maiores"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("sed"),
                                        Event: sdk.String("animi"),
                                        ImportedValue: sdk.String("sequi"),
                                        Model: sdk.String("eligendi"),
                                        Property: sdk.String("voluptatum"),
                                        Type: sdk.String("perferendis"),
                                        UserAttribute: sdk.String("laborum"),
                                        Value: sdk.String("omnis"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nihil"),
                                            Property: "tenetur",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "velit": shared.FormBindingElement{
                                                Element: "adipisci",
                                                Property: "non",
                                            },
                                            "optio": shared.FormBindingElement{
                                                Element: "illum",
                                                Property: "at",
                                            },
                                            "tenetur": shared.FormBindingElement{
                                                Element: "molestias",
                                                Property: "ipsam",
                                            },
                                            "esse": shared.FormBindingElement{
                                                Element: "laborum",
                                                Property: "perspiciatis",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("voluptates"),
                                            Property: "eum",
                                        },
                                        ComponentName: sdk.String("quasi"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("odio"),
                                            Operand: sdk.String("commodi"),
                                            OperandType: sdk.String("porro"),
                                            Operator: sdk.String("aliquid"),
                                            Property: sdk.String("mollitia"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("quidem"),
                                        Event: sdk.String("explicabo"),
                                        ImportedValue: sdk.String("et"),
                                        Model: sdk.String("nulla"),
                                        Property: sdk.String("magni"),
                                        Type: sdk.String("natus"),
                                        UserAttribute: sdk.String("illum"),
                                        Value: sdk.String("a"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("impedit"),
                                            Property: "unde",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "facere": shared.FormBindingElement{
                                                Element: "voluptas",
                                                Property: "doloribus",
                                            },
                                            "recusandae": shared.FormBindingElement{
                                                Element: "quisquam",
                                                Property: "facere",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("dignissimos"),
                                            Property: "iste",
                                        },
                                        ComponentName: sdk.String("provident"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("sint"),
                                            Operand: sdk.String("aperiam"),
                                            OperandType: sdk.String("eaque"),
                                            Operator: sdk.String("eum"),
                                            Property: sdk.String("laboriosam"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("laborum"),
                                        Event: sdk.String("autem"),
                                        ImportedValue: sdk.String("assumenda"),
                                        Model: sdk.String("explicabo"),
                                        Property: sdk.String("fugiat"),
                                        Type: sdk.String("doloremque"),
                                        UserAttribute: sdk.String("voluptatem"),
                                        Value: sdk.String("alias"),
                                    },
                                },
                            },
                            "velit": shared.ComponentEvent{
                                Action: sdk.String("ullam"),
                                BindingEvent: sdk.String("quis"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("velit"),
                                            Property: "ratione",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "maxime": shared.FormBindingElement{
                                                Element: "recusandae",
                                                Property: "cumque",
                                            },
                                            "doloremque": shared.FormBindingElement{
                                                Element: "totam",
                                                Property: "iure",
                                            },
                                            "maiores": shared.FormBindingElement{
                                                Element: "est",
                                                Property: "fugit",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("veritatis"),
                                            Property: "necessitatibus",
                                        },
                                        ComponentName: sdk.String("iste"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("ipsam"),
                                            Operand: sdk.String("consequuntur"),
                                            OperandType: sdk.String("cumque"),
                                            Operator: sdk.String("quidem"),
                                            Property: sdk.String("non"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("beatae"),
                                        Event: sdk.String("sunt"),
                                        ImportedValue: sdk.String("molestias"),
                                        Model: sdk.String("beatae"),
                                        Property: sdk.String("autem"),
                                        Type: sdk.String("ducimus"),
                                        UserAttribute: sdk.String("libero"),
                                        Value: sdk.String("molestias"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "ipsum": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("impedit"),
                                                Property: "quos",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "distinctio": shared.FormBindingElement{
                                                    Element: "voluptatem",
                                                    Property: "non",
                                                },
                                                "quaerat": shared.FormBindingElement{
                                                    Element: "consequatur",
                                                    Property: "laudantium",
                                                },
                                                "repellendus": shared.FormBindingElement{
                                                    Element: "commodi",
                                                    Property: "quibusdam",
                                                },
                                                "consectetur": shared.FormBindingElement{
                                                    Element: "voluptas",
                                                    Property: "quaerat",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("earum"),
                                                Property: "tenetur",
                                            },
                                            ComponentName: sdk.String("assumenda"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("enim"),
                                                Operand: sdk.String("ullam"),
                                                OperandType: sdk.String("perspiciatis"),
                                                Operator: sdk.String("alias"),
                                                Property: sdk.String("ex"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("quibusdam"),
                                            Event: sdk.String("dicta"),
                                            ImportedValue: sdk.String("quia"),
                                            Model: sdk.String("commodi"),
                                            Property: sdk.String("neque"),
                                            Type: sdk.String("quibusdam"),
                                            UserAttribute: sdk.String("numquam"),
                                            Value: sdk.String("rem"),
                                        },
                                        "officiis": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("omnis"),
                                                Property: "neque",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "quod": shared.FormBindingElement{
                                                    Element: "dolores",
                                                    Property: "placeat",
                                                },
                                                "excepturi": shared.FormBindingElement{
                                                    Element: "recusandae",
                                                    Property: "quos",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("dicta"),
                                                Property: "sapiente",
                                            },
                                            ComponentName: sdk.String("ipsum"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("soluta"),
                                                Operand: sdk.String("necessitatibus"),
                                                OperandType: sdk.String("sequi"),
                                                Operator: sdk.String("recusandae"),
                                                Property: sdk.String("labore"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("adipisci"),
                                            Event: sdk.String("magni"),
                                            ImportedValue: sdk.String("aperiam"),
                                            Model: sdk.String("dolores"),
                                            Property: sdk.String("illum"),
                                            Type: sdk.String("iusto"),
                                            UserAttribute: sdk.String("magni"),
                                            Value: sdk.String("beatae"),
                                        },
                                        "aliquid": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("ad"),
                                                Property: "voluptate",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "minima": shared.FormBindingElement{
                                                    Element: "sit",
                                                    Property: "vel",
                                                },
                                                "laboriosam": shared.FormBindingElement{
                                                    Element: "quaerat",
                                                    Property: "quasi",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("rem"),
                                                Property: "dignissimos",
                                            },
                                            ComponentName: sdk.String("doloremque"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("provident"),
                                                Operand: sdk.String("facere"),
                                                OperandType: sdk.String("sed"),
                                                Operator: sdk.String("inventore"),
                                                Property: sdk.String("voluptatibus"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("unde"),
                                            Event: sdk.String("deserunt"),
                                            ImportedValue: sdk.String("repellendus"),
                                            Model: sdk.String("consequatur"),
                                            Property: sdk.String("adipisci"),
                                            Type: sdk.String("doloremque"),
                                            UserAttribute: sdk.String("optio"),
                                            Value: sdk.String("tempora"),
                                        },
                                        "debitis": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("cumque"),
                                                Property: "maxime",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "beatae": shared.FormBindingElement{
                                                    Element: "id",
                                                    Property: "consequatur",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("quos"),
                                                Property: "ratione",
                                            },
                                            ComponentName: sdk.String("iure"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("eos"),
                                                Operand: sdk.String("natus"),
                                                OperandType: sdk.String("voluptatem"),
                                                Operator: sdk.String("suscipit"),
                                                Property: sdk.String("laudantium"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("facilis"),
                                            Event: sdk.String("laudantium"),
                                            ImportedValue: sdk.String("ullam"),
                                            Model: sdk.String("aut"),
                                            Property: sdk.String("quia"),
                                            Type: sdk.String("officia"),
                                            UserAttribute: sdk.String("quaerat"),
                                            Value: sdk.String("corporis"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("accusamus"),
                                            Property: "iusto",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "esse": shared.FormBindingElement{
                                                Element: "neque",
                                                Property: "quidem",
                                            },
                                            "quisquam": shared.FormBindingElement{
                                                Element: "praesentium",
                                                Property: "tempora",
                                            },
                                            "ipsam": shared.FormBindingElement{
                                                Element: "officiis",
                                                Property: "sequi",
                                            },
                                            "magni": shared.FormBindingElement{
                                                Element: "voluptatem",
                                                Property: "est",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("amet"),
                                            Property: "veritatis",
                                        },
                                        ComponentName: sdk.String("error"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("numquam"),
                                            Operand: sdk.String("rerum"),
                                            OperandType: sdk.String("dolorum"),
                                            Operator: sdk.String("quibusdam"),
                                            Property: sdk.String("earum"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("excepturi"),
                                        Event: sdk.String("numquam"),
                                        ImportedValue: sdk.String("molestiae"),
                                        Model: sdk.String("impedit"),
                                        Property: sdk.String("error"),
                                        Type: sdk.String("animi"),
                                        UserAttribute: sdk.String("voluptatum"),
                                        Value: sdk.String("aliquid"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nihil"),
                                            Property: "facilis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "incidunt": shared.FormBindingElement{
                                                Element: "eos",
                                                Property: "magnam",
                                            },
                                            "dolores": shared.FormBindingElement{
                                                Element: "aliquid",
                                                Property: "eum",
                                            },
                                            "vel": shared.FormBindingElement{
                                                Element: "ad",
                                                Property: "quos",
                                            },
                                            "illo": shared.FormBindingElement{
                                                Element: "suscipit",
                                                Property: "quibusdam",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("fugiat"),
                                            Property: "impedit",
                                        },
                                        ComponentName: sdk.String("culpa"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("voluptates"),
                                            Operand: sdk.String("maiores"),
                                            OperandType: sdk.String("nemo"),
                                            Operator: sdk.String("illo"),
                                            Property: sdk.String("doloribus"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("cumque"),
                                        Event: sdk.String("expedita"),
                                        ImportedValue: sdk.String("modi"),
                                        Model: sdk.String("cumque"),
                                        Property: sdk.String("ipsam"),
                                        Type: sdk.String("occaecati"),
                                        UserAttribute: sdk.String("ipsum"),
                                        Value: sdk.String("accusamus"),
                                    },
                                    Model: sdk.String("quisquam"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "quasi",
                                        Property: "fugit",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("quo"),
                                                Property: "temporibus",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "id": shared.FormBindingElement{
                                                    Element: "quibusdam",
                                                    Property: "ipsa",
                                                },
                                                "accusamus": shared.FormBindingElement{
                                                    Element: "placeat",
                                                    Property: "quam",
                                                },
                                                "similique": shared.FormBindingElement{
                                                    Element: "delectus",
                                                    Property: "saepe",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("facere"),
                                                Property: "nobis",
                                            },
                                            ComponentName: sdk.String("at"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("aut"),
                                                Operand: sdk.String("temporibus"),
                                                OperandType: sdk.String("tenetur"),
                                                Operator: sdk.String("incidunt"),
                                                Property: sdk.String("numquam"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("corrupti"),
                                            Event: sdk.String("similique"),
                                            ImportedValue: sdk.String("dolore"),
                                            Model: sdk.String("esse"),
                                            Property: sdk.String("reiciendis"),
                                            Type: sdk.String("iste"),
                                            UserAttribute: sdk.String("amet"),
                                            Value: sdk.String("occaecati"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aut"),
                                            Property: "impedit",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quos": shared.FormBindingElement{
                                                Element: "blanditiis",
                                                Property: "quas",
                                            },
                                            "voluptatem": shared.FormBindingElement{
                                                Element: "provident",
                                                Property: "quas",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ipsum"),
                                            Property: "vero",
                                        },
                                        ComponentName: sdk.String("fuga"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("maiores"),
                                            Operand: sdk.String("error"),
                                            OperandType: sdk.String("recusandae"),
                                            Operator: sdk.String("a"),
                                            Property: sdk.String("consectetur"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("sapiente"),
                                        Event: sdk.String("voluptatibus"),
                                        ImportedValue: sdk.String("assumenda"),
                                        Model: sdk.String("repellendus"),
                                        Property: sdk.String("omnis"),
                                        Type: sdk.String("delectus"),
                                        UserAttribute: sdk.String("odio"),
                                        Value: sdk.String("voluptatibus"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aut"),
                                            Property: "quam",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "similique": shared.FormBindingElement{
                                                Element: "asperiores",
                                                Property: "modi",
                                            },
                                            "facere": shared.FormBindingElement{
                                                Element: "neque",
                                                Property: "quis",
                                            },
                                            "in": shared.FormBindingElement{
                                                Element: "sed",
                                                Property: "non",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("porro"),
                                            Property: "fugiat",
                                        },
                                        ComponentName: sdk.String("soluta"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("reiciendis"),
                                            Operand: sdk.String("labore"),
                                            OperandType: sdk.String("vero"),
                                            Operator: sdk.String("eos"),
                                            Property: sdk.String("quas"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("quasi"),
                                        Event: sdk.String("architecto"),
                                        ImportedValue: sdk.String("praesentium"),
                                        Model: sdk.String("iusto"),
                                        Property: sdk.String("fugiat"),
                                        Type: sdk.String("enim"),
                                        UserAttribute: sdk.String("iure"),
                                        Value: sdk.String("laudantium"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("modi"),
                                            Property: "magnam",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "nulla": shared.FormBindingElement{
                                                Element: "repudiandae",
                                                Property: "quibusdam",
                                            },
                                            "praesentium": shared.FormBindingElement{
                                                Element: "enim",
                                                Property: "animi",
                                            },
                                            "unde": shared.FormBindingElement{
                                                Element: "quae",
                                                Property: "eum",
                                            },
                                            "nostrum": shared.FormBindingElement{
                                                Element: "eveniet",
                                                Property: "laboriosam",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ratione"),
                                            Property: "blanditiis",
                                        },
                                        ComponentName: sdk.String("quidem"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("reiciendis"),
                                            Operand: sdk.String("placeat"),
                                            OperandType: sdk.String("dolores"),
                                            Operator: sdk.String("consequatur"),
                                            Property: sdk.String("nesciunt"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("quia"),
                                        Event: sdk.String("quidem"),
                                        ImportedValue: sdk.String("voluptas"),
                                        Model: sdk.String("quo"),
                                        Property: sdk.String("laudantium"),
                                        Type: sdk.String("dignissimos"),
                                        UserAttribute: sdk.String("omnis"),
                                        Value: sdk.String("omnis"),
                                    },
                                },
                            },
                            "fugit": shared.ComponentEvent{
                                Action: sdk.String("dolorem"),
                                BindingEvent: sdk.String("quidem"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("molestiae"),
                                            Property: "debitis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "dolor": shared.FormBindingElement{
                                                Element: "ad",
                                                Property: "atque",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ut"),
                                            Property: "asperiores",
                                        },
                                        ComponentName: sdk.String("reprehenderit"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("itaque"),
                                            Operand: sdk.String("et"),
                                            OperandType: sdk.String("eos"),
                                            Operator: sdk.String("impedit"),
                                            Property: sdk.String("ex"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("praesentium"),
                                        Event: sdk.String("natus"),
                                        ImportedValue: sdk.String("vitae"),
                                        Model: sdk.String("tenetur"),
                                        Property: sdk.String("laudantium"),
                                        Type: sdk.String("aspernatur"),
                                        UserAttribute: sdk.String("eligendi"),
                                        Value: sdk.String("repudiandae"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "inventore": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("ullam"),
                                                Property: "iusto",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "voluptate": shared.FormBindingElement{
                                                    Element: "sed",
                                                    Property: "dolorem",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("eaque"),
                                                Property: "exercitationem",
                                            },
                                            ComponentName: sdk.String("amet"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("voluptate"),
                                                Operand: sdk.String("pariatur"),
                                                OperandType: sdk.String("minus"),
                                                Operator: sdk.String("a"),
                                                Property: sdk.String("fuga"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("totam"),
                                            Event: sdk.String("cupiditate"),
                                            ImportedValue: sdk.String("at"),
                                            Model: sdk.String("doloribus"),
                                            Property: sdk.String("omnis"),
                                            Type: sdk.String("quam"),
                                            UserAttribute: sdk.String("exercitationem"),
                                            Value: sdk.String("voluptates"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("sequi"),
                                            Property: "quis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "vel": shared.FormBindingElement{
                                                Element: "rem",
                                                Property: "aliquid",
                                            },
                                            "aperiam": shared.FormBindingElement{
                                                Element: "perspiciatis",
                                                Property: "fugit",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("itaque"),
                                            Property: "unde",
                                        },
                                        ComponentName: sdk.String("cumque"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("repellendus"),
                                            Operand: sdk.String("temporibus"),
                                            OperandType: sdk.String("minus"),
                                            Operator: sdk.String("minima"),
                                            Property: sdk.String("a"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("beatae"),
                                        Event: sdk.String("vitae"),
                                        ImportedValue: sdk.String("veritatis"),
                                        Model: sdk.String("facere"),
                                        Property: sdk.String("earum"),
                                        Type: sdk.String("laborum"),
                                        UserAttribute: sdk.String("dicta"),
                                        Value: sdk.String("voluptatem"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("odit"),
                                            Property: "aliquid",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "enim": shared.FormBindingElement{
                                                Element: "numquam",
                                                Property: "architecto",
                                            },
                                            "est": shared.FormBindingElement{
                                                Element: "quaerat",
                                                Property: "facere",
                                            },
                                            "vitae": shared.FormBindingElement{
                                                Element: "omnis",
                                                Property: "alias",
                                            },
                                            "sapiente": shared.FormBindingElement{
                                                Element: "officiis",
                                                Property: "expedita",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quia"),
                                            Property: "vitae",
                                        },
                                        ComponentName: sdk.String("odio"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("ipsa"),
                                            Operand: sdk.String("distinctio"),
                                            OperandType: sdk.String("placeat"),
                                            Operator: sdk.String("quod"),
                                            Property: sdk.String("eligendi"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("sit"),
                                        Event: sdk.String("possimus"),
                                        ImportedValue: sdk.String("distinctio"),
                                        Model: sdk.String("distinctio"),
                                        Property: sdk.String("assumenda"),
                                        Type: sdk.String("illum"),
                                        UserAttribute: sdk.String("soluta"),
                                        Value: sdk.String("magnam"),
                                    },
                                    Model: sdk.String("laudantium"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "tempora",
                                        Property: "esse",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("doloremque"),
                                                Property: "corrupti",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "facilis": shared.FormBindingElement{
                                                    Element: "aliquam",
                                                    Property: "repudiandae",
                                                },
                                                "amet": shared.FormBindingElement{
                                                    Element: "natus",
                                                    Property: "ab",
                                                },
                                                "officiis": shared.FormBindingElement{
                                                    Element: "eum",
                                                    Property: "rerum",
                                                },
                                                "placeat": shared.FormBindingElement{
                                                    Element: "ab",
                                                    Property: "ad",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("blanditiis"),
                                                Property: "porro",
                                            },
                                            ComponentName: sdk.String("labore"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("ut"),
                                                Operand: sdk.String("earum"),
                                                OperandType: sdk.String("ullam"),
                                                Operator: sdk.String("numquam"),
                                                Property: sdk.String("enim"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("cupiditate"),
                                            Event: sdk.String("occaecati"),
                                            ImportedValue: sdk.String("itaque"),
                                            Model: sdk.String("fuga"),
                                            Property: sdk.String("consectetur"),
                                            Type: sdk.String("modi"),
                                            UserAttribute: sdk.String("aspernatur"),
                                            Value: sdk.String("explicabo"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("suscipit"),
                                            Property: "ipsa",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "sint": shared.FormBindingElement{
                                                Element: "nobis",
                                                Property: "qui",
                                            },
                                            "accusantium": shared.FormBindingElement{
                                                Element: "consequatur",
                                                Property: "impedit",
                                            },
                                            "recusandae": shared.FormBindingElement{
                                                Element: "voluptate",
                                                Property: "deleniti",
                                            },
                                            "est": shared.FormBindingElement{
                                                Element: "et",
                                                Property: "expedita",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quibusdam"),
                                            Property: "quos",
                                        },
                                        ComponentName: sdk.String("maiores"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("in"),
                                            Operand: sdk.String("culpa"),
                                            OperandType: sdk.String("doloremque"),
                                            Operator: sdk.String("fuga"),
                                            Property: sdk.String("dicta"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("architecto"),
                                        Event: sdk.String("suscipit"),
                                        ImportedValue: sdk.String("eligendi"),
                                        Model: sdk.String("officiis"),
                                        Property: sdk.String("dignissimos"),
                                        Type: sdk.String("fugit"),
                                        UserAttribute: sdk.String("ratione"),
                                        Value: sdk.String("possimus"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quaerat"),
                                            Property: "aut",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "esse": shared.FormBindingElement{
                                                Element: "delectus",
                                                Property: "deserunt",
                                            },
                                            "ratione": shared.FormBindingElement{
                                                Element: "ipsa",
                                                Property: "debitis",
                                            },
                                            "iste": shared.FormBindingElement{
                                                Element: "deserunt",
                                                Property: "hic",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ducimus"),
                                            Property: "consequuntur",
                                        },
                                        ComponentName: sdk.String("ipsam"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("quia"),
                                            Operand: sdk.String("omnis"),
                                            OperandType: sdk.String("dicta"),
                                            Operator: sdk.String("qui"),
                                            Property: sdk.String("explicabo"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("consequatur"),
                                        Event: sdk.String("amet"),
                                        ImportedValue: sdk.String("consequatur"),
                                        Model: sdk.String("fugiat"),
                                        Property: sdk.String("voluptatum"),
                                        Type: sdk.String("velit"),
                                        UserAttribute: sdk.String("hic"),
                                        Value: sdk.String("ullam"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("deserunt"),
                                            Property: "itaque",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "iusto": shared.FormBindingElement{
                                                Element: "dignissimos",
                                                Property: "provident",
                                            },
                                            "occaecati": shared.FormBindingElement{
                                                Element: "assumenda",
                                                Property: "sunt",
                                            },
                                            "odit": shared.FormBindingElement{
                                                Element: "vero",
                                                Property: "deleniti",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("optio"),
                                            Property: "quasi",
                                        },
                                        ComponentName: sdk.String("repellat"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("magnam"),
                                            Operand: sdk.String("perspiciatis"),
                                            OperandType: sdk.String("amet"),
                                            Operator: sdk.String("corrupti"),
                                            Property: sdk.String("sunt"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("nemo"),
                                        Event: sdk.String("delectus"),
                                        ImportedValue: sdk.String("illum"),
                                        Model: sdk.String("porro"),
                                        Property: sdk.String("quaerat"),
                                        Type: sdk.String("magni"),
                                        UserAttribute: sdk.String("cumque"),
                                        Value: sdk.String("quos"),
                                    },
                                },
                            },
                        },
                        Name: "Gertrude Schneider",
                        Properties: "consequuntur",
                        SourceID: sdk.String("possimus"),
                    },
                },
                CollectionProperties: map[string]shared.ComponentDataConfiguration{
                    "harum": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "eligendi",
                            "hic",
                        },
                        Model: "quo",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                            },
                            Field: sdk.String("nobis"),
                            Operand: sdk.String("esse"),
                            OperandType: sdk.String("nisi"),
                            Operator: sdk.String("explicabo"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "quos",
                            },
                        },
                    },
                    "numquam": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "maiores",
                        },
                        Model: "nam",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                            },
                            Field: sdk.String("rerum"),
                            Operand: sdk.String("assumenda"),
                            OperandType: sdk.String("eos"),
                            Operator: sdk.String("dolorem"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "ab",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "pariatur",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "autem",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "recusandae",
                            },
                        },
                    },
                    "nostrum": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "voluptas",
                            "laudantium",
                            "corporis",
                        },
                        Model: "excepturi",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                            Field: sdk.String("deleniti"),
                            Operand: sdk.String("necessitatibus"),
                            OperandType: sdk.String("aspernatur"),
                            Operator: sdk.String("dolores"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "voluptatem",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "id",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "commodi",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "minus",
                            },
                        },
                    },
                    "sed": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "quia",
                            "iusto",
                            "ab",
                        },
                        Model: "deserunt",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                            },
                            Field: sdk.String("blanditiis"),
                            Operand: sdk.String("sint"),
                            OperandType: sdk.String("placeat"),
                            Operator: sdk.String("ullam"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "nemo",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "recusandae",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "ipsa",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "dolor",
                            },
                        },
                    },
                },
                ComponentType: sdk.String("occaecati"),
                Events: map[string]shared.ComponentEvent{
                    "magni": shared.ComponentEvent{
                        Action: sdk.String("consequuntur"),
                        BindingEvent: sdk.String("consequuntur"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("eius"),
                                    Property: "commodi",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "vel": shared.FormBindingElement{
                                        Element: "cupiditate",
                                        Property: "modi",
                                    },
                                    "nisi": shared.FormBindingElement{
                                        Element: "explicabo",
                                        Property: "modi",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("doloremque"),
                                    Property: "odio",
                                },
                                ComponentName: sdk.String("sit"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("tempora"),
                                    Operand: sdk.String("delectus"),
                                    OperandType: sdk.String("quam"),
                                    Operator: sdk.String("dolorum"),
                                    Property: sdk.String("libero"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("ratione"),
                                Event: sdk.String("molestiae"),
                                ImportedValue: sdk.String("optio"),
                                Model: sdk.String("saepe"),
                                Property: sdk.String("maiores"),
                                Type: sdk.String("accusantium"),
                                UserAttribute: sdk.String("sed"),
                                Value: sdk.String("eos"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "quis": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("vitae"),
                                        Property: "occaecati",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "fugiat": shared.FormBindingElement{
                                            Element: "quidem",
                                            Property: "exercitationem",
                                        },
                                        "veniam": shared.FormBindingElement{
                                            Element: "modi",
                                            Property: "quasi",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("quae"),
                                        Property: "similique",
                                    },
                                    ComponentName: sdk.String("possimus"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("suscipit"),
                                        Operand: sdk.String("ex"),
                                        OperandType: sdk.String("sint"),
                                        Operator: sdk.String("est"),
                                        Property: sdk.String("doloribus"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("provident"),
                                    Event: sdk.String("alias"),
                                    ImportedValue: sdk.String("deserunt"),
                                    Model: sdk.String("fugit"),
                                    Property: sdk.String("autem"),
                                    Type: sdk.String("quo"),
                                    UserAttribute: sdk.String("molestiae"),
                                    Value: sdk.String("maxime"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("facere"),
                                    Property: "impedit",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "deleniti": shared.FormBindingElement{
                                        Element: "quasi",
                                        Property: "maiores",
                                    },
                                    "voluptatem": shared.FormBindingElement{
                                        Element: "aliquid",
                                        Property: "laudantium",
                                    },
                                    "unde": shared.FormBindingElement{
                                        Element: "corrupti",
                                        Property: "quae",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("facere"),
                                    Property: "ea",
                                },
                                ComponentName: sdk.String("libero"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("amet"),
                                    Operand: sdk.String("adipisci"),
                                    OperandType: sdk.String("minus"),
                                    Operator: sdk.String("hic"),
                                    Property: sdk.String("similique"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("fuga"),
                                Event: sdk.String("consectetur"),
                                ImportedValue: sdk.String("labore"),
                                Model: sdk.String("laudantium"),
                                Property: sdk.String("cumque"),
                                Type: sdk.String("adipisci"),
                                UserAttribute: sdk.String("veritatis"),
                                Value: sdk.String("nam"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("voluptatibus"),
                                    Property: "magnam",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "ducimus": shared.FormBindingElement{
                                        Element: "itaque",
                                        Property: "necessitatibus",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("numquam"),
                                    Property: "doloribus",
                                },
                                ComponentName: sdk.String("eligendi"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("alias"),
                                    Operand: sdk.String("impedit"),
                                    OperandType: sdk.String("numquam"),
                                    Operator: sdk.String("aspernatur"),
                                    Property: sdk.String("nobis"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("nihil"),
                                Event: sdk.String("voluptatum"),
                                ImportedValue: sdk.String("reiciendis"),
                                Model: sdk.String("vitae"),
                                Property: sdk.String("ullam"),
                                Type: sdk.String("nisi"),
                                UserAttribute: sdk.String("consequuntur"),
                                Value: sdk.String("voluptas"),
                            },
                            Model: sdk.String("ratione"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "excepturi",
                                Property: "corrupti",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("est"),
                                        Property: "perferendis",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "impedit": shared.FormBindingElement{
                                            Element: "ducimus",
                                            Property: "nisi",
                                        },
                                        "nisi": shared.FormBindingElement{
                                            Element: "dolor",
                                            Property: "fugit",
                                        },
                                        "dolore": shared.FormBindingElement{
                                            Element: "maxime",
                                            Property: "maxime",
                                        },
                                        "expedita": shared.FormBindingElement{
                                            Element: "accusantium",
                                            Property: "ea",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("impedit"),
                                        Property: "totam",
                                    },
                                    ComponentName: sdk.String("optio"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("inventore"),
                                        Operand: sdk.String("consequuntur"),
                                        OperandType: sdk.String("repellendus"),
                                        Operator: sdk.String("sit"),
                                        Property: sdk.String("dolores"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("enim"),
                                    Event: sdk.String("aspernatur"),
                                    ImportedValue: sdk.String("perspiciatis"),
                                    Model: sdk.String("magni"),
                                    Property: sdk.String("odio"),
                                    Type: sdk.String("alias"),
                                    UserAttribute: sdk.String("quidem"),
                                    Value: sdk.String("deleniti"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("possimus"),
                                    Property: "ipsam",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "fugit": shared.FormBindingElement{
                                        Element: "aspernatur",
                                        Property: "at",
                                    },
                                    "illum": shared.FormBindingElement{
                                        Element: "praesentium",
                                        Property: "sint",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("exercitationem"),
                                    Property: "cum",
                                },
                                ComponentName: sdk.String("voluptatum"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("placeat"),
                                    Operand: sdk.String("reiciendis"),
                                    OperandType: sdk.String("dolores"),
                                    Operator: sdk.String("dolore"),
                                    Property: sdk.String("pariatur"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("facilis"),
                                Event: sdk.String("cupiditate"),
                                ImportedValue: sdk.String("nemo"),
                                Model: sdk.String("natus"),
                                Property: sdk.String("nisi"),
                                Type: sdk.String("provident"),
                                UserAttribute: sdk.String("amet"),
                                Value: sdk.String("dolor"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nostrum"),
                                    Property: "qui",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "molestiae": shared.FormBindingElement{
                                        Element: "dolore",
                                        Property: "ullam",
                                    },
                                    "velit": shared.FormBindingElement{
                                        Element: "adipisci",
                                        Property: "cupiditate",
                                    },
                                    "occaecati": shared.FormBindingElement{
                                        Element: "numquam",
                                        Property: "fugiat",
                                    },
                                    "molestiae": shared.FormBindingElement{
                                        Element: "quas",
                                        Property: "repellendus",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("saepe"),
                                    Property: "amet",
                                },
                                ComponentName: sdk.String("distinctio"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("necessitatibus"),
                                    Operand: sdk.String("iste"),
                                    OperandType: sdk.String("nesciunt"),
                                    Operator: sdk.String("corrupti"),
                                    Property: sdk.String("cupiditate"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("voluptatibus"),
                                Event: sdk.String("ullam"),
                                ImportedValue: sdk.String("dolorum"),
                                Model: sdk.String("soluta"),
                                Property: sdk.String("cum"),
                                Type: sdk.String("in"),
                                UserAttribute: sdk.String("delectus"),
                                Value: sdk.String("commodi"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("commodi"),
                                    Property: "fugit",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "ullam": shared.FormBindingElement{
                                        Element: "doloremque",
                                        Property: "est",
                                    },
                                    "qui": shared.FormBindingElement{
                                        Element: "praesentium",
                                        Property: "adipisci",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("totam"),
                                    Property: "qui",
                                },
                                ComponentName: sdk.String("deserunt"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("incidunt"),
                                    Operand: sdk.String("deleniti"),
                                    OperandType: sdk.String("dolor"),
                                    Operator: sdk.String("est"),
                                    Property: sdk.String("reiciendis"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("possimus"),
                                Event: sdk.String("odit"),
                                ImportedValue: sdk.String("consectetur"),
                                Model: sdk.String("inventore"),
                                Property: sdk.String("minima"),
                                Type: sdk.String("facilis"),
                                UserAttribute: sdk.String("facilis"),
                                Value: sdk.String("deserunt"),
                            },
                        },
                    },
                    "nisi": shared.ComponentEvent{
                        Action: sdk.String("ipsam"),
                        BindingEvent: sdk.String("voluptatem"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("illo"),
                                    Property: "iure",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "eveniet": shared.FormBindingElement{
                                        Element: "quae",
                                        Property: "ea",
                                    },
                                    "asperiores": shared.FormBindingElement{
                                        Element: "veniam",
                                        Property: "quidem",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("asperiores"),
                                    Property: "eum",
                                },
                                ComponentName: sdk.String("deserunt"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("nemo"),
                                    Operand: sdk.String("molestias"),
                                    OperandType: sdk.String("architecto"),
                                    Operator: sdk.String("expedita"),
                                    Property: sdk.String("quisquam"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("praesentium"),
                                Event: sdk.String("facilis"),
                                ImportedValue: sdk.String("assumenda"),
                                Model: sdk.String("repudiandae"),
                                Property: sdk.String("maiores"),
                                Type: sdk.String("ipsum"),
                                UserAttribute: sdk.String("commodi"),
                                Value: sdk.String("vitae"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "nam": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("ex"),
                                        Property: "neque",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "eos": shared.FormBindingElement{
                                            Element: "alias",
                                            Property: "ad",
                                        },
                                        "a": shared.FormBindingElement{
                                            Element: "facere",
                                            Property: "id",
                                        },
                                        "atque": shared.FormBindingElement{
                                            Element: "quaerat",
                                            Property: "aperiam",
                                        },
                                        "dignissimos": shared.FormBindingElement{
                                            Element: "quam",
                                            Property: "modi",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("fuga"),
                                        Property: "iure",
                                    },
                                    ComponentName: sdk.String("deleniti"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("sint"),
                                        Operand: sdk.String("laborum"),
                                        OperandType: sdk.String("dolor"),
                                        Operator: sdk.String("ad"),
                                        Property: sdk.String("illum"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("sit"),
                                    Event: sdk.String("molestias"),
                                    ImportedValue: sdk.String("voluptas"),
                                    Model: sdk.String("expedita"),
                                    Property: sdk.String("voluptas"),
                                    Type: sdk.String("maiores"),
                                    UserAttribute: sdk.String("ea"),
                                    Value: sdk.String("vel"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("delectus"),
                                    Property: "accusamus",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "consequatur": shared.FormBindingElement{
                                        Element: "sed",
                                        Property: "accusantium",
                                    },
                                    "voluptates": shared.FormBindingElement{
                                        Element: "provident",
                                        Property: "maiores",
                                    },
                                    "quaerat": shared.FormBindingElement{
                                        Element: "numquam",
                                        Property: "non",
                                    },
                                    "cum": shared.FormBindingElement{
                                        Element: "incidunt",
                                        Property: "dolores",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("enim"),
                                    Property: "nihil",
                                },
                                ComponentName: sdk.String("libero"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("excepturi"),
                                    Operand: sdk.String("eos"),
                                    OperandType: sdk.String("quisquam"),
                                    Operator: sdk.String("corrupti"),
                                    Property: sdk.String("repellendus"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("cum"),
                                Event: sdk.String("quibusdam"),
                                ImportedValue: sdk.String("est"),
                                Model: sdk.String("commodi"),
                                Property: sdk.String("similique"),
                                Type: sdk.String("autem"),
                                UserAttribute: sdk.String("dicta"),
                                Value: sdk.String("recusandae"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("sapiente"),
                                    Property: "id",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "inventore": shared.FormBindingElement{
                                        Element: "iste",
                                        Property: "atque",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("explicabo"),
                                    Property: "ullam",
                                },
                                ComponentName: sdk.String("atque"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("pariatur"),
                                    Operand: sdk.String("aut"),
                                    OperandType: sdk.String("similique"),
                                    Operator: sdk.String("iste"),
                                    Property: sdk.String("eveniet"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("nam"),
                                Event: sdk.String("animi"),
                                ImportedValue: sdk.String("labore"),
                                Model: sdk.String("voluptate"),
                                Property: sdk.String("voluptatibus"),
                                Type: sdk.String("quam"),
                                UserAttribute: sdk.String("nulla"),
                                Value: sdk.String("dolorem"),
                            },
                            Model: sdk.String("voluptates"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "a",
                                Property: "perferendis",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("quaerat"),
                                        Property: "excepturi",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "dolore": shared.FormBindingElement{
                                            Element: "voluptatem",
                                            Property: "illum",
                                        },
                                        "laboriosam": shared.FormBindingElement{
                                            Element: "culpa",
                                            Property: "dicta",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("atque"),
                                        Property: "ratione",
                                    },
                                    ComponentName: sdk.String("vitae"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("atque"),
                                        Operand: sdk.String("nihil"),
                                        OperandType: sdk.String("culpa"),
                                        Operator: sdk.String("temporibus"),
                                        Property: sdk.String("a"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("ad"),
                                    Event: sdk.String("cupiditate"),
                                    ImportedValue: sdk.String("suscipit"),
                                    Model: sdk.String("reiciendis"),
                                    Property: sdk.String("repellendus"),
                                    Type: sdk.String("delectus"),
                                    UserAttribute: sdk.String("ab"),
                                    Value: sdk.String("mollitia"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("possimus"),
                                    Property: "praesentium",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "quam": shared.FormBindingElement{
                                        Element: "animi",
                                        Property: "debitis",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("voluptatum"),
                                    Property: "voluptatem",
                                },
                                ComponentName: sdk.String("quisquam"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("cumque"),
                                    Operand: sdk.String("architecto"),
                                    OperandType: sdk.String("sint"),
                                    Operator: sdk.String("eligendi"),
                                    Property: sdk.String("occaecati"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("quis"),
                                Event: sdk.String("tempore"),
                                ImportedValue: sdk.String("officia"),
                                Model: sdk.String("iste"),
                                Property: sdk.String("unde"),
                                Type: sdk.String("quas"),
                                UserAttribute: sdk.String("laboriosam"),
                                Value: sdk.String("ducimus"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("voluptatum"),
                                    Property: "sapiente",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "dolor": shared.FormBindingElement{
                                        Element: "hic",
                                        Property: "iure",
                                    },
                                    "sint": shared.FormBindingElement{
                                        Element: "autem",
                                        Property: "iste",
                                    },
                                    "cupiditate": shared.FormBindingElement{
                                        Element: "ab",
                                        Property: "fuga",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("a"),
                                    Property: "dolor",
                                },
                                ComponentName: sdk.String("voluptatum"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("quod"),
                                    Operand: sdk.String("repudiandae"),
                                    OperandType: sdk.String("eaque"),
                                    Operator: sdk.String("consectetur"),
                                    Property: sdk.String("autem"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("vitae"),
                                Event: sdk.String("numquam"),
                                ImportedValue: sdk.String("incidunt"),
                                Model: sdk.String("modi"),
                                Property: sdk.String("quos"),
                                Type: sdk.String("minus"),
                                UserAttribute: sdk.String("voluptate"),
                                Value: sdk.String("error"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("reprehenderit"),
                                    Property: "reprehenderit",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "consequatur": shared.FormBindingElement{
                                        Element: "voluptates",
                                        Property: "delectus",
                                    },
                                    "qui": shared.FormBindingElement{
                                        Element: "delectus",
                                        Property: "exercitationem",
                                    },
                                    "ipsum": shared.FormBindingElement{
                                        Element: "laboriosam",
                                        Property: "doloremque",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("sed"),
                                    Property: "voluptatum",
                                },
                                ComponentName: sdk.String("debitis"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("itaque"),
                                    Operand: sdk.String("eveniet"),
                                    OperandType: sdk.String("repellat"),
                                    Operator: sdk.String("cupiditate"),
                                    Property: sdk.String("adipisci"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("aliquam"),
                                Event: sdk.String("illo"),
                                ImportedValue: sdk.String("veniam"),
                                Model: sdk.String("sed"),
                                Property: sdk.String("necessitatibus"),
                                Type: sdk.String("possimus"),
                                UserAttribute: sdk.String("dignissimos"),
                                Value: sdk.String("itaque"),
                            },
                        },
                    },
                    "explicabo": shared.ComponentEvent{
                        Action: sdk.String("ullam"),
                        BindingEvent: sdk.String("non"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("delectus"),
                                    Property: "incidunt",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "sunt": shared.FormBindingElement{
                                        Element: "ullam",
                                        Property: "quam",
                                    },
                                    "illum": shared.FormBindingElement{
                                        Element: "voluptates",
                                        Property: "officia",
                                    },
                                    "est": shared.FormBindingElement{
                                        Element: "in",
                                        Property: "illo",
                                    },
                                    "voluptate": shared.FormBindingElement{
                                        Element: "consequatur",
                                        Property: "delectus",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("incidunt"),
                                    Property: "dolore",
                                },
                                ComponentName: sdk.String("nemo"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("quo"),
                                    Operand: sdk.String("maxime"),
                                    OperandType: sdk.String("delectus"),
                                    Operator: sdk.String("laboriosam"),
                                    Property: sdk.String("laboriosam"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("quam"),
                                Event: sdk.String("fuga"),
                                ImportedValue: sdk.String("officia"),
                                Model: sdk.String("repellat"),
                                Property: sdk.String("cupiditate"),
                                Type: sdk.String("soluta"),
                                UserAttribute: sdk.String("tempore"),
                                Value: sdk.String("culpa"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "inventore": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("atque"),
                                        Property: "ad",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "voluptates": shared.FormBindingElement{
                                            Element: "ut",
                                            Property: "nesciunt",
                                        },
                                        "ab": shared.FormBindingElement{
                                            Element: "quibusdam",
                                            Property: "suscipit",
                                        },
                                        "quidem": shared.FormBindingElement{
                                            Element: "delectus",
                                            Property: "nemo",
                                        },
                                        "cumque": shared.FormBindingElement{
                                            Element: "voluptatum",
                                            Property: "sequi",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("atque"),
                                        Property: "maiores",
                                    },
                                    ComponentName: sdk.String("expedita"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("totam"),
                                        Operand: sdk.String("quod"),
                                        OperandType: sdk.String("aspernatur"),
                                        Operator: sdk.String("eaque"),
                                        Property: sdk.String("impedit"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("nam"),
                                    Event: sdk.String("ex"),
                                    ImportedValue: sdk.String("odio"),
                                    Model: sdk.String("delectus"),
                                    Property: sdk.String("minus"),
                                    Type: sdk.String("ut"),
                                    UserAttribute: sdk.String("distinctio"),
                                    Value: sdk.String("eius"),
                                },
                                "eos": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("veniam"),
                                        Property: "repudiandae",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "occaecati": shared.FormBindingElement{
                                            Element: "debitis",
                                            Property: "laboriosam",
                                        },
                                        "eos": shared.FormBindingElement{
                                            Element: "amet",
                                            Property: "incidunt",
                                        },
                                        "porro": shared.FormBindingElement{
                                            Element: "occaecati",
                                            Property: "reiciendis",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("voluptate"),
                                        Property: "tempore",
                                    },
                                    ComponentName: sdk.String("in"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("possimus"),
                                        Operand: sdk.String("tenetur"),
                                        OperandType: sdk.String("recusandae"),
                                        Operator: sdk.String("expedita"),
                                        Property: sdk.String("iusto"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("esse"),
                                    Event: sdk.String("harum"),
                                    ImportedValue: sdk.String("ad"),
                                    Model: sdk.String("quod"),
                                    Property: sdk.String("ratione"),
                                    Type: sdk.String("totam"),
                                    UserAttribute: sdk.String("vero"),
                                    Value: sdk.String("dolore"),
                                },
                                "nam": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("officia"),
                                        Property: "maiores",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "illo": shared.FormBindingElement{
                                            Element: "saepe",
                                            Property: "enim",
                                        },
                                        "eaque": shared.FormBindingElement{
                                            Element: "ex",
                                            Property: "eveniet",
                                        },
                                        "delectus": shared.FormBindingElement{
                                            Element: "deleniti",
                                            Property: "provident",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("aut"),
                                        Property: "dolorum",
                                    },
                                    ComponentName: sdk.String("nostrum"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("nam"),
                                        Operand: sdk.String("numquam"),
                                        OperandType: sdk.String("odio"),
                                        Operator: sdk.String("nostrum"),
                                        Property: sdk.String("maiores"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("veritatis"),
                                    Event: sdk.String("autem"),
                                    ImportedValue: sdk.String("earum"),
                                    Model: sdk.String("minima"),
                                    Property: sdk.String("ex"),
                                    Type: sdk.String("possimus"),
                                    UserAttribute: sdk.String("nesciunt"),
                                    Value: sdk.String("corrupti"),
                                },
                                "nostrum": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("fuga"),
                                        Property: "sequi",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "numquam": shared.FormBindingElement{
                                            Element: "laborum",
                                            Property: "eligendi",
                                        },
                                        "autem": shared.FormBindingElement{
                                            Element: "adipisci",
                                            Property: "sunt",
                                        },
                                        "rerum": shared.FormBindingElement{
                                            Element: "occaecati",
                                            Property: "provident",
                                        },
                                        "necessitatibus": shared.FormBindingElement{
                                            Element: "fugit",
                                            Property: "autem",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("optio"),
                                        Property: "eveniet",
                                    },
                                    ComponentName: sdk.String("fugiat"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("a"),
                                        Operand: sdk.String("natus"),
                                        OperandType: sdk.String("sapiente"),
                                        Operator: sdk.String("repellendus"),
                                        Property: sdk.String("facilis"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("molestias"),
                                    Event: sdk.String("dolore"),
                                    ImportedValue: sdk.String("et"),
                                    Model: sdk.String("accusantium"),
                                    Property: sdk.String("maiores"),
                                    Type: sdk.String("nisi"),
                                    UserAttribute: sdk.String("velit"),
                                    Value: sdk.String("tempore"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("expedita"),
                                    Property: "hic",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "vitae": shared.FormBindingElement{
                                        Element: "iusto",
                                        Property: "atque",
                                    },
                                    "velit": shared.FormBindingElement{
                                        Element: "molestiae",
                                        Property: "nam",
                                    },
                                    "aperiam": shared.FormBindingElement{
                                        Element: "vitae",
                                        Property: "mollitia",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("asperiores"),
                                    Property: "at",
                                },
                                ComponentName: sdk.String("quibusdam"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("deleniti"),
                                    Operand: sdk.String("rem"),
                                    OperandType: sdk.String("vel"),
                                    Operator: sdk.String("eos"),
                                    Property: sdk.String("labore"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("sunt"),
                                Event: sdk.String("blanditiis"),
                                ImportedValue: sdk.String("iste"),
                                Model: sdk.String("accusamus"),
                                Property: sdk.String("distinctio"),
                                Type: sdk.String("incidunt"),
                                UserAttribute: sdk.String("labore"),
                                Value: sdk.String("blanditiis"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("ducimus"),
                                    Property: "consectetur",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "quis": shared.FormBindingElement{
                                        Element: "accusantium",
                                        Property: "ratione",
                                    },
                                    "consectetur": shared.FormBindingElement{
                                        Element: "asperiores",
                                        Property: "architecto",
                                    },
                                    "sint": shared.FormBindingElement{
                                        Element: "possimus",
                                        Property: "tempore",
                                    },
                                    "asperiores": shared.FormBindingElement{
                                        Element: "quasi",
                                        Property: "consequuntur",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nemo"),
                                    Property: "nobis",
                                },
                                ComponentName: sdk.String("debitis"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("veritatis"),
                                    Operand: sdk.String("minima"),
                                    OperandType: sdk.String("magni"),
                                    Operator: sdk.String("itaque"),
                                    Property: sdk.String("error"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("expedita"),
                                Event: sdk.String("error"),
                                ImportedValue: sdk.String("placeat"),
                                Model: sdk.String("temporibus"),
                                Property: sdk.String("voluptate"),
                                Type: sdk.String("earum"),
                                UserAttribute: sdk.String("minima"),
                                Value: sdk.String("odit"),
                            },
                            Model: sdk.String("odit"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "eius",
                                Property: "error",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("vel"),
                                        Property: "dolorum",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "itaque": shared.FormBindingElement{
                                            Element: "ab",
                                            Property: "sunt",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("amet"),
                                        Property: "cum",
                                    },
                                    ComponentName: sdk.String("iusto"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("non"),
                                        Operand: sdk.String("esse"),
                                        OperandType: sdk.String("vero"),
                                        Operator: sdk.String("eligendi"),
                                        Property: sdk.String("minima"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("omnis"),
                                    Event: sdk.String("recusandae"),
                                    ImportedValue: sdk.String("architecto"),
                                    Model: sdk.String("voluptatibus"),
                                    Property: sdk.String("autem"),
                                    Type: sdk.String("in"),
                                    UserAttribute: sdk.String("repellat"),
                                    Value: sdk.String("amet"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("cumque"),
                                    Property: "dolore",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "quo": shared.FormBindingElement{
                                        Element: "repudiandae",
                                        Property: "tempora",
                                    },
                                    "libero": shared.FormBindingElement{
                                        Element: "suscipit",
                                        Property: "illum",
                                    },
                                    "iusto": shared.FormBindingElement{
                                        Element: "aliquid",
                                        Property: "sint",
                                    },
                                    "aliquid": shared.FormBindingElement{
                                        Element: "repellat",
                                        Property: "sapiente",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("consectetur"),
                                    Property: "eligendi",
                                },
                                ComponentName: sdk.String("ullam"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("eius"),
                                    Operand: sdk.String("dignissimos"),
                                    OperandType: sdk.String("corporis"),
                                    Operator: sdk.String("perferendis"),
                                    Property: sdk.String("architecto"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("amet"),
                                Event: sdk.String("corporis"),
                                ImportedValue: sdk.String("nihil"),
                                Model: sdk.String("officiis"),
                                Property: sdk.String("dolore"),
                                Type: sdk.String("magnam"),
                                UserAttribute: sdk.String("maiores"),
                                Value: sdk.String("ipsam"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("dicta"),
                                    Property: "hic",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "libero": shared.FormBindingElement{
                                        Element: "consequatur",
                                        Property: "totam",
                                    },
                                    "tempora": shared.FormBindingElement{
                                        Element: "quo",
                                        Property: "dolor",
                                    },
                                    "sunt": shared.FormBindingElement{
                                        Element: "omnis",
                                        Property: "quam",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("officiis"),
                                    Property: "dicta",
                                },
                                ComponentName: sdk.String("excepturi"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("deserunt"),
                                    Operand: sdk.String("odit"),
                                    OperandType: sdk.String("incidunt"),
                                    Operator: sdk.String("corporis"),
                                    Property: sdk.String("quaerat"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("suscipit"),
                                Event: sdk.String("ducimus"),
                                ImportedValue: sdk.String("tenetur"),
                                Model: sdk.String("excepturi"),
                                Property: sdk.String("modi"),
                                Type: sdk.String("corrupti"),
                                UserAttribute: sdk.String("nihil"),
                                Value: sdk.String("eius"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("placeat"),
                                    Property: "fugit",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "ipsam": shared.FormBindingElement{
                                        Element: "nobis",
                                        Property: "porro",
                                    },
                                    "labore": shared.FormBindingElement{
                                        Element: "perspiciatis",
                                        Property: "ducimus",
                                    },
                                    "qui": shared.FormBindingElement{
                                        Element: "qui",
                                        Property: "consectetur",
                                    },
                                    "ratione": shared.FormBindingElement{
                                        Element: "saepe",
                                        Property: "iure",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("aliquid"),
                                    Property: "cum",
                                },
                                ComponentName: sdk.String("fugiat"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("voluptatibus"),
                                    Operand: sdk.String("officiis"),
                                    OperandType: sdk.String("corporis"),
                                    Operator: sdk.String("repellendus"),
                                    Property: sdk.String("aut"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("voluptatem"),
                                Event: sdk.String("libero"),
                                ImportedValue: sdk.String("excepturi"),
                                Model: sdk.String("odio"),
                                Property: sdk.String("omnis"),
                                Type: sdk.String("officiis"),
                                UserAttribute: sdk.String("delectus"),
                                Value: sdk.String("magni"),
                            },
                        },
                    },
                    "sit": shared.ComponentEvent{
                        Action: sdk.String("velit"),
                        BindingEvent: sdk.String("voluptatum"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nihil"),
                                    Property: "neque",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "eaque": shared.FormBindingElement{
                                        Element: "corporis",
                                        Property: "cupiditate",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("aut"),
                                    Property: "impedit",
                                },
                                ComponentName: sdk.String("quod"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("architecto"),
                                    Operand: sdk.String("voluptatem"),
                                    OperandType: sdk.String("perspiciatis"),
                                    Operator: sdk.String("ea"),
                                    Property: sdk.String("eius"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("aperiam"),
                                Event: sdk.String("voluptatem"),
                                ImportedValue: sdk.String("non"),
                                Model: sdk.String("beatae"),
                                Property: sdk.String("sequi"),
                                Type: sdk.String("rerum"),
                                UserAttribute: sdk.String("ipsum"),
                                Value: sdk.String("debitis"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "eaque": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("incidunt"),
                                        Property: "ut",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "aliquid": shared.FormBindingElement{
                                            Element: "ullam",
                                            Property: "maiores",
                                        },
                                        "debitis": shared.FormBindingElement{
                                            Element: "reprehenderit",
                                            Property: "eos",
                                        },
                                        "assumenda": shared.FormBindingElement{
                                            Element: "cumque",
                                            Property: "ut",
                                        },
                                        "quae": shared.FormBindingElement{
                                            Element: "nihil",
                                            Property: "quam",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("assumenda"),
                                        Property: "consequatur",
                                    },
                                    ComponentName: sdk.String("cumque"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("adipisci"),
                                        Operand: sdk.String("tenetur"),
                                        OperandType: sdk.String("non"),
                                        Operator: sdk.String("accusantium"),
                                        Property: sdk.String("corrupti"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("itaque"),
                                    Event: sdk.String("earum"),
                                    ImportedValue: sdk.String("impedit"),
                                    Model: sdk.String("dicta"),
                                    Property: sdk.String("corporis"),
                                    Type: sdk.String("impedit"),
                                    UserAttribute: sdk.String("eveniet"),
                                    Value: sdk.String("cum"),
                                },
                                "dolore": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("illum"),
                                        Property: "ea",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "quasi": shared.FormBindingElement{
                                            Element: "accusamus",
                                            Property: "animi",
                                        },
                                        "necessitatibus": shared.FormBindingElement{
                                            Element: "voluptatem",
                                            Property: "maiores",
                                        },
                                        "odio": shared.FormBindingElement{
                                            Element: "veniam",
                                            Property: "fuga",
                                        },
                                        "itaque": shared.FormBindingElement{
                                            Element: "possimus",
                                            Property: "tenetur",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("sed"),
                                        Property: "deserunt",
                                    },
                                    ComponentName: sdk.String("eligendi"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("distinctio"),
                                        Operand: sdk.String("corporis"),
                                        OperandType: sdk.String("quas"),
                                        Operator: sdk.String("soluta"),
                                        Property: sdk.String("cupiditate"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("unde"),
                                    Event: sdk.String("et"),
                                    ImportedValue: sdk.String("quisquam"),
                                    Model: sdk.String("unde"),
                                    Property: sdk.String("sed"),
                                    Type: sdk.String("suscipit"),
                                    UserAttribute: sdk.String("facere"),
                                    Value: sdk.String("pariatur"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nam"),
                                    Property: "quaerat",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "sint": shared.FormBindingElement{
                                        Element: "eius",
                                        Property: "vel",
                                    },
                                    "quasi": shared.FormBindingElement{
                                        Element: "vero",
                                        Property: "odio",
                                    },
                                    "numquam": shared.FormBindingElement{
                                        Element: "fugit",
                                        Property: "inventore",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("optio"),
                                    Property: "nobis",
                                },
                                ComponentName: sdk.String("recusandae"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("possimus"),
                                    Operand: sdk.String("provident"),
                                    OperandType: sdk.String("veniam"),
                                    Operator: sdk.String("sit"),
                                    Property: sdk.String("fugit"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("a"),
                                Event: sdk.String("consequatur"),
                                ImportedValue: sdk.String("vero"),
                                Model: sdk.String("id"),
                                Property: sdk.String("error"),
                                Type: sdk.String("ratione"),
                                UserAttribute: sdk.String("perferendis"),
                                Value: sdk.String("distinctio"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("voluptas"),
                                    Property: "sint",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "nihil": shared.FormBindingElement{
                                        Element: "fuga",
                                        Property: "cumque",
                                    },
                                    "consequuntur": shared.FormBindingElement{
                                        Element: "maiores",
                                        Property: "esse",
                                    },
                                    "explicabo": shared.FormBindingElement{
                                        Element: "delectus",
                                        Property: "quos",
                                    },
                                    "deleniti": shared.FormBindingElement{
                                        Element: "enim",
                                        Property: "sit",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("voluptatem"),
                                    Property: "natus",
                                },
                                ComponentName: sdk.String("voluptatem"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("occaecati"),
                                    Operand: sdk.String("quasi"),
                                    OperandType: sdk.String("veritatis"),
                                    Operator: sdk.String("ex"),
                                    Property: sdk.String("doloremque"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("quas"),
                                Event: sdk.String("dolores"),
                                ImportedValue: sdk.String("perferendis"),
                                Model: sdk.String("esse"),
                                Property: sdk.String("quas"),
                                Type: sdk.String("blanditiis"),
                                UserAttribute: sdk.String("laudantium"),
                                Value: sdk.String("voluptates"),
                            },
                            Model: sdk.String("minus"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "autem",
                                Property: "vel",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("beatae"),
                                        Property: "quos",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "soluta": shared.FormBindingElement{
                                            Element: "tenetur",
                                            Property: "necessitatibus",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("perspiciatis"),
                                        Property: "suscipit",
                                    },
                                    ComponentName: sdk.String("ullam"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("debitis"),
                                        Operand: sdk.String("quidem"),
                                        OperandType: sdk.String("magnam"),
                                        Operator: sdk.String("doloremque"),
                                        Property: sdk.String("accusamus"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("quod"),
                                    Event: sdk.String("sunt"),
                                    ImportedValue: sdk.String("voluptas"),
                                    Model: sdk.String("earum"),
                                    Property: sdk.String("est"),
                                    Type: sdk.String("earum"),
                                    UserAttribute: sdk.String("nihil"),
                                    Value: sdk.String("nostrum"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("rerum"),
                                    Property: "perferendis",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "ullam": shared.FormBindingElement{
                                        Element: "ratione",
                                        Property: "eos",
                                    },
                                    "id": shared.FormBindingElement{
                                        Element: "modi",
                                        Property: "illum",
                                    },
                                    "error": shared.FormBindingElement{
                                        Element: "consectetur",
                                        Property: "reprehenderit",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("eligendi"),
                                    Property: "cum",
                                },
                                ComponentName: sdk.String("culpa"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("a"),
                                    Operand: sdk.String("magnam"),
                                    OperandType: sdk.String("eius"),
                                    Operator: sdk.String("ad"),
                                    Property: sdk.String("quia"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("quod"),
                                Event: sdk.String("quaerat"),
                                ImportedValue: sdk.String("voluptatum"),
                                Model: sdk.String("numquam"),
                                Property: sdk.String("explicabo"),
                                Type: sdk.String("eligendi"),
                                UserAttribute: sdk.String("cupiditate"),
                                Value: sdk.String("tempore"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("odit"),
                                    Property: "est",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "ipsum": shared.FormBindingElement{
                                        Element: "explicabo",
                                        Property: "nulla",
                                    },
                                    "est": shared.FormBindingElement{
                                        Element: "sapiente",
                                        Property: "necessitatibus",
                                    },
                                    "voluptatum": shared.FormBindingElement{
                                        Element: "quasi",
                                        Property: "mollitia",
                                    },
                                    "voluptatum": shared.FormBindingElement{
                                        Element: "blanditiis",
                                        Property: "sapiente",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("ut"),
                                    Property: "incidunt",
                                },
                                ComponentName: sdk.String("labore"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("enim"),
                                    Operand: sdk.String("nihil"),
                                    OperandType: sdk.String("ratione"),
                                    Operator: sdk.String("tenetur"),
                                    Property: sdk.String("saepe"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("quod"),
                                Event: sdk.String("nulla"),
                                ImportedValue: sdk.String("tempora"),
                                Model: sdk.String("quam"),
                                Property: sdk.String("consectetur"),
                                Type: sdk.String("nemo"),
                                UserAttribute: sdk.String("nesciunt"),
                                Value: sdk.String("earum"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("eum"),
                                    Property: "dolor",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "quos": shared.FormBindingElement{
                                        Element: "sed",
                                        Property: "eaque",
                                    },
                                    "natus": shared.FormBindingElement{
                                        Element: "ratione",
                                        Property: "nihil",
                                    },
                                    "unde": shared.FormBindingElement{
                                        Element: "deserunt",
                                        Property: "id",
                                    },
                                    "ex": shared.FormBindingElement{
                                        Element: "occaecati",
                                        Property: "optio",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("at"),
                                    Property: "ad",
                                },
                                ComponentName: sdk.String("asperiores"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("cumque"),
                                    Operand: sdk.String("sapiente"),
                                    OperandType: sdk.String("quam"),
                                    Operator: sdk.String("occaecati"),
                                    Property: sdk.String("repellendus"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("culpa"),
                                Event: sdk.String("dicta"),
                                ImportedValue: sdk.String("rem"),
                                Model: sdk.String("fuga"),
                                Property: sdk.String("odio"),
                                Type: sdk.String("totam"),
                                UserAttribute: sdk.String("magni"),
                                Value: sdk.String("eos"),
                            },
                        },
                    },
                },
                Name: sdk.String("Boyd Moen"),
                Overrides: map[string]map[string]string{
                    "aliquam": map[string]string{
                        "nisi": "praesentium",
                        "eum": "vitae",
                        "animi": "possimus",
                        "libero": "ullam",
                    },
                    "quaerat": map[string]string{
                        "iste": "accusamus",
                        "ipsam": "fugiat",
                        "odio": "ullam",
                        "inventore": "eligendi",
                    },
                    "occaecati": map[string]string{
                        "necessitatibus": "rem",
                        "a": "nihil",
                        "veniam": "aut",
                        "magni": "rerum",
                    },
                },
                Properties: sdk.String("voluptatibus"),
                SchemaVersion: sdk.String("nulla"),
                SourceID: sdk.String("quod"),
                Tags: map[string]string{
                    "dolore": "enim",
                },
                Variants: []shared.ComponentVariant{
                    shared.ComponentVariant{
                        Overrides: map[string]map[string]string{
                            "modi": map[string]string{
                                "a": "et",
                            },
                            "molestiae": map[string]string{
                                "dolore": "eius",
                                "nostrum": "ex",
                            },
                            "amet": map[string]string{
                                "molestias": "voluptatibus",
                                "ipsum": "hic",
                            },
                        },
                        VariantValues: map[string]string{
                            "odit": "molestiae",
                            "accusamus": "quia",
                            "inventore": "doloribus",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("soluta"),
        AppID: "ipsum",
        ClientToken: sdk.String("vel"),
        EnvironmentName: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComponentResponse != nil {
        // handle response
    }
}
```

## CreateForm

Creates a new form for an Amplify app.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateForm(ctx, operations.CreateFormRequest{
        RequestBody: operations.CreateFormRequestBody{
            FormToCreate: operations.CreateFormRequestBodyFormToCreate{
                Cta: &shared.FormCTA{
                    Cancel: &shared.FormButton{
                        Children: sdk.String("maxime"),
                        Excluded: sdk.Bool(false),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("vel"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("distinctio"),
                        },
                    },
                    Clear: &shared.FormButton{
                        Children: sdk.String("cupiditate"),
                        Excluded: sdk.Bool(false),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("hic"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("quis"),
                        },
                    },
                    Position: shared.FormButtonsPositionEnumBottom.ToPointer(),
                    Submit: &shared.FormButton{
                        Children: sdk.String("iusto"),
                        Excluded: sdk.Bool(false),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("quod"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("saepe"),
                        },
                    },
                },
                DataType: &shared.FormDataTypeConfig{
                    DataSourceType: shared.FormDataSourceTypeEnumDataStore,
                    DataTypeName: "magni",
                },
                Fields: map[string]shared.FieldConfig{
                    "minus": shared.FieldConfig{
                        Excluded: sdk.Bool(false),
                        InputType: &shared.FieldInputConfig{
                            DefaultChecked: sdk.Bool(false),
                            DefaultCountryCode: sdk.String("aliquid"),
                            DefaultValue: sdk.String("quam"),
                            DescriptiveText: sdk.String("ea"),
                            FileUploaderConfig: &shared.FileUploaderFieldConfig{
                                AcceptedFileTypes: []string{
                                    "architecto",
                                    "fuga",
                                },
                                AccessLevel: shared.StorageAccessLevelEnumProtected,
                                IsResumable: sdk.Bool(false),
                                MaxFileCount: sdk.Int64(244332),
                                MaxSize: sdk.Int64(96803),
                                ShowThumbnails: sdk.Bool(false),
                            },
                            IsArray: sdk.Bool(false),
                            MaxValue: sdk.Float32(1533.74),
                            MinValue: sdk.Float32(8897.63),
                            Name: sdk.String("Brenda Greenholt"),
                            Placeholder: sdk.String("ut"),
                            ReadOnly: sdk.Bool(false),
                            Required: sdk.Bool(false),
                            Step: sdk.Float32(7660.05),
                            Type: "quia",
                            Value: sdk.String("beatae"),
                            ValueMappings: &shared.ValueMappings{
                                BindingProperties: map[string]shared.FormInputBindingPropertiesValue{
                                    "cumque": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("distinctio"),
                                        },
                                        Type: sdk.String("numquam"),
                                    },
                                    "fugit": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("amet"),
                                        },
                                        Type: sdk.String("culpa"),
                                    },
                                    "facilis": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("minus"),
                                        },
                                        Type: sdk.String("vero"),
                                    },
                                    "impedit": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("omnis"),
                                        },
                                        Type: sdk.String("et"),
                                    },
                                },
                                Values: []shared.ValueMapping{
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("fuga"),
                                                Property: "est",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("fugiat"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("nulla"),
                                                Property: "totam",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("officiis"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("esse"),
                                                Property: "vitae",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("laboriosam"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("minus"),
                                                Property: "labore",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("sed"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("veniam"),
                                                Property: "sed",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("reprehenderit"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("voluptate"),
                                                Property: "reprehenderit",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("eveniet"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("voluptate"),
                                                Property: "hic",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("perferendis"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("in"),
                                                Property: "eius",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("consequatur"),
                                        },
                                    },
                                },
                            },
                        },
                        Label: sdk.String("iste"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("accusamus"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("repellat"),
                        },
                        Validations: []shared.FieldValidationConfiguration{
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    161134,
                                    617238,
                                    830473,
                                    914399,
                                },
                                StrValues: []string{
                                    "facere",
                                },
                                Type: "fugiat",
                                ValidationMessage: sdk.String("ducimus"),
                            },
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    591220,
                                },
                                StrValues: []string{
                                    "tempore",
                                    "ullam",
                                },
                                Type: "illum",
                                ValidationMessage: sdk.String("mollitia"),
                            },
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    550216,
                                },
                                StrValues: []string{
                                    "ullam",
                                    "in",
                                    "doloribus",
                                    "id",
                                },
                                Type: "eum",
                                ValidationMessage: sdk.String("cumque"),
                            },
                        },
                    },
                    "odio": shared.FieldConfig{
                        Excluded: sdk.Bool(false),
                        InputType: &shared.FieldInputConfig{
                            DefaultChecked: sdk.Bool(false),
                            DefaultCountryCode: sdk.String("atque"),
                            DefaultValue: sdk.String("similique"),
                            DescriptiveText: sdk.String("quia"),
                            FileUploaderConfig: &shared.FileUploaderFieldConfig{
                                AcceptedFileTypes: []string{
                                    "ea",
                                },
                                AccessLevel: shared.StorageAccessLevelEnumPrivate,
                                IsResumable: sdk.Bool(false),
                                MaxFileCount: sdk.Int64(76873),
                                MaxSize: sdk.Int64(566003),
                                ShowThumbnails: sdk.Bool(false),
                            },
                            IsArray: sdk.Bool(false),
                            MaxValue: sdk.Float32(6893.01),
                            MinValue: sdk.Float32(6756.89),
                            Name: sdk.String("Lamar Schinner"),
                            Placeholder: sdk.String("illo"),
                            ReadOnly: sdk.Bool(false),
                            Required: sdk.Bool(false),
                            Step: sdk.Float32(5842.92),
                            Type: "veritatis",
                            Value: sdk.String("aliquam"),
                            ValueMappings: &shared.ValueMappings{
                                BindingProperties: map[string]shared.FormInputBindingPropertiesValue{
                                    "atque": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("dicta"),
                                        },
                                        Type: sdk.String("magnam"),
                                    },
                                    "doloremque": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("cum"),
                                        },
                                        Type: sdk.String("suscipit"),
                                    },
                                    "eius": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("maiores"),
                                        },
                                        Type: sdk.String("delectus"),
                                    },
                                },
                                Values: []shared.ValueMapping{
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("id"),
                                                Property: "officiis",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("voluptate"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("consequatur"),
                                                Property: "itaque",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("voluptatem"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("dolor"),
                                                Property: "distinctio",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("a"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("neque"),
                                                Property: "nihil",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("numquam"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("mollitia"),
                                                Property: "mollitia",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("suscipit"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("quas"),
                                                Property: "quis",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("corporis"),
                                        },
                                    },
                                },
                            },
                        },
                        Label: sdk.String("iste"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("ea"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("autem"),
                        },
                        Validations: []shared.FieldValidationConfiguration{
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    166704,
                                },
                                StrValues: []string{
                                    "dolorum",
                                    "voluptas",
                                    "temporibus",
                                },
                                Type: "porro",
                                ValidationMessage: sdk.String("tempore"),
                            },
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    419585,
                                    508271,
                                },
                                StrValues: []string{
                                    "quisquam",
                                },
                                Type: "expedita",
                                ValidationMessage: sdk.String("in"),
                            },
                        },
                    },
                },
                FormActionType: shared.FormActionTypeEnumCreate.ToPointer(),
                LabelDecorator: shared.LabelDecoratorEnumNone.ToPointer(),
                Name: sdk.String("Kim Wiegand"),
                SchemaVersion: sdk.String("a"),
                SectionalElements: map[string]shared.SectionalElement{
                    "laboriosam": shared.SectionalElement{
                        Excluded: sdk.Bool(false),
                        Level: sdk.Int64(934707),
                        Orientation: sdk.String("occaecati"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("dicta"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("quidem"),
                        },
                        Text: sdk.String("omnis"),
                        Type: "laborum",
                    },
                    "molestias": shared.SectionalElement{
                        Excluded: sdk.Bool(false),
                        Level: sdk.Int64(952937),
                        Orientation: sdk.String("dignissimos"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("labore"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("laudantium"),
                        },
                        Text: sdk.String("dolore"),
                        Type: "aliquid",
                    },
                    "repudiandae": shared.SectionalElement{
                        Excluded: sdk.Bool(false),
                        Level: sdk.Int64(135692),
                        Orientation: sdk.String("quod"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("dolorem"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("neque"),
                        },
                        Text: sdk.String("ipsa"),
                        Type: "excepturi",
                    },
                },
                Style: &shared.FormStyle{
                    HorizontalGap: &shared.FormStyleConfig{
                        TokenReference: sdk.String("repellendus"),
                        Value: sdk.String("soluta"),
                    },
                    OuterPadding: &shared.FormStyleConfig{
                        TokenReference: sdk.String("aut"),
                        Value: sdk.String("ullam"),
                    },
                    VerticalGap: &shared.FormStyleConfig{
                        TokenReference: sdk.String("amet"),
                        Value: sdk.String("iure"),
                    },
                },
                Tags: map[string]string{
                    "sint": "voluptates",
                    "nihil": "ad",
                    "eligendi": "fuga",
                    "consequatur": "sit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("quo"),
        AppID: "et",
        ClientToken: sdk.String("illo"),
        EnvironmentName: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFormResponse != nil {
        // handle response
    }
}
```

## CreateTheme

Creates a theme to apply to the components in an Amplify app.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTheme(ctx, operations.CreateThemeRequest{
        RequestBody: operations.CreateThemeRequestBody{
            ThemeToCreate: operations.CreateThemeRequestBodyThemeToCreate{
                Name: sdk.String("Sally O'Reilly"),
                Overrides: []shared.ThemeValues{
                    shared.ThemeValues{
                        Key: sdk.String("provident"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("maiores"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("excepturi"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("dolore"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("aspernatur"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("fuga"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("at"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("laborum"),
                        },
                    },
                },
                Tags: map[string]string{
                    "hic": "corrupti",
                    "soluta": "earum",
                    "praesentium": "explicabo",
                },
                Values: []shared.ThemeValues{
                    shared.ThemeValues{
                        Key: sdk.String("illo"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("quia"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        AppID: "consectetur",
        ClientToken: sdk.String("totam"),
        EnvironmentName: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateThemeResponse != nil {
        // handle response
    }
}
```

## DeleteComponent

Deletes a component from an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteComponent(ctx, operations.DeleteComponentRequest{
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        AppID: "nihil",
        EnvironmentName: "sed",
        ID: "cd2484da-2172-49f2-ac41-ef5725f1169a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteForm

Deletes a form from an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteForm(ctx, operations.DeleteFormRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        AppID: "deserunt",
        EnvironmentName: "aspernatur",
        ID: "3c23e34f-2dfa-44a1-97f6-de922151fe17",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTheme

Deletes a theme from an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTheme(ctx, operations.DeleteThemeRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("enim"),
        AppID: "nesciunt",
        EnvironmentName: "saepe",
        ID: "9f543d85-4439-4ee2-a446-0443bc154188",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExchangeCodeForToken

Exchanges an access code for a token.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExchangeCodeForToken(ctx, operations.ExchangeCodeForTokenRequest{
        RequestBody: operations.ExchangeCodeForTokenRequestBody{
            Request: operations.ExchangeCodeForTokenRequestBodyRequest{
                ClientID: sdk.String("quisquam"),
                Code: sdk.String("sunt"),
                RedirectURI: sdk.String("asperiores"),
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("culpa"),
        Provider: operations.ExchangeCodeForTokenProviderEnumFigma,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExchangeCodeForTokenResponse != nil {
        // handle response
    }
}
```

## ExportComponents

Exports component configurations to code that is ready to integrate into an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExportComponents(ctx, operations.ExportComponentsRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("libero"),
        AppID: "fugiat",
        EnvironmentName: "voluptas",
        NextToken: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportComponentsResponse != nil {
        // handle response
    }
}
```

## ExportForms

Exports form configurations to code that is ready to integrate into an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExportForms(ctx, operations.ExportFormsRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("ad"),
        AppID: "architecto",
        EnvironmentName: "culpa",
        NextToken: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportFormsResponse != nil {
        // handle response
    }
}
```

## ExportThemes

Exports theme configurations to code that is ready to integrate into an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExportThemes(ctx, operations.ExportThemesRequest{
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        AppID: "nulla",
        EnvironmentName: "corrupti",
        NextToken: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportThemesResponse != nil {
        // handle response
    }
}
```

## GetComponent

Returns an existing component for an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComponent(ctx, operations.GetComponentRequest{
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        AppID: "qui",
        EnvironmentName: "libero",
        ID: "fbdc41ff-5d4e-42ae-8fb5-cb35d17638f1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentResponse != nil {
        // handle response
    }
}
```

## GetForm

Returns an existing form for an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetForm(ctx, operations.GetFormRequest{
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        AppID: "provident",
        EnvironmentName: "accusamus",
        ID: "cc5cb860-f8cd-4580-ba73-810e4fe44472",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFormResponse != nil {
        // handle response
    }
}
```

## GetMetadata

Returns existing metadata for an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMetadata(ctx, operations.GetMetadataRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("illo"),
        AppID: "illum",
        EnvironmentName: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMetadataResponse != nil {
        // handle response
    }
}
```

## GetTheme

Returns an existing theme for an Amplify app.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTheme(ctx, operations.GetThemeRequest{
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("ut"),
        AppID: "nihil",
        EnvironmentName: "harum",
        ID: "7684eff5-0126-4d71-8ffb-d0eb74b84219",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetThemeResponse != nil {
        // handle response
    }
}
```

## ListComponents

Retrieves a list of components for a specified Amplify app and backend environment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListComponents(ctx, operations.ListComponentsRequest{
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("nulla"),
        AppID: "nesciunt",
        EnvironmentName: "quisquam",
        MaxResults: sdk.Int64(288790),
        NextToken: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentsResponse != nil {
        // handle response
    }
}
```

## ListForms

Retrieves a list of forms for a specified Amplify app and backend environment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListForms(ctx, operations.ListFormsRequest{
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        AppID: "veniam",
        EnvironmentName: "provident",
        MaxResults: sdk.Int64(343067),
        NextToken: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFormsResponse != nil {
        // handle response
    }
}
```

## ListThemes

Retrieves a list of themes for a specified Amplify app and backend environment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThemes(ctx, operations.ListThemesRequest{
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        AppID: "quos",
        EnvironmentName: "aliquid",
        MaxResults: sdk.Int64(193048),
        NextToken: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThemesResponse != nil {
        // handle response
    }
}
```

## PutMetadataFlag

Stores the metadata information about a feature on a form.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutMetadataFlag(ctx, operations.PutMetadataFlagRequest{
        RequestBody: operations.PutMetadataFlagRequestBody{
            Body: operations.PutMetadataFlagRequestBodyBody{
                NewValue: sdk.String("fuga"),
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("ab"),
        AppID: "maxime",
        EnvironmentName: "porro",
        FeatureName: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RefreshToken

Refreshes a previously issued access token that might have expired.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RefreshToken(ctx, operations.RefreshTokenRequest{
        RequestBody: operations.RefreshTokenRequestBody{
            RefreshTokenBody: operations.RefreshTokenRequestBodyRefreshTokenBody{
                ClientID: sdk.String("reiciendis"),
                Token: sdk.String("dicta"),
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("sint"),
        Provider: operations.RefreshTokenProviderEnumFigma,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefreshTokenResponse != nil {
        // handle response
    }
}
```

## UpdateComponent

Updates an existing component.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateComponent(ctx, operations.UpdateComponentRequest{
        RequestBody: operations.UpdateComponentRequestBody{
            UpdatedComponent: operations.UpdateComponentRequestBodyUpdatedComponent{
                BindingProperties: map[string]shared.ComponentBindingPropertiesValue{
                    "ut": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("et"),
                            DefaultValue: sdk.String("reiciendis"),
                            Field: sdk.String("reiciendis"),
                            Key: sdk.String("distinctio"),
                            Model: sdk.String("itaque"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("quidem"),
                                    Operand: sdk.String("temporibus"),
                                    OperandType: sdk.String("iure"),
                                    Operator: sdk.String("natus"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("earum"),
                                    Operand: sdk.String("commodi"),
                                    OperandType: sdk.String("veniam"),
                                    Operator: sdk.String("debitis"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("aliquid"),
                                    Operand: sdk.String("porro"),
                                    OperandType: sdk.String("quisquam"),
                                    Operator: sdk.String("molestiae"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("quidem"),
                            UserAttribute: sdk.String("delectus"),
                        },
                        DefaultValue: sdk.String("eum"),
                        Type: sdk.String("beatae"),
                    },
                    "suscipit": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("eveniet"),
                            DefaultValue: sdk.String("mollitia"),
                            Field: sdk.String("ipsam"),
                            Key: sdk.String("porro"),
                            Model: sdk.String("molestiae"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("modi"),
                                    Operand: sdk.String("dicta"),
                                    OperandType: sdk.String("provident"),
                                    Operator: sdk.String("non"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("soluta"),
                            UserAttribute: sdk.String("occaecati"),
                        },
                        DefaultValue: sdk.String("sit"),
                        Type: sdk.String("asperiores"),
                    },
                    "aspernatur": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("officiis"),
                            DefaultValue: sdk.String("sit"),
                            Field: sdk.String("occaecati"),
                            Key: sdk.String("nulla"),
                            Model: sdk.String("ab"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("magni"),
                                    Operand: sdk.String("a"),
                                    OperandType: sdk.String("cumque"),
                                    Operator: sdk.String("explicabo"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("earum"),
                                    Operand: sdk.String("fugit"),
                                    OperandType: sdk.String("repudiandae"),
                                    Operator: sdk.String("vitae"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("provident"),
                                    Operand: sdk.String("numquam"),
                                    OperandType: sdk.String("numquam"),
                                    Operator: sdk.String("tempore"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("amet"),
                            UserAttribute: sdk.String("enim"),
                        },
                        DefaultValue: sdk.String("illum"),
                        Type: sdk.String("sed"),
                    },
                },
                Children: []shared.ComponentChild{
                    shared.ComponentChild{
                        Children: []shared.ComponentChild{
                            shared.ComponentChild{},
                            shared.ComponentChild{},
                        },
                        ComponentType: "id",
                        Events: map[string]shared.ComponentEvent{
                            "dolores": shared.ComponentEvent{
                                Action: sdk.String("asperiores"),
                                BindingEvent: sdk.String("occaecati"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("doloremque"),
                                            Property: "blanditiis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "excepturi": shared.FormBindingElement{
                                                Element: "fugiat",
                                                Property: "laboriosam",
                                            },
                                            "id": shared.FormBindingElement{
                                                Element: "itaque",
                                                Property: "assumenda",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quaerat"),
                                            Property: "id",
                                        },
                                        ComponentName: sdk.String("eveniet"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("soluta"),
                                            Operand: sdk.String("dignissimos"),
                                            OperandType: sdk.String("nemo"),
                                            Operator: sdk.String("neque"),
                                            Property: sdk.String("esse"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("placeat"),
                                        Event: sdk.String("at"),
                                        ImportedValue: sdk.String("excepturi"),
                                        Model: sdk.String("eos"),
                                        Property: sdk.String("odit"),
                                        Type: sdk.String("quia"),
                                        UserAttribute: sdk.String("maxime"),
                                        Value: sdk.String("excepturi"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "maiores": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("exercitationem"),
                                                Property: "ducimus",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "iste": shared.FormBindingElement{
                                                    Element: "inventore",
                                                    Property: "error",
                                                },
                                                "id": shared.FormBindingElement{
                                                    Element: "harum",
                                                    Property: "sapiente",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("laborum"),
                                                Property: "aspernatur",
                                            },
                                            ComponentName: sdk.String("vero"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("eum"),
                                                Operand: sdk.String("quasi"),
                                                OperandType: sdk.String("tenetur"),
                                                Operator: sdk.String("accusantium"),
                                                Property: sdk.String("quo"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("id"),
                                            Event: sdk.String("tempora"),
                                            ImportedValue: sdk.String("pariatur"),
                                            Model: sdk.String("labore"),
                                            Property: sdk.String("quis"),
                                            Type: sdk.String("aliquid"),
                                            UserAttribute: sdk.String("vero"),
                                            Value: sdk.String("reiciendis"),
                                        },
                                        "dicta": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("sit"),
                                                Property: "adipisci",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "saepe": shared.FormBindingElement{
                                                    Element: "iure",
                                                    Property: "praesentium",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("perspiciatis"),
                                                Property: "omnis",
                                            },
                                            ComponentName: sdk.String("hic"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("minus"),
                                                Operand: sdk.String("explicabo"),
                                                OperandType: sdk.String("accusantium"),
                                                Operator: sdk.String("ipsa"),
                                                Property: sdk.String("quasi"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("saepe"),
                                            Event: sdk.String("quia"),
                                            ImportedValue: sdk.String("aspernatur"),
                                            Model: sdk.String("minus"),
                                            Property: sdk.String("illum"),
                                            Type: sdk.String("veniam"),
                                            UserAttribute: sdk.String("exercitationem"),
                                            Value: sdk.String("quod"),
                                        },
                                        "quod": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("alias"),
                                                Property: "nemo",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "modi": shared.FormBindingElement{
                                                    Element: "similique",
                                                    Property: "quasi",
                                                },
                                                "laudantium": shared.FormBindingElement{
                                                    Element: "ut",
                                                    Property: "possimus",
                                                },
                                                "nihil": shared.FormBindingElement{
                                                    Element: "voluptas",
                                                    Property: "facere",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("omnis"),
                                                Property: "voluptate",
                                            },
                                            ComponentName: sdk.String("vitae"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("cumque"),
                                                Operand: sdk.String("atque"),
                                                OperandType: sdk.String("explicabo"),
                                                Operator: sdk.String("sit"),
                                                Property: sdk.String("eligendi"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("commodi"),
                                            Event: sdk.String("enim"),
                                            ImportedValue: sdk.String("harum"),
                                            Model: sdk.String("aut"),
                                            Property: sdk.String("consectetur"),
                                            Type: sdk.String("in"),
                                            UserAttribute: sdk.String("rerum"),
                                            Value: sdk.String("distinctio"),
                                        },
                                        "blanditiis": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("saepe"),
                                                Property: "sit",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "impedit": shared.FormBindingElement{
                                                    Element: "corrupti",
                                                    Property: "quas",
                                                },
                                                "ullam": shared.FormBindingElement{
                                                    Element: "veritatis",
                                                    Property: "quas",
                                                },
                                                "molestiae": shared.FormBindingElement{
                                                    Element: "officiis",
                                                    Property: "labore",
                                                },
                                                "nulla": shared.FormBindingElement{
                                                    Element: "accusamus",
                                                    Property: "consequatur",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("ut"),
                                                Property: "laborum",
                                            },
                                            ComponentName: sdk.String("hic"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("corrupti"),
                                                Operand: sdk.String("maxime"),
                                                OperandType: sdk.String("ad"),
                                                Operator: sdk.String("quibusdam"),
                                                Property: sdk.String("facere"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("pariatur"),
                                            Event: sdk.String("quidem"),
                                            ImportedValue: sdk.String("labore"),
                                            Model: sdk.String("commodi"),
                                            Property: sdk.String("mollitia"),
                                            Type: sdk.String("similique"),
                                            UserAttribute: sdk.String("quasi"),
                                            Value: sdk.String("quo"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("voluptatibus"),
                                            Property: "illum",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "facere": shared.FormBindingElement{
                                                Element: "corrupti",
                                                Property: "magni",
                                            },
                                            "blanditiis": shared.FormBindingElement{
                                                Element: "assumenda",
                                                Property: "culpa",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ipsa"),
                                            Property: "inventore",
                                        },
                                        ComponentName: sdk.String("nesciunt"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("error"),
                                            Operand: sdk.String("inventore"),
                                            OperandType: sdk.String("vitae"),
                                            Operator: sdk.String("qui"),
                                            Property: sdk.String("unde"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("ex"),
                                        Event: sdk.String("quaerat"),
                                        ImportedValue: sdk.String("aliquid"),
                                        Model: sdk.String("eum"),
                                        Property: sdk.String("quaerat"),
                                        Type: sdk.String("enim"),
                                        UserAttribute: sdk.String("cumque"),
                                        Value: sdk.String("ab"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quibusdam"),
                                            Property: "blanditiis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "delectus": shared.FormBindingElement{
                                                Element: "explicabo",
                                                Property: "iste",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("perferendis"),
                                            Property: "magnam",
                                        },
                                        ComponentName: sdk.String("aspernatur"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("nemo"),
                                            Operand: sdk.String("laboriosam"),
                                            OperandType: sdk.String("iste"),
                                            Operator: sdk.String("quidem"),
                                            Property: sdk.String("iusto"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("culpa"),
                                        Event: sdk.String("reiciendis"),
                                        ImportedValue: sdk.String("a"),
                                        Model: sdk.String("consequatur"),
                                        Property: sdk.String("voluptates"),
                                        Type: sdk.String("dolorum"),
                                        UserAttribute: sdk.String("fugit"),
                                        Value: sdk.String("eos"),
                                    },
                                    Model: sdk.String("veritatis"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "vel",
                                        Property: "placeat",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("libero"),
                                                Property: "saepe",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "dignissimos": shared.FormBindingElement{
                                                    Element: "veritatis",
                                                    Property: "harum",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("cumque"),
                                                Property: "ab",
                                            },
                                            ComponentName: sdk.String("ex"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("officiis"),
                                                Operand: sdk.String("sed"),
                                                OperandType: sdk.String("quam"),
                                                Operator: sdk.String("unde"),
                                                Property: sdk.String("harum"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("sequi"),
                                            Event: sdk.String("libero"),
                                            ImportedValue: sdk.String("ipsa"),
                                            Model: sdk.String("blanditiis"),
                                            Property: sdk.String("aliquam"),
                                            Type: sdk.String("vero"),
                                            UserAttribute: sdk.String("dolorum"),
                                            Value: sdk.String("omnis"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("occaecati"),
                                            Property: "consequuntur",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quam": shared.FormBindingElement{
                                                Element: "repellendus",
                                                Property: "eaque",
                                            },
                                            "incidunt": shared.FormBindingElement{
                                                Element: "asperiores",
                                                Property: "eius",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ipsa"),
                                            Property: "quas",
                                        },
                                        ComponentName: sdk.String("incidunt"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("laborum"),
                                            Operand: sdk.String("in"),
                                            OperandType: sdk.String("numquam"),
                                            Operator: sdk.String("quia"),
                                            Property: sdk.String("repellendus"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("blanditiis"),
                                        Event: sdk.String("ut"),
                                        ImportedValue: sdk.String("eius"),
                                        Model: sdk.String("cupiditate"),
                                        Property: sdk.String("nisi"),
                                        Type: sdk.String("placeat"),
                                        UserAttribute: sdk.String("tempore"),
                                        Value: sdk.String("facere"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("earum"),
                                            Property: "debitis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "reiciendis": shared.FormBindingElement{
                                                Element: "ex",
                                                Property: "tempore",
                                            },
                                            "provident": shared.FormBindingElement{
                                                Element: "provident",
                                                Property: "soluta",
                                            },
                                            "maxime": shared.FormBindingElement{
                                                Element: "commodi",
                                                Property: "consectetur",
                                            },
                                            "corporis": shared.FormBindingElement{
                                                Element: "nisi",
                                                Property: "aspernatur",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("eveniet"),
                                            Property: "tempore",
                                        },
                                        ComponentName: sdk.String("asperiores"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("delectus"),
                                            Operand: sdk.String("enim"),
                                            OperandType: sdk.String("ipsam"),
                                            Operator: sdk.String("porro"),
                                            Property: sdk.String("dolores"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("iste"),
                                        Event: sdk.String("labore"),
                                        ImportedValue: sdk.String("porro"),
                                        Model: sdk.String("eaque"),
                                        Property: sdk.String("ea"),
                                        Type: sdk.String("consequatur"),
                                        UserAttribute: sdk.String("nobis"),
                                        Value: sdk.String("accusantium"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ea"),
                                            Property: "laborum",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "fugit": shared.FormBindingElement{
                                                Element: "quos",
                                                Property: "molestiae",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("voluptate"),
                                            Property: "autem",
                                        },
                                        ComponentName: sdk.String("numquam"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("debitis"),
                                            Operand: sdk.String("earum"),
                                            OperandType: sdk.String("suscipit"),
                                            Operator: sdk.String("assumenda"),
                                            Property: sdk.String("doloremque"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("porro"),
                                        Event: sdk.String("suscipit"),
                                        ImportedValue: sdk.String("temporibus"),
                                        Model: sdk.String("vel"),
                                        Property: sdk.String("itaque"),
                                        Type: sdk.String("nulla"),
                                        UserAttribute: sdk.String("excepturi"),
                                        Value: sdk.String("quod"),
                                    },
                                },
                            },
                            "in": shared.ComponentEvent{
                                Action: sdk.String("nesciunt"),
                                BindingEvent: sdk.String("temporibus"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("temporibus"),
                                            Property: "eum",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "ut": shared.FormBindingElement{
                                                Element: "nostrum",
                                                Property: "dignissimos",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("illo"),
                                            Property: "corporis",
                                        },
                                        ComponentName: sdk.String("ipsa"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("dolorum"),
                                            Operand: sdk.String("blanditiis"),
                                            OperandType: sdk.String("recusandae"),
                                            Operator: sdk.String("deleniti"),
                                            Property: sdk.String("dignissimos"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("doloremque"),
                                        Event: sdk.String("quibusdam"),
                                        ImportedValue: sdk.String("adipisci"),
                                        Model: sdk.String("minus"),
                                        Property: sdk.String("veniam"),
                                        Type: sdk.String("id"),
                                        UserAttribute: sdk.String("architecto"),
                                        Value: sdk.String("maiores"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "quod": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("magni"),
                                                Property: "incidunt",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "quisquam": shared.FormBindingElement{
                                                    Element: "odio",
                                                    Property: "quidem",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("iure"),
                                                Property: "aliquid",
                                            },
                                            ComponentName: sdk.String("culpa"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("reiciendis"),
                                                Operand: sdk.String("ipsum"),
                                                OperandType: sdk.String("doloremque"),
                                                Operator: sdk.String("quod"),
                                                Property: sdk.String("dignissimos"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("non"),
                                            Event: sdk.String("facere"),
                                            ImportedValue: sdk.String("repellat"),
                                            Model: sdk.String("exercitationem"),
                                            Property: sdk.String("quidem"),
                                            Type: sdk.String("ea"),
                                            UserAttribute: sdk.String("molestiae"),
                                            Value: sdk.String("vitae"),
                                        },
                                        "excepturi": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("voluptatum"),
                                                Property: "iste",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "reiciendis": shared.FormBindingElement{
                                                    Element: "magnam",
                                                    Property: "consequuntur",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("est"),
                                                Property: "tempora",
                                            },
                                            ComponentName: sdk.String("nobis"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("modi"),
                                                Operand: sdk.String("adipisci"),
                                                OperandType: sdk.String("atque"),
                                                Operator: sdk.String("at"),
                                                Property: sdk.String("rem"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("exercitationem"),
                                            Event: sdk.String("tempore"),
                                            ImportedValue: sdk.String("eos"),
                                            Model: sdk.String("laboriosam"),
                                            Property: sdk.String("aperiam"),
                                            Type: sdk.String("minima"),
                                            UserAttribute: sdk.String("perspiciatis"),
                                            Value: sdk.String("dicta"),
                                        },
                                        "assumenda": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("reprehenderit"),
                                                Property: "tempora",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "voluptates": shared.FormBindingElement{
                                                    Element: "sequi",
                                                    Property: "eligendi",
                                                },
                                                "consequuntur": shared.FormBindingElement{
                                                    Element: "quae",
                                                    Property: "veniam",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("sint"),
                                                Property: "minus",
                                            },
                                            ComponentName: sdk.String("excepturi"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("nesciunt"),
                                                Operand: sdk.String("maiores"),
                                                OperandType: sdk.String("veniam"),
                                                Operator: sdk.String("autem"),
                                                Property: sdk.String("esse"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("officiis"),
                                            Event: sdk.String("aperiam"),
                                            ImportedValue: sdk.String("itaque"),
                                            Model: sdk.String("sed"),
                                            Property: sdk.String("corporis"),
                                            Type: sdk.String("consequuntur"),
                                            UserAttribute: sdk.String("odio"),
                                            Value: sdk.String("suscipit"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quis"),
                                            Property: "nobis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "repellendus": shared.FormBindingElement{
                                                Element: "ex",
                                                Property: "consequuntur",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("delectus"),
                                            Property: "nobis",
                                        },
                                        ComponentName: sdk.String("possimus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("optio"),
                                            Operand: sdk.String("debitis"),
                                            OperandType: sdk.String("architecto"),
                                            Operator: sdk.String("reiciendis"),
                                            Property: sdk.String("consequatur"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("sunt"),
                                        Event: sdk.String("odit"),
                                        ImportedValue: sdk.String("inventore"),
                                        Model: sdk.String("laboriosam"),
                                        Property: sdk.String("quod"),
                                        Type: sdk.String("repudiandae"),
                                        UserAttribute: sdk.String("consequuntur"),
                                        Value: sdk.String("aspernatur"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("sequi"),
                                            Property: "sint",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "deleniti": shared.FormBindingElement{
                                                Element: "earum",
                                                Property: "consequuntur",
                                            },
                                            "enim": shared.FormBindingElement{
                                                Element: "minus",
                                                Property: "quibusdam",
                                            },
                                            "accusantium": shared.FormBindingElement{
                                                Element: "nulla",
                                                Property: "inventore",
                                            },
                                            "omnis": shared.FormBindingElement{
                                                Element: "quibusdam",
                                                Property: "excepturi",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nostrum"),
                                            Property: "sint",
                                        },
                                        ComponentName: sdk.String("doloribus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("adipisci"),
                                            Operand: sdk.String("natus"),
                                            OperandType: sdk.String("necessitatibus"),
                                            Operator: sdk.String("velit"),
                                            Property: sdk.String("sint"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("eos"),
                                        Event: sdk.String("nisi"),
                                        ImportedValue: sdk.String("commodi"),
                                        Model: sdk.String("impedit"),
                                        Property: sdk.String("facilis"),
                                        Type: sdk.String("temporibus"),
                                        UserAttribute: sdk.String("error"),
                                        Value: sdk.String("quaerat"),
                                    },
                                    Model: sdk.String("delectus"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "molestiae",
                                        Property: "deserunt",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("laborum"),
                                                Property: "odit",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "consequuntur": shared.FormBindingElement{
                                                    Element: "magnam",
                                                    Property: "et",
                                                },
                                                "et": shared.FormBindingElement{
                                                    Element: "ratione",
                                                    Property: "nisi",
                                                },
                                                "perspiciatis": shared.FormBindingElement{
                                                    Element: "nostrum",
                                                    Property: "temporibus",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("et"),
                                                Property: "debitis",
                                            },
                                            ComponentName: sdk.String("nisi"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("excepturi"),
                                                Operand: sdk.String("quas"),
                                                OperandType: sdk.String("repellat"),
                                                Operator: sdk.String("placeat"),
                                                Property: sdk.String("eligendi"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("quaerat"),
                                            Event: sdk.String("veniam"),
                                            ImportedValue: sdk.String("perspiciatis"),
                                            Model: sdk.String("commodi"),
                                            Property: sdk.String("dolores"),
                                            Type: sdk.String("dicta"),
                                            UserAttribute: sdk.String("molestiae"),
                                            Value: sdk.String("maxime"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("dolores"),
                                            Property: "molestias",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "molestiae": shared.FormBindingElement{
                                                Element: "aliquid",
                                                Property: "voluptate",
                                            },
                                            "eum": shared.FormBindingElement{
                                                Element: "consectetur",
                                                Property: "velit",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("tempora"),
                                            Property: "aspernatur",
                                        },
                                        ComponentName: sdk.String("ad"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("alias"),
                                            Operand: sdk.String("adipisci"),
                                            OperandType: sdk.String("atque"),
                                            Operator: sdk.String("tempore"),
                                            Property: sdk.String("asperiores"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("distinctio"),
                                        Event: sdk.String("minima"),
                                        ImportedValue: sdk.String("cupiditate"),
                                        Model: sdk.String("molestiae"),
                                        Property: sdk.String("et"),
                                        Type: sdk.String("accusamus"),
                                        UserAttribute: sdk.String("excepturi"),
                                        Value: sdk.String("deleniti"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("inventore"),
                                            Property: "perspiciatis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "corporis": shared.FormBindingElement{
                                                Element: "ullam",
                                                Property: "molestiae",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("adipisci"),
                                            Property: "totam",
                                        },
                                        ComponentName: sdk.String("perspiciatis"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("itaque"),
                                            Operand: sdk.String("at"),
                                            OperandType: sdk.String("nam"),
                                            Operator: sdk.String("id"),
                                            Property: sdk.String("cumque"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("in"),
                                        Event: sdk.String("a"),
                                        ImportedValue: sdk.String("quibusdam"),
                                        Model: sdk.String("culpa"),
                                        Property: sdk.String("dolor"),
                                        Type: sdk.String("occaecati"),
                                        UserAttribute: sdk.String("exercitationem"),
                                        Value: sdk.String("unde"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("labore"),
                                            Property: "pariatur",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "laboriosam": shared.FormBindingElement{
                                                Element: "soluta",
                                                Property: "minus",
                                            },
                                            "magni": shared.FormBindingElement{
                                                Element: "mollitia",
                                                Property: "officiis",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aliquam"),
                                            Property: "quas",
                                        },
                                        ComponentName: sdk.String("aut"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("dolorem"),
                                            Operand: sdk.String("explicabo"),
                                            OperandType: sdk.String("rerum"),
                                            Operator: sdk.String("iste"),
                                            Property: sdk.String("occaecati"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("enim"),
                                        Event: sdk.String("tempora"),
                                        ImportedValue: sdk.String("libero"),
                                        Model: sdk.String("iure"),
                                        Property: sdk.String("voluptatibus"),
                                        Type: sdk.String("id"),
                                        UserAttribute: sdk.String("qui"),
                                        Value: sdk.String("explicabo"),
                                    },
                                },
                            },
                        },
                        Name: "Agnes Douglas",
                        Properties: "atque",
                        SourceID: sdk.String("explicabo"),
                    },
                },
                CollectionProperties: map[string]shared.ComponentDataConfiguration{
                    "ipsam": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "sequi",
                            "optio",
                        },
                        Model: "libero",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                            },
                            Field: sdk.String("alias"),
                            Operand: sdk.String("accusantium"),
                            OperandType: sdk.String("doloremque"),
                            Operator: sdk.String("autem"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "incidunt",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "dolores",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "recusandae",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "magni",
                            },
                        },
                    },
                    "sit": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "nesciunt",
                            "libero",
                        },
                        Model: "molestiae",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                            Field: sdk.String("perspiciatis"),
                            Operand: sdk.String("amet"),
                            OperandType: sdk.String("ex"),
                            Operator: sdk.String("aliquid"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "eveniet",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "voluptatem",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "magni",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "sapiente",
                            },
                        },
                    },
                    "veritatis": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "veniam",
                            "quos",
                            "totam",
                        },
                        Model: "facere",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                            Field: sdk.String("doloremque"),
                            Operand: sdk.String("vero"),
                            OperandType: sdk.String("aut"),
                            Operator: sdk.String("sequi"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "saepe",
                            },
                        },
                    },
                },
                ComponentType: sdk.String("nobis"),
                Events: map[string]shared.ComponentEvent{
                    "quia": shared.ComponentEvent{
                        Action: sdk.String("natus"),
                        BindingEvent: sdk.String("molestiae"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("facilis"),
                                    Property: "earum",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "itaque": shared.FormBindingElement{
                                        Element: "cupiditate",
                                        Property: "consequatur",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("harum"),
                                    Property: "nobis",
                                },
                                ComponentName: sdk.String("numquam"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("temporibus"),
                                    Operand: sdk.String("doloribus"),
                                    OperandType: sdk.String("quos"),
                                    Operator: sdk.String("commodi"),
                                    Property: sdk.String("blanditiis"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("voluptatibus"),
                                Event: sdk.String("nulla"),
                                ImportedValue: sdk.String("nemo"),
                                Model: sdk.String("ratione"),
                                Property: sdk.String("dolore"),
                                Type: sdk.String("perferendis"),
                                UserAttribute: sdk.String("enim"),
                                Value: sdk.String("impedit"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "dolor": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("nesciunt"),
                                        Property: "vitae",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "numquam": shared.FormBindingElement{
                                            Element: "provident",
                                            Property: "quia",
                                        },
                                        "reiciendis": shared.FormBindingElement{
                                            Element: "modi",
                                            Property: "doloribus",
                                        },
                                        "et": shared.FormBindingElement{
                                            Element: "qui",
                                            Property: "iusto",
                                        },
                                        "a": shared.FormBindingElement{
                                            Element: "quidem",
                                            Property: "aperiam",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("saepe"),
                                        Property: "voluptatem",
                                    },
                                    ComponentName: sdk.String("soluta"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("beatae"),
                                        Operand: sdk.String("delectus"),
                                        OperandType: sdk.String("deleniti"),
                                        Operator: sdk.String("fugit"),
                                        Property: sdk.String("inventore"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("reprehenderit"),
                                    Event: sdk.String("sint"),
                                    ImportedValue: sdk.String("dignissimos"),
                                    Model: sdk.String("voluptatum"),
                                    Property: sdk.String("nulla"),
                                    Type: sdk.String("consequatur"),
                                    UserAttribute: sdk.String("similique"),
                                    Value: sdk.String("eligendi"),
                                },
                                "impedit": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("officia"),
                                        Property: "odio",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "mollitia": shared.FormBindingElement{
                                            Element: "repudiandae",
                                            Property: "tempore",
                                        },
                                        "voluptate": shared.FormBindingElement{
                                            Element: "cum",
                                            Property: "esse",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("alias"),
                                        Property: "consequuntur",
                                    },
                                    ComponentName: sdk.String("architecto"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("nemo"),
                                        Operand: sdk.String("magni"),
                                        OperandType: sdk.String("quae"),
                                        Operator: sdk.String("quaerat"),
                                        Property: sdk.String("suscipit"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("rerum"),
                                    Event: sdk.String("laboriosam"),
                                    ImportedValue: sdk.String("aliquam"),
                                    Model: sdk.String("repudiandae"),
                                    Property: sdk.String("unde"),
                                    Type: sdk.String("excepturi"),
                                    UserAttribute: sdk.String("voluptatibus"),
                                    Value: sdk.String("facilis"),
                                },
                                "doloremque": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("officiis"),
                                        Property: "nisi",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "necessitatibus": shared.FormBindingElement{
                                            Element: "alias",
                                            Property: "provident",
                                        },
                                        "ut": shared.FormBindingElement{
                                            Element: "hic",
                                            Property: "facere",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("tenetur"),
                                        Property: "saepe",
                                    },
                                    ComponentName: sdk.String("assumenda"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("exercitationem"),
                                        Operand: sdk.String("dolore"),
                                        OperandType: sdk.String("sit"),
                                        Operator: sdk.String("recusandae"),
                                        Property: sdk.String("a"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("exercitationem"),
                                    Event: sdk.String("neque"),
                                    ImportedValue: sdk.String("mollitia"),
                                    Model: sdk.String("velit"),
                                    Property: sdk.String("ut"),
                                    Type: sdk.String("est"),
                                    UserAttribute: sdk.String("quasi"),
                                    Value: sdk.String("rerum"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("blanditiis"),
                                    Property: "sapiente",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "perspiciatis": shared.FormBindingElement{
                                        Element: "natus",
                                        Property: "reprehenderit",
                                    },
                                    "dolorem": shared.FormBindingElement{
                                        Element: "sunt",
                                        Property: "fuga",
                                    },
                                    "nulla": shared.FormBindingElement{
                                        Element: "cumque",
                                        Property: "aperiam",
                                    },
                                    "ad": shared.FormBindingElement{
                                        Element: "fugiat",
                                        Property: "quas",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("quis"),
                                    Property: "fuga",
                                },
                                ComponentName: sdk.String("eveniet"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("illum"),
                                    Operand: sdk.String("delectus"),
                                    OperandType: sdk.String("rerum"),
                                    Operator: sdk.String("voluptate"),
                                    Property: sdk.String("perferendis"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("maiores"),
                                Event: sdk.String("harum"),
                                ImportedValue: sdk.String("ratione"),
                                Model: sdk.String("molestias"),
                                Property: sdk.String("odio"),
                                Type: sdk.String("non"),
                                UserAttribute: sdk.String("magni"),
                                Value: sdk.String("sint"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("consequatur"),
                                    Property: "illum",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "dolorem": shared.FormBindingElement{
                                        Element: "ex",
                                        Property: "quis",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("eum"),
                                    Property: "et",
                                },
                                ComponentName: sdk.String("officiis"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("culpa"),
                                    Operand: sdk.String("architecto"),
                                    OperandType: sdk.String("iure"),
                                    Operator: sdk.String("eveniet"),
                                    Property: sdk.String("doloribus"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("praesentium"),
                                Event: sdk.String("iste"),
                                ImportedValue: sdk.String("tempora"),
                                Model: sdk.String("ad"),
                                Property: sdk.String("ab"),
                                Type: sdk.String("harum"),
                                UserAttribute: sdk.String("facere"),
                                Value: sdk.String("ducimus"),
                            },
                            Model: sdk.String("nisi"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "accusamus",
                                Property: "officiis",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("necessitatibus"),
                                        Property: "nam",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "veritatis": shared.FormBindingElement{
                                            Element: "molestias",
                                            Property: "impedit",
                                        },
                                        "modi": shared.FormBindingElement{
                                            Element: "possimus",
                                            Property: "similique",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("architecto"),
                                        Property: "asperiores",
                                    },
                                    ComponentName: sdk.String("est"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("dolor"),
                                        Operand: sdk.String("nemo"),
                                        OperandType: sdk.String("quis"),
                                        Operator: sdk.String("quasi"),
                                        Property: sdk.String("odit"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("delectus"),
                                    Event: sdk.String("doloremque"),
                                    ImportedValue: sdk.String("laboriosam"),
                                    Model: sdk.String("nulla"),
                                    Property: sdk.String("dolore"),
                                    Type: sdk.String("itaque"),
                                    UserAttribute: sdk.String("enim"),
                                    Value: sdk.String("nam"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("dignissimos"),
                                    Property: "consequuntur",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "alias": shared.FormBindingElement{
                                        Element: "doloribus",
                                        Property: "nemo",
                                    },
                                    "dolore": shared.FormBindingElement{
                                        Element: "corrupti",
                                        Property: "exercitationem",
                                    },
                                    "commodi": shared.FormBindingElement{
                                        Element: "laudantium",
                                        Property: "est",
                                    },
                                    "consequatur": shared.FormBindingElement{
                                        Element: "incidunt",
                                        Property: "dolores",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("labore"),
                                    Property: "earum",
                                },
                                ComponentName: sdk.String("consequatur"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("officia"),
                                    Operand: sdk.String("architecto"),
                                    OperandType: sdk.String("quibusdam"),
                                    Operator: sdk.String("autem"),
                                    Property: sdk.String("voluptates"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("tempore"),
                                Event: sdk.String("cupiditate"),
                                ImportedValue: sdk.String("modi"),
                                Model: sdk.String("ratione"),
                                Property: sdk.String("aliquam"),
                                Type: sdk.String("ea"),
                                UserAttribute: sdk.String("aliquam"),
                                Value: sdk.String("corporis"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("at"),
                                    Property: "ipsa",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "aut": shared.FormBindingElement{
                                        Element: "molestias",
                                        Property: "quaerat",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("repellat"),
                                    Property: "expedita",
                                },
                                ComponentName: sdk.String("libero"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("quis"),
                                    Operand: sdk.String("cumque"),
                                    OperandType: sdk.String("cumque"),
                                    Operator: sdk.String("vero"),
                                    Property: sdk.String("a"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("tenetur"),
                                Event: sdk.String("ipsam"),
                                ImportedValue: sdk.String("quod"),
                                Model: sdk.String("facilis"),
                                Property: sdk.String("doloremque"),
                                Type: sdk.String("illo"),
                                UserAttribute: sdk.String("reiciendis"),
                                Value: sdk.String("debitis"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("enim"),
                                    Property: "quasi",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "ipsam": shared.FormBindingElement{
                                        Element: "aspernatur",
                                        Property: "atque",
                                    },
                                    "animi": shared.FormBindingElement{
                                        Element: "eius",
                                        Property: "ad",
                                    },
                                    "mollitia": shared.FormBindingElement{
                                        Element: "minus",
                                        Property: "quos",
                                    },
                                    "explicabo": shared.FormBindingElement{
                                        Element: "distinctio",
                                        Property: "praesentium",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("ullam"),
                                    Property: "maiores",
                                },
                                ComponentName: sdk.String("corrupti"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("placeat"),
                                    Operand: sdk.String("explicabo"),
                                    OperandType: sdk.String("placeat"),
                                    Operator: sdk.String("animi"),
                                    Property: sdk.String("expedita"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("laborum"),
                                Event: sdk.String("atque"),
                                ImportedValue: sdk.String("assumenda"),
                                Model: sdk.String("laborum"),
                                Property: sdk.String("magnam"),
                                Type: sdk.String("veritatis"),
                                UserAttribute: sdk.String("fugit"),
                                Value: sdk.String("nihil"),
                            },
                        },
                    },
                    "illum": shared.ComponentEvent{
                        Action: sdk.String("nulla"),
                        BindingEvent: sdk.String("nemo"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("omnis"),
                                    Property: "iure",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "sapiente": shared.FormBindingElement{
                                        Element: "eius",
                                        Property: "esse",
                                    },
                                    "quasi": shared.FormBindingElement{
                                        Element: "inventore",
                                        Property: "similique",
                                    },
                                    "id": shared.FormBindingElement{
                                        Element: "et",
                                        Property: "distinctio",
                                    },
                                    "porro": shared.FormBindingElement{
                                        Element: "nihil",
                                        Property: "numquam",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("rerum"),
                                    Property: "atque",
                                },
                                ComponentName: sdk.String("aliquid"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("necessitatibus"),
                                    Operand: sdk.String("quisquam"),
                                    OperandType: sdk.String("impedit"),
                                    Operator: sdk.String("ducimus"),
                                    Property: sdk.String("incidunt"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("voluptatibus"),
                                Event: sdk.String("nihil"),
                                ImportedValue: sdk.String("ducimus"),
                                Model: sdk.String("nam"),
                                Property: sdk.String("incidunt"),
                                Type: sdk.String("deleniti"),
                                UserAttribute: sdk.String("aliquam"),
                                Value: sdk.String("totam"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "quibusdam": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("iure"),
                                        Property: "mollitia",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "hic": shared.FormBindingElement{
                                            Element: "perferendis",
                                            Property: "tempora",
                                        },
                                        "aliquam": shared.FormBindingElement{
                                            Element: "architecto",
                                            Property: "nulla",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("qui"),
                                        Property: "maxime",
                                    },
                                    ComponentName: sdk.String("ratione"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("quos"),
                                        Operand: sdk.String("sit"),
                                        OperandType: sdk.String("laudantium"),
                                        Operator: sdk.String("sit"),
                                        Property: sdk.String("perspiciatis"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("quaerat"),
                                    Event: sdk.String("nesciunt"),
                                    ImportedValue: sdk.String("molestiae"),
                                    Model: sdk.String("adipisci"),
                                    Property: sdk.String("eveniet"),
                                    Type: sdk.String("ipsa"),
                                    UserAttribute: sdk.String("laboriosam"),
                                    Value: sdk.String("sit"),
                                },
                                "labore": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("ullam"),
                                        Property: "excepturi",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "voluptates": shared.FormBindingElement{
                                            Element: "rerum",
                                            Property: "cum",
                                        },
                                        "est": shared.FormBindingElement{
                                            Element: "fugiat",
                                            Property: "perferendis",
                                        },
                                        "qui": shared.FormBindingElement{
                                            Element: "tenetur",
                                            Property: "sunt",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("quis"),
                                        Property: "corrupti",
                                    },
                                    ComponentName: sdk.String("iure"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("quod"),
                                        Operand: sdk.String("a"),
                                        OperandType: sdk.String("et"),
                                        Operator: sdk.String("ipsam"),
                                        Property: sdk.String("eos"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("exercitationem"),
                                    Event: sdk.String("minima"),
                                    ImportedValue: sdk.String("laudantium"),
                                    Model: sdk.String("quibusdam"),
                                    Property: sdk.String("fuga"),
                                    Type: sdk.String("fuga"),
                                    UserAttribute: sdk.String("excepturi"),
                                    Value: sdk.String("corporis"),
                                },
                                "nam": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("itaque"),
                                        Property: "suscipit",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "nulla": shared.FormBindingElement{
                                            Element: "consequatur",
                                            Property: "qui",
                                        },
                                        "in": shared.FormBindingElement{
                                            Element: "enim",
                                            Property: "vel",
                                        },
                                        "impedit": shared.FormBindingElement{
                                            Element: "consectetur",
                                            Property: "quis",
                                        },
                                        "ut": shared.FormBindingElement{
                                            Element: "est",
                                            Property: "fuga",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("labore"),
                                        Property: "adipisci",
                                    },
                                    ComponentName: sdk.String("ratione"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("magnam"),
                                        Operand: sdk.String("nihil"),
                                        OperandType: sdk.String("officiis"),
                                        Operator: sdk.String("inventore"),
                                        Property: sdk.String("esse"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("ex"),
                                    Event: sdk.String("amet"),
                                    ImportedValue: sdk.String("minus"),
                                    Model: sdk.String("ad"),
                                    Property: sdk.String("explicabo"),
                                    Type: sdk.String("alias"),
                                    UserAttribute: sdk.String("blanditiis"),
                                    Value: sdk.String("eligendi"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("qui"),
                                    Property: "amet",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "perspiciatis": shared.FormBindingElement{
                                        Element: "corrupti",
                                        Property: "sit",
                                    },
                                    "magni": shared.FormBindingElement{
                                        Element: "repellendus",
                                        Property: "quas",
                                    },
                                    "ratione": shared.FormBindingElement{
                                        Element: "sapiente",
                                        Property: "alias",
                                    },
                                    "repellendus": shared.FormBindingElement{
                                        Element: "magnam",
                                        Property: "quis",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("repudiandae"),
                                    Property: "soluta",
                                },
                                ComponentName: sdk.String("eius"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("blanditiis"),
                                    Operand: sdk.String("nobis"),
                                    OperandType: sdk.String("ea"),
                                    Operator: sdk.String("iusto"),
                                    Property: sdk.String("dolore"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("repudiandae"),
                                Event: sdk.String("recusandae"),
                                ImportedValue: sdk.String("ipsam"),
                                Model: sdk.String("quisquam"),
                                Property: sdk.String("delectus"),
                                Type: sdk.String("optio"),
                                UserAttribute: sdk.String("sunt"),
                                Value: sdk.String("rem"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("itaque"),
                                    Property: "assumenda",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "esse": shared.FormBindingElement{
                                        Element: "a",
                                        Property: "quam",
                                    },
                                    "quos": shared.FormBindingElement{
                                        Element: "dignissimos",
                                        Property: "earum",
                                    },
                                    "adipisci": shared.FormBindingElement{
                                        Element: "magni",
                                        Property: "recusandae",
                                    },
                                    "voluptatem": shared.FormBindingElement{
                                        Element: "eius",
                                        Property: "rerum",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nesciunt"),
                                    Property: "pariatur",
                                },
                                ComponentName: sdk.String("velit"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("facere"),
                                    Operand: sdk.String("quae"),
                                    OperandType: sdk.String("cumque"),
                                    Operator: sdk.String("ullam"),
                                    Property: sdk.String("vel"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("reprehenderit"),
                                Event: sdk.String("aut"),
                                ImportedValue: sdk.String("recusandae"),
                                Model: sdk.String("voluptatibus"),
                                Property: sdk.String("dolore"),
                                Type: sdk.String("aspernatur"),
                                UserAttribute: sdk.String("harum"),
                                Value: sdk.String("illum"),
                            },
                            Model: sdk.String("dolor"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "porro",
                                Property: "iste",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("earum"),
                                        Property: "vitae",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "eligendi": shared.FormBindingElement{
                                            Element: "veniam",
                                            Property: "aperiam",
                                        },
                                        "consectetur": shared.FormBindingElement{
                                            Element: "repellat",
                                            Property: "voluptas",
                                        },
                                        "quod": shared.FormBindingElement{
                                            Element: "nesciunt",
                                            Property: "iste",
                                        },
                                        "distinctio": shared.FormBindingElement{
                                            Element: "cumque",
                                            Property: "assumenda",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("alias"),
                                        Property: "deserunt",
                                    },
                                    ComponentName: sdk.String("vel"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("perspiciatis"),
                                        Operand: sdk.String("accusantium"),
                                        OperandType: sdk.String("voluptatibus"),
                                        Operator: sdk.String("occaecati"),
                                        Property: sdk.String("nemo"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("quam"),
                                    Event: sdk.String("reiciendis"),
                                    ImportedValue: sdk.String("nesciunt"),
                                    Model: sdk.String("laudantium"),
                                    Property: sdk.String("nemo"),
                                    Type: sdk.String("ab"),
                                    UserAttribute: sdk.String("atque"),
                                    Value: sdk.String("natus"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("culpa"),
                                    Property: "possimus",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "officiis": shared.FormBindingElement{
                                        Element: "reiciendis",
                                        Property: "voluptatum",
                                    },
                                    "aperiam": shared.FormBindingElement{
                                        Element: "reprehenderit",
                                        Property: "animi",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("officia"),
                                    Property: "eveniet",
                                },
                                ComponentName: sdk.String("quae"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("hic"),
                                    Operand: sdk.String("dolorem"),
                                    OperandType: sdk.String("adipisci"),
                                    Operator: sdk.String("optio"),
                                    Property: sdk.String("similique"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("odio"),
                                Event: sdk.String("unde"),
                                ImportedValue: sdk.String("asperiores"),
                                Model: sdk.String("nam"),
                                Property: sdk.String("provident"),
                                Type: sdk.String("fugiat"),
                                UserAttribute: sdk.String("recusandae"),
                                Value: sdk.String("non"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("aut"),
                                    Property: "neque",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "soluta": shared.FormBindingElement{
                                        Element: "fuga",
                                        Property: "qui",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("commodi"),
                                    Property: "a",
                                },
                                ComponentName: sdk.String("temporibus"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("eum"),
                                    Operand: sdk.String("rem"),
                                    OperandType: sdk.String("expedita"),
                                    Operator: sdk.String("animi"),
                                    Property: sdk.String("excepturi"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("dolores"),
                                Event: sdk.String("dicta"),
                                ImportedValue: sdk.String("laboriosam"),
                                Model: sdk.String("distinctio"),
                                Property: sdk.String("quo"),
                                Type: sdk.String("facilis"),
                                UserAttribute: sdk.String("magnam"),
                                Value: sdk.String("dicta"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nostrum"),
                                    Property: "molestias",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "quis": shared.FormBindingElement{
                                        Element: "optio",
                                        Property: "esse",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("adipisci"),
                                    Property: "autem",
                                },
                                ComponentName: sdk.String("tempora"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("dignissimos"),
                                    Operand: sdk.String("quia"),
                                    OperandType: sdk.String("ratione"),
                                    Operator: sdk.String("veritatis"),
                                    Property: sdk.String("amet"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("sequi"),
                                Event: sdk.String("recusandae"),
                                ImportedValue: sdk.String("fugiat"),
                                Model: sdk.String("quod"),
                                Property: sdk.String("sit"),
                                Type: sdk.String("modi"),
                                UserAttribute: sdk.String("eum"),
                                Value: sdk.String("rerum"),
                            },
                        },
                    },
                    "quod": shared.ComponentEvent{
                        Action: sdk.String("nemo"),
                        BindingEvent: sdk.String("architecto"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("vel"),
                                    Property: "amet",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "libero": shared.FormBindingElement{
                                        Element: "maxime",
                                        Property: "deserunt",
                                    },
                                    "eius": shared.FormBindingElement{
                                        Element: "molestias",
                                        Property: "dolores",
                                    },
                                    "dolores": shared.FormBindingElement{
                                        Element: "reprehenderit",
                                        Property: "minus",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("non"),
                                    Property: "odit",
                                },
                                ComponentName: sdk.String("maxime"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("magni"),
                                    Operand: sdk.String("minus"),
                                    OperandType: sdk.String("minima"),
                                    Operator: sdk.String("ipsam"),
                                    Property: sdk.String("sequi"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("quaerat"),
                                Event: sdk.String("accusantium"),
                                ImportedValue: sdk.String("incidunt"),
                                Model: sdk.String("cupiditate"),
                                Property: sdk.String("minima"),
                                Type: sdk.String("quo"),
                                UserAttribute: sdk.String("quis"),
                                Value: sdk.String("facere"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "harum": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("adipisci"),
                                        Property: "optio",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "reprehenderit": shared.FormBindingElement{
                                            Element: "quo",
                                            Property: "vitae",
                                        },
                                        "voluptates": shared.FormBindingElement{
                                            Element: "tempora",
                                            Property: "iste",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("molestias"),
                                        Property: "beatae",
                                    },
                                    ComponentName: sdk.String("itaque"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("dolorum"),
                                        Operand: sdk.String("similique"),
                                        OperandType: sdk.String("qui"),
                                        Operator: sdk.String("enim"),
                                        Property: sdk.String("quam"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("assumenda"),
                                    Event: sdk.String("temporibus"),
                                    ImportedValue: sdk.String("porro"),
                                    Model: sdk.String("quasi"),
                                    Property: sdk.String("sint"),
                                    Type: sdk.String("inventore"),
                                    UserAttribute: sdk.String("fugit"),
                                    Value: sdk.String("earum"),
                                },
                                "quidem": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("at"),
                                        Property: "debitis",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "non": shared.FormBindingElement{
                                            Element: "nam",
                                            Property: "sapiente",
                                        },
                                        "porro": shared.FormBindingElement{
                                            Element: "impedit",
                                            Property: "veniam",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("magnam"),
                                        Property: "iure",
                                    },
                                    ComponentName: sdk.String("natus"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("quaerat"),
                                        Operand: sdk.String("aut"),
                                        OperandType: sdk.String("architecto"),
                                        Operator: sdk.String("quis"),
                                        Property: sdk.String("possimus"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("reiciendis"),
                                    Event: sdk.String("est"),
                                    ImportedValue: sdk.String("esse"),
                                    Model: sdk.String("iste"),
                                    Property: sdk.String("ex"),
                                    Type: sdk.String("odit"),
                                    UserAttribute: sdk.String("voluptatem"),
                                    Value: sdk.String("voluptas"),
                                },
                                "libero": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("vero"),
                                        Property: "hic",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "quidem": shared.FormBindingElement{
                                            Element: "aperiam",
                                            Property: "animi",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("ratione"),
                                        Property: "itaque",
                                    },
                                    ComponentName: sdk.String("non"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("porro"),
                                        Operand: sdk.String("architecto"),
                                        OperandType: sdk.String("deserunt"),
                                        Operator: sdk.String("fuga"),
                                        Property: sdk.String("perferendis"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("illo"),
                                    Event: sdk.String("perferendis"),
                                    ImportedValue: sdk.String("eveniet"),
                                    Model: sdk.String("excepturi"),
                                    Property: sdk.String("fuga"),
                                    Type: sdk.String("culpa"),
                                    UserAttribute: sdk.String("quo"),
                                    Value: sdk.String("sunt"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("necessitatibus"),
                                    Property: "iste",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "adipisci": shared.FormBindingElement{
                                        Element: "quis",
                                        Property: "quis",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("quos"),
                                    Property: "ea",
                                },
                                ComponentName: sdk.String("fugiat"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("quas"),
                                    Operand: sdk.String("delectus"),
                                    OperandType: sdk.String("sint"),
                                    Operator: sdk.String("voluptatibus"),
                                    Property: sdk.String("sint"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("reprehenderit"),
                                Event: sdk.String("est"),
                                ImportedValue: sdk.String("numquam"),
                                Model: sdk.String("nam"),
                                Property: sdk.String("sapiente"),
                                Type: sdk.String("fuga"),
                                UserAttribute: sdk.String("facere"),
                                Value: sdk.String("odit"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nam"),
                                    Property: "asperiores",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "fugiat": shared.FormBindingElement{
                                        Element: "ea",
                                        Property: "molestiae",
                                    },
                                    "quo": shared.FormBindingElement{
                                        Element: "deserunt",
                                        Property: "totam",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("modi"),
                                    Property: "id",
                                },
                                ComponentName: sdk.String("repellendus"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("unde"),
                                    Operand: sdk.String("expedita"),
                                    OperandType: sdk.String("eius"),
                                    Operator: sdk.String("quasi"),
                                    Property: sdk.String("quibusdam"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("voluptas"),
                                Event: sdk.String("quasi"),
                                ImportedValue: sdk.String("magni"),
                                Model: sdk.String("numquam"),
                                Property: sdk.String("velit"),
                                Type: sdk.String("quis"),
                                UserAttribute: sdk.String("nesciunt"),
                                Value: sdk.String("sunt"),
                            },
                            Model: sdk.String("blanditiis"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "quam",
                                Property: "perferendis",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("cumque"),
                                        Property: "delectus",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "totam": shared.FormBindingElement{
                                            Element: "quidem",
                                            Property: "eaque",
                                        },
                                        "sequi": shared.FormBindingElement{
                                            Element: "fuga",
                                            Property: "assumenda",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("modi"),
                                        Property: "dolores",
                                    },
                                    ComponentName: sdk.String("beatae"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("repellendus"),
                                        Operand: sdk.String("ut"),
                                        OperandType: sdk.String("nesciunt"),
                                        Operator: sdk.String("facere"),
                                        Property: sdk.String("beatae"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("delectus"),
                                    Event: sdk.String("ipsa"),
                                    ImportedValue: sdk.String("quo"),
                                    Model: sdk.String("libero"),
                                    Property: sdk.String("eaque"),
                                    Type: sdk.String("animi"),
                                    UserAttribute: sdk.String("doloremque"),
                                    Value: sdk.String("consequatur"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("perferendis"),
                                    Property: "dolor",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "facilis": shared.FormBindingElement{
                                        Element: "eos",
                                        Property: "sed",
                                    },
                                    "fugiat": shared.FormBindingElement{
                                        Element: "sint",
                                        Property: "tempore",
                                    },
                                    "dolorem": shared.FormBindingElement{
                                        Element: "dolorum",
                                        Property: "in",
                                    },
                                    "aperiam": shared.FormBindingElement{
                                        Element: "pariatur",
                                        Property: "excepturi",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("aliquam"),
                                    Property: "voluptatibus",
                                },
                                ComponentName: sdk.String("fuga"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("iure"),
                                    Operand: sdk.String("labore"),
                                    OperandType: sdk.String("quasi"),
                                    Operator: sdk.String("cumque"),
                                    Property: sdk.String("corporis"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("odio"),
                                Event: sdk.String("quibusdam"),
                                ImportedValue: sdk.String("dicta"),
                                Model: sdk.String("voluptatibus"),
                                Property: sdk.String("vero"),
                                Type: sdk.String("quibusdam"),
                                UserAttribute: sdk.String("maxime"),
                                Value: sdk.String("consequuntur"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("sit"),
                                    Property: "nostrum",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "repellendus": shared.FormBindingElement{
                                        Element: "ratione",
                                        Property: "quos",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("pariatur"),
                                    Property: "quo",
                                },
                                ComponentName: sdk.String("sequi"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("repudiandae"),
                                    Operand: sdk.String("ab"),
                                    OperandType: sdk.String("praesentium"),
                                    Operator: sdk.String("nostrum"),
                                    Property: sdk.String("labore"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("iusto"),
                                Event: sdk.String("sunt"),
                                ImportedValue: sdk.String("tenetur"),
                                Model: sdk.String("occaecati"),
                                Property: sdk.String("necessitatibus"),
                                Type: sdk.String("necessitatibus"),
                                UserAttribute: sdk.String("autem"),
                                Value: sdk.String("natus"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("quasi"),
                                    Property: "iure",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "error": shared.FormBindingElement{
                                        Element: "deleniti",
                                        Property: "tempore",
                                    },
                                    "saepe": shared.FormBindingElement{
                                        Element: "adipisci",
                                        Property: "dolore",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("tempora"),
                                    Property: "quaerat",
                                },
                                ComponentName: sdk.String("debitis"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("porro"),
                                    Operand: sdk.String("blanditiis"),
                                    OperandType: sdk.String("libero"),
                                    Operator: sdk.String("sequi"),
                                    Property: sdk.String("laborum"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("fugit"),
                                Event: sdk.String("totam"),
                                ImportedValue: sdk.String("dignissimos"),
                                Model: sdk.String("corporis"),
                                Property: sdk.String("quo"),
                                Type: sdk.String("nisi"),
                                UserAttribute: sdk.String("quo"),
                                Value: sdk.String("inventore"),
                            },
                        },
                    },
                },
                ID: sdk.String("fe606d07-d2a9-4c87-ae50-c16661a1d913"),
                Name: sdk.String("Marguerite Kozey"),
                Overrides: map[string]map[string]string{
                    "minima": map[string]string{
                        "qui": "et",
                    },
                    "amet": map[string]string{
                        "velit": "asperiores",
                        "commodi": "voluptas",
                        "quos": "esse",
                        "veniam": "fugit",
                    },
                    "assumenda": map[string]string{
                        "molestiae": "autem",
                        "aliquam": "maxime",
                        "nostrum": "occaecati",
                    },
                    "asperiores": map[string]string{
                        "id": "veniam",
                    },
                },
                Properties: sdk.String("ea"),
                SchemaVersion: sdk.String("placeat"),
                SourceID: sdk.String("necessitatibus"),
                Variants: []shared.ComponentVariant{
                    shared.ComponentVariant{
                        Overrides: map[string]map[string]string{
                            "culpa": map[string]string{
                                "laborum": "consequuntur",
                                "omnis": "maxime",
                                "officia": "iusto",
                                "natus": "ab",
                            },
                            "deleniti": map[string]string{
                                "eligendi": "sint",
                            },
                            "ipsam": map[string]string{
                                "molestiae": "ab",
                                "ex": "iure",
                            },
                            "dolorem": map[string]string{
                                "ad": "ipsum",
                                "ipsa": "nam",
                                "minima": "vel",
                                "nisi": "minima",
                            },
                        },
                        VariantValues: map[string]string{
                            "autem": "dolor",
                        },
                    },
                    shared.ComponentVariant{
                        Overrides: map[string]map[string]string{
                            "non": map[string]string{
                                "amet": "deleniti",
                                "exercitationem": "illo",
                            },
                            "fugit": map[string]string{
                                "tempore": "fugit",
                                "nostrum": "magni",
                                "sunt": "quidem",
                            },
                            "perspiciatis": map[string]string{
                                "eos": "saepe",
                                "ipsa": "esse",
                                "consequuntur": "aliquam",
                                "autem": "reprehenderit",
                            },
                        },
                        VariantValues: map[string]string{
                            "quas": "officia",
                            "modi": "alias",
                            "nam": "minus",
                        },
                    },
                    shared.ComponentVariant{
                        Overrides: map[string]map[string]string{
                            "quis": map[string]string{
                                "dolorum": "libero",
                                "voluptatem": "at",
                                "nisi": "quis",
                                "perferendis": "itaque",
                            },
                        },
                        VariantValues: map[string]string{
                            "asperiores": "ratione",
                            "eos": "laborum",
                            "sint": "incidunt",
                            "pariatur": "aspernatur",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("animi"),
        AppID: "aliquam",
        ClientToken: sdk.String("quasi"),
        EnvironmentName: "repellendus",
        ID: "1f465e85-156f-4ff7-bfdf-54fdd5ea9543",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateComponentResponse != nil {
        // handle response
    }
}
```

## UpdateForm

Updates an existing form.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateForm(ctx, operations.UpdateFormRequest{
        RequestBody: operations.UpdateFormRequestBody{
            UpdatedForm: operations.UpdateFormRequestBodyUpdatedForm{
                Cta: &shared.FormCTA{
                    Cancel: &shared.FormButton{
                        Children: sdk.String("sequi"),
                        Excluded: sdk.Bool(false),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("occaecati"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("voluptatum"),
                        },
                    },
                    Clear: &shared.FormButton{
                        Children: sdk.String("illum"),
                        Excluded: sdk.Bool(false),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("laborum"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("sapiente"),
                        },
                    },
                    Position: shared.FormButtonsPositionEnumTopAndBottom.ToPointer(),
                    Submit: &shared.FormButton{
                        Children: sdk.String("eius"),
                        Excluded: sdk.Bool(false),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("dolores"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("dolorum"),
                        },
                    },
                },
                DataType: &shared.FormDataTypeConfig{
                    DataSourceType: shared.FormDataSourceTypeEnumCustom,
                    DataTypeName: "assumenda",
                },
                Fields: map[string]shared.FieldConfig{
                    "dolorem": shared.FieldConfig{
                        Excluded: sdk.Bool(false),
                        InputType: &shared.FieldInputConfig{
                            DefaultChecked: sdk.Bool(false),
                            DefaultCountryCode: sdk.String("neque"),
                            DefaultValue: sdk.String("laudantium"),
                            DescriptiveText: sdk.String("quos"),
                            FileUploaderConfig: &shared.FileUploaderFieldConfig{
                                AcceptedFileTypes: []string{
                                    "incidunt",
                                    "pariatur",
                                    "deleniti",
                                    "aut",
                                },
                                AccessLevel: shared.StorageAccessLevelEnumPublic,
                                IsResumable: sdk.Bool(false),
                                MaxFileCount: sdk.Int64(624164),
                                MaxSize: sdk.Int64(899943),
                                ShowThumbnails: sdk.Bool(false),
                            },
                            IsArray: sdk.Bool(false),
                            MaxValue: sdk.Float32(6353.96),
                            MinValue: sdk.Float32(3381.03),
                            Name: sdk.String("Ms. Jackie Pfeffer"),
                            Placeholder: sdk.String("qui"),
                            ReadOnly: sdk.Bool(false),
                            Required: sdk.Bool(false),
                            Step: sdk.Float32(2720.4),
                            Type: "modi",
                            Value: sdk.String("sapiente"),
                            ValueMappings: &shared.ValueMappings{
                                BindingProperties: map[string]shared.FormInputBindingPropertiesValue{
                                    "nisi": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("ab"),
                                        },
                                        Type: sdk.String("omnis"),
                                    },
                                    "aut": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("ipsum"),
                                        },
                                        Type: sdk.String("iste"),
                                    },
                                    "nulla": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("dolorum"),
                                        },
                                        Type: sdk.String("maxime"),
                                    },
                                    "assumenda": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("velit"),
                                        },
                                        Type: sdk.String("voluptatum"),
                                    },
                                },
                                Values: []shared.ValueMapping{
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("quibusdam"),
                                                Property: "doloremque",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("nobis"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("laboriosam"),
                                                Property: "esse",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("temporibus"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("optio"),
                                                Property: "quam",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("quae"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("vero"),
                                                Property: "amet",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("asperiores"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("quasi"),
                                                Property: "veniam",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("consequuntur"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("aut"),
                                                Property: "maxime",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("aperiam"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("repellendus"),
                                                Property: "ab",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("magnam"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("natus"),
                                                Property: "aperiam",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("repellat"),
                                        },
                                    },
                                },
                            },
                        },
                        Label: sdk.String("dolores"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("harum"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("quibusdam"),
                        },
                        Validations: []shared.FieldValidationConfiguration{
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    805167,
                                    521892,
                                    662487,
                                },
                                StrValues: []string{
                                    "dolores",
                                },
                                Type: "vel",
                                ValidationMessage: sdk.String("ipsum"),
                            },
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    867695,
                                    628095,
                                    336961,
                                },
                                StrValues: []string{
                                    "in",
                                    "nobis",
                                    "nisi",
                                },
                                Type: "natus",
                                ValidationMessage: sdk.String("eaque"),
                            },
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    704574,
                                },
                                StrValues: []string{
                                    "atque",
                                    "illo",
                                    "dolorum",
                                },
                                Type: "provident",
                                ValidationMessage: sdk.String("incidunt"),
                            },
                        },
                    },
                    "maiores": shared.FieldConfig{
                        Excluded: sdk.Bool(false),
                        InputType: &shared.FieldInputConfig{
                            DefaultChecked: sdk.Bool(false),
                            DefaultCountryCode: sdk.String("ea"),
                            DefaultValue: sdk.String("modi"),
                            DescriptiveText: sdk.String("sequi"),
                            FileUploaderConfig: &shared.FileUploaderFieldConfig{
                                AcceptedFileTypes: []string{
                                    "autem",
                                    "tempora",
                                },
                                AccessLevel: shared.StorageAccessLevelEnumProtected,
                                IsResumable: sdk.Bool(false),
                                MaxFileCount: sdk.Int64(558910),
                                MaxSize: sdk.Int64(944689),
                                ShowThumbnails: sdk.Bool(false),
                            },
                            IsArray: sdk.Bool(false),
                            MaxValue: sdk.Float32(437.86),
                            MinValue: sdk.Float32(6634.57),
                            Name: sdk.String("Ian Schinner"),
                            Placeholder: sdk.String("beatae"),
                            ReadOnly: sdk.Bool(false),
                            Required: sdk.Bool(false),
                            Step: sdk.Float32(8126.26),
                            Type: "molestiae",
                            Value: sdk.String("dolor"),
                            ValueMappings: &shared.ValueMappings{
                                BindingProperties: map[string]shared.FormInputBindingPropertiesValue{
                                    "nulla": shared.FormInputBindingPropertiesValue{
                                        BindingProperties: &shared.FormInputBindingPropertiesValueProperties{
                                            Model: sdk.String("occaecati"),
                                        },
                                        Type: sdk.String("doloribus"),
                                    },
                                },
                                Values: []shared.ValueMapping{
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("culpa"),
                                                Property: "tenetur",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("magnam"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("voluptate"),
                                                Property: "aliquid",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("qui"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("animi"),
                                                Property: "vero",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("possimus"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("optio"),
                                                Property: "quo",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("ipsa"),
                                        },
                                    },
                                    shared.ValueMapping{
                                        DisplayValue: &shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("placeat"),
                                                Property: "quas",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("consectetur"),
                                        },
                                        Value: shared.FormInputValueProperty{
                                            BindingProperties: &shared.FormInputValuePropertyBindingProperties{
                                                Field: sdk.String("nostrum"),
                                                Property: "dicta",
                                            },
                                            Concat: []shared.FormInputValueProperty{
                                                shared.FormInputValueProperty{},
                                            },
                                            Value: sdk.String("porro"),
                                        },
                                    },
                                },
                            },
                        },
                        Label: sdk.String("iusto"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("dolorem"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("voluptate"),
                        },
                        Validations: []shared.FieldValidationConfiguration{
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    526096,
                                    591417,
                                },
                                StrValues: []string{
                                    "alias",
                                },
                                Type: "dignissimos",
                                ValidationMessage: sdk.String("minima"),
                            },
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    649064,
                                },
                                StrValues: []string{
                                    "sit",
                                },
                                Type: "accusamus",
                                ValidationMessage: sdk.String("sint"),
                            },
                            shared.FieldValidationConfiguration{
                                NumValues: []int64{
                                    376472,
                                    907420,
                                },
                                StrValues: []string{
                                    "ducimus",
                                    "dolorem",
                                    "eum",
                                    "possimus",
                                },
                                Type: "dolore",
                                ValidationMessage: sdk.String("neque"),
                            },
                        },
                    },
                },
                FormActionType: shared.FormActionTypeEnumCreate.ToPointer(),
                LabelDecorator: shared.LabelDecoratorEnumOptional.ToPointer(),
                Name: sdk.String("Robin Mohr"),
                SchemaVersion: sdk.String("molestiae"),
                SectionalElements: map[string]shared.SectionalElement{
                    "dolor": shared.SectionalElement{
                        Excluded: sdk.Bool(false),
                        Level: sdk.Int64(758256),
                        Orientation: sdk.String("cupiditate"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("quia"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("dolor"),
                        },
                        Text: sdk.String("cupiditate"),
                        Type: "praesentium",
                    },
                    "accusamus": shared.SectionalElement{
                        Excluded: sdk.Bool(false),
                        Level: sdk.Int64(856859),
                        Orientation: sdk.String("ipsum"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("pariatur"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("amet"),
                        },
                        Text: sdk.String("deserunt"),
                        Type: "nobis",
                    },
                    "quam": shared.SectionalElement{
                        Excluded: sdk.Bool(false),
                        Level: sdk.Int64(812057),
                        Orientation: sdk.String("est"),
                        Position: &shared.FieldPosition{
                            Below: sdk.String("non"),
                            Fixed: shared.FixedPositionEnumFirst.ToPointer(),
                            RightOf: sdk.String("placeat"),
                        },
                        Text: sdk.String("veniam"),
                        Type: "minus",
                    },
                },
                Style: &shared.FormStyle{
                    HorizontalGap: &shared.FormStyleConfig{
                        TokenReference: sdk.String("similique"),
                        Value: sdk.String("corrupti"),
                    },
                    OuterPadding: &shared.FormStyleConfig{
                        TokenReference: sdk.String("aliquid"),
                        Value: sdk.String("aliquam"),
                    },
                    VerticalGap: &shared.FormStyleConfig{
                        TokenReference: sdk.String("error"),
                        Value: sdk.String("animi"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        AppID: "commodi",
        ClientToken: sdk.String("iste"),
        EnvironmentName: "corrupti",
        ID: "9b720645-1077-4d19-aa83-d492ed14b8a2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFormResponse != nil {
        // handle response
    }
}
```

## UpdateTheme

Updates an existing theme.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTheme(ctx, operations.UpdateThemeRequest{
        RequestBody: operations.UpdateThemeRequestBody{
            UpdatedTheme: operations.UpdateThemeRequestBodyUpdatedTheme{
                ID: sdk.String("c1954545-e955-4dcc-985e-a4901c7c43ad"),
                Name: sdk.String("Betsy Osinski"),
                Overrides: []shared.ThemeValues{
                    shared.ThemeValues{
                        Key: sdk.String("incidunt"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("nobis"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("culpa"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("illum"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("sed"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("aut"),
                        },
                    },
                },
                Values: []shared.ThemeValues{
                    shared.ThemeValues{
                        Key: sdk.String("nulla"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("dignissimos"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("dolor"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("beatae"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("vitae"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("beatae"),
                        },
                    },
                    shared.ThemeValues{
                        Key: sdk.String("vitae"),
                        Value: &shared.ThemeValue{
                            Children: []shared.ThemeValues{
                                shared.ThemeValues{},
                                shared.ThemeValues{},
                            },
                            Value: sdk.String("non"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        AppID: "enim",
        ClientToken: sdk.String("voluptas"),
        EnvironmentName: "veniam",
        ID: "07621c58-f4d7-4396-964c-20a0711a961d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateThemeResponse != nil {
        // handle response
    }
}
```
