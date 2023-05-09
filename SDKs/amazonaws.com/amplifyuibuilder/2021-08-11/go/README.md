# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amplifyuibuilder/2021-08-11/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CreateComponent(ctx, operations.CreateComponentRequest{
        RequestBody: operations.CreateComponentRequestBody{
            ComponentToCreate: operations.CreateComponentRequestBodyComponentToCreate{
                BindingProperties: map[string]shared.ComponentBindingPropertiesValue{
                    "provident": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("distinctio"),
                            DefaultValue: sdk.String("quibusdam"),
                            Field: sdk.String("unde"),
                            Key: sdk.String("nulla"),
                            Model: sdk.String("corrupti"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("error"),
                                    Operand: sdk.String("deserunt"),
                                    OperandType: sdk.String("suscipit"),
                                    Operator: sdk.String("iure"),
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
                                    Field: sdk.String("ipsa"),
                                    Operand: sdk.String("delectus"),
                                    OperandType: sdk.String("tempora"),
                                    Operator: sdk.String("suscipit"),
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
                                    Field: sdk.String("placeat"),
                                    Operand: sdk.String("voluptatum"),
                                    OperandType: sdk.String("iusto"),
                                    Operator: sdk.String("excepturi"),
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
                                    Field: sdk.String("temporibus"),
                                    Operand: sdk.String("ab"),
                                    OperandType: sdk.String("quis"),
                                    Operator: sdk.String("veritatis"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("perferendis"),
                            UserAttribute: sdk.String("ipsam"),
                        },
                        DefaultValue: sdk.String("repellendus"),
                        Type: sdk.String("sapiente"),
                    },
                    "quo": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("odit"),
                            DefaultValue: sdk.String("at"),
                            Field: sdk.String("at"),
                            Key: sdk.String("maiores"),
                            Model: sdk.String("molestiae"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("esse"),
                                    Operand: sdk.String("totam"),
                                    OperandType: sdk.String("porro"),
                                    Operator: sdk.String("dolorum"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("officia"),
                                    Operand: sdk.String("occaecati"),
                                    OperandType: sdk.String("fugit"),
                                    Operator: sdk.String("deleniti"),
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
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("totam"),
                                    Operand: sdk.String("beatae"),
                                    OperandType: sdk.String("commodi"),
                                    Operator: sdk.String("molestiae"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("impedit"),
                                    Operand: sdk.String("cum"),
                                    OperandType: sdk.String("esse"),
                                    Operator: sdk.String("ipsum"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("aspernatur"),
                            UserAttribute: sdk.String("perferendis"),
                        },
                        DefaultValue: sdk.String("ad"),
                        Type: sdk.String("natus"),
                    },
                    "sed": shared.ComponentBindingPropertiesValue{
                        BindingProperties: &shared.ComponentBindingPropertiesValueProperties{
                            Bucket: sdk.String("iste"),
                            DefaultValue: sdk.String("dolor"),
                            Field: sdk.String("natus"),
                            Key: sdk.String("laboriosam"),
                            Model: sdk.String("hic"),
                            Predicates: []shared.Predicate{
                                shared.Predicate{
                                    And: []shared.Predicate{
                                        shared.Predicate{},
                                        shared.Predicate{},
                                        shared.Predicate{},
                                    },
                                    Field: sdk.String("in"),
                                    Operand: sdk.String("corporis"),
                                    OperandType: sdk.String("iste"),
                                    Operator: sdk.String("iure"),
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
                                    Field: sdk.String("architecto"),
                                    Operand: sdk.String("ipsa"),
                                    OperandType: sdk.String("reiciendis"),
                                    Operator: sdk.String("est"),
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
                                    },
                                    Field: sdk.String("dolores"),
                                    Operand: sdk.String("dolorem"),
                                    OperandType: sdk.String("corporis"),
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
                                    },
                                    Field: sdk.String("omnis"),
                                    Operand: sdk.String("nemo"),
                                    OperandType: sdk.String("minima"),
                                    Operator: sdk.String("excepturi"),
                                    Or: []shared.Predicate{
                                        shared.Predicate{},
                                    },
                                },
                            },
                            SlotName: sdk.String("iure"),
                            UserAttribute: sdk.String("culpa"),
                        },
                        DefaultValue: sdk.String("doloribus"),
                        Type: sdk.String("sapiente"),
                    },
                },
                Children: []shared.ComponentChild{
                    shared.ComponentChild{
                        Children: []shared.ComponentChild{
                            shared.ComponentChild{},
                            shared.ComponentChild{},
                            shared.ComponentChild{},
                        },
                        ComponentType: "dolorem",
                        Events: map[string]shared.ComponentEvent{
                            "consequuntur": shared.ComponentEvent{
                                Action: sdk.String("repellat"),
                                BindingEvent: sdk.String("mollitia"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("occaecati"),
                                            Property: "numquam",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quam": shared.FormBindingElement{
                                                Element: "molestiae",
                                                Property: "velit",
                                            },
                                            "error": shared.FormBindingElement{
                                                Element: "quia",
                                                Property: "quis",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("vitae"),
                                            Property: "laborum",
                                        },
                                        ComponentName: sdk.String("animi"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("odit"),
                                            Operand: sdk.String("quo"),
                                            OperandType: sdk.String("sequi"),
                                            Operator: sdk.String("tenetur"),
                                            Property: sdk.String("ipsam"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("id"),
                                        Event: sdk.String("possimus"),
                                        ImportedValue: sdk.String("aut"),
                                        Model: sdk.String("quasi"),
                                        Property: sdk.String("error"),
                                        Type: sdk.String("temporibus"),
                                        UserAttribute: sdk.String("laborum"),
                                        Value: sdk.String("quasi"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "voluptatibus": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("vero"),
                                                Property: "nihil",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "voluptatibus": shared.FormBindingElement{
                                                    Element: "ipsa",
                                                    Property: "omnis",
                                                },
                                                "voluptate": shared.FormBindingElement{
                                                    Element: "cum",
                                                    Property: "perferendis",
                                                },
                                                "doloremque": shared.FormBindingElement{
                                                    Element: "reprehenderit",
                                                    Property: "ut",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("maiores"),
                                                Property: "dicta",
                                            },
                                            ComponentName: sdk.String("corporis"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("iusto"),
                                                Operand: sdk.String("dicta"),
                                                OperandType: sdk.String("harum"),
                                                Operator: sdk.String("enim"),
                                                Property: sdk.String("accusamus"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("commodi"),
                                            Event: sdk.String("repudiandae"),
                                            ImportedValue: sdk.String("quae"),
                                            Model: sdk.String("ipsum"),
                                            Property: sdk.String("quidem"),
                                            Type: sdk.String("molestias"),
                                            UserAttribute: sdk.String("excepturi"),
                                            Value: sdk.String("pariatur"),
                                        },
                                        "modi": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("praesentium"),
                                                Property: "rem",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "quasi": shared.FormBindingElement{
                                                    Element: "repudiandae",
                                                    Property: "sint",
                                                },
                                                "veritatis": shared.FormBindingElement{
                                                    Element: "itaque",
                                                    Property: "incidunt",
                                                },
                                                "enim": shared.FormBindingElement{
                                                    Element: "consequatur",
                                                    Property: "est",
                                                },
                                                "quibusdam": shared.FormBindingElement{
                                                    Element: "explicabo",
                                                    Property: "deserunt",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("distinctio"),
                                                Property: "quibusdam",
                                            },
                                            ComponentName: sdk.String("labore"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("qui"),
                                                Operand: sdk.String("aliquid"),
                                                OperandType: sdk.String("cupiditate"),
                                                Operator: sdk.String("quos"),
                                                Property: sdk.String("perferendis"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("magni"),
                                            Event: sdk.String("assumenda"),
                                            ImportedValue: sdk.String("ipsam"),
                                            Model: sdk.String("alias"),
                                            Property: sdk.String("fugit"),
                                            Type: sdk.String("dolorum"),
                                            UserAttribute: sdk.String("excepturi"),
                                            Value: sdk.String("tempora"),
                                        },
                                        "facilis": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("tempore"),
                                                Property: "labore",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "eum": shared.FormBindingElement{
                                                    Element: "non",
                                                    Property: "eligendi",
                                                },
                                                "sint": shared.FormBindingElement{
                                                    Element: "aliquid",
                                                    Property: "provident",
                                                },
                                                "necessitatibus": shared.FormBindingElement{
                                                    Element: "sint",
                                                    Property: "officia",
                                                },
                                                "dolor": shared.FormBindingElement{
                                                    Element: "debitis",
                                                    Property: "a",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("dolorum"),
                                                Property: "in",
                                            },
                                            ComponentName: sdk.String("in"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("maiores"),
                                                Operand: sdk.String("rerum"),
                                                OperandType: sdk.String("dicta"),
                                                Operator: sdk.String("magnam"),
                                                Property: sdk.String("cumque"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("facere"),
                                            Event: sdk.String("ea"),
                                            ImportedValue: sdk.String("aliquid"),
                                            Model: sdk.String("laborum"),
                                            Property: sdk.String("accusamus"),
                                            Type: sdk.String("non"),
                                            UserAttribute: sdk.String("occaecati"),
                                            Value: sdk.String("enim"),
                                        },
                                        "accusamus": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("delectus"),
                                                Property: "quidem",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "nam": shared.FormBindingElement{
                                                    Element: "id",
                                                    Property: "blanditiis",
                                                },
                                                "deleniti": shared.FormBindingElement{
                                                    Element: "sapiente",
                                                    Property: "amet",
                                                },
                                                "deserunt": shared.FormBindingElement{
                                                    Element: "nisi",
                                                    Property: "vel",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("natus"),
                                                Property: "omnis",
                                            },
                                            ComponentName: sdk.String("molestiae"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("nihil"),
                                                Operand: sdk.String("magnam"),
                                                OperandType: sdk.String("distinctio"),
                                                Operator: sdk.String("id"),
                                                Property: sdk.String("labore"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("labore"),
                                            Event: sdk.String("suscipit"),
                                            ImportedValue: sdk.String("natus"),
                                            Model: sdk.String("nobis"),
                                            Property: sdk.String("eum"),
                                            Type: sdk.String("vero"),
                                            UserAttribute: sdk.String("aspernatur"),
                                            Value: sdk.String("architecto"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("magnam"),
                                            Property: "et",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "ullam": shared.FormBindingElement{
                                                Element: "provident",
                                                Property: "quos",
                                            },
                                            "sint": shared.FormBindingElement{
                                                Element: "accusantium",
                                                Property: "mollitia",
                                            },
                                            "reiciendis": shared.FormBindingElement{
                                                Element: "mollitia",
                                                Property: "ad",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("eum"),
                                            Property: "dolor",
                                        },
                                        ComponentName: sdk.String("necessitatibus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("nemo"),
                                            Operand: sdk.String("quasi"),
                                            OperandType: sdk.String("iure"),
                                            Operator: sdk.String("doloribus"),
                                            Property: sdk.String("debitis"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("eius"),
                                        Event: sdk.String("maxime"),
                                        ImportedValue: sdk.String("deleniti"),
                                        Model: sdk.String("facilis"),
                                        Property: sdk.String("in"),
                                        Type: sdk.String("architecto"),
                                        UserAttribute: sdk.String("architecto"),
                                        Value: sdk.String("repudiandae"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ullam"),
                                            Property: "expedita",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "repellat": shared.FormBindingElement{
                                                Element: "quibusdam",
                                                Property: "sed",
                                            },
                                            "saepe": shared.FormBindingElement{
                                                Element: "pariatur",
                                                Property: "accusantium",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("consequuntur"),
                                            Property: "praesentium",
                                        },
                                        ComponentName: sdk.String("natus"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("sunt"),
                                            Operand: sdk.String("quo"),
                                            OperandType: sdk.String("illum"),
                                            Operator: sdk.String("pariatur"),
                                            Property: sdk.String("maxime"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("ea"),
                                        Event: sdk.String("excepturi"),
                                        ImportedValue: sdk.String("odit"),
                                        Model: sdk.String("ea"),
                                        Property: sdk.String("accusantium"),
                                        Type: sdk.String("ab"),
                                        UserAttribute: sdk.String("maiores"),
                                        Value: sdk.String("quidem"),
                                    },
                                    Model: sdk.String("ipsam"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "voluptate",
                                        Property: "autem",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("nam"),
                                                Property: "eaque",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "nemo": shared.FormBindingElement{
                                                    Element: "voluptatibus",
                                                    Property: "perferendis",
                                                },
                                                "fugiat": shared.FormBindingElement{
                                                    Element: "amet",
                                                    Property: "aut",
                                                },
                                                "cumque": shared.FormBindingElement{
                                                    Element: "corporis",
                                                    Property: "hic",
                                                },
                                                "libero": shared.FormBindingElement{
                                                    Element: "nobis",
                                                    Property: "dolores",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("quis"),
                                                Property: "totam",
                                            },
                                            ComponentName: sdk.String("dignissimos"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("quis"),
                                                Operand: sdk.String("nesciunt"),
                                                OperandType: sdk.String("eos"),
                                                Operator: sdk.String("perferendis"),
                                                Property: sdk.String("dolores"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("minus"),
                                            Event: sdk.String("quam"),
                                            ImportedValue: sdk.String("dolor"),
                                            Model: sdk.String("vero"),
                                            Property: sdk.String("nostrum"),
                                            Type: sdk.String("hic"),
                                            UserAttribute: sdk.String("recusandae"),
                                            Value: sdk.String("omnis"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("facilis"),
                                            Property: "perspiciatis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "porro": shared.FormBindingElement{
                                                Element: "consequuntur",
                                                Property: "blanditiis",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("error"),
                                            Property: "eaque",
                                        },
                                        ComponentName: sdk.String("occaecati"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("adipisci"),
                                            Operand: sdk.String("asperiores"),
                                            OperandType: sdk.String("earum"),
                                            Operator: sdk.String("modi"),
                                            Property: sdk.String("iste"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("dolorum"),
                                        Event: sdk.String("deleniti"),
                                        ImportedValue: sdk.String("pariatur"),
                                        Model: sdk.String("provident"),
                                        Property: sdk.String("nobis"),
                                        Type: sdk.String("libero"),
                                        UserAttribute: sdk.String("delectus"),
                                        Value: sdk.String("quaerat"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quos"),
                                            Property: "aliquid",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "dolorem": shared.FormBindingElement{
                                                Element: "dolor",
                                                Property: "qui",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ipsum"),
                                            Property: "hic",
                                        },
                                        ComponentName: sdk.String("excepturi"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("voluptate"),
                                            Operand: sdk.String("dignissimos"),
                                            OperandType: sdk.String("reiciendis"),
                                            Operator: sdk.String("amet"),
                                            Property: sdk.String("dolorum"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("numquam"),
                                        Event: sdk.String("veritatis"),
                                        ImportedValue: sdk.String("ipsa"),
                                        Model: sdk.String("ipsa"),
                                        Property: sdk.String("iure"),
                                        Type: sdk.String("odio"),
                                        UserAttribute: sdk.String("quaerat"),
                                        Value: sdk.String("accusamus"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quidem"),
                                            Property: "voluptatibus",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "natus": shared.FormBindingElement{
                                                Element: "eos",
                                                Property: "atque",
                                            },
                                            "sit": shared.FormBindingElement{
                                                Element: "fugiat",
                                                Property: "ab",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("soluta"),
                                            Property: "dolorum",
                                        },
                                        ComponentName: sdk.String("iusto"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("dolorum"),
                                            Operand: sdk.String("deleniti"),
                                            OperandType: sdk.String("omnis"),
                                            Operator: sdk.String("necessitatibus"),
                                            Property: sdk.String("distinctio"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("asperiores"),
                                        Event: sdk.String("nihil"),
                                        ImportedValue: sdk.String("ipsum"),
                                        Model: sdk.String("voluptate"),
                                        Property: sdk.String("id"),
                                        Type: sdk.String("saepe"),
                                        UserAttribute: sdk.String("eius"),
                                        Value: sdk.String("aspernatur"),
                                    },
                                },
                            },
                            "perferendis": shared.ComponentEvent{
                                Action: sdk.String("amet"),
                                BindingEvent: sdk.String("optio"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("accusamus"),
                                            Property: "ad",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "suscipit": shared.FormBindingElement{
                                                Element: "deserunt",
                                                Property: "provident",
                                            },
                                            "minima": shared.FormBindingElement{
                                                Element: "repellendus",
                                                Property: "totam",
                                            },
                                            "similique": shared.FormBindingElement{
                                                Element: "alias",
                                                Property: "at",
                                            },
                                            "quaerat": shared.FormBindingElement{
                                                Element: "tempora",
                                                Property: "vel",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quod"),
                                            Property: "officiis",
                                        },
                                        ComponentName: sdk.String("qui"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("a"),
                                            Operand: sdk.String("esse"),
                                            OperandType: sdk.String("harum"),
                                            Operator: sdk.String("iusto"),
                                            Property: sdk.String("ipsum"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("quisquam"),
                                        Event: sdk.String("tenetur"),
                                        ImportedValue: sdk.String("amet"),
                                        Model: sdk.String("tempore"),
                                        Property: sdk.String("accusamus"),
                                        Type: sdk.String("numquam"),
                                        UserAttribute: sdk.String("enim"),
                                        Value: sdk.String("dolorem"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "totam": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("nihil"),
                                                Property: "sit",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "neque": shared.FormBindingElement{
                                                    Element: "sed",
                                                    Property: "vel",
                                                },
                                                "libero": shared.FormBindingElement{
                                                    Element: "voluptas",
                                                    Property: "deserunt",
                                                },
                                                "quam": shared.FormBindingElement{
                                                    Element: "ipsum",
                                                    Property: "incidunt",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("qui"),
                                                Property: "cupiditate",
                                            },
                                            ComponentName: sdk.String("maxime"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("soluta"),
                                                Operand: sdk.String("dicta"),
                                                OperandType: sdk.String("laborum"),
                                                Operator: sdk.String("totam"),
                                                Property: sdk.String("incidunt"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("aspernatur"),
                                            Event: sdk.String("dolores"),
                                            ImportedValue: sdk.String("distinctio"),
                                            Model: sdk.String("facilis"),
                                            Property: sdk.String("aliquid"),
                                            Type: sdk.String("quam"),
                                            UserAttribute: sdk.String("molestias"),
                                            Value: sdk.String("temporibus"),
                                        },
                                        "qui": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("neque"),
                                                Property: "fugit",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "odio": shared.FormBindingElement{
                                                    Element: "sunt",
                                                    Property: "ullam",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("nam"),
                                                Property: "hic",
                                            },
                                            ComponentName: sdk.String("voluptatem"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("soluta"),
                                                Operand: sdk.String("nobis"),
                                                OperandType: sdk.String("et"),
                                                Operator: sdk.String("saepe"),
                                                Property: sdk.String("ipsum"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("veritatis"),
                                            Event: sdk.String("nobis"),
                                            ImportedValue: sdk.String("quos"),
                                            Model: sdk.String("tempore"),
                                            Property: sdk.String("cupiditate"),
                                            Type: sdk.String("aperiam"),
                                            UserAttribute: sdk.String("delectus"),
                                            Value: sdk.String("dolorem"),
                                        },
                                        "dolore": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("labore"),
                                                Property: "adipisci",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "architecto": shared.FormBindingElement{
                                                    Element: "quae",
                                                    Property: "aut",
                                                },
                                                "quas": shared.FormBindingElement{
                                                    Element: "itaque",
                                                    Property: "consequatur",
                                                },
                                                "est": shared.FormBindingElement{
                                                    Element: "repellendus",
                                                    Property: "porro",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("doloribus"),
                                                Property: "ut",
                                            },
                                            ComponentName: sdk.String("facilis"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("qui"),
                                                Operand: sdk.String("quae"),
                                                OperandType: sdk.String("laudantium"),
                                                Operator: sdk.String("odio"),
                                                Property: sdk.String("occaecati"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("voluptatibus"),
                                            Event: sdk.String("quisquam"),
                                            ImportedValue: sdk.String("vero"),
                                            Model: sdk.String("omnis"),
                                            Property: sdk.String("quis"),
                                            Type: sdk.String("ipsum"),
                                            UserAttribute: sdk.String("delectus"),
                                            Value: sdk.String("voluptate"),
                                        },
                                        "consectetur": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("vero"),
                                                Property: "tenetur",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "hic": shared.FormBindingElement{
                                                    Element: "distinctio",
                                                    Property: "quod",
                                                },
                                                "odio": shared.FormBindingElement{
                                                    Element: "similique",
                                                    Property: "facilis",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("vero"),
                                                Property: "ducimus",
                                            },
                                            ComponentName: sdk.String("dolore"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("illum"),
                                                Operand: sdk.String("sequi"),
                                                OperandType: sdk.String("natus"),
                                                Operator: sdk.String("impedit"),
                                                Property: sdk.String("aut"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("voluptatibus"),
                                            Event: sdk.String("exercitationem"),
                                            ImportedValue: sdk.String("nulla"),
                                            Model: sdk.String("fugit"),
                                            Property: sdk.String("porro"),
                                            Type: sdk.String("maiores"),
                                            UserAttribute: sdk.String("doloribus"),
                                            Value: sdk.String("iusto"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("eligendi"),
                                            Property: "ducimus",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "officia": shared.FormBindingElement{
                                                Element: "tempora",
                                                Property: "ipsam",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("ea"),
                                            Property: "aspernatur",
                                        },
                                        ComponentName: sdk.String("vel"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("magnam"),
                                            Operand: sdk.String("ratione"),
                                            OperandType: sdk.String("ex"),
                                            Operator: sdk.String("laudantium"),
                                            Property: sdk.String("dicta"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("dolor"),
                                        Event: sdk.String("maiores"),
                                        ImportedValue: sdk.String("quasi"),
                                        Model: sdk.String("ex"),
                                        Property: sdk.String("nulla"),
                                        Type: sdk.String("excepturi"),
                                        UserAttribute: sdk.String("voluptatibus"),
                                        Value: sdk.String("nostrum"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("sapiente"),
                                            Property: "quisquam",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "ea": shared.FormBindingElement{
                                                Element: "impedit",
                                                Property: "corporis",
                                            },
                                            "veniam": shared.FormBindingElement{
                                                Element: "aliquid",
                                                Property: "inventore",
                                            },
                                            "magnam": shared.FormBindingElement{
                                                Element: "ea",
                                                Property: "quo",
                                            },
                                            "consectetur": shared.FormBindingElement{
                                                Element: "recusandae",
                                                Property: "aspernatur",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("minima"),
                                            Property: "eaque",
                                        },
                                        ComponentName: sdk.String("a"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("aut"),
                                            Operand: sdk.String("aut"),
                                            OperandType: sdk.String("deleniti"),
                                            Operator: sdk.String("impedit"),
                                            Property: sdk.String("aliquam"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("fugit"),
                                        Event: sdk.String("accusamus"),
                                        ImportedValue: sdk.String("inventore"),
                                        Model: sdk.String("non"),
                                        Property: sdk.String("et"),
                                        Type: sdk.String("dolorum"),
                                        UserAttribute: sdk.String("laborum"),
                                        Value: sdk.String("placeat"),
                                    },
                                    Model: sdk.String("velit"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "eum",
                                        Property: "autem",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("nobis"),
                                                Property: "quas",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "nulla": shared.FormBindingElement{
                                                    Element: "voluptas",
                                                    Property: "libero",
                                                },
                                                "quasi": shared.FormBindingElement{
                                                    Element: "tempora",
                                                    Property: "numquam",
                                                },
                                                "explicabo": shared.FormBindingElement{
                                                    Element: "provident",
                                                    Property: "ipsa",
                                                },
                                                "molestiae": shared.FormBindingElement{
                                                    Element: "magnam",
                                                    Property: "odio",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("eius"),
                                                Property: "esse",
                                            },
                                            ComponentName: sdk.String("esse"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("fuga"),
                                                Operand: sdk.String("reprehenderit"),
                                                OperandType: sdk.String("quidem"),
                                                Operator: sdk.String("fugiat"),
                                                Property: sdk.String("ut"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("eum"),
                                            Event: sdk.String("suscipit"),
                                            ImportedValue: sdk.String("assumenda"),
                                            Model: sdk.String("eos"),
                                            Property: sdk.String("praesentium"),
                                            Type: sdk.String("quisquam"),
                                            UserAttribute: sdk.String("veritatis"),
                                            Value: sdk.String("ipsa"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("id"),
                                            Property: "quidem",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quo": shared.FormBindingElement{
                                                Element: "illum",
                                                Property: "quo",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("fuga"),
                                            Property: "eius",
                                        },
                                        ComponentName: sdk.String("eos"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("ab"),
                                            Operand: sdk.String("cupiditate"),
                                            OperandType: sdk.String("consequatur"),
                                            Operator: sdk.String("tempora"),
                                            Property: sdk.String("debitis"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("ipsam"),
                                        Event: sdk.String("aspernatur"),
                                        ImportedValue: sdk.String("sequi"),
                                        Model: sdk.String("quo"),
                                        Property: sdk.String("esse"),
                                        Type: sdk.String("recusandae"),
                                        UserAttribute: sdk.String("aperiam"),
                                        Value: sdk.String("distinctio"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quod"),
                                            Property: "dignissimos",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "nihil": shared.FormBindingElement{
                                                Element: "totam",
                                                Property: "accusamus",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("aliquam"),
                                            Property: "odio",
                                        },
                                        ComponentName: sdk.String("occaecati"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("sapiente"),
                                            Operand: sdk.String("dolores"),
                                            OperandType: sdk.String("deserunt"),
                                            Operator: sdk.String("molestiae"),
                                            Property: sdk.String("accusantium"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("porro"),
                                        Event: sdk.String("eum"),
                                        ImportedValue: sdk.String("quas"),
                                        Model: sdk.String("praesentium"),
                                        Property: sdk.String("consequuntur"),
                                        Type: sdk.String("deleniti"),
                                        UserAttribute: sdk.String("fugit"),
                                        Value: sdk.String("fuga"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("mollitia"),
                                            Property: "incidunt",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "explicabo": shared.FormBindingElement{
                                                Element: "minima",
                                                Property: "nisi",
                                            },
                                            "fugit": shared.FormBindingElement{
                                                Element: "sapiente",
                                                Property: "consequuntur",
                                            },
                                            "ratione": shared.FormBindingElement{
                                                Element: "explicabo",
                                                Property: "saepe",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("occaecati"),
                                            Property: "atque",
                                        },
                                        ComponentName: sdk.String("et"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("eveniet"),
                                            Operand: sdk.String("accusamus"),
                                            OperandType: sdk.String("veritatis"),
                                            Operator: sdk.String("esse"),
                                            Property: sdk.String("quod"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("nam"),
                                        Event: sdk.String("vero"),
                                        ImportedValue: sdk.String("aliquid"),
                                        Model: sdk.String("quasi"),
                                        Property: sdk.String("saepe"),
                                        Type: sdk.String("vel"),
                                        UserAttribute: sdk.String("harum"),
                                        Value: sdk.String("molestiae"),
                                    },
                                },
                            },
                            "rerum": shared.ComponentEvent{
                                Action: sdk.String("occaecati"),
                                BindingEvent: sdk.String("minima"),
                                Parameters: &shared.ActionParameters{
                                    Anchor: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("distinctio"),
                                            Property: "eligendi",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "culpa": shared.FormBindingElement{
                                                Element: "tempore",
                                                Property: "adipisci",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("cumque"),
                                            Property: "consequuntur",
                                        },
                                        ComponentName: sdk.String("consequatur"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("quaerat"),
                                            Operand: sdk.String("sapiente"),
                                            OperandType: sdk.String("consectetur"),
                                            Operator: sdk.String("esse"),
                                            Property: sdk.String("blanditiis"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("provident"),
                                        Event: sdk.String("a"),
                                        ImportedValue: sdk.String("nulla"),
                                        Model: sdk.String("quas"),
                                        Property: sdk.String("esse"),
                                        Type: sdk.String("quasi"),
                                        UserAttribute: sdk.String("a"),
                                        Value: sdk.String("error"),
                                    },
                                    Fields: map[string]shared.ComponentProperty{
                                        "pariatur": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("possimus"),
                                                Property: "quia",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "asperiores": shared.FormBindingElement{
                                                    Element: "facere",
                                                    Property: "veritatis",
                                                },
                                                "consequuntur": shared.FormBindingElement{
                                                    Element: "quasi",
                                                    Property: "similique",
                                                },
                                                "culpa": shared.FormBindingElement{
                                                    Element: "aliquid",
                                                    Property: "tenetur",
                                                },
                                                "quae": shared.FormBindingElement{
                                                    Element: "earum",
                                                    Property: "vel",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("in"),
                                                Property: "eius",
                                            },
                                            ComponentName: sdk.String("libero"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("soluta"),
                                                Operand: sdk.String("accusantium"),
                                                OperandType: sdk.String("aliquam"),
                                                Operator: sdk.String("sapiente"),
                                                Property: sdk.String("dicta"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("ullam"),
                                            Event: sdk.String("reprehenderit"),
                                            ImportedValue: sdk.String("ullam"),
                                            Model: sdk.String("nisi"),
                                            Property: sdk.String("aut"),
                                            Type: sdk.String("voluptatum"),
                                            UserAttribute: sdk.String("qui"),
                                            Value: sdk.String("quibusdam"),
                                        },
                                        "ex": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("deleniti"),
                                                Property: "itaque",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "architecto": shared.FormBindingElement{
                                                    Element: "omnis",
                                                    Property: "tenetur",
                                                },
                                                "quasi": shared.FormBindingElement{
                                                    Element: "at",
                                                    Property: "et",
                                                },
                                                "voluptate": shared.FormBindingElement{
                                                    Element: "ipsa",
                                                    Property: "minima",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("veritatis"),
                                                Property: "consectetur",
                                            },
                                            ComponentName: sdk.String("adipisci"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("temporibus"),
                                                Operand: sdk.String("accusantium"),
                                                OperandType: sdk.String("rem"),
                                                Operator: sdk.String("aut"),
                                                Property: sdk.String("laudantium"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("eum"),
                                            Event: sdk.String("mollitia"),
                                            ImportedValue: sdk.String("ab"),
                                            Model: sdk.String("corrupti"),
                                            Property: sdk.String("non"),
                                            Type: sdk.String("voluptatem"),
                                            UserAttribute: sdk.String("dolor"),
                                            Value: sdk.String("occaecati"),
                                        },
                                        "numquam": shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("impedit"),
                                                Property: "explicabo",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "aut": shared.FormBindingElement{
                                                    Element: "dignissimos",
                                                    Property: "dicta",
                                                },
                                                "maiores": shared.FormBindingElement{
                                                    Element: "natus",
                                                    Property: "velit",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("voluptatibus"),
                                                Property: "voluptas",
                                            },
                                            ComponentName: sdk.String("asperiores"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("ea"),
                                                Operand: sdk.String("quaerat"),
                                                OperandType: sdk.String("consequuntur"),
                                                Operator: sdk.String("repellendus"),
                                                Property: sdk.String("officia"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("maxime"),
                                            Event: sdk.String("dignissimos"),
                                            ImportedValue: sdk.String("officia"),
                                            Model: sdk.String("asperiores"),
                                            Property: sdk.String("nemo"),
                                            Type: sdk.String("quae"),
                                            UserAttribute: sdk.String("quaerat"),
                                            Value: sdk.String("porro"),
                                        },
                                    },
                                    Global: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quod"),
                                            Property: "labore",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "adipisci": shared.FormBindingElement{
                                                Element: "fuga",
                                                Property: "id",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("suscipit"),
                                            Property: "velit",
                                        },
                                        ComponentName: sdk.String("culpa"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("recusandae"),
                                            Operand: sdk.String("totam"),
                                            OperandType: sdk.String("fugiat"),
                                            Operator: sdk.String("vel"),
                                            Property: sdk.String("ducimus"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("quos"),
                                        Event: sdk.String("vel"),
                                        ImportedValue: sdk.String("labore"),
                                        Model: sdk.String("possimus"),
                                        Property: sdk.String("facilis"),
                                        Type: sdk.String("cum"),
                                        UserAttribute: sdk.String("commodi"),
                                        Value: sdk.String("in"),
                                    },
                                    ID: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("corporis"),
                                            Property: "reiciendis",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "nemo": shared.FormBindingElement{
                                                Element: "recusandae",
                                                Property: "aliquid",
                                            },
                                            "aperiam": shared.FormBindingElement{
                                                Element: "cum",
                                                Property: "consectetur",
                                            },
                                            "in": shared.FormBindingElement{
                                                Element: "exercitationem",
                                                Property: "earum",
                                            },
                                            "facere": shared.FormBindingElement{
                                                Element: "numquam",
                                                Property: "doloribus",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("suscipit"),
                                            Property: "reiciendis",
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
                                            Field: sdk.String("necessitatibus"),
                                            Operand: sdk.String("dolore"),
                                            OperandType: sdk.String("sunt"),
                                            Operator: sdk.String("asperiores"),
                                            Property: sdk.String("adipisci"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("non"),
                                        Event: sdk.String("amet"),
                                        ImportedValue: sdk.String("beatae"),
                                        Model: sdk.String("dignissimos"),
                                        Property: sdk.String("a"),
                                        Type: sdk.String("debitis"),
                                        UserAttribute: sdk.String("consectetur"),
                                        Value: sdk.String("corporis"),
                                    },
                                    Model: sdk.String("harum"),
                                    State: &shared.MutationActionSetStateParameter{
                                        ComponentName: "laboriosam",
                                        Property: "ipsa",
                                        Set: shared.ComponentProperty{
                                            BindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("voluptates"),
                                                Property: "libero",
                                            },
                                            Bindings: map[string]shared.FormBindingElement{
                                                "accusamus": shared.FormBindingElement{
                                                    Element: "similique",
                                                    Property: "tempora",
                                                },
                                            },
                                            CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                                Field: sdk.String("aspernatur"),
                                                Property: "voluptas",
                                            },
                                            ComponentName: sdk.String("voluptas"),
                                            Concat: []shared.ComponentProperty{
                                                shared.ComponentProperty{},
                                                shared.ComponentProperty{},
                                            },
                                            Condition: &shared.ComponentConditionProperty{
                                                Else: &shared.ComponentProperty{},
                                                Field: sdk.String("minima"),
                                                Operand: sdk.String("nobis"),
                                                OperandType: sdk.String("dolorum"),
                                                Operator: sdk.String("adipisci"),
                                                Property: sdk.String("minus"),
                                                Then: &shared.ComponentProperty{},
                                            },
                                            Configured: sdk.Bool(false),
                                            DefaultValue: sdk.String("dolores"),
                                            Event: sdk.String("blanditiis"),
                                            ImportedValue: sdk.String("in"),
                                            Model: sdk.String("dolore"),
                                            Property: sdk.String("aliquam"),
                                            Type: sdk.String("officiis"),
                                            UserAttribute: sdk.String("temporibus"),
                                            Value: sdk.String("ullam"),
                                        },
                                    },
                                    Target: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("adipisci"),
                                            Property: "cum",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "quas": shared.FormBindingElement{
                                                Element: "hic",
                                                Property: "nesciunt",
                                            },
                                            "culpa": shared.FormBindingElement{
                                                Element: "corrupti",
                                                Property: "pariatur",
                                            },
                                            "totam": shared.FormBindingElement{
                                                Element: "hic",
                                                Property: "exercitationem",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("nobis"),
                                            Property: "sit",
                                        },
                                        ComponentName: sdk.String("rerum"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("reiciendis"),
                                            Operand: sdk.String("explicabo"),
                                            OperandType: sdk.String("asperiores"),
                                            Operator: sdk.String("facilis"),
                                            Property: sdk.String("voluptate"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("expedita"),
                                        Event: sdk.String("ab"),
                                        ImportedValue: sdk.String("iste"),
                                        Model: sdk.String("dolore"),
                                        Property: sdk.String("laborum"),
                                        Type: sdk.String("sed"),
                                        UserAttribute: sdk.String("in"),
                                        Value: sdk.String("commodi"),
                                    },
                                    Type: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("quidem"),
                                            Property: "explicabo",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "unde": shared.FormBindingElement{
                                                Element: "architecto",
                                                Property: "suscipit",
                                            },
                                            "sapiente": shared.FormBindingElement{
                                                Element: "debitis",
                                                Property: "illo",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("reiciendis"),
                                            Property: "perferendis",
                                        },
                                        ComponentName: sdk.String("corrupti"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("incidunt"),
                                            Operand: sdk.String("sed"),
                                            OperandType: sdk.String("provident"),
                                            Operator: sdk.String("eius"),
                                            Property: sdk.String("necessitatibus"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("ipsum"),
                                        Event: sdk.String("ea"),
                                        ImportedValue: sdk.String("occaecati"),
                                        Model: sdk.String("quos"),
                                        Property: sdk.String("voluptatibus"),
                                        Type: sdk.String("tempora"),
                                        UserAttribute: sdk.String("tempora"),
                                        Value: sdk.String("voluptate"),
                                    },
                                    URL: &shared.ComponentProperty{
                                        BindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("reiciendis"),
                                            Property: "ex",
                                        },
                                        Bindings: map[string]shared.FormBindingElement{
                                            "non": shared.FormBindingElement{
                                                Element: "officiis",
                                                Property: "praesentium",
                                            },
                                        },
                                        CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                            Field: sdk.String("facilis"),
                                            Property: "quaerat",
                                        },
                                        ComponentName: sdk.String("incidunt"),
                                        Concat: []shared.ComponentProperty{
                                            shared.ComponentProperty{},
                                            shared.ComponentProperty{},
                                        },
                                        Condition: &shared.ComponentConditionProperty{
                                            Else: &shared.ComponentProperty{},
                                            Field: sdk.String("debitis"),
                                            Operand: sdk.String("rem"),
                                            OperandType: sdk.String("sit"),
                                            Operator: sdk.String("nobis"),
                                            Property: sdk.String("error"),
                                            Then: &shared.ComponentProperty{},
                                        },
                                        Configured: sdk.Bool(false),
                                        DefaultValue: sdk.String("veniam"),
                                        Event: sdk.String("minima"),
                                        ImportedValue: sdk.String("recusandae"),
                                        Model: sdk.String("reiciendis"),
                                        Property: sdk.String("nulla"),
                                        Type: sdk.String("magni"),
                                        UserAttribute: sdk.String("aperiam"),
                                        Value: sdk.String("saepe"),
                                    },
                                },
                            },
                        },
                        Name: "Lorraine King IV",
                        Properties: "exercitationem",
                        SourceID: sdk.String("praesentium"),
                    },
                },
                CollectionProperties: map[string]shared.ComponentDataConfiguration{
                    "laboriosam": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "voluptatum",
                            "error",
                            "hic",
                        },
                        Model: "expedita",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                            Field: sdk.String("neque"),
                            Operand: sdk.String("dolorum"),
                            OperandType: sdk.String("nostrum"),
                            Operator: sdk.String("officia"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "tempora",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "fugit",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "fugiat",
                            },
                        },
                    },
                    "voluptatem": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "expedita",
                            "magnam",
                            "consequatur",
                        },
                        Model: "esse",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                            Field: sdk.String("sit"),
                            Operand: sdk.String("voluptatum"),
                            OperandType: sdk.String("quas"),
                            Operator: sdk.String("repudiandae"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "ex",
                            },
                        },
                    },
                    "sed": shared.ComponentDataConfiguration{
                        Identifiers: []string{
                            "vel",
                        },
                        Model: "nostrum",
                        Predicate: &shared.Predicate{
                            And: []shared.Predicate{
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                                shared.Predicate{},
                            },
                            Field: sdk.String("error"),
                            Operand: sdk.String("consequatur"),
                            OperandType: sdk.String("incidunt"),
                            Operator: sdk.String("reiciendis"),
                            Or: []shared.Predicate{
                                shared.Predicate{},
                            },
                        },
                        Sort: []shared.SortProperty{
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumAsc,
                                Field: "architecto",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "labore",
                            },
                            shared.SortProperty{
                                Direction: shared.SortDirectionEnumDesc,
                                Field: "atque",
                            },
                        },
                    },
                },
                ComponentType: sdk.String("laborum"),
                Events: map[string]shared.ComponentEvent{
                    "tenetur": shared.ComponentEvent{
                        Action: sdk.String("laboriosam"),
                        BindingEvent: sdk.String("alias"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("amet"),
                                    Property: "deserunt",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "unde": shared.FormBindingElement{
                                        Element: "reiciendis",
                                        Property: "provident",
                                    },
                                    "repellendus": shared.FormBindingElement{
                                        Element: "delectus",
                                        Property: "voluptates",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("perferendis"),
                                    Property: "est",
                                },
                                ComponentName: sdk.String("quidem"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("facere"),
                                    Operand: sdk.String("fuga"),
                                    OperandType: sdk.String("praesentium"),
                                    Operator: sdk.String("mollitia"),
                                    Property: sdk.String("veniam"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("voluptatem"),
                                Event: sdk.String("quisquam"),
                                ImportedValue: sdk.String("repudiandae"),
                                Model: sdk.String("quasi"),
                                Property: sdk.String("atque"),
                                Type: sdk.String("reprehenderit"),
                                UserAttribute: sdk.String("asperiores"),
                                Value: sdk.String("totam"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "quidem": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("maxime"),
                                        Property: "et",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "amet": shared.FormBindingElement{
                                            Element: "assumenda",
                                            Property: "ea",
                                        },
                                        "atque": shared.FormBindingElement{
                                            Element: "error",
                                            Property: "officiis",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("officiis"),
                                        Property: "accusamus",
                                    },
                                    ComponentName: sdk.String("natus"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("aspernatur"),
                                        Operand: sdk.String("ex"),
                                        OperandType: sdk.String("maiores"),
                                        Operator: sdk.String("corrupti"),
                                        Property: sdk.String("at"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("error"),
                                    Event: sdk.String("blanditiis"),
                                    ImportedValue: sdk.String("suscipit"),
                                    Model: sdk.String("repudiandae"),
                                    Property: sdk.String("atque"),
                                    Type: sdk.String("atque"),
                                    UserAttribute: sdk.String("sunt"),
                                    Value: sdk.String("recusandae"),
                                },
                                "dolorum": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("repellendus"),
                                        Property: "labore",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "doloremque": shared.FormBindingElement{
                                            Element: "repudiandae",
                                            Property: "dicta",
                                        },
                                        "accusantium": shared.FormBindingElement{
                                            Element: "beatae",
                                            Property: "dolores",
                                        },
                                        "enim": shared.FormBindingElement{
                                            Element: "laboriosam",
                                            Property: "velit",
                                        },
                                        "a": shared.FormBindingElement{
                                            Element: "molestias",
                                            Property: "magnam",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("saepe"),
                                        Property: "consequuntur",
                                    },
                                    ComponentName: sdk.String("occaecati"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("perspiciatis"),
                                        Operand: sdk.String("in"),
                                        OperandType: sdk.String("adipisci"),
                                        Operator: sdk.String("eveniet"),
                                        Property: sdk.String("occaecati"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("consequuntur"),
                                    Event: sdk.String("fugit"),
                                    ImportedValue: sdk.String("id"),
                                    Model: sdk.String("quis"),
                                    Property: sdk.String("reprehenderit"),
                                    Type: sdk.String("error"),
                                    UserAttribute: sdk.String("illo"),
                                    Value: sdk.String("corporis"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("quidem"),
                                    Property: "eveniet",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "vero": shared.FormBindingElement{
                                        Element: "doloremque",
                                        Property: "iure",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("ipsa"),
                                    Property: "totam",
                                },
                                ComponentName: sdk.String("quae"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("eveniet"),
                                    Operand: sdk.String("qui"),
                                    OperandType: sdk.String("cum"),
                                    Operator: sdk.String("iure"),
                                    Property: sdk.String("necessitatibus"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("ratione"),
                                Event: sdk.String("laborum"),
                                ImportedValue: sdk.String("distinctio"),
                                Model: sdk.String("voluptatum"),
                                Property: sdk.String("rem"),
                                Type: sdk.String("aliquam"),
                                UserAttribute: sdk.String("ad"),
                                Value: sdk.String("repellat"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("alias"),
                                    Property: "corporis",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "nihil": shared.FormBindingElement{
                                        Element: "mollitia",
                                        Property: "voluptas",
                                    },
                                    "alias": shared.FormBindingElement{
                                        Element: "maiores",
                                        Property: "reiciendis",
                                    },
                                    "dolores": shared.FormBindingElement{
                                        Element: "id",
                                        Property: "minima",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("dolore"),
                                    Property: "dolorum",
                                },
                                ComponentName: sdk.String("nesciunt"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("recusandae"),
                                    Operand: sdk.String("omnis"),
                                    OperandType: sdk.String("quaerat"),
                                    Operator: sdk.String("molestiae"),
                                    Property: sdk.String("ex"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("ut"),
                                Event: sdk.String("culpa"),
                                ImportedValue: sdk.String("adipisci"),
                                Model: sdk.String("debitis"),
                                Property: sdk.String("laudantium"),
                                Type: sdk.String("eum"),
                                UserAttribute: sdk.String("nemo"),
                                Value: sdk.String("recusandae"),
                            },
                            Model: sdk.String("esse"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "provident",
                                Property: "quis",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("eum"),
                                        Property: "reiciendis",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "aspernatur": shared.FormBindingElement{
                                            Element: "ullam",
                                            Property: "quasi",
                                        },
                                        "animi": shared.FormBindingElement{
                                            Element: "nostrum",
                                            Property: "mollitia",
                                        },
                                        "provident": shared.FormBindingElement{
                                            Element: "possimus",
                                            Property: "animi",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("ex"),
                                        Property: "aliquid",
                                    },
                                    ComponentName: sdk.String("accusantium"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("doloribus"),
                                        Operand: sdk.String("ullam"),
                                        OperandType: sdk.String("in"),
                                        Operator: sdk.String("nam"),
                                        Property: sdk.String("earum"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("officia"),
                                    Event: sdk.String("laborum"),
                                    ImportedValue: sdk.String("placeat"),
                                    Model: sdk.String("modi"),
                                    Property: sdk.String("voluptatibus"),
                                    Type: sdk.String("molestias"),
                                    UserAttribute: sdk.String("officiis"),
                                    Value: sdk.String("sapiente"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("cumque"),
                                    Property: "vitae",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "tempora": shared.FormBindingElement{
                                        Element: "quis",
                                        Property: "inventore",
                                    },
                                    "fugit": shared.FormBindingElement{
                                        Element: "cumque",
                                        Property: "quae",
                                    },
                                    "perferendis": shared.FormBindingElement{
                                        Element: "velit",
                                        Property: "aspernatur",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("eum"),
                                    Property: "eius",
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
                                    Field: sdk.String("impedit"),
                                    Operand: sdk.String("eos"),
                                    OperandType: sdk.String("sapiente"),
                                    Operator: sdk.String("eum"),
                                    Property: sdk.String("dicta"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("minima"),
                                Event: sdk.String("beatae"),
                                ImportedValue: sdk.String("cupiditate"),
                                Model: sdk.String("provident"),
                                Property: sdk.String("earum"),
                                Type: sdk.String("soluta"),
                                UserAttribute: sdk.String("hic"),
                                Value: sdk.String("illum"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("eaque"),
                                    Property: "earum",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "maiores": shared.FormBindingElement{
                                        Element: "debitis",
                                        Property: "aliquid",
                                    },
                                    "porro": shared.FormBindingElement{
                                        Element: "suscipit",
                                        Property: "dolorem",
                                    },
                                    "fugit": shared.FormBindingElement{
                                        Element: "cumque",
                                        Property: "fuga",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("ratione"),
                                    Property: "animi",
                                },
                                ComponentName: sdk.String("necessitatibus"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("consequatur"),
                                    Operand: sdk.String("quasi"),
                                    OperandType: sdk.String("et"),
                                    Operator: sdk.String("ducimus"),
                                    Property: sdk.String("natus"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("occaecati"),
                                Event: sdk.String("suscipit"),
                                ImportedValue: sdk.String("adipisci"),
                                Model: sdk.String("quasi"),
                                Property: sdk.String("magni"),
                                Type: sdk.String("doloribus"),
                                UserAttribute: sdk.String("nulla"),
                                Value: sdk.String("necessitatibus"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("ipsa"),
                                    Property: "tempora",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "molestiae": shared.FormBindingElement{
                                        Element: "dicta",
                                        Property: "iusto",
                                    },
                                    "esse": shared.FormBindingElement{
                                        Element: "praesentium",
                                        Property: "maiores",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("reiciendis"),
                                    Property: "vel",
                                },
                                ComponentName: sdk.String("architecto"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("doloremque"),
                                    Operand: sdk.String("dicta"),
                                    OperandType: sdk.String("odio"),
                                    Operator: sdk.String("tempora"),
                                    Property: sdk.String("esse"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("ex"),
                                Event: sdk.String("consectetur"),
                                ImportedValue: sdk.String("aliquid"),
                                Model: sdk.String("ipsa"),
                                Property: sdk.String("laborum"),
                                Type: sdk.String("sunt"),
                                UserAttribute: sdk.String("nostrum"),
                                Value: sdk.String("fugiat"),
                            },
                        },
                    },
                    "expedita": shared.ComponentEvent{
                        Action: sdk.String("aliquid"),
                        BindingEvent: sdk.String("officia"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("suscipit"),
                                    Property: "aliquid",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "eum": shared.FormBindingElement{
                                        Element: "voluptas",
                                        Property: "iste",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("id"),
                                    Property: "ab",
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
                                    Field: sdk.String("voluptates"),
                                    Operand: sdk.String("mollitia"),
                                    OperandType: sdk.String("laborum"),
                                    Operator: sdk.String("libero"),
                                    Property: sdk.String("ad"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("deleniti"),
                                Event: sdk.String("enim"),
                                ImportedValue: sdk.String("vitae"),
                                Model: sdk.String("repellendus"),
                                Property: sdk.String("ex"),
                                Type: sdk.String("quo"),
                                UserAttribute: sdk.String("ex"),
                                Value: sdk.String("ut"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "expedita": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("voluptatem"),
                                        Property: "molestias",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "aliquid": shared.FormBindingElement{
                                            Element: "beatae",
                                            Property: "voluptatum",
                                        },
                                        "omnis": shared.FormBindingElement{
                                            Element: "veritatis",
                                            Property: "rerum",
                                        },
                                        "est": shared.FormBindingElement{
                                            Element: "culpa",
                                            Property: "voluptatem",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("sapiente"),
                                        Property: "officiis",
                                    },
                                    ComponentName: sdk.String("architecto"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("pariatur"),
                                        Operand: sdk.String("debitis"),
                                        OperandType: sdk.String("voluptatem"),
                                        Operator: sdk.String("alias"),
                                        Property: sdk.String("deleniti"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("earum"),
                                    Event: sdk.String("ex"),
                                    ImportedValue: sdk.String("sapiente"),
                                    Model: sdk.String("rem"),
                                    Property: sdk.String("minus"),
                                    Type: sdk.String("nemo"),
                                    UserAttribute: sdk.String("asperiores"),
                                    Value: sdk.String("ratione"),
                                },
                                "ullam": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("perferendis"),
                                        Property: "illum",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "impedit": shared.FormBindingElement{
                                            Element: "quibusdam",
                                            Property: "nam",
                                        },
                                        "ipsam": shared.FormBindingElement{
                                            Element: "culpa",
                                            Property: "dolor",
                                        },
                                        "aliquam": shared.FormBindingElement{
                                            Element: "inventore",
                                            Property: "deleniti",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("veritatis"),
                                        Property: "tempora",
                                    },
                                    ComponentName: sdk.String("dolor"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("architecto"),
                                        Operand: sdk.String("sit"),
                                        OperandType: sdk.String("modi"),
                                        Operator: sdk.String("fugit"),
                                        Property: sdk.String("ab"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("laudantium"),
                                    Event: sdk.String("quae"),
                                    ImportedValue: sdk.String("dolor"),
                                    Model: sdk.String("fugiat"),
                                    Property: sdk.String("ipsam"),
                                    Type: sdk.String("consequuntur"),
                                    UserAttribute: sdk.String("ipsa"),
                                    Value: sdk.String("quas"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("eveniet"),
                                    Property: "impedit",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "esse": shared.FormBindingElement{
                                        Element: "necessitatibus",
                                        Property: "sed",
                                    },
                                    "veniam": shared.FormBindingElement{
                                        Element: "nesciunt",
                                        Property: "expedita",
                                    },
                                    "eum": shared.FormBindingElement{
                                        Element: "vel",
                                        Property: "voluptatum",
                                    },
                                    "magnam": shared.FormBindingElement{
                                        Element: "exercitationem",
                                        Property: "ab",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("porro"),
                                    Property: "autem",
                                },
                                ComponentName: sdk.String("nobis"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("recusandae"),
                                    Operand: sdk.String("consequuntur"),
                                    OperandType: sdk.String("voluptatem"),
                                    Operator: sdk.String("exercitationem"),
                                    Property: sdk.String("necessitatibus"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("quasi"),
                                Event: sdk.String("nisi"),
                                ImportedValue: sdk.String("at"),
                                Model: sdk.String("vero"),
                                Property: sdk.String("est"),
                                Type: sdk.String("harum"),
                                UserAttribute: sdk.String("sequi"),
                                Value: sdk.String("doloribus"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("repudiandae"),
                                    Property: "optio",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "nemo": shared.FormBindingElement{
                                        Element: "voluptate",
                                        Property: "blanditiis",
                                    },
                                    "officia": shared.FormBindingElement{
                                        Element: "voluptas",
                                        Property: "numquam",
                                    },
                                    "nemo": shared.FormBindingElement{
                                        Element: "quos",
                                        Property: "eius",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("aspernatur"),
                                    Property: "ducimus",
                                },
                                ComponentName: sdk.String("nesciunt"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("laudantium"),
                                    Operand: sdk.String("incidunt"),
                                    OperandType: sdk.String("quasi"),
                                    Operator: sdk.String("rem"),
                                    Property: sdk.String("fugiat"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("dicta"),
                                Event: sdk.String("nisi"),
                                ImportedValue: sdk.String("consequuntur"),
                                Model: sdk.String("consectetur"),
                                Property: sdk.String("aperiam"),
                                Type: sdk.String("cupiditate"),
                                UserAttribute: sdk.String("reiciendis"),
                                Value: sdk.String("soluta"),
                            },
                            Model: sdk.String("alias"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "omnis",
                                Property: "eos",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("occaecati"),
                                        Property: "iste",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "inventore": shared.FormBindingElement{
                                            Element: "fuga",
                                            Property: "accusamus",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("voluptatibus"),
                                        Property: "distinctio",
                                    },
                                    ComponentName: sdk.String("omnis"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("minima"),
                                        Operand: sdk.String("praesentium"),
                                        OperandType: sdk.String("maxime"),
                                        Operator: sdk.String("magnam"),
                                        Property: sdk.String("temporibus"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("quos"),
                                    Event: sdk.String("commodi"),
                                    ImportedValue: sdk.String("itaque"),
                                    Model: sdk.String("commodi"),
                                    Property: sdk.String("totam"),
                                    Type: sdk.String("earum"),
                                    UserAttribute: sdk.String("modi"),
                                    Value: sdk.String("nam"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("vero"),
                                    Property: "voluptatem",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "vel": shared.FormBindingElement{
                                        Element: "alias",
                                        Property: "quasi",
                                    },
                                    "non": shared.FormBindingElement{
                                        Element: "maiores",
                                        Property: "enim",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("sint"),
                                    Property: "nulla",
                                },
                                ComponentName: sdk.String("deserunt"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("nemo"),
                                    Operand: sdk.String("reprehenderit"),
                                    OperandType: sdk.String("est"),
                                    Operator: sdk.String("quis"),
                                    Property: sdk.String("sint"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("accusamus"),
                                Event: sdk.String("impedit"),
                                ImportedValue: sdk.String("hic"),
                                Model: sdk.String("necessitatibus"),
                                Property: sdk.String("asperiores"),
                                Type: sdk.String("ex"),
                                UserAttribute: sdk.String("voluptas"),
                                Value: sdk.String("debitis"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("delectus"),
                                    Property: "quae",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "fuga": shared.FormBindingElement{
                                        Element: "laborum",
                                        Property: "consectetur",
                                    },
                                    "velit": shared.FormBindingElement{
                                        Element: "atque",
                                        Property: "ipsum",
                                    },
                                    "impedit": shared.FormBindingElement{
                                        Element: "magni",
                                        Property: "soluta",
                                    },
                                    "repudiandae": shared.FormBindingElement{
                                        Element: "nam",
                                        Property: "dolore",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("iusto"),
                                    Property: "voluptate",
                                },
                                ComponentName: sdk.String("sequi"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("neque"),
                                    Operand: sdk.String("quo"),
                                    OperandType: sdk.String("deleniti"),
                                    Operator: sdk.String("quibusdam"),
                                    Property: sdk.String("iure"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("odit"),
                                Event: sdk.String("voluptatibus"),
                                ImportedValue: sdk.String("vel"),
                                Model: sdk.String("magnam"),
                                Property: sdk.String("quibusdam"),
                                Type: sdk.String("inventore"),
                                UserAttribute: sdk.String("facere"),
                                Value: sdk.String("libero"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("architecto"),
                                    Property: "voluptatibus",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "porro": shared.FormBindingElement{
                                        Element: "aliquam",
                                        Property: "velit",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("illo"),
                                    Property: "accusantium",
                                },
                                ComponentName: sdk.String("vel"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("beatae"),
                                    Operand: sdk.String("vero"),
                                    OperandType: sdk.String("excepturi"),
                                    Operator: sdk.String("eum"),
                                    Property: sdk.String("velit"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("ut"),
                                Event: sdk.String("perspiciatis"),
                                ImportedValue: sdk.String("earum"),
                                Model: sdk.String("dicta"),
                                Property: sdk.String("impedit"),
                                Type: sdk.String("voluptatibus"),
                                UserAttribute: sdk.String("iste"),
                                Value: sdk.String("itaque"),
                            },
                        },
                    },
                    "alias": shared.ComponentEvent{
                        Action: sdk.String("nisi"),
                        BindingEvent: sdk.String("itaque"),
                        Parameters: &shared.ActionParameters{
                            Anchor: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("velit"),
                                    Property: "laborum",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "dolor": shared.FormBindingElement{
                                        Element: "iusto",
                                        Property: "sit",
                                    },
                                    "doloremque": shared.FormBindingElement{
                                        Element: "consequatur",
                                        Property: "officia",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("recusandae"),
                                    Property: "ea",
                                },
                                ComponentName: sdk.String("quidem"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("facilis"),
                                    Operand: sdk.String("placeat"),
                                    OperandType: sdk.String("perspiciatis"),
                                    Operator: sdk.String("expedita"),
                                    Property: sdk.String("deleniti"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("a"),
                                Event: sdk.String("voluptate"),
                                ImportedValue: sdk.String("ullam"),
                                Model: sdk.String("unde"),
                                Property: sdk.String("necessitatibus"),
                                Type: sdk.String("animi"),
                                UserAttribute: sdk.String("impedit"),
                                Value: sdk.String("ipsam"),
                            },
                            Fields: map[string]shared.ComponentProperty{
                                "est": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("error"),
                                        Property: "esse",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "veritatis": shared.FormBindingElement{
                                            Element: "vero",
                                            Property: "consectetur",
                                        },
                                        "vitae": shared.FormBindingElement{
                                            Element: "inventore",
                                            Property: "dolorem",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("ad"),
                                        Property: "qui",
                                    },
                                    ComponentName: sdk.String("iste"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("nemo"),
                                        Operand: sdk.String("soluta"),
                                        OperandType: sdk.String("libero"),
                                        Operator: sdk.String("rem"),
                                        Property: sdk.String("dolorum"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("odio"),
                                    Event: sdk.String("fugit"),
                                    ImportedValue: sdk.String("alias"),
                                    Model: sdk.String("magni"),
                                    Property: sdk.String("vel"),
                                    Type: sdk.String("quae"),
                                    UserAttribute: sdk.String("quae"),
                                    Value: sdk.String("modi"),
                                },
                                "neque": shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("exercitationem"),
                                        Property: "itaque",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "ipsum": shared.FormBindingElement{
                                            Element: "unde",
                                            Property: "nulla",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("distinctio"),
                                        Property: "maxime",
                                    },
                                    ComponentName: sdk.String("quia"),
                                    Concat: []shared.ComponentProperty{
                                        shared.ComponentProperty{},
                                    },
                                    Condition: &shared.ComponentConditionProperty{
                                        Else: &shared.ComponentProperty{},
                                        Field: sdk.String("nostrum"),
                                        Operand: sdk.String("omnis"),
                                        OperandType: sdk.String("libero"),
                                        Operator: sdk.String("dicta"),
                                        Property: sdk.String("id"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("libero"),
                                    Event: sdk.String("fugiat"),
                                    ImportedValue: sdk.String("officia"),
                                    Model: sdk.String("quos"),
                                    Property: sdk.String("placeat"),
                                    Type: sdk.String("sit"),
                                    UserAttribute: sdk.String("iusto"),
                                    Value: sdk.String("ipsa"),
                                },
                            },
                            Global: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("voluptates"),
                                    Property: "inventore",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "totam": shared.FormBindingElement{
                                        Element: "dolore",
                                        Property: "eligendi",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("distinctio"),
                                    Property: "voluptatem",
                                },
                                ComponentName: sdk.String("autem"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("dolores"),
                                    Operand: sdk.String("assumenda"),
                                    OperandType: sdk.String("beatae"),
                                    Operator: sdk.String("est"),
                                    Property: sdk.String("facere"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("corrupti"),
                                Event: sdk.String("molestiae"),
                                ImportedValue: sdk.String("provident"),
                                Model: sdk.String("accusamus"),
                                Property: sdk.String("necessitatibus"),
                                Type: sdk.String("tempore"),
                                UserAttribute: sdk.String("sint"),
                                Value: sdk.String("ea"),
                            },
                            ID: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("autem"),
                                    Property: "ipsam",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "laudantium": shared.FormBindingElement{
                                        Element: "corporis",
                                        Property: "officiis",
                                    },
                                    "voluptatibus": shared.FormBindingElement{
                                        Element: "cum",
                                        Property: "at",
                                    },
                                    "alias": shared.FormBindingElement{
                                        Element: "quia",
                                        Property: "quidem",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("fuga"),
                                    Property: "repudiandae",
                                },
                                ComponentName: sdk.String("accusantium"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("officiis"),
                                    Operand: sdk.String("eos"),
                                    OperandType: sdk.String("quibusdam"),
                                    Operator: sdk.String("odio"),
                                    Property: sdk.String("praesentium"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("odit"),
                                Event: sdk.String("explicabo"),
                                ImportedValue: sdk.String("corporis"),
                                Model: sdk.String("error"),
                                Property: sdk.String("earum"),
                                Type: sdk.String("adipisci"),
                                UserAttribute: sdk.String("recusandae"),
                                Value: sdk.String("similique"),
                            },
                            Model: sdk.String("ut"),
                            State: &shared.MutationActionSetStateParameter{
                                ComponentName: "quidem",
                                Property: "quis",
                                Set: shared.ComponentProperty{
                                    BindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("beatae"),
                                        Property: "unde",
                                    },
                                    Bindings: map[string]shared.FormBindingElement{
                                        "delectus": shared.FormBindingElement{
                                            Element: "cupiditate",
                                            Property: "fugit",
                                        },
                                        "numquam": shared.FormBindingElement{
                                            Element: "numquam",
                                            Property: "nesciunt",
                                        },
                                    },
                                    CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                        Field: sdk.String("at"),
                                        Property: "officia",
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
                                        Field: sdk.String("necessitatibus"),
                                        Operand: sdk.String("corporis"),
                                        OperandType: sdk.String("qui"),
                                        Operator: sdk.String("expedita"),
                                        Property: sdk.String("voluptatum"),
                                        Then: &shared.ComponentProperty{},
                                    },
                                    Configured: sdk.Bool(false),
                                    DefaultValue: sdk.String("cupiditate"),
                                    Event: sdk.String("minima"),
                                    ImportedValue: sdk.String("placeat"),
                                    Model: sdk.String("enim"),
                                    Property: sdk.String("neque"),
                                    Type: sdk.String("in"),
                                    UserAttribute: sdk.String("minus"),
                                    Value: sdk.String("eum"),
                                },
                            },
                            Target: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("modi"),
                                    Property: "corporis",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "voluptates": shared.FormBindingElement{
                                        Element: "maiores",
                                        Property: "tempore",
                                    },
                                    "aperiam": shared.FormBindingElement{
                                        Element: "libero",
                                        Property: "ratione",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("labore"),
                                    Property: "totam",
                                },
                                ComponentName: sdk.String("occaecati"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("quo"),
                                    Operand: sdk.String("velit"),
                                    OperandType: sdk.String("minus"),
                                    Operator: sdk.String("fuga"),
                                    Property: sdk.String("nostrum"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("est"),
                                Event: sdk.String("impedit"),
                                ImportedValue: sdk.String("delectus"),
                                Model: sdk.String("tempore"),
                                Property: sdk.String("vero"),
                                Type: sdk.String("odit"),
                                UserAttribute: sdk.String("repellat"),
                                Value: sdk.String("pariatur"),
                            },
                            Type: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("nemo"),
                                    Property: "reprehenderit",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "odio": shared.FormBindingElement{
                                        Element: "minima",
                                        Property: "in",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("ducimus"),
                                    Property: "excepturi",
                                },
                                ComponentName: sdk.String("dolores"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("veritatis"),
                                    Operand: sdk.String("ducimus"),
                                    OperandType: sdk.String("voluptate"),
                                    Operator: sdk.String("pariatur"),
                                    Property: sdk.String("itaque"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("similique"),
                                Event: sdk.String("optio"),
                                ImportedValue: sdk.String("ex"),
                                Model: sdk.String("quaerat"),
                                Property: sdk.String("commodi"),
                                Type: sdk.String("officiis"),
                                UserAttribute: sdk.String("placeat"),
                                Value: sdk.String("quidem"),
                            },
                            URL: &shared.ComponentProperty{
                                BindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("exercitationem"),
                                    Property: "quam",
                                },
                                Bindings: map[string]shared.FormBindingElement{
                                    "modi": shared.FormBindingElement{
                                        Element: "ipsa",
                                        Property: "sint",
                                    },
                                },
                                CollectionBindingProperties: &shared.ComponentPropertyBindingProperties{
                                    Field: sdk.String("vero"),
                                    Property: "sequi",
                                },
                                ComponentName: sdk.String("repudiandae"),
                                Concat: []shared.ComponentProperty{
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                    shared.ComponentProperty{},
                                },
                                Condition: &shared.ComponentConditionProperty{
                                    Else: &shared.ComponentProperty{},
                                    Field: sdk.String("dicta"),
                                    Operand: sdk.String("earum"),
                                    OperandType: sdk.String("veniam"),
                                    Operator: sdk.String("animi"),
                                    Property: sdk.String("dolores"),
                                    Then: &shared.ComponentProperty{},
                                },
                                Configured: sdk.Bool(false),
                                DefaultValue: sdk.String("nam"),
                                Event: sdk.String("dicta"),
                                ImportedValue: sdk.String("consequuntur"),
                                Model: sdk.String("necessitatibus"),
                                Property: sdk.String("nobis"),
                                Type: sdk.String("ipsa"),
                                UserAttribute: sdk.String("ducimus"),
                                Value: sdk.String("maiores"),
                            },
                        },
                    },
                },
                Name: sdk.String("Joyce Howe"),
                Overrides: map[string]map[string]string{
                    "occaecati": map[string]string{
                        "aliquam": "nostrum",
                        "doloribus": "eligendi",
                    },
                    "sint": map[string]string{
                        "hic": "animi",
                        "quas": "totam",
                    },
                    "molestias": map[string]string{
                        "eaque": "saepe",
                        "architecto": "quos",
                    },
                },
                Properties: sdk.String("iste"),
                SchemaVersion: sdk.String("assumenda"),
                SourceID: sdk.String("tempore"),
                Tags: map[string]string{
                    "velit": "doloremque",
                    "delectus": "impedit",
                    "cum": "ipsum",
                },
                Variants: []shared.ComponentVariant{
                    shared.ComponentVariant{
                        Overrides: map[string]map[string]string{
                            "deserunt": map[string]string{
                                "quis": "veniam",
                            },
                            "libero": map[string]string{
                                "cupiditate": "molestiae",
                            },
                            "eligendi": map[string]string{
                                "non": "magnam",
                                "itaque": "sed",
                                "asperiores": "veniam",
                                "consequuntur": "facere",
                            },
                            "laudantium": map[string]string{
                                "pariatur": "amet",
                            },
                        },
                        VariantValues: map[string]string{
                            "ab": "velit",
                            "facilis": "tempore",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("quis"),
        AppID: "nisi",
        ClientToken: sdk.String("libero"),
        EnvironmentName: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComponentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateComponent](docs/sdk/README.md#createcomponent) - Creates a new component for an Amplify app.
* [CreateForm](docs/sdk/README.md#createform) - Creates a new form for an Amplify app.
* [CreateTheme](docs/sdk/README.md#createtheme) - Creates a theme to apply to the components in an Amplify app.
* [DeleteComponent](docs/sdk/README.md#deletecomponent) - Deletes a component from an Amplify app.
* [DeleteForm](docs/sdk/README.md#deleteform) - Deletes a form from an Amplify app.
* [DeleteTheme](docs/sdk/README.md#deletetheme) - Deletes a theme from an Amplify app.
* [ExchangeCodeForToken](docs/sdk/README.md#exchangecodefortoken) - Exchanges an access code for a token.
* [ExportComponents](docs/sdk/README.md#exportcomponents) - Exports component configurations to code that is ready to integrate into an Amplify app.
* [ExportForms](docs/sdk/README.md#exportforms) - Exports form configurations to code that is ready to integrate into an Amplify app.
* [ExportThemes](docs/sdk/README.md#exportthemes) - Exports theme configurations to code that is ready to integrate into an Amplify app.
* [GetComponent](docs/sdk/README.md#getcomponent) - Returns an existing component for an Amplify app.
* [GetForm](docs/sdk/README.md#getform) - Returns an existing form for an Amplify app.
* [GetMetadata](docs/sdk/README.md#getmetadata) - Returns existing metadata for an Amplify app.
* [GetTheme](docs/sdk/README.md#gettheme) - Returns an existing theme for an Amplify app.
* [ListComponents](docs/sdk/README.md#listcomponents) - Retrieves a list of components for a specified Amplify app and backend environment.
* [ListForms](docs/sdk/README.md#listforms) - Retrieves a list of forms for a specified Amplify app and backend environment.
* [ListThemes](docs/sdk/README.md#listthemes) - Retrieves a list of themes for a specified Amplify app and backend environment.
* [PutMetadataFlag](docs/sdk/README.md#putmetadataflag) - Stores the metadata information about a feature on a form.
* [RefreshToken](docs/sdk/README.md#refreshtoken) - Refreshes a previously issued access token that might have expired.
* [UpdateComponent](docs/sdk/README.md#updatecomponent) - Updates an existing component.
* [UpdateForm](docs/sdk/README.md#updateform) - Updates an existing form.
* [UpdateTheme](docs/sdk/README.md#updatetheme) - Updates an existing theme.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
