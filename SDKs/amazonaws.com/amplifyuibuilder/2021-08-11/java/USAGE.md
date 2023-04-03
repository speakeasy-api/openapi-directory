<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateComponentRequestBodyComponentToCreate;
import org.openapis.openapi.models.operations.CreateComponentRequestBody;
import org.openapis.openapi.models.operations.CreateComponentRequest;
import org.openapis.openapi.models.operations.CreateComponentResponse;
import org.openapis.openapi.models.shared.ComponentVariant;
import org.openapis.openapi.models.shared.ComponentEvent;
import org.openapis.openapi.models.shared.ActionParameters;
import org.openapis.openapi.models.shared.ComponentProperty;
import org.openapis.openapi.models.shared.ComponentConditionProperty;
import org.openapis.openapi.models.shared.ComponentPropertyBindingProperties;
import org.openapis.openapi.models.shared.FormBindingElement;
import org.openapis.openapi.models.shared.MutationActionSetStateParameter;
import org.openapis.openapi.models.shared.ComponentDataConfiguration;
import org.openapis.openapi.models.shared.SortProperty;
import org.openapis.openapi.models.shared.SortDirectionEnum;
import org.openapis.openapi.models.shared.Predicate;
import org.openapis.openapi.models.shared.ComponentChild;
import org.openapis.openapi.models.shared.ComponentBindingPropertiesValue;
import org.openapis.openapi.models.shared.ComponentBindingPropertiesValueProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComponentRequest req = new CreateComponentRequest() {{
                requestBody = new CreateComponentRequestBody() {{
                    componentToCreate = new CreateComponentRequestBodyComponentToCreate() {{
                        bindingProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentBindingPropertiesValue>() {{
                            put("provident", new ComponentBindingPropertiesValue() {{
                                bindingProperties = new ComponentBindingPropertiesValueProperties() {{
                                    bucket = "distinctio";
                                    defaultValue = "quibusdam";
                                    field = "unde";
                                    key = "nulla";
                                    model = "corrupti";
                                    predicates = new org.openapis.openapi.models.shared.Predicate[]{{
                                        add(new Predicate() {{
                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                            field = "error";
                                            operand = "deserunt";
                                            operator = "suscipit";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                        }}),
                                        add(new Predicate() {{
                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                            field = "debitis";
                                            operand = "ipsa";
                                            operator = "delectus";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                        }}),
                                        add(new Predicate() {{
                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                            field = "molestiae";
                                            operand = "minus";
                                            operator = "placeat";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
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
                                            field = "excepturi";
                                            operand = "nisi";
                                            operator = "recusandae";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                        }}),
                                    }};
                                    slotName = "ab";
                                    userAttribute = "quis";
                                }};
                                defaultValue = "veritatis";
                                type = "deserunt";
                            }});
                            put("perferendis", new ComponentBindingPropertiesValue() {{
                                bindingProperties = new ComponentBindingPropertiesValueProperties() {{
                                    bucket = "ipsam";
                                    defaultValue = "repellendus";
                                    field = "sapiente";
                                    key = "quo";
                                    model = "odit";
                                    predicates = new org.openapis.openapi.models.shared.Predicate[]{{
                                        add(new Predicate() {{
                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                            field = "maiores";
                                            operand = "molestiae";
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
                                            operator = "dolorum";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                            }};
                                        }}),
                                        add(new Predicate() {{
                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                            field = "officia";
                                            operand = "occaecati";
                                            operator = "fugit";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
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
                                            field = "optio";
                                            operand = "totam";
                                            operator = "beatae";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                        }}),
                                    }};
                                    slotName = "molestiae";
                                    userAttribute = "modi";
                                }};
                                defaultValue = "qui";
                                type = "impedit";
                            }});
                            put("cum", new ComponentBindingPropertiesValue() {{
                                bindingProperties = new ComponentBindingPropertiesValueProperties() {{
                                    bucket = "esse";
                                    defaultValue = "ipsum";
                                    field = "excepturi";
                                    key = "aspernatur";
                                    model = "perferendis";
                                    predicates = new org.openapis.openapi.models.shared.Predicate[]{{
                                        add(new Predicate() {{
                                            and = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                            field = "sed";
                                            operand = "iste";
                                            operator = "dolor";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
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
                                            field = "hic";
                                            operand = "saepe";
                                            operator = "fuga";
                                            or = new org.openapis.openapi.models.shared.Predicate[]{{
                                                add(new Predicate() {{}}),
                                                add(new Predicate() {{}}),
                                            }};
                                        }}),
                                    }};
                                    slotName = "corporis";
                                    userAttribute = "iste";
                                }};
                                defaultValue = "iure";
                                type = "saepe";
                            }});
                        }};
                        children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                            add(new ComponentChild() {{
                                children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                    add(new ComponentChild() {{}}),
                                }};
                                componentType = "ipsa";
                                events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                    put("est", new ComponentEvent() {{
                                        action = "mollitia";
                                        bindingEvent = "laborum";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "dolores";
                                                    property = "dolorem";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("explicabo", new FormBindingElement() {{
                                                        element = "nobis";
                                                        property = "enim";
                                                    }});
                                                    put("omnis", new FormBindingElement() {{
                                                        element = "nemo";
                                                        property = "minima";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "excepturi";
                                                    property = "accusantium";
                                                }};
                                                componentName = "iure";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "doloribus";
                                                    operand = "sapiente";
                                                    operandType = "architecto";
                                                    operator = "mollitia";
                                                    property = "dolorem";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "culpa";
                                                event = "consequuntur";
                                                importedValue = "repellat";
                                                model = "mollitia";
                                                property = "occaecati";
                                                type = "numquam";
                                                userAttribute = "commodi";
                                                value = "quam";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("velit", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "error";
                                                        property = "quia";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("vitae", new FormBindingElement() {{
                                                            element = "laborum";
                                                            property = "animi";
                                                        }});
                                                        put("enim", new FormBindingElement() {{
                                                            element = "odit";
                                                            property = "quo";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "sequi";
                                                        property = "tenetur";
                                                    }};
                                                    componentName = "ipsam";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "possimus";
                                                        operand = "aut";
                                                        operandType = "quasi";
                                                        operator = "error";
                                                        property = "temporibus";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "laborum";
                                                    event = "quasi";
                                                    importedValue = "reiciendis";
                                                    model = "voluptatibus";
                                                    property = "vero";
                                                    type = "nihil";
                                                    userAttribute = "praesentium";
                                                    value = "voluptatibus";
                                                }});
                                                put("ipsa", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "omnis";
                                                        property = "voluptate";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("perferendis", new FormBindingElement() {{
                                                            element = "doloremque";
                                                            property = "reprehenderit";
                                                        }});
                                                        put("ut", new FormBindingElement() {{
                                                            element = "maiores";
                                                            property = "dicta";
                                                        }});
                                                        put("corporis", new FormBindingElement() {{
                                                            element = "dolore";
                                                            property = "iusto";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "dicta";
                                                        property = "harum";
                                                    }};
                                                    componentName = "enim";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "commodi";
                                                        operand = "repudiandae";
                                                        operandType = "quae";
                                                        operator = "ipsum";
                                                        property = "quidem";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "molestias";
                                                    event = "excepturi";
                                                    importedValue = "pariatur";
                                                    model = "modi";
                                                    property = "praesentium";
                                                    type = "rem";
                                                    userAttribute = "voluptates";
                                                    value = "quasi";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "repudiandae";
                                                    property = "sint";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("itaque", new FormBindingElement() {{
                                                        element = "incidunt";
                                                        property = "enim";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "consequatur";
                                                    property = "est";
                                                }};
                                                componentName = "quibusdam";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "deserunt";
                                                    operand = "distinctio";
                                                    operandType = "quibusdam";
                                                    operator = "labore";
                                                    property = "modi";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "qui";
                                                event = "aliquid";
                                                importedValue = "cupiditate";
                                                model = "quos";
                                                property = "perferendis";
                                                type = "magni";
                                                userAttribute = "assumenda";
                                                value = "ipsam";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "alias";
                                                    property = "fugit";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("excepturi", new FormBindingElement() {{
                                                        element = "tempora";
                                                        property = "facilis";
                                                    }});
                                                    put("tempore", new FormBindingElement() {{
                                                        element = "labore";
                                                        property = "delectus";
                                                    }});
                                                    put("eum", new FormBindingElement() {{
                                                        element = "non";
                                                        property = "eligendi";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "sint";
                                                    property = "aliquid";
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
                                                    field = "sint";
                                                    operand = "officia";
                                                    operandType = "dolor";
                                                    operator = "debitis";
                                                    property = "a";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "dolorum";
                                                event = "in";
                                                importedValue = "in";
                                                model = "illum";
                                                property = "maiores";
                                                type = "rerum";
                                                userAttribute = "dicta";
                                                value = "magnam";
                                            }};
                                            model = "cumque";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "facere";
                                                property = "ea";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "aliquid";
                                                        property = "laborum";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("non", new FormBindingElement() {{
                                                            element = "occaecati";
                                                            property = "enim";
                                                        }});
                                                        put("accusamus", new FormBindingElement() {{
                                                            element = "delectus";
                                                            property = "quidem";
                                                        }});
                                                        put("provident", new FormBindingElement() {{
                                                            element = "nam";
                                                            property = "id";
                                                        }});
                                                        put("blanditiis", new FormBindingElement() {{
                                                            element = "deleniti";
                                                            property = "sapiente";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "amet";
                                                        property = "deserunt";
                                                    }};
                                                    componentName = "nisi";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "natus";
                                                        operand = "omnis";
                                                        operandType = "molestiae";
                                                        operator = "perferendis";
                                                        property = "nihil";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "magnam";
                                                    event = "distinctio";
                                                    importedValue = "id";
                                                    model = "labore";
                                                    property = "labore";
                                                    type = "suscipit";
                                                    userAttribute = "natus";
                                                    value = "nobis";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "eum";
                                                    property = "vero";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("architecto", new FormBindingElement() {{
                                                        element = "magnam";
                                                        property = "et";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "excepturi";
                                                    property = "ullam";
                                                }};
                                                componentName = "provident";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "sint";
                                                    operand = "accusantium";
                                                    operandType = "mollitia";
                                                    operator = "reiciendis";
                                                    property = "mollitia";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "ad";
                                                event = "eum";
                                                importedValue = "dolor";
                                                model = "necessitatibus";
                                                property = "odit";
                                                type = "nemo";
                                                userAttribute = "quasi";
                                                value = "iure";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "doloribus";
                                                    property = "debitis";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("maxime", new FormBindingElement() {{
                                                        element = "deleniti";
                                                        property = "facilis";
                                                    }});
                                                    put("in", new FormBindingElement() {{
                                                        element = "architecto";
                                                        property = "architecto";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "repudiandae";
                                                    property = "ullam";
                                                }};
                                                componentName = "expedita";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "repellat";
                                                    operand = "quibusdam";
                                                    operandType = "sed";
                                                    operator = "saepe";
                                                    property = "pariatur";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "accusantium";
                                                event = "consequuntur";
                                                importedValue = "praesentium";
                                                model = "natus";
                                                property = "magni";
                                                type = "sunt";
                                                userAttribute = "quo";
                                                value = "illum";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "pariatur";
                                                    property = "maxime";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("excepturi", new FormBindingElement() {{
                                                        element = "odit";
                                                        property = "ea";
                                                    }});
                                                    put("accusantium", new FormBindingElement() {{
                                                        element = "ab";
                                                        property = "maiores";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quidem";
                                                    property = "ipsam";
                                                }};
                                                componentName = "voluptate";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "nam";
                                                    operand = "eaque";
                                                    operandType = "pariatur";
                                                    operator = "nemo";
                                                    property = "voluptatibus";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "perferendis";
                                                event = "fugiat";
                                                importedValue = "amet";
                                                model = "aut";
                                                property = "cumque";
                                                type = "corporis";
                                                userAttribute = "hic";
                                                value = "libero";
                                            }};
                                        }};
                                    }});
                                    put("nobis", new ComponentEvent() {{
                                        action = "dolores";
                                        bindingEvent = "quis";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "totam";
                                                    property = "dignissimos";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("quis", new FormBindingElement() {{
                                                        element = "nesciunt";
                                                        property = "eos";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "perferendis";
                                                    property = "dolores";
                                                }};
                                                componentName = "minus";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "dolor";
                                                    operand = "vero";
                                                    operandType = "nostrum";
                                                    operator = "hic";
                                                    property = "recusandae";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "omnis";
                                                event = "facilis";
                                                importedValue = "perspiciatis";
                                                model = "voluptatem";
                                                property = "porro";
                                                type = "consequuntur";
                                                userAttribute = "blanditiis";
                                                value = "error";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("occaecati", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "rerum";
                                                        property = "adipisci";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("earum", new FormBindingElement() {{
                                                            element = "modi";
                                                            property = "iste";
                                                        }});
                                                        put("dolorum", new FormBindingElement() {{
                                                            element = "deleniti";
                                                            property = "pariatur";
                                                        }});
                                                        put("provident", new FormBindingElement() {{
                                                            element = "nobis";
                                                            property = "libero";
                                                        }});
                                                        put("delectus", new FormBindingElement() {{
                                                            element = "quaerat";
                                                            property = "quos";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "aliquid";
                                                        property = "dolorem";
                                                    }};
                                                    componentName = "dolorem";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "qui";
                                                        operand = "ipsum";
                                                        operandType = "hic";
                                                        operator = "excepturi";
                                                        property = "cum";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "voluptate";
                                                    event = "dignissimos";
                                                    importedValue = "reiciendis";
                                                    model = "amet";
                                                    property = "dolorum";
                                                    type = "numquam";
                                                    userAttribute = "veritatis";
                                                    value = "ipsa";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "ipsa";
                                                    property = "iure";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("quaerat", new FormBindingElement() {{
                                                        element = "accusamus";
                                                        property = "quidem";
                                                    }});
                                                    put("voluptatibus", new FormBindingElement() {{
                                                        element = "voluptas";
                                                        property = "natus";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "eos";
                                                    property = "atque";
                                                }};
                                                componentName = "sit";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "ab";
                                                    operand = "soluta";
                                                    operandType = "dolorum";
                                                    operator = "iusto";
                                                    property = "voluptate";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "dolorum";
                                                event = "deleniti";
                                                importedValue = "omnis";
                                                model = "necessitatibus";
                                                property = "distinctio";
                                                type = "asperiores";
                                                userAttribute = "nihil";
                                                value = "ipsum";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "voluptate";
                                                    property = "id";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("eius", new FormBindingElement() {{
                                                        element = "aspernatur";
                                                        property = "perferendis";
                                                    }});
                                                    put("amet", new FormBindingElement() {{
                                                        element = "optio";
                                                        property = "accusamus";
                                                    }});
                                                    put("ad", new FormBindingElement() {{
                                                        element = "saepe";
                                                        property = "suscipit";
                                                    }});
                                                    put("deserunt", new FormBindingElement() {{
                                                        element = "provident";
                                                        property = "minima";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "repellendus";
                                                    property = "totam";
                                                }};
                                                componentName = "similique";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "at";
                                                    operand = "quaerat";
                                                    operandType = "tempora";
                                                    operator = "vel";
                                                    property = "quod";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "officiis";
                                                event = "qui";
                                                importedValue = "dolorum";
                                                model = "a";
                                                property = "esse";
                                                type = "harum";
                                                userAttribute = "iusto";
                                                value = "ipsum";
                                            }};
                                            model = "quisquam";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "tenetur";
                                                property = "amet";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "tempore";
                                                        property = "accusamus";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("enim", new FormBindingElement() {{
                                                            element = "dolorem";
                                                            property = "sapiente";
                                                        }});
                                                        put("totam", new FormBindingElement() {{
                                                            element = "nihil";
                                                            property = "sit";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "expedita";
                                                        property = "neque";
                                                    }};
                                                    componentName = "sed";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "libero";
                                                        operand = "voluptas";
                                                        operandType = "deserunt";
                                                        operator = "quam";
                                                        property = "ipsum";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "incidunt";
                                                    event = "qui";
                                                    importedValue = "cupiditate";
                                                    model = "maxime";
                                                    property = "pariatur";
                                                    type = "soluta";
                                                    userAttribute = "dicta";
                                                    value = "laborum";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "totam";
                                                    property = "incidunt";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("dolores", new FormBindingElement() {{
                                                        element = "distinctio";
                                                        property = "facilis";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "aliquid";
                                                    property = "quam";
                                                }};
                                                componentName = "molestias";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "qui";
                                                    operand = "neque";
                                                    operandType = "fugit";
                                                    operator = "magni";
                                                    property = "odio";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "sunt";
                                                event = "ullam";
                                                importedValue = "nam";
                                                model = "hic";
                                                property = "voluptatem";
                                                type = "cumque";
                                                userAttribute = "soluta";
                                                value = "nobis";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "et";
                                                    property = "saepe";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("veritatis", new FormBindingElement() {{
                                                        element = "nobis";
                                                        property = "quos";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "tempore";
                                                    property = "cupiditate";
                                                }};
                                                componentName = "aperiam";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "dolorem";
                                                    operand = "dolore";
                                                    operandType = "labore";
                                                    operator = "adipisci";
                                                    property = "dolorum";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "architecto";
                                                event = "quae";
                                                importedValue = "aut";
                                                model = "quas";
                                                property = "itaque";
                                                type = "consequatur";
                                                userAttribute = "est";
                                                value = "repellendus";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "porro";
                                                    property = "doloribus";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("facilis", new FormBindingElement() {{
                                                        element = "cupiditate";
                                                        property = "qui";
                                                    }});
                                                    put("quae", new FormBindingElement() {{
                                                        element = "laudantium";
                                                        property = "odio";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "occaecati";
                                                    property = "voluptatibus";
                                                }};
                                                componentName = "quisquam";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "omnis";
                                                    operand = "quis";
                                                    operandType = "ipsum";
                                                    operator = "delectus";
                                                    property = "voluptate";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "consectetur";
                                                event = "vero";
                                                importedValue = "tenetur";
                                                model = "dignissimos";
                                                property = "hic";
                                                type = "distinctio";
                                                userAttribute = "quod";
                                                value = "odio";
                                            }};
                                        }};
                                    }});
                                    put("similique", new ComponentEvent() {{
                                        action = "facilis";
                                        bindingEvent = "vero";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "ducimus";
                                                    property = "dolore";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("illum", new FormBindingElement() {{
                                                        element = "sequi";
                                                        property = "natus";
                                                    }});
                                                    put("impedit", new FormBindingElement() {{
                                                        element = "aut";
                                                        property = "voluptatibus";
                                                    }});
                                                    put("exercitationem", new FormBindingElement() {{
                                                        element = "nulla";
                                                        property = "fugit";
                                                    }});
                                                    put("porro", new FormBindingElement() {{
                                                        element = "maiores";
                                                        property = "doloribus";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "iusto";
                                                    property = "eligendi";
                                                }};
                                                componentName = "ducimus";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "officia";
                                                    operand = "tempora";
                                                    operandType = "ipsam";
                                                    operator = "ea";
                                                    property = "aspernatur";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "vel";
                                                event = "possimus";
                                                importedValue = "magnam";
                                                model = "ratione";
                                                property = "ex";
                                                type = "laudantium";
                                                userAttribute = "dicta";
                                                value = "dolor";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("quasi", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "ex";
                                                        property = "nulla";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("voluptatibus", new FormBindingElement() {{
                                                            element = "nostrum";
                                                            property = "sapiente";
                                                        }});
                                                        put("quisquam", new FormBindingElement() {{
                                                            element = "saepe";
                                                            property = "ea";
                                                        }});
                                                        put("impedit", new FormBindingElement() {{
                                                            element = "corporis";
                                                            property = "veniam";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "aliquid";
                                                        property = "inventore";
                                                    }};
                                                    componentName = "magnam";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "quo";
                                                        operand = "consectetur";
                                                        operandType = "recusandae";
                                                        operator = "aspernatur";
                                                        property = "minima";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "eaque";
                                                    event = "a";
                                                    importedValue = "libero";
                                                    model = "aut";
                                                    property = "aut";
                                                    type = "deleniti";
                                                    userAttribute = "impedit";
                                                    value = "aliquam";
                                                }});
                                                put("fugit", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "accusamus";
                                                        property = "inventore";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("et", new FormBindingElement() {{
                                                            element = "dolorum";
                                                            property = "laborum";
                                                        }});
                                                        put("placeat", new FormBindingElement() {{
                                                            element = "velit";
                                                            property = "eum";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "autem";
                                                        property = "nobis";
                                                    }};
                                                    componentName = "quas";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "nulla";
                                                        operand = "voluptas";
                                                        operandType = "libero";
                                                        operator = "quasi";
                                                        property = "tempora";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "numquam";
                                                    event = "explicabo";
                                                    importedValue = "provident";
                                                    model = "ipsa";
                                                    property = "molestiae";
                                                    type = "magnam";
                                                    userAttribute = "odio";
                                                    value = "eius";
                                                }});
                                                put("esse", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "esse";
                                                        property = "rem";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("reprehenderit", new FormBindingElement() {{
                                                            element = "quidem";
                                                            property = "fugiat";
                                                        }});
                                                        put("ut", new FormBindingElement() {{
                                                            element = "eum";
                                                            property = "suscipit";
                                                        }});
                                                        put("assumenda", new FormBindingElement() {{
                                                            element = "eos";
                                                            property = "praesentium";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "quisquam";
                                                        property = "veritatis";
                                                    }};
                                                    componentName = "ipsa";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "quidem";
                                                        operand = "neque";
                                                        operandType = "quo";
                                                        operator = "illum";
                                                        property = "quo";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "fuga";
                                                    event = "eius";
                                                    importedValue = "eos";
                                                    model = "voluptas";
                                                    property = "ab";
                                                    type = "cupiditate";
                                                    userAttribute = "consequatur";
                                                    value = "tempora";
                                                }});
                                                put("debitis", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "ipsam";
                                                        property = "aspernatur";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("quo", new FormBindingElement() {{
                                                            element = "esse";
                                                            property = "recusandae";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "aperiam";
                                                        property = "distinctio";
                                                    }};
                                                    componentName = "quod";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "inventore";
                                                        operand = "nihil";
                                                        operandType = "totam";
                                                        operator = "accusamus";
                                                        property = "aliquam";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "odio";
                                                    event = "occaecati";
                                                    importedValue = "commodi";
                                                    model = "sapiente";
                                                    property = "dolores";
                                                    type = "deserunt";
                                                    userAttribute = "molestiae";
                                                    value = "accusantium";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "porro";
                                                    property = "eum";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("praesentium", new FormBindingElement() {{
                                                        element = "consequuntur";
                                                        property = "deleniti";
                                                    }});
                                                    put("fugit", new FormBindingElement() {{
                                                        element = "fuga";
                                                        property = "mollitia";
                                                    }});
                                                    put("incidunt", new FormBindingElement() {{
                                                        element = "atque";
                                                        property = "explicabo";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "minima";
                                                    property = "nisi";
                                                }};
                                                componentName = "fugit";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "consequuntur";
                                                    operand = "ratione";
                                                    operandType = "explicabo";
                                                    operator = "saepe";
                                                    property = "occaecati";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "atque";
                                                event = "et";
                                                importedValue = "esse";
                                                model = "eveniet";
                                                property = "accusamus";
                                                type = "veritatis";
                                                userAttribute = "esse";
                                                value = "quod";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "nam";
                                                    property = "vero";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("quasi", new FormBindingElement() {{
                                                        element = "saepe";
                                                        property = "vel";
                                                    }});
                                                    put("harum", new FormBindingElement() {{
                                                        element = "molestiae";
                                                        property = "rerum";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "occaecati";
                                                    property = "minima";
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
                                                    field = "sit";
                                                    operand = "culpa";
                                                    operandType = "tempore";
                                                    operator = "adipisci";
                                                    property = "cumque";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "consequuntur";
                                                event = "consequatur";
                                                importedValue = "minus";
                                                model = "quaerat";
                                                property = "sapiente";
                                                type = "consectetur";
                                                userAttribute = "esse";
                                                value = "blanditiis";
                                            }};
                                            model = "provident";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "a";
                                                property = "nulla";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "quas";
                                                        property = "esse";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("a", new FormBindingElement() {{
                                                            element = "error";
                                                            property = "sint";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "pariatur";
                                                        property = "possimus";
                                                    }};
                                                    componentName = "quia";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "asperiores";
                                                        operand = "facere";
                                                        operandType = "veritatis";
                                                        operator = "consequuntur";
                                                        property = "quasi";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "similique";
                                                    event = "culpa";
                                                    importedValue = "aliquid";
                                                    model = "tenetur";
                                                    property = "quae";
                                                    type = "earum";
                                                    userAttribute = "vel";
                                                    value = "in";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "eius";
                                                    property = "libero";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("soluta", new FormBindingElement() {{
                                                        element = "accusantium";
                                                        property = "aliquam";
                                                    }});
                                                    put("sapiente", new FormBindingElement() {{
                                                        element = "dicta";
                                                        property = "ullam";
                                                    }});
                                                    put("reprehenderit", new FormBindingElement() {{
                                                        element = "ullam";
                                                        property = "nisi";
                                                    }});
                                                    put("aut", new FormBindingElement() {{
                                                        element = "voluptatum";
                                                        property = "qui";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quibusdam";
                                                    property = "ex";
                                                }};
                                                componentName = "deleniti";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "dolorum";
                                                    operand = "architecto";
                                                    operandType = "omnis";
                                                    operator = "tenetur";
                                                    property = "quasi";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "at";
                                                event = "et";
                                                importedValue = "voluptate";
                                                model = "ipsa";
                                                property = "minima";
                                                type = "veritatis";
                                                userAttribute = "consectetur";
                                                value = "adipisci";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "iste";
                                                    property = "temporibus";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("rem", new FormBindingElement() {{
                                                        element = "aut";
                                                        property = "laudantium";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "eum";
                                                    property = "mollitia";
                                                }};
                                                componentName = "ab";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "non";
                                                    operand = "voluptatem";
                                                    operandType = "dolor";
                                                    operator = "occaecati";
                                                    property = "numquam";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "impedit";
                                                event = "explicabo";
                                                importedValue = "voluptas";
                                                model = "aut";
                                                property = "dignissimos";
                                                type = "dicta";
                                                userAttribute = "maiores";
                                                value = "natus";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "velit";
                                                    property = "voluptatibus";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("asperiores", new FormBindingElement() {{
                                                        element = "aperiam";
                                                        property = "ea";
                                                    }});
                                                    put("quaerat", new FormBindingElement() {{
                                                        element = "consequuntur";
                                                        property = "repellendus";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "officia";
                                                    property = "maxime";
                                                }};
                                                componentName = "dignissimos";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "asperiores";
                                                    operand = "nemo";
                                                    operandType = "quae";
                                                    operator = "quaerat";
                                                    property = "porro";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "quod";
                                                event = "labore";
                                                importedValue = "ab";
                                                model = "adipisci";
                                                property = "fuga";
                                                type = "id";
                                                userAttribute = "suscipit";
                                                value = "velit";
                                            }};
                                        }};
                                    }});
                                    put("culpa", new ComponentEvent() {{
                                        action = "est";
                                        bindingEvent = "recusandae";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "totam";
                                                    property = "fugiat";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("ducimus", new FormBindingElement() {{
                                                        element = "quos";
                                                        property = "vel";
                                                    }});
                                                    put("labore", new FormBindingElement() {{
                                                        element = "possimus";
                                                        property = "facilis";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "cum";
                                                    property = "commodi";
                                                }};
                                                componentName = "in";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "reiciendis";
                                                    operand = "assumenda";
                                                    operandType = "nemo";
                                                    operator = "recusandae";
                                                    property = "aliquid";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "aperiam";
                                                event = "cum";
                                                importedValue = "consectetur";
                                                model = "in";
                                                property = "exercitationem";
                                                type = "earum";
                                                userAttribute = "facere";
                                                value = "numquam";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("suscipit", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "reiciendis";
                                                        property = "quidem";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("necessitatibus", new FormBindingElement() {{
                                                            element = "dolore";
                                                            property = "sunt";
                                                        }});
                                                        put("asperiores", new FormBindingElement() {{
                                                            element = "adipisci";
                                                            property = "non";
                                                        }});
                                                        put("amet", new FormBindingElement() {{
                                                            element = "beatae";
                                                            property = "dignissimos";
                                                        }});
                                                        put("a", new FormBindingElement() {{
                                                            element = "debitis";
                                                            property = "consectetur";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "corporis";
                                                        property = "harum";
                                                    }};
                                                    componentName = "laboriosam";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "voluptates";
                                                        operand = "libero";
                                                        operandType = "vitae";
                                                        operator = "accusamus";
                                                        property = "similique";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "tempora";
                                                    event = "aspernatur";
                                                    importedValue = "voluptas";
                                                    model = "voluptas";
                                                    property = "voluptas";
                                                    type = "minima";
                                                    userAttribute = "nobis";
                                                    value = "dolorum";
                                                }});
                                                put("adipisci", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "minus";
                                                        property = "dolores";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("in", new FormBindingElement() {{
                                                            element = "dolore";
                                                            property = "aliquam";
                                                        }});
                                                        put("officiis", new FormBindingElement() {{
                                                            element = "temporibus";
                                                            property = "ullam";
                                                        }});
                                                        put("adipisci", new FormBindingElement() {{
                                                            element = "cum";
                                                            property = "blanditiis";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "quas";
                                                        property = "hic";
                                                    }};
                                                    componentName = "nesciunt";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "corrupti";
                                                        operand = "pariatur";
                                                        operandType = "totam";
                                                        operator = "hic";
                                                        property = "exercitationem";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "nobis";
                                                    event = "sit";
                                                    importedValue = "rerum";
                                                    model = "sed";
                                                    property = "reiciendis";
                                                    type = "explicabo";
                                                    userAttribute = "asperiores";
                                                    value = "facilis";
                                                }});
                                                put("voluptate", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "expedita";
                                                        property = "ab";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("dolore", new FormBindingElement() {{
                                                            element = "laborum";
                                                            property = "sed";
                                                        }});
                                                        put("in", new FormBindingElement() {{
                                                            element = "commodi";
                                                            property = "quidem";
                                                        }});
                                                        put("explicabo", new FormBindingElement() {{
                                                            element = "voluptas";
                                                            property = "unde";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "architecto";
                                                        property = "suscipit";
                                                    }};
                                                    componentName = "sapiente";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "illo";
                                                        operand = "reiciendis";
                                                        operandType = "perferendis";
                                                        operator = "corrupti";
                                                        property = "maiores";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "incidunt";
                                                    event = "sed";
                                                    importedValue = "provident";
                                                    model = "eius";
                                                    property = "necessitatibus";
                                                    type = "ipsum";
                                                    userAttribute = "ea";
                                                    value = "occaecati";
                                                }});
                                                put("quos", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "voluptatibus";
                                                        property = "tempora";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("voluptate", new FormBindingElement() {{
                                                            element = "reiciendis";
                                                            property = "ex";
                                                        }});
                                                        put("sit", new FormBindingElement() {{
                                                            element = "non";
                                                            property = "officiis";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "praesentium";
                                                        property = "facilis";
                                                    }};
                                                    componentName = "quaerat";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "ipsam";
                                                        operand = "debitis";
                                                        operandType = "rem";
                                                        operator = "sit";
                                                        property = "nobis";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "error";
                                                    event = "veniam";
                                                    importedValue = "minima";
                                                    model = "recusandae";
                                                    property = "reiciendis";
                                                    type = "nulla";
                                                    userAttribute = "magni";
                                                    value = "aperiam";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "saepe";
                                                    property = "numquam";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("in", new FormBindingElement() {{
                                                        element = "officiis";
                                                        property = "beatae";
                                                    }});
                                                    put("laudantium", new FormBindingElement() {{
                                                        element = "exercitationem";
                                                        property = "praesentium";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "cum";
                                                    property = "laboriosam";
                                                }};
                                                componentName = "dolorum";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "error";
                                                    operand = "hic";
                                                    operandType = "expedita";
                                                    operator = "debitis";
                                                    property = "neque";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "dolorum";
                                                event = "nostrum";
                                                importedValue = "officia";
                                                model = "dolorum";
                                                property = "corrupti";
                                                type = "accusamus";
                                                userAttribute = "tempora";
                                                value = "atque";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "fugit";
                                                    property = "ut";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("voluptatem", new FormBindingElement() {{
                                                        element = "culpa";
                                                        property = "expedita";
                                                    }});
                                                    put("magnam", new FormBindingElement() {{
                                                        element = "consequatur";
                                                        property = "esse";
                                                    }});
                                                    put("ipsam", new FormBindingElement() {{
                                                        element = "sit";
                                                        property = "voluptatum";
                                                    }});
                                                    put("quas", new FormBindingElement() {{
                                                        element = "repudiandae";
                                                        property = "corporis";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "et";
                                                    property = "blanditiis";
                                                }};
                                                componentName = "ex";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "sit";
                                                    operand = "vel";
                                                    operandType = "nostrum";
                                                    operator = "saepe";
                                                    property = "error";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "consequatur";
                                                event = "incidunt";
                                                importedValue = "reiciendis";
                                                model = "dolorem";
                                                property = "harum";
                                                type = "dicta";
                                                userAttribute = "architecto";
                                                value = "occaecati";
                                            }};
                                            model = "labore";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "quidem";
                                                property = "atque";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "laborum";
                                                        property = "nam";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("laboriosam", new FormBindingElement() {{
                                                            element = "alias";
                                                            property = "amet";
                                                        }});
                                                        put("deserunt", new FormBindingElement() {{
                                                            element = "voluptate";
                                                            property = "unde";
                                                        }});
                                                        put("reiciendis", new FormBindingElement() {{
                                                            element = "provident";
                                                            property = "repellendus";
                                                        }});
                                                        put("delectus", new FormBindingElement() {{
                                                            element = "voluptates";
                                                            property = "perferendis";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "est";
                                                        property = "quidem";
                                                    }};
                                                    componentName = "reprehenderit";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "fuga";
                                                        operand = "praesentium";
                                                        operandType = "mollitia";
                                                        operator = "veniam";
                                                        property = "voluptatem";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "quisquam";
                                                    event = "repudiandae";
                                                    importedValue = "quasi";
                                                    model = "atque";
                                                    property = "reprehenderit";
                                                    type = "asperiores";
                                                    userAttribute = "totam";
                                                    value = "suscipit";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quidem";
                                                    property = "maxime";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("esse", new FormBindingElement() {{
                                                        element = "amet";
                                                        property = "assumenda";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "ea";
                                                    property = "atque";
                                                }};
                                                componentName = "error";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "officiis";
                                                    operand = "accusamus";
                                                    operandType = "natus";
                                                    operator = "minima";
                                                    property = "aspernatur";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "ex";
                                                event = "maiores";
                                                importedValue = "corrupti";
                                                model = "at";
                                                property = "error";
                                                type = "blanditiis";
                                                userAttribute = "suscipit";
                                                value = "repudiandae";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "atque";
                                                    property = "atque";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("recusandae", new FormBindingElement() {{
                                                        element = "dolorum";
                                                        property = "repellendus";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "labore";
                                                    property = "reiciendis";
                                                }};
                                                componentName = "doloremque";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "dicta";
                                                    operand = "accusantium";
                                                    operandType = "beatae";
                                                    operator = "dolores";
                                                    property = "enim";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "laboriosam";
                                                event = "velit";
                                                importedValue = "a";
                                                model = "molestias";
                                                property = "magnam";
                                                type = "saepe";
                                                userAttribute = "consequuntur";
                                                value = "occaecati";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "officiis";
                                                    property = "perspiciatis";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("adipisci", new FormBindingElement() {{
                                                        element = "eveniet";
                                                        property = "occaecati";
                                                    }});
                                                    put("consequuntur", new FormBindingElement() {{
                                                        element = "fugit";
                                                        property = "id";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quis";
                                                    property = "reprehenderit";
                                                }};
                                                componentName = "error";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "corporis";
                                                    operand = "quidem";
                                                    operandType = "eveniet";
                                                    operator = "non";
                                                    property = "vero";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "doloremque";
                                                event = "iure";
                                                importedValue = "ipsa";
                                                model = "totam";
                                                property = "quae";
                                                type = "molestiae";
                                                userAttribute = "eveniet";
                                                value = "qui";
                                            }};
                                        }};
                                    }});
                                }};
                                name = "cum";
                                properties = "iure";
                                sourceId = "necessitatibus";
                            }}),
                            add(new ComponentChild() {{
                                children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                    add(new ComponentChild() {{}}),
                                }};
                                componentType = "laborum";
                                events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                    put("voluptatum", new ComponentEvent() {{
                                        action = "rem";
                                        bindingEvent = "aliquam";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "ad";
                                                    property = "repellat";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("corporis", new FormBindingElement() {{
                                                        element = "perspiciatis";
                                                        property = "nihil";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "mollitia";
                                                    property = "voluptas";
                                                }};
                                                componentName = "alias";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "reiciendis";
                                                    operand = "dolores";
                                                    operandType = "id";
                                                    operator = "minima";
                                                    property = "dolore";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "dolorum";
                                                event = "nesciunt";
                                                importedValue = "quae";
                                                model = "recusandae";
                                                property = "omnis";
                                                type = "quaerat";
                                                userAttribute = "molestiae";
                                                value = "ex";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("culpa", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "adipisci";
                                                        property = "debitis";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("eum", new FormBindingElement() {{
                                                            element = "nemo";
                                                            property = "recusandae";
                                                        }});
                                                        put("esse", new FormBindingElement() {{
                                                            element = "provident";
                                                            property = "quis";
                                                        }});
                                                        put("eum", new FormBindingElement() {{
                                                            element = "reiciendis";
                                                            property = "provident";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "aspernatur";
                                                        property = "ullam";
                                                    }};
                                                    componentName = "quasi";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "nostrum";
                                                        operand = "mollitia";
                                                        operandType = "provident";
                                                        operator = "possimus";
                                                        property = "animi";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "ex";
                                                    event = "aliquid";
                                                    importedValue = "accusantium";
                                                    model = "repellat";
                                                    property = "doloribus";
                                                    type = "ullam";
                                                    userAttribute = "in";
                                                    value = "nam";
                                                }});
                                                put("earum", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "officia";
                                                        property = "laborum";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("modi", new FormBindingElement() {{
                                                            element = "voluptatibus";
                                                            property = "molestias";
                                                        }});
                                                        put("officiis", new FormBindingElement() {{
                                                            element = "sapiente";
                                                            property = "cumque";
                                                        }});
                                                        put("vitae", new FormBindingElement() {{
                                                            element = "rerum";
                                                            property = "tempora";
                                                        }});
                                                        put("quis", new FormBindingElement() {{
                                                            element = "inventore";
                                                            property = "fugit";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "cumque";
                                                        property = "quae";
                                                    }};
                                                    componentName = "perferendis";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "aspernatur";
                                                        operand = "eum";
                                                        operandType = "eius";
                                                        operator = "rem";
                                                        property = "at";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "impedit";
                                                    event = "eos";
                                                    importedValue = "sapiente";
                                                    model = "eum";
                                                    property = "dicta";
                                                    type = "minima";
                                                    userAttribute = "beatae";
                                                    value = "cupiditate";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "provident";
                                                    property = "earum";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("hic", new FormBindingElement() {{
                                                        element = "illum";
                                                        property = "eaque";
                                                    }});
                                                    put("earum", new FormBindingElement() {{
                                                        element = "perspiciatis";
                                                        property = "maiores";
                                                    }});
                                                    put("debitis", new FormBindingElement() {{
                                                        element = "aliquid";
                                                        property = "porro";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "suscipit";
                                                    property = "dolorem";
                                                }};
                                                componentName = "fugit";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "fuga";
                                                    operand = "ratione";
                                                    operandType = "animi";
                                                    operator = "necessitatibus";
                                                    property = "nulla";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "consequatur";
                                                event = "quasi";
                                                importedValue = "et";
                                                model = "ducimus";
                                                property = "natus";
                                                type = "occaecati";
                                                userAttribute = "suscipit";
                                                value = "adipisci";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quasi";
                                                    property = "magni";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("nulla", new FormBindingElement() {{
                                                        element = "necessitatibus";
                                                        property = "ipsa";
                                                    }});
                                                    put("tempora", new FormBindingElement() {{
                                                        element = "nihil";
                                                        property = "molestiae";
                                                    }});
                                                    put("dicta", new FormBindingElement() {{
                                                        element = "iusto";
                                                        property = "esse";
                                                    }});
                                                    put("praesentium", new FormBindingElement() {{
                                                        element = "maiores";
                                                        property = "reiciendis";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "vel";
                                                    property = "architecto";
                                                }};
                                                componentName = "fugiat";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "dicta";
                                                    operand = "odio";
                                                    operandType = "tempora";
                                                    operator = "esse";
                                                    property = "ex";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "consectetur";
                                                event = "aliquid";
                                                importedValue = "ipsa";
                                                model = "laborum";
                                                property = "sunt";
                                                type = "nostrum";
                                                userAttribute = "fugiat";
                                                value = "expedita";
                                            }};
                                            model = "aliquid";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "officia";
                                                property = "suscipit";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "aliquid";
                                                        property = "perferendis";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("voluptas", new FormBindingElement() {{
                                                            element = "iste";
                                                            property = "id";
                                                        }});
                                                        put("ab", new FormBindingElement() {{
                                                            element = "error";
                                                            property = "possimus";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "voluptates";
                                                        property = "mollitia";
                                                    }};
                                                    componentName = "laborum";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "ad";
                                                        operand = "deleniti";
                                                        operandType = "enim";
                                                        operator = "vitae";
                                                        property = "repellendus";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "ex";
                                                    event = "quo";
                                                    importedValue = "ex";
                                                    model = "ut";
                                                    property = "ad";
                                                    type = "expedita";
                                                    userAttribute = "voluptatem";
                                                    value = "molestias";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "cum";
                                                    property = "aliquid";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("voluptatum", new FormBindingElement() {{
                                                        element = "omnis";
                                                        property = "veritatis";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "rerum";
                                                    property = "est";
                                                }};
                                                componentName = "culpa";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "sapiente";
                                                    operand = "officiis";
                                                    operandType = "architecto";
                                                    operator = "fuga";
                                                    property = "pariatur";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "debitis";
                                                event = "voluptatem";
                                                importedValue = "alias";
                                                model = "deleniti";
                                                property = "earum";
                                                type = "ex";
                                                userAttribute = "sapiente";
                                                value = "rem";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "minus";
                                                    property = "nemo";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("ratione", new FormBindingElement() {{
                                                        element = "ullam";
                                                        property = "perferendis";
                                                    }});
                                                    put("illum", new FormBindingElement() {{
                                                        element = "totam";
                                                        property = "impedit";
                                                    }});
                                                    put("quibusdam", new FormBindingElement() {{
                                                        element = "nam";
                                                        property = "ipsam";
                                                    }});
                                                    put("culpa", new FormBindingElement() {{
                                                        element = "dolor";
                                                        property = "aliquam";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "inventore";
                                                    property = "deleniti";
                                                }};
                                                componentName = "veritatis";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "dolor";
                                                    operand = "consequatur";
                                                    operandType = "architecto";
                                                    operator = "sit";
                                                    property = "modi";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "fugit";
                                                event = "ab";
                                                importedValue = "laudantium";
                                                model = "quae";
                                                property = "dolor";
                                                type = "fugiat";
                                                userAttribute = "ipsam";
                                                value = "consequuntur";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "ipsa";
                                                    property = "quas";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("impedit", new FormBindingElement() {{
                                                        element = "officiis";
                                                        property = "esse";
                                                    }});
                                                    put("necessitatibus", new FormBindingElement() {{
                                                        element = "sed";
                                                        property = "veniam";
                                                    }});
                                                    put("nesciunt", new FormBindingElement() {{
                                                        element = "expedita";
                                                        property = "eum";
                                                    }});
                                                    put("vel", new FormBindingElement() {{
                                                        element = "voluptatum";
                                                        property = "magnam";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "exercitationem";
                                                    property = "ab";
                                                }};
                                                componentName = "porro";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "nobis";
                                                    operand = "laboriosam";
                                                    operandType = "recusandae";
                                                    operator = "consequuntur";
                                                    property = "voluptatem";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "exercitationem";
                                                event = "necessitatibus";
                                                importedValue = "quasi";
                                                model = "nisi";
                                                property = "at";
                                                type = "vero";
                                                userAttribute = "est";
                                                value = "harum";
                                            }};
                                        }};
                                    }});
                                    put("sequi", new ComponentEvent() {{
                                        action = "doloribus";
                                        bindingEvent = "repudiandae";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "optio";
                                                    property = "occaecati";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("voluptate", new FormBindingElement() {{
                                                        element = "blanditiis";
                                                        property = "officia";
                                                    }});
                                                    put("voluptas", new FormBindingElement() {{
                                                        element = "numquam";
                                                        property = "nemo";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quos";
                                                    property = "eius";
                                                }};
                                                componentName = "aspernatur";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "nesciunt";
                                                    operand = "fuga";
                                                    operandType = "laudantium";
                                                    operator = "incidunt";
                                                    property = "quasi";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "rem";
                                                event = "fugiat";
                                                importedValue = "dicta";
                                                model = "nisi";
                                                property = "consequuntur";
                                                type = "consectetur";
                                                userAttribute = "aperiam";
                                                value = "cupiditate";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("soluta", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "alias";
                                                        property = "omnis";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("occaecati", new FormBindingElement() {{
                                                            element = "iste";
                                                            property = "magni";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "inventore";
                                                        property = "fuga";
                                                    }};
                                                    componentName = "accusamus";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "distinctio";
                                                        operand = "omnis";
                                                        operandType = "delectus";
                                                        operator = "minima";
                                                        property = "praesentium";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "maxime";
                                                    event = "magnam";
                                                    importedValue = "temporibus";
                                                    model = "quos";
                                                    property = "commodi";
                                                    type = "itaque";
                                                    userAttribute = "commodi";
                                                    value = "totam";
                                                }});
                                                put("earum", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "modi";
                                                        property = "nam";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("voluptatem", new FormBindingElement() {{
                                                            element = "ipsam";
                                                            property = "vel";
                                                        }});
                                                        put("alias", new FormBindingElement() {{
                                                            element = "quasi";
                                                            property = "non";
                                                        }});
                                                        put("maiores", new FormBindingElement() {{
                                                            element = "enim";
                                                            property = "sint";
                                                        }});
                                                        put("nulla", new FormBindingElement() {{
                                                            element = "deserunt";
                                                            property = "esse";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "nemo";
                                                        property = "reprehenderit";
                                                    }};
                                                    componentName = "est";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "sint";
                                                        operand = "accusamus";
                                                        operandType = "impedit";
                                                        operator = "hic";
                                                        property = "necessitatibus";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "asperiores";
                                                    event = "ex";
                                                    importedValue = "voluptas";
                                                    model = "debitis";
                                                    property = "delectus";
                                                    type = "quae";
                                                    userAttribute = "minus";
                                                    value = "fuga";
                                                }});
                                                put("laborum", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "consectetur";
                                                        property = "velit";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("ipsum", new FormBindingElement() {{
                                                            element = "impedit";
                                                            property = "magni";
                                                        }});
                                                        put("soluta", new FormBindingElement() {{
                                                            element = "repudiandae";
                                                            property = "nam";
                                                        }});
                                                        put("dolore", new FormBindingElement() {{
                                                            element = "iusto";
                                                            property = "voluptate";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "sequi";
                                                        property = "dignissimos";
                                                    }};
                                                    componentName = "neque";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "deleniti";
                                                        operand = "quibusdam";
                                                        operandType = "iure";
                                                        operator = "odit";
                                                        property = "voluptatibus";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "vel";
                                                    event = "magnam";
                                                    importedValue = "quibusdam";
                                                    model = "inventore";
                                                    property = "facere";
                                                    type = "libero";
                                                    userAttribute = "architecto";
                                                    value = "voluptatibus";
                                                }});
                                                put("quia", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "porro";
                                                        property = "aliquam";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("illo", new FormBindingElement() {{
                                                            element = "accusantium";
                                                            property = "vel";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "ea";
                                                        property = "beatae";
                                                    }};
                                                    componentName = "vero";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "eum";
                                                        operand = "velit";
                                                        operandType = "ut";
                                                        operator = "perspiciatis";
                                                        property = "earum";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "dicta";
                                                    event = "impedit";
                                                    importedValue = "voluptatibus";
                                                    model = "iste";
                                                    property = "itaque";
                                                    type = "alias";
                                                    userAttribute = "nisi";
                                                    value = "itaque";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "velit";
                                                    property = "laborum";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("dolor", new FormBindingElement() {{
                                                        element = "iusto";
                                                        property = "sit";
                                                    }});
                                                    put("doloremque", new FormBindingElement() {{
                                                        element = "consequatur";
                                                        property = "officia";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "recusandae";
                                                    property = "ea";
                                                }};
                                                componentName = "quidem";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "facilis";
                                                    operand = "placeat";
                                                    operandType = "perspiciatis";
                                                    operator = "expedita";
                                                    property = "deleniti";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "a";
                                                event = "voluptate";
                                                importedValue = "ullam";
                                                model = "unde";
                                                property = "necessitatibus";
                                                type = "animi";
                                                userAttribute = "impedit";
                                                value = "ipsam";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "corporis";
                                                    property = "est";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("esse", new FormBindingElement() {{
                                                        element = "labore";
                                                        property = "veritatis";
                                                    }});
                                                    put("vero", new FormBindingElement() {{
                                                        element = "consectetur";
                                                        property = "vitae";
                                                    }});
                                                    put("inventore", new FormBindingElement() {{
                                                        element = "dolorem";
                                                        property = "ad";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "qui";
                                                    property = "iste";
                                                }};
                                                componentName = "ex";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "soluta";
                                                    operand = "libero";
                                                    operandType = "rem";
                                                    operator = "dolorum";
                                                    property = "odio";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "fugit";
                                                event = "alias";
                                                importedValue = "magni";
                                                model = "vel";
                                                property = "quae";
                                                type = "quae";
                                                userAttribute = "modi";
                                                value = "neque";
                                            }};
                                            model = "exercitationem";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "itaque";
                                                property = "et";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "ipsum";
                                                        property = "unde";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("distinctio", new FormBindingElement() {{
                                                            element = "maxime";
                                                            property = "quia";
                                                        }});
                                                        put("quia", new FormBindingElement() {{
                                                            element = "nostrum";
                                                            property = "omnis";
                                                        }});
                                                        put("libero", new FormBindingElement() {{
                                                            element = "dicta";
                                                            property = "id";
                                                        }});
                                                        put("libero", new FormBindingElement() {{
                                                            element = "fugiat";
                                                            property = "officia";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "quos";
                                                        property = "placeat";
                                                    }};
                                                    componentName = "sit";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "ipsa";
                                                        operand = "voluptates";
                                                        operandType = "inventore";
                                                        operator = "aperiam";
                                                        property = "totam";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "dolore";
                                                    event = "eligendi";
                                                    importedValue = "distinctio";
                                                    model = "voluptatem";
                                                    property = "autem";
                                                    type = "esse";
                                                    userAttribute = "dolores";
                                                    value = "assumenda";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "beatae";
                                                    property = "est";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("corrupti", new FormBindingElement() {{
                                                        element = "molestiae";
                                                        property = "provident";
                                                    }});
                                                    put("accusamus", new FormBindingElement() {{
                                                        element = "necessitatibus";
                                                        property = "tempore";
                                                    }});
                                                    put("sint", new FormBindingElement() {{
                                                        element = "ea";
                                                        property = "autem";
                                                    }});
                                                    put("ipsam", new FormBindingElement() {{
                                                        element = "rerum";
                                                        property = "laudantium";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "corporis";
                                                    property = "officiis";
                                                }};
                                                componentName = "voluptatibus";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "at";
                                                    operand = "alias";
                                                    operandType = "quia";
                                                    operator = "quidem";
                                                    property = "fuga";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "repudiandae";
                                                event = "accusantium";
                                                importedValue = "expedita";
                                                model = "officiis";
                                                property = "eos";
                                                type = "quibusdam";
                                                userAttribute = "odio";
                                                value = "praesentium";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "odit";
                                                    property = "explicabo";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("error", new FormBindingElement() {{
                                                        element = "earum";
                                                        property = "adipisci";
                                                    }});
                                                    put("recusandae", new FormBindingElement() {{
                                                        element = "similique";
                                                        property = "ut";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quidem";
                                                    property = "quis";
                                                }};
                                                componentName = "beatae";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "molestiae";
                                                    operand = "delectus";
                                                    operandType = "cupiditate";
                                                    operator = "fugit";
                                                    property = "numquam";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "numquam";
                                                event = "nesciunt";
                                                importedValue = "at";
                                                model = "officia";
                                                property = "dignissimos";
                                                type = "optio";
                                                userAttribute = "necessitatibus";
                                                value = "corporis";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "qui";
                                                    property = "expedita";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("cupiditate", new FormBindingElement() {{
                                                        element = "minima";
                                                        property = "placeat";
                                                    }});
                                                    put("enim", new FormBindingElement() {{
                                                        element = "neque";
                                                        property = "in";
                                                    }});
                                                    put("minus", new FormBindingElement() {{
                                                        element = "eum";
                                                        property = "modi";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "corporis";
                                                    property = "magnam";
                                                }};
                                                componentName = "voluptates";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "tempore";
                                                    operand = "aperiam";
                                                    operandType = "libero";
                                                    operator = "ratione";
                                                    property = "labore";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "totam";
                                                event = "occaecati";
                                                importedValue = "voluptas";
                                                model = "quo";
                                                property = "velit";
                                                type = "minus";
                                                userAttribute = "fuga";
                                                value = "nostrum";
                                            }};
                                        }};
                                    }});
                                    put("est", new ComponentEvent() {{
                                        action = "impedit";
                                        bindingEvent = "delectus";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "tempore";
                                                    property = "vero";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("repellat", new FormBindingElement() {{
                                                        element = "pariatur";
                                                        property = "nemo";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "reprehenderit";
                                                    property = "aperiam";
                                                }};
                                                componentName = "odio";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "in";
                                                    operand = "ducimus";
                                                    operandType = "excepturi";
                                                    operator = "dolores";
                                                    property = "error";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "veritatis";
                                                event = "ducimus";
                                                importedValue = "voluptate";
                                                model = "pariatur";
                                                property = "itaque";
                                                type = "similique";
                                                userAttribute = "optio";
                                                value = "ex";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("commodi", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "officiis";
                                                        property = "placeat";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("exercitationem", new FormBindingElement() {{
                                                            element = "quam";
                                                            property = "dolorem";
                                                        }});
                                                        put("modi", new FormBindingElement() {{
                                                            element = "ipsa";
                                                            property = "sint";
                                                        }});
                                                        put("vero", new FormBindingElement() {{
                                                            element = "sequi";
                                                            property = "repudiandae";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "cum";
                                                        property = "dicta";
                                                    }};
                                                    componentName = "earum";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "animi";
                                                        operand = "dolores";
                                                        operandType = "nam";
                                                        operator = "dicta";
                                                        property = "consequuntur";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "necessitatibus";
                                                    event = "nobis";
                                                    importedValue = "ipsa";
                                                    model = "ducimus";
                                                    property = "maiores";
                                                    type = "veritatis";
                                                    userAttribute = "quasi";
                                                    value = "laboriosam";
                                                }});
                                                put("pariatur", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "libero";
                                                        property = "excepturi";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("nemo", new FormBindingElement() {{
                                                            element = "aliquam";
                                                            property = "nostrum";
                                                        }});
                                                        put("doloribus", new FormBindingElement() {{
                                                            element = "eligendi";
                                                            property = "sint";
                                                        }});
                                                        put("enim", new FormBindingElement() {{
                                                            element = "hic";
                                                            property = "animi";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "quas";
                                                        property = "totam";
                                                    }};
                                                    componentName = "molestias";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "eaque";
                                                        operand = "saepe";
                                                        operandType = "architecto";
                                                        operator = "quos";
                                                        property = "iste";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "assumenda";
                                                    event = "tempore";
                                                    importedValue = "libero";
                                                    model = "velit";
                                                    property = "doloremque";
                                                    type = "delectus";
                                                    userAttribute = "impedit";
                                                    value = "cum";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "ipsum";
                                                    property = "adipisci";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("deserunt", new FormBindingElement() {{
                                                        element = "doloremque";
                                                        property = "quis";
                                                    }});
                                                    put("veniam", new FormBindingElement() {{
                                                        element = "libero";
                                                        property = "architecto";
                                                    }});
                                                    put("cupiditate", new FormBindingElement() {{
                                                        element = "molestiae";
                                                        property = "eligendi";
                                                    }});
                                                    put("possimus", new FormBindingElement() {{
                                                        element = "non";
                                                        property = "magnam";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "itaque";
                                                    property = "sed";
                                                }};
                                                componentName = "asperiores";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "consequuntur";
                                                    operand = "facere";
                                                    operandType = "laudantium";
                                                    operator = "odit";
                                                    property = "pariatur";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "amet";
                                                event = "exercitationem";
                                                importedValue = "ab";
                                                model = "velit";
                                                property = "facilis";
                                                type = "tempore";
                                                userAttribute = "nisi";
                                                value = "voluptatibus";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quaerat";
                                                    property = "blanditiis";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("nisi", new FormBindingElement() {{
                                                        element = "quis";
                                                        property = "nisi";
                                                    }});
                                                    put("libero", new FormBindingElement() {{
                                                        element = "minus";
                                                        property = "facere";
                                                    }});
                                                    put("facilis", new FormBindingElement() {{
                                                        element = "ipsum";
                                                        property = "ad";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "voluptatibus";
                                                    property = "voluptatibus";
                                                }};
                                                componentName = "consequuntur";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "labore";
                                                    operand = "rerum";
                                                    operandType = "eos";
                                                    operator = "reprehenderit";
                                                    property = "nostrum";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "neque";
                                                event = "iusto";
                                                importedValue = "est";
                                                model = "rem";
                                                property = "eligendi";
                                                type = "fugiat";
                                                userAttribute = "unde";
                                                value = "officiis";
                                            }};
                                            model = "ducimus";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "dolor";
                                                property = "dicta";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "error";
                                                        property = "porro";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("dignissimos", new FormBindingElement() {{
                                                            element = "esse";
                                                            property = "fugiat";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "ad";
                                                        property = "aspernatur";
                                                    }};
                                                    componentName = "enim";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "iusto";
                                                        operand = "dignissimos";
                                                        operandType = "libero";
                                                        operator = "illo";
                                                        property = "ab";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "incidunt";
                                                    event = "accusamus";
                                                    importedValue = "saepe";
                                                    model = "tempore";
                                                    property = "veniam";
                                                    type = "eos";
                                                    userAttribute = "reiciendis";
                                                    value = "earum";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "reprehenderit";
                                                    property = "praesentium";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("repellat", new FormBindingElement() {{
                                                        element = "quisquam";
                                                        property = "sequi";
                                                    }});
                                                    put("nihil", new FormBindingElement() {{
                                                        element = "deleniti";
                                                        property = "illo";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "labore";
                                                    property = "assumenda";
                                                }};
                                                componentName = "aliquam";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "provident";
                                                    operand = "laudantium";
                                                    operandType = "repudiandae";
                                                    operator = "consequatur";
                                                    property = "maxime";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "aspernatur";
                                                event = "nam";
                                                importedValue = "expedita";
                                                model = "quas";
                                                property = "provident";
                                                type = "repudiandae";
                                                userAttribute = "rerum";
                                                value = "dignissimos";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "corporis";
                                                    property = "vero";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("repellendus", new FormBindingElement() {{
                                                        element = "iure";
                                                        property = "dolorem";
                                                    }});
                                                    put("commodi", new FormBindingElement() {{
                                                        element = "impedit";
                                                        property = "commodi";
                                                    }});
                                                    put("aut", new FormBindingElement() {{
                                                        element = "voluptatem";
                                                        property = "ad";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quae";
                                                    property = "amet";
                                                }};
                                                componentName = "illum";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "quidem";
                                                    operand = "cum";
                                                    operandType = "amet";
                                                    operator = "quasi";
                                                    property = "dicta";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "laudantium";
                                                event = "doloremque";
                                                importedValue = "earum";
                                                model = "iusto";
                                                property = "amet";
                                                type = "provident";
                                                userAttribute = "dolorum";
                                                value = "necessitatibus";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "provident";
                                                    property = "repudiandae";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("nemo", new FormBindingElement() {{
                                                        element = "molestiae";
                                                        property = "itaque";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "facilis";
                                                    property = "corrupti";
                                                }};
                                                componentName = "aperiam";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "accusamus";
                                                    operand = "eos";
                                                    operandType = "totam";
                                                    operator = "dicta";
                                                    property = "voluptatem";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "velit";
                                                event = "dolor";
                                                importedValue = "sunt";
                                                model = "a";
                                                property = "dolor";
                                                type = "occaecati";
                                                userAttribute = "atque";
                                                value = "beatae";
                                            }};
                                        }};
                                    }});
                                }};
                                name = "at";
                                properties = "labore";
                                sourceId = "minus";
                            }}),
                            add(new ComponentChild() {{
                                children = new org.openapis.openapi.models.shared.ComponentChild[]{{
                                    add(new ComponentChild() {{}}),
                                    add(new ComponentChild() {{}}),
                                }};
                                componentType = "voluptatem";
                                events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                                    put("rerum", new ComponentEvent() {{
                                        action = "ea";
                                        bindingEvent = "aperiam";
                                        parameters = new ActionParameters() {{
                                            anchor = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "dignissimos";
                                                    property = "repellat";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("porro", new FormBindingElement() {{
                                                        element = "provident";
                                                        property = "consectetur";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "eligendi";
                                                    property = "dignissimos";
                                                }};
                                                componentName = "consectetur";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "natus";
                                                    operand = "temporibus";
                                                    operandType = "officia";
                                                    operator = "amet";
                                                    property = "tenetur";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "aspernatur";
                                                event = "quo";
                                                importedValue = "itaque";
                                                model = "illum";
                                                property = "laborum";
                                                type = "dignissimos";
                                                userAttribute = "vero";
                                                value = "qui";
                                            }};
                                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                                put("repellat", new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "explicabo";
                                                        property = "explicabo";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("nihil", new FormBindingElement() {{
                                                            element = "non";
                                                            property = "ab";
                                                        }});
                                                        put("illo", new FormBindingElement() {{
                                                            element = "hic";
                                                            property = "deserunt";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "delectus";
                                                        property = "non";
                                                    }};
                                                    componentName = "distinctio";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "exercitationem";
                                                        operand = "labore";
                                                        operandType = "numquam";
                                                        operator = "repudiandae";
                                                        property = "modi";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "in";
                                                    event = "explicabo";
                                                    importedValue = "accusamus";
                                                    model = "rem";
                                                    property = "aperiam";
                                                    type = "odit";
                                                    userAttribute = "deleniti";
                                                    value = "enim";
                                                }});
                                            }};
                                            global = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "voluptate";
                                                    property = "similique";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("libero", new FormBindingElement() {{
                                                        element = "magnam";
                                                        property = "sit";
                                                    }});
                                                    put("modi", new FormBindingElement() {{
                                                        element = "eum";
                                                        property = "nesciunt";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "mollitia";
                                                    property = "dignissimos";
                                                }};
                                                componentName = "fugiat";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "molestiae";
                                                    operand = "veniam";
                                                    operandType = "reiciendis";
                                                    operator = "ab";
                                                    property = "modi";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "aut";
                                                event = "aut";
                                                importedValue = "eveniet";
                                                model = "odio";
                                                property = "commodi";
                                                type = "numquam";
                                                userAttribute = "dolorum";
                                                value = "possimus";
                                            }};
                                            id = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "voluptate";
                                                    property = "consectetur";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("quaerat", new FormBindingElement() {{
                                                        element = "itaque";
                                                        property = "minus";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "sunt";
                                                    property = "distinctio";
                                                }};
                                                componentName = "iusto";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "et";
                                                    operand = "facilis";
                                                    operandType = "amet";
                                                    operator = "autem";
                                                    property = "fuga";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "alias";
                                                event = "rem";
                                                importedValue = "aut";
                                                model = "quos";
                                                property = "laudantium";
                                                type = "repellendus";
                                                userAttribute = "veritatis";
                                                value = "quae";
                                            }};
                                            model = "eaque";
                                            state = new MutationActionSetStateParameter() {{
                                                componentName = "saepe";
                                                property = "delectus";
                                                set = new ComponentProperty() {{
                                                    bindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "mollitia";
                                                        property = "nulla";
                                                    }};
                                                    bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                        put("sed", new FormBindingElement() {{
                                                            element = "voluptatem";
                                                            property = "alias";
                                                        }});
                                                        put("eveniet", new FormBindingElement() {{
                                                            element = "hic";
                                                            property = "voluptatem";
                                                        }});
                                                        put("incidunt", new FormBindingElement() {{
                                                            element = "qui";
                                                            property = "qui";
                                                        }});
                                                    }};
                                                    collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                        field = "necessitatibus";
                                                        property = "harum";
                                                    }};
                                                    componentName = "explicabo";
                                                    concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                        add(new ComponentProperty() {{}}),
                                                    }};
                                                    condition = new ComponentConditionProperty() {{
                                                        else_ = new ComponentProperty() {{}};
                                                        field = "aliquid";
                                                        operand = "modi";
                                                        operandType = "optio";
                                                        operator = "voluptatibus";
                                                        property = "molestias";
                                                        then = new ComponentProperty() {{}};
                                                    }};
                                                    configured = false;
                                                    defaultValue = "officia";
                                                    event = "libero";
                                                    importedValue = "totam";
                                                    model = "sequi";
                                                    property = "aliquid";
                                                    type = "ea";
                                                    userAttribute = "impedit";
                                                    value = "ducimus";
                                                }};
                                            }};
                                            target = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "odit";
                                                    property = "velit";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("repellat", new FormBindingElement() {{
                                                        element = "nulla";
                                                        property = "laborum";
                                                    }});
                                                    put("natus", new FormBindingElement() {{
                                                        element = "accusamus";
                                                        property = "doloremque";
                                                    }});
                                                    put("nisi", new FormBindingElement() {{
                                                        element = "rerum";
                                                        property = "recusandae";
                                                    }});
                                                    put("voluptates", new FormBindingElement() {{
                                                        element = "non";
                                                        property = "rem";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "quia";
                                                    property = "ullam";
                                                }};
                                                componentName = "quisquam";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "voluptatibus";
                                                    operand = "eligendi";
                                                    operandType = "quae";
                                                    operator = "officiis";
                                                    property = "architecto";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "architecto";
                                                event = "enim";
                                                importedValue = "optio";
                                                model = "rem";
                                                property = "perferendis";
                                                type = "facilis";
                                                userAttribute = "reiciendis";
                                                value = "a";
                                            }};
                                            type = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "iste";
                                                    property = "dicta";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("ullam", new FormBindingElement() {{
                                                        element = "dolore";
                                                        property = "modi";
                                                    }});
                                                    put("itaque", new FormBindingElement() {{
                                                        element = "maxime";
                                                        property = "modi";
                                                    }});
                                                    put("consequuntur", new FormBindingElement() {{
                                                        element = "assumenda";
                                                        property = "vero";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "doloribus";
                                                    property = "impedit";
                                                }};
                                                componentName = "porro";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "totam";
                                                    operand = "reiciendis";
                                                    operandType = "ab";
                                                    operator = "sint";
                                                    property = "nihil";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "esse";
                                                event = "iure";
                                                importedValue = "odio";
                                                model = "nesciunt";
                                                property = "debitis";
                                                type = "vel";
                                                userAttribute = "neque";
                                                value = "corporis";
                                            }};
                                            url = new ComponentProperty() {{
                                                bindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "voluptas";
                                                    property = "consequuntur";
                                                }};
                                                bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                    put("reprehenderit", new FormBindingElement() {{
                                                        element = "distinctio";
                                                        property = "eius";
                                                    }});
                                                    put("ipsa", new FormBindingElement() {{
                                                        element = "rem";
                                                        property = "maiores";
                                                    }});
                                                    put("accusantium", new FormBindingElement() {{
                                                        element = "veniam";
                                                        property = "saepe";
                                                    }});
                                                }};
                                                collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                    field = "neque";
                                                    property = "facere";
                                                }};
                                                componentName = "aliquam";
                                                concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                    add(new ComponentProperty() {{}}),
                                                }};
                                                condition = new ComponentConditionProperty() {{
                                                    else_ = new ComponentProperty() {{}};
                                                    field = "doloribus";
                                                    operand = "fugiat";
                                                    operandType = "est";
                                                    operator = "delectus";
                                                    property = "velit";
                                                    then = new ComponentProperty() {{}};
                                                }};
                                                configured = false;
                                                defaultValue = "vitae";
                                                event = "nesciunt";
                                                importedValue = "similique";
                                                model = "illo";
                                                property = "repellat";
                                                type = "nemo";
                                                userAttribute = "doloribus";
                                                value = "possimus";
                                            }};
                                        }};
                                    }});
                                }};
                                name = "unde";
                                properties = "incidunt";
                                sourceId = "explicabo";
                            }}),
                        }};
                        collectionProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentDataConfiguration>() {{
                            put("cupiditate", new ComponentDataConfiguration() {{
                                identifiers = new String[]{{
                                    add("alias"),
                                    add("quidem"),
                                    add("nesciunt"),
                                    add("commodi"),
                                }};
                                model = "sapiente";
                                predicate = new Predicate() {{
                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                        add(new Predicate() {{}}),
                                    }};
                                    field = "veniam";
                                    operand = "debitis";
                                    operator = "officia";
                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                        add(new Predicate() {{}}),
                                        add(new Predicate() {{}}),
                                        add(new Predicate() {{}}),
                                    }};
                                }};
                                sort = new org.openapis.openapi.models.shared.SortProperty[]{{
                                    add(new SortProperty() {{
                                        direction = "ASC";
                                        field = "tenetur";
                                    }}),
                                    add(new SortProperty() {{
                                        direction = "ASC";
                                        field = "libero";
                                    }}),
                                }};
                            }});
                            put("in", new ComponentDataConfiguration() {{
                                identifiers = new String[]{{
                                    add("ex"),
                                    add("minus"),
                                }};
                                model = "ab";
                                predicate = new Predicate() {{
                                    and = new org.openapis.openapi.models.shared.Predicate[]{{
                                        add(new Predicate() {{}}),
                                    }};
                                    field = "hic";
                                    operand = "nisi";
                                    operator = "quisquam";
                                    or = new org.openapis.openapi.models.shared.Predicate[]{{
                                        add(new Predicate() {{}}),
                                    }};
                                }};
                                sort = new org.openapis.openapi.models.shared.SortProperty[]{{
                                    add(new SortProperty() {{
                                        direction = "DESC";
                                        field = "minima";
                                    }}),
                                    add(new SortProperty() {{
                                        direction = "ASC";
                                        field = "qui";
                                    }}),
                                }};
                            }});
                        }};
                        componentType = "aliquid";
                        events = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentEvent>() {{
                            put("incidunt", new ComponentEvent() {{
                                action = "adipisci";
                                bindingEvent = "praesentium";
                                parameters = new ActionParameters() {{
                                    anchor = new ComponentProperty() {{
                                        bindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "dolor";
                                            property = "exercitationem";
                                        }};
                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                            put("facilis", new FormBindingElement() {{
                                                element = "impedit";
                                                property = "sit";
                                            }});
                                            put("nemo", new FormBindingElement() {{
                                                element = "culpa";
                                                property = "consequuntur";
                                            }});
                                            put("amet", new FormBindingElement() {{
                                                element = "deserunt";
                                                property = "modi";
                                            }});
                                        }};
                                        collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "veniam";
                                            property = "quod";
                                        }};
                                        componentName = "itaque";
                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                        }};
                                        condition = new ComponentConditionProperty() {{
                                            else_ = new ComponentProperty() {{}};
                                            field = "quisquam";
                                            operand = "enim";
                                            operandType = "doloribus";
                                            operator = "assumenda";
                                            property = "officiis";
                                            then = new ComponentProperty() {{}};
                                        }};
                                        configured = false;
                                        defaultValue = "architecto";
                                        event = "alias";
                                        importedValue = "culpa";
                                        model = "ipsa";
                                        property = "nobis";
                                        type = "necessitatibus";
                                        userAttribute = "quia";
                                        value = "dicta";
                                    }};
                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentProperty>() {{
                                        put("perspiciatis", new ComponentProperty() {{
                                            bindingProperties = new ComponentPropertyBindingProperties() {{
                                                field = "debitis";
                                                property = "ullam";
                                            }};
                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                put("accusantium", new FormBindingElement() {{
                                                    element = "perferendis";
                                                    property = "veritatis";
                                                }});
                                            }};
                                            collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                field = "provident";
                                                property = "cumque";
                                            }};
                                            componentName = "iure";
                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                add(new ComponentProperty() {{}}),
                                                add(new ComponentProperty() {{}}),
                                                add(new ComponentProperty() {{}}),
                                                add(new ComponentProperty() {{}}),
                                            }};
                                            condition = new ComponentConditionProperty() {{
                                                else_ = new ComponentProperty() {{}};
                                                field = "quod";
                                                operand = "nemo";
                                                operandType = "recusandae";
                                                operator = "velit";
                                                property = "magnam";
                                                then = new ComponentProperty() {{}};
                                            }};
                                            configured = false;
                                            defaultValue = "dignissimos";
                                            event = "laboriosam";
                                            importedValue = "sed";
                                            model = "odio";
                                            property = "natus";
                                            type = "provident";
                                            userAttribute = "cum";
                                            value = "doloribus";
                                        }});
                                        put("facilis", new ComponentProperty() {{
                                            bindingProperties = new ComponentPropertyBindingProperties() {{
                                                field = "quidem";
                                                property = "itaque";
                                            }};
                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                put("unde", new FormBindingElement() {{
                                                    element = "modi";
                                                    property = "perspiciatis";
                                                }});
                                                put("hic", new FormBindingElement() {{
                                                    element = "cum";
                                                    property = "aspernatur";
                                                }});
                                            }};
                                            collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                field = "libero";
                                                property = "nam";
                                            }};
                                            componentName = "incidunt";
                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                add(new ComponentProperty() {{}}),
                                                add(new ComponentProperty() {{}}),
                                                add(new ComponentProperty() {{}}),
                                                add(new ComponentProperty() {{}}),
                                            }};
                                            condition = new ComponentConditionProperty() {{
                                                else_ = new ComponentProperty() {{}};
                                                field = "quod";
                                                operand = "id";
                                                operandType = "saepe";
                                                operator = "autem";
                                                property = "quo";
                                                then = new ComponentProperty() {{}};
                                            }};
                                            configured = false;
                                            defaultValue = "nesciunt";
                                            event = "illum";
                                            importedValue = "nemo";
                                            model = "illum";
                                            property = "facilis";
                                            type = "non";
                                            userAttribute = "mollitia";
                                            value = "assumenda";
                                        }});
                                    }};
                                    global = new ComponentProperty() {{
                                        bindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "recusandae";
                                            property = "distinctio";
                                        }};
                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                            put("ad", new FormBindingElement() {{
                                                element = "facere";
                                                property = "laborum";
                                            }});
                                            put("eveniet", new FormBindingElement() {{
                                                element = "laborum";
                                                property = "incidunt";
                                            }});
                                            put("maxime", new FormBindingElement() {{
                                                element = "ipsam";
                                                property = "alias";
                                            }});
                                            put("suscipit", new FormBindingElement() {{
                                                element = "deserunt";
                                                property = "molestias";
                                            }});
                                        }};
                                        collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "laborum";
                                            property = "est";
                                        }};
                                        componentName = "occaecati";
                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                        }};
                                        condition = new ComponentConditionProperty() {{
                                            else_ = new ComponentProperty() {{}};
                                            field = "quo";
                                            operand = "perferendis";
                                            operandType = "fugit";
                                            operator = "aliquid";
                                            property = "magnam";
                                            then = new ComponentProperty() {{}};
                                        }};
                                        configured = false;
                                        defaultValue = "quaerat";
                                        event = "eligendi";
                                        importedValue = "hic";
                                        model = "nostrum";
                                        property = "officiis";
                                        type = "unde";
                                        userAttribute = "nulla";
                                        value = "error";
                                    }};
                                    id = new ComponentProperty() {{
                                        bindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "mollitia";
                                            property = "magnam";
                                        }};
                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                            put("esse", new FormBindingElement() {{
                                                element = "corrupti";
                                                property = "fuga";
                                            }});
                                            put("facere", new FormBindingElement() {{
                                                element = "impedit";
                                                property = "quasi";
                                            }});
                                        }};
                                        collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "deserunt";
                                            property = "quod";
                                        }};
                                        componentName = "laboriosam";
                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                            add(new ComponentProperty() {{}}),
                                        }};
                                        condition = new ComponentConditionProperty() {{
                                            else_ = new ComponentProperty() {{}};
                                            field = "voluptatem";
                                            operand = "facere";
                                            operandType = "necessitatibus";
                                            operator = "maxime";
                                            property = "consequatur";
                                            then = new ComponentProperty() {{}};
                                        }};
                                        configured = false;
                                        defaultValue = "eaque";
                                        event = "architecto";
                                        importedValue = "similique";
                                        model = "porro";
                                        property = "blanditiis";
                                        type = "quae";
                                        userAttribute = "magni";
                                        value = "officiis";
                                    }};
                                    model = "sed";
                                    state = new MutationActionSetStateParameter() {{
                                        componentName = "necessitatibus";
                                        property = "impedit";
                                        set = new ComponentProperty() {{
                                            bindingProperties = new ComponentPropertyBindingProperties() {{
                                                field = "ipsa";
                                                property = "excepturi";
                                            }};
                                            bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                                put("maiores", new FormBindingElement() {{
                                                    element = "laudantium";
                                                    property = "maiores";
                                                }});
                                                put("alias", new FormBindingElement() {{
                                                    element = "asperiores";
                                                    property = "rem";
                                                }});
                                                put("dicta", new FormBindingElement() {{
                                                    element = "suscipit";
                                                    property = "earum";
                                                }});
                                                put("doloribus", new FormBindingElement() {{
                                                    element = "velit";
                                                    property = "eius";
                                                }});
                                            }};
                                            collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                                field = "esse";
                                                property = "in";
                                            }};
                                            componentName = "eligendi";
                                            concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                                add(new ComponentProperty() {{}}),
                                            }};
                                            condition = new ComponentConditionProperty() {{
                                                else_ = new ComponentProperty() {{}};
                                                field = "neque";
                                                operand = "vero";
                                                operandType = "excepturi";
                                                operator = "accusantium";
                                                property = "qui";
                                                then = new ComponentProperty() {{}};
                                            }};
                                            configured = false;
                                            defaultValue = "impedit";
                                            event = "beatae";
                                            importedValue = "incidunt";
                                            model = "dicta";
                                            property = "odit";
                                            type = "corporis";
                                            userAttribute = "rerum";
                                            value = "alias";
                                        }};
                                    }};
                                    target = new ComponentProperty() {{
                                        bindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "error";
                                            property = "vel";
                                        }};
                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                            put("id", new FormBindingElement() {{
                                                element = "laboriosam";
                                                property = "ex";
                                            }});
                                        }};
                                        collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "quas";
                                            property = "veritatis";
                                        }};
                                        componentName = "ullam";
                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                            add(new ComponentProperty() {{}}),
                                        }};
                                        condition = new ComponentConditionProperty() {{
                                            else_ = new ComponentProperty() {{}};
                                            field = "similique";
                                            operand = "incidunt";
                                            operandType = "quam";
                                            operator = "magni";
                                            property = "deserunt";
                                            then = new ComponentProperty() {{}};
                                        }};
                                        configured = false;
                                        defaultValue = "delectus";
                                        event = "omnis";
                                        importedValue = "sed";
                                        model = "nesciunt";
                                        property = "maxime";
                                        type = "quis";
                                        userAttribute = "cupiditate";
                                        value = "aliquam";
                                    }};
                                    type = new ComponentProperty() {{
                                        bindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "excepturi";
                                            property = "maiores";
                                        }};
                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                            put("velit", new FormBindingElement() {{
                                                element = "reiciendis";
                                                property = "amet";
                                            }});
                                            put("nemo", new FormBindingElement() {{
                                                element = "ipsa";
                                                property = "quisquam";
                                            }});
                                            put("tenetur", new FormBindingElement() {{
                                                element = "quas";
                                                property = "molestiae";
                                            }});
                                        }};
                                        collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "aliquid";
                                            property = "asperiores";
                                        }};
                                        componentName = "a";
                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                        }};
                                        condition = new ComponentConditionProperty() {{
                                            else_ = new ComponentProperty() {{}};
                                            field = "perspiciatis";
                                            operand = "accusantium";
                                            operandType = "dicta";
                                            operator = "minus";
                                            property = "commodi";
                                            then = new ComponentProperty() {{}};
                                        }};
                                        configured = false;
                                        defaultValue = "eveniet";
                                        event = "porro";
                                        importedValue = "tempore";
                                        model = "quidem";
                                        property = "modi";
                                        type = "voluptates";
                                        userAttribute = "fugit";
                                        value = "eius";
                                    }};
                                    url = new ComponentProperty() {{
                                        bindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "sequi";
                                            property = "eligendi";
                                        }};
                                        bindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.FormBindingElement>() {{
                                            put("esse", new FormBindingElement() {{
                                                element = "blanditiis";
                                                property = "sint";
                                            }});
                                            put("repellat", new FormBindingElement() {{
                                                element = "a";
                                                property = "animi";
                                            }});
                                            put("maiores", new FormBindingElement() {{
                                                element = "itaque";
                                                property = "nulla";
                                            }});
                                            put("deserunt", new FormBindingElement() {{
                                                element = "corporis";
                                                property = "velit";
                                            }});
                                        }};
                                        collectionBindingProperties = new ComponentPropertyBindingProperties() {{
                                            field = "officiis";
                                            property = "enim";
                                        }};
                                        componentName = "officia";
                                        concat = new org.openapis.openapi.models.shared.ComponentProperty[]{{
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                            add(new ComponentProperty() {{}}),
                                        }};
                                        condition = new ComponentConditionProperty() {{
                                            else_ = new ComponentProperty() {{}};
                                            field = "eum";
                                            operand = "repudiandae";
                                            operandType = "accusantium";
                                            operator = "officia";
                                            property = "impedit";
                                            then = new ComponentProperty() {{}};
                                        }};
                                        configured = false;
                                        defaultValue = "quasi";
                                        event = "blanditiis";
                                        importedValue = "eius";
                                        model = "quisquam";
                                        property = "eos";
                                        type = "nobis";
                                        userAttribute = "natus";
                                        value = "minus";
                                    }};
                                }};
                            }});
                        }};
                        name = "quia";
                        overrides = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                            put("reprehenderit", new java.util.HashMap<String, String>() {{
                                put("quos", "corrupti");
                                put("amet", "molestiae");
                                put("amet", "laborum");
                                put("modi", "perferendis");
                            }});
                            put("necessitatibus", new java.util.HashMap<String, String>() {{
                                put("molestias", "dolore");
                            }});
                        }};
                        properties = "sunt";
                        schemaVersion = "maiores";
                        sourceId = "neque";
                        tags = new java.util.HashMap<String, String>() {{
                            put("earum", "veniam");
                        }};
                        variants = new org.openapis.openapi.models.shared.ComponentVariant[]{{
                            add(new ComponentVariant() {{
                                overrides = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                    put("exercitationem", new java.util.HashMap<String, String>() {{
                                        put("nihil", "ad");
                                        put("nisi", "tenetur");
                                    }});
                                }};
                                variantValues = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "nemo");
                                    put("suscipit", "pariatur");
                                }};
                            }}),
                            add(new ComponentVariant() {{
                                overrides = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                    put("quidem", new java.util.HashMap<String, String>() {{
                                        put("perferendis", "id");
                                        put("sapiente", "sed");
                                        put("possimus", "repellat");
                                        put("repudiandae", "architecto");
                                    }});
                                }};
                                variantValues = new java.util.HashMap<String, String>() {{
                                    put("pariatur", "harum");
                                }};
                            }}),
                        }};
                    }};
                }};
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "iure";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "minus";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
                appId = "velit";
                clientToken = "earum";
                environmentName = "praesentium";
            }}            

            CreateComponentResponse res = sdk.createComponent(req);

            if (res.createComponentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->