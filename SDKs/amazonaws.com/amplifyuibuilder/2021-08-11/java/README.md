# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComponentRequest;
import org.openapis.openapi.models.operations.CreateComponentRequestBody;
import org.openapis.openapi.models.operations.CreateComponentRequestBodyComponentToCreate;
import org.openapis.openapi.models.operations.CreateComponentResponse;
import org.openapis.openapi.models.shared.ActionParameters;
import org.openapis.openapi.models.shared.ComponentBindingPropertiesValue;
import org.openapis.openapi.models.shared.ComponentBindingPropertiesValueProperties;
import org.openapis.openapi.models.shared.ComponentChild;
import org.openapis.openapi.models.shared.ComponentConditionProperty;
import org.openapis.openapi.models.shared.ComponentDataConfiguration;
import org.openapis.openapi.models.shared.ComponentEvent;
import org.openapis.openapi.models.shared.ComponentProperty;
import org.openapis.openapi.models.shared.ComponentPropertyBindingProperties;
import org.openapis.openapi.models.shared.ComponentVariant;
import org.openapis.openapi.models.shared.FormBindingElement;
import org.openapis.openapi.models.shared.MutationActionSetStateParameter;
import org.openapis.openapi.models.shared.Predicate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;
import org.openapis.openapi.models.shared.SortProperty;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComponentRequest req = new CreateComponentRequest(                new CreateComponentRequestBody(                new CreateComponentRequestBodyComponentToCreate() {{
                                                bindingProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentBindingPropertiesValue>() {{
                                                    put("distinctio", new ComponentBindingPropertiesValue() {{
                                                        bindingProperties = new ComponentBindingPropertiesValueProperties() {{
                                                            bucket = "quibusdam";
                                                            defaultValue = "unde";
                                                            field = "nulla";
                                                            key = "corrupti";
                                                            model = "illum";
                                                            predicates = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{
                                                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                    field = "deserunt";
                                                                    operand = "suscipit";
                                                                    operandType = "iure";
                                                                    operator = "magnam";
                                                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                }}),
                                                                add(new Predicate() {{
                                                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                    field = "delectus";
                                                                    operand = "tempora";
                                                                    operandType = "suscipit";
                                                                    operator = "molestiae";
                                                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            slotName = "placeat";
                                                            userAttribute = "voluptatum";
                                                        }};
                                                        defaultValue = "iusto";
                                                        type = "excepturi";
                                                    }});
                                                    put("nisi", new ComponentBindingPropertiesValue() {{
                                                        bindingProperties = new ComponentBindingPropertiesValueProperties() {{
                                                            bucket = "recusandae";
                                                            defaultValue = "temporibus";
                                                            field = "ab";
                                                            key = "quis";
                                                            model = "veritatis";
                                                            predicates = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{
                                                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                    field = "ipsam";
                                                                    operand = "repellendus";
                                                                    operandType = "sapiente";
                                                                    operator = "quo";
                                                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                }}),
                                                                add(new Predicate() {{
                                                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                    field = "at";
                                                                    operand = "maiores";
                                                                    operandType = "molestiae";
                                                                    operator = "quod";
                                                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                }}),
                                                                add(new Predicate() {{
                                                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                    field = "totam";
                                                                    operand = "porro";
                                                                    operandType = "dolorum";
                                                                    operator = "dicta";
                                                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            slotName = "officia";
                                                            userAttribute = "occaecati";
                                                        }};
                                                        defaultValue = "fugit";
                                                        type = "deleniti";
                                                    }});
                                                    put("hic", new ComponentBindingPropertiesValue() {{
                                                        bindingProperties = new ComponentBindingPropertiesValueProperties() {{
                                                            bucket = "optio";
                                                            defaultValue = "totam";
                                                            field = "beatae";
                                                            key = "commodi";
                                                            model = "molestiae";
                                                            predicates = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{
                                                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                    field = "impedit";
                                                                    operand = "cum";
                                                                    operandType = "esse";
                                                                    operator = "ipsum";
                                                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                }}),
                                                                add(new Predicate() {{
                                                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                    field = "perferendis";
                                                                    operand = "ad";
                                                                    operandType = "natus";
                                                                    operator = "sed";
                                                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                        add(new Predicate() {{}}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            slotName = "dolor";
                                                            userAttribute = "natus";
                                                        }};
                                                        defaultValue = "laboriosam";
                                                        type = "hic";
                                                    }});
                                                }};
                                                children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                                    add(new ComponentChild("accusantium", "rem", "aut") {{
                                                        children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                                            add(new ComponentChild() {{}}),
                                                            add(new ComponentChild() {{}}),
                                                            add(new ComponentChild() {{}}),
                                                        }};
                                                        componentType = "in";
                                                        events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                                            put("iste", new ComponentEvent() {{
                                                                action = "iure";
                                                                bindingEvent = "saepe";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("ipsa") {{
                                                                            field = "quidem";
                                                                            property = "architecto";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("est", new FormBindingElement("dolores", "dolorem") {{
                                                                                element = "mollitia";
                                                                                property = "laborum";
                                                                            }});
                                                                            put("corporis", new FormBindingElement("enim", "omnis") {{
                                                                                element = "explicabo";
                                                                                property = "nobis";
                                                                            }});
                                                                            put("nemo", new FormBindingElement("accusantium", "iure") {{
                                                                                element = "minima";
                                                                                property = "excepturi";
                                                                            }});
                                                                            put("culpa", new FormBindingElement("architecto", "mollitia") {{
                                                                                element = "doloribus";
                                                                                property = "sapiente";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("consequuntur") {{
                                                                            field = "dolorem";
                                                                            property = "culpa";
                                                                        }};
                                                                        componentName = "repellat";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "occaecati";
                                                                            operand = "numquam";
                                                                            operandType = "commodi";
                                                                            operator = "quam";
                                                                            property = "molestiae";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "velit";
                                                                        event = "error";
                                                                        importedValue = "quia";
                                                                        model = "quis";
                                                                        property = "vitae";
                                                                        type = "laborum";
                                                                        userAttribute = "animi";
                                                                        value = "enim";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("quo", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("ipsam") {{
                                                                                field = "sequi";
                                                                                property = "tenetur";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("possimus", new FormBindingElement("error", "temporibus") {{
                                                                                    element = "aut";
                                                                                    property = "quasi";
                                                                                }});
                                                                                put("laborum", new FormBindingElement("voluptatibus", "vero") {{
                                                                                    element = "quasi";
                                                                                    property = "reiciendis";
                                                                                }});
                                                                                put("nihil", new FormBindingElement("ipsa", "omnis") {{
                                                                                    element = "praesentium";
                                                                                    property = "voluptatibus";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("perferendis") {{
                                                                                field = "voluptate";
                                                                                property = "cum";
                                                                            }};
                                                                            componentName = "doloremque";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "ut";
                                                                                operand = "maiores";
                                                                                operandType = "dicta";
                                                                                operator = "corporis";
                                                                                property = "dolore";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "iusto";
                                                                            event = "dicta";
                                                                            importedValue = "harum";
                                                                            model = "enim";
                                                                            property = "accusamus";
                                                                            type = "commodi";
                                                                            userAttribute = "repudiandae";
                                                                            value = "quae";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("molestias") {{
                                                                            field = "ipsum";
                                                                            property = "quidem";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("pariatur", new FormBindingElement("rem", "voluptates") {{
                                                                                element = "modi";
                                                                                property = "praesentium";
                                                                            }});
                                                                            put("quasi", new FormBindingElement("veritatis", "itaque") {{
                                                                                element = "repudiandae";
                                                                                property = "sint";
                                                                            }});
                                                                            put("incidunt", new FormBindingElement("est", "quibusdam") {{
                                                                                element = "enim";
                                                                                property = "consequatur";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("distinctio") {{
                                                                            field = "explicabo";
                                                                            property = "deserunt";
                                                                        }};
                                                                        componentName = "quibusdam";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "modi";
                                                                            operand = "qui";
                                                                            operandType = "aliquid";
                                                                            operator = "cupiditate";
                                                                            property = "quos";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "perferendis";
                                                                        event = "magni";
                                                                        importedValue = "assumenda";
                                                                        model = "ipsam";
                                                                        property = "alias";
                                                                        type = "fugit";
                                                                        userAttribute = "dolorum";
                                                                        value = "excepturi";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("tempore") {{
                                                                            field = "tempora";
                                                                            property = "facilis";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("delectus", new FormBindingElement("eligendi", "sint") {{
                                                                                element = "eum";
                                                                                property = "non";
                                                                            }});
                                                                            put("aliquid", new FormBindingElement("sint", "officia") {{
                                                                                element = "provident";
                                                                                property = "necessitatibus";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("a") {{
                                                                            field = "dolor";
                                                                            property = "debitis";
                                                                        }};
                                                                        componentName = "dolorum";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "in";
                                                                            operand = "illum";
                                                                            operandType = "maiores";
                                                                            operator = "rerum";
                                                                            property = "dicta";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "magnam";
                                                                        event = "cumque";
                                                                        importedValue = "facere";
                                                                        model = "ea";
                                                                        property = "aliquid";
                                                                        type = "laborum";
                                                                        userAttribute = "accusamus";
                                                                        value = "non";
                                                                    }};
                                                                    model = "occaecati";
                                                                    state = new MutationActionSetStateParameter("mollitia", "reiciendis",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("mollitia") {{
                                                                                            field = "ad";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("dolor", new FormBindingElement("nemo", "quasi") {{
                                                                                                element = "necessitatibus";
                                                                                                property = "odit";
                                                                                            }});
                                                                                            put("iure", new FormBindingElement("eius", "maxime") {{
                                                                                                element = "doloribus";
                                                                                                property = "debitis";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("deleniti") {{
                                                                                            field = "facilis";
                                                                                        }};;
                                                                                        componentName = "in";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "architecto";
                                                                                            operand = "repudiandae";
                                                                                            operandType = "ullam";
                                                                                            operator = "expedita";
                                                                                            property = "nihil";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "repellat";
                                                                                        event = "quibusdam";
                                                                                        importedValue = "sed";
                                                                                        model = "saepe";
                                                                                        property = "pariatur";
                                                                                        type = "accusantium";
                                                                                        userAttribute = "consequuntur";
                                                                                        value = "praesentium";
                                                                                    }};) {{
                                                                        componentName = "enim";
                                                                        property = "accusamus";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("provident") {{
                                                                                field = "delectus";
                                                                                property = "quidem";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("id", new FormBindingElement("sapiente", "amet") {{
                                                                                    element = "blanditiis";
                                                                                    property = "deleniti";
                                                                                }});
                                                                                put("deserunt", new FormBindingElement("natus", "omnis") {{
                                                                                    element = "nisi";
                                                                                    property = "vel";
                                                                                }});
                                                                                put("molestiae", new FormBindingElement("magnam", "distinctio") {{
                                                                                    element = "perferendis";
                                                                                    property = "nihil";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("labore") {{
                                                                                field = "id";
                                                                                property = "labore";
                                                                            }};
                                                                            componentName = "suscipit";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "nobis";
                                                                                operand = "eum";
                                                                                operandType = "vero";
                                                                                operator = "aspernatur";
                                                                                property = "architecto";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "magnam";
                                                                            event = "et";
                                                                            importedValue = "excepturi";
                                                                            model = "ullam";
                                                                            property = "provident";
                                                                            type = "quos";
                                                                            userAttribute = "sint";
                                                                            value = "accusantium";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("sunt") {{
                                                                            field = "natus";
                                                                            property = "magni";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("illum", new FormBindingElement("ea", "excepturi") {{
                                                                                element = "pariatur";
                                                                                property = "maxime";
                                                                            }});
                                                                            put("odit", new FormBindingElement("ab", "maiores") {{
                                                                                element = "ea";
                                                                                property = "accusantium";
                                                                            }});
                                                                            put("quidem", new FormBindingElement("autem", "nam") {{
                                                                                element = "ipsam";
                                                                                property = "voluptate";
                                                                            }});
                                                                            put("eaque", new FormBindingElement("voluptatibus", "perferendis") {{
                                                                                element = "pariatur";
                                                                                property = "nemo";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("aut") {{
                                                                            field = "fugiat";
                                                                            property = "amet";
                                                                        }};
                                                                        componentName = "cumque";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "hic";
                                                                            operand = "libero";
                                                                            operandType = "nobis";
                                                                            operator = "dolores";
                                                                            property = "quis";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "totam";
                                                                        event = "dignissimos";
                                                                        importedValue = "eaque";
                                                                        model = "quis";
                                                                        property = "nesciunt";
                                                                        type = "eos";
                                                                        userAttribute = "perferendis";
                                                                        value = "dolores";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("dolor") {{
                                                                            field = "minus";
                                                                            property = "quam";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("nostrum", new FormBindingElement("omnis", "facilis") {{
                                                                                element = "hic";
                                                                                property = "recusandae";
                                                                            }});
                                                                            put("perspiciatis", new FormBindingElement("consequuntur", "blanditiis") {{
                                                                                element = "voluptatem";
                                                                                property = "porro";
                                                                            }});
                                                                            put("error", new FormBindingElement("rerum", "adipisci") {{
                                                                                element = "eaque";
                                                                                property = "occaecati";
                                                                            }});
                                                                            put("asperiores", new FormBindingElement("iste", "dolorum") {{
                                                                                element = "earum";
                                                                                property = "modi";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("provident") {{
                                                                            field = "deleniti";
                                                                            property = "pariatur";
                                                                        }};
                                                                        componentName = "nobis";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "delectus";
                                                                            operand = "quaerat";
                                                                            operandType = "quos";
                                                                            operator = "aliquid";
                                                                            property = "dolorem";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "dolorem";
                                                                        event = "dolor";
                                                                        importedValue = "qui";
                                                                        model = "ipsum";
                                                                        property = "hic";
                                                                        type = "excepturi";
                                                                        userAttribute = "cum";
                                                                        value = "voluptate";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("amet") {{
                                                                            field = "dignissimos";
                                                                            property = "reiciendis";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("numquam", new FormBindingElement("ipsa", "iure") {{
                                                                                element = "veritatis";
                                                                                property = "ipsa";
                                                                            }});
                                                                            put("odio", new FormBindingElement("quidem", "voluptatibus") {{
                                                                                element = "quaerat";
                                                                                property = "accusamus";
                                                                            }});
                                                                            put("voluptas", new FormBindingElement("atque", "sit") {{
                                                                                element = "natus";
                                                                                property = "eos";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("soluta") {{
                                                                            field = "fugiat";
                                                                            property = "ab";
                                                                        }};
                                                                        componentName = "dolorum";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "voluptate";
                                                                            operand = "dolorum";
                                                                            operandType = "deleniti";
                                                                            operator = "omnis";
                                                                            property = "necessitatibus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "distinctio";
                                                                        event = "asperiores";
                                                                        importedValue = "nihil";
                                                                        model = "ipsum";
                                                                        property = "voluptate";
                                                                        type = "id";
                                                                        userAttribute = "saepe";
                                                                        value = "eius";
                                                                    }};
                                                                }};
                                                            }});
                                                            put("aspernatur", new ComponentEvent() {{
                                                                action = "perferendis";
                                                                bindingEvent = "amet";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("ad") {{
                                                                            field = "optio";
                                                                            property = "accusamus";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("suscipit", new FormBindingElement("minima", "repellendus") {{
                                                                                element = "deserunt";
                                                                                property = "provident";
                                                                            }});
                                                                            put("totam", new FormBindingElement("at", "quaerat") {{
                                                                                element = "similique";
                                                                                property = "alias";
                                                                            }});
                                                                            put("tempora", new FormBindingElement("officiis", "qui") {{
                                                                                element = "vel";
                                                                                property = "quod";
                                                                            }});
                                                                            put("dolorum", new FormBindingElement("harum", "iusto") {{
                                                                                element = "a";
                                                                                property = "esse";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("tenetur") {{
                                                                            field = "ipsum";
                                                                            property = "quisquam";
                                                                        }};
                                                                        componentName = "amet";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "accusamus";
                                                                            operand = "numquam";
                                                                            operandType = "enim";
                                                                            operator = "dolorem";
                                                                            property = "sapiente";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "totam";
                                                                        event = "nihil";
                                                                        importedValue = "sit";
                                                                        model = "expedita";
                                                                        property = "neque";
                                                                        type = "sed";
                                                                        userAttribute = "vel";
                                                                        value = "libero";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("deserunt", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("incidunt") {{
                                                                                field = "quam";
                                                                                property = "ipsum";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("cupiditate", new FormBindingElement("soluta", "dicta") {{
                                                                                    element = "maxime";
                                                                                    property = "pariatur";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("incidunt") {{
                                                                                field = "laborum";
                                                                                property = "totam";
                                                                            }};
                                                                            componentName = "aspernatur";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "distinctio";
                                                                                operand = "facilis";
                                                                                operandType = "aliquid";
                                                                                operator = "quam";
                                                                                property = "molestias";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "temporibus";
                                                                            event = "qui";
                                                                            importedValue = "neque";
                                                                            model = "fugit";
                                                                            property = "magni";
                                                                            type = "odio";
                                                                            userAttribute = "sunt";
                                                                            value = "ullam";
                                                                        }});
                                                                        put("nam", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("cumque") {{
                                                                                field = "hic";
                                                                                property = "voluptatem";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("nobis", new FormBindingElement("ipsum", "veritatis") {{
                                                                                    element = "et";
                                                                                    property = "saepe";
                                                                                }});
                                                                                put("nobis", new FormBindingElement("cupiditate", "aperiam") {{
                                                                                    element = "quos";
                                                                                    property = "tempore";
                                                                                }});
                                                                                put("delectus", new FormBindingElement("labore", "adipisci") {{
                                                                                    element = "dolorem";
                                                                                    property = "dolore";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("quae") {{
                                                                                field = "dolorum";
                                                                                property = "architecto";
                                                                            }};
                                                                            componentName = "aut";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "itaque";
                                                                                operand = "consequatur";
                                                                                operandType = "est";
                                                                                operator = "repellendus";
                                                                                property = "porro";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "doloribus";
                                                                            event = "ut";
                                                                            importedValue = "facilis";
                                                                            model = "cupiditate";
                                                                            property = "qui";
                                                                            type = "quae";
                                                                            userAttribute = "laudantium";
                                                                            value = "odio";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("quisquam") {{
                                                                            field = "occaecati";
                                                                            property = "voluptatibus";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("omnis", new FormBindingElement("delectus", "voluptate") {{
                                                                                element = "quis";
                                                                                property = "ipsum";
                                                                            }});
                                                                            put("consectetur", new FormBindingElement("dignissimos", "hic") {{
                                                                                element = "vero";
                                                                                property = "tenetur";
                                                                            }});
                                                                            put("distinctio", new FormBindingElement("similique", "facilis") {{
                                                                                element = "quod";
                                                                                property = "odio";
                                                                            }});
                                                                            put("vero", new FormBindingElement("quibusdam", "illum") {{
                                                                                element = "ducimus";
                                                                                property = "dolore";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("impedit") {{
                                                                            field = "sequi";
                                                                            property = "natus";
                                                                        }};
                                                                        componentName = "aut";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "exercitationem";
                                                                            operand = "nulla";
                                                                            operandType = "fugit";
                                                                            operator = "porro";
                                                                            property = "maiores";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "doloribus";
                                                                        event = "iusto";
                                                                        importedValue = "eligendi";
                                                                        model = "ducimus";
                                                                        property = "alias";
                                                                        type = "officia";
                                                                        userAttribute = "tempora";
                                                                        value = "ipsam";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("vel") {{
                                                                            field = "ea";
                                                                            property = "aspernatur";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("magnam", new FormBindingElement("laudantium", "dicta") {{
                                                                                element = "ratione";
                                                                                property = "ex";
                                                                            }});
                                                                            put("dolor", new FormBindingElement("ex", "nulla") {{
                                                                                element = "maiores";
                                                                                property = "quasi";
                                                                            }});
                                                                            put("excepturi", new FormBindingElement("sapiente", "quisquam") {{
                                                                                element = "voluptatibus";
                                                                                property = "nostrum";
                                                                            }});
                                                                            put("saepe", new FormBindingElement("corporis", "veniam") {{
                                                                                element = "ea";
                                                                                property = "impedit";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("magnam") {{
                                                                            field = "aliquid";
                                                                            property = "inventore";
                                                                        }};
                                                                        componentName = "ea";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "consectetur";
                                                                            operand = "recusandae";
                                                                            operandType = "aspernatur";
                                                                            operator = "minima";
                                                                            property = "eaque";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "a";
                                                                        event = "libero";
                                                                        importedValue = "aut";
                                                                        model = "aut";
                                                                        property = "deleniti";
                                                                        type = "impedit";
                                                                        userAttribute = "aliquam";
                                                                        value = "fugit";
                                                                    }};
                                                                    model = "accusamus";
                                                                    state = new MutationActionSetStateParameter("quo", "illum",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("quo") {{
                                                                                            field = "fuga";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("eos", new FormBindingElement("cupiditate", "consequatur") {{
                                                                                                element = "voluptas";
                                                                                                property = "ab";
                                                                                            }});
                                                                                            put("tempora", new FormBindingElement("aspernatur", "sequi") {{
                                                                                                element = "debitis";
                                                                                                property = "ipsam";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("quo") {{
                                                                                            field = "esse";
                                                                                        }};;
                                                                                        componentName = "recusandae";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "distinctio";
                                                                                            operand = "quod";
                                                                                            operandType = "dignissimos";
                                                                                            operator = "inventore";
                                                                                            property = "nihil";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "totam";
                                                                                        event = "accusamus";
                                                                                        importedValue = "aliquam";
                                                                                        model = "odio";
                                                                                        property = "occaecati";
                                                                                        type = "commodi";
                                                                                        userAttribute = "sapiente";
                                                                                        value = "dolores";
                                                                                    }};) {{
                                                                        componentName = "inventore";
                                                                        property = "non";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("laborum") {{
                                                                                field = "et";
                                                                                property = "dolorum";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("velit", new FormBindingElement("nobis", "quas") {{
                                                                                    element = "eum";
                                                                                    property = "autem";
                                                                                }});
                                                                                put("assumenda", new FormBindingElement("libero", "quasi") {{
                                                                                    element = "nulla";
                                                                                    property = "voluptas";
                                                                                }});
                                                                                put("tempora", new FormBindingElement("provident", "ipsa") {{
                                                                                    element = "numquam";
                                                                                    property = "explicabo";
                                                                                }});
                                                                                put("molestiae", new FormBindingElement("eius", "esse") {{
                                                                                    element = "magnam";
                                                                                    property = "odio";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("fuga") {{
                                                                                field = "esse";
                                                                                property = "rem";
                                                                            }};
                                                                            componentName = "reprehenderit";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "fugiat";
                                                                                operand = "ut";
                                                                                operandType = "eum";
                                                                                operator = "suscipit";
                                                                                property = "assumenda";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "eos";
                                                                            event = "praesentium";
                                                                            importedValue = "quisquam";
                                                                            model = "veritatis";
                                                                            property = "ipsa";
                                                                            type = "id";
                                                                            userAttribute = "quidem";
                                                                            value = "neque";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("accusantium") {{
                                                                            field = "deserunt";
                                                                            property = "molestiae";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("eum", new FormBindingElement("consequuntur", "deleniti") {{
                                                                                element = "quas";
                                                                                property = "praesentium";
                                                                            }});
                                                                            put("fugit", new FormBindingElement("incidunt", "atque") {{
                                                                                element = "fuga";
                                                                                property = "mollitia";
                                                                            }});
                                                                            put("explicabo", new FormBindingElement("fugit", "sapiente") {{
                                                                                element = "minima";
                                                                                property = "nisi";
                                                                            }});
                                                                            put("consequuntur", new FormBindingElement("saepe", "occaecati") {{
                                                                                element = "ratione";
                                                                                property = "explicabo";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("esse") {{
                                                                            field = "atque";
                                                                            property = "et";
                                                                        }};
                                                                        componentName = "eveniet";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "veritatis";
                                                                            operand = "esse";
                                                                            operandType = "quod";
                                                                            operator = "nam";
                                                                            property = "vero";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "aliquid";
                                                                        event = "quasi";
                                                                        importedValue = "saepe";
                                                                        model = "vel";
                                                                        property = "harum";
                                                                        type = "molestiae";
                                                                        userAttribute = "rerum";
                                                                        value = "occaecati";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("eligendi") {{
                                                                            field = "minima";
                                                                            property = "distinctio";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("culpa", new FormBindingElement("cumque", "consequuntur") {{
                                                                                element = "tempore";
                                                                                property = "adipisci";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("quaerat") {{
                                                                            field = "consequatur";
                                                                            property = "minus";
                                                                        }};
                                                                        componentName = "sapiente";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "esse";
                                                                            operand = "blanditiis";
                                                                            operandType = "provident";
                                                                            operator = "a";
                                                                            property = "nulla";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "quas";
                                                                        event = "esse";
                                                                        importedValue = "quasi";
                                                                        model = "a";
                                                                        property = "error";
                                                                        type = "sint";
                                                                        userAttribute = "pariatur";
                                                                        value = "possimus";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("asperiores") {{
                                                                            field = "quia";
                                                                            property = "eveniet";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("veritatis", new FormBindingElement("similique", "culpa") {{
                                                                                element = "consequuntur";
                                                                                property = "quasi";
                                                                            }});
                                                                            put("aliquid", new FormBindingElement("earum", "vel") {{
                                                                                element = "tenetur";
                                                                                property = "quae";
                                                                            }});
                                                                            put("in", new FormBindingElement("illum", "soluta") {{
                                                                                element = "eius";
                                                                                property = "libero";
                                                                            }});
                                                                            put("accusantium", new FormBindingElement("dicta", "ullam") {{
                                                                                element = "aliquam";
                                                                                property = "sapiente";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("nisi") {{
                                                                            field = "reprehenderit";
                                                                            property = "ullam";
                                                                        }};
                                                                        componentName = "aut";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "qui";
                                                                            operand = "quibusdam";
                                                                            operandType = "ex";
                                                                            operator = "deleniti";
                                                                            property = "itaque";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "dolorum";
                                                                        event = "architecto";
                                                                        importedValue = "omnis";
                                                                        model = "tenetur";
                                                                        property = "quasi";
                                                                        type = "at";
                                                                        userAttribute = "et";
                                                                        value = "voluptate";
                                                                    }};
                                                                }};
                                                            }});
                                                        }};
                                                        name = "Joann Bogan";
                                                        properties = "iste";
                                                        sourceId = "temporibus";
                                                    }}),
                                                    add(new ComponentChild("nisi", "quis", "nisi") {{
                                                        children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                                            add(new ComponentChild() {{}}),
                                                            add(new ComponentChild() {{}}),
                                                            add(new ComponentChild() {{}}),
                                                        }};
                                                        componentType = "eum";
                                                        events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                                            put("ab", new ComponentEvent() {{
                                                                action = "corrupti";
                                                                bindingEvent = "non";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("occaecati") {{
                                                                            field = "voluptatem";
                                                                            property = "dolor";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("impedit", new FormBindingElement("aut", "dignissimos") {{
                                                                                element = "explicabo";
                                                                                property = "voluptas";
                                                                            }});
                                                                            put("dicta", new FormBindingElement("velit", "voluptatibus") {{
                                                                                element = "maiores";
                                                                                property = "natus";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("aperiam") {{
                                                                            field = "voluptas";
                                                                            property = "asperiores";
                                                                        }};
                                                                        componentName = "ea";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "consequuntur";
                                                                            operand = "repellendus";
                                                                            operandType = "officia";
                                                                            operator = "maxime";
                                                                            property = "dignissimos";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "officia";
                                                                        event = "asperiores";
                                                                        importedValue = "nemo";
                                                                        model = "quae";
                                                                        property = "quaerat";
                                                                        type = "porro";
                                                                        userAttribute = "quod";
                                                                        value = "labore";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("adipisci", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("suscipit") {{
                                                                                field = "fuga";
                                                                                property = "id";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("culpa", new FormBindingElement("totam", "fugiat") {{
                                                                                    element = "est";
                                                                                    property = "recusandae";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("quos") {{
                                                                                field = "vel";
                                                                                property = "ducimus";
                                                                            }};
                                                                            componentName = "vel";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "possimus";
                                                                                operand = "facilis";
                                                                                operandType = "cum";
                                                                                operator = "commodi";
                                                                                property = "in";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "corporis";
                                                                            event = "reiciendis";
                                                                            importedValue = "assumenda";
                                                                            model = "nemo";
                                                                            property = "recusandae";
                                                                            type = "aliquid";
                                                                            userAttribute = "aperiam";
                                                                            value = "cum";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("exercitationem") {{
                                                                            field = "consectetur";
                                                                            property = "in";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("facere", new FormBindingElement("suscipit", "reiciendis") {{
                                                                                element = "numquam";
                                                                                property = "doloribus";
                                                                            }});
                                                                            put("quidem", new FormBindingElement("dolore", "sunt") {{
                                                                                element = "saepe";
                                                                                property = "necessitatibus";
                                                                            }});
                                                                            put("asperiores", new FormBindingElement("amet", "beatae") {{
                                                                                element = "adipisci";
                                                                                property = "non";
                                                                            }});
                                                                            put("dignissimos", new FormBindingElement("consectetur", "corporis") {{
                                                                                element = "a";
                                                                                property = "debitis";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ipsa") {{
                                                                            field = "harum";
                                                                            property = "laboriosam";
                                                                        }};
                                                                        componentName = "voluptates";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "vitae";
                                                                            operand = "accusamus";
                                                                            operandType = "similique";
                                                                            operator = "tempora";
                                                                            property = "aspernatur";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "voluptas";
                                                                        event = "voluptas";
                                                                        importedValue = "voluptas";
                                                                        model = "minima";
                                                                        property = "nobis";
                                                                        type = "dolorum";
                                                                        userAttribute = "adipisci";
                                                                        value = "minus";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("in") {{
                                                                            field = "dolores";
                                                                            property = "blanditiis";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("aliquam", new FormBindingElement("ullam", "adipisci") {{
                                                                                element = "officiis";
                                                                                property = "temporibus";
                                                                            }});
                                                                            put("cum", new FormBindingElement("hic", "nesciunt") {{
                                                                                element = "blanditiis";
                                                                                property = "quas";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("pariatur") {{
                                                                            field = "culpa";
                                                                            property = "corrupti";
                                                                        }};
                                                                        componentName = "totam";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "exercitationem";
                                                                            operand = "nobis";
                                                                            operandType = "sit";
                                                                            operator = "rerum";
                                                                            property = "sed";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "reiciendis";
                                                                        event = "explicabo";
                                                                        importedValue = "asperiores";
                                                                        model = "facilis";
                                                                        property = "voluptate";
                                                                        type = "expedita";
                                                                        userAttribute = "ab";
                                                                        value = "iste";
                                                                    }};
                                                                    model = "dolore";
                                                                    state = new MutationActionSetStateParameter("voluptate", "reiciendis",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("ex") {{
                                                                                            field = "sit";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("officiis", new FormBindingElement("quaerat", "incidunt") {{
                                                                                                element = "praesentium";
                                                                                                property = "facilis";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ipsam") {{
                                                                                            field = "debitis";
                                                                                        }};;
                                                                                        componentName = "rem";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "nobis";
                                                                                            operand = "error";
                                                                                            operandType = "veniam";
                                                                                            operator = "minima";
                                                                                            property = "recusandae";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "reiciendis";
                                                                                        event = "nulla";
                                                                                        importedValue = "magni";
                                                                                        model = "aperiam";
                                                                                        property = "saepe";
                                                                                        type = "numquam";
                                                                                        userAttribute = "veniam";
                                                                                        value = "in";
                                                                                    }};) {{
                                                                        componentName = "laborum";
                                                                        property = "sed";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("quidem") {{
                                                                                field = "in";
                                                                                property = "commodi";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("voluptas", new FormBindingElement("suscipit", "sapiente") {{
                                                                                    element = "unde";
                                                                                    property = "architecto";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("reiciendis") {{
                                                                                field = "debitis";
                                                                                property = "illo";
                                                                            }};
                                                                            componentName = "perferendis";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "maiores";
                                                                                operand = "incidunt";
                                                                                operandType = "sed";
                                                                                operator = "provident";
                                                                                property = "eius";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "necessitatibus";
                                                                            event = "ipsum";
                                                                            importedValue = "ea";
                                                                            model = "occaecati";
                                                                            property = "quos";
                                                                            type = "voluptatibus";
                                                                            userAttribute = "tempora";
                                                                            value = "tempora";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("laudantium") {{
                                                                            field = "officiis";
                                                                            property = "beatae";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("praesentium", new FormBindingElement("dolorum", "voluptatum") {{
                                                                                element = "cum";
                                                                                property = "laboriosam";
                                                                            }});
                                                                            put("error", new FormBindingElement("debitis", "neque") {{
                                                                                element = "hic";
                                                                                property = "expedita";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("officia") {{
                                                                            field = "dolorum";
                                                                            property = "nostrum";
                                                                        }};
                                                                        componentName = "dolorum";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "accusamus";
                                                                            operand = "tempora";
                                                                            operandType = "atque";
                                                                            operator = "fugit";
                                                                            property = "ut";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "fugiat";
                                                                        event = "voluptatem";
                                                                        importedValue = "culpa";
                                                                        model = "expedita";
                                                                        property = "magnam";
                                                                        type = "consequatur";
                                                                        userAttribute = "esse";
                                                                        value = "ipsam";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("quas") {{
                                                                            field = "sit";
                                                                            property = "voluptatum";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("corporis", new FormBindingElement("ex", "sed") {{
                                                                                element = "et";
                                                                                property = "blanditiis";
                                                                            }});
                                                                            put("sit", new FormBindingElement("saepe", "error") {{
                                                                                element = "vel";
                                                                                property = "nostrum";
                                                                            }});
                                                                            put("consequatur", new FormBindingElement("dolorem", "harum") {{
                                                                                element = "incidunt";
                                                                                property = "reiciendis";
                                                                            }});
                                                                            put("dicta", new FormBindingElement("labore", "quidem") {{
                                                                                element = "architecto";
                                                                                property = "occaecati";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("nam") {{
                                                                            field = "atque";
                                                                            property = "laborum";
                                                                        }};
                                                                        componentName = "tenetur";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "alias";
                                                                            operand = "amet";
                                                                            operandType = "deserunt";
                                                                            operator = "voluptate";
                                                                            property = "unde";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "reiciendis";
                                                                        event = "provident";
                                                                        importedValue = "repellendus";
                                                                        model = "delectus";
                                                                        property = "voluptates";
                                                                        type = "perferendis";
                                                                        userAttribute = "est";
                                                                        value = "quidem";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("fuga") {{
                                                                            field = "reprehenderit";
                                                                            property = "facere";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("mollitia", new FormBindingElement("quisquam", "repudiandae") {{
                                                                                element = "veniam";
                                                                                property = "voluptatem";
                                                                            }});
                                                                            put("quasi", new FormBindingElement("asperiores", "totam") {{
                                                                                element = "atque";
                                                                                property = "reprehenderit";
                                                                            }});
                                                                            put("suscipit", new FormBindingElement("et", "esse") {{
                                                                                element = "quidem";
                                                                                property = "maxime";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ea") {{
                                                                            field = "amet";
                                                                            property = "assumenda";
                                                                        }};
                                                                        componentName = "atque";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "officiis";
                                                                            operand = "officiis";
                                                                            operandType = "accusamus";
                                                                            operator = "natus";
                                                                            property = "minima";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "aspernatur";
                                                                        event = "ex";
                                                                        importedValue = "maiores";
                                                                        model = "corrupti";
                                                                        property = "at";
                                                                        type = "error";
                                                                        userAttribute = "blanditiis";
                                                                        value = "suscipit";
                                                                    }};
                                                                }};
                                                            }});
                                                            put("repudiandae", new ComponentEvent() {{
                                                                action = "atque";
                                                                bindingEvent = "atque";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("dolorum") {{
                                                                            field = "sunt";
                                                                            property = "recusandae";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("labore", new FormBindingElement("repudiandae", "dicta") {{
                                                                                element = "reiciendis";
                                                                                property = "doloremque";
                                                                            }});
                                                                            put("accusantium", new FormBindingElement("enim", "laboriosam") {{
                                                                                element = "beatae";
                                                                                property = "dolores";
                                                                            }});
                                                                            put("velit", new FormBindingElement("magnam", "saepe") {{
                                                                                element = "a";
                                                                                property = "molestias";
                                                                            }});
                                                                            put("consequuntur", new FormBindingElement("perspiciatis", "in") {{
                                                                                element = "occaecati";
                                                                                property = "officiis";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("occaecati") {{
                                                                            field = "adipisci";
                                                                            property = "eveniet";
                                                                        }};
                                                                        componentName = "consequuntur";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "id";
                                                                            operand = "quis";
                                                                            operandType = "reprehenderit";
                                                                            operator = "error";
                                                                            property = "illo";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "corporis";
                                                                        event = "quidem";
                                                                        importedValue = "eveniet";
                                                                        model = "non";
                                                                        property = "vero";
                                                                        type = "doloremque";
                                                                        userAttribute = "iure";
                                                                        value = "ipsa";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("quae", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("qui") {{
                                                                                field = "molestiae";
                                                                                property = "eveniet";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("iure", new FormBindingElement("laborum", "distinctio") {{
                                                                                    element = "necessitatibus";
                                                                                    property = "ratione";
                                                                                }});
                                                                                put("voluptatum", new FormBindingElement("ad", "repellat") {{
                                                                                    element = "rem";
                                                                                    property = "aliquam";
                                                                                }});
                                                                                put("alias", new FormBindingElement("nihil", "mollitia") {{
                                                                                    element = "corporis";
                                                                                    property = "perspiciatis";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("maiores") {{
                                                                                field = "voluptas";
                                                                                property = "alias";
                                                                            }};
                                                                            componentName = "reiciendis";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "id";
                                                                                operand = "minima";
                                                                                operandType = "dolore";
                                                                                operator = "dolorum";
                                                                                property = "nesciunt";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "quae";
                                                                            event = "recusandae";
                                                                            importedValue = "omnis";
                                                                            model = "quaerat";
                                                                            property = "molestiae";
                                                                            type = "ex";
                                                                            userAttribute = "ut";
                                                                            value = "culpa";
                                                                        }});
                                                                        put("adipisci", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("eum") {{
                                                                                field = "debitis";
                                                                                property = "laudantium";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("recusandae", new FormBindingElement("quis", "eum") {{
                                                                                    element = "esse";
                                                                                    property = "provident";
                                                                                }});
                                                                                put("reiciendis", new FormBindingElement("ullam", "quasi") {{
                                                                                    element = "provident";
                                                                                    property = "aspernatur";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("mollitia") {{
                                                                                field = "animi";
                                                                                property = "nostrum";
                                                                            }};
                                                                            componentName = "provident";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "animi";
                                                                                operand = "ex";
                                                                                operandType = "aliquid";
                                                                                operator = "accusantium";
                                                                                property = "repellat";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "doloribus";
                                                                            event = "ullam";
                                                                            importedValue = "in";
                                                                            model = "nam";
                                                                            property = "earum";
                                                                            type = "officia";
                                                                            userAttribute = "laborum";
                                                                            value = "placeat";
                                                                        }});
                                                                        put("modi", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("officiis") {{
                                                                                field = "voluptatibus";
                                                                                property = "molestias";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("cumque", new FormBindingElement("tempora", "quis") {{
                                                                                    element = "vitae";
                                                                                    property = "rerum";
                                                                                }});
                                                                                put("inventore", new FormBindingElement("quae", "perferendis") {{
                                                                                    element = "fugit";
                                                                                    property = "cumque";
                                                                                }});
                                                                                put("velit", new FormBindingElement("eius", "rem") {{
                                                                                    element = "aspernatur";
                                                                                    property = "eum";
                                                                                }});
                                                                                put("at", new FormBindingElement("sapiente", "eum") {{
                                                                                    element = "impedit";
                                                                                    property = "eos";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("beatae") {{
                                                                                field = "dicta";
                                                                                property = "minima";
                                                                            }};
                                                                            componentName = "cupiditate";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "earum";
                                                                                operand = "soluta";
                                                                                operandType = "hic";
                                                                                operator = "illum";
                                                                                property = "eaque";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "earum";
                                                                            event = "perspiciatis";
                                                                            importedValue = "maiores";
                                                                            model = "debitis";
                                                                            property = "aliquid";
                                                                            type = "porro";
                                                                            userAttribute = "suscipit";
                                                                            value = "dolorem";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("fuga") {{
                                                                            field = "fugit";
                                                                            property = "cumque";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("animi", new FormBindingElement("consequatur", "quasi") {{
                                                                                element = "necessitatibus";
                                                                                property = "nulla";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("natus") {{
                                                                            field = "et";
                                                                            property = "ducimus";
                                                                        }};
                                                                        componentName = "occaecati";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "adipisci";
                                                                            operand = "quasi";
                                                                            operandType = "magni";
                                                                            operator = "doloribus";
                                                                            property = "nulla";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "necessitatibus";
                                                                        event = "ipsa";
                                                                        importedValue = "tempora";
                                                                        model = "nihil";
                                                                        property = "molestiae";
                                                                        type = "dicta";
                                                                        userAttribute = "iusto";
                                                                        value = "esse";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("reiciendis") {{
                                                                            field = "praesentium";
                                                                            property = "maiores";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("architecto", new FormBindingElement("dicta", "odio") {{
                                                                                element = "fugiat";
                                                                                property = "doloremque";
                                                                            }});
                                                                            put("tempora", new FormBindingElement("consectetur", "aliquid") {{
                                                                                element = "esse";
                                                                                property = "ex";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("sunt") {{
                                                                            field = "ipsa";
                                                                            property = "laborum";
                                                                        }};
                                                                        componentName = "nostrum";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "expedita";
                                                                            operand = "aliquid";
                                                                            operandType = "officia";
                                                                            operator = "suscipit";
                                                                            property = "aliquid";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "perferendis";
                                                                        event = "eum";
                                                                        importedValue = "voluptas";
                                                                        model = "iste";
                                                                        property = "id";
                                                                        type = "ab";
                                                                        userAttribute = "error";
                                                                        value = "possimus";
                                                                    }};
                                                                    model = "voluptates";
                                                                    state = new MutationActionSetStateParameter("deleniti", "earum",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("ex") {{
                                                                                            field = "sapiente";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("minus", new FormBindingElement("ratione", "ullam") {{
                                                                                                element = "nemo";
                                                                                                property = "asperiores";
                                                                                            }});
                                                                                            put("perferendis", new FormBindingElement("impedit", "quibusdam") {{
                                                                                                element = "illum";
                                                                                                property = "totam";
                                                                                            }});
                                                                                            put("nam", new FormBindingElement("dolor", "aliquam") {{
                                                                                                element = "ipsam";
                                                                                                property = "culpa";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("inventore") {{
                                                                                            field = "deleniti";
                                                                                        }};;
                                                                                        componentName = "veritatis";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "dolor";
                                                                                            operand = "consequatur";
                                                                                            operandType = "architecto";
                                                                                            operator = "sit";
                                                                                            property = "modi";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "fugit";
                                                                                        event = "ab";
                                                                                        importedValue = "laudantium";
                                                                                        model = "quae";
                                                                                        property = "dolor";
                                                                                        type = "fugiat";
                                                                                        userAttribute = "ipsam";
                                                                                        value = "consequuntur";
                                                                                    }};) {{
                                                                        componentName = "mollitia";
                                                                        property = "laborum";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("deleniti") {{
                                                                                field = "libero";
                                                                                property = "ad";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("vitae", new FormBindingElement("quo", "ex") {{
                                                                                    element = "repellendus";
                                                                                    property = "ex";
                                                                                }});
                                                                                put("ut", new FormBindingElement("voluptatem", "molestias") {{
                                                                                    element = "ad";
                                                                                    property = "expedita";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("beatae") {{
                                                                                field = "cum";
                                                                                property = "aliquid";
                                                                            }};
                                                                            componentName = "voluptatum";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "veritatis";
                                                                                operand = "rerum";
                                                                                operandType = "est";
                                                                                operator = "culpa";
                                                                                property = "voluptatem";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "sapiente";
                                                                            event = "officiis";
                                                                            importedValue = "architecto";
                                                                            model = "fuga";
                                                                            property = "pariatur";
                                                                            type = "debitis";
                                                                            userAttribute = "voluptatem";
                                                                            value = "alias";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("eveniet") {{
                                                                            field = "ipsa";
                                                                            property = "quas";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("officiis", new FormBindingElement("sed", "veniam") {{
                                                                                element = "esse";
                                                                                property = "necessitatibus";
                                                                            }});
                                                                            put("nesciunt", new FormBindingElement("vel", "voluptatum") {{
                                                                                element = "expedita";
                                                                                property = "eum";
                                                                            }});
                                                                            put("magnam", new FormBindingElement("porro", "autem") {{
                                                                                element = "exercitationem";
                                                                                property = "ab";
                                                                            }});
                                                                            put("nobis", new FormBindingElement("consequuntur", "voluptatem") {{
                                                                                element = "laboriosam";
                                                                                property = "recusandae";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("quasi") {{
                                                                            field = "exercitationem";
                                                                            property = "necessitatibus";
                                                                        }};
                                                                        componentName = "nisi";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "vero";
                                                                            operand = "est";
                                                                            operandType = "harum";
                                                                            operator = "sequi";
                                                                            property = "doloribus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "repudiandae";
                                                                        event = "optio";
                                                                        importedValue = "occaecati";
                                                                        model = "nemo";
                                                                        property = "voluptate";
                                                                        type = "blanditiis";
                                                                        userAttribute = "officia";
                                                                        value = "voluptas";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("quos") {{
                                                                            field = "numquam";
                                                                            property = "nemo";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("aspernatur", new FormBindingElement("fuga", "laudantium") {{
                                                                                element = "ducimus";
                                                                                property = "nesciunt";
                                                                            }});
                                                                            put("incidunt", new FormBindingElement("fugiat", "dicta") {{
                                                                                element = "quasi";
                                                                                property = "rem";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("consectetur") {{
                                                                            field = "nisi";
                                                                            property = "consequuntur";
                                                                        }};
                                                                        componentName = "aperiam";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "reiciendis";
                                                                            operand = "soluta";
                                                                            operandType = "alias";
                                                                            operator = "omnis";
                                                                            property = "eos";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "occaecati";
                                                                        event = "iste";
                                                                        importedValue = "magni";
                                                                        model = "inventore";
                                                                        property = "fuga";
                                                                        type = "accusamus";
                                                                        userAttribute = "voluptatibus";
                                                                        value = "distinctio";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("minima") {{
                                                                            field = "omnis";
                                                                            property = "delectus";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("maxime", new FormBindingElement("quos", "commodi") {{
                                                                                element = "magnam";
                                                                                property = "temporibus";
                                                                            }});
                                                                            put("itaque", new FormBindingElement("earum", "modi") {{
                                                                                element = "commodi";
                                                                                property = "totam";
                                                                            }});
                                                                            put("nam", new FormBindingElement("ipsam", "vel") {{
                                                                                element = "vero";
                                                                                property = "voluptatem";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("non") {{
                                                                            field = "alias";
                                                                            property = "quasi";
                                                                        }};
                                                                        componentName = "maiores";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "sint";
                                                                            operand = "nulla";
                                                                            operandType = "deserunt";
                                                                            operator = "esse";
                                                                            property = "nemo";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "reprehenderit";
                                                                        event = "est";
                                                                        importedValue = "quis";
                                                                        model = "sint";
                                                                        property = "accusamus";
                                                                        type = "impedit";
                                                                        userAttribute = "hic";
                                                                        value = "necessitatibus";
                                                                    }};
                                                                }};
                                                            }});
                                                            put("asperiores", new ComponentEvent() {{
                                                                action = "ex";
                                                                bindingEvent = "voluptas";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("quae") {{
                                                                            field = "debitis";
                                                                            property = "delectus";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("fuga", new FormBindingElement("velit", "atque") {{
                                                                                element = "laborum";
                                                                                property = "consectetur";
                                                                            }});
                                                                            put("ipsum", new FormBindingElement("soluta", "repudiandae") {{
                                                                                element = "impedit";
                                                                                property = "magni";
                                                                            }});
                                                                            put("nam", new FormBindingElement("voluptate", "sequi") {{
                                                                                element = "dolore";
                                                                                property = "iusto";
                                                                            }});
                                                                            put("dignissimos", new FormBindingElement("deleniti", "quibusdam") {{
                                                                                element = "neque";
                                                                                property = "quo";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("voluptatibus") {{
                                                                            field = "iure";
                                                                            property = "odit";
                                                                        }};
                                                                        componentName = "vel";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "quibusdam";
                                                                            operand = "inventore";
                                                                            operandType = "facere";
                                                                            operator = "libero";
                                                                            property = "architecto";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "voluptatibus";
                                                                        event = "quia";
                                                                        importedValue = "porro";
                                                                        model = "aliquam";
                                                                        property = "velit";
                                                                        type = "illo";
                                                                        userAttribute = "accusantium";
                                                                        value = "vel";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("beatae", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("eum") {{
                                                                                field = "vero";
                                                                                property = "excepturi";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("ut", new FormBindingElement("dicta", "impedit") {{
                                                                                    element = "perspiciatis";
                                                                                    property = "earum";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("itaque") {{
                                                                                field = "voluptatibus";
                                                                                property = "iste";
                                                                            }};
                                                                            componentName = "alias";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "itaque";
                                                                                operand = "velit";
                                                                                operandType = "laborum";
                                                                                operator = "non";
                                                                                property = "dolor";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "iusto";
                                                                            event = "sit";
                                                                            importedValue = "doloremque";
                                                                            model = "consequatur";
                                                                            property = "officia";
                                                                            type = "recusandae";
                                                                            userAttribute = "ea";
                                                                            value = "quidem";
                                                                        }});
                                                                        put("voluptas", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("perspiciatis") {{
                                                                                field = "facilis";
                                                                                property = "placeat";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("deleniti", new FormBindingElement("ullam", "unde") {{
                                                                                    element = "a";
                                                                                    property = "voluptate";
                                                                                }});
                                                                                put("necessitatibus", new FormBindingElement("ipsam", "corporis") {{
                                                                                    element = "animi";
                                                                                    property = "impedit";
                                                                                }});
                                                                                put("est", new FormBindingElement("labore", "veritatis") {{
                                                                                    element = "error";
                                                                                    property = "esse";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("vitae") {{
                                                                                field = "vero";
                                                                                property = "consectetur";
                                                                            }};
                                                                            componentName = "inventore";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "ad";
                                                                                operand = "qui";
                                                                                operandType = "iste";
                                                                                operator = "ex";
                                                                                property = "nemo";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "soluta";
                                                                            event = "libero";
                                                                            importedValue = "rem";
                                                                            model = "dolorum";
                                                                            property = "odio";
                                                                            type = "fugit";
                                                                            userAttribute = "alias";
                                                                            value = "magni";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("quae") {{
                                                                            field = "vel";
                                                                            property = "quae";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("neque", new FormBindingElement("et", "ipsum") {{
                                                                                element = "exercitationem";
                                                                                property = "itaque";
                                                                            }});
                                                                            put("unde", new FormBindingElement("maxime", "quia") {{
                                                                                element = "nulla";
                                                                                property = "distinctio";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("omnis") {{
                                                                            field = "quia";
                                                                            property = "nostrum";
                                                                        }};
                                                                        componentName = "libero";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "id";
                                                                            operand = "libero";
                                                                            operandType = "fugiat";
                                                                            operator = "officia";
                                                                            property = "quos";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "placeat";
                                                                        event = "sit";
                                                                        importedValue = "iusto";
                                                                        model = "ipsa";
                                                                        property = "voluptates";
                                                                        type = "inventore";
                                                                        userAttribute = "aperiam";
                                                                        value = "totam";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("distinctio") {{
                                                                            field = "dolore";
                                                                            property = "eligendi";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("autem", new FormBindingElement("assumenda", "beatae") {{
                                                                                element = "esse";
                                                                                property = "dolores";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("corrupti") {{
                                                                            field = "est";
                                                                            property = "facere";
                                                                        }};
                                                                        componentName = "molestiae";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "accusamus";
                                                                            operand = "necessitatibus";
                                                                            operandType = "tempore";
                                                                            operator = "sint";
                                                                            property = "ea";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "autem";
                                                                        event = "ipsam";
                                                                        importedValue = "rerum";
                                                                        model = "laudantium";
                                                                        property = "corporis";
                                                                        type = "officiis";
                                                                        userAttribute = "voluptatibus";
                                                                        value = "cum";
                                                                    }};
                                                                    model = "at";
                                                                    state = new MutationActionSetStateParameter("numquam", "numquam",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("nesciunt") {{
                                                                                            field = "at";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("dignissimos", new FormBindingElement("corporis", "qui") {{
                                                                                                element = "optio";
                                                                                                property = "necessitatibus";
                                                                                            }});
                                                                                            put("expedita", new FormBindingElement("minima", "placeat") {{
                                                                                                element = "voluptatum";
                                                                                                property = "cupiditate";
                                                                                            }});
                                                                                            put("enim", new FormBindingElement("minus", "eum") {{
                                                                                                element = "neque";
                                                                                                property = "in";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("modi") {{
                                                                                            field = "corporis";
                                                                                        }};;
                                                                                        componentName = "magnam";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "maiores";
                                                                                            operand = "tempore";
                                                                                            operandType = "aperiam";
                                                                                            operator = "libero";
                                                                                            property = "ratione";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "labore";
                                                                                        event = "totam";
                                                                                        importedValue = "occaecati";
                                                                                        model = "voluptas";
                                                                                        property = "quo";
                                                                                        type = "velit";
                                                                                        userAttribute = "minus";
                                                                                        value = "fuga";
                                                                                    }};) {{
                                                                        componentName = "alias";
                                                                        property = "quia";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("repudiandae") {{
                                                                                field = "quidem";
                                                                                property = "fuga";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("expedita", new FormBindingElement("quibusdam", "odio") {{
                                                                                    element = "officiis";
                                                                                    property = "eos";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("explicabo") {{
                                                                                field = "praesentium";
                                                                                property = "odit";
                                                                            }};
                                                                            componentName = "corporis";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "earum";
                                                                                operand = "adipisci";
                                                                                operandType = "recusandae";
                                                                                operator = "similique";
                                                                                property = "ut";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "quidem";
                                                                            event = "quis";
                                                                            importedValue = "beatae";
                                                                            model = "unde";
                                                                            property = "molestiae";
                                                                            type = "delectus";
                                                                            userAttribute = "cupiditate";
                                                                            value = "fugit";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("impedit") {{
                                                                            field = "nostrum";
                                                                            property = "est";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("tempore", new FormBindingElement("repellat", "pariatur") {{
                                                                                element = "vero";
                                                                                property = "odit";
                                                                            }});
                                                                            put("nemo", new FormBindingElement("odio", "minima") {{
                                                                                element = "reprehenderit";
                                                                                property = "aperiam";
                                                                            }});
                                                                            put("in", new FormBindingElement("dolores", "error") {{
                                                                                element = "ducimus";
                                                                                property = "excepturi";
                                                                            }});
                                                                            put("veritatis", new FormBindingElement("pariatur", "itaque") {{
                                                                                element = "ducimus";
                                                                                property = "voluptate";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ex") {{
                                                                            field = "similique";
                                                                            property = "optio";
                                                                        }};
                                                                        componentName = "quaerat";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "officiis";
                                                                            operand = "placeat";
                                                                            operandType = "quidem";
                                                                            operator = "exercitationem";
                                                                            property = "quam";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "dolorem";
                                                                        event = "modi";
                                                                        importedValue = "ipsa";
                                                                        model = "sint";
                                                                        property = "vero";
                                                                        type = "sequi";
                                                                        userAttribute = "repudiandae";
                                                                        value = "cum";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("veniam") {{
                                                                            field = "dicta";
                                                                            property = "earum";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("dolores", new FormBindingElement("consequuntur", "necessitatibus") {{
                                                                                element = "nam";
                                                                                property = "dicta";
                                                                            }});
                                                                            put("nobis", new FormBindingElement("maiores", "veritatis") {{
                                                                                element = "ipsa";
                                                                                property = "ducimus";
                                                                            }});
                                                                            put("quasi", new FormBindingElement("libero", "excepturi") {{
                                                                                element = "laboriosam";
                                                                                property = "pariatur";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("aliquam") {{
                                                                            field = "occaecati";
                                                                            property = "nemo";
                                                                        }};
                                                                        componentName = "nostrum";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "eligendi";
                                                                            operand = "sint";
                                                                            operandType = "enim";
                                                                            operator = "hic";
                                                                            property = "animi";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "quas";
                                                                        event = "totam";
                                                                        importedValue = "molestias";
                                                                        model = "odio";
                                                                        property = "eaque";
                                                                        type = "saepe";
                                                                        userAttribute = "architecto";
                                                                        value = "quos";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("tempore") {{
                                                                            field = "iste";
                                                                            property = "assumenda";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("velit", new FormBindingElement("impedit", "cum") {{
                                                                                element = "doloremque";
                                                                                property = "delectus";
                                                                            }});
                                                                            put("ipsum", new FormBindingElement("deserunt", "doloremque") {{
                                                                                element = "adipisci";
                                                                                property = "saepe";
                                                                            }});
                                                                            put("quis", new FormBindingElement("architecto", "cupiditate") {{
                                                                                element = "veniam";
                                                                                property = "libero";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("possimus") {{
                                                                            field = "molestiae";
                                                                            property = "eligendi";
                                                                        }};
                                                                        componentName = "non";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "itaque";
                                                                            operand = "sed";
                                                                            operandType = "asperiores";
                                                                            operator = "veniam";
                                                                            property = "consequuntur";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "facere";
                                                                        event = "laudantium";
                                                                        importedValue = "odit";
                                                                        model = "pariatur";
                                                                        property = "amet";
                                                                        type = "exercitationem";
                                                                        userAttribute = "ab";
                                                                        value = "velit";
                                                                    }};
                                                                }};
                                                            }});
                                                        }};
                                                        name = "Randolph Huels";
                                                        properties = "blanditiis";
                                                        sourceId = "distinctio";
                                                    }}),
                                                    add(new ComponentChild("incidunt", "eos", "magnam") {{
                                                        children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                                            add(new ComponentChild() {{}}),
                                                            add(new ComponentChild() {{}}),
                                                            add(new ComponentChild() {{}}),
                                                        }};
                                                        componentType = "minus";
                                                        events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                                            put("facilis", new ComponentEvent() {{
                                                                action = "ipsum";
                                                                bindingEvent = "ad";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("consequuntur") {{
                                                                            field = "voluptatibus";
                                                                            property = "voluptatibus";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("labore", new FormBindingElement("reprehenderit", "nostrum") {{
                                                                                element = "rerum";
                                                                                property = "eos";
                                                                            }});
                                                                            put("neque", new FormBindingElement("rem", "eligendi") {{
                                                                                element = "iusto";
                                                                                property = "est";
                                                                            }});
                                                                            put("fugiat", new FormBindingElement("ducimus", "dolor") {{
                                                                                element = "unde";
                                                                                property = "officiis";
                                                                            }});
                                                                            put("dicta", new FormBindingElement("vitae", "dignissimos") {{
                                                                                element = "error";
                                                                                property = "porro";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ad") {{
                                                                            field = "esse";
                                                                            property = "fugiat";
                                                                        }};
                                                                        componentName = "aspernatur";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "delectus";
                                                                            operand = "iusto";
                                                                            operandType = "dignissimos";
                                                                            operator = "libero";
                                                                            property = "illo";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "ab";
                                                                        event = "incidunt";
                                                                        importedValue = "accusamus";
                                                                        model = "saepe";
                                                                        property = "tempore";
                                                                        type = "veniam";
                                                                        userAttribute = "eos";
                                                                        value = "reiciendis";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("reprehenderit", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("repellat") {{
                                                                                field = "praesentium";
                                                                                property = "nemo";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("sequi", new FormBindingElement("illo", "labore") {{
                                                                                    element = "nihil";
                                                                                    property = "deleniti";
                                                                                }});
                                                                                put("assumenda", new FormBindingElement("provident", "laudantium") {{
                                                                                    element = "aliquam";
                                                                                    property = "quisquam";
                                                                                }});
                                                                                put("repudiandae", new FormBindingElement("aspernatur", "nam") {{
                                                                                    element = "consequatur";
                                                                                    property = "maxime";
                                                                                }});
                                                                                put("expedita", new FormBindingElement("repudiandae", "rerum") {{
                                                                                    element = "quas";
                                                                                    property = "provident";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("vero") {{
                                                                                field = "dignissimos";
                                                                                property = "corporis";
                                                                            }};
                                                                            componentName = "similique";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "iure";
                                                                                operand = "dolorem";
                                                                                operandType = "commodi";
                                                                                operator = "impedit";
                                                                                property = "commodi";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "aut";
                                                                            event = "voluptatem";
                                                                            importedValue = "ad";
                                                                            model = "quae";
                                                                            property = "amet";
                                                                            type = "illum";
                                                                            userAttribute = "praesentium";
                                                                            value = "quidem";
                                                                        }});
                                                                        put("cum", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("dicta") {{
                                                                                field = "amet";
                                                                                property = "quasi";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("doloremque", new FormBindingElement("amet", "provident") {{
                                                                                    element = "earum";
                                                                                    property = "iusto";
                                                                                }});
                                                                                put("dolorum", new FormBindingElement("repudiandae", "consequatur") {{
                                                                                    element = "necessitatibus";
                                                                                    property = "provident";
                                                                                }});
                                                                                put("nemo", new FormBindingElement("facilis", "corrupti") {{
                                                                                    element = "molestiae";
                                                                                    property = "itaque";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("accusamus") {{
                                                                                field = "aperiam";
                                                                                property = "sint";
                                                                            }};
                                                                            componentName = "eos";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "dicta";
                                                                                operand = "voluptatem";
                                                                                operandType = "velit";
                                                                                operator = "dolor";
                                                                                property = "sunt";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "a";
                                                                            event = "dolor";
                                                                            importedValue = "occaecati";
                                                                            model = "atque";
                                                                            property = "beatae";
                                                                            type = "at";
                                                                            userAttribute = "labore";
                                                                            value = "minus";
                                                                        }});
                                                                        put("esse", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("rerum") {{
                                                                                field = "voluptatem";
                                                                                property = "perferendis";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("aperiam", new FormBindingElement("velit", "porro") {{
                                                                                    element = "dignissimos";
                                                                                    property = "repellat";
                                                                                }});
                                                                                put("provident", new FormBindingElement("dignissimos", "consectetur") {{
                                                                                    element = "consectetur";
                                                                                    property = "eligendi";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("temporibus") {{
                                                                                field = "soluta";
                                                                                property = "natus";
                                                                            }};
                                                                            componentName = "officia";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "tenetur";
                                                                                operand = "aspernatur";
                                                                                operandType = "quo";
                                                                                operator = "itaque";
                                                                                property = "illum";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "laborum";
                                                                            event = "dignissimos";
                                                                            importedValue = "vero";
                                                                            model = "qui";
                                                                            property = "consectetur";
                                                                            type = "repellat";
                                                                            userAttribute = "explicabo";
                                                                            value = "explicabo";
                                                                        }});
                                                                        put("exercitationem", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("ab") {{
                                                                                field = "nihil";
                                                                                property = "non";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("hic", new FormBindingElement("non", "distinctio") {{
                                                                                    element = "deserunt";
                                                                                    property = "delectus";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("labore") {{
                                                                                field = "in";
                                                                                property = "exercitationem";
                                                                            }};
                                                                            componentName = "numquam";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "modi";
                                                                                operand = "in";
                                                                                operandType = "explicabo";
                                                                                operator = "accusamus";
                                                                                property = "rem";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "aperiam";
                                                                            event = "odit";
                                                                            importedValue = "deleniti";
                                                                            model = "enim";
                                                                            property = "voluptate";
                                                                            type = "similique";
                                                                            userAttribute = "minima";
                                                                            value = "libero";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("modi") {{
                                                                            field = "magnam";
                                                                            property = "sit";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("nesciunt", new FormBindingElement("fugiat", "nostrum") {{
                                                                                element = "mollitia";
                                                                                property = "dignissimos";
                                                                            }});
                                                                            put("molestiae", new FormBindingElement("ab", "modi") {{
                                                                                element = "veniam";
                                                                                property = "reiciendis";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("eveniet") {{
                                                                            field = "aut";
                                                                            property = "aut";
                                                                        }};
                                                                        componentName = "odio";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "numquam";
                                                                            operand = "dolorum";
                                                                            operandType = "possimus";
                                                                            operator = "voluptate";
                                                                            property = "consectetur";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "nesciunt";
                                                                        event = "quaerat";
                                                                        importedValue = "itaque";
                                                                        model = "minus";
                                                                        property = "sunt";
                                                                        type = "distinctio";
                                                                        userAttribute = "iusto";
                                                                        value = "quas";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("amet") {{
                                                                            field = "et";
                                                                            property = "facilis";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("fuga", new FormBindingElement("aut", "quos") {{
                                                                                element = "alias";
                                                                                property = "rem";
                                                                            }});
                                                                            put("laudantium", new FormBindingElement("quae", "eaque") {{
                                                                                element = "repellendus";
                                                                                property = "veritatis";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("mollitia") {{
                                                                            field = "saepe";
                                                                            property = "delectus";
                                                                        }};
                                                                        componentName = "nulla";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "sed";
                                                                            operand = "voluptatem";
                                                                            operandType = "alias";
                                                                            operator = "eveniet";
                                                                            property = "hic";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "voluptatem";
                                                                        event = "incidunt";
                                                                        importedValue = "qui";
                                                                        model = "qui";
                                                                        property = "necessitatibus";
                                                                        type = "harum";
                                                                        userAttribute = "explicabo";
                                                                        value = "beatae";
                                                                    }};
                                                                    model = "aliquid";
                                                                    state = new MutationActionSetStateParameter("rem", "perferendis",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("facilis") {{
                                                                                            field = "reiciendis";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("iste", new FormBindingElement("ullam", "dolore") {{
                                                                                                element = "dicta";
                                                                                                property = "quos";
                                                                                            }});
                                                                                            put("modi", new FormBindingElement("modi", "consequuntur") {{
                                                                                                element = "itaque";
                                                                                                property = "maxime";
                                                                                            }});
                                                                                            put("assumenda", new FormBindingElement("impedit", "porro") {{
                                                                                                element = "vero";
                                                                                                property = "doloribus";
                                                                                            }});
                                                                                            put("accusamus", new FormBindingElement("ab", "sint") {{
                                                                                                element = "totam";
                                                                                                property = "reiciendis";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("nihil") {{
                                                                                            field = "esse";
                                                                                        }};;
                                                                                        componentName = "iure";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "nesciunt";
                                                                                            operand = "debitis";
                                                                                            operandType = "vel";
                                                                                            operator = "neque";
                                                                                            property = "corporis";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "voluptas";
                                                                                        event = "consequuntur";
                                                                                        importedValue = "officia";
                                                                                        model = "reprehenderit";
                                                                                        property = "distinctio";
                                                                                        type = "eius";
                                                                                        userAttribute = "ipsa";
                                                                                        value = "rem";
                                                                                    }};) {{
                                                                        componentName = "modi";
                                                                        property = "optio";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("officia") {{
                                                                                field = "voluptatibus";
                                                                                property = "molestias";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("totam", new FormBindingElement("ea", "impedit") {{
                                                                                    element = "sequi";
                                                                                    property = "aliquid";
                                                                                }});
                                                                                put("ducimus", new FormBindingElement("reiciendis", "repellat") {{
                                                                                    element = "odit";
                                                                                    property = "velit";
                                                                                }});
                                                                                put("nulla", new FormBindingElement("accusamus", "doloremque") {{
                                                                                    element = "laborum";
                                                                                    property = "natus";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("recusandae") {{
                                                                                field = "nisi";
                                                                                property = "rerum";
                                                                            }};
                                                                            componentName = "voluptates";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "rem";
                                                                                operand = "quia";
                                                                                operandType = "ullam";
                                                                                operator = "quisquam";
                                                                                property = "dicta";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "voluptatibus";
                                                                            event = "eligendi";
                                                                            importedValue = "quae";
                                                                            model = "officiis";
                                                                            property = "architecto";
                                                                            type = "architecto";
                                                                            userAttribute = "enim";
                                                                            value = "optio";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("veniam") {{
                                                                            field = "maiores";
                                                                            property = "accusantium";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("neque", new FormBindingElement("quos", "doloribus") {{
                                                                                element = "facere";
                                                                                property = "aliquam";
                                                                            }});
                                                                            put("fugiat", new FormBindingElement("velit", "vitae") {{
                                                                                element = "est";
                                                                                property = "delectus";
                                                                            }});
                                                                            put("nesciunt", new FormBindingElement("repellat", "nemo") {{
                                                                                element = "similique";
                                                                                property = "illo";
                                                                            }});
                                                                            put("doloribus", new FormBindingElement("incidunt", "explicabo") {{
                                                                                element = "possimus";
                                                                                property = "unde";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("optio") {{
                                                                            field = "ipsam";
                                                                            property = "cupiditate";
                                                                        }};
                                                                        componentName = "alias";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "nesciunt";
                                                                            operand = "commodi";
                                                                            operandType = "sapiente";
                                                                            operator = "consequuntur";
                                                                            property = "veniam";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "debitis";
                                                                        event = "officia";
                                                                        importedValue = "sint";
                                                                        model = "ut";
                                                                        property = "numquam";
                                                                        type = "tenetur";
                                                                        userAttribute = "adipisci";
                                                                        value = "libero";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("ex") {{
                                                                            field = "in";
                                                                            property = "minima";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("ab", new FormBindingElement("nisi", "quisquam") {{
                                                                                element = "beatae";
                                                                                property = "hic";
                                                                            }});
                                                                            put("dolor", new FormBindingElement("minima", "architecto") {{
                                                                                element = "ducimus";
                                                                                property = "fuga";
                                                                            }});
                                                                            put("qui", new FormBindingElement("incidunt", "adipisci") {{
                                                                                element = "aliquid";
                                                                                property = "magni";
                                                                            }});
                                                                            put("praesentium", new FormBindingElement("expedita", "facilis") {{
                                                                                element = "dolor";
                                                                                property = "exercitationem";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("nemo") {{
                                                                            field = "impedit";
                                                                            property = "sit";
                                                                        }};
                                                                        componentName = "culpa";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "amet";
                                                                            operand = "deserunt";
                                                                            operandType = "modi";
                                                                            operator = "veniam";
                                                                            property = "quod";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "itaque";
                                                                        event = "a";
                                                                        importedValue = "quisquam";
                                                                        model = "enim";
                                                                        property = "doloribus";
                                                                        type = "assumenda";
                                                                        userAttribute = "officiis";
                                                                        value = "architecto";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("ipsa") {{
                                                                            field = "alias";
                                                                            property = "culpa";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("necessitatibus", new FormBindingElement("vel", "perspiciatis") {{
                                                                                element = "quia";
                                                                                property = "dicta";
                                                                            }});
                                                                            put("debitis", new FormBindingElement("accusantium", "perferendis") {{
                                                                                element = "ullam";
                                                                                property = "architecto";
                                                                            }});
                                                                            put("veritatis", new FormBindingElement("iure", "quibusdam") {{
                                                                                element = "provident";
                                                                                property = "cumque";
                                                                            }});
                                                                            put("quod", new FormBindingElement("velit", "magnam") {{
                                                                                element = "nemo";
                                                                                property = "recusandae";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("sed") {{
                                                                            field = "dignissimos";
                                                                            property = "laboriosam";
                                                                        }};
                                                                        componentName = "odio";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "provident";
                                                                            operand = "cum";
                                                                            operandType = "doloribus";
                                                                            operator = "facilis";
                                                                            property = "quidem";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "itaque";
                                                                        event = "laboriosam";
                                                                        importedValue = "unde";
                                                                        model = "modi";
                                                                        property = "perspiciatis";
                                                                        type = "hic";
                                                                        userAttribute = "cum";
                                                                        value = "aspernatur";
                                                                    }};
                                                                }};
                                                            }});
                                                            put("libero", new ComponentEvent() {{
                                                                action = "nam";
                                                                bindingEvent = "incidunt";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("id") {{
                                                                            field = "recusandae";
                                                                            property = "quod";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("autem", new FormBindingElement("illum", "nemo") {{
                                                                                element = "quo";
                                                                                property = "nesciunt";
                                                                            }});
                                                                            put("illum", new FormBindingElement("mollitia", "assumenda") {{
                                                                                element = "facilis";
                                                                                property = "non";
                                                                            }});
                                                                            put("recusandae", new FormBindingElement("ad", "facere") {{
                                                                                element = "distinctio";
                                                                                property = "pariatur";
                                                                            }});
                                                                            put("laborum", new FormBindingElement("incidunt", "maxime") {{
                                                                                element = "eveniet";
                                                                                property = "laborum";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("suscipit") {{
                                                                            field = "ipsam";
                                                                            property = "alias";
                                                                        }};
                                                                        componentName = "deserunt";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "laborum";
                                                                            operand = "est";
                                                                            operandType = "occaecati";
                                                                            operator = "labore";
                                                                            property = "quo";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "perferendis";
                                                                        event = "fugit";
                                                                        importedValue = "aliquid";
                                                                        model = "magnam";
                                                                        property = "quaerat";
                                                                        type = "eligendi";
                                                                        userAttribute = "hic";
                                                                        value = "nostrum";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("unde", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("mollitia") {{
                                                                                field = "nulla";
                                                                                property = "error";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("nostrum", new FormBindingElement("fuga", "facere") {{
                                                                                    element = "esse";
                                                                                    property = "corrupti";
                                                                                }});
                                                                                put("impedit", new FormBindingElement("quod", "laboriosam") {{
                                                                                    element = "quasi";
                                                                                    property = "deserunt";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("facere") {{
                                                                                field = "doloremque";
                                                                                property = "voluptatem";
                                                                            }};
                                                                            componentName = "necessitatibus";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "consequatur";
                                                                                operand = "eaque";
                                                                                operandType = "architecto";
                                                                                operator = "similique";
                                                                                property = "porro";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "blanditiis";
                                                                            event = "quae";
                                                                            importedValue = "magni";
                                                                            model = "officiis";
                                                                            property = "sed";
                                                                            type = "necessitatibus";
                                                                            userAttribute = "impedit";
                                                                            value = "ipsa";
                                                                        }});
                                                                        put("excepturi", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("laudantium") {{
                                                                                field = "a";
                                                                                property = "maiores";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("alias", new FormBindingElement("dicta", "suscipit") {{
                                                                                    element = "asperiores";
                                                                                    property = "rem";
                                                                                }});
                                                                                put("earum", new FormBindingElement("eius", "esse") {{
                                                                                    element = "doloribus";
                                                                                    property = "velit";
                                                                                }});
                                                                                put("in", new FormBindingElement("neque", "vero") {{
                                                                                    element = "eligendi";
                                                                                    property = "quasi";
                                                                                }});
                                                                                put("excepturi", new FormBindingElement("impedit", "beatae") {{
                                                                                    element = "accusantium";
                                                                                    property = "qui";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("odit") {{
                                                                                field = "incidunt";
                                                                                property = "dicta";
                                                                            }};
                                                                            componentName = "corporis";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "alias";
                                                                                operand = "error";
                                                                                operandType = "vel";
                                                                                operator = "accusantium";
                                                                                property = "id";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "laboriosam";
                                                                            event = "ex";
                                                                            importedValue = "quas";
                                                                            model = "veritatis";
                                                                            property = "ullam";
                                                                            type = "quae";
                                                                            userAttribute = "similique";
                                                                            value = "incidunt";
                                                                        }});
                                                                        put("quam", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("delectus") {{
                                                                                field = "magni";
                                                                                property = "deserunt";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("sed", new FormBindingElement("quis", "cupiditate") {{
                                                                                    element = "nesciunt";
                                                                                    property = "maxime";
                                                                                }});
                                                                                put("aliquam", new FormBindingElement("laudantium", "velit") {{
                                                                                    element = "excepturi";
                                                                                    property = "maiores";
                                                                                }});
                                                                                put("reiciendis", new FormBindingElement("ipsa", "quisquam") {{
                                                                                    element = "amet";
                                                                                    property = "nemo";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("molestiae") {{
                                                                                field = "tenetur";
                                                                                property = "quas";
                                                                            }};
                                                                            componentName = "aliquid";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "a";
                                                                                operand = "nobis";
                                                                                operandType = "perspiciatis";
                                                                                operator = "accusantium";
                                                                                property = "dicta";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "minus";
                                                                            event = "commodi";
                                                                            importedValue = "eveniet";
                                                                            model = "porro";
                                                                            property = "tempore";
                                                                            type = "quidem";
                                                                            userAttribute = "modi";
                                                                            value = "voluptates";
                                                                        }});
                                                                        put("fugit", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("eligendi") {{
                                                                                field = "eius";
                                                                                property = "sequi";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("esse", new FormBindingElement("repellat", "a") {{
                                                                                    element = "blanditiis";
                                                                                    property = "sint";
                                                                                }});
                                                                                put("animi", new FormBindingElement("nulla", "deserunt") {{
                                                                                    element = "maiores";
                                                                                    property = "itaque";
                                                                                }});
                                                                                put("corporis", new FormBindingElement("enim", "officia") {{
                                                                                    element = "velit";
                                                                                    property = "officiis";
                                                                                }});
                                                                                put("saepe", new FormBindingElement("accusantium", "officia") {{
                                                                                    element = "eum";
                                                                                    property = "repudiandae";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("blanditiis") {{
                                                                                field = "impedit";
                                                                                property = "quasi";
                                                                            }};
                                                                            componentName = "eius";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "eos";
                                                                                operand = "nobis";
                                                                                operandType = "natus";
                                                                                operator = "minus";
                                                                                property = "quia";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "magnam";
                                                                            event = "reprehenderit";
                                                                            importedValue = "quod";
                                                                            model = "quos";
                                                                            property = "corrupti";
                                                                            type = "amet";
                                                                            userAttribute = "molestiae";
                                                                            value = "amet";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("perferendis") {{
                                                                            field = "laborum";
                                                                            property = "modi";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("architecto", new FormBindingElement("sunt", "maiores") {{
                                                                                element = "molestias";
                                                                                property = "dolore";
                                                                            }});
                                                                            put("neque", new FormBindingElement("veniam", "ipsam") {{
                                                                                element = "odit";
                                                                                property = "earum";
                                                                            }});
                                                                            put("eaque", new FormBindingElement("nihil", "ad") {{
                                                                                element = "exercitationem";
                                                                                property = "veniam";
                                                                            }});
                                                                            put("nisi", new FormBindingElement("quibusdam", "nemo") {{
                                                                                element = "tenetur";
                                                                                property = "quis";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("sit") {{
                                                                            field = "suscipit";
                                                                            property = "pariatur";
                                                                        }};
                                                                        componentName = "quidem";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "perferendis";
                                                                            operand = "id";
                                                                            operandType = "sapiente";
                                                                            operator = "sed";
                                                                            property = "possimus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "repellat";
                                                                        event = "repudiandae";
                                                                        importedValue = "architecto";
                                                                        model = "adipisci";
                                                                        property = "pariatur";
                                                                        type = "harum";
                                                                        userAttribute = "dolore";
                                                                        value = "voluptatibus";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("minus") {{
                                                                            field = "iure";
                                                                            property = "explicabo";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("dolorum", new FormBindingElement("praesentium", "error") {{
                                                                                element = "velit";
                                                                                property = "earum";
                                                                            }});
                                                                            put("non", new FormBindingElement("accusamus", "harum") {{
                                                                                element = "quasi";
                                                                                property = "mollitia";
                                                                            }});
                                                                            put("cumque", new FormBindingElement("corrupti", "eaque") {{
                                                                                element = "doloremque";
                                                                                property = "expedita";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("excepturi") {{
                                                                            field = "deserunt";
                                                                            property = "aliquid";
                                                                        }};
                                                                        componentName = "magni";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "possimus";
                                                                            operand = "dolor";
                                                                            operandType = "rerum";
                                                                            operator = "sed";
                                                                            property = "accusamus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "optio";
                                                                        event = "delectus";
                                                                        importedValue = "minus";
                                                                        model = "quo";
                                                                        property = "quos";
                                                                        type = "asperiores";
                                                                        userAttribute = "voluptatum";
                                                                        value = "iste";
                                                                    }};
                                                                    model = "corporis";
                                                                    state = new MutationActionSetStateParameter("tenetur", "autem",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("quidem") {{
                                                                                            field = "totam";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("deserunt", new FormBindingElement("voluptas", "animi") {{
                                                                                                element = "magni";
                                                                                                property = "nihil";
                                                                                            }});
                                                                                            put("commodi", new FormBindingElement("aut", "dolore") {{
                                                                                                element = "alias";
                                                                                                property = "fuga";
                                                                                            }});
                                                                                            put("maxime", new FormBindingElement("ullam", "eligendi") {{
                                                                                                element = "aliquam";
                                                                                                property = "iste";
                                                                                            }});
                                                                                            put("placeat", new FormBindingElement("unde", "illo") {{
                                                                                                element = "voluptas";
                                                                                                property = "occaecati";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("nihil") {{
                                                                                            field = "inventore";
                                                                                        }};;
                                                                                        componentName = "libero";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "quasi";
                                                                                            operand = "cumque";
                                                                                            operandType = "dicta";
                                                                                            operator = "harum";
                                                                                            property = "facere";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "facilis";
                                                                                        event = "beatae";
                                                                                        importedValue = "cumque";
                                                                                        model = "delectus";
                                                                                        property = "labore";
                                                                                        type = "expedita";
                                                                                        userAttribute = "corrupti";
                                                                                        value = "rem";
                                                                                    }};) {{
                                                                        componentName = "accusantium";
                                                                        property = "illo";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("nostrum") {{
                                                                                field = "aut";
                                                                                property = "doloribus";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("possimus", new FormBindingElement("vel", "sapiente") {{
                                                                                    element = "neque";
                                                                                    property = "pariatur";
                                                                                }});
                                                                                put("mollitia", new FormBindingElement("aperiam", "non") {{
                                                                                    element = "quae";
                                                                                    property = "quos";
                                                                                }});
                                                                                put("voluptates", new FormBindingElement("quisquam", "quas") {{
                                                                                    element = "ad";
                                                                                    property = "aliquam";
                                                                                }});
                                                                                put("consequuntur", new FormBindingElement("aliquid", "laudantium") {{
                                                                                    element = "maiores";
                                                                                    property = "inventore";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("aliquid") {{
                                                                                field = "est";
                                                                                property = "dolor";
                                                                            }};
                                                                            componentName = "consectetur";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "rem";
                                                                                operand = "voluptatum";
                                                                                operandType = "ducimus";
                                                                                operator = "adipisci";
                                                                                property = "recusandae";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "tempora";
                                                                            event = "blanditiis";
                                                                            importedValue = "numquam";
                                                                            model = "sequi";
                                                                            property = "voluptatum";
                                                                            type = "sit";
                                                                            userAttribute = "rerum";
                                                                            value = "veritatis";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("cum") {{
                                                                            field = "atque";
                                                                            property = "officiis";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("sapiente", new FormBindingElement("quod", "minus") {{
                                                                                element = "quo";
                                                                                property = "incidunt";
                                                                            }});
                                                                            put("porro", new FormBindingElement("occaecati", "libero") {{
                                                                                element = "id";
                                                                                property = "excepturi";
                                                                            }});
                                                                            put("quo", new FormBindingElement("maxime", "accusantium") {{
                                                                                element = "esse";
                                                                                property = "hic";
                                                                            }});
                                                                            put("soluta", new FormBindingElement("eligendi", "recusandae") {{
                                                                                element = "fugit";
                                                                                property = "pariatur";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("laudantium") {{
                                                                            field = "veritatis";
                                                                            property = "aut";
                                                                        }};
                                                                        componentName = "iusto";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "voluptates";
                                                                            operand = "tempora";
                                                                            operandType = "magni";
                                                                            operator = "rerum";
                                                                            property = "doloremque";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "voluptatem";
                                                                        event = "eum";
                                                                        importedValue = "at";
                                                                        model = "eum";
                                                                        property = "reprehenderit";
                                                                        type = "voluptatum";
                                                                        userAttribute = "blanditiis";
                                                                        value = "nihil";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("deserunt") {{
                                                                            field = "atque";
                                                                            property = "rerum";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("nostrum", new FormBindingElement("est", "enim") {{
                                                                                element = "atque";
                                                                                property = "architecto";
                                                                            }});
                                                                            put("rem", new FormBindingElement("quas", "placeat") {{
                                                                                element = "magni";
                                                                                property = "quae";
                                                                            }});
                                                                            put("enim", new FormBindingElement("saepe", "delectus") {{
                                                                                element = "labore";
                                                                                property = "sapiente";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("cumque") {{
                                                                            field = "officia";
                                                                            property = "natus";
                                                                        }};
                                                                        componentName = "natus";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "doloribus";
                                                                            operand = "quia";
                                                                            operandType = "officiis";
                                                                            operator = "mollitia";
                                                                            property = "cumque";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "quis";
                                                                        event = "enim";
                                                                        importedValue = "eum";
                                                                        model = "nemo";
                                                                        property = "illum";
                                                                        type = "nesciunt";
                                                                        userAttribute = "sit";
                                                                        value = "odio";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("recusandae") {{
                                                                            field = "minus";
                                                                            property = "asperiores";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("praesentium", new FormBindingElement("sit", "aliquid") {{
                                                                                element = "dicta";
                                                                                property = "fugit";
                                                                            }});
                                                                            put("necessitatibus", new FormBindingElement("sunt", "nesciunt") {{
                                                                                element = "sed";
                                                                                property = "deleniti";
                                                                            }});
                                                                            put("delectus", new FormBindingElement("deserunt", "modi") {{
                                                                                element = "laborum";
                                                                                property = "aliquam";
                                                                            }});
                                                                            put("sunt", new FormBindingElement("voluptatum", "ipsa") {{
                                                                                element = "impedit";
                                                                                property = "eius";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("repellat") {{
                                                                            field = "at";
                                                                            property = "dolorem";
                                                                        }};
                                                                        componentName = "aspernatur";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "sequi";
                                                                            operand = "fugit";
                                                                            operandType = "fuga";
                                                                            operator = "hic";
                                                                            property = "eaque";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "dolorem";
                                                                        event = "architecto";
                                                                        importedValue = "aperiam";
                                                                        model = "aspernatur";
                                                                        property = "nulla";
                                                                        type = "enim";
                                                                        userAttribute = "illo";
                                                                        value = "magnam";
                                                                    }};
                                                                }};
                                                            }});
                                                            put("delectus", new ComponentEvent() {{
                                                                action = "numquam";
                                                                bindingEvent = "optio";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("repellat") {{
                                                                            field = "nobis";
                                                                            property = "ex";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("deleniti", new FormBindingElement("excepturi", "aliquid") {{
                                                                                element = "expedita";
                                                                                property = "hic";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("similique") {{
                                                                            field = "sed";
                                                                            property = "beatae";
                                                                        }};
                                                                        componentName = "ea";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "dolore";
                                                                            operand = "tenetur";
                                                                            operandType = "dignissimos";
                                                                            operator = "esse";
                                                                            property = "animi";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "laudantium";
                                                                        event = "esse";
                                                                        importedValue = "eveniet";
                                                                        model = "earum";
                                                                        property = "velit";
                                                                        type = "officiis";
                                                                        userAttribute = "eius";
                                                                        value = "rerum";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("dignissimos", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("impedit") {{
                                                                                field = "ipsam";
                                                                                property = "explicabo";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("quis", new FormBindingElement("ut", "quaerat") {{
                                                                                    element = "facilis";
                                                                                    property = "ipsum";
                                                                                }});
                                                                                put("architecto", new FormBindingElement("dolor", "expedita") {{
                                                                                    element = "praesentium";
                                                                                    property = "eveniet";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("illo") {{
                                                                                field = "libero";
                                                                                property = "iste";
                                                                            }};
                                                                            componentName = "minus";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "temporibus";
                                                                                operand = "sint";
                                                                                operandType = "iusto";
                                                                                operator = "enim";
                                                                                property = "accusamus";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "aperiam";
                                                                            event = "voluptates";
                                                                            importedValue = "laudantium";
                                                                            model = "tempora";
                                                                            property = "quae";
                                                                            type = "omnis";
                                                                            userAttribute = "illum";
                                                                            value = "rem";
                                                                        }});
                                                                        put("tenetur", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("earum") {{
                                                                                field = "deleniti";
                                                                                property = "modi";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("aliquam", new FormBindingElement("sequi", "saepe") {{
                                                                                    element = "labore";
                                                                                    property = "maiores";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("debitis") {{
                                                                                field = "consequatur";
                                                                                property = "esse";
                                                                            }};
                                                                            componentName = "facere";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "cumque";
                                                                                operand = "aliquam";
                                                                                operandType = "dolorum";
                                                                                operator = "deserunt";
                                                                                property = "ad";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "reiciendis";
                                                                            event = "sequi";
                                                                            importedValue = "porro";
                                                                            model = "laborum";
                                                                            property = "nobis";
                                                                            type = "quibusdam";
                                                                            userAttribute = "omnis";
                                                                            value = "aut";
                                                                        }});
                                                                        put("ipsam", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("reprehenderit") {{
                                                                                field = "officia";
                                                                                property = "cupiditate";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("necessitatibus", new FormBindingElement("nisi", "molestiae") {{
                                                                                    element = "accusantium";
                                                                                    property = "ad";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("sed") {{
                                                                                field = "quia";
                                                                                property = "laudantium";
                                                                            }};
                                                                            componentName = "odit";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "expedita";
                                                                                operand = "eos";
                                                                                operandType = "repellendus";
                                                                                operator = "nesciunt";
                                                                                property = "ipsa";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "sint";
                                                                            event = "dolore";
                                                                            importedValue = "esse";
                                                                            model = "accusantium";
                                                                            property = "distinctio";
                                                                            type = "sapiente";
                                                                            userAttribute = "quam";
                                                                            value = "est";
                                                                        }});
                                                                        put("aliquam", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("voluptatum") {{
                                                                                field = "delectus";
                                                                                property = "culpa";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("quod", new FormBindingElement("non", "ullam") {{
                                                                                    element = "voluptatibus";
                                                                                    property = "voluptas";
                                                                                }});
                                                                                put("laborum", new FormBindingElement("animi", "recusandae") {{
                                                                                    element = "voluptas";
                                                                                    property = "doloribus";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("necessitatibus") {{
                                                                                field = "corporis";
                                                                                property = "non";
                                                                            }};
                                                                            componentName = "distinctio";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "laboriosam";
                                                                                operand = "voluptatem";
                                                                                operandType = "optio";
                                                                                operator = "sequi";
                                                                                property = "sunt";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "vitae";
                                                                            event = "voluptatibus";
                                                                            importedValue = "doloremque";
                                                                            model = "sed";
                                                                            property = "amet";
                                                                            type = "rerum";
                                                                            userAttribute = "in";
                                                                            value = "nostrum";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("dolor") {{
                                                                            field = "temporibus";
                                                                            property = "ratione";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("dignissimos", new FormBindingElement("vitae", "est") {{
                                                                                element = "reiciendis";
                                                                                property = "itaque";
                                                                            }});
                                                                            put("accusantium", new FormBindingElement("quos", "possimus") {{
                                                                                element = "quod";
                                                                                property = "minus";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("provident") {{
                                                                            field = "maiores";
                                                                            property = "odio";
                                                                        }};
                                                                        componentName = "sapiente";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "similique";
                                                                            operand = "nesciunt";
                                                                            operandType = "provident";
                                                                            operator = "ex";
                                                                            property = "repellendus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "unde";
                                                                        event = "alias";
                                                                        importedValue = "impedit";
                                                                        model = "sequi";
                                                                        property = "commodi";
                                                                        type = "labore";
                                                                        userAttribute = "expedita";
                                                                        value = "in";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("enim") {{
                                                                            field = "quisquam";
                                                                            property = "sunt";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("maiores", new FormBindingElement("impedit", "accusamus") {{
                                                                                element = "distinctio";
                                                                                property = "mollitia";
                                                                            }});
                                                                            put("et", new FormBindingElement("cum", "dicta") {{
                                                                                element = "quas";
                                                                                property = "blanditiis";
                                                                            }});
                                                                            put("impedit", new FormBindingElement("repudiandae", "sed") {{
                                                                                element = "tempora";
                                                                                property = "eveniet";
                                                                            }});
                                                                            put("impedit", new FormBindingElement("vel", "eligendi") {{
                                                                                element = "quas";
                                                                                property = "impedit";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("beatae") {{
                                                                            field = "recusandae";
                                                                            property = "ex";
                                                                        }};
                                                                        componentName = "veritatis";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "itaque";
                                                                            operand = "vero";
                                                                            operandType = "quidem";
                                                                            operator = "illo";
                                                                            property = "quo";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "dignissimos";
                                                                        event = "minus";
                                                                        importedValue = "distinctio";
                                                                        model = "possimus";
                                                                        property = "cum";
                                                                        type = "suscipit";
                                                                        userAttribute = "saepe";
                                                                        value = "earum";
                                                                    }};
                                                                    model = "quod";
                                                                    state = new MutationActionSetStateParameter("repudiandae", "aspernatur",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("sapiente") {{
                                                                                            field = "neque";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("suscipit", new FormBindingElement("doloremque", "perferendis") {{
                                                                                                element = "harum";
                                                                                                property = "ducimus";
                                                                                            }});
                                                                                            put("laudantium", new FormBindingElement("molestiae", "quis") {{
                                                                                                element = "iusto";
                                                                                                property = "corrupti";
                                                                                            }});
                                                                                            put("iure", new FormBindingElement("amet", "sapiente") {{
                                                                                                element = "ab";
                                                                                                property = "quaerat";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("corporis") {{
                                                                                            field = "est";
                                                                                        }};;
                                                                                        componentName = "iure";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "provident";
                                                                                            operand = "laudantium";
                                                                                            operandType = "nam";
                                                                                            operator = "nemo";
                                                                                            property = "enim";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "ipsam";
                                                                                        event = "minima";
                                                                                        importedValue = "tempora";
                                                                                        model = "perferendis";
                                                                                        property = "corrupti";
                                                                                        type = "doloremque";
                                                                                        userAttribute = "fugiat";
                                                                                        value = "numquam";
                                                                                    }};) {{
                                                                        componentName = "nihil";
                                                                        property = "quaerat";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("laudantium") {{
                                                                                field = "ipsum";
                                                                                property = "ducimus";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("deserunt", new FormBindingElement("sequi", "beatae") {{
                                                                                    element = "odit";
                                                                                    property = "ad";
                                                                                }});
                                                                                put("iusto", new FormBindingElement("odio", "nulla") {{
                                                                                    element = "esse";
                                                                                    property = "magnam";
                                                                                }});
                                                                                put("impedit", new FormBindingElement("exercitationem", "laborum") {{
                                                                                    element = "cupiditate";
                                                                                    property = "illo";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("maxime") {{
                                                                                field = "illum";
                                                                                property = "fugit";
                                                                            }};
                                                                            componentName = "dolorum";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "nostrum";
                                                                                operand = "illum";
                                                                                operandType = "quibusdam";
                                                                                operator = "commodi";
                                                                                property = "esse";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "explicabo";
                                                                            event = "consectetur";
                                                                            importedValue = "temporibus";
                                                                            model = "optio";
                                                                            property = "ipsa";
                                                                            type = "maiores";
                                                                            userAttribute = "exercitationem";
                                                                            value = "culpa";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("nobis") {{
                                                                            field = "doloremque";
                                                                            property = "cum";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("porro", new FormBindingElement("cumque", "soluta") {{
                                                                                element = "impedit";
                                                                                property = "nisi";
                                                                            }});
                                                                            put("fugiat", new FormBindingElement("enim", "maiores") {{
                                                                                element = "laboriosam";
                                                                                property = "nam";
                                                                            }});
                                                                            put("consectetur", new FormBindingElement("cupiditate", "voluptatem") {{
                                                                                element = "necessitatibus";
                                                                                property = "maxime";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("accusantium") {{
                                                                            field = "provident";
                                                                            property = "adipisci";
                                                                        }};
                                                                        componentName = "magnam";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "omnis";
                                                                            operand = "explicabo";
                                                                            operandType = "vel";
                                                                            operator = "cum";
                                                                            property = "id";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "possimus";
                                                                        event = "fugit";
                                                                        importedValue = "ipsam";
                                                                        model = "nostrum";
                                                                        property = "sequi";
                                                                        type = "voluptatum";
                                                                        userAttribute = "quasi";
                                                                        value = "error";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("voluptate") {{
                                                                            field = "nobis";
                                                                            property = "tempora";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("expedita", new FormBindingElement("possimus", "fugit") {{
                                                                                element = "aperiam";
                                                                                property = "voluptates";
                                                                            }});
                                                                            put("voluptatem", new FormBindingElement("ea", "eos") {{
                                                                                element = "repudiandae";
                                                                                property = "corporis";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("hic") {{
                                                                            field = "aliquam";
                                                                            property = "blanditiis";
                                                                        }};
                                                                        componentName = "maiores";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "autem";
                                                                            operand = "nesciunt";
                                                                            operandType = "cupiditate";
                                                                            operator = "animi";
                                                                            property = "provident";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "beatae";
                                                                        event = "ipsa";
                                                                        importedValue = "mollitia";
                                                                        model = "nam";
                                                                        property = "assumenda";
                                                                        type = "quo";
                                                                        userAttribute = "fuga";
                                                                        value = "tempore";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("suscipit") {{
                                                                            field = "commodi";
                                                                            property = "fugit";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("nisi", new FormBindingElement("laboriosam", "accusamus") {{
                                                                                element = "aliquid";
                                                                                property = "provident";
                                                                            }});
                                                                            put("ab", new FormBindingElement("eaque", "alias") {{
                                                                                element = "itaque";
                                                                                property = "quisquam";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("vitae") {{
                                                                            field = "qui";
                                                                            property = "consequuntur";
                                                                        }};
                                                                        componentName = "quidem";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "amet";
                                                                            operand = "exercitationem";
                                                                            operandType = "illum";
                                                                            operator = "praesentium";
                                                                            property = "unde";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "similique";
                                                                        event = "eligendi";
                                                                        importedValue = "tempore";
                                                                        model = "amet";
                                                                        property = "debitis";
                                                                        type = "nobis";
                                                                        userAttribute = "asperiores";
                                                                        value = "temporibus";
                                                                    }};
                                                                }};
                                                            }});
                                                            put("id", new ComponentEvent() {{
                                                                action = "atque";
                                                                bindingEvent = "quibusdam";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("veniam") {{
                                                                            field = "sit";
                                                                            property = "quo";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("provident", new FormBindingElement("doloremque", "ipsum") {{
                                                                                element = "vero";
                                                                                property = "earum";
                                                                            }});
                                                                            put("alias", new FormBindingElement("perspiciatis", "quam") {{
                                                                                element = "doloremque";
                                                                                property = "tempora";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ex") {{
                                                                            field = "atque";
                                                                            property = "officia";
                                                                        }};
                                                                        componentName = "architecto";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "laborum";
                                                                            operand = "veritatis";
                                                                            operandType = "quod";
                                                                            operator = "a";
                                                                            property = "qui";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "accusantium";
                                                                        event = "commodi";
                                                                        importedValue = "atque";
                                                                        model = "totam";
                                                                        property = "tenetur";
                                                                        type = "voluptate";
                                                                        userAttribute = "quam";
                                                                        value = "quod";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("sapiente", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("voluptate") {{
                                                                                field = "reiciendis";
                                                                                property = "quod";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("facere", new FormBindingElement("ab", "ex") {{
                                                                                    element = "maxime";
                                                                                    property = "fuga";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("sed") {{
                                                                                field = "consectetur";
                                                                                property = "maiores";
                                                                            }};
                                                                            componentName = "animi";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "eligendi";
                                                                                operand = "voluptatum";
                                                                                operandType = "perferendis";
                                                                                operator = "laborum";
                                                                                property = "omnis";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "nihil";
                                                                            event = "tenetur";
                                                                            importedValue = "sapiente";
                                                                            model = "velit";
                                                                            property = "adipisci";
                                                                            type = "non";
                                                                            userAttribute = "optio";
                                                                            value = "illum";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("molestias") {{
                                                                            field = "at";
                                                                            property = "tenetur";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("esse", new FormBindingElement("voluptates", "eum") {{
                                                                                element = "laborum";
                                                                                property = "perspiciatis";
                                                                            }});
                                                                            put("quasi", new FormBindingElement("commodi", "porro") {{
                                                                                element = "quas";
                                                                                property = "odio";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("quidem") {{
                                                                            field = "aliquid";
                                                                            property = "mollitia";
                                                                        }};
                                                                        componentName = "explicabo";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "nulla";
                                                                            operand = "magni";
                                                                            operandType = "natus";
                                                                            operator = "illum";
                                                                            property = "a";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "impedit";
                                                                        event = "unde";
                                                                        importedValue = "ut";
                                                                        model = "facere";
                                                                        property = "voluptas";
                                                                        type = "doloribus";
                                                                        userAttribute = "recusandae";
                                                                        value = "quisquam";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("iste") {{
                                                                            field = "facere";
                                                                            property = "dignissimos";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("dolor", new FormBindingElement("eaque", "eum") {{
                                                                                element = "sint";
                                                                                property = "aperiam";
                                                                            }});
                                                                            put("laboriosam", new FormBindingElement("assumenda", "explicabo") {{
                                                                                element = "laborum";
                                                                                property = "autem";
                                                                            }});
                                                                            put("fugiat", new FormBindingElement("alias", "velit") {{
                                                                                element = "doloremque";
                                                                                property = "voluptatem";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("velit") {{
                                                                            field = "ullam";
                                                                            property = "quis";
                                                                        }};
                                                                        componentName = "ratione";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "maxime";
                                                                            operand = "recusandae";
                                                                            operandType = "cumque";
                                                                            operator = "doloremque";
                                                                            property = "totam";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "iure";
                                                                        event = "maiores";
                                                                        importedValue = "est";
                                                                        model = "fugit";
                                                                        property = "veritatis";
                                                                        type = "necessitatibus";
                                                                        userAttribute = "iste";
                                                                        value = "dicta";
                                                                    }};
                                                                    model = "ipsam";
                                                                    state = new MutationActionSetStateParameter("earum", "tenetur",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("assumenda") {{
                                                                                            field = "dolore";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("ullam", new FormBindingElement("ex", "quibusdam") {{
                                                                                                element = "perspiciatis";
                                                                                                property = "alias";
                                                                                            }});
                                                                                            put("dicta", new FormBindingElement("neque", "quibusdam") {{
                                                                                                element = "quia";
                                                                                                property = "commodi";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("numquam") {{
                                                                                            field = "rem";
                                                                                        }};;
                                                                                        componentName = "officiis";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "neque";
                                                                                            operand = "corporis";
                                                                                            operandType = "quod";
                                                                                            operator = "dolores";
                                                                                            property = "placeat";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "excepturi";
                                                                                        event = "recusandae";
                                                                                        importedValue = "quos";
                                                                                        model = "dicta";
                                                                                        property = "sapiente";
                                                                                        type = "ipsum";
                                                                                        userAttribute = "consequatur";
                                                                                        value = "soluta";
                                                                                    }};) {{
                                                                        componentName = "consequuntur";
                                                                        property = "cumque";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("beatae") {{
                                                                                field = "quidem";
                                                                                property = "non";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("molestias", new FormBindingElement("ducimus", "libero") {{
                                                                                    element = "beatae";
                                                                                    property = "autem";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("ipsum") {{
                                                                                field = "molestias";
                                                                                property = "necessitatibus";
                                                                            }};
                                                                            componentName = "impedit";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "illum";
                                                                                operand = "distinctio";
                                                                                operandType = "voluptatem";
                                                                                operator = "non";
                                                                                property = "quaerat";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "consequatur";
                                                                            event = "laudantium";
                                                                            importedValue = "repellendus";
                                                                            model = "commodi";
                                                                            property = "quibusdam";
                                                                            type = "consectetur";
                                                                            userAttribute = "voluptas";
                                                                            value = "quaerat";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("recusandae") {{
                                                                            field = "necessitatibus";
                                                                            property = "sequi";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("adipisci", new FormBindingElement("dolores", "illum") {{
                                                                                element = "magni";
                                                                                property = "aperiam";
                                                                            }});
                                                                            put("iusto", new FormBindingElement("aliquid", "ad") {{
                                                                                element = "magni";
                                                                                property = "beatae";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("minima") {{
                                                                            field = "voluptate";
                                                                            property = "vel";
                                                                        }};
                                                                        componentName = "sit";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "laboriosam";
                                                                            operand = "quaerat";
                                                                            operandType = "quasi";
                                                                            operator = "rem";
                                                                            property = "dignissimos";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "doloremque";
                                                                        event = "assumenda";
                                                                        importedValue = "provident";
                                                                        model = "facere";
                                                                        property = "sed";
                                                                        type = "inventore";
                                                                        userAttribute = "voluptatibus";
                                                                        value = "unde";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("consequatur") {{
                                                                            field = "deserunt";
                                                                            property = "repellendus";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("doloremque", new FormBindingElement("debitis", "cumque") {{
                                                                                element = "optio";
                                                                                property = "tempora";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("beatae") {{
                                                                            field = "maxime";
                                                                            property = "et";
                                                                        }};
                                                                        componentName = "id";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "quos";
                                                                            operand = "ratione";
                                                                            operandType = "iure";
                                                                            operator = "tempora";
                                                                            property = "eos";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "natus";
                                                                        event = "voluptatem";
                                                                        importedValue = "suscipit";
                                                                        model = "laudantium";
                                                                        property = "facilis";
                                                                        type = "laudantium";
                                                                        userAttribute = "ullam";
                                                                        value = "aut";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("quaerat") {{
                                                                            field = "quia";
                                                                            property = "officia";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("accusamus", new FormBindingElement("esse", "neque") {{
                                                                                element = "iusto";
                                                                                property = "sapiente";
                                                                            }});
                                                                            put("quidem", new FormBindingElement("tempora", "ipsam") {{
                                                                                element = "quisquam";
                                                                                property = "praesentium";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("magni") {{
                                                                            field = "officiis";
                                                                            property = "sequi";
                                                                        }};
                                                                        componentName = "voluptatem";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "amet";
                                                                            operand = "veritatis";
                                                                            operandType = "error";
                                                                            operator = "voluptatibus";
                                                                            property = "numquam";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "rerum";
                                                                        event = "dolorum";
                                                                        importedValue = "quibusdam";
                                                                        model = "earum";
                                                                        property = "excepturi";
                                                                        type = "numquam";
                                                                        userAttribute = "molestiae";
                                                                        value = "impedit";
                                                                    }};
                                                                }};
                                                            }});
                                                        }};
                                                        name = "Matt Lehner";
                                                        properties = "facilis";
                                                        sourceId = "optio";
                                                    }}),
                                                    add(new ComponentChild("doloremque", "est", "qui") {{
                                                        children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                                            add(new ComponentChild() {{}}),
                                                        }};
                                                        componentType = "aliquid";
                                                        events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                                            put("vel", new ComponentEvent() {{
                                                                action = "ad";
                                                                bindingEvent = "quos";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("quibusdam") {{
                                                                            field = "illo";
                                                                            property = "suscipit";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("impedit", new FormBindingElement("voluptates", "maiores") {{
                                                                                element = "culpa";
                                                                                property = "atque";
                                                                            }});
                                                                            put("nemo", new FormBindingElement("cumque", "expedita") {{
                                                                                element = "illo";
                                                                                property = "doloribus";
                                                                            }});
                                                                            put("modi", new FormBindingElement("occaecati", "ipsum") {{
                                                                                element = "cumque";
                                                                                property = "ipsam";
                                                                            }});
                                                                            put("accusamus", new FormBindingElement("fugit", "quo") {{
                                                                                element = "quisquam";
                                                                                property = "quasi";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("id") {{
                                                                            field = "temporibus";
                                                                            property = "mollitia";
                                                                        }};
                                                                        componentName = "quibusdam";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "accusamus";
                                                                            operand = "placeat";
                                                                            operandType = "quam";
                                                                            operator = "similique";
                                                                            property = "delectus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "saepe";
                                                                        event = "facere";
                                                                        importedValue = "nobis";
                                                                        model = "at";
                                                                        property = "molestias";
                                                                        type = "aut";
                                                                        userAttribute = "temporibus";
                                                                        value = "tenetur";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("numquam", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("dolore") {{
                                                                                field = "corrupti";
                                                                                property = "similique";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("reiciendis", new FormBindingElement("occaecati", "aut") {{
                                                                                    element = "iste";
                                                                                    property = "amet";
                                                                                }});
                                                                                put("impedit", new FormBindingElement("blanditiis", "quas") {{
                                                                                    element = "minima";
                                                                                    property = "quos";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("quas") {{
                                                                                field = "voluptatem";
                                                                                property = "provident";
                                                                            }};
                                                                            componentName = "ipsum";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "fuga";
                                                                                operand = "facilis";
                                                                                operandType = "maiores";
                                                                                operator = "error";
                                                                                property = "recusandae";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "a";
                                                                            event = "consectetur";
                                                                            importedValue = "sapiente";
                                                                            model = "voluptatibus";
                                                                            property = "assumenda";
                                                                            type = "repellendus";
                                                                            userAttribute = "omnis";
                                                                            value = "delectus";
                                                                        }});
                                                                        put("odio", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("quam") {{
                                                                                field = "voluptatibus";
                                                                                property = "aut";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("similique", new FormBindingElement("facere", "neque") {{
                                                                                    element = "asperiores";
                                                                                    property = "modi";
                                                                                }});
                                                                                put("quis", new FormBindingElement("non", "porro") {{
                                                                                    element = "in";
                                                                                    property = "sed";
                                                                                }});
                                                                                put("fugiat", new FormBindingElement("reiciendis", "labore") {{
                                                                                    element = "soluta";
                                                                                    property = "ipsa";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("quas") {{
                                                                                field = "vero";
                                                                                property = "eos";
                                                                            }};
                                                                            componentName = "quasi";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "praesentium";
                                                                                operand = "iusto";
                                                                                operandType = "fugiat";
                                                                                operator = "enim";
                                                                                property = "iure";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "laudantium";
                                                                            event = "modi";
                                                                            importedValue = "magnam";
                                                                            model = "accusamus";
                                                                            property = "nulla";
                                                                            type = "repudiandae";
                                                                            userAttribute = "quibusdam";
                                                                            value = "praesentium";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("unde") {{
                                                                            field = "enim";
                                                                            property = "animi";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("eum", new FormBindingElement("laboriosam", "ratione") {{
                                                                                element = "nostrum";
                                                                                property = "eveniet";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("illum") {{
                                                                            field = "blanditiis";
                                                                            property = "quidem";
                                                                        }};
                                                                        componentName = "reiciendis";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "dolores";
                                                                            operand = "consequatur";
                                                                            operandType = "nesciunt";
                                                                            operator = "quia";
                                                                            property = "quidem";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "voluptas";
                                                                        event = "quo";
                                                                        importedValue = "laudantium";
                                                                        model = "dignissimos";
                                                                        property = "omnis";
                                                                        type = "omnis";
                                                                        userAttribute = "fugit";
                                                                        value = "dolorem";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("debitis") {{
                                                                            field = "quidem";
                                                                            property = "molestiae";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("dolor", new FormBindingElement("ut", "asperiores") {{
                                                                                element = "ad";
                                                                                property = "atque";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("itaque") {{
                                                                            field = "reprehenderit";
                                                                            property = "deserunt";
                                                                        }};
                                                                        componentName = "et";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "impedit";
                                                                            operand = "ex";
                                                                            operandType = "praesentium";
                                                                            operator = "natus";
                                                                            property = "vitae";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "tenetur";
                                                                        event = "laudantium";
                                                                        importedValue = "aspernatur";
                                                                        model = "eligendi";
                                                                        property = "repudiandae";
                                                                        type = "dicta";
                                                                        userAttribute = "inventore";
                                                                        value = "ullam";
                                                                    }};
                                                                    model = "iusto";
                                                                    state = new MutationActionSetStateParameter("repellendus", "temporibus",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("minus") {{
                                                                                            field = "minima";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("beatae", new FormBindingElement("facere", "earum") {{
                                                                                                element = "vitae";
                                                                                                property = "veritatis";
                                                                                            }});
                                                                                            put("laborum", new FormBindingElement("odit", "aliquid") {{
                                                                                                element = "dicta";
                                                                                                property = "voluptatem";
                                                                                            }});
                                                                                            put("pariatur", new FormBindingElement("architecto", "est") {{
                                                                                                element = "enim";
                                                                                                property = "numquam";
                                                                                            }});
                                                                                            put("quaerat", new FormBindingElement("omnis", "alias") {{
                                                                                                element = "facere";
                                                                                                property = "vitae";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("sapiente") {{
                                                                                            field = "officiis";
                                                                                        }};;
                                                                                        componentName = "expedita";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "vitae";
                                                                                            operand = "odio";
                                                                                            operandType = "quas";
                                                                                            operator = "ipsa";
                                                                                            property = "distinctio";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "placeat";
                                                                                        event = "quod";
                                                                                        importedValue = "eligendi";
                                                                                        model = "sit";
                                                                                        property = "possimus";
                                                                                        type = "distinctio";
                                                                                        userAttribute = "distinctio";
                                                                                        value = "assumenda";
                                                                                    }};) {{
                                                                        componentName = "inventore";
                                                                        property = "voluptate";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("eaque") {{
                                                                                field = "sed";
                                                                                property = "dolorem";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("amet", new FormBindingElement("pariatur", "minus") {{
                                                                                    element = "voluptate";
                                                                                    property = "voluptate";
                                                                                }});
                                                                                put("a", new FormBindingElement("cupiditate", "at") {{
                                                                                    element = "fuga";
                                                                                    property = "totam";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("quam") {{
                                                                                field = "doloribus";
                                                                                property = "omnis";
                                                                            }};
                                                                            componentName = "exercitationem";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "sequi";
                                                                                operand = "quis";
                                                                                operandType = "commodi";
                                                                                operator = "vel";
                                                                                property = "rem";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "aliquid";
                                                                            event = "aperiam";
                                                                            importedValue = "perspiciatis";
                                                                            model = "fugit";
                                                                            property = "itaque";
                                                                            type = "unde";
                                                                            userAttribute = "cumque";
                                                                            value = "dolor";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("magnam") {{
                                                                            field = "illum";
                                                                            property = "soluta";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("tempora", new FormBindingElement("corrupti", "reiciendis") {{
                                                                                element = "esse";
                                                                                property = "doloremque";
                                                                            }});
                                                                            put("facilis", new FormBindingElement("amet", "natus") {{
                                                                                element = "aliquam";
                                                                                property = "repudiandae";
                                                                            }});
                                                                            put("ab", new FormBindingElement("rerum", "placeat") {{
                                                                                element = "officiis";
                                                                                property = "eum";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("blanditiis") {{
                                                                            field = "ab";
                                                                            property = "ad";
                                                                        }};
                                                                        componentName = "porro";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "impedit";
                                                                            operand = "ut";
                                                                            operandType = "earum";
                                                                            operator = "ullam";
                                                                            property = "numquam";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "enim";
                                                                        event = "cupiditate";
                                                                        importedValue = "occaecati";
                                                                        model = "itaque";
                                                                        property = "fuga";
                                                                        type = "consectetur";
                                                                        userAttribute = "modi";
                                                                        value = "aspernatur";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("ipsa") {{
                                                                            field = "explicabo";
                                                                            property = "suscipit";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("sint", new FormBindingElement("accusantium", "consequatur") {{
                                                                                element = "nobis";
                                                                                property = "qui";
                                                                            }});
                                                                            put("impedit", new FormBindingElement("deleniti", "est") {{
                                                                                element = "recusandae";
                                                                                property = "voluptate";
                                                                            }});
                                                                            put("et", new FormBindingElement("quos", "maiores") {{
                                                                                element = "expedita";
                                                                                property = "quibusdam";
                                                                            }});
                                                                            put("quidem", new FormBindingElement("doloremque", "fuga") {{
                                                                                element = "in";
                                                                                property = "culpa";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("suscipit") {{
                                                                            field = "dicta";
                                                                            property = "architecto";
                                                                        }};
                                                                        componentName = "eligendi";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "dignissimos";
                                                                            operand = "fugit";
                                                                            operandType = "ratione";
                                                                            operator = "possimus";
                                                                            property = "quaerat";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "aut";
                                                                        event = "natus";
                                                                        importedValue = "esse";
                                                                        model = "delectus";
                                                                        property = "deserunt";
                                                                        type = "ratione";
                                                                        userAttribute = "ipsa";
                                                                        value = "debitis";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("hic") {{
                                                                            field = "iste";
                                                                            property = "deserunt";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("consequuntur", new FormBindingElement("quia", "omnis") {{
                                                                                element = "ipsam";
                                                                                property = "libero";
                                                                            }});
                                                                            put("dicta", new FormBindingElement("consequatur", "amet") {{
                                                                                element = "qui";
                                                                                property = "explicabo";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("voluptatum") {{
                                                                            field = "consequatur";
                                                                            property = "fugiat";
                                                                        }};
                                                                        componentName = "velit";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "ullam";
                                                                            operand = "deserunt";
                                                                            operandType = "itaque";
                                                                            operator = "distinctio";
                                                                            property = "iusto";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "dignissimos";
                                                                        event = "provident";
                                                                        importedValue = "occaecati";
                                                                        model = "assumenda";
                                                                        property = "sunt";
                                                                        type = "odit";
                                                                        userAttribute = "vero";
                                                                        value = "deleniti";
                                                                    }};
                                                                }};
                                                            }});
                                                            put("optio", new ComponentEvent() {{
                                                                action = "quasi";
                                                                bindingEvent = "repellat";
                                                                parameters = new ActionParameters() {{
                                                                    anchor = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("perspiciatis") {{
                                                                            field = "atque";
                                                                            property = "magnam";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("corrupti", new FormBindingElement("delectus", "illum") {{
                                                                                element = "sunt";
                                                                                property = "nemo";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("magni") {{
                                                                            field = "porro";
                                                                            property = "quaerat";
                                                                        }};
                                                                        componentName = "cumque";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "in";
                                                                            operand = "commodi";
                                                                            operandType = "maxime";
                                                                            operator = "sed";
                                                                            property = "minus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "consequuntur";
                                                                        event = "possimus";
                                                                        importedValue = "delectus";
                                                                        model = "harum";
                                                                        property = "aliquam";
                                                                        type = "eligendi";
                                                                        userAttribute = "hic";
                                                                        value = "quo";
                                                                    }};
                                                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                        put("nobis", new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("explicabo") {{
                                                                                field = "esse";
                                                                                property = "nisi";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("alias", new FormBindingElement("numquam", "vitae") {{
                                                                                    element = "reiciendis";
                                                                                    property = "quos";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("architecto") {{
                                                                                field = "maiores";
                                                                                property = "nam";
                                                                            }};
                                                                            componentName = "rerum";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "eos";
                                                                                operand = "dolorem";
                                                                                operandType = "hic";
                                                                                operator = "repellendus";
                                                                                property = "nam";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "ab";
                                                                            event = "magnam";
                                                                            importedValue = "pariatur";
                                                                            model = "expedita";
                                                                            property = "autem";
                                                                            type = "tempore";
                                                                            userAttribute = "recusandae";
                                                                            value = "nostrum";
                                                                        }});
                                                                    }};
                                                                    global = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("laudantium") {{
                                                                            field = "officia";
                                                                            property = "voluptas";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("excepturi", new FormBindingElement("necessitatibus", "aspernatur") {{
                                                                                element = "natus";
                                                                                property = "deleniti";
                                                                            }});
                                                                            put("dolores", new FormBindingElement("eos", "voluptatem") {{
                                                                                element = "laborum";
                                                                                property = "vero";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("quae") {{
                                                                            field = "temporibus";
                                                                            property = "id";
                                                                        }};
                                                                        componentName = "commodi";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "minus";
                                                                            operand = "sed";
                                                                            operandType = "nam";
                                                                            operator = "quia";
                                                                            property = "iusto";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "ab";
                                                                        event = "deserunt";
                                                                        importedValue = "sed";
                                                                        model = "blanditiis";
                                                                        property = "sint";
                                                                        type = "placeat";
                                                                        userAttribute = "ullam";
                                                                        value = "molestiae";
                                                                    }};
                                                                    id = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("nemo") {{
                                                                            field = "itaque";
                                                                            property = "rem";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("recusandae", new FormBindingElement("aliquam", "dolor") {{
                                                                                element = "omnis";
                                                                                property = "ipsa";
                                                                            }});
                                                                            put("occaecati", new FormBindingElement("consequuntur", "consequuntur") {{
                                                                                element = "quibusdam";
                                                                                property = "magni";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ipsam") {{
                                                                            field = "eius";
                                                                            property = "commodi";
                                                                        }};
                                                                        componentName = "vel";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "modi";
                                                                            operand = "nisi";
                                                                            operandType = "explicabo";
                                                                            operator = "modi";
                                                                            property = "doloremque";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "odio";
                                                                        event = "sit";
                                                                        importedValue = "voluptatum";
                                                                        model = "tempora";
                                                                        property = "delectus";
                                                                        type = "quam";
                                                                        userAttribute = "dolorum";
                                                                        value = "libero";
                                                                    }};
                                                                    model = "ratione";
                                                                    state = new MutationActionSetStateParameter("deserunt", "fugit",                 new ComponentProperty() {{
                                                                                        bindingProperties = new ComponentPropertyBindingProperties("autem") {{
                                                                                            field = "quo";
                                                                                        }};;
                                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                            put("maxime", new FormBindingElement("cupiditate", "deleniti") {{
                                                                                                element = "facere";
                                                                                                property = "impedit";
                                                                                            }});
                                                                                            put("quasi", new FormBindingElement("aliquid", "laudantium") {{
                                                                                                element = "maiores";
                                                                                                property = "voluptatem";
                                                                                            }});
                                                                                        }};
                                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("unde") {{
                                                                                            field = "corrupti";
                                                                                        }};;
                                                                                        componentName = "quae";
                                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                            add(new ComponentProperty() {{}}),
                                                                                        }};
                                                                                        condition = new ComponentConditionProperty() {{
                                                                                            else_ = new ComponentProperty();;
                                                                                            field = "ea";
                                                                                            operand = "libero";
                                                                                            operandType = "nam";
                                                                                            operator = "amet";
                                                                                            property = "adipisci";
                                                                                            then = new ComponentProperty();;
                                                                                        }};;
                                                                                        configured = false;
                                                                                        defaultValue = "minus";
                                                                                        event = "hic";
                                                                                        importedValue = "similique";
                                                                                        model = "fuga";
                                                                                        property = "consectetur";
                                                                                        type = "labore";
                                                                                        userAttribute = "laudantium";
                                                                                        value = "cumque";
                                                                                    }};) {{
                                                                        componentName = "molestiae";
                                                                        property = "optio";
                                                                        set = new ComponentProperty() {{
                                                                            bindingProperties = new ComponentPropertyBindingProperties("accusantium") {{
                                                                                field = "saepe";
                                                                                property = "maiores";
                                                                            }};
                                                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                put("eos", new FormBindingElement("vitae", "occaecati") {{
                                                                                    element = "consequuntur";
                                                                                    property = "quis";
                                                                                }});
                                                                            }};
                                                                            collectionBindingProperties = new ComponentPropertyBindingProperties("quidem") {{
                                                                                field = "labore";
                                                                                property = "fugiat";
                                                                            }};
                                                                            componentName = "exercitationem";
                                                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                add(new ComponentProperty() {{}}),
                                                                                add(new ComponentProperty() {{}}),
                                                                            }};
                                                                            condition = new ComponentConditionProperty() {{
                                                                                else_ = new ComponentProperty() {{}};
                                                                                field = "modi";
                                                                                operand = "quasi";
                                                                                operandType = "quae";
                                                                                operator = "similique";
                                                                                property = "possimus";
                                                                                then = new ComponentProperty() {{}};
                                                                            }};
                                                                            configured = false;
                                                                            defaultValue = "quo";
                                                                            event = "suscipit";
                                                                            importedValue = "ex";
                                                                            model = "sint";
                                                                            property = "est";
                                                                            type = "doloribus";
                                                                            userAttribute = "provident";
                                                                            value = "alias";
                                                                        }};
                                                                    }};
                                                                    target = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("nam") {{
                                                                            field = "adipisci";
                                                                            property = "veritatis";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("magnam", new FormBindingElement("itaque", "necessitatibus") {{
                                                                                element = "aperiam";
                                                                                property = "ducimus";
                                                                            }});
                                                                            put("numquam", new FormBindingElement("sapiente", "alias") {{
                                                                                element = "doloribus";
                                                                                property = "eligendi";
                                                                            }});
                                                                            put("impedit", new FormBindingElement("nobis", "nihil") {{
                                                                                element = "numquam";
                                                                                property = "aspernatur";
                                                                            }});
                                                                            put("voluptatum", new FormBindingElement("ullam", "nisi") {{
                                                                                element = "reiciendis";
                                                                                property = "vitae";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("ratione") {{
                                                                            field = "consequuntur";
                                                                            property = "voluptas";
                                                                        }};
                                                                        componentName = "excepturi";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "est";
                                                                            operand = "perferendis";
                                                                            operandType = "quibusdam";
                                                                            operator = "impedit";
                                                                            property = "ducimus";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "nisi";
                                                                        event = "nisi";
                                                                        importedValue = "dolor";
                                                                        model = "fugit";
                                                                        property = "dolore";
                                                                        type = "maxime";
                                                                        userAttribute = "maxime";
                                                                        value = "expedita";
                                                                    }};
                                                                    type = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("impedit") {{
                                                                            field = "accusantium";
                                                                            property = "ea";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("optio", new FormBindingElement("consequuntur", "repellendus") {{
                                                                                element = "est";
                                                                                property = "inventore";
                                                                            }});
                                                                            put("sit", new FormBindingElement("aspernatur", "perspiciatis") {{
                                                                                element = "dolores";
                                                                                property = "enim";
                                                                            }});
                                                                            put("magni", new FormBindingElement("quidem", "deleniti") {{
                                                                                element = "odio";
                                                                                property = "alias";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("odio") {{
                                                                            field = "possimus";
                                                                            property = "ipsam";
                                                                        }};
                                                                        componentName = "fugit";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "at";
                                                                            operand = "illum";
                                                                            operandType = "praesentium";
                                                                            operator = "sint";
                                                                            property = "exercitationem";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "cum";
                                                                        event = "voluptatum";
                                                                        importedValue = "facilis";
                                                                        model = "placeat";
                                                                        property = "reiciendis";
                                                                        type = "dolores";
                                                                        userAttribute = "dolore";
                                                                        value = "pariatur";
                                                                    }};
                                                                    url = new ComponentProperty() {{
                                                                        bindingProperties = new ComponentPropertyBindingProperties("nemo") {{
                                                                            field = "facilis";
                                                                            property = "cupiditate";
                                                                        }};
                                                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                            put("nisi", new FormBindingElement("dolor", "nostrum") {{
                                                                                element = "provident";
                                                                                property = "amet";
                                                                            }});
                                                                            put("qui", new FormBindingElement("dolore", "ullam") {{
                                                                                element = "tenetur";
                                                                                property = "molestiae";
                                                                            }});
                                                                            put("velit", new FormBindingElement("occaecati", "numquam") {{
                                                                                element = "adipisci";
                                                                                property = "cupiditate";
                                                                            }});
                                                                        }};
                                                                        collectionBindingProperties = new ComponentPropertyBindingProperties("quas") {{
                                                                            field = "fugiat";
                                                                            property = "molestiae";
                                                                        }};
                                                                        componentName = "repellendus";
                                                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                            add(new ComponentProperty() {{}}),
                                                                        }};
                                                                        condition = new ComponentConditionProperty() {{
                                                                            else_ = new ComponentProperty() {{}};
                                                                            field = "amet";
                                                                            operand = "distinctio";
                                                                            operandType = "vel";
                                                                            operator = "necessitatibus";
                                                                            property = "iste";
                                                                            then = new ComponentProperty() {{}};
                                                                        }};
                                                                        configured = false;
                                                                        defaultValue = "nesciunt";
                                                                        event = "corrupti";
                                                                        importedValue = "cupiditate";
                                                                        model = "voluptatibus";
                                                                        property = "ullam";
                                                                        type = "dolorum";
                                                                        userAttribute = "soluta";
                                                                        value = "cum";
                                                                    }};
                                                                }};
                                                            }});
                                                        }};
                                                        name = "Faith Jenkins";
                                                        properties = "ullam";
                                                        sourceId = "ullam";
                                                    }}),
                                                }};
                                                collectionProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentDataConfiguration>() {{
                                                    put("adipisci", new ComponentDataConfiguration("deserunt") {{
                                                        identifiers = new String[]{{
                                                            add("qui"),
                                                            add("deserunt"),
                                                            add("eligendi"),
                                                        }};
                                                        model = "incidunt";
                                                        predicate = new Predicate() {{
                                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{}}),
                                                                add(new Predicate() {{}}),
                                                                add(new Predicate() {{}}),
                                                            }};
                                                            field = "dolor";
                                                            operand = "est";
                                                            operandType = "reiciendis";
                                                            operator = "possimus";
                                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{}}),
                                                            }};
                                                        }};
                                                        sort = new org.openapis.openapi.models.shared.SortProperty[]{{
                                                            add(new SortProperty(SortDirectionEnum.DESC, "facilis") {{
                                                                direction = SortDirectionEnum.ASC;
                                                                field = "minima";
                                                            }}),
                                                        }};
                                                    }});
                                                    put("nisi", new ComponentDataConfiguration("repudiandae") {{
                                                        identifiers = new String[]{{
                                                            add("voluptatem"),
                                                            add("illo"),
                                                        }};
                                                        model = "iure";
                                                        predicate = new Predicate() {{
                                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{}}),
                                                                add(new Predicate() {{}}),
                                                            }};
                                                            field = "eveniet";
                                                            operand = "quae";
                                                            operandType = "ea";
                                                            operator = "asperiores";
                                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{}}),
                                                                add(new Predicate() {{}}),
                                                            }};
                                                        }};
                                                        sort = new org.openapis.openapi.models.shared.SortProperty[]{{
                                                            add(new SortProperty(SortDirectionEnum.DESC, "repudiandae") {{
                                                                direction = SortDirectionEnum.DESC;
                                                                field = "eum";
                                                            }}),
                                                            add(new SortProperty(SortDirectionEnum.ASC, "expedita") {{
                                                                direction = SortDirectionEnum.ASC;
                                                                field = "molestias";
                                                            }}),
                                                            add(new SortProperty(SortDirectionEnum.DESC, "assumenda") {{
                                                                direction = SortDirectionEnum.DESC;
                                                                field = "praesentium";
                                                            }}),
                                                        }};
                                                    }});
                                                    put("maiores", new ComponentDataConfiguration("atque") {{
                                                        identifiers = new String[]{{
                                                            add("commodi"),
                                                        }};
                                                        model = "vitae";
                                                        predicate = new Predicate() {{
                                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{}}),
                                                            }};
                                                            field = "nam";
                                                            operand = "ex";
                                                            operandType = "neque";
                                                            operator = "quod";
                                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                                add(new Predicate() {{}}),
                                                            }};
                                                        }};
                                                        sort = new org.openapis.openapi.models.shared.SortProperty[]{{
                                                            add(new SortProperty(SortDirectionEnum.DESC, "id") {{
                                                                direction = SortDirectionEnum.ASC;
                                                                field = "a";
                                                            }}),
                                                        }};
                                                    }});
                                                }};
                                                componentType = "quaerat";
                                                events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                                    put("dignissimos", new ComponentEvent() {{
                                                        action = "quam";
                                                        bindingEvent = "modi";
                                                        parameters = new ActionParameters() {{
                                                            anchor = new ComponentProperty() {{
                                                                bindingProperties = new ComponentPropertyBindingProperties("deleniti") {{
                                                                    field = "fuga";
                                                                    property = "iure";
                                                                }};
                                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                    put("sint", new FormBindingElement("ad", "illum") {{
                                                                        element = "laborum";
                                                                        property = "dolor";
                                                                    }});
                                                                    put("sit", new FormBindingElement("expedita", "voluptas") {{
                                                                        element = "molestias";
                                                                        property = "voluptas";
                                                                    }});
                                                                    put("maiores", new FormBindingElement("delectus", "accusamus") {{
                                                                        element = "ea";
                                                                        property = "vel";
                                                                    }});
                                                                }};
                                                                collectionBindingProperties = new ComponentPropertyBindingProperties("sed") {{
                                                                    field = "reiciendis";
                                                                    property = "consequatur";
                                                                }};
                                                                componentName = "accusantium";
                                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                }};
                                                                condition = new ComponentConditionProperty() {{
                                                                    else_ = new ComponentProperty() {{}};
                                                                    field = "provident";
                                                                    operand = "maiores";
                                                                    operandType = "quaerat";
                                                                    operator = "numquam";
                                                                    property = "non";
                                                                    then = new ComponentProperty() {{}};
                                                                }};
                                                                configured = false;
                                                                defaultValue = "cum";
                                                                event = "incidunt";
                                                                importedValue = "dolores";
                                                                model = "enim";
                                                                property = "nihil";
                                                                type = "libero";
                                                                userAttribute = "omnis";
                                                                value = "excepturi";
                                                            }};
                                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                                put("quisquam", new ComponentProperty() {{
                                                                    bindingProperties = new ComponentPropertyBindingProperties("cum") {{
                                                                        field = "corrupti";
                                                                        property = "repellendus";
                                                                    }};
                                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                        put("est", new FormBindingElement("autem", "dicta") {{
                                                                            element = "commodi";
                                                                            property = "similique";
                                                                        }});
                                                                        put("recusandae", new FormBindingElement("odit", "inventore") {{
                                                                            element = "sapiente";
                                                                            property = "id";
                                                                        }});
                                                                        put("iste", new FormBindingElement("ullam", "atque") {{
                                                                            element = "atque";
                                                                            property = "explicabo";
                                                                        }});
                                                                        put("doloribus", new FormBindingElement("similique", "iste") {{
                                                                            element = "pariatur";
                                                                            property = "aut";
                                                                        }});
                                                                    }};
                                                                    collectionBindingProperties = new ComponentPropertyBindingProperties("animi") {{
                                                                        field = "eveniet";
                                                                        property = "nam";
                                                                    }};
                                                                    componentName = "labore";
                                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                        add(new ComponentProperty() {{}}),
                                                                        add(new ComponentProperty() {{}}),
                                                                    }};
                                                                    condition = new ComponentConditionProperty() {{
                                                                        else_ = new ComponentProperty() {{}};
                                                                        field = "voluptatibus";
                                                                        operand = "quam";
                                                                        operandType = "nulla";
                                                                        operator = "dolorem";
                                                                        property = "voluptates";
                                                                        then = new ComponentProperty() {{}};
                                                                    }};
                                                                    configured = false;
                                                                    defaultValue = "a";
                                                                    event = "perferendis";
                                                                    importedValue = "quaerat";
                                                                    model = "excepturi";
                                                                    property = "aliquid";
                                                                    type = "dolore";
                                                                    userAttribute = "voluptatem";
                                                                    value = "illum";
                                                                }});
                                                            }};
                                                            global = new ComponentProperty() {{
                                                                bindingProperties = new ComponentPropertyBindingProperties("dicta") {{
                                                                    field = "laboriosam";
                                                                    property = "culpa";
                                                                }};
                                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                    put("ratione", new FormBindingElement("atque", "nihil") {{
                                                                        element = "vitae";
                                                                        property = "quisquam";
                                                                    }});
                                                                    put("culpa", new FormBindingElement("ad", "cupiditate") {{
                                                                        element = "temporibus";
                                                                        property = "a";
                                                                    }});
                                                                    put("suscipit", new FormBindingElement("delectus", "ab") {{
                                                                        element = "reiciendis";
                                                                        property = "repellendus";
                                                                    }});
                                                                }};
                                                                collectionBindingProperties = new ComponentPropertyBindingProperties("praesentium") {{
                                                                    field = "mollitia";
                                                                    property = "possimus";
                                                                }};
                                                                componentName = "neque";
                                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                }};
                                                                condition = new ComponentConditionProperty() {{
                                                                    else_ = new ComponentProperty() {{}};
                                                                    field = "animi";
                                                                    operand = "debitis";
                                                                    operandType = "voluptatum";
                                                                    operator = "voluptatem";
                                                                    property = "quisquam";
                                                                    then = new ComponentProperty() {{}};
                                                                }};
                                                                configured = false;
                                                                defaultValue = "vitae";
                                                                event = "cumque";
                                                                importedValue = "architecto";
                                                                model = "sint";
                                                                property = "eligendi";
                                                                type = "occaecati";
                                                                userAttribute = "quis";
                                                                value = "tempore";
                                                            }};
                                                            id = new ComponentProperty() {{
                                                                bindingProperties = new ComponentPropertyBindingProperties("unde") {{
                                                                    field = "officia";
                                                                    property = "iste";
                                                                }};
                                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                    put("laboriosam", new FormBindingElement("sapiente", "deserunt") {{
                                                                        element = "ducimus";
                                                                        property = "voluptatum";
                                                                    }});
                                                                    put("dolor", new FormBindingElement("sint", "autem") {{
                                                                        element = "hic";
                                                                        property = "iure";
                                                                    }});
                                                                    put("iste", new FormBindingElement("fuga", "a") {{
                                                                        element = "cupiditate";
                                                                        property = "ab";
                                                                    }});
                                                                }};
                                                                collectionBindingProperties = new ComponentPropertyBindingProperties("molestias") {{
                                                                    field = "dolor";
                                                                    property = "voluptatum";
                                                                }};
                                                                componentName = "quod";
                                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                }};
                                                                condition = new ComponentConditionProperty() {{
                                                                    else_ = new ComponentProperty() {{}};
                                                                    field = "eaque";
                                                                    operand = "consectetur";
                                                                    operandType = "autem";
                                                                    operator = "vitae";
                                                                    property = "numquam";
                                                                    then = new ComponentProperty() {{}};
                                                                }};
                                                                configured = false;
                                                                defaultValue = "incidunt";
                                                                event = "modi";
                                                                importedValue = "quos";
                                                                model = "minus";
                                                                property = "voluptate";
                                                                type = "error";
                                                                userAttribute = "reprehenderit";
                                                                value = "reprehenderit";
                                                            }};
                                                            model = "animi";
                                                            state = new MutationActionSetStateParameter("quam", "illum",                 new ComponentProperty() {{
                                                                                bindingProperties = new ComponentPropertyBindingProperties("voluptates") {{
                                                                                    field = "officia";
                                                                                }};;
                                                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                                    put("in", new FormBindingElement("consequatur", "delectus") {{
                                                                                        element = "illo";
                                                                                        property = "voluptate";
                                                                                    }});
                                                                                    put("incidunt", new FormBindingElement("est", "quo") {{
                                                                                        element = "dolore";
                                                                                        property = "nemo";
                                                                                    }});
                                                                                    put("maxime", new FormBindingElement("laboriosam", "quam") {{
                                                                                        element = "delectus";
                                                                                        property = "laboriosam";
                                                                                    }});
                                                                                }};
                                                                                collectionBindingProperties = new ComponentPropertyBindingProperties("fuga") {{
                                                                                    field = "officia";
                                                                                }};;
                                                                                componentName = "repellat";
                                                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                                    add(new ComponentProperty() {{}}),
                                                                                    add(new ComponentProperty() {{}}),
                                                                                    add(new ComponentProperty() {{}}),
                                                                                }};
                                                                                condition = new ComponentConditionProperty() {{
                                                                                    else_ = new ComponentProperty();;
                                                                                    field = "soluta";
                                                                                    operand = "tempore";
                                                                                    operandType = "culpa";
                                                                                    operator = "fugiat";
                                                                                    property = "inventore";
                                                                                    then = new ComponentProperty();;
                                                                                }};;
                                                                                configured = false;
                                                                                defaultValue = "atque";
                                                                                event = "ad";
                                                                                importedValue = "sapiente";
                                                                                model = "voluptates";
                                                                                property = "ut";
                                                                                type = "nesciunt";
                                                                                userAttribute = "ab";
                                                                                value = "quibusdam";
                                                                            }};) {{
                                                                componentName = "consequatur";
                                                                property = "voluptates";
                                                                set = new ComponentProperty() {{
                                                                    bindingProperties = new ComponentPropertyBindingProperties("delectus") {{
                                                                        field = "delectus";
                                                                        property = "qui";
                                                                    }};
                                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                        put("ipsum", new FormBindingElement("sed", "voluptatum") {{
                                                                            element = "laboriosam";
                                                                            property = "doloremque";
                                                                        }});
                                                                        put("debitis", new FormBindingElement("eveniet", "repellat") {{
                                                                            element = "a";
                                                                            property = "itaque";
                                                                        }});
                                                                    }};
                                                                    collectionBindingProperties = new ComponentPropertyBindingProperties("aliquam") {{
                                                                        field = "cupiditate";
                                                                        property = "adipisci";
                                                                    }};
                                                                    componentName = "illo";
                                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                        add(new ComponentProperty() {{}}),
                                                                        add(new ComponentProperty() {{}}),
                                                                    }};
                                                                    condition = new ComponentConditionProperty() {{
                                                                        else_ = new ComponentProperty() {{}};
                                                                        field = "sed";
                                                                        operand = "necessitatibus";
                                                                        operandType = "possimus";
                                                                        operator = "dignissimos";
                                                                        property = "itaque";
                                                                        then = new ComponentProperty() {{}};
                                                                    }};
                                                                    configured = false;
                                                                    defaultValue = "explicabo";
                                                                    event = "ullam";
                                                                    importedValue = "non";
                                                                    model = "delectus";
                                                                    property = "incidunt";
                                                                    type = "quod";
                                                                    userAttribute = "sunt";
                                                                    value = "ullam";
                                                                }};
                                                            }};
                                                            target = new ComponentProperty() {{
                                                                bindingProperties = new ComponentPropertyBindingProperties("delectus") {{
                                                                    field = "suscipit";
                                                                    property = "quidem";
                                                                }};
                                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                    put("cumque", new FormBindingElement("atque", "maiores") {{
                                                                        element = "voluptatum";
                                                                        property = "sequi";
                                                                    }});
                                                                    put("expedita", new FormBindingElement("quod", "aspernatur") {{
                                                                        element = "rerum";
                                                                        property = "totam";
                                                                    }});
                                                                }};
                                                                collectionBindingProperties = new ComponentPropertyBindingProperties("nam") {{
                                                                    field = "eaque";
                                                                    property = "impedit";
                                                                }};
                                                                componentName = "ex";
                                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                }};
                                                                condition = new ComponentConditionProperty() {{
                                                                    else_ = new ComponentProperty() {{}};
                                                                    field = "delectus";
                                                                    operand = "minus";
                                                                    operandType = "ut";
                                                                    operator = "distinctio";
                                                                    property = "eius";
                                                                    then = new ComponentProperty() {{}};
                                                                }};
                                                                configured = false;
                                                                defaultValue = "eos";
                                                                event = "veniam";
                                                                importedValue = "repudiandae";
                                                                model = "sint";
                                                                property = "occaecati";
                                                                type = "debitis";
                                                                userAttribute = "laboriosam";
                                                                value = "eos";
                                                            }};
                                                            type = new ComponentProperty() {{
                                                                bindingProperties = new ComponentPropertyBindingProperties("porro") {{
                                                                    field = "amet";
                                                                    property = "incidunt";
                                                                }};
                                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                    put("reiciendis", new FormBindingElement("in", "omnis") {{
                                                                        element = "voluptate";
                                                                        property = "tempore";
                                                                    }});
                                                                    put("possimus", new FormBindingElement("expedita", "iusto") {{
                                                                        element = "tenetur";
                                                                        property = "recusandae";
                                                                    }});
                                                                    put("esse", new FormBindingElement("quod", "ratione") {{
                                                                        element = "harum";
                                                                        property = "ad";
                                                                    }});
                                                                }};
                                                                collectionBindingProperties = new ComponentPropertyBindingProperties("dolore") {{
                                                                    field = "totam";
                                                                    property = "vero";
                                                                }};
                                                                componentName = "nam";
                                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                }};
                                                                condition = new ComponentConditionProperty() {{
                                                                    else_ = new ComponentProperty() {{}};
                                                                    field = "maiores";
                                                                    operand = "cupiditate";
                                                                    operandType = "illo";
                                                                    operator = "saepe";
                                                                    property = "enim";
                                                                    then = new ComponentProperty() {{}};
                                                                }};
                                                                configured = false;
                                                                defaultValue = "eaque";
                                                                event = "ex";
                                                                importedValue = "eveniet";
                                                                model = "delectus";
                                                                property = "deleniti";
                                                                type = "provident";
                                                                userAttribute = "aut";
                                                                value = "dolorum";
                                                            }};
                                                            url = new ComponentProperty() {{
                                                                bindingProperties = new ComponentPropertyBindingProperties("nam") {{
                                                                    field = "nostrum";
                                                                    property = "tempora";
                                                                }};
                                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                                    put("odio", new FormBindingElement("veritatis", "autem") {{
                                                                        element = "nostrum";
                                                                        property = "maiores";
                                                                    }});
                                                                    put("earum", new FormBindingElement("possimus", "nesciunt") {{
                                                                        element = "minima";
                                                                        property = "ex";
                                                                    }});
                                                                }};
                                                                collectionBindingProperties = new ComponentPropertyBindingProperties("fuga") {{
                                                                    field = "corrupti";
                                                                    property = "nostrum";
                                                                }};
                                                                componentName = "sequi";
                                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                    add(new ComponentProperty() {{}}),
                                                                }};
                                                                condition = new ComponentConditionProperty() {{
                                                                    else_ = new ComponentProperty() {{}};
                                                                    field = "numquam";
                                                                    operand = "laborum";
                                                                    operandType = "eligendi";
                                                                    operator = "autem";
                                                                    property = "adipisci";
                                                                    then = new ComponentProperty() {{}};
                                                                }};
                                                                configured = false;
                                                                defaultValue = "sunt";
                                                                event = "rerum";
                                                                importedValue = "occaecati";
                                                                model = "provident";
                                                                property = "necessitatibus";
                                                                type = "fugit";
                                                                userAttribute = "autem";
                                                                value = "optio";
                                                            }};
                                                        }};
                                                    }});
                                                }};
                                                name = "Nicolas Labadie";
                                                overrides = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                                    put("repellendus", new java.util.HashMap<String, String>() {{
                                                        put("molestias", "dolore");
                                                        put("et", "accusantium");
                                                        put("maiores", "nisi");
                                                    }});
                                                    put("velit", new java.util.HashMap<String, String>() {{
                                                        put("expedita", "hic");
                                                        put("blanditiis", "vitae");
                                                        put("iusto", "atque");
                                                    }});
                                                    put("velit", new java.util.HashMap<String, String>() {{
                                                        put("nam", "aperiam");
                                                        put("vitae", "mollitia");
                                                    }});
                                                    put("asperiores", new java.util.HashMap<String, String>() {{
                                                        put("quibusdam", "quam");
                                                        put("deleniti", "rem");
                                                        put("vel", "eos");
                                                        put("labore", "sunt");
                                                    }});
                                                }};
                                                properties = "blanditiis";
                                                schemaVersion = "iste";
                                                sourceId = "accusamus";
                                                tags = new java.util.HashMap<String, String>() {{
                                                    put("incidunt", "labore");
                                                    put("blanditiis", "ducimus");
                                                    put("consectetur", "sapiente");
                                                }};
                                                variants = new org.openapis.openapi.models.shared.ComponentVariant[]{{
                                                    add(new ComponentVariant() {{
                                                        overrides = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                                            put("ratione", new java.util.HashMap<String, String>() {{
                                                                put("asperiores", "architecto");
                                                            }});
                                                        }};
                                                        variantValues = new java.util.HashMap<String, String>() {{
                                                            put("possimus", "tempore");
                                                            put("asperiores", "quasi");
                                                            put("consequuntur", "nemo");
                                                        }};
                                                    }}),
                                                    add(new ComponentVariant() {{
                                                        overrides = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                                            put("debitis", new java.util.HashMap<String, String>() {{
                                                                put("veritatis", "minima");
                                                                put("magni", "itaque");
                                                            }});
                                                            put("error", new java.util.HashMap<String, String>() {{
                                                                put("error", "placeat");
                                                                put("temporibus", "voluptate");
                                                                put("earum", "minima");
                                                            }});
                                                            put("odit", new java.util.HashMap<String, String>() {{
                                                                put("eius", "error");
                                                            }});
                                                            put("vel", new java.util.HashMap<String, String>() {{
                                                                put("alias", "itaque");
                                                                put("ab", "sunt");
                                                                put("amet", "cum");
                                                            }});
                                                        }};
                                                        variantValues = new java.util.HashMap<String, String>() {{
                                                            put("corrupti", "non");
                                                            put("esse", "vero");
                                                        }};
                                                    }}),
                                                }};
                                            }};);, "eligendi", "minima") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "architecto";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "autem";
                xAmzSignature = "in";
                xAmzSignedHeaders = "repellat";
                clientToken = "amet";
            }};            

            CreateComponentResponse res = sdk.createComponent(req);

            if (res.createComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createComponent](docs/sdk/README.md#createcomponent) - Creates a new component for an Amplify app.
* [createForm](docs/sdk/README.md#createform) - Creates a new form for an Amplify app.
* [createTheme](docs/sdk/README.md#createtheme) - Creates a theme to apply to the components in an Amplify app.
* [deleteComponent](docs/sdk/README.md#deletecomponent) - Deletes a component from an Amplify app.
* [deleteForm](docs/sdk/README.md#deleteform) - Deletes a form from an Amplify app.
* [deleteTheme](docs/sdk/README.md#deletetheme) - Deletes a theme from an Amplify app.
* [exchangeCodeForToken](docs/sdk/README.md#exchangecodefortoken) - Exchanges an access code for a token.
* [exportComponents](docs/sdk/README.md#exportcomponents) - Exports component configurations to code that is ready to integrate into an Amplify app.
* [exportForms](docs/sdk/README.md#exportforms) - Exports form configurations to code that is ready to integrate into an Amplify app.
* [exportThemes](docs/sdk/README.md#exportthemes) - Exports theme configurations to code that is ready to integrate into an Amplify app.
* [getComponent](docs/sdk/README.md#getcomponent) - Returns an existing component for an Amplify app.
* [getForm](docs/sdk/README.md#getform) - Returns an existing form for an Amplify app.
* [getMetadata](docs/sdk/README.md#getmetadata) - Returns existing metadata for an Amplify app.
* [getTheme](docs/sdk/README.md#gettheme) - Returns an existing theme for an Amplify app.
* [listComponents](docs/sdk/README.md#listcomponents) - Retrieves a list of components for a specified Amplify app and backend environment.
* [listForms](docs/sdk/README.md#listforms) - Retrieves a list of forms for a specified Amplify app and backend environment.
* [listThemes](docs/sdk/README.md#listthemes) - Retrieves a list of themes for a specified Amplify app and backend environment.
* [putMetadataFlag](docs/sdk/README.md#putmetadataflag) - Stores the metadata information about a feature on a form.
* [refreshToken](docs/sdk/README.md#refreshtoken) - Refreshes a previously issued access token that might have expired.
* [updateComponent](docs/sdk/README.md#updatecomponent) - Updates an existing component.
* [updateForm](docs/sdk/README.md#updateform) - Updates an existing form.
* [updateTheme](docs/sdk/README.md#updatetheme) - Updates an existing theme.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
